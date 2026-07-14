import { LessonTemplate, CodeBlock, Table, InfoBox } from '../components';
import { LessonNavigation } from '../components/LessonNavigation';
import { useBreadcrumb } from '../hooks/useBreadcrumb';
import { useLessonNavigation } from '../hooks/useLessonNavigation';

export function LessonClasses() {
  const breadcrumbs = useBreadcrumb();
  const nav = useLessonNavigation();

  const concepts = [
    {
      icon: '📦',
      title: 'Clase',
      definition: 'Plantilla para crear objetos. Define propiedades (atributos) y acciones (métodos).',
      example: 'class Persona { String nombre; void saludar() {} }',
    },
    {
      icon: '🎯',
      title: 'Objeto',
      definition: 'Instancia de una clase. Es el resultado real de crear un objeto con new.',
      example: 'Persona juan = new Persona();',
    },
    {
      icon: '🏷️',
      title: 'Atributo',
      definition: 'Variable que pertenece a la clase. Almacena datos del objeto.',
      example: 'String nombre; int edad;',
    },
    {
      icon: '⚙️',
      title: 'Método',
      definition: 'Función que pertenece a la clase. Define el comportamiento del objeto.',
      example: 'void saludar() { System.out.println("Hola"); }',
    },
  ];

  const exercises = [
    {
      title: 'Crear clase Persona',
      description: 'Crea una clase Persona con atributos nombre y edad, y un método saludar().',
      solution: `public class Persona {
    String nombre;
    int edad;

    void saludar() {
        System.out.println("Hola, me llamo " + nombre);
        System.out.println("Tengo " + edad + " años");
    }
}

// Uso:
Persona juan = new Persona();
juan.nombre = "Juan";
juan.edad = 25;
juan.saludar();`,
    },
    {
      title: 'Crear constructor',
      description: 'Agrega un constructor a la clase Persona que inicialice nombre y edad.',
      solution: `public class Persona {
    String nombre;
    int edad;

    // Constructor
    public Persona(String nombre, int edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    void saludar() {
        System.out.println("Hola, me llamo " + nombre);
    }
}

// Uso (mucho más limpio):
Persona maria = new Persona("María", 28);
maria.saludar();`,
    },
  ];

  const keyPoints = [
    'Clase: Plantilla reutilizable. Se declara una sola vez.',
    'Objeto: Instancia de la clase. Se crea con new.',
    'Atributos: Datos. Pueden ser privados o públicos.',
    'Métodos: Acciones. Pueden retornar un valor o void.',
    'Constructor: Método especial que se llama al crear un objeto con new.',
    'this: Referencia al objeto actual dentro de la clase.',
    'Encapsulación: Mantener los datos privados, acceder mediante métodos públicos.',
    'Getters/Setters: Métodos para obtener y modificar atributos privados.',
  ];

  const sections = [
    {
      title: '¿Qué es la Programación Orientada a Objetos (POO)?',
      content: (
        <p>
          La POO es un paradigma de programación que organiza el código alrededor de "objetos"
          que contienen datos (atributos) y comportamiento (métodos). Es la base de Java.
        </p>
      ),
    },

    {
      title: 'Tipos de Clases',
      content: (
        <>
          <p>
            Java soporta diferentes tipos de clases para distintos propósitos:
          </p>
          <ul>
            <li><strong>Clases normales (concretas):</strong> Se pueden instanciar (crear objetos)</li>
            <li><strong>Clases abstractas:</strong> No se pueden instanciar, sirven como base para otras clases</li>
            <li><strong>Clases final:</strong> No pueden ser extendidas (heredadas)</li>
            <li><strong>Interfaces:</strong> Definen contratos puros (qué debe hacer, sin implementación)</li>
          </ul>

          <InfoBox type="warning" title="⚠️ ¿Clases Abstractas o Interfaces?">
            Las clases abstractas e interfaces son herramientas diferentes. Aunque ambas no se pueden instanciar,
            sirven propósitos completamente distintos y pueden causar confusión.
          </InfoBox>

          <p style={{ marginTop: '1.5rem' }}>
            Para entender cuándo usar cada una y ver una <strong>comparativa completa</strong> entre:
          </p>
          <ul>
            <li>Clases abstractas vs Interfaces</li>
            <li>Métodos abstractos vs Métodos default</li>
            <li>Herencia vs Implementación</li>
          </ul>

          <div style={{
            padding: '1.5rem',
            background: 'linear-gradient(135deg, #fff0f7 0%, #ffe0ec 100%)',
            borderLeft: '4px solid #ff006e',
            borderRadius: '8px',
            marginTop: '1.5rem'
          }}>
            <h4 style={{ margin: '0 0 0.8rem 0', color: '#ff006e' }}>
              🔗 Lección: Interfaces y Clases Abstractas
            </h4>
            <p style={{ margin: '0 0 1rem 0', color: '#666', fontSize: '0.95rem' }}>
              Descubre cómo y cuándo usar cada una con tabla comparativa, ejemplos prácticos y patrones reales.
            </p>
            <a
              href="/java/poo/interfaces-abstractas#comparacion"
              style={{
                display: 'inline-block',
                padding: '0.8rem 1.5rem',
                background: '#ff006e',
                color: 'white',
                borderRadius: '6px',
                textDecoration: 'none',
                fontWeight: '600',
                fontSize: '0.95rem'
              }}
            >
              Ver Comparativa Completa →
            </a>
          </div>
        </>
      ),
    },

    {
      title: 'Tu Primera Clase',
      content: (
        <CodeBlock
          code={`public class Coche {
    // Atributos (datos del objeto)
    String marca;
    String modelo;
    int año;

    // Método (comportamiento del objeto)
    void acelerar() {
        System.out.println("¡Vruuuum! El " + marca + " acelera");
    }

    void frenar() {
        System.out.println("El " + marca + " frena");
    }
}

// Crear y usar un objeto
Coche miCoche = new Coche();
miCoche.marca = "Toyota";
miCoche.modelo = "Corolla";
miCoche.año = 2023;

miCoche.acelerar(); // ¡Vruuuum! El Toyota acelera
miCoche.frenar();   // El Toyota frena`}
        />
      ),
    },

    {
      title: 'Constructores',
      content: (
        <>
          <p>
            Un constructor es un método especial que se ejecuta automáticamente cuando creas un objeto con new.
            Se usa para inicializar los atributos.
          </p>
          <CodeBlock
            code={`public class Persona {
    String nombre;
    int edad;

    // Constructor sin parámetros
    public Persona() {
        nombre = "Desconocido";
        edad = 0;
    }

    // Constructor con parámetros (sobrecarga)
    public Persona(String nombre, int edad) {
        this.nombre = nombre;  // this se refiere a este objeto
        this.edad = edad;
    }
}

// Crear personas
Persona p1 = new Persona();              // Usa constructor sin parámetros
Persona p2 = new Persona("Juan", 25);    // Usa constructor con parámetros`}
          />
          <InfoBox type="info">
            <strong>this:</strong> Referencia al objeto actual. Se usa para diferenciar atributos de la clase
            de parámetros del método.
          </InfoBox>
        </>
      ),
    },

    {
      title: 'Getters y Setters (Encapsulación)',
      content: (
        <>
          <p>
            Es una buena práctica mantener los atributos privados y proporcionar métodos públicos para acceder a ellos.
          </p>
          <CodeBlock
            code={`public class Persona {
    private String nombre;
    private int edad;

    // Constructor
    public Persona(String nombre, int edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    // Getter (obtener valor)
    public String getNombre() {
        return nombre;
    }

    public int getEdad() {
        return edad;
    }

    // Setter (establecer valor con validación)
    public void setNombre(String nombre) {
        if (nombre != null && !nombre.isEmpty()) {
            this.nombre = nombre;
        }
    }

    public void setEdad(int edad) {
        if (edad > 0 && edad < 120) {
            this.edad = edad;
        }
    }
}

// Uso
Persona juan = new Persona("Juan", 25);
System.out.println(juan.getNombre()); // Juan
juan.setEdad(26);`}
          />
        </>
      ),
    },

    {
      title: 'Métodos con Retorno',
      content: (
        <CodeBlock
          code={`public class Calculadora {
    // Método que retorna un valor
    public int sumar(int a, int b) {
        int resultado = a + b;
        return resultado;  // Retorna el resultado
    }

    // Método sin retorno (void)
    public void mostrarMensaje() {
        System.out.println("Hola");
        // Sin return, o return sin valor
    }

    // Método que retorna booleano
    public boolean esPositivo(int numero) {
        return numero > 0;
    }
}

// Uso
Calculadora calc = new Calculadora();
int resultado = calc.sumar(5, 3); // resultado = 8
calc.mostrarMensaje();
boolean esPos = calc.esPositivo(-5); // false`}
        />
      ),
    },

    {
      title: 'Parámetros y Argumentos',
      content: (
        <CodeBlock
          code={`public class Saludador {
    // Parámetros: nombre y edad
    public void saludar(String nombre, int edad) {
        System.out.println("Hola " + nombre + ", tienes " + edad + " años");
    }

    // Parámetros variables (varargs)
    public int sumarTodos(int... numeros) {
        int suma = 0;
        for (int n : numeros) {
            suma += n;
        }
        return suma;
    }
}

// Uso
Saludador s = new Saludador();
s.saludar("Juan", 25);
s.saludar("María", 30);

int total = s.sumarTodos(1, 2, 3, 4, 5); // 15
int total2 = s.sumarTodos(10, 20); // 30`}
        />
      ),
    },
  ];

  const summary = `Clases y Objetos son la base de la POO en Java:

• Clase: Plantilla para objetos (se define una vez)
• Objeto: Instancia de la clase (se crea con new)
• Atributos: Datos de la clase (variables)
• Métodos: Funciones de la clase (acciones)
• Constructor: Inicializa el objeto automáticamente
• Encapsulación: Atributos privados, métodos públicos
• Getters/Setters: Acceden a atributos privados
• this: Referencia al objeto actual
• Parámetros: Los datos que reciben los métodos
• Sobrecarga: Múltiples constructores o métodos con el mismo nombre`;

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