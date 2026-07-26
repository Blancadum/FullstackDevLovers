import { ClusterSearch } from './ClusterSearch';
import './Hero.css';

export function Hero() {
  return (
    <>
      <header className="hero">
        {/* Elementos decorativos de fondo */}
        <div className="hero-decorative">
          <div className="hero-shape hero-shape-1"></div>
          <div className="hero-shape hero-shape-2"></div>
          <div className="hero-shape hero-shape-3"></div>
        </div>

        <div className="hero-content">
          <div className="hero-badge">Aprende con la comunidad</div>
          <h1 className="hero-title">
            Fullstack Dev Lovers
          </h1>
          <p className="hero-subtitle">
            Domina Backend, DevOps y Cloud. Java, Spring Boot, Docker, AWS y mucho más
          </p>
          <div className="hero-cta">
            <button className="hero-btn hero-btn-primary">Comenzar a aprender</button>
            <button className="hero-btn hero-btn-secondary">Explorar cursos</button>
          </div>
        </div>
      </header>
      <ClusterSearch />
    </>
  );
}
