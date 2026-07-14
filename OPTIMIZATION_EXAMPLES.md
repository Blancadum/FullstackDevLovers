# Ejemplos Específicos de Optimización

---

## EJEMPLO 1: Consolidar proyectos en archivo compartido

### ANTES (duplicado 8 veces):

**`src/pages/LessonProyectoReto1.jsx` líneas 12-153:**
```jsx
const proyectos = {
  ecomarket: {
    nombre: 'EcoMarket',
    tipo: 'e-Commerce B2C',
    descripcion: 'Marketplace de productos ecológicos y sostenibles',
    usuarios: ['Compradores 25-45 años (urbanos, eco-conscientes)', '...'],
    sector: 'E-commerce sostenible',
    mercado: 'España + Portugal (2.5M usuarios potenciales)',
    competidores: ['Amazon Fresh', 'Ecoposteria.com', 'Etsy'],
    presupuesto: 13522,
    horas: 396,
    funcionalidades: ['Catálogo con filtros eco', 'Carrito + checkout', ...],
    viabilidad: 'Muy alta (tendencia crecimiento 25%/año)',
    roi: 'Break-even mes 10-12, ROI 150% año 2'
  },
  // ... 9 proyectos más (149 líneas)
};
```

**Repetido identicamente en:**
- LessonProyectoReto2.jsx (líneas 12-143) - Variante técnica
- LessonProyectoReto3.jsx (líneas 12-183) - Variante pitch
- LessonProyectoReto4.jsx (líneas 12-173) - Variante equipo
- LessonProyectoReto5.jsx (líneas 12-172) - Variante sprints
- LessonProyectoReto6.jsx (líneas 12-159) - Variante métricas
- LessonProyectoReto7.jsx (líneas 12-137) - Variante retrospectiva
- LessonProyectoReto8.jsx (líneas 12-164) - Variante deployment

### DESPUÉS (archivo compartido):

**Crear: `src/config/proyectosData.js`**

```jsx
/**
 * Base de datos centralizada de 10 proyectos DAW
 * Compartida por todos los LessonProyectoReto{1-8}
 *
 * Cambios aquí afectan TODOS los retos automáticamente
 */

export const PROYECTOS_BASE = {
  ecomarket: {
    nombre: 'EcoMarket',
    tipo: 'e-Commerce B2C',
    descripcion: 'Marketplace de productos ecológicos y sostenibles',
    usuarios: [
      'Compradores 25-45 años (urbanos, eco-conscientes)',
      'Vendedores pequeñas marcas sostenibles'
    ],
    sector: 'E-commerce sostenible',
    mercado: 'España + Portugal (2.5M usuarios potenciales)',
    competidores: ['Amazon Fresh', 'Ecoposteria.com', 'Etsy'],
    presupuesto: 13522,
    horas: 396,
    funcionalidades: [
      'Catálogo con filtros eco',
      'Carrito + checkout',
      'Auth JWT',
      'Sistema pagos Stripe',
      'Panel vendedor',
      'Análisis huella carbono'
    ],
    viabilidad: 'Muy alta (tendencia crecimiento 25%/año)',
    roi: 'Break-even mes 10-12, ROI 150% año 2'
  },
  techsalon: {
    nombre: 'TechSalon',
    // ... resto de datos
  },
  // ... 8 proyectos más
};

/**
 * DATOS POR RETO (cómo cada reto enriquece los proyectos base)
 */
export const RETO_ENHANCEMENTS = {
  1: { // Reto 1: Especificación
    key: 'especificacion',
    fields: ['nombre', 'tipo', 'descripcion', 'usuarios', 'sector', 'presupuesto', 'horas']
  },
  2: { // Reto 2: Técnico
    key: 'tecnico',
    extraFields: {
      frontend: 'React 18, Tailwind CSS, Vite, React Query',
      backend: 'Spring Boot 3.2, Spring Data JPA, Spring Security',
      database: 'PostgreSQL 15, Redis para cache',
      // ...
    }
  },
  3: { // Reto 3: Pitch
    key: 'pitch',
    extraFields: {
      problema: 'Los consumidores eco-conscientes...',
      innovacion: 'Transparencia total...',
      guion: '"¿Cansado de comprar..."'
    }
  },
  4: { // Reto 4: Equipo
    key: 'equipo',
    extraFields: {
      equipo: ['Product Owner / Full-stack Developer', '...'],
      roles: [
        { nombre: 'María', rol: 'Product Owner', horas: '25h/semana', ... },
        // ...
      ]
    }
  },
  // ... Reto 5, 6, 7, 8
};

/**
 * Función helper: Obtener proyecto enriquecido para un RETO específico
 */
export function getProyectoForReto(retoNumber, proyectoId) {
  const base = PROYECTOS_BASE[proyectoId];
  const enhancement = RETO_ENHANCEMENTS[retoNumber]?.extraFields || {};
  return { ...base, ...enhancement };
}
```

