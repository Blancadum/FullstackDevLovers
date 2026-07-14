import { LessonTemplate, CodeBlock, Table, InfoBox } from '../components';
import { LessonNavigation } from '../components/LessonNavigation';
import { useBreadcrumb } from '../hooks/useBreadcrumb';
import { useLessonNavigation } from '../hooks/useLessonNavigation';

export function LessonConceptoEntornoDesarrollo() {
  const breadcrumbs = useBreadcrumb();
  const nav = useLessonNavigation();

  const concepts = [
    {
      icon: '🔧',
      title: 'Entorno de Desarrollo (IDE)',
      definition: 'Conjunto de herramientas integradas para escribir, compilar, depurar y ejecutar código',
      example: 'Eclipse, IntelliJ IDEA, Visual Studio Code'
    },
    {
      icon: '📝',
      title: 'Editor de Código',
      definition: 'Herramienta para escribir y editar código fuente con resaltado de sintaxis',
      example: 'Autocompletado, indentación automática, detección de errores'
    },
    {
      icon: '⚙️',
      title: 'Compilador',
      definition: 'Convierte código fuente en código máquina ejecutable',
      example: 'Java → Bytecode → JVM (máquina virtual Java)'
    },
    {
      icon: '🐛',
      title: 'Debugger (Depurador)',
      definition: 'Herramienta para ejecutar código paso a paso y detectar errores',
      example: 'Breakpoints, inspección de variables, ejecución controlada'
    },
    {
      icon: '🔍',
      title: 'Análisis Estático de Código',
      definition: 'Examina código sin ejecutarlo para detectar errores y problemas',
      example: 'Warnings, errores de sintaxis, código muerto, vulnerabilidades'
    },
    {
      icon: '🗂️',
      title: 'Gestor de Proyectos',
      definition: 'Organiza archivos, librerías y configuración de forma estructurada',
      example: 'Estructura de carpetas, dependencias, propiedades del proyecto'
    }
  ];

  const exercises = [
    {
      title: 'Identificar componentes en tu IDE',
      description: 'Abre tu IDE favorito e identifica dónde están: editor, compilador, depurador',
      solution: `En cualquier IDE encontrarás:
1. Editor de código (área principal donde escribes)
2. Explorador de proyectos (árbol de archivos a la izquierda)
3. Panel de salida (consola para ver resultados)
4. Barra de herramientas (botones para compilar, ejecutar, depurar)
5. Buscador de errores (muestra problemas en tiempo real)`
    },
    {
      title: 'Configurar un proyecto básico',
      description: 'Crea un nuevo proyecto Java y explora su estructura',
      solution: `1. Abre tu IDE
2. Nuevo Proyecto → Java Application
3. Crea una clase Main.java
4. Escribe: System.out.println("Hola IDE!");
5. Compila (Build/Compile)
6. Ejecuta (Run)
7. Observa la salida en la consola`
    }
  ];

  const sections = [
    {
      title: 'Definición: ¿Qué es un Entorno de Desarrollo?',
      content: (
        <>
          <p>
            Un <strong>Entorno de Desarrollo Integrado (IDE)</strong> es una aplicación que proporciona
            herramientas completas para desarrollar software. Combina un editor, compilador, depurador y
            gestor de proyectos en una única interfaz.
          </p>
          <p>
            Sin un IDE, tendrías que usar herramientas separadas:
          </p>
          <CodeBlock
            language="bash"
            code={`# Sin IDE (uso de terminal)
notepad programa.java              # Editor de texto
javac programa.java                # Compilar por línea de comandos
java programa                      # Ejecutar
gdb programa                       # Depurar (complicado)

# Con IDE (todo integrado en la interfaz gráfica)
# Click en botones, todo es visual y automático`}
          />
          <InfoBox type="info">
            Un IDE te ahorra tiempo, reduce errores y mejora la productividad al integrar todas las
            herramientas necesarias en un solo lugar.
          </InfoBox>
        </>
      )
    },

    {
      title: 'Componentes Principales de un IDE',
      content: (
        <>
          <h3>1. Editor de Código</h3>
          <p>
            Área donde escribes el código fuente. Características principales:
          </p>
          <ul>
            <li><strong>Resaltado de sintaxis:</strong> colorea palabras clave, variables, comentarios</li>
            <li><strong>Autocompletado (IntelliSense):</strong> sugiere nombres de clases, métodos, variables</li>
            <li><strong>Indentación automática:</strong> alinea el código correctamente</li>
            <li><strong>Detección en tiempo real:</strong> muestra errores mientras escribes</li>
            <li><strong>Refactorización:</strong> cambia nombres de variables en todo el código</li>
          </ul>

          <h3>2. Compilador</h3>
          <p>
            Traduce tu código a un formato que la máquina puede ejecutar:
          </p>
          <CodeBlock
            language="text"
            code={`Flujo de compilación en Java:

programa.java (código fuente)
    ↓ [Compilador javac]
programa.class (bytecode)
    ↓ [JVM - Java Virtual Machine]
Ejecución en la máquina`}
          />

          <h3>3. Depurador (Debugger)</h3>
          <p>
            Permite ejecutar código paso a paso para encontrar errores:
          </p>
          <CodeBlock
            language="java"
            code={`// En el IDE, puedes:
// 1. Colocar BREAKPOINT en una línea (pausa la ejecución)
// 2. Ejecutar en modo DEBUG (F5 o similar)
// 3. Ver valores de variables en tiempo real
// 4. Avanzar línea a línea (Step Over - F10)
// 5. Entrar en métodos (Step Into - F11)

public class Ejemplo {
    public static void main(String[] args) {
        int x = 5;      // BREAKPOINT aquí
        int y = 10;
        int suma = x + y;
        System.out.println(suma);  // Ves: x=5, y=10, suma=15
    }
}`}
          />

          <h3>4. Gestor de Proyectos</h3>
          <p>
            Organiza la estructura de tu proyecto:
          </p>
          <CodeBlock
            language="text"
            code={`MiProyecto/
├── src/                      (código fuente)
│   ├── Main.java
│   ├── Usuario.java
│   └── BaseDatos.java
├── bin/                      (código compilado)
│   ├── Main.class
│   ├── Usuario.class
│   └── BaseDatos.class
├── lib/                      (librerías externas)
│   ├── mysql-connector.jar
│   └── gson.jar
├── doc/                      (documentación)
└── pom.xml o build.gradle   (configuración)`}
          />

          <h3>5. Consola/Panel de Salida</h3>
          <p>
            Muestra:
          </p>
          <ul>
            <li>Mensajes de compilación (errores y warnings)</li>
            <li>Salida del programa (System.out.println)</li>
            <li>Errores en tiempo de ejecución (exceptions)</li>
            <li>Entrada del usuario (Scanner.nextLine)</li>
          </ul>

          <h3>6. Herramientas Adicionales</h3>
          <p>
            Dependiendo del IDE, también incluyen:
          </p>
          <ul>
            <li><strong>Git integrado:</strong> control de versiones</li>
            <li><strong>Terminal:</strong> ejecutar comandos</li>
            <li><strong>Gestor de paquetes:</strong> Maven, Gradle</li>
            <li><strong>Profiler:</strong> analizar rendimiento</li>
            <li><strong>UML:</strong> crear diagramas</li>
            <li><strong>Testing:</strong> ejecutar tests automáticos</li>
          </ul>
        </>
      )
    },

    {
      title: 'Funciones Principales de un IDE',
      content: (
        <>
          <Table
            headers={['Función', 'Descripción', 'Beneficio']}
            rows={[
              ['Edición de código', 'Escribir y modificar código con facilidades', 'Menos errores, más rápido'],
              ['Compilación', 'Traducir código a formato ejecutable', 'Detectar errores de sintaxis'],
              ['Ejecución', 'Ejecutar el programa compilado', 'Ver resultados inmediatamente'],
              ['Depuración', 'Ejecutar paso a paso, inspeccionar variables', 'Encontrar errores lógicos'],
              ['Análisis estático', 'Revisar código sin ejecutar', 'Detectar problemas potenciales'],
              ['Refactorización', 'Cambiar nombres, estructura sin quebrar nada', 'Código más limpio y mantenible'],
              ['Gestión de proyectos', 'Organizar archivos y dependencias', 'Proyectos escalables'],
              ['Control de versiones', 'Integración con Git/SVN', 'Colaboración y historial'],
              ['Testing', 'Ejecutar tests automáticos', 'Validar funcionamiento'],
              ['Documentación', 'Generar doc. automáticamente', 'API clara para otros dev.'],
            ]}
          />
        </>
      )
    },

    {
      title: 'Ciclo de Desarrollo en un IDE',
      content: (
        <>
          <CodeBlock
            language="text"
            code={`1. EDITAR
   └─ Escribe código en el editor
      IDE resalta sintaxis y muestra errores

2. COMPILAR
   └─ Presiona Build/Compile
      IDE ejecuta javac automáticamente
      Si hay errores: los muestra en rojo

3. EJECUTAR
   └─ Presiona Run
      IDE ejecuta el programa compilado
      Ves la salida en la consola

4. DEPURAR (si hay errores)
   └─ Coloca breakpoint (línea con pausa)
      Ejecuta en DEBUG
      Inspecciona variables, valores
      Paso a paso hasta encontrar el error

5. CORREGIR
   └─ Modifica el código basándose en lo visto
      Vuelve al paso 1

6. ENTREGAR
   └─ Commit en Git (versión final)
      Push a repositorio remoto`}
          />

          <h3>Ejemplo Visual del Flujo:</h3>
          <CodeBlock
            language="java"
            code={`// PASO 1: EDITAR (escribir código)
public class Calculadora {
    public static void main(String[] args) {
        int a = 5;
        int b = 0;
        int resultado = a / b;  // ❌ Error: División por cero
        System.out.println(resultado);
    }
}

// PASO 2: COMPILAR
// ✓ Compila sin errores de sintaxis (compila OK)

// PASO 3: EJECUTAR
// ❌ Error en tiempo de ejecución:
// Exception in thread "main":
// java.lang.ArithmeticException: / by zero

// PASO 4: DEPURAR
// Pones breakpoint en: int resultado = a / b;
// Ejecutas en DEBUG
// Ves: a=5, b=0
// Identificas el problema

// PASO 5: CORREGIR
if (b == 0) {
    System.out.println("Error: no se puede dividir por cero");
} else {
    int resultado = a / b;
    System.out.println(resultado);
}`}
          />
        </>
      )
    },

    {
      title: 'Ventajas de Usar un IDE',
      content: (
        <>
          <InfoBox type="success">
            <h4>Productividad:</h4>
            <ul>
              <li>Autocompletado ahorra tiempo de escritura</li>
              <li>Compilación automática detecta errores rápido</li>
              <li>Ejecución con un click</li>
            </ul>
          </InfoBox>

          <InfoBox type="success">
            <h4>Calidad del Código:</h4>
            <ul>
              <li>Análisis estático previene errores</li>
              <li>Refactorización evita duplicación</li>
              <li>Formato automático mantiene consistencia</li>
            </ul>
          </InfoBox>

          <InfoBox type="success">
            <h4>Depuración:</h4>
            <ul>
              <li>Breakpoints pausan ejecución en líneas específicas</li>
              <li>Inspecciona variables en tiempo real</li>
              <li>Ejecución paso a paso identifica problemas</li>
            </ul>
          </InfoBox>

          <InfoBox type="success">
            <h4>Gestión de Proyectos:</h4>
            <ul>
              <li>Estructura organizada automáticamente</li>
              <li>Gestión de dependencias integrada</li>
              <li>Control de versiones incluido</li>
            </ul>
          </InfoBox>
        </>
      )
    },

    {
      title: 'Comparación: Con IDE vs Sin IDE',
      content: (
        <>
          <Table
            headers={['Tarea', 'Sin IDE (Terminal)', 'Con IDE']}
            rows={[
              ['Escribir código', 'Notepad/Vim (sin colores)', 'Editor con colores y autocompletado'],
              ['Compilar', 'javac Main.java (manual)', 'Click en Build'],
              ['Ejecutar', 'java Main (en terminal)', 'Click en Run'],
              ['Ver errores', 'Leer mensajes confusos', 'Errores resaltados en rojo'],
              ['Depurar', 'Agregar System.out.println', 'Breakpoints y inspección visual'],
              ['Refactorizar', 'Buscar y reemplazar manual', 'Automático en todo el proyecto'],
              ['Tiempo total', '30+ minutos tarea simple', '5 minutos tarea simple'],
            ]}
          />

          <InfoBox type="info">
            La mayoría de desarrolladores profesionales usa un IDE. La única excepción es editar
            configuración rápida o scripts pequeños en terminal.
          </InfoBox>
        </>
      )
    },

    {
      title: 'IDEs Populares para Java',
      content: (
        <>
          <Table
            headers={['IDE', 'Enfoque', 'Complejidad', 'Mejor para']}
            rows={[
              ['Eclipse', 'Java profesional', 'Media', 'Proyectos grandes'],
              ['IntelliJ IDEA', 'Java + lenguajes', 'Media-Alta', 'Productividad máxima'],
              ['Visual Studio Code', 'Multipropósito', 'Baja', 'Principiantes y scripts'],
              ['NetBeans', 'Java y web', 'Media', 'Enseñanza'],
            ]}
          />

          <p style={{marginTop: '1.5rem'}}>
            Aunque todos son IDEs, cada uno tiene filosofía distinta:
          </p>
          <ul>
            <li><strong>Eclipse:</strong> Ligero, flexible, comunidad grande</li>
            <li><strong>IntelliJ:</strong> Muy inteligente, muchas automatizaciones</li>
            <li><strong>VSCode:</strong> Minimalista, rápido, perfectible con extensiones</li>
          </ul>
        </>
      )
    },
  ];

  const keyPoints = [
    'Un IDE integra editor, compilador, depurador y gestor de proyectos',
    'El editor proporciona resaltado de sintaxis y autocompletado',
    'El compilador traduce código Java a bytecode ejecutable',
    'El depurador permite ejecutar paso a paso y encontrar errores',
    'El gestor de proyectos organiza archivos y dependencias',
    'El análisis estático detecta errores sin ejecutar código',
    'La consola muestra errores y salida del programa',
    'Refactorización automática cambia nombres en todo el código',
    'Breakpoints pausan ejecución en líneas específicas',
    'Un IDE incrementa productividad significativamente'
  ];

  const summary = `Un Entorno de Desarrollo es una herramienta esencial:

• IDE integra editor, compilador, depurador y gestor de proyectos
• Editor: resaltado de sintaxis, autocompletado, detección de errores
• Compilador: traduce Java a bytecode ejecutable
• Depurador: breakpoints, inspección de variables, ejecución paso a paso
• Gestor: organiza archivos, dependencias y configuración
• Análisis estático: detecta problemas sin ejecutar
• Refactorización: cambios automáticos en todo el proyecto
• Console: muestra errores y salida del programa
• Ciclo: Editar → Compilar → Ejecutar → Depurar → Corregir
• IDEs populares: Eclipse, IntelliJ IDEA, VSCode, NetBeans`;

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