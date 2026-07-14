import { LessonTemplate, CodeBlock, InfoBox } from '../components';
import { LessonNavigation } from '../components/LessonNavigation';
import { useBreadcrumb } from '../hooks/useBreadcrumb';
import { useLessonNavigation } from '../hooks/useLessonNavigation';

export function LessonDependencias() {
  const breadcrumbs = useBreadcrumb();
  const nav = useLessonNavigation();

  const concepts = [
    {
      icon: '📦',
      title: 'Dependencia',
      definition: 'Librería externa que tu proyecto necesita para funcionar',
      example: 'Spring Framework, JUnit, Log4j, Jackson'
    },
    {
      icon: '🔍',
      title: 'Resolución de Dependencias',
      definition: 'Proceso de encontrar y descargar librerías necesarias',
      example: 'Maven/Gradle busca en repositorios centrales automáticamente'
    },
    {
      icon: '🚫',
      title: 'Conflicto de Versiones',
      definition: 'Cuando dos librerías requieren versiones diferentes de la misma dependencia',
      example: 'Librería A necesita Spring 5.0, Librería B necesita Spring 6.0'
    },
    {
      icon: '📊',
      title: 'Árbol de Dependencias',
      definition: 'Jerarquía de todas las librerías incluidas directa e indirectamente',
      example: 'Tu proyecto → Spring → commons-logging, jackson, etc'
    },
    {
      icon: '🔐',
      title: 'Scopes',
      definition: 'Define en qué fases del proyecto se necesita cada dependencia',
      example: 'compile, test, runtime, provided, optional'
    },
    {
      icon: '⚠️',
      title: 'Vulnerabilidades',
      definition: 'Problemas de seguridad en dependencias que pueden afectar tu app',
      example: 'Usar versiones actualizadas evita exploits conocidos'
    }
  ];

  const exercises = [
    {
      title: 'Ver árbol de dependencias en Maven',
      description: 'Visualiza todas las dependencias incluidas en tu proyecto',
      solution: `# Mostrar árbol completo
mvn dependency:tree

# Ver solo dependencias problemáticas
mvn dependency:tree | grep -E "duplicate|conflict"

# Exportar a archivo
mvn dependency:tree -DoutputFile=dependencies.txt`
    },
    {
      title: 'Resolver conflicto de versiones',
      description: 'Gestiona cuando dos librerías piden versiones diferentes',
      solution: `<!-- En pom.xml: excluir dependencia transitiva -->
<dependency>
  <groupId>org.springframework</groupId>
  <artifactId>spring-context</artifactId>
  <version>6.0.0</version>
  <exclusions>
    <exclusion>
      <groupId>commons-logging</groupId>
      <artifactId>commons-logging</artifactId>
    </exclusion>
  </exclusions>
</dependency>

<!-- Usar version explícita -->
<dependency>
  <groupId>commons-logging</groupId>
  <artifactId>commons-logging</artifactId>
  <version>1.3.0</version>
</dependency>`
    }
  ];

  const sections = [
    {
      title: 'Conceptos Básicos de Dependencias',
      content: (
        <>
          <p>Las dependencias son librerías externas que tu proyecto necesita. Maven y Gradle las descargan automáticamente.</p>
          <CodeBlock
            language="xml"
            code={`<!-- pom.xml -->
<dependencies>
  <!-- Dependencia directa -->
  <dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-web</artifactId>
    <version>3.0.0</version>
  </dependency>

  <!-- Dependencia con scope test -->
  <dependency>
    <groupId>junit</groupId>
    <artifactId>junit</artifactId>
    <version>4.13.2</version>
    <scope>test</scope>
  </dependency>
</dependencies>`}
          />
          <InfoBox type="info">
            GroupId + ArtifactId + Version identifica únicamente una librería en Maven Central.
          </InfoBox>
        </>
      )
    },
    {
      title: 'Scopes: Cuándo se Necesita Cada Dependencia',
      content: (
        <>
          <p>Los scopes controlan en qué fases del proyecto se incluye cada dependencia.</p>
          <CodeBlock
            language="bash"
            code={`SCOPE COMPILE (default):
✓ Disponible en compilación
✓ Incluida en JAR final
✓ Transitive a otros proyectos
Ejemplo: Spring Framework, JSON libraries

SCOPE TEST:
✗ NO disponible en compilación normal
✓ Disponible para ejecutar tests
✗ NO incluida en JAR
Ejemplo: JUnit, Mockito

SCOPE PROVIDED:
✓ Disponible en compilación
✓ El contenedor la proporciona en runtime
✗ NO incluida en JAR
Ejemplo: Servlet API (proporcionada por Tomcat)

SCOPE RUNTIME:
✗ NO necesaria en compilación
✓ Necesaria en runtime
✓ Incluida en JAR
Ejemplo: Drivers JDBC

SCOPE SYSTEM:
✓ Disponible en compilación y runtime
Debe especificarse la ruta local
No usa repositorio central
Evitar cuando sea posible`}
          />
        </>
      )
    },
    {
      title: 'Resolución y Árbol de Dependencias',
      content: (
        <>
          <p>Maven resuelve automáticamente las dependencias transitivas. A veces esto puede causar conflictos.</p>
          <CodeBlock
            language="bash"
            code={`# Visualizar árbol de dependencias
mvn dependency:tree

# Salida típica:
com.ejemplo:mi-app:jar:1.0
+- org.springframework.boot:spring-boot-starter-web:jar:3.0.0:compile
|  +- org.springframework:spring-web:jar:6.0.0:compile
|  |  +- org.springframework:spring-beans:jar:6.0.0:compile
|  +- org.springframework.boot:spring-boot-starter-tomcat:jar:3.0.0:compile
|     +- org.apache.tomcat.embed:tomcat-embed-core:jar:10.1.0:compile
+- junit:junit:jar:4.13.2:test

# Ver solo dependencias conflictivas
mvn dependency:tree -Dverbose | grep DUPLICATE`}
          />
          <InfoBox type="warning" title="Conflictos Comunes">
            Cuando dos librerías dependen de versiones diferentes de la misma librería. Maven elige la más cercana en el árbol. Usa exclusions para resolver.
          </InfoBox>
        </>
      )
    },
    {
      title: 'Gestión de Versiones y Actualizaciones',
      content: (
        <>
          <p>Mantener dependencias actualizadas es crucial para seguridad y compatibilidad.</p>
          <CodeBlock
            language="bash"
            code={`# Buscar dependencias desactualizadas
mvn versions:display-dependency-updates

# Actualizar automáticamente
mvn versions:use-latest-releases

# Probar sin cambios
mvn versions:display-property-updates

# Generar reporte de seguridad
# Usando OWASP dependency checker
mvn org.owasp:dependency-check-maven:check`}
          />
          <CodeBlock
            language="xml"
            code={`<!-- Usar properties para versiones consistentes -->
<properties>
  <spring-boot.version>3.0.0</spring-boot.version>
  <junit.version>4.13.2</junit.version>
  <maven.compiler.source>11</maven.compiler.source>
</properties>

<dependencies>
  <dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter</artifactId>
    <version>\${spring-boot.version}</version>
  </dependency>
  <dependency>
    <groupId>junit</groupId>
    <artifactId>junit</artifactId>
    <version>\${junit.version}</version>
  </dependency>
</dependencies>`}
          />
        </>
      )
    },
    {
      title: 'Mejores Prácticas en Gestión',
      content: (
        <>
          <CodeBlock
            language="xml"
            code={`<!-- ✓ BUENA PRÁCTICA: Usar BOM (Bill of Materials) -->
<dependencyManagement>
  <dependencies>
    <dependency>
      <groupId>org.springframework.boot</groupId>
      <artifactId>spring-boot-dependencies</artifactId>
      <version>3.0.0</version>
      <type>pom</type>
      <scope>import</scope>
    </dependency>
  </dependencies>
</dependencyManagement>

<!-- ✓ Especificar scope explícitamente -->
<dependency>
  <groupId>junit</groupId>
  <artifactId>junit</artifactId>
  <version>4.13.2</version>
  <scope>test</scope>  <!-- Explícito -->
</dependency>

<!-- ✓ Excluir transititivas problemáticas -->
<dependency>
  <groupId>org.springframework</groupId>
  <artifactId>spring-context</artifactId>
  <version>6.0.0</version>
  <exclusions>
    <exclusion>
      <groupId>commons-logging</groupId>
      <artifactId>commons-logging</artifactId>
    </exclusion>
  </exclusions>
</dependency>

<!-- ✗ EVITAR: Versiones imprecisas -->
<!-- <version>1.0</version>  Puede traer 1.0.99 -->

<!-- ✗ EVITAR: Muchas dependencias opcionales -->
<optional>true</optional>  <!-- Difícil de mantener -->`}
          />
          <InfoBox type="success">
            Usa BOM para proyectos Spring, excluye transitivas problemáticas, y mantén dependencias actualizadas.
          </InfoBox>
        </>
      )
    }
  ];

  const keyPoints = [
    'Dependencias son librerías externas que tu proyecto necesita',
    'Maven/Gradle las descargan automáticamente de repositorios',
    'Scopes controlan cuándo se necesita cada dependencia',
    'Dependencias transitivas se incluyen automáticamente',
    'Conflictos ocurren cuando librerías piden versiones diferentes',
    'mvn dependency:tree visualiza el árbol completo',
    'Exclusions resuelven conflictos de versiones',
    'Properties permiten versiones consistentes',
    'BOM (Bill of Materials) simplifica gestión en grandes proyectos',
    'Mantener actualizadas es crítico para seguridad'
  ];

  const summary = `La gestión eficiente de dependencias es clave en Java:

• Dependencias son librerías externas necesarias
• Scopes controlan dónde se necesita cada librería
• Maven/Gradle resuelven automáticamente transititivas
• Conflictos: usar exclusions o properties para resolver
• mvn dependency:tree visualiza lo que se incluye
• BOM simplifica versiones en proyectos grandes
• Mantener actualizadas previene vulnerabilidades
• Properties y exclusions son herramientas principales`;

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