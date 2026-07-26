import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { LandingHero, SEO, KotlinThemeCard } from './index';
import { getModule } from '../config/modulesConfig';
import { getTheme } from '../config/themeColors';
import { useLandingTheme } from '../hooks/useLandingTheme';
import { getThemeByModule } from '../config/landingThemes';

/**
 * Generic landing page template for all technology/module landing pages.
 * Consolidates 32+ Landing*.jsx files into a single parametrized component.
 *
 * @param {string} moduleId - The technology/module identifier (e.g., 'java', 'docker', 'kubernetes')
 * @param {object} pageConfig - Optional custom configuration for this module
 *   - title: Custom hero title (default: from theme)
 *   - subtitle: Custom hero subtitle (default: from theme)
 *   - description: Custom hero description (default: from module config)
 *   - faqData: Custom FAQ items
 *   - comparisonData: Custom comparison table data
 *   - compareWith: Array of competing technologies for comparison table headers
 *   - seoTitle: Custom SEO title
 *   - seoDescription: Custom SEO description
 */
export function LandingPageTemplate({ moduleId, pageConfig = {} }) {
  const theme = getTheme(moduleId);
  const module = getModule(moduleId);
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  // Apply dynamic theme
  const landingTheme = getThemeByModule(moduleId);
  useLandingTheme(landingTheme.primary, landingTheme.dark, landingTheme.lightGradient);

  if (!module) return null;

  // Default configuration from theme/module
  const config = {
    title: pageConfig.title || theme?.title || `Learn ${moduleId}`,
    subtitle: pageConfig.subtitle || theme?.subtitle || '',
    description: pageConfig.description || module?.description || '',
    primaryButtonText: pageConfig.primaryButtonText || 'Comenzar a aprender →',
    primaryButtonLink: pageConfig.primaryButtonLink || `/${module?.category}/${moduleId}/basico/introduccion`,
    secondaryButtonText: pageConfig.secondaryButtonText || 'Ver comparativa',
    secondaryButtonLink: pageConfig.secondaryButtonLink || '#comparativa',
    imageUrl: pageConfig.imageUrl || `/src/assets/images/logos/${moduleId}-logo.png`,
    imageAlt: pageConfig.imageAlt || `${moduleId} Logo`,
    seoTitle: pageConfig.seoTitle || `${theme?.title || moduleId} - Guía Completa | Fullstack Dev Lovers`,
    seoDescription: pageConfig.seoDescription || pageConfig.description || module?.description,
    faqData: pageConfig.faqData || getDefaultFaqData(moduleId),
    comparisonData: pageConfig.comparisonData || [],
    compareWith: pageConfig.compareWith || [],
    schemaMarkup: pageConfig.schemaMarkup || generateDefaultSchema(moduleId, module),
    ...pageConfig
  };

  return (
    <>
      <SEO
        title={config.seoTitle}
        description={config.seoDescription}
        keywords={pageConfig.keywords || `${moduleId}, tutorial, aprendizaje, backend, devops`}
        url={`https://fullstackdevlovers.com/${module?.category}/${moduleId}`}
        image={pageConfig.image}
      />

      <script type="application/ld+json">
        {JSON.stringify(config.schemaMarkup)}
      </script>

      <div className={`${moduleId}-landing`}>
        {/* Hero Section */}
        <LandingHero
          title={config.title}
          subtitle={config.subtitle}
          description={config.description}
          primaryColor={landingTheme.primary}
          darkColor={landingTheme.dark}
          lightGradientColor={landingTheme.lightGradient}
          primaryButtonText={config.primaryButtonText}
          primaryButtonLink={config.primaryButtonLink}
          secondaryButtonText={config.secondaryButtonText}
          secondaryButtonLink={config.secondaryButtonLink}
          imageUrl={config.imageUrl}
          imageAlt={config.imageAlt}
        />

        {/* Main Content Section */}
        <section className={`${moduleId}-content`}>
          <div className="content-container">
            <h2>{`¿Qué es ${moduleId.charAt(0).toUpperCase() + moduleId.slice(1)}?`}</h2>
            <p className="intro-text">
              {config.description}
            </p>

            {/* Key Features */}
            {pageConfig.features && (
              <div className="features-grid">
                {pageConfig.features.map((feature, idx) => (
                  <div key={idx} className="feature-card">
                    <div className="feature-icon">{feature.icon}</div>
                    <h3>{feature.title}</h3>
                    <p>{feature.description}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Learning Topics Section */}
        <section className="learning-topics">
          <div className="content-container">
            <h2>Temas de Aprendizaje</h2>
            <p className="intro-text">
              Domina {moduleId} con una progresión estructurada desde conceptos básicos hasta nivel profesional
            </p>

            <div className="theme-cards-container">
              {module.sections.map((section, idx) => (
                <KotlinThemeCard
                  key={idx}
                  icon={getIconForSection(section.id)}
                  title={section.name}
                  description={section.description}
                  lessons={section.lessons}
                  color={getColorForSection(idx)}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Comparison Section - Only if comparison data exists */}
        {config.comparisonData.length > 0 && (
          <section className="comparison-section" id="comparativa">
            <div className="content-container">
              <h2>{config.comparisonTitle || `${moduleId} Comparison`}</h2>
              <p className="intro-text">
                {config.comparisonSubtitle || `Detailed comparison of ${moduleId} with other technologies`}
              </p>

              <div className="table-wrapper">
                <table className="comparison-table">
                  <thead>
                    <tr>
                      <th>Característica</th>
                      {config.compareWith.map((tech, idx) => (
                        <th key={idx}>{tech}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {config.comparisonData.map((row, idx) => (
                      <tr key={idx}>
                        <td className="feature-name">{row.feature}</td>
                        {config.compareWith.map((tech, tidx) => (
                          <td key={tidx} className={tidx === 0 ? `${moduleId}-col` : ''}>
                            {row[tech.toLowerCase().replace(/\s+/g, '')] || '—'}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {config.comparisonConclusion && (
                <div className="comparison-conclusion">
                  {config.comparisonConclusion.map((conclusion, idx) => (
                    <p key={idx}>{conclusion}</p>
                  ))}
                </div>
              )}
            </div>
          </section>
        )}

        {/* When to Use Section */}
        {pageConfig.whenToUse && (
          <section className="when-to-use">
            <div className="content-container">
              <h2>{pageConfig.whenToUseTitle || `¿Cuándo Usar ${moduleId.charAt(0).toUpperCase() + moduleId.slice(1)}?`}</h2>

              <div className="use-case-grid">
                {pageConfig.whenToUse.ideal && (
                  <div className="use-case">
                    <h3>✅ Ideal para:</h3>
                    <ul>
                      {pageConfig.whenToUse.ideal.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  </div>
                )}
                {pageConfig.whenToUse.alternatives && (
                  <div className="use-case">
                    <h3>⚠️ Considera alternativas si:</h3>
                    <ul>
                      {pageConfig.whenToUse.alternatives.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </section>
        )}

        {/* FAQ Section */}
        {config.faqData.length > 0 && (
          <section className="faq-section">
            <div className="content-container">
              <h2>Preguntas Frecuentes</h2>

              <div className="faq-list">
                {config.faqData.map((faq, idx) => (
                  <div key={idx} className={`faq-item ${openFaqIndex === idx ? 'open' : ''}`}>
                    <button
                      className="faq-summary"
                      onClick={() => setOpenFaqIndex(openFaqIndex === idx ? null : idx)}
                    >
                      <span>{faq.question}</span>
                      <span className="faq-icon">+</span>
                    </button>
                    <div className="faq-answer">
                      <p>{faq.answer}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA Final Section */}
        <section className={`${moduleId}-cta`}>
          <div className="cta-content">
            <h2>{pageConfig.ctaTitle || `Comienza tu Viaje con ${moduleId.charAt(0).toUpperCase() + moduleId.slice(1)}`}</h2>
            <p>{pageConfig.ctaSubtitle || 'Aprende desde conceptos básicos hasta nivel profesional'}</p>
            <Link to={config.primaryButtonLink} className="cta-button">
              {config.primaryButtonText}
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}

// Helper functions
function getIconForSection(sectionId) {
  const icons = {
    'fundamentales': '📚',
    'basico': '🎯',
    'intermedio': '⚙️',
    'avanzado': '🚀',
    'herramientas': '🛠️',
    'proyectos': '📁',
  };
  return icons[sectionId] || '📄';
}

function getColorForSection(index) {
  const colors = ['#9c27b0', '#7b1fa2', '#6200ea', '#5e35b1'];
  return colors[index % colors.length];
}

function generateDefaultSchema(moduleId, module) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Course',
    'name': `${moduleId.charAt(0).toUpperCase() + moduleId.slice(1)} - Complete Guide | Fullstack Dev Lovers`,
    'description': module?.description || `Learn ${moduleId} professionally`,
    'provider': {
      '@type': 'Organization',
      'name': 'Fullstack Dev Lovers',
      'url': 'https://fullstackdevlovers.com'
    },
    'url': `https://fullstackdevlovers.com/${module?.category}/${moduleId}`,
    'hasPart': module?.sections.flatMap((section) =>
      section.lessons.map((lesson) => ({
        '@type': 'LearningResource',
        'name': lesson.title,
        'url': `https://fullstackdevlovers.com${lesson.link}`
      }))
    ) || []
  };
}

function getDefaultFaqData(moduleId) {
  // Return empty by default - each Landing page should provide custom FAQ
  // This prevents generic placeholder content
  return [];
}

export default LandingPageTemplate;
