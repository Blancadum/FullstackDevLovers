import { LessonTemplate, CodeBlock, Table, InfoBox } from '../components';
import { LessonNavigation } from '../components/LessonNavigation';
import { useBreadcrumb } from '../hooks/useBreadcrumb';
import { useLessonNavigation } from '../hooks/useLessonNavigation';

export function LessonPolymorphism() {
  const breadcrumbs = useBreadcrumb();
  const nav = useLessonNavigation();

  const concepts = [
    'Polimorfismo: "Muchas formas". Mismo método se comporta diferente según la clase',
    'Polimorfismo de compilación: Sobrecarga (overload)',
    'Polimorfismo de tiempo de ejecución: Sobrescritura (override)',
    'Sobrecarga: Mismo nombre, diferentes parámetros (tipo/cantidad)',
    'Sobrescritura: @Override en subclass, mismo nombre y parámetros',
    'Referencia padre puede apuntar a objeto hijo',
    'Conversión de tipos: (Tipo) referencia',
    'instanceof: Verifica si objeto es instancia de una clase',
    'Ventaja: Código flexible y extensible',
    'Ejemplo: Un método que recibe Animal, funciona con Perro o Gato',
  ];

  const exercises = [
    {
      title: 'Crear sistema de formas',
      description: 'Clase Forma abstracta, subclases Círculo y Rectángulo. Calcular área de cada una.',
      difficulty: 'Avanzado',
      hint: 'Crea método calcularArea() en Forma, sobrescribelo en subclases. Usa polimorfismo.',
      solution: `public class Forma {
    public void calcularArea() {
        System.out.println("Área de forma genérica");
    }
}

public class Círculo extends Forma {
    private double radio;

    public Círculo(double radio) {
        this.radio = radio;
    }

    @Override
    public void calcularArea() {
        double área = Math.PI * radio * radio;
        System.out.printf("Área círculo: %.2f\\n", área);
    }
}

public class Rectángulo extends Forma {
    private double ancho, alto;

    public Rectángulo(double ancho, double alto) {
        this.ancho = ancho;
        this.alto = alto;
    }

    @Override
    public void calcularArea() {
        double área = ancho * alto;
        System.out.printf("Área rectángulo: %.2f\\n", área);
    }
}

// Polimorfismo en acción:
Forma[] formas = {
    new Círculo(5),
    new Rectángulo(4, 6),
    new Círculo(3)
};

for (Forma f : formas) {
    f.calcularArea(); // Cada una llama su propia versión
}`,
    },
    {
      title: 'Sobrecarga de métodos',
      description: 'Crea clase Calculadora con método sumar(). Sobrecárgalo para int, double y 3 números.',
      difficulty: 'Intermedio',
      hint: 'Mismo nombre, diferentes parámetros (cantidad y tipo)',
      solution: `public class Calculadora {
    public int sumar(int a, int b) {
        return a + b;
    }

    public double sumar(double a, double b) {
        return a + b;
    }

    public int sumar(int a, int b, int c) {
        return a + b + c;
    }

    public double sumar(double a, double b, double c) {
        return a + b + c;
    }
}

// Uso:
Calculadora calc = new Calculadora();
System.out.println(calc.sumar(5, 3));              // 8 (int)
System.out.println(calc.sumar(5.5, 3.2));         // 8.7 (double)
System.out.println(calc.sumar(5, 3, 2));          // 10 (3 int)
System.out.println(calc.sumar(5.5, 3.2, 1.3));    // 10.0 (3 double)`,
    },
  ];

  const sections = [
    {
      title: '¿Qué es el Polimorfismo?',
      level: 2,
      content: [
        '<strong>Polimorfismo</strong> significa "muchas formas". En Java, permite que un método se comporte de manera diferente según la clase en la que se encuentra. Es uno de los pilares de la POO.',
        <InfoBox key="info1" type="info">
          <strong>Polimorfismo:</strong> Un mismo método se comporta diferente según el objeto que lo llama.
        </InfoBox>,
      ],
    },
    {
      title: 'Polimorfismo de Tiempo de Ejecución (Runtime)',
      level: 2,
      content: [
        'También llamado <strong>sobrescritura de métodos</strong> (method overriding).',
        <CodeBlock
          key="code1"
          code={`// Clase base
public class Animal {
    public void hacerSonido() {
        System.out.println("Sonido genérico");
    }
}

// Subclases
public class Perro extends Animal {
    @Override
    public void hacerSonido() {
        System.out.println("¡Guau guau!");
    }
}

public class Gato extends Animal {
    @Override
    public void hacerSonido() {
        System.out.println("¡Miau miau!");
    }
}

// Polimorfismo en acción:
Animal[] animales = {
    new Perro(),
    new Gato(),
};

for (Animal animal : animales) {
    animal.hacerSonido();  // Cada uno usa su propia versión
}`}
        />,
        <InfoBox key="info2" type="success">
          <strong>Ventaja:</strong> El mismo código funciona con cualquier animal, sin importar su tipo.
        </InfoBox>,
      ],
    },
    {
      title: 'Polimorfismo de Compilación (Compile-time)',
      level: 2,
      content: [
        'También llamado <strong>sobrecarga de métodos</strong> (method overloading).',
        <CodeBlock
          key="code2"
          code={`public class Calculadora {
    // Suma de 2 números
    public int sumar(int a, int b) {
        return a + b;
    }

    // Suma de 3 números
    public int sumar(int a, int b, int c) {
        return a + b + c;
    }

    // Suma de números decimales
    public double sumar(double a, double b) {
        return a + b;
    }

    // Suma de arrays
    public int sumar(int[] numeros) {
        int total = 0;
        for (int n : numeros) {
            total += n;
        }
        return total;
    }
}

// Uso:
Calculadora c = new Calculadora();
System.out.println(c.sumar(5, 3));              // 8 (2 int)
System.out.println(c.sumar(5, 3, 2));          // 10 (3 int)
System.out.println(c.sumar(5.5, 3.2));         // 8.7 (2 double)
System.out.println(c.sumar(new int[]{1, 2, 3})); // 6 (array)`}
        />,
      ],
    },
    {
      title: 'instanceof - Verificar Tipo',
      level: 2,
      content: [
        <CodeBlock
          key="code3"
          code={`public class Main {
    public static void main(String[] args) {
        Animal[] animales = {
            new Perro(),
            new Gato(),
        };

        for (Animal animal : animales) {
            if (animal instanceof Perro) {
                Perro p = (Perro) animal;
                p.traer();
            } else if (animal instanceof Gato) {
                Gato g = (Gato) animal;
                g.ronronear();
            }
        }
    }
}

// instanceof devuelve true si el objeto es instancia de la clase`}
        />,
      ],
    },
  ];

  const summary = 'Polimorfismo permite que un método se comporte diferente según el objeto que lo llama. Es fundamental para código flexible y extensible.';

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
