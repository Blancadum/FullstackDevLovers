import { LessonTemplate, CodeBlock, InfoBox } from '../components';
import { LessonNavigation } from '../components/LessonNavigation';
import { useBreadcrumb } from '../hooks/useBreadcrumb';
import { useLessonNavigation } from '../hooks/useLessonNavigation';

export function LessonDockerJava() {
  const breadcrumbs = useBreadcrumb();
  const nav = useLessonNavigation();

  const concepts = [
    { icon: '☕', title: 'Java', definition: 'Lenguaje compilado, Spring Boot popular', example: 'java -jar app.jar' },
    { icon: '🏗️', title: 'Spring Boot', definition: 'Framework web embebido (sin Tomcat separado)', example: 'jar incluye servidor' },
    { icon: '📦', title: 'Maven', definition: 'Build tool, genera JAR', example: 'mvn clean package' },
    { icon: '🔨', title: 'Multi-stage', definition: 'Compilar en Maven, ejecutar con JRE slim', example: 'Maven (900MB) → JRE (200MB)' },
    { icon: '🎯', title: 'JRE vs JDK', definition: 'Runtime vs Development, usar JRE', example: 'openjdk:11-jre-slim' },
    { icon: '⚡', title: 'Startup', definition: 'Java tarda en arrancar, caché importante', example: 'Maven depency:resolve primero' }
  ];

  const exercises = [
    {
      title: 'Dockerfile Maven → Spring Boot',
      description: 'Compilar y empaquetar',
      solution: `FROM maven:3.8.1-openjdk-11 AS builder
WORKDIR /app
COPY pom.xml .
RUN mvn dependency:resolve
COPY src .
RUN mvn clean package -DskipTests

FROM openjdk:11-jre-slim
WORKDIR /app
COPY --from=builder /app/target/*.jar app.jar
EXPOSE 8080
CMD ["java", "-jar", "app.jar"]`
    }
  ];

  const sections = [
    {
      title: 'Spring Boot en Docker',
      content: (
        <>
          <CodeBlock
            language="dockerfile"
            code={`# ✓ Óptimo
FROM maven:3.8.1-openjdk-11 AS builder
WORKDIR /app
COPY pom.xml .
RUN mvn dependency:resolve  # Caché dependencies
COPY src .
RUN mvn clean package -DskipTests

FROM openjdk:11-jre-slim
WORKDIR /app
COPY --from=builder /app/target/*.jar app.jar
EXPOSE 8080
HEALTHCHECK --interval=30s CMD java -version
CMD ["java", "-Xmx512m", "-jar", "app.jar"]`}
          />

          <InfoBox type="info">
            <strong>Maven en caché:</strong> Primero COPY pom.xml y RUN dependency:resolve, luego COPY src. Así dependencies se cachean.
          </InfoBox>
        </>
      )
    },

    {
      title: 'Docker Compose',
      content: (
        <>
          <CodeBlock
            language="yaml"
            code={`version: '3.8'
services:
  app:
    build: .
    ports:
      - "8080:8080"
    depends_on:
      - db
    environment:
      SPRING_DATASOURCE_URL: jdbc:mysql://db:3306/mydb
      SPRING_DATASOURCE_USERNAME: root
      SPRING_DATASOURCE_PASSWORD: secret

  db:
    image: mysql:8.0
    environment:
      MYSQL_ROOT_PASSWORD: secret
      MYSQL_DATABASE: mydb`}
          />
        </>
      )
    }
  ];

  const keyPoints = [
    'maven:3.8 para compilar, openjdk:11-jre-slim para ejecutar',
    'Multi-stage: Maven (compilar) → JRE (ejecutar)',
    'maven dependency:resolve para caché de dependencias',
    'JRE no JDK en runtime (más ligero)',
    'Spring Boot embebe servidor (sin Tomcat externo)',
    'JAR auto-ejecutable',
    '-Xmx512m para limitar heap memory',
    'Startup lento pero lo cachea Docker',
    'MySQL común como BD',
    'Tamaño final: 300-500MB'
  ];

  const summary = `Java/Spring Boot en Docker:

• Multi-stage: Maven builder + JRE slim
• maven dependency:resolve para cacheo
• Spring Boot jar embebido
• openjdk:11-jre-slim runtime
• -Xmx512m para memoria
• MySQL típico como BD
• JDBC URL con nombre servicio
• Startup lento pero en producción está OK
• Tamaño ~300-500MB
• Healthcheck important`;

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
