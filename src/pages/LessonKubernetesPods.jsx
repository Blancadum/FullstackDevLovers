import { LessonTemplate } from '../components';
import { LessonNavigation } from '../components/LessonNavigation';
import { useBreadcrumb } from '../hooks/useBreadcrumb';
import { useLessonNavigation } from '../hooks/useLessonNavigation';

export function LessonKubernetesPods() {
  const breadcrumbs = useBreadcrumb();
  const nav = useLessonNavigation();

  const sections = [
    {
      title: 'Qué es un Pod',
      content: (
        <>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
            Un <strong>Pod</strong> es la unidad más pequeña en Kubernetes. Es un contenedor (o un grupo de contenedores) empaquetado juntos que corren en el mismo Node.
          </p>

          <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
            En 99% de los casos, <strong>un Pod = un contenedor Docker</strong>. Pero Kubernetes permite múltiples contenedores en un Pod si es necesario (ej: sidecar patterns).
          </p>

          <div style={{
            backgroundColor: '#e3f2fd',
            border: '2px solid #2196F3',
            borderRadius: '8px',
            padding: '1.5rem',
            marginBottom: '2rem'
          }}>
            <p style={{ margin: '0 0 0.5rem 0', fontWeight: '700', fontSize: '0.95rem' }}>
              💡 Diferencia Clave:
            </p>
            <p style={{ margin: 0, fontSize: '0.9rem', lineHeight: '1.6' }}>
              <strong>Docker:</strong> docker run mi-app<br/>
              <strong>Kubernetes:</strong> kubectl run mi-pod --image=mi-app
            </p>
          </div>
        </>
      )
    },

    {
      title: 'Crear un Pod',
      content: (
        <>
          <p style={{ fontSize: '1rem', lineHeight: '1.8', marginBottom: '1.5rem', color: '#555' }}>
            Existen dos formas: imperativa (rápido) y declarativa (recomendado).
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '2rem'
          }}>
            {/* Imperativa */}
            <div style={{
              backgroundColor: '#f5f5f5',
              border: '2px solid #FF9800',
              borderRadius: '8px',
              padding: '1.5rem'
            }}>
              <h3 style={{ margin: '0 0 1rem 0', color: '#FF9800' }}>⚡ Imperativa (rápido)</h3>
              <div style={{
                backgroundColor: '#fff',
                border: '1px solid #FF9800',
                borderRadius: '4px',
                padding: '1rem',
                fontFamily: 'monospace',
                fontSize: '0.85rem',
                color: '#333',
                marginBottom: '1rem'
              }}>
                kubectl run mi-pod \<br/>
                &nbsp;&nbsp;--image=nginx:latest
              </div>
              <p style={{ margin: 0, fontSize: '0.9rem', color: '#666', lineHeight: '1.6' }}>
                ✓ Rápido para testing<br/>
                ✗ No es reproducible<br/>
                ✗ No es para producción
              </p>
            </div>

            {/* Declarativa */}
            <div style={{
              backgroundColor: '#f5f5f5',
              border: '2px solid #4CAF50',
              borderRadius: '8px',
              padding: '1.5rem'
            }}>
              <h3 style={{ margin: '0 0 1rem 0', color: '#4CAF50' }}>✅ Declarativa (YAML)</h3>
              <div style={{
                backgroundColor: '#fff',
                border: '1px solid #4CAF50',
                borderRadius: '4px',
                padding: '1rem',
                fontFamily: 'monospace',
                fontSize: '0.80rem',
                color: '#333',
                marginBottom: '1rem',
                overflow: 'auto'
              }}>
apiVersion: v1<br/>
kind: Pod<br/>
metadata:<br/>
&nbsp;&nbsp;name: mi-pod<br/>
spec:<br/>
&nbsp;&nbsp;containers:<br/>
&nbsp;&nbsp;- name: nginx<br/>
&nbsp;&nbsp;&nbsp;&nbsp;image: nginx:latest
              </div>
              <p style={{ margin: 0, fontSize: '0.9rem', color: '#666', lineHeight: '1.6' }}>
                ✓ Reproducible<br/>
                ✓ Versionable en Git<br/>
                ✓ Para producción
              </p>
            </div>
          </div>
        </>
      )
    },

    {
      title: 'Ciclo de Vida del Pod',
      content: (
        <>
          <div style={{
            backgroundColor: '#f5f5f5',
            border: '2px solid #666',
            borderRadius: '8px',
            padding: '1.5rem',
            marginBottom: '2rem'
          }}>
            <div style={{
              fontFamily: 'monospace',
              fontSize: '0.9rem',
              color: '#333',
              lineHeight: '2'
            }}>
              <div>Pending → ContainerCreating → Running → Succeeded/Failed</div>
              <br/>
              <div style={{ fontSize: '0.85rem', color: '#666' }}>
                🟡 Pending: K8s está encontrando un Node<br/>
                🔵 ContainerCreating: Descargando imagen, creando contenedor<br/>
                🟢 Running: Pod ejecutándose<br/>
                ⚫ Succeeded: Pod terminó sin error<br/>
                🔴 Failed: Pod terminó con error
              </div>
            </div>
          </div>

          <div style={{
            backgroundColor: '#e8f5e9',
            border: '2px solid #4CAF50',
            borderRadius: '8px',
            padding: '1.5rem'
          }}>
            <p style={{ margin: '0 0 0.5rem 0', fontWeight: '700', fontSize: '0.95rem', color: '#2e7d32' }}>
              📍 Comando útil:
            </p>
            <div style={{
              backgroundColor: '#fff',
              border: '1px solid #4CAF50',
              borderRadius: '4px',
              padding: '1rem',
              fontFamily: 'monospace',
              fontSize: '0.85rem',
              color: '#333',
              margin: 0
            }}>
              kubectl get pods -w
            </div>
            <p style={{ margin: '0.5rem 0 0 0', fontSize: '0.85rem', color: '#555' }}>
              Ver Pods en tiempo real con -w (watch)
            </p>
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