**Ahorro: ~1,200 líneas duplicadas eliminadas**

---

## EJEMPLO 2: Crear componente genérico para todos los RETO

### ANTES:

**`src/pages/LessonProyectoReto1.jsx` (594 líneas completas)**

### DESPUÉS:

**Crear: `src/components/LessonProyectoRetoGeneric.jsx`**

```jsx
import { useState, useMemo } from 'react';
import { LessonTemplate } from '../components';
import { LessonNavigation } from '../components/LessonNavigation';
import { useBreadcrumb } from '../hooks/useBreadcrumb';
import { useLessonNavigation } from '../hooks/useLessonNavigation';
import { PROYECTOS_BASE } from '../config/proyectosData';
import { RETOS_CONFIG } from '../config/retosConfig';
import { ProyectoSelector } from './ProyectoSelector';

/**
 * Componente genérico para todos los LessonProyectoReto{1-8}
 *
 * Uso:
 * <LessonProyectoRetoGeneric retoNumber={1} />
 * <LessonProyectoRetoGeneric retoNumber={2} />
 * ...
 */
export function LessonProyectoRetoGeneric({ retoNumber }) {
  const breadcrumbs = useBreadcrumb();
  const nav = useLessonNavigation();
  const [proyectoSeleccionado, setProyectoSeleccionado] = useState('ecomarket');

  // Obtener configuración para este RETO
  const retoConfig = useMemo(() => RETOS_CONFIG[retoNumber], [retoNumber]);

  // Obtener proyecto actual + enhancements del reto
  const proyecto = useMemo(() => {
    const base = PROYECTOS_BASE[proyectoSeleccionado];
    const enhancements = retoConfig.getProjectEnhancements?.(base) || {};
    return { ...base, ...enhancements };
  }, [proyectoSeleccionado, retoConfig]);

  // Generar conceptos dinámicamente si es función
  const concepts = useMemo(() => {
    if (typeof retoConfig.concepts === 'function') {
      return retoConfig.concepts(proyecto);
    }
    return retoConfig.concepts || [];
  }, [proyecto, retoConfig.concepts]);

  // Generar sections dinámicamente si es función
  const sections = useMemo(() => {
    if (typeof retoConfig.sections === 'function') {
      return retoConfig.sections(proyecto);
    }
    return retoConfig.sections || [];
  }, [proyecto, retoConfig.sections]);

  // Generar summary dinámicamente
  const summary = useMemo(() => {
    if (typeof retoConfig.summary === 'function') {
      return retoConfig.summary(proyecto);
    }
    return retoConfig.summary || '';
  }, [proyecto, retoConfig.summary]);

  return (
    <>
      <ProyectoSelector
        retoNumber={retoNumber}
        proyectos={PROYECTOS_BASE}
        proyectoSeleccionado={proyectoSeleccionado}
        setProyectoSeleccionado={setProyectoSeleccionado}
      />

      <LessonTemplate
        title={retoConfig.title}
        breadcrumbs={breadcrumbs}
        concepts={concepts}
        keyPoints={retoConfig.keyPoints}
        sections={sections}
        summary={summary}
      />

      <LessonNavigation
        previousLink={nav.previous}
        previousTitle={nav.previousTitle}
        nextLink={nav.next}
        nextTitle={nav.nextTitle}
      />
    </>
  );
}
```

**Nuevo: `src/pages/LessonProyectoReto1.jsx` (reemplazar)**

```jsx
import { LessonProyectoRetoGeneric } from '../components/LessonProyectoRetoGeneric';

export function LessonProyectoReto1() {
  return <LessonProyectoRetoGeneric retoNumber={1} />;
}
```

**Repetir para Reto2-8:**
```jsx
// LessonProyectoReto2.jsx
export function LessonProyectoReto2() {
  return <LessonProyectoRetoGeneric retoNumber={2} />;
}

// LessonProyectoReto3.jsx
export function LessonProyectoReto3() {
  return <LessonProyectoRetoGeneric retoNumber={3} />;
}
// ... etc
```

