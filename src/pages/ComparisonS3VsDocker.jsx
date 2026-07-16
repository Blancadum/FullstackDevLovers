import { useState } from 'react';
import { LessonTemplate } from '../components';
import { LessonNavigation } from '../components/LessonNavigation';
import { useBreadcrumb } from '../hooks/useBreadcrumb';
import { useLessonNavigation } from '../hooks/useLessonNavigation';

export function ComparisonS3VsDocker() {
  const breadcrumbs = useBreadcrumb();
  const nav = useLessonNavigation();
  const [activeTab, setActiveTab] = useState('overview');

  const sections = [
    {
      title: '¿Por Qué Se Confunden S3 y Docker?',
      content: (
        <>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
            Es muy común confundir S3 y Docker porque ambos usan la palabra <strong>"contenedor"</strong> en su vocabulario. Sin embargo, **NO son lo mismo en absoluto**. La confusión viene de que la palabra "contenedor" tiene significados completamente diferentes en cada contexto.
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
              Cuando aprendes AWS, ves "bucket" (traducido como "contenedor" en algunos idiomas). Cuando aprendes Docker, ves "container" (también traducido como "contenedor"). Tu cerebro une estos dos términos, pero son completamente diferentes.
            </p>
          </div>

          <p style={{ fontSize: '1rem', lineHeight: '1.8', color: '#555' }}>
            En esta página, desglosamos cada diferencia detalladamente para que nunca vuelvas a confundirlos.
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
                  <th style={{ padding: '1rem', textAlign: 'left', fontWeight: '700', width: '40%', color: '#0066cc' }}>Amazon S3</th>
                  <th style={{ padding: '1rem', textAlign: 'left', fontWeight: '700', width: '40%', color: '#d32f2f' }}>Docker</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    aspect: '¿Qué es?',
                    s3: 'Un servicio de almacenamiento en la nube para guardar archivos y datos',
                    docker: 'Una herramienta para empacar aplicaciones y software'
                  },
                  {
                    aspect: '¿Qué guarda?',
                    s3: 'Archivos, imágenes, documentos, videos, datos estáticos',
                    docker: 'Código ejecutable, aplicaciones, dependencias, runtime'
                  },
                  {
                    aspect: 'Palabra clave',
                    s3: 'ALMACENAMIENTO (Storage)',
                    docker: 'EJECUCIÓN (Execution)'
                  },
                  {
                    aspect: '¿Ejecuta código?',
                    s3: 'NO. S3 solo guarda datos.',
                    docker: 'SÍ. Docker ejecuta aplicaciones dentro de contenedores.'
                  },
                  {
                    aspect: '¿Dónde se gestiona?',
                    s3: 'Consola AWS (en la nube, en servidores de Amazon)',
                    docker: 'Tu computadora, servidor local, o servicios de hosting'
                  },
                  {
                    aspect: 'Acceso',
                    s3: 'Via API HTTP/HTTPS desde cualquier lugar',
                    docker: 'Via línea de comandos o interfaces gráficas'
                  },
                  {
                    aspect: 'Dependencia',
                    s3: 'Requiere internet y cuenta AWS',
                    docker: 'Requiere Docker instalado en la máquina'
                  },
                  {
                    aspect: '¿Qué es un "bucket"?',
                    s3: 'Una carpeta virtual que organiza objetos/archivos',
                    docker: 'Docker NO usa "buckets". Usa "imágenes" y "contenedores"'
                  }
                ].map((row, idx) => (
                  <tr key={idx} style={{
                    borderBottom: '1px solid #ddd',
                    backgroundColor: idx % 2 === 0 ? '#fafafa' : '#fff'
                  }}>
                    <td style={{ padding: '1rem', fontWeight: '600', color: '#333' }}>{row.aspect}</td>
                    <td style={{ padding: '1rem', color: '#0066cc' }}>{row.s3}</td>
                    <td style={{ padding: '1rem', color: '#d32f2f' }}>{row.docker}</td>
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
              S3 es para cuando necesitas <strong>guardar datos</strong>. Docker es para cuando necesitas <strong>ejecutar aplicaciones</strong>. Son problemas completamente diferentes.
            </p>
          </div>
        </>
      )
    },

    {
      title: 'Desglose en Profundidad: S3 vs Docker',
      content: (
        <>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '2rem',
            marginBottom: '2rem'
          }}>
            {/* S3 en Profundidad */}
            <div style={{
              backgroundColor: '#e3f2fd',
              border: '3px solid #0066cc',
              borderRadius: '8px',
              padding: '2rem'
            }}>
              <h3 style={{ margin: '0 0 1rem 0', color: '#0066cc', fontSize: '1.3rem' }}>
                📦 Amazon S3 en Profundidad
              </h3>

              <div style={{ marginBottom: '1.5rem' }}>
                <h4 style={{ margin: '0 0 0.5rem 0', color: '#0066cc', fontSize: '1rem' }}>¿Qué es en Realidad?</h4>
                <p style={{ margin: 0, fontSize: '0.9rem', lineHeight: '1.6', color: '#333' }}>
                  S3 es un <strong>servicio de almacenamiento de objetos</strong> gestionado por Amazon. Tú no administras servidores, no tienes que preocuparte por capacidad de disco, ni por mantenimiento. Solo subes archivos y Amazon los guarda de forma segura en múltiples ubicaciones.
                </p>
              </div>

              <div style={{ marginBottom: '1.5rem' }}>
                <h4 style={{ margin: '0 0 0.5rem 0', color: '#0066cc', fontSize: '1rem' }}>¿Qué es un Bucket?</h4>
                <p style={{ margin: 0, fontSize: '0.9rem', lineHeight: '1.6', color: '#333' }}>
                  Un bucket es una <strong>carpeta principal</strong> dentro de S3. Es el contenedor raíz. Dentro de él, puedes crear subcarpetas simuladas (usando "/" en los nombres de archivos). Un bucket tiene un nombre único globalmente (como "mi-app-fotos-2026").
                </p>
              </div>

              <div style={{ marginBottom: '1.5rem' }}>
                <h4 style={{ margin: '0 0 0.5rem 0', color: '#0066cc', fontSize: '1rem' }}>Estructura de S3</h4>
                <div style={{
                  backgroundColor: '#fff',
                  border: '1px solid #0066cc',
                  borderRadius: '4px',
                  padding: '1rem',
                  fontFamily: 'monospace',
                  fontSize: '0.85rem',
                  color: '#333'
                }}>
                  <div>S3 (Servicio)</div>
                  <div style={{ marginLeft: '1.5rem' }}>└─ Bucket: "mi-app-fotos" (carpeta raíz)</div>
                  <div style={{ marginLeft: '3rem' }}>├─ /perfil/usuario-123.jpg (objeto/archivo)</div>
                  <div style={{ marginLeft: '3rem' }}>├─ /docs/contrato.pdf (objeto/archivo)</div>
                  <div style={{ marginLeft: '3rem' }}>└─ /videos/tutorial.mp4 (objeto/archivo)</div>
                </div>
              </div>

              <div style={{ marginBottom: '1.5rem' }}>
                <h4 style={{ margin: '0 0 0.5rem 0', color: '#0066cc', fontSize: '1rem' }}>¿Qué es un Objeto?</h4>
                <p style={{ margin: 0, fontSize: '0.9rem', lineHeight: '1.6', color: '#333' }}>
                  Un objeto es cada <strong>archivo individual</strong> dentro de un bucket. Puede ser una imagen, un PDF, un video, un log, etc. S3 no diferencia entre tipos de archivo; trata todo como "objetos".
                </p>
              </div>

              <div>
                <h4 style={{ margin: '0 0 0.5rem 0', color: '#0066cc', fontSize: '1rem' }}>Ejemplos de Uso</h4>
                <ul style={{ margin: 0, paddingLeft: '1.5rem', fontSize: '0.9rem', lineHeight: '1.6' }}>
                  <li>Guardar fotos subidas por usuarios</li>
                  <li>Almacenar logs de aplicaciones</li>
                  <li>Hosting de sitios web estáticos</li>
                  <li>Backups de bases de datos</li>
                  <li>Archivos para machine learning</li>
                </ul>
              </div>
            </div>

            {/* Docker en Profundidad */}
            <div style={{
              backgroundColor: '#ffebee',
              border: '3px solid #d32f2f',
              borderRadius: '8px',
              padding: '2rem'
            }}>
              <h3 style={{ margin: '0 0 1rem 0', color: '#d32f2f', fontSize: '1.3rem' }}>
                🐳 Docker en Profundidad
              </h3>

              <div style={{ marginBottom: '1.5rem' }}>
                <h4 style={{ margin: '0 0 0.5rem 0', color: '#d32f2f', fontSize: '1rem' }}>¿Qué es en Realidad?</h4>
                <p style={{ margin: 0, fontSize: '0.9rem', lineHeight: '1.6', color: '#333' }}>
                  Docker es una <strong>herramienta de virtualización ligera</strong>. Empaca tu aplicación (código, dependencias, runtime) en una "caja" llamada contenedor. Esta caja puede ejecutarse en cualquier lugar: tu laptop, un servidor Linux, AWS, Google Cloud, etc.
                </p>
              </div>

              <div style={{ marginBottom: '1.5rem' }}>
                <h4 style={{ margin: '0 0 0.5rem 0', color: '#d32f2f', fontSize: '1rem' }}>¿Qué es un Contenedor?</h4>
                <p style={{ margin: 0, fontSize: '0.9rem', lineHeight: '1.6', color: '#333' }}>
                  Un contenedor es una <strong>máquina virtual ligera</strong> que contiene tu aplicación. Dentro vive: tu código, Node.js (o Python, Java, etc.), librerías, variables de entorno. Es como un paquete hermético listo para ejecutar.
                </p>
              </div>

              <div style={{ marginBottom: '1.5rem' }}>
                <h4 style={{ margin: '0 0 0.5rem 0', color: '#d32f2f', fontSize: '1rem' }}>Estructura de Docker</h4>
                <div style={{
                  backgroundColor: '#fff',
                  border: '1px solid #d32f2f',
                  borderRadius: '4px',
                  padding: '1rem',
                  fontFamily: 'monospace',
                  fontSize: '0.85rem',
                  color: '#333'
                }}>
                  <div>Dockerfile (receta)</div>
                  <div style={{ marginLeft: '1.5rem' }}>↓</div>
                  <div style={{ marginLeft: '1.5rem' }}>Imagen Docker (plantilla)</div>
                  <div style={{ marginLeft: '1.5rem' }}>↓ (docker run)</div>
                  <div style={{ marginLeft: '1.5rem' }}>Contenedor (en ejecución)</div>
                </div>
              </div>

              <div style={{ marginBottom: '1.5rem' }}>
                <h4 style={{ margin: '0 0 0.5rem 0', color: '#d32f2f', fontSize: '1rem' }}>¿Qué es una Imagen?</h4>
                <p style={{ margin: 0, fontSize: '0.9rem', lineHeight: '1.6', color: '#333' }}>
                  Una imagen Docker es una <strong>plantilla de solo lectura</strong> que define cómo debe ser el contenedor. Es como el "plano" de tu aplicación. Desde una imagen, puedes crear múltiples contenedores (instancias) ejecutándose.
                </p>
              </div>

              <div>
                <h4 style={{ margin: '0 0 0.5rem 0', color: '#d32f2f', fontSize: '1rem' }}>Ejemplos de Uso</h4>
                <ul style={{ margin: 0, paddingLeft: '1.5rem', fontSize: '0.9rem', lineHeight: '1.6' }}>
                  <li>Empacar tu app backend Node.js</li>
                  <li>Crear entornos consistentes (dev = prod)</li>
                  <li>Desplegar en servidores sin instalar dependencias</li>
                  <li>Microservicios (múltiples contenedores)</li>
                  <li>CI/CD pipelines automatizados</li>
                </ul>
              </div>
            </div>
          </div>
        </>
      )
    },

    {
      title: 'Un Ejemplo Práctico Real',
      content: (
        <>
          <p style={{ fontSize: '1rem', lineHeight: '1.8', marginBottom: '2rem', color: '#555' }}>
            Imagina que estás construyendo una <strong>red social de fotos</strong> donde los usuarios suben imágenes.
          </p>

          <div style={{
            backgroundColor: '#f5f5f5',
            border: '2px solid #666',
            borderRadius: '8px',
            padding: '2rem',
            marginBottom: '2rem'
          }}>
            <h4 style={{ margin: '0 0 1.5rem 0', fontSize: '1.1rem', fontWeight: '700' }}>
              Flujo de la Aplicación:
            </h4>

            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1.5rem'
            }}>
              {[
                {
                  num: '1️⃣',
                  title: 'Usuario sube una foto',
                  desc: 'El usuario hace clic en "subir foto" en tu app'
                },
                {
                  num: '2️⃣',
                  title: 'La foto viaja a tu backend (Docker)',
                  desc: 'Tu app backend (empaquetada en Docker) recibe la foto'
                },
                {
                  num: '3️⃣',
                  title: 'Docker guarda la foto en S3',
                  desc: 'Docker contacta a S3 (via API) y dice: "Guarda esta foto en mi bucket"'
                },
                {
                  num: '4️⃣',
                  title: 'S3 almacena la foto',
                  desc: 'S3 guarda la foto en su bucket de forma segura, duplicada en múltiples servidores'
                },
                {
                  num: '5️⃣',
                  title: 'Docker guarda la referencia',
                  desc: 'Docker guarda en su base de datos: "foto de usuario 123 está en S3 en /fotos/123.jpg"'
                },
                {
                  num: '6️⃣',
                  title: 'Otros usuarios ven la foto',
                  desc: 'Cuando otro usuario entra, Docker dice: "La foto está en S3", y se la sirve desde allá'
                }
              ].map((step, idx) => (
                <div key={idx} style={{
                  display: 'flex',
                  gap: '1rem',
                  alignItems: 'flex-start'
                }}>
                  <span style={{ fontSize: '1.5rem', minWidth: '40px' }}>{step.num}</span>
                  <div>
                    <p style={{ margin: '0 0 0.3rem 0', fontWeight: '600', fontSize: '0.95rem' }}>
                      {step.title}
                    </p>
                    <p style={{ margin: 0, fontSize: '0.85rem', color: '#666' }}>
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div style={{
              marginTop: '2rem',
              paddingTop: '2rem',
              borderTop: '1px solid #ddd'
            }}>
              <p style={{ margin: '0 0 1rem 0', fontWeight: '700', fontSize: '0.95rem' }}>
                ¿Ves la diferencia?
              </p>
              <ul style={{ margin: 0, paddingLeft: '1.5rem', fontSize: '0.9rem', lineHeight: '1.8' }}>
                <li><strong>Docker</strong> = tu aplicación corriendo, procesando lógica</li>
                <li><strong>S3</strong> = el almacén donde viven las fotos</li>
                <li>Docker LLAMA a S3, pero NO es S3</li>
                <li>S3 GUARDA archivos, pero NO ejecuta código</li>
              </ul>
            </div>
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
            {/* S3 */}
            <div style={{
              backgroundColor: '#e3f2fd',
              border: '2px solid #0066cc',
              borderRadius: '8px',
              padding: '1.5rem'
            }}>
              <h3 style={{ margin: '0 0 1rem 0', color: '#0066cc', fontSize: '1.1rem' }}>
                ✅ Usa S3 cuando necesites...
              </h3>
              <ul style={{ margin: 0, paddingLeft: '1.5rem', fontSize: '0.9rem', lineHeight: '1.8', color: '#333' }}>
                <li>Guardar archivos estáticos (fotos, PDFs, videos)</li>
                <li>Almacenar datos de usuarios</li>
                <li>Crear backups</li>
                <li>Servir contenido a nivel mundial (con CDN)</li>
                <li>Almacenar logs de aplicaciones</li>
                <li>Datasets para machine learning</li>
                <li>NO tienes que procesar el archivo aquí</li>
              </ul>
            </div>

            {/* Docker */}
            <div style={{
              backgroundColor: '#ffebee',
              border: '2px solid #d32f2f',
              borderRadius: '8px',
              padding: '1.5rem'
            }}>
              <h3 style={{ margin: '0 0 1rem 0', color: '#d32f2f', fontSize: '1.1rem' }}>
                ✅ Usa Docker cuando necesites...
              </h3>
              <ul style={{ margin: 0, paddingLeft: '1.5rem', fontSize: '0.9rem', lineHeight: '1.8', color: '#333' }}>
                <li>Empacar tu aplicación backend</li>
                <li>Crear entornos consistentes</li>
                <li>Ejecutar código (APIs, lógica)</li>
                <li>Desplegar en múltiples servidores</li>
                <li>Implementar microservicios</li>
                <li>Procesar datos antes de guardarlos</li>
                <li>Nada que ver con almacenar archivos estáticos</li>
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
              💡 La Pregunta Clave:
            </p>
            <p style={{ margin: 0, fontSize: '0.9rem', lineHeight: '1.6' }}>
              Si tu pregunta es <strong>"¿Dónde guardo esto?"</strong> → S3<br/>
              Si tu pregunta es <strong>"¿Cómo corro mi app?"</strong> → Docker
            </p>
          </div>
        </>
      )
    },

    {
      title: 'Analogía: Casa, Garaje y Caja Fuerte',
      content: (
        <>
          <p style={{ fontSize: '1rem', lineHeight: '1.8', marginBottom: '2rem', color: '#555' }}>
            Para entender finalmente la diferencia, usa esta analogía:
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr 1fr',
            gap: '1.5rem'
          }}>
            {[
              {
                title: '🏠 Tu Casa',
                color: '#4CAF50',
                desc: 'Tu laptop / computadora personal',
                ex: 'Donde escribes código'
              },
              {
                title: '📦 Docker',
                color: '#d32f2f',
                desc: 'Una caja hermética lista para viajar',
                ex: 'Tu app empaquetada, lista para llevarse a cualquier lado'
              },
              {
                title: '🏦 S3',
                color: '#0066cc',
                desc: 'Una bóveda de seguridad en el banco',
                ex: 'Donde guardas tus archivos de forma segura en la nube'
              }
            ].map((item, idx) => (
              <div key={idx} style={{
                backgroundColor: '#f5f5f5',
                border: `3px solid ${item.color}`,
                borderRadius: '8px',
                padding: '1.5rem',
                textAlign: 'center'
              }}>
                <h3 style={{ margin: '0 0 0.5rem 0', color: item.color, fontSize: '1.1rem' }}>
                  {item.title}
                </h3>
                <p style={{ margin: '0.5rem 0', fontSize: '0.9rem', fontWeight: '600', color: item.color }}>
                  {item.desc}
                </p>
                <p style={{ margin: 0, fontSize: '0.85rem', color: '#666', fontStyle: 'italic' }}>
                  {item.ex}
                </p>
              </div>
            ))}
          </div>

          <div style={{
            backgroundColor: '#f0f4ff',
            border: '2px solid #5c6bc0',
            borderRadius: '8px',
            padding: '1.5rem',
            marginTop: '2rem'
          }}>
            <p style={{ margin: '0 0 1rem 0', fontWeight: '700', fontSize: '0.95rem' }}>
              La Secuencia Completa:
            </p>
            <div style={{
              fontFamily: 'monospace',
              fontSize: '0.9rem',
              color: '#333',
              lineHeight: '1.8'
            }}>
              <div>🏠 Escribes código en tu casa (laptop)</div>
              <div>↓</div>
              <div>📦 Lo empacan en Docker (caja hermética)</div>
              <div>↓</div>
              <div>☁️ Docker corre en un servidor (AWS EC2)</div>
              <div>↓</div>
              <div>🏦 Docker guarda archivos en S3 (bóveda segura)</div>
              <div>↓</div>
              <div>👥 Los usuarios acceden: Docker les sirve la app, S3 les sirve los archivos</div>
            </div>
          </div>
        </>
      )
    },

    {
      title: 'Casos Comunes de Confusión (Resueltos)',
      content: (
        <>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '1.5rem'
          }}>
            {[
              {
                q: '¿S3 es un contenedor como Docker?',
                a: 'NO. S3 es almacenamiento. Docker es ejecución. Aunque ambos usan "contenedor", son conceptos opuestos.'
              },
              {
                q: '¿Guardo mi código en S3?',
                a: 'NO. Guarda datos estáticos (archivos). Tu código va en Docker. S3 es para fotos, PDFs, logs, etc.'
              },
              {
                q: '¿Docker es un servicio de AWS?',
                a: 'NO. Docker es una herramienta independiente. AWS lo integra en servicios como ECS y ECR, pero Docker existe sin AWS.'
              },
              {
                q: '¿Necesito S3 si tengo Docker?',
                a: 'A menudo SÍ. Docker ejecuta tu app; S3 almacena sus datos. Se complementan, pero son diferentes.'
              },
              {
                q: '¿Puedo guardar archivos dentro de Docker?',
                a: 'Técnicamente sí, pero NO deberías. Docker es efímero (temporal). Los archivos se pierden al reiniciar. S3 es permanente.'
              },
              {
                q: '¿Puedo ejecutar código en S3?',
                a: 'NO. S3 solo guarda. Para ejecutar código usa Lambda (si es pequeño) o Docker/EC2 (si es complejo).'
              }
            ].map((item, idx) => (
              <div key={idx} style={{
                backgroundColor: idx % 2 === 0 ? '#fff9c4' : '#f3e5f5',
                border: `1px solid ${idx % 2 === 0 ? '#fbc02d' : '#9c27b0'}`,
                borderRadius: '8px',
                padding: '1.5rem'
              }}>
                <p style={{ margin: '0 0 0.5rem 0', fontWeight: '700', fontSize: '0.95rem', color: idx % 2 === 0 ? '#f57f17' : '#6a1b9a' }}>
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
                title: 'PROPÓSITO',
                s3: 'Guardar (almacenamiento)',
                docker: 'Ejecutar (virtualización)',
                highlight: 'S3 es pasivo, Docker es activo'
              },
              {
                num: '2️⃣',
                title: 'UBICACIÓN',
                s3: 'En servidores de AWS (nube)',
                docker: 'Donde instales Docker (tu laptop, servidor, cloud)',
                highlight: 'S3 es siempre remoto, Docker puede ser local'
              },
              {
                num: '3️⃣',
                title: 'CONTENIDO',
                s3: 'Archivos estáticos (fotos, PDFs, datos)',
                docker: 'Aplicaciones ejecutables (código + dependencias)',
                highlight: 'S3 es un almacén, Docker es una máquina'
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
                    <p style={{ margin: '0 0 0.3rem 0', fontWeight: '600', color: '#0066cc' }}>S3:</p>
                    <p style={{ margin: 0, fontSize: '0.95rem', color: '#333' }}>{item.s3}</p>
                  </div>
                  <div>
                    <p style={{ margin: '0 0 0.3rem 0', fontWeight: '600', color: '#d32f2f' }}>Docker:</p>
                    <p style={{ margin: 0, fontSize: '0.95rem', color: '#333' }}>{item.docker}</p>
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
              <strong>S3</strong> es para guardar archivos.<br/>
              <strong>Docker</strong> es para ejecutar aplicaciones.<br/>
              <strong>Ambos pueden vivir en tu proyecto, pero NO son lo mismo.</strong>
            </p>
          </div>

          {/* Botones de navegación */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '1.5rem',
            marginTop: '3rem'
          }}>
            <a href="/aws/servicios/s3" style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#0066cc',
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
              e.currentTarget.style.backgroundColor = '#0052a3';
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 6px 20px rgba(0, 102, 204, 0.3)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#0066cc';
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}>
              📦 Volver a S3 de AWS
            </a>

            <a href="/docker/fundamentales/intro" style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#d32f2f',
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
              e.currentTarget.style.backgroundColor = '#b71c1c';
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 6px 20px rgba(211, 47, 47, 0.3)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#d32f2f';
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}>
              🐳 Docker
            </a>
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
