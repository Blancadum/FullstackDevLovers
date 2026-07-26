# Ejemplos de Código: Ineficiencias del Sistema de Breadcrumbs

---

## Problema 1: Duplicación Exacta de Lógica

### Código Duplicado 1: `/src/hooks/useBreadcrumb.js`

```javascript
// Líneas 16-100 de useBreadcrumb.js
export function useBreadcrumb() {
  const location = useLocation();
  const pathname = location.pathname;

  const paths = pathname.split('/').filter(Boolean);

  if (paths.length === 0) {
    return [];
  }

  const breadcrumbs = [];

  // Agregar Home
  breadcrumbs.push({
    label: 'Home',
    link: '/'
  });

  const moduleId = paths[0];
  const module = modulesWithLessons.find(m => m.id === moduleId);

  if (!module) {
    return breadcrumbs;
  }

  // Caso 1: Solo módulo (/git)
  if (paths.length === 1) {
    breadcrumbs.push({
      label: module.name,
      link: null
    });
    return breadcrumbs;
  }

  // Agregamos el módulo con enlace
  breadcrumbs.push({
    label: module.name,
    link: `/${moduleId}`
  });

  // Caso 2: Módulo + sección + lección (/git/avanzado/pull-requests)
  if (paths.length >= 2) {
    const sectionId = paths[1];
    let section = null;

    if (module.sections) {
      section = module.sections.find(s => s.id === sectionId);
    }

    if (section) {
      if (paths.length >= 3) {
        const sectionLink = module.sections
          ? `/${moduleId}?section=${sectionId}`
          : `/${moduleId}/${sectionId}`;

        breadcrumbs.push({
          label: section.name,
          link: sectionLink
        });

        const lessonPath = `/${paths.join('/')}`;
        const lesson = section.lessons.find(l => l.link === lessonPath);

        if (lesson) {
          breadcrumbs.push({
            label: lesson.title,
            link: null
          });
        }
      } else {
        breadcrumbs.push({
          label: section.name,
          link: null
        });
      }
    }
  }

  return breadcrumbs;
}
```

### Código Duplicado 2: `/src/components/Breadcrumb.jsx`

```javascript
// Líneas 51-126 de Breadcrumb.jsx - IDÉNTICO al anterior
export function generateBreadcrumbFromPath(pathname) {
  const paths = pathname.split('/').filter(Boolean);

  if (paths.length === 0) {
    return [];
  }

  const breadcrumbs = [];

  breadcrumbs.push({
    label: 'Home',
    link: '/'
  });

  const moduleId = paths[0];
  const module = modulesWithLessons.find(m => m.id === moduleId);

  if (!module) {
    return breadcrumbs;
  }

  if (paths.length === 1) {
    breadcrumbs.push({
      label: module.name,
      link: null
    });
    return breadcrumbs;
  }

  breadcrumbs.push({
    label: module.name,
    link: `/${moduleId}`
  });

  if (paths.length >= 2) {
    const sectionId = paths[1];
    let section = null;

    if (module.sections) {
      section = module.sections.find(s => s.id === sectionId);
    }

    if (section) {
      if (paths.length >= 3) {
        breadcrumbs.push({
          label: section.name,
          link: `/${moduleId}/${sectionId}`  // NOTA: Diferencia aquí
        });

        const lessonPath = `/${paths.join('/')}`;
        const lesson = section.lessons.find(l => l.link === lessonPath);

        if (lesson) {
          breadcrumbs.push({
            label: lesson.title,
            link: null
          });
        }
      } else {
        breadcrumbs.push({
          label: section.name,
          link: null
        });
      }
    }
  }

  return breadcrumbs;
}

// Líneas 128-130: Wrapper innecesario
export function generateBreadcrumbItems(pathname) {
  return generateBreadcrumbFromPath(pathname);
}
```

### Diferencias Sutiles

Hay una diferencia entre los dos (línea 71 vs 102):

**useBreadcrumb.js (línea 70-71):**
```javascript
const sectionLink = module.sections
  ? `/${moduleId}?section=${sectionId}`
  : `/${moduleId}/${sectionId}`;
```

**Breadcrumb.jsx (línea 101-102):**
```javascript
breadcrumbs.push({
  label: section.name,
  link: `/${moduleId}/${sectionId}`  // SIEMPRE usa esta forma
});
```

**Problema:** Los dos archivos generan URLs diferentes para la misma sección. ¿Cuál es correcta?

