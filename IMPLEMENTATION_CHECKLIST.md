# Checklist de Implementación

Versión: 1.0 | Fecha: 2026-07-07

---

## FASE 1: Preparación y Análisis (30 minutos)

- [ ] **1.1** Crear rama `feature/refactor-retos` en Git
- [ ] **1.2** Leer `OPTIMIZATION_ANALYSIS.md` y `OPTIMIZATION_EXAMPLES.md`
- [ ] **1.3** Backup de archivos originales:
  - [ ] Copiar `src/pages/LessonProyectoReto{1-8}.jsx` a `/backup/`
  - [ ] Copiar `src/components/{LessonTemplate,LessonLayout,Breadcrumb,Navbar}.jsx` a `/backup/`
- [ ] **1.4** Verificar que los 8 archivos Reto tienen mismo patrón
- [ ] **1.5** Confirmar que todos importan los 10 proyectos idénticos

---

## FASE 2: Crear Archivos de Configuración (60 minutos)

### 2.1 Crear `src/config/proyectosData.js`

- [ ] **2.1.1** Crear archivo vacío
- [ ] **2.1.2** Copiar objeto `proyectos` de `LessonProyectoReto1.jsx` (líneas 12-153)
- [ ] **2.1.3** Renombrar a `PROYECTOS_BASE`
- [ ] **2.1.4** Exportar como named export:
  ```jsx
  export const PROYECTOS_BASE = { ... };
  ```
- [ ] **2.1.5** Verificar que los 10 proyectos están completos:
  - [ ] ecomarket
  - [ ] techsalon
  - [ ] fooddelivery
  - [ ] fitnesspro
  - [ ] eventhub
  - [ ] healthtrack
  - [ ] propertyfinder
  - [ ] coursehub
  - [ ] localservices
  - [ ] socialmentoring
- [ ] **2.1.6** Validar que datos están bien formateados (sin errores de sintaxis)

### 2.2 Crear `src/config/retosConfig.js`

- [ ] **2.2.1** Crear archivo vacío
- [ ] **2.2.2** Copiar estructura base (ver OPTIMIZATION_EXAMPLES.md)
- [ ] **2.2.3** Para cada RETO (1-8):
  - [ ] Extraer `title` del return (h1)
  - [ ] Extraer `description` (párrafo descriptivo)
  - [ ] Extraer `keyPoints` array
  - [ ] Extraer `concepts` array
  - [ ] Crear función `sections` que retorne secciones dinámicas
  - [ ] Crear función `summary` que retorne resumen dinámico
  - [ ] Crear función `getProjectEnhancements` con datos específicos del reto

**Verificación por Reto:**
- [ ] **Reto 1:** Especificación (nombre, tipo, viabilidad, roi)
- [ ] **Reto 2:** Técnico (frontend, backend, database, herramientas)
- [ ] **Reto 3:** Pitch (problema, innovacion, guion)
- [ ] **Reto 4:** Equipo (equipo, roles, comunicacion, incidentes, aspectos)
- [ ] **Reto 5:** Sprints (epics, herramienta, roles, sprints)
- [ ] **Reto 6:** Gestión (presupuesto, horas, tasks, metrics)
- [ ] **Reto 7:** Retrospectiva (newFeatures, refactoring, testing, performance)
- [ ] **Reto 8:** Deployment (completionMetrics, acceptanceTests, deploymentSteps, monitoring)

- [ ] **2.2.4** Validar que cada RETO tiene estructura completa
- [ ] **2.2.5** Probar que `getProjectEnhancements` retorna objetos válidos

---

## FASE 3: Crear Componentes Reutilizables (90 minutos)

### 3.1 Crear `src/components/ProyectoSelector.jsx`

- [ ] **3.1.1** Crear archivo
- [ ] **3.1.2** Copiar código de ejemplo de OPTIMIZATION_EXAMPLES.md
- [ ] **3.1.3** Implementar función `getRetoTitle(num)` con 8 títulos
- [ ] **3.1.4** Implementar función `getRetoDescription(num)` con 8 descripciones
- [ ] **3.1.5** Verificar PropTypes
- [ ] **3.1.6** Probar rendering sin errores:
  ```jsx
  // En componente de test
  <ProyectoSelector
    retoNumber={1}
    proyectos={PROYECTOS_BASE}
    proyectoSeleccionado="ecomarket"
    setProyectoSeleccionado={() => {}}
  />
  ```

### 3.2 Crear `src/components/ConceptsGrid.jsx` (Opcional, mejora)

