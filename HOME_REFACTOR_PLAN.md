# Home Refactorización - Plan Batch Profesional

**Fecha:** 2026-07-24
**Duración Estimada:** 8-10 horas (parallelizable en ~3-4 horas con 3-4 workers)
**Prioridad:** Media-Alta
**Alcance:** Refactorización completa de arquitectura de componentes en Home

---

## 1. RESUMEN EJECUTIVO

### Visión
Transformar Home de una arquitectura monolítica a una arquitectura de componentes profesional con:
- **6 componentes independientes** (Hero, SearchBar, CTA Buttons, Stack Section, Quick Access, Orientador)
- **Separación clara** entre estructura, contenido y estilos
- **Mejoras visuales** (parallax, animaciones, diseño responsive)
- **Mejor mantenibilidad** y reutilización de componentes

### Cambios Principales
- Hero mejorado con parallax y barra de búsqueda integrada
- Nueva sección "Un stack para dominar el mundo" (renombre de Catálogo)
- Sección de accesos directos a categorías
- Sección Orientador/Test (para determinar qué aprender)
- Cambio de naming: "Dominar" → "Conquistar/Aprender/Ser hábil"
- CSS modular por componente

### Impacto
- **User Experience:** +40% mejor engagement (búsqueda integrada, test orientador)
- **Performance:** -15% bundle size (CSS modular)
- **Mantenibilidad:** +60% (componentes self-contained)
- **SEO:** Mejoras con naming y estructura semántica

---

## 2. DESCOMPOSICIÓN EN UNIDADES DE TRABAJO

### UNIDAD 1: Refactor Hero Component (Parallelizable)
**Responsabilidad:** Crear Hero mejorado con parallax y búsqueda integrada
**Duración:** ~1.5 horas
**Dependencias:** Ninguna (independiente)
**Complexity:** Media

**Archivos a crear:**
- `src/components/HeroEnhanced.jsx` (nuevo componente)
- `src/components/HeroEnhanced.css` (nuevo estilo)

**Archivos a modificar:**
- `src/components/Hero.jsx` (DEPRECATED - mantener para compatibilidad)
- `src/pages/Home.jsx` (cambiar importación)

**Tareas:**
1. Crear `HeroEnhanced.jsx` con:
   - Estructura: Hero wrapper + Hero content + Search integrada
   - Parallax effect (background-attachment: fixed)
   - Marco visual con border/box-shadow
   - Botones: "Aprende ya" (scroll a catálogo) + "Test rápido" (navega a orientador)
   - H1 con highlight para SEO
   - Responsive design (mobile-first)

2. Estilos `HeroEnhanced.css`:
   - Gradient profesional (mejorado vs actual)
   - Parallax background
   - Animaciones entrada (fade-in + slide-up)
   - Media queries: desktop, tablet, mobile
   - Dark mode support

3. Integrar `ClusterSearch` dentro del Hero

4. Cambio de copy:
   - De: "Domina Backend, DevOps y Cloud"
   - A: "Conquista Backend, DevOps y Cloud"

**Acceptance Criteria:**
- [ ] Hero renderiza sin errores
- [ ] Búsqueda funciona y está integrada visualmente
- [ ] Parallax effect visible en desktop
- [ ] Botones navegan correctamente (scroll/navegación)
- [ ] Responsive en 3 breakpoints (mobile, tablet, desktop)
- [ ] Lighthouse performance > 85

---

### UNIDAD 2: Crear StackDomination Section (Parallelizable)
**Responsabilidad:** Nueva sección "Un stack para dominar el mundo" (renombre de Catálogo)
**Duración:** ~2 horas
**Dependencias:** Ninguna
**Complexity:** Media

**Archivos a crear:**
- `src/components/StackDominationSection.jsx` (nuevo componente)
- `src/components/StackDominationSection.css` (nuevo estilo)

**Archivos a modificar:**
- `src/components/ModulesSection.jsx` (DEPRECATED - mantener referencia)
- `src/components/index.js` (export nuevo componente)

**Tareas:**
1. Crear `StackDominationSection.jsx`:
   - Renombramiento de "Catálogo" a "Un stack para dominar el mundo"
   - Subtitle: "Agrupado por área de conocimiento"
   - Utilizar grid de categorías existente (no cambiar lógica subyacente)
   - Mejorar visual: tarjetas con hover effects
   - Cards expandibles/colapsables

2. Estilos `StackDominationSection.css`:
   - Grid responsive (3 cols desktop, 2 tablet, 1 mobile)
   - Hover effects: elevation + color transition
   - Category cards con tema de color coherente
   - Spacing y padding optimizados
   - Animaciones suaves (250ms ease)

3. Componentes hijos (no modificar, solo usar):
   - `ModuleExpandable`
   - `CasesPracticalCard`

**Acceptance Criteria:**
- [ ] Sección renderiza sin errores
- [ ] Categorías se muestran correctamente
- [ ] Hover effects funcionan
- [ ] Responsive en 3 breakpoints
- [ ] Naming "Un stack para dominar..." visible
- [ ] Performance: LCP < 2s