**Ahorro: 594 + 508 + 588 + 687 + 577 + 446 + 394 + 534 = 4,328 líneas reducidas a 40 líneas (~99% menos)**

---

## EJEMPLO 3: Componente reutilizable para selector de proyecto

### CREAR: `src/components/ProyectoSelector.jsx`

```jsx
import PropTypes from 'prop-types';

export function ProyectoSelector({
  retoNumber,
  proyectos,
  proyectoSeleccionado,
  setProyectoSeleccionado
}) {
  const proyecto = proyectos[proyectoSeleccionado];

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem' }}>
      <h1 style={{
        fontSize: '2rem',
        color: '#2c3e50',
        marginBottom: '0.5rem',
        marginTop: 0
      }}>
        REPTE {retoNumber}: {getRetoTitle(retoNumber)}
      </h1>

      <p style={{
        fontSize: '0.95rem',
        color: '#7f8c8d',
        marginBottom: '2rem'
      }}>
        {getRetoDescription(retoNumber)}
      </p>

      {/* Selector dropdown */}
      <div style={{
        backgroundColor: '#f8f9fa',
        padding: '2rem',
        borderRadius: '0.5rem',
        marginBottom: '2rem',
        border: '2px solid #3498db'
      }}>
        <label style={{
          display: 'block',
          marginBottom: '1rem',
          fontSize: '1rem',
          fontWeight: 'bold',
          color: '#2c3e50'
        }}>
          📌 Selecciona un proyecto de ejemplo:
        </label>

        <select
          value={proyectoSeleccionado}
          onChange={(e) => setProyectoSeleccionado(e.target.value)}
          style={{
            width: '100%',
            maxWidth: '400px',
            padding: '0.75rem',
            fontSize: '1rem',
            borderRadius: '0.5rem',
            border: '2px solid #3498db',
            backgroundColor: 'white',
            cursor: 'pointer',
            fontWeight: 'bold'
          }}
        >
          {Object.entries(proyectos).map(([key, p]) => (
            <option key={key} value={key}>
              {p.nombre} - {p.tipo}
            </option>
          ))}
        </select>

        <p style={{
          marginTop: '1rem',
          fontSize: '0.9rem',
          color: '#555'
        }}>
          <strong>{proyecto.nombre}</strong> — {proyecto.descripcion}
        </p>
      </div>
    </div>
  );
}

ProyectoSelector.propTypes = {
  retoNumber: PropTypes.number.isRequired,
  proyectos: PropTypes.object.isRequired,
  proyectoSeleccionado: PropTypes.string.isRequired,
  setProyectoSeleccionado: PropTypes.func.isRequired
};

function getRetoTitle(num) {
  const titles = {
    1: 'Especificación del Proyecto',
    2: 'Especificación Técnica',
    3: 'Elevator Pitch',
    4: 'Organización del Equipo',
    5: 'Planificación de Sprints',
    6: 'Gestión del Proyecto',
    7: 'Sprint Review y Retrospectiva',
    8: 'Deployment y Producción'
  };
  return titles[num] || 'Reto';
}

function getRetoDescription(num) {
  const descriptions = {
    1: 'Propuesta individual de proyecto web con análisis completo.',
    2: 'Define stack tecnológico, herramientas y prototipo interactivo.',
    3: 'Grabación de video (60 segundos) presentando tu proyecto a inversores.',
    4: 'Planificación de equipo grupal (2-3 personas).',
    5: 'Gestión de sprints y backlog del proyecto.',
    6: 'Seguimiento y métricas del proyecto.',
    7: 'Review de sprint y retrospectiva del equipo.',
    8: 'Deployment a producción y mantenimiento.'
  };
  return descriptions[num] || 'Selecciona un ejemplo para ver cómo se desarrolla.';
}
```

**Ahorro: Elimina 80+ líneas duplicadas de selectores**

---

## EJEMPLO 4: Optimizar LessonTemplate.jsx con useMemo

### ANTES (140 líneas):

```jsx
export function LessonTemplate({
  title,
  breadcrumbs,
  sections = [],
  concepts = [],
  conceptsLabel = 'Conceptos',
  exercises = [],
  keyPoints = [],
  summary = '',
  glossary = []
}) {
  // Problema: Recalcula en cada render
  const anchors = [];
  if (sections.length > 0) anchors.push({ label: 'Contenido', id: 'contenido' });
  if (concepts.length > 0) anchors.push({ label: conceptsLabel, id: 'conceptos' });
  if (exercises.length > 0) anchors.push({ label: 'Ejercicios', id: 'ejercicios' });
  if (keyPoints.length > 0) anchors.push({ label: 'Puntos Clave', id: 'puntos-clave' });
  if (summary) anchors.push({ label: 'Resumen', id: 'resumen' });

  // ... renderizado (100+ líneas)
}
```

