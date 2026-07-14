import { useState } from 'react';
import './SectionLanding.css';

export function SectionLanding({ categories = [], lessons = [] }) {
  const [activeCategory, setActiveCategory] = useState(0);

  if (!categories.length || !lessons.length) {
    return <div className="section-landing">No data available</div>;
  }

  const activeCategoryLessons = lessons.filter(
    (lesson) => lesson.categoryId === categories[activeCategory]?.id
  );

  return (
    <div className="section-landing">
      {/* Sidebar */}
      <div className="section-sidebar">
        {categories.map((category, index) => (
          <button
            key={category.id}
            className={`section-category-btn ${
              activeCategory === index ? 'active' : ''
            }`}
            onClick={() => setActiveCategory(index)}
          >
            {category.name}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="section-content">
        <div className="section-header">
          <h2 className="section-title">{categories[activeCategory]?.name}</h2>
          <p className="section-description">
            {categories[activeCategory]?.description}
          </p>
        </div>

        <div className="section-lessons-list">
          {activeCategoryLessons.map((lesson, index) => (
            <div key={lesson.id} className="section-lesson-item">
              <div className="section-lesson-number">{index + 1}</div>
              <div className="section-lesson-info">
                <h3 className="section-lesson-title">{lesson.title}</h3>
                {lesson.description && (
                  <p className="section-lesson-description">
                    {lesson.description}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
