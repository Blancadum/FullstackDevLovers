import { useState } from 'react';
import { LessonTemplate } from '../components';
import { LessonNavigation } from '../components/LessonNavigation';
import { useBreadcrumb } from '../hooks/useBreadcrumb';
import { useLessonNavigation } from '../hooks/useLessonNavigation';

export function LessonAWSEC2() {
  const breadcrumbs = useBreadcrumb();
  const nav = useLessonNavigation();

  const sections = [
    {
      title: 'Introducción a Amazon EC2',
      content: (
        <>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
            <strong>Amazon Elastic Compute Cloud (EC2)</strong> proporciona capacidad de computación redimensionable en la nube. En lugar de comprar servidores físicos, lanzas <strong>instancias</strong> (máquinas virtuales) en AWS con el sistema operativo y software que necesites.
          </p>

          <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
            EC2 es <strong>flexible, confiable y económico</strong>. Puedes escalar hacia arriba o hacia abajo en minutos. Solo pagas por las horas que usas. Es el servicio más versátil de AWS, usado para aplicaciones web, análisis de datos, machine learning, procesamiento por lotes y mucho más.
          </p>

          <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
            EC2 es completamente personalizable: elige el tipo de instancia (CPU, memoria, red), el sistema operativo (Amazon Linux, Windows, Ubuntu, etc.), almacenamiento (EBS, instance store), y conectividad (VPC, subnets, security groups).
          </p>
        </>
      )
    },

    {
      title: 'Conceptos Fundamentales de EC2',
      content: (
        <>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
            Para usar EC2 efectivamente, necesitas entender varios conceptos clave que controlan cómo funciona tu instancia.
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))',
            gap: '1.5rem',
            marginBottom: '2rem'
          }}>
            {[
              {
                title: 'Instancias (Instances)',
                icon: '💻',
                description: 'Máquina virtual con CPU, memoria y almacenamiento. Puedes lanzar, detener, reiniciar o terminar instancias en segundos.'
              },
              {
                title: 'AMI (Amazon Machine Image)',
                icon: '🖼️',
                description: 'Plantilla que contiene SO, aplicaciones y configuración. Base para crear instancias. Público (AWS) o privado (tuyo).'
              },
              {
                title: 'Tipo de Instancia',
                icon: '⚙️',
                description: 'Define CPU, RAM y capacidades de red. t3.micro (gratuito en Free Tier) para apps ligeras, m5.large para uso general, c5 para computación intensiva.'
              },
              {
                title: 'Volúmenes EBS',
                icon: '💾',
                description: 'Almacenamiento persistente que se adjunta a la instancia. Los datos permanecen aunque apagues la instancia. No se borra al terminar.'
              },
              {
                title: 'Security Groups',
                icon: '🔒',
                description: 'Firewall virtual que controla tráfico entrante/saliente. Define qué puertos están abiertos y desde qué IPs se puede acceder.'
              },
              {
                title: 'VPC (Virtual Private Cloud)',
                icon: '🌐',
                description: 'Red privada en AWS. Las instancias se lanzan en una VPC. Controlas subnets, rutas, gateways de internet.'
              }
            ].map((concept, idx) => (
              <div key={idx} style={{
                backgroundColor: '#f0f4ff',
                border: '1px solid #2196F3',
                borderRadius: '8px',
                padding: '1.5rem'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                  <span style={{ fontSize: '1.8rem' }}>{concept.icon}</span>
                  <h4 style={{ margin: 0, fontSize: '0.95rem', color: '#2196F3' }}>{concept.title}</h4>
                </div>
                <p style={{ margin: 0, fontSize: '0.85rem', color: '#666', lineHeight: '1.5' }}>{concept.description}</p>
              </div>
            ))}
          </div>
        </>
      )
    },

    {
      title: 'Tipos de Instancias EC2',
      content: (
        <>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '2rem' }}>
            AWS ofrece diferentes <strong>familias de instancias</strong> optimizadas para diferentes cargas de trabajo. Elegir el tipo correcto es crucial para rendimiento y costo.
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '1.5rem',
            marginBottom: '2rem'
          }}>
            {[
              {
                family: 't3 / t4',
                name: 'Uso General (Ráfagas)',
                cpu: 'Variable',
                memory: 'Baja-Media',
                useCase: 'Apps ligeras, desarrollo, pequeños servidores web',
                example: 'WordPress, aplicaciones de bajo tráfico'
              },
              {
                family: 'm5 / m6',
                name: 'Uso General (Equilibrado)',
                cpu: 'Equilibrado',
                memory: 'Equilibrada',
                useCase: 'Aplicaciones web, APIs, bases de datos pequeñas',
                example: 'Servidor web moderado, backend equilibrado'
              },
              {
                family: 'c5 / c6',
                name: 'Optimizado para Computación',
                cpu: 'Alto',
                memory: 'Bajo-Medio',
                useCase: 'Procesamiento intensivo, compresión, análisis',
                example: 'Batch processing, análisis de datos'
              },
              {
                family: 'r5 / r6',
                name: 'Optimizado para Memoria',
                cpu: 'Equilibrado',
                memory: 'Muy Alto',
                useCase: 'Bases de datos en memoria, cache, big data',
                example: 'Redis, Memcached, bases de datos NoSQL'
              },
              {
                family: 'i3 / i4',
                name: 'Optimizado para I/O',
                cpu: 'Alto',
                memory: 'Muy Alto',
                useCase: 'Bases de datos NoSQL, almacenes de datos',
                example: 'Cassandra, MongoDB, Elasticsearch'
              },
              {
                family: 'g4 / p3',
                name: 'GPU / Aceleración',
                cpu: 'Varies',
                memory: 'Varies',
                useCase: 'Machine learning, renderizado, gaming',
                example: 'Entrenamiento ML, procesamiento gráfico'
              }
            ].map((type, idx) => (
              <div key={idx} style={{
                backgroundColor: '#fff9e6',
                border: '1px solid #f39c12',
                borderRadius: '8px',
                padding: '1.25rem'
              }}>
                <p style={{ fontSize: '0.8rem', fontWeight: '700', color: '#f39c12', margin: '0 0 0.3rem 0' }}>{type.family}</p>
                <h4 style={{ margin: '0 0 0.5rem 0', fontSize: '0.9rem', color: '#333' }}>{type.name}</h4>
                <p style={{ fontSize: '0.75rem', margin: '0.2rem 0', color: '#666' }}>
                  <strong>CPU:</strong> {type.cpu}
                </p>
                <p style={{ fontSize: '0.75rem', margin: '0.2rem 0', color: '#666' }}>
                  <strong>Memoria:</strong> {type.memory}
                </p>
                <p style={{ fontSize: '0.75rem', margin: '0.3rem 0', color: '#999', fontStyle: 'italic' }}>
                  {type.useCase}
                </p>
              </div>
            ))}
          </div>
        </>
      )
    },

    {
      title: 'Ciclo de Vida de una Instancia EC2',
      content: (
        <>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '2rem' }}>
            Las instancias EC2 pasan por diferentes estados desde que las lanzas hasta que las terminas. Entender estos estados te ayuda a gestionar costos y recursos.
          </p>

          <div style={{
            backgroundColor: '#f0f8ff',
            border: '2px solid #2196F3',
            borderRadius: '8px',
            padding: '2rem',
            marginBottom: '2rem'
          }}>
            <h3 style={{ color: '#2196F3', marginTop: 0, marginBottom: '1.5rem' }}>Estados de una Instancia</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
              {[
                { state: 'pending', icon: '⏳', desc: 'Se está iniciando. Durará unos segundos.' },
                { state: 'running', icon: '✅', desc: 'En funcionamiento. Se cobra tarifa normal.' },
                { state: 'stopping', icon: '⏹️', desc: 'Se está deteniendo. Transición rápida.' },
                { state: 'stopped', icon: '⛔', desc: 'Detenida. No se cobra computación, sí EBS.' },
                { state: 'terminating', icon: '🔄', desc: 'Se está terminando (irreversible).' },
                { state: 'terminated', icon: '❌', desc: 'Terminada. No se cobra. No se puede reiniciar.' }
              ].map((s, idx) => (
                <div key={idx} style={{ padding: '0.75rem', backgroundColor: '#ffffff', borderRadius: '6px', border: '1px solid #ddd' }}>
                  <p style={{ fontSize: '0.9rem', fontWeight: '700', margin: '0 0 0.3rem 0' }}>
                    <span style={{ fontSize: '1.3rem' }}>{s.icon}</span> {s.state}
                  </p>
                  <p style={{ fontSize: '0.8rem', margin: 0, color: '#666' }}>{s.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div style={{
            backgroundColor: '#fff3cd',
            border: '1px solid #ffc107',
            borderRadius: '8px',
            padding: '1.5rem'
          }}>
            <p style={{ margin: '0 0 0.5rem 0', fontSize: '0.95rem', fontWeight: '700' }}>💡 Consejo de Costo:</p>
            <p style={{ margin: 0, fontSize: '0.9rem', lineHeight: '1.6' }}>
              Si vas a parar una instancia por un tiempo, usa <strong>Stop</strong> (no se cobra cómputo, pero sí almacenamiento). Si no la necesitas más, usa <strong>Terminate</strong> (borra todo, no se cobra). Detén instancias de desarrollo cuando no las uses para ahorrar costos.
            </p>
          </div>
        </>
      )
    },

    {
      title: 'Almacenamiento en EC2: EBS vs Instance Store',
      content: (
        <>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '2rem',
            marginBottom: '2rem'
          }}>
            {/* EBS */}
            <div style={{
              backgroundColor: '#e3f2fd',
              border: '2px solid #2196F3',
              borderRadius: '8px',
              padding: '1.5rem'
            }}>
              <h3 style={{ color: '#2196F3', marginTop: 0 }}>💾 EBS (Elastic Block Store)</h3>
              <ul style={{ fontSize: '0.9rem', lineHeight: '1.7', margin: 0, paddingLeft: '1.5rem' }}>
                <li><strong>Persistente:</strong> Datos permanecen aunque apagues instancia</li>
                <li><strong>Independiente:</strong> Puedes desadjuntarlo y adjuntarlo a otra instancia</li>
                <li><strong>Snapshots:</strong> Crear copias de seguridad fácilmente</li>
                <li><strong>Flexible:</strong> Redimensionar volúmenes sin perder datos</li>
                <li><strong>Confiable:</strong> Replicado dentro de la zona de disponibilidad</li>
                <li><strong>Costo:</strong> Se cobra por GB almacenado</li>
              </ul>
            </div>

            {/* Instance Store */}
            <div style={{
              backgroundColor: '#f3e5f5',
              border: '2px solid #9b59b6',
              borderRadius: '8px',
              padding: '1.5rem'
            }}>
              <h3 style={{ color: '#9b59b6', marginTop: 0 }}>⚡ Instance Store</h3>
              <ul style={{ fontSize: '0.9rem', lineHeight: '1.7', margin: 0, paddingLeft: '1.5rem' }}>
                <li><strong>Temporal:</strong> Se pierde si apagas o terminas instancia</li>
                <li><strong>Rápido:</strong> Almacenamiento local, muy bajo latency</li>
                <li><strong>Incluido:</strong> Viene con algunas instancias sin costo adicional</li>
                <li><strong>Grande:</strong> Algunas instancias tienen cientos de GB</li>
                <li><strong>No persistente:</strong> No hay backups automáticos</li>
                <li><strong>Uso:</strong> Datos temporales, caché, datos de trabajo</li>
              </ul>
            </div>
          </div>

          <div style={{
            backgroundColor: '#fff3cd',
            border: '1px solid #ffc107',
            borderRadius: '8px',
            padding: '1.5rem'
          }}>
            <p style={{ margin: '0 0 0.5rem 0', fontSize: '0.95rem', fontWeight: '700' }}>📌 Recomendación:</p>
            <p style={{ margin: 0, fontSize: '0.9rem', lineHeight: '1.6' }}>
              Usa <strong>EBS para datos que necesitas mantener</strong> (sistema operativo, datos de aplicación, bases de datos). Usa <strong>Instance Store para datos temporales</strong> (caché, datos de trabajo, archivos temporales). Combina ambos para rendimiento óptimo.
            </p>
          </div>
        </>
      )
    },

    {
      title: 'Security Groups y Redes en EC2',
      content: (
        <>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '2rem' }}>
            La seguridad en EC2 comienza con <strong>Security Groups</strong>, que son firewalls virtuales que controlan el tráfico de red hacia y desde tu instancia.
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '2rem',
            marginBottom: '2rem'
          }}>
            {/* Reglas de Entrada */}
            <div style={{
              backgroundColor: '#e8f5e9',
              border: '2px solid #4CAF50',
              borderRadius: '8px',
              padding: '1.5rem'
            }}>
              <h3 style={{ color: '#2e7d32', marginTop: 0 }}>🔓 Reglas de Entrada (Inbound)</h3>
              <p style={{ fontSize: '0.9rem', margin: '0 0 1rem 0', color: '#555' }}>Controlan qué tráfico llega a tu instancia:</p>
              <ul style={{ fontSize: '0.9rem', lineHeight: '1.7', margin: 0, paddingLeft: '1.5rem' }}>
                <li>Puerto 22 (SSH) para acceso de terminal</li>
                <li>Puerto 80/443 (HTTP/HTTPS) para servidores web</li>
                <li>Puerto 3306 (MySQL), 5432 (PostgreSQL) para bases de datos</li>
                <li>Especifica protocolos: TCP, UDP, ICMP</li>
                <li>Rango de IPs (CIDR notation) o Security Groups</li>
              </ul>
            </div>

            {/* Reglas de Salida */}
            <div style={{
              backgroundColor: '#ffebee',
              border: '2px solid #f44336',
              borderRadius: '8px',
              padding: '1.5rem'
            }}>
              <h3 style={{ color: '#c62828', marginTop: 0 }}>🔒 Reglas de Salida (Outbound)</h3>
              <p style={{ fontSize: '0.9rem', margin: '0 0 1rem 0', color: '#555' }}>Controlan qué tráfico sale de tu instancia:</p>
              <ul style={{ fontSize: '0.9rem', lineHeight: '1.7', margin: 0, paddingLeft: '1.5rem' }}>
                <li>Por defecto: Todo tráfico de salida está permitido</li>
                <li>Puedes restringir si necesitas control estricto</li>
                <li>Ejemplo: descargas, actualizaciones de SO, API calls</li>
                <li>Importante para seguridad y cumplimiento</li>
                <li>Monitorea conexiones anormales</li>
              </ul>
            </div>
          </div>

          <div style={{
            backgroundColor: '#fff3cd',
            border: '1px solid #ffc107',
            borderRadius: '8px',
            padding: '1.5rem'
          }}>
            <p style={{ margin: '0 0 0.5rem 0', fontSize: '0.95rem', fontWeight: '700' }}>🔐 Mejores Prácticas de Seguridad:</p>
            <ul style={{ fontSize: '0.9rem', lineHeight: '1.7', margin: 0, paddingLeft: '1.5rem' }}>
              <li>No abras puerto SSH (22) a 0.0.0.0. Restringe a IPs conocidas</li>
              <li>Usa VPCs privadas para bases de datos, no públicas</li>
              <li>Configura grupos de seguridad por función (web, app, database)</li>
              <li>Habilita VPC Flow Logs para auditoría de tráfico</li>
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
