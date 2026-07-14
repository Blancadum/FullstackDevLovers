import { NarrativeLessonTemplate, LessonSection, CodeBlock } from '../components';
import { LessonNavigation } from '../components/LessonNavigation';
import { useBreadcrumb } from '../hooks/useBreadcrumb';
import { useLessonNavigation } from '../hooks/useLessonNavigation';
import { Link } from 'react-router-dom';

export function LessonVSCode() {
  const breadcrumbs = useBreadcrumb();
  const nav = useLessonNavigation();

  const keyPoints = [
    'VS Code es un editor ligero, no un IDE completo',
    'Inicia en segundos y consume poca memoria',
    'Extensible mediante extensiones: hay miles disponibles',
    'Multiplataforma: Windows, Linux, Mac',
    'Gratuito y open source',
    'Git integrado en la sidebar izquierda',
    'Terminal integrado: Ctrl+` para abrir',
    'Extension Pack for Java es el primer paso para desarrollo Java',
    'Control de versiones con Git, debugging, testing desde VS Code',
    'Excelente para trabajar con múltiples lenguajes simultáneamente'
  ];

  return (
    <>
      <NarrativeLessonTemplate
      title="VS Code"
      breadcrumbs={breadcrumbs}
      keyPoints={keyPoints}
    >
      <LessonSection title="Introducción a VS Code" level={1}>
        <p>
          <strong>Visual Studio Code</strong> (VS Code) es un editor de código ligero pero potente
          desarrollado por <strong>Microsoft</strong>. Aunque no es un IDE completo como Eclipse o IntelliJ,
          es extremadamente popular por su simplicidad, velocidad y versatilidad.
        </p>

        <p>
          VS Code es diferente a los IDEs tradicionales: es más minimalista, pero permite agregar
          funcionalidades mediante extensiones según lo necesites.
        </p>

        <h3>Características principales</h3>
        <ul>
          <li><strong>Muy ligero:</strong> inicia rápido, consume poca memoria</li>
          <li><strong>Extensible:</strong> miles de extensiones disponibles</li>
          <li><strong>Multiplataforma:</strong> Windows, Linux, Mac</li>
          <li><strong>Control de versiones integrado:</strong> Git nativo en la sidebar</li>
          <li><strong>Terminal integrado:</strong> no necesitas ventana de comandos aparte</li>
          <li><strong>Debugging:</strong> soporte para Java mediante extensiones</li>
          <li><strong>Gratuito y open source:</strong> código disponible en GitHub</li>
        </ul>
      </LessonSection>

      <LessonSection title="Instalación y Configuración" level={1}>
        <h3>Descargar e instalar</h3>
        <ol>
          <li>Ir a <code>code.visualstudio.com</code></li>
          <li>Descargar para tu SO (Windows, Linux, Mac)</li>
          <li>Ejecutar instalador y seguir pasos</li>
          <li>Listo, VS Code está instalado</li>
        </ol>

        <h3>Instalar extensiones para Java</h3>
        <p>
          Para desarrollar en Java, necesitas instalar extensiones. La forma más fácil es usar
          el "Extension Pack for Java" de Microsoft que incluye todo:
        </p>
        <ol>
          <li>Abrir VS Code</li>
          <li>Click en icono de extensiones (izquierda, 4 cuadrados)</li>
          <li>Buscar "Extension Pack for Java"</li>
          <li>Click "Install"</li>
          <li>Esperar a que se descarguen e instalen todas las extensiones</li>
        </ol>

        <p>
          <strong>Extensiones incluidas en "Extension Pack for Java":</strong>
        </p>
        <ul>
          <li><strong>Language Support for Java (Red Hat):</strong> análisis y compilación</li>
          <li><strong>Debugger for Java:</strong> debugging</li>
          <li><strong>Test Runner for Java:</strong> soporte para JUnit y TestNG</li>
          <li><strong>Maven for Java:</strong> soporte para Maven</li>
          <li><strong>Project Manager for Java:</strong> gestión de proyectos</li>
          <li><strong>Visual Studio IntelliCode:</strong> autocompletado basado en AI</li>
        </ul>

        <h3>Extensiones adicionales recomendadas</h3>
        <CodeBlock language="text" code={`
- "Spring Boot Extension Pack" (Microsoft) - para Spring Boot
- "REST Client" - para probar APIs REST
- "Gradle for Java" - si usas Gradle
- "Postman" - cliente HTTP avanzado
- "Git Graph" - visualizar commits de forma gráfica
        `} />
      </LessonSection>

      <LessonSection title="Configuración y uso de VS Code con Java" level={1}>
        <h3>Crear un nuevo proyecto Java</h3>
        <CodeBlock language="text" code={`
OPCIÓN 1: Usando VS Code (recomendado)
1. Ctrl+Shift+P (abre command palette)
2. Escribir "Java: Create Java Project"
3. Seleccionar "Create Java Project"
4. Elegir carpeta y nombre
5. Seleccionar template (Gradle, Maven, o básico)
6. Proyecto creado con estructura

OPCIÓN 2: Manual
1. Crear carpeta nueva: mkdir MiProyecto
2. cd MiProyecto
3. Crear estructura: src/Main.java
4. Abrir carpeta en VS Code: File → Open Folder
        `} />

        <h3>Ejemplo: Hola Mundo en VS Code</h3>
        <CodeBlock language="java" code={`
public class Main {
    public static void main(String[] args) {
        System.out.println("¡Hola desde VS Code!");
    }
}

PARA EJECUTAR:
- Opción 1: Presionar Ctrl+F5 (ejecutar sin debug)
- Opción 2: Click botón "Run" arriba del código
- Opción 3: Terminal → New Terminal, luego: javac Main.java && java Main
        `} />

        <h3>Autocompletado y ayuda</h3>
        <ul>
          <li><strong>Ctrl+Space:</strong> mostrar autocompletado</li>
          <li><strong>Ctrl+I:</strong> trigger parameter hints</li>
          <li><strong>F12:</strong> ir a definición (Jump to Definition)</li>
          <li><strong>Ctrl+K Ctrl+I:</strong> mostrar información del símbolo</li>
          <li>Hover sobre variable/método para ver documentación</li>
        </ul>

        <h3>Debugging</h3>
        <CodeBlock language="text" code={`
1. Crear breakpoint: click en margen izquierdo junto a número de línea
2. Presionar F5 o Debug → Start Debugging
3. El programa se pausa en el breakpoint
4. Panel "Debug" (izquierda) muestra variables
5. Teclas:
   - F10: Step Over
   - F11: Step Into
   - Shift+F11: Step Out
   - F5: Continue
        `} />

        <h3>Terminal integrado</h3>
        <p>
          VS Code incluye terminal integrado (muy útil para Maven, Git, etc.):
        </p>
        <CodeBlock language="bash" code={`
# Abrir terminal: Ctrl+\`
# Crear proyecto Maven:
mvn archetype:generate -DgroupId=com.ejemplo -DartifactId=MiApp -DarchetypeArtifactId=maven-archetype-quickstart

# Compilar:
mvn clean compile

# Ejecutar tests:
mvn test

# Ejecutar aplicación:
mvn exec:java -Dexec.mainClass="com.ejemplo.Main"
        `} />

        <h3>Control de versiones (Git)</h3>
        <p>
          VS Code tiene Git integrado en la sidebar izquierda:
        </p>
        <ul>
          <li>Ver cambios: Source Control tab (Ctrl+Shift+G)</li>
          <li>Commits: escribir mensaje y click botón checkmark</li>
          <li>Push/Pull: click en los botones de la barra inferior</li>
          <li>Branches: cambiar rama desde barra inferior</li>
        </ul>
      </LessonSection>

      <LessonSection title="Extensiones de VS Code" level={1}>
        <p>
          VS Code brilla por su sistema de extensiones que lo hacen infinitamente extensible. Para una guía
          completa organizada por categorías con recomendaciones por tipo de proyecto:
        </p>
        <p style={{ marginTop: '1.5rem', textAlign: 'center' }}>
          <Link
            to="/entornos/herramientas/ides/vscode-extensions"
            style={{
              display: 'inline-block',
              padding: '0.75rem 1.5rem',
              backgroundColor: '#ff006e',
              color: 'white',
              textDecoration: 'none',
              borderRadius: '6px',
              fontWeight: '600',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#e60056';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#ff006e';
            }}
          >
            📚 Ver Guía Completa de Extensiones →
          </Link>
        </p>
      </LessonSection>

      <LessonSection title="Resumen" level={1}>
        <ul>
          <li>VS Code es un editor ligero y versátil, no un IDE completo</li>
          <li>Instalación rápida: descargar desde code.visualstudio.com</li>
          <li>Extensión Pack for Java es imprescindible para desarrollo Java</li>
          <li>Terminal integrado con Ctrl+` para comandos Maven, Git, etc.</li>
          <li>Debugging integrado con breakpoints y step execution</li>
          <li>Control de versiones nativo: Git en la sidebar</li>
          <li>Ideal para proyectos pequeños/medianos y múltiples lenguajes</li>
          <li>Gratuito, open source y multiplataforma</li>
          <li>Curva de aprendizaje muy baja</li>
          <li>Para comparar con Eclipse e IntelliJ, ver página de IDEs</li>
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
