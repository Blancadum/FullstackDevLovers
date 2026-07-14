import { useState, useMemo } from 'react';
import { LessonTemplate } from './LessonTemplate';
import { LessonNavigation } from './LessonNavigation';
import { useBreadcrumb } from '../hooks/useBreadcrumb';
import { useLessonNavigation } from '../hooks/useLessonNavigation';
import { PROYECTOS } from '../config/proyectosData';

/**
 * Componente genérico para todos los RETOS 1-8
 * Elimina 4,000+ líneas de duplicación
 *
 * Uso: <LessonProyectoRetoGeneric retoNumber={1} title="REPTE 1: ..." sections={[...]} />
 */
export function LessonProyectoRetoGeneric({
  retoNumber,
  title,
  sections = []
}) {
  const breadcrumbs = useBreadcrumb();
  const nav = useLessonNavigation();
  const [proyectoSeleccionado, setProyectoSeleccionado] = useState('ecomarket');

  // Memoizar lista de proyectos para evitar re-renders
  const proyectosList = useMemo(() =>
    Object.entries(PROYECTOS).map(([key, data]) => ({
      value: key,
      label: data.nombre
    })),
    []
  );

  // Memoizar datos del proyecto seleccionado
  const proyecto = useMemo(() => {
    const data = PROYECTOS[proyectoSeleccionado];
    return data ? { ...data, retoData: data[`reto${retoNumber}`] } : null;
  }, [proyectoSeleccionado, retoNumber]);

  if (!proyecto) return null;

  return (
    <>
      <LessonTemplate
        title={title}
        breadcrumbs={breadcrumbs}
        sections={sections}
      />
      <div style={{ padding: '2rem', backgroundColor: '#f8f9fa', marginTop: '2rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h3>Selecciona un proyecto para ver detalles:</h3>
          <select
            value={proyectoSeleccionado}
            onChange={(e) => setProyectoSeleccionado(e.target.value)}
            style={{
              padding: '0.75rem',
              fontSize: '1rem',
              borderRadius: '4px',
              border: '1px solid #ddd',
              marginBottom: '1.5rem'
            }}
          >
            {proyectosList.map(p => (
              <option key={p.value} value={p.value}>
                {p.label}
              </option>
            ))}
          </select>

          <div style={{
            backgroundColor: '#fff',
            padding: '1.5rem',
            borderRadius: '8px',
            border: '1px solid #e0e0e0'
          }}>
            <h4 style={{ marginTop: 0, color: '#1976d2' }}>
              {proyecto.nombre} - Detalles
            </h4>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginTop: '1rem' }}>
              <div><strong>Presupuesto:</strong> ${proyecto.presupuesto}</div>
              <div><strong>Horas:</strong> {proyecto.horas}h</div>
              {proyecto.retoData && (
                <>
                  {renderRetoDetails(proyecto.retoData, retoNumber)}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
      <LessonNavigation
        previousLink={nav.previous}
        previousTitle={nav.previousTitle}
        nextLink={nav.next}
        nextTitle={nav.nextTitle}
      />
    </>
  );
}

/**
 * Renderiza detalles específicos de cada RETO
 */
function renderRetoDetails(retoData, retoNumber) {
  const details = [];

  if (retoNumber === 1) {
    details.push(
      <div key="1"><strong>Meses:</strong> {retoData.duracionMeses}</div>,
      <div key="2"><strong>Equipo:</strong> {retoData.equipoSize} personas</div>,
      <div key="3"><strong>Fases:</strong> {retoData.fases.join(', ')}</div>
    );
  } else if (retoNumber === 2) {
    details.push(
      <div key="1"><strong>Frontend:</strong> {retoData.frontend}</div>,
      <div key="2"><strong>Backend:</strong> {retoData.backend}</div>,
      <div key="3"><strong>Database:</strong> {retoData.database}</div>
    );
  } else if (retoNumber === 3) {
    details.push(
      <div key="1"><strong>ROI:</strong> {retoData.roi}</div>,
      <div key="2"><strong>Innovación:</strong> {retoData.innovation}</div>
    );
  } else if (retoNumber === 4) {
    details.push(
      <div key="1"><strong>Equipo:</strong> {retoData.teamComposition}</div>,
      <div key="2"><strong>Frecuencia:</strong> {retoData.frequency}</div>
    );
  } else if (retoNumber === 5) {
    details.push(
      <div key="1"><strong>Herramienta:</strong> {retoData.herramienta}</div>,
      <div key="2"><strong>Duración Sprint:</strong> {retoData.duracionSprint} semanas</div>,
      <div key="3"><strong>Total Sprints:</strong> {retoData.totalSprints}</div>
    );
  } else if (retoNumber === 6) {
    details.push(
      <div key="1"><strong>Stories:</strong> {retoData.storiesCount}</div>,
      <div key="2"><strong>Story Points:</strong> {retoData.storyPoints}</div>,
      <div key="3"><strong>CI/CD:</strong> {retoData.ciTools}</div>
    );
  } else if (retoNumber === 7) {
    details.push(
      <div key="1"><strong>Unit Coverage:</strong> {retoData.testingMetrics.unitCoverage}%</div>,
      <div key="2"><strong>Integration Tests:</strong> {retoData.testingMetrics.integrationTests}</div>,
      <div key="3"><strong>E2E Tests:</strong> {retoData.testingMetrics.e2eTests}</div>
    );
  } else if (retoNumber === 8) {
    details.push(
      <div key="1"><strong>Features:</strong> {retoData.completionMetrics.features}%</div>,
      <div key="2"><strong>Coverage:</strong> {retoData.completionMetrics.coverage}%</div>,
      <div key="3"><strong>Status:</strong> Ready for Production ✅</div>
    );
  }

  return details;
}
