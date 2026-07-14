import { useNavigate } from 'react-router-dom';
import { LessonTemplate } from '../components';
import { useBreadcrumb } from '../hooks/useBreadcrumb';

export function LexicoGeneral() {
  const navigate = useNavigate();
  const breadcrumbs = useBreadcrumb();

  const lexicos = [
    {
      id: 'aws',
      titulo: 'Léxico AWS',
      icono: '☁️',
      color: '#FF9900',
      descripcion: 'Terminología completa de Amazon Web Services: IaaS, PaaS, SaaS, EC2, S3, RDS, Lambda, IAM, VPC, Security Groups, Regiones, Availability Zones y más.',
      ruta: '/aws/lexico'
    },
    {
      id: 'java',
      titulo: 'Léxico Java',
      icono: '☕',
      color: '#F89917',
      descripcion: 'Conceptos fundamentales de Java: OOP, polimorfismo, herencia, interfaces, clases abstractas, generics, excepciones y patrones de diseño.',
      ruta: '/java/lexico',
      proximamente: true
    },
    {
      id: 'git',
      titulo: 'Léxico Git & Control de Versiones',
      icono: '🔀',
      color: '#F1502F',
      descripcion: 'Terminología de Git: commits, branches, tags, merge, rebase, stash, rebasing, cherry-pick, pull requests y workflows de colaboración.',
      ruta: '/git/lexico',
      proximamente: true
    },
    {
      id: 'database',
      titulo: 'Léxico Bases de Datos',
      icono: '🗄️',
      color: '#336791',
      descripcion: 'Conceptos SQL: JOIN, subqueries, índices, normalización, transacciones, ACID, relaciones y diseño de bases de datos relacionales.',
      ruta: '/database/lexico',
      proximamente: true
    }
  ];

  return (
    <LessonTemplate
      breadcrumbs={breadcrumbs}
      sections={[
        {
          title: 'Léxico: Términos Técnicos por Temática',
          content: (
            <>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '3rem', color: '#666' }}>
                Selecciona una temática para aprender la terminología específica. Cada léxico incluye definiciones claras,
                explicaciones detalladas y ejemplos prácticos para cada concepto.
              </p>

              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                gap: '2rem'
              }}>
                {lexicos.map((lexico) => (
                  <div
                    key={lexico.id}
                    onClick={() => !lexico.proximamente && navigate(lexico.ruta)}
                    style={{
                      backgroundColor: '#ffffff',
                      border: `3px solid ${lexico.color}`,
                      borderRadius: '12px',
                      padding: '2rem',
                      cursor: lexico.proximamente ? 'not-allowed' : 'pointer',
                      transition: 'all 0.3s ease',
                      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
                      opacity: lexico.proximamente ? 0.6 : 1,
                      position: 'relative',
                      overflow: 'hidden'
                    }}
                    onMouseEnter={(e) => {
                      if (!lexico.proximamente) {
                        e.currentTarget.style.transform = 'translateY(-4px)';
                        e.currentTarget.style.boxShadow = `0 8px 20px ${lexico.color}30`;
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!lexico.proximamente) {
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.08)';
                      }
                    }}
                  >
                    {lexico.proximamente && (
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
                      <span style={{ fontSize: '2.5rem' }}>{lexico.icono}</span>
                      <h2 style={{ margin: 0, color: lexico.color, fontSize: '1.3rem', fontWeight: '700' }}>
                        {lexico.titulo}
                      </h2>
                    </div>

                    <p style={{ margin: '1rem 0 0 0', fontSize: '0.95rem', color: '#666', lineHeight: '1.6' }}>
                      {lexico.descripcion}
                    </p>

                    {!lexico.proximamente && (
                      <div style={{
                        marginTop: '1.5rem',
                        paddingTop: '1.5rem',
                        borderTop: `2px solid ${lexico.color}20`,
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        color: lexico.color,
                        fontWeight: '700'
                      }}>
                        <span>Explorar →</span>
                      </div>
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
