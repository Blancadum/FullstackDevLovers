import { NarrativeLessonTemplate, LessonSection, CodeBlock } from '../components';
import { LessonNavigation } from '../components/LessonNavigation';
import { useBreadcrumb } from '../hooks/useBreadcrumb';
import { useLessonNavigation } from '../hooks/useLessonNavigation';

export function LessonEclipse() {
  const breadcrumbs = useBreadcrumb();
  const nav = useLessonNavigation();

  const conceptCards = [
    {
      icon: '🎨',
      title: 'IDE',
      definition: 'Entorno integrado con editor, compilador, depurador, gestión de proyectos.',
      example: 'Eclipse, IntelliJ IDEA, VS Code'
    },
    {
      icon: '🌐',
      title: 'Eclipse',
      definition: 'IDE libre y modular para Java con arquitectura basada en plugins.',
      example: 'Soporta Papyrus (UML), Spring, Git, Codeium'
    },
    {
      icon: '🔌',
      title: 'Plugin',
      definition: 'Módulo extensible que añade funcionalidades a Eclipse.',
      example: 'Papyrus (UML), WindowBuilder (GUI), Codeium (IA), Spring Tools'
    },
    {
      icon: '🐛',
      title: 'Debugging',
      definition: 'Proceso de buscar y corregir errores usando herramientas de depuración.',
      example: 'Breakpoints, Step Over/Into, inspección de variables'
    }
  ];

  const exercises = [
    {
      title: 'Configurar proyecto Java en Eclipse',
      difficulty: 'Fácil',
      description: 'Crea un nuevo proyecto Java en Eclipse. Escribe una clase con método main. Compila y ejecuta. Añade un breakpoint y ejecuta en modo debug.',
      hint: 'File → New → Java Project. Luego File → New → Class con método main. Run As → Debug.',
      solution: `
1. File → New → Java Project → nombre "MiProyecto" → Finish
2. Click derecho en src → File → New → Class
3. Nombre: "Saludos", marcar "public static void main(String[] args)"
4. Escribir: System.out.println("Hola desde Eclipse!");
5. Run As → Java Application (F11)
6. Doble clic en margen izquierdo de línea para breakpoint
7. Run As → Debug (Alt+F11) para paso a paso
      `
    },
    {
      title: 'Instalar plugin: Papyrus',
      difficulty: 'Intermedia',
      description: 'Instala Papyrus en Eclipse. Verifica la instalación creando un proyecto Papyrus con un diagrama de clases vacío.',
      hint: 'Help → Install New Software → Add → URL del repositorio de Papyrus. Luego File → New → Papyrus Project.',
      solution: `
1. Help → Install New Software
2. Click "Add…"
3. Name: "Papyrus"
   Location: https://download.eclipse.org/modeling/mdt/papyrus/updates/releases/2024-03/
4. Select All → Next → Finish → Reiniciar Eclipse
5. File → New → Other → Papyrus Project
6. UML → Next → nombre "DiagramaPrueba"
7. Crear diagrama de clases
8. ¡Instalación completada!
      `
    }
  ];

  const keyPoints = [
    'Eclipse es modular: arquitectura basada en plugins permite extender funcionalidades',
    'Instalación Eclipse: descargar zip para SO correspondiente, descomprimir, ejecutable listo (no necesita instalador)',
    'Plugins principales en Eclipse: Papyrus (UML), WindowBuilder (GUI Swing), Codeium (IA), Spring Tools, Git',
    'Help → Install New Software permite instalar nuevos plugins. Necesita URL del repositorio y reinicio',
    'Compilación automática: Eclipse compila al guardar. Ver errores en "Problems" tab automáticamente',
    'Ejecución: Run As → Java Application ejecuta clase con main. Run As → Debug inicia depuración',
    'Depuración: F11 inicia debug. Breakpoints con doble clic en margen. Step over (F6), step into (F5), step return (F7)',
    'Variables: durante debug, "Variables" tab muestra valores actuales de todas las variables en scope',
    'Problemas comunes: "Project → Build → Clean" resuelve errores de compilación ocasionales',
    'Exportar JAR ejecutable: File → Export → Java → Runnable JAR file genera .jar independiente'
  ];

  return (
    <>
      <NarrativeLessonTemplate
        title="Eclipse"
        breadcrumbs={breadcrumbs}
        conceptCards={conceptCards}
        exercises={exercises}
        keyPoints={keyPoints}
      >
      <LessonSection title="Introducción a Eclipse" level={1}>
        <h3>¿Por qué Eclipse?</h3>
        <ul>
          <li><strong>Libre:</strong> código abierto, sin costo</li>
          <li><strong>Modular:</strong> arquitectura de plugins permite extender funcionalidades</li>
          <li><strong>Completo:</strong> editor, compilador, depurador, gestión proyectos integrados</li>
          <li><strong>Flexible:</strong> soporta Java, Python, C++, PHP y otros mediante plugins</li>
          <li><strong>Comunidad activa:</strong> muchos plugins disponibles</li>
        </ul>
      </LessonSection>

      <LessonSection title="Configuración y uso de Eclipse con Java" level={1}>
        <h3>Instalación de Eclipse (Windows/Linux/Mac)</h3>
        <ol>
          <li>Descargar desde <code>eclipse.org</code> el paquete para tu SO</li>
          <li>Descomprimir el .zip en una carpeta (ej: <code>C:\eclipse</code> o <code>~/eclipse</code>)</li>
          <li>Ejecutar el archivo ejecutable dentro de la carpeta (<code>eclipse.exe</code> o <code>eclipse</code>)</li>
          <li>Seleccionar workspace (carpeta donde se guardarán proyectos)</li>
          <li>¡Listo! Eclipse está funcional</li>
        </ol>

        <p>
          <strong>Nota:</strong> Eclipse requiere JDK instalado. Si no lo tienes:
        </p>
        <CodeBlock language="bash" code={`
# Descargar e instalar JDK
# Windows: descargar desde oracle.com o usar instalador
# Linux: apt-get install openjdk-17-jdk
# Mac: brew install openjdk@17
        `} />

        <h3>Instalación de Plugins</h3>
        <CodeBlock language="text" code={`
PASOS GENERALES:
1. Help → Install New Software…
2. Click botón "Add…"
3. Name: nombre del plugin (ej: "Papyrus")
   Location: URL del repositorio (ver documentación del plugin)
4. Click "Add"
5. Seleccionar componentes a instalar
6. Next → siguiendo el asistente
7. Aceptar términos de licencia
8. Finish → reiniciar Eclipse automáticamente

EJEMPLO: Instalar Papyrus
Location: https://download.eclipse.org/modeling/mdt/papyrus/updates/releases/2024-03/

EJEMPLO: Instalar Spring Tools
Location: https://download.springsource.com/release/TOOLS/update/e4.24/
        `} />

        <h3>Crear un Proyecto Java</h3>
        <CodeBlock language="text" code={`
1. File → New → Java Project
2. Indicar nombre del proyecto (ej: "MiPrimeraApp")
3. Seleccionar JRE (versión de Java)
4. Finish

El proyecto aparece en "Package Explorer" (panel izquierdo) con carpeta "src"
        `} />

        <h3>Crear una Clase con main</h3>
        <CodeBlock language="text" code={`
1. Clic derecho en carpeta "src" → New → Class
2. Package: nombre del paquete (ej: "com.ejemplo")
3. Name: nombre de la clase (ej: "Principal")
4. Marcar checkbox: "public static void main(String[] args)"
5. Finish

Se crea automáticamente:
    package com.ejemplo;

    public class Principal {
        public static void main(String[] args) {
            // Tu código aquí
        }
    }
        `} />

        <h3>Escribir y Ejecutar Código</h3>
        <CodeBlock language="java" code={`
package com.ejemplo;

public class Principal {
    public static void main(String[] args) {
        System.out.println("¡Hola, Eclipse!");

        int numero = 42;
        System.out.println("El número es: " + numero);
    }
}

// GUARDAR: Ctrl+S (compila automáticamente)
// EJECUTAR: Run → Run (Ctrl+F11)
// Salida en consola (tab "Console" abajo)
        `} />

        <h3>Depuración en Eclipse</h3>
        <p>
          La <strong>depuración</strong> es el proceso de buscar y corregir errores en el código.
          Eclipse proporciona herramientas poderosas para inspeccionar el programa en tiempo real.
        </p>

        <h4>Breakpoints</h4>
        <ol>
          <li>Doble clic en el <strong>margen izquierdo</strong> del editor, junto al número de línea</li>
          <li>Aparece un punto azul (breakpoint)</li>
          <li>Run → Debug (o Alt+F11)</li>
          <li>El programa se pausa en el breakpoint</li>
          <li>Inspecciona variables en tab "Variables"</li>
        </ol>

        <h4>Teclas de Debug</h4>
        <CodeBlock language="text" code={`
F5  - Step Into: entra en un método llamado
F6  - Step Over: ejecuta línea completa, no entra en métodos
F7  - Step Return: sale del método actual
F8  - Resume: continúa ejecución hasta próximo breakpoint
F12 - Volver a editor
        `} />

        <h4>Ejemplo de Depuración</h4>
        <CodeBlock language="java" code={`
public class DepuracionEjemplo {
    public static void main(String[] args) {
        int suma = 0;
        for (int i = 1; i <= 5; i++) {
            suma += i;  // BREAKPOINT AQUÍ (doble clic)
            System.out.println("Iteración " + i);
        }
        System.out.println("Suma total: " + suma);
    }
}

AL EJECUTAR CON DEBUG (F11):
- El programa se pausa en el breakpoint
- "Variables" tab muestra: i=1, suma=0
- F6 avanza línea: suma=1
- F6 avanza línea: print "Iteración 1"
- Etc.
        `} />

        <h3>Compilación Automática</h3>
        <ul>
          <li>Eclipse <strong>compila automáticamente</strong> al guardar (Ctrl+S)</li>
          <li>Los errores de sintaxis aparecen automáticamente en tab "Problems"</li>
          <li>Línea roja en editor = error; línea amarilla = advertencia (warning)</li>
        </ul>

        <h3>Errores Ocasionales</h3>
        <p>
          Si después de editar el código siguen apareciendo errores que no tienen sentido:
        </p>
        <CodeBlock language="text" code={`
Project → Build → Clean

Esto limpia cachés de compilación y recompila todo el proyecto.
Resuelve la mayoría de problemas ocasionales.
        `} />

        <h3>Exportar a JAR Ejecutable</h3>
        <p>
          Para distribuir tu aplicación Java, puedes crear un archivo .jar ejecutable.
        </p>
        <CodeBlock language="text" code={`
PASOS:
1. File → Export…
2. Java → Runnable JAR file → Next
3. Launch configuration: seleccionar clase con main
4. Export destination: ruta y nombre del .jar (ej: "MiApp.jar")
5. Finish

EJECUTAR:
- Windows: doble clic en el .jar
- Linux/Mac: java -jar MiApp.jar

El .jar incluye:
- Bytecode compilado (.class)
- Recursos (imágenes, ficheros de configuración)
- Manifest (especifica clase con main)
        `} />
      </LessonSection>

      <LessonSection title="Resumen" level={1}>
        <ul>
          <li>Eclipse: modular, libre, arquitectura de plugins, ideal para Java empresarial</li>
          <li>Instalación: descargar zip, descomprimir, ejecutar. Requiere JDK</li>
          <li>Compilación automática al guardar. Errores en "Problems" tab</li>
          <li>Ejecución: Run As → Java Application. Debug: F11, breakpoints, Step Over/Into/Return</li>
          <li>Exportar a JAR ejecutable: File → Export → Runnable JAR</li>
          <li>Integración con Git, Javadoc, Tomcat y otros servidores</li>
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
