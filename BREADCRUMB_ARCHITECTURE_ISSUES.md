# Problemas Arquitectónicos: Sistema de Breadcrumbs

---

## Visualización 1: Duplicación de Lógica

```
┌─────────────────────────────────────────────────────────────┐
│  MISMA LÓGICA EN DOS LUGARES (80+ líneas duplicadas)        │
└─────────────────────────────────────────────────────────────┘

/src/hooks/useBreadcrumb.js                /src/components/Breadcrumb.jsx
│                                          │
├─ export function useBreadcrumb()         ├─ export function generateBreadcrumbFromPath()
│  └─ const paths = pathname.split('/')   │  └─ const paths = pathname.split('/')
│  └─ const module = modulesWithLessons   │  └─ const module = modulesWithLessons
│     .find(m => m.id === moduleId)       │     .find(m => m.id === moduleId)
│  └─ [50+ más líneas IDÉNTICAS]          │  └─ [50+ más líneas IDÉNTICAS]
│  └─ return breadcrumbs                  │  └─ return breadcrumbs
│                                          │
                    ↓                                    ↓
            DIFERENCIA ENCONTRADA:
            Línea 70-71 vs 101-102: URLs diferentes
            para secciones (query params vs path)

/src/components/Breadcrumb.jsx (líneas 128-130)
│
├─ export function generateBreadcrumbItems(pathname)
│  └─ return generateBreadcrumbFromPath(pathname)  ← Wrapper innecesario
│
FUNCIÓN REDUNDANTE: Genera pero no añade valor
```

---

## Visualización 2: Flujo de Datos - Props Fantasma

```
┌────────────────────────────────────────────────────────────────┐
│  PROPS BREADCRUMBS: Pasan por 4+ NIVELES pero NO se renderizan │
└────────────────────────────────────────────────────────────────┘

LessonArrays.jsx (página 1 de 193)
│
├─ const breadcrumbs = useBreadcrumb()  ← [CÁLCULO #1]
│  │
│  └─ <LessonTemplate breadcrumbs={breadcrumbs}>
│     │
│     ├─ Recibe: breadcrumbs (prop)
│     ├─ Renderiza: ✗ NO usa breadcrumbs
│     │
│     └─ <LessonLayout breadcrumbs={breadcrumbs}>
│        │
│        ├─ Recibe: breadcrumbs (línea 46)
│        ├─ Firma: function LessonLayout({ ... })  ← NO en parámetros
│        ├─ Renderiza: ✗ NO existe
│        │
│        └─ Resultado: Prop circula pero NUNCA se renderiza
│
├─ También en Breadcrumb.jsx:
│  └─ if (!items) generateBreadcrumbFromPath()  ← [CÁLCULO #2]
│     └─ Recalcula lo que ya se hizo en LessonArrays
│
CONCLUSIÓN: 3+ cálculos innecesarios, 0 renderizaciones en Lesson
```

---

## Visualización 3: Búsquedas O(n) en Cascada

```
┌─────────────────────────────────────────────────────────────┐
│  OPERACIONES POR PÁGINA (Sin Memoization)                   │
└─────────────────────────────────────────────────────────────┘

URL: /java-fundamentos/tipos-datos

Paso 1: Encontrar módulo "java-fundamentos"
┌─────────────────────────────────────────┐
│ modulesWithLessons.find(m => ...)       │
├─────────────────────────────────────────┤
│ Busca en: [ 'aws', 'docker', 'git',     │
│            'java-fundamentos', ... ]    │
│ Iteraciones: 30 (peor caso: 50)         │
│ Complejidad: O(50)                      │
└─────────────────────────────────────────┘

Paso 2: Encontrar sección "tipos-datos"
┌─────────────────────────────────────────┐
│ module.sections.find(s => ...)          │
├─────────────────────────────────────────┤
│ Busca en: [ 'introduccion', 'conceptos',│
│            'tipos-datos', ... ]         │
│ Iteraciones: 8 (peor caso: 15)          │
│ Complejidad: O(15)                      │
└─────────────────────────────────────────┘

Paso 3: Encontrar lección "tipos-datos"
┌─────────────────────────────────────────┐
│ section.lessons.find(l => ...)          │
├─────────────────────────────────────────┤
│ Busca en: [ 'primitivos', 'objetos',    │
│            'arrays', ... ]              │
│ Iteraciones: 10 (peor caso: 20)         │
│ Complejidad: O(20)                      │
└─────────────────────────────────────────┘

Total complejidad: O(50 + 15 + 20) = O(85)
Cada render: ~115 comparaciones
193 páginas: ~22,195 comparaciones por navegación
```