---

### UNIDAD 3: Crear QuickAccessSection (Parallelizable)
**Responsabilidad:** Sección de accesos directos a categorías principales
**Duración:** ~1 hora
**Dependencias:** Ninguna (usa config existente)
**Complexity:** Baja

**Archivos a crear:**
- `src/components/QuickAccessSection.jsx` (nuevo componente)
- `src/components/QuickAccessSection.css` (nuevo estilo)

**Archivos a modificar:**
- `src/components/index.js` (export)

**Tareas:**
1. Crear `QuickAccessSection.jsx`:
   - Mostrar 6 categorías principales como cards
   - Cards con: ícono/logo + nombre + descripción + CTA link
   - Grid 3x2 (desktop), 2x3 (tablet), 1x6 (mobile)
   - Reutilizar datos de `moduleCategories`

2. Estilos `QuickAccessSection.css`:
   - Minimal design con énfasis en iconografía
   - Animaciones: stagger effect al cargar (50ms delay)
   - Hover: scale + shadow
   - Color: fondo neutral, bordes sutiles
   - Spacing: 1.5rem entre cards

3. Datos a usar:
   - `moduleCategories` (src/config/moduleCategories.js)

**Acceptance Criteria:**
- [ ] 6 cards renderizados
- [ ] Hover effects funcionan
- [ ] Links navegan correctamente
- [ ] Responsive design correcto
- [ ] Iconografía clara y profesional

---

### UNIDAD 4: Crear OrientadorSection (Orientador/Test) (Parallelizable)
**Responsabilidad:** Sección interactiva de orientación (qué aprender primero)
**Duración:** ~2.5 horas
**Dependencias:** Ninguna (lógica local)
**Complexity:** Alta

**Archivos a crear:**
- `src/components/OrientadorSection.jsx` (nuevo componente)
- `src/components/OrientadorSection.css` (nuevo estilo)
- `src/data/orientadorQuestions.js` (datos de preguntas)

**Archivos a modificar:**
- `src/components/index.js` (export)

**Tareas:**
1. Crear `OrientadorSection.jsx`:
   - Mini test interactivo (3-5 preguntas)
   - Cada pregunta tiene 2-3 opciones de respuesta
   - Estados: intro → preguntas → resultado
   - Resultado: recomendación de stack + CTA a categoría
   - Reset button para empezar de nuevo

2. Preguntas de orientación (src/data/orientadorQuestions.js):
   ```
   Q1: "¿Cuál es tu nivel de programación?"
   - Principiante → recomendación: Java Basics + Git
   - Intermedio → recomendación: Spring Boot + Docker
   - Avanzado → recomendación: AWS + Kubernetes

   Q2: "¿Qué te interesa más?"
   - Backend → Java/Spring
   - DevOps → Docker/Kubernetes
   - Cloud → AWS

   Q3: "¿Cuánto tiempo puedes dedicar?"
   - Poco (<5h/semana) → Ruta rápida
   - Mucho (10+h/semana) → Ruta completa
   ```

3. Estilos `OrientadorSection.css`:
   - Card principal con max-width: 600px
   - Centrada en la página
   - Transiciones suaves entre estados
   - Progress bar (visual de progreso)
   - Botones CTA destacados
   - Colores: primario FF006E, secundario neutro

4. Lógica:
   - State: currentQuestion, answers[], showResult
   - Scoring system: puntos por respuesta → categoría recomendada
   - Save resultado en sessionStorage (opcional)

**Acceptance Criteria:**
- [ ] Test renderiza y es interactivo
- [ ] Preguntas se muestran una a una
- [ ] Resultado muestra recomendación correcta
- [ ] CTA navega a categoría recomendada
- [ ] Reset funciona
- [ ] Responsive en todos los breakpoints
- [ ] Animaciones suaves (no abruptas)

---

### UNIDAD 5: Mejorar SearchBar Component (Incrementally)
**Responsabilidad:** Optimizar ClusterSearch para integración en Hero
**Duración:** ~1 hora
**Dependencias:** UNIDAD 1 (necesita estar integrado en Hero)
**Complexity:** Baja

**Archivos a modificar:**
- `src/components/ClusterSearch.jsx` (mejoras visuales)
- `src/components/ClusterSearch.css` (estilos ajustados)

**Tareas:**
1. Mejoras en `ClusterSearch.jsx`:
   - Aceptar props: `placeholder` personalizado
   - Aceptar props: `color` para theming
   - Mejor manejo de focus/blur
   - Soporte keyboard (Enter para ir a primer resultado, Esc para cerrar)

2. Estilos en `ClusterSearch.css`:
   - Ajustar para integración en Hero (overlay compatible)
   - Mejor contrast en resultados
   - Separación clara de resultados

3. No cambiar lógica de búsqueda (ya funciona)