---

## Problema 2: Sin Memoization

### Código Actual (INEFICIENTE)

```javascript
// /src/hooks/useBreadcrumb.js - líneas 16-100
export function useBreadcrumb() {
  const location = useLocation();  // Se ejecuta cada render
  const pathname = location.pathname;

  const paths = pathname.split('/').filter(Boolean);  // O(n) cada render

  // ... más de 80 líneas de lógica ejecutadas CADA render ...

  const module = modulesWithLessons.find(m => m.id === moduleId);  // O(50) cada render
  section = module.sections.find(s => s.id === sectionId);         // O(15) cada render
  lesson = section.lessons.find(l => l.link === lessonPath);       // O(50) cada render

  return breadcrumbs;  // Nuevo array cada render
}
```

### Cómo Se Llama (193 páginas)

```javascript
// /src/pages/LessonArrays.jsx - línea 7
export function LessonArrays() {
  const breadcrumbs = useBreadcrumb();  // Recalcula TODO aquí

  // ... componente usa breadcrumbs ...
}

// /src/pages/LessonBashShell.jsx - línea 5
export function LessonBashShell() {
  const breadcrumbs = useBreadcrumb();  // Recalcula TODO aquí TAMBIÉN

  // ... 191 archivos más con el MISMO pattern ...
}
```

### Qué Debería Ser

```javascript
// Versión mejorada con useMemo
export function useBreadcrumb() {
  const location = useLocation();

  // Solo recalcula si pathname cambia
  return useMemo(() => {
    const pathname = location.pathname;
    const paths = pathname.split('/').filter(Boolean);

    // ... 80 líneas de lógica ...

    return breadcrumbs;
  }, [location.pathname]);  // Dependencia: solo pathname
}
```

**Impacto del cambio:**
- Sin memoization: Recalcula en cada render (desplazar mouse, escribir, etc.)
- Con memoization: Recalcula solo cuando pathname cambia

---

## Problema 3: Props No Utilizados

### Patrón en LessonTemplate

```javascript
// /src/components/LessonTemplate.jsx - línea 21-46
export function LessonTemplate({
  title,
  breadcrumbs,  // RECIBIDO PERO NO USADO
  sections = [],
  concepts = [],
  conceptsLabel = 'Conceptos',
  exercises = [],
  keyPoints = [],
  summary = '',
  glossary = [],
  moduleSections = [],
  themeColor = '#0066cc'
}) {
  const [selectedExercise, setSelectedExercise] = useState(null);

  const finalTitle = title || (sections.length > 0 ? sections[0].title : 'Lección');
  const anchors = [];
  if (sections.length > 0) anchors.push({ label: 'Contenido', id: 'contenido' });
  if (concepts.length > 0) anchors.push({ label: conceptsLabel, id: 'conceptos' });
  if (exercises.length > 0) anchors.push({ label: 'Ejercicios', id: 'ejercicios' });

  return (
    <LessonLayout breadcrumbs={breadcrumbs} title={finalTitle}>
      {/* breadcrumbs NO se usan en el render aquí */}
      {/* Se pasa a LessonLayout pero... */}
    </LessonLayout>
  );
}
```

### LessonLayout No Lo Recibe

```javascript
// /src/components/LessonLayout.jsx - línea 4-14
export function LessonLayout({
  title,
  description,
  children,
  seoTitle,
  seoDescription,
  seoKeywords,
  url,
  showTableOfContents = true,
  showHeader = true
  // NOTE: No hay breadcrumbs aquí
}) {
  return (
    <>
      <SEO ... />
      <div className="lesson-layout">
        <article className="lesson-article">
          {showHeader && (
            <header className="lesson-header">
              <h1>{title}</h1>
              {description && <p className="lesson-subtitle">{description}</p>}
            </header>
          )}
          {/* breadcrumbs nunca se renderizan aquí */}
          <div className="lesson-main">
            {showTableOfContents && <TableOfContents ... />}
            <div className="lesson-body" id="lesson-content">
              {children}
            </div>
          </div>
        </article>
      </div>
    </>
  );
}
```

### Flujo Real Vs Esperado

**Flujo actual:**
```
LessonArrays.jsx
  ├─ const breadcrumbs = useBreadcrumb()  [CÁLCULO]
  └─ <LessonTemplate breadcrumbs={breadcrumbs}>
      └─ <LessonLayout breadcrumbs={breadcrumbs}>  [RECIBIDO PERO IGNORADO]
          └─ No hace nada con breadcrumbs
```

