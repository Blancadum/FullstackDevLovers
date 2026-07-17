import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useBreadcrumb } from '../hooks/useBreadcrumb';

export function LandingKubernetes() {
  const [activeTab, setActiveTab] = useState('fundamentales');
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
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
              gap: '2rem'
            }}>
              {[
                { num: 1, title: 'Introducción: Qué es Kubernetes', link: '/kubernetes/fundamentales/intro', desc: 'Conceptos básicos, arquitectura y por qué necesitas K8s' },
                { num: 2, title: 'Pods: La unidad más pequeña', link: '/kubernetes/fundamentales/pods', desc: 'Entiende qué es un Pod y cómo funcionan' },
                { num: 3, title: 'Deployments: Gestión de réplicas', link: '/kubernetes/fundamentales/deployments', desc: 'Cómo desplegar y escalar automáticamente tu app' }
              ].map((lesson) => (
                <div
                  key={lesson.num}
                  onClick={() => navigate(lesson.link)}
                  style={{
                    display: 'flex',
                    gap: '1.5rem',
                    cursor: 'pointer',
                    padding: '1.5rem',
                    backgroundColor: '#f9f9f9',
                    borderRadius: '8px',
                    transition: 'all 0.3s',
                    border: '1px solid #e0e0e0'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#f0f0f0';
                    e.currentTarget.style.transform = 'translateX(4px)';
                    e.currentTarget.style.boxShadow = '0 4px 12px rgba(255, 0, 110, 0.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '#f9f9f9';
                    e.currentTarget.style.transform = 'translateX(0)';
                    e.currentTarget.style.boxShadow = 'none';
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
                  <div style={{ flex: 1 }}>
                    <p style={{ margin: '0 0 0.5rem 0', fontWeight: '600', fontSize: '0.95rem', color: '#333' }}>
                      {lesson.title}
                    </p>
                    <p style={{ margin: 0, fontSize: '0.85rem', color: '#666', lineHeight: '1.5' }}>
                      {lesson.desc}
                    </p>
                  </div>
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
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
              gap: '2rem'
            }}>
              {[
                { num: 1, title: 'Docker vs Kubernetes: ¿Cuál es la diferencia?', link: '/docker/comparacion-docker-vs-kubernetes', desc: 'Entiende cuándo usar Docker y cuándo Kubernetes' }
              ].map((lesson) => (
                <div
                  key={lesson.num}
                  onClick={() => navigate(lesson.link)}
                  style={{
                    display: 'flex',
                    gap: '1.5rem',
                    cursor: 'pointer',
                    padding: '1.5rem',
                    backgroundColor: '#f9f9f9',
                    borderRadius: '8px',
                    transition: 'all 0.3s',
                    border: '1px solid #e0e0e0'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#f0f0f0';
                    e.currentTarget.style.transform = 'translateX(4px)';
                    e.currentTarget.style.boxShadow = '0 4px 12px rgba(255, 0, 110, 0.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '#f9f9f9';
                    e.currentTarget.style.transform = 'translateX(0)';
                    e.currentTarget.style.boxShadow = 'none';
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
                  <div style={{ flex: 1 }}>
                    <p style={{ margin: '0 0 0.5rem 0', fontWeight: '600', fontSize: '0.95rem', color: '#333' }}>
                      {lesson.title}
                    </p>
                    <p style={{ margin: 0, fontSize: '0.85rem', color: '#666', lineHeight: '1.5' }}>
                      {lesson.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* CTA */}
      <div style={{
        textAlign: 'center',
        padding: '2rem',
        backgroundColor: '#f5f5f5',
        borderRadius: '12px'
      }}>
        <h2 style={{ margin: '0 0 1rem 0', fontSize: '1.5rem', color: '#333' }}>
          Listo para comenzar?
        </h2>
        <button
          onClick={() => navigate('/kubernetes/fundamentales/intro')}
          style={{
            background: 'linear-gradient(135deg, #ff006e 0%, #ffffff 100%)',
            color: '#fff',
            border: 'none',
            padding: '1rem 2.5rem',
            fontSize: '1.1rem',
            fontWeight: '600',
            borderRadius: '8px',
            cursor: 'pointer',
            transition: 'all 0.3s'
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = '#c2004d';
            e.target.style.transform = 'translateY(-2px)';
            e.target.style.boxShadow = '0 6px 20px rgba(255, 0, 110, 0.3)';
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = '#ff006e';
            e.target.style.transform = 'translateY(0)';
            e.target.style.boxShadow = 'none';
          }}
        >
          Comenzar Lección
        </button>
      </div>
    </div>
  );
}
