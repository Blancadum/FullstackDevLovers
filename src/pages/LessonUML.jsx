import { LessonTemplate, CodeBlock, InfoBox } from '../components';
import { LessonNavigation } from '../components/LessonNavigation';
import { useBreadcrumb } from '../hooks/useBreadcrumb';
import { useLessonNavigation } from '../hooks/useLessonNavigation';

export function LessonUML() {
  const breadcrumbs = useBreadcrumb();
  const nav = useLessonNavigation();

  const concepts = [
    'UML es un lenguaje estándar para modelar sistemas orientados a objetos, independiente del lenguaje de programación',
    'Los diagramas estructurales (clases) representan qué existe; los de comportamiento representan cómo interactúan',
    'Papyrus es un plugin de Eclipse que permite crear, editar y generar código Java a partir de diagramas UML',
    'La visibilidad en UML: public (+), private (-), protected (#), package (~)',
    'Herencia usa triángulos, asociación usa líneas, agregación usa rombos vacíos, composición usa rombos rellenos',
    'La multiplicidad (cardinalidad) indica cuántas instancias se relacionan: 1, 0..1, 1..*, 0..* (*)',
    'En diagramas de clases, los getters/setters NO se representan (se sobreentienden)',
    'En Papyrus, los elementos se añaden desde la paleta y se conectan con iconos de relaciones',
    'La navegabilidad (flecha) indica desde dónde se puede acceder a qué objeto',
    'Los diagramas de casos de uso usan include (inclusión) para partes obligatorias y extend (extensión) para opcionales',
    'Los diagramas de secuencia muestran interacciones ordenadas por tiempo entre objetos',
    'La ingeniería inversa importa código Java a un diagrama (pero NO importa asociaciones automáticamente)',
  ];

  const exercises = [
    {
      title: 'Crear un diagrama de clases simple',
      description: 'Crea un diagrama de clases para un sistema de biblioteca con clases: Biblioteca, Libro, Usuario.',
      difficulty: 'Intermedia',
      hint: 'Usa composición para Biblioteca-Libro (la biblioteca contiene libros) y asociación para Biblioteca-Usuario.',
      solution: `Solución:
- Clase Biblioteca: atributos (nombre, dirección), método tamaño()
- Clase Libro: atributos (título, isbn, autor)
- Clase Usuario: atributos (nombre, email)
- Relaciones: Biblioteca tiene muchos Libros (composición), Biblioteca tiene muchos Usuarios (asociación)`,
    },
    {
      title: 'Diagrama de casos de uso: Sistema de cajero automático',
      description: 'Crea un diagrama de casos de uso para un cajero automático.',
      difficulty: 'Intermedia',
      hint: 'Agrupa acciones comunes en un caso de uso "Autenticarse" usando inclusión (include).',
      solution: `Solución:
- Actor: Cliente, Sistema Bancario
- Casos de uso: Retirar Dinero, Consultar Saldo, Cambiar PIN, Autenticarse
- Autenticarse es una inclusión (siempre ocurre antes de otros)
- Retirar Dinero puede extender a Devolver Tarjeta si hay error`,
    },
  ];

  const sections = [
    {
      title: '¿Qué es UML?',
      level: 1,
      content: [
        '<strong>UML (Unified Modeling Language)</strong> es un lenguaje de modelado gráfico estándar para representar, especificar, construir y documentar sistemas orientados a objetos. Permite visualizar la estructura y el comportamiento de un sistema antes de implementarlo.',
        'Los diagramas UML se dividen en dos familias principales:',
        '• <strong>Diagramas estructurales:</strong> representan la estructura estática (qué existe). El más utilizado es el diagrama de clases.',
        '• <strong>Diagramas de comportamiento:</strong> representan cómo interactúan los elementos. Incluyen: casos de uso, secuencia, comunicación, actividades, estados.',
      ],
    },
    {
      title: 'Diagrama de clases',
      level: 2,
      content: [
        '<h3>Notación principal</h3>',
        '• <strong>Clase:</strong> Recuadro con tres compartimentos (nombre, atributos, métodos)',
        '• <strong>Visibilidad:</strong> (+) public, (-) private, (#) protected, (~) package',
        '• <strong>Atributos:</strong> -atributo: tipo (siempre private)',
        '• <strong>Métodos:</strong> +método(parámetros): tipo (siempre public)',
        '<h3>Tipos de relaciones</h3>',
        <CodeBlock
          key="code1"
          code={`1. HERENCIA (subclase → superclase)
   - Triángulo vacío
   - La subclase hereda todos los atributos y métodos

2. ASOCIACIÓN (relación entre clases)
   - Línea simple
   - Puede tener multiplicidad/cardinalidad: 1, 0..1, 1..*, 0..* (*)

3. AGREGACIÓN (todo-parte débil)
   - Rombo vacío en el extremo "todo"
   - La parte puede existir sin el todo

4. COMPOSICIÓN (todo-parte fuerte)
   - Rombo relleno en el extremo "todo"
   - La parte NO puede existir sin el todo`}
        />,
      ],
    },
    {
      title: 'Diagramas de casos de uso',
      level: 2,
      content: [
        'Representan las interacciones entre actores (usuarios/sistemas externos) y casos de uso (funcionalidades).',
        '• <strong>Actor:</strong> Usuario o sistema externo que interactúa con el sistema',
        '• <strong>Caso de uso:</strong> Funcionalidad o servicio que el sistema proporciona',
        '• <strong>Include (inclusión):</strong> Una parte obligatoria que siempre se ejecuta',
        '• <strong>Extend (extensión):</strong> Una parte opcional que puede o no ejecutarse',
      ],
    },
    {
      title: 'Generar código Java a partir de diagramas',
      level: 2,
      content: [
        '1. Abrir diagrama de clases',
        '2. Clic derecho en diagrama vacío → Designer → Generate code',
        '3. Seleccionar generador Java → Ok',
        '4. Crear proyecto Java para el código generado',
        '<h3>Importante: Consideraciones del código generado</h3>',
        '• El nombre del paquete puede ser incorrecto (toma nombre del modelo)',
        '• Los atributos pueden generarse como públicos (decisión consciente de diseño)',
        '• Las asociaciones se generan como atributos con tipo List o referencia simple',
        '• Las asociaciones NO se importan en la ingeniería inversa (limitación de Papyrus)',
      ],
    },
    {
      title: 'Alternativas a Papyrus para Visual Studio Code',
      level: 2,
      content: [
        'Si trabajas con Visual Studio Code en lugar de Eclipse, tienes varias opciones para crear y editar diagramas UML:',
        '<h3>1. PlantUML (Recomendado)</h3>',
        '• <strong>Extensión:</strong> PlantUML (de jebbs)',
        '• <strong>Enfoque:</strong> Diagramas a partir de texto/código (muy similar a programar)',
        '• <strong>Ventajas:</strong> Versión controlada fácilmente, rápida de escribir, genera PNG/SVG',
        '• <strong>Ideal para:</strong> Desarrolladores que prefieren trabajar con código',
        '<h3>2. Draw.io Integration</h3>',
        '• <strong>Extensión:</strong> Draw.io Integration (oficial)',
        '• <strong>Enfoque:</strong> Editor visual integrado en VSCode (más similar a Papyrus)',
        '• <strong>Ventajas:</strong> Interfaz gráfica intuitiva, drag-and-drop, soporta muchos tipos de diagramas',
        '• <strong>Ideal para:</strong> Quien quiere una experiencia visual similar a Papyrus',
        '<h3>3. Mermaid</h3>',
        '• <strong>Extensión:</strong> Markdown Preview Mermaid Support',
        '• <strong>Enfoque:</strong> Diagramas integrados en archivos Markdown',
        '• <strong>Ventajas:</strong> Muy ligero, se renderiza directamente en archivos .md, perfecto para documentación',
        '• <strong>Ideal para:</strong> Documentación integrada con código',
        '<h3>Recomendación</h3>',
        '• Si necesitas reemplazar Papyrus → Usa <strong>Draw.io</strong> (más visual)',
        '• Si prefieres código y versionado → Usa <strong>PlantUML</strong> (más ágil)',
        '• Para documentación rápida → Usa <strong>Mermaid</strong> (más simple)',
      ],
    },
  ];

  const summary = 'UML es el lenguaje estándar para modelar sistemas. Papyrus permite crear diagramas y generar código Java automáticamente.';

  return (
    <>
      <LessonTemplate
        title="UML y Diagramas"
        breadcrumbs={breadcrumbs}
        concepts={concepts}
        exercises={exercises}
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
