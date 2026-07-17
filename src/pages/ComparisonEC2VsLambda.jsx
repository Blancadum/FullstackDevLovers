import { useState } from 'react';
import { LessonTemplate } from '../components';
import { LessonNavigation } from '../components/LessonNavigation';
import { useBreadcrumb } from '../hooks/useBreadcrumb';
import { useLessonNavigation } from '../hooks/useLessonNavigation';

export function ComparisonEC2VsLambda() {
  const breadcrumbs = useBreadcrumb();
  const nav = useLessonNavigation();

  const sections = [
    {
      title: '¿Por Qué Se Confunden EC2 y Lambda?',
      content: (
        <>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
            Es muy común confundir <strong>EC2 y Lambda</strong> porque ambos son servicios de AWS para ejecutar código. Sin embargo, son **completamente diferentes en filosofía y uso**. La confusión viene de que ambos permiten "correr tu aplicación en AWS", pero de formas radicalmente opuestas.
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
              Ambos ejecutan código, pero EC2 te da **control total** de una máquina virtual, mientras que Lambda **automatiza todo** y tú solo subes la función. Son dos extremos opuestos del espectro "servidor".
            </p>
          </div>

          <p style={{ fontSize: '1rem', lineHeight: '1.8', color: '#555' }}>
            En esta página, desglosamos cada diferencia detalladamente para que entiendas cuándo usar cada uno.
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
                  <th style={{ padding: '1rem', textAlign: 'left', fontWeight: '700', width: '40%', color: '#ff6b35' }}>Amazon EC2</th>
                  <th style={{ padding: '1rem', textAlign: 'left', fontWeight: '700', width: '40%', color: '#f39c12' }}>AWS Lambda</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    aspect: '¿Qué es?',
                    ec2: 'Una máquina virtual completa que tú administras',
                    lambda: 'Un servicio para ejecutar código sin gestionar servidor'
                  },
                  {
                    aspect: 'Modelo',
                    ec2: 'Infrastructure as a Service (IaaS)',
                    lambda: 'Function as a Service (FaaS) / Serverless'
                  },
                  {
                    aspect: '¿Quién administra?',
                    ec2: 'TÚ administras: SO, dependencias, actualizaciones, escalado',
                    lambda: 'AWS administra TODO, tú solo subes código'
                  },
                  {
                    aspect: 'Tiempo de arranque',
                    ec2: 'Minutos (instancia debe iniciarse)',
                    lambda: 'Milisegundos (ya está lista)'
                  },
                  {
                    aspect: 'Costo',
                    ec2: 'Pago por hora (siempre encendida)',
                    lambda: 'Pago solo por ejecución (por ms de uso)'
                  },
                  {
                    aspect: 'Escalado',
                    ec2: 'Manual o con Auto Scaling (configurable)',
                    lambda: 'Automático e instantáneo'
                  },
                  {
                    aspect: '¿Siempre encendida?',
                    ec2: 'SÍ (cuesta dinero incluso sin usar)',
                    lambda: 'NO (solo cuando se ejecuta)'
                  },
                  {
                    aspect: 'Tiempo máximo ejecución',
                    ec2: 'Ilimitado (semanas, meses)',
                    lambda: 'Máximo 15 minutos'
                  },
                  {
                    aspect: 'Memoria',
                    ec2: 'Configurable (1GB hasta cientos de GB)',
                    lambda: 'Configurable (128MB a 10GB)'
                  },
                  {
                    aspect: 'Almacenamiento',
                    ec2: 'Disco duro completo (EBS o local)',
                    lambda: 'Solo /tmp temporal (512MB)'
                  },
                  {
                    aspect: 'Casos de uso',
                    ec2: 'Aplicaciones 24/7, procesamiento pesado, control total',
                    lambda: 'APIs rápidas, eventos, tareas cortas, scripts'
                  }
                ].map((row, idx) => (
                  <tr key={idx} style={{
                    borderBottom: '1px solid #ddd',
                    backgroundColor: idx % 2 === 0 ? '#fafafa' : '#fff'
                  }}>
                    <td style={{ padding: '1rem', fontWeight: '600', color: '#333' }}>{row.aspect}</td>
                    <td style={{ padding: '1rem', color: '#ff6b35' }}>{row.ec2}</td>
                    <td style={{ padding: '1rem', color: '#f39c12' }}>{row.lambda}</td>
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
              EC2 = **Tu propia máquina** que administras todo (complejo pero flexible)<br/>
              Lambda = **Solo código** que AWS ejecuta automáticamente (simple pero limitado)
            </p>
          </div>
        </>
      )
    },

    {
      title: 'Desglose en Profundidad: EC2 vs Lambda',
      content: (
        <>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '2rem',
            marginBottom: '2rem'
          }}>
            {/* EC2 en Profundidad */}
            <div style={{
              backgroundColor: '#ffe0b2',
              border: '3px solid #ff6b35',
              borderRadius: '8px',
              padding: '2rem'
            }}>
              <h3 style={{ margin: '0 0 1rem 0', color: '#ff6b35', fontSize: '1.3rem' }}>
                🖥️ Amazon EC2 en Profundidad
              </h3>

              <div style={{ marginBottom: '1.5rem' }}>
                <h4 style={{ margin: '0 0 0.5rem 0', color: '#ff6b35', fontSize: '1rem' }}>¿Qué es en Realidad?</h4>
                <p style={{ margin: 0, fontSize: '0.9rem', lineHeight: '1.6', color: '#333' }}>
                  EC2 es una <strong>máquina virtual completamente configurable</strong> que corre en los servidores de AWS. Tú eliges el SO (Linux, Windows), la CPU, RAM, almacenamiento, y redes. Es como rentar una computadora en la nube.
                </p>
              </div>

              <div style={{ marginBottom: '1.5rem' }}>
                <h4 style={{ margin: '0 0 0.5rem 0', color: '#ff6b35', fontSize: '1rem' }}>¿Qué Incluye?</h4>
                <ul style={{ margin: 0, paddingLeft: '1.5rem', fontSize: '0.9rem', lineHeight: '1.8', color: '#333' }}>
                  <li>Sistema Operativo completo (Linux, Windows)</li>
                  <li>Acceso SSH/RDP para administrar</li>
                  <li>Almacenamiento de disco (EBS)</li>
                  <li>Dirección IP pública</li>
                  <li>Seguridad groups y firewalls</li>
                  <li>Puedes instalar LO QUE QUIERAS</li>
                </ul>
              </div>

              <div style={{ marginBottom: '1.5rem' }}>
                <h4 style={{ margin: '0 0 0.5rem 0', color: '#ff6b35', fontSize: '1rem' }}>Tu Responsabilidad</h4>
                <p style={{ margin: 0, fontSize: '0.9rem', lineHeight: '1.6', color: '#333' }}>
                  <strong>TODO depende de ti:</strong> instalar Node.js, Python, Java; configurar nginx; actualizar el SO; monitorear; escalar; backups; seguridad. Mucha flexibilidad, mucha responsabilidad.
                </p>
              </div>

              <div style={{ marginBottom: '1.5rem' }}>
                <h4 style={{ margin: '0 0 0.5rem 0', color: '#ff6b35', fontSize: '1rem' }}>Ejemplo de Costo</h4>
                <div style={{
                  backgroundColor: '#fff',
                  border: '1px solid #ff6b35',
                  borderRadius: '4px',
                  padding: '1rem',
                  fontSize: '0.85rem',
                  color: '#333'
                }}>
                  Instance t3.medium: $0.0416/hora<br/>
                  24 horas × 30 días = ~$30/mes<br/>
                  (incluso si no haces nada)
                </div>
              </div>

              <div>
                <h4 style={{ margin: '0 0 0.5rem 0', color: '#ff6b35', fontSize: '1rem' }}>Cuándo Usar EC2</h4>
                <ul style={{ margin: 0, paddingLeft: '1.5rem', fontSize: '0.9rem', lineHeight: '1.8' }}>
                  <li>Aplicaciones que deben estar 24/7</li>
                  <li>Procesamiento pesado o largo</li>
                  <li>Necesitas control total del servidor</li>
                  <li>Software legado</li>
                  <li>Alto volumen predecible de tráfico</li>
                </ul>
              </div>
            </div>

            {/* Lambda en Profundidad */}
            <div style={{
              backgroundColor: '#fff9c4',
              border: '3px solid #f39c12',
              borderRadius: '8px',
              padding: '2rem'
            }}>
              <h3 style={{ margin: '0 0 1rem 0', color: '#f39c12', fontSize: '1.3rem' }}>
                ⚡ AWS Lambda en Profundidad
              </h3>

              <div style={{ marginBottom: '1.5rem' }}>
                <h4 style={{ margin: '0 0 0.5rem 0', color: '#f39c12', fontSize: '1rem' }}>¿Qué es en Realidad?</h4>
                <p style={{ margin: 0, fontSize: '0.9rem', lineHeight: '1.6', color: '#333' }}>
                  Lambda es un servicio <strong>serverless</strong> (sin servidor). Tú subes una función (código), AWS la ejecuta cuando sea necesario, y punto. No hay máquinas, no hay administración. Solo código.
                </p>
              </div>

              <div style={{ marginBottom: '1.5rem' }}>
                <h4 style={{ margin: '0 0 0.5rem 0', color: '#f39c12', fontSize: '1rem' }}>¿Qué Incluye?</h4>
                <ul style={{ margin: 0, paddingLeft: '1.5rem', fontSize: '0.9rem', lineHeight: '1.8', color: '#333' }}>
                  <li>Entorno de ejecución (Python, Node.js, Java, etc.)</li>
                  <li>Escalado automático instantáneo</li>
                  <li>Sin SSH ni administración</li>
                  <li>Pago solo por uso (milisegundos)</li>
                  <li>Máximo 15 minutos de ejecución</li>
                </ul>
              </div>

              <div style={{ marginBottom: '1.5rem' }}>
                <h4 style={{ margin: '0 0 0.5rem 0', color: '#f39c12', fontSize: '1rem' }}>Tu Responsabilidad</h4>
                <p style={{ margin: 0, fontSize: '0.9rem', lineHeight: '1.6', color: '#333' }}>
                  <strong>Solo escribir código</strong>. AWS maneja: escalado, seguridad, monitoreo, infraestructura. Tú solo subes la función y listo.
                </p>
              </div>

              <div style={{ marginBottom: '1.5rem' }}>
                <h4 style={{ margin: '0 0 0.5rem 0', color: '#f39c12', fontSize: '1rem' }}>Ejemplo de Costo</h4>
                <div style={{
                  backgroundColor: '#fff',
                  border: '1px solid #f39c12',
                  borderRadius: '4px',
                  padding: '1rem',
                  fontSize: '0.85rem',
                  color: '#333'
                }}>
                  1M invocaciones × 100ms cada una<br/>
                  = 100,000 segundos-GB<br/>
                  = ~$1.67/mes
                </div>
              </div>

              <div>
                <h4 style={{ margin: '0 0 0.5rem 0', color: '#f39c12', fontSize: '1rem' }}>Cuándo Usar Lambda</h4>
                <ul style={{ margin: 0, paddingLeft: '1.5rem', fontSize: '0.9rem', lineHeight: '1.8' }}>
                  <li>APIs rápidas y simples</li>
                  <li>Procesamiento de eventos</li>
                  <li>Tareas puntuales</li>
                  <li>Tráfico impredecible</li>
                  <li>No necesitas control total</li>
                </ul>
              </div>
            </div>
          </div>
        </>
      )
    },

    {
      title: 'Ejemplo Práctico Real: Aplicación de Fotos',
      content: (
        <>
          <p style={{ fontSize: '1rem', lineHeight: '1.8', marginBottom: '2rem', color: '#555' }}>
            Imagina que construyes una <strong>aplicación de edición de fotos en línea</strong>. Veamos cómo usarías EC2 vs Lambda.
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '2rem'
          }}>
            {/* Escenario EC2 */}
            <div style={{
              backgroundColor: '#ffe0b2',
              border: '2px solid #ff6b35',
              borderRadius: '8px',
              padding: '1.5rem'
            }}>
              <h4 style={{ margin: '0 0 1rem 0', color: '#ff6b35' }}>Con EC2:</h4>
              <div style={{ fontSize: '0.9rem', lineHeight: '1.8', color: '#333' }}>
                <p><strong>1. Lanzas una instancia t3.large</strong></p>
                <p style={{ fontSize: '0.85rem', color: '#666' }}>Suficientemente potente para tu app.</p>

                <p style={{ marginTop: '1rem' }}><strong>2. Instalas todo</strong></p>
                <p style={{ fontSize: '0.85rem', color: '#666' }}>Node.js, Express, ImageMagick, nginx, PM2...</p>

                <p style={{ marginTop: '1rem' }}><strong>3. Configurar auto-scaling</strong></p>
                <p style={{ fontSize: '0.85rem', color: '#666' }}>Si llegan muchos usuarios, lanzas más instancias.</p>

                <p style={{ marginTop: '1rem' }}><strong>4. Monitorear 24/7</strong></p>
                <p style={{ fontSize: '0.85rem', color: '#666' }}>¿El servidor está arriba? ¿Hay errores? ¿Espacio en disco?</p>

                <p style={{ marginTop: '1rem' }}><strong>5. Pagar</strong></p>
                <p style={{ fontSize: '0.85rem', color: '#666' }}>~$30-100/mes incluso si nadie usa la app.</p>
              </div>
            </div>

            {/* Escenario Lambda */}
            <div style={{
              backgroundColor: '#fff9c4',
              border: '2px solid #f39c12',
              borderRadius: '8px',
              padding: '1.5rem'
            }}>
              <h4 style={{ margin: '0 0 1rem 0', color: '#f39c12' }}>Con Lambda:</h4>
              <div style={{ fontSize: '0.9rem', lineHeight: '1.8', color: '#333' }}>
                <p><strong>1. Escribes el código</strong></p>
                <p style={{ fontSize: '0.85rem', color: '#666' }}>Función que procesa fotos (Python + PIL).</p>

                <p style={{ marginTop: '1rem' }}><strong>2. Subes a Lambda</strong></p>
                <p style={{ fontSize: '0.85rem', color: '#666' }}>AWS lo ejecuta automáticamente.</p>

                <p style={{ marginTop: '1rem' }}><strong>3. Escala automática</strong></p>
                <p style={{ fontSize: '0.85rem', color: '#666' }}>10 usuarios = 10 ejecuciones paralelas. Automático.</p>

                <p style={{ marginTop: '1rem' }}><strong>4. Sin mantenimiento</strong></p>
                <p style={{ fontSize: '0.85rem', color: '#666' }}>Nada que hacer. AWS lo maneja.</p>

                <p style={{ marginTop: '1rem' }}><strong>5. Pagar solo por uso</strong></p>
                <p style={{ fontSize: '0.85rem', color: '#666' }}>0 usuarios = $0. 1000 usos = $0.20.</p>
              </div>
            </div>
          </div>

          <div style={{
            backgroundColor: '#f5f5f5',
            border: '2px solid #666',
            borderRadius: '8px',
            padding: '1.5rem',
            marginTop: '2rem'
          }}>
            <p style={{ margin: '0 0 1rem 0', fontWeight: '700', fontSize: '0.95rem' }}>
              ¿Cuál es mejor para esta app?
            </p>
            <p style={{ margin: 0, fontSize: '0.9rem', lineHeight: '1.6', color: '#333' }}>
              <strong>Si usas Lambda:</strong> Perfecto si el editar fotos es RÁPIDO (&lt;5 segundos).<br/>
              <strong>Si usas EC2:</strong> Necesario si el procesamiento es PESADO (minutos) o la app siempre está activa.
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
            {/* EC2 */}
            <div style={{
              backgroundColor: '#ffe0b2',
              border: '2px solid #ff6b35',
              borderRadius: '8px',
              padding: '1.5rem'
            }}>
              <h3 style={{ margin: '0 0 1rem 0', color: '#ff6b35', fontSize: '1.1rem' }}>
                ✅ Usa EC2 cuando...
              </h3>
              <ul style={{ margin: 0, paddingLeft: '1.5rem', fontSize: '0.9rem', lineHeight: '1.8', color: '#333' }}>
                <li>Tu app debe estar 24/7 funcionando</li>
                <li>Tienes tráfico predecible y constante</li>
                <li>Necesitas instalar software específico</li>
                <li>Procesos que duran más de 15 minutos</li>
                <li>Control total sobre el entorno</li>
                <li>Base de datos persistente</li>
                <li>Aplicaciones web tradicionales</li>
              </ul>
            </div>

            {/* Lambda */}
            <div style={{
              backgroundColor: '#fff9c4',
              border: '2px solid #f39c12',
              borderRadius: '8px',
              padding: '1.5rem'
            }}>
              <h3 style={{ margin: '0 0 1rem 0', color: '#f39c12', fontSize: '1.1rem' }}>
                ✅ Usa Lambda cuando...
              </h3>
              <ul style={{ margin: 0, paddingLeft: '1.5rem', fontSize: '0.9rem', lineHeight: '1.8', color: '#333' }}>
                <li>Ejecutas código cuando es NECESARIO</li>
                <li>Tráfico impredecible</li>
                <li>Procesos muy cortos (&lt;5 min)</li>
                <li>APIs sencillas</li>
                <li>Procesamiento de eventos</li>
                <li>Quieres pagar solo por uso</li>
                <li>Sin mantenimiento de servidor</li>
              </ul>
            </div>
          </div>

          <div style={{
            backgroundColor: '#fff9c4',
            border: '2px solid #f39c12',
            borderRadius: '8px',
            padding: '1.5rem'
          }}>
            <p style={{ margin: '0 0 0.5rem 0', fontWeight: '700', fontSize: '0.95rem' }}>
              💡 Pregunta Clave:
            </p>
            <p style={{ margin: 0, fontSize: '0.9rem', lineHeight: '1.6' }}>
              ¿Mi servidor necesita estar siempre encendido? → EC2<br/>
              ¿Mi código se ejecuta ocasionalmente? → Lambda
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
                q: '¿Lambda es más barato que EC2?',
                a: 'Depende. Si tu servidor está siempre encendido, EC2 es más barato. Si casi nunca se ejecuta, Lambda.'
              },
              {
                q: '¿Puedo correr una app web en Lambda?',
                a: 'Solo si es sin estado y ejecuta rápido. APIs simples, sí. Apps complejas, probablemente no.'
              },
              {
                q: '¿Cuánto máximo puede durar una función Lambda?',
                a: '15 minutos. Si necesitas más, necesitas EC2.'
              },
              {
                q: '¿EC2 siempre cuesta dinero?',
                a: 'SÍ. Una instancia encendida cuesta dinero incluso si no hace nada. Lambda solo cuando se ejecuta.'
              },
              {
                q: '¿Puedo usar una base de datos con Lambda?',
                a: 'SÍ, pero debe ser en AWS (RDS, DynamoDB). No puedes instalar software custom.'
              },
              {
                q: '¿Lambda reemplazará a EC2?',
                a: 'NO. Son para casos diferentes. EC2 para siempre encendido, Lambda para puntual.'
              }
            ].map((item, idx) => (
              <div key={idx} style={{
                backgroundColor: idx % 2 === 0 ? '#fff9c4' : '#ffe0b2',
                border: `1px solid ${idx % 2 === 0 ? '#f39c12' : '#ff6b35'}`,
                borderRadius: '8px',
                padding: '1.5rem'
              }}>
                <p style={{ margin: '0 0 0.5rem 0', fontWeight: '700', fontSize: '0.95rem', color: idx % 2 === 0 ? '#f39c12' : '#ff6b35' }}>
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
                title: 'ADMINISTRACIÓN',
                ec2: 'TÚ administras todo (SO, software, updates)',
                lambda: 'AWS administra todo (tú solo subes código)',
                highlight: 'EC2 = Máquina completa. Lambda = Solo código.'
              },
              {
                num: '2️⃣',
                title: 'COSTO',
                ec2: 'Pago fijo por hora (siempre encendida)',
                lambda: 'Pago por ejecución (solo cuando se usa)',
                highlight: 'EC2 = Suscripción. Lambda = Por consumo.'
              },
              {
                num: '3️⃣',
                title: 'TIEMPO DE EJECUCIÓN',
                ec2: 'Ilimitado (días, meses)',
                lambda: 'Máximo 15 minutos',
                highlight: 'EC2 = Procesos largos. Lambda = Procesos cortos.'
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
                    <p style={{ margin: '0 0 0.3rem 0', fontWeight: '600', color: '#ff6b35' }}>EC2:</p>
                    <p style={{ margin: 0, fontSize: '0.95rem', color: '#333' }}>{item.ec2}</p>
                  </div>
                  <div>
                    <p style={{ margin: '0 0 0.3rem 0', fontWeight: '600', color: '#f39c12' }}>Lambda:</p>
                    <p style={{ margin: 0, fontSize: '0.95rem', color: '#333' }}>{item.lambda}</p>
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
              <strong>EC2</strong> es tu máquina virtual personal.<br/>
              <strong>Lambda</strong> es ejecutar código sin máquina.<br/>
              <strong>Ambos sirven para ejecutar código, pero de formas opuestas.</strong>
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
        <a href="/aws/servicios/ec2" style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#ff6b35',
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
          e.currentTarget.style.backgroundColor = '#e55a1d';
          e.currentTarget.style.transform = 'translateY(-2px)';
          e.currentTarget.style.boxShadow = '0 6px 20px rgba(255, 107, 53, 0.3)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = '#ff6b35';
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = 'none';
        }}>
          🖥️ Volver a EC2
        </a>

        <a href="/aws/servicios/lambda" style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#f39c12',
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
          e.currentTarget.style.backgroundColor = '#d68910';
          e.currentTarget.style.transform = 'translateY(-2px)';
          e.currentTarget.style.boxShadow = '0 6px 20px rgba(243, 156, 18, 0.3)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = '#f39c12';
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = 'none';
        }}>
          ⚡ Lambda
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