- [ ] **3.2.1** Crear archivo
- [ ] **3.2.2** Extraer lógica de renderizado de concepts desde LessonTemplate (líneas 71-96)
- [ ] **3.2.3** Aceptar props: `concepts`, `label`
- [ ] **3.2.4** Manejar mixed types: string | object
- [ ] **3.2.5** Incluir estilos centralizados (usar CSS si es posible)

### 3.3 Crear `src/components/LessonProyectoRetoGeneric.jsx`

- [ ] **3.3.1** Crear archivo
- [ ] **3.3.2** Copiar código de OPTIMIZATION_EXAMPLES.md
- [ ] **3.3.3** Importar:
  - [ ] `PROYECTOS_BASE` desde `src/config/proyectosData.js`
  - [ ] `RETOS_CONFIG` desde `src/config/retosConfig.js`
  - [ ] `ProyectoSelector` desde local
  - [ ] Hooks: `useBreadcrumb`, `useLessonNavigation`
- [ ] **3.3.4** Implementar `useMemo` para:
  - [ ] `retoConfig`
  - [ ] `proyecto`
  - [ ] `concepts`
  - [ ] `sections`
  - [ ] `summary`
- [ ] **3.3.5** Probar que se puede renderizar con `retoNumber={1}`
- [ ] **3.3.6** Validar que selector funciona y cambia proyecto

---

## FASE 4: Refactorizar Componentes Principales (60 minutos)

### 4.1 Actualizar `src/components/LessonTemplate.jsx`

- [ ] **4.1.1** Abrir archivo original
- [ ] **4.1.2** Remover estos props del destructuring:
  - [ ] `exercises = []`
  - [ ] `conceptsLabel = 'Conceptos'`
  - [ ] `glossary = []`
- [ ] **4.1.3** Cambiar cálculo de anchors a useMemo:
  ```jsx
  const anchors = useMemo(() => {
    const result = [];
    if (sections.length > 0) result.push({ label: 'Contenido', id: 'contenido' });
    if (concepts.length > 0) result.push({ label: 'Conceptos', id: 'conceptos' });
    if (keyPoints.length > 0) result.push({ label: 'Puntos Clave', id: 'puntos-clave' });
    if (summary) result.push({ label: 'Resumen', id: 'resumen' });
    return result;
  }, [sections.length, concepts.length, keyPoints.length, summary]);
  ```
- [ ] **4.1.4** Remover sección de ejercicios (líneas 99-115 aprox)
- [ ] **4.1.5** Remover sección de glossario (líneas 132-136 aprox)
- [ ] **4.1.6** Verificar que no hay errores de sintaxis
- [ ] **4.1.7** Actualizar imports: add `useMemo`

### 4.2 Actualizar `src/components/LessonLayout.jsx`

- [ ] **4.2.1** Remover props no usados:
  - [ ] `seoDescription` (línea 9)
  - [ ] `url` (línea 12)
- [ ] **4.2.2** Actualizar JSDoc si existe
- [ ] **4.2.3** Verificar que no hay errores

### 4.3 Actualizar `src/components/Breadcrumb.jsx`

- [ ] **4.3.1** Importar `useMemo` de React
- [ ] **4.3.2** Envolver cálculo de `breadcrumbItems` en useMemo
- [ ] **4.3.3** Remover función duplicada `generateBreadcrumbItems()` (líneas 128-130)
- [ ] **4.3.4** Verificar que export `generateBreadcrumbFromPath` funciona

### 4.4 Actualizar `src/components/Navbar.jsx`

- [ ] **4.4.1** Remover prop `currentPage` del destructuring (no se usa)
- [ ] **4.4.2** Verificar que renderizado sigue igual

---

## FASE 5: Reemplazar Archivos Reto1-8 (30 minutos)

### 5.1 LessonProyectoReto1.jsx

- [ ] **5.1.1** Abrir archivo
- [ ] **5.1.2** Remover TODO el contenido anterior (594 líneas)
- [ ] **5.1.3** Reemplazar con:
  ```jsx
  import { LessonProyectoRetoGeneric } from '../components/LessonProyectoRetoGeneric';

  export function LessonProyectoReto1() {
    return <LessonProyectoRetoGeneric retoNumber={1} />;
  }
  ```
- [ ] **5.1.4** Guardar y verificar sin errores

### 5.2 LessonProyectoReto2.jsx

- [ ] **5.2.1** Repetir pasos de 5.1 con `retoNumber={2}`

### 5.3-5.8 LessonProyectoReto3-8.jsx

