export function About() {
  const steps = [
    {
      number: 1,
      title: 'Aprende los Fundamentos',
      description: 'Domina Java 1 y Java 2 para entender los pilares del desarrollo backend',
    },
    {
      number: 2,
      title: 'Avanza con Conceptos Avanzados',
      description: 'Usa colecciones, lambdas y streams para código más elegante',
    },
    {
      number: 3,
      title: 'Conecta con Bases de Datos',
      description: 'Aprende JDBC y CRUD para persistir datos',
    },
    {
      number: 4,
      title: 'Desarrolla con Spring Boot',
      description: 'Crea aplicaciones web profesionales con el framework más popular',
    },
  ];

  return (
    <section className="about">
      <div className="container">
        <h2>¿Cómo Funciona?</h2>
        <div className="about-grid">
          {steps.map((step) => (
            <div key={step.number} className="about-box">
              <div className="about-number">{step.number}</div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
