# 🎨 Metodología de Segmentación por Categorías

**Documentado:** 2026-07-18
**Estado:** ✅ Implementado y en uso

---

## Concepto

La **segmentación por categorías** es un patrón reutilizable para agrupar contenido (módulos, proyectos, secciones) en tarjetas/cards visuales organizadas en grids responsivos.

**Aplicaciones actuales:**
- ✅ Home page: ModulesSection (8 categorías de tecnologías)
- ✅ TFC page: ProjectSectionsGrid (6 secciones del proyecto)
- ✅ Página de Metodologías: MethodologyCard (4 subcategorías)
- ✅ Página de Casos Prácticos: CasesPracticalCard (3 proyectos)

---

## Estructura Base

Cada categoría/sección tiene esta estructura:

```javascript
{
  id: 'unique-id',
  name: 'Nombre Visible',
  fullName: 'Nombre Completo (opcional)',
  icon: '🎯',                          // Emoji
  color: '#FF6B35',                    // Color del borde superior
  description: 'Descripción corta',    // Subtitle
  lessons: [
    {
      title: 'Lección 1',
      link: '/ruta/leccion',
      icon: '📖'                        // Icono de lección (opcional)
    },
    // ...
  ]
}
```

---

## Componentes Implementados

### 1. **ModulesSection.jsx** (Home)
**Ubicación:** `src/components/ModulesSection.jsx`

Renderiza **8 categorías principales** del catálogo:
- Backend, Datos, Git, Docker, AWS, Herramientas, Casos Prácticos, Metodologías
- Usa datos de `moduleCategories.js`
- Renderización condicional:
  - Si `modules`: Renderiza ModuleExpandable
  - Si `projects`: Renderiza CasesPracticalCard
  - Si `subCategories`: Renderiza MethodologyCard

**Estilos:** `ModulesSection.css`

---

### 2. **ProjectSectionsGrid.jsx** (TFC)
**Ubicación:** `src/components/ProjectSectionsGrid.jsx`

Renderiza **secciones del TFC** como grid de cards:
- Planificación, Metodología, Desarrollo, Testing, Despliegue, Retos
- Muestra lista de lecciones con iconos
- Contador de lecciones en footer
- Usa datos de `ModulePage.jsx → proyecto.sections`