- [ ] **5.3.1** Repetir pasos de 5.1 con `retoNumber={3}`
- [ ] **5.4.1** Repetir pasos de 5.1 con `retoNumber={4}`
- [ ] **5.5.1** Repetir pasos de 5.1 con `retoNumber={5}`
- [ ] **5.6.1** Repetir pasos de 5.1 con `retoNumber={6}`
- [ ] **5.7.1** Repetir pasos de 5.1 con `retoNumber={7}`
- [ ] **5.8.1** Repetir pasos de 5.1 con `retoNumber={8}`

---

## FASE 6: Testing (90 minutos)

### 6.1 Testing Manual

- [ ] **6.1.1** Abrir navegador y navegar a `/proyecto/reto/1`
  - [ ] Verifica que se renderiza sin errores
  - [ ] Verifica que título es "REPTE 1: Especificación del Proyecto"
  - [ ] Verifica que selector de proyecto funciona
  - [ ] Verifica que cambiar proyecto actualiza contenido
  - [ ] Verifica que navegación funciona (anterior/siguiente)

- [ ] **6.1.2** Repetir 6.1.1 para RETO 2
  - [ ] Verifica título correcto
  - [ ] Verifica 4 secciones se muestran
  - [ ] Verifica conceptos se muestran

- [ ] **6.1.3** Repetir 6.1.1 para RETO 3
  - [ ] Verifica estructura de Elevator Pitch
  - [ ] Verifica guion se muestra

- [ ] **6.1.4** Repetir 6.1.1 para RETO 4
  - [ ] Verifica tabla de roles se muestra
  - [ ] Verifica perfiles profesionales

- [ ] **6.1.5** Repetir 6.1.1 para RETO 5
  - [ ] Verifica epics y user stories

- [ ] **6.1.6** Repetir 6.1.1 para RETO 6
  - [ ] Verifica métricas y tareas

- [ ] **6.1.7** Repetir 6.1.1 para RETO 7
  - [ ] Verifica retrospectiva items

- [ ] **6.1.8** Repetir 6.1.1 para RETO 8
  - [ ] Verifica deployment steps
  - [ ] Verifica production readiness

### 6.2 Testing de Proyectos

Para CADA RETO, probar cambio de proyecto:
- [ ] Cambiar a `techsalon` → Verifica datos correctos
- [ ] Cambiar a `fooddelivery` → Verifica datos correctos
- [ ] Cambiar a `fitnesspro` → Verifica datos correctos
- [ ] Cambiar a otros 6 proyectos → Verifica sin errores

### 6.3 Testing de Navegación

- [ ] **6.3.1** En RETO 1, verificar que "siguiente" va a RETO 2
- [ ] **6.3.2** En RETO 2, verificar que "anterior" va a RETO 1
- [ ] **6.3.3** En RETO 8, verificar que "siguiente" va a próxima sección

### 6.4 Testing de Performance

- [ ] **6.4.1** Abrir DevTools > Lighthouse
- [ ] **6.4.2** Ejecutar Performance audit en RETO 1
- [ ] **6.4.3** Verificar que score > 85
- [ ] **6.4.4** Verificar que no hay re-renders innecesarios (React DevTools)

### 6.5 Testing de Responsive

- [ ] **6.5.1** Probar en breakpoints:
  - [ ] Mobile (375px) - Selector funciona, layout ok
  - [ ] Tablet (768px) - Componentes visibles
  - [ ] Desktop (1920px) - Espacios correctos

---

## FASE 7: Git y Documentación (30 minutos)

- [ ] **7.1** Verificar que archivos modificados:
  ```bash
  git status
  ```
  Deben ser:
  - [ ] `src/config/proyectosData.js` (NUEVO)
  - [ ] `src/config/retosConfig.js` (NUEVO)
  - [ ] `src/components/ProyectoSelector.jsx` (NUEVO)
  - [ ] `src/components/LessonProyectoRetoGeneric.jsx` (NUEVO)
  - [ ] `src/components/LessonTemplate.jsx` (MODIFICADO)
  - [ ] `src/components/LessonLayout.jsx` (MODIFICADO)
  - [ ] `src/components/Breadcrumb.jsx` (MODIFICADO)
  - [ ] `src/components/Navbar.jsx` (MODIFICADO)
  - [ ] `src/pages/LessonProyectoReto1.jsx` (MODIFICADO)
  - [ ] `src/pages/LessonProyectoReto2.jsx` (MODIFICADO)
  - [ ] ... LessonProyectoReto3-8.jsx (MODIFICADO)

- [ ] **7.2** Verificar líneas de código:
  ```bash
  wc -l src/pages/LessonProyectoReto{1-8}.jsx
  ```
  Cada uno debe tener ~8-10 líneas (antes eran 400-700)

