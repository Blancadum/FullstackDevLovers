import { LessonTemplate, CodeBlock, InfoBox } from '../components';
import { LessonNavigation } from '../components/LessonNavigation';
import { useBreadcrumb } from '../hooks/useBreadcrumb';
import { useLessonNavigation } from '../hooks/useLessonNavigation';

export function LessonProyectoSetup() {
  const breadcrumbs = useBreadcrumb();
  const nav = useLessonNavigation();

  const concepts = [
    {
      icon: '🔧',
      title: 'Configuración del Proyecto',
      definition: 'Setup inicial de herramientas, dependencias y estructura',
      example: 'Maven, Git, IDE, base de datos local'
    },
    {
      icon: '📦',
      title: 'Dependencias',
      definition: 'Librerías externas necesarias para el proyecto',
      example: 'Spring Boot, JPA, MySQL Connector, JUnit'
    },
    {
      icon: '🌍',
      title: 'Entorno de Desarrollo',
      definition: 'Configuración local para desarrollo y testing',
      example: 'localhost:8080, MySQL local, aplicación en IDE'
    },
  ];

  const exercises = [
    {
      title: 'Configura tu entorno local',
      description: 'Instala y configura todas las herramientas necesarias',
      solution: `1. Instalar Java 17 LTS
2. Instalar Maven o Gradle
3. Instalar IDE (IntelliJ o VSCode)
4. Instalar MySQL/PostgreSQL
5. Instalar Git y configurar GitHub
6. Clonar repositorio del proyecto
7. Descargar dependencias (mvn install)
8. Crear base de datos local
9. Configurar application.properties
10. Ejecutar aplicación en local`
    }
  ];

  const sections = [
    {
      title: 'Stack Tecnológico - Herramientas Organizadas',
      content: (
        <>
          <p>
            El <strong>technology stack</strong> es el conjunto de herramientas y tecnologías que usarás. Está organizado en capas:
            Frontend (lo que ve el usuario), Backend (lógica del servidor), Database (almacenamiento), y DevOps (infraestructura).
          </p>

          <svg viewBox="0 0 700 420" style={{ width: '100%', maxWidth: '700px', margin: '2rem auto', border: '1px solid #ddd', borderRadius: '8px', backgroundColor: '#f9f9f9' }}>
            {/* Frontend Layer */}
            <g>
              <rect x="20" y="20" width="660" height="90" fill="#E3F2FD" stroke="#1976D2" strokeWidth="2" rx="5"/>
              <text x="40" y="45" fontSize="12" fontWeight="bold" fill="#1565C0">FRONTEND (Cliente)</text>
              <text x="60" y="68" fontSize="10" fill="#333">React 18 | JavaScript/TypeScript | HTML5/CSS3 | Axios (HTTP)</text>
              <text x="60" y="85" fontSize="10" fill="#333">State: Redux | Components: Material-UI | Build: Webpack | Testing: Jest</text>
              <text x="60" y="100" fontSize="9" fill="#666">Responsivo (mobile-first) | PWA capable</text>
            </g>

            {/* Connection arrow */}
            <line x1="350" y1="110" x2="350" y2="130" stroke="#666" strokeWidth="2" markerEnd="url(#arrowhead)"/>
            <text x="370" y="122" fontSize="9" fill="#666">HTTP/JSON</text>

            {/* Backend Layer */}
            <g>
              <rect x="20" y="130" width="660" height="100" fill="#F3E5F5" stroke="#7B1FA2" strokeWidth="2" rx="5"/>
              <text x="40" y="155" fontSize="12" fontWeight="bold" fill="#6A1B9A">BACKEND (Servidor)</text>
              <text x="60" y="178" fontSize="10" fill="#333">Java 17 | Spring Boot 3.0 | Spring MVC (Controllers)</text>
              <text x="60" y="195" fontSize="10" fill="#333">Spring Data JPA (ORM) | Spring Security (Auth) | REST APIs</text>
              <text x="60" y="212" fontSize="10" fill="#333">Build: Maven | Testing: JUnit 5 + Mockito | Server: Tomcat 10</text>
              <text x="60" y="228" fontSize="9" fill="#666">Separado en capas: Controllers → Services → Repositories</text>
            </g>

            {/* Connection arrow */}
            <line x1="350" y1="230" x2="350" y2="250" stroke="#666" strokeWidth="2" markerEnd="url(#arrowhead)"/>
            <text x="365" y="242" fontSize="9" fill="#666">SQL</text>

            {/* Database Layer */}
            <g>
              <rect x="20" y="250" width="660" height="80" fill="#E8F5E9" stroke="#388E3C" strokeWidth="2" rx="5"/>
              <text x="40" y="275" fontSize="12" fontWeight="bold" fill="#2E7D32">DATABASE (Almacenamiento)</text>
              <text x="60" y="298" fontSize="10" fill="#333">MySQL 8.0 (Relacional) | Schema: Tablas, relaciones, índices</text>
              <text x="60" y="315" fontSize="10" fill="#333">Migrations: Flyway | Backup automático | Replicación</text>
              <text x="60" y="328" fontSize="9" fill="#666">Hosted en servidor RDS o máquina virtual</text>
            </g>

            {/* DevOps Layer */}
            <g>
              <rect x="20" y="360" width="660" height="50" fill="#FFF3E0" stroke="#F57C00" strokeWidth="2" rx="5"/>
              <text x="40" y="378" fontSize="12" fontWeight="bold" fill="#E65100">DEVOPS (Infraestructura)</text>
              <text x="60" y="398" fontSize="10" fill="#333">Git/GitHub | Docker (contenedores) | CI/CD: GitHub Actions | Cloud: AWS/Heroku | Monitoring: Datadog</text>
            </g>

            {/* Arrow marker definition */}
            <defs>
              <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="5" refY="5" orient="auto">
                <polygon points="0 0, 10 5, 0 10" fill="#666" />
              </marker>
            </defs>
          </svg>

          <p>
            Este stack es típico para 2025. Las herramientas están seleccionadas por popularidad, documentación, comunidad,
            y compatibilidad. Cambiar cualquier parte requiere reconsideración cuidadosa (cambiar de React a Vue, o MySQL a PostgreSQL).
          </p>
        </>
      )
    },

    {
      title: 'Iniciación del Proyecto',
      content: (
        <>
          <p>
            El <strong>setup correcto del proyecto</strong> es fundamental. Si configuras todo bien al inicio, todo tu equipo
            trabajará bajo las mismas condiciones, tendrá las mismas herramientas, y no habrá conflictos como "en mi máquina funciona
            pero en la tuya no". Es como preparar un sitio de construcción: necesitas herramientas, permisos, materiales, y un plan.
          </p>

          <h3>Herramientas Esenciales</h3>
          <p>
            <strong>Java 17 LTS</strong> es el lenguaje. Instálalo correctamente y verifica con <code>java -version</code>.
            <strong>Maven o Gradle</strong> es el gestor de dependencias y build. Maven es más tradicional, Gradle más moderno.
            Para este curso, Maven es suficiente. <strong>IDE</strong> es tu editor: IntelliJ IDEA (recomendado, de pago pero tiene versión
            community gratuita) o VSCode (gratuito, requiere más configuración). <strong>MySQL o PostgreSQL</strong> para la base de datos.
            Instala localmente para desarrollo. <strong>Git</strong> para control de versiones. Configura con GitHub para colaborar.
          </p>

          <h3>Estructura del Proyecto</h3>
          <p>
            Crea un proyecto Maven bien estructurado. El código fuente va en <code>src/main/java</code>. Los tests en <code>src/test/java</code>.
            Recursos (properties, archivos de configuración) en <code>src/main/resources</code>. El <code>pom.xml</code> define dependencias.
            Spring Boot genera automáticamente esta estructura cuando creas un proyecto starter.
          </p>

          <h3>Configuración del Entorno</h3>
          <p>
            Crea un archivo <code>application.properties</code> (o <code>application.yml</code>) para configurar la base de datos, el puerto del
            servidor, y otros parámetros. Crea configuraciones por entorno: <code>application-dev.properties</code> para desarrollo (localhost),
            <code>application-prod.properties</code> para producción (servidor remoto). En desarrollo, podrías usar:
          </p>

          <p>
            <code>spring.datasource.url=jdbc:mysql://localhost:3306/joma_dev</code><br/>
            <code>spring.datasource.username=root</code><br/>
            <code>spring.datasource.password=password</code><br/>
            <code>server.port=8080</code>
          </p>

          <p>
            <strong>Configura .gitignore</strong> para no subir archivos sensibles (application-prod.properties con credenciales reales,
            archivos .class compilados, IDE settings). Una buena regla: si contiene secretos o es autogenerado, está en .gitignore.
          </p>

          <InfoBox type="info">
            <strong>Documenta el setup en un README.md</strong> con pasos claros: qué instalar, cómo clonar el repo, cómo crear la BD local,
            cómo ejecutar. Esto evita preguntas repetidas de nuevos desarrolladores.
          </InfoBox>
        </>
      )
    },
  ];

  const keyPoints = [
    'Documentar todos los pasos de setup',
    'Usar Maven/Gradle para gestión de dependencias',
    'Crear base de datos local con scripts',
    'Configurar .gitignore para archivos sensibles',
    'Usar archivos properties por entorno (dev, test, prod)',
    'Readme claro con instrucciones de setup',
  ];

  const summary = 'Setup organizado ahorra tiempo y previene problemas en el equipo.';

      return (
    <>
      <LessonTemplate
        title="Setup del Proyecto"
        breadcrumbs={breadcrumbs}
        concepts={concepts}
        exercises={exercises}
        keyPoints={keyPoints}
        sections={sections}
        summary={summary}
      />
      <LessonNavigation
        previousLink={nav.previous}
        previousTitle={nav.previousTitle}
        nextLink={nav.next}
        nextTitle={nav.nextTitle}
      />
    </>
  );
}