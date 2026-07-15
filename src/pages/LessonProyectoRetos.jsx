import { useParams, Link } from 'react-router-dom';
import { CodeBlock, InfoBox } from '../components';
import { LessonNavigation } from '../components/LessonNavigation';
import { useBreadcrumb } from '../hooks/useBreadcrumb';
import { useLessonNavigation } from '../hooks/useLessonNavigation';
import { retosData } from '../data/retosData';

export function LessonProyectoRetos() {
  const { retoId } = useParams();
  const breadcrumbs = useBreadcrumb();
  const nav = useLessonNavigation();

  const reto = retosData.find(r => r.number === parseInt(retoId));

  if (!reto) {
    return (
      <>
        <div style={{ padding: '40px 20px', textAlign: 'center' }}>
          <h2>Reto no encontrado</h2>
          <p>El reto que buscas no existe.</p>
          <Link to="/proyecto/retos" style={{ color: '#8B5CF6', textDecoration: 'none' }}>
            ← Volver al listado
          </Link>
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

  const currentIndex = reto.number - 1;
  const previousReto = currentIndex > 0 ? retosData[currentIndex - 1] : null;
  const nextReto = currentIndex < retosData.length - 1 ? retosData[currentIndex + 1] : null;

  return (
    <>
      <div style={{ padding: '0 20px' }}>
        {breadcrumbs && breadcrumbs.length > 0 && (
          <div style={{
            marginBottom: '1rem',
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
        <Link to="/proyecto/retos" style={{ color: '#8B5CF6', textDecoration: 'none', fontSize: '0.95rem' }}>
          ← Volver a Retos
        </Link>

        <div style={{ marginBottom: '3rem', marginTop: '2rem' }}>
          <h1 style={{ marginBottom: '1rem' }}>Reto {reto.number}: {reto.title}</h1>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.6', marginBottom: '2rem' }}>{reto.description}</p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '1.5rem', marginBottom: '2rem' }}>
            <div>
              <div style={{ fontSize: '0.85rem', opacity: 0.7, textTransform: 'uppercase', fontWeight: 600, marginBottom: '0.25rem' }}>Puntos</div>
              <div style={{ fontSize: '1.5rem', fontWeight: 700 }}>{reto.points}</div>
            </div>
            <div>
              <div style={{ fontSize: '0.85rem', opacity: 0.7, textTransform: 'uppercase', fontWeight: 600, marginBottom: '0.25rem' }}>Deadline</div>
              <div style={{ fontSize: '1.5rem', fontWeight: 700 }}>{reto.deadline}</div>
            </div>
            <div>
              <div style={{ fontSize: '0.85rem', opacity: 0.7, textTransform: 'uppercase', fontWeight: 600, marginBottom: '0.25rem' }}>Duración</div>
              <div style={{ fontSize: '1.5rem', fontWeight: 700 }}>{reto.duration}</div>
            </div>
          </div>
        </div>

        <h2 style={{ marginBottom: '1.5rem', marginTop: '2rem' }}>Solución y Especificaciones</h2>
        <CodeBlock language="text" code={reto.solution} />

        <div style={{ marginTop: '4rem', padding: '2rem 0', borderTop: '1px solid #eee' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '2rem' }}>
            {previousReto ? (
              <Link
                to={`/proyecto/retos/${previousReto.number}`}
                style={{
                  padding: '1.5rem',
                  border: '2px solid #8B5CF6',
                  borderRadius: '8px',
                  textDecoration: 'none',
                  color: '#333',
                  transition: 'all 0.3s ease',
                  fontWeight: 500,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(139, 92, 246, 0.1)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'transparent';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <span style={{ fontSize: '1.5rem' }}>←</span>
                <span>Reto {previousReto.number}: {previousReto.title}</span>
              </Link>
            ) : (
              <div style={{
                padding: '1.5rem',
                border: '2px solid #ddd',
                borderRadius: '8px',
                color: '#999',
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                opacity: 0.5
              }}>
                <span style={{ fontSize: '1.5rem' }}>←</span>
                <span>Primer Reto</span>
              </div>
            )}

            {nextReto ? (
              <Link
                to={`/proyecto/retos/${nextReto.number}`}
                style={{
                  padding: '1.5rem',
                  border: '2px solid #8B5CF6',
                  borderRadius: '8px',
                  textDecoration: 'none',
                  color: '#333',
                  transition: 'all 0.3s ease',
                  fontWeight: 500,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'flex-end',
                  gap: '1rem'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(139, 92, 246, 0.1)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'transparent';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <span>Reto {nextReto.number}: {nextReto.title}</span>
                <span style={{ fontSize: '1.5rem' }}>→</span>
              </Link>
            ) : (
              <div style={{
                padding: '1.5rem',
                border: '2px solid #ddd',
                borderRadius: '8px',
                color: '#999',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-end',
                gap: '1rem',
                opacity: 0.5
              }}>
                <span>Último Reto</span>
                <span style={{ fontSize: '1.5rem' }}>→</span>
              </div>
            )}
          </div>

          <Link to="/proyecto/retos" style={{
            display: 'inline-block',
            padding: '0.75rem 1.5rem',
            background: '#8B5CF6',
            color: 'white',
            textDecoration: 'none',
            borderRadius: '6px',
            fontWeight: 600,
            transition: 'all 0.2s ease'
          }}>
            Ver todos los Retos
          </Link>
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
