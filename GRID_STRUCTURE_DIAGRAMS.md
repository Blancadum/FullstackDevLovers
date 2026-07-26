# Diagramas Visuales - Estructura CSS Grid vs HTML Real

## DIAGRAMA 1: Lo Que CSS Espera (landing-shared.css)

```
.landing-hero-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: auto;
  gap: 3rem;
}

┌─────────────────────────────────────────────────────────┐
│         .landing-hero-content (GRID)                    │
├────────────────────────┬────────────────────────────────┤
│                        │                                │
│  h1 (grid-column: 1/3) │   (span full width)            │
│  grid-row: 1           │                                │
│                        │                                │
├────────────────────────┴────────────────────────────────┤
│                        │                                │
│  .hero-subtitle        │   (span full width)            │
│  (grid-column: 1/-1)   │   grid-row: 2                  │
│                        │                                │
├────────────────────────┬────────────────────────────────┤
│                        │                                │
│  .hero-text            │  .hero-icon                    │
│  (grid-column: 1)      │  (grid-column: 2)              │
│  grid-row: 3           │  grid-row: 3                   │
│                        │  align-self: center            │
│                        │                                │
├────────────────────────┴────────────────────────────────┤
│                        │                                │
│  .landing-hero-buttons │   (span full width)            │
│  (grid-column: 1/-1)   │   grid-row: 4                  │
│                        │                                │
└────────────────────────┴────────────────────────────────┘

GRID LINES (2 columnas):
  1     2     3
  |     |     |
━━━━━━━━━━━━━━━
  COL1  COL2
━━━━━━━━━━━━━━━
```

---

## DIAGRAMA 2: Lo Que HTML Realmente Proporciona (LandingGit.jsx)

```
<section className="git-hero">
  <div className="git-hero-content">
    <LandingHeroText />
    <div className="hero-icon" />
    <LandingHeroButtons />
  </div>
</section>

┌─────────────────────────────────────────────────────────┐
│         .git-hero-content (SIN GRID ❌)                 │
│         display: block | (no grid)                      │
├─────────────────────────────────────────────────────────┤
│                                                         │
│  ┌──────────────────────────────────────────────────┐  │
│  │  .landing-hero-text                              │  │
│  │  (display: flex; flex-direction: column)         │  │
│  ├──────────────────────────────────────────────────┤  │
│  │  <h1 className="landing-hero-title">Título</h1> │  │
│  ├──────────────────────────────────────────────────┤  │
│  │  <p className="landing-hero-subtitle">Sub</p>   │  │
│  ├──────────────────────────────────────────────────┤  │
│  │  <p className="landing-hero-description">Desc</p>│  │
│  └──────────────────────────────────────────────────┘  │
│                                                         │
│  ┌──────────────────────────────────────────────────┐  │
│  │ <div className="hero-icon">                      │  │
│  │   <img src="..." />                              │  │
│  │ </div>                                           │  │
│  └──────────────────────────────────────────────────┘  │
│                                                         │
│  ┌──────────────────────────────────────────────────┐  │
│  │  .landing-hero-buttons (display: flex)           │  │
│  ├──────────────────────────────────────────────────┤  │
│  │  <Link className="landing-btn ...">...</Link>   │  │
│  │  <a className="landing-btn ...">...</a>         │  │
│  └──────────────────────────────────────────────────┘  │
│                                                         │
└─────────────────────────────────────────────────────────┘

PROBLEMA: Sin grid, los selectores de landing-shared.css
          > h1, > .hero-subtitle no tienen efecto
```

---

## DIAGRAMA 3: Mapeo de Selectores - ¿Dónde Aplican?

