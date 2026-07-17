import { useState } from 'react';
import { LessonTemplate } from '../components';
import { LessonNavigation } from '../components/LessonNavigation';
import { useBreadcrumb } from '../hooks/useBreadcrumb';
import { useLessonNavigation } from '../hooks/useLessonNavigation';

export function ComparisonDockerVsKubernetes() {
  const breadcrumbs = useBreadcrumb();
  const nav = useLessonNavigation();

  const sections = [
    {
      title: '¿Por Qué Se Confunden Docker y Kubernetes?',
      content: (
        <>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
            Es muy común confundir <strong>Docker y Kubernetes</strong> porque ambos tratan con contenedores. Sin embargo, son **herramientas completamente diferentes** con objetivos distintos. La confusión viene de que Kubernetes usa Docker (o contenedores OCI), pero no son lo mismo.
          </p>

          <div style={{
            backgroundColor: '#fff3cd',
            border: '2px solid #ff9800',
            borderRadius: '8px',
            padding: '1.5rem',
            marginBottom: '2rem'
          }}>
            <p style={{ margin: '0 0 0.5rem 0', fontSize: '0.95rem', fontWeight: '700' }}>
              ⚠️ Problema Clave:
            </p>
            <p style={{ margin: 0, fontSize: '0.95rem', lineHeight: '1.6' }}>
              <strong>Docker</strong> es para crear y ejecutar UNA aplicación en UN contenedor.<br/>
              <strong>Kubernetes</strong> es para orquestar MUCHOS contenedores en MUCHOS servidores.
            </p>
          </div>

          <p style={{ fontSize: '1rem', lineHeight: '1.8', color: '#555' }}>
            Docker es la caja. Kubernetes es quien gestiona cientos de cajas.
          </p>
        </>
      )
    },

    {
      title: 'Comparativa Detallada: Tabla General',
      content: (
        <>
          <div style={{
            overflowX: 'auto',
            marginBottom: '2rem'
          }}>
            <table style={{
              width: '100%',
              borderCollapse: 'collapse',
              fontSize: '0.9rem'
            }}>
              <thead>
                <tr style={{ backgroundColor: '#f0f0f0', borderBottom: '3px solid #333' }}>
                  <th style={{ padding: '1rem', textAlign: 'left', fontWeight: '700', width: '20%' }}>Aspecto</th>
                  <th style={{ padding: '1rem', textAlign: 'left', fontWeight: '700', width: '40%', color: '#2496ed' }}>Docker</th>
                  <th style={{ padding: '1rem', textAlign: 'left', fontWeight: '700', width: '40%', color: '#326ce5' }}>Kubernetes</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    aspect: '¿Qué es?',
                    docker: 'Herramienta para crear y ejecutar contenedores',
                    k8s: 'Orquestador de contenedores a escala'
                  },
                  {
                    aspect: '¿Qué hace?',
                    docker: 'Empacar una app en una caja (imagen → contenedor)',
                    k8s: 'Gestionar cientos de cajas en múltiples máquinas'
                  },
                  {
                    aspect: 'Escala',
                    docker: 'Una máquina, una app, un contenedor',
                    k8s: 'Múltiples máquinas, múltiples apps, múltiples contenedores'
                  },
                  {
                    aspect: '¿Es reemplazable?',
                    docker: 'NO. Kubernetes lo NECESITA (o usa OCI)',
                    k8s: 'NO. Sin Docker (u OCI) no hay contenedores'
                  },
                  {
                    aspect: 'Complejidad',
                    docker: 'Simple (CLI: docker run)',
                    k8s: 'Muy complejo (YAML, recursos, estados)'
                  },
                  {
                    aspect: 'Curva de aprendizaje',
                    docker: 'Horas',
                    k8s: 'Semanas o meses'
                  },
                  {
                    aspect: 'Cuándo aprender',
                    docker: 'Primero siempre',
                    k8s: 'Después de dominar Docker'
                  },
                  {
                    aspect: 'Despliegue',
                    docker: 'Manual (tú ejecutas el contenedor)',
                    k8s: 'Automático (Kubernetes lo despliega, escala, reinicia)'
                  },
                  {
                    aspect: 'Reinicio si falla',
                    docker: 'TÚ debes reiniciar manualmente',
                    k8s: 'Kubernetes reinicia automáticamente'
                  },
                  {
                    aspect: 'Escalado',
                    docker: 'Manual (tú lanzas más contenedores)',
                    k8s: 'Automático (basado en CPU, memoria, custom metrics)'
                  }
                ].map((row, idx) => (
                  <tr key={idx} style={{
                    borderBottom: '1px solid #ddd',
                    backgroundColor: idx % 2 === 0 ? '#fafafa' : '#fff'
                  }}>
                    <td style={{ padding: '1rem', fontWeight: '600', color: '#333' }}>{row.aspect}</td>
                    <td style={{ padding: '1rem', color: '#2496ed' }}>{row.docker}</td>
                    <td style={{ padding: '1rem', color: '#326ce5' }}>{row.k8s}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div style={{
            backgroundColor: '#e3f2fd',
            border: '2px solid #2196F3',
            borderRadius: '8px',
            padding: '1.5rem',
            marginTop: '2rem'
          }}>
            <p style={{ margin: '0 0 0.5rem 0', fontWeight: '700', fontSize: '0.95rem' }}>
              💡 Idea Clave:
            </p>
            <p style={{ margin: 0, fontSize: '0.9rem', lineHeight: '1.6' }}>
              Docker es el **contenedor** (caja).<br/>
              Kubernetes es el **orquestador** (quien gestiona las cajas).<br/>
              No son competencia, son **complementarios**.
            </p>
          </div>
        </>
      )
    },

    {
      title: 'Desglose en Profundidad: Docker vs Kubernetes',
      content: (
        <>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '2rem',
            marginBottom: '2rem'
          }}>
            {/* Docker en Profundidad */}
            <div style={{
              backgroundColor: '#e8f5e9',
              border: '3px solid #2496ed',
              borderRadius: '8px',
              padding: '2rem'
            }}>
              <h3 style={{ margin: '0 0 1rem 0', color: '#2496ed', fontSize: '1.3rem' }}>
                🐳 Docker en Profundidad
              </h3>

              <div style={{ marginBottom: '1.5rem' }}>
                <h4 style={{ margin: '0 0 0.5rem 0', color: '#2496ed', fontSize: '1rem' }}>¿Qué es en Realidad?</h4>
                <p style={{ margin: 0, fontSize: '0.9rem', lineHeight: '1.6', color: '#333' }}>
                  Docker es una <strong>herramienta de containerización</strong>. Toma tu código y lo empaca en una imagen, que luego se ejecuta como un contenedor. Es local, en tu máquina.
                </p>
              </div>

              <div style={{ marginBottom: '1.5rem' }}>
                <h4 style={{ margin: '0 0 0.5rem 0', color: '#2496ed', fontSize: '1rem' }}>Flujo de Docker</h4>
                <div style={{
                  backgroundColor: '#fff',
                  border: '1px solid #2496ed',
                  borderRadius: '4px',
                  padding: '1rem',
                  fontFamily: 'monospace',
                  fontSize: '0.85rem',
                  color: '#333'
                }}>
                  <div>1. Escribes Dockerfile</div>
                  <div>2. docker build → creas imagen</div>
                  <div>3. docker run → ejecutas contenedor</div>
                  <div>4. Contenedor funciona (localmente)</div>
                </div>
              </div>

              <div style={{ marginBottom: '1.5rem' }}>
                <h4 style={{ margin: '0 0 0.5rem 0', color: '#2496ed', fontSize: '1rem' }}>¿Qué incluye?</h4>
                <ul style={{ margin: 0, paddingLeft: '1.5rem', fontSize: '0.9rem', lineHeight: '1.8', color: '#333' }}>
                  <li>Runtime (Python, Node.js, Java)</li>
                  <li>Dependencias</li>
                  <li>Código de tu app</li>
                  <li>Configuración</li>
                </ul>
              </div>

              <div style={{ marginBottom: '1.5rem' }}>
                <h4 style={{ margin: '0 0 0.5rem 0', color: '#2496ed', fontSize: '1rem' }}>Limitaciones</h4>
                <ul style={{ margin: 0, paddingLeft: '1.5rem', fontSize: '0.9rem', lineHeight: '1.8' }}>
                  <li>Un contenedor, una máquina</li>
                  <li>Sin escalado automático</li>
                  <li>Sin reinicio si falla</li>
                  <li>Sin balanceo de carga</li>
                  <li>Administración manual</li>
                </ul>
              </div>

              <div>
                <h4 style={{ margin: '0 0 0.5rem 0', color: '#2496ed', fontSize: '1rem' }}>Cuándo es suficiente</h4>
                <ul style={{ margin: 0, paddingLeft: '1.5rem', fontSize: '0.9rem', lineHeight: '1.8' }}>
                  <li>Desarrollo local</li>
                  <li>Testing</li>
                  <li>Una app en un servidor</li>
                  <li>Proyectos pequeños</li>
                </ul>
              </div>
            </div>

            {/* Kubernetes en Profundidad */}
            <div style={{
              backgroundColor: '#e3f5fd',
              border: '3px solid #326ce5',
              borderRadius: '8px',
              padding: '2rem'
            }}>
              <h3 style={{ margin: '0 0 1rem 0', color: '#326ce5', fontSize: '1.3rem' }}>
                ☸️ Kubernetes en Profundidad
              </h3>

              <div style={{ marginBottom: '1.5rem' }}>
                <h4 style={{ margin: '0 0 0.5rem 0', color: '#326ce5', fontSize: '1rem' }}>¿Qué es en Realidad?</h4>
                <p style={{ margin: 0, fontSize: '0.9rem', lineHeight: '1.6', color: '#333' }}>
                  Kubernetes es un <strong>orquestador de contenedores</strong>. Toma contenedores Docker (o cualquier OCI) y los despliega, escala y gestiona automáticamente en múltiples máquinas.
                </p>
              </div>

              <div style={{ marginBottom: '1.5rem' }}>
                <h4 style={{ margin: '0 0 0.5rem 0', color: '#326ce5', fontSize: '1rem' }}>Flujo de Kubernetes</h4>
                <div style={{
                  backgroundColor: '#fff',
                  border: '1px solid #326ce5',
                  borderRadius: '4px',
                  padding: '1rem',
                  fontFamily: 'monospace',
                  fontSize: '0.85rem',
                  color: '#333'
                }}>
                  <div>1. Tienes imagen Docker</div>
                  <div>2. Escribes YAML (manifest)</div>
                  <div>3. kubectl apply → envías a K8s</div>
                  <div>4. K8s despliega automáticamente</div>
                  <div>5. K8s monitorea y auto-escala</div>
                </div>
              </div>

              <div style={{ marginBottom: '1.5rem' }}>
                <h4 style={{ margin: '0 0 0.5rem 0', color: '#326ce5', fontSize: '1rem' }}>¿Qué incluye?</h4>
                <ul style={{ margin: 0, paddingLeft: '1.5rem', fontSize: '0.9rem', lineHeight: '1.8', color: '#333' }}>
                  <li>Cluster (múltiples máquinas)</li>
                  <li>Nodes (máquinas físicas/virtuales)</li>
                  <li>Pods (contenedores empaquetados)</li>
                  <li>Services (exposición de apps)</li>
                  <li>Ingress (enrutamiento HTTP)</li>
                </ul>
              </div>

              <div style={{ marginBottom: '1.5rem' }}>
                <h4 style={{ margin: '0 0 0.5rem 0', color: '#326ce5', fontSize: '1rem' }}>Capacidades</h4>
                <ul style={{ margin: 0, paddingLeft: '1.5rem', fontSize: '0.9rem', lineHeight: '1.8' }}>
                  <li>Escalado automático</li>
                  <li>Reinicio si falla</li>
                  <li>Balanceo de carga</li>
                  <li>Actualización sin downtime</li>
                  <li>Gestión de recursos</li>
                </ul>
              </div>

              <div>
                <h4 style={{ margin: '0 0 0.5rem 0', color: '#326ce5', fontSize: '1rem' }}>Cuándo lo necesitas</h4>
                <ul style={{ margin: 0, paddingLeft: '1.5rem', fontSize: '0.9rem', lineHeight: '1.8' }}>
                  <li>Múltiples apps</li>
                  <li>Alta disponibilidad</li>
                  <li>Tráfico variable</li>
                  <li>Proyectos empresariales</li>
                  <li>Producción a escala</li>
                </ul>
              </div>
            </div>
          </div>
        </>
      )
    },

    {
      title: 'Ejemplo Práctico Real: Aplicación Web en Crecimiento',
      content: (
        <>
          <p style={{ fontSize: '1rem', lineHeight: '1.8', marginBottom: '2rem', color: '#555' }}>
            Imagina que tu startup crece. Veamos cómo Docker y Kubernetes entran en juego.
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '2rem'
          }}>
            {/* Etapa 1 */}
            <div style={{
              backgroundColor: '#f5f5f5',
              border: '2px solid #666',
              borderRadius: '8px',
              padding: '1.5rem'
            }}>
              <h4 style={{ margin: '0 0 1rem 0', fontSize: '1rem', fontWeight: '700' }}>
                📍 Etapa 1: Desarrollo Local (Solo Docker)
              </h4>
              <p style={{ margin: '0 0 1rem 0', fontSize: '0.9rem', lineHeight: '1.6', color: '#555' }}>
                Tu app está en MVP. Tienes 10 usuarios. Usas <strong>solo Docker</strong>:
              </p>
              <div style={{
                backgroundColor: '#e8f5e9',
                border: '1px solid #4CAF50',
                borderRadius: '4px',
                padding: '1rem',
                fontFamily: 'monospace',
                fontSize: '0.85rem',
                color: '#333',
                marginBottom: '1rem'
              }}>
                <div>$ docker build -t my-app .</div>
                <div>$ docker run -p 3000:3000 my-app</div>
                <div style={{ color: '#666', marginTop: '0.5rem' }}>✓ App corriendo en tu laptop</div>
              </div>
              <p style={{ margin: 0, fontSize: '0.85rem', color: '#666' }}>
                ✓ Docker es suficiente. Kubernetes sería overkill.
              </p>
            </div>

            {/* Etapa 2 */}
            <div style={{
              backgroundColor: '#f5f5f5',
              border: '2px solid #666',
              borderRadius: '8px',
              padding: '1.5rem'
            }}>
              <h4 style={{ margin: '0 0 1rem 0', fontSize: '1rem', fontWeight: '700' }}>
                📈 Etapa 2: Servidor Único (Docker en Producción)
              </h4>
              <p style={{ margin: '0 0 1rem 0', fontSize: '0.9rem', lineHeight: '1.6', color: '#555' }}>
                Tienes 1000 usuarios. Renta un servidor en AWS. Usas <strong>solo Docker</strong>:
              </p>
              <div style={{
                backgroundColor: '#e8f5e9',
                border: '1px solid #4CAF50',
                borderRadius: '4px',
                padding: '1rem',
                fontFamily: 'monospace',
                fontSize: '0.85rem',
                color: '#333',
                marginBottom: '1rem'
              }}>
                <div>$ ssh user@servidor.aws.com</div>
                <div>$ docker run -p 80:3000 my-app</div>
                <div style={{ color: '#666', marginTop: '0.5rem' }}>✓ App corriendo en servidor AWS</div>
              </div>
              <p style={{ margin: 0, fontSize: '0.85rem', color: '#666' }}>
                ✓ Docker sigue siendo suficiente. Aún no necesitas Kubernetes.
              </p>
            </div>

            {/* Etapa 3 */}
            <div style={{
              backgroundColor: '#f5f5f5',
              border: '2px solid #666',
              borderRadius: '8px',
              padding: '1.5rem'
            }}>
              <h4 style={{ margin: '0 0 1rem 0', fontSize: '1rem', fontWeight: '700' }}>
                🚀 Etapa 3: Escala Masiva (Necesitas Kubernetes)
              </h4>
              <p style={{ margin: '0 0 1rem 0', fontSize: '0.9rem', lineHeight: '1.6', color: '#555' }}>
                Tienes 100,000 usuarios. Necesitas <strong>Docker + Kubernetes</strong>:
              </p>
              <div style={{
                backgroundColor: '#e3f2fd',
                border: '1px solid #2196F3',
                borderRadius: '4px',
                padding: '1rem',
                fontFamily: 'monospace',
                fontSize: '0.85rem',
                color: '#333',
                marginBottom: '1rem'
              }}>
                <div>$ kubectl apply -f deployment.yaml</div>
                <div style={{ color: '#666', marginTop: '0.5rem' }}>apiVersion: apps/v1</div>
                <div style={{ color: '#666' }}>kind: Deployment</div>
                <div style={{ color: '#666' }}>spec:</div>
                <div style={{ color: '#666', marginLeft: '1.5rem' }}>replicas: 100  ← 100 contenedores</div>
                <div style={{ color: '#666', marginTop: '0.5rem' }}>✓ Kubernetes despliega 100 réplicas automáticamente</div>
              </div>
              <p style={{ margin: 0, fontSize: '0.85rem', color: '#666' }}>
                ✓ Kubernetes escala, reinicia si falla, balancea carga, actualiza sin downtime.
              </p>
            </div>
          </div>

          <div style={{
            backgroundColor: '#fff9c4',
            border: '2px solid #fbc02d',
            borderRadius: '8px',
            padding: '1.5rem',
            marginTop: '2rem'
          }}>
            <p style={{ margin: '0 0 0.5rem 0', fontWeight: '700', fontSize: '0.95rem' }}>
              📊 Resumen del Crecimiento:
            </p>
            <p style={{ margin: 0, fontSize: '0.9rem', lineHeight: '1.8', color: '#333' }}>
              10 usuarios → Docker en laptop<br/>
              1,000 usuarios → Docker en servidor<br/>
              100,000 usuarios → Docker + Kubernetes en cluster
            </p>
          </div>
        </>
      )
    },

    {
      title: 'Matriz de Decisión: ¿Cuándo Usar Cada Uno?',
      content: (
        <>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '2rem',
            marginBottom: '2rem'
          }}>
            {/* Docker */}
            <div style={{
              backgroundColor: '#e8f5e9',
              border: '2px solid #2496ed',
              borderRadius: '8px',
              padding: '1.5rem'
            }}>
              <h3 style={{ margin: '0 0 1rem 0', color: '#2496ed', fontSize: '1.1rem' }}>
                ✅ Usa Docker cuando...
              </h3>
              <ul style={{ margin: 0, paddingLeft: '1.5rem', fontSize: '0.9rem', lineHeight: '1.8', color: '#333' }}>
                <li>Trabajas en desarrollo local</li>
                <li>Tienes UNA app en UN servidor</li>
                <li>Volumen predecible y bajo</li>
                <li>Sin necesidad de escalado automático</li>
                <li>Testing y CI/CD</li>
                <li>Proyectos pequeños/medianos</li>
              </ul>
            </div>

            {/* Kubernetes */}
            <div style={{
              backgroundColor: '#e3f5fd',
              border: '2px solid #326ce5',
              borderRadius: '8px',
              padding: '1.5rem'
            }}>
              <h3 style={{ margin: '0 0 1rem 0', color: '#326ce5', fontSize: '1.1rem' }}>
                ✅ Usa Kubernetes cuando...
              </h3>
              <ul style={{ margin: 0, paddingLeft: '1.5rem', fontSize: '0.9rem', lineHeight: '1.8', color: '#333' }}>
                <li>Múltiples apps/servicios</li>
                <li>Alta disponibilidad</li>
                <li>Tráfico variable/impredecible</li>
                <li>Necesitas escalado automático</li>
                <li>Actualizaciones sin downtime</li>
                <li>Proyectos empresariales</li>
              </ul>
            </div>
          </div>

          <div style={{
            backgroundColor: '#fff9c4',
            border: '2px solid #fbc02d',
            borderRadius: '8px',
            padding: '1.5rem'
          }}>
            <p style={{ margin: '0 0 0.5rem 0', fontWeight: '700', fontSize: '0.95rem' }}>
              💡 Pregunta Clave:
            </p>
            <p style={{ margin: 0, fontSize: '0.9rem', lineHeight: '1.6' }}>
              ¿Necesito gestionar múltiples contenedores en múltiples máquinas automáticamente? → Kubernetes<br/>
              ¿Solo necesito empacar y ejecutar una app? → Docker
            </p>
          </div>
        </>
      )
    },

    {
      title: 'Casos de Confusión (Resueltos)',
      content: (
        <>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '1.5rem'
          }}>
            {[
              {
                q: '¿Es Kubernetes "mejor" que Docker?',
                a: 'NO. Son herramientas diferentes. Kubernetes usa Docker. No son competencia.'
              },
              {
                q: '¿Necesito Kubernetes para usar Docker?',
                a: 'NO. Docker funciona solo perfectamente. Kubernetes es para cuando necesitas orquestar muchos contenedores.'
              },
              {
                q: '¿Puedo usar Kubernetes sin Docker?',
                a: 'Técnicamente sí (con otras runtimes OCI), pero Docker es el estándar.'
              },
              {
                q: '¿Kubernetes reemplazará a Docker?',
                a: 'NO. Kubernetes necesita contenedores (Docker) para funcionar.'
              },
              {
                q: '¿Aprender Kubernetes significa aprender Docker?',
                a: 'Parcialmente. Necesitas entender contenedores, pero Kubernetes es más sobre orquestación que Docker.'
              },
              {
                q: '¿Puedo aprender Kubernetes sin saber Docker?',
                a: 'Difícil. Debes entender Docker primero para saber qué Kubernetes está orquestando.'
              }
            ].map((item, idx) => (
              <div key={idx} style={{
                backgroundColor: idx % 2 === 0 ? '#e8f5e9' : '#e3f5fd',
                border: `1px solid ${idx % 2 === 0 ? '#2496ed' : '#326ce5'}`,
                borderRadius: '8px',
                padding: '1.5rem'
              }}>
                <p style={{ margin: '0 0 0.5rem 0', fontWeight: '700', fontSize: '0.95rem', color: idx % 2 === 0 ? '#2496ed' : '#326ce5' }}>
                  ❓ {item.q}
                </p>
                <p style={{ margin: 0, fontSize: '0.9rem', lineHeight: '1.6', color: '#333' }}>
                  ✓ {item.a}
                </p>
              </div>
            ))}
          </div>
        </>
      )
    },

    {
      title: 'Resumen Final: Las 3 Diferencias Clave',
      content: (
        <>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '1.5rem'
          }}>
            {[
              {
                num: '1️⃣',
                title: 'ESCALA',
                docker: 'UNA app en UNA máquina',
                k8s: 'MUCHAS apps en MUCHAS máquinas',
                highlight: 'Docker = Local. Kubernetes = Distribuido.'
              },
              {
                num: '2️⃣',
                title: 'AUTOMATIZACIÓN',
                docker: 'Manual (tú ejecutas, monitoreas, escalas)',
                k8s: 'Automática (K8s despliega, escala, reinicia)',
                highlight: 'Docker = Herramienta. Kubernetes = Sistema.'
              },
              {
                num: '3️⃣',
                title: 'RELACIÓN',
                docker: 'Independiente (funciona solo)',
                k8s: 'Depende de Docker (u OCI)',
                highlight: 'Docker alimenta a Kubernetes.'
              }
            ].map((item, idx) => (
              <div key={idx} style={{
                backgroundColor: '#ffffff',
                border: '2px solid #333',
                borderRadius: '8px',
                padding: '2rem',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
              }}>
                <p style={{ margin: '0 0 1rem 0', fontSize: '1.2rem' }}>{item.num}</p>
                <h3 style={{ margin: '0 0 1rem 0', fontSize: '1.1rem', fontWeight: '700' }}>
                  {item.title}
                </h3>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '1.5rem',
                  marginBottom: '1.5rem'
                }}>
                  <div>
                    <p style={{ margin: '0 0 0.3rem 0', fontWeight: '600', color: '#2496ed' }}>Docker:</p>
                    <p style={{ margin: 0, fontSize: '0.95rem', color: '#333' }}>{item.docker}</p>
                  </div>
                  <div>
                    <p style={{ margin: '0 0 0.3rem 0', fontWeight: '600', color: '#326ce5' }}>Kubernetes:</p>
                    <p style={{ margin: 0, fontSize: '0.95rem', color: '#333' }}>{item.k8s}</p>
                  </div>
                </div>
                <div style={{
                  backgroundColor: '#f5f5f5',
                  border: '1px solid #ddd',
                  borderRadius: '4px',
                  padding: '0.75rem',
                  fontSize: '0.9rem',
                  fontWeight: '600',
                  color: '#666'
                }}>
                  💡 {item.highlight}
                </div>
              </div>
            ))}
          </div>

          <div style={{
            backgroundColor: '#e8f5e9',
            border: '3px solid #2e7d32',
            borderRadius: '8px',
            padding: '2rem',
            marginTop: '2rem',
            textAlign: 'center'
          }}>
            <p style={{ margin: '0 0 1rem 0', fontSize: '1.1rem', fontWeight: '700', color: '#1b5e20' }}>
              ✅ Ahora lo entiendes:
            </p>
            <p style={{ margin: 0, fontSize: '1rem', lineHeight: '1.8', color: '#2e7d32' }}>
              <strong>Docker</strong> es la herramienta para crear contenedores.<br/>
              <strong>Kubernetes</strong> es el orquestador para gestionar contenedores.<br/>
              <strong>Aprendes Docker primero, luego Kubernetes cuando necesites escala.</strong>
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
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '1.5rem',
        marginTop: '3rem'
      }}>
        <a href="/docker/fundamentales/intro" style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#2496ed',
          color: '#ffffff',
          padding: '1rem 2rem',
          borderRadius: '8px',
          textDecoration: 'none',
          fontSize: '1rem',
          fontWeight: '600',
          transition: 'all 0.3s ease',
          gap: '0.5rem'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = '#1976d2';
          e.currentTarget.style.transform = 'translateY(-2px)';
          e.currentTarget.style.boxShadow = '0 6px 20px rgba(36, 150, 237, 0.3)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = '#2496ed';
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = 'none';
        }}>
          🐳 Docker
        </a>

        <a href="/kubernetes" style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#326ce5',
          color: '#ffffff',
          padding: '1rem 2rem',
          borderRadius: '8px',
          textDecoration: 'none',
          fontSize: '1rem',
          fontWeight: '600',
          transition: 'all 0.3s ease',
          gap: '0.5rem'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = '#1c4db8';
          e.currentTarget.style.transform = 'translateY(-2px)';
          e.currentTarget.style.boxShadow = '0 6px 20px rgba(50, 108, 229, 0.3)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = '#326ce5';
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = 'none';
        }}>
          ☸️ Kubernetes
        </a>
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