**Estilos:** `ProjectSectionsGrid.css`
- Fondo gradiente sutil (blanco → gris muy claro)
- Tipografía mejorada: colores oscuros (#1a2332) para mejor contraste
- Hover: cambio a fondo blanco + sombra mejorada
- Links con background teal suave y hover effect

---

### 3. **MethodologyCard.jsx**
**Ubicación:** `src/components/MethodologyCard.jsx`

Renderiza **metodologías** con:
- Links a lecciones reales (cuando existen)
- Estado "Coming Soon" (cuando no hay lecciones)
- Lista de tópicos para futuras lecciones

---

### 4. **CasesPracticalCard.jsx**
**Ubicación:** `src/components/CasesPracticalCard.jsx`

Renderiza **proyectos** con:
- Tags de tecnología (verde)
- Badge de dificultad (naranja)
- Estado "Coming Soon" cuando no está disponible
- Link directo al proyecto

---

## Estilos Base (Replicable)

Cada card debería tener estos estilos:

```css
.card {
  background: linear-gradient(135deg, #fafbfc 0%, #f5f7fa 100%);
  border-radius: 12px;
  border-top: 4px solid;                    /* Coloreado por categoría */
  padding: 1.5rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  background: white;                        /* Cambiar a blanco en hover */
}

/* Tipografía */
.card h3 {
  color: #1a2332;                          /* Gris oscuro fuerte */
  font-weight: 700;
  font-size: 1.15rem;
}

.card p {
  color: #5a6c7d;                          /* Gris medio */
  font-weight: 500;
  font-size: 0.92rem;
}

/* Links */
.lesson-link {
  color: #2c7a7b;                          /* Teal oscuro */
  font-weight: 600;
  background: rgba(78, 205, 196, 0.05);    /* Teal muy suave */
  padding: 0.6rem 0.8rem;
  border-radius: 6px;
  transition: all 0.2s ease;
}

.lesson-link:hover {
  background: rgba(78, 205, 196, 0.12);    /* Teal más visible */
  color: #1a2332;                          /* Cambiar a gris oscuro */
}
```

---

## Grid Layouts

### Desktop (1200px+)
```
┌─────────┬─────────┬─────────┐
│ Card 1  │ Card 2  │ Card 3  │
├─────────┼─────────┼─────────┤
│ Card 4  │ Card 5  │ Card 6  │
└─────────┴─────────┴─────────┘
```

### Tablet (768px - 1199px)
```
┌─────────┬─────────┐
│ Card 1  │ Card 2  │
├─────────┼─────────┤
│ Card 3  │ Card 4  │
└─────────┴─────────┘
```

### Mobile (<768px)
```
┌─────────┐
│ Card 1  │
├─────────┤
│ Card 2  │
└─────────┘
```

---

## Paleta de Colores

### Bordes Superiores (por categoría)
```
Backend:          #0066cc (azul)
Datos:            #FF6B6B (rojo)
Git:              #F74E1E (naranja)
Docker:           #2496ED (azul celeste)
AWS:              #FF9900 (naranja dorado)
Herramientas:     #9C27B0 (púrpura)
Casos Prácticos:  #FF6B35 (naranja)
Metodologías:     #4ECDC4 (teal)
```

### Tipografía (Fixed)
```
Títulos h3:       #1a2332 (gris oscuro fuerte)
Descripciones:    #5a6c7d (gris medio)
Links:            #2c7a7b (teal oscuro)
Links hover:      #1a2332 (gris oscuro)
Backgrounds:      #fafbfc → #f5f7fa (gradiente suave)
```

---

## Cómo Crear Nuevas Segmentaciones

### Paso 1: Datos
Define el array de categorías/secciones con la estructura base.

### Paso 2: Componente
Crea componente que renderice las cards:
```jsx
export function MyCategoryGrid({ sections }) {
  return (
    <div className="category-grid">
      {sections.map((section) => (
        <div key={section.id} className="category-card"
             style={{ borderTopColor: section.color }}>
          {/* Contenido de la card */}
        </div>
      ))}
    </div>
  );
}
```

### Paso 3: Estilos
Copia la estructura CSS base y adapta:
```css
.category-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 1.5rem;
}

.category-card {
  /* Estilos base */
}
```

### Paso 4: Integración
- Importa en el componente que lo usa
- Pasa los datos como props
- Exporta en `src/components/index.js`

---

## Checklist para Nueva Segmentación

- [ ] Datos tienen estructura: `id`, `name`, `description`, `icon`, `color`, `lessons`
- [ ] Componente renderiza grid responsive
- [ ] CSS sigue paleta de colores base
- [ ] Tipografía: #1a2332 (títulos), #5a6c7d (descripciones)
- [ ] Links: #2c7a7b con background teal suave
- [ ] Hover effects: elevation + cambio a blanco
- [ ] Responsive: 3 columnas (desktop) → 1 (mobile)
- [ ] Componente exportado en `index.js`
- [ ] Build pasa sin errores

---

## Ejemplos de Uso

### Segmentación Simple (Solo Información)
```jsx
<div className="category-card">
  <h3>Título</h3>
  <p>Descripción</p>
</div>
```

### Con Lecciones/Links
```jsx
<ul className="lessons-list">
  {lessons.map(lesson => (
    <li key={lesson.id}>
      <Link to={lesson.link}>{lesson.title}</Link>
    </li>
  ))}
</ul>
```

### Con Contador
```jsx
<div className="card-footer">
  <span className="lesson-count">
    {lessons.length} lecciones
  </span>
</div>
```

---

## Performance

- Grid usa `repeat(auto-fit, minmax())` para responsividad sin media queries
- Transiciones suaves (0.3s ease)
- Box-shadow optimizado: 2 sombras mínimas
- Sin animaciones innecesarias

---

## Próximas Mejoras

- [ ] Agregar animación de entrada (fade-in)
- [ ] Filtrado por dificultad/tipo
- [ ] Búsqueda dentro de categoría
- [ ] Indicador de progreso
- [ ] Ordenamiento personalizado

---

**Referencia:**
- Componentes: `src/components/ModulesSection.jsx`, `ProjectSectionsGrid.jsx`
- Colores: Paleta arriba
- Tipografía: #1a2332 (dark), #5a6c7d (medium), #2c7a7b (links)
