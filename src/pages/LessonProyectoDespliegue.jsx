import { LessonTemplate, CodeBlock, InfoBox, Table } from '../components';
import { LessonNavigation } from '../components/LessonNavigation';
import { useBreadcrumb } from '../hooks/useBreadcrumb';
import { useLessonNavigation } from '../hooks/useLessonNavigation';

export function LessonProyectoBuild() {
  const breadcrumbs = useBreadcrumb();
  const nav = useLessonNavigation();
  const concepts = [
    { icon: '📦', title: 'Build & Packaging', definition: 'Compilar y empaquetar aplicación para producción', example: 'Maven: mvn clean package; genera JAR ejecutable' },
  ];
  const sections = [
    {
      title: 'Build con Maven',
      content: (
        <>
          <CodeBlock language="bash" code={`# Maven Build Process
mvn clean install          # Limpiar + compilar + tests + instalar
mvn clean package          # Compilar + tests + generar JAR/WAR
mvn clean package -DskipTests  # Build sin ejecutar tests (rápido)

# Resultado en target/
target/joma-project-1.0.0.jar    # JAR ejecutable
target/joma-project-1.0.0.war    # WAR para Tomcat

# Ejecutar JAR
java -jar target/joma-project-1.0.0.jar

# Propiedades production
java -jar joma-project-1.0.0.jar --spring.profiles.active=prod`} />

          <h3>Pom.xml - Configuración Importante</h3>
          <CodeBlock language="xml" code={`<project>
  <properties>
    <java.version>17</java.version>
    <maven.compiler.source>17</maven.compiler.source>
    <maven.compiler.target>17</maven.compiler.target>
  </properties>

  <dependencies>
    <dependency>
      <groupId>org.springframework.boot</groupId>
      <artifactId>spring-boot-starter-web</artifactId>
    </dependency>
    <dependency>
      <groupId>mysql</groupId>
      <artifactId>mysql-connector-java</artifactId>
      <version>8.0.33</version>
    </dependency>
  </dependencies>

  <build>
    <plugins>
      <plugin>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-maven-plugin</artifactId>
      </plugin>
    </plugins>
  </build>
</project>`} />
        </>
      )
    },
  ];

  const keyPoints = [
    'Build con Maven',
    'Packaging JAR/WAR',
    'Propiedades de configuración'
  ];

  return (
    <>
      <LessonTemplate
        title="Despliegue en Cloud"
        breadcrumbs={breadcrumbs}
        concepts={concepts}
        sections={sections}
        keyPoints={keyPoints}
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

export function LessonProyectoDocumentacion() {
  return <LessonProyectoBuild />;
}

export function LessonProyectoCloud() {
  return <LessonProyectoBuild />;
}