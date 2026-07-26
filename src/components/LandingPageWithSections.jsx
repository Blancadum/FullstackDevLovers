import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Breadcrumb } from './Breadcrumb';

/**
 * Componente reutilizable para landing pages de tecnologías con secciones
 * Muestra las lecciones agrupadas por secciones con iconos y descripciones
 */
export const LandingPageWithSections = ({
  title,
  intro,
  sections,
  concepts,
  breadcrumbs,
  themeColor = '#2196f3',
  themeColorLight = '#e3f2fd',
  themeColorBorder = '2px solid #2196f3',
  navigationButtons
}) => {
  const navigate = useNavigate();

  // Colores para los botones
  const buttonBgColor = themeColor;
  const buttonBgColorHover = themeColor === '#2196f3' ? '#1976d2' : themeColor;

  return (
    <>
      <Breadcrumb items={breadcrumbs} />
      <div className="lesson-container">
        <div className="lesson-header">
          <h1>{title}</h1>
          <p className="lesson-intro">{intro}</p>
        </div>

        {/* Secciones con Lecciones */}
        <section className="lesson-section">
          {sections.map((section, sectionIdx) => (
            <div key={sectionIdx} style={{
              marginBottom: '3rem',
              backgroundColor: '#ffffff',
              border: themeColorBorder,
              borderRadius: '12px',
              overflow: 'hidden',
              boxShadow: '0 2px 8px rgba(0,0,0,0.08)'
            }}>
              {/* Encabezado de Sección */}
              <div style={{
                backgroundColor: themeColorLight,
                borderBottom: themeColorBorder,
                padding: '1.5rem'
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  marginBottom: '0.75rem'
                }}>
                  <span style={{ fontSize: '2rem' }}>{section.icon}</span>
                  <h2 style={{ margin: 0, color: themeColor }}>{section.name}</h2>
                </div>
                <p style={{
                  margin: 0,
                  fontSize: '0.95rem',
                  color: '#666',
                  lineHeight: '1.6'
                }}>
                  {section.description}
                </p>
              </div>

              {/* Grid de Lecciones */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '1.5rem',
                padding: '2rem'
              }}>
                {section.lessons.map((lesson, lessonIdx) => (
                  <div
                    key={lessonIdx}
                    style={{
                      backgroundColor: '#ffffff',
                      border: '1px solid #e0e0e0',
                      borderRadius: '8px',
                      padding: '1.5rem',
                      display: 'flex',
                      flexDirection: 'column',
                      transition: 'all 0.3s ease',
                      cursor: 'pointer'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = themeColor;
                      e.currentTarget.style.boxShadow = `0 4px 12px ${themeColor}26`;
                      e.currentTarget.style.transform = 'translateY(-2px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = '#e0e0e0';
                      e.currentTarget.style.boxShadow = 'none';
                      e.currentTarget.style.transform = 'translateY(0)';
                    }}
                    onClick={() => navigate(lesson.link)}
                  >
                    {/* Icono de Lección */}
                    {lesson.icon && (
                      <div style={{
                        fontSize: '2.5rem',
                        marginBottom: '0.75rem'
                      }}>
                        {lesson.icon}
                      </div>
                    )}

                    {/* Título */}
                    <h3 style={{
                      margin: '0 0 0.75rem 0',
                      fontSize: '1.05rem',
                      fontWeight: '600',
                      color: '#333'
                    }}>
                      {lesson.title}
                    </h3>

                    {/* Botón */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        navigate(lesson.link);
                      }}
                      style={{
                        marginTop: 'auto',
                        backgroundColor: buttonBgColor,
                        color: '#ffffff',
                        border: 'none',
                        padding: '0.75rem 1.5rem',
                        borderRadius: '6px',
                        cursor: 'pointer',
                        fontSize: '0.9rem',
                        fontWeight: '600',
                        transition: 'background-color 0.3s ease'
                      }}
                      onMouseEnter={(e) => e.target.style.backgroundColor = buttonBgColorHover}
                      onMouseLeave={(e) => e.target.style.backgroundColor = buttonBgColor}
                    >
                      Ver Lección →
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </section>

        {/* Conceptos Clave (Opcional) */}
        {concepts && concepts.length > 0 && (
          <section className="lesson-section">
            <h2>Conceptos Clave</h2>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '1.5rem'
            }}>
              {concepts.map((concept, idx) => (
                <div key={idx} style={{
                  backgroundColor: themeColorLight,
                  border: themeColorBorder,
                  borderRadius: '8px',
                  padding: '1.5rem'
                }}>
                  <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>{concept.icon}</div>
                  <h4 style={{ margin: '0 0 0.75rem 0', color: themeColor }}>{concept.title}</h4>
                  <p style={{ fontSize: '0.95rem', color: '#555', margin: 0 }}>
                    {concept.description}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Botones de Navegación */}
        {navigationButtons && (
          <section className="lesson-section" style={{
            marginTop: '3rem',
            paddingTop: '2rem',
            borderTop: '2px solid #ddd'
          }}>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              gap: '1rem'
            }}>
              {navigationButtons.map((btn, idx) => (
                <a
                  key={idx}
                  href={btn.link}
                  style={{
                    flex: 1,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: btn.bgColor || '#f5f5f5',
                    color: btn.textColor || '#333',
                    padding: '1rem 2rem',
                    borderRadius: '8px',
                    textDecoration: 'none',
                    fontSize: '1rem',
                    fontWeight: '600',
                    transition: 'background-color 0.3s',
                    border: btn.border || '2px solid #ddd'
                  }}
                  onMouseOver={(e) => e.target.style.backgroundColor = btn.bgColorHover || '#e8e8e8'}
                  onMouseOut={(e) => e.target.style.backgroundColor = btn.bgColor || '#f5f5f5'}
                >
                  {btn.label}
                </a>
              ))}
            </div>
          </section>
        )}
      </div>
    </>
  );
};