```
SELECTORES EN landing-shared.css (líneas 77-132)
┌──────────────────────────────────────────────────────────┐

.landing-hero-content > h1
├─ Sintaxis: ✅ Válida
├─ Estructura esperada: <div class="landing-hero-content"><h1>...</h1></div>
├─ Estructura real: <div class="git-hero-content"><div class="landing-hero-text"><h1>...</h1></div></div>
└─ ¿APLICA? ❌ NO - h1 no es hijo directo

.landing-hero-content > .hero-subtitle
├─ Sintaxis: ✅ Válida
├─ Estructura esperada: <div class="landing-hero-content"><p class="hero-subtitle">...</p></div>
├─ Estructura real: Dentro de .landing-hero-text (no hijo directo)
└─ ¿APLICA? ❌ NO - P no es hijo directo

.hero-text h1
├─ Sintaxis: ✅ Válida
├─ Estructura esperada: <div class="hero-text"><h1>...</h1></div>
├─ Estructura real: <div class="landing-hero-text"><h1 class="landing-hero-title">...</h1></div>
└─ ¿APLICA? ❌ NO - Nombre de clase diferente

.landing-hero-content > .hero-text
├─ Sintaxis: ✅ Válida
├─ Estructura esperada: <div class="landing-hero-content"><div class="hero-text">...</div></div>
├─ Estructura real: <div class="landing-hero-text">...</div>
└─ ¿APLICA? ❌ NO - Clase diferente (.landing-hero-text)

.landing-hero-content > .hero-icon
├─ Sintaxis: ✅ Válida
├─ Estructura esperada: <div class="landing-hero-content"><div class="hero-icon">...</div></div>
├─ Estructura real: <div class="git-hero-content"><div class="hero-icon">...</div></div>
└─ ¿APLICA? ⚠️ PARCIAL - Existe, pero grid padre no existe (.git-hero-content ≠ .landing-hero-content)

.landing-hero-content > div:last-child
├─ Sintaxis: ✅ Válida
├─ Estructura esperada: Último <div> hijo de .landing-hero-content
├─ Estructura real: Último <div> de .git-hero-content = .landing-hero-buttons
└─ ¿APLICA? ⚠️ SÍ, PERO - Grid padre no existe, selector es genérico

└──────────────────────────────────────────────────────────┘
```

---

## DIAGRAMA 4: Grid vs Flex - Estructuras Actuales

```
┌─ ESTADO ACTUAL ─────────────────────────────────────┐

.git-hero-content (display: block por defecto)
│
├─ .landing-hero-text (display: FLEX)
│  ├─ flex-direction: column
│  ├─ gap: 1rem
│  │
│  ├─ h1 (2.2rem → 3.2rem responsive)
│  ├─ p.landing-hero-subtitle (1rem → 1.2rem)
│  └─ p.landing-hero-description (0.9rem → 1rem)
│
├─ div.hero-icon (width: auto, max-height: 300px)
│
└─ .landing-hero-buttons (display: FLEX)
   ├─ justify-content: center
   ├─ gap: 1rem
   ├─ flex-wrap: wrap
   │
   ├─ Link.landing-btn-primary
   ├─ a.landing-btn-secondary
   └─ Link.landing-btn-tertiary (opcional)

RESULTADO: 3 flex containers, sin grid coordinando

───────────────────────────────────────────────────────┘
```

---

## DIAGRAMA 5: CSS Cascade - Conflictos de Especificidad

```
ELEMENTO: <h1 class="landing-hero-title">Título</h1>

Selectores que podrían aplicar:
┌────────────────────────────────────────────┐

1. h1 (elemento)
   Especificidad: 1 (0,0,1)
   ✅ APLICA - Es h1
   Estilos: Defecto del navegador

2. .landing-hero-title (clase)
   Especificidad: 10 (0,1,0)
   ✅ APLICA - Definida en landing-hero-text.css
   Estilos:
     font-size: 3.2rem;
     font-weight: 800;
     color: #2c3e50;
     margin: 0;
     line-height: 1.2;
   VENCE a: h1

3. .landing-hero-text h1 (descendant)
   Especificidad: 11 (0,1,1)
   ✅ APLICA - En landing-hero-text.css
   Estilos: (heredados de .landing-hero-title)
   VENCE a: .landing-hero-title

4. .hero-text h1 (descendant)
   Especificidad: 11 (0,1,1)
   ❌ NO APLICA - No hay .hero-text
   Ubicación: landing-shared.css & LandingGit.css

5. .landing-hero-content > h1 (child)
   Especificidad: 11 (0,1,1)
   ❌ NO APLICA - h1 no es hijo directo
   Ubicación: landing-shared.css

GANADOR FINAL: .landing-hero-title (especificidad 10)
  └─ o heredado de .landing-hero-text .landing-hero-title

└────────────────────────────────────────────┘
```

---

## DIAGRAMA 6: Grid vs Estructura HTML - Desajuste Crítico

