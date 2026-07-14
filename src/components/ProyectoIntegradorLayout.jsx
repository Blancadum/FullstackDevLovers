import { useState } from 'react';
import './ProyectoIntegradorLayout.css';
import { TimelineTabbed } from './TimelineTabbed';
import { ViabilityChecklist } from './ViabilityChecklist';
import { RequiredComponents } from './RequiredComponents';
import { DifferentiatorOptions } from './DifferentiatorOptions';
import { RetosSelector } from './RetosSelector';
import { ejemplosTFCData } from '../data/ejemplosTFCData';
import { InfoBox } from './index';

export function ProyectoIntegradorLayout() {
  const [selectedTab, setSelectedTab] = useState('planificacion');
  const [selectedProjectId, setSelectedProjectId] = useState(null);

  const selectedProject = selectedProjectId ? ejemplosTFCData.find(p => p.id === selectedProjectId) : null;

  const tabs = [
    {
      id: 'planificacion',
      label: 'Planificación'
    },
    {
      id: 'metodologia',
      label: 'Metodología'
    },
    {
      id: 'desarrollo',
      label: 'Desarrollo'
    },
    {
      id: 'testing',
      label: 'Testing'
    },
    {
      id: 'despliegue',
      label: 'Despliegue'
    },
    {
      id: 'retos',
      label: 'Retos DAW'
    },
    {
      id: 'ejemplos',
      label: 'Ejemplos de TFC'
    }
  ];

  const renderContent = () => {
    switch (selectedTab) {
      case 'planificacion':
        return (
          <>
            <h2>Planificación</h2>
            <p>
              La planificación es el primer paso crítico para el éxito de tu TFC. Aquí aprenderás a definir tu proyecto
              de forma clara, identificar a tus usuarios y establecer un alcance realista.
            </p>

            <h3>¿Qué es? - Descripción del Proyecto</h3>
            <p>
              Describe tu proyecto en una o dos frases claras. No se trata de detalles técnicos, sino de explicar
              qué hace tu aplicación de forma que cualquiera pueda entenderlo.
            </p>
            <p style={{ color: '#6b7280', fontStyle: 'italic' }}>
              Ejemplo: Sistema de gestión de tareas colaborativo que permite a los equipos organizar su trabajo en proyectos y sprints.
            </p>

            <h3>¿Para Quién? - Usuarios Objetivo</h3>
            <p>
              Identifica quiénes serán los usuarios de tu aplicación. Define sus características principales y qué problema específico tienen.
            </p>

            <h3>¿Por Qué? - Objetivo y Problema</h3>
            <p>
              Explica qué problema resuelve tu aplicación y cuál es su objetivo. ¿Qué mejora aportarás a la vida de tus usuarios?
            </p>

            <h3>¿Cuál es el Alcance? - Qué Incluye y Qué No</h3>
            <p>
              Define claramente qué funcionalidades SÍ tendrá tu aplicación y cuáles NO. Diferencia entre lo que es esencial (MVP) y lo que son mejoras futuras.
            </p>

            <h3>¿Cuál es el Timeline? - Duración del Desarrollo</h3>
            <p>
              Establece un tiempo realista para completar tu proyecto basándote en los componentes obligatorios y el diferenciador que hayas elegido.
            </p>

            <InfoBox type="info">
              <strong>Consejo:</strong> Documenta todos estos puntos en tu especificación inicial. Será la brújula de tu proyecto.
            </InfoBox>
          </>
        );

      case 'metodologia':
        return (
          <>
            <h2>Metodología</h2>
            <p>
              Aquí encontrarás los criterios de viabilidad que debe cumplir tu proyecto y el timeline recomendado
              para completarlo en 6 meses.
            </p>

            <h3>Evaluación de Viabilidad</h3>
            <p>Revisa estos 5 criterios antes de elegir tu proyecto:</p>
            <ViabilityChecklist />

            <h3 style={{ marginTop: '32px' }}>Timeline Recomendado (6 meses)</h3>
            <p>Planifica tu proyecto en sprints de 3-4 semanas cada uno:</p>
            <TimelineTabbed />

            <InfoBox type="info">
              <strong>Revisión periódica:</strong> Mes 2 (Sprint 1), Mes 4 (Sprint 2), Mes 6 (entrega final)
            </InfoBox>
          </>
        );

      case 'desarrollo':
        return (
          <>
            <h2>Desarrollo</h2>
            <p>
              Tu TFC debe incluir componentes técnicos que demuestren tu dominio en diferentes áreas del desarrollo.
            </p>

            <h3>Componentes Obligatorios</h3>
            <p>
              Tu proyecto debe incluir backend, frontend, base de datos, documentación y deployment.
              Selecciona cada categoría para ver los detalles:
            </p>
            <RequiredComponents />

            <h3 style={{ marginTop: '32px' }}>Diferenciador: Lo que te Hace Único</h3>
            <p>
              El diferenciador es lo que te destaca. Elige una opción que realmente agregue valor a tu proyecto:
            </p>
            <DifferentiatorOptions />

            <h3 style={{ marginTop: '32px' }}>Ejemplo Práctico: Tienda Online</h3>
            <p>
              Para entender mejor cómo diseñar correctamente la base de datos y las entidades,
              estudia este ejemplo de una tienda online:
            </p>
            <pre style={{
              backgroundColor: '#f3f4f6',
              padding: '16px',
              borderRadius: '8px',
              overflow: 'auto',
              fontSize: '12px',
              lineHeight: '1.5',
              border: '1px solid #e5e7eb'
            }}>
{`ENTIDADES PRINCIPALES:

Usuario ← → Pedido ← → PedidoDetalle ← → Producto

RELACIONES:
• 1 Usuario : N Pedidos
• 1 Pedido : N PedidoDetalle
• 1 Producto : N PedidoDetalle`}
            </pre>
          </>
        );

      case 'testing':
        return (
          <>
            <h2>Testing</h2>
            <p>
              El testing es una parte crítica del desarrollo profesional. Tu proyecto debe incluir:
            </p>

            <h3>Tests Unitarios</h3>
            <p>
              Pruebas de funciones individuales. Valida que cada componente funcione correctamente en aislamiento.
              Objetivo: al menos 70% de cobertura en la lógica de negocio.
            </p>

            <h3>Tests de Integración</h3>
            <p>
              Pruebas que validan la interacción entre múltiples componentes. Por ejemplo: login → crear tarea → visualizar en listado.
            </p>

            <h3>Tests E2E (End-to-End)</h3>
            <p>
              Pruebas que simulan el flujo completo de un usuario real. Desde que entra a la aplicación hasta que completa una acción.
            </p>

            <h3>Performance</h3>
            <ul>
              <li>Páginas cargan en menos de 2 segundos</li>
              <li>APIs responden en menos de 500ms</li>
              <li>Aplicación soporta 100+ usuarios simultáneos</li>
            </ul>

            <h3>Seguridad</h3>
            <ul>
              <li>Autenticación JWT correctamente implementada</li>
              <li>Contraseñas encriptadas con bcrypt</li>
              <li>Input sanitization en todos los formularios</li>
              <li>HTTPS en producción</li>
            </ul>

            <InfoBox type="success">
              <strong>Métrica importante:</strong> Los evaluadores valoran mucho la calidad de los tests.
              Un proyecto bien testeado vale más que uno con muchas features sin testing.
            </InfoBox>
          </>
        );

      case 'despliegue':
        return (
          <>
            <h2>Despliegue</h2>
            <p>
              Tu proyecto debe estar deployado en internet y ser accesible públicamente. Esto demuestra
              que entiendes el ciclo completo de desarrollo.
            </p>

            <h3>Infraestructura</h3>
            <ul>
              <li><strong>Servidor:</strong> AWS, Heroku, Google Cloud, DigitalOcean, etc.</li>
              <li><strong>Base de Datos:</strong> En servidor remoto (no en local)</li>
              <li><strong>SSL/HTTPS:</strong> Certificado de seguridad (Let's Encrypt es gratuito)</li>
              <li><strong>Dominio:</strong> Opcional pero profesional si lo tienes</li>
            </ul>

            <h3>Configuración</h3>
            <ul>
              <li>Variables de entorno por stage (desarrollo, staging, producción)</li>
              <li>Backup automático de base de datos</li>
              <li>Logs centralizados para debugging</li>
              <li>Monitoreo de errores (Sentry, Rollbar)</li>
            </ul>

            <h3>Documentación</h3>
            <ul>
              <li>README con instrucciones de setup</li>
              <li>Guía de instalación paso a paso</li>
              <li>Credenciales de demostración (usuario/contraseña para testing)</li>
              <li>Link directo a la aplicación deployada</li>
            </ul>

            <InfoBox type="info">
              <strong>Herramientas recomendadas:</strong>
              <ul style={{ marginTop: '8px' }}>
                <li>Backend: Railway, Render, Replit</li>
                <li>Frontend: Vercel, Netlify</li>
                <li>Base de Datos: Neon (PostgreSQL), PlanetScale (MySQL)</li>
              </ul>
            </InfoBox>
          </>
        );

      case 'retos':
        return (
          <>
            <h2>Retos DAW - Hoja de Ruta</h2>
            <p>
              A lo largo del curso, deberás completar 8 retos que te guiarán desde la idea inicial hasta la entrega final.
              Cada reto tiene un plazo, una puntuación y entregables específicos.
            </p>
            <RetosSelector />
          </>
        );

      case 'ejemplos':
        return (
          <>
            <h2>Ejemplos de Proyectos TFC</h2>
            <p>
              Explora 12 ejemplos de proyectos viables para tu TFC. Selecciona uno para ver detalles completos,
              funcionalidades, diferenciadores y stack tecnológico recomendado.
            </p>

            <div style={{ marginBottom: '24px' }}>
              <label htmlFor="project-selector" style={{ display: 'block', marginBottom: '8px', fontWeight: '600' }}>
                Elige un proyecto TFC:
              </label>
              <select
                id="project-selector"
                value={selectedProjectId || ''}
                onChange={(e) => setSelectedProjectId(e.target.value ? parseInt(e.target.value) : null)}
                style={{
                  width: '100%',
                  maxWidth: '500px',
                  padding: '10px 12px',
                  fontSize: '16px',
                  border: '1px solid #ddd',
                  borderRadius: '6px',
                  backgroundColor: '#fff',
                  cursor: 'pointer'
                }}
              >
                <option value="">-- Selecciona un proyecto --</option>
                {ejemplosTFCData.map(project => (
                  <option key={project.id} value={project.id}>
                    {project.title} - {project.subtitle}
                  </option>
                ))}
              </select>
            </div>

            {selectedProject && (
              <div style={{
                backgroundColor: '#f8f9fa',
                border: '1px solid #e0e0e0',
                borderRadius: '8px',
                padding: '24px',
              }}>
                <div style={{ marginBottom: '20px' }}>
                  <h3 style={{ margin: '0 0 8px 0' }}>{selectedProject.title}</h3>
                  <p style={{ margin: '0 0 16px 0', color: '#666' }}>{selectedProject.subtitle}</p>

                  <div style={{ display: 'flex', gap: '12px', marginBottom: '16px', flexWrap: 'wrap' }}>
                    <span style={{
                      backgroundColor: '#e3f2fd',
                      color: '#1976d2',
                      padding: '4px 10px',
                      borderRadius: '4px',
                      fontSize: '12px',
                      fontWeight: '500'
                    }}>
                      {selectedProject.category}
                    </span>
                    <span style={{
                      backgroundColor: '#fff3e0',
                      color: '#f57c00',
                      padding: '4px 10px',
                      borderRadius: '4px',
                      fontSize: '12px',
                      fontWeight: '500'
                    }}>
                      {selectedProject.complexity}
                    </span>
                    <span style={{
                      backgroundColor: '#e8f5e9',
                      color: '#388e3c',
                      padding: '4px 10px',
                      borderRadius: '4px',
                      fontSize: '12px',
                      fontWeight: '500'
                    }}>
                      {selectedProject.duration}
                    </span>
                    <span style={{
                      backgroundColor: '#f3e5f5',
                      color: '#7b1fa2',
                      padding: '4px 10px',
                      borderRadius: '4px',
                      fontSize: '12px',
                      fontWeight: '500'
                    }}>
                      Equipo: {selectedProject.teamSize}
                    </span>
                  </div>
                </div>

                <div style={{ whiteSpace: 'pre-wrap', fontFamily: 'monospace', fontSize: '14px', lineHeight: '1.6', color: '#333' }}>
                  {selectedProject.content}
                </div>
              </div>
            )}
          </>
        );

      default:
        return null;
    }
  };

  return (
    <div className="proyecto-layout">
      <div className="proyecto-header">
        <h1>Proyecto Integrador</h1>
        <p>Proyecto final integrando Java Backend, Spring Boot, Bases de Datos y más</p>
      </div>

      <div className="proyecto-container">
        <div className="proyecto-tabs">
          {tabs.map(tab => (
            <button
              key={tab.id}
              className={`proyecto-tab ${selectedTab === tab.id ? 'active' : ''}`}
              onClick={() => setSelectedTab(tab.id)}
            >
              <span className="tab-label">{tab.label}</span>
            </button>
          ))}
        </div>

        <div className="proyecto-content">
          {renderContent()}
        </div>
      </div>
    </div>
  );
}
