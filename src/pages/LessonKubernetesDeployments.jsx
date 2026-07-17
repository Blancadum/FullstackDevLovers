import { LessonTemplate } from '../components';
import { LessonNavigation } from '../components/LessonNavigation';
import { useBreadcrumb } from '../hooks/useBreadcrumb';
import { useLessonNavigation } from '../hooks/useLessonNavigation';

export function LessonKubernetesDeployments() {
  const breadcrumbs = useBreadcrumb();
  const nav = useLessonNavigation();

  const sections = [
    {
      title: 'Qué es un Deployment',
      content: (
        <>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
            Un <strong>Deployment</strong> es la forma recomendada de desplegar tu app en Kubernetes. Define cuántas réplicas quieres, qué imagen Docker usar, qué recursos necesita, etc.
          </p>

          <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
            Kubernetes se encarga de crear y gestionar los Pods automáticamente. Si un Pod falla, Kubernetes lo reinicia. Si necesitas más réplicas, Kubernetes las crea.
          </p>

          <div style={{
            backgroundColor: '#e3f2fd',
            border: '2px solid #2196F3',
            borderRadius: '8px',
            padding: '1.5rem',
            marginBottom: '2rem'
          }}>
            <p style={{ margin: '0 0 0.5rem 0', fontWeight: '700', fontSize: '0.95rem' }}>
              💡 Diferencia:
            </p>
            <p style={{ margin: 0, fontSize: '0.9rem', lineHeight: '1.6' }}>
              <strong>Pod:</strong> Una instancia individual de tu app<br/>
              <strong>Deployment:</strong> Especificación que crea y gestiona múltiples Pods
            </p>
          </div>
        </>
      )
    },

    {
      title: 'Estructura de un Deployment',
      content: (
        <>
          <div style={{
            backgroundColor: '#f5f5f5',
            border: '2px solid #666',
            borderRadius: '8px',
            padding: '1.5rem',
            marginBottom: '2rem'
          }}>
            <p style={{ margin: '0 0 1rem 0', fontWeight: '700', fontSize: '0.95rem' }}>
              📄 YAML típico:
            </p>
            <div style={{
              backgroundColor: '#fff',
              border: '1px solid #666',
              borderRadius: '4px',
              padding: '1rem',
              fontFamily: 'monospace',
              fontSize: '0.80rem',
              color: '#333',
              overflow: 'auto'
            }}>
apiVersion: apps/v1<br/>
kind: Deployment<br/>
metadata:<br/>
&nbsp;&nbsp;name: mi-app<br/>
spec:<br/>
&nbsp;&nbsp;replicas: 3  # Crea 3 Pods<br/>
&nbsp;&nbsp;selector:<br/>
&nbsp;&nbsp;&nbsp;&nbsp;matchLabels:<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;app: mi-app<br/>
&nbsp;&nbsp;template:<br/>
&nbsp;&nbsp;&nbsp;&nbsp;metadata:<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;labels:<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;app: mi-app<br/>
&nbsp;&nbsp;&nbsp;&nbsp;spec:<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;containers:<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- name: app<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;image: mi-app:1.0
            </div>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '1.5rem'
          }}>
            <div style={{
              backgroundColor: '#e8f5e9',
              border: '1px solid #4CAF50',
              borderRadius: '8px',
              padding: '1rem'
            }}>
              <p style={{ margin: '0 0 0.5rem 0', fontWeight: '600', color: '#2e7d32', fontSize: '0.95rem' }}>
                Campos Clave
              </p>
              <ul style={{ margin: 0, paddingLeft: '1.5rem', fontSize: '0.85rem', lineHeight: '1.8', color: '#333' }}>
                <li><strong>replicas:</strong> Cuántos Pods</li>
                <li><strong>image:</strong> Imagen Docker</li>
                <li><strong>selector:</strong> Qué Pods gestiona</li>
                <li><strong>template:</strong> Especificación del Pod</li>
              </ul>
            </div>

            <div style={{
              backgroundColor: '#fff3e0',
              border: '1px solid #FF9800',
              borderRadius: '8px',
              padding: '1rem'
            }}>
              <p style={{ margin: '0 0 0.5rem 0', fontWeight: '600', color: '#E65100', fontSize: '0.95rem' }}>
                Lo que K8s Hace
              </p>
              <ul style={{ margin: 0, paddingLeft: '1.5rem', fontSize: '0.85rem', lineHeight: '1.8', color: '#333' }}>
                <li>Crea 3 Pods automáticamente</li>
                <li>Distribúyelos entre Nodes</li>
                <li>Monitorea y reinicia si fallan</li>
                <li>Escala si cambias replicas</li>
              </ul>
            </div>
          </div>
        </>
      )
    },

    {
      title: 'Rolling Updates',
      content: (
        <>
          <p style={{ fontSize: '1rem', lineHeight: '1.8', marginBottom: '2rem', color: '#555' }}>
            Cuando actualizas la imagen en un Deployment, Kubernetes reemplaza los Pods gradualmente (rolling update). Sin downtime.
          </p>

          <div style={{
            backgroundColor: '#f5f5f5',
            border: '2px solid #666',
            borderRadius: '8px',
            padding: '1.5rem',
            marginBottom: '2rem'
          }}>
            <p style={{ margin: '0 0 1rem 0', fontWeight: '700' }}>Proceso:</p>
            <div style={{
              fontFamily: 'monospace',
              fontSize: '0.9rem',
              color: '#333',
              lineHeight: '2'
            }}>
              <div>Versión 1.0: ● ● ●  (3 Pods)</div>
              <div style={{ color: '#666' }}>↓</div>
              <div>Actualizar a 1.1...</div>
              <div style={{ color: '#666' }}>↓</div>
              <div>Versión 1.0: ● ●  &nbsp; Versión 1.1: ●</div>
              <div style={{ color: '#666' }}>↓</div>
              <div>Versión 1.0: ●  &nbsp;&nbsp;&nbsp;&nbsp; Versión 1.1: ● ●</div>
              <div style={{ color: '#666' }}>↓</div>
              <div>Versión 1.1: ● ● ●  (completado)</div>
            </div>
          </div>

          <div style={{
            backgroundColor: '#e8f5e9',
            border: '2px solid #4CAF50',
            borderRadius: '8px',
            padding: '1.5rem'
          }}>
            <p style={{ margin: '0 0 0.5rem 0', fontWeight: '700', fontSize: '0.95rem', color: '#2e7d32' }}>
              ✅ Ventajas:
            </p>
            <ul style={{ margin: '0.5rem 0 0 0', paddingLeft: '1.5rem', fontSize: '0.9rem', lineHeight: '1.8', color: '#333' }}>
              <li>Sin downtime</li>
              <li>Rollback automático si algo falla</li>
              <li>Usuarios no se dan cuenta</li>
            </ul>
          </div>
        </>
      )
    }
  ];

  return (
    <>
      <LessonTemplate
        breadcrumbs={breadcrumbs}
        sections={sections}
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