**Flujo esperado si se usara:**
```
LessonArrays.jsx
  ├─ const breadcrumbs = useBreadcrumb()
  └─ <LessonTemplate breadcrumbs={breadcrumbs}>
      └─ <LessonLayout breadcrumbs={breadcrumbs}>
          └─ <Breadcrumb items={breadcrumbs} />  [RENDERIZADO]
```

**Problema:** El renderizado esperado nunca sucede en LessonLayout.

---

## Problema 4: Búsquedas O(n) Sin Optimización

### Operación 1: Encontrar módulo (línea 35)

```javascript
// /src/hooks/useBreadcrumb.js - línea 35
const moduleId = paths[0];  // Por ejemplo: 'java-fundamentos'
const module = modulesWithLessons.find(m => m.id === moduleId);

// Internamente:
// Para moduleId = 'java-fundamentos'
// Busca linealmente en array de 50 módulos:
// - ¿m.id == 'aws'? No
// - ¿m.id == 'docker'? No
// - ¿m.id == 'git'? No
// ...
// - ¿m.id == 'java-fundamentos'? Sí! (encontrado en iteración 30)

// En peor caso: 50 comparaciones
// Mejor caso: 1 comparación (si es el primero)
// Promedio: 25 comparaciones
```

### Operación 2: Encontrar sección (línea 62)

```javascript
// /src/hooks/useBreadcrumb.js - línea 62
const sectionId = paths[1];  // Por ejemplo: 'tipos-datos'
let section = null;

if (module.sections) {
  section = module.sections.find(s => s.id === sectionId);
}

// Internamente:
// Para module = java-fundamentos
// Busca linealmente en array de ~15 secciones:
// - ¿s.id == 'introduccion'? No
// - ¿s.id == 'conceptos'? No
// ...
// - ¿s.id == 'tipos-datos'? Sí! (encontrado en iteración 8)

// En peor caso: 15 comparaciones
// Promedio: 8 comparaciones
```

### Operación 3: Encontrar lección (línea 81)

```javascript
// /src/hooks/useBreadcrumb.js - línea 81
const lessonPath = `/${paths.join('/')}`;  // '/java-fundamentos/tipos-datos'
const lesson = section.lessons.find(l => l.link === lessonPath);

// Internamente:
// Para section = tipos-datos
// Busca linealmente en array de ~20 lecciones:
// - ¿l.link == '/java-fundamentos/tipos-datos-primitivos'? No
// - ¿l.link == '/java-fundamentos/tipos-datos-objetos'? No
// ...
// - ¿l.link == '/java-fundamentos/tipos-datos'? Sí! (encontrado en iteración 10)

// En peor caso: 20 comparaciones
// Promedio: 10 comparaciones
```

### Total por Render

```javascript
// Cada render de una página Lesson:
// Búsqueda 1: 25 comparaciones promedio
// Búsqueda 2: 8 comparaciones promedio
// Búsqueda 3: 10 comparaciones promedio
// ---
// Total: 43 comparaciones por render

// En 193 páginas: 43 × 193 = 8,299 comparaciones por ciclo
// Sin memoization: Se repite en cada render, hover, scroll, etc.
```

### Solución: Usar Map

```javascript
// Alternativa eficiente con Map
const moduleMap = new Map(modulesWithLessons.map(m => [m.id, m]));
const module = moduleMap.get(moduleId);  // O(1) instead of O(n)

// Dentro del módulo:
if (module?.sections) {
  const sectionMap = new Map(module.sections.map(s => [s.id, s]));
  const section = sectionMap.get(sectionId);  // O(1) instead of O(n)

  if (section?.lessons) {
    const lessonMap = new Map(section.lessons.map(l => [l.link, l]));
    const lesson = lessonMap.get(lessonPath);  // O(1) instead of O(n)
  }
}
```

**Mejora:** O(50 + 15 + 20) = O(85) → O(1 + 1 + 1) = O(3)

---

## Problema 5: Cálculo Redundante en Componente

### Breadcrumb.jsx: Fallback Innecesario