- [ ] **7.3** Verificar no hay console errors/warnings:
  ```bash
  npm run build
  ```

- [ ] **7.4** Crear commit:
  ```bash
  git add .
  git commit -m "refactor: consolidate LessonProyectoReto components

  - Extract 10 proyectos to shared proyectosData.js
  - Extract reto configuration to retosConfig.js
  - Create LessonProyectoRetoGeneric wrapper component
  - Create ProyectoSelector reusable component
  - Optimize LessonTemplate, Breadcrumb with useMemo
  - Reduce Reto1-8 files from 4,328 to ~80 lines (98.8% reduction)
  - Remove unused props and code duplication

  Fixes #ISSUE_NUMBER"
  ```

- [ ] **7.5** Actualizar documentación:
  - [ ] Actualizar README.md con nueva estructura
  - [ ] Agregar comentarios JSDoc en nuevos archivos
  - [ ] Documentar retosConfig en wiki si existe

---

## FASE 8: Validación Final (30 minutos)

- [ ] **8.1** Verificar que project builds sin errores:
  ```bash
  npm run build
  ```
- [ ] **8.2** Ejecutar linter:
  ```bash
  npm run lint
  ```
- [ ] **8.3** Ejecutar tests (si existen):
  ```bash
  npm test
  ```
- [ ] **8.4** Hacer pull request y pedir code review
- [ ] **8.5** Después de aprobación, mergear a main:
  ```bash
  git checkout main
  git pull origin main
  git merge feature/refactor-retos
  git push origin main
  ```

---

## FASE 9: Post-Refactor (Opcional, mejoras adicionales)

- [ ] **9.1** Extraer estilos inline a CSS module:
  - [ ] Crear `ProyectoSelector.module.css`
  - [ ] Crear `ConceptsGrid.module.css`
  - [ ] Remover `style={{}}` inline

- [ ] **9.2** Agregar TypeScript (si no está):
  - [ ] Convertir `proyectosData.js` a `proyectosData.ts`
  - [ ] Crear tipos: `type Proyecto`, `type RetoConfig`

- [ ] **9.3** Agregar tests unitarios:
  - [ ] Test: ProyectoSelector selecciona proyecto
  - [ ] Test: LessonProyectoRetoGeneric renderiza Reto 1-8
  - [ ] Test: Cambio de proyecto actualiza contenido

- [ ] **9.4** Agregar tests e2e (Cypress/Playwright):
  - [ ] Test: Navegar a /proyecto/reto/1 funciona
  - [ ] Test: Selector de proyecto funciona
  - [ ] Test: Navegación anterior/siguiente funciona

---

## CHECKLIST FINAL

- [ ] ✅ Todos los Retos (1-8) se renderizaban sin errores
- [ ] ✅ Selector de proyectos funciona en todos los Retos
- [ ] ✅ Navegación (anterior/siguiente) funciona
- [ ] ✅ Performance acceptable (no re-renders innecesarios)
- [ ] ✅ Responsive en mobile/tablet/desktop
- [ ] ✅ No hay console errors o warnings
- [ ] ✅ Código buildea sin errores
- [ ] ✅ Tests pasan (si existen)
- [ ] ✅ Code review aprobado
- [ ] ✅ Commit creado y pusheado
- [ ] ✅ Pull request mergeado a main
- [ ] ✅ Documentación actualizada

---

## NOTAS IMPORTANTES

1. **Backup:** Guardar archivos originales antes de empezar
2. **Git:** Usar rama separada para testing antes de mergear
3. **Testing:** Probar TODOS los 8 Retos en TODOS los navegadores
4. **Performance:** Usar React DevTools para verificar renders
5. **Error handling:** Si algo falla, revertir cambios de ese archivo
6. **Comunicación:** Notificar al equipo antes de cambios en producción

---

## ESTIMACIÓN DE TIEMPO

| Fase | Tiempo | Notas |
|------|--------|-------|
| 1: Preparación | 30 min | Lectura + backup |
| 2: Config files | 60 min | Extracción de datos |
| 3: Componentes | 90 min | Implementación |
| 4: Refactor main | 60 min | Optimizaciones |
| 5: Reemplazar Reto | 30 min | Copy-paste |
| 6: Testing | 90 min | Validación completa |
| 7: Git + Docs | 30 min | Commit + documentación |
| 8: Final check | 30 min | Validación final |
| **TOTAL** | **4-5 horas** | Sin pausa |

---

**Última actualización:** 2026-07-07
**Versión:** 1.0
**Estado:** Listo para implementar

