import { LessonTemplate, CodeBlock, InfoBox } from '../components';
import { LessonNavigation } from '../components/LessonNavigation';
import { useBreadcrumb } from '../hooks/useBreadcrumb';
import { useLessonNavigation } from '../hooks/useLessonNavigation';

export function LessonSpringBootSetup() {
  const breadcrumbs = useBreadcrumb();
  const nav = useLessonNavigation();

  const concepts = [
    {
      icon: '⚙️',
      title: 'Spring Boot',
      definition: 'Framework para crear aplicaciones Spring con configuración automática',
      example: '@SpringBootApplication'
    },
    {
      icon: '🎯',
      title: 'Starter Dependencies',
      definition: 'Dependencias preconfigu­radas que simplifican la configuración',
      example: 'spring-boot-starter-web, spring-boot-starter-data-jpa'
    },
    {
      icon: '🔧',
      title: 'application.properties',
      definition: 'Archivo de configuración central de la aplicación',
      example: 'server.port=8080, spring.datasource.url'
    }
  ];

  const exercises = [
    {
      title: 'Crear proyecto Spring Boot',
      description: 'Usa Spring Boot CLI o start.spring.io',
      solution: `# Con Spring Boot CLI
spring boot new --type maven --dependencies web,jpa mi-app

# O descarga desde https://start.spring.io
# Selecciona:
# - Language: Java
# - Spring Boot: 3.2.x
# - Dependencies: Spring Web, Spring Data JPA, MySQL Driver`
    },
    {
      title: 'Configurar base de datos',
      description: 'Actualiza application.properties para MySQL',
      solution: `spring.datasource.url=jdbc:mysql://localhost:3306/miapp
spring.datasource.username=root
spring.datasource.password=password
spring.jpa.hibernate.ddl-auto=update
spring.jpa.properties.hibernate.dialect=org.hibernate.dialect.MySQL8Dialect`
    }
  ];

  const keyPoints = [
    'Spring Boot automatiza la configuración',
    'Starters agrupan dependencias relacionadas',
    'application.properties centraliza configuración',
    '@SpringBootApplication marca la clase principal',
    'Puedes usar application.yml en lugar de properties',
    'spring.profiles.active selecciona perfil (dev, prod)',
    'Actuator expone endpoints de monitoreo',
    'Embedded Tomcat no requiere servidor externo',
    'Maven o Gradle manejan dependencias',
    'Spring Boot devuelve código de estado HTTP correcto'
  ];

  const sections = [
    {
      title: '¿Qué es Spring Boot?',
      content: (
        <p>
          Spring Boot simplifica crear aplicaciones Spring mediante configuración automática e inteligente.
          Reduce código boilerplate y permite crear aplicaciones production-ready rápidamente.
        </p>
      )
    },
    {
      title: 'Crear un Proyecto Spring Boot',
      content: (
        <>
          <p>Existen varias formas de crear un proyecto Spring Boot:</p>
          <CodeBlock
            language="bash"
            code={`# 1. Usar Spring Boot CLI
spring boot new --type maven --dependencies web mi-app

# 2. Con Maven (crear estructura)
mvn archetype:generate -DgroupId=com.ejemplo -DartifactId=mi-app

# 3. Descargar desde https://start.spring.io (recomendado)
# 4. Usar tu IDE (IntelliJ, VS Code con extension)`}
          />
          <InfoBox type="info">
            start.spring.io es la forma más fácil. Solo selecciona dependencias y descarga.
          </InfoBox>
        </>
      )
    },
    {
      title: 'Estructura del Proyecto',
      content: (
        <>
          <p>Un proyecto Spring Boot típico tiene esta estructura:</p>
          <CodeBlock
            language="bash"
            code={`mi-app/
├── src/
│   ├── main/
│   │   ├── java/
│   │   │   └── com/ejemplo/
│   │   │       ├── MiAppApplication.java    (Clase principal)
│   │   │       ├── controller/
│   │   │       ├── service/
│   │   │       ├── repository/
│   │   │       └── model/
│   │   └── resources/
│   │       ├── application.properties
│   │       ├── application-dev.properties
│   │       ├── application-prod.properties
│   │       └── templates/
│   └── test/java/
├── pom.xml                      (Dependencias Maven)
└── README.md`}
          />
        </>
      )
    },
    {
      title: 'Configuración con application.properties',
      content: (
        <>
          <p>Centraliza la configuración en application.properties:</p>
          <CodeBlock
            language="properties"
            code={`# Servidor
server.port=8080
server.servlet.context-path=/api

# Base de datos
spring.datasource.url=jdbc:mysql://localhost:3306/miapp
spring.datasource.username=root
spring.datasource.password=password
spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=false

# Logging
logging.level.root=INFO
logging.level.com.ejemplo=DEBUG

# Actuator
management.endpoints.web.exposure.include=health,info,metrics

# Perfiles
spring.profiles.active=dev`}
          />
        </>
      )
    },
    {
      title: 'La Clase Principal (@SpringBootApplication)',
      content: (
        <>
          <p>Toda aplicación Spring Boot necesita una clase anotada con @SpringBootApplication:</p>
          <CodeBlock
            language="java"
            code={`package com.ejemplo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class MiAppApplication {

  public static void main(String[] args) {
    SpringApplication.run(MiAppApplication.class, args);
  }
}

// Esto es equivalente a:
// @Configuration
// @EnableAutoConfiguration
// @ComponentScan`}
          />
          <InfoBox type="info">
            @SpringBootApplication combina 3 anotaciones en una.
            La clase principal debe estar en el paquete raíz.
          </InfoBox>
        </>
      )
    },
    {
      title: 'Dependencias y Starters',
      content: (
        <>
          <p>Los Starters agrupan dependencias relacionadas:</p>
          <CodeBlock
            language="xml"
            code={`<!-- pom.xml -->
<dependencies>
  <!-- Web (Tomcat + Spring MVC)  -->
  <dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-web</artifactId>
  </dependency>

  <!-- Data JPA (Hibernate + JDBC) -->
  <dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-data-jpa</artifactId>
  </dependency>

  <!-- MySQL Driver -->
  <dependency>
    <groupId>com.mysql</groupId>
    <artifactId>mysql-connector-java</artifactId>
    <version>8.0.33</version>
  </dependency>

  <!-- Testing -->
  <dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-test</artifactId>
    <scope>test</scope>
  </dependency>
</dependencies>`}
          />
        </>
      )
    },
    {
      title: 'Ejecutar la Aplicación',
      content: (
        <>
          <CodeBlock
            language="bash"
            code={`# Desde Maven
mvn spring-boot:run

# Desde Gradle
gradle bootRun

# Crear JAR ejecutable
mvn clean package

# Ejecutar JAR
java -jar mi-app-1.0.0.jar

# Con propiedades personalizadas
java -jar mi-app.jar --server.port=9090 --logging.level.root=DEBUG`}
          />
        </>
      )
    }
  ];

  const summary = `Spring Boot simplifica desarrollo Java:

• @SpringBootApplication marca la clase principal
• Starters agrupan dependencias relacionadas
• application.properties centraliza configuración
• Embedded Tomcat no requiere servidor externo
• Configuración automática inteligente
• JAR ejecutable todo en uno
• Múltiples perfiles (dev, prod)
• Actuator para monitoreo
• spring.profiles.active selecciona ambiente
• mvn spring-boot:run ejecuta rápidamente`;

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