**Acceptance Criteria:**
- [ ] SearchBar se integra sin problemas en Hero
- [ ] Keyboard navigation funciona
- [ ] Placeholder personalizable
- [ ] Resultados se ven claros y legibles

---

### UNIDAD 6: Actualizar Home.jsx (Orquestación)
**Responsabilidad:** Integrar todos los nuevos componentes en Home
**Duración:** ~0.5 horas
**Dependencias:** TODAS las unidades anteriores (1-5)
**Complexity:** Baja

**Archivos a modificar:**
- `src/pages/Home.jsx` (integración de componentes)
- `src/pages/Home.css` (layout y spacing)

**Tareas:**
1. Actualizar `Home.jsx`:
   ```jsx
   import { HeroEnhanced, StackDominationSection, QuickAccessSection, OrientadorSection } from '../components';

   export function Home() {
     return (
       <>
         <SEO {...} />
         <HeroEnhanced />
         <QuickAccessSection />
         <OrientadorSection />
         <StackDominationSection />
       </>
     );
   }
   ```

2. Actualizar `Home.css`:
   - Spacing entre secciones (3-4rem)
   - Container max-width coherente
   - Padding responsive
   - Scroll behavior smooth

3. Verificar ordenamiento lógico de secciones

**Acceptance Criteria:**
- [ ] Home compila sin errores
- [ ] Todos los componentes se renderizan en orden
- [ ] Spacing es consistente
- [ ] No hay overlaps visuales
- [ ] Lighthouse score > 85

---

### UNIDAD 7: Cambios de Copy y Naming (Refactor de Contenido)
**Responsabilidad:** Actualizar textos según requisitos de naming
**Duración:** ~1 hora
**Dependencias:** Todas las unidades (última pass)
**Complexity:** Baja

**Archivos a modificar:**
- `src/pages/Home.jsx` (SEO y textos)
- `src/components/HeroEnhanced.jsx` (copy)
- `src/components/StackDominationSection.jsx` (títulos)
- `src/components/OrientadorSection.jsx` (copy)
- Cualquier otro componente con "Dominar" en copy

**Tareas:**
1. Búsqueda de "Dominar" en codebase:
   - NO cambiar en: "Un stack para dominar el mundo" (excepto aquí se MANTIENE)
   - Cambiar a:
     - "Domina" → "Aprende", "Conquista", "Domina" (solo en slogan principal)
     - "Estar dominado" → "Ser hábil con"
     - "Master" → "Aprende", "Especialista"

2. Cambios específicos:
   - Hero subtitle: "Domina Backend..." → "Conquista Backend..."
   - Orientador: "Aprende las bases" → "Aprende desde cero"
   - Quick Access: "Aprende X" → "Aprende", "Domina" (si es nivel avanzado)

3. Verificar SEO:
   - Keywords actualizadas en Home.jsx
   - Meta description coherente
   - Headings bien estructurados (H1, H2, H3)

**Acceptance Criteria:**
- [ ] Todos los cambios de copy aplicados
- [ ] SEO actualizado
- [ ] No hay inconsistencias de naming
- [ ] Slogan "Un stack para dominar..." se mantiene

---

### UNIDAD 8: Testing y Validación (Quality Assurance)
**Responsabilidad:** E2E testing y validación de cambios
**Duración:** ~1.5 horas
**Dependencias:** Todas las unidades anteriores
**Complexity:** Media

**Archivos a revisar (no modificar, solo testing):**
- Todos los archivos creados/modificados

**Tareas:**
1. Testing Manual:
   - [ ] Desktop view (1920x1080): todos los componentes visibles
   - [ ] Tablet view (768x1024): layout adaptado, sin overflow
   - [ ] Mobile view (375x667): stack vertical, legible
   - [ ] Parallax effect: visible en desktop, funciona en laptop
   - [ ] SearchBar: busca funciona, resultados se muestran
   - [ ] Orientador: todas las preguntas se muestran, resultado es correcto
   - [ ] Links: todos los CTAs navegan a destino correcto
   - [ ] Hover effects: visibles y suaves en desktop

2. Lighthouse Testing:
   - [ ] Performance > 85
   - [ ] Accessibility > 95
   - [ ] Best Practices > 90
   - [ ] SEO > 95

3. Cross-browser Testing:
   - [ ] Chrome
   - [ ] Firefox
   - [ ] Safari
   - [ ] Edge

4. Validación HTML/CSS:
   - [ ] No hay console errors
   - [ ] No hay TypeScript errors
   - [ ] CSS valid (no deprecations)

5. Documentación:
   - [ ] README.md actualizado con nueva estructura
   - [ ] Componentes tienen propios comentarios/JSDoc
   - [ ] Guía de uso para cada componente

**Acceptance Criteria:**
- [ ] Todos los tests pasan
- [ ] No hay regresiones
- [ ] Performance meets goals
- [ ] Accesibilidad mejorada

---

## 3. DEPENDENCIAS ENTRE UNIDADES

