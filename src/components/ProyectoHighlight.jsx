import { Link } from 'react-router-dom';
import './ProyectoHighlight.css';

export function ProyectoHighlight() {
  return (
    <section className="proyecto-highlight">
      <div className="container">
        <div className="proyecto-card">
          <div className="proyecto-content">
            <div className="proyecto-badge">✨ NUEVO</div>
            <h2>TFC</h2>
            <p className="proyecto-subtitle">
              Crea tu Trabajo Fin de Ciclo
            </p>
            <p className="proyecto-description">
              Guía completa para planificar, desarrollar y desplegar un proyecto web profesional.
              Desde requisitos hasta producción, con 8 retos DAW y 12+ ejemplos de proyectos viables.
            </p>

            <div className="proyecto-features">
              <div className="feature">
                <span className="feature-icon">📋</span>
                <span>Planificación</span>
              </div>
              <div className="feature">
                <span className="feature-icon">⚡</span>
                <span>3 Sprints</span>
              </div>
              <div className="feature">
                <span className="feature-icon">🧪</span>
                <span>Testing</span>
              </div>
              <div className="feature">
                <span className="feature-icon">☁️</span>
                <span>Deployment</span>
              </div>
            </div>

            <div className="proyecto-buttons">
              <Link to="/proyecto" className="btn btn-primary">
                Explorar Proyecto →
              </Link>
              <Link to="/proyecto/planificacion/ejemplos" className="btn btn-secondary">
                Ver Ejemplos TFC
              </Link>
            </div>
          </div>

          <div className="proyecto-visual">
            <div className="proyecto-diagram">
              <div className="diagram-step step-1">
                <span className="step-number">1</span>
                <span className="step-label">Planifica</span>
              </div>
              <div className="diagram-arrow">→</div>
              <div className="diagram-step step-2">
                <span className="step-number">2</span>
                <span className="step-label">Desarrolla</span>
              </div>
              <div className="diagram-arrow">→</div>
              <div className="diagram-step step-3">
                <span className="step-number">3</span>
                <span className="step-label">Deploya</span>
              </div>
            </div>

            <div className="proyecto-stats">
              <div className="stat">
                <div className="stat-number">13</div>
                <div className="stat-label">Lecciones</div>
              </div>
              <div className="stat">
                <div className="stat-number">8</div>
                <div className="stat-label">Retos DAW</div>
              </div>
              <div className="stat">
                <div className="stat-number">12+</div>
                <div className="stat-label">Ejemplos TFC</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
