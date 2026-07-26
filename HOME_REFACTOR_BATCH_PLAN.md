# Home Refactor - Plan de Ejecución en Batch
**Versión:** 1.0
**Fecha:** 2026-07-24
**Estado:** Listo para ejecución paralela

---

## 📋 Resumen de Cambios

### Alcance
Refactorizar la página Home de una estructura monolítica a una arquitectura de componentes profesional, modular y reutilizable. Introducir nuevas secciones interactivas para mejorar UX y navigation.

### Impacto General
- **Antes:** Home con componentes genéricos (Hero → CategoryButtons → ModulesSection)
- **Después:** Home componentizada con: Hero Mejorado + Quick Access + Stack Catalog + Test Orientador + ModulesSection extendida

### Modificaciones Principales
1. **Hero.jsx**: Integración de parallax, búsqueda integrada, botones CTA
2. **Nuevos componentes**: QuickAccessCards, StackCatalogSection, TestOrientador
3. **Home.jsx**: Restructuración de layout y composición
4. **Eliminación**: Renombres de "dominar" a "conquistar/aprender/hábil"
5. **Styling**: Separación de CSS modular por componente

---

## 🎯 Objetivos Clave

| Objetivo | Métrica | Dependencia |
|----------|---------|------------|
| Mejorar Hero con parallax + búsqueda integrada | Implementar efectos visuales | Requiere CSS + JS |
| Crear acceso rápido a categorías | 6-8 tarjetas interactivas | Independent |
| Renombrar catálogo a "Stack" | Actualizar nomenclatura | Low |
| Test/Orientador para usuarios nuevos | Componente interactivo | Independent |
| Modularizar componentes | Código reutilizable | High |

---

## 📦 Descomposición en Unidades de Trabajo

### Unidad 1: Hero Mejorado con Parallax y Búsqueda
**Duración Estimada:** 45-60 min
**Dependencias:** Ninguna (independent)
**Prioridad:** CRÍTICA - Bloqueante para otras secciones

#### Archivos a Crear/Modificar
```
CREATE:
- src/components/HeroImproved.jsx (nuevo componente)
- src/components/HeroImproved.css (estilos parallax)

MODIFY:
- src/components/Hero.jsx (deprecar, mantener fallback)
- src/pages/Home.jsx (importar HeroImproved)
```

#### Tareas Específicas
1. **Estructura del componente (15 min)**
   - Crear `HeroImproved.jsx` con:
     - Contenedor con fondo parallax (posición fixed, background-attachment)
     - Integración de ClusterSearch dentro del Hero
     - Capa overlay para legibilidad
     - Botones CTA: "Aprende ya" y "Test rápido"

2. **Estilos CSS (20 min)**
   - Parallax effect: `background-attachment: fixed`
   - Marco visual: bordes sutiles + sombras
   - Responsive: Desactivar parallax en mobile (<768px)
   - Hover states para botones
   - Transiciones suaves (0.3s ease-in-out)

3. **Integración de búsqueda (10 min)**
   - Mover `ClusterSearch` dentro de Hero
   - Posicionar entre título y descripción
   - Ajustar tamaño de input para Hero context

4. **Testing & Validation (10 min)**
   - Verificar parallax en desktop
   - Testing responsive (tablet, mobile)
   - Validar accesibilidad (focus states, alt text)

#### Código Base (Template)
```jsx
// HeroImproved.jsx
import { ClusterSearch } from './ClusterSearch';
import './HeroImproved.css';

export function HeroImproved() {
  return (
    <>
      <header className="hero-improved">
        <div className="hero-background"></div>
        <div className="hero-overlay"></div>

        <div className="hero-content">
          <div className="hero-frame">
            <h1 className="hero-title">
              <span className="highlight">Fullstack Dev Lovers</span>
            </h1>
            <p className="hero-subtitle">
              Aprende Backend, DevOps y Cloud. Java, Spring Boot, Docker, AWS y mucho más
            </p>

            <div className="hero-search-wrapper">
              <ClusterSearch />
            </div>

            <div className="hero-cta-buttons">
              <button className="cta-button primary" onClick={() => window.location.hash = '#stack'}>
                Aprende ya
              </button>
              <button className="cta-button secondary" onClick={() => window.location.hash = '#test'}>
                Test rápido
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
```

