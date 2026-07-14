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
              <div key={`service-model-${idx}`} style={{
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
                    {model.examples.map((example, exIdx) => (
                      <li key={`example-${idx}-${exIdx}`} style={{ marginBottom: '0.3rem' }}>{example}</li>
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
      title: 'Modelos de Despliegue: Tipos de Nube',
      content: (
        <>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '2rem' }}>
            Existen diferentes modelos de despliegue según dónde se encuentre la infraestructura. La elección depende de seguridad, cumplimiento normativo, costo y requisitos de control.
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem',
            marginBottom: '2rem'
          }}>
            {[
              {
                title: 'Nube Pública',
                icon: '☁️',
                color: '#2196F3',
                description: 'Infraestructura compartida con otros clientes, accesible vía internet. El proveedor gestiona todo.',
                pros: ['Bajo costo inicial', 'Escalabilidad ilimitada', 'Sin mantenimiento', 'Acceso global', 'Pagar solo por uso'],
                cons: ['Menos control', 'Seguridad compartida', 'Dependencia de proveedor', 'Latencia de red'],
                useCases: 'Startups, aplicaciones web, análisis de datos, desarrollo ágil'
              },
              {
                title: 'Nube Privada',
                icon: '🔒',
                color: '#F44336',
                description: 'Infraestructura dedicada solo para una organización. Puede estar on-premise o en un centro de datos del proveedor.',
                pros: ['Control total', 'Máxima seguridad', 'Cumplimiento normativo', 'Optimización de costos a largo plazo'],
                cons: ['Alto costo inicial', 'Requiere equipo IT', 'Menos escalabilidad', 'Mantenimiento propio'],
                useCases: 'Datos ultrasensibles, banca, salud, regulación estricta'
              },
              {
                title: 'Nube Híbrida',
                icon: '🔄',
                color: '#FF9800',
                description: 'Combinación de nube pública y privada. Datos sensibles en privada, cargas escalables en pública.',
                pros: ['Flexibilidad máxima', 'Optimiza costos', 'Cumplimiento normativo', 'Escalabilidad'],
                cons: ['Complejidad alta', 'Integración difícil', 'Gestión compleja', 'Seguridad en transición'],
                useCases: 'Empresas grandes, transición gradual, cargas variables'
              },
              {
                title: 'Multicloud',
                icon: '🌍',
                color: '#4CAF50',
                description: 'Múltiples proveedores cloud (AWS, Azure, GCP). Evita dependencia de un solo proveedor.',
                pros: ['Evita vendor lock-in', 'Redundancia', 'Mejor negociación de precios', 'Resiliencia'],
                cons: ['Gestión muy compleja', 'Costos elevados', 'Compatibilidad limitada', 'Requiere expertos'],
                useCases: 'Empresas críticas, proveedores de SaaS, aplicaciones distribuidas'
              }
            ].map((model, idx) => (
              <div key={`deployment-model-${idx}`} style={{
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
                  <h3 style={{ margin: 0, color: model.color, fontSize: '1.3rem' }}>{model.title}</h3>
                </div>
                <p style={{ fontSize: '0.95rem', color: '#666', marginBottom: '1.2rem', lineHeight: '1.6' }}>
                  {model.description}
                </p>

                <div style={{ marginBottom: '1rem' }}>
                  <p style={{ fontSize: '0.85rem', fontWeight: '600', color: model.color, marginBottom: '0.5rem' }}>✅ Ventajas:</p>
                  <ul style={{ margin: 0, paddingLeft: '1.5rem', fontSize: '0.9rem', color: '#555', lineHeight: '1.5' }}>
                    {model.pros.map((pro, proIdx) => (
                      <li key={`pro-${idx}-${proIdx}`}>{pro}</li>
                    ))}
                  </ul>
                </div>

                <div style={{ marginBottom: '1rem' }}>
                  <p style={{ fontSize: '0.85rem', fontWeight: '600', color: '#d32f2f', marginBottom: '0.5rem' }}>⚠️ Desventajas:</p>
                  <ul style={{ margin: 0, paddingLeft: '1.5rem', fontSize: '0.9rem', color: '#555', lineHeight: '1.5' }}>
                    {model.cons.map((con, conIdx) => (
                      <li key={`con-${idx}-${conIdx}`}>{con}</li>
                    ))}
                  </ul>
                </div>

                <div style={{ borderTop: `1px solid ${model.color}20`, paddingTop: '1rem' }}>
                  <p style={{ fontSize: '0.85rem', fontWeight: '600', color: model.color, marginBottom: '0.3rem' }}>💼 Casos de uso:</p>
                  <p style={{ margin: 0, fontSize: '0.9rem', color: '#666', fontStyle: 'italic' }}>{model.useCases}</p>
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
            En el mercado existen varios proveedores principales de servicios cloud. Cada uno tiene fortalezas distintas. Aquí te mostramos los líderes globales y sus características principales.
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2rem',
            marginBottom: '2rem'
          }}>
            {[
              {
                name: 'Amazon Web Services (AWS)',
                logo: '🟠',
                market: '32%',
                color: '#FF9900',
                founded: '2006',
                status: 'Líder indiscutible',
                strengths: ['Mayor catálogo de servicios (200+)', 'Mejor documentación y comunidad', 'Más opciones de bases de datos', 'Líder en IaaS', 'Mejor para startups tech'],
                weaknesses: ['Interfaz compleja', 'Curva de aprendizaje alta', 'Precios menos transparentes'],
                bestFor: 'Startups, empresas tech, cargas complejas'
              },
              {
                name: 'Microsoft Azure',
                logo: '🔷',
                market: '23%',
                color: '#0078D4',
                founded: '2010',
                status: 'Competidor fuerte',
                strengths: ['Integración perfecta con Microsoft 365/Office', 'Hybrid Cloud (mejor que otros)', 'PaaS muy maduro', 'Mejor para empresas Windows', 'SQL Server nativo'],
                weaknesses: ['Menos servicios que AWS', 'Comunidad más pequeña', 'Menos flexible'],
                bestFor: 'Empresas Microsoft, aplicaciones .NET, Hybrid Cloud'
              },
              {
                name: 'Google Cloud Platform (GCP)',
                logo: '🔵',
                market: '11%',
                color: '#4285F4',
                founded: '2008',
                status: 'Innovador en datos e IA',
                strengths: ['Líderes en Machine Learning y IA', 'BigQuery (analytics increíble)', 'Mejor precio en compute', 'Excelente en Kubernetes', 'Big Data nativo'],
                weaknesses: ['Menos servicios que AWS', 'Comunidad más pequeña', 'Menos opciones de datos'],
                bestFor: 'Data Science, IA/ML, análisis de grandes datos'
              },
              {
                name: 'IBM Cloud',
                logo: '🟦',
                market: '6%',
                color: '#0F62FE',
                founded: '2013',
                status: 'Especialista empresarial',
                strengths: ['Especialista en enterprise', 'OpenStack y OpenShift', 'Sector público y banca', 'Cumplimiento normativo', 'Mainframe integration'],
                weaknesses: ['Menos servicios', 'Comunidad reducida', 'Menos atractivo para startups'],
                bestFor: 'Sector público, banca, integración mainframe'
              }
            ].map((provider, idx) => (
              <div key={`provider-${idx}`} style={{
                backgroundColor: '#f8f9fa',
                border: `3px solid ${provider.color}`,
                borderRadius: '12px',
                padding: '2rem',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#ffffff';
                e.currentTarget.style.boxShadow = `0 6px 16px ${provider.color}25`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#f8f9fa';
                e.currentTarget.style.boxShadow = 'none';
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '1rem' }}>
                  <span style={{ fontSize: '1.8rem' }}>{provider.logo}</span>
                  <div>
                    <h4 style={{ margin: '0 0 0.2rem 0', color: provider.color, fontSize: '1.1rem', fontWeight: '700' }}>
                      {provider.name}
                    </h4>
                    <p style={{ margin: 0, fontSize: '0.8rem', color: '#999', fontWeight: '600' }}>{provider.status}</p>
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem', fontSize: '0.9rem', color: '#666' }}>
                  <div>
                    <p style={{ margin: '0.3rem 0', fontWeight: '600' }}>📊 Cuota: <span style={{ color: provider.color, fontWeight: '700' }}>{provider.market}</span></p>
                    <p style={{ margin: '0.3rem 0', fontWeight: '600' }}>📅 Desde: <span style={{ color: provider.color }}>{provider.founded}</span></p>
                  </div>
                </div>

                <div style={{ marginBottom: '1rem' }}>
                  <p style={{ fontSize: '0.85rem', fontWeight: '600', color: provider.color, marginBottom: '0.4rem' }}>⭐ Fortalezas:</p>
                  <ul style={{ margin: 0, paddingLeft: '1.5rem', fontSize: '0.85rem', color: '#555', lineHeight: '1.4' }}>
                    {provider.strengths.map((s, sIdx) => (
                      <li key={`strength-${idx}-${sIdx}`} style={{ marginBottom: '0.2rem' }}>{s}</li>
                    ))}
                  </ul>
                </div>

                <div style={{ marginBottom: '1rem' }}>
                  <p style={{ fontSize: '0.85rem', fontWeight: '600', color: '#d32f2f', marginBottom: '0.4rem' }}>⚠️ Limitaciones:</p>
                  <ul style={{ margin: 0, paddingLeft: '1.5rem', fontSize: '0.85rem', color: '#555', lineHeight: '1.4' }}>
                    {provider.weaknesses.map((w, wIdx) => (
                      <li key={`weakness-${idx}-${wIdx}`} style={{ marginBottom: '0.2rem' }}>{w}</li>
                    ))}
                  </ul>
                </div>

                <div style={{ borderTop: `1px solid ${provider.color}20`, paddingTop: '1rem' }}>
                  <p style={{ fontSize: '0.85rem', fontWeight: '600', color: provider.color, marginBottom: '0.3rem' }}>🎯 Ideal para:</p>
                  <p style={{ margin: 0, fontSize: '0.9rem', color: '#666', fontStyle: 'italic' }}>{provider.bestFor}</p>
                </div>
              </div>
            ))}
          </div>
        </>
      )
    },

    {
      title: 'Criterios Técnicos para Elegir Plataforma Cloud',
      content: (
        <>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '2rem' }}>
            Además de costos, hay factores técnicos críticos que deben guiar tu decisión de qué plataforma y tipo de nube elegir.
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem',
            marginBottom: '2rem'
          }}>
            {[
              {
                title: 'Disponibilidad & Confiabilidad',
                icon: '⏰',
                color: '#4CAF50',
                factors: [
                  'SLA (Service Level Agreement): ¿Qué % uptime garantiza? (99.9%, 99.99%)',
                  'Regiones y zonas de disponibilidad para redundancia',
                  'Recuperación ante desastres (RTO/RPO)',
                  'Failover automático y backups'
                ]
              },
              {
                title: 'Rendimiento & Latencia',
                icon: '⚡',
                color: '#2196F3',
                factors: [
                  'Latencia de red: ubicación de servidores más cercanos',
                  'Velocidad de bases de datos (IOPS)',
                  'CDN incluido para contenido estático',
                  'Rendimiento con picos de tráfico'
                ]
              },
              {
                title: 'Seguridad & Cumplimiento',
                icon: '🔐',
                color: '#F44336',
                factors: [
                  'Encriptación en tránsito y en reposo',
                  'Certificaciones: ISO 27001, SOC 2, HIPAA, PCI-DSS',
                  'GDPR y localización de datos (EU, US)',
                  'Control de acceso granular (IAM)'
                ]
              },
              {
                title: 'Escalabilidad',
                icon: '📈',
                color: '#FF9800',
                factors: [
                  'Auto-scaling: ¿se escala sola según demanda?',
                  'Límites de escala: ¿hasta cuántos usuarios/datos?',
                  'Tiempo de aprovisionamiento: minutos vs horas',
                  'Balanceo de carga automático'
                ]
              },
              {
                title: 'Integración Ecosistema',
                icon: '🔗',
                color: '#9C27B0',
                factors: [
                  'Compatibilidad con frameworks y herramientas actuales',
                  'APIs bien documentadas y estables',
                  'Conexión con sistemas legacy (bases de datos, ERP)',
                  'Marketplace de extensiones disponibles'
                ]
              },
              {
                title: 'Soporte & Comunidad',
                icon: '👥',
                color: '#00BCD4',
                factors: [
                  'Documentación y tutoriales disponibles',
                  'Comunidad activa: foros, StackOverflow, GitHub',
                  'Planes de soporte (Basic, Professional, Enterprise)',
                  'Tiempo de respuesta ante incidentes'
                ]
              }
            ].map((criterion, idx) => (
              <div key={`criterion-${idx}`} style={{
                backgroundColor: '#f0f4ff',
                border: `2px solid ${criterion.color}`,
                borderRadius: '10px',
                padding: '1.8rem',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = `0 6px 20px ${criterion.color}20`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = 'none';
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.2rem' }}>
                  <span style={{ fontSize: '2.2rem' }}>{criterion.icon}</span>
                  <h3 style={{ margin: 0, color: criterion.color, fontSize: '1.1rem', fontWeight: '700' }}>
                    {criterion.title}
                  </h3>
                </div>
                <ul style={{ margin: 0, paddingLeft: '1.5rem', fontSize: '0.9rem', color: '#444', lineHeight: '1.7' }}>
                  {criterion.factors.map((factor, factorIdx) => (
                    <li key={`factor-${idx}-${factorIdx}`} style={{ marginBottom: '0.5rem' }}>{factor}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </>
      )
    },

    {
      title: 'Criterios de Seguridad: Protege tu Infraestructura',
      content: (
        <>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '2rem' }}>
            La seguridad no es una característica opcional, es fundamental. Debes evaluar cómo cada proveedor y plataforma protege tus datos y cumple regulaciones.
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2rem',
            marginBottom: '2rem'
          }}>
            {[
              {
                title: 'Autenticación & Control de Acceso',
                icon: '🔑',
                color: '#D32F2F',
                sections: [
                  {
                    subtitle: 'Gestión de Identidades (IAM)',
                    points: [
                      'AWS IAM: Usuarios, roles, políticas granulares',
                      'Azure AD: Integración con Active Directory',
                      'GCP IAM: Roles predefinidos y personalizados',
                      'Principio: Un usuario = un rol específico (no admin generalizado)'
                    ]
                  },
                  {
                    subtitle: 'Autenticación Multifactor (MFA)',
                    points: [
                      'Obligatorio para: Cuentas root, admin, desarrolladores',
                      'Métodos: Authenticator, SMS (menos seguro), hardware keys',
                      'Beneficio: Incluso si roban contraseña, no acceden sin 2º factor',
                      'Política: Requerida en login críticos, no solo opcional'
                    ]
                  },
                  {
                    subtitle: 'Principio de Mínimo Privilegio',
                    points: [
                      'Cada usuario/app solo accede a lo que necesita',
                      'No uses credenciales de administrator para tareas normales',
                      'Revisa permisos regularmente (auditoría trimestral)',
                      'Temporary credentials: Mejor que keys permanentes'
                    ]
                  }
                ]
              },
              {
                title: 'Cifrado: En Tránsito & En Reposo',
                icon: '🔐',
                color: '#1976D2',
                sections: [
                  {
                    subtitle: 'Cifrado en Tránsito (TLS/SSL)',
                    points: [
                      'HTTPS obligatorio: Todas las APIs deben usar TLS 1.2+',
                      "Certificados SSL: AWS Certificate Manager, Let's Encrypt",
                      'VPN/Túneles: Para comunicación entre on-premise y cloud',
                      'CloudFront/CDN: Cifran automáticamente conexiones'
                    ]
                  },
                  {
                    subtitle: 'Cifrado en Reposo',
                    points: [
                      'Bases de datos: AWS RDS, DynamoDB cifrado nativo',
                      'S3: Encriptación por defecto con AWS KMS',
                      'EBS (almacenamiento): Volúmenes cifrados automáticamente',
                      'Backups: Deben estar cifrados en almacenamiento'
                    ]
                  },
                  {
                    subtitle: 'Gestión de Claves (KMS)',
                    points: [
                      'AWS KMS: Servicio de gestión de claves encriptadas',
                      'Rotation automática: Cambiar claves regularmente (anual)',
                      'Acceso controlado: Solo apps autorizadas pueden desencriptar',
                      'Auditoría: Log de quién accedió qué dato y cuándo'
                    ]
                  }
                ]
              },
              {
                title: 'Cumplimiento Normativo & Certificaciones',
                icon: '✅',
                color: '#388E3C',
                sections: [
                  {
                    subtitle: 'GDPR (General Data Protection Regulation)',
                    points: [
                      'Aplica a: Usuarios en EU, datos personales procesados en EU',
                      'Requisitos: Consentimiento explícito, derecho al olvido, portabilidad',
                      'Sanciones: Hasta 20M€ o 4% ingresos por incumplimiento',
                      'AWS/Azure/GCP: Ofrecen DPA (Data Processing Agreements)'
                    ]
                  },
                  {
                    subtitle: 'Normativas Españolas y Europeas',
                    points: [
                      'LSSI-CE: Protección de datos de telecomunicaciones',
                      'LFCC: Ley de Facturas Electrónicas',
                      'NIS2: Directiva sobre ciberseguridad (operadores esenciales)',
                      'Requerimientos: Documentación, auditorías, planes de incidente'
                    ]
                  },
                  {
                    subtitle: 'ISO 27001 & SOC 2',
                    points: [
                      'ISO 27001: Estándar internacional de seguridad informática',
                      'SOC 2 Type II: Auditoría independiente de controles de seguridad',
                      'Validación: Comprueba que el proveedor está auditado',
                      'Beneficio: Certifica que cumplen estándares internacionales'
                    ]
                  },
                  {
                    subtitle: 'Certificaciones por Sector',
                    points: [
                      'PCI-DSS: Para procesamiento de tarjetas de crédito',
                      'HIPAA: Para datos de salud (healthcare)',
                      'FedRAMP: Para agencias gobierno US',
                      'SOC 2 Type I/II: Para proveedores de servicios'
                    ]
                  }
                ]
              }
            ].map((section, sectionIdx) => (
              <div key={`security-section-${sectionIdx}`} style={{
                backgroundColor: '#ffffff',
                border: `3px solid ${section.color}`,
                borderRadius: '12px',
                padding: '2rem',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                  <span style={{ fontSize: '2.2rem' }}>{section.icon}</span>
                  <h3 style={{ margin: 0, color: section.color, fontSize: '1.15rem', fontWeight: '700' }}>
                    {section.title}
                  </h3>
                </div>

                <div>
                  {section.sections.map((sec, secIdx) => (
                    <div key={`subsection-${sectionIdx}-${secIdx}`} style={{ marginBottom: secIdx < section.sections.length - 1 ? '1.5rem' : 0 }}>
                      <h4 style={{ margin: '0 0 0.8rem 0', fontSize: '0.95rem', fontWeight: '700', color: section.color }}>
                        {sec.subtitle}
                      </h4>
                      <ul style={{ margin: 0, paddingLeft: '1.5rem', fontSize: '0.9rem', color: '#555', lineHeight: '1.7' }}>
                        {sec.points.map((point, pointIdx) => (
                          <li key={`point-${sectionIdx}-${secIdx}-${pointIdx}`} style={{ marginBottom: '0.4rem' }}>
                            {point}
                          </li>
                        ))}
                      </ul>
                      {secIdx < section.sections.length - 1 && (
                        <div style={{ borderBottom: `1px solid ${section.color}20`, margin: '1rem 0' }} />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div style={{
            backgroundColor: '#fff3e0',
            border: '3px solid #F57C00',
            borderRadius: '10px',
            padding: '2rem'
          }}>
            <h3 style={{ color: '#E65100', marginTop: 0, fontSize: '1.2rem' }}>🛡️ Checklist de Seguridad Antes de Elegir Proveedor</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
              {[
                {
                  category: 'Autenticación & Acceso',
                  checks: [
                    '¿Soporta MFA nativo?',
                    '¿IAM granular y auditado?',
                    '¿Integración con AD/LDAP?',
                    '¿Temporary credentials disponibles?'
                  ]
                },
                {
                  category: 'Cifrado',
                  checks: [
                    '¿Cifra en tránsito (TLS 1.2+)?',
                    '¿Cifra en reposo por defecto?',
                    '¿Gestión de claves (KMS)?',
                    '¿Rotation de claves automática?'
                  ]
                },
                {
                  category: 'Cumplimiento',
                  checks: [
                    '¿GDPR compliant?',
                    '¿ISO 27001 certificado?',
                    '¿SOC 2 auditado?',
                    '¿Certificaciones sector (PCI, HIPAA)?'
                  ]
                },
                {
                  category: 'Operacional',
                  checks: [
                    '¿Logs de auditoría 365+ días?',
                    '¿CloudTrail/equivalent?',
                    '¿DLP (Data Loss Prevention)?',
                    '¿Alertas en tiempo real?'
                  ]
                }
              ].map((section, idx) => (
                <div key={`checklist-${idx}`} style={{ backgroundColor: '#ffffff', padding: '1.5rem', borderRadius: '8px', boxShadow: '0 2px 6px rgba(0,0,0,0.08)' }}>
                  <p style={{ margin: '0 0 1rem 0', fontSize: '0.95rem', fontWeight: '700', color: '#F57C00' }}>
                    ✓ {section.category}
                  </p>
                  <ul style={{ margin: 0, paddingLeft: '1.5rem', fontSize: '0.9rem', color: '#555', lineHeight: '1.6' }}>
                    {section.checks.map((check, checkIdx) => (
                      <li key={`check-${idx}-${checkIdx}`} style={{ marginBottom: '0.4rem' }}>☐ {check}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div style={{
            backgroundColor: '#f3e5f5',
            border: '3px solid #7B1FA2',
            borderRadius: '10px',
            padding: '2rem',
            marginTop: '2rem'
          }}>
            <h3 style={{ color: '#4A148C', marginTop: 0, fontSize: '1.2rem' }}>⚠️ Errores Comunes de Seguridad en Cloud</h3>
            <ul style={{ fontSize: '0.95rem', lineHeight: '1.8', margin: 0, paddingLeft: '1.5rem', color: '#333' }}>
              <li><strong>AWS root account sin MFA:</strong> La cuenta raíz con acceso total = desastre si se compromete</li>
              <li><strong>Credenciales hardcodeadas:</strong> Keys en código fuente visibles en GitHub</li>
              <li><strong>IAM policies demasiado amplias:</strong> "Allow *" es mal. Especifica recursos y acciones</li>
              <li><strong>S3 buckets públicos accidentalmente:</strong> Millones de datos expuestos por error</li>
              <li><strong>No encriptar datos sensibles:</strong> En tránsito o reposo = riesgo alto</li>
              <li><strong>Logs deshabilitados:</strong> Sin auditoría no sabes quién accedió qué</li>
              <li><strong>No revisar certificaciones:</strong> Asumir que el proveedor es "seguro" sin verificar</li>
              <li><strong>Ignorar alertas de seguridad:</strong> AWS/Azure alertan, debes responder rápido</li>
            </ul>
          </div>
        </>
      )
    },

    {
      title: 'Criterios Económicos: Total Cost of Ownership (TCO)',
      content: (
        <>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '2rem' }}>
            El costo más barato a corto plazo puede ser más caro a largo plazo. Debes calcular el <strong>Total Cost of Ownership (TCO)</strong>: todos los costos directos e indirectos durante la vida útil de tu solución.
          </p>

          <div style={{
            backgroundColor: '#fff3cd',
            border: '3px solid #FFC107',
            borderRadius: '10px',
            padding: '1.8rem',
            marginBottom: '2rem'
          }}>
            <p style={{ margin: '0 0 1rem 0', fontSize: '1rem', fontWeight: '700', color: '#856404' }}>
              💡 Recuerda: TCO = Costos Directos + Costos de Gestión + Costos Ocultos
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2rem',
            marginBottom: '2rem'
          }}>
            {[
              {
                category: 'Costos Directos de Uso',
                icon: '💰',
                color: '#d32f2f',
                items: [
                  { name: 'Compute', desc: 'EC2, servidores virtuales (por hora/mes)' },
                  { name: 'Almacenamiento', desc: 'S3, bases de datos (por GB)' },
                  { name: 'Transferencia de datos', desc: 'Salida de datos (egress) - caro' },
                  { name: 'Licencias', desc: 'Bases de datos, middleware (SQL Server, Oracle)' },
                  { name: 'Backup & Disaster Recovery', desc: 'Copias de seguridad, replicación' }
                ]
              },
              {
                category: 'Costos de Gestión & Operación',
                icon: '⚙️',
                color: '#1976d2',
                items: [
                  { name: 'Equipo IT', desc: 'DevOps, SREs, arquitectos cloud' },
                  { name: 'Formación', desc: 'Cursos, certificaciones, workshops' },
                  { name: 'Monitoreo & Logging', desc: 'CloudWatch, Datadog, New Relic' },
                  { name: 'Seguridad', desc: 'Auditoría, pentesting, compliance' },
                  { name: 'Soporte técnico', desc: 'Premium support plans' }
                ]
              },
              {
                category: 'Costos Ocultos & Sobrecostes',
                icon: '⚠️',
                color: '#f57c00',
                items: [
                  { name: 'Mala planificación', desc: 'Recursos sobre-dimensionados sin usar' },
                  { name: 'Data transfer', desc: 'Inter-región o salida inesperada' },
                  { name: 'Recursos olvidados', desc: 'Instancias paradas pero facturando' },
                  { name: 'Cambios de proveedor', desc: 'Migración, reescritura de código, tiempo' },
                  { name: 'Vendor lock-in', desc: 'Imposibilidad de cambiar a otro proveedor' }
                ]
              },
              {
                category: 'Comparativa: Nube vs On-Premise',
                icon: '⚖️',
                color: '#388e3c',
                items: [
                  { name: 'Cloud (variable)', desc: 'Bajo inicial, crece con uso, difícil de predecir' },
                  { name: 'Cloud (conocido)', desc: 'Si es predecible: puede ser más barato' },
                  { name: 'On-Premise (inicial)', desc: 'Alto costo inicial: servidores, instalación' },
                  { name: 'On-Premise (crecimiento)', desc: 'Crecimiento = nuevas inversiones de capex' },
                  { name: 'Break-even', desc: 'Cloud vence en 2-5 años si escalas mucho' }
                ]
              }
            ].map((section, idx) => (
              <div key={`cost-section-${idx}`} style={{
                backgroundColor: '#ffffff',
                border: `3px solid ${section.color}`,
                borderRadius: '12px',
                padding: '2rem',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                  <span style={{ fontSize: '2.2rem' }}>{section.icon}</span>
                  <h3 style={{ margin: 0, color: section.color, fontSize: '1.15rem', fontWeight: '700' }}>
                    {section.category}
                  </h3>
                </div>

                <div style={{ borderLeft: `4px solid ${section.color}20`, paddingLeft: '1.2rem' }}>
                  {section.items.map((item, itemIdx) => (
                    <div key={`item-${idx}-${itemIdx}`} style={{ marginBottom: itemIdx < section.items.length - 1 ? '1.2rem' : 0 }}>
                      <p style={{ margin: '0 0 0.3rem 0', fontSize: '0.95rem', fontWeight: '700', color: section.color }}>
                        • {item.name}
                      </p>
                      <p style={{ margin: 0, fontSize: '0.85rem', color: '#666', lineHeight: '1.5' }}>
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div style={{
            backgroundColor: '#e8f5e9',
            border: '3px solid #4CAF50',
            borderRadius: '10px',
            padding: '2rem'
          }}>
            <h3 style={{ color: '#2e7d32', marginTop: 0, fontSize: '1.2rem' }}>✅ Cómo Reducir Costos en Cloud</h3>
            <ul style={{ fontSize: '0.95rem', lineHeight: '1.8', margin: 0, paddingLeft: '1.5rem', color: '#333' }}>
              <li><strong>Reserved Instances:</strong> Compra de 1-3 años con descuento 30-50%</li>
              <li><strong>Spot Instances:</strong> Máquinas baratas pero pueden cerrarse (para batch jobs)</li>
              <li><strong>Auto-scaling:</strong> Solo paga cuando necesita, baja cuando no</li>
              <li><strong>Monitoreo activo:</strong> Tools para detectar recursos sin usar</li>
              <li><strong>Right-sizing:</strong> Ajusta tipo de máquina al uso real (no sobre-dimensiones)</li>
              <li><strong>Multi-cloud estratégico:</strong> Usa cada proveedor en su especialidad</li>
              <li><strong>FinOps:</strong> Equipo dedicado a optimizar gastos cloud (creciente en 2024+)</li>
            </ul>
          </div>

          <div style={{
            backgroundColor: '#ffebee',
            border: '3px solid #f44336',
            borderRadius: '10px',
            padding: '2rem',
            marginTop: '2rem'
          }}>
            <h3 style={{ color: '#c62828', marginTop: 0, fontSize: '1.2rem' }}>⚠️ Errores Comunes que Aumentan Costos</h3>
            <ul style={{ fontSize: '0.95rem', lineHeight: '1.8', margin: 0, paddingLeft: '1.5rem', color: '#333' }}>
              <li><strong>Transferencia de datos:</strong> Mover datos entre regiones o fuera de AWS es muy caro</li>
              <li><strong>Recursos parados:</strong> Instancias stopped o EBS sin usar siguen facturando</li>
              <li><strong>No usar cache:</strong> Consultas repetidas a bases de datos = más costo</li>
              <li><strong>Logs indefinidos:</strong> Guardar logs sin límite de retención</li>
              <li><strong>No optimizar base de datos:</strong> Queries lentas = máquinas más grandes = más $$$</li>
              <li><strong>Crecer sin revisar:</strong> Deuda técnica + sobrecostos = nunca revisas</li>
            </ul>
          </div>
        </>
      )
    },

    {
      title: 'Criterios Organizativos: Factores Internos',
      content: (
        <>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '2rem' }}>
            La mejor tecnología no sirve si tu equipo no puede usarla. Los factores organizativos son críticos para elegir qué tipo de nube y proveedor necesitas.
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem',
            marginBottom: '2rem'
          }}>
            {[
              {
                title: 'Conocimientos Técnicos del Equipo',
                icon: '🧠',
                color: '#2196F3',
                levels: [
                  {
                    scenario: 'Equipo Junior / Poco Cloud',
                    recommendation: 'PaaS (Platform as a Service) o Managed Services',
                    reason: 'AWS Elastic Beanstalk, RDS gestionado. Menos configuración, más enfoque en código'
                  },
                  {
                    scenario: 'Equipo Experto en On-Premise',
                    recommendation: 'Nube Privada o Híbrida',
                    reason: 'Mayor control, curva de aprendizaje menos pronunciada'
                  },
                  {
                    scenario: 'Equipo DevOps/SRE Experimentado',
                    recommendation: 'IaaS puro (EC2, Kubernetes)',
                    reason: 'Máxima flexibilidad y control, pueden optimizar todo'
                  },
                  {
                    scenario: 'Equipo con experiencia multi-cloud',
                    recommendation: 'Multicloud + Kubernetes',
                    reason: 'Aprovechar lo mejor de cada proveedor'
                  }
                ]
              },
              {
                title: 'Tiempo para Administración',
                icon: '⏱️',
                color: '#F44336',
                levels: [
                  {
                    scenario: '< 1 persona dedicada',
                    recommendation: 'SaaS o PaaS totalmente gestionado',
                    reason: 'Azure App Service, AWS Lambda. Mínimo overhead operativo'
                  },
                  {
                    scenario: '1-2 personas dedicadas',
                    recommendation: 'IaaS con buena automatización',
                    reason: 'Infrastructure as Code (Terraform), monitoreo automático'
                  },
                  {
                    scenario: '3+ personas dedicadas (DevOps)',
                    recommendation: 'IaaS puro + Kubernetes',
                    reason: 'Pueden optimizar, personalizar, automatizar todo'
                  },
                  {
                    scenario: 'On-Premise con equipo IT grande',
                    recommendation: 'Nube Privada',
                    reason: 'Reutilizar equipo existente, control total'
                  }
                ]
              },
              {
                title: 'Soporte Interno vs Externo',
                icon: '🤝',
                color: '#4CAF50',
                levels: [
                  {
                    scenario: 'Sin equipo IT interno',
                    recommendation: 'SaaS o PaaS + Soporte Managed',
                    reason: 'Contratar proveedor o MSP (Managed Service Provider)'
                  },
                  {
                    scenario: 'Equipo IT pequeño (helpdesk)',
                    recommendation: 'Híbrido: algunas partes managed, otras in-house',
                    reason: 'Balance entre control y simplificación'
                  },
                  {
                    scenario: 'Equipo IT maduro y estable',
                    recommendation: 'IaaS + Soporte profesional plan',
                    reason: 'Pueden gestionar la mayoría, piden ayuda cuando fallan cosas críticas'
                  },
                  {
                    scenario: 'Startup o equipo muy pequeño',
                    recommendation: 'Tercerizar todo con MSP',
                    reason: 'Evitar gastar en salarios, flexibilidad'
                  }
                ]
              }
            ].map((section, idx) => (
              <div key={`org-section-${idx}`} style={{
                backgroundColor: '#ffffff',
                border: `3px solid ${section.color}`,
                borderRadius: '12px',
                padding: '2rem',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                  <span style={{ fontSize: '2.2rem' }}>{section.icon}</span>
                  <h3 style={{ margin: 0, color: section.color, fontSize: '1.15rem', fontWeight: '700' }}>
                    {section.title}
                  </h3>
                </div>

                <div style={{ borderLeft: `4px solid ${section.color}20`, paddingLeft: '1.2rem' }}>
                  {section.levels.map((level, levelIdx) => (
                    <div key={`level-${idx}-${levelIdx}`} style={{ marginBottom: levelIdx < section.levels.length - 1 ? '1.5rem' : 0 }}>
                      <p style={{ margin: '0 0 0.4rem 0', fontSize: '0.95rem', fontWeight: '700', color: section.color }}>
                        📍 {level.scenario}
                      </p>
                      <p style={{ margin: '0.3rem 0', fontSize: '0.9rem', color: '#333', fontWeight: '600' }}>
                        ➜ {level.recommendation}
                      </p>
                      <p style={{ margin: '0.2rem 0', fontSize: '0.85rem', color: '#666', lineHeight: '1.5', fontStyle: 'italic' }}>
                        💡 {level.reason}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div style={{
            backgroundColor: '#f3e5f5',
            border: '3px solid #9C27B0',
            borderRadius: '10px',
            padding: '2rem'
          }}>
            <h3 style={{ color: '#6a1b9a', marginTop: 0, fontSize: '1.2rem' }}>📋 Preguntas Clave a Hacer en tu Organización</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
              {[
                {
                  category: 'Sobre el Equipo',
                  questions: [
                    '¿Cuántas personas dedicadas a infraestructura tenemos?',
                    '¿Qué tecnologías dominan? (AWS, Kubernetes, Terraform)',
                    '¿Necesitamos entrenamiento? ¿Presupuesto disponible?',
                    '¿Hay rotación alta de personal?'
                  ],
                  icon: '👥'
                },
                {
                  category: 'Sobre la Capacidad',
                  questions: [
                    '¿Cuántas horas/semana puede el equipo administrar cloud?',
                    '¿Hay tiempo para responder incidentes 24/7?',
                    '¿Pueden hacer guardia (on-call)?',
                    '¿Presupuesto para overtime?'
                  ],
                  icon: '⏰'
                },
                {
                  category: 'Sobre Recursos Externos',
                  questions: [
                    '¿Existe MSP o consultor de confianza?',
                    '¿Budget para soporte externo?',
                    '¿Necesitamos migración asistida?',
                    '¿Auditoría de seguridad periódica?'
                  ],
                  icon: '🔗'
                },
                {
                  category: 'Sobre Riesgos',
                  questions: [
                    '¿Dependencia de pocas personas?',
                    '¿Documentación actualizada?',
                    '¿Hay plan de continuidad si alguien se va?',
                    '¿Knowledge base o wikis internos?'
                  ],
                  icon: '⚠️'
                }
              ].map((section, idx) => (
                <div key={`org-checklist-${idx}`} style={{ backgroundColor: '#ffffff', padding: '1.5rem', borderRadius: '8px', boxShadow: '0 2px 6px rgba(0,0,0,0.08)' }}>
                  <p style={{ margin: '0 0 1rem 0', fontSize: '1rem', fontWeight: '700', color: '#6a1b9a' }}>
                    {section.icon} {section.category}
                  </p>
                  <ul style={{ margin: 0, paddingLeft: '1.5rem', fontSize: '0.9rem', color: '#555', lineHeight: '1.6' }}>
                    {section.questions.map((q, qIdx) => (
                      <li key={`question-${idx}-${qIdx}`} style={{ marginBottom: '0.4rem' }}>❓ {q}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
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
              <div key={`use-case-${idx}`} style={{
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
