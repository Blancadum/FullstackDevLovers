import { LessonTemplate, CodeBlock, Table, InfoBox } from '../components';
import { LessonNavigation } from '../components/LessonNavigation';
import { useBreadcrumb } from '../hooks/useBreadcrumb';
import { useLessonNavigation } from '../hooks/useLessonNavigation';

export function LessonInterfacesAbstract() {
  const breadcrumbs = useBreadcrumb();
  const nav = useLessonNavigation();

  const concepts = [
    'Interfaz: Define un contrato (qué debe hacer, no cómo)',
    'abstract class: Clase que no se puede instanciar',
    'abstract method: Método sin implementación',
    'implements: Una clase implementa UNA o VARIAS interfaces',
    'extends: Una clase abstracta extiende de OTRA (single inheritance)',
    'Métodos abstractos: Deben implementarse en subclases (@Override)',
    'Métodos concretos en abstract: Pueden tener implementación',
    'Todo en interfaz es public por defecto',
    'Java 8+: Interfaces pueden tener métodos default',
    'Polimorfismo: Referencia Interfaz apunta a objeto que la implementa',
  ];

  const exercises = [
    {
      title: 'Crear interfaz Empleado',
      description: 'Define interfaz Empleado con métodos trabajar() y cobrarSalario(). Implementa en Ingeniero y Profesor.',
      difficulty: 'Avanzado',
      hint: 'Usa interface Empleado { } e implements Empleado',
      solution: `public interface Empleado {
    void trabajar();
    void cobrarSalario();
}

public class Ingeniero implements Empleado {
    private String nombre;

    public Ingeniero(String nombre) {
        this.nombre = nombre;
    }

    @Override
    public void trabajar() {
        System.out.println(nombre + " programa código");
    }

    @Override
    public void cobrarSalario() {
        System.out.println(nombre + " cobra $5000");
    }
}

public class Profesor implements Empleado {
    private String nombre;

    public Profesor(String nombre) {
        this.nombre = nombre;
    }

    @Override
    public void trabajar() {
        System.out.println(nombre + " enseña a estudiantes");
    }

    @Override
    public void cobrarSalario() {
        System.out.println(nombre + " cobra $3000");
    }
}

// Uso polimórfico:
Empleado[] empleados = {
    new Ingeniero("Juan"),
    new Profesor("María")
};

for (Empleado emp : empleados) {
    emp.trabajar();
    emp.cobrarSalario();
}`,
    },
    {
      title: 'Clase abstracta: Animal',
      description: 'Crea clase abstracta Animal con método abstracto hacerSonido(). Implementa en Perro.',
      difficulty: 'Intermedio',
      hint: 'Usa abstract class y abstract void hacerSonido();',
      solution: `public abstract class Animal {
    protected String nombre;

    public Animal(String nombre) {
        this.nombre = nombre;
    }

    // Método abstracto (sin implementación)
    abstract void hacerSonido();

    // Método concreto (con implementación)
    public void dormir() {
        System.out.println(nombre + " duerme");
    }
}

public class Perro extends Animal {
    public Perro(String nombre) {
        super(nombre);
    }

    @Override
    public void hacerSonido() {
        System.out.println("¡Guau guau!");
    }
}

// Uso:
Perro p = new Perro("Rex");
p.hacerSonido(); // ¡Guau guau!
p.dormir();      // Rex duerme

// NO puedes crear instancia de Animal:
// Animal a = new Animal("Genérico"); // ERROR`,
    },
  ];

  const sections = [
    {
      title: '¿Qué son Interfaces y Clases Abstractas?',
      level: 2,
      content: [
        'Una <strong>interfaz</strong> define un contrato: "qué métodos debe tener". Una <strong>clase abstracta</strong> es una clase que no se puede instanciar directamente y puede tener métodos abstractos (sin implementación).',
        <InfoBox key="info1" type="info">
          <strong>Interfaz:</strong> Define un contrato.
          <br />
          <strong>Clase Abstracta:</strong> Base para subclases relacionadas.
        </InfoBox>,
      ],
    },
    {
      title: 'Interfaces',
      level: 2,
      content: [
        <CodeBlock
          key="code1"
          code={`// Definir interfaz
public interface Animal {
    void hacerSonido();  // Método abstracto
    void moverse();
    String getNombre();
}

// Implementar interfaz
public class Perro implements Animal {
    private String nombre;

    public Perro(String nombre) {
        this.nombre = nombre;
    }

    @Override
    public void hacerSonido() {
        System.out.println("¡Guau guau!");
    }

    @Override
    public void moverse() {
        System.out.println("El perro corre");
    }

    @Override
    public String getNombre() {
        return nombre;
    }
}

// Usar interfaz:
Animal perro = new Perro("Rex");
perro.hacerSonido();  // ¡Guau guau!
perro.moverse();      // El perro corre`}
        />,
      ],
    },
    {
      title: 'Múltiples Interfaces',
      level: 2,
      content: [
        <CodeBlock
          key="code2"
          code={`// Una clase puede implementar MÚLTIPLES interfaces
public interface Nadador {
    void nadar();
}

public interface Volador {
    void volar();
}

public class Pajaro implements Volador, Nadador {
    @Override
    public void volar() {
        System.out.println("El pájaro vuela");
    }

    @Override
    public void nadar() {
        System.out.println("El pájaro nada");
    }
}

// Uso:
Pajaro p = new Pajaro();
p.volar();   // El pájaro vuela
p.nadar();   // El pájaro nada

// También puedes usar referencias de interfaz:
Volador v = p;
Nadador n = p;
v.volar();
n.nadar();`}
        />,
        <InfoBox key="info2" type="success">
          <strong>Ventaja de interfaces:</strong> Múltiples "contratos" en una sola clase. No es posible con herencia simple.
        </InfoBox>,
      ],
    },
    {
      title: 'Clases Abstractas',
      level: 2,
      content: [
        <CodeBlock
          key="code3"
          code={`// Clase abstracta
public abstract class Vehículo {
    protected String marca;

    public Vehículo(String marca) {
        this.marca = marca;
    }

    // Método abstracto (sin implementación)
    public abstract void acelerar();

    // Método concreto (con implementación)
    public void mostrarMarca() {
        System.out.println("Marca: " + marca);
    }
}

// Implementar clase abstracta
public class Coche extends Vehículo {
    public Coche(String marca) {
        super(marca);
    }

    @Override
    public void acelerar() {
        System.out.println("Coche acelera rápidamente");
    }
}

// Uso:
Coche c = new Coche("Toyota");
c.acelerar();        // Coche acelera rápidamente
c.mostrarMarca();    // Marca: Toyota

// NO puedes hacer:
// Vehículo v = new Vehículo("Toyota"); // ERROR`}
        />,
      ],
    },
    {
      title: 'Comparación Profunda: Interfaces vs Clases Abstractas',
      id: 'comparacion',
      level: 2,
      content: [
        <InfoBox key="info1" type="info" title="⚠️ Confusión Común">
          Muchos desarrolladores confunden interfaces con clases abstractas porque ambas no se pueden instanciar.
          Sin embargo, son herramientas diseñadas para propósitos <strong>completamente diferentes</strong>.
        </InfoBox>,

        <div key="comp1">
          <h4>Tabla Comparativa Detallada</h4>
          <Table
            headers={['Aspecto', 'Interface', 'Clase Abstracta']}
            rows={[
              ['Instanciación', '❌ No se puede (new Interface())', '❌ No se puede (new Abstract())'],
              ['Propósito', 'Contrato puro (QUÉ hacer)', 'Plantilla (QUÉ y CÓMO hacer)'],
              ['Métodos', 'Solo abstractos (hasta Java 7)', 'Abstractos + concretos'],
              ['Variables', 'Solo public static final', 'Cualquier tipo (private, protected, etc)'],
              ['Constructores', '❌ NO tiene constructores', '✅ SÍ puede tener constructores'],
              ['Estado/Variables de instancia', '❌ NO puede tener estado interno', '✅ SÍ puede tener estado'],
              ['Herencia (extends)', '❌ No aplica', 'Una sola clase base (single)'],
              ['Implementación (implements)', '✅ Múltiples interfaces', '❌ Una sola clase abstracta'],
              ['Métodos default (Java 8+)', '✅ SÍ con default', 'Todos tienen implementación'],
              ['Acceso a métodos', 'Siempre public', 'Puede ser public, protected, private'],
            ]}
          />
        </div>,

        <div key="comp2">
          <h4>Ejemplos Prácticos Comparativos</h4>
          <CodeBlock
            key="ex1"
            code={`// INTERFACE - Contrato puro: "¿Qué debe hacer?"
public interface Transportable {
    void transportar();
    void entregar();
}

// CLASE ABSTRACTA - Plantilla: "¿Cómo lo hace?"
public abstract class Vehículo {
    protected String marca;    // ← ESTADO
    protected double velocidad; // ← ESTADO

    public Vehículo(String marca) {
        this.marca = marca;
    }

    // Método que todas las subclases DEBEN implementar
    abstract void acelerar();

    // Método común a todos (implementación reutilizable)
    public void mostrarVelocidad() {
        System.out.println("Velocidad: " + velocidad);
    }
}

// IMPLEMENTACIÓN: Clase que usa AMBAS
public class Camión extends Vehículo implements Transportable {
    private int cargaMaxima;

    public Camión(String marca, int carga) {
        super(marca);           // Constructor de clase abstracta
        this.cargaMaxima = carga;
    }

    @Override
    void acelerar() {
        velocidad += 10;  // Usa estado compartido de Vehículo
    }

    @Override
    public void transportar() {
        System.out.println("Transportando " + cargaMaxima + "kg");
    }

    @Override
    public void entregar() {
        System.out.println("Entregando carga");
    }
}`}
          />
        </div>,

        <div key="comp3">
          <h4>Cuándo Usar Cada Una</h4>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem', marginTop: '1rem' }}>
            <div style={{ padding: '1.5rem', background: '#e8f5e9', borderLeft: '4px solid #4caf50', borderRadius: '6px' }}>
              <h5 style={{ margin: '0 0 0.8rem 0', color: '#2e7d32' }}>✅ Usa INTERFACE cuando:</h5>
              <ul style={{ margin: 0, paddingLeft: '1.5rem' }}>
                <li>Necesitas definir un <strong>contrato puro</strong> (qué debe hacer)</li>
                <li>Una clase implementará <strong>múltiples interfaces</strong></li>
                <li>NO compartirás <strong>estado/variables</strong> internas</li>
                <li>Quieres una API clara y simple</li>
                <li>Ejemplo: Iterable, Comparable, Serializable</li>
              </ul>
            </div>
            <div style={{ padding: '1.5rem', background: '#fff3e0', borderLeft: '4px solid #ff9800', borderRadius: '6px' }}>
              <h5 style={{ margin: '0 0 0.8rem 0', color: '#e65100' }}>✅ Usa CLASE ABSTRACTA cuando:</h5>
              <ul style={{ margin: 0, paddingLeft: '1.5rem' }}>
                <li>Las subclases compartirán <strong>estado/variables</strong></li>
                <li>Necesitas <strong>constructores con lógica</strong></li>
                <li>Quieres métodos con implementación común</li>
                <li>Defineés una jerarquía de clases relacionadas</li>
                <li>Ejemplo: Animal, Empleado, Vehículo</li>
              </ul>
            </div>
          </div>
        </div>,
      ],
    },
    {
      title: 'Métodos default en Interfaces (Java 8+)',
      level: 2,
      content: [
        <CodeBlock
          key="code4"
          code={`public interface Pagador {
    void pagar();

    // Método default (con implementación)
    default void imprimirRecibo() {
        System.out.println("Recibo imprimido");
    }
}

public class Persona implements Pagador {
    @Override
    public void pagar() {
        System.out.println("Persona paga");
    }

    // No necesita implementar imprimirRecibo()
    // Pero puede sobrescribirlo si quiere:
    @Override
    public void imprimirRecibo() {
        System.out.println("Recibo personalizado");
    }
}

// Uso:
Persona p = new Persona();
p.pagar();             // Persona paga
p.imprimirRecibo();    // Recibo personalizado`}
        />,
      ],
    },
    {
      title: 'Ejemplo Completo: Sistema de Formas',
      level: 2,
      content: [
        <CodeBlock
          key="code5"
          code={`// Interfaz para definir contrato
public interface Forma {
    double calcularArea();
    double calcularPerímetro();
}

// Clase abstracta base
public abstract class FormaAbstracta implements Forma {
    protected String nombre;

    public FormaAbstracta(String nombre) {
        this.nombre = nombre;
    }

    public void mostrarInfo() {
        System.out.println("Forma: " + nombre);
        System.out.printf("Área: %.2f\\n", calcularArea());
        System.out.printf("Perímetro: %.2f\\n", calcularPerímetro());
    }
}

// Implementación concreta
public class Círculo extends FormaAbstracta {
    private double radio;

    public Círculo(double radio) {
        super("Círculo");
        this.radio = radio;
    }

    @Override
    public double calcularArea() {
        return Math.PI * radio * radio;
    }

    @Override
    public double calcularPerímetro() {
        return 2 * Math.PI * radio;
    }
}

public class Rectángulo extends FormaAbstracta {
    private double ancho, alto;

    public Rectángulo(double ancho, double alto) {
        super("Rectángulo");
        this.ancho = ancho;
        this.alto = alto;
    }

    @Override
    public double calcularArea() {
        return ancho * alto;
    }

    @Override
    public double calcularPerímetro() {
        return 2 * (ancho + alto);
    }
}

// Uso:
Forma[] formas = {
    new Círculo(5),
    new Rectángulo(4, 6)
};

for (Forma f : formas) {
    FormaAbstracta fa = (FormaAbstracta) f;
    fa.mostrarInfo();
}`}
        />,
      ],
    },
    {
      title: '🔗 Profundización: Clases Abstractas en Detalle',
      level: 2,
      content: [
        <InfoBox key="info-deep" type="info">
          Si quieres explorar <strong>en profundidad solo las clases abstractas</strong>,
          incluyendo patrones avanzados, jerarquías complejas y casos de uso especializados,
          consulta la lección dedicada:
        </InfoBox>,
        <div key="link-abstract" style={{
          padding: '1.5rem',
          background: 'linear-gradient(135deg, #f3e5f5 0%, #ede7f6 100%)',
          borderLeft: '4px solid #7c3aed',
          borderRadius: '8px',
          marginTop: '1rem'
        }}>
          <h4 style={{ margin: '0 0 0.5rem 0', color: '#7c3aed' }}>
            📚 Lección: Clases Abstractas - Jerarquías y Contratos
          </h4>
          <p style={{ margin: '0 0 1rem 0', color: '#666' }}>
            Ejemplos avanzados, constructores, métodos concretos en clases abstractas,
            patrones de herencia complejos y mejores prácticas.
          </p>
          <a
            href="/java/poo/clases-abstractas"
            style={{
              display: 'inline-block',
              padding: '0.8rem 1.5rem',
              background: '#7c3aed',
              color: 'white',
              borderRadius: '6px',
              textDecoration: 'none',
              fontWeight: '600'
            }}
          >
            Ver Lección de Clases Abstractas →
          </a>
        </div>
      ],
    },
  ];

  const summary = `Interfaces y clases abstractas son herramientas fundamentales para crear código flexible, extensible y bien diseñado.

• Las interfaces definen CONTRATOS (qué debe hacer)
• Las clases abstractas proporcionan PLANTILLAS (qué y cómo hacer)
• Las interfaces se implementan (implements) - múltiples posibles
• Las clases abstractas se heredan (extends) - una sola
• Las interfaces NO tienen estado, las clases abstractas SÍ
• Las interfaces son para comportamientos puros, clases abstractas para jerarquías
• A partir de Java 8, las interfaces pueden tener métodos default
• El polimorfismo funciona con ambas
• Una clase puede implementar múltiples interfaces Y extender una clase abstracta
• Elige interface para contratos, abstract class para familias de clases relacionadas`;

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
