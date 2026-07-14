import { LessonTemplate, CodeBlock, Table, InfoBox } from '../components';
import { LessonNavigation } from '../components/LessonNavigation';
import { useBreadcrumb } from '../hooks/useBreadcrumb';
import { useLessonNavigation } from '../hooks/useLessonNavigation';

export function LessonInheritance() {
  const breadcrumbs = useBreadcrumb();
  const nav = useLessonNavigation();

  const concepts = [
    {
      icon: '👨‍👩‍👧',
      title: 'Herencia',
      definition: 'Permite que una clase herede atributos y métodos de otra clase.',
      example: 'class Gato extends Animal { }',
    },
    {
      icon: '🔺',
      title: 'Clase Base (Padre)',
      definition: 'La clase que proporciona atributos y métodos a heredar.',
      example: 'class Animal { }',
    },
    {
      icon: '🔻',
      title: 'Clase Derivada (Hija)',
      definition: 'La clase que hereda de la clase base usando extends.',
      example: 'class Perro extends Animal { }',
    },
    {
      icon: '🔑',
      title: 'super',
      definition: 'Referencia a la clase padre. Accede a métodos y constructores del padre.',
      example: 'super.metodo(); super();',
    },
  ];

  const exercises = [
    {
      title: 'Crear jerarquía Vehículo',
      description: 'Crea clase Vehículo (padre) con atributos marca y año. Crea Coche (hijo) que hereda.',
      solution: `public class Vehículo {
    protected String marca;
    protected int año;

    public Vehículo(String marca, int año) {
        this.marca = marca;
        this.año = año;
    }

    public void info() {
        System.out.println(marca + " (" + año + ")");
    }
}

public class Coche extends Vehículo {
    private int puertas;

    public Coche(String marca, int año, int puertas) {
        super(marca, año);
        this.puertas = puertas;
    }

    @Override
    public void info() {
        super.info();
        System.out.println("Puertas: " + puertas);
    }
}

// Uso:
Coche miCoche = new Coche("Toyota", 2023, 4);
miCoche.info();`,
    },
    {
      title: 'Overriding de métodos',
      description: 'Crea método comer() en Animal y sobrescribelo en Carnívoro (solo carne).',
      solution: `public class Animal {
    public void comer() {
        System.out.println("El animal come");
    }
}

public class Carnívoro extends Animal {
    @Override
    public void comer() {
        System.out.println("El carnívoro come carne");
    }
}

// Uso:
Animal a = new Animal();
a.comer(); // El animal come

Carnívoro c = new Carnívoro();
c.comer(); // El carnívoro come carne`,
    },
  ];

  const keyPoints = [
    'Herencia: Una clase hereda de otra con extends',
    'Clase base (padre): Proporciona atributos y métodos',
    'Clase derivada (hijo): Hereda de la clase base',
    'super(): Llama al constructor del padre',
    'super.metodo(): Llama método del padre',
    '@Override: Indica que estás sobrescribiendo un método',
    'protected: Visible para la clase y sus subclases',
    'private: Solo visible en la misma clase',
    'public: Visible en todas partes',
    'Java solo permite herencia simple (extends de UNA clase)',
  ];

  const sections = [
    {
      title: '¿Qué es la Herencia?',
      content: (
        <>
          <p>
            La <strong>herencia</strong> es un mecanismo que permite que una clase herede atributos y métodos
            de otra clase. Evita repetir código y crea una jerarquía clara entre clases.
          </p>
          <InfoBox type="info">
            <strong>Herencia:</strong> Permite que una clase "extienda" otra, reutilizando su código.
          </InfoBox>
        </>
      ),
    },

    {
      title: 'Sintaxis Básica',
      content: (
        <CodeBlock
          code={`// Clase BASE (padre)
public class Animal {
    protected String nombre;
    protected int edad;

    public Animal(String nombre, int edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    public void hacerSonido() {
        System.out.println("Sonido genérico");
    }
}

// Clase DERIVADA (hija)
public class Perro extends Animal {
    private String raza;

    public Perro(String nombre, int edad, String raza) {
        super(nombre, edad);  // Llama al constructor del padre
        this.raza = raza;
    }

    @Override
    public void hacerSonido() {
        System.out.println("¡Guau guau!");
    }

    public void traer() {
        System.out.println(nombre + " trae la pelota");
    }
}

// Usar la herencia
Perro miPerro = new Perro("Rex", 5, "Labrador");
miPerro.hacerSonido();  // ¡Guau guau!
miPerro.traer();        // Rex trae la pelota`}
        />
      ),
    },

    {
      title: 'Modificadores de Acceso en Herencia',
      content: (
        <Table
          headers={['Modificador', 'Misma Clase', 'Subclase', 'Otros']}
          rows={[
            ['public', '✅', '✅', '✅'],
            ['protected', '✅', '✅', '❌'],
            ['default (sin especificar)', '✅', '❌', '❌'],
            ['private', '✅', '❌', '❌'],
          ]}
        />
      ),
    },

    {
      title: 'super() - Llamar Constructor del Padre',
      content: (
        <>
          <CodeBlock
            code={`public class Persona {
    protected String nombre;
    protected int edad;

    public Persona(String nombre, int edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
}

public class Estudiante extends Persona {
    private String matricula;

    public Estudiante(String nombre, int edad, String matricula) {
        super(nombre, edad);  // Llama al constructor de Persona
        this.matricula = matricula;
    }

    public void estudiar() {
        System.out.println(nombre + " estudia");
    }
}

// Uso:
Estudiante e = new Estudiante("Juan", 20, "2024001");
e.estudiar();`}
          />
          <InfoBox type="warning">
            <strong>Importante:</strong> Si el padre tiene constructor con parámetros, DEBES llamar a super() en el hijo.
          </InfoBox>
        </>
      ),
    },

    {
      title: '@Override - Sobrescribir Métodos',
      content: (
        <CodeBlock
          code={`public class Animal {
    public void dormir() {
        System.out.println("El animal duerme en el suelo");
    }
}

public class Gato extends Animal {
    @Override
    public void dormir() {
        System.out.println("El gato duerme en el sofá");
    }
}

public class Pajaro extends Animal {
    @Override
    public void dormir() {
        System.out.println("El pájaro duerme en la rama");
    }
}

// Uso:
Animal a = new Animal();
a.dormir(); // El animal duerme en el suelo

Gato g = new Gato();
g.dormir(); // El gato duerme en el sofá

Pajaro p = new Pajaro();
p.dormir(); // El pájaro duerme en la rama`}
        />
      ),
    },

    {
      title: 'Jerarquía de Herencia (Ejemplo Completo)',
      content: (
        <CodeBlock
          code={`// Clase base
public class Vehículo {
    protected String marca;
    protected String modelo;

    public Vehículo(String marca, String modelo) {
        this.marca = marca;
        this.modelo = modelo;
    }

    public void acelerar() {
        System.out.println(marca + " " + modelo + " acelera");
    }
}

// Clase intermedia
public class Automóvil extends Vehículo {
    protected int puertas;

    public Automóvil(String marca, String modelo, int puertas) {
        super(marca, modelo);
        this.puertas = puertas;
    }
}

// Clase especializada
public class Auto extends Automóvil {
    public Auto(String marca, String modelo) {
        super(marca, modelo, 4);
    }

    @Override
    public void acelerar() {
        System.out.println("Auto " + marca + " acelera rápidamente");
    }
}

public class Camioneta extends Automóvil {
    public Camioneta(String marca, String modelo) {
        super(marca, modelo, 2);
    }

    @Override
    public void acelerar() {
        System.out.println("Camioneta " + marca + " acelera lentamente");
    }
}`}
        />
      ),
    },
  ];

  const summary = `Herencia es fundamental para la reutilización de código:

• Herencia: Una clase hereda de otra con extends
• Padre: Clase que proporciona código reutilizable
• Hijo: Clase que hereda del padre
• super(): Llama al constructor del padre
• super.metodo(): Llama método del padre
• @Override: Indica sobrescritura de método
• protected: Accesible en la clase y subclases
• Jerarquía: Puede haber múltiples niveles (A → B → C)
• Herencia simple: Solo una clase padre directa (extends de UNA clase)
• Ventaja: Reutilización de código, menos repetición
• DRY Principle: Don't Repeat Yourself`;

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