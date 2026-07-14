import { LessonTemplate, CodeBlock, InfoBox } from '../components';
import { LessonNavigation } from '../components/LessonNavigation';
import { useBreadcrumb } from '../hooks/useBreadcrumb';
import { useLessonNavigation } from '../hooks/useLessonNavigation';

export function LessonGradle() {
  const breadcrumbs = useBreadcrumb();
  const nav = useLessonNavigation();

  const concepts = [
    {
      icon: '🔨',
      title: 'Gradle',
      definition: 'Sistema de construcción flexible basado en Groovy/Kotlin',
      example: 'Más flexible que Maven, usado en Android y Spring Boot moderno'
    },
    {
      icon: '📝',
      title: 'build.gradle',
      definition: 'Archivo de configuración principal de Gradle',
      example: 'Define plugins, dependencias, tareas personalizadas'
    },
    {
      icon: '⚡',
      title: 'Tasks',
      definition: 'Unidades de trabajo que Gradle puede ejecutar',
      example: 'build, test, clean, assemble, publish'
    },
    {
      icon: '🎨',
      title: 'Plugins',
      definition: 'Extienden Gradle con funcionalidades adicionales',
      example: 'java-library, application, spring-boot, maven-publish'
    },
    {
      icon: '🔗',
      title: 'Dependency Configuration',
      definition: 'Especifica cuándo se necesita cada dependencia',
      example: 'implementation, testImplementation, compileOnly, runtimeOnly'
    }
  ];

  const exercises = [
    {
      title: 'Crear proyecto Gradle básico',
      description: 'Genera un nuevo proyecto Gradle para aplicación Java',
      solution: `gradle init --type java-application --dsl groovy

cd app
gradle build
gradle run`
    },
    {
      title: 'Configurar dependencia en build.gradle',
      description: 'Añade Spring Boot y JUnit 5 al proyecto',
      solution: `dependencies {
  implementation 'org.springframework.boot:spring-boot-starter-web:3.0.0'
  implementation 'org.slf4j:slf4j-api:2.0.6'

  testImplementation 'junit:junit:4.13.2'
  testImplementation 'org.springframework.boot:spring-boot-starter-test:3.0.0'
}`
    }
  ];

  const sections = [
    {
      title: 'Introducción a Gradle',
      content: (
        <>
          <p>Gradle es un sistema de construcción moderno que combina la flexibilidad de Ant con la gestión de dependencias de Maven.</p>
          <CodeBlock
            language="bash"
            code={`# Instalar Gradle (macOS)
brew install gradle

# Verificar instalación
gradle --version

# Crear proyecto nuevo
gradle init

# Estructura Gradle
src/
  main/
    java/        # Código fuente
    resources/   # Configuración
  test/
    java/        # Tests
    resources/
build/           # Generado (no controlar en git)
build.gradle     # Configuración principal
settings.gradle  # Configuración multi-proyecto`}
          />
        </>
      )
    },
    {
      title: 'Archivo build.gradle',
      content: (
        <>
          <p>El archivo build.gradle define la configuración del proyecto en Groovy o Kotlin.</p>
          <CodeBlock
            language="groovy"
            code={`plugins {
  id 'java'
  id 'application'
}

group = 'com.ejemplo'
version = '1.0.0'
sourceCompatibility = '11'

repositories {
  mavenCentral()
}

dependencies {
  // Compilación
  implementation 'org.springframework.boot:spring-boot-starter-web:3.0.0'
  implementation 'com.google.guava:guava:31.1-jre'

  // Testing
  testImplementation 'junit:junit:4.13.2'
  testImplementation 'org.mockito:mockito-core:5.2.0'
}

application {
  mainClass = 'com.ejemplo.App'
}

tasks.named('test') {
  useJUnitPlatform()
}`}
          />
        </>
      )
    },
    {
      title: 'Tasks y Ejecución',
      content: (
        <>
          <p>Gradle organiza el trabajo en tareas que se pueden ejecutar y combinar.</p>
          <CodeBlock
            language="bash"
            code={`# Listar todas las tareas disponibles
gradle tasks

# Compilar código
gradle build

# Ejecutar tests
gradle test

# Ejecutar aplicación (si es application plugin)
gradle run

# Crear JAR
gradle assemble

# Limpiar
gradle clean

# Múltiples tareas
gradle clean build test

# Ver dependencias
gradle dependencies`}
          />
          <InfoBox type="info">
            Las tareas se pueden definir personalizadas en build.gradle para automatizar procesos específicos.
          </InfoBox>
        </>
      )
    },
    {
      title: 'Gestión de Dependencias',
      content: (
        <>
          <p>Gradle proporciona granularidad en dónde y cuándo se necesitan las dependencias.</p>
          <CodeBlock
            language="groovy"
            code={`dependencies {
  // Available en compilación y runtime
  implementation 'org.springframework.boot:spring-boot-starter:3.0.0'

  // Solo en compilación (no en JAR)
  compileOnly 'org.projectlombok:lombok:1.18.28'
  annotationProcessor 'org.projectlombok:lombok:1.18.28'

  // Solo en runtime (no en compilación)
  runtimeOnly 'mysql:mysql-connector-java:8.0.32'

  // Solo en testing
  testImplementation 'junit:junit:4.13.2'
  testImplementation 'org.mockito:mockito-core:5.2.0'

  // Desde repositorio privado
  implementation 'com.empresa:libreria-interna:1.0.0'
}`}
          />
        </>
      )
    },
    {
      title: 'Comparativa: Gradle vs Maven',
      content: (
        <>
          <CodeBlock
            language="bash"
            code={`GRADLE vs MAVEN

Gradle:
✓ Más flexible y potente
✓ Sintaxis concisa en Groovy/Kotlin
✓ Mejor rendimiento (caché incremental)
✓ Preferido en Android
✓ Mejor para proyectos complejos

Maven:
✓ Más simple y estándar
✓ Convención sobre configuración
✓ Comunidad más consolidada
✓ Mejor para equipos grandes
✓ Curva de aprendizaje menor

build.gradle (Gradle):         pom.xml (Maven):
plugins { ... }                <modelVersion>
repositories { ... }           <groupId>
dependencies { ... }           <dependencies>
tasks { ... }                  <build><plugins>`}
          />
        </>
      )
    }
  ];

  const keyPoints = [
    'Gradle es más flexible y rápido que Maven',
    'build.gradle define configuración en Groovy o Kotlin',
    'Tasks son unidades de trabajo ejecutables',
    'Plugins añaden funcionalidad (java, spring-boot, etc)',
    'Dependency configurations: implementation, testImplementation, etc',
    'Gradle build cache mejora velocidad en builds posteriores',
    'settings.gradle configura proyectos multi-módulo',
    'gradle --info muestra detalles de ejecución',
    'Preferido en proyectos Android y Spring Boot moderno'
  ];

  const summary = `Gradle es un sistema de construcción moderno y flexible para Java:

• Sintaxis limpia en Groovy o Kotlin
• Tasks organizan y automatizan trabajo
• Plugins extienden funcionalidad
• Dependency configurations dan granularidad
• Build cache acelera compilaciones
• Preferido en Android y Spring Boot
• Más flexible que Maven para casos complejos`;

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