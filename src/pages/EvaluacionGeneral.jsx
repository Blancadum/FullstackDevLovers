import { useNavigate } from 'react-router-dom';
import { LessonTemplate } from '../components';
import { useBreadcrumb } from '../hooks/useBreadcrumb';

export function EvaluacionGeneral() {
  const navigate = useNavigate();
  const breadcrumbs = useBreadcrumb();

  const evaluaciones = [
    {
      id: 'aws',
      titulo: 'Test AWS',
      icono: '✅',
      color: '#2196F3',
      descripcion: '10 preguntas sobre conceptos clave de AWS: EC2, S3, RDS, Lambda, IAM, VPC, regiones, modelos de precios y servicios fundamentales. Incluye explicaciones detalladas para cada respuesta.',
      ruta: '/aws/evaluacion',
      preguntas: 10
    },
    {
      id: 'java',
      titulo: 'Test Java',
      icono: '☕',
      color: '#F89917',
      descripcion: 'Evaluación sobre fundamentos de Java: OOP, clases, interfaces, herencia, polimorfismo, excepciones y buenos prácticos. Refuerza tus conocimientos de programación.',
      ruta: '/java/evaluacion',
      preguntas: 15,
      proximamente: true
    },
    {
      id: 'git',
      titulo: 'Test Git',
      icono: '🔀',
      color: '#F1502F',
      descripcion: 'Evaluación sobre Git y control de versiones: commits, branches, merge, rebase, pull requests y workflows colaborativos en equipos de desarrollo.',
      ruta: '/git/evaluacion',
      preguntas: 12,
      proximamente: true
    },
    {
      id: 'database',
      titulo: 'Test SQL',
      icono: '🗄️',
      color: '#336791',
      descripcion: 'Test sobre SQL y diseño de bases de datos: SELECT, JOIN, índices, normalización, transacciones ACID y relaciones en bases de datos relacionales.',
      ruta: '/database/evaluacion',
      preguntas: 20,
      proximamente: true
    }
  ];

  return (
    <LessonTemplate
      breadcrumbs={breadcrumbs}
      sections={[
        {
          title: 'Evaluaciones: Tests de Autoevaluación',
          content: (
            <>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '3rem', color: '#666' }}>
                Prueba tus conocimientos con evaluaciones interactivas. Cada test incluye preguntas de opción múltiple,
                explicaciones detalladas de cada respuesta y una puntuación final. Perfecto para medir tu progreso.
              </p>

              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                gap: '2rem'
              }}>
                {evaluaciones.map((evaluacion) => (
                  <div
                    key={evaluacion.id}
                    onClick={() => !evaluacion.proximamente && navigate(evaluacion.ruta)}
                    style={{
                      backgroundColor: '#ffffff',
                      border: `3px solid ${evaluacion.color}`,
                      borderRadius: '12px',
                      padding: '2rem',
                      cursor: evaluacion.proximamente ? 'not-allowed' : 'pointer',
                      transition: 'all 0.3s ease',
                      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
                      opacity: evaluacion.proximamente ? 0.6 : 1,
                      position: 'relative',
                      overflow: 'hidden'
                    }}
                    onMouseEnter={(e) => {
                      if (!evaluacion.proximamente) {
                        e.currentTarget.style.transform = 'translateY(-4px)';
                        e.currentTarget.style.boxShadow = `0 8px 20px ${evaluacion.color}30`;
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!evaluacion.proximamente) {
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.08)';
                      }
                    }}
                  >
                    {evaluacion.proximamente && (
                      <div style={{
                        position: 'absolute',
                        top: '10px',
                        right: '10px',
                        backgroundColor: '#FF9800',
                        color: '#ffffff',
                        padding: '0.4rem 0.8rem',
                        borderRadius: '20px',
                        fontSize: '0.75rem',
                        fontWeight: '700'
                      }}>
                        Próximamente
                      </div>
                    )}

                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                      <span style={{ fontSize: '2.5rem' }}>{evaluacion.icono}</span>
                      <h2 style={{ margin: 0, color: evaluacion.color, fontSize: '1.3rem', fontWeight: '700' }}>
                        {evaluacion.titulo}
                      </h2>
                    </div>

                    <p style={{ margin: '1rem 0 0 0', fontSize: '0.95rem', color: '#666', lineHeight: '1.6' }}>
                      {evaluacion.descripcion}
                    </p>

                    {!evaluacion.proximamente && (
                      <>
                        <div style={{
                          marginTop: '1rem',
                          padding: '0.8rem',
                          backgroundColor: '#f5f5f5',
                          borderRadius: '6px',
                          fontSize: '0.9rem',
                          color: evaluacion.color,
                          fontWeight: '600',
                          textAlign: 'center'
                        }}>
                          {evaluacion.preguntas} preguntas
                        </div>
                        <div style={{
                          marginTop: '1.5rem',
                          paddingTop: '1.5rem',
                          borderTop: `2px solid ${evaluacion.color}20`,
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.5rem',
                          color: evaluacion.color,
                          fontWeight: '700'
                        }}>
                          <span>Comenzar →</span>
                        </div>
                      </>
                    )}
                  </div>
                ))}
              </div>
            </>
          )
        }
      ]}
    />
  );
}