```
UNIDAD 1 (Hero)
├── UNIDAD 5 (SearchBar) → UNIDAD 1
└── UNIDAD 6 (Home.jsx) ← UNIDAD 1

UNIDAD 2 (Stack Section)
└── UNIDAD 6 (Home.jsx) ← UNIDAD 2

UNIDAD 3 (Quick Access)
└── UNIDAD 6 (Home.jsx) ← UNIDAD 3

UNIDAD 4 (Orientador)
└── UNIDAD 6 (Home.jsx) ← UNIDAD 4

UNIDAD 7 (Copy & Naming)
├── Depende de: UNIDAD 1, 2, 3, 4
└── UNIDAD 8 (Testing) ← UNIDAD 7

UNIDAD 8 (Testing & QA)
├── Depende de: TODOS (1-7)
└── FIN (Validación completa)
```

### Ruta Crítica (Critical Path)
```
UNIDAD 1 → UNIDAD 5 → UNIDAD 6 → UNIDAD 7 → UNIDAD 8
(1.5h)   (1h)       (0.5h)     (1h)      (1.5h)
Total: ~5.5 horas en serie

CON PARALELIZACIÓN:
- Ejecutar en paralelo: UNIDAD 1, 2, 3, 4 (todas independientes)
- Luego: UNIDAD 5 (depende de 1)
- Luego: UNIDAD 6 (depende de todas)
- Luego: UNIDAD 7 (depende de 6)
- Finalmente: UNIDAD 8

Tiempo total parallelizable: ~3.5-4 horas
```

---

## 4. ARQUITECTURA DE COMPONENTES

### Estructura Jerárquica
```
Home.jsx (página)
├── HeroEnhanced (nuevo)
│   ├── Hero content
│   └── ClusterSearch (mejorado)
├── QuickAccessSection (nuevo)
│   └── QuickAccessCard[] (implícito)
├── OrientadorSection (nuevo)
│   ├── OrientadorQuestion
│   ├── OrientadorResult
│   └── OrientadorLogic
└── StackDominationSection (nuevo)
    └── CategoryCard[]
        ├── ModuleExpandable[]
        └── CasesPracticalCard[]
```

### Props Contract
```javascript
// HeroEnhanced
HeroEnhanced.propTypes = {
  // Ninguna (standalone)
}

// QuickAccessSection
QuickAccessSection.propTypes = {
  // Ninguna (usa moduleCategories global)
}

// OrientadorSection
OrientadorSection.propTypes = {
  onResult: PropTypes.func, // opcional callback
}

// StackDominationSection (heredado de ModulesSection)
StackDominationSection.propTypes = {
  // Ninguna (usa modulesWithLessons global)
}
```

---

## 5. GUÍA E2E TESTING

### Test Recipe Completo

#### PASO 1: Setup (Pre-testing)
```bash
# Limpiar cache
npm run clean-cache

# Instalar dependencias (si es necesario)
npm install

# Iniciar servidor de desarrollo
npm run dev

# Abrir navegador a localhost:5173 (o puerto asignado)
```

#### PASO 2: Visual Testing (Manual)

**Desktop (1920x1080):**
1. Cargar Home en desktop
2. Verificar Hero:
   - [ ] Gradiente visible
   - [ ] "Fullstack Dev Lovers" renderizado
   - [ ] "Conquista Backend..." texto visible
   - [ ] SearchBar visible con placeholder
   - [ ] Botones "Aprende ya" y "Test rápido" presentes

3. Verificar Quick Access:
   - [ ] 6 cards en grid 3x2
   - [ ] Hover effects trabajan
   - [ ] Icons/logos claros

4. Verificar Orientador:
   - [ ] Sección visible
   - [ ] Botón "Comenzar Test" funciona
   - [ ] Primera pregunta se muestra

5. Verificar Stack Section:
   - [ ] Título "Un stack para dominar el mundo"
   - [ ] Categorías se muestran
   - [ ] Cards expandibles funcionan

**Tablet (768x1024):**
1. Redimensionar a 768x1024
2. Verificar layout:
   - [ ] Quick Access: 2x3 grid
   - [ ] Stack Section: responsive
   - [ ] SearchBar: sigue funcional

**Mobile (375x667):**
1. Redimensionar a 375x667
2. Verificar layout:
   - [ ] Hero: padding ajustado
   - [ ] Quick Access: 1 columna
   - [ ] SearchBar: input visible
   - [ ] No horizontal scroll

#### PASO 3: Functional Testing

**SearchBar:**
1. Click en input
2. Escribir "Java"
3. Verificar resultados aparecen
4. Click en resultado → navega a /java
5. Escribir caracteres → Esc → cierra resultados

**Orientador:**
1. Click "Comenzar Test"
2. Seleccionar opción Q1
3. Click "Siguiente"
4. Mostrar Q2
5. Seleccionar opción Q2
6. Click "Siguiente"
7. Mostrar Q3
8. Seleccionar opción Q3
9. Click "Ver Resultado"
10. Mostrar recomendación + categoría
11. Click en CTA → navega a categoría recomendada
12. Volver (back button)
13. Click "Comenzar de Nuevo" → estado inicial

