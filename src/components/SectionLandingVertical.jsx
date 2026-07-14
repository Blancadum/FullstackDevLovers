import { useState } from 'react';
import { Link } from 'react-router-dom';
import './SectionLandingVertical.css';
import { Breadcrumb, SEO } from './index';

export function SectionLandingVertical({
  module,
  section,
  lessons = [],
  showDescription = true
}) {
  const [selectedTab, setSelectedTab] = useState(lessons[0]?.id || 0);

  if (!module || !section) {
    return <div>Sección no encontrada</div>;
  }

  const breadcrumbs = [
    { label: module.name, link: `/${module.id}` },
    { label: section.name, link: null }
  ];

  const selectedLesson = lessons.find((_, idx) => idx === selectedTab);

  return (
    <>
      <SEO
        title={`${section.fullName || section.name} - ${module.name}`}
        description={section.description}
        url={`https://javabackendlearning.com/${module.id}/${section.id}`}
      />
      <div className="breadcrumb-section">
        <Breadcrumb items={breadcrumbs} />
      </div>

      <div className="section-landing-vertical">
        {/* Header */}
        <div className="section-header">
          <div className="section-header-content">
            <div className="section-icon-large">{section.icon}</div>
            <div>
              <h1>{section.fullName || section.name}</h1>
              {showDescription && (
                <p className="section-description">{section.description}</p>
              )}
            </div>
          </div>
        </div>

        <div className="container">
          <div className="section-tabs-layout">
            {/* Vertical Tabs Sidebar */}
            <div className="tabs-sidebar">
              <div className="tabs-list">
                {lessons.map((lesson, idx) => (
                  <button
                    key={idx}
                    className={`tab-button ${idx === selectedTab ? 'active' : ''}`}
                    onClick={() => setSelectedTab(idx)}
                  >
                    <span className="tab-number">{idx + 1}</span>
                    <span className="tab-label">{lesson.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Content Area */}
            <div className="tabs-content">
              {selectedLesson && (
                <>
                  <h2>{selectedLesson.label}</h2>
                  <p className="lesson-description">{selectedLesson.description}</p>

                  {selectedLesson.component && (
                    <div className="lesson-component">
                      {selectedLesson.component}
                    </div>
                  )}

                  <div className="lesson-actions">
                    <Link
                      to={selectedLesson.link}
                      className="btn btn-primary"
                    >
                      Ver Lección Completa →
                    </Link>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
