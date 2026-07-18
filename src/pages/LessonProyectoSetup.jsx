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