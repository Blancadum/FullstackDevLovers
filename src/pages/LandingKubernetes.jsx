import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useBreadcrumb } from '../hooks/useBreadcrumb';

export function LandingKubernetes() {
  const [activeTab, setActiveTab] = useState('fundamentales');
  const [expandedLesson, setExpandedLesson] = useState(null);
  const navigate = useNavigate();
  const breadcrumbs = useBreadcrumb();

  return (
    <div style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
      {/* Breadcrumbs */}
      <nav style={{ marginBottom: '2rem', fontSize: '0.9rem' }}>
        {breadcrumbs.map((crumb, idx) => (
          <span key={idx}>
            {crumb.link ? (
              <a href={crumb.link} style={{ color: '#0066cc', textDecoration: 'none', cursor: 'pointer' }}>
                {crumb.label}
              </a>
            ) : (
              <span>{crumb.label}</span>
            )}
            {idx < breadcrumbs.length - 1 && ' > '}
          </span>
        ))}
      </nav>

      {/* Hero */}
      <div style={{
        textAlign: 'center',
        marginBottom: '4rem',
        padding: '3rem 0'
      }}>
        <h1 style={{ fontSize: '3.5rem', margin: '0 0 1rem 0', color: '#ff006e' }}>
          ☸️ Kubernetes
        </h1>
        <p style={{ fontSize: '1.3rem', color: '#666', margin: 0, lineHeight: '1.6' }}>
          Orquestación de contenedores a escala empresarial<br/>
          <span style={{ fontSize: '1rem', color: '#999' }}>Automatiza el despliegue, escalado y gestión de aplicaciones</span>
        </p>
      </div>

      {/* Tabs Navigation */}
      <div style={{
        marginBottom: '3rem',
        borderBottom: '2px solid #e0e0e0',
        display: 'flex',
        gap: '0.5rem',
        overflowX: 'auto',
        paddingBottom: '1rem'
      }}>
        {[
          { id: 'fundamentales', label: 'Fundamentales', icon: '📖' },
          { id: 'comparativas', label: 'Comparativas & Guías', icon: '🔄' }
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            style={{
              padding: '0.75rem 1.5rem',
              border: 'none',
              background: activeTab === tab.id ? 'linear-gradient(135deg, #ff006e 0%, #ffffff 100%)' : '#f5f5f5',
              color: activeTab === tab.id ? '#fff' : '#333',
              borderRadius: '8px 8px 0 0',
              cursor: 'pointer',
              fontWeight: activeTab === tab.id ? '600' : '500',
              fontSize: '0.95rem',
              transition: 'all 0.3s',
              whiteSpace: 'nowrap',
              borderBottom: activeTab === tab.id ? '3px solid #c2004d' : 'none'
            }}
            onMouseEnter={(e) => {
              if (activeTab !== tab.id) {
                e.currentTarget.style.backgroundColor = '#efefef';
              }
            }}
            onMouseLeave={(e) => {
              if (activeTab !== tab.id) {
                e.currentTarget.style.backgroundColor = '#f5f5f5';
              }
            }}
          >
            {tab.icon} {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div style={{ marginBottom: '4rem' }}>
        {activeTab === 'fundamentales' && (
          <div>
            <h2 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: '#333' }}>
              Fundamentales
            </h2>
            <p style={{ fontSize: '0.95rem', color: '#666', marginBottom: '2rem', fontStyle: 'italic', lineHeight: '1.6' }}>
              Comienza aquí: qué es Kubernetes, arquitectura, conceptos clave. Todo lo que necesitas saber para entender cómo Kubernetes gestiona contenedores.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {[
                {
                  num: 1,
                  title: 'Introducción: Qué es Kubernetes',
                  link: '/kubernetes/fundamentales/intro',
                  desc: 'Conceptos básicos, arquitectura y por qué necesitas K8s',
                  preview: 'Kubernetes es un orquestador de contenedores que automatiza el despliegue, escalado y gestión de aplicaciones. Descubre la arquitectura con Control Plane y Nodes, y conceptos clave como Pods, Deployments, Services, ConfigMaps, Secrets e Ingress.'
                },
                {
                  num: 2,
                  title: 'Pods: La unidad más pequeña',
                  link: '/kubernetes/fundamentales/pods',
                  desc: 'Entiende qué es un Pod y cómo funcionan',
                  preview: 'Un Pod es la unidad más pequeña en Kubernetes. Es un contenedor (o un grupo de contenedores) empaquetado juntos que corren en el mismo Node. En 99% de los casos, un Pod = un contenedor Docker. Aprende cómo crear Pods de forma imperativa y declarativa, y entiende su ciclo de vida.'
                },
                {
                  num: 3,
                  title: 'Deployments: Gestión de réplicas',
                  link: '/kubernetes/fundamentales/deployments',
                  desc: 'Cómo desplegar y escalar automáticamente tu app',
                  preview: 'Un Deployment es la forma recomendada de desplegar tu app en Kubernetes. Define cuántas réplicas quieres, qué imagen Docker usar, qué recursos necesita. Kubernetes crea y gestiona los Pods automáticamente y realiza rolling updates sin downtime.'
                }
              ].map((lesson) => (
                <div key={lesson.num}>
                  <button
                    onClick={() => setExpandedLesson(expandedLesson === lesson.num ? null : lesson.num)}
                    style={{
                      width: '100%',
                      display: 'flex',
                      gap: '1.5rem',
                      alignItems: 'center',
                      cursor: 'pointer',
                      padding: '1.5rem',
                      backgroundColor: expandedLesson === lesson.num ? '#f0f0f0' : '#f9f9f9',
                      borderRadius: '8px',
                      transition: 'all 0.3s',
                      border: expandedLesson === lesson.num ? '2px solid #ff006e' : '1px solid #e0e0e0',
                      outline: 'none'
                    }}
                    onMouseEnter={(e) => {
                      if (expandedLesson !== lesson.num) {
                        e.currentTarget.style.backgroundColor = '#f0f0f0';
                        e.currentTarget.style.boxShadow = '0 2px 8px rgba(255, 0, 110, 0.1)';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (expandedLesson !== lesson.num) {
                        e.currentTarget.style.backgroundColor = '#f9f9f9';
                        e.currentTarget.style.boxShadow = 'none';
                      }
                    }}
                  >
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '50px',
                      height: '50px',
                      minWidth: '50px',
                      background: 'linear-gradient(135deg, #ff006e 0%, #ffffff 100%)',
                      color: '#fff',
                      borderRadius: '50%',
                      fontWeight: '700',
                      fontSize: '1.3rem'
                    }}>
                      {lesson.num}
                    </div>
                    <div style={{ flex: 1, textAlign: 'left' }}>
                      <p style={{ margin: '0 0 0.5rem 0', fontWeight: '600', fontSize: '0.95rem', color: '#333' }}>
                        {lesson.title}
                      </p>
                      <p style={{ margin: 0, fontSize: '0.85rem', color: '#666', lineHeight: '1.5' }}>
                        {lesson.desc}
                      </p>
                    </div>
                    <div style={{
                      fontSize: '1.2rem',
                      color: '#ff006e',
                      transition: 'transform 0.3s',
                      transform: expandedLesson === lesson.num ? 'rotate(180deg)' : 'rotate(0deg)',
                      minWidth: '24px'
                    }}>
                      ▼
                    </div>
                  </button>

                  {expandedLesson === lesson.num && (
                    <div style={{
                      backgroundColor: '#fafafa',
                      border: '2px solid #ff006e',
                      borderTop: 'none',
                      borderRadius: '0 0 8px 8px',
                      padding: '2rem',
                      marginBottom: '0.5rem'
                    }}>
                      <p style={{ fontSize: '0.95rem', lineHeight: '1.8', color: '#555', marginBottom: '1.5rem' }}>
                        {lesson.preview}
                      </p>
                      <button
                        onClick={() => navigate(lesson.link)}
                        style={{
                          background: 'linear-gradient(135deg, #ff006e 0%, #ffffff 100%)',
                          color: '#fff',
                          border: 'none',
                          padding: '0.75rem 1.5rem',
                          fontSize: '0.9rem',
                          fontWeight: '600',
                          borderRadius: '6px',
                          cursor: 'pointer',
                          transition: 'all 0.3s'
                        }}
                        onMouseEnter={(e) => {
                          e.target.style.backgroundColor = '#c2004d';
                          e.target.style.transform = 'translateY(-2px)';
                          e.target.style.boxShadow = '0 4px 12px rgba(255, 0, 110, 0.3)';
                        }}
                        onMouseLeave={(e) => {
                          e.target.style.background = 'linear-gradient(135deg, #ff006e 0%, #ffffff 100%)';
                          e.target.style.transform = 'translateY(0)';
                          e.target.style.boxShadow = 'none';
                        }}
                      >
                        Ver lección completa →
                      </button>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'comparativas' && (
          <div>
            <h2 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: '#333' }}>
              Comparativas & Guías
            </h2>
            <p style={{ fontSize: '0.95rem', color: '#666', marginBottom: '2rem', fontStyle: 'italic', lineHeight: '1.6' }}>
              Entiende las diferencias entre Kubernetes y otras herramientas, y cuándo usar qué.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {[
                {
                  num: 1,
                  title: 'Docker vs Kubernetes: ¿Cuál es la diferencia?',
                  link: '/docker/comparacion-docker-vs-kubernetes',
                  desc: 'Entiende cuándo usar Docker y cuándo Kubernetes',
                  preview: 'Docker es un contenedor - une tu código, dependencias y configuración en una imagen. Kubernetes es un orquestador - gestiona muchos contenedores Docker en múltiples servidores. Docker es para desarrollo, testing y despliegue de contenedores individuales. Kubernetes es para producción a escala empresarial con múltiples instancias, auto-escalado y alta disponibilidad.'
                }
              ].map((lesson) => (
                <div key={lesson.num}>
                  <button
                    onClick={() => setExpandedLesson(expandedLesson === `comp-${lesson.num}` ? null : `comp-${lesson.num}`)}
                    style={{
                      width: '100%',
                      display: 'flex',
                      gap: '1.5rem',
                      alignItems: 'center',
                      cursor: 'pointer',
                      padding: '1.5rem',
                      backgroundColor: expandedLesson === `comp-${lesson.num}` ? '#f0f0f0' : '#f9f9f9',
                      borderRadius: '8px',
                      transition: 'all 0.3s',
                      border: expandedLesson === `comp-${lesson.num}` ? '2px solid #ff006e' : '1px solid #e0e0e0',
                      outline: 'none'
                    }}
                    onMouseEnter={(e) => {
                      if (expandedLesson !== `comp-${lesson.num}`) {
                        e.currentTarget.style.backgroundColor = '#f0f0f0';
                        e.currentTarget.style.boxShadow = '0 2px 8px rgba(255, 0, 110, 0.1)';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (expandedLesson !== `comp-${lesson.num}`) {
                        e.currentTarget.style.backgroundColor = '#f9f9f9';
                        e.currentTarget.style.boxShadow = 'none';
                      }
                    }}
                  >
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '50px',
                      height: '50px',
                      minWidth: '50px',
                      background: 'linear-gradient(135deg, #ff006e 0%, #ffffff 100%)',
                      color: '#fff',
                      borderRadius: '50%',
                      fontWeight: '700',
                      fontSize: '1.3rem'
                    }}>
                      {lesson.num}
                    </div>
                    <div style={{ flex: 1, textAlign: 'left' }}>
                      <p style={{ margin: '0 0 0.5rem 0', fontWeight: '600', fontSize: '0.95rem', color: '#333' }}>
                        {lesson.title}
                      </p>
                      <p style={{ margin: 0, fontSize: '0.85rem', color: '#666', lineHeight: '1.5' }}>
                        {lesson.desc}
                      </p>
                    </div>
                    <div style={{
                      fontSize: '1.2rem',
                      color: '#ff006e',
                      transition: 'transform 0.3s',
                      transform: expandedLesson === `comp-${lesson.num}` ? 'rotate(180deg)' : 'rotate(0deg)',
                      minWidth: '24px'
                    }}>
                      ▼
                    </div>
                  </button>

                  {expandedLesson === `comp-${lesson.num}` && (
                    <div style={{
                      backgroundColor: '#fafafa',
                      border: '2px solid #ff006e',
                      borderTop: 'none',
                      borderRadius: '0 0 8px 8px',
                      padding: '2rem',
                      marginBottom: '0.5rem'
                    }}>
                      <p style={{ fontSize: '0.95rem', lineHeight: '1.8', color: '#555', marginBottom: '1.5rem' }}>
                        {lesson.preview}
                      </p>
                      <button
                        onClick={() => navigate(lesson.link)}
                        style={{
                          background: 'linear-gradient(135deg, #ff006e 0%, #ffffff 100%)',
                          color: '#fff',
                          border: 'none',
                          padding: '0.75rem 1.5rem',
                          fontSize: '0.9rem',
                          fontWeight: '600',
                          borderRadius: '6px',
                          cursor: 'pointer',
                          transition: 'all 0.3s'
                        }}
                        onMouseEnter={(e) => {
                          e.target.style.backgroundColor = '#c2004d';
                          e.target.style.transform = 'translateY(-2px)';
                          e.target.style.boxShadow = '0 4px 12px rgba(255, 0, 110, 0.3)';
                        }}
                        onMouseLeave={(e) => {
                          e.target.style.background = 'linear-gradient(135deg, #ff006e 0%, #ffffff 100%)';
                          e.target.style.transform = 'translateY(0)';
                          e.target.style.boxShadow = 'none';
                        }}
                      >
                        Ver comparativa completa →
                      </button>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* FAQ */}
      <div style={{ marginTop: '4rem' }}>
        <h2 style={{ fontSize: '1.8rem', marginBottom: '0.5rem', color: '#333', textAlign: 'center' }}>
          Preguntas Frecuentes
        </h2>
        <p style={{ fontSize: '0.95rem', color: '#666', marginBottom: '2rem', textAlign: 'center', fontStyle: 'italic', lineHeight: '1.6' }}>
          Respuestas rápidas a las dudas más comunes sobre Kubernetes
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {[
            {
              id: 'faq-1',
              question: '¿Cuál es la diferencia entre Kubernetes y Docker?',
              answer: 'Docker es una plataforma de containerización que empaqueta tu aplicación y sus dependencias en un contenedor. Kubernetes es un orquestador que gestiona múltiples contenedores Docker (u otros) en múltiples servidores, proporcionando escalado automático, actualizaciones sin tiempo de inactividad y auto-recuperación. Docker es para desarrollo y despliegue individual; Kubernetes es para producción a escala empresarial.'
            },
            {
              id: 'faq-2',
              question: '¿Necesito Kubernetes para mi proyecto?',
              answer: 'Depende de tu escala y complejidad. Si tienes una aplicación pequeña corriendo en un servidor, probablemente no lo necesites. Kubernetes es ideal cuando: necesitas alta disponibilidad, múltiples instancias, auto-escalado, o gestión centralizada de múltiples servicios. Comienza con Docker local, luego considera Kubernetes cuando tu infraestructura se complique.'
            },
            {
              id: 'faq-3',
              question: '¿Cuánto cuesta ejecutar Kubernetes?',
              answer: 'Kubernetes en sí es open source y gratuito. El costo viene de la infraestructura (servidores/cloud). Servicios gestionados como Amazon EKS, Google GKE o Azure AKS simplifican la operación pero tienen costos. Para desarrollo puedes usar Minikube o KinD (locales y gratuitos). En producción, los costos dependen del tamaño del clúster, no de Kubernetes.'
            },
            {
              id: 'faq-4',
              question: '¿Cómo empiezo a aprender Kubernetes?',
              answer: 'Comienza por entender Docker y contenedores, luego aprende los conceptos básicos de Kubernetes: Pods, Deployments, Services. Usa Minikube o Docker Desktop para practicar en local. Esta plataforma tiene lecciones estructuradas que te guían desde conceptos básicos hasta operación en producción. Practica construyendo ejemplos simples e incrementa la complejidad gradualmente.'
            },
            {
              id: 'faq-5',
              question: '¿Kubernetes solo funciona con Docker?',
              answer: 'No. Kubernetes es agnóstico a contenedores. Aunque Docker es el más popular, Kubernetes también soporta otros runtimes como containerd, CRI-O, Podman y más. Lo importante es que Kubernetes orquesta contenedores, sin importar su origen. Docker es solo una opción, aunque la más común en equipos.'
            }
          ].map((faq) => (
            <div key={faq.id}>
              <button
                onClick={() => setExpandedLesson(expandedLesson === faq.id ? null : faq.id)}
                style={{
                  width: '100%',
                  textAlign: 'left',
                  padding: '1.25rem',
                  backgroundColor: expandedLesson === faq.id ? '#f0f0f0' : '#f9f9f9',
                  border: expandedLesson === faq.id ? '2px solid #ff006e' : '1px solid #e0e0e0',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  transition: 'all 0.3s',
                  outline: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '1rem'
                }}
                onMouseEnter={(e) => {
                  if (expandedLesson !== faq.id) {
                    e.currentTarget.style.backgroundColor = '#f0f0f0';
                    e.currentTarget.style.boxShadow = '0 2px 8px rgba(255, 0, 110, 0.1)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (expandedLesson !== faq.id) {
                    e.currentTarget.style.backgroundColor = '#f9f9f9';
                    e.currentTarget.style.boxShadow = 'none';
                  }
                }}
              >
                <span style={{
                  fontSize: '0.95rem',
                  fontWeight: '600',
                  color: '#333',
                  flex: 1
                }}>
                  {faq.question}
                </span>
                <div style={{
                  fontSize: '1.2rem',
                  color: '#ff006e',
                  transition: 'transform 0.3s',
                  transform: expandedLesson === faq.id ? 'rotate(180deg)' : 'rotate(0deg)',
                  minWidth: '24px',
                  display: 'flex',
                  justifyContent: 'center'
                }}>
                  ▼
                </div>
              </button>

              {expandedLesson === faq.id && (
                <div style={{
                  backgroundColor: '#fafafa',
                  border: '2px solid #ff006e',
                  borderTop: 'none',
                  borderRadius: '0 0 8px 8px',
                  padding: '1.5rem',
                  marginBottom: '0.5rem',
                  fontSize: '0.9rem',
                  lineHeight: '1.7',
                  color: '#555'
                }}>
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
