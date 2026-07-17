import { LessonTemplate } from '../components';
import { LessonNavigation } from '../components/LessonNavigation';
import { useBreadcrumb } from '../hooks/useBreadcrumb';
import { useLessonNavigation } from '../hooks/useLessonNavigation';

export function LessonKubernetesIntro() {
  const breadcrumbs = useBreadcrumb();
  const nav = useLessonNavigation();

  const sections = [
    {
      title: 'Qué es Kubernetes',
      content: (
        <>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
            <strong>Kubernetes (K8s)</strong> es un <strong>orquestador de contenedores de código abierto</strong> desarrollado por Google. Automatiza el despliegue, escalado y gestión de aplicaciones en contenedores a través de múltiples máquinas.
          </p>

          <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
            En lugar de ejecutar contenedores Docker manualmente, Kubernetes los gestiona automáticamente: los despliega, los escala cuando aumenta la demanda, los reinicia si fallan, y actualiza sin downtime.
          </p>

          <div style={{
            backgroundColor: '#e3f2fd',
            border: '2px solid #2196F3',
            borderRadius: '8px',
            padding: '1.5rem',
            marginBottom: '2rem'
          }}>
            <p style={{ margin: '0 0 0.5rem 0', fontWeight: '700', fontSize: '0.95rem' }}>
              💡 Idea Principal:
            </p>
            <p style={{ margin: 0, fontSize: '0.9rem', lineHeight: '1.6' }}>
              Kubernetes es lo que obtienes cuando dices: <strong>"Quiero 100 réplicas de mi app, escalando automáticamente, sin downtime en actualizaciones"</strong>. Kubernetes lo hace por ti.
            </p>
          </div>
        </>
      )
    },

    {
      title: 'Por Qué Kubernetes',
      content: (
        <>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2rem',
            margin: '2rem 0'
          }}>
            {[
              {
                title: 'Escalado Automático',
                icon: '📈',
                color: '#4CAF50',
                description: 'Escala tu app automáticamente según CPU, memoria o métricas custom. De 1 a 1000 réplicas sin intervención manual.'
              },
              {
                title: 'Tolerancia a Fallos',
                icon: '🛡️',
                color: '#2196F3',
                description: 'Si un Pod falla, Kubernetes lo reinicia. Si un Node cae, mueve los Pods a otro Node automáticamente.'
              },
              {
                title: 'Zero Downtime Deployments',
                icon: '🚀',
                color: '#FF9800',
                description: 'Actualiza tu app sin interrumpir el servicio. Rolling updates reemplazan Pods gradualmente.'
              },
              {
                title: 'Gestión de Recursos',
                icon: '⚙️',
                color: '#9C27B0',
                description: 'Kubernetes asigna óptimamente CPU y memoria entre Pods. No desperdicias recursos ni quedas sin ellos.'
              },
              {
                title: 'Múltiples Entornos',
                icon: '🌍',
                color: '#00BCD4',
                description: 'Kubernetes en local (minikube), en AWS (EKS), GCP (GKE), Azure (AKS). Los manifests funcionan en todos.'
              },
              {
                title: 'Ecosistema Rico',
                icon: '🧩',
                color: '#E91E63',
                description: 'Helm, Prometheus, Istio, ArgoCD... Miles de herramientas construidas sobre Kubernetes.'
              }
            ].map((benefit, idx) => (
              <div key={idx} style={{
                backgroundColor: '#ffffff',
                border: `3px solid ${benefit.color}`,
                borderRadius: '12px',
                padding: '2rem',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = `0 8px 20px ${benefit.color}30`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.08)';
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                  <span style={{ fontSize: '2.5rem' }}>{benefit.icon}</span>
                  <h3 style={{ margin: 0, color: benefit.color, fontSize: '1.2rem' }}>{benefit.title}</h3>
                </div>
                <p style={{ fontSize: '0.95rem', color: '#666', marginBottom: 0, lineHeight: '1.6' }}>
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </>
      )
    },

    {
      title: 'Arquitectura de Kubernetes',
      content: (
        <>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '2rem', color: '#555' }}>
            Un cluster Kubernetes tiene dos tipos de máquinas: el <strong>Control Plane</strong> (cerebro) y los <strong>Nodes</strong> (trabajadores).
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '2rem',
            marginBottom: '2rem'
          }}>
            {/* Control Plane */}
            <div style={{
              backgroundColor: '#f0f0f0',
              border: '2px solid #333',
              borderRadius: '8px',
              padding: '1.5rem'
            }}>
              <h3 style={{ margin: '0 0 1rem 0', fontSize: '1.1rem' }}>🧠 Control Plane</h3>
              <p style={{ margin: '0 0 1rem 0', fontSize: '0.9rem', lineHeight: '1.6', color: '#555' }}>
                Gestiona el estado del cluster. Toma decisiones sobre dónde ejecutar Pods, cómo escalar, etc.
              </p>
              <ul style={{ margin: 0, paddingLeft: '1.5rem', fontSize: '0.9rem', lineHeight: '1.8', color: '#333' }}>
                <li><strong>API Server</strong> - Interfaz de K8s</li>
                <li><strong>etcd</strong> - Base de datos (estado del cluster)</li>
                <li><strong>Scheduler</strong> - Decide dónde poner Pods</li>
                <li><strong>Controller Manager</strong> - Asegura que el estado sea deseado</li>
              </ul>
            </div>

            {/* Nodes */}
            <div style={{
              backgroundColor: '#f0f0f0',
              border: '2px solid #333',
              borderRadius: '8px',
              padding: '1.5rem'
            }}>
              <h3 style={{ margin: '0 0 1rem 0', fontSize: '1.1rem' }}>💼 Nodes (Trabajadores)</h3>
              <p style={{ margin: '0 0 1rem 0', fontSize: '0.9rem', lineHeight: '1.6', color: '#555' }}>
                Máquinas físicas o virtuales que ejecutan tu código. Cada Node tiene capacidad de CPU y memoria.
              </p>
              <ul style={{ margin: 0, paddingLeft: '1.5rem', fontSize: '0.9rem', lineHeight: '1.8', color: '#333' }}>
                <li><strong>kubelet</strong> - Agente que corre en cada Node</li>
                <li><strong>Docker/Runtime</strong> - Ejecuta contenedores</li>
                <li><strong>kube-proxy</strong> - Networking</li>
                <li><strong>Pods</strong> - Donde vive tu código</li>
              </ul>
            </div>
          </div>

          <div style={{
            backgroundColor: '#e3f2fd',
            border: '2px solid #2196F3',
            borderRadius: '8px',
            padding: '1.5rem'
          }}>
            <p style={{ margin: '0 0 0.5rem 0', fontWeight: '700', fontSize: '0.95rem' }}>
              📊 Diagrama Simple:
            </p>
            <div style={{
              backgroundColor: '#fff',
              border: '1px solid #2196F3',
              borderRadius: '4px',
              padding: '1rem',
              fontFamily: 'monospace',
              fontSize: '0.85rem',
              color: '#333',
              lineHeight: '1.8'
            }}>
              <div>┌─ Cluster Kubernetes ─────────────────┐</div>
              <div>│                                      │</div>
              <div>│  ┌─ Control Plane ─────────────┐    │</div>
              <div>│  │ API Server, etcd, Scheduler │    │</div>
              <div>│  └──────────────────────────────┘    │</div>
              <div>│                                      │</div>
              <div>│  ┌─ Node 1 ─┐  ┌─ Node 2 ─┐       │</div>
              <div>│  │ Pod  Pod  │  │ Pod  Pod  │       │</div>
              <div>│  └───────────┘  └───────────┘       │</div>
              <div>│                                      │</div>
              <div>└──────────────────────────────────────┘</div>
            </div>
          </div>
        </>
      )
    },

    {
      title: 'Conceptos Clave',
      content: (
        <>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '1.5rem'
          }}>
            {[
              {
                title: 'Pod',
                icon: '📦',
                description: 'La unidad más pequeña en Kubernetes. Generalmente contiene UN contenedor (pero puede tener más).'
              },
              {
                title: 'Deployment',
                icon: '🚀',
                description: 'Define cómo desplegar tu app. Especifica cuántas réplicas, qué imagen, etc.'
              },
              {
                title: 'Service',
                icon: '🔌',
                description: 'Expone tu app a la red. Balanceo de carga entre Pods. DNS interno.'
              },
              {
                title: 'ConfigMap',
                icon: '⚙️',
                description: 'Almacena configuración (variables de entorno, archivos de config).'
              },
              {
                title: 'Secret',
                icon: '🔐',
                description: 'Almacena datos sensibles (contraseñas, tokens, certificados).'
              },
              {
                title: 'Ingress',
                icon: '🌐',
                description: 'Enrutamiento HTTP/HTTPS. Expone servicios al mundo exterior.'
              }
            ].map((concept, idx) => (
              <div key={idx} style={{
                backgroundColor: '#f8f9fa',
                border: '1px solid #ddd',
                borderRadius: '8px',
                padding: '1.25rem'
              }}>
                <div style={{ marginBottom: '0.5rem' }}>
                  <span style={{ fontSize: '1.5rem' }}>{concept.icon}</span>
                  <h4 style={{ margin: '0.3rem 0 0 0', fontSize: '0.95rem', fontWeight: '700', color: '#2c3e50' }}>
                    {concept.title}
                  </h4>
                </div>
                <p style={{ fontSize: '0.85rem', margin: 0, color: '#666', lineHeight: '1.5' }}>
                  {concept.description}
                </p>
              </div>
            ))}
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