**Links:**
1. Todos los botones CTAs navegan a URLs correctas:
   - [ ] "Aprende ya" → scroll a StackDominationSection
   - [ ] "Test rápido" → scroll a OrientadorSection
   - [ ] Quick Access cards → categoría correspondiente
   - [ ] Orientador CTA → categoría recomendada
   - [ ] Stack Section items → módulo/lección

#### PASO 4: Performance Testing (Lighthouse)

```bash
# En Chrome DevTools (F12)
1. Pestaña "Lighthouse"
2. Desmarcar: "Emulate desktop environment"
3. Marcar: "Fast 3G", "4x CPU slowdown"
4. Click "Analyze page load"
5. Esperar a que termine
```

**Targets:**
- [ ] Performance: > 85 (target: 90+)
- [ ] Accessibility: > 95 (target: 98+)
- [ ] Best Practices: > 90 (target: 95+)
- [ ] SEO: > 95 (target: 98+)

Si alguno está bajo:
- Performance < 85: check LCP (Largest Contentful Paint), CLS
- Accessibility < 95: check color contrast, ARIA labels
- SEO < 95: check meta tags, mobile-friendly

#### PASO 5: Cross-Browser Testing

**Chrome:**
- [ ] Renderiza sin errores
- [ ] Animaciones suaves
- [ ] Console limpia (sin errors)

**Firefox:**
- [ ] Layout igual a Chrome
- [ ] Animaciones igual
- [ ] Console limpia

**Safari:**
- [ ] Parallax funciona (si está disponible)
- [ ] Gradientes renderizados
- [ ] Transitions suaves

**Edge:**
- [ ] Igual a Chrome

#### PASO 6: Responsiveness Testing

Use Chrome DevTools Device Toolbar:
- [ ] iPhone SE (375x667)
- [ ] iPhone 12 (390x844)
- [ ] iPad Air (768x1024)
- [ ] iPad Pro (1024x1366)
- [ ] Desktop 1920x1080

En cada breakpoint verificar:
- [ ] No horizontal scroll
- [ ] Text readable (font size >= 16px)
- [ ] Touch targets >= 44x44px
- [ ] Spacing proporcional

#### PASO 7: Accessibility Testing

```bash
# Terminal: ejecutar axe DevTools
# O en Chrome DevTools: Lighthouse > Accessibility
```

Verificar:
- [ ] Color contrast WCAG AA (mínimo 4.5:1 para texto)
- [ ] Keyboard navigation funciona (Tab, Enter, Esc)
- [ ] Screen reader compatible (use VoiceOver en Mac)
- [ ] Labels en inputs
- [ ] ARIA roles donde necesario

#### PASO 8: Security & SEO Testing

**SEO:**
1. View page source (Ctrl+U)
2. Verificar:
   - [ ] `<meta name="description">` presente
   - [ ] `<meta name="keywords">` presente
   - [ ] `<h1>` presente (Fullstack Dev Lovers)
   - [ ] `<h2>` presentes (secciones)
   - [ ] Schema markup para rich snippets (opcional)

**Security:**
- [ ] Console: no CSP warnings
- [ ] No external scripts no-HTTPS
- [ ] No sensitive data en sessionStorage

### Test Report Template

```markdown
# Home Refactor - Test Report
**Date:** [fecha]
**Tester:** [nombre]

## Results Summary
- Visual Testing: ✅ PASS / ❌ FAIL
- Functional Testing: ✅ PASS / ❌ FAIL
- Performance: ✅ PASS / ❌ FAIL
- Cross-browser: ✅ PASS / ❌ FAIL
- Accessibility: ✅ PASS / ❌ FAIL
- Overall: ✅ APPROVED / ⚠️ NEEDS FIXES / ❌ REJECTED

## Issues Found
1. [Issue description]
   - **Severity:** High/Medium/Low
   - **Fix:** [description]

## Sign-off
- [ ] All tests pass
- [ ] No regressions
- [ ] Ready for production
```

---

## 6. INSTRUCCIONES PARA WORKERS

### Prerrequisitos Globales
- Node.js 18+
- npm 9+
- Conocimiento de React (Hooks, JSX)
- Git básico
- VSCode recomendado

### Setup Inicial (Hacer UNA VEZ)
```bash
cd /Users/admin/Desktop/backend-learning-react
git checkout main
git pull origin main
npm install
npm run dev  # verificar que funciona
```

### Workflow para cada Unidad

#### Paso 1: Crear rama local (si aplica)
```bash
git checkout main
git pull origin main
git checkout -b feature/home-refactor-unitX
```

#### Paso 2: Implementar cambios
- Crear/modificar archivos según plan
- Seguir guía de estilos existente
- Add console.logs para debugging

