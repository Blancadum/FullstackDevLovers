import { LessonProyectoRetoGeneric } from '../components/LessonProyectoRetoGeneric';

const sections = [
  {
    title: '1. Mejoras del Sprint 1 (1 punto)',
    content: (
      <>
        <p>
          Incorpora feedback del Sprint 1 y mejora lo realizado.
        </p>

        <h4>Acciones de Mejora:</h4>
        <ul style={{ lineHeight: '1.8' }}>
          <li>Análisis de bugs reportados en Sprint Review</li>
          <li>Refactorización de código problemático</li>
          <li>Optimizaciones identificadas en retrospectiva</li>
          <li>Deuda técnica acumulada (IMPORTANTE)</li>
          <li>Mejoras UX basadas en feedback</li>
        </ul>

        <h4>Recomendación:</h4>
        <p>
          20% del sprint dedicado a tech debt y mejoras asegura código sostenible
          y no acumula problemas para futuros sprints.
        </p>
      </>
    )
  },

  {
    title: '2. Nuevas Funcionalidades (2 puntos)',
    content: (
      <>
        <p>
          Implementa features de valor agregado para el proyecto.
        </p>

        <h4>Proceso de Desarrollo de Nueva Feature:</h4>
        <ul style={{ lineHeight: '1.8' }}>
          <li><strong>1. Análisis y Diseño:</strong> Especificación técnica, diagramas, impacto BD</li>
          <li><strong>2. Desarrollo Backend:</strong> Controllers/Endpoints, Services, Repositorios</li>
          <li><strong>3. Tests:</strong> Unit tests, Integration tests, Test de features</li>
          <li><strong>4. Code Review + Merge:</strong> PR review → Merge → Deploy staging</li>
        </ul>

        <h4>Criterios de Aceptación:</h4>
        <ul style={{ lineHeight: '1.8' }}>
          <li>Feature funciona como se especificó</li>
          <li>Tests pasan (70%+ coverage)</li>
          <li>No rompe features existentes</li>
          <li>Performance aceptable</li>
          <li>Documentación actualizada</li>
        </ul>
      </>
    )
  },

  {
    title: '3. Refactorización (1 punto)',
    content: (
      <>
        <p>
          Mejora calidad interna del código sin cambiar comportamiento.
        </p>

        <h4>Objetivos de Refactorización:</h4>
        <ul style={{ lineHeight: '1.8' }}>
          <li>Eliminar duplicación de código</li>
          <li>Métodos pequeños y enfocados (menos de 20 líneas)</li>
          <li>Nombres claros y descriptivos</li>
          <li>Reducción de complejidad ciclomática</li>
          <li>Mejorar legibilidad y mantenibilidad</li>
        </ul>

        <h4>Checklist de Refactorización:</h4>
        <ul style={{ lineHeight: '1.8' }}>
          <li>Duplicación de código eliminada</li>
          <li>Métodos pequeños y enfocados</li>
          <li>Nombres claros y descriptivos</li>
          <li>Reducción de complejidad ciclomática</li>
          <li>Tests pasan después de refactor (no romper nada)</li>
        </ul>

        <h4>IMPORTANTE:</h4>
        <p>
          Refactorización solo con tests que pasan. Si no hay tests, primero escribe tests.
        </p>
      </>
    )
  },

  {
    title: '4. Testing Intensivo (2 puntos)',
    content: (
      <>
        <p>
          Garantiza calidad mediante testing completo (pirámide de tests).
        </p>

        <h4>Pirámide de Tests (recomendado):</h4>
        <ul style={{ lineHeight: '1.8' }}>
          <li><strong>Unit Tests (50-60%):</strong> JUnit, Mockito, AssertJ - Lógica individual</li>
          <li><strong>Integration Tests (30-40%):</strong> TestContainers, H2 - Interacción entre componentes</li>
          <li><strong>E2E Tests (10-15%):</strong> Selenium, Cypress - Flujos completos de usuario</li>
        </ul>

        <h4>Target de Coverage:</h4>
        <p>
          75%+ coverage recomendado (mínimo 70% aceptable).
        </p>

        <h4>Tipos de Tests Específicos:</h4>
        <ul style={{ lineHeight: '1.8' }}>
          <li>Tests de funcionalidad: ¿Hace lo que debe?</li>
          <li>Tests de error: ¿Maneja errores correctamente?</li>
          <li>Tests de rendimiento: ¿Es suficientemente rápido?</li>
          <li>Tests de seguridad: ¿Es seguro contra ataques comunes?</li>
        </ul>

        <h4>Performance Targets:</h4>
        <ul style={{ lineHeight: '1.8' }}>
          <li>Tiempo respuesta API menor a 200ms</li>
          <li>Database queries menor a 100ms</li>
          <li>Frontend load menor a 3 segundos</li>
          <li>Error rate menor a 0.1%</li>
        </ul>
      </>
    )
  },

  {
    title: '5. Performance Optimization (1 punto)',
    content: (
      <>
        <p>
          Optimiza velocidad y eficiencia del sistema.
        </p>

        <h4>Técnicas de Optimización:</h4>
        <ul style={{ lineHeight: '1.8' }}>
          <li><strong>Base de Datos:</strong> Índices, query optimization, connection pooling</li>
          <li><strong>Cacheo:</strong> Redis para datos frecuentes, HTTP caching</li>
          <li><strong>APIs:</strong> Pagination, compresión GZIP, lazy loading</li>
          <li><strong>Frontend:</strong> Minificación, tree-shaking, code splitting</li>
          <li><strong>Infraestructura:</strong> CDN, autoscaling, load balancing</li>
        </ul>

        <h4>Medición:</h4>
        <p>
          Usa APM (Application Performance Monitoring) para medir ANTES y DESPUÉS.
          No optimices sin datos. Mide tiempo respuesta, CPU, memoria, latencia.
        </p>

        <h4>Targets típicos:</h4>
        <ul style={{ lineHeight: '1.8' }}>
          <li>Tiempo respuesta API: menos de 200ms</li>
          <li>Database queries: menos de 100ms</li>
          <li>Frontend load: menos de 3 segundos</li>
          <li>Error rate: menor al 0.1%</li>
        </ul>
      </>
    )
  },

  {
    title: '6. Sprint Retrospective (1 punto)',
    content: (
      <>
        <p>
          Reflexiona sobre el proceso y mejora para el siguiente sprint.
        </p>

        <h4>Formato: "WENT WELL / COULD BE BETTER / ACTION ITEMS"</h4>

        <h4>Fue bien:</h4>
        <ul style={{ lineHeight: '1.8' }}>
          <li>Colaboración del equipo</li>
          <li>Herramientas utilizadas</li>
          <li>Proceso de deployment</li>
          <li>Calidad de código</li>
        </ul>

        <h4>Podría mejorar:</h4>
        <ul style={{ lineHeight: '1.8' }}>
          <li>Estimación de puntos (¿realista?)</li>
          <li>Comunicación interna</li>
          <li>Testing y coverage</li>
          <li>Documentación</li>
          <li>Procesos y flujos de trabajo</li>
        </ul>

        <h4>Action Items (obligatorio):</h4>
        <ul style={{ lineHeight: '1.8' }}>
          <li>Acción concreta (NO vaga)</li>
          <li>Responsable asignado</li>
          <li>Fecha de implementación</li>
          <li>Revisar en próximo sprint</li>
        </ul>

        <h4>Ejemplo de mejora:</h4>
        <p>
          MAL: "Mejorar testing"
          BIEN: "Aumentar coverage a 75% en Sprint 3, responsable Juan, usando SonarQube dashboard"
        </p>
      </>
    )
  }
];

export function LessonProyectoReto7() {
  return (
    <LessonProyectoRetoGeneric
      retoNumber={7}
      title="REPTE 7: Sprint 2 Development"
      sections={sections}
    />
  );
}