#### Criterios de Aceptación
- [ ] Parallax visible en desktop (background-attachment: fixed)
- [ ] Búsqueda integrada y funcional
- [ ] Botones CTA con navegación anchor
- [ ] Responsive sin parallax en mobile
- [ ] Contraste accesible (WCAG AA)
- [ ] Sin errores en consola

---

### Unidad 2: Componente QuickAccessCards (Accesos Rápidos)
**Duración Estimada:** 40-50 min
**Dependencias:** Ninguna (independent)
**Prioridad:** ALTA

#### Archivos a Crear/Modificar
```
CREATE:
- src/components/QuickAccessCards.jsx
- src/components/QuickAccessCards.css

MODIFY:
- src/pages/Home.jsx (agregar componente)
- src/components/index.js (exportar nuevo componente)
```

#### Tareas Específicas
1. **Estructura del componente (15 min)**
   - Crear grid de 6-8 tarjetas interactivas
   - Cada tarjeta: ícono + nombre + descripción breve + link
   - Usar datos de `moduleCategories`
   - Filtrar solo categorías principales (excluir casos-practicos)

2. **Tarjetas dinámicas (10 min)**
   - Mapping de moduleCategories
   - Color personalizado por categoría
   - Logo/ícono de la categoría
   - Efecto hover: elevation + color shift

3. **Estilos CSS (15 min)**
   - Grid responsivo: 2 col (mobile) → 3 col (tablet) → 4 col (desktop)
   - Card styling: borde sutil, sombra, border-radius
   - Hover effect: transform scale + shadow increase
   - Transición smooth 0.3s

4. **Accessibility (10 min)**
   - Links semánticos con aria-label
   - Keyboard navigation (tab accessible)
   - Focus visible states

#### Código Base
```jsx
// QuickAccessCards.jsx
import { Link } from 'react-router-dom';
import { moduleCategories } from '../config/moduleCategories';
import './QuickAccessCards.css';

const categoryRoutes = {
  'backend': '/backend',
  'frontend': '/frontend',
  'datos': '/datos',
  'versionamiento': '/versionamiento',
  'containerizacion': '/cloud',
  'herramientas': '/metodologias-herramientas'
};

export function QuickAccessCards() {
  const mainCategories = moduleCategories.filter(cat =>
    !['casos-practicos'].includes(cat.id)
  );

  return (
    <section className="quick-access" id="quick-access">
      <div className="container">
        <h2>Accesos Directos</h2>
        <p className="section-subtitle">Navega rápido a las categorías principales</p>

        <div className="quick-access-grid">
          {mainCategories.map((category) => (
            <Link
              key={category.id}
              to={categoryRoutes[category.id]}
              className="quick-access-card"
              style={{ '--card-color': category.color }}
              title={category.description}
            >
              <div className="card-icon">
                {category.logoSrc ? (
                  <img src={category.logoSrc} alt={category.name} />
                ) : (
                  <span>{category.icon}</span>
                )}
              </div>
              <h3>{category.name}</h3>
              <p>{category.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
```

#### Criterios de Aceptación
- [ ] 6-8 tarjetas renderizadas correctamente
- [ ] Grid responsivo en 3 breakpoints
- [ ] Hover effects funcionales
- [ ] Links navegables a categorías
- [ ] Sin errores de rendering
- [ ] Accesibilidad verificada

---

### Unidad 3: StackCatalogSection (Renombramiento de Catálogo)
**Duración Estimada:** 30-40 min
**Dependencias:** Módulo 1 (opcional, para context)
**Prioridad:** MEDIA

#### Archivos a Crear/Modificar
```
MODIFY:
- src/components/ModulesSection.jsx (refactor + renombrar)
- src/components/ModulesSection.css (actualizar estilos)
- src/pages/Home.jsx (importar con nuevo nombre)
```

#### Tareas Específicas
1. **Refactor de ModulesSection (15 min)**
   - Renombrar internamente a StackCatalogSection
   - Cambiar título: "Catálogo de Tecnologías" → "Un stack para dominar el mundo"
   - Mantener backward compatibility (export ambos)
   - Actualizar subtítulo: agregar emoji/descripción

