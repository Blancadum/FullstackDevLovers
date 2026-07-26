# Resumen Ejecutivo - Auditoría CSS Grid

**Fecha:** 25 Julio 2026
**Archivo:** `src/styles/landing-shared.css` (líneas 65-130)
**Estado:** 🔴 CRÍTICO - 3 problemas bloqueantes encontrados

---

## Respuestas a Preguntas de Auditoría

### 1. ¿El grid layout está correctamente configurado?

**NO.** Puntuación: 2/10

**Problemas:**
- Grid definido en `.landing-hero-content` pero aplicado a `.git-hero-content` en HTML
- Sin `grid-template-rows` explícito, solo `grid-auto-rows: auto` (impredecible)
- Selectores de grid-column/grid-row no coinciden con estructura HTML real

**Evidencia:**
```
landing-shared.css:       .landing-hero-content { display: grid; }
LandingGit.jsx línea 152: <div className="git-hero-content">

                          ❌ Clases diferentes = CSS nunca aplica
```

---

### 2. ¿Los selectores de grid-column y grid-row son correctos?

**SINTÁXIS SÍ, APLICACIÓN NO.** Puntuación: 3/10

**Problemas:**
- `grid-column: 1 / -1` es válido, pero elementos no son hijos directos
- 4 de 5 selectores no existen en DOM real
- Selector `.landing-hero-content > h1` busca h1 directo, pero existe dentro de `.landing-hero-text`

**Mapeo de selectores:**

| Selector | Existe en DOM | ¿Funciona? |
|----------|---------------|-----------|
| `.landing-hero-content > h1` | ❌ No | Nunca aplica |
| `.landing-hero-content > .hero-subtitle` | ❌ No | Nunca aplica |
| `.landing-hero-content > .hero-text` | ❌ No | Nunca aplica |
| `.landing-hero-content > .hero-icon` | ⚠️ Parcial | No, grid padre no existe |
| `.landing-hero-content > div:last-child` | ✅ Sí | Accidental, frágil |

---

### 3. ¿Hay conflictos entre estilos globales y locales?

**SÍ - MUCHOS.** Puntuación: 4/10

**Conflictos principales:**

1. **Nombres inconsistentes:**
   - `.hero-text` vs `.landing-hero-text`
   - `.hero-subtitle` vs `.landing-hero-subtitle`
   - `.btn-primary` vs `.landing-btn-primary`

2. **Duplicación:**
   ```css
   /* landing-hero-buttons.css línea 10 */
   .landing-hero-buttons { gap: 1rem; }

   /* landing-shared.css línea 130 */
   .landing-hero-content > div:last-child { gap: 1rem; }
   ```

3. **Conflicto de especificidad:**
   ```css
   .landing-hero-buttons (especificidad: 10)
   .landing-hero-content > div:last-child (especificidad: 20) ← GANA
   ```
   El selector genérico sobrescribe el específico.

4. **Media queries conflictivas:**
   - landing-shared.css define responsive para `.landing-hero-content`
   - LandingGit.css define responsive para `.hero-text h1`
   - Diferentes selectores en diferentes archivos

---

### 4. ¿El selector `.landing-hero-content > div:last-child` es demasiado genérico?

**SÍ - ES PROBLEMÁTICO.** Puntuación: 2/10

**Problemas:**
1. **Demasiado genérico:** Aplica a CUALQUIER último div
2. **Frágil:** Si agregan un elemento, selector se mueve a otro elemento
3. **Conflicto con especificidad:** Sobrescribe `.landing-hero-buttons` (especificidad 20 > 10)
4. **Duplicación:** Repite propiedades de `.landing-hero-buttons.css`
5. **Mantenimiento:** Hay que cambiar dos places para actualizar botones

**Ejemplo de fragilidad:**
```jsx
// Estado 1: Selector aplica correctamente
<div class="landing-hero-content">
  <div>Texto</div>
  <div>Ícono</div>
  <div class="landing-hero-buttons">← LAST-CHILD ✅</div>
</div>

// Estado 2: Se agrega elemento, selector se mueve
<div class="landing-hero-content">
  <div>Texto</div>
  <div>Ícono</div>
  <div class="landing-hero-buttons">...</div>
  <div class="new-section">← LAST-CHILD ❌ Selector se mueve aquí</div>
</div>
```

---

## Tabla de Problemas Detectados

| # | Problema | Línea | Severidad | Impacto |
|---|----------|-------|-----------|---------|
| **1** | Clase CSS diferente (.git-hero-content ≠ .landing-hero-content) | 152/70 | 🔴 CRÍTICO | Grid nunca se aplica |
| **2** | Selectores > h1, > .hero-subtitle no existen en DOM | 77, 96 | 🔴 CRÍTICO | Estilos grid inoperantes |
| **3** | `grid-auto-rows: auto` sin `grid-template-rows` | 70 | 🟠 ALTA | Posicionamiento frágil |
| **4** | `.hero-icon` usa `grid-row: 3` sin garantía de fila 3 | 120 | 🟠 ALTA | Posición impredecible |
| **5** | Selector `> div:last-child` demasiado genérico | 125 | 🟠 ALTA | Frágil, falta especificidad |
| **6** | Duplicación: gap, flex-wrap en dos archivos | 10/130 | 🟡 MEDIA | Confusión, hard to maintain |
| **7** | Nombres de clases inconsistentes (.hero-text, .hero-subtitle) | Múltiples | 🟡 MEDIA | Selectores no aplican |
| **8** | Conflicto .btn-primary vs .landing-btn-primary | 89/37 | 🟡 MEDIA | Colores inconsistentes |
| **9** | Media queries en archivos diferentes | 520/466 | 🟡 MEDIA | Responsive impredecible |

