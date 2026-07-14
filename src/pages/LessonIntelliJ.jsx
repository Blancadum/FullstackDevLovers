import { NarrativeLessonTemplate, LessonSection, CodeBlock } from '../components';
import { LessonNavigation } from '../components/LessonNavigation';
import { useBreadcrumb } from '../hooks/useBreadcrumb';
import { useLessonNavigation } from '../hooks/useLessonNavigation';

export function LessonIntelliJ() {
  const breadcrumbs = useBreadcrumb();
  const nav = useLessonNavigation();

  const keyPoints = [
    'IntelliJ es desarrollado por JetBrains, la empresa detrás de muchos IDEs profesionales',
    'Versión Community gratuita tiene todo lo necesario para desarrollo Java',
    'Versión Ultimate de pago incluye Spring Boot, bases de datos, REST client integrado',
    'Análisis de código inteligente: detecta problemas antes de ejecutar',
    'Refactoring potente y seguro: cambiar nombres, extraer métodos automáticamente',
    'Autocompletado avanzado basado en contexto y machine learning',
    'Depuración visual más intuitiva que Eclipse',
    'Mejor soporte para frameworks modernos: Spring Boot, Maven, Gradle',
    'Herramientas integradas: bases de datos, APIs REST, control de versiones',
    'Interfaz moderna y pulida, mejor que Eclipse en cuanto a UX'
  ];

  return (
    <>
      <NarrativeLessonTemplate
      title="IntelliJ IDEA"
      breadcrumbs={breadcrumbs}
      keyPoints={keyPoints}
    >
      <LessonSection title="Introducción a IntelliJ IDEA" level={1}>
        <p>
          <strong>IntelliJ IDEA</strong> es un IDE profesional desarrollado por <strong>JetBrains</strong>.
          Es muy popular entre desarrolladores profesionales por su inteligencia, productividad y experiencia
          de usuario superior respecto a Eclipse.
        </p>

        <h3>Características principales</h3>
        <ul>
          <li><strong>Análisis de código inteligente:</strong> detecta problemas antes de ejecutar</li>
          <li><strong>Refactoring potente:</strong> cambiar nombres, extraer métodos, etc. de forma segura</li>
          <li><strong>Autocompletado avanzado:</strong> sugiere código basado en contexto</li>
          <li><strong>Depuración visual:</strong> interface más intuitiva que Eclipse</li>
          <li><strong>Versión Community gratuita:</strong> suficiente para desarrollo Java</li>
          <li><strong>Versión Ultimate de pago:</strong> incluye Spring Boot, bases de datos, REST client, etc.</li>
        </ul>
      </LessonSection>

      <LessonSection title="Versiones y Diferencias" level={1}>
        <CodeBlock language="text" code={`
COMMUNITY (Gratuita)
✅ Editor de código avanzado
✅ Compilador y depurador integrados
✅ Control de versiones (Git, SVN, etc.)
✅ Soporte para Maven y Gradle
✅ Debugging visual
❌ No incluye Spring Framework tools
❌ Sin bases de datos integradas
❌ Sin REST client

ULTIMATE (Pago - ~$200/año)
✅ TODO lo de Community
✅ Spring Framework y Spring Boot full
✅ Editor de bases de datos integrado
✅ REST client integrado
✅ Perfilador integrado
✅ Herramientas Kubernetes
✅ Soporte profesional
        `} />
      </LessonSection>

      <LessonSection title="Configuración y uso de IntelliJ con Java" level={1}>
        <h3>Instalación</h3>
        <ol>
          <li>Descargar desde <code>jetbrains.com/idea</code></li>
          <li>Elegir Community (gratuita) o Ultimate (de pago)</li>
          <li>Ejecutar instalador para tu SO (Windows/Linux/Mac)</li>
          <li>Seguir wizard de instalación</li>
          <li>En primer inicio, seleccionar esquema de atajos (Eclipse, Visual Studio, etc.)</li>
        </ol>

        <h3>Crear un nuevo proyecto Java</h3>
        <CodeBlock language="text" code={`
1. File → New → Project
2. Seleccionar "Java" en la lista izquierda
3. Seleccionar JDK (si no aparece, configurar en Project Structure)
4. Next → Nombre del proyecto
5. Finish

El proyecto aparece en "Project Explorer" (panel izquierdo)
Estructura es similar a Eclipse pero mejorada
        `} />

        <h3>Crear una clase con main</h3>
        <CodeBlock language="text" code={`
1. Click derecho en carpeta "src" → New → Java Class
2. Nombre: "Principal"
3. IntelliJ sugiere crear método main automáticamente
4. Aceptar sugerencia y escribir código

Ejemplo:
    public class Principal {
        public static void main(String[] args) {
            System.out.println("Hola desde IntelliJ");
        }
    }
        `} />

        <h3>Autocompletado y análisis</h3>
        <ul>
          <li><strong>Ctrl+Space:</strong> autocompletado básico</li>
          <li><strong>Ctrl+Shift+Space:</strong> autocompletado inteligente (basado en contexto)</li>
          <li><strong>Alt+Enter:</strong> sugerencias rápidas y fixes automáticos</li>
          <li>Línea roja = error; línea amarilla = warning</li>
          <li>IntelliJ detecta problemas más rápidamente que Eclipse</li>
        </ul>

        <h3>Depuración en IntelliJ</h3>
        <CodeBlock language="text" code={`
BREAKPOINTS:
1. Clic en el margen izquierdo junto al número de línea (círculo rojo)
2. Run → Debug 'Principal' (o Shift+F9)
3. El programa se pausa en el breakpoint
4. Ver variables en panel "Debug" (abajo)

TECLAS DE DEBUG:
F8  - Step Over: ejecuta línea completa
F7  - Step Into: entra en método
Shift+F8 - Step Return: sale del método
F9  - Resume: continúa hasta próximo breakpoint
        `} />

        <h3>Refactoring</h3>
        <p>
          IntelliJ es famoso por su refactoring seguro:
        </p>
        <CodeBlock language="text" code={`
REFACTORINGS COMUNES:
- Rename (Shift+F6): cambiar nombre de variable, método, clase
- Extract Method (Ctrl+Alt+M): extraer código en un método nuevo
- Extract Variable (Ctrl+Alt+V): extraer valor en una variable
- Inline (Ctrl+Alt+N): expandir variable inline en su uso
- Change Signature: modificar parámetros de un método
- Move (F6): mover clase a otro paquete

TODO se refactoriza automáticamente en el proyecto.
¡Muy seguro y productivo!
        `} />

        <h3>Integración con Maven</h3>
        <p>
          IntelliJ tiene soporte integrado para Maven y Gradle:
        </p>
        <ul>
          <li>Reconoce automáticamente <code>pom.xml</code></li>
          <li>Panel "Maven" en la derecha para gestionar dependencias</li>
          <li>Autocompletado para dependencias</li>
          <li>Ejecutar Maven goals: Maven → Run goal</li>
        </ul>
      </LessonSection>

      <LessonSection title="Ventajas sobre Eclipse" level={1}>
        <ul>
          <li><strong>Interfaz:</strong> más moderna, pulida y consistente</li>
          <li><strong>Rendimiento:</strong> mejor en proyectos grandes</li>
          <li><strong>Análisis:</strong> detecta problemas más rápido</li>
          <li><strong>Refactoring:</strong> más opciones y más seguro</li>
          <li><strong>Frameworks:</strong> mejor soporte para Spring Boot, Quarkus, etc.</li>
          <li><strong>Comunidad:</strong> fuerte, muchos plugins y actualizaciones frecuentes</li>
          <li><strong>UX:</strong> atajos intuitivos, busca global, navegación mejorada</li>
        </ul>
      </LessonSection>

      <LessonSection title="Comparativa: Eclipse vs IntelliJ" level={1}>
        <CodeBlock language="text" code={`
                     ECLIPSE              INTELLIJ COMMUNITY
Costo               Gratuito             Gratuito
Rendimiento         Bueno                Excelente
Análisis código     Bueno                Excelente
Refactoring         Básico               Avanzado
Spring Boot         Via plugins          Integrado (Ultimate)
UX/Interfaz         Antigua              Moderna
Curva aprendizaje   Media                Media
Comunidad           Grande               Grande
Documentación       Buena                Excelente
Plugins             Muchos               Muchos
        `} />
      </LessonSection>

      <LessonSection title="Resumen" level={1}>
        <ul>
          <li>IntelliJ es un IDE profesional desarrollado por JetBrains</li>
          <li>Versión Community gratuita y suficiente para la mayoría de proyectos Java</li>
          <li>Instalación: descargar desde jetbrains.com/idea, ejecutar instalador</li>
          <li>Análisis inteligente detecta problemas antes de ejecutar</li>
          <li>Refactoring potente y seguro para cambiar código</li>
          <li>Mejor rendimiento y UX que Eclipse en general</li>
          <li>Excelente soporte para frameworks modernos como Spring Boot</li>
          <li>Debugging visual intuitivo</li>
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
