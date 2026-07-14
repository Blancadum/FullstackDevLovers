import { useState } from 'react';
import { CodeBlock, Table, InfoBox } from './index';
import './BytecodeTabbed.css';

export function BytecodeTabbed() {
  const [selectedTab, setSelectedTab] = useState('visualizar');

  const tabs = [
    {
      id: 'visualizar',
      label: 'Visualizar Bytecode con javap'
    },
    {
      id: 'instrucciones',
      label: 'Instrucciones Comunes del Bytecode'
    },
    {
      id: 'compilacion',
      label: 'Compilación vs Interpretación'
    },
    {
      id: 'jit',
      label: 'JIT - Just In Time Compilation'
    }
  ];

  const renderContent = () => {
    switch (selectedTab) {
      case 'visualizar':
        return (
          <>
            <CodeBlock
              language="bash"
              code={`// Archivo: Ejemplo.java
public class Ejemplo {
    public int sumar(int a, int b) {
        return a + b;
    }
}

// Compilar
$ javac Ejemplo.java

// Ver bytecode
$ javap -c Ejemplo

// Salida:
// public int sumar(int, int);
//   Code:
//      0: iload_1           // Cargar a
//      1: iload_2           // Cargar b
//      2: iadd              // Sumar
//      3: ireturn           // Retornar`}
            />
            <p>
              El bytecode es el resultado de compilar tu código Java. Cada instrucción tiene un número específico que la JVM entiende.
            </p>
          </>
        );

      case 'instrucciones':
        return (
          <>
            <p>
              Estas son las instrucciones más frecuentes que encontrarás al visualizar bytecode:
            </p>
            <Table
              headers={['Instrucción', 'Significado', 'Ejemplo']}
              rows={[
                ['iload_1', 'Load int from local variable 1', 'Cargar variable int'],
                ['aload_0', 'Load reference (this)', 'Cargar objeto actual'],
                ['iadd', 'Add two ints', 'a + b'],
                ['new', 'Crear nuevo objeto', 'new String()'],
                ['invokevirtual', 'Llamar método virtual', 'obj.metodo()'],
                ['return', 'Retornar void', 'fin del método'],
                ['ireturn', 'Retornar int', 'return valor'],
                ['areturn', 'Retornar reference', 'return objeto']
              ]}
            />
          </>
        );

      case 'compilacion':
        return (
          <>
            <p>
              Java utiliza un modelo híbrido: primero compila una vez a bytecode, luego lo interpreta cada vez que se ejecuta.
            </p>
            <CodeBlock
              language="java"
              code={`// Java: Compilado + Interpretado

// COMPILACIÓN (una vez)
// .java → .class (bytecode)
// $ javac Programa.java

// EJECUCIÓN (cada vez que ejecutas)
// .class → JVM interpreta/compila a nativo
// $ java Programa

// Diferencia con C++:
// C++: Compilado completamente a código máquina (solo SO específico)
// Java: Compilado a bytecode (portátil), interpretado en runtime`}
            />
          </>
        );

      case 'jit':
        return (
          <>
            <p>
              Para mejorar rendimiento, la JVM (HotSpot) detecta bytecode frecuente y lo compila a código nativo en tiempo de ejecución.
            </p>
            <CodeBlock
              language="bash"
              code={`# Ver compilaciones JIT
java -XX:+PrintCompilation MiPrograma

// Salida:
// 165   1   java.lang.String::equals (49 bytes)
// 210   2   java.util.ArrayList::add (25 bytes)
// 340   3%  Loop::procesar (150 bytes)  (% = compilación OSR)

# "-XX:TieredStopAtLevel=4" fuerza JIT compilation
# "-XX:+TieredCompilation" activa compilación en capas`}
            />
            <InfoBox type="info">
              <strong>Compilación en Capas (Tiered):</strong> Nivel 0-1 interpretado (rápido startup), Nivel 3-4 JIT compilado (mejor rendimiento). Balance entre startup y throughput.
            </InfoBox>
          </>
        );

      default:
        return null;
    }
  };

  return (
    <div className="bytecode-dropdown">
      <div className="bytecode-selector">
        <label htmlFor="bytecode-select">Selecciona un tema:</label>
        <select
          id="bytecode-select"
          value={selectedTab}
          onChange={(e) => setSelectedTab(e.target.value)}
          className="bytecode-select"
        >
          {tabs.map(tab => (
            <option key={tab.id} value={tab.id}>
              {tab.label}
            </option>
          ))}
        </select>
      </div>

      <div className="bytecode-content">
        <h4>{tabs.find(t => t.id === selectedTab)?.label}</h4>
        {renderContent()}
      </div>
    </div>
  );
}