---

## Visualización 4: Sin Memoization = Recálculos Innecesarios

```
┌────────────────────────────────────────────────────────────┐
│  COMPARATIVA: CON vs SIN MEMOIZATION                       │
└────────────────────────────────────────────────────────────┘

ESCENARIO: Usuario está en /java-fundamentos/tipos-datos

SIN MEMOIZATION (ACTUAL)
────────────────────────
1. Página carga              → useBreadcrumb() → 115 comparaciones ✓
2. Usuario desplaza scroll  → re-render       → 115 comparaciones ✗
3. Usuario mueve mouse      → re-render       → 115 comparaciones ✗
4. Componente cambia estado → re-render       → 115 comparaciones ✗
5. Input en formulario      → re-render       → 115 comparaciones ✗
6. Tooltip aparece          → re-render       → 115 comparaciones ✗
7. Otros componentes render → re-render       → 115 comparaciones ✗
────────────────────────────────────────────────────────────
Total en 1 minuto de uso: 800+ comparaciones (INEFICIENTE)

CON MEMOIZATION (MEJORADO)
──────────────────────────
1. Página carga              → useBreadcrumb() → 115 comparaciones ✓
2. Usuario desplaza scroll  → cache           → 0 comparaciones ✓
3. Usuario mueve mouse      → cache           → 0 comparaciones ✓
4. Componente cambia estado → cache           → 0 comparaciones ✓
5. Input en formulario      → cache           → 0 comparaciones ✓
6. Tooltip aparece          → cache           → 0 comparaciones ✓
7. Usuario navega a otra página → 115 comparaciones ✓
──────────────────────────────────────────────────────────
Total en 1 minuto: 230 comparaciones (63% REDUCCIÓN)
```

---

## Visualización 5: Dónde Se Renderiza Realmente

```
┌────────────────────────────────────────────────────────────┐
│  ANÁLISIS: ¿DÓNDE APARECE EL BREADCRUMB EN LA PANTALLA?    │
└────────────────────────────────────────────────────────────┘

LUGAR 1: App.jsx
┌─────────────────────┐
│ import useBreadcrumb│
│                     │
│ [NO SE USA]         │
└─────────────────────┘
         ↓
  NO renderiza nada

LUGAR 2: Navbar.jsx (ÚNICO LUGAR DONDE APARECE)
┌──────────────────────────────────┐
│ <Navbar breadcrumbs={breadcrumbs}│
│                                  │
│ {breadcrumbs && (                │
│   <Breadcrumb items={...} />     │  ← ÚNICO RENDER
│ )}                               │
└──────────────────────────────────┘

LUGAR 3: LessonTemplate.jsx
┌──────────────────────────────────┐
│ Recibe: breadcrumbs (prop)       │
│ Renderiza: NO                    │
│ Pasa: sí (a LessonLayout)        │
└──────────────────────────────────┘

LUGAR 4: LessonLayout.jsx
┌──────────────────────────────────┐
│ Recibe: breadcrumbs (prop)       │
│ Renderiza: NO                    │
│ Usa: NO                          │
└──────────────────────────────────┘

CONCLUSIÓN: Se calcula en 193 páginas
            Se renderiza en 1 lugar (Navbar)
            Se pasa a través de 4+ niveles sin usar
```

---

## Visualización 6: Impacto en Mantenibilidad

```
┌────────────────────────────────────────────────────────────┐
│  CAMBIO NECESARIO: Agregar nueva sección a Git              │
└────────────────────────────────────────────────────────────┘

ACTUAL (DÚO DE ARCHIVOS):
──────────────────────────
Cambio necesario: Actualizar generateBreadcrumbFromPath()
Ubicación 1: /src/hooks/useBreadcrumb.js - línea 80
  if (sectionId === 'nuevaSeccion') { ... }
Ubicación 2: /src/components/Breadcrumb.jsx - línea 110
  if (sectionId === 'nuevaSeccion') { ... }
Ubicación 3: Posiblemente /src/config/modulesConfig.js

RIESGO: ¿Qué pasa si olvidas actualizar uno de los 2 lugares?
        → Bug silencioso
        → Diferentes comportamientos en diferentes páginas
        → Difícil de debuggear (¿cuál es la fuente de verdad?)

IDEAL (FUENTE ÚNICA):
────────────────────
Cambio necesario: Solo useBreadcrumb.js
Ubicación: /src/hooks/useBreadcrumb.js - línea 80
  if (sectionId === 'nuevaSeccion') { ... }

VENTAJA: Un solo lugar
         Cambio automático en todas las 193 páginas
         Sin duplicación = sin bugs duplicados
```

