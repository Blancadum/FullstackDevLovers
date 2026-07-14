import { LessonTemplate, CodeBlock, InfoBox } from '../components';
import { LessonNavigation } from '../components/LessonNavigation';
import { useBreadcrumb } from '../hooks/useBreadcrumb';
import { useLessonNavigation } from '../hooks/useLessonNavigation';

export function LessonMaven() {
  const breadcrumbs = useBreadcrumb();
  const nav = useLessonNavigation();

  const concepts = [
    {
      icon: '📦',
      title: 'Maven',
      definition: 'Herramienta de gestión de proyectos y construcción (build) para Java',
      example: 'Automatiza compilación, testing y empaquetado de aplicaciones'
    },
    {
      icon: '📄',
      title: 'POM.xml',
      definition: 'Archivo de configuración principal de Maven (Project Object Model)',
      example: 'Define dependencias, plugins, versiones y propiedades del proyecto'
    },
    {
      icon: '🔄',
      title: 'Ciclo de Vida',
      definition: 'Fases estándar de construcción: clean, compile, test, package, install',
      example: 'Maven ejecuta tareas en orden: mvn clean install'
    },
    {
      icon: '🔗',
      title: 'Dependencias',
      definition: 'Librerías externas que tu proyecto necesita',
      example: 'Junit, Log4j, Spring Framework, Jackson, etc.'
    },
    {
      icon: '🗂️',
      title: 'Repositorios',
      definition: 'Ubicaciones centrales donde Maven descarga dependencias',
      example: 'Maven Central, repositorios corporativos privados'
    }
  ];

  const exercises = [
    {
      title: 'Crear proyecto Maven básico',
      description: 'Genera un nuevo proyecto Maven desde arquetipo estándar',
      solution: `mvn archetype:generate -DgroupId=com.ejemplo \\
  -DartifactId=mi-aplicacion \\
  -DarchetypeArtifactId=maven-archetype-quickstart \\
  -DinteractiveMode=false

cd mi-aplicacion
mvn clean install`
    },
    {
      title: 'Agregar dependencia a pom.xml',
      description: 'Añade JUnit 5 como dependencia al proyecto',
      solution: `<dependencies>
  <dependency>
    <groupId>org.junit.jupiter</groupId>
    <artifactId>junit-jupiter</artifactId>
    <version>5.9.2</version>
    <scope>test</scope>
  </dependency>
</dependencies>`
    }
  ];

  const sections = [
    {
      title: 'Introducción a Maven',
      content: (
        <>
          <p>Maven es una herramienta de gestión de proyectos que automatiza la compilación, testing y empaquetado de aplicaciones Java.</p>
          <CodeBlock
            language="bash"
            code={`# Instalar Maven (macOS con Homebrew)
brew install maven

# Verificar instalación
mvn --version

# Estructura de proyecto Maven
src/
  main/
    java/        # Código fuente
    resources/   # Archivos de configuración
  test/
    java/        # Tests
    resources/   # Datos de prueba
pom.xml          # Configuración del proyecto`}
          />
        </>
      )
    },
    {
      title: 'Archivo POM.xml',
      content: (
        <>
          <p>El archivo POM (Project Object Model) es la configuración central del proyecto.</p>
          <CodeBlock
            language="xml"
            code={`<?xml version="1.0" encoding="UTF-8"?>
<project>
  <modelVersion>4.0.0</modelVersion>

  <groupId>com.ejemplo</groupId>
  <artifactId>mi-app</artifactId>
  <version>1.0.0</version>

  <name>Mi Aplicación</name>
  <description>Descripción de la app</description>

  <dependencies>
    <dependency>
      <groupId>junit</groupId>
      <artifactId>junit</artifactId>
      <version>4.13.2</version>
      <scope>test</scope>
    </dependency>
  </dependencies>

  <build>
    <plugins>
      <plugin>
        <groupId>org.apache.maven.plugins</groupId>
        <artifactId>maven-compiler-plugin</artifactId>
        <version>3.10.1</version>
        <configuration>
          <source>11</source>
          <target>11</target>
        </configuration>
      </plugin>
    </plugins>
  </build>
</project>`}
          />
        </>
      )
    },
    {
      title: 'Ciclo de Vida de Maven',
      content: (
        <>
          <p>Maven tiene fases estándar que se ejecutan en orden secuencial.</p>
          <CodeBlock
            language="bash"
            code={`# Compilar código
mvn compile

# Ejecutar tests
mvn test

# Crear archivo JAR
mvn package

# Instalar en repositorio local
mvn install

# Limpiar archivos generados
mvn clean

# Combinación común: limpiar e instalar
mvn clean install

# Ejecutar fase específica
mvn clean compile test package`}
          />
          <InfoBox type="info">
            Las fases se ejecutan en orden: validate → compile → test → package → install → deploy
          </InfoBox>
        </>
      )
    },
    {
      title: 'Gestión de Dependencias',
      content: (
        <>
          <p>Maven descarga automáticamente las librerías que necesitas desde repositorios centrales.</p>
          <CodeBlock
            language="xml"
            code={`<dependencies>
  <!-- Spring Framework -->
  <dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-web</artifactId>
    <version>3.0.0</version>
  </dependency>

  <!-- Logging -->
  <dependency>
    <groupId>org.slf4j</groupId>
    <artifactId>slf4j-api</artifactId>
    <version>2.0.6</version>
  </dependency>

  <!-- Testing -->
  <dependency>
    <groupId>junit</groupId>
    <artifactId>junit</artifactId>
    <version>4.13.2</version>
    <scope>test</scope>
  </dependency>

  <!-- JSON Processing -->
  <dependency>
    <groupId>com.fasterxml.jackson.core</groupId>
    <artifactId>jackson-databind</artifactId>
    <version>2.15.0</version>
  </dependency>
</dependencies>`}
          />
        </>
      )
    }
  ];

  const keyPoints = [
    'Maven automatiza compilación, testing y empaquetado',
    'POM.xml es el archivo de configuración central',
    'Ciclo de vida: compile → test → package → install',
    'Dependencias se descargan automáticamente de repositorios',
    'Maven Central es el repositorio público principal',
    'mvn clean install es el comando más común',
    'Plugins extienden funcionalidad de Maven',
    'Scopes: compile, provided, runtime, test, system',
    'Gestión automática de versiones y compatibilidad'
  ];

  const summary = `Maven es la herramienta estándar para gestionar proyectos Java profesionales:

• Automatiza construcción, testing y empaquetado
• POM.xml centraliza configuración del proyecto
• Ciclo de vida predefinido: compile, test, package, install
• Gestiona dependencias automáticamente
• Plugins permiten extender funcionalidad
• mvn clean install prepara proyecto para producción`;

      return (
    <>
      <LessonTemplate
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