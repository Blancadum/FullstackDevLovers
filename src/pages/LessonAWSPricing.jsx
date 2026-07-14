import { useState } from 'react';
import { LessonTemplate } from '../components';
import { LessonNavigation } from '../components/LessonNavigation';
import { useBreadcrumb } from '../hooks/useBreadcrumb';
import { useLessonNavigation } from '../hooks/useLessonNavigation';

export function LessonAWSPricing() {
  const breadcrumbs = useBreadcrumb();
  const nav = useLessonNavigation();

  const sections = [
    {
      title: 'Introducción al Pricing de AWS',
      content: (
        <>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
            AWS utiliza un <strong>modelo de precios de pago por uso</strong> (pay-as-you-go). No hay costos iniciales ni compromisos a largo plazo. Solo pagas por los recursos que utilizas, cuando los utilizas. Este modelo es diferente a la infraestructura tradicional donde compras hardware que puede no estar completamente utilizado.
          </p>

          <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
            El pricing de AWS tiene tres componentes principales: <strong>cálculo</strong> (instancias EC2), <strong>almacenamiento</strong> (S3, EBS) y <strong>transferencia de datos</strong>. Entender cómo se cobran estos servicios es crucial para evitar sorpresas en tu factura.
          </p>

          <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
            AWS ofrece la <strong>capa gratuita (Free Tier)</strong> con límites de uso sin costo, perfecta para aprender y experimentar sin riesgo económico.
          </p>
        </>
      )
    },

    {
      title: 'Modelos de Precios en AWS',
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
                title: 'On-Demand',
                icon: '💳',
                color: '#3498db',
                description: 'Paga por cada hora (o segundo) de uso. Sin compromisos. Ideal para cargas variables o impredecibles.',
                example: 'Desarrollo, testing, aplicaciones con tráfico fluctuante',
                priceNote: 'Precio normal, el más flexible'
              },
              {
                title: 'Reserved Instances (RI)',
                icon: '📅',
                color: '#27ae60',
                description: 'Reserva capacidad por 1 o 3 años. Descuentos de hasta 72% respecto a On-Demand. Requiere compromiso.',
                example: 'Cargas de producción predecibles, servidores 24/7',
                priceNote: '30-72% de descuento según duración'
              },
              {
                title: 'Savings Plans',
                icon: '🎯',
                color: '#e74c3c',
                description: 'Compromiso de gasto por 1 o 3 años en cualquier servicio. Más flexible que RI. Descuentos de hasta 72%.',
                example: 'Empresas con presupuesto flexible en servicios AWS',
                priceNote: 'Similar a RI pero más flexible'
              },
              {
                title: 'Spot Instances',
                icon: '⚡',
                color: '#f39c12',
                description: 'Utiliza capacidad no utilizada. Hasta 90% descuento. Pueden ser interrumpidas. Sin compromiso.',
                example: 'Procesamiento por lotes, análisis de datos, cargas tolerantes a interrupciones',
                priceNote: 'Hasta 90% descuento, pero puede pausarse'
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
                  <p style={{ fontSize: '0.85rem', fontWeight: '600', color: model.color, marginBottom: '0.3rem' }}>Caso de uso:</p>
                  <p style={{ fontSize: '0.85rem', color: '#555', marginBottom: '0.5rem' }}>{model.example}</p>
                  <p style={{ fontSize: '0.85rem', fontWeight: '600', color: model.color }}>💰 {model.priceNote}</p>
                </div>
              </div>
            ))}
          </div>
        </>
      )
    },

    {
      title: 'Factores que Afectan el Precio',
      content: (
        <>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '2rem' }}>
            El precio de AWS varía según varios factores. Es importante entender estos factores para optimizar costos.
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '1.5rem',
            marginBottom: '2rem'
          }}>
            {[
              {
                title: '🌍 Región',
                description: 'Diferentes regiones tienen diferentes precios. Regiones más cercanas a ti suelen ser más caras.'
              },
              {
                title: '⏱️ Duración de Uso',
                description: 'On-Demand por hora, Reserved Instances por años. Más duración = más descuento.'
              },
              {
                title: '🔄 Transferencia de Datos',
                description: 'Datos entrantes (ingress) son gratis. Datos salientes (egress) se cobran. Entre regiones cuesta más.'
              },
              {
                title: '💾 Tipo de Almacenamiento',
                description: 'S3 Standard vs S3 Glacier. Acceso frecuente vs acceso infrecuente tiene precios distintos.'
              },
              {
                title: '⚙️ Especificaciones de Recurso',
                description: 'Más CPU, RAM, almacenamiento = más caro. Familia de procesador (generación) también afecta precio.'
              },
              {
                title: '📊 Tipo de Sistema Operativo',
                description: 'Linux/Unix es más barato. Windows, SQL Server, etc. tienen costo adicional.'
              }
            ].map((factor, idx) => (
              <div key={idx} style={{
                backgroundColor: '#f0f4ff',
                border: '1px solid #2196F3',
                borderRadius: '8px',
                padding: '1.5rem'
              }}>
                <h4 style={{ margin: '0 0 0.5rem 0', fontSize: '0.95rem', color: '#2196F3' }}>{factor.title}</h4>
                <p style={{ margin: 0, fontSize: '0.9rem', color: '#666' }}>{factor.description}</p>
              </div>
            ))}
          </div>
        </>
      )
    },

    {
      title: 'Calculadora y Estimación de Costos',
      content: (
        <>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
            AWS proporciona herramientas para <strong>estimar tus costos antes de desplegar</strong>. Esto te ayuda a planificar tu presupuesto y evitar sorpresas.
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2rem',
            marginBottom: '2rem'
          }}>
            {[
              {
                name: 'AWS Pricing Calculator',
                icon: '🧮',
                description: 'Herramienta online para estimar costos. Selecciona servicios, región, cantidad y duración. Te da un presupuesto estimado.',
                url: 'calculator.aws'
              },
              {
                name: 'AWS Cost Explorer',
                icon: '📊',
                description: 'Visualiza tus costos actuales y tendencias. Analiza gastos por servicio, región o tag. Solo disponible si tienes recursos activos.',
                url: 'AWS Console'
              },
              {
                name: 'AWS Budgets',
                icon: '💰',
                description: 'Define presupuestos y recibe alertas cuando aproximas el límite. Ayuda a controlar gastos inesperados.',
                url: 'AWS Console'
              }
            ].map((tool, idx) => (
              <div key={idx} style={{
                backgroundColor: '#fff9e6',
                border: '2px solid #f39c12',
                borderRadius: '8px',
                padding: '1.5rem'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                  <span style={{ fontSize: '2rem' }}>{tool.icon}</span>
                  <h4 style={{ margin: 0, color: '#f39c12', fontSize: '1.05rem' }}>{tool.name}</h4>
                </div>
                <p style={{ fontSize: '0.9rem', color: '#666', marginBottom: '0.5rem' }}>{tool.description}</p>
                <p style={{ fontSize: '0.85rem', fontStyle: 'italic', color: '#999', margin: 0 }}>{tool.url}</p>
              </div>
            ))}
          </div>

          <div style={{
            backgroundColor: '#e8f5e9',
            border: '2px solid #4CAF50',
            borderRadius: '8px',
            padding: '1.5rem'
          }}>
            <p style={{ margin: '0 0 0.5rem 0', fontSize: '0.95rem', fontWeight: '700', color: '#2e7d32' }}>💡 Consejo:</p>
            <p style={{ margin: 0, fontSize: '0.9rem', color: '#555', lineHeight: '1.6' }}>
              Usa la Calculadora de AWS <strong>antes</strong> de empezar a crear recursos. Estima costos para tu arquitectura planeada. Luego monitorea con Cost Explorer durante el desarrollo.
            </p>
          </div>
        </>
      )
    },

    {
      title: 'Optimización de Costos',
      content: (
        <>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '2rem' }}>
            La optimización de costos es un proceso continuo. Aquí hay estrategias prácticas para reducir tu gasto en AWS sin sacrificar rendimiento.
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '2rem',
            marginBottom: '2rem'
          }}>
            {/* Estrategias de Optimización */}
            <div style={{
              backgroundColor: '#f0f8ff',
              border: '2px solid #2196F3',
              borderRadius: '8px',
              padding: '1.5rem'
            }}>
              <h3 style={{ color: '#2196F3', marginTop: 0 }}>✅ Estrategias Clave</h3>
              <ul style={{ fontSize: '0.95rem', lineHeight: '1.8', margin: 0, paddingLeft: '1.5rem' }}>
                <li><strong>Reserved Instances:</strong> Para producción predecible, RI da hasta 72% descuento</li>
                <li><strong>Spot Instances:</strong> Para datos, análisis, CI/CD - hasta 90% ahorro</li>
                <li><strong>Autoscaling:</strong> Escala automáticamente según demanda</li>
                <li><strong>Tagging:</strong> Etiqueta recursos para identificar gastos por proyecto/equipo</li>
                <li><strong>Monitoreo activo:</strong> Revisa Cost Explorer regularmente</li>
                <li><strong>Elimina recursos no usados:</strong> Detén instancias, elimina snapshots viejos</li>
              </ul>
            </div>

            {/* Errores a Evitar */}
            <div style={{
              backgroundColor: '#ffebee',
              border: '2px solid #f44336',
              borderRadius: '8px',
              padding: '1.5rem'
            }}>
              <h3 style={{ color: '#c62828', marginTop: 0 }}>⚠️ Errores Comunes</h3>
              <ul style={{ fontSize: '0.95rem', lineHeight: '1.8', margin: 0, paddingLeft: '1.5rem' }}>
                <li><strong>No usar Free Tier:</strong> Hay límites generosos para aprender</li>
                <li><strong>Snapshots abandonados:</strong> Se cobran aunque no uses la instancia</li>
                <li><strong>Datos no optimizados:</strong> Transferencia de datos entre regiones es cara</li>
                <li><strong>On-Demand siempre:</strong> Usa Reserved o Spot para ahorrar</li>
                <li><strong>No monitorear:</strong> Sorpresas en la factura si no revisas regularmente</li>
                <li><strong>Olvidar eliminar recursos:</strong> Apaga instancias de prueba cuando termines</li>
              </ul>
            </div>
          </div>

          <div style={{
            backgroundColor: '#fff3cd',
            border: '1px solid #ffc107',
            borderRadius: '8px',
            padding: '1.5rem'
          }}>
            <p style={{ margin: '0 0 0.5rem 0', fontSize: '0.95rem', fontWeight: '700' }}>🎯 Consejo Final:</p>
            <p style={{ margin: 0, fontSize: '0.9rem', lineHeight: '1.6' }}>
              Empieza con On-Demand para entender tu patrón de uso. Después, optimiza con Reserved Instances o Spot Instances cuando identifiques cargas predecibles. Revisa Cost Explorer mensualmente.
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
      <LessonNavigation
        previousLink={nav.previous}
        previousTitle={nav.previousTitle}
        nextLink={nav.next}
        nextTitle={nav.nextTitle}
      />
    </>
  );
}