```
┌─ PROPUESTO EN LANDING-SHARED.CSS ─────────────┐

.landing-hero-content DEBE tener:
  ├─ display: grid
  ├─ grid-template-columns: 1fr 1fr
  ├─ grid-auto-rows: auto
  └─ gap: 3rem

Y estructura HTML:
  .landing-hero-content
  ├─ > h1 (grid-column: 1/-1)          ← hijo 1
  ├─ > p.hero-subtitle (grid-column: 1/-1) ← hijo 2
  ├─ > div.hero-text (grid-column: 1)  ← hijo 3
  ├─ > div.hero-icon (grid-column: 2, grid-row: 3) ← hijo 4
  └─ > div.landing-hero-buttons (grid-column: 1/-1) ← hijo 5

Esto daría:
┌──────────────────┬──────────────────┐
│ h1 (col 1-2)     │ h1 (col 1-2)     │ ← Fila 1
├──────────────────┴──────────────────┤
│ p.hero-subtitle (col 1-2)           │ ← Fila 2
├──────────────────┬──────────────────┤
│ div.hero-text    │ div.hero-icon    │ ← Fila 3
│ (col 1)          │ (col 2)          │
├──────────────────┴──────────────────┤
│ div.buttons (col 1-2)               │ ← Fila 4
└──────────────────┬──────────────────┘

─────────────────────────────────────────┘

┌─ REALIDAD EN HTML ACTUAL ─────────────┐

.git-hero-content (SIN display: grid)
├─ .landing-hero-text
│  ├─ h1.landing-hero-title
│  ├─ p.landing-hero-subtitle
│  └─ p.landing-hero-description
├─ div.hero-icon
└─ div.landing-hero-buttons

Esto renderiza como:
┌──────────────────────────────┐
│ h1 (dentro de flex column)   │
│ p subtitle (dentro de flex)  │
│ p description (dentro flex)  │
│ (gap: 1rem entre elementos)  │
├──────────────────────────────┤
│ div.hero-icon                │
├──────────────────────────────┤
│ div.buttons (flex)           │
│ - botón 1                    │
│ - botón 2                    │
└──────────────────────────────┘

DIFERENCIA: Sin grid coordinador, layout es bloque + flex anidado

─────────────────────────────────────────┘
```

---

## DIAGRAMA 7: Flujo de Especificidad para .landing-hero-buttons

```
ELEMENTO: <div class="landing-hero-buttons">

Selectores que COMPITEN:

1. .landing-hero-buttons (clase)
   Especificidad: 10 (0,1,0)
   Ubicación: landing-hero-buttons.css línea 6
   Estilos:
     display: flex;
     justify-content: center;
     align-items: center;
     gap: 1rem;
     flex-wrap: wrap;
     margin: 2rem auto 4rem;

2. .landing-hero-content > div:last-child
   Especificidad: 20 (0,1,2)  ← MÁS ESPECÍFICO
   Ubicación: landing-shared.css línea 125
   Estilos:
     grid-column: 1 / -1;     ← NO APLICA (sin grid)
     margin-top: 1rem;        ← SOBRESCRIBE margin de .landing-hero-buttons
     display: flex;
     justify-content: center;
     gap: 1rem;
     flex-wrap: wrap;

RESULTADO:
  Gana: landing-shared.css (especificidad 20 > 10)
  Efectos: margin cambia a margin-top: 1rem (vs 2rem auto 4rem)
           El rest del CSS es igual
  Lado Negativo: Frágil - Si hay otro último div, selector se mueve
                 Genérico - Aplica a cualquier último div

MEJOR PRÁCTICA:
  Eliminar selector genérico
  Usar solo: .landing-hero-buttons { ... }
  Si necesitas aplicar en contexto de hero: .landing-hero .landing-hero-buttons

```

---

## DIAGRAMA 8: Estado de Responsive Design

```
┌─ MOBILE (<480px) ─────────────────────────────┐

En landing-hero-buttons.css:
  .landing-hero-buttons {
    flex-direction: column;  ← botones en columna
    gap: 0.75rem;
    margin: 1rem auto 2rem;
  }
  .landing-btn {
    width: 100%;             ← botones full-width
  }

En landing-shared.css:
  .landing-hero-content {
    grid-template-columns: 1fr;  ← 1 columna
  }
  .landing-hero-content > div:last-child {
    margin-top: 1rem;        ← conflictúa con landing-hero-buttons margin
  }

PROBLEMA:
  - .landing-hero-content es grid, pero .git-hero-content no
  - Responsive media queries en dos archivos diferentes
  - Si grid no aplica, media queries tampoco

└─────────────────────────────────────────────────┘

┌─ TABLET (480px - 768px) ──────────────────────┐

En landing-hero-buttons.css:
  .landing-btn {
    padding: 0.9rem 1.8rem;
  }

En landing-shared.css:
  .landing-hero-content {
    gap: 2rem;  ← Espacio reducido
  }

└─────────────────────────────────────────────────┘

┌─ DESKTOP (>768px) ────────────────────────────┐

En landing-hero-buttons.css:
  .landing-hero-buttons {
    gap: 1rem;
    flex-wrap: wrap;
  }

En landing-shared.css:
  .landing-hero-content {
    grid-template-columns: 1fr 1fr;  ← 2 columnas
    gap: 3rem;
  }

PERO: .git-hero-content no tiene grid, así que gap: 3rem no aplica

└─────────────────────────────────────────────────┘
```

