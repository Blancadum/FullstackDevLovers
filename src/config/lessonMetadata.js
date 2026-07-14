/**
 * Metadatos SEO para todas las lecciones
 * Estructura: { ruta: { title, description, keywords } }
 */
export const lessonMetadata = {
  // Git
  '/git/basicos': {
    title: 'Git Fundamentos - Control de Versiones',
    description: 'Aprende los conceptos básicos de Git: repositorios, commits, ramas y cómo usar GitHub para colaborar en proyectos.',
    keywords: 'Git, Control de versiones, GitHub, Commits, Ramas, VCS',
    breadcrumb: 'Git > Fundamentos'
  },
  '/git/avanzado': {
    title: 'Git Avanzado - Remoto y Colaboración',
    description: 'Domina Git avanzado: push, pull, merge, resolución de conflictos, pull requests y colaboración en equipo.',
    keywords: 'Git avanzado, Merge, Conflictos, Pull Request, Colaboración, Remoto',
    breadcrumb: 'Git > Avanzado'
  },

  // Java Fundamentos
  '/java/basico/funcionamiento': {
    title: 'Funcionamiento Interno de Java - JVM y Compilación',
    description: 'Entiende cómo funciona Java internamente: compilación a bytecode, JVM, memoria heap y garbage collection.',
    keywords: 'Java JVM, Bytecode, Compilación, Heap, Garbage Collection, Memoria',
    breadcrumb: 'Java > Básico > Funcionamiento'
  },
  '/java/basico/tipos-datos': {
    title: 'Tipos de Datos en Java - Primitivos y Objetos',
    description: 'Domina todos los tipos de datos Java: int, double, boolean, String y cómo funcionan en memoria.',
    keywords: 'Tipos de datos, Variables, Primitivos, String, Casting, Java',
    breadcrumb: 'Java > Básico > Tipos de Datos'
  },
  '/java/basico/control-flujo': {
    title: 'Control de Flujo - if, switch, Bucles',
    description: 'Aprende sentencias de control: if-else, switch, for, while, do-while y operadores lógicos.',
    keywords: 'Control de flujo, if-else, switch, Bucles, for, while, Operadores lógicos',
    breadcrumb: 'Java > Básico > Control de Flujo'
  },
  '/java/basico/strings': {
    title: 'Strings en Java - Manipulación de Texto',
    description: 'Trabajar con strings: concatenación, métodos útiles, inmutabilidad, StringBuilder y expresiones regulares.',
    keywords: 'String, Concatenación, StringBuilder, Regex, Manipulación de texto, Java',
    breadcrumb: 'Java > Básico > Strings'
  },
  '/java/basico/arrays': {
    title: 'Arrays en Java - Arreglos y Matrices',
    description: 'Domina arrays: declaración, inicialización, acceso a elementos, arrays bidimensionales, ArrayList.',
    keywords: 'Arrays, Matrices, ArrayList, Colecciones, Estructuras de datos, Java',
    breadcrumb: 'Java > Básico > Arrays'
  },
  '/java/basico/scanner': {
    title: 'Scanner e Entrada de Datos en Java',
    description: 'Lee entrada del usuario: Scanner, BufferedReader, argumentos de línea de comandos.',
    keywords: 'Scanner, Entrada de datos, BufferedReader, Lectura, Input, Java',
    breadcrumb: 'Java > Básico > Scanner'
  },
  '/java/basico/excepciones': {
    title: 'Excepciones en Java - Manejo de Errores',
    description: 'Manejo de excepciones: try-catch-finally, throwing, custom exceptions y buenas prácticas.',
    keywords: 'Excepciones, Try-catch, Error handling, Throwing, Custom exceptions, Java',
    breadcrumb: 'Java > Básico > Excepciones'
  },
  '/java/basico/operadores': {
    title: 'Operadores en Java',
    description: 'Domina todos los operadores: aritméticos, lógicos, de comparación, asignación y bitwise.',
    keywords: 'Operadores, Aritméticos, Lógicos, Comparación, Bitwise, Java',
    breadcrumb: 'Java > Básico > Operadores'
  },

  // Java POO
  '/java/poo/clases-objetos': {
    title: 'Clases y Objetos en Java - OOP Fundamentals',
    description: 'Aprende OOP: clases, objetos, constructores, métodos, encapsulación y modificadores de acceso.',
    keywords: 'Clases, Objetos, Constructor, Encapsulación, OOP, Programación orientada a objetos',
    breadcrumb: 'Java > POO > Clases y Objetos'
  },
  '/java/poo/clases-abstractas': {
    title: 'Clases Abstractas - Jerarquías y Contratos en Java',
    description: 'Domina clases abstractas: métodos abstractos, herencia, constructores, polimorfismo y casos de uso.',
    keywords: 'Clases abstractas, Métodos abstractos, Herencia, Jerarquía, Contrato, Polimorfismo',
    breadcrumb: 'Java > POO > Clases Abstractas'
  },
  '/java/poo/herencia': {
    title: 'Herencia en Java - Reutilización de Código',
    description: 'Domina herencia: superclases, subclases, override, super, y jerarquía de clases.',
    keywords: 'Herencia, Superclase, Subclase, Override, Super, Reutilización de código',
    breadcrumb: 'Java > POO > Herencia'
  },
  '/java/poo/polimorfismo': {
    title: 'Polimorfismo en Java - Métodos y Tipos',
    description: 'Polimorfismo: sobrecarga, sobreescritura, polimorfismo en tiempo de ejecución y compilación.',
    keywords: 'Polimorfismo, Sobrecarga, Sobreescritura, Métodos, Tipos dinámicos',
    breadcrumb: 'Java > POO > Polimorfismo'
  },
  '/java/poo/interfaces-abstractas': {
    title: 'Interfaces y Clases Abstractas en Java',
    description: 'Interfaces y clases abstractas: contratos, herencia múltiple, abstracción y polimorfismo.',
    keywords: 'Interfaces, Clases abstractas, Contrato, Herencia múltiple, Abstracción',
    breadcrumb: 'Java > POO > Interfaces y Clases Abstractas'
  },

  // Java Avanzado
  '/java/avanzado/colecciones': {
    title: 'Colecciones en Java - List, Set, Map',
    description: 'Domina colecciones: ArrayList, HashMap, HashSet, LinkedList, TreeMap y sus características.',
    keywords: 'Colecciones, List, Set, Map, ArrayList, HashMap, HashSet, Collections',
    breadcrumb: 'Java > Avanzado > Colecciones'
  },
  '/java/avanzado/lambdas': {
    title: 'Expresiones Lambda en Java',
    description: 'Programación funcional con lambdas: sintaxis, interfaces funcionales, ventajas y casos de uso.',
    keywords: 'Lambda, Programación funcional, Interfaz funcional, Expresiones lambda, Java 8+',
    breadcrumb: 'Java > Avanzado > Lambdas'
  },
  '/java/avanzado/streams': {
    title: 'Streams API en Java - Programación Funcional',
    description: 'Streams: filter, map, reduce, collect, operaciones perezosas y cadenas de transformación.',
    keywords: 'Streams, Programación funcional, Filter, Map, Reduce, Collect, Java 8+',
    breadcrumb: 'Java > Avanzado > Streams'
  },
  '/java/avanzado/genericos': {
    title: 'Genéricos en Java - Type Safety',
    description: 'Genéricos: clases genéricas, métodos genéricos, wildcards, PECS y type erasure.',
    keywords: 'Genéricos, Tipo seguro, Wildcards, Parámetros de tipo, Type safety, Java',
    breadcrumb: 'Java > Avanzado > Genéricos'
  },

  // Conexión a BD
  '/java/bd/jdbc': {
    title: 'JDBC - Conectar Java con Bases de Datos',
    description: 'Conexión a BD con JDBC: drivers, Connection, Statement, ResultSet, prepared statements.',
    keywords: 'JDBC, Bases de datos, Connection, SQL, Consultas, Persistencia',
    breadcrumb: 'Java > BD > JDBC'
  },
  '/java/bd/crud': {
    title: 'CRUD y Transacciones en Java',
    description: 'Operaciones CRUD: Create, Read, Update, Delete, transacciones y gestión de conexiones.',
    keywords: 'CRUD, Transacciones, Insert, Select, Update, Delete, Persistencia',
    breadcrumb: 'Java > BD > CRUD'
  },

  // Entornos de Desarrollo
  '/entornos/uml': {
    title: 'UML & Diagramas - Modelado de Sistemas',
    description: 'UML: diagramas de clases, secuencia, casos de uso, generación de código e ingeniería inversa.',
    keywords: 'UML, Diagramas, Modelado, Análisis y diseño, Documentación, Papyrus',
    breadcrumb: 'Entornos > UML'
  },
  '/entornos/conceptos': {
    title: 'Conceptos de Desarrollo - Compilación, JVM y Paradigmas',
    description: 'Conceptos fundamentales: compilación vs interpretación, JVM, paradigmas de programación.',
    keywords: 'JVM, Compilación, Interpretación, Paradigmas, Lenguajes de programación',
    breadcrumb: 'Entornos > Conceptos de Desarrollo'
  },
  '/entornos/ides': {
    title: 'Entornos de Desarrollo (IDEs) - Eclipse y IntelliJ',
    description: 'IDEs profesionales: Eclipse, IntelliJ IDEA, debugging, compilación, plugins, JAR export.',
    keywords: 'IDE, Eclipse, IntelliJ, Debugging, Desarrollo, Herramientas',
    breadcrumb: 'Entornos > IDEs'
  },
  '/entornos/codeium': {
    title: 'Asistentes de IA para Programación - Codeium',
    description: 'Herramientas de IA: Codeium, autocompletado inteligente, generación de código, productividad.',
    keywords: 'IA, Codeium, Autocompletado, Generación de código, Asistente, Productividad',
    breadcrumb: 'Entornos > Codeium'
  },
  '/entornos/pruebas': {
    title: 'Pruebas de Software - Testing y JUnit',
    description: 'Testing: tipos de pruebas, JUnit, TDD, caja blanca/negra, análisis de cobertura.',
    keywords: 'Pruebas, Testing, JUnit, TDD, Cobertura, Caja blanca, Caja negra, QA',
    breadcrumb: 'Entornos > Pruebas'
  },
};

/**
 * Obtener metadatos de una lección
 */
export function getMetadataForLesson(pathname) {
  return lessonMetadata[pathname] || {
    title: 'Java Backend Learning',
    description: 'Ruta completa de aprendizaje en Java Backend',
    keywords: 'Java, Backend, Programación'
  };
}
