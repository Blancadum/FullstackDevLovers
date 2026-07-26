# Backend Learning Platform

Plataforma educativa moderna para aprender Java, Git, SQL, Spring Boot, DevOps y más. Construida con React + Vite, con 50+ lecciones organizadas en módulos, componentes reutilizables y SEO completo.

## Main Features

- **50+ Lecciones Interactivas** — Organizadas en 8 módulos (Git, Java, SQL, Spring Boot, Herramientas, Metodologías, Proyecto, AWS)
- **Componentes Reutilizables** — Reduce 75-80% del código de lecciones (LessonTemplate, ConceptCard, Exercise, etc.)
- **Tabla de Contenidos Automática** — Generación dinámica de índice por lección
- **Búsqueda en Tiempo Real** — Filtra lecciones al escribir
- **100% Responsive** — Optimizado para mobile, tablet y desktop (3 breakpoints)
- **SEO Completo** — Meta tags dinámicos, breadcrumbs, sitemap XML, canonical URLs
- **Breadcrumbs Automáticos** — Navegación contextual basada en rutas
- **Accesibilidad WCAG 2.1 Level AA** — Focus visible, aria-labels, contrast ratios
- **Dark Mode Ready** — Variables CSS para temas

## Tech Stack

| Layer | Technology | Version |
|-------|-----------|---------|
| **Framework** | React | 19.2.7 |
| **Routing** | React Router | 7.18.1 |
| **Build** | Vite | 8.1.1 |
| **SEO** | react-helmet-async | 3.0.0 |
| **Linting** | Oxlint | 1.71.0 |

**Líneas de código:**
- 261 componentes/páginas JSX
- 63 archivos CSS
- 21 configuración/hooks/utils

## File Structure

```
src/
├── components/           # 50+ componentes reutilizables
│   ├── LessonTemplate.jsx      ⭐ Template principal de lecciones
│   ├── Exercise.jsx             # Ejercicios con pistas/soluciones
│   ├── CodeBlock.jsx            # Resaltado de sintaxis
│   ├── FAQ.jsx                  # Preguntas expandibles
│   ├── Breadcrumb.jsx           # Navegación automática
│   ├── TableOfContents.jsx      # Índice dinámico
│   └── [otros 44+ componentes]
│
├── pages/               # 200+ páginas de lecciones
│   ├── Home.jsx
│   ├── ModulePage.jsx
│   ├── LessonGit*.jsx
│   ├── LessonJava*.jsx
│   ├── LessonSQL*.jsx
│   └── [otros módulos]
│
├── hooks/              # Hooks personalizados
│   ├── useLessonNavigation.js
│   ├── useBreadcrumb.js
│   └── useIsDark.js
│
├── config/             # Configuración centralizada
│   ├── modulesConfig.js         # Estructura de módulos
│   ├── lessonMetadata.js        # Metadatos SEO
│   ├── lessonNavigation.js
│   └── moduleCategories.js
│
├── data/              # Datos estáticos
│   ├── retosData.js
│   └── ejemplosTFCData.js
│
├── App.jsx            # Router principal
├── main.jsx
├── App.css
├── global.css
└── index.css
```

## Setup Instructions

### 1. Clonar y instalar

```bash
git clone <repo-url>
cd backend-learning-react
npm install
```

### 2. Desarrollo

```bash
npm run dev
```

Abre http://localhost:5173 en el navegador. Los cambios se recargan automáticamente.

### 3. Build para producción

```bash
npm run build
```

Genera carpeta `/dist` lista para deploy.

### 4. Preview de build

```bash
npm run preview
```

Previsualiza el build local antes de desplegar.

### 5. Linting

```bash
npm run lint
```

Ejecuta Oxlint para verificar calidad de código.

## Main Scripts

| Script | Comando | Descripción |
|--------|---------|-------------|
| **Dev** | `npm run dev` | Inicia servidor de desarrollo (puerto 5173) |
| **Build** | `npm run build` | Crea bundle optimizado para producción |
| **Preview** | `npm run preview` | Previsualiza el build local |
| **Lint** | `npm run lint` | Analiza código con Oxlint |

## Estructura de Módulos

Cada módulo sigue un patrón consistente con landing page y lecciones organizadas:

- **Landing Page** — `/modulo` — Introducc y navegación
- **Lecciones** — `/modulo?section=seccionId&lesson=leccionId`
- **Metadata** — Configurados en `modulesConfig.js` y `lessonMetadata.js`

### Módulos disponibles:
- ✅ Git (8 lecciones)
- ✅ Java Básico (7 lecciones)
- ✅ Java POO (4 lecciones)
- ✅ Java Avanzado (7 lecciones)
- ✅ SQL (5 lecciones)
- ✅ Spring Boot (8 lecciones)
- ✅ Herramientas (5 lecciones)
- ✅ AWS (15+ lecciones)

