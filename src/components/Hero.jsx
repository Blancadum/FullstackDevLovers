export function Hero() {
  const scrollToModules = () => {
    document.querySelector('.categories')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="hero">
      <div className="hero-content">
        <h1>
          <span className="highlight">💻 Fullstack Dev Lovers</span>
        </h1>
        <p className="hero-subtitle">
          Domina Backend, DevOps y Cloud. Java, Spring Boot, Docker, AWS y mucho más
        </p>
        <button className="hero-cta" onClick={scrollToModules}>
          Explorar Módulos
        </button>
      </div>
    </header>
  );
}