2. **Nomenclatura (10 min)**
   - Auditar strings que usan "dominar"
   - Excepto "Un stack para dominar el mundo" (esta se mantiene)
   - Cambiar a: "conquistar", "aprender", "ser hábil con"
   - Buscar/reemplazar en descripciones

3. **Visual updates (10 min)**
   - Mejorar spacing y padding
   - Actualizar colores si es necesario
   - Añadir subtle gradient al header

4. **Testing (5 min)**
   - Verificar todos los links funcionan
   - Testing responsive
   - No romper navegación existente

#### Cambios de Nomenclatura (Exactos)
```javascript
// BUSCAR Y REEMPLAZAR (case-insensitive)
"dominar" → "conquistar" (excepto en título principal)
"mastering" → "mastering the stack" (context)
"Aprende a dominar" → "Aprende a conquistar"
```

#### Criterios de Aceptación
- [ ] Título actualizado a "Un stack para dominar el mundo"
- [ ] No hay otros "dominar" en la sección (excepto el título)
- [ ] Backward compatibility mantenida
- [ ] Estilos visuales mejorados
- [ ] No rompe existentes componentes

---

### Unidad 4: TestOrientadorComponent (Test Orientador)
**Duración Estimada:** 60-75 min
**Dependencias:** Ninguna (independent)
**Prioridad:** MEDIA-ALTA

#### Archivos a Crear/Modificar
```
CREATE:
- src/components/TestOrientador.jsx
- src/components/TestOrientador.css
- src/data/testOrientadorQuestions.js (data)

MODIFY:
- src/pages/Home.jsx (agregar sección)
- src/components/index.js (exportar)
```

#### Tareas Específicas
1. **Estructura de datos (10 min)**
   - Crear `testOrientadorQuestions.js` con:
     - 5-7 preguntas de múltiple choice
     - Mapeo de respuestas a categorías recomendadas
     - Puntuación por categoría

2. **Componente TestOrientador (30 min)**
   - Estados: intro → preguntas → resultados
   - Mostrar pregunta + 3-4 opciones
   - Calcular score por categoría
   - Mostrar recomendaciones personalizadas
   - Botón "Empezar mi ruta" con link a categoría

3. **Estilos CSS (15 min)**
   - Card styling para preguntas
   - Radio buttons personalizados
   - Animaciones de transición entre preguntas
   - Resultados en cards coloridas (por categoría)

4. **Interactividad (10 min)**
   - Next/Previous buttons
   - Validación (no permitir avanzar sin seleccionar)
   - Progress bar
   - Reset test

#### Preguntas Base (Template)
```javascript
// testOrientadorQuestions.js
export const testOrientadorQuestions = [
  {
    id: 1,
    question: "¿Cuál es tu nivel de experiencia en programación?",
    options: [
      { text: "Soy completamente nuevo", category: 'java', weight: 1 },
      { text: "Tengo experiencia básica", category: 'java', weight: 2 },
      { text: "Tengo experiencia intermedia", category: 'spring-boot', weight: 2 },
      { text: "Soy avanzado", category: 'aws', weight: 3 }
    ]
  },
  // ... más preguntas
];
```

#### Criterios de Aceptación
- [ ] 5-7 preguntas funcionales
- [ ] Cálculo de scores correcto
- [ ] Recomendaciones personalizadas mostradas
- [ ] Navegación entre preguntas suave
- [ ] Progress bar visible
- [ ] Estilos atractivos
- [ ] Mobile responsive

---

### Unidad 5: Actualizar Home.jsx (Orquestación)
**Duración Estimada:** 20-30 min
**Dependencias:** Todas las unidades anteriores (1-4)
**Prioridad:** CRÍTICA - Se ejecuta al final

#### Archivos a Modificar
```
MODIFY:
- src/pages/Home.jsx (composición)
- src/components/index.js (exportar nuevos)
```

#### Tareas Específicas
1. **Actualizar imports (5 min)**
   - Importar HeroImproved en lugar de Hero
   - Importar QuickAccessCards
   - Importar TestOrientador
   - Mantener ModulesSection / StackCatalogSection

