import { useState } from 'react';
import { LessonTemplate, CodeBlock, Table, InfoBox } from '../components';
import { LessonNavigation } from '../components/LessonNavigation';
import { useBreadcrumb } from '../hooks/useBreadcrumb';
import { useLessonNavigation } from '../hooks/useLessonNavigation';

export function LessonAWSArquitectura() {
  const breadcrumbs = useBreadcrumb();
  const nav = useLessonNavigation();

  const sections = [
    {
      title: 'Arquitectura de Software',
      content: (
        <>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
            La <strong>arquitectura de software</strong> es la organización de alto nivel de un sistema: cómo se dividen sus componentes, cómo se comunican, qué responsabilidades tiene cada uno y qué decisiones estructurales se toman.
          </p>

          <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
            <strong>Idea clave:</strong> Sin arquitectura sólida, la nube no te salva. De hecho, la nube amplifica tanto lo bueno como lo malo del diseño. Una arquitectura deficiente en producción on-premise tendrá los mismos problemas en AWS, pero a mayor velocidad y escala.
          </p>

          <InfoBox type="tip" title="Mentalidad de arquitecto">
            El objetivo no es memorizar qué hace cada servicio, sino aprender a decidir cuál usar en cada situación y por qué. Una buena decisión cloud se argumenta, no se improvisa.
          </InfoBox>
        </>
      )
    },

    {
      title: 'Estilos Arquitectónicos',
      content: (
        <>
          <p style={{ fontSize: '1rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
            Existen diferentes estilos para organizar un sistema. Cada uno tiene ventajas y limitaciones:
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.5rem',
            margin: '2rem 0'
          }}>
            {[
              {
                title: 'Monolítico',
                icon: '📦',
                description: 'Toda la aplicación en un único bloque desplegable',
                ventajas: 'Simple de desarrollar al inicio',
                limitaciones: 'Difícil de escalar y mantener cuando crece',
                ejemplo: 'ERP monolítico, app web tradicional'
              },
              {
                title: 'Multicapa (N-Tier)',
                icon: '📚',
                description: 'Separación en capas: presentación, lógica, datos',
                ventajas: 'Separación clara de responsabilidades',
                limitaciones: 'El escalado es de toda la capa, no de una función',
                ejemplo: 'MVC web: UI → Controllers → Services → DB'
              },
              {
                title: 'SOA',
                icon: '🔗',
                description: 'Servicios que se comunican por un bus (ESB)',
                ventajas: 'Reutilización de servicios',
                limitaciones: 'El ESB puede convertirse en cuello de botella',
                ejemplo: 'Arquitectura empresarial de los 2000s'
              },
              {
                title: 'Microservicios',
                icon: '⚙️',
                description: 'Servicios pequeños, independientes, desplegables',
                ventajas: 'Escalado independiente, despliegue continuo',
                limitaciones: 'Complejidad operativa alta (red, tracing, consistencia)',
                ejemplo: 'Netflix, Amazon, plataformas SaaS'
              },
              {
                title: 'Serverless/Funcional',
                icon: '⚡',
                description: 'Funciones stateless invocadas por eventos',
                ventajas: 'Coste por uso, escalado automático total',
                limitaciones: 'Limitaciones de tiempo de ejecución, cold starts',
                ejemplo: 'Lambda, Firebase Functions, webhooks'
              },
              {
                title: 'Hexagonal',
                icon: '🔷',
                description: 'Aislamiento de lógica de negocio de dependencias',
                ventajas: 'Lógica independiente de tecnología',
                limitaciones: 'Requiere disciplina en el equipo',
                ejemplo: 'DDD (Domain-Driven Design)'
              }
            ].map((estilo, idx) => (
              <div key={idx} style={{
                backgroundColor: '#ffffff',
                border: '2px solid #e0e0e0',
                borderRadius: '12px',
                padding: '1.5rem',
                boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                  <span style={{ fontSize: '1.8rem' }}>{estilo.icon}</span>
                  <h4 style={{ margin: 0, fontSize: '1.1rem', color: '#333' }}>{estilo.title}</h4>
                </div>
                <p style={{ fontSize: '0.9rem', color: '#666', marginBottom: '1rem', lineHeight: '1.6' }}>
                  {estilo.description}
                </p>
                <div style={{ borderTop: '1px solid #eee', paddingTop: '1rem' }}>
                  <p style={{ fontSize: '0.85rem', marginBottom: '0.5rem' }}>
                    <strong style={{ color: '#27ae60' }}>✓</strong> {estilo.ventajas}
                  </p>
                  <p style={{ fontSize: '0.85rem', marginBottom: '0.5rem' }}>
                    <strong style={{ color: '#e74c3c' }}>⚠</strong> {estilo.limitaciones}
                  </p>
                  <p style={{ fontSize: '0.85rem', color: '#1976d2' }}>
                    💡 {estilo.ejemplo}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </>
      )
    },

    {
      title: 'Criterios de Calidad Arquitectónica',
      content: (
        <>
          <p style={{ fontSize: '1rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
            Una buena arquitectura no se mide solo por si "funciona". Se mide por estos atributos de calidad (requisitos no funcionales):
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '1.5rem',
            margin: '1.5rem 0'
          }}>
            {[
              {
                attr: 'Escalabilidad',
                pregunta: '¿Puede manejar más carga añadiendo recursos?',
                importancia: 'Alta',
                razon: 'El cloud permite escalar automáticamente si el diseño lo permite',
                cloud: 'Crítico'
              },
              {
                attr: 'Disponibilidad',
                pregunta: '¿Cuánto tiempo está operativo el sistema?',
                importancia: 'Alta',
                razon: 'Multi-AZ, redundancia y failover dependen del diseño',
                cloud: 'Crítico'
              },
              {
                attr: 'Mantenibilidad',
                pregunta: '¿Es fácil cambiar o corregir el sistema?',
                importancia: 'Media',
                razon: 'El cloud acelera despliegues, pero no arregla código complejo',
                cloud: 'Importante'
              },
              {
                attr: 'Seguridad',
                pregunta: '¿Protege adecuadamente datos y accesos?',
                importancia: 'Crítica',
                razon: 'En cloud, los errores de configuración son explotables globalmente',
                cloud: 'Crítico'
              },
              {
                attr: 'Rendimiento',
                pregunta: '¿Responde dentro de los tiempos esperados?',
                importancia: 'Alta',
                razon: 'El cloud ofrece herramientas, pero el diseño es la base',
                cloud: 'Importante'
              },
              {
                attr: 'Observabilidad',
                pregunta: '¿Podemos saber qué está pasando internamente?',
                importancia: 'Alta',
                razon: 'Sin logs y métricas, en sistemas distribuidos estás ciego',
                cloud: 'Crítico'
              }
            ].map((item, idx) => (
              <div key={idx} style={{
                backgroundColor: '#fafafa',
                border: '1px solid #ddd',
                borderRadius: '8px',
                padding: '1.2rem'
              }}>
                <h4 style={{ margin: '0 0 0.5rem', fontSize: '0.95rem', color: '#333' }}>
                  {item.attr}
                </h4>
                <p style={{ fontSize: '0.85rem', color: '#666', marginBottom: '0.5rem' }}>
                  <strong>Pregunta:</strong> {item.pregunta}
                </p>
                <p style={{ fontSize: '0.85rem', color: '#666', marginBottom: '0.5rem' }}>
                  <strong>Por qué:</strong> {item.razon}
                </p>
                <p style={{
                  fontSize: '0.85rem',
                  fontWeight: '600',
                  color: item.cloud === 'Crítico' ? '#e74c3c' : '#3498db',
                  marginBottom: 0
                }}>
                  En cloud: {item.cloud}
                </p>
              </div>
            ))}
          </div>

          <InfoBox type="warning" title="Amplificación en la nube">
            La nube amplifica tanto lo bueno como lo malo de tu arquitectura. Un sistema mal diseñado en producción on-premise tendrá los mismos problemas en AWS, pero a mayor velocidad y escala.
          </InfoBox>
        </>
      )
    },

    {
      title: 'Grandes Proveedores Cloud',
      content: (
        <>
          <p style={{ fontSize: '1rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
            El mercado cloud está dominado por tres grandes proveedores:
          </p>

          <Table
            headers={['Proveedor', 'Fortaleza Diferencial', 'Cuota Mercado', 'Mejor para...']}
            rows={[
              [
                '☁️ AWS (Amazon Web Services)',
                'Catálogo más amplio, mayor madurez, más regiones',
                '~31%',
                'Empresas que necesitan variedad máxima y madurez'
              ],
              [
                '🟦 Azure (Microsoft)',
                'Integración ecosistema Microsoft (AD, Office 365, .NET)',
                '~25%',
                'Empresas con ecosistema Microsoft, entornos híbridos'
              ],
              [
                '🔴 Google Cloud (GCP)',
                'IA/ML, Big Data (BigQuery), Kubernetes (lo creó Google)',
                '~11%',
                'Proyectos con fuerte componente de datos e IA'
              ],
              [
                '🟠 Oracle Cloud',
                'Bases de datos Oracle, migración de workloads Oracle',
                '~3%',
                'Empresas con fuerte dependencia de Oracle'
              ],
              [
                '🟣 IBM Cloud',
                'Integración con mainframes IBM, servicios banca/seguros',
                '~2%',
                'Sectores muy regulados con infraestructura IBM'
              ]
            ]}
          />

          <InfoBox type="warning" title="⚠️ Advertencia crítica">
            La elección de proveedor <strong>NO</strong> debe basarse en el más famoso ni en el más barato de entrada. Debe basarse en criterios objetivos aplicados a la necesidad real del proyecto.
          </InfoBox>
        </>
      )
    },

    {
      title: '10 Criterios de Comparación de Proveedores',
      content: (
        <>
          <p style={{ fontSize: '1rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
            Para comparar proveedores de forma objetiva, aplica estos 10 criterios. <strong>Define los criterios primero</strong> antes de mirar los catálogos de servicios. Evita dejarte llevar por la marca o la moda.
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '1.5rem',
            margin: '2rem 0'
          }}>
            {[
              {
                grupo: 'CRITERIOS TÉCNICOS',
                icon: '⚙️',
                color: '#3498db',
                criterios: [
                  {
                    num: '1',
                    titulo: 'Funcionalidad',
                    desc: '¿Tiene los servicios que necesito? ¿Están maduros?',
                    preguntas: ['¿Tiene el servicio de BD que necesito?', '¿Soporta Java nativamente?']
                  },
                  {
                    num: '2',
                    titulo: 'Rendimiento',
                    desc: '¿Qué latencia y throughput ofrecen?',
                    preguntas: ['¿Tienen región en Europa?', '¿Qué SLA garantizan?']
                  },
                  {
                    num: '3',
                    titulo: 'Escalabilidad',
                    desc: '¿Puedo crecer (y decrecer) sin fricciones?',
                    preguntas: ['¿Auto Scaling automático?', '¿Límites de cuota que frenen?']
                  },
                  {
                    num: '4',
                    titulo: 'Disponibilidad',
                    desc: '¿Cuántos nueves de uptime garantizan?',
                    preguntas: ['¿Múltiples zonas en mi región?', '¿Qué pasa si una falla?']
                  }
                ]
              },
              {
                grupo: 'CRITERIOS ECONÓMICOS',
                icon: '💰',
                color: '#27ae60',
                criterios: [
                  {
                    num: '5',
                    titulo: 'Modelo de Precios',
                    desc: '¿Es pay-as-you-go? ¿Hay compromisos mínimos?',
                    preguntas: ['¿Puedo empezar pequeño?', '¿Costes ocultos (datos)?']
                  },
                  {
                    num: '6',
                    titulo: 'Optimización de Costes',
                    desc: '¿Descuentos por compromiso o por volumen?',
                    preguntas: ['¿Reserved Instances?', '¿Capa gratuita?']
                  }
                ]
              },
              {
                grupo: 'CRITERIOS OPERATIVOS',
                icon: '🛠️',
                color: '#e74c3c',
                criterios: [
                  {
                    num: '7',
                    titulo: 'Facilidad de Uso',
                    desc: '¿Curva de aprendizaje? ¿Consola usable?',
                    preguntas: ['¿Buena documentación en español?', '¿CLI y SDK para Java?']
                  },
                  {
                    num: '8',
                    titulo: 'Soporte',
                    desc: '¿Niveles de soporte? ¿Tiempos de respuesta?',
                    preguntas: ['¿Soporte básico gratuito?', '¿Coste de soporte empresarial?']
                  },
                  {
                    num: '9',
                    titulo: 'Ecosistema y Comunidad',
                    desc: '¿Hay profesionales, formación, herramientas?',
                    preguntas: ['¿Fácil contratar perfiles?', '¿Comunidad activa?']
                  }
                ]
              },
              {
                grupo: 'CRITERIOS DE SEGURIDAD',
                icon: '🔒',
                color: '#9b59b6',
                criterios: [
                  {
                    num: '10',
                    titulo: 'Seguridad y Cumplimiento',
                    desc: '¿Cumple normativas que aplican a mi organización?',
                    preguntas: ['¿Certificación RGPD, ISO 27001?', '¿Los datos quedan en Europa?']
                  }
                ]
              }
            ].map((grupo, idx) => (
              <div key={idx}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  marginBottom: '1rem',
                  paddingBottom: '0.5rem',
                  borderBottom: `3px solid ${grupo.color}`
                }}>
                  <span style={{ fontSize: '1.5rem' }}>{grupo.icon}</span>
                  <h4 style={{ margin: 0, fontSize: '0.95rem', color: grupo.color }}>
                    {grupo.grupo}
                  </h4>
                </div>
                <div style={{ display: 'grid', gap: '1rem' }}>
                  {grupo.criterios.map((crit, cidx) => (
                    <div key={cidx} style={{
                      backgroundColor: '#fafafa',
                      border: `1px solid ${grupo.color}30`,
                      borderRadius: '6px',
                      padding: '0.8rem'
                    }}>
                      <div style={{
                        display: 'flex',
                        gap: '0.5rem',
                        alignItems: 'flex-start',
                        marginBottom: '0.3rem'
                      }}>
                        <span style={{
                          fontSize: '0.9rem',
                          fontWeight: '700',
                          color: grupo.color,
                          minWidth: '20px'
                        }}>
                          {crit.num}.
                        </span>
                        <div>
                          <h5 style={{ margin: '0 0 0.2rem', fontSize: '0.9rem' }}>
                            {crit.titulo}
                          </h5>
                          <p style={{ fontSize: '0.8rem', color: '#666', marginBottom: '0.3rem' }}>
                            {crit.desc}
                          </p>
                          <ul style={{
                            fontSize: '0.75rem',
                            color: '#999',
                            margin: 0,
                            paddingLeft: '1rem'
                          }}>
                            {crit.preguntas.map((p, pidx) => (
                              <li key={pidx}>{p}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </>
      )
    },

    {
      title: 'Fortalezas del Cloud',
      content: (
        <>
          <p style={{ fontSize: '1rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
            El cloud tiene ventajas reales y probadas. Conocerlas ayuda a saber cuándo y por qué migrar:
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.5rem',
            margin: '1.5rem 0'
          }}>
            {[
              {
                fortaleza: 'Elasticidad y Escalabilidad',
                desc: 'Ajusta capacidad según demanda, automáticamente',
                ejemplo: 'Picos de carga → escala de 2 a 10 servidores en minutos'
              },
              {
                fortaleza: 'Velocidad de Aprovisionamiento',
                desc: 'Un servidor que tardaba semanas, ahora en minutos',
                ejemplo: 'Nuevo entorno de pruebas: 10 minutos vs semanas'
              },
              {
                fortaleza: 'Reducción de CapEx',
                desc: 'Sin inversión inicial en hardware',
                ejemplo: 'No comprar servidores, pago variable y predecible'
              },
              {
                fortaleza: 'Alta Disponibilidad Accesible',
                desc: 'Herramientas antes solo para grandes empresas',
                ejemplo: 'RDS Multi-AZ con failover &lt;2 min'
              },
              {
                fortaleza: 'Actualización Continua',
                desc: 'Cientos de funcionalidades nuevas cada año',
                ejemplo: 'Acceso a IA/ML, versiones DB nuevas automáticamente'
              },
              {
                fortaleza: 'Alcance Global',
                desc: 'Desplegar en cualquier región del mundo en minutos',
                ejemplo: 'Expansión global sin reconstruir infraestructura'
              }
            ].map((item, idx) => (
              <div key={idx} style={{
                backgroundColor: '#e8f5e9',
                border: '2px solid #4caf50',
                borderRadius: '8px',
                padding: '1.2rem'
              }}>
                <h4 style={{ margin: '0 0 0.5rem', color: '#2e7d32', fontSize: '0.95rem' }}>
                  {item.fortaleza}
                </h4>
                <p style={{ fontSize: '0.85rem', color: '#555', marginBottom: '0.5rem' }}>
                  {item.desc}
                </p>
                <p style={{ fontSize: '0.8rem', color: '#1976d2', fontStyle: 'italic', marginBottom: 0 }}>
                  💡 {item.ejemplo}
                </p>
              </div>
            ))}
          </div>
        </>
      )
    },

    {
      title: 'Debilidades del Cloud',
      content: (
        <>
          <p style={{ fontSize: '1rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
            El cloud también tiene limitaciones reales. Ignorarlas lleva a decisiones mal informadas:
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '1.5rem',
            margin: '1.5rem 0'
          }}>
            {[
              {
                debilidad: '🌐 Dependencia de Conectividad',
                problema: 'Sin internet, no hay acceso',
                mitigacion: 'Redundancia de conexión, caché local, modo offline'
              },
              {
                debilidad: '💸 Costes Impredecibles',
                problema: 'Pay-as-you-go puede generar facturas inesperadas',
                mitigacion: 'AWS Budgets + alertas, etiquetado de recursos'
              },
              {
                debilidad: '🔒 Vendor Lock-in',
                problema: 'Servicios propietarios dificultan cambiar de proveedor',
                mitigacion: 'Capas de abstracción, estándares abiertos'
              },
              {
                debilidad: '📚 Curva de Aprendizaje',
                problema: '200+ servicios pueden ser abrumadores',
                mitigacion: 'Formación estructurada, empezar con servicios core'
              },
              {
                debilidad: '🔐 Seguridad: Responsabilidad del Cliente',
                problema: 'Errores de configuración son responsabilidad tuya',
                mitigacion: 'Mínimo privilegio, revisiones periódicas'
              },
              {
                debilidad: '⏱️ Latencia para Sistemas Ultra-Críticos',
                problema: 'Red agrega latencia inaceptable para tiempo real',
                mitigacion: 'Edge computing, Local Zones, evaluar si realmente lo necesitas'
              }
            ].map((item, idx) => (
              <div key={idx} style={{
                backgroundColor: '#ffebee',
                border: '2px solid #f44336',
                borderRadius: '8px',
                padding: '1.2rem'
              }}>
                <h4 style={{ margin: '0 0 0.5rem', color: '#c62828', fontSize: '0.95rem' }}>
                  {item.debilidad}
                </h4>
                <p style={{ fontSize: '0.85rem', color: '#555', marginBottom: '0.5rem' }}>
                  <strong>Problema:</strong> {item.problema}
                </p>
                <p style={{ fontSize: '0.85rem', color: '#1976d2', marginBottom: 0 }}>
                  <strong>Mitigación:</strong> {item.mitigacion}
                </p>
              </div>
            ))}
          </div>
        </>
      )
    },

    {
      title: 'Errores Comunes al Adoptar Cloud',
      content: (
        <>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '2rem',
            margin: '1.5rem 0'
          }}>
            {[
              {
                error: '❌ Error 1: Decidir por Intuición',
                problema: 'Elegir AWS porque "todos lo usan" sin analizar si encaja',
                correccion: 'Definir criterios ANTES de mirar catálogos'
              },
              {
                error: '❌ Error 2: Comparar solo Precios de Lista',
                problema: 'No incluir almacenamiento, datos, licencias, soporte',
                correccion: 'Usar AWS Pricing Calculator para coste total real'
              },
              {
                error: '❌ Error 3: Ignorar Seguridad y Cumplimiento',
                problema: 'Proveedor barato pero sin RGPD o región correcta',
                correccion: 'Cumplimiento no es opcional, verificar región y certificaciones'
              },
              {
                error: '❌ Error 4: Lift-and-Shift sin Rediseño',
                problema: 'Mover monolito on-premise a EC2 sin cambios = desperdicio',
                correccion: 'Modernizar arquitectura antes o durante migración'
              }
            ].map((item, idx) => (
              <div key={idx} style={{
                backgroundColor: '#fff3e0',
                border: '2px solid #ff9800',
                borderRadius: '8px',
                padding: '1.2rem'
              }}>
                <h4 style={{ margin: '0 0 0.5rem', color: '#e65100', fontSize: '0.95rem' }}>
                  {item.error}
                </h4>
                <p style={{ fontSize: '0.85rem', color: '#555', marginBottom: '0.5rem' }}>
                  <strong>Problema:</strong> {item.problema}
                </p>
                <p style={{ fontSize: '0.85rem', color: '#1976d2' }}>
                  <strong>Corrección:</strong> {item.correccion}
                </p>
              </div>
            ))}
          </div>

          <div style={{
            backgroundColor: '#e3f2fd',
            border: '2px solid #1976d2',
            borderRadius: '8px',
            padding: '1.5rem',
            marginTop: '2rem'
          }}>
            <h4 style={{ color: '#0d47a1', marginTop: 0 }}>La Frase Más Importante</h4>
            <p style={{ fontSize: '1.1rem', fontStyle: 'italic', marginBottom: 0 }}>
              "Un profesional cloud no dice <strong>'todo al cloud'</strong>. Dice <strong>'esto va al cloud porque sus fortalezas encajan y sus debilidades las hemos controlado'</strong>."
            </p>
          </div>
        </>
      )
    },

    {
      title: 'Aplicación al Laboratorio Guttman',
      content: (
        <>
          <p style={{ fontSize: '1rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
            El Laboratorio Guttman necesita modernizarse. Aplicando los criterios de comparación:
          </p>

          <Table
            headers={['Criterio', 'AWS', 'Azure', 'GCP', 'Decisión']}
            rows={[
              ['Funcionalidad necesaria', '✅ Completa', '✅ Completa', '✅ Completa', 'Los tres cumplen'],
              ['Región en Europa (RGPD)', '✅ eu-west-1', '✅ West Europe', '✅ europe-west1', 'Los tres cumplen'],
              ['SDK Java + Spring Boot', '✅ Mejor integración', '⚠️ Buena', '⚠️ Buena', 'AWS ventaja'],
              ['Documentación y comunidad', '✅ Más extensa', '⚠️ Muy buena', '⚠️ Buena', 'AWS ventaja'],
              ['Curva de aprendizaje', '⚠️ Elevada', '⚠️ Elevada', '⚠️ Media', 'Similares'],
              ['Vendor lock-in', '⚠️ Alto (servicios propios)', '⚠️ Alto', '⚠️ Medio', 'Riesgo gestionable'],
              ['Coste estimado', '💰 Competitivo', '💰 Competitivo', '💰 Competitivo', 'Similares']
            ]}
          />

          <div style={{
            backgroundColor: '#e8f5e9',
            border: '2px solid #4caf50',
            borderRadius: '8px',
            padding: '1.5rem',
            marginTop: '2rem'
          }}>
            <h4 style={{ color: '#2e7d32', marginTop: 0 }}>Conclusión para Laboratorio Guttman</h4>
            <p style={{ fontSize: '0.95rem', lineHeight: '1.8', marginBottom: 0 }}>
              <strong>AWS es la elección más adecuada</strong> porque:
            </p>
            <ul style={{ fontSize: '0.95rem', lineHeight: '1.8', marginTop: '0.5rem', marginBottom: 0 }}>
              <li>Madurez: 18 años en el mercado, 200+ servicios probados en producción</li>
              <li>Java: Mejor integración con Spring Boot, SDK nativo</li>
              <li>Documentación: La más completa del sector, formación abundante</li>
              <li>Región europea: Cumple RGPD, infraestructura en Irlanda</li>
              <li>Escalabilidad: Servicios gestionados (RDS, Lambda, DynamoDB) reducen carga operativa</li>
            </ul>
          </div>
        </>
      )
    }
  ];

  return (
    <LessonTemplate
      title="Arquitectura de Software y Comparación de Proveedores Cloud"
      breadcrumbs={breadcrumbs}
      sections={sections}
    >
      <LessonNavigation current={nav.current} items={nav.items} />
    </LessonTemplate>
  );
}