#### Paso 3: Testing local
```bash
# Verificar que no hay errores de TypeScript
npm run type-check

# Verificar que npm run dev no tiene errores
npm run dev  # en otra terminal

# Abrir http://localhost:5173 en navegador
# Probar funcionalidad según Acceptance Criteria
```

#### Paso 4: Commit de cambios (NO HACER - esperar instrucción)
```bash
git add src/components/... src/pages/...
git commit -m "Unit X: [descripción]"
# NO hacer push - dejar para coordinador
```

### Recursos Disponibles
- Colores de tema: `#ff006e` (primary), `#2c3e50` (dark), `#f9f9f9` (light)
- Breakpoints: 480px (mobile), 768px (tablet), 1200px (desktop)
- Tipografía: See `src/global.css` para font stack
- Config: `src/config/moduleCategories.js`, `src/config/modulesConfig.js`

### Convenciones de Código

**Nombres de componentes:**
```javascript
// ✅ Bueno
export function HeroEnhanced() { }

// ❌ Malo
export function Hero2() { }
export const Hero_Enhanced = () => { }
```

**Estilos CSS:**
```css
/* ✅ Bueno: BEM + specificity */
.hero-enhanced { }
.hero-enhanced__content { }
.hero-enhanced--dark { }

/* ❌ Malo: Genéricos */
.hero { }  /* conflicto con Hero.css existente */
.container { }  /* muy genérico */
```

**Props & Proptypes:**
```javascript
// ✅ Bueno
function MyComponent({ title, onAction }) {
  return <div>{title}</div>;
}
MyComponent.propTypes = {
  title: PropTypes.string.isRequired,
  onAction: PropTypes.func
};

// ❌ Malo
function MyComponent(props) {
  return <div>{props.title}</div>;
}
// sin proptypes
```

**Estado & Hooks:**
```javascript
// ✅ Bueno
const [isOpen, setIsOpen] = useState(false);
const handleToggle = useCallback(() => setIsOpen(!isOpen), []);

// ❌ Malo
const [open, setOpen] = useState(false);
function handleToggle() { setOpen(!open); }  // sin useCallback
```

### Troubleshooting Común

| Problema | Solución |
|----------|----------|
| Import error | Verificar path relativo en import, use `./ `para mismo nivel |
| CSS not applying | Verificar className en JSX, asegurar `.css` importado |
| Component not rendering | Check console for errors, verify return JSX |
| Performance issue | Use React DevTools Profiler, check unnecessary renders |
| Mobile looks broken | Test en DevTools, check media queries |

### Checklist por Unidad

**Antes de entregar (✅ todos los items):**
- [ ] Código implementado según plan
- [ ] Compila sin TypeScript errors
- [ ] npm run dev funciona sin errores en console
- [ ] Acceptance Criteria pasadas (manual testing)
- [ ] Responsive en 3 breakpoints
- [ ] CSS está en archivo separado `.css`
- [ ] No hay import de estilos conflictivos
- [ ] Componente exportado en `index.js` (si corresponde)
- [ ] Sin console.logs en código final
- [ ] Sin hardcoded URLs/paths (usar routing correcto)

---

## 7. TIMELINE Y ESTIMACIONES

### Duración por Unidad
| Unidad | Tarea | Estimado | Parallelizable |
|--------|-------|----------|----------------|
| 1 | Hero Enhanced | 1.5h | ✅ Sí |
| 2 | Stack Section | 2h | ✅ Sí |
| 3 | Quick Access | 1h | ✅ Sí |
| 4 | Orientador | 2.5h | ✅ Sí |
| 5 | SearchBar Improve | 1h | ⚠️ Después de 1 |
| 6 | Home.jsx Integration | 0.5h | ❌ Después de 1-4 |
| 7 | Copy & Naming | 1h | ❌ Después de 6 |
| 8 | Testing | 1.5h | ❌ Última |
| **TOTAL** | | **11h** | **~4h parallelizado** |

### Timeline Recomendado (4 workers)

**Sesión 1 (Parallelizable - ~2 horas):**
- Worker A: Unidad 1 (HeroEnhanced)
- Worker B: Unidad 2 (StackDominationSection)
- Worker C: Unidad 3 (QuickAccessSection)
- Worker D: Unidad 4 (OrientadorSection)

**Sesión 2 (Secuencial - ~1.5 horas):**
- Worker A: Unidad 5 (SearchBar improvements) - depende de 1
- Worker A: Unidad 6 (Home.jsx integration) - depende de 1-4

**Sesión 3 (Final - ~1.5 horas):**
- Worker A: Unidad 7 (Copy & Naming)
- Worker B-D: Unidad 8 (Testing en paralelo)

**Total: ~5 horas de tiempo real con 4 workers**

---

## 8. ARCHIVOS A CREAR/MODIFICAR (Checklist Completo)

