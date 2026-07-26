import './ModuleIntroSection.css';

/**
 * ModuleIntroSection - Sección introductoria atractiva para módulos
 * Presenta qué es una tecnología de forma visual y cautivadora
 *
 * Props:
 * - title: Título de la sección (ej: "¿Qué es React?")
 * - description: Descripción corta y atractiva
 * - highlights: Array de puntos clave para destacar
 * - image: URL de imagen opcional
 */
export function ModuleIntroSection({ title, description, highlights = [], image }) {
  return (
    <section className="module-intro-section">
      <div className="module-intro-container">
        <div className="module-intro-content">
          <h2 className="module-intro-title">{title}</h2>
          <p className="module-intro-description">{description}</p>

          {highlights.length > 0 && (
            <div className="module-intro-highlights">
              {highlights.map((highlight, idx) => (
                <div key={idx} className="highlight-item">
                  <span className="highlight-icon">→</span>
                  <span className="highlight-text">{highlight}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        {image && (
          <div className="module-intro-image">
            <img src={image} alt={title} />
          </div>
        )}
      </div>
    </section>
  );
}
