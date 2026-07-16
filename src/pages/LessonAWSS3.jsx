import { useState } from 'react';
import { LessonTemplate } from '../components';
import { LessonNavigation } from '../components/LessonNavigation';
import { useBreadcrumb } from '../hooks/useBreadcrumb';
import { useLessonNavigation } from '../hooks/useLessonNavigation';

export function LessonAWSS3() {
  const breadcrumbs = useBreadcrumb();
  const nav = useLessonNavigation();

  const sections = [
    {
      title: 'Introducción a Amazon S3',
      content: (
        <>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
            <strong>Amazon Simple Storage Service (S3)</strong> es un servicio de almacenamiento de objetos altamente escalable, seguro y confiable. Es uno de los servicios más antiguos y populares de AWS, diseñado para almacenar y recuperar cualquier cantidad de datos desde cualquier lugar.
          </p>

          <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
            A diferencia de un sistema de archivos tradicional (que tiene carpetas y jerarquías), S3 utiliza un modelo de <strong>almacenamiento de objetos</strong>. Cada objeto es un archivo con metadatos, almacenado en un contenedor llamado <strong>bucket</strong>.
          </p>

          <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
            S3 es <strong>extremadamente confiable</strong> (99.999999999% de durabilidad) y ofrece <strong>escalabilidad ilimitada</strong>. Puedes almacenar desde kilobytes hasta terabytes. Millones de empresas lo utilizan para copias de seguridad, análisis de datos, alojamiento de sitios web estáticos y mucho más.
          </p>
        </>
      )
    },

    {
      title: 'Conceptos Fundamentales de S3',
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
                title: 'Buckets',
                icon: '📦',
                color: '#3498db',
                description: 'Contenedores que almacenan objetos. Cada bucket tiene un nombre único globalmente en AWS. Es como una carpeta raíz.',
                note: 'Nombre único, debe empezar con letra o número, sin puntos consecutivos'
              },
              {
                title: 'Objetos',
                icon: '📄',
                color: '#2ecc71',
                description: 'Unidad básica de almacenamiento en S3. Contiene datos (archivo), metadatos (etiquetas, permisos) y una clave (nombre único dentro del bucket).',
                note: 'Pueden ser archivos de cualquier tamaño (hasta 5TB por archivo)'
              },
              {
                title: 'Claves (Keys)',
                icon: '🔑',
                color: '#e74c3c',
                description: 'Identificador único del objeto dentro de un bucket. Es como la ruta completa (miCarpeta/miArchivo.txt). Determina cómo se organiza y accede al objeto.',
                note: 'Soporta barras "/" para simular carpetas (aunque S3 es plano internamente)'
              }
            ].map((concept, idx) => (
              <div key={idx} style={{
                backgroundColor: '#ffffff',
                border: `3px solid ${concept.color}`,
                borderRadius: '12px',
                padding: '2rem',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = `0 8px 20px ${concept.color}30`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.08)';
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                  <span style={{ fontSize: '2.5rem' }}>{concept.icon}</span>
                  <h3 style={{ margin: 0, color: concept.color, fontSize: '1.2rem' }}>{concept.title}</h3>
                </div>
                <p style={{ fontSize: '0.95rem', color: '#666', marginBottom: '1rem', lineHeight: '1.6' }}>
                  {concept.description}
                </p>
                <div style={{ borderTop: `1px solid ${concept.color}20`, paddingTop: '1rem' }}>
                  <p style={{ fontSize: '0.85rem', fontWeight: '600', color: concept.color, marginBottom: '0.3rem' }}>Nota:</p>
                  <p style={{ margin: 0, fontSize: '0.85rem', color: '#555' }}>{concept.note}</p>
                </div>
              </div>
            ))}
          </div>
        </>
      )
    },

    {
      title: 'Clases de Almacenamiento en S3',
      content: (
        <>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '2rem' }}>
            AWS ofrece diferentes <strong>clases de almacenamiento</strong> optimizadas para diferentes patrones de acceso. Seleccionar la clase correcta te ayuda a optimizar costos.
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '1.5rem',
            marginBottom: '2rem'
          }}>
            {[
              {
                name: 'S3 Standard',
                icon: '⭐',
                cost: 'Normal',
                latency: 'Milisegundos',
                useCase: 'Acceso frecuente, datos activos',
                example: 'Sitios web, aplicaciones, contenido frecuente'
              },
              {
                name: 'S3 Intelligent-Tiering',
                icon: '🧠',
                cost: 'Variable (según acceso)',
                latency: 'Milisegundos',
                useCase: 'Acceso impredecible',
                example: 'Datos sin patrón claro de acceso'
              },
              {
                name: 'S3 Standard-IA',
                icon: '🔄',
                cost: 'Barato (pero costo por acceso)',
                latency: 'Milisegundos',
                useCase: 'Acceso infrecuente (< 1x mes)',
                example: 'Backups, archivos no usados frecuentemente'
              },
              {
                name: 'S3 Glacier',
                icon: '🧊',
                cost: 'Muy barato',
                latency: 'Horas (restauración lenta)',
                useCase: 'Archivado largo plazo',
                example: 'Cumplimiento normativo, datos históricos'
              },
              {
                name: 'S3 Glacier Deep Archive',
                icon: '❄️',
                cost: 'Mínimo (máximo ahorro)',
                latency: 'Hasta 12 horas',
                useCase: 'Archivado ultra largo plazo',
                example: 'Archivos de 7+ años, cumplimiento'
              },
              {
                name: 'S3 Outposts',
                icon: '🏗️',
                cost: 'Según configuración',
                latency: 'Local',
                useCase: 'En tus instalaciones (hybrid)',
                example: 'Soberanía de datos, baja latencia'
              }
            ].map((storage, idx) => (
              <div key={idx} style={{
                backgroundColor: '#f8f9fa',
                border: '1px solid #ddd',
                borderRadius: '8px',
                padding: '1.25rem'
              }}>
                <div style={{ marginBottom: '0.5rem' }}>
                  <span style={{ fontSize: '1.5rem' }}>{storage.icon}</span>
                  <h4 style={{ margin: '0.3rem 0 0 0', fontSize: '0.95rem', fontWeight: '700', color: '#2c3e50' }}>{storage.name}</h4>
                </div>
                <p style={{ fontSize: '0.8rem', margin: '0.3rem 0', color: '#666' }}>
                  <strong>Costo:</strong> {storage.cost}
                </p>
                <p style={{ fontSize: '0.8rem', margin: '0.3rem 0', color: '#666' }}>
                  <strong>Latencia:</strong> {storage.latency}
                </p>
                <p style={{ fontSize: '0.8rem', margin: '0.3rem 0', color: '#666' }}>
                  <strong>Caso:</strong> {storage.useCase}
                </p>
                <p style={{ fontSize: '0.75rem', margin: '0.3rem 0 0 0', fontStyle: 'italic', color: '#999' }}>
                  {storage.example}
                </p>
              </div>
            ))}
          </div>
        </>
      )
    },

    {
      title: 'Seguridad y Control de Acceso en S3',
      content: (
        <>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '2rem' }}>
            La seguridad es crítica en S3. AWS proporciona múltiples mecanismos para controlar quién puede acceder a tus datos.
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '2rem',
            marginBottom: '2rem'
          }}>
            {/* Controles de Acceso */}
            <div style={{
              backgroundColor: '#f0f8ff',
              border: '2px solid #2196F3',
              borderRadius: '8px',
              padding: '1.5rem'
            }}>
              <h3 style={{ color: '#2196F3', marginTop: 0 }}>🔐 Controles de Acceso</h3>
              <ul style={{ fontSize: '0.95rem', lineHeight: '1.8', margin: 0, paddingLeft: '1.5rem' }}>
                <li><strong>Privado por defecto:</strong> Los buckets comienzan sin acceso público</li>
                <li><strong>Políticas de bucket:</strong> Control JSON de quién accede qué</li>
                <li><strong>ACLs (Access Control Lists):</strong> Control legado, no recomendado</li>
                <li><strong>Presigned URLs:</strong> URL temporal para acceso sin credenciales</li>
                <li><strong>IAM Roles:</strong> Control de acceso con usuarios/roles AWS</li>
                <li><strong>Encriptación:</strong> SSE-S3, SSE-KMS o cliente</li>
              </ul>
            </div>

            {/* Mejores Prácticas */}
            <div style={{
              backgroundColor: '#e8f5e9',
              border: '2px solid #4CAF50',
              borderRadius: '8px',
              padding: '1.5rem'
            }}>
              <h3 style={{ color: '#2e7d32', marginTop: 0 }}>✅ Mejores Prácticas</h3>
              <ul style={{ fontSize: '0.95rem', lineHeight: '1.8', margin: 0, paddingLeft: '1.5rem' }}>
                <li><strong>Mantén privado:</strong> No hagas público a menos que sea necesario</li>
                <li><strong>Usa IAM:</strong> Controla acceso con roles en lugar de credenciales</li>
                <li><strong>Encripta datos:</strong> Especialmente datos sensibles</li>
                <li><strong>Versionado:</strong> Habilita para recuperar versiones antiguas</li>
                <li><strong>MFA Delete:</strong> Requiere MFA para eliminar permanentemente</li>
                <li><strong>Logs de acceso:</strong> Monitorea quién accede a qué</li>
              </ul>
            </div>
          </div>
        </>
      )
    },

    {
      title: 'Casos de Uso Comunes de S3',
      content: (
        <>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '1.5rem'
          }}>
            {[
              {
                title: '🌐 Sitios Web Estáticos',
                description: 'Aloja HTML, CSS, JavaScript directamente en S3. Configura S3 para servir como sitio web estático.'
              },
              {
                title: '💾 Backup y Recuperación',
                description: 'Almacena backups de bases de datos, máquinas virtuales, configuraciones. Usa Glacier para archivado de largo plazo.'
              },
              {
                title: '📊 Data Lake',
                description: 'Repositorio central para big data. Almacena datos crudos en S3 y analiza con Athena, EMR o Redshift.'
              },
              {
                title: '📹 Distribución de Contenido',
                description: 'Almacena videos, imágenes, documentos. Usa CloudFront para servir desde ubicaciones cercanas a usuarios.'
              },
              {
                title: '📝 Logs y Registros',
                description: 'Almacena logs de aplicaciones, servidores web, acceso. Usa S3 para análisis y auditoría.'
              },
              {
                title: '🤖 Machine Learning',
                description: 'S3 es el almacenamiento estándar para datasets en SageMaker y otros servicios ML de AWS.'
              }
            ].map((useCase, idx) => (
              <div key={idx} style={{
                backgroundColor: '#fff3cd',
                border: '1px solid #ffc107',
                borderRadius: '8px',
                padding: '1.5rem',
                display: 'flex',
                gap: '1rem'
              }}>
                <div>
                  <h4 style={{ margin: '0 0 0.3rem 0', fontSize: '0.95rem' }}>{useCase.title}</h4>
                  <p style={{ margin: 0, fontSize: '0.85rem', color: '#666' }}>{useCase.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div style={{
            backgroundColor: '#fff3cd',
            border: '1px solid #ffc107',
            borderRadius: '8px',
            padding: '1.5rem',
            marginTop: '2rem'
          }}>
            <p style={{ margin: '0 0 0.5rem 0', fontSize: '0.95rem', fontWeight: '700' }}>💡 Ventaja Clave de S3:</p>
            <p style={{ margin: 0, fontSize: '0.9rem', lineHeight: '1.6' }}>
              S3 es <strong>altamente disponible, duradero y confiable</strong>. No necesitas gestionar infraestructura. Solo sube tus datos y AWS se encarga del resto. Millones de solicitudes por segundo, sin límite de escalabilidad.
            </p>
          </div>
        </>
      )
    },

    {
      title: 'Caso Práctico: DataAnalytics',
      content: (
        <>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
            ¿Quieres ver cómo una plataforma de análisis de datos (DataAnalytics) garantizó durabilidad de 11-nines con 500TB de datos usando S3 Lifecycle y Glacier?
          </p>
          <div style={{
            backgroundColor: '#e8f4f8',
            border: '2px solid #0066cc',
            borderRadius: '8px',
            padding: '1.5rem',
            textAlign: 'center'
          }}>
            <a href="/aws/casos-reales/s3" style={{
              display: 'inline-block',
              backgroundColor: '#0066cc',
              color: '#ffffff',
              padding: '0.75rem 2rem',
              borderRadius: '6px',
              textDecoration: 'none',
              fontSize: '1rem',
              fontWeight: '600',
              transition: 'background-color 0.3s'
            }}>
              Ver Caso Real: DataAnalytics
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
