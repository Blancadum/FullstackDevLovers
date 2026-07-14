import { useState } from 'react';
import { LessonTemplate, CodeBlock, Table, InfoBox } from '../components';
import { LessonNavigation } from '../components/LessonNavigation';
import { useBreadcrumb } from '../hooks/useBreadcrumb';
import { useLessonNavigation } from '../hooks/useLessonNavigation';

export function LessonCollections() {
  const breadcrumbs = useBreadcrumb();
  const nav = useLessonNavigation();
  const [activeTab, setActiveTab] = useState(0);

  const concepts = [
    {
      icon: '📚',
      title: 'List',
      definition: 'Colección ordenada que permite duplicados. Acceso por índice.',
      example: 'ArrayList, LinkedList',
    },
    {
      icon: '🏷️',
      title: 'Set',
      definition: 'Colección sin orden y sin duplicados. Basada en hash o árbol.',
      example: 'HashSet, TreeSet',
    },
    {
      icon: '🔑',
      title: 'Map',
      definition: 'Colección de pares clave-valor. Cada clave es única.',
      example: 'HashMap, TreeMap',
    },
    {
      icon: '⚡',
      title: 'Collection Framework',
      definition: 'Conjunto de interfaces y clases para trabajar con colecciones de datos.',
      example: 'java.util: List, Set, Map, Queue, Deque',
    },
  ];

  const exercises = [
    {
      title: 'Crear y llenar un ArrayList',
      description: 'Crea un ArrayList de números del 1 al 5 y imprímelos.',
      solution: `ArrayList<Integer> numeros = new ArrayList<>();
numeros.add(1);
numeros.add(2);
numeros.add(3);
numeros.add(4);
numeros.add(5);
numeros.forEach(n -> System.out.println(n));`,
    },
    {
      title: 'Filtrar números pares',
      description: 'Crea un ArrayList con números del 1 al 10 y filtra solo los pares.',
      solution: `ArrayList<Integer> numeros = new ArrayList<>(Arrays.asList(1,2,3,4,5,6,7,8,9,10));
numeros.removeIf(n -> n % 2 != 0);
numeros.forEach(System.out::println);`,
    },
  ];

  const keyPoints = [
    'List: Colección ordenada, permite duplicados',
    'Set: Sin orden, sin duplicados, búsqueda rápida',
    'Map: Pares clave-valor, claves únicas',
    'ArrayList es la más común para List',
    'HashSet es ideal para búsquedas rápidas',
    'HashMap es la más versátil para Maps',
    'Itera con forEach() o Iterator',
    'Usa streams para transformaciones complejas',
    'Collection Framework: java.util con todas las interfaces',
    'Generics: List<T> asegura tipo seguro',
  ];

  const sections = [
    {
      title: '¿Qué son las Colecciones?',
      content: (
        <p>
          Las colecciones son estructuras de datos que almacenan múltiples elementos. Java proporciona
          interfaces como List, Set y Map, cada una con diferentes características y use cases.
        </p>
      ),
    },

    {
      title: 'Resumen: Jerarquía de Colecciones',
      content: (
        <>
          <p>
            El <strong>Collection Framework</strong> de Java organiza todas las colecciones en una jerarquía.
            Aquí está el árbol de interfaces principales:
          </p>

          <CodeBlock
            language="text"
            code={`Collection (interfaz raíz)
├── List (colecciones ordenadas, permiten duplicados)
│   ├── ArrayList (la más común, acceso rápido por índice)
│   ├── LinkedList (inserción/eliminación rápida)
│   └── Vector (legacy, evitar)
│
├── Set (sin orden, sin duplicados)
│   ├── HashSet (búsqueda O(1), no ordenado)
│   ├── TreeSet (ordenado automáticamente)
│   └── LinkedHashSet (mantiene orden de inserción)
│
└── Queue (cola, FIFO)
    ├── LinkedList (puede usarse como queue)
    └── PriorityQueue (por prioridad)

Map (interfaz separada, no extiende Collection)
├── HashMap (búsqueda O(1), más usado)
├── TreeMap (ordenado por claves)
└── LinkedHashMap (mantiene orden de inserción)`}
          />

          <h3 style={{marginTop: '2rem', marginBottom: '1rem', color: '#2c3e50'}}>
            Guía Rápida: ¿Cuál Usar?
          </h3>

          <Table
            headers={['Necesidad', 'Usa', 'Ejemplo']}
            rows={[
              ['Elementos ordenados con índice', 'ArrayList', 'lista.get(0), lista.add()'],
              ['Insertar/eliminar frecuentemente', 'LinkedList', 'lista.addFirst(), addLast()'],
              ['Elementos únicos, búsqueda rápida', 'HashSet', 'if (set.contains(x))'],
              ['Elementos únicos + ordenados', 'TreeSet', 'for (Integer n : set)'],
              ['Pares clave-valor', 'HashMap', 'map.get(key), map.put(key, value)'],
              ['Pares clave-valor ordenados', 'TreeMap', 'map.floorKey(), ceilingKey()'],
              ['Pares con orden de inserción', 'LinkedHashMap', 'preserva orden original'],
            ]}
          />

          <h3 style={{marginTop: '2rem', marginBottom: '1rem', color: '#2c3e50'}}>
            Características Comparativas
          </h3>

          <Table
            headers={['Operación', 'ArrayList', 'LinkedList', 'HashSet', 'TreeSet', 'HashMap']}
            rows={[
              ['add()', 'O(1)*', 'O(1)', 'O(1)', 'O(log n)', 'O(1)'],
              ['get(i)', 'O(1)', 'O(n)', '-', '-', '-'],
              ['remove()', 'O(n)', 'O(1)', 'O(1)', 'O(log n)', 'O(1)'],
              ['contains()', 'O(n)', 'O(n)', 'O(1)', 'O(log n)', 'O(1)'],
              ['Ordenado', 'No', 'No', 'No', 'Sí', 'No'],
              ['Duplicados', 'Sí', 'Sí', 'No', 'No', 'No (claves)'],
            ]}
          />

          <InfoBox type="info" style={{marginTop: '1.5rem'}}>
            <strong>O(1)* = Amortizado</strong>: ArrayList crece dinámicamente, pero en promedio add() es O(1).
            O(n) = acceso lineal, O(log n) = búsqueda binaria.
          </InfoBox>

          <h3 style={{marginTop: '2rem', marginBottom: '1rem', color: '#2c3e50'}}>
            Flujo de Decisión
          </h3>

          <CodeBlock
            language="text"
            code={`¿Necesitas pares clave-valor?
├─ Sí → ¿Necesitas orden?
│   ├─ No → HashMap ✓
│   └─ Sí → TreeMap ✓
│
└─ No → ¿Necesitas duplicados?
    ├─ Sí (elementos ordenados) → ArrayList ✓
    ├─ Sí (inserción frecuente) → LinkedList ✓
    │
    └─ No (elementos únicos)
        ├─ ¿Necesitas orden? → TreeSet ✓
        └─ ¿Solo búsqueda rápida? → HashSet ✓`}
          />
        </>
      ),
    },

    {
      title: 'Clasificación de Colecciones (Tabs)',
      content: (
        <>
          <p>Elige una categoría para ver detalles, implementaciones y ejemplos de uso:</p>

          {/* Tabs Navigation */}
          <div style={{
            display: 'flex',
            gap: '0.5rem',
            marginTop: '1.5rem',
            marginBottom: '1.5rem',
            flexWrap: 'wrap'
          }}>
            {[
              { label: '📚 List', icon: '📚' },
              { label: '🏷️ Set', icon: '🏷️' },
              { label: '🔑 Map', icon: '🔑' },
              { label: '⚡ Queue', icon: '⚡' }
            ].map((tab, idx) => (
              <button
                key={idx}
                onClick={() => setActiveTab(idx)}
                style={{
                  padding: '0.75rem 1.5rem',
                  backgroundColor: activeTab === idx ? '#3498db' : '#ecf0f1',
                  color: activeTab === idx ? 'white' : '#2c3e50',
                  border: 'none',
                  borderRadius: '0.5rem',
                  cursor: 'pointer',
                  fontWeight: activeTab === idx ? 'bold' : 'normal',
                  fontSize: '1rem',
                  transition: 'all 0.3s ease'
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div style={{
            backgroundColor: '#f8f9fa',
            padding: '2rem',
            borderRadius: '0.5rem',
            marginTop: '1rem'
          }}>
            {/* LIST TAB */}
            {activeTab === 0 && (
              <>
                <h4 style={{ marginTop: 0 }}>List: Colecciones Ordenadas</h4>
                <p><strong>Características:</strong> Elementos ordenados, acceso por índice, permite duplicados</p>

                <h5>Implementaciones:</h5>
                <Table
                  headers={['Clase', 'Orden', 'Acceso', 'Inserción/Eliminación', 'Mejor Para']}
                  rows={[
                    ['ArrayList', 'Sí (índice)', 'O(1)', 'O(n)', 'Lectura frecuente'],
                    ['LinkedList', 'Sí (índice)', 'O(n)', 'O(1)', 'Inserción/eliminación'],
                    ['Vector', 'Sí (índice)', 'O(1)', 'O(n)', 'Legacy (evitar)']
                  ]}
                />

                <h5 style={{ marginTop: '1.5rem' }}>Ejemplo de Uso:</h5>
                <CodeBlock
                  code={`ArrayList<Integer> numeros = new ArrayList<>();
numeros.add(10);
numeros.add(20);
numeros.add(30);

System.out.println(numeros.get(0)); // 10
numeros.remove(1); // Elimina el 20
System.out.println(numeros.size()); // 2`}
                />
              </>
            )}

            {/* SET TAB */}
            {activeTab === 1 && (
              <>
                <h4 style={{ marginTop: 0 }}>Set: Elementos Únicos</h4>
                <p><strong>Características:</strong> Sin duplicados, sin orden garantizado (excepto TreeSet), búsqueda rápida</p>

                <h5>Implementaciones:</h5>
                <Table
                  headers={['Clase', 'Orden', 'Búsqueda', 'Iteración', 'Mejor Para']}
                  rows={[
                    ['HashSet', 'No', 'O(1)', 'Rápida', 'Búsqueda rápida'],
                    ['TreeSet', 'Sí (natural)', 'O(log n)', 'Ordenada', 'Elementos ordenados'],
                    ['LinkedHashSet', 'Inserción', 'O(1)', 'Ordenada inserción', 'Inserción preservada']
                  ]}
                />

                <h5 style={{ marginTop: '1.5rem' }}>Ejemplo de Uso:</h5>
                <CodeBlock
                  code={`HashSet<String> estudiantes = new HashSet<>();
estudiantes.add("Ana");
estudiantes.add("Bruno");
estudiantes.add("Ana"); // NO se agrega, ya existe

System.out.println(estudiantes.size()); // 2
System.out.println(estudiantes.contains("Bruno")); // true`}
                />
              </>
            )}

            {/* MAP TAB */}
            {activeTab === 2 && (
              <>
                <h4 style={{ marginTop: 0 }}>Map: Pares Clave-Valor</h4>
                <p><strong>Características:</strong> NO extiende Collection, pares clave-valor, claves únicas</p>

                <h5>Implementaciones:</h5>
                <Table
                  headers={['Clase', 'Orden', 'Acceso', 'Búsqueda', 'Mejor Para']}
                  rows={[
                    ['HashMap', 'No', 'O(1)', 'O(1)', 'Acceso rápido'],
                    ['TreeMap', 'Sí (claves)', 'O(log n)', 'O(log n)', 'Claves ordenadas'],
                    ['LinkedHashMap', 'Inserción', 'O(1)', 'O(1)', 'Preservar orden']
                  ]}
                />

                <h5 style={{ marginTop: '1.5rem' }}>Ejemplo de Uso:</h5>
                <CodeBlock
                  code={`HashMap<String, Integer> edades = new HashMap<>();
edades.put("Juan", 25);
edades.put("María", 30);
edades.put("Pedro", 28);

System.out.println(edades.get("María")); // 30
edades.remove("Juan");
System.out.println(edades.size()); // 2`}
                />
              </>
            )}

            {/* QUEUE TAB */}
            {activeTab === 3 && (
              <>
                <h4 style={{ marginTop: 0 }}>Queue & Deque: Colas y Doble Entrada</h4>
                <p><strong>Características:</strong> FIFO (First In First Out) o LIFO, operaciones especializadas</p>

                <h5>Implementaciones:</h5>
                <Table
                  headers={['Clase', 'Tipo', 'Inserción', 'Eliminación', 'Mejor Para']}
                  rows={[
                    ['LinkedList', 'Deque (ambos lados)', 'O(1)', 'O(1)', 'Cola flexible'],
                    ['PriorityQueue', 'Cola por prioridad', 'O(log n)', 'O(log n)', 'Procesamiento prioritario'],
                    ['ArrayDeque', 'Deque (ambos lados)', 'O(1)', 'O(1)', 'Stack/Queue eficiente']
                  ]}
                />

                <h5 style={{ marginTop: '1.5rem' }}>Ejemplo de Uso:</h5>
                <CodeBlock
                  code={`Queue<String> tareas = new LinkedList<>();
tareas.add("Tarea 1");
tareas.add("Tarea 2");
tareas.add("Tarea 3");

System.out.println(tareas.poll()); // Tarea 1 (FIFO)
System.out.println(tareas.peek()); // Tarea 2 (sin eliminar)`}
                />
              </>
            )}
          </div>
        </>
      ),
    },

    {
      title: 'ArrayList - La más común',
      content: (
        <>
          <p>
            <strong>ArrayList</strong> es una implementación dinámica de List. Crece automáticamente cuando
            necesitas agregar elementos.
          </p>

          <InfoBox type="info">
            <code>ArrayList&lt;T&gt;</code> usa genéricos para tipo seguro.
          </InfoBox>

          <CodeBlock
            code={`ArrayList<String> nombres = new ArrayList<>();
nombres.add("Juan");
nombres.add("María");
nombres.add("Pedro");

// Acceso por índice
System.out.println(nombres.get(0)); // Juan

// Tamaño
System.out.println(nombres.size()); // 3

// Iterar
for (String nombre : nombres) {
    System.out.println(nombre);
}`}
          />
        </>
      ),
    },

    {
      title: 'HashSet - Elementos Únicos',
      content: (
        <CodeBlock
          code={`HashSet<Integer> numeros = new HashSet<>();
numeros.add(1);
numeros.add(2);
numeros.add(2); // Se ignora (duplicado)

System.out.println(numeros.size()); // 2
System.out.println(numeros.contains(1)); // true

// No tiene orden específico
// Útil para búsquedas rápidas`}
        />
      ),
    },

    {
      title: 'HashMap - Clave-Valor',
      content: (
        <CodeBlock
          code={`HashMap<String, Integer> edades = new HashMap<>();
edades.put("Juan", 25);
edades.put("María", 28);

System.out.println(edades.get("Juan")); // 25

edades.forEach((nombre, edad) ->
    System.out.println(nombre + " tiene " + edad)
);

// Iterar solo claves
for (String clave : edades.keySet()) {
    System.out.println(clave);
}

// Iterar solo valores
for (Integer valor : edades.values()) {
    System.out.println(valor);
}`}
        />
      ),
    },

    {
      title: 'Comparación: List vs Set vs Map',
      content: (
        <Table
          headers={['Característica', 'List', 'Set', 'Map']}
          rows={[
            ['Orden', 'Sí, ordenada', 'No', 'No (TreeMap sí)'],
            ['Duplicados', 'Permitidos', 'No permitidos', 'N/A (claves únicas)'],
            ['Acceso', 'Por índice', 'Iteración', 'Por clave'],
            ['Implementación común', 'ArrayList', 'HashSet', 'HashMap'],
            ['Búsqueda', 'O(n)', 'O(1)', 'O(1)'],
            ['Casos de uso', 'Listas, arrays', 'Elementos únicos', 'Diccionarios'],
          ]}
        />
      ),
    },

    {
      title: 'LinkedList - Inserción/Eliminación Rápida',
      content: (
        <>
          <InfoBox type="tip">
            LinkedList es más rápido para insertar/eliminar, pero más lento para acceso por índice.
          </InfoBox>
          <CodeBlock
            code={`LinkedList<String> palabras = new LinkedList<>();
palabras.add("Hola");
palabras.add("Mundo");
palabras.addFirst("¡");      // Agregar al inicio
palabras.addLast("!");        // Agregar al final

System.out.println(palabras.getFirst());  // ¡
System.out.println(palabras.getLast());   // !

palabras.removeFirst();
palabras.removeLast();`}
          />
        </>
      ),
    },

    {
      title: 'TreeSet y TreeMap - Ordenados',
      content: (
        <CodeBlock
          code={`// TreeSet: ordenado, sin duplicados
TreeSet<Integer> numeros = new TreeSet<>();
numeros.add(5);
numeros.add(2);
numeros.add(8);
numeros.add(2);  // Se ignora

System.out.println(numeros);  // [2, 5, 8] - ordenado

// TreeMap: ordenado por claves
TreeMap<String, Integer> edades = new TreeMap<>();
edades.put("Zoe", 20);
edades.put("Ana", 25);
edades.put("María", 28);

// Se imprime en orden alfabético por clave
edades.forEach((nombre, edad) ->
    System.out.println(nombre + " - " + edad)
);`}
        />
      ),
    },

    {
      title: 'Operaciones Comunes',
      content: (
        <CodeBlock
          code={`ArrayList<Integer> nums = new ArrayList<>(Arrays.asList(1, 2, 3, 4, 5));

// Verificar si existe
if (nums.contains(3)) {
    System.out.println("Encontrado");
}

// Obtener índice
int index = nums.indexOf(3); // 2

// Eliminar
nums.remove(0); // Elimina primer elemento
nums.removeIf(n -> n > 3); // Elimina si cumple condición

// Iterar
nums.forEach(System.out::println);

// Convertir a array
Integer[] array = nums.toArray(new Integer[0]);

// Ordenar
Collections.sort(nums);

// Invertir orden
Collections.reverse(nums);

// Buscar (solo en listas ordenadas)
int pos = Collections.binarySearch(nums, 3);`}
        />
      ),
    },

    {
      title: 'Streams y Operaciones Funcionales',
      content: (
        <CodeBlock
          code={`List<Integer> numeros = Arrays.asList(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

// Filtrar (solo pares)
numeros.stream()
    .filter(n -> n % 2 == 0)
    .forEach(System.out::println);  // 2 4 6 8 10

// Map (transformar)
numeros.stream()
    .map(n -> n * 2)
    .forEach(System.out::println);  // 2 4 6 8 10 12 14 16 18 20

// Reducir (suma)
int suma = numeros.stream()
    .reduce(0, Integer::sum);  // 55

// Collect (recolectar en lista)
List<Integer> pares = numeros.stream()
    .filter(n -> n % 2 == 0)
    .collect(Collectors.toList());  // [2, 4, 6, 8, 10]

// Count
long cantidad = numeros.stream()
    .filter(n -> n > 5)
    .count();  // 5`}
        />
      ),
    },

    {
      title: 'Preguntas Frecuentes',
      content: (
        <>
          <h3>¿Cuál es la diferencia entre ArrayList y LinkedList?</h3>
          <p>
            ArrayList es más rápido para acceso por índice (O(1)), pero lento para insertar/eliminar.
            LinkedList es lento para acceso, pero rápido para insertar/eliminar.
          </p>

          <h3>¿Por qué usar Set si elimina duplicados?</h3>
          <p>
            Sets son útiles cuando necesitas elementos únicos y búsqueda rápida. Por ejemplo, almacenar IDs únicos de usuarios.
          </p>

          <h3>¿Cuándo usar HashMap vs TreeMap?</h3>
          <p>
            HashMap es más rápido (O(1)). TreeMap mantiene orden ordenado alfabéticamente/numéricamente, pero es más lento (O(log n)).
          </p>
        </>
      ),
    },
  ];

  const summary = `Las Colecciones en Java son esenciales para estructurar datos:

• List: Colección ordenada, permite duplicados (ArrayList, LinkedList)
• Set: Sin orden, sin duplicados, búsqueda rápida (HashSet, TreeSet)
• Map: Pares clave-valor, claves únicas (HashMap, TreeMap)
• ArrayList es la más común para List
• HashSet es ideal para búsquedas rápidas
• HashMap es la más versátil para Maps
• Itera con forEach() o Iterator
• Usa streams para transformaciones complejas
• Collection Framework: java.util con todas las interfaces
• Generics: List<T> asegura tipo seguro
• TreeMap y TreeSet: versiones ordenadas pero más lentas
• LinkedList: mejor para inserción/eliminación, peor para acceso`;

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