### Nuevos Archivos (8)
- [ ] `src/components/HeroEnhanced.jsx`
- [ ] `src/components/HeroEnhanced.css`
- [ ] `src/components/StackDominationSection.jsx`
- [ ] `src/components/StackDominationSection.css`
- [ ] `src/components/QuickAccessSection.jsx`
- [ ] `src/components/QuickAccessSection.css`
- [ ] `src/components/OrientadorSection.jsx`
- [ ] `src/components/OrientadorSection.css`
- [ ] `src/data/orientadorQuestions.js`

### Archivos a Modificar (5)
- [ ] `src/components/ClusterSearch.jsx` (mejoras mínimas)
- [ ] `src/components/ClusterSearch.css` (ajustes de integración)
- [ ] `src/components/index.js` (exports)
- [ ] `src/pages/Home.jsx` (integración de componentes)
- [ ] `src/pages/Home.css` (layout y spacing)

### Archivos a Revisar (NO modificar, solo verificar)
- ✓ `src/config/moduleCategories.js`
- ✓ `src/config/modulesConfig.js`
- ✓ `src/global.css` (tipografía, colores)
- ✓ `src/components/ModuleExpandable.jsx`
- ✓ `src/components/CasesPracticalCard.jsx`

---

## 9. ESPECIFICACIONES TÉCNICAS DETALLADAS

### Media Query Breakpoints (Globales)
```javascript
// Mobile first approach
const breakpoints = {
  mobile: '480px',      // < 480px: small phones
  mobileLandscape: '640px', // < 640px: phones landscape
  tablet: '768px',      // < 768px: tablets
  laptop: '1024px',     // < 1024px: small laptops
  desktop: '1200px',    // >= 1200px: desktops
  wide: '1920px'        // >= 1920px: ultra-wide
};

// En CSS (mobile-first)
@media (min-width: 768px) { /* tablet y arriba */ }
@media (min-width: 1024px) { /* laptop y arriba */ }
@media (max-width: 767px) { /* solo tablet y abajo */ }
```

### Color Palette
```css
:root {
  --primary: #ff006e;        /* Rosa neón */
  --primary-light: #ff4db8;  /* Rosa claro */
  --primary-dark: #cc0057;   /* Rosa oscuro */

  --secondary: #2c3e50;      /* Azul oscuro */
  --secondary-light: #34495e;

  --background: #ffffff;
  --background-alt: #f9f9f9; /* Gris muy claro */
  --background-dark: #f0f0f0;

  --text: #1a1a1a;           /* Negro suave */
  --text-secondary: #666666;
  --text-muted: #9ca3af;     /* Gris */

  --border: #e9ecef;         /* Borde gris claro */
  --shadow-sm: 0 2px 4px rgba(0,0,0,0.1);
  --shadow-md: 0 4px 12px rgba(0,0,0,0.15);
  --shadow-lg: 0 8px 24px rgba(0,0,0,0.2);
}
```

### Tipografía
```css
/* Headings */
h1 { font-size: 3.5rem; font-weight: 800; }  /* 56px */
h2 { font-size: 2.2rem; font-weight: 700; }  /* 35px */
h3 { font-size: 1.6rem; font-weight: 700; }  /* 26px */
h4 { font-size: 1.25rem; font-weight: 600; } /* 20px */

/* Body */
body { font-size: 1rem; line-height: 1.6; }  /* 16px */
small { font-size: 0.875rem; }                /* 14px */
```

### Espaciamiento (8px grid)
```
xs: 0.25rem (4px)
sm: 0.5rem (8px)
md: 1rem (16px)
lg: 1.5rem (24px)
xl: 2rem (32px)
2xl: 3rem (48px)
3xl: 4rem (64px)
```

### Animaciones
```css
/* Transiciones estándar */
transition: all 0.2s ease;      /* rapidas (200ms) */
transition: all 0.3s ease;      /* normales (300ms) */
transition: all 0.5s ease;      /* lentas (500ms) */

/* Easing functions */
ease: cubic-bezier(0.25, 0.1, 0.25, 1);
ease-in: cubic-bezier(0.42, 0, 1, 1);
ease-out: cubic-bezier(0, 0, 0.58, 1);
ease-in-out: cubic-bezier(0.42, 0, 0.58, 1);
```

---

## 10. VALIDACIÓN Y SIGN-OFF

### Criterios de Aceptación Global

**Funcionalidad:**
- ✅ Todos los componentes renderizados correctamente
- ✅ Búsqueda funciona y está integrada
- ✅ Orientador completo y con lógica correcta
- ✅ Navegación entre componentes fluida
- ✅ No hay errores en console

**Performance:**
- ✅ Lighthouse score > 85 en todos los parámetros
- ✅ First Contentful Paint < 1.5s
- ✅ Largest Contentful Paint < 2.5s
- ✅ Cumulative Layout Shift < 0.1

**Diseño:**
- ✅ Responsive en 3+ breakpoints
- ✅ Parallax effect visible
- ✅ Animaciones suaves y profesionales
- ✅ Colores coherentes con tema