2. **Restructurar layout (10 min)**
   - Orden: HeroImproved → QuickAccessCards → TestOrientador → ModulesSection → SEO (top)
   - Agregar id anchors (#stack, #test, etc.)
   - Spacing entre secciones

3. **Actualizar SEO (5 min)**
   - Mejorar descripción en SEO component
   - Agregar keywords nuevas (test, orientador, ruta)
   - Actualizar title si es necesario

4. **Testing final (10 min)**
   - Verificar flujo completo
   - No hay imports duplicados
   - Toda la navegación funciona
   - Console limpia

#### Código Base
```jsx
// Home.jsx (nueva estructura)
import { HeroImproved } from '../components/HeroImproved';
import { QuickAccessCards } from '../components/QuickAccessCards';
import { TestOrientador } from '../components/TestOrientador';
import { ModulesSection } from '../components/ModulesSection';
import { SEO } from '../components';
import './Home.css';

export function Home() {
  return (
    <>
      <SEO
        title="Fullstack Dev Lovers - Aprende Backend, DevOps y Cloud"
        description="Plataforma educativa: Hero mejorado, test orientador, accesos rápidos y catálogo completo. Java, Spring Boot, Docker, AWS, SQL, Git, Patrones de Diseño y más."
        keywords="Fullstack Developer, Test Orientador, Ruta Aprendizaje, Java Backend, Docker, AWS"
        url="https://fullstackdevlovers.com"
      />
      <HeroImproved />
      <QuickAccessCards />
      <TestOrientador />
      <ModulesSection />
    </>
  );
}
```

#### Criterios de Aceptación
- [ ] Todos los componentes renderizados
- [ ] Orden correcto de secciones
- [ ] Navegación de anchors funciona
- [ ] Sin errores de React
- [ ] Sin imports duplicados
- [ ] Console limpia

---

### Unidad 6: CSS Global & Optimizaciones (Opcional)
**Duración Estimada:** 20-30 min
**Dependencias:** Todas las unidades
**Prioridad:** BAJA

#### Archivos a Modificar
```
MODIFY:
- src/global.css (si aplica)
- src/pages/Home.css (actualizar si existe)
```

#### Tareas Específicas
1. **Unificar variables CSS (10 min)**
   - Definir `--spacing-* variables
   - `--color-primary`, `--color-secondary`
   - `--transition-smooth`: 0.3s ease-in-out

2. **Responsive refinements (10 min)**
   - Media queries consistency
   - Breakpoints: 480, 768, 1024, 1400
   - Testing en real devices

3. **Performance (10 min)**
   - Lazy load de imágenes en cards
   - Optimize shadows/gradients
   - Minify CSS

#### Criterios de Aceptación
- [ ] Variables CSS reutilizables
- [ ] Performance score > 85
- [ ] Responsive en 3+ breakpoints
- [ ] Accesibilidad AA validada

---

## 🔄 Dependencias entre Unidades

```
┌─────────────────────────────────────────────┐
│                 Unidad 1-4                   │
│         (Independent - Parallel OK)          │
├─────────────┬──────────┬──────────┬──────────┤
│   Hero      │ Quick    │  Stack   │  Test    │
│ Improved    │ Access   │ Catalog  │Orientador│
└─────────────┴──────────┴──────────┴──────────┘
         ↓         ↓          ↓         ↓
    ┌─────────────────────────────────────────┐
    │         Unidad 5: Home.jsx               │
    │    (Depende de todas las anteriores)     │
    └─────────────────────────────────────────┘
         ↓
    ┌─────────────────────────────────────────┐
    │    Unidad 6: CSS & Optimizaciones        │
    │         (Opcional - Final Polish)        │
    └─────────────────────────────────────────┘
```

---

## ⏱️ Línea de Tiempo

### Fase 1: Ejecución Paralela (Unidades 1-4)
```
TIEMPO TOTAL: 185-275 minutos = 3-4.5 horas

Unidad 1 (Hero Mejorado):        45-60 min  ▰▰▰▰▰
Unidad 2 (Quick Access):         40-50 min  ▰▰▰▰
Unidad 3 (Stack Catalog):        30-40 min  ▰▰▰
Unidad 4 (Test Orientador):      60-75 min  ▰▰▰▰▰▰
                                 ─────────────────
PARALELO (simultáneo):           60-75 min  ⏱️

```

### Fase 2: Integración (Unidad 5)
```
Tiempo: 20-30 min (Depende de Unidades 1-4)
Blocker: Todas las unidades deben estar completas
```

### Fase 3: Optimizaciones (Unidad 6 - Opcional)
```
Tiempo: 20-30 min
Blocker: Nada (pero mejor después de Unidad 5)
```

### Línea Crítica Total
**Mínimo:** 20-30 (U5) + max(45-60, 40-50, 30-40, 60-75) = 80-105 min
**Máximo con optimizaciones:** 80-105 + 20-30 = 100-135 min

---

## 🧪 Receta E2E de Testing

### Pre-Testing Checklist
```bash
✓ Branch creada: feature/home-refactor-batch
✓ Todos los archivos creados/modificados
✓ npm run build sin errores
✓ npm run dev con Hot Module Reload
```

### Test Suites por Unidad

#### Test Suite 1: Hero Mejorado
```javascript
describe('HeroImproved Component', () => {
  test('Parallax effect visible en desktop', () => {
    // Verificar background-attachment: fixed
    // Verificar scroll behavior
  });

  test('ClusterSearch integrado y funcional', () => {
    // Input visible
    // Search results funciona
    // Clear button funciona
  });

  test('Botones CTA navegables', () => {
    // "Aprende ya" → #stack
    // "Test rápido" → #test
  });

  test('Responsive sin parallax en mobile', () => {
    // Mobile view sin parallax
    // Elementos legibles
  });

  test('Accesibilidad', () => {
    // Focus states visibles
    // ARIA labels presentes
    // Color contrast WCAG AA
  });
});
```

#### Test Suite 2: QuickAccessCards
```javascript
describe('QuickAccessCards Component', () => {
  test('Renderiza 6+ categorías', () => {
    // Verificar cantidad de cards
  });

  test('Grid responsivo', () => {
    // 2 col en mobile
    // 3 col en tablet
    // 4-6 col en desktop
  });

  test('Hover effects funcionales', () => {
    // Scale transform
    // Shadow changes
    // Color transitions
  });

  test('Links navegables', () => {
    // Cada card → categoría correcta
    // URLs válidas
  });
});
```

#### Test Suite 3: StackCatalogSection
```javascript
describe('StackCatalogSection', () => {
  test('Título actualizado', () => {
    // "Un stack para dominar el mundo"
  });

  test('Nomenclatura revisada', () => {
    // No hay "dominar" excepto en título
    // Nuevo vocabulario: conquistar, aprender, hábil
  });

  test('Backward compatibility', () => {
    // ModulesSection aún funciona
    // No rompe navegación
  });
});
```

#### Test Suite 4: TestOrientador
```javascript
describe('TestOrientador Component', () => {
  test('Renderiza preguntas', () => {
    // 5-7 preguntas presentes
  });

  test('Navegación entre preguntas', () => {
    // Next/Previous buttons
    // Progress bar actualiza
  });

  test('Cálculo de scores', () => {
    // Mapeo correcto a categorías
    // Puntuación precisa
  });

  test('Muestra resultados', () => {
    // Recomendaciones personalizadas
    // Links a categorías funcionan
  });

  test('Reset test', () => {
    // Vuelve a inicio
    // Estado limpio
  });
});
```

#### Test Suite 5: Home Integration
```javascript
describe('Home Page Integration', () => {
  test('Todos los componentes renderizados', () => {
    // HeroImproved
    // QuickAccessCards
    // TestOrientador
    // ModulesSection
  });

  test('Orden correcto de secciones', () => {
    // Hero first
    // Accesos rápidos
    // Test
    // Catálogo
  });

  test('Navegación de anchors', () => {
    // #stack funciona
    // #test funciona
    // #quick-access funciona
  });

  test('SEO actualizado', () => {
    // Title correcto
    // Meta description
    // Keywords incluidas
  });

  test('Performance', () => {
    // LCP < 2.5s
    // FID < 100ms
    // CLS < 0.1
  });
});
```

### Manual E2E Testing (Browser)

#### Escenario 1: Desktop User (Chrome, 1920x1080)
```
1. Cargar https://localhost:5173
2. Verificar Hero Parallax:
   - Scroll down lentamente
   - Background debe permanecer fijo
   - Texto se mueve sobre él
3. Verificar búsqueda:
   - Click en input
   - Escribir "java"
   - Verificar resultados dropdown
   - Hacer click en resultado → navega a /java
4. Verificar CTA buttons:
   - "Aprende ya" → scroll a #stack
   - "Test rápido" → scroll a #test
5. Verificar QuickAccessCards:
   - 6+ cards visibles
   - Hover effects funciona
   - Click en card → navega a categoría
6. Verificar TestOrientador:
   - "Empezar" button funciona
   - Puede responder preguntas
   - "Siguiente" navega
   - Resultados mostrados
   - "Empezar mi ruta" navega a categoría
7. Verificar ModulesSection:
   - Título "Un stack para dominar el mundo"
   - Todas las categorías presentes
   - Expandable modules funciona
```

#### Escenario 2: Tablet User (iPad, 768x1024)
```
1. Cargar Home
2. Verificar Hero:
   - Parallax desactivado en tablet
   - Búsqueda visible y funcional
   - CTA buttons clickeables
3. Verificar QuickAccessCards:
   - Grid 3 columns
   - Cards legibles
   - Hover works (touch-friendly)
4. Verificar TestOrientador:
   - Quiz presentable
   - Inputs accesibles
5. Verificar ModulesSection:
   - Layout responsivo
   - Expandables funciona
```

#### Escenario 3: Mobile User (iPhone 12, 390x844)
```
1. Cargar Home
2. Verificar Hero:
   - Parallax desactivado
   - Texto legible (font sizes correctos)
   - Búsqueda funcional
   - CTA buttons tappable (min 44x44px)
3. Verificar QuickAccessCards:
   - 2 column grid
   - Scroll vertical suave
   - Cards completas
4. Verificar TestOrientador:
   - Quiz presentable
   - Inputs tappable
   - Scroll para ver todas opciones
5. Verificar ModulesSection:
   - Stack list vertical
   - Expandables funcionan
6. Performance:
   - No lag en scroll
   - Transitions suave
```

### Automated Testing Commands

```bash
# Test suite por unidad
npm run test -- HeroImproved.test.jsx
npm run test -- QuickAccessCards.test.jsx
npm run test -- StackCatalogSection.test.jsx
npm run test -- TestOrientador.test.jsx
npm run test -- Home.integration.test.jsx

# Test coverage
npm run test:coverage

# E2E testing (si Playwright/Cypress está configurado)
npm run test:e2e -- home.spec.ts

# Performance audit
npm run audit:performance

# Accessibility check
npm run audit:a11y
```

### Success Criteria
- [ ] 100% test pass rate (Unit + Integration)
- [ ] 0 console errors/warnings
- [ ] Lighthouse performance > 85
- [ ] Accessibility AA score
- [ ] Responsive en 3+ devices
- [ ] No memory leaks (DevTools)
- [ ] Cross-browser compatible (Chrome, Firefox, Safari)

---

## 📝 Instrucciones para Workers

### Roles & Asignación Sugerida

| Unidad | Rol | Experiencia Requerida | Tiempo |
|--------|-----|----------------------|--------|
| 1 | Frontend Expert | React + CSS + Animations | 45-60 min |
| 2 | UI/UX Designer | React + Responsive CSS | 40-50 min |
| 3 | Content/Config Manager | Data structures, Naming | 30-40 min |
| 4 | Interactive Developer | State management + Forms | 60-75 min |
| 5 | Integration Lead | Component orchestration | 20-30 min |
| 6 | Performance Engineer | CSS optimization | 20-30 min |

### Workflow General (Para cada worker)

```
1. PREPARACIÓN (5 min)
   ├─ Crear rama feature/[unidad-nombre]
   ├─ Leer plan detallado de unidad
   └─ Entender dependencias

2. IMPLEMENTACIÓN (Tiempo estimado)
   ├─ Crear/modificar archivos
   ├─ Seguir templates proporcionados
   ├─ Mantener convenciones de código
   └─ Commit intermediate si es largo

3. TESTING LOCAL (10-15 min)
   ├─ npm run dev
   ├─ Verificar renderizado
   ├─ Testing responsive (DevTools)
   ├─ Check accessibility
   └─ Console limpia

4. INTEGRACIÓN (Al finalizar todas)
   ├─ Merge branch a main
   ├─ Resolver conflictos si aplica
   ├─ Final integration test
   └─ Code review

5. DOCUMENTACIÓN (5 min)
   ├─ Actualizar CHANGES.md
   ├─ Comentar código complejo
   └─ Documentar decisiones
```

### Convenciones de Código

#### Estructura de Componentes
```jsx
// SIEMPRE:
// 1. Imports at top
import { ... } from '...';
import './ComponentName.css';

// 2. Export function (no default)
export function ComponentName() {
  // 3. State & hooks first
  const [state, setState] = useState();

  // 4. Effects after state
  useEffect(() => {
    // ...
  }, [deps]);

  // 5. Render at end
  return (
    <div className="component-name">
      {/* JSX */}
    </div>
  );
}
```

#### Naming Conventions
```javascript
// Components: PascalCase
export function HeroImproved() {}
export function QuickAccessCards() {}

// Constants: UPPER_SNAKE_CASE
const CATEGORY_ROUTES = {};
const DEFAULT_TIMEOUT = 5000;

// Functions: camelCase
const handleClick = () => {}
const getModulesByCategory = () => {}

// CSS classes: kebab-case
className="hero-improved"
className="quick-access-card"
```

#### CSS Structure (Per Component)
```css
/* Base styles */
.component-name {
  /* positioning, display, dimensions */
}

.component-name__element {
  /* variations */
}

/* States */
.component-name:hover {
  /* hover states */
}

.component-name.is-active {
  /* active states */
}

/* Media queries (mobile-first) */
@media (min-width: 768px) {
  .component-name {
    /* tablet */
  }
}

@media (min-width: 1024px) {
  .component-name {
    /* desktop */
  }
}
```

### Git Workflow

```bash
# INICIO DE UNIDAD
git checkout main && git pull
git checkout -b feature/unidad-[nombre]

# DURANTE DESARROLLO
git add src/components/NewComponent.jsx
git commit -m "feat(home): Add HeroImproved component with parallax"

# AL FINALIZAR UNIDAD
git push origin feature/unidad-[nombre]
# ← Esperar a que todas las unidades se completen

# INTEGRACIÓN FINAL (LEAD ONLY)
git checkout main
git merge feature/unidad-1 feature/unidad-2 ... feature/unidad-5
# Resolver conflictos si aplica
git push origin main
```

### Checklist Pre-Submission

Para cada unidad, verificar:

```
CODING
- [ ] Código sigue convenciones (PascalCase, camelCase, etc.)
- [ ] Componentes son functional (arrow functions o export function)
- [ ] JSX bien indentado (2 spaces)
- [ ] Props validadas si aplica
- [ ] Sin console.log de debug
- [ ] Imports optimizados (no imports no-usados)

STYLING
- [ ] CSS en archivo separado (.css)
- [ ] Classes en kebab-case
- [ ] Responsivo: 480px, 768px, 1024px breakpoints
- [ ] Hover states definidos
- [ ] Focus states accesibles
- [ ] Colores cumple AA contrast

TESTING
- [ ] npm run dev sin errores
- [ ] No warnings en console
- [ ] Responsive en DevTools (3+ sizes)
- [ ] Funcionalidad principal verificada
- [ ] Edge cases considerados
- [ ] Accessibility check (axe, Lighthouse)

DOCUMENTATION
- [ ] Código comentado (si es complejo)
- [ ] Commit message descriptivo
- [ ] README.md actualizado si es necesario
- [ ] No archivos temporales

PERFORMANCE
- [ ] Lazy load de imágenes (si aplica)
- [ ] No inline styles (usar CSS)
- [ ] Optimizado rendering (useMemo, useCallback si needed)
- [ ] Bundle size razonable
```

### Resolución de Conflictos

Si hay conflicto en integración:

```bash
# 1. Identificar archivo conflictivo
git status

# 2. Abrir archivo y resolver conflictos
# Buscar markers: <<<<<<<, =======, >>>>>>>

# 3. Decidir qué mantener (o combinar)

# 4. Marcar como resuelto
git add archivo-conflictivo.jsx

# 5. Completar merge
git commit -m "Merge feature/unidad-X: Resolve conflicts"
```

### Comunicación & Status

Usar formato estándar para reportar:

```
[UNIDAD X] Status Report
Time elapsed: [actual vs estimated]
Status:
  - ✓ Implementación: 100%
  - ✓ Testing local: 100%
  - ⚠ Accessibility: 80% (pending axe audit)
  - ⏳ Documentation: 50%

Blockers: None
Next: Ready for integration

Git branch: feature/unidad-X
Commit: abc1234 - feat: Add [description]
```

---

## 🚀 Comandos Útiles

```bash
# Setup
npm install
npm run dev

# Development
npm run build
npm run lint
npm run format

# Testing
npm run test
npm run test:watch
npm run test:coverage
npm run test:e2e

# Audits
npm run audit:performance
npm run audit:a11y
npm run audit:bundle

# Git
git status
git log --oneline
git diff --stat
```

---

## 📚 Recursos & Referencias

### Documentación
- [React Hooks Docs](https://react.dev/reference/react/hooks)
- [CSS Parallax Effect](https://developer.mozilla.org/en-US/docs/Web/CSS/background-attachment)
- [WCAG AA Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)

### Similar Components (Reference)
- `Hero.jsx` - existing hero component
- `CategoryButtons.jsx` - category navigation
- `ModulesSection.jsx` - modules grid layout

### Design System (If exists)
- Colors: Defined in `moduleCategories.js`
- Spacing: 0.5rem increments
- Breakpoints: 480, 768, 1024, 1400px
- Transitions: 0.3s ease-in-out

---

## 📊 Success Metrics

### Quantitative
- ✓ 100% test pass rate
- ✓ Lighthouse score > 85
- ✓ Bundle size < 2MB (gzipped)
- ✓ 0 accessibility violations

### Qualitative
- ✓ UX improved (Hero más atractivo)
- ✓ Navigation clearer (Quick Access + Test)
- ✓ Code more maintainable (modular components)
- ✓ SEO optimized (better metadata)

### Timeline
- ✓ Completado en 3-4.5 horas (paralelo)
- ✓ Merged a main sin issues
- ✓ Deployable immediatamente

---

## 🎯 Próximos Pasos (Post-Refactor)

1. **Monitor Performance** (1 semana)
   - Track Lighthouse scores
   - Monitor user engagement metrics
   - Fix any regressions

2. **A/B Testing** (2-4 semanas)
   - Test CTA button placements
   - Test color variations
   - Monitor conversion rates

3. **User Feedback** (Ongoing)
   - Recopilación de feedback
   - Iteraciones basadas en UX
   - Refinements menores

4. **Documentación** (Post-deploy)
   - Actualizar design system
   - Document new patterns
   - Create component storybook entries

---

## 📝 Aprobaciones & Sign-offs

```
Plan Creado Por: [Your Name]
Fecha: 2026-07-24
Versión: 1.0

Aprobaciones:
- [ ] Tech Lead
- [ ] Product Owner
- [ ] Design Lead
- [ ] QA Lead

Ejecución Autorizada: [Date]
Completado: [To be filled]
```

---

## 📞 Soporte & Escalación

### Si hay bloqueadores:
1. **Contactar al Lead de la unidad**
2. **Documentar el issue** en [BLOCKERS.md](./BLOCKERS.md)
3. **Escalate a Tech Lead** si no se resuelve en 15 min

### Contactos Rápidos:
- **Tech Lead:** [email/slack]
- **Product Owner:** [email/slack]
- **QA Lead:** [email/slack]

---

**EOF - Plan Ready for Execution**