```javascript
// /src/components/Breadcrumb.jsx - línea 5-41
export function Breadcrumb({ items }) {
  const location = useLocation();

  // Si se proporcionan items, usarlos; si no, generar automáticamente
  const breadcrumbItems = items && items.length > 0
    ? items
    : generateBreadcrumbFromPath(location.pathname);  // CÁLCULO REDUNDANTE AQUÍ

  // Mostrar breadcrumb solo si hay items y no está vacío
  if (!breadcrumbItems || breadcrumbItems.length === 0) {
    return (
      <nav className="breadcrumb" aria-label="breadcrumb">
        <ol className="breadcrumb-list">
          <li className="breadcrumb-item">
            <Link to="/">Home</Link>
          </li>
        </ol>
      </nav>
    );
  }

  return (
    <nav className="breadcrumb" aria-label="breadcrumb">
      <ol className="breadcrumb-list">
        {breadcrumbItems.map((item, index) => (
          <li key={index} className="breadcrumb-item">
            {item.link ? (
              <Link to={item.link}>{item.label}</Link>
            ) : (
              <span className="breadcrumb-current">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
```

### Problema en Práctica

```javascript
// Escenario 1: Si Navbar pasa items
<Navbar breadcrumbs={breadcrumbs} />
  └─ <Breadcrumb items={breadcrumbs} />
      └─ Usa los items proporcionados ✓

// Escenario 2: Si Navbar NO pasa items (undefined)
<Navbar breadcrumbs={undefined} />
  └─ <Breadcrumb items={undefined} />
      └─ Ejecuta generateBreadcrumbFromPath(location.pathname)
          └─ 80+ líneas de lógica ejecutadas NUEVAMENTE
          └─ Duplica el cálculo ya hecho en la página ✗
```

### Lugares donde se pasa undefined

**App.jsx:**
```javascript
// No pasa breadcrumbs a Header/Navbar
import { Header, Footer, ScrollToTop, PageTransition, AutoScrollToTop } from './components';
// Header/Navbar probablemente no recibe breadcrumbs aquí
```

---

## Problema 6: Clave de Map Débil

### Código Actual

```javascript
// /src/components/Breadcrumb.jsx - línea 29-37
{breadcrumbItems.map((item, index) => (
  <li key={index} className="breadcrumb-item">  // ⚠️ Usar index como key
    {item.link ? (
      <Link to={item.link}>{item.label}</Link>
    ) : (
      <span className="breadcrumb-current">{item.label}</span>
    )}
  </li>
))}
```

### Por Qué Es Problema

```javascript
// Ejemplo: Cambio en el array de breadcrumbs

// Primer render:
[
  { label: 'Home', link: '/' },          // key=0
  { label: 'Java', link: '/java' },      // key=1
  { label: 'Arrays', link: null }        // key=2
]

// Navegación a otra página:
[
  { label: 'Home', link: '/' },          // key=0 (reutiliza el mismo <li>)
  { label: 'Docker', link: '/docker' },  // key=1 (reutiliza <li> del 'Java' anterior!)
  { label: 'Intro', link: null }         // key=2
]

// React ve:
// - key=0: misma posición, se reutiliza (correcto)
// - key=1: misma posición, se reutiliza (¡INCORRECTO! Era 'Java', ahora es 'Docker')
// - key=2: misma posición, se reutiliza (¡INCORRECTO! Era 'Arrays', ahora es 'Intro')

// Resultado: Re-renderizado innecesario, posible pérdida de estado
```

### Solución

```javascript
// Usar una clave estable basada en los datos
{breadcrumbItems.map((item, index) => (
  <li key={`${item.label}-${item.link || 'current'}`} className="breadcrumb-item">
    // O mejor aún:
    // key={`breadcrumb-${index}`}  // Si el orden nunca cambia
    // key={item.link || `current-${index}`}  // Híbrido seguro
  </li>
))}
```

---

## Resumen de Ejemplos de Código

| Problema | Archivo | Línea | Tipo | Solución |
|----------|---------|------|------|----------|
| Duplicación | useBreadcrumb.js + Breadcrumb.jsx | 16-100 + 51-126 | 80 líneas idénticas | Unificar en 1 función |
| Sin memoization | useBreadcrumb.js | 16-100 | Todo se ejecuta cada render | Agregar useMemo |
| Props fantasma | LessonTemplate.jsx | 23, 46 | Recibe pero no usa | Eliminar prop |
| Búsquedas O(n) | useBreadcrumb.js | 35, 62, 81 | 3 × find() | Usar Map |
| Fallback redundante | Breadcrumb.jsx | 9-11 | Cálculo adicional | Siempre recibir como prop |
| Clave débil | Breadcrumb.jsx | 30 | key={index} | key={stableValue} |