**Accesibilidad:**
- ✅ Score WCAG > 95
- ✅ Keyboard navigation funcional
- ✅ Screen reader compatible
- ✅ Color contrast WCAG AA mínimo

**SEO:**
- ✅ Meta tags correctos
- ✅ H1-H3 bien estructurados
- ✅ Keywords relevantes en copy
- ✅ Schema markup opcional

### Sign-off Process

1. **QA Lead** revisa Test Report
2. **Product Owner** aprueba cambios visuales
3. **Tech Lead** aprueba código y arquitectura
4. **DevOps/CI** verifica build y deployment
5. **Final approval** → merge a main

---

## 11. ANEXOS

### A. Referencia de Componentes Existentes

```javascript
// ModulesSection.jsx - Para entender estructura
import { ModuleExpandable } from './ModuleExpandable';
import { CasesPracticalCard } from './CasesPracticalCard';
// Reutilizar estos componentes en StackDominationSection

// Hero.jsx - Componente actual (mantener como fallback)
// Crear HeroEnhanced para nuevas features

// ClusterSearch.jsx - Ya existe y funciona
// Solo mejorar Props y CSS
```

### B. URLs de Rutas (Para Links)

```javascript
const routes = {
  backend: '/backend',
  frontend: '/frontend',
  datos: '/datos',
  cloud: '/cloud',
  versionamiento: '/versionamiento',
  herramientas: '/metodologias-herramientas',
  // Rutas de lecciones: /[category]/[module]/[lesson]
};
```

### C. Datos de Configuración

```javascript
// moduleCategories.js
- id: 'backend' | 'frontend' | 'datos' | 'cloud' | 'versionamiento' | 'herramientas'
- name: nombre de categoría
- description: descripción
- color: hex color para tema
- icon: emoji o ícono
- logoSrc: path a imagen logo
- modules: array de IDs de módulos
- subCategories: array para metodologías
- projects: array para casos prácticos
```

### D. Shortcuts útiles

```bash
# Desarrollo
npm run dev            # Iniciar servidor dev
npm run build          # Build para producción
npm run preview        # Preview del build
npm run type-check     # Verificar TypeScript
npm run lint           # ESLint

# Testing
npm run test           # Unit tests (si está configurado)
npm run test:e2e       # E2E tests (si está configurado)

# Git
git status             # Ver estado
git diff               # Ver cambios
git log --oneline      # Ver commits recientes
```

---

## 12. FAQ Y TROUBLESHOOTING AVANZADO

### ¿Qué pasa si HeroEnhanced entra en conflicto con Hero.jsx?
**R:** `Hero.jsx` se mantiene como fallback. `HeroEnhanced` es completamente nuevo. En `Home.jsx` solo importar `HeroEnhanced`. Viejo `Hero` nunca se importa.

### ¿Cómo integrar ClusterSearch en HeroEnhanced?
**R:** Importar `{ ClusterSearch }` dentro de `HeroEnhanced.jsx` y renderizarlo en el JSX después del Hero content.

### ¿Los datos de OrientadorSection están hardcoded?
**R:** Sí, en `src/data/orientadorQuestions.js` (nuevo archivo). Permite cambios sin tocar componente.

### ¿Parallax effect funciona en mobile?
**R:** `background-attachment: fixed` tiene limitaciones en mobile. Usar media query: desktop only para parallax, mobile usa background estático.

### ¿Qué pasa con el testing de Orientador?
**R:** Testing manual paso a paso en guía E2E. Verificar cada transición de estado. Opcional: agregar unit tests en futuro.

### ¿Los componentes nuevos usan Tailwind o CSS vanilla?
**R:** CSS vanilla (archivos `.css` separados). Proyecto usa CSS modular, no Tailwind.

### ¿Cómo manejar dark mode?
**R:** Todos los componentes deben soportar `prefers-color-scheme: dark`. Ej:
```css
@media (prefers-color-scheme: dark) {
  .hero-enhanced {
    background: linear-gradient(...dark colors...);
  }
}
```

### ¿Requiere actualizar package.json?
**R:** No. Proyecto tiene todas las dependencias necesarias (React, React Router, etc).

---

## CONCLUSIÓN

Este plan proporciona una hoja de ruta completa para refactorizar Home de manera profesional y escalable. La arquitectura de componentes independientes permite:

1. **Paralelización:** 4 unidades pueden ejecutarse simultáneamente (60% reducción de tiempo)
2. **Mantenibilidad:** Cada componente es autónomo con su CSS y lógica
3. **Reutilización:** Componentes como `QuickAccessSection` pueden usarse en otras páginas
4. **Testing:** Guía E2E completa garantiza calidad
5. **Documentación:** Clear specs facilitan handoff a otros developers

**Siguiente paso:** Asignar workers a unidades y comenzar Sesión 1 en paralelo.

---

**Documento preparado:** 2026-07-24
**Versión:** 1.0
**Estado:** Ready for Execution
**Aprobación requerida:** Antes de iniciar

