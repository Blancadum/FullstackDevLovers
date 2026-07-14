/**
 * Glosario de Términos Java
 * Con links nofollow para interlinking y retención de audiencia
 */

export const javaGlossary = [
  // A
  { word: 'Abstract', definition: 'Modificador para crear clases base con métodos sin implementación que las subclases deben completar. ⚠️ Nota: Se confunde frecuentemente con Interface. Ver comparativa completa en la lección de Interfaces y Clases Abstractas.', link: '/java/poo/interfaces-abstractas#comparacion' },
  { word: 'API', definition: 'Application Programming Interface - Interfaz para comunicarse con otras aplicaciones', link: null },
  { word: 'Array', definition: 'Estructura de datos que almacena múltiples valores del mismo tipo', link: '/java/basico/arrays' },
  { word: 'ArrayList', definition: 'Lista dinámica que crece o encoge automáticamente según necesidad', link: '/java/avanzado/colecciones' },
  { word: 'Atributo', definition: 'Variable que pertenece a una clase u objeto', link: '/java/poo/clases-objetos' },

  // B
  { word: 'Bytecode', definition: 'Código compilado de Java independiente de plataforma, ejecutado por la JVM', link: '/java/avanzado/jvm' },
  { word: 'boolean', definition: 'Tipo primitivo que solo puede ser true o false', link: '/java/basico/tipos-datos' },
  { word: 'Break', definition: 'Palabra clave que termina un bucle o switch', link: '/java/basico/control-flujo' },
  { word: 'Bucle', definition: 'Estructura de control que repite un bloque de código', link: '/java/basico/control-flujo' },

  // C
  { word: 'Clase', definition: 'Plantilla para crear objetos con propiedades y métodos', link: '/java/poo/clases-objetos' },
  { word: 'Casting', definition: 'Conversión de un tipo de dato a otro', link: '/java/basico/tipos-datos' },
  { word: 'Constructor', definition: 'Método especial que inicializa objetos cuando se crean', link: '/java/poo/clases-objetos' },
  { word: 'Continue', definition: 'Palabra clave que salta a la siguiente iteración del bucle', link: '/java/basico/control-flujo' },
  { word: 'Collections', definition: 'Framework de clases para manejar colecciones de objetos', link: '/java/avanzado/colecciones' },

  // D
  { word: 'Double', definition: 'Tipo primitivo para números decimales de precisión doble (64 bits)', link: '/java/basico/tipos-datos' },
  { word: 'Dynamic Binding', definition: 'Resolución en tiempo de ejecución del método correcto basado en el tipo real', link: '/java/poo/polimorfismo' },

  // E
  { word: 'Encapsulamiento', definition: 'Principio de ocultar detalles internos y exponer solo lo necesario', link: '/java/poo/clases-objetos' },
  { word: 'Enum', definition: 'Tipo especial para definir conjunto de constantes', link: '/java/basico/tipos-datos' },
  { word: 'Exception', definition: 'Evento que interrumpe el flujo normal del programa', link: '/java/basico/excepciones' },

  // F
  { word: 'Float', definition: 'Tipo primitivo para números decimales de precisión simple (32 bits)', link: '/java/basico/tipos-datos' },
  { word: 'Final', definition: 'Modificador que hace una clase, método o variable inmutable', link: '/java/poo/clases-objetos' },
  { word: 'Finally', definition: 'Bloque que siempre se ejecuta después de try-catch', link: '/java/basico/excepciones' },
  { word: 'For', definition: 'Bucle que itera un número específico de veces', link: '/java/basico/control-flujo' },
  { word: 'Functional Interface', definition: 'Interfaz con un único método abstracto, usada con lambdas', link: '/java/avanzado/lambdas' },

  // G
  { word: 'Garbage Collection', definition: 'Proceso automático que libera memoria de objetos no usados', link: '/java/avanzado/jvm' },
  { word: 'Generics', definition: 'Mecanismo para crear clases y métodos reutilizables con tipos parametrizados', link: '/java/avanzado/genericos' },
  { word: 'Get', definition: 'Método que retorna el valor de un atributo privado', link: '/java/poo/clases-objetos' },

  // H
  { word: 'HashMap', definition: 'Estructura de datos que almacena pares clave-valor sin orden específico', link: '/java/avanzado/colecciones' },
  { word: 'HashSet', definition: 'Colección que almacena valores únicos sin orden específico', link: '/java/avanzado/colecciones' },
  { word: 'Heap', definition: 'Área de memoria donde se almacenan los objetos en Java', link: '/java/avanzado/jvm' },
  { word: 'Herencia', definition: 'Mecanismo que permite a una clase heredar propiedades de otra', link: '/java/poo/herencia' },

  // I
  { word: 'If', definition: 'Estructura condicional que ejecuta código si la condición es verdadera', link: '/java/basico/control-flujo' },
  { word: 'Immutable', definition: 'Objeto cuyo estado no puede cambiar después de ser creado', link: '/java/basico/strings' },
  { word: 'Interface', definition: 'Contrato que especifica qué métodos debe implementar una clase', link: '/java/poo/interfaces-abstractas' },
  { word: 'Integer', definition: 'Tipo primitivo para números enteros (32 bits)', link: '/java/basico/tipos-datos' },
  { word: 'Interlinking', definition: 'Práctica de enlazar contenido relacionado para mejorar navegación', link: null },

  // J
  { word: 'JIT', definition: 'Just-In-Time: compilación a código nativo durante la ejecución', link: '/java/avanzado/jvm' },
  { word: 'JDBC', definition: 'Java Database Connectivity - API para conectar con bases de datos', link: '/java/bd/jdbc' },
  { word: 'JVM', definition: 'Java Virtual Machine que ejecuta bytecode en cualquier plataforma', link: '/java/avanzado/jvm' },

  // K
  { word: 'KeySet', definition: 'Conjunto de claves en un Map', link: '/java/avanzado/colecciones' },

  // L
  { word: 'Lambda', definition: 'Función anónima que proporciona una forma concisa de implementar interfaces funcionales', link: '/java/avanzado/lambdas' },
  { word: 'List', definition: 'Colección ordenada que puede contener duplicados', link: '/java/avanzado/colecciones' },
  { word: 'Long', definition: 'Tipo primitivo para números enteros grandes (64 bits)', link: '/java/basico/tipos-datos' },

  // M
  { word: 'Map', definition: 'Estructura que almacena pares clave-valor únicos', link: '/java/avanzado/colecciones' },
  { word: 'Method', definition: 'Función que pertenece a una clase y realiza una acción específica', link: '/java/poo/clases-objetos' },
  { word: 'Modifier', definition: 'Palabra clave que especifica el nivel de acceso o características de una clase/método', link: null },

  // N
  { word: 'Null', definition: 'Valor especial que indica la ausencia de referencia a un objeto', link: '/java/basico/tipos-datos' },
  { word: 'New', definition: 'Operador que crea una nueva instancia de una clase', link: '/java/poo/clases-objetos' },

  // O
  { word: 'Object', definition: 'Clase base de todas las clases en Java', link: '/java/poo/clases-objetos' },
  { word: 'Operador', definition: 'Símbolo que realiza una operación sobre uno o más operandos', link: '/java/basico/operadores' },
  { word: 'Overloading', definition: 'Capacidad de tener múltiples métodos con el mismo nombre pero diferentes parámetros', link: '/java/poo/polimorfismo' },
  { word: 'Overriding', definition: 'Redefinición de un método heredado en la clase hija', link: '/java/poo/herencia' },

  // P
  { word: 'Package', definition: 'Carpeta lógica que agrupa clases relacionadas', link: '/java/basico/tipos-datos' },
  { word: 'Polimorfismo', definition: 'Capacidad de un objeto de tomar múltiples formas', link: '/java/poo/polimorfismo' },
  { word: 'Private', definition: 'Modificador que restringe acceso a miembros solo dentro de la clase', link: '/java/poo/clases-objetos' },
  { word: 'Protected', definition: 'Modificador que permite acceso a miembros en la misma clase, paquete e hijos', link: '/java/poo/clases-objetos' },
  { word: 'Public', definition: 'Modificador que permite acceso a miembros desde cualquier lugar', link: '/java/poo/clases-objetos' },

  // R
  { word: 'Recursión', definition: 'Técnica donde una función se llama a sí misma', link: '/java/basico/control-flujo' },
  { word: 'Reference', definition: 'Variable que almacena la dirección de un objeto en memoria', link: '/java/basico/tipos-datos' },

  // S
  { word: 'Set', definition: 'Colección que no permite elementos duplicados', link: '/java/avanzado/colecciones' },
  { word: 'Set Method', definition: 'Método que asigna un nuevo valor a un atributo privado', link: '/java/poo/clases-objetos' },
  { word: 'Stack', definition: 'Área de memoria donde se almacenan variables locales y referencias', link: '/java/avanzado/jvm' },
  { word: 'String', definition: 'Tipo de dato para almacenar texto inmutable', link: '/java/basico/strings' },
  { word: 'Stream', definition: 'API funcional para procesar colecciones de forma declarativa', link: '/java/avanzado/streams' },
  { word: 'Static', definition: 'Modificador que hace un miembro pertenencer a la clase, no a instancias', link: '/java/poo/clases-objetos' },
  { word: 'Super', definition: 'Palabra clave para acceder a miembros de la clase padre', link: '/java/poo/herencia' },
  { word: 'Switch', definition: 'Estructura condicional que selecciona entre múltiples opciones', link: '/java/basico/control-flujo' },

  // T
  { word: 'This', definition: 'Palabra clave que referencia el objeto actual', link: '/java/poo/clases-objetos' },
  { word: 'Thread', definition: 'Flujo de ejecución independiente dentro de un programa', link: null },
  { word: 'Throw', definition: 'Palabra clave que lanza una excepción manualmente', link: '/java/basico/excepciones' },
  { word: 'Throws', definition: 'Declaración que indica qué excepciones puede lanzar un método', link: '/java/basico/excepciones' },
  { word: 'TreeMap', definition: 'Mapa que mantiene sus claves en orden ordenado', link: '/java/avanzado/colecciones' },
  { word: 'Try', definition: 'Bloque que contiene código que puede lanzar excepciones', link: '/java/basico/excepciones' },
  { word: 'Type Casting', definition: 'Conversión de un tipo de dato a otro tipo', link: '/java/basico/tipos-datos' },

  // V
  { word: 'Variable', definition: 'Contenedor que almacena un valor de un tipo de dato específico', link: '/java/basico/tipos-datos' },
  { word: 'Void', definition: 'Tipo de retorno que indica que un método no retorna nada', link: '/java/basico/control-flujo' },

  // W
  { word: 'While', definition: 'Bucle que se repite mientras la condición sea verdadera', link: '/java/basico/control-flujo' },
  { word: 'Wrapper', definition: 'Clase que envuelve un tipo primitivo para utilizarlo como objeto', link: '/java/basico/tipos-datos' },

  // Y
  { word: 'Yield', definition: 'Palabra clave en expresiones switch para retornar un valor', link: '/java/basico/control-flujo' },
];
