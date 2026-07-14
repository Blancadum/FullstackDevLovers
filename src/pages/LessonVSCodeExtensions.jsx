import { NarrativeLessonTemplate, LessonSection, CodeBlock } from '../components';
import { LessonNavigation } from '../components/LessonNavigation';
import { useBreadcrumb } from '../hooks/useBreadcrumb';
import { useLessonNavigation } from '../hooks/useLessonNavigation';

export function LessonVSCodeExtensions() {
  const breadcrumbs = useBreadcrumb();
  const nav = useLessonNavigation();

  const keyPoints = [
    'Las extensiones son el corazón de VS Code. Permiten customizarlo completamente',
    'Instala solo extensiones que realmente uses. Cada una consume memoria y ralentiza VS Code',
    'Extension Pack for Java es el primer paso obligatorio para desarrollo Java',
    'SonarQube/SonarLint son imprescindibles para código de calidad empresarial',
    'GitLens es essential para trabajo en equipo. Muestra quién escribió cada línea',
    'REST Client permite testing de APIs sin abrir Postman. Muy productivo',
    'Docker y Kubernetes son mandatory si trabajas con containerización',
    'Prettier formatea código automáticamente. Elimina debates sobre estilo',
    'Settings Sync sincroniza tu configuración entre máquinas. No olvides activarlo',
    'Revisa extensiones regularmente y desinstala las que no uses para mantener VS Code rápido',
  ];

  return (
    <>
      <NarrativeLessonTemplate
      title="Extensiones de VS Code"
      breadcrumbs={breadcrumbs}
      keyPoints={keyPoints}
    >
      <LessonSection title="Introducción a las Extensiones" level={1}>
        <p>
          Las <strong>extensiones</strong> son el corazón de VS Code. Transforman un editor básico
          en una herramienta potente y customizable según tus necesidades específicas.
        </p>

        <p>
          A diferencia de Eclipse o IntelliJ que vienen con muchas funcionalidades integradas,
          VS Code te permite elegir exactamente qué instalar. Esto lo hace ligero pero infinitamente
          extensible.
        </p>

        <h3>¿Cómo instalar extensiones?</h3>
        <ol>
          <li>Click en icono de Extensiones (izquierda, 4 cuadrados)</li>
          <li>Buscar extensión por nombre</li>
          <li>Click "Install"</li>
          <li>Listo, ya está disponible</li>
        </ol>

        <p>
          <strong>Consejo importante:</strong> no instales demasiadas extensiones. Cada una consume
          memoria y puede ralentizar VS Code. Instala solo las que realmente uses y desinstala las
          que dejes de usar.
        </p>
      </LessonSection>

      <LessonSection title="Extensiones por Categoría" level={1}>

        <h3>Desarrollo Java - Esenciales</h3>
        <p>
          Estas extensiones son <strong>obligatorias</strong> para cualquier desarrollo Java en VS Code:
        </p>
        <ul>
          <li>
            <strong>Extension Pack for Java (Microsoft)</strong>
            <br />Pack oficial que incluye: Language Support for Java, Debugger for Java, Test Runner,
            Maven for Java, Project Manager, Visual Studio IntelliCode. Instalarlo es el primer paso.
          </li>
          <li>
            <strong>Spring Boot Extension Pack (Microsoft)</strong>
            <br />Si trabajas con Spring Boot: Spring Boot Dashboard, properties file support, integración
            con Spring Initializr para crear proyectos. Recomendado para desarrollo web en Java.
          </li>
          <li>
            <strong>Gradle for Java (Microsoft)</strong>
            <br />Soporte completo para Gradle (alternativa a Maven). Muestra tareas disponibles,
            ejecuta builds, autocompletado para build.gradle. Instala si usas Gradle.
          </li>
          <li>
            <strong>Lombok Annotations Support (Ganesh Rathinavel)</strong>
            <br />Autocompletado e inspección para anotaciones Lombok (@Data, @Getter, @Setter, etc.).
            Evita warnings falsos. Solo instala si usas Lombok en tus proyectos.
          </li>
        </ul>

        <h3>🔍 Análisis y Calidad de Código</h3>
        <p>
          Estas extensiones mejoran significativamente la calidad de tu código detectando problemas
          antes de ejecutar:
        </p>
        <ul>
          <li>
            <strong>SonarQube for IDE (SonarSource)</strong>
            <br />Integración directa con SonarQube en VS Code. Análisis en tiempo real de bugs,
            vulnerabilidades y code smells. Ideal para equipos que usan SonarQube en CI/CD.
            Ofrece feedback instantáneo mientras escribes.
          </li>
          <li>
            <strong>SonarLint (SonarSource)</strong>
            <br />Alternativa más ligera a SonarQube for IDE. Análisis de código estático sin necesidad
            de servidor. Detecta bugs, vulnerabilidades y vulnerabilidades. Perfecto para proyectos
            pequeños o desarrollo individual.
          </li>
          <li>
            <strong>ESLint (Microsoft)</strong>
            <br />Linter para JavaScript/TypeScript. Esencial si haces frontend o backend con Node.js.
            Detecta errores de sintaxis y problemas de código.
          </li>
          <li>
            <strong>Prettier - Code formatter (Prettier)</strong>
            <br />Formateador automático de código. Soporta Java, JavaScript, HTML, CSS, JSON y más.
            Presiona Save y Prettier ajusta el formato automáticamente. Elimina debates sobre estilo
            de código en equipos.
          </li>
        </ul>

        <h3>🌐 Testing y APIs REST</h3>
        <p>
          Para testing y debugging de APIs REST sin abandonar VS Code:
        </p>
        <ul>
          <li>
            <strong>REST Client (Huachao Mao)</strong>
            <br />Hacer peticiones HTTP directamente desde VS Code. Archivos .http o .rest con sintaxis
            simple para GET, POST, PUT, DELETE, etc. Muy productivo para testing de APIs sin abrir
            Postman. Perfecto para desarrollo TDD de APIs.
          </li>
          <li>
            <strong>Postman (Postman)</strong>
            <br />Cliente HTTP completo integrado en VS Code. Interfaz gráfica, colecciones de requests,
            environments, testing automático. Mejor si prefieres GUI sobre código.
          </li>
          <li>
            <strong>Thunder Client (Thunder Client)</strong>
            <br />Cliente HTTP ligero y rápido. Alternativa más eficiente a Postman. Perfect para
            testing rápido de APIs. Muy rápido de cargar y usar.
          </li>
        </ul>

        <h3>📝 Control de Versiones y Colaboración</h3>
        <p>
          Imprescindibles para trabajo en equipo y gestión del código:
        </p>
        <ul>
          <li>
            <strong>GitLens (Eric Amodio)</strong>
            <br />Potencia Git integrado en VS Code. Muestra quién escribió cada línea, cuándo, y en qué
            commit. Permite navegar por historial y entender contexto de cambios. Imprescindible para
            trabajo en equipo. Una de las extensiones más populares.
          </li>
          <li>
            <strong>Git Graph (mhutchie)</strong>
            <br />Visualiza el historial de commits en forma de gráfico. Muestra ramas, merges, y permite
            navegar más fácilmente que desde terminal. Excelente para entender la historia del proyecto.
          </li>
          <li>
            <strong>Settings Sync (Microsoft)</strong>
            <br />Sincroniza settings de VS Code entre máquinas usando GitHub Gist. Mantén tu configuración,
            extensiones y temas consistentes en todos tus dispositivos. Essential si trabajas en múltiples
            máquinas.
          </li>
        </ul>

        <h3>🐳 DevOps, Herramientas y Productividad</h3>
        <p>
          Extensiones para desarrollo moderno con containers y herramientas profesionales:
        </p>
        <ul>
          <li>
            <strong>Docker (Microsoft)</strong>
            <br />Soporte completo para Docker en VS Code. Gestión de contenedores, visualización de
            imágenes, logs, redes. Esencial si trabajas con Docker. Facilita enormemente el debugging
            de aplicaciones en containers.
          </li>
          <li>
            <strong>Kubernetes (Microsoft)</strong>
            <br />Soporte para Kubernetes en VS Code. Visualiza clusters, deployments, pods, services.
            Imprescindible si trabajas con K8s en producción. Proporciona intellisense para manifiestos YAML.
          </li>
          <li>
            <strong>Todo Tree (Gruntfuggly)</strong>
            <br />Visualiza todos los TODOs, FIXMEs, HACKs del proyecto en una vista de árbol. Navega
            rápidamente a tus tareas pendientes organizadas por archivo. Mejora productividad y asegura
            que no olvides cosas.
          </li>
        </ul>

        <h3>🎨 Temas y Personalización</h3>
        <p>
          Personaliza la apariencia de VS Code según tus preferencias:
        </p>
        <ul>
          <li>
            <strong>Dark+ Material (Equim Gomes de Melo González)</strong>
            <br />Tema oscuro moderno. Extensión mejorada del tema por defecto Dark+ de VS Code con
            colores optimizados para legibilidad.
          </li>
          <li>
            <strong>Peacock (John Papa)</strong>
            <br />Colorea espacios de trabajo VS Code con diferentes colores. Perfecto si tienes múltiples
            proyectos abiertos simultáneamente o trabajas en diferentes contextos.
          </li>
        </ul>
      </LessonSection>

      <LessonSection title="Paquetes Recomendados por Caso de Uso" level={1}>
        <p>
          No necesitas instalar todas las extensiones. Aquí hay configuraciones recomendadas según
          tu tipo de proyecto:
        </p>

        <h3>Proyecto Java Puro (Consola)</h3>
        <CodeBlock language="text" code={`
IMPRESCINDIBLES:
✓ Extension Pack for Java
✓ SonarLint

RECOMENDADAS:
✓ Prettier
✓ GitLens
✓ Git Graph
✓ Settings Sync

OPCIONAL:
- Todo Tree
- Dark+ Material
        `} />

        <h3>Proyecto Spring Boot (Web + API)</h3>
        <CodeBlock language="text" code={`
IMPRESCINDIBLES:
✓ Extension Pack for Java
✓ Spring Boot Extension Pack
✓ REST Client (testing de APIs)
✓ SonarQube for IDE

RECOMENDADAS:
✓ GitLens
✓ Git Graph
✓ Prettier
✓ Docker (si deploys en containers)

OPCIONAL:
- Postman (si prefieres GUI)
- Kubernetes (si usas K8s)
- Settings Sync
        `} />

        <h3>Proyecto Java + Frontend (Full Stack)</h3>
        <CodeBlock language="text" code={`
IMPRESCINDIBLES:
✓ Extension Pack for Java
✓ ESLint (para JavaScript/TypeScript)
✓ Prettier (formato para todo)

RECOMENDADAS:
✓ REST Client
✓ GitLens
✓ SonarLint
✓ Git Graph
✓ Settings Sync

OPCIONAL:
- Spring Boot Extension Pack (si usas Spring)
- Docker
- Todo Tree
        `} />

        <h3>Proyecto con Equipo (Colaboración)</h3>
        <CodeBlock language="text" code={`
IMPRESCINDIBLES:
✓ Extension Pack for Java
✓ GitLens (quién escribió cada línea)
✓ Git Graph (histórico visual)
✓ SonarQube for IDE (calidad compartida)
✓ Settings Sync (sincronizar config)

RECOMENDADAS:
✓ Prettier (formato consistente)
✓ REST Client
✓ Docker (si trabajas en containers)

OPCIONAL:
- Todo Tree
- Peacock (colores por context)
        `} />

        <h3>Desarrollo con DevOps/Cloud</h3>
        <CodeBlock language="text" code={`
IMPRESCINDIBLES:
✓ Extension Pack for Java
✓ Docker
✓ Kubernetes

RECOMENDADAS:
✓ REST Client
✓ GitLens
✓ SonarLint
✓ Spring Boot Extension Pack (si aplica)

OPCIONAL:
- Prettier
- Todo Tree
- Settings Sync
        `} />
      </LessonSection>

      <LessonSection title="Extensiones a Evitar" level={1}>
        <p>
          Algunas extensiones suenan útiles pero son problemáticas:
        </p>
        <ul>
          <li>
            <strong>❌ Múltiples linters/formatters:</strong> No instales ESLint + Prettier + Beautify
            + Format Code. Elige UNO y úsalo consistentemente.
          </li>
          <li>
            <strong>❌ Extensiones de temas pesadas:</strong> Algunos temas con animaciones pueden
            ralentizar VS Code. Prueba antes de instalar.
          </li>
          <li>
            <strong>❌ Extensiones sin mantenimiento:</strong> Verifica que la extensión se actualice
            frecuentemente. Si la última actualización fue hace 2 años, evítala.
          </li>
          <li>
            <strong>❌ Extensiones de funcionalidades redundantes:</strong> Si Git está integrado,
            no instales "Git Lens" + "Git Graph" + 3 extensiones de Git más. Elige una.
          </li>
        </ul>
      </LessonSection>

      <LessonSection title="Optimización de VS Code" level={1}>
        <h3>Mantén VS Code Rápido</h3>
        <ol>
          <li><strong>Revisa extensiones regularmente:</strong> Desinstala las que no uses</li>
          <li><strong>Desactiva extensiones por workspace:</strong> En algunos proyectos no necesitas todas</li>
          <li><strong>Monitorea rendimiento:</strong> Help → Show Running Extensions, verifica cuál consume CPU</li>
          <li><strong>Actualiza regularmente:</strong> Extensiones nuevas suelen ser más rápidas</li>
          <li><strong>Evita instalar 50+ extensiones:</strong> Cada una suma. Sé selectivo.</li>
        </ol>

        <h3>Configuración Recomendada</h3>
        <CodeBlock language="text" code={`
INSTALADAS (máximo 15-20):
- Extension Pack for Java (1 pack = 6 extensiones integradas)
- GitLens
- SonarLint
- Prettier
- REST Client
- Docker
- Kubernetes (opcional)
- Settings Sync

DESACTIVADAS EN CIERTOS PROYECTOS:
- Spring Boot Extension Pack (solo en proyectos Spring)
- ESLint (solo en proyectos frontend)
- Kubernetes (solo si usas K8s)

TOTAL RECOMENDADO: 8-12 extensiones activas
        `} />
      </LessonSection>

      <LessonSection title="Resumen" level={1}>
        <ul>
          <li>Las extensiones son clave en VS Code. Permiten customizarlo completamente</li>
          <li>Extension Pack for Java es obligatorio para desarrollo Java</li>
          <li>SonarQube/SonarLint son imprescindibles para código de calidad</li>
          <li>GitLens es essential para trabajo en equipo</li>
          <li>REST Client permite testing de APIs sin Postman</li>
          <li>Docker y Kubernetes son fundamentales para desarrollo moderno</li>
          <li>Prettier formatea código automáticamente</li>
          <li>Settings Sync sincroniza config entre máquinas</li>
          <li>No instales demasiadas extensiones. Mantén VS Code rápido</li>
          <li>Desinstala extensiones que no uses</li>
        </ul>
      </LessonSection>
    </NarrativeLessonTemplate>
      <LessonNavigation
        previousLink={nav.previous}
        previousTitle={nav.previousTitle}
        nextLink={nav.next}
        nextTitle={nav.nextTitle}
      />
    </>
  );
}
