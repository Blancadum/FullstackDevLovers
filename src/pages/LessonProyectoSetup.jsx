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
            El setup correcto es fundamental para que todo el equipo trabaje bajo las mismas condiciones.
          </p>
          <InfoBox type="info">
            Documentar el setup previene problemas cuando nuevos desarrolladores se incorporan.
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