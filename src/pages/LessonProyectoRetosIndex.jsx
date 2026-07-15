import { Link } from 'react-router-dom';
import { LessonNavigation } from '../components/LessonNavigation';
import { useBreadcrumb } from '../hooks/useBreadcrumb';
import { useLessonNavigation } from '../hooks/useLessonNavigation';
import { retosData } from '../data/retosData';

export function LessonProyectoRetosIndex() {
  const breadcrumbs = useBreadcrumb();
  const nav = useLessonNavigation();
  const totalPoints = retosData.reduce((sum, reto) => sum + reto.points, 0);

  return (
    <>
      <div style={{ padding: '2rem' }}>
        {breadcrumbs && breadcrumbs.length > 0 && (
          <div style={{
            marginBottom: '1.5rem',
            fontSize: '0.9rem',
            color: '#7f8c8d',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem'
          }}>
            {breadcrumbs.map((crumb, index) => (
              <span key={index} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                {index > 0 && <span style={{ color: '#bdc3c7' }}>›</span>}
                <a href={crumb.url || '#'} style={{
                  color: '#3498db',
                  textDecoration: 'none',
                  fontWeight: index === breadcrumbs.length - 1 ? 'bold' : 'normal'
                }}>
                  {crumb.label}
                </a>
              </span>
            ))}
          </div>
        )}
        <h1 style={{ marginBottom: '1rem' }}>Retos DAW</h1>
        <p style={{ fontSize: '1.1rem', lineHeight: 1.6, marginBottom: '2rem', maxWidth: '700px' }}>
          Los 8 retos que evalúan cada fase de tu proyecto integrador. Una guía completa con especificaciones y soluciones para cada reto del currículo. Desde la planificación inicial hasta el despliegue en producción.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: '3rem', marginBottom: '3rem' }}>
          {/* Left Column */}
          <div>
            <h2 style={{ marginBottom: '1.5rem' }}>Fases Principales</h2>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1.5rem' }}>
              {[
                { title: 'Planificación', desc: 'Especifica tu proyecto, define requisitos, diseña arquitectura y crea prototipos.', link: '/proyecto/retos/1', btn: 'REPTE 1-4 →' },
                { title: 'Metodología', desc: 'Configura Agile y SCRUM, estructura sprints y define user stories en Taiga.', link: '/proyecto/retos/5', btn: 'REPTE 5 →' },
                { title: 'Desarrollo Sprint 1', desc: 'Implementa autenticación y catálogo de productos con frontend y backend.', link: '/proyecto/retos/6', btn: 'REPTE 6 →' },
                { title: 'Desarrollo Sprint 2', desc: 'Integra carrito, APIs completas y panel de administración del proyecto.', link: '/proyecto/retos/7', btn: 'REPTE 7 →' },
                { title: 'Despliegue', desc: 'Implementa checkout, gestión de órdenes y despliegue en producción.', link: '/proyecto/retos/8', btn: 'REPTE 8 →' }
              ].map((phase, i) => (
                <div key={i} style={{ padding: '1.5rem', border: '1px solid #e0e0e0', borderRadius: '6px' }}>
                  <h3 style={{ marginBottom: '0.5rem', marginTop: 0 }}>{phase.title}</h3>
                  <p style={{ margin: '0 0 1rem 0', fontSize: '0.95rem', lineHeight: 1.5 }}>{phase.desc}</p>
                  <Link to={phase.link} style={{
                    display: 'inline-block',
                    padding: '0.5rem 1rem',
                    background: '#8B5CF6',
                    color: 'white',
                    textDecoration: 'none',
                    borderRadius: '4px',
                    fontSize: '0.9rem',
                    fontWeight: 500,
                    transition: 'all 0.2s'
                  }} onMouseEnter={(e) => e.currentTarget.style.opacity = '0.9'} onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}>
                    {phase.btn}
                  </Link>
                </div>
              ))}
              <div style={{ padding: '1.5rem', border: '1px solid #e0e0e0', borderRadius: '6px', background: '#f8f9fa' }}>
                <h3 style={{ marginBottom: '1rem', marginTop: 0 }}>Ver Todos</h3>
                <p style={{ margin: '0 0 1rem 0', fontSize: '0.95rem' }}>Accede a los 8 retos completos con especificaciones y soluciones detalladas.</p>
                <div style={{ display: 'flex', gap: '1rem' }}>
                  <span style={{ padding: '0.5rem 1rem', background: '#8B5CF6', color: 'white', borderRadius: '4px', fontSize: '0.9rem', fontWeight: 500 }}>{retosData.length} Retos</span>
                  <span style={{ padding: '0.5rem 1rem', background: '#8B5CF6', color: 'white', borderRadius: '4px', fontSize: '0.9rem', fontWeight: 500 }}>{totalPoints} Puntos</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1.5rem' }}>
              <div style={{ padding: '1.5rem', border: '1px solid #e0e0e0', borderRadius: '6px' }}>
                <h3 style={{ marginTop: 0, marginBottom: '1rem' }}>Estructura</h3>
                <div style={{ marginBottom: '0.75rem' }}>
                  <div style={{ fontSize: '0.85rem', opacity: 0.7, textTransform: 'uppercase', fontWeight: 600 }}>Total Retos</div>
                  <div style={{ fontSize: '1.3rem', fontWeight: 700 }}>{retosData.length}</div>
                </div>
                <div style={{ marginBottom: '0.75rem' }}>
                  <div style={{ fontSize: '0.85rem', opacity: 0.7, textTransform: 'uppercase', fontWeight: 600 }}>Puntos Totales</div>
                  <div style={{ fontSize: '1.3rem', fontWeight: 700 }}>{totalPoints}</div>
                </div>
                <div style={{ marginBottom: '0.75rem' }}>
                  <div style={{ fontSize: '0.85rem', opacity: 0.7, textTransform: 'uppercase', fontWeight: 600 }}>Duración</div>
                  <div style={{ fontSize: '1.3rem', fontWeight: 700 }}>6 meses</div>
                </div>
                <div>
                  <div style={{ fontSize: '0.85rem', opacity: 0.7, textTransform: 'uppercase', fontWeight: 600 }}>Tipo</div>
                  <div style={{ fontSize: '1.3rem', fontWeight: 700 }}>Grupal</div>
                </div>
              </div>

              <div style={{ padding: '1.5rem', border: '1px solid #e0e0e0', borderRadius: '6px' }}>
                <h3 style={{ marginTop: 0, marginBottom: '1rem' }}>Distribución</h3>
                <div style={{ fontSize: '1.5rem', fontWeight: 700, color: '#8B5CF6', marginBottom: '0.75rem' }}>{totalPoints} Puntos</div>
                <p style={{ fontSize: '0.85rem', margin: 0, opacity: 0.7 }}>Planificación: 35 pts | Desarrollo: 26 pts | Despliegue: 12 pts</p>
              </div>

              <div style={{ padding: '1.5rem', border: '1px solid #e0e0e0', borderRadius: '6px' }}>
                <h3 style={{ marginTop: 0, marginBottom: '1rem' }}>Timeline</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  <div style={{ padding: '0.75rem', background: '#f8f9fa', borderRadius: '4px' }}>
                    <strong style={{ display: 'block' }}>Oct - Nov 2025</strong>
                    <small style={{ opacity: 0.7 }}>REPTE 1-4</small>
                  </div>
                  <div style={{ padding: '0.75rem', background: '#f8f9fa', borderRadius: '4px' }}>
                    <strong style={{ display: 'block' }}>Dic - Abr 2026</strong>
                    <small style={{ opacity: 0.7 }}>REPTE 5-7</small>
                  </div>
                  <div style={{ padding: '0.75rem', background: '#f8f9fa', borderRadius: '4px' }}>
                    <strong style={{ display: 'block' }}>May 2026</strong>
                    <small style={{ opacity: 0.7 }}>REPTE 8</small>
                  </div>
                </div>
              </div>

              <div style={{ padding: '1.5rem', border: '1px solid #e0e0e0', borderRadius: '6px' }}>
                <h3 style={{ marginTop: 0, marginBottom: '1rem' }}>Metodología</h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {['Agile', 'SCRUM', 'Taiga', 'GitHub'].map(tag => (
                    <span key={tag} style={{
                      padding: '0.4rem 0.8rem',
                      background: '#8B5CF6',
                      color: 'white',
                      borderRadius: '4px',
                      fontSize: '0.85rem',
                      fontWeight: 500
                    }}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <h2 style={{ marginBottom: '1.5rem' }}>Comienza a Explorar</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))', gap: '1rem', maxWidth: '400px' }}>
          {[1, 3, 5, 8].map(num => (
            <Link key={num} to={`/proyecto/retos/${num}`} style={{
              padding: '1rem',
              border: '2px solid #8B5CF6',
              borderRadius: '6px',
              textDecoration: 'none',
              color: '#333',
              textAlign: 'center',
              fontWeight: 500,
              transition: 'all 0.2s',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '0.5rem'
            }} onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(139, 92, 246, 0.1)';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }} onMouseLeave={(e) => {
              e.currentTarget.style.background = 'transparent';
              e.currentTarget.style.transform = 'translateY(0)';
            }}>
              <span style={{ fontSize: '1.5rem' }}>{num === 1 ? '1️⃣' : num === 3 ? '3️⃣' : num === 5 ? '5️⃣' : '8️⃣'}</span>
              <span style={{ fontSize: '0.85rem' }}>REPTE {num}</span>
            </Link>
          ))}
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
