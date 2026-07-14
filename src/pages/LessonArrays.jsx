import { LessonTemplate, CodeBlock, Table, InfoBox } from '../components';
import { LessonNavigation } from '../components/LessonNavigation';
import { useBreadcrumb } from '../hooks/useBreadcrumb';
import { useLessonNavigation } from '../hooks/useLessonNavigation';

export function LessonArrays() {
  const breadcrumbs = useBreadcrumb();
  const nav = useLessonNavigation();

  const concepts = [
    {
      icon: '📦',
      title: 'Array',
      definition: 'Estructura de datos de tamaño FIJO que almacena múltiples elementos del mismo tipo',
      example: 'int[] numeros = new int[5];',
    },
    {
      icon: '🔢',
      title: 'Índice',
      definition: 'Posición del elemento en el array, comienza en 0',
      example: 'array[0] es el primer elemento',
    },
    {
      icon: '📊',
      title: 'Array Bidimensional',
      definition: 'Array de arrays. Perfecta para matrices y tablas',
      example: 'int[][] matriz = new int[3][3];',
    },
    {
      icon: '⚡',
      title: 'Acceso Rápido',
      definition: 'Acceso O(1) a cualquier elemento por índice',
      example: 'elemento = array[indice];',
    },
  ];

  const exercises = [
    {
      title: 'Crear y recorrer un array',
      description: 'Crea un array de 5 números y calcula la suma.',
      solution: `int[] numeros = {10, 20, 30, 40, 50};

int suma = 0;
for (int num : numeros) {
    suma += num;
}

System.out.println("Suma: " + suma); // 150
System.out.println("Promedio: " + (suma / numeros.length)); // 30`,
    },
    {
      title: 'Array bidimensional (matriz)',
      description: 'Crea una matriz 3x3 y suma todos los elementos.',
      solution: `int[][] matriz = {
    {1, 2, 3},
    {4, 5, 6},
    {7, 8, 9}
};

int suma = 0;
for (int i = 0; i < matriz.length; i++) {
    for (int j = 0; j < matriz[i].length; j++) {
        suma += matriz[i][j];
    }
}

System.out.println("Suma total: " + suma); // 45`,
    },
  ];

  const keyPoints = [
    'Array: estructura de datos de tamaño FIJO',
    'Se declara: tipo[] nombre = new tipo[tamaño]',
    'Índices: 0 a length-1',
    'length es propiedad (no método): array.length',
    'Acceso rápido O(1) a cualquier elemento',
    'Se puede inicializar: int[] nums = {1, 2, 3}',
    'Arrays bidimensionales: int[][] matriz',
    'Bucles: for tradicional, for-each, while',
    'Arrays.toString() para imprimir contenido',
    'Arrays.sort() para ordenar',
    'ArrayList es mejor para datos dinámicos',
  ];

  const sections = [
    {
      title: '¿Qué es un Array?',
      content: (
        <>
          <p>
            Un <strong>array</strong> (o arreglo) es una estructura de datos que almacena múltiples elementos
            del mismo tipo en posiciones consecutivas de memoria. El tamaño es FIJO y se define al crear el array.
          </p>
          <InfoBox type="important">
            Array: Colección de elementos del mismo tipo, tamaño fijo, acceso rápido por índice.
          </InfoBox>
        </>
      ),
    },

    {
      title: 'Comparación: Array vs ArrayList',
      content: (
        <Table
          headers={['Característica', 'Array', 'ArrayList']}
          rows={[
            ['Tamaño', 'FIJO, definido al crear', 'Dinámico, crece automáticamente'],
            ['Tipos soportados', 'Primitivos e int[] int[]', 'Solo objetos ArrayList<Integer>'],
            ['Rendimiento', 'Acceso rápido O(1), orden específico', 'Acceso rápido O(1), más flexible'],
            ['Flexibilidad', 'Poco flexible', 'Muy flexible'],
            ['Uso recomendado', 'Cuando conoces tamaño exacto', 'Cuando el tamaño es variable'],
          ]}
        />
      ),
    },

    {
      title: 'Crear y Usar Arrays',
      content: (
        <CodeBlock
          code={`// Forma 1: Declarar y luego inicializar
int[] numeros = new int[5];  // Array de 5 elementos (valores por defecto: 0)
numeros[0] = 10;
numeros[1] = 20;
numeros[2] = 30;

// Forma 2: Declarar e inicializar en una línea
int[] numeros2 = {10, 20, 30, 40, 50};

// Forma 3: Array de strings
String[] nombres = {"Juan", "María", "Pedro"};

// Forma 4: Array de objetos
double[] precios = new double[3];
precios[0] = 19.99;
precios[1] = 29.99;
precios[2] = 9.99;

// Obtener tamaño
int tamaño = numeros.length;  // 5 (es propiedad, NO método)

// Acceder a elementos
System.out.println(numeros[0]);      // 10
System.out.println(nombres[1]);      // "María"`}
        />
      ),
    },

    {
      title: 'Recorrer Arrays',
      content: (
        <CodeBlock
          code={`int[] numeros = {10, 20, 30, 40, 50};

// Forma 1: for tradicional (acceso por índice)
for (int i = 0; i < numeros.length; i++) {
    System.out.println("Elemento " + i + ": " + numeros[i]);
}

// Forma 2: for-each (más simple)
for (int numero : numeros) {
    System.out.println(numero);
}

// Forma 3: while
int i = 0;
while (i < numeros.length) {
    System.out.println(numeros[i]);
    i++;
}

// Forma 4: En reversa
for (int i = numeros.length - 1; i >= 0; i--) {
    System.out.println(numeros[i]);
}`}
        />
      ),
    },

    {
      title: 'Arrays Bidimensionales (Matrices)',
      content: (
        <>
          <p>Un array bidimensional es un array de arrays. Perfecto para matrices, tablas, etc.</p>
          <CodeBlock
            code={`// Crear matriz 3x3
int[][] matriz = new int[3][3];

// Inicializar con valores
int[][] matriz2 = {
    {1, 2, 3},
    {4, 5, 6},
    {7, 8, 9}
};

// Acceder a un elemento
int elemento = matriz2[0][1]; // 2 (fila 0, columna 1)

// Recorrer matriz
for (int i = 0; i < matriz2.length; i++) {           // filas
    for (int j = 0; j < matriz2[i].length; j++) {    // columnas
        System.out.print(matriz2[i][j] + " ");
    }
    System.out.println(); // nueva línea
}

// Salida:
// 1 2 3
// 4 5 6
// 7 8 9`}
          />
        </>
      ),
    },

    {
      title: 'Métodos Útiles de Array',
      content: (
        <CodeBlock
          code={`int[] numeros = {5, 2, 8, 1, 9, 3};

// Convertir a string
String contenido = Arrays.toString(numeros);
System.out.println(contenido); // [5, 2, 8, 1, 9, 3]

// Ordenar
Arrays.sort(numeros);
System.out.println(Arrays.toString(numeros)); // [1, 2, 3, 5, 8, 9]

// Buscar elemento
int indice = Arrays.binarySearch(numeros, 5);
System.out.println("Índice de 5: " + indice); // 3

// Llenar con un valor
int[] lleno = new int[5];
Arrays.fill(lleno, 10);
System.out.println(Arrays.toString(lleno)); // [10, 10, 10, 10, 10]

// Copiar
int[] copia = Arrays.copyOf(numeros, numeros.length);
int[] subarray = Arrays.copyOfRange(numeros, 1, 4); // Elementos 1, 2, 3

// Comparar
int[] arr1 = {1, 2, 3};
int[] arr2 = {1, 2, 3};
boolean iguales = Arrays.equals(arr1, arr2); // true`}
        />
      ),
    },

    {
      title: 'Valores por Defecto',
      content: (
        <Table
          headers={['Tipo', 'Valor Defecto']}
          rows={[
            ['int, long, short, byte', '0'],
            ['float, double', '0.0'],
            ['boolean', 'false'],
            ["char", "'\\u0000'"],
            ['String, Objetos', 'null'],
          ]}
        />
      ),
    },

    {
      title: 'Arrays vs ArrayList',
      content: (
        <CodeBlock
          code={`// ARRAY - Tamaño fijo
int[] numeros = new int[5];
numeros[0] = 10;
numeros[1] = 20;
// No puedo agregar más de 5 elementos

// ARRAYLIST - Tamaño dinámico
ArrayList<Integer> lista = new ArrayList<>();
lista.add(10);
lista.add(20);
lista.add(30); // Crece automáticamente
lista.add(40);
lista.add(50);

// Convertir entre tipos
Integer[] array = lista.toArray(new Integer[0]);
ArrayList<Integer> listaDesdeArray = new ArrayList<>(Arrays.asList(1, 2, 3));`}
        />
      ),
    },
  ];

  const summary = `Los arrays son estructuras fundamentales en Java:

• Array: Estructura de tamaño FIJO para almacenar múltiples elementos
• Declaración: tipo[] nombre = new tipo[tamaño];
• Índices: 0 a length-1
• length: Propiedad que devuelve el tamaño (no es método)
• for-each: La forma más simple de recorrer
• Bidimensional: int[][] para matrices
• Métodos útiles: Arrays.sort(), Arrays.toString(), Arrays.binarySearch()
• Valores por defecto: 0, 0.0, false, null
• Array vs ArrayList: Array es más rápido pero inflexible; ArrayList es dinámico`;

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