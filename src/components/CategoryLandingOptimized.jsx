import React from 'react';
import { Link } from 'react-router-dom';
import { SEO, FlipCard, FAQ } from './index';
import './CategoryLandingOptimized.css';

export const CategoryLandingOptimized = ({ content, theme }) => {
  if (!content) return null;

  return (
    <>
      <SEO
        title={content.metaTitle}
        description={content.metaDescription}
        keywords={content.metaKeywords}
        url={`https://fullstackdevlovers.com/${content.slug}`}
        image={content.ogImage}
      />

      {/* Hero Section */}
      <section
        className="category-hero"
        style={{ '--hero-color': theme.primary }}
      >
        <div className="container">
          <div className="hero-content">
            <h1>{content.hero.title}</h1>
            <p className="hero-subtitle">{content.hero.subtitle}</p>
            <p className="hero-description">{content.hero.description}</p>
            <a href="#main-technologies" className="btn-primary">
              {content.hero.cta} →
            </a>
          </div>
        </div>
      </section>

      {/* Why Learn Section */}
      <section className="why-learn">
        <div className="container">
          <h2>{content.whyLearn.title}</h2>
          <div className="why-learn-grid">
            {content.whyLearn.items.map((item, idx) => (
              <div key={idx} className="why-learn-card">
                <span className="why-learn-icon">{item.icon}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Technologies Section */}
      <section
        id="main-technologies"
        className="technologies-section"
        style={{ '--section-color': theme.primary }}
      >
        <div className="container">
          <h2>{content.mainTechnologies.title}</h2>
          <p className="section-description">{content.mainTechnologies.description}</p>

          <div className="technologies-list">
            {content.mainTechnologies.technologies.map((tech, idx) => (
              <FlipCard
                key={idx}
                name={tech.name}
                description={tech.description}
                purpose={tech.purpose}
                learningPath={tech.learningPath}
                logo={tech.logo}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Roadmap Section */}
      <section className="roadmap-section">
        <div className="container">
          <h2>{content.roadmap.title}</h2>
          <p className="section-description">{content.roadmap.description}</p>

          <div className="roadmap-container">
            {content.roadmap.phases.map((phase, idx) => (
              <div key={idx} className="roadmap-phase">
                <div className="phase-header">
                  <h3>{phase.phase}</h3>
                  <span className="phase-duration">{phase.duration}</span>
                </div>
                <div className="phase-topics">
                  <h4>Temas:</h4>
                  <ul>
                    {phase.topics.map((topic, tidx) => (
                      <li key={tidx}>{topic}</li>
                    ))}
                  </ul>
                </div>
                <p className="phase-goal">
                  <strong>Objetivo:</strong> {phase.goal}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="comparison-section">
        <div className="container">
          <h2>{content.comparison.title}</h2>

          {content.comparison.comparisons.map((comp, idx) => (
            <div key={idx} className="comparison-item">
              <h3>{comp.title}</h3>
              <div className="table-wrapper">
                <table className="comparison-table">
                  <tbody>
                    {comp.table.map((row, ridx) => (
                      <tr key={ridx}>
                        {Object.entries(row).map(([key, value], cidx) => (
                          <td key={cidx} className={cidx === 0 ? 'aspect-col' : ''}>
                            {value}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Job Opportunities Section */}
      <section className="opportunities-section">
        <div className="container">
          <h2>{content.jobOpportunities.title}</h2>

          <div className="stats-grid">
            {content.jobOpportunities.stats.map((stat, idx) => (
              <div key={idx} className="stat-card">
                <p className="stat-metric">{stat.metric}</p>
                <p className="stat-value">{stat.value}</p>
              </div>
            ))}
          </div>

          <div className="roles-section">
            <h3>Roles y oportunidades</h3>
            <div className="roles-grid">
              {content.jobOpportunities.roles.map((role, idx) => (
                <div key={idx} className="role-card">
                  <h4>{role.title}</h4>
                  <p>{role.companies}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      {content.faqs && content.faqs.length > 0 && (
        <FAQ title="Preguntas frecuentes" questions={content.faqs} />
      )}

      {/* CTA Final Section */}
      <section className="cta-final" style={{ '--cta-color': theme.primary }}>
        <div className="container">
          <h2>¿Listo para comenzar?</h2>
          <p>Elige tu camino y aprende a tu ritmo</p>
          <div className="cta-buttons">
            <a href="#main-technologies" className="btn-primary">
              Explorar tecnologías
            </a>
            <a href="/" className="btn-secondary">
              Ver todas las categorías
            </a>
          </div>
        </div>
      </section>
    </>
  );
};
