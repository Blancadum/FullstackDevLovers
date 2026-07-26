# Auditoría de Calidad del CSS Grid - Landing Pages Hero Section

**Fecha:** 25 de Julio 2026
**Archivo Principal:** `src/styles/landing-shared.css` (líneas 65-130)
**Archivos Relacionados:**
- `src/styles/landing-hero-text.css`
- `src/styles/landing-hero-buttons.css`
- `src/components/LandingHeroText.jsx`
- `src/components/LandingHeroButtons.jsx`
- `src/pages/LandingGit.jsx` (ejemplo de implementación)
- `src/pages/LandingGit.css`

---

## ANÁLISIS 1: ¿El Grid Layout Está Correctamente Configurado?

### ❌ **NO - Hay Problemas Críticos**

#### Configuración Actual (landing-shared.css: 65-74)
```css
.landing-hero-content {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;     /* 2 columnas iguales */
  grid-auto-rows: auto;                /* Filas automáticas */
  gap: 3rem;
  position: relative;
  z-index: 1;
}
```

#### Problemas Identificados:

**1. Clase CSS No Se Aplica en las Landing Pages**
```jsx
// LandingGit.jsx línea 152
<div className="git-hero-content">  <!-- ❌ NO es .landing-hero-content -->
  <LandingHeroText ... />             <!-- Los estilos del grid no aplican -->
  <div className="hero-icon"> ... </div>
  <LandingHeroButtons ... />
</div>
```

**Impacto:** El `display: grid` se define en `.landing-hero-content` pero se usa `.git-hero-content` en el HTML. El grid nunca se aplica.

---

**2. Falta Definición Explícita de Filas**
```css
/* ACTUAL - Problemático */
grid-template-columns: 1fr 1fr;
grid-auto-rows: auto;                /* Automático, impredecible */

/* MEJOR PRÁCTICA */
grid-template-columns: 1fr 1fr;
grid-template-rows: auto auto auto;   /* Explícito, predecible */
```

**Impacto:** Sin `grid-template-rows` explícito, el posicionamiento con `grid-row: 3` es frágil. Depende del número de elementos y sus tamaños.

---

**3. Conflicto de Configuración**
- Grid definido para 2 columnas
- Pero el selector `.hero-icon` intenta usar `grid-row: 3`
- Sin `grid-template-rows` explícito, no se sabe si hay 3 filas

```css
.landing-hero-content > .hero-icon {
  grid-column: 2;
  grid-row: 3;        /* ❓ ¿Fila 3? ¿De dónde sale? */
  align-self: center;
}
```

---

## ANÁLISIS 2: ¿Los Selectores de Grid-Column y Grid-Row Son Correctos?

### ⚠️ **SINTÁXIS CORRECTA PERO NO APLICA A LA ESTRUCTURA REAL**

#### Análisis de Cada Selector:

**1. `.landing-hero-content > h1` (línea 77-84)**
```css
.landing-hero-content > h1 {
  grid-column: 1 / -1;     /* Sintaxis: ✅ Correcta */
                           /* Aplicación: ❌ NO EXISTE en DOM */
  font-size: 3.2rem;
  font-weight: 800;
  color: var(--text-primary);
  margin: 0 0 0.5rem 0;
  line-height: 1.2;
}
```

**Problema:**
```
Esperado:  <div class="landing-hero-content">
             <h1>Título</h1>  ← Hijo directo
           </div>

Real:      <div class="git-hero-content">
             <div class="landing-hero-text">
               <h1 class="landing-hero-title">Título</h1>  ← Nieto, no hijo
             </div>
           </div>
```

---

**2. `.landing-hero-content > .hero-subtitle` (línea 96-102)**
```css
.landing-hero-content > .hero-subtitle {
  grid-column: 1 / -1;     /* Sintaxis: ✅ Correcta */
                           /* Aplicación: ❌ NO EXISTE */
}
```

**Problema:** El subtitle existe como `.landing-hero-subtitle` dentro de `.landing-hero-text`, no como hijo directo.

---

**3. `.landing-hero-content > .hero-text` (línea 113-115)**
```css
.landing-hero-content > .hero-text {
  grid-column: 1;          /* Sintaxis: ✅ Correcta */
                           /* Aplicación: ❌ NO EXISTE */
}
```

**Problema:** No existe ningún elemento con clase `.hero-text` como hijo directo de `.landing-hero-content`.

---