---

## Tabla Resumen: 6 Ineficiencias

| # | Problema | Severidad | Ubicación | Impacto | Líneas Afectadas |
|---|----------|-----------|-----------|---------|-----------------|
| 1 | Lógica duplicada 80+ líneas | CRÍTICA | useBreadcrumb.js + Breadcrumb.jsx | Mantenimiento, bugs | 16-100 + 51-126 |
| 2 | Sin memoization | ALTA | useBreadcrumb.js | 22,195 comparaciones/nav | 16-100 |
| 3 | Props no usados | ALTA | LessonTemplate, ModulePage | 193 cálculos innec. | 23, 46, 845 |
| 4 | find() O(n) × 3 | MEDIA | useBreadcrumb.js | O(85) vs O(1) | 35, 62, 81 |
| 5 | Fallback redundante | MEDIA | Breadcrumb.jsx | Recálculo si no items | 9-11 |
| 6 | key={index} débil | BAJA | Breadcrumb.jsx | Re-renders innec. | 30 |

---

## Recomendación: Prioridades de Refactorización

```
PRIORIDAD 1: CRÍTICA
────────────────────
Eliminar duplicación de 80+ líneas
- Opción A: Mantener useBreadcrumb.js como fuente única
           Eliminar generateBreadcrumbFromPath() de Breadcrumb.jsx
- Opción B: Crear archivo breadcrumb.utils.js con lógica
           Importar en ambos lugares (aún así: 2 imports)
Impacto: Reduce mantenimiento, elimina bugs duplicados

PRIORIDAD 2: ALTA
─────────────────
Agregar useMemo() al hook
- Previene recálculos en cada render
- Reduce 22,195 → ~115 comparaciones por navegación
- Tiempo: 2 líneas de código

Eliminar props fantasma
- LessonTemplate: quitar breadcrumbs prop
- LessonLayout: quitar referencia a breadcrumbs
- 193 páginas: actualizaciones automáticas

PRIORIDAD 3: MEDIA
──────────────────
Optimizar búsquedas
- Convertir modulesWithLessons a Map
- Precalcular en modulesConfig.js
- O(85) → O(3) por operación

Centralizar lógica
- Breadcrumb.jsx: solo recibe items, no calcula
- Componente: puro render, sin lógica

PRIORIDAD 4: BAJA
─────────────────
Corregir clave de map
- key={index} → key={item.label || `breadcrumb-${index}`}
```

---

## Flujo Ideal (Después de Refactorización)

```
ACTUAL (Confuso)
════════════════

LessonArrays.jsx
  ├─ import useBreadcrumb                    ← Hook
  ├─ const breadcrumbs = useBreadcrumb()     ← Cálculo
  └─ <LessonTemplate breadcrumbs={...} />    ← Prop fantasma
      └─ <LessonLayout breadcrumbs={...} />
          └─ (no renderiza)

App.jsx
  ├─ import useBreadcrumb                    ← Importado pero no usado
  └─ <Header ... />
      └─ <Navbar breadcrumbs={undefined} />
          └─ <Breadcrumb items={undefined} />
              └─ if (!items) generateBreadcrumbFromPath()  ← Recálculo


IDEAL (Claro)
═════════════

App.jsx
  ├─ const breadcrumbs = useBreadcrumb()     ← UNA SOLA VEZ
  └─ <Header breadcrumbs={breadcrumbs} />
      └─ <Navbar breadcrumbs={breadcrumbs} />
          └─ <Breadcrumb items={breadcrumbs} />
              └─ renderiza (si items existe)

LessonPages (160+)
  ├─ NO importan useBreadcrumb
  └─ NO calculan breadcrumbs
      └─ Sin overhead innecesario
```