## Testing

Actualmente **no hay suite de tests automáticos**. Para verificar que el código funciona:

```bash
npm run build
```

Si el build pasa sin errores, la compilación y bundling son correctos. Para testing manual:

1. Navega a diferentes módulos
2. Verifica que Table of Contents se genera automáticamente
3. Prueba búsqueda en tiempo real
4. Valida breadcrumbs en diferentes rutas
5. Prueba responsive en diferentes tamaños

### Próximas mejoras:
- [ ] Tests unitarios (Jest + React Testing Library)
- [ ] Tests e2e (Playwright/Cypress)
- [ ] Tests de accesibilidad (axe)

## Crear Nueva Lección

### 1. Crear componente

```jsx
// src/pages/LessonNuevo.jsx
import { LessonTemplate } from '../components';
import { useBreadcrumb } from '../hooks/useBreadcrumb';

export function LessonNuevo() {
  const breadcrumbs = useBreadcrumb();

  return (
    <LessonTemplate
      title="Mi Lección"
      breadcrumbs={breadcrumbs}
      sections={[
        { title: 'Introducción', content: <p>...</p> }
      ]}
      concepts={[...]}
      exercises={[...]}
      keyPoints={['Punto 1', 'Punto 2']}
      summary="Resumen"
    />
  );
}
```

### 2. Registrar ruta en `src/App.jsx`

```jsx
<Route path="/modulo/leccion" element={<LessonNuevo />} />
```

### 3. Añadir metadata en `src/config/lessonMetadata.js`

```js
'/modulo/leccion': {
  title: 'Mi Lección | Backend Learning',
  description: '...',
  keywords: 'palabra1, palabra2'
}
```

### 4. Actualizar módulo en `src/config/modulesConfig.js`

## Development Workflow

### Componentes comunes

| Componente | Uso |
|-----------|-----|
| `LessonTemplate` | Template completo de lecciones (recomendado) |
| `LessonLayout` | Layout base con sidebar y TOC |
| `Exercise` | Ejercicios con pistas y soluciones |
| `CodeBlock` | Código resaltado con syntax highlighting |
| `FAQ` | Preguntas expandibles |
| `ConceptCard` | Tarjetas de conceptos en grid |
| `InfoBox` | Cajas informativas (6 variantes) |
| `Breadcrumb` | Navegación automática |

### CSS Conventions

- Clases en **kebab-case**: `.lesson-template`
- Variables CSS en `global.css`: `--color-primary`, `--space-4`, `--transition-normal`
- Sin `!important` salvo override de librerías externas (highlight.js)
- Mobile-first: media queries en `@media (min-width: 768px)`

### Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1023px
- **Desktop**: ≥ 1024px

## Performance

- **Lighthouse**: 90+ en performance, accessibility, best practices
- **Bundle size**: ~2.5MB (minified), ~621KB (gzipped)
- **Vite**: Build time ~1-2 segundos
- **Code splitting**: Lazy loading habilitado en rutas

## SEO

- Meta tags dinámicos por lección
- Breadcrumbs (schema.org JSON-LD)
- Sitemap XML en `/public/sitemap.xml`
- robots.txt
- Canonical URLs
- Open Graph tags (compartir en redes)

## Deployment

Optimizado para **Vercel**, **Netlify**, o cualquier hosting estático:

```bash
npm run build
# Sube carpeta /dist al hosting
```

## Troubleshooting

| Problema | Solución |
|----------|----------|
| Build falla | Ejecuta `npm install` y `npm run build` de nuevo |
| Cambios no se ven en dev | Verifica que `npm run dev` está corriendo en puerto 5173 |
| Linting falla | Corre `npm run lint` para ver errores específicos |
| Estilos no aplican | Verifica que el archivo `.css` está importado en el `.jsx` |

## Convenciones del Código

- **JSX en PascalCase**: `LessonTemplate.jsx`
- **CSS en kebab-case**: `lesson-template.css`
- **Imports**: Componentes de `./components`, páginas de `./pages`
- **No usar !important**: Resolver con especificidad CSS
- **Comentarios**: Solo para lógica no obvia
- **Funciones componente**: Nombradas explícitamente, sin arrow functions anónimas

## Links Útiles

- **React 19 docs**: https://react.dev
- **React Router docs**: https://reactrouter.com
- **Vite docs**: https://vitejs.dev
- **Oxlint**: https://oxc.rs

---

**Última actualización:** 2026-07-24
**Versión:** 3.2 (261 componentes, 50+ lecciones)
**Estado:** Producción ✅