**4. `.landing-hero-content > .hero-icon` (línea 118-122)**
```css
.landing-hero-content > .hero-icon {
  grid-column: 2;
  grid-row: 3;             /* ❓ FRÁGIL: sin grid-template-rows */
  align-self: center;
}
```

**Problema:**
- Elemento EXISTE ✅
- Grid-column 2: ✅ Correcto
- Grid-row 3: ⚠️ Frágil sin filas explícitas
- Si se agregan elementos antes, todo se reposiciona

---

**5. `.landing-hero-content > div:last-child` (línea 125-132)**
```css
.landing-hero-content > div:last-child {
  grid-column: 1 / -1;     /* Sintaxis: ✅ Correcta */
                           /* Aplicación: ⚠️ GENÉRICO EXCESIVO */
  margin-top: 1rem;
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
}
```

**Problema:**
- Este selector SÍ aplica a `.landing-hero-buttons` ✅
- PERO es genérico: applica a cualquier último div
- Duplica propiedades de `.landing-hero-buttons` CSS (gap, flex-wrap)
- Falta especificidad: `.landing-hero-buttons` es más específico

---

## ANÁLISIS 3: ¿Hay Conflictos Entre Estilos Globales y Locales?

### 🔴 **SÍ - MÚLTIPLES CONFLICTOS DETECTADOS**

#### Conflicto 1: Selectores Duplicados

| Propiedad | landing-shared.css | LandingGit.css | landing-hero-text.css | Resultado |
|-----------|-------------------|----------------|----------------------|-----------|
| h1 font-size | No aplica (selector no existe) | 3.2rem (hero-text h1) | 3.2rem (.landing-hero-title) | ✅ Consistente |
| subtitle font-size | No aplica (selector no existe) | 1.2rem (.hero-subtitle) | 1.2rem (.landing-hero-subtitle) | ⚠️ Duplicado |
| description font-size | No aplica (selector no existe) | 1rem (.hero-description) | 1rem (.landing-hero-description) | ⚠️ Duplicado |

---

#### Conflicto 2: Nombres de Clases Inconsistentes

**LandingHeroText renderiza:**
```jsx
<div className="landing-hero-text">
  <h1 className="landing-hero-title">...</h1>
  <p className="landing-hero-subtitle">...</p>
  <p className="landing-hero-description">...</p>
</div>
```

**landing-shared.css espera:**
```css
.landing-hero-content > h1 { ... }
.hero-text h1 { ... }
.hero-subtitle { ... }
```

**Landing-hero-text.css proporciona:**
```css
.landing-hero-title { ... }
.landing-hero-subtitle { ... }
.landing-hero-description { ... }
```

**Resultado:** Hay 3 conjuntos diferentes de selectores para lo mismo.

---

#### Conflicto 3: Conflictos de Especificidad

**En landing-hero-buttons.css (línea 6-16):**
```css
.landing-hero-buttons {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
}
```

**En landing-shared.css (línea 125-132):**
```css
.landing-hero-content > div:last-child {
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
}
```

**Especificidad:**
- `.landing-hero-buttons` = 10 (1 clase)
- `.landing-hero-content > div:last-child` = 20 (1 clase + 2 combinator)

**Resultado:** El selector de landing-shared.css GANA. Pero es más genérico y frágil.

---

#### Conflicto 4: Botones en LandingGit.css

**LandingGit.css define:**
```css
.btn-primary { background: #e8491f; }
.btn-secondary { background: white; }
```

**landing-hero-buttons.css define:**
```css
.landing-btn-primary { background: var(--primary-color, #2196f3); }
.landing-btn-secondary { background: white; }
```

**En HTML:**
```jsx
<Link className="landing-btn landing-btn-primary"> ... </Link>
```

