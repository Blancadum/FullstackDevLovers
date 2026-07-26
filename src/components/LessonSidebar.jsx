import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ConceptsList } from './ConceptsList';
import './LessonSidebar.css';

export function LessonSidebar({ sections = [], concepts = [], themeColor = '#0066cc' }) {
  const [isOpen, setIsOpen] = useState(false);
  const [expandedSections, setExpandedSections] = useState({});
  const location = useLocation();

  const toggleSection = (sectionId) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
  };

  const isLessonActive = (lessonLink) => {
    return location.pathname === lessonLink;
  };

  const handleLessonClick = () => {
    // Cerrar sidebar en mobile después de clickear una lección
    if (window.innerWidth < 1024) {
      setIsOpen(false);
    }
  };

  return (
    <>
      {/* Burger Button */}
      <button
        className="lesson-sidebar-toggle"
        onClick={() => setIsOpen(!isOpen)}
        title="Abrir/cerrar índice"
      >
        <span className="burger-line"></span>
        <span className="burger-line"></span>
        <span className="burger-line"></span>
      </button>

      {/* Overlay (mobile) */}
      {isOpen && <div className="lesson-sidebar-overlay" onClick={() => setIsOpen(false)} />}

      {/* Sidebar */}
      <aside className={`lesson-sidebar ${isOpen ? 'open' : ''}`} style={{ '--theme-color': themeColor }}>
        <div className="sidebar-header">
          <h3>Índice</h3>
          <button
            className="sidebar-close"
            onClick={() => setIsOpen(false)}
            aria-label="Cerrar"
          >
            ✕
          </button>
        </div>

        <div className="sidebar-content">
          {/* Secciones */}
          {sections.map((section) => (
            <div key={section.id} className="sidebar-section">
              <button
                className={`section-header ${expandedSections[section.id] ? 'expanded' : ''}`}
                onClick={() => toggleSection(section.id)}
              >
                <span className="section-title">{section.name}</span>
                <span className="section-icon">
                  {section.lessons && section.lessons.length > 0 ? '▼' : ''}
                </span>
              </button>

              {section.description && (
                <p className="section-description">{section.description}</p>
              )}

              {/* Lecciones */}
              {expandedSections[section.id] && section.lessons && (
                <div className="lessons-list">
                  {section.lessons.map((lesson, idx) => (
                    <Link
                      key={idx}
                      to={lesson.link}
                      className={`lesson-link ${isLessonActive(lesson.link) ? 'active' : ''}`}
                      onClick={handleLessonClick}
                    >
                      <span className="lesson-number">{idx + 1}</span>
                      <span className="lesson-name">{lesson.title}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}

          {/* Conceptos Clave */}
          {concepts && concepts.length > 0 && (
            <div className="sidebar-concepts">
              <h4>Conceptos Clave</h4>
              <ConceptsList concepts={concepts} themeColor={themeColor} />
            </div>
          )}
        </div>
      </aside>
    </>
  );
}
