import { LessonTemplate, CodeBlock, InfoBox } from '../components';
import { LessonNavigation } from '../components/LessonNavigation';
import { useBreadcrumb } from '../hooks/useBreadcrumb';
import { useLessonNavigation } from '../hooks/useLessonNavigation';

export function LessonDevelopmentConcepts() {
  const breadcrumbs = useBreadcrumb();
  const nav = useLessonNavigation();

  const concepts = [
    'El código fuente se traduce a bytecode (compilación Java) que ejecuta la JVM en cualquier SO',
    'Enlazado (linking): combina módulos de código objeto para producir ejecutable final',
    'Máquina Virtual de Java: principal ventaja es portabilidad, no velocidad (JIT lo mejora)',
    '1ª gen: código máquina binario. 2ª: ensamblador. 3ª: lenguajes de propósito general (C, Java, Python)',
    '4ª gen: lenguajes dominio específico (SQL). 5ª gen: IA/lógica (Prolog)',
    'Paradigma imperativo: secuencia de órdenes que modifican estado. Paradigma estructurado: secuencia, selección, iteración',
    'Paradigma orientado a objetos: encapsulación, herencia, polimorfismo (pilares de Java)',
    'Paradigma funcional: construir programas combinando funciones, evitando estado mutable',
    'Paradigma lógico: deducir conclusiones a partir de hechos y reglas (Prolog)',
    'Modularidad: dividir programa en partes independientes y funcionalmente cerradas',
    'Abstracción: modelar aspectos relevantes ignorando detalles no importantes del contexto',
    'Fases del desarrollo: Análisis → Diseño → Codificación → Pruebas → Documentación → Explotación → Mantenimiento',
  ];

  const exercises = [
    {
      title: 'Identificar generaciones de lenguajes',
      description: 'Clasifica estos lenguajes en su generación: Código máquina, Ensamblador, Java, SQL, Prolog',
      difficulty: 'Fácil',
      hint: '1ª=máquina, 2ª=ensamblador, 3ª=propósito general, 4ª=dominio específico, 5ª=IA',
      solution: `- Código máquina: 1ª generación
- Ensamblador: 2ª generación
- Java: 3ª generación (propósito general, independiente hardware)
- SQL: 4ª generación (dominio específico: bases de datos)
- Prolog: 5ª generación (IA, basado en reglas lógicas)`,
    },
    {
      title: 'Analizar paradigmas: Procedimiento vs POO',
      description: 'Compara un algoritmo imperativo con su versión OO.',
      difficulty: 'Intermedia',
      hint: 'El imperativo es una secuencia de órdenes; POO encapsula datos y comportamiento.',
      solution: `IMPERATIVO:
int[] numeros = {1, 2, 3, 4, 5};
int suma = 0;
for (int n : numeros) suma += n;
int promedio = suma / numeros.length;

POO:
class ListaNumeros {
  private List<Integer> numeros;
  public int suma() { ... }
  public double promedio() { ... }
}

Ventaja POO: reutilizable, mantenible, encapsulado`,
    },
  ];

  const sections = [
    {
      title: 'Concepto de Programa Informático',
      level: 1,
      content: [
        'Un <strong>programa informático</strong> es un conjunto ordenado de instrucciones que indican a un ordenador qué operaciones debe realizar.',
        <CodeBlock
          key="code1"
          code={`Código Fuente   → compilación → Código Objeto   → enlazado (linking) → Código Ejecutable
(legible)                     (intermedio)                                  (bytecode/máquina)`}
        />,
      ],
    },
    {
      title: 'Compilación, Interpretación y Enlazado',
      level: 2,
      content: [
        '<h3>Compilación</h3>',
        '<strong>Traducción del código fuente</strong> a un formato que el procesador puede entender. En Java genera bytecode (.class).',
        '<h3>Interpretación</h3>',
        'El código se traduce y ejecuta <strong>instrucción a instrucción</strong> sin generar previamente un fichero ejecutable completo.',
        '<h3>Máquina Virtual de Java (JVM)</h3>',
        'Programa que simula un procesador y ejecuta bytecode de forma <strong>independiente del SO/hardware</strong>. Ventaja: <strong>portabilidad</strong> (write once, run anywhere).',
      ],
    },
    {
      title: 'Generaciones de Lenguajes de Programación',
      level: 2,
      content: [
        <CodeBlock
          key="code2"
          code={`Generación      Características                  Ejemplos
1ª              Lenguaje máquina (binario)        Código máquina
2ª              Códigos mnemotécnicos             Ensamblador
3ª              Propósito general                 Java, C, Python
4ª              Orientados a dominio concreto    SQL
5ª              Resolución mediante reglas        Prolog`}
        />,
      ],
    },
    {
      title: 'Paradigmas de Programación',
      level: 2,
      content: [
        '<h3>Paradigma Imperativo</h3>',
        'El programa se describe como <strong>una secuencia de órdenes</strong> que modifican el estado.',
        '<h3>Paradigma Estructurado</h3>',
        'Basado en el <strong>teorema del programa estructurado</strong>: solo <strong>secuencia, selección e iteración</strong>, evitando saltos incondicionales (GOTO).',
        '<h3>Paradigma Orientado a Objetos</h3>',
        'El programa se organiza en <strong>objetos que combinan datos (atributos) y comportamiento (métodos)</strong>. Java es principalmente OO.',
        '<h3>Paradigma Funcional</h3>',
        'El programa se construye <strong>aplicando y combinando funciones</strong>, evitando estado mutable.',
        '<h3>Paradigma Lógico</h3>',
        'Se basa en <strong>aplicar reglas lógicas</strong> para deducir conclusiones a partir de hechos.',
      ],
    },
    {
      title: 'Pilares de la POO',
      level: 2,
      content: [
        '1. <strong>ENCAPSULACIÓN:</strong> Ocultar detalles internos; exponer solo lo necesario',
        '2. <strong>ABSTRACCIÓN:</strong> Modelar aspectos relevantes, ignorar detalles no importantes',
        '3. <strong>HERENCIA:</strong> Una subclase reutiliza y extiende la superclase',
        '4. <strong>POLIMORFISMO:</strong> Un método puede comportarse distinto según el objeto',
      ],
    },
    {
      title: 'Fases del Desarrollo de Software',
      level: 2,
      content: [
        '1. <strong>ANÁLISIS:</strong> Estudiar requisitos: ¿qué debe hacer la app?',
        '2. <strong>DISEÑO:</strong> Definir CÓMO se construirá: arquitectura, estructura de datos',
        '3. <strong>CODIFICACIÓN:</strong> Escribir código fuente que implementa el diseño',
        '4. <strong>PRUEBAS:</strong> Verificar funcionamiento correcto',
        '5. <strong>DOCUMENTACIÓN:</strong> Documentación técnica y de usuario',
        '6. <strong>EXPLOTACIÓN:</strong> Despliegue en entorno de producción',
        '7. <strong>MANTENIMIENTO:</strong> Corregir errores, adaptarse a nuevas necesidades',
      ],
    },
  ];

  const summary = 'Los programas se construyen pasando por varias fases de desarrollo. Java compila a bytecode y se ejecuta en la JVM para portabilidad. La POO es el paradigma principal de Java.';

      return (
    <>
      <LessonTemplate
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
