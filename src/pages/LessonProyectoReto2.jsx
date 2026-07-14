import { LessonProyectoRetoGeneric } from '../components/LessonProyectoRetoGeneric';

const sections = [
  {
    title: '1. Requisitos Técnicos (2 puntos)',
    content: (
      <>
        <p>
          Define el stack tecnológico completo. Incluye tecnologías para frontend, backend y base de datos
          con justificación técnica.
        </p>

        <h4>Qué debes incluir:</h4>
        <ul style={{ lineHeight: '1.8' }}>
          <li><strong>Frontend:</strong> Framework (React, Vue, Angular), librerías, build tools</li>
          <li><strong>Backend:</strong> Lenguaje, framework, ORM, autenticación</li>
          <li><strong>Base de Datos:</strong> SQL/NoSQL, versión, razón de elección</li>
        </ul>

        <h4>Justificación técnica:</h4>
        <p>
          NO es suficiente nombrar tecnologías. Explica POR QUÉ cada una es la mejor para tu proyecto.
          Considera: rendimiento, ecosistema, comunidad, mantenimiento, escalabilidad.
        </p>
      </>
    )
  },

  {
    title: '2. Herramientas de Implementación (2 puntos)',
    content: (
      <>
        <p>
          Especifica las herramientas de desarrollo y producción que usarás.
        </p>

        <h4>Herramientas de Desarrollo:</h4>
        <ul style={{ lineHeight: '1.8' }}>
          <li>IDEs (VS Code, IntelliJ, Visual Studio)</li>
          <li>Control de versiones (Git + GitHub/GitLab)</li>
          <li>Testing (Jest, JUnit, Pytest)</li>
          <li>Herramientas de API (Postman, Insomnia)</li>
          <li>Containerización (Docker, Docker Compose)</li>
        </ul>

        <h4>Herramientas de Producción:</h4>
        <ul style={{ lineHeight: '1.8' }}>
          <li>Hosting (AWS, Azure, DigitalOcean, Heroku)</li>
          <li>Bases de datos (PostgreSQL managed, RDS, Cloud SQL)</li>
          <li>Web servers (Nginx, Apache)</li>
          <li>SSL/TLS certificates</li>
          <li>CI/CD (GitHub Actions, GitLab CI, Jenkins)</li>
        </ul>

        <h4>IMPORTANTE:</h4>
        <p>
          Desarrollo y Producción NO son lo mismo. Usa contenedores (Docker)
          para garantizar que funciona igual en ambos ambientes.
        </p>
      </>
    )
  },

  {
    title: '3. Herramientas de Prototipado (1 punto)',
    content: (
      <>
        <p>
          Selecciona herramientas para diseñar prototipos y mockups. Justifica por qué.
        </p>

        <h4>Opciones recomendadas:</h4>
        <ul style={{ lineHeight: '1.8' }}>
          <li><strong>Figma:</strong> Colaborativo, moderno, navegable, free - MEJOR OPCIÓN</li>
          <li><strong>Adobe XD:</strong> Integrado con Adobe, prototipado avanzado - Profesional</li>
          <li><strong>Balsamiq:</strong> Rápido, wireframes simples - Para MVPs</li>
          <li><strong>Canva:</strong> Muy fácil, templates - Básico</li>
        </ul>

        <h4>Ventajas de Figma para este proyecto:</h4>
        <ul style={{ lineHeight: '1.8' }}>
          <li>Colaboración en equipo real-time</li>
          <li>Prototipos navegables (simula flujos reales)</li>
          <li>Components reutilizables (consistencia visual)</li>
          <li>Integración con desarrolladores (specs automáticas)</li>
          <li>Versioning y comentarios en tiempo real</li>
        </ul>
      </>
    )
  },

  {
    title: '4. Prototipo Interactivo (3 puntos)',
    content: (
      <>
        <p>
          Diseña un prototipo navegable con 3-5 pantallas principales que cubran
          los flujos de uso principales.
        </p>

        <h4>Qué incluir:</h4>
        <ul style={{ lineHeight: '1.8' }}>
          <li>Mínimo 3-5 pantallas funcionales</li>
          <li>Navegación entre pantallas (botones, enlaces funcionales)</li>
          <li>Paleta de colores corporativa coherente</li>
          <li>Tipografía legible y consistente</li>
          <li>Iconografía clara (Font Awesome, Material Icons)</li>
        </ul>

        <h4>Flujos principales a cubrir:</h4>
        <ul style={{ lineHeight: '1.8' }}>
          <li>Flujo de usuario anónimo (navegar, ver contenido)</li>
          <li>Flujo de autenticación (login/registro)</li>
          <li>Flujo principal del negocio (compra, reserva, etc.)</li>
        </ul>

        <h4>IMPORTANTE:</h4>
        <p>
          El prototipo NO necesita estar programado. Figma es suficiente. Pero DEBE
          simular navegación real (botones que llevan a otras pantallas).
        </p>
      </>
    )
  }
];

export function LessonProyectoReto2() {
  return (
    <LessonProyectoRetoGeneric
      retoNumber={2}
      title="REPTE 2: Especificación Técnica"
      sections={sections}
    />
  );
}
