import { useState } from 'react';
import { LessonTemplate } from '../components';
import { LessonNavigation } from '../components/LessonNavigation';
import { useBreadcrumb } from '../hooks/useBreadcrumb';
import { useLessonNavigation } from '../hooks/useLessonNavigation';

export function LessonAWSConceptos() {
  const breadcrumbs = useBreadcrumb();
  const nav = useLessonNavigation();

  const sections = [
    {
      title: 'Introducción a la Computación en la Nube',
      content: (
        <>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
            La <strong>computación en la nube (cloud computing)</strong> representa un cambio fundamental en cómo accedemos y utilizamos recursos informáticos. En lugar de poseer y mantener servidores físicos en tus oficinas, accedes a recursos de computación a través de Internet, pagando solo por lo que utilizas. Es como cambiar de tener tu propia central eléctrica a conectarte a la red eléctrica pública.
          </p>

          <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
            La nube ofrece <strong>flexibilidad, escalabilidad y ahorros de costos</strong> sin precedentes. Puedes escalar recursos en minutos, acceder desde cualquier lugar, y solo pagar por lo que usas. Las empresas pueden enfocarse en su negocio en lugar de mantener infraestructura.
          </p>
        </>
      )
    },

    {
      title: 'Modelos de Servicios en la Nube',
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
                title: 'Infrastructure as a Service (IaaS)',
                icon: '🏗️',
                color: '#3498db',
                description: 'Acceso a infraestructura de computación virtualizada. Tú manejas: aplicaciones, datos, runtime, middleware, SO. AWS proporciona: virtualización, servidores, almacenamiento, red.',
                examples: ['EC2 (servidores virtuales)', 'VPC (redes privadas)', 'EBS (almacenamiento)']
              },
              {
                title: 'Platform as a Service (PaaS)',
                icon: '⚙️',
                color: '#9b59b6',
                description: 'Plataforma completa para desarrollar y desplegar aplicaciones. AWS gestiona la infraestructura, tú solo te enfocas en tu código.',
                examples: ['Elastic Beanstalk', 'AWS App Runner', 'Amazon RDS']
              },
              {
                title: 'Software as a Service (SaaS)',
                icon: '☁️',
                color: '#2ecc71',
                description: 'Aplicaciones completas accesibles vía web. No requiere instalación ni mantenimiento. Solo usas, accedes desde el navegador.',
                examples: ['Salesforce', 'Office 365', 'Servicios AWS gestionados']
              }
            ].map((model, idx) => (
              <div key={idx} style={{
                backgroundColor: '#ffffff',
                border: `3px solid ${model.color}`,
                borderRadius: '12px',
                padding: '2rem',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = `0 8px 20px ${model.color}30`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.08)';
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                  <span style={{ fontSize: '2.5rem' }}>{model.icon}</span>
                  <h3 style={{ margin: 0, color: model.color, fontSize: '1.2rem' }}>{model.title}</h3>
                </div>
                <p style={{ fontSize: '0.95rem', color: '#666', marginBottom: '1rem', lineHeight: '1.6' }}>
                  {model.description}
                </p>
                <div style={{ borderTop: `1px solid ${model.color}20`, paddingTop: '1rem' }}>
                  <p style={{ fontSize: '0.85rem', fontWeight: '600', color: model.color, marginBottom: '0.5rem' }}>Ejemplos:</p>
                  <ul style={{ margin: 0, paddingLeft: '1.5rem', fontSize: '0.9rem', color: '#555' }}>
                    {model.examples.map((example, i) => (
                      <li key={i} style={{ marginBottom: '0.3rem' }}>{example}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </>
      )
    },

    {
      title: 'Proveedores de Servicios en la Nube',
      content: (
        <>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '2rem' }}>
            En el mercado existen varios proveedores principales de servicios cloud. Amazon Web Services (AWS) es el líder del mercado con más de 32% de participación, ofreciendo la más amplia gama de servicios.
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '1.5rem',
            marginBottom: '2rem'
          }}>
            {[
              {
                name: 'Amazon Web Services (AWS)',
                market: '32%',
                color: '#FF9900',
                strength: 'Mayor variedad de servicios, más opciones, mayor madurez',
                founded: 'Líder desde 2006'
              },
              {
                name: 'Microsoft Azure',
                market: '23%',
                color: '#0078D4',
                strength: 'Integración con ecosistema Microsoft, Hybrid Cloud',
                founded: 'Competidor fuerte'
              },
              {
                name: 'Google Cloud Platform',
                market: '11%',
                color: '#4285F4',
                strength: 'Excelente en datos y machine learning, precio competitivo',
                founded: 'Innovador en IA'
              },
              {
                name: 'Alibaba Cloud',
                market: '9%',
                color: '#FF6B00',
                strength: 'Fuerte en Asia, crecimiento rápido',
                founded: 'Emergente global'
              }
            ].map((provider, idx) => (
              <div key={idx} style={{
                backgroundColor: '#f8f9fa',
                border: `2px solid ${provider.color}`,
                borderRadius: '8px',
                padding: '1.5rem',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#ffffff';
                e.currentTarget.style.boxShadow = `0 4px 12px ${provider.color}20`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#f8f9fa';
                e.currentTarget.style.boxShadow = 'none';
              }}>
                <h4 style={{ margin: '0 0 0.5rem 0', color: provider.color, fontSize: '1.1rem', fontWeight: '700' }}>
                  {provider.name}
                </h4>
                <p style={{ margin: '0.5rem 0', fontSize: '0.9rem', color: '#666' }}>
                  <strong>Cuota:</strong> {provider.market}
                </p>
                <p style={{ margin: '0.5rem 0', fontSize: '0.9rem', color: '#666' }}>
                  <strong>Fortaleza:</strong> {provider.strength}
                </p>
                <p style={{ margin: '0.5rem 0', fontSize: '0.85rem', fontStyle: 'italic', color: '#999' }}>
                  {provider.founded}
                </p>
              </div>
            ))}
          </div>
        </>
      )
    },

    {
      title: 'Fortalezas y Debilidades del Cloud',
      content: (
        <>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginBottom: '2rem' }}>
            {/* Fortalezas */}
            <div style={{
              backgroundColor: '#e8f5e9',
              border: '3px solid #4CAF50',
              borderRadius: '8px',
              padding: '2rem'
            }}>
              <h3 style={{ color: '#2e7d32', marginTop: 0 }}>✅ Fortalezas</h3>
              <ul style={{ fontSize: '0.95rem', lineHeight: '1.8', margin: 0 }}>
                <li><strong>Escalabilidad:</strong> Crece con tu negocio, en minutos</li>
                <li><strong>Costo reducido:</strong> Pay-as-you-go, sin inversión inicial</li>
                <li><strong>Acceso global:</strong> Desde cualquier lugar, 24/7</li>
                <li><strong>Confiabilidad:</strong> 99.99% uptime SLA</li>
                <li><strong>Seguridad:</strong> Encriptación, cumplimiento normativo</li>
                <li><strong>Automático:</strong> Parches y actualizaciones</li>
                <li><strong>Flexibilidad:</strong> Múltiples opciones de servicio</li>
                <li><strong>Innovación:</strong> Nuevos servicios constantemente</li>
              </ul>
            </div>

            {/* Debilidades */}
            <div style={{
              backgroundColor: '#ffebee',
              border: '3px solid #f44336',
              borderRadius: '8px',
              padding: '2rem'
            }}>
              <h3 style={{ color: '#c62828', marginTop: 0 }}>⚠️ Debilidades/Desafíos</h3>
              <ul style={{ fontSize: '0.95rem', lineHeight: '1.8', margin: 0 }}>
                <li><strong>Costos impredecibles:</strong> Si no monitorizas, factura sorpresas</li>
                <li><strong>Dependencia de internet:</strong> Sin conexión = sin acceso</li>
                <li><strong>Seguridad:</strong> Responsabilidad compartida, requiere configuración</li>
                <li><strong>Complejidad:</strong> Muchas opciones, curva de aprendizaje</li>
                <li><strong>Vendor lock-in:</strong> Difícil migrar a otro proveedor</li>
                <li><strong>Latencia:</strong> Puede afectar aplicaciones sensibles</li>
                <li><strong>Cumplimiento normativo:</strong> GDPR, soberanía de datos</li>
                <li><strong>Cambios frecuentes:</strong> AWS actualiza constantemente</li>
              </ul>
            </div>
          </div>

          <div style={{
            backgroundColor: '#fff3cd',
            border: '1px solid #ffc107',
            borderRadius: '8px',
            padding: '1.5rem',
            marginTop: '2rem'
          }}>
            <p style={{ margin: 0, fontSize: '0.95rem', lineHeight: '1.6' }}>
              <strong>La clave:</strong> El cloud no es "mejor" que on-premise para todo. Es una herramienta poderosa que requiere <strong>planificación, monitoreo y buenas prácticas</strong>. Muchas empresas usan modelo híbrido: cloud para lo que es escalable, on-premise para datos sensibles.
            </p>
          </div>
        </>
      )
    },

    {
      title: 'Cuándo Elegir Cloud',
      content: (
        <>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '2rem' }}>
            <strong>Elige AWS/Cloud si:</strong>
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.5rem',
            marginBottom: '2rem'
          }}>
            {[
              {
                title: 'Startups y MVP',
                icon: '🚀',
                description: 'Necesitas lanzar rápido sin inversión de hardware inicial'
              },
              {
                title: 'Tráfico variable',
                icon: '📊',
                description: 'Tu uso fluctúa: necesitas escalar en picos, reducir en valles'
              },
              {
                title: 'Aplicaciones globales',
                icon: '🌍',
                description: 'Usuarios en múltiples continentes, necesitas baja latencia'
              },
              {
                title: 'Datos y Analytics',
                icon: '📈',
                description: 'Procesamiento de grandes volúmenes de datos'
              },
              {
                title: 'Desarrollo ágil',
                icon: '⚡',
                description: 'Cambios frecuentes en infraestructura, automatización'
              },
              {
                title: 'Desastre/Recuperación',
                icon: '🛡️',
                description: 'Necesitas backup automático y continuidad del negocio'
              }
            ].map((use, idx) => (
              <div key={idx} style={{
                backgroundColor: '#f0f4ff',
                border: '1px solid #2196F3',
                borderRadius: '8px',
                padding: '1.5rem',
                display: 'flex',
                gap: '1rem'
              }}>
                <span style={{ fontSize: '2rem', minWidth: '50px' }}>{use.icon}</span>
                <div>
                  <h4 style={{ margin: '0 0 0.5rem 0', fontSize: '1rem', color: '#2196F3' }}>{use.title}</h4>
                  <p style={{ margin: 0, fontSize: '0.9rem', color: '#666' }}>{use.description}</p>
                </div>
              </div>
            ))}
          </div>

          <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1.5rem', color: '#c62828' }}>
            <strong>⚠️ Mantén on-premise si:</strong>
          </p>

          <ul style={{ fontSize: '0.95rem', lineHeight: '1.8', marginBottom: '2rem', paddingLeft: '1.5rem' }}>
            <li>Regulación extrema: datos no pueden salir del país (ciertos sectores)</li>
            <li>Carga predecible: servidor que está activo 24/7 al 100% puede ser más barato</li>
            <li>Baja conectividad: aplicación crítica que no puede depender de internet</li>
            <li>Datos ultrasensibles: aunque AWS es seguro, algunos prefieren control total</li>
            <li>Soluciones heredadas: modernizar puede costar más que mantener</li>
          </ul>
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
