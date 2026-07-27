import React from 'react';
import { Link } from 'react-router-dom';
import { LandingHero, SEO, ModuleSwitch, ClusterCards, ModuleIntroSection, FAQ } from './index';
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
 * @param {object} moduleSwitch - Optional custom content for StackSection (module-specific configuration)
 * @param {object} landingContent - Optional custom content for additional sections (whyReact, whatIsReact, prerequisites)
 * @param {array} categoryCluster - Optional cards linking to sub-technologies (for category-level landings, e.g. Backend -> Java, Kotlin, Node.js)
 */
export function LandingPageTemplate({ moduleId, pageConfig = {}, moduleSwitch, landingContent, categoryCluster }) {
  const theme = getTheme(moduleId);
  const module = getModule(moduleId);

  // Apply dynamic theme
  const landingTheme = getThemeByModule(moduleId);
  useLandingTheme(landingTheme.primary, landingTheme.dark, landingTheme.lightGradient);

  // Category-level landings (Backend, Frontend...) don't map to a single module in
  // modulesConfig.js - they rely on pageConfig + categoryCluster instead of module data.
  if (!module && !pageConfig.title) return null;

  // Default configuration from theme/module
  const config = {
    title: pageConfig.title || theme?.title || `Learn ${moduleId}`,
    subtitle: pageConfig.subtitle || theme?.subtitle || '',
    description: pageConfig.description || module?.description || '',
    primaryButtonText: pageConfig.primaryButtonText || 'Comenzar a aprender →',
    primaryButtonLink: pageConfig.primaryButtonLink || `/${module?.category}/${moduleId}/basico/introduccion`,
    secondaryButtonText: pageConfig.secondaryButtonText || 'Ver comparativa',
    secondaryButtonLink: pageConfig.secondaryButtonLink || '#comparativa',
    imageUrl: pageConfig.imageUrl || `/images/logos/${moduleId}-logo.png`,
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

        {/* Category cluster - links to sub-technologies (category-level landings only) */}
        {categoryCluster && categoryCluster.length > 0 && (
          <ClusterCards
            title="Explora las tecnologías"
            cards={categoryCluster}
            columns={4}
            variant="image"
          />
        )}

        {/* Module Switch - Custom content for specific landings, or auto-generated topics from the module's own sections */}
        {moduleSwitch ? (
          <ModuleSwitch
            moduleSwitch={moduleSwitch}
            title={moduleSwitch.title}
            subtitle={moduleSwitch.subtitle}
          />
        ) : module?.sections?.length > 0 ? (
          <ModuleSwitch moduleId={moduleId} title="Temas del curso" />
        ) : null}

        {/* Why Module Section */}
        {landingContent?.whyReact && (
          <section style={{ padding: '3rem 2rem', background: 'white' }}>
            <div style={{ maxWidth: '900px', margin: '0 auto' }}>
              <h2 style={{ fontSize: '2rem', color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
                {landingContent.whyReact.title}
              </h2>
              <p style={{ fontSize: '1rem', color: 'var(--text-light)', marginBottom: '2rem' }}>
                {landingContent.whyReact.subtitle}
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {landingContent.whyReact.benefits.map((benefit, idx) => (
                  <li key={idx} style={{ marginBottom: '1.5rem', paddingBottom: '1.5rem', borderBottom: idx !== landingContent.whyReact.benefits.length - 1 ? '1px solid #e9ecef' : 'none' }}>
                    <h3 style={{ fontSize: '1.1rem', color: 'var(--text-primary)', margin: '0 0 0.5rem 0' }}>
                      {benefit.title}
                    </h3>
                    <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', margin: 0, lineHeight: '1.6' }}>
                      {benefit.description}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}

        {/* What Is Module Section */}
        {landingContent?.whatIsReact && (
          <section style={{ padding: '3rem 2rem', background: 'var(--light-bg)' }}>
            <div style={{ maxWidth: '900px', margin: '0 auto' }}>
              <h2 style={{ fontSize: '2rem', color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
                {landingContent.whatIsReact.title}
              </h2>
              <p style={{ fontSize: '1rem', color: 'var(--text-light)', marginBottom: '2rem' }}>
                {landingContent.whatIsReact.subtitle}
              </p>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', marginBottom: '2rem', lineHeight: '1.8' }}>
                {landingContent.whatIsReact.description}
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {landingContent.whatIsReact.useCases.map((useCase, idx) => (
                  <li key={idx} style={{ marginBottom: '1.5rem', paddingBottom: '1.5rem', borderBottom: idx !== landingContent.whatIsReact.useCases.length - 1 ? '1px solid #e9ecef' : 'none' }}>
                    <h3 style={{ fontSize: '1.1rem', color: 'var(--text-primary)', margin: '0 0 0.5rem 0' }}>
                      {useCase.title}
                    </h3>
                    <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', margin: 0, lineHeight: '1.6' }}>
                      {useCase.description}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}

        {/* Prerequisites Section */}
        {landingContent?.prerequisites && (
          <>
            <section style={{ padding: '3rem 2rem', background: 'white' }}>
              <div style={{ maxWidth: '900px', margin: '0 auto' }}>
                <h2 style={{ fontSize: '2rem', color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
                  {landingContent.prerequisites.title}
                </h2>
                <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', marginBottom: '1rem', lineHeight: '1.8' }}>
                  {landingContent.prerequisites.description}
                </p>
                <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', marginBottom: '2rem', lineHeight: '1.8' }}>
                  {landingContent.prerequisites.detailedExplanation}
                </p>
              </div>
            </section>
            <ClusterCards
              cards={landingContent.prerequisites.technologies}
              columns={4}
              variant="logo"
            />
          </>
        )}

        {/* Module Intro Section */}
        {pageConfig.moduleIntro && (
          <ModuleIntroSection
            title={pageConfig.moduleIntro.title}
            description={pageConfig.moduleIntro.description}
            highlights={pageConfig.moduleIntro.highlights}
            image={pageConfig.moduleIntro.image}
          />
        )}

        {/* Main Content Section */}
        <section className={`${moduleId}-content`}>
          {!pageConfig.moduleIntro && (
            <>
              <h2>{`¿Qué es ${moduleId.charAt(0).toUpperCase() + moduleId.slice(1)}?`}</h2>
              <p className="intro-text">
                {config.description}
              </p>
            </>
          )}

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
        </section>

        {/* Comparison Section - Only if comparison data exists */}
        {config.comparisonData.length > 0 && (
          <section className="comparison-section" id="comparativa">
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
          </section>
        )}

        {/* When to Use Section */}
        {pageConfig.whenToUse && (
          <section className="when-to-use">
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
          </section>
        )}

        {/* FAQ Section */}
        {config.faqData.length > 0 && <FAQ questions={config.faqData} />}

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
