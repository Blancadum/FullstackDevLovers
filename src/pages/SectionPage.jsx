import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { SEO, Breadcrumb, TabBox } from '../components';
import { modulesWithLessons } from '../config/modulesConfig';
import { getLessonComponentsForSection } from '../config/lessonComponents';
import './SectionPage.css';
import './SectionPageVertical.css';

export function SectionPage({ moduleId, sectionId }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [moduleId, sectionId]);

  const module = modulesWithLessons.find(m => m.id === moduleId);
  const section = module?.sections?.find(s => s.id === sectionId);

  if (!module || !section) {
    return <div>Sección no encontrada</div>;
  }

  const breadcrumbs = [
    { label: module.name, link: `/${moduleId}` },
    { label: section.name, link: null }
  ];

  // Agrupar lecciones por categorías si existen, si no, usar todas como una categoría
  const categories = section.lessonsByCategory && section.lessonsByCategory.length > 0
    ? section.lessonsByCategory
    : [{ name: section.fullName || section.name, lessons: section.lessons || [] }];

  const selectedCategory = categories[selectedCategoryIndex];
  const lessonComponentMap = getLessonComponentsForSection(moduleId, sectionId, section);

  const lessonsList = (selectedCategory.lessons || [])
    .map((lesson, idx) => {
      const componentInfo = lessonComponentMap?.find(l => l.link === lesson.link);
      if (!componentInfo?.componentInfo) return null;
      return {
        index: idx,
        label: componentInfo.componentInfo.label,
        link: lesson.link,
        number: idx + 1
      };
    })
    .filter(Boolean);

  return (
    <>
      <SEO
        title={`${section.fullName || section.name} - ${module.name}`}
        description={section.description}
        url={`https://javabackendlearning.com/${moduleId}/${sectionId}`}
      />
      <div className="breadcrumb-section">
        <Breadcrumb items={breadcrumbs} />
        {module?.sections && module.sections.length > 1 && (
          <div className="section-dropdown">
            <div className="dropdown-toggle-container">
              <button
                className="dropdown-toggle"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                <span>Otras secciones</span>
                <span className={`arrow ${isDropdownOpen ? 'open' : ''}`}>▼</span>
              </button>
              {isDropdownOpen && (
                <div className="dropdown-menu">
                  {module.sections.map((sec, idx) => (
                    <a
                      key={idx}
                      href={`/${moduleId}/${sec.id}`}
                      className={`dropdown-item ${sec.id === sectionId ? 'active' : ''}`}
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      {sec.icon && <span>{sec.icon}</span>}
                      {sec.name}
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      <div className="section-page">
        {/* Header Section adaptado a la estructura de ModulePage */}
        <div className="section-header">
          <div className="section-header-content">
            <div className="section-icon-large">{section.icon}</div>
            <div>
              <h1>{section.fullName || section.name}</h1>
              <p className="section-description">{section.description}</p>
            </div>
          </div>
        </div>


        <div className="container">
          <div className="section-content-categories">
            {/* Sidebar with category buttons */}
            {categories.length > 1 && (
              <div className="categories-sidebar">
                <div className="categories-list">
                  {categories.map((category, idx) => (
                    <button
                      key={idx}
                      className={`category-button ${idx === selectedCategoryIndex ? 'active' : ''}`}
                      onClick={() => setSelectedCategoryIndex(idx)}
                    >
                      {category.name}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Main Content Area */}
            <div className="categories-content">
              {/* Category Title and Description */}
              <div className="category-header">
                <h2>{selectedCategory.name}</h2>
                {selectedCategory.description && (
                  <p className="category-description">{selectedCategory.description}</p>
                )}
              </div>

              {/* Lessons List with Numbered Circles */}
              <div className="lessons-numbered-list">
                {lessonsList.map((lesson) => (
                  <Link
                    key={lesson.link}
                    to={lesson.link}
                    className="lesson-numbered-item"
                  >
                    <span className="lesson-number">{lesson.number}</span>
                    <span className="lesson-title">{lesson.label}</span>
                    <span className="lesson-arrow">→</span>
                  </Link>
                ))}
              </div>

              {/* Navigation */}
              <div className="navigation-section">
                <Link to={`/${moduleId}`} className="btn btn-back">
                  ← Volver a {module.name}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