**Resultado:**
- LandingGit.css define `.btn-primary` (Git color #e8491f)
- Pero HTML usa `.landing-btn-primary` (Color CSS variable #2196f3)
- En Landing Git se ve naranja (Git color)
- En otros landings se ve azul (Primary color)

---

## ANÁLISIS 4: ¿El Selector `.landing-hero-content > div:last-child` Es Demasiado Genérico?

### 🔴 **SÍ - MUY PROBLEMÁTICO**

#### Problemas de Especificidad y Selección

```css
.landing-hero-content > div:last-child { ... }
```

**Problemas:**

1. **Aplica a Cualquier Último Div**
   ```jsx
   <div class="landing-hero-content">
     <div>...</div>
     <div>...</div>
     <div>❌ Este selector se aplica a CUALQUIER div aquí</div>
   </div>
   ```

2. **Frágil ante Cambios de Estructura**
   ```jsx
   // Versión 1: Funciona
   <div class="landing-hero-content">
     <div class="landing-hero-text">...</div>
     <div class="hero-icon">...</div>
     <div class="landing-hero-buttons">← LAST-CHILD, selector aplica</div>
   </div>

   // Versión 2: Se rompe
   <div class="landing-hero-content">
     <div class="landing-hero-text">...</div>
     <div class="hero-icon">...</div>
     <div class="landing-hero-buttons">...</div>
     <div class="some-new-element">← Ahora es LAST-CHILD, selector se aplica aquí</div>
   </div>
   ```

3. **Conflictos con Componentes Específicos**
   - `.landing-hero-buttons` tiene su propio CSS (landing-hero-buttons.css)
   - El selector `.landing-hero-content > div:last-child` duplica y sobrescribe

4. **Duplicación de Propiedades**
   | Propiedad | landing-hero-buttons.css | landing-shared.css selector |
   |-----------|--------------------------|------------------------------|
   | display: flex | ✅ Línea 7 | ✅ Línea 128 |
   | gap | ✅ Línea 10 (1rem) | ✅ Línea 130 (1rem) |
   | flex-wrap | ✅ Línea 11 | ✅ Línea 131 |
   | justify-content | ✅ Línea 8 | ✅ Línea 129 |
   | margin-top | ❌ No tiene | ⚠️ Línea 127 (1rem) |

5. **Mejor Alternativa: Ser Específico**
   ```css
   /* ❌ Evitar: Genérico */
   .landing-hero-content > div:last-child { ... }

   /* ✅ Mejor: Específico */
   .landing-hero-buttons { ... }

   /* ✅ O: Si necesitas en el padre */
   .landing-hero-content .landing-hero-buttons { ... }
   ```

---

## ANÁLISIS 5: ¿Funciona `grid-column: 1 / -1`?

### ✅ **SINTÁXIS CORRECTA** | ❌ **NO APLICA EN LA PRÁCTICA**

#### Cómo Funciona grid-column: 1 / -1

En un grid de 2 columnas:
```
Grid lines:  1  |  2  |  3
             ---|-----|---
col 1         |       |
             ---|-----|---
             |  col 2 |
             ---|-----|---
```

- `grid-column: 1 / -1` significa:
  - Empezar en línea 1 (inicio de col 1)
  - Terminar en línea -1 (última línea)
  - Resultado: Abarcar todas las columnas (1 a 3)

#### ¿Está Funcionando?

**NO** - Porque:

1. Los selectores NO coinciden con la estructura HTML
   ```css
   .landing-hero-content > h1 { grid-column: 1 / -1; }
   /* h1 no es hijo directo de .landing-hero-content */
   ```

2. El grid no se aplica a `.git-hero-content`
   ```jsx
   <div className="git-hero-content">  <!-- ❌ No tiene display: grid -->
   ```

3. Incluso donde SÍ aplica (> div:last-child), es accidental
   - Funciona porque `.landing-hero-buttons` es el último div
   - Pero es frágil y depende de la estructura

#### Prueba de Concepto - Cómo Debería Ser

```html
<div class="landing-hero-content">  <!-- ✅ display: grid; grid-template-columns: 1fr 1fr; -->
  <h1>Título</h1>                    <!-- ✅ grid-column: 1 / -1; FUNCIONA -->
  <p class="hero-subtitle">Subtítulo</p>  <!-- ✅ grid-column: 1 / -1; FUNCIONA -->
  <div class="hero-text">            <!-- ✅ grid-column: 1; FUNCIONA -->
    <p>Descripción</p>
  </div>
  <div class="hero-icon">            <!-- ✅ grid-column: 2; grid-row: 3; FUNCIONA (si hay 3 filas) -->
    <img />
  </div>
  <div class="landing-hero-buttons">  <!-- ✅ grid-column: 1 / -1; FUNCIONA -->
    <button>...</button>
  </div>
</div>
```

---

## ANÁLISIS 6: ¿El `grid-auto-rows: auto` Causa Problemas?

### ⚠️ **SÍ - ESPECIALMENTE COMBINADO CON `grid-row` MANUAL**

#### Qué Hace `grid-auto-rows: auto`

```css
grid-auto-rows: auto;  /* Cada fila automática toma altura de su contenido */
```

**Ventajas:**
- ✅ Las filas crecen según necesitan
- ✅ Flexible para contenido variable
- ✅ Sin espacios vacíos innecesarios

**Desventajas:**
- ❌ Sin `grid-template-rows` explícito, es impredecible
- ❌ Posicionar manualmente con `grid-row` es frágil
- ❌ Cambios de contenido pueden afectar layout

#### Problema en Este Caso

```css
.landing-hero-content {
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: auto;              /* ❌ Automático, sin estructura */
}

.landing-hero-content > .hero-icon {
  grid-column: 2;
  grid-row: 3;                       /* ⚠️ ¿Hay realmente 3 filas? */
}
```

**Escenarios Problemáticos:**

1. **Sin estructura explícita**
   ```
   Fila 1: [h1 auto 3.2rem] [? auto 0px]  ← .hero-icon quiere fila 3
   Fila 2: [descripción auto 2rem] [? auto 0px]
   Fila 3: [botones auto 1rem] [✅ aquí aparece .hero-icon]
   ```

2. **Si se agregan elementos**
   ```
   Antes:  3 filas automáticas
   +1 elemento:  4 filas automáticas
   .hero-icon que espera fila 3 se ve afectado
   ```

#### Mejor Práctica

```css
.landing-hero-content {
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto auto auto;  /* ✅ Explícito, predecible */
  gap: 3rem;
}

.landing-hero-content > .hero-icon {
  grid-column: 2;
  grid-row: 2 / 4;                    /* ✅ Puede ocupar filas 2-3, más robusto */
}
```

---

## ANÁLISIS 7: ¿Orden de Elementos en HTML Coincide con CSS?

### 🔴 **NO - HAY UN GRAN DESAJUSTE**

#### HTML Esperado por CSS

```
.landing-hero-content (GRID 2 cols)
├── <h1>                              (span fila 1, col 1-2)
├── <p class="hero-subtitle">         (span fila 2, col 1-2)
├── <p class="hero-description">      (implícito)
├── <div class="hero-text">           (fila 3, col 1)
├── <div class="hero-icon">           (fila 3, col 2)
└── <div class="landing-hero-buttons">(span fila 4, col 1-2)
```

#### HTML Real

```
.git-hero-content (NO ES GRID)
├── <div class="landing-hero-text">   (NO es grid child)
│   ├── <h1 class="landing-hero-title">
│   ├── <p class="landing-hero-subtitle">
│   └── <p class="landing-hero-description">
├── <div class="hero-icon">           (NO alineado por grid)
└── <div class="landing-hero-buttons">(NO alineado por grid)
```

#### Mapeo de Selectores

| Selector CSS | Elemento Esperado | Elemento Real | ¿Aplica? |
|--------------|------------------|--------------|----------|
| `.landing-hero-content > h1` | `<h1>` directo | Dentro de `.landing-hero-text` | ❌ NO |
| `.hero-text h1` | `<div class="hero-text"><h1>` | `.landing-hero-text > .landing-hero-title` | ⚠️ NO COINCIDE |
| `.landing-hero-content > .hero-subtitle` | `<p class="hero-subtitle">` directo | Dentro de `.landing-hero-text` | ❌ NO |
| `.hero-subtitle` | Cualquier subtitle | `.landing-hero-subtitle` | ✅ SÍ |
| `.landing-hero-content > .hero-icon` | `<div class="hero-icon">` directo | Existe | ✅ SÍ |
| `.landing-hero-content > div:last-child` | Último div | `.landing-hero-buttons` | ✅ SÍ |

---

## TABLA RESUMEN: PROBLEMAS DETECTADOS

| # | Problema | Línea | Severidad | Impacto | Verificable |
|---|----------|-------|-----------|---------|------------|
| 1 | Grid no se aplica (.git-hero-content ≠ .landing-hero-content) | 152 (JSX) | 🔴 CRÍTICO | Layout no usa grid en absoluto | Devtools: sin display:grid |
| 2 | Selectores > h1, > .hero-subtitle no existen en DOM | 77, 96 | 🔴 CRÍTICO | Estilos grid nunca se aplican | Devtools: no hay h1 hijo |
| 3 | grid-auto-rows: auto sin grid-template-rows explícito | 70 | 🟠 ALTA | Posicionamiento con grid-row frágil | Agregar elemento: layout cambia |
| 4 | .hero-icon usa grid-row: 3 sin garantía de 3 filas | 120 | 🟠 ALTA | Posición impredecible | Devtools: verificar grid lines |
| 5 | Selector .landing-hero-content > div:last-child demasiado genérico | 125 | 🟠 ALTA | Frágil ante cambios de estructura | Agregar div: selector se mueve |
| 6 | Duplicación: landing-hero-buttons.css vs landing-shared.css | 7 vs 128 | 🟡 MEDIA | Confusión, dificultad mantenimiento | grep -r "gap: 1rem" |
| 7 | Conflicto de especificidad: .btn-primary vs .landing-btn-primary | 89 vs 37 | 🟡 MEDIA | Colores inconsistentes entre páginas | Inspeccionar botón |
| 8 | Nombres de clases inconsistentes (.hero-text vs .landing-hero-text) | Múltiples | 🟡 MEDIA | Confusión, estilos no aplican | Buscar .hero-text |
| 9 | Responsive media queries duplicadas y conflictivas | 520 vs 466 | 🟡 MEDIA | Comportamiento impredecible en mobile | Resizing en devtools |
| 10 | Sin gap en flex container .landing-hero-text | 8 | 🟢 MENOR | Elementos muy juntos | Inspeccionar hero-text |

---

## PUNTUACIÓN DE CALIDAD CSS GRID

```
CATEGORÍA                                    PUNTUACIÓN
─────────────────────────────────────────────────────
Correctitud de Grid Layout                    2/10 ❌
Selectores Apropiados                         3/10 ❌
Consistencia de Nombres                       3/10 ❌
Especificidad CSS                             4/10 ⚠️
Ausencia de Duplicación                       2/10 ❌
Responsividad                                 4/10 ⚠️
Mantenibilidad                                2/10 ❌
─────────────────────────────────────────────────────
PUNTUACIÓN GLOBAL                            20/70 🔴
NIVEL DE ALERTA                             CRÍTICO
```

---

## RECOMENDACIONES INMEDIATAS

### Opción 1: Corregir Clase CSS (Rápido, Bajo Riesgo)
```jsx
// Cambiar en LandingGit.jsx línea 152
<div className="landing-hero-content">  <!-- ✅ Usar clase global -->
  <LandingHeroText ... />
  <div className="hero-icon"> ... </div>
  <LandingHeroButtons ... />
</div>
```

### Opción 2: Actualizar Selectores CSS (Recomendado)
```css
/* Cambiar landing-shared.css para coincidir con estructura */
.landing-hero-content .landing-hero-text {
  /* Ya es flex en landing-hero-text.css */
}

.landing-hero-content .landing-hero-text .landing-hero-title {
  grid-column: 1 / -1;
  /* ... */
}
```

### Opción 3: Refactor Completo (Mejor a Largo Plazo)
- Eliminar `.git-hero-content` en favor de `.landing-hero-content`
- Consolidar nombres de clases (no .hero-text Y .landing-hero-text)
- Hacer grid-template-rows explícito
- Eliminar selector genérico > div:last-child

---

## ARCHIVOS A REVISAR MANUALMENTE

1. `/src/styles/landing-shared.css` - Líneas 65-130 (grid principal)
2. `/src/styles/landing-hero-text.css` - Verificar nombres de clases
3. `/src/styles/landing-hero-buttons.css` - Duplicación con landing-shared.css
4. `/src/components/LandingHeroText.jsx` - Verificar renderizado
5. `/src/components/LandingHeroButtons.jsx` - Verificar renderizado
6. `/src/pages/LandingGit.jsx` - Línea 152, clase del contenedor
7. `/src/pages/LandingGit.css` - Conflictos de nombre de clase (.btn-primary)

---

## CONCLUSIÓN

El CSS grid de landing-shared.css está **mal configurado para la estructura HTML actual**. Los problemas principales son:

1. **Mismatch Crítico:** Clase CSS diferente (.git-hero-content ≠ .landing-hero-content)
2. **Selectores Inválidos:** Buscan elementos que no son hijos directos
3. **Falta de Explicititud:** grid-auto-rows sin grid-template-rows
4. **Especificidad Confusa:** Selectores genéricos compiten con específicos
5. **Duplicación:** Propiedades definidas en múltiples lugares

**Puntuación:** 20/70 (Crítico)
**Recomendación:** Refactor inmediato necesario
