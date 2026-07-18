# 📚 Estructura de Categorías - Documentación Técnica

**Estado:** ✅ IMPLEMENTADO Y FUNCIONANDO
**Última actualización:** 2026-07-18

---

## Estructura de Categorías Agrupadas

La plataforma se reorganizó de 8 módulos dispersos a **8 categorías temáticas coherentes**:

### 1. 🔵 Backend & Aplicaciones
- **Módulos:** Java, Spring Boot
- **Color:** #0066cc
- **Descripción:** Lenguajes y frameworks para desarrollo backend

### 2. 🗄️ Datos & Almacenamiento
- **Módulos:** SQL
- **Color:** #FF6B6B
- **Descripción:** Bases de datos, SQL y persistencia de datos

### 3. 📦 Control de Versiones
- **Módulos:** Git
- **Color:** #F74E1E
- **Descripción:** Git, control de versiones y colaboración en equipo

### 4. 🐳 Containerización & Orquestación
- **Módulos:** Docker, Kubernetes
- **Color:** #2496ED
- **Descripción:** Docker, Kubernetes y gestión de contenedores

### 5. ☁️ Cloud & Infraestructura
- **Módulos:** AWS
- **Color:** #FF9900
- **Descripción:** Servicios en la nube, DevOps, CI/CD e infraestructura
- **Tópicos DevOps:** devops, ci-cd, infrastructure-as-code

### 6. 🛠️ Herramientas Transversales
- **Módulos:** Entornos
- **Color:** #9C27B0
- **Descripción:** IDEs, patrones, testing y herramientas de desarrollo

### 7. 🎯 Casos Prácticos
- **Tipo:** Proyectos (NO módulos)
- **Color:** #FF6B35
- **Descripción:** Proyectos integrados y casos de uso real
- **Contiene:**
  - Proyecto Final: Sistema de Gestión Integral (disponible)
  - Caso Práctico: E-commerce Backend (coming soon)
  - Caso Práctico: Microservicios en AWS (coming soon)

### 8. 📚 Metodologías & Procesos
- **Tipo:** SubCategorías (NO módulos)
- **Color:** #4ECDC4
- **Descripción:** Agile, Clean Code, Testing y DevOps
- **SubCategorías:**
  - Agile/SCRUM ⭐ (featured) - 3 lecciones
  - Clean Code ⭐ (featured) - 5 lecciones
  - Testing - 3 lecciones
  - DevOps - 3 lecciones

---

## Configuración Técnica

### Archivo: `src/config/moduleCategories.js`

**Estructura base de cada categoría:**
```javascript
{
  id: 'category-id',           // Identificador único
  name: 'Nombre Categoría',    // Mostrado en UI
  icon: '🔵',                  // Emoji del icono
  color: '#0066cc',            // Color del borde superior
  description: 'Descripción',  // Subtitle de la categoría
  modules: ['mod1', 'mod2'],   // Array de módulos (para categorías normales)
  projects: [...],             // Array de proyectos (solo para Casos Prácticos)
  subCategories: [...]         // Array de subcategorías (solo para Metodologías)
}
```

---

## Componentes Relacionados

### 1. ModulesSection.jsx
**Ubicación:** `src/components/ModulesSection.jsx`

Renderiza las 8 categorías en la home. Lógica condicional:
```javascript
// Si tiene modules (y NO tiene projects ni subCategories)
// → Renderiza ModuleExpandable (acordeones de módulos)

// Si tiene projects
// → Renderiza CasesPracticalCard (tarjetas de proyectos)

// Si tiene subCategories
// → Renderiza MethodologyCard (tarjetas de metodologías)
```

### 2. CasesPracticalCard.jsx
**Ubicación:** `src/components/CasesPracticalCard.jsx`

Renderiza proyectos individuales:
- ✅ Disponibles: Link clickeable al proyecto
- 🎯 Coming Soon: Tarjeta grisada con badge morado

### 3. MethodologyCard.jsx
**Ubicación:** `src/components/MethodologyCard.jsx`

Renderiza metodologías con **lecciones reales**:
- ✅ Con lecciones: Muestra lista de links clickeables
- 🎯 Sin lecciones: Muestra tópicos y "Coming Soon"

### 4. ModulesSection.css
**Ubicación:** `src/components/ModulesSection.css`

Estilos para:
- `.categories-grid` - Grid responsive de categorías
- `.category-card` - Tarjeta individual de categoría
- `.category-projects` - Grid de proyectos (auto-fit, minmax 300px)
- `.category-methodologies` - Grid de metodologías (auto-fit, minmax 280px)

---

## Flujo de Datos

```
moduleCategories.js (data)
        ↓
ModulesSection.jsx (renders)
        ↓
    ┌───┴───┬─────────┬──────────┐
    ↓       ↓         ↓          ↓
Module  Project   Methodology  Category
Cards   Cards     Cards        Info
```

---

## URLs Afectadas

**Cuando cambies moduleCategories.js, verificar:**

✅ Home page: `http://localhost:5173/`
- Scroll down a "Catálogo de Tecnologías"
- Debe mostrar 8 categorías agrupadas

✅ Rutas de módulos existentes: `/java`, `/docker`, `/aws`, etc.
- No cambian (se mantienen en ModulePage)
- moduleCategories es una capa de agrupación, no reemplaza modulesConfig.js

✅ Rutas de lecciones de metodologías: `/metodologias/*`
- Usan links en `methodology.lessons` array
- Deben apuntar a rutas existentes en App.jsx

---

## ⚠️ IMPORTANTE: Debugging

### Si algo "no carga":

❌ **NO HACER:**
```bash
git reset --hard  # ← Esto revierte TODO
```

✅ **HACER:**
1. Verificar consola del navegador (F12 → Console)
2. Ver errores específicos en el terminal (npm run dev)
3. Verificar URL correcta (¿puerto 5173 no 5174?)
4. Si error de compilación → revisar sintaxis del archivo
5. Si componente no renderiza → revisar imports en index.js

### Pasos de Debugging Recomendados:

```bash
# 1. Ver errores en tiempo real
npm run dev

# 2. Si falla build:
npm run build

# 3. Si necesitas revisar un commit anterior (SIN revertir):
git show HEAD~1:src/config/moduleCategories.js

# 4. Si necesitas revertir UN archivo (no todo):
git checkout HEAD -- src/config/moduleCategories.js

# 5. SOLO si realmente necesitas revertir (LAST RESORT):
git reset --hard HEAD~1  # Solo 1 commit, nunca múltiples
```

---

## Checklist para Modificaciones

Cuando actualices `moduleCategories.js`:

- [ ] Verificar sintaxis JSON válida
- [ ] Todos los `modules` existen en `modulesConfig.js`
- [ ] Todos los `color` son hex válidos (#RRGGBB)
- [ ] Todos los `icon` son emojis válidos
- [ ] Si tiene `projects`: verificar `link` existe en App.jsx
- [ ] Si tiene `subCategories`: verificar `lessons[].link` existen
- [ ] Build pasa sin errores: `npm run build`
- [ ] Home renderiza correctamente: `npm run dev` → http://localhost:5173/

---

## Próximas Mejoras

- [ ] Crear landing pages para cada categoría
- [ ] Agregar más casos prácticos
- [ ] Implementar búsqueda por categoría
- [ ] Agregar indicadores de progreso por categoría

---

**Referencia rápida:**
- Archivo config: `src/config/moduleCategories.js`
- Componente principal: `src/components/ModulesSection.jsx`
- Estilos: `src/components/ModulesSection.css`