---

## Puntuación de Calidad

```
Categoría                      Puntuación    Estado
────────────────────────────────────────────────────
Correctitud de Grid Layout       2/10 🔴
Selectores Apropiados            3/10 🔴
Consistencia de Nombres          3/10 🔴
Especificidad CSS                4/10 ⚠️
Ausencia de Duplicación          2/10 🔴
Responsividad                    4/10 ⚠️
Mantenibilidad                   2/10 🔴
────────────────────────────────────────────────────
PUNTUACIÓN GLOBAL              20/70 🔴
NIVEL DE ALERTA                CRÍTICO
────────────────────────────────────────────────────
```

---

## Raíz del Problema

**El layout del hero no funciona porque:**

```
┌─ EXPECTATIVA (CSS) ──────────────┐

.landing-hero-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
}

Hijos esperados:
├─ <h1>
├─ <p class="hero-subtitle">
├─ <div class="hero-text">
├─ <div class="hero-icon">
└─ <div class="landing-hero-buttons">

└──────────────────────────────────┘

┌─ REALIDAD (HTML) ────────────────┐

.git-hero-content {
  /* NO tiene display: grid */
}

Hijos reales:
├─ <div class="landing-hero-text">
│  ├─ <h1>
│  ├─ <p class="landing-hero-subtitle">
│  └─ <p class="landing-hero-description">
├─ <div class="hero-icon">
└─ <div class="landing-hero-buttons">

└──────────────────────────────────┘

RESULTADO: CSS Grid nunca se aplica porque:
1. Clase diferente (.git-hero-content ≠ .landing-hero-content)
2. Estructura diferente (h1 no es hijo directo)
3. Selectores no coinciden con DOM real
```

---

## Recomendaciones

### INMEDIATO (Rápido Fix)

**Opción A: Cambiar clase CSS en HTML**
```jsx
// LandingGit.jsx línea 152
<div className="landing-hero-content">  ← Cambiar de git-hero-content
```
- ✅ Rápido (1 línea)
- ✅ Aplica CSS grid
- ❌ HTML sigue siendo diferente a lo esperado

### CORTO PLAZO (Recomendado)

**Opción B: Refactor de Selectores**
```css
/* Actualizar landing-shared.css para coincidir con estructura real */

.landing-hero-content .landing-hero-text {
  grid-column: 1 / -1;
}

.landing-hero-content .landing-hero-text .landing-hero-title {
  /* estilos */
}

.landing-hero-content .landing-hero-buttons {
  /* estilos específicos, no .landing-hero-content > div:last-child */
}
```
- ✅ Selectores específicos
- ✅ Evita conflictos
- ✅ Mejor mantenimiento
- ⚠️ Necesita actualizar landing-shared.css

### LARGO PLAZO (Mejor Arquitectura)

**Opción C: Refactor HTML**
- Aplanar estructura HTML para que coincida con lo que CSS espera
- Remover componentes anidados (LandingHeroText) si no son necesarios
- Consolidar en un único contenedor grid

---

## Archivos Afectados

### Críticos (Necesitan cambios):
1. `/src/styles/landing-shared.css` (líneas 65-130)
2. `/src/pages/LandingGit.jsx` (línea 152)

### Relacionados (Revisar):
3. `/src/styles/landing-hero-text.css`
4. `/src/styles/landing-hero-buttons.css`
5. `/src/pages/LandingGit.css`
6. `/src/components/LandingHeroText.jsx`
7. `/src/components/LandingHeroButtons.jsx`

---

## Verificación

Para verificar que problema está presente:

```javascript
// En DevTools Console
const heroContent = document.querySelector('.landing-hero-content');
const gitHeroContent = document.querySelector('.git-hero-content');
const h1 = document.querySelector('.landing-hero-content > h1');

console.log('Grid en .landing-hero-content:', window.getComputedStyle(heroContent).display);
// Esperado: 'grid'
// Real: 'block' (porque no existe .landing-hero-content)

console.log('.git-hero-content existe:', !!gitHeroContent);
console.log('h1 directo existe:', !!h1);
// Ambos demuestran el mismatch
```

---

## Conclusión

El CSS grid en `landing-shared.css` está **correctamente escrito pero completamente desalineado** con la estructura HTML real. Los problemas son:

1. **Mismatch de clases:** `.landing-hero-content` en CSS vs `.git-hero-content` en HTML
2. **Selectores no coinciden:** Buscan hijos directos que no existen
3. **Especificidad confusa:** Selectores genéricos sobrescriben específicos
4. **Mantenibilidad pobre:** Propiedades duplicadas, nombres inconsistentes

**Acción recomendada:** Refactor de selectores CSS para coincidir con estructura HTML actual (Opción B) o cambiar clase CSS en HTML (Opción A como fix rápido).

**Tiempo estimado:** 30-60 minutos para Opción B
