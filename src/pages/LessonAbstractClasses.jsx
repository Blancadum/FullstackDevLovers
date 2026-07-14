import { LessonTemplate, CodeBlock, InfoBox, Table } from '../components';
import { LessonNavigation } from '../components/LessonNavigation';
import { useBreadcrumb } from '../hooks/useBreadcrumb';
import { useLessonNavigation } from '../hooks/useLessonNavigation';

export function LessonAbstractClasses() {
  const breadcrumbs = useBreadcrumb();
  const nav = useLessonNavigation();

  const concepts = [
    'Clase abstracta: No se puede instanciar directamente',
    'abstract class: Plantilla para subclases (contrato)',
    'abstract method: Método sin implementación (debe sobrescribirse)',
    'Método concreto: Puede tener implementación en clase abstracta',
    'Herencia: Una clase abstracta extiende de otra clase',
    'Polimorfismo: Referencia a clase abstracta apunta a objeto real',
    'Constructor: Clases abstractas pueden tener constructores',
    'Static final: Constantes en clases abstractas',
  ];

  const exercises = [
    {
      title: 'Crear jerarquía de Empleado abstracto',
      description: 'Define clase abstracta Empleado con métodos abstractos trabajar() y calcularBonus(). Implementa en Ingeniero y Vendedor.',
      difficulty: 'Intermedio',
      hint: 'Usa abstract class Empleado { } y extends Empleado',
      solution: `public abstract class Empleado {
    protected String nombre;
    protected double salario;

    public Empleado(String nombre, double salario) {
        this.nombre = nombre;
        this.salario = salario;
    }

    // Métodos abstractos
    abstract void trabajar();
    abstract double calcularBonus();

    // Método concreto (común a todos)
    public void mostrarInfo() {
        System.out.println("Empleado: " + nombre);
        System.out.println("Salario: $" + salario);
    }

    public void cobrarSalario() {
        double totalBonus = calcularBonus();
        System.out.println(nombre + " cobra: $" + (salario + totalBonus));
    }
}

public class Ingeniero extends Empleado {
    private int projectosCompletados;

    public Ingeniero(String nombre, double salario, int proyectos) {
        super(nombre, salario);
        this.projectosCompletados = proyectos;
    }

    @Override
    void trabajar() {
        System.out.println(nombre + " desarrolla código en Java");
    }

    @Override
    double calcularBonus() {
        return salario * 0.15 + (projectosCompletados * 500);
    }
}

public class Vendedor extends Empleado {
    private double montoVentas;

    public Vendedor(String nombre, double salario, double ventas) {
        super(nombre, salario);
        this.montoVentas = ventas;
    }

    @Override
    void trabajar() {
        System.out.println(nombre + " vende productos");
    }

    @Override
    double calcularBonus() {
        return montoVentas * 0.05; // 5% de comisión
    }
}

// Uso:
Empleado[] empleados = {
    new Ingeniero("Juan", 5000, 8),
    new Vendedor("María", 3000, 50000)
};

for (Empleado emp : empleados) {
    emp.mostrarInfo();
    emp.trabajar();
    emp.cobrarSalario();
}`
    },
    {
      title: 'Modificar clase abstracta durante ejecución',
      description: 'Crea clase abstracta Figura con método area(). Implementa Círculo y Rectángulo. Compara áreas.',
      difficulty: 'Avanzado',
      hint: 'Usa Math.PI para círculos',
      solution: `public abstract class Figura {
    abstract double area();
    abstract double perimetro();
}

public class Circulo extends Figura {
    private double radio;

    public Circulo(double radio) {
        this.radio = radio;
    }

    @Override
    double area() {
        return Math.PI * radio * radio;
    }

    @Override
    double perimetro() {
        return 2 * Math.PI * radio;
    }
}

public class Rectangulo extends Figura {
    private double largo, ancho;

    public Rectangulo(double largo, double ancho) {
        this.largo = largo;
        this.ancho = ancho;
    }

    @Override
    double area() {
        return largo * ancho;
    }

    @Override
    double perimetro() {
        return 2 * (largo + ancho);
    }
}

// Polimorfismo con referencia a clase abstracta
Figura[] figuras = {
    new Circulo(5),
    new Rectangulo(4, 6)
};

for (Figura fig : figuras) {
    System.out.println("Área: " + fig.area());
    System.out.println("Perímetro: " + fig.perimetro());
}`
    }
  ];

  const keyPoints = [
    'No puedes instanciar una clase abstracta directamente (new Abstracta() = ERROR)',
    'Debes crear una subclase que implemente todos los métodos abstractos',
    'Métodos abstractos NO tienen implementación (;)',
    'Métodos concretos en clases abstractas sí tienen cuerpo',
    'Una clase puede heredar de UNA clase abstracta (single inheritance)',
    'Los métodos abstractos deben ser @Override en las subclases',
    'Las clases abstractas pueden tener constructores, variables estáticas/finales',
    'El polimorfismo permite referencia Abstracta apuntar a objeto concreto',
    'Usualmente se usa abstract para definir tipos base comunes',
    'La clase abstracta es un contrato: subclases deben implementar TODO'
  ];

  const sections = [
    {
      title: '¿Qué es una Clase Abstracta?',
      content: (
        <>
          <p>
            Una clase abstracta es una plantilla que define un contrato para sus subclases.
            No se puede instanciar directamente, pero proporciona:
          </p>
          <ul>
            <li><strong>Métodos abstractos:</strong> Sin implementación, deben implementarse en subclases</li>
            <li><strong>Métodos concretos:</strong> Con implementación, reutilizables en todas las subclases</li>
            <li><strong>Variables y constantes:</strong> Compartidas por todas las subclases</li>
          </ul>
          <InfoBox type="info">
            Una clase abstracta es un <strong>contrato</strong>: especifica qué debe hacer una clase,
            pero deja la implementación específica a sus subclases.
          </InfoBox>
        </>
      )
    },
    {
      title: 'Sintaxis: Clase Abstracta',
      content: (
        <>
          <CodeBlock
            code={`// Sintaxis básica de clase abstracta
public abstract class NombreClase {
    // Variables (concretas)
    protected int variable;

    // Métodos abstractos (sin cuerpo)
    abstract void metodoAbstracto();
    abstract int calcular(int x);

    // Métodos concretos (con cuerpo)
    public void metodoConcreto() {
        System.out.println("Implementado en la clase abstracta");
    }

    // Constructores (permitidos)
    public NombreClase(int variable) {
        this.variable = variable;
    }
}

// Subclase DEBE implementar métodos abstractos
public class Subclase extends NombreClase {
    public Subclase(int variable) {
        super(variable); // Llamar constructor padre
    }

    @Override
    void metodoAbstracto() {
        System.out.println("Implementación de subclase");
    }

    @Override
    int calcular(int x) {
        return x * 2;
    }
}`}
          />
          <InfoBox type="warning">
            Si una subclase NO implementa todos los métodos abstractos,
            también debe ser declarada como <code>abstract</code>.
          </InfoBox>
        </>
      )
    },
    {
      title: 'Métodos Abstractos vs Concretos',
      content: (
        <>
          <Table
            headers={['Aspecto', 'Método Abstracto', 'Método Concreto']}
            rows={[
              ['Sintaxis', 'abstract void metodo();', 'void metodo() { }'],
              ['Implementación', 'SIN cuerpo', 'CON cuerpo'],
              ['Obligatorio en subclase', 'SÍ - debe override', 'NO - puede heredar'],
              ['Uso', 'Define contrato', 'Proporciona funcionalidad común'],
              ['Ejemplo', 'acelerar() en Vehículo', 'mostrarMarca() en Vehículo']
            ]}
          />
          <CodeBlock
            code={`public abstract class Vehículo {
    // ABSTRACTO - cada vehículo acelera diferente
    abstract void acelerar();

    // CONCRETO - todos tienen marca igual
    public void mostrarMarca() {
        System.out.println("Vehículo de la marca X");
    }
}

public class Coche extends Vehículo {
    @Override
    void acelerar() {
        System.out.println("Coche acelera suavemente");
    }
    // Hereda mostrarMarca() sin cambios
}

public class Moto extends Vehículo {
    @Override
    void acelerar() {
        System.out.println("Moto acelera agresivamente");
    }
    // Hereda mostrarMarca() sin cambios
}`}
          />
        </>
      )
    },
    {
      title: 'NO puedes Instanciar Clases Abstractas',
      content: (
        <>
          <CodeBlock
            code={`// INCORRECTO - ERROR de compilación
Vehículo v = new Vehículo();  // ❌ Cannot instantiate abstract class

// CORRECTO - Usar subclase concreta
Vehículo v = new Coche();     // ✅ Coche es subclase concreta
Vehículo m = new Moto();      // ✅ Moto es subclase concreta

// El polimorfismo permite referencia a clase abstracta
Vehículo[] lista = {
    new Coche(),
    new Moto(),
    new Coche()
};

for (Vehículo v : lista) {
    v.acelerar();  // Llama al método de cada subclase
}`}
          />
          <InfoBox type="info">
            El <strong>polimorfismo</strong> permite que una referencia a clase abstracta
            apunte a objetos de sus subclases concretas.
          </InfoBox>
        </>
      )
    },
    {
      title: 'Constructores en Clases Abstractas',
      content: (
        <>
          <p>
            Las clases abstractas SÍ pueden tener constructores. Son obligatorios
            para inicializar variables cuando la subclase se instancia.
          </p>
          <CodeBlock
            code={`public abstract class Animal {
    protected String nombre;
    protected int edad;

    // Constructor - OBLIGATORIO para inicializar
    public Animal(String nombre, int edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    // Método abstracto
    abstract void hacerSonido();
}

public class Perro extends Animal {
    public Perro(String nombre, int edad) {
        super(nombre, edad);  // Llamar constructor del padre
    }

    @Override
    void hacerSonido() {
        System.out.println(nombre + " ladra");
    }
}

// Uso:
Perro p = new Perro("Rex", 5);
p.hacerSonido();  // Rex ladra`}
          />
        </>
      )
    },
    {
      title: 'Ejemplo Completo: Jerarquía de Formas',
      id: 'clases-abstractas',
      content: (
        <>
          <CodeBlock
            code={`public abstract class Forma {
    protected String color;

    public Forma(String color) {
        this.color = color;
    }

    // Métodos abstractos
    abstract double area();
    abstract double perimetro();
    abstract void dibujar();

    // Método concreto
    public void mostrarInfo() {
        System.out.println("Color: " + color);
        System.out.println("Área: " + area());
        System.out.println("Perímetro: " + perimetro());
    }
}

public class Circulo extends Forma {
    private double radio;

    public Circulo(String color, double radio) {
        super(color);
        this.radio = radio;
    }

    @Override
    double area() {
        return Math.PI * radio * radio;
    }

    @Override
    double perimetro() {
        return 2 * Math.PI * radio;
    }

    @Override
    void dibujar() {
        System.out.println("Dibujando círculo " + color);
    }
}

public class Cuadrado extends Forma {
    private double lado;

    public Cuadrado(String color, double lado) {
        super(color);
        this.lado = lado;
    }

    @Override
    double area() {
        return lado * lado;
    }

    @Override
    double perimetro() {
        return lado * 4;
    }

    @Override
    void dibujar() {
        System.out.println("Dibujando cuadrado " + color);
    }
}

// Uso:
Forma[] formas = {
    new Circulo("rojo", 5),
    new Cuadrado("azul", 4)
};

for (Forma f : formas) {
    f.dibujar();
    f.mostrarInfo();
    System.out.println("---");
}`}
          />
        </>
      )
    },
    {
      title: 'Cuándo Usar: Abstract vs Interface',
      content: (
        <>
          <Table
            headers={['Aspecto', 'Abstract Class', 'Interface']}
            rows={[
              ['Propósito', 'Clase base común con estado compartido', 'Contrato puro (qué hacer, no cómo)'],
              ['Métodos', 'Abstractos Y concretos', 'Solo abstractos (hasta Java 7)'],
              ['Variables', 'Pueden tener cualquier tipo (private, protected, public)', 'Solo public static final'],
              ['Herencia', 'Single inheritance (extends)', 'Multiple (implements)'],
              ['Constructores', 'SÍ, pueden tener', 'NO - no tienen estado'],
              ['Modificadores de acceso', 'Pueden ser private, protected, public', 'Siempre public']
            ]}
          />
          <InfoBox type="tip">
            <strong>Regla práctica:</strong>
            <ul>
              <li>Usa <code>abstract class</code> si las subclases comparten ESTADO (variables)</li>
              <li>Usa <code>interface</code> si solo defines un COMPORTAMIENTO (qué hace)</li>
            </ul>
          </InfoBox>
        </>
      )
    },
    {
      title: 'Casos de Uso Comunes',
      content: (
        <>
          <h4>1. Jerarquía de Empleados</h4>
          <CodeBlock
            code={`abstract class Empleado {
    abstract double calcularSalario();
}

class Gerente extends Empleado { }
class Programador extends Empleado { }
class Vendedor extends Empleado { }`}
          />

          <h4>2. Framework de Juegos</h4>
          <CodeBlock
            code={`abstract class GameObject {
    abstract void update();
    abstract void render();
}

class Jugador extends GameObject { }
class Enemigo extends GameObject { }
class Proyectil extends GameObject { }`}
          />

          <h4>3. Procesamiento de Documentos</h4>
          <CodeBlock
            code={`abstract class Documento {
    abstract void procesar();
    abstract void validar();
}

class PDF extends Documento { }
class Word extends Documento { }
class Excel extends Documento { }`}
          />
        </>
      )
    },
    {
      title: '¿Cuándo usar Abstract vs Interface?',
      content: (
        <>
          <InfoBox type="warning" title="⚠️ Confusión Común">
            Muchos confunden <strong>clases abstractas</strong> con <strong>interfaces</strong>.
            Aunque se parecen, son herramientas diferentes con usos distintos.
          </InfoBox>

          <p>
            Para una <strong>comparativa completa y detallada</strong> entre clases abstractas e interfaces,
            incluyendo cuándo usar cada una, ejemplos prácticos y ventajas/desventajas,
            consulta la lección dedicada:
          </p>

          <div style={{
            padding: '1.5rem',
            background: 'linear-gradient(135deg, #fff0f7 0%, #ffe0ec 100%)',
            borderLeft: '4px solid #ff006e',
            borderRadius: '8px',
            marginTop: '1rem'
          }}>
            <h4 style={{ margin: '0 0 0.5rem 0', color: '#ff006e' }}>
              🔗 Ver comparativa en: Interfaces y Clases Abstractas
            </h4>
            <p style={{ margin: 0, color: '#666' }}>
              Encontrarás una tabla comparativa detallada, cuándo usar cada una, y ejemplos
              de patrones reales donde se aplican ambas.
            </p>
            <a
              href="/java/poo/interfaces-abstractas#comparacion"
              style={{
                display: 'inline-block',
                marginTop: '1rem',
                padding: '0.8rem 1.5rem',
                background: '#ff006e',
                color: 'white',
                borderRadius: '6px',
                textDecoration: 'none',
                fontWeight: '600'
              }}
            >
              Ir a Interfaces y Clases Abstractas →
            </a>
          </div>
        </>
      )
    },
  ];

  const summary = `Una clase abstracta es una plantilla que no se puede instanciar directamente.
Define un contrato con métodos abstractos que DEBEN implementarse en subclases.

• Las clases abstractas NO se instancian (new Abstracta() = ERROR)
• Los métodos abstractos NO tienen cuerpo, deben implementarse en subclases
• Los métodos concretos TIENEN cuerpo, se heredan a todas las subclases
• Las clases abstractas pueden tener constructores, variables y constantes
• El polimorfismo permite referencias a clase abstracta apuntar a objetos concretos
• Usa abstract class cuando las subclases comparten ESTADO (variables)
• Una clase solo puede extends de UNA clase abstracta (single inheritance)
• Si una subclase no implementa todos los métodos abstractos, también es abstracta
• ⚠️ ¿Confundido con Interfaces? Ver comparativa en Interfaces y Clases Abstractas`;

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