---

## DIAGRAMA 9: Orden de Carga CSS y Cascade

```
main.jsx (orden de import):
┌──────────────────────────────────────┐

1. import './styles/global.css'
   └─ Reset, tipografía base

2. import './styles/landing-shared.css'
   └─ .landing-hero-content { display: grid; ... }
   └─ .landing-hero-content > h1 { grid-column: 1/-1; }
   └─ .landing-hero-content > div:last-child { ... }

3. import './styles/landing-hero-text.css'
   └─ .landing-hero-text { display: flex; ... }
   └─ .landing-hero-title { font-size: 3.2rem; }

4. import './styles/landing-hero-buttons.css'
   └─ .landing-hero-buttons { display: flex; ... }

5. LandingGit.css (per-page)
   └─ .hero-text h1 { font-size: 3.2rem; }
   └─ .hero-subtitle { font-size: 1.2rem; }
   └─ .btn-primary { background: #e8491f; }

└──────────────────────────────────────┘

CASCADE RESULT:
┌──────────────────────────────────────┐

h1:
  Aplicados: landing-hero-title (landing-hero-text.css)
  NO aplicados: .hero-text h1 (LandingGit.css) - ClassName mismatch

.hero-subtitle / .landing-hero-subtitle:
  Conflicto entre landing-shared.css línea 105
  Y landing-hero-text.css línea 20

.landing-hero-buttons:
  Aplicados: landing-hero-buttons.css (10 especificidad)
  Sobrescrito por: > div:last-child (20 especificidad)
  Resultado: Especificidad gana, pero es frágil

└──────────────────────────────────────┘
```

---

## RESUMEN VISUAL: 3 Opciones de Solución

```
┌─ OPCIÓN 1: Cambiar clase CSS (Rápido) ──────┐

  ANTES:
  <div className="git-hero-content">
    <LandingHeroText />
    <div className="hero-icon" />
    <LandingHeroButtons />
  </div>

  DESPUÉS:
  <div className="landing-hero-content">
    <LandingHeroText />
    <div className="hero-icon" />
    <LandingHeroButtons />
  </div>

  RESULTADO: Grid se aplica, pero estructura HTML sigue siendo diferente
             h1 sigue sin ser hijo directo

└──────────────────────────────────────────────┘

┌─ OPCIÓN 2: Refactor selectors (Recomendado) ┐

  landing-shared.css:

  .landing-hero-content {
    /* Grid sigue igual */
  }

  /* Cambiar selectores para coincidir con estructura real */
  .landing-hero-content .landing-hero-text {
    grid-column: 1 / -1;
    display: flex;
    flex-direction: column;
  }

  .landing-hero-content .landing-hero-text .landing-hero-title {
    grid-column: 1 / -1;  /* Dentro de grid */
  }

  RESULTADO: Selectores específicos, evita conflictos

└──────────────────────────────────────────────┘

┌─ OPCIÓN 3: Refactor HTML (Mejor a largo plazo) ┐

  ESTRUCTURA IDEAL:
  <div className="landing-hero-content">
    <h1 className="landing-hero-title">...</h1>
    <p className="landing-hero-subtitle">...</p>
    <p className="landing-hero-description">...</p>
    <div className="hero-icon">...</div>
    <div className="landing-hero-buttons">
      <button>...</button>
    </div>
  </div>

  BENEFICIOS:
    - Grid se aplica directamente
    - Selectores simples funcionan
    - Sin componentes anidados
    - Estructura clara y predecible

  DESVENTAJAS:
    - Requiere cambios en componentes (LandingHeroText)
    - Más trabajo de refactoring

└──────────────────────────────────────────────┘
```

---

## Conclusión Visual

**El problema está en el mismatch entre:**

```
CSS (landing-shared.css)           HTML Real (LandingGit.jsx)
├─ Define: .landing-hero-content  ├─ Usa: .git-hero-content
├─ Espera: grid directo           ├─ Proporciona: flex anidado
├─ Busca: > h1, > .hero-text      ├─ Contiene: > .landing-hero-text > h1
└─ Asume: 4 hijos directos        └─ Realidad: 3 hijos con 1 anidado

   RESULTADO: CSS Grid NUNCA se aplica ❌
```