### DESPUÉS (optimizado):

```jsx
import { useMemo } from 'react';
import { LessonLayout, LessonSection, ConceptCard, KeyPoints, Summary } from './index';

export function LessonTemplate({
  title,
  breadcrumbs,
  sections = [],
  concepts = [],
  keyPoints = [],
  summary = '',
}) {
  // Optimizado: Memoizar anchors
  const anchors = useMemo(() => {
    const result = [];
    if (sections.length > 0) result.push({ label: 'Contenido', id: 'contenido' });
    if (concepts.length > 0) result.push({ label: 'Conceptos', id: 'conceptos' });
    if (keyPoints.length > 0) result.push({ label: 'Puntos Clave', id: 'puntos-clave' });
    if (summary) result.push({ label: 'Resumen', id: 'resumen' });
    return result;
  }, [sections.length, concepts.length, keyPoints.length, summary]);

  // Props no usados eliminados:
  // - exercises (solo en LessonCollections)
  // - conceptsLabel (nunca cambia)
  // - glossary (nunca usado)

  return (
    <LessonLayout breadcrumbs={breadcrumbs} title={title}>
      {anchors.length > 0 && <PageAnchors anchors={anchors} />}

      {/* Contenido renderizado... */}
    </LessonLayout>
  );
}
```

**Beneficios:**
- `anchors` se recalcula solo si sus dependencias cambian
- Props simplificados (3 removidos)
- -30 líneas de código

---

## EJEMPLO 5: Limpiar Breadcrumb.jsx

### ANTES (131 líneas):

```jsx
// Línea 128-130: Función duplicada innecesaria
export function generateBreadcrumbItems(pathname) {
  return generateBreadcrumbFromPath(pathname);
}
```

### DESPUÉS:

```jsx
// Eliminar completamente. Importar directamente:
import { generateBreadcrumbFromPath } from './Breadcrumb';

// O mejor aún, cambiar a:
export { generateBreadcrumbFromPath as generateBreadcrumbItems };
```

**Optimización adicional:**

```jsx
import { useMemo } from 'react';

export function Breadcrumb({ items }) {
  const location = useLocation();

  // Optimizar: Memoizar breadcrumbItems
  const breadcrumbItems = useMemo(
    () => items && items.length > 0
      ? items
      : generateBreadcrumbFromPath(location.pathname),
    [items, location.pathname]
  );

  if (!breadcrumbItems || breadcrumbItems.length === 0) {
    return (
      <nav className="breadcrumb" aria-label="breadcrumb">
        <ol className="breadcrumb-list">
          <li className="breadcrumb-item">
            <Link to="/">Home</Link>
          </li>
        </ol>
      </nav>
    );
  }

  return (
    <nav className="breadcrumb" aria-label="breadcrumb">
      <ol className="breadcrumb-list">
        {breadcrumbItems.map((item, index) => (
          <li key={index} className="breadcrumb-item">
            {item.link ? (
              <Link to={item.link}>{item.label}</Link>
            ) : (
              <span className="breadcrumb-current">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
```

**Ahorro:**
- Eliminar función duplicada: 3 líneas
- Optimizar con useMemo: No hay líneas adicionales
- Total: -3 líneas + mejor performance

---

## EJEMPLO 6: Estructura retosConfig.js

### CREAR: `src/config/retosConfig.js`

