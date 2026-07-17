import { useState } from 'react';
import { LessonTemplate } from '../components';
import { LessonNavigation } from '../components/LessonNavigation';
import { useBreadcrumb } from '../hooks/useBreadcrumb';
import { useLessonNavigation } from '../hooks/useLessonNavigation';

export function ComparisonRDSVsDynamoDB() {
  const breadcrumbs = useBreadcrumb();
  const nav = useLessonNavigation();

  const sections = [
    {
      title: '¿Por Qué Se Confunden RDS y DynamoDB?',
      content: (
        <>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
            Es muy común confundir <strong>RDS y DynamoDB</strong> porque ambas son bases de datos gestionadas por AWS. Sin embargo, son **fundamentalmente diferentes** en estructura, filosofía y casos de uso. La confusión viene de que ambas almacenan datos, pero de formas completamente opuestas.
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
              RDS es <strong>SQL relacional</strong> (tablas, joins, ACID) mientras que DynamoDB es <strong>NoSQL de documentos</strong> (clave-valor, flexible, eventual consistency). Son dos modelos de datos opuestos.
            </p>
          </div>

          <p style={{ fontSize: '1rem', lineHeight: '1.8', color: '#555' }}>
            En esta página, desglosamos cada diferencia para que entiendas cuándo elegir cada una.
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
                  <th style={{ padding: '1rem', textAlign: 'left', fontWeight: '700', width: '40%', color: '#0066cc' }}>Amazon RDS</th>
                  <th style={{ padding: '1rem', textAlign: 'left', fontWeight: '700', width: '40%', color: '#d32f2f' }}>AWS DynamoDB</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    aspect: '¿Qué es?',
                    rds: 'Base de datos SQL relacional (PostgreSQL, MySQL, Oracle, SQL Server)',
                    dynamodb: 'Base de datos NoSQL de clave-valor (documentos JSON)'
                  },
                  {
                    aspect: 'Modelo de datos',
                    rds: 'Tablas con filas, columnas, relaciones y esquema fijo',
                    dynamodb: 'Items con atributos, flexible, sin esquema predefinido'
                  },
                  {
                    aspect: 'Consultas',
                    rds: 'SQL (SELECT, JOIN, WHERE, GROUP BY)',
                    dynamodb: 'Query/Scan (clave primaria, índices locales/globales)'
                  },
                  {
                    aspect: 'Escalabilidad',
                    rds: 'Vertical (aumentas CPU/RAM del servidor)',
                    dynamodb: 'Horizontal (escalado automático infinito)'
                  },
                  {
                    aspect: 'Rendimiento',
                    rds: 'Predecible, lento con muchos datos',
                    dynamodb: 'Ultra rápido (ms), consistente'
                  },
                  {
                    aspect: 'Transacciones',
                    rds: 'ACID completo (Atomicity, Consistency, Isolation, Durability)',
                    dynamodb: 'Eventual consistency (aunque DynamoDB 2.0 tiene transacciones ACID)'
                  },
                  {
                    aspect: 'Relaciones',
                    rds: 'Foreign keys, joins complejos, integridad referencial',
                    dynamodb: 'No hay relaciones, desnormalización'
                  },
                  {
                    aspect: 'Costo',
                    rds: 'Pago por capacidad provisionada (incluso sin usar)',
                    dynamodb: 'Pago por lectura/escritura (on-demand más caro, provisioned más barato si predecible)'
                  },
                  {
                    aspect: 'Backup',
                    rds: 'Automático, puntos de restauración',
                    dynamodb: 'Backup bajo demanda, Point-in-time recovery'
                  },
                  {
                    aspect: 'Mantenimiento',
                    rds: 'AWS lo gestiona, pero configuras capacidad',
                    dynamodb: 'Totalmente serverless'
                  },
                  {
                    aspect: 'Mejor para',
                    rds: 'Datos estructurados, relaciones complejas, análisis',
                    dynamodb: 'Datos flexibles, acceso rápido, escala global'
                  }
                ].map((row, idx) => (
                  <tr key={idx} style={{
                    borderBottom: '1px solid #ddd',
                    backgroundColor: idx % 2 === 0 ? '#fafafa' : '#fff'
                  }}>
                    <td style={{ padding: '1rem', fontWeight: '600', color: '#333' }}>{row.aspect}</td>
                    <td style={{ padding: '1rem', color: '#0066cc' }}>{row.rds}</td>
                    <td style={{ padding: '1rem', color: '#d32f2f' }}>{row.dynamodb}</td>
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
              RDS = **Datos estructurados con relaciones** (usuarios, pedidos, productos)<br/>
              DynamoDB = **Datos flexibles sin relaciones** (sesiones, logs, perfiles)
            </p>
          </div>
        </>
      )
    },

    {
      title: 'Desglose en Profundidad: RDS vs DynamoDB',
      content: (
        <>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '2rem',
            marginBottom: '2rem'
          }}>
            {/* RDS en Profundidad */}
            <div style={{
              backgroundColor: '#e3f2fd',
              border: '3px solid #0066cc',
              borderRadius: '8px',
              padding: '2rem'
            }}>
              <h3 style={{ margin: '0 0 1rem 0', color: '#0066cc', fontSize: '1.3rem' }}>
                🗄️ Amazon RDS en Profundidad
              </h3>

              <div style={{ marginBottom: '1.5rem' }}>
                <h4 style={{ margin: '0 0 0.5rem 0', color: '#0066cc', fontSize: '1rem' }}>¿Qué es en Realidad?</h4>
                <p style={{ margin: 0, fontSize: '0.9rem', lineHeight: '1.6', color: '#333' }}>
                  RDS es una <strong>base de datos relacional administrada</strong>. Usa SQL y almacena datos en tablas con filas y columnas. AWS administra backups, parches, replicación. Tú solo consultas.
                </p>
              </div>

              <div style={{ marginBottom: '1.5rem' }}>
                <h4 style={{ margin: '0 0 0.5rem 0', color: '#0066cc', fontSize: '1rem' }}>Ejemplos de Motores</h4>
                <ul style={{ margin: 0, paddingLeft: '1.5rem', fontSize: '0.9rem', lineHeight: '1.8', color: '#333' }}>
                  <li><strong>PostgreSQL</strong> - Open source, poderoso</li>
                  <li><strong>MySQL</strong> - Open source, simple</li>
                  <li><strong>Oracle Database</strong> - Empresarial, costoso</li>
                  <li><strong>SQL Server</strong> - Microsoft, integración Windows</li>
                  <li><strong>MariaDB</strong> - Fork de MySQL</li>
                </ul>
              </div>

              <div style={{ marginBottom: '1.5rem' }}>
                <h4 style={{ margin: '0 0 0.5rem 0', color: '#0066cc', fontSize: '1rem' }}>Estructura de Datos</h4>
                <div style={{
                  backgroundColor: '#fff',
                  border: '1px solid #0066cc',
                  borderRadius: '4px',
                  padding: '1rem',
                  fontFamily: 'monospace',
                  fontSize: '0.85rem',
                  color: '#333'
                }}>
                  <div>Tabla: usuarios</div>
                  <div style={{ marginLeft: '1.5rem' }}>
                    id | nombre | email | edad<br/>
                    1  | Juan   | juan@email.com | 25<br/>
                    2  | María  | maria@email.com | 30
                  </div>
                </div>
              </div>

              <div style={{ marginBottom: '1.5rem' }}>
                <h4 style={{ margin: '0 0 0.5rem 0', color: '#0066cc', fontSize: '1rem' }}>Fortalezas</h4>
                <ul style={{ margin: 0, paddingLeft: '1.5rem', fontSize: '0.9rem', lineHeight: '1.8' }}>
                  <li>Consultas complejas con SQL</li>
                  <li>Joins entre tablas</li>
                  <li>ACID (transacciones confiables)</li>
                  <li>Integridad referencial</li>
                  <li>Análisis y reportes</li>
                </ul>
              </div>

              <div>
                <h4 style={{ margin: '0 0 0.5rem 0', color: '#0066cc', fontSize: '1rem' }}>Debilidades</h4>
                <ul style={{ margin: 0, paddingLeft: '1.5rem', fontSize: '0.9rem', lineHeight: '1.8' }}>
                  <li>Escalado horizontal limitado</li>
                  <li>Más lento con millones de filas</li>
                  <li>Esquema rígido</li>
                  <li>Caro a nivel global</li>
                </ul>
              </div>
            </div>

            {/* DynamoDB en Profundidad */}
            <div style={{
              backgroundColor: '#ffebee',
              border: '3px solid #d32f2f',
              borderRadius: '8px',
              padding: '2rem'
            }}>
              <h3 style={{ margin: '0 0 1rem 0', color: '#d32f2f', fontSize: '1.3rem' }}>
                ⚡ AWS DynamoDB en Profundidad
              </h3>

              <div style={{ marginBottom: '1.5rem' }}>
                <h4 style={{ margin: '0 0 0.5rem 0', color: '#d32f2f', fontSize: '1rem' }}>¿Qué es en Realidad?</h4>
                <p style={{ margin: 0, fontSize: '0.9rem', lineHeight: '1.6', color: '#333' }}>
                  DynamoDB es una <strong>base de datos NoSQL serverless</strong>. Almacena documentos JSON flexibles con clave primaria. Sin esquema, sin administración, escala automáticamente.
                </p>
              </div>

              <div style={{ marginBottom: '1.5rem' }}>
                <h4 style={{ margin: '0 0 0.5rem 0', color: '#d32f2f', fontSize: '1rem' }}>Modelo de Consistencia</h4>
                <ul style={{ margin: 0, paddingLeft: '1.5rem', fontSize: '0.9rem', lineHeight: '1.8', color: '#333' }}>
                  <li><strong>Eventual Consistency</strong> - Rápido pero puede haber un retraso</li>
                  <li><strong>Strong Consistency</strong> - Garantiza datos actualizados (más lento)</li>
                  <li>Transacciones ACID (desde 2019)</li>
                </ul>
              </div>

              <div style={{ marginBottom: '1.5rem' }}>
                <h4 style={{ margin: '0 0 0.5rem 0', color: '#d32f2f', fontSize: '1rem' }}>Estructura de Datos</h4>
                <div style={{
                  backgroundColor: '#fff',
                  border: '1px solid #d32f2f',
                  borderRadius: '4px',
                  padding: '1rem',
                  fontFamily: 'monospace',
                  fontSize: '0.85rem',
                  color: '#333'
                }}>
                  <div style={{ color: '#666' }}>// Item en tabla 'usuarios'</div>
                  <div>{'{'}</div>
                  <div style={{ marginLeft: '1.5rem' }}>id: "user-123",</div>
                  <div style={{ marginLeft: '1.5rem' }}>nombre: "Juan",</div>
                  <div style={{ marginLeft: '1.5rem' }}>edad: 25,</div>
                  <div style={{ marginLeft: '1.5rem' }}>tags: ["dev", "python"]</div>
                  <div>{'}'}</div>
                </div>
              </div>

              <div style={{ marginBottom: '1.5rem' }}>
                <h4 style={{ margin: '0 0 0.5rem 0', color: '#d32f2f', fontSize: '1rem' }}>Fortalezas</h4>
                <ul style={{ margin: 0, paddingLeft: '1.5rem', fontSize: '0.9rem', lineHeight: '1.8' }}>
                  <li>Escalado horizontal ilimitado</li>
                  <li>Millisecond latency</li>
                  <li>Flexible (sin esquema)</li>
                  <li>Serverless</li>
                  <li>Global tables</li>
                </ul>
              </div>

              <div>
                <h4 style={{ margin: '0 0 0.5rem 0', color: '#d32f2f', fontSize: '1rem' }}>Debilidades</h4>
                <ul style={{ margin: 0, paddingLeft: '1.5rem', fontSize: '0.9rem', lineHeight: '1.8' }}>
                  <li>No soporta joins</li>
                  <li>Eventual consistency por defecto</li>
                  <li>Desnormalización necesaria</li>
                  <li>Query limits (1MB máximo)</li>
                </ul>
              </div>
            </div>
          </div>
        </>
      )
    },

    {
      title: 'Ejemplo Práctico Real: Sistema de E-commerce',
      content: (
        <>
          <p style={{ fontSize: '1rem', lineHeight: '1.8', marginBottom: '2rem', color: '#555' }}>
            Imagina que construyes un <strong>sistema de e-commerce</strong>. Veamos qué datos van donde.
          </p>

          <div style={{
            backgroundColor: '#f5f5f5',
            border: '2px solid #666',
            borderRadius: '8px',
            padding: '2rem',
            marginBottom: '2rem'
          }}>
            <h4 style={{ margin: '0 0 1.5rem 0', fontSize: '1.1rem', fontWeight: '700' }}>
              Datos que van en RDS:
            </h4>

            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '1.5rem'
            }}>
              {[
                {
                  title: 'Usuarios',
                  content: 'ID, nombre, email, contraseña, dirección (relaciones complejas)'
                },
                {
                  title: 'Productos',
                  content: 'ID, nombre, precio, categoría, stock (datos estructurados)'
                },
                {
                  title: 'Pedidos',
                  content: 'ID, usuario_id, fecha, estado (joins con usuarios y productos)'
                },
                {
                  title: 'Líneas de Pedido',
                  content: 'Pedido_id, producto_id, cantidad, precio (integridad referencial)'
                }
              ].map((item, idx) => (
                <div key={idx} style={{
                  backgroundColor: '#e3f2fd',
                  border: '1px solid #0066cc',
                  borderRadius: '4px',
                  padding: '1rem'
                }}>
                  <p style={{ margin: '0 0 0.5rem 0', fontWeight: '600', color: '#0066cc' }}>
                    {item.title}
                  </p>
                  <p style={{ margin: 0, fontSize: '0.85rem', color: '#333' }}>
                    {item.content}
                  </p>
                </div>
              ))}
            </div>

            <p style={{ margin: '1.5rem 0 0 0', fontSize: '0.9rem', fontStyle: 'italic', color: '#666' }}>
              ✓ Requieren relaciones complejas, integridad referencial, transacciones ACID
            </p>
          </div>

          <div style={{
            backgroundColor: '#f5f5f5',
            border: '2px solid #666',
            borderRadius: '8px',
            padding: '2rem'
          }}>
            <h4 style={{ margin: '0 0 1.5rem 0', fontSize: '1.1rem', fontWeight: '700' }}>
              Datos que van en DynamoDB:
            </h4>

            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '1.5rem'
            }}>
              {[
                {
                  title: 'Sesiones de Usuario',
                  content: 'Carrito de compras, preferencias, historial de búsqueda (temporal, flexible)'
                },
                {
                  title: 'Notificaciones',
                  content: 'Mensajes, alertas, eventos (acceso rápido, sin relaciones)'
                },
                {
                  title: 'Logs de Actividad',
                  content: 'Clicks, vistas, búsquedas (alto volumen, lectura rápida)'
                },
                {
                  title: 'Caché de Datos',
                  content: 'Resultados de búsqueda, recomendaciones (datos temporales)'
                }
              ].map((item, idx) => (
                <div key={idx} style={{
                  backgroundColor: '#ffebee',
                  border: '1px solid #d32f2f',
                  borderRadius: '4px',
                  padding: '1rem'
                }}>
                  <p style={{ margin: '0 0 0.5rem 0', fontWeight: '600', color: '#d32f2f' }}>
                    {item.title}
                  </p>
                  <p style={{ margin: 0, fontSize: '0.85rem', color: '#333' }}>
                    {item.content}
                  </p>
                </div>
              ))}
            </div>

            <p style={{ margin: '1.5rem 0 0 0', fontSize: '0.9rem', fontStyle: 'italic', color: '#666' }}>
              ✓ Acceso rápido, datos flexibles, escalabilidad masiva, sin relaciones
            </p>
          </div>
        </>
      )
    },

    {
      title: 'Matriz de Decisión: ¿Cuándo Usar Cada Una?',
      content: (
        <>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '2rem',
            marginBottom: '2rem'
          }}>
            {/* RDS */}
            <div style={{
              backgroundColor: '#e3f2fd',
              border: '2px solid #0066cc',
              borderRadius: '8px',
              padding: '1.5rem'
            }}>
              <h3 style={{ margin: '0 0 1rem 0', color: '#0066cc', fontSize: '1.1rem' }}>
                ✅ Usa RDS cuando...
              </h3>
              <ul style={{ margin: 0, paddingLeft: '1.5rem', fontSize: '0.9rem', lineHeight: '1.8', color: '#333' }}>
                <li>Datos estructurados con relaciones</li>
                <li>Necesitas transacciones ACID</li>
                <li>Consultas SQL complejas</li>
                <li>Integridad referencial</li>
                <li>Análisis y reportes</li>
                <li>Actualizaciones frecuentes</li>
                <li>Volumen de datos moderado</li>
              </ul>
            </div>

            {/* DynamoDB */}
            <div style={{
              backgroundColor: '#ffebee',
              border: '2px solid #d32f2f',
              borderRadius: '8px',
              padding: '1.5rem'
            }}>
              <h3 style={{ margin: '0 0 1rem 0', color: '#d32f2f', fontSize: '1.1rem' }}>
                ✅ Usa DynamoDB cuando...
              </h3>
              <ul style={{ margin: 0, paddingLeft: '1.5rem', fontSize: '0.9rem', lineHeight: '1.8', color: '#333' }}>
                <li>Datos flexibles y sin relaciones</li>
                <li>Escalabilidad masiva</li>
                <li>Acceso rápido por clave</li>
                <li>Alto volumen de lecturas/escrituras</li>
                <li>Aplicaciones globales</li>
                <li>Sin necesidad de SQL</li>
                <li>Pago por uso (on-demand)</li>
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
              ¿Necesito relaciones complejas entre datos? → RDS<br/>
              ¿Necesito acceso ultra rápido sin relaciones? → DynamoDB
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
                q: '¿DynamoDB es "más moderna" que RDS?',
                a: 'NO. Son diferentes. RDS es mejor para datos relacionales, DynamoDB para datos escalables sin relaciones.'
              },
              {
                q: '¿Puedo hacer joins en DynamoDB?',
                a: 'NO. DynamoDB no soporta joins. Debes desnormalizar o hacer consultas desde la aplicación.'
              },
              {
                q: '¿RDS escala infinitamente?',
                a: 'NO. RDS es vertical (más CPU/RAM). DynamoDB es horizontal (infinito).'
              },
              {
                q: '¿DynamoDB es más barato?',
                a: 'Depende. On-demand es caro. Provisioned es barato si usas consistentemente.'
              },
              {
                q: '¿Puedo cambiar de RDS a DynamoDB después?',
                a: 'Sí, pero es trabajo. Tienes que desnormalizar datos y cambiar la lógica de consultas.'
              },
              {
                q: '¿Qué pasa si RDS falla?',
                a: 'AWS hace failover automático a una réplica. Tiene alta disponibilidad.'
              }
            ].map((item, idx) => (
              <div key={idx} style={{
                backgroundColor: idx % 2 === 0 ? '#e3f2fd' : '#ffebee',
                border: `1px solid ${idx % 2 === 0 ? '#0066cc' : '#d32f2f'}`,
                borderRadius: '8px',
                padding: '1.5rem'
              }}>
                <p style={{ margin: '0 0 0.5rem 0', fontWeight: '700', fontSize: '0.95rem', color: idx % 2 === 0 ? '#0066cc' : '#d32f2f' }}>
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
                title: 'MODELO DE DATOS',
                rds: 'SQL relacional (tablas, columnas, filas)',
                dynamodb: 'NoSQL clave-valor (documentos JSON)',
                highlight: 'RDS = Estructurado. DynamoDB = Flexible.'
              },
              {
                num: '2️⃣',
                title: 'ESCALABILIDAD',
                rds: 'Vertical (aumentas CPU/RAM del servidor)',
                dynamodb: 'Horizontal (escalado automático infinito)',
                highlight: 'RDS = Limitado. DynamoDB = Ilimitado.'
              },
              {
                num: '3️⃣',
                title: 'RELACIONES',
                rds: 'Soporta joins y relaciones complejas',
                dynamodb: 'NO soporta joins, requiere desnormalización',
                highlight: 'RDS = Relaciones. DynamoDB = Sin relaciones.'
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
                    <p style={{ margin: '0 0 0.3rem 0', fontWeight: '600', color: '#0066cc' }}>RDS:</p>
                    <p style={{ margin: 0, fontSize: '0.95rem', color: '#333' }}>{item.rds}</p>
                  </div>
                  <div>
                    <p style={{ margin: '0 0 0.3rem 0', fontWeight: '600', color: '#d32f2f' }}>DynamoDB:</p>
                    <p style={{ margin: 0, fontSize: '0.95rem', color: '#333' }}>{item.dynamodb}</p>
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
              <strong>RDS</strong> es para datos relacionales con SQL.<br/>
              <strong>DynamoDB</strong> es para datos flexibles a escala masiva.<br/>
              <strong>Ambas almacenan datos, pero de formas fundamentalmente diferentes.</strong>
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
        <a href="/aws/servicios/rds" style={{
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
          🗄️ Volver a RDS
        </a>

        <a href="/aws/servicios/dynamodb" style={{
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
          ⚡ DynamoDB
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
