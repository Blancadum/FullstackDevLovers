import React from 'react';
import { Link } from 'react-router-dom';
import { LandingHero, KotlinThemeCard } from '../components';
import { getModule } from '../config/modulesConfig';
import { getTheme } from '../config/themeColors';
import { useLandingTheme } from '../hooks/useLandingTheme';
import { getThemeByModule } from '../config/landingThemes';

export const LandingKotlin = () => {
  const theme = getTheme('backend') || { primary: '#6366f1' };
  const kotlinModule = getModule('kotlin');

  // Aplicar tema dinámico con variables CSS
  const landingTheme = getThemeByModule('kotlin');
  useLandingTheme(landingTheme?.primary || '#6366f1', landingTheme?.dark || '#4f46e5', landingTheme?.lightGradient);

  if (!kotlinModule) return null;

  return (
    <div className="kotlin-landing">      {/* Hero Section */}
      <LandingHero
        title="Kotlin: Lenguaje Moderno para JVM"
        subtitle="Concisión, seguridad y productividad"
        description="Kotlin es un lenguaje de programación moderno que se ejecuta en la JVM, diseñado para ser más conciso y seguro que Java. Perfectamente integrado con Spring Boot y ecosistema Java, Kotlin reduce código boilerplate y previene errores comunes."
        primaryColor={landingTheme?.primary || '#6366f1'}
        darkColor={landingTheme?.dark || '#4f46e5'}
        lightGradientColor={landingTheme?.lightGradient}
        primaryButtonText="Comenzar con Kotlin →"
        primaryButtonLink="/backend/kotlin/introduccion"
        imageUrl="/src/assets/images/logos/kotlin.png"
        imageAlt="Kotlin"
      />

      {/* Main Content */}
      <section className="kotlin-content">
        <div className="content-container">
          <h2>Temas de Aprendizaje</h2>
          <p className="intro-text">
            Explora cada tema para acceder a las lecciones y recursos disponibles
          </p>

          <div className="theme-cards-container">
            {kotlinModule.sections.map((section, idx) => (
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

      {/* CTA Section */}
      <section className="kotlin-cta">
        <div className="cta-content">
          <h2>¿Listo para aprender Kotlin?</h2>
          <p>Comienza con los fundamentos y avanza hacia conceptos avanzados</p>
          <Link to="/backend/kotlin/introduccion" className="cta-button">
            Comenzar Ahora →
          </Link>
        </div>
      </section>
    </div>
  );
};

// Función auxiliar para obtener icono según sección
function getIconForSection(sectionId) {
  const icons = {
    'introduccion': '📚',
    'caracteristicas': '⚡',
    'avanzado': '🚀'
  };
  return icons[sectionId] || '📄';
}

// Función auxiliar para obtener color según índice
function getColorForSection(index) {
  const colors = ['#6366f1', '#8b5cf6', '#d946ef'];
  return colors[index % colors.length];
}