```jsx
/**
 * Configuración centralizada para todos los Retos (1-8)
 *
 * Cada reto define:
 * - title: Título del reto
 * - description: Descripción corta
 * - keyPoints: Puntos clave
 * - concepts: Conceptos (puede ser función)
 * - sections: Secciones de contenido (puede ser función)
 * - summary: Resumen final (puede ser función)
 * - getProjectEnhancements: Cómo enriquecer proyectos base con datos del reto
 */

import { PROYECTOS_BASE } from './proyectosData';

export const RETOS_CONFIG = {
  1: {
    title: 'REPTE 1: Especificación del Proyecto',
    description: 'Propuesta individual de proyecto web con análisis completo.',
    keyPoints: [
      '7 secciones obligatorias = 9 puntos totales',
      'Proyecto individual y realista',
      'Investigación real de competencia (3+ mínimo)',
      'Presupuesto detallado y justificado',
      'Cumplimiento GDPR es obligatorio en UE',
      'Formato: ODT o PDF',
      'Deadline: 08/10/2025'
    ],
    concepts: [
      {
        icon: '📋',
        title: 'Especificación',
        definition: 'Documento detallado que define todas las características de un proyecto web',
        example: 'Define: nombre, usuarios, funcionalidades, presupuesto y compliance'
      },
      {
        icon: '🎯',
        title: 'Análisis de Mercado',
        definition: 'Investigación de competidores y oportunidades',
        example: 'Comparar 3+ soluciones existentes identificando gaps'
      },
      {
        icon: '💰',
        title: 'Viabilidad',
        definition: 'Evaluación de costos y retorno de inversión',
        example: 'Presupuesto, horas estimadas, ROI'
      }
    ],
    sections: (proyecto) => [
      {
        title: '1. Nombre y Características del Proyecto (1 punto)',
        content: (
          <>
            <p>Define claramente qué es tu proyecto...</p>
            <h4>Ejemplo: {proyecto.nombre}</h4>
            <div style={{ backgroundColor: '#f8f9fa', padding: '1.5rem', borderRadius: '0.5rem' }}>
              <p><strong>Nombre:</strong> {proyecto.nombre}</p>
              <p><strong>Descripción:</strong> {proyecto.descripcion}</p>
            </div>
          </>
        )
      },
      // ... más secciones
    ],
    summary: (proyecto) => `REPTE 1: ESPECIFICACIÓN DEL PROYECTO - 9 PUNTOS

Proyecto seleccionado: ${proyecto.nombre}
Horas estimadas: ${proyecto.horas}h
Presupuesto: €${proyecto.presupuesto.toLocaleString()}

7 SECCIONES REQUERIDAS:
1. Nombre y Características (1p)
2. Tipo Empresa y Perfil (1p)
3. Análisis Competencia (2p)
4. Funcionalidades (2p)
5. Viabilidad Económica (1.5p)
6. Protección Datos & GDPR (1.5p)
7. Innovación y Realidad (1p)

FORMATO: ODT o PDF
DEADLINE: 08/10/2025`,
    getProjectEnhancements: (base) => ({
      // No hay enhancements adicionales para Reto 1
      // Usa directamente los datos base
    })
  },

  2: {
    title: 'REPTE 2: Especificación Técnica',
    description: 'Define stack tecnológico, herramientas y prototipo interactivo.',
    keyPoints: [
      'Stack técnico debe justificarse según proyecto',
      'Herramientas desarrollo ≠ Herramientas producción',
      'Prototipo mínimo: 3-5 pantallas + navegación',
      'Formato: ODT o PDF',
      'Deadline: 05/11/2025',
      '4 secciones = 8 puntos totales'
    ],
    concepts: [ /* ... */ ],
    sections: (proyecto) => [ /* ... */ ],
    summary: (proyecto) => `REPTE 2: ESPECIFICACIÓN TÉCNICA - 8 PUNTOS...`,
    getProjectEnhancements: (base) => ({
      // Los datos técnicos enriquecen el proyecto base
      frontend: 'React 18, Tailwind CSS, Vite, React Query',
      backend: 'Spring Boot 3.2, Spring Data JPA, Spring Security',
      // ...
    })
  },

  3: {
    title: 'REPTE 3: Elevator Pitch',
    description: 'Grabación de video (60 segundos) presentando tu proyecto a inversores.',
    keyPoints: [ /* ... */ ],
    concepts: [ /* ... */ ],
    sections: (proyecto) => [ /* ... */ ],
    summary: (proyecto) => `REPTE 3: ELEVATOR PITCH - 10 PUNTOS...`,
    getProjectEnhancements: (base) => ({
      problema: '...',
      innovacion: '...',
      guion: '...',
    })
  },

  // Retos 4-8 similar...
};
```

---

## RESUMEN: Antes vs. Después

| Aspecto | Antes | Después | Ganancia |
|---------|-------|---------|----------|
| Líneas LessonProyectoReto1-8 | 4,328 | ~50 | **98.8% ↓** |
| Archivos JSX Reto | 8 archivos grandes | 8 wrappers pequeños | Más mantenible |
| Duplicación proyectos | 10 en cada archivo | 1 archivo central | **87.5% ↓** |
| Props innecesarios | 11 | 7 | **36% ↓** |
| Renders innecesarios | N/A | Memoizados | Mejor perf |
| Tiempo refactorización | N/A | 4-5 horas | ROI alto |

