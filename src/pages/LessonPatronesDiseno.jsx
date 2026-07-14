import { useState } from 'react';
import { Link } from 'react-router-dom';
import { LessonTemplate, CodeBlock, Table, InfoBox } from '../components';
import { LessonNavigation } from '../components/LessonNavigation';
import { useBreadcrumb } from '../hooks/useBreadcrumb';
import { useLessonNavigation } from '../hooks/useLessonNavigation';
import {
  DiagramSingleton,
  DiagramFactory,
  DiagramBuilder,
  DiagramDecorator,
  DiagramObserver,
  DiagramStrategy,
  DiagramState,
  DiagramPrototype
} from '../components/UMLDiagramsDiv';
import '../styles/LessonPatronesDiseno.css';

function FAQSection() {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const faqData = [
    {
      question: '¿Cuándo debo usar un patrón de diseño?',
      answer: 'Los patrones de diseño deben usarse cuando resuelven un problema real y recurrente. No los uses "por si acaso" o por anticipar futuros cambios hipotéticos. Si tu código funciona sin un patrón, y agregar el patrón lo hace más complejo, entonces no lo necesitas. La regla de oro: usa un patrón cuando el problema que resuelve ya existe en tu código.'
    },
    {
      question: '¿Cuál es la diferencia entre patrón de diseño y un simple si condicional?',
      answer: 'Un patrón de diseño es una solución estructural a un problema que aparece una y otra vez. Un `if` resuelve una decisión puntual. La diferencia es escala y reutilización. Cuando tienes 5 decisiones anidadas (`if usuario es VIP, si es premium, si es regular...`), eso es un problema de diseño que Strategy resuelve elegantemente. Un `if` solo no lo hace, ese es el punto.'
    },
    {
      question: '¿Los patrones hacen mi código más lento?',
      answer: 'No significativamente. Los patrones pueden agregar una pequeña sobrecarga (una llamada de función extra, una búsqueda en un mapa), pero es negligible en comparación con I/O, bases de datos, o red. Lo que SÍ hace el código lento es la falta de patrones: código monolítico, difícil de optimizar, o con acoplamiento fuerte que es imposible refactorizar sin romper todo.'
    },
    {
      question: '¿Puedo mezclar patrones en una sola clase?',
      answer: 'Sí, y es común. Por ejemplo, puedes tener una clase que use Factory (crear objetos), Strategy (elegir algoritmo), y Observer (notificar cambios). Lo importante es que cada patrón resuelva un aspecto diferente del problema, sin interferir con los otros. Si mezclarlos hace el código confuso, es señal de que algo está mal y necesitas refactorizar.'
    },
    {
      question: '¿Existen patrones "malos" o "antipatrones"?',
      answer: 'Sí. Algunos patrones son antipatrones: God Object (una clase que hace todo), Inheritance Hell (jerarquías de herencia demasiado profundas), Singleton Abuse (usar Singleton cuando no es necesario), y Over-Engineering (agregar más patrones que los que el problema requiere). La clave es usar patrones como herramientas, no como dogma.'
    },
    {
      question: '¿Son los patrones universales entre lenguajes?',
      answer: 'Sí, la lógica fundamental de los patrones es universal. Un Factory en Java funciona igual en Python o C#. Sin embargo, algunos lenguajes hacen ciertos patrones innecesarios. Por ejemplo, en lenguajes funcionales, algunos patrones comportamentales se simplifican usando first-class functions. Adapta los patrones a los idiomas y capacidades de tu lenguaje.'
    },
    {
      question: '¿Cómo sé si estoy sobre-engineereando mi código?',
      answer: 'Señales de alerta: (1) Tienes patrones pero tu código sigue siendo complejo, (2) Necesitas una hora para explicar tu arquitectura, (3) Tus patrones tienen más código que lo que resuelven, (4) El código nunca se modifica de la forma que anticipaste. Si ves estas señales, simplifica. Los patrones deben hacer tu código más simple de entender y mantener, no más complicado.'
    },
    {
      question: '¿Cuál es el patrón más importante para aprender primero?',
      answer: 'Factory es probablemente el más fundamental. Resolver "¿cómo creo un objeto?" es el primer problema real en cualquier aplicación. Una vez dominas Factory, los demás patrones empiezan a tener sentido porque resuelven problemas específicos que surgen del diseño correcto de creación de objetos.'
    },
    {
      question: '¿Los patrones reemplazan los principios SOLID?',
      answer: 'No, se complementan. Los principios SOLID (Single Responsibility, Open/Closed, Liskov Substitution, Interface Segregation, Dependency Inversion) son directrices fundamentales. Los patrones de diseño son implementaciones concretas que APLICAN esos principios. Sin SOLID, los patrones se usan mal. Sin patrones, SOLID es solo teoría.'
    },
    {
      question: '¿Cómo aprendo a reconocer cuándo un patrón es la solución?',
      answer: 'Con práctica. Lee código real de proyectos open-source y busca patrones. Cuando refactoricés código legado, pregúntate: "¿Qué patrón habría evitado este desastre?" Resuelve katas y ejercicios enfocados en patrones. Lo importante es ver patrones en la naturaleza del problema, no forzarlos en la solución.'
    }
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
      {faqData.map((item, idx) => (
        <div key={idx} style={{ borderBottom: '1px solid #e0e0e0' }}>
          <button
            onClick={() => setExpandedIndex(expandedIndex === idx ? null : idx)}
            style={{
              width: '100%',
              padding: '1rem',
              border: 'none',
              backgroundColor: 'transparent',
              textAlign: 'left',
              cursor: 'pointer',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              transition: 'background-color 0.2s ease',
              fontSize: '1rem',
              fontWeight: '700',
              color: '#333'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#f5f5f5';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
            }}
          >
            <span>{item.question}</span>
            <span style={{ fontSize: '1.2rem', color: '#2196F3', minWidth: '24px', textAlign: 'center' }}>
              {expandedIndex === idx ? '−' : '+'}
            </span>
          </button>
          {expandedIndex === idx && (
            <div style={{
              padding: '0 1rem 1rem 1rem',
              fontSize: '0.9rem',
              lineHeight: '1.6',
              color: '#666',
              backgroundColor: '#fafafa',
              borderLeft: '3px solid #2196F3'
            }}>
              {item.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export function LessonPatronesDiseno() {
  const breadcrumbs = useBreadcrumb();
  const nav = useLessonNavigation();
  const [activeCategory, setActiveCategory] = useState(0);
  const [activeCreationalPattern, setActiveCreationalPattern] = useState(0);
  const [activeStructuralPattern, setActiveStructuralPattern] = useState(0);
  const [activeBehavioralPattern, setActiveBehavioralPattern] = useState(0);

  const concepts = [];

  const sections = [
    {
      title: 'Introducción a Patrones de Diseño',
      content: (
        <>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
            Los <strong>Patrones de Diseño</strong> son soluciones probadas y reutilizables a problemas comunes que enfrentan los desarrolladores. Son como "recetas" que han funcionado en miles de proyectos alrededor del mundo, permitiéndote evitar cometer los mismos errores que otros ya han cometido y solucionado. En lugar de inventar soluciones desde cero cada vez que enfrentas un problema, los patrones te ofrecen caminos ya validados por la experiencia de la comunidad.
          </p>

          <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
            La mayoría de los patrones modernos provienen de los <strong>23 patrones clásicos documentados por el Gang of Four en 1994</strong>, que se han convertido en el estándar de la industria. Lo más importante es que estos patrones son <strong>universales</strong>: aplican a Java, Python, C#, JavaScript, Go y prácticamente cualquier lenguaje de programación. La lógica fundamental es la misma, solo cambian los detalles de sintaxis. Por eso, dominar los patrones una vez te hace un desarrollador más versátil, capaz de escribir código de mejor calidad sin importar qué tecnología utilices.
          </p>
        </>
      )
    },

    {
      title: 'Patrones por Categoría',
      content: (
        <>
          <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '2rem', borderBottom: '2px solid #e0e0e0', paddingBottom: '1rem', justifyContent: 'center' }}>
            {['Creacionales', 'Estructurales', 'Comportamentales'].map((category, idx) => (
              <button
                key={idx}
                onClick={() => setActiveCategory(idx)}
                style={{
                  padding: '0.75rem 1.5rem',
                  backgroundColor: activeCategory === idx ? '#2196F3' : 'transparent',
                  color: activeCategory === idx ? 'white' : '#666',
                  border: 'none',
                  borderBottom: activeCategory === idx ? '3px solid #2196F3' : 'none',
                  cursor: 'pointer',
                  fontWeight: activeCategory === idx ? '600' : '400',
                  fontSize: '1rem',
                  transition: 'all 0.3s ease'
                }}
              >
                {category}
              </button>
            ))}
          </div>

          {activeCategory === 0 && (
            <>
              <h2 style={{ textAlign: 'center', fontSize: '2rem', color: '#2196F3', marginBottom: '2rem' }}>Creacionales</h2>

              <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1.5rem', textAlign: 'justify' }}>
                Los patrones <strong>Creacionales</strong> se ocupan de <strong>cómo crear objetos</strong> de forma flexible y controlada. En lugar de crear objetos directamente con `new`, proporcionan mecanismos para abstraer la creación, desacoplando el cliente de las clases concretas. Su objetivo principal es permitir que el código sea más flexible, mantenible y fácil de cambiar cuando las necesidades de creación de objetos evolucionan.
              </p>

              <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '2rem', textAlign: 'justify' }}>
                Estos patrones son especialmente útiles en sistemas que necesitan crear objetos de múltiples tipos sin conocer exactamente cuál será el tipo concreto en tiempo de compilación. Algunos ejemplos incluyen aplicaciones que requieren instancias únicas globales (como conexiones a bases de datos o loggers), construcción de objetos complejos paso a paso, o la capacidad de clonar objetos existentes para evitar costosas operaciones de inicialización. Con los patrones creacionales, tu código cliente se vuelve independiente de los detalles de cómo se crean los objetos, permitiendo agregar nuevos tipos sin modificar el código existente.
              </p>

              <div style={{ display: 'flex', gap: '1.2rem', marginBottom: '2rem', borderBottom: '1px solid #2196F3', paddingBottom: '1.2rem', paddingLeft: '1.5rem', paddingRight: '1.5rem', paddingTop: '1.2rem', flexWrap: 'wrap', backgroundColor: '#f0f8ff', borderRadius: '4px', justifyContent: 'center' }}>
                {['Singleton', 'Factory', 'Builder', 'Abstract Factory', 'Prototype'].map((pattern, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveCreationalPattern(idx)}
                    style={{
                      padding: '0.5rem 1rem',
                      backgroundColor: 'transparent',
                      color: activeCreationalPattern === idx ? '#2196F3' : '#333',
                      border: 'none',
                      borderBottom: activeCreationalPattern === idx ? '2px solid #2196F3' : 'none',
                      cursor: 'pointer',
                      fontWeight: '600',
                      fontSize: '1.05rem',
                      transition: 'all 0.3s ease'
                    }}
                  >
                    {pattern}
                  </button>
                ))}
              </div>

              {activeCreationalPattern === 0 && (
              <>
              <h4 style={{ fontSize: '1.3rem', fontWeight: '700', marginTop: '2rem', marginBottom: '1rem', color: '#2196F3' }}>1. Singleton</h4>
            <p style={{ fontSize: "1.1rem", lineHeight: "1.7", marginBottom: '1rem' }}>El patrón Singleton asegura que una clase tenga <strong>solo una instancia única</strong> en toda la aplicación, accesible globalmente. Esto es especialmente útil cuando necesitas un objeto global pero solo quieres que exista una copia. Por ejemplo, si creas `DatabaseConnection.getInstance()` dos veces, <strong>siempre obtienes la MISMA instancia</strong> — no hay copia. Esto garantiza que todos los accesos a la conexión de base de datos compartan el mismo estado y los mismos recursos.</p>

            <h5 style={{ marginTop: '1.5rem', fontSize: '1.2rem', fontWeight: '600', color: '#2c3e50' }}>El Problema: Múltiples Instancias Son Ineficientes</h5>
            <p>
              Una conexión a base de datos es costosa. Si cada vez que necesitas usarla haces `new DatabaseConnection()`, crearás múltiples conexiones innecesarias:
            </p>
            <ul style={{ fontSize: '0.95rem' }}>
              <li>❌ `DatabaseConnection conn1 = new DatabaseConnection();` - Crea conexión</li>
              <li>❌ `DatabaseConnection conn2 = new DatabaseConnection();` - ¡Crea OTRA conexión!</li>
              <li>❌ Ahora tienes 2 conexiones abiertas = desperdicio de recursos</li>
              <li>✅ CON SINGLETON: `DatabaseConnection conn = DatabaseConnection.getInstance();` - Siempre la misma</li>
            </ul>

            <h5 style={{ marginTop: '1.5rem', fontSize: '1.2rem', fontWeight: '600', color: '#2c3e50' }}>Ventajas</h5>
            <ul style={{ fontSize: '0.95rem' }}>
              <li><strong>Control de Recursos:</strong> Solo existe una conexión, una instancia de logger, un gestor de config.</li>
              <li><strong>Acceso Global:</strong> Desde cualquier parte del código puedes llamar `getInstance()` y obtener la misma.</li>
              <li><strong>Eficiencia:</strong> No creas duplicados costosos.</li>
              <li><strong>Sincronización:</strong> Un estado único, no 10 copias con diferentes estados.</li>
            </ul>

            <h5 style={{ marginTop: '1.5rem', fontSize: '1.2rem', fontWeight: '600', color: '#2c3e50' }}>Desventajas (¡Importante!)</h5>
            <ul style={{ fontSize: '0.95rem' }}>
              <li><strong>Testing difícil:</strong> Es complicado hacer mock de un Singleton.</li>
              <li><strong>Acoplamiento oculto:</strong> El código se acopla a la clase globalmente.</li>
              <li><strong>Compartir estado:</strong> Todos usan el mismo objeto, cambios afectan a todos.</li>
            </ul>

            <div style={{ margin: '1.5rem 0' }}>
              <h5 style={{ marginTop: 0, fontSize: '1.2rem', fontWeight: '600', color: '#2c3e50' }}>Diagrama UML:</h5>
              <DiagramSingleton />
            </div>

            <h5 style={{ marginTop: '1.5rem', fontSize: '1.2rem', fontWeight: '600', color: '#2c3e50' }}>Cuándo Usar Singleton</h5>
            <ul style={{ fontSize: '0.95rem' }}>
              <li><strong>Conexiones a BD:</strong> Una sola conexión compartida por toda la app.</li>
              <li><strong>Logger:</strong> Un único logger para registrar eventos.</li>
              <li><strong>Configuración Global:</strong> Un único objeto que guarda settings de la app.</li>
              <li><strong>Connection Pool:</strong> Un gestor de conexiones único.</li>
            </ul>
            <CodeBlock
              language="java"
              code={`// ❌ SIN PATRÓN: Múltiples instancias
Logger log1 = new Logger();
Logger log2 = new Logger();
// log1 y log2 son DIFERENTES objetos

// ✅ CON PATRÓN SINGLETON
public class LoggerSingleton {
    private static LoggerSingleton instancia;

    private LoggerSingleton() {  // Constructor PRIVADO
    }

    public static LoggerSingleton getInstance() {
        if (instancia == null) {
            instancia = new LoggerSingleton();
        }
        return instancia;
    }

    public void log(String mensaje) {
        System.out.println("[LOG] " + mensaje);
    }
}

// Uso:
LoggerSingleton log1 = LoggerSingleton.getInstance();
LoggerSingleton log2 = LoggerSingleton.getInstance();
System.out.println(log1 == log2);  // true - ¡MISMA INSTANCIA!`}
            />
              </>
              )}

              {activeCreationalPattern === 1 && (
              <>
            <h4 style={{ fontSize: '1.3rem', fontWeight: '700', marginTop: '2rem', marginBottom: '1rem', color: '#2196F3' }}>2. Factory Method</h4>
            <p style={{ fontSize: "1.1rem", lineHeight: "1.7", marginBottom: '1rem' }}>
              En lugar de usar directamente `new NombreExacto()` en tu código, el patrón Factory te permite delegar la decisión de qué clase instanciar a una <strong>Factory que decide automáticamente qué tipo crear</strong> basándose en parámetros que le pases. Por ejemplo, tu código no necesita saber si debe crear un "TransportePorTierra", "TransportePorAire" o "TransportePorMar" — simplemente le dices a la Factory el tipo de transporte que necesitas, y ella se encarga de crear la instancia correcta. De esta forma, tu código cliente permanece completamente independiente de los detalles de implementación.
            </p>

            <h5 style={{ marginTop: '1.5rem', fontSize: '1.2rem', fontWeight: '600', color: '#2c3e50' }}>El Problema: Acoplamiento Fuerte</h5>
            <p>Sin Factory:</p>
            <ul style={{ fontSize: '0.95rem' }}>
              <li>❌ Si creas `new TransportePorTierra()`, tu código depende de esa clase específica.</li>
              <li>❌ Si luego añades `TransportePorFerrocarril`, tienes que cambiar TODO tu código que crea transportes.</li>
              <li>❌ Tu código cliente está acoplado a las clases concretas.</li>
            </ul>

            <p style={{ marginTop: '1rem' }}>Con Factory:</p>
            <ul style={{ fontSize: '0.95rem' }}>
              <li>✅ Tu código solo llama: `Transporte t = TransporteFactory.crear("tierra")`</li>
              <li>✅ La Factory devuelve el tipo correcto sin que el cliente lo sepa.</li>
              <li>✅ Si añades nuevos tipos, solo cambias la Factory, no el código cliente.</li>
            </ul>

            <h5 style={{ marginTop: '1.5rem', fontSize: '1.2rem', fontWeight: '600', color: '#2c3e50' }}>Ventajas</h5>
            <ul style={{ fontSize: '0.95rem' }}>
              <li><strong>Desacoplamiento:</strong> El cliente no conoce las clases concretas, solo la interfaz.</li>
              <li><strong>Centralización:</strong> Toda la lógica de "qué crear" está en un solo lugar.</li>
              <li><strong>Extensibilidad:</strong> Agregar nuevos tipos es fácil, no rompe el código existente.</li>
              <li><strong>Mantenibilidad:</strong> Cambios en cómo se crean los objetos afectan un solo lugar.</li>
            </ul>

            <div style={{ margin: '1.5rem 0' }}>
              <h5 style={{ marginTop: 0, fontSize: '1.2rem', fontWeight: '600', color: '#2c3e50' }}>Diagrama UML:</h5>
              <DiagramFactory />
            </div>

            <h5 style={{ marginTop: '1.5rem', fontSize: '1.2rem', fontWeight: '600', color: '#2c3e50' }}>Ejemplo Real</h5>
            <p>
              Imagina una app de ecommerce que soporta múltiples pasarelas de pago (PayPal, Stripe, MercadoPago):
            </p>
            <ul style={{ fontSize: '0.95rem' }}>
              <li>Sin Factory: `if (tipo.equals("paypal")) return new PayPalGateway(); else if (tipo.equals("stripe")) ...` - Caos.</li>
              <li>Con Factory: `PagoGateway gateway = PagoFactory.crear("paypal")` - Limpio y escalable.</li>
            </ul>

            <CodeBlock
              language="java"
              code={`// INTERFAZ: Abstracción
public interface DatabaseConnection {
    void conectar();
    void desconectar();
    void ejecutar(String sql);
}

// IMPLEMENTACIONES: Clases concretas
public class MySQLConnection implements DatabaseConnection {
    public void conectar() { System.out.println("Conectando a MySQL..."); }
    public void desconectar() { System.out.println("Desconectando de MySQL"); }
    public void ejecutar(String sql) { System.out.println("Ejecutando en MySQL: " + sql); }
}

public class PostgresConnection implements DatabaseConnection {
    public void conectar() { System.out.println("Conectando a PostgreSQL..."); }
    public void desconectar() { System.out.println("Desconectando de PostgreSQL"); }
    public void ejecutar(String sql) { System.out.println("Ejecutando en PostgreSQL: " + sql); }
}

// FACTORY: Crea instancias
public class DatabaseConnectionFactory {
    public enum DatabaseType { MYSQL, POSTGRES, ORACLE }

    public static DatabaseConnection crearConexion(DatabaseType tipo) {
        switch (tipo) {
            case MYSQL: return new MySQLConnection();
            case POSTGRES: return new PostgresConnection();
            default: throw new IllegalArgumentException("BD no soportada: " + tipo);
        }
    }
}

// USO
DatabaseConnection conn = DatabaseConnectionFactory
    .crearConexion(DatabaseConnectionFactory.DatabaseType.POSTGRES);
conn.conectar();
conn.ejecutar("SELECT * FROM usuarios");`}
            />
              </>
              )}

              {activeCreationalPattern === 2 && (
              <>
            <h4 style={{ fontSize: '1.3rem', fontWeight: '700', marginTop: '2rem', marginBottom: '1rem', color: '#2196F3' }}>3. Builder</h4>
            <p style={{ fontSize: "1.1rem", lineHeight: "1.7", marginBottom: '1rem' }}>El patrón Builder te permite construir objetos complejos <strong>paso a paso</strong> de forma legible, sin necesidad de un constructor gigante con 10 parámetros que nadie entiende. En lugar de escribir `new Usuario("Juan", "juan@test.com", 25, "123456789", "Madrid", ...)` donde pierdes la pista de qué parámetro es cuál, usas un Builder que te permite ir configurando el objeto de manera clara y explícita, solo incluyendo los campos que realmente necesitas.</p>
            <div style={{
              backgroundColor: '#f5f5f5',
              padding: '1rem',
              borderRadius: '4px',
              margin: '0.5rem 0',
              fontFamily: 'monospace',
              fontSize: '0.9rem'
            }}>
              <code>
                new Usuario.UsuarioBuilder()<br/>
                &nbsp;&nbsp;.nombre("Juan")<br/>
                &nbsp;&nbsp;.email("juan@test.com")<br/>
                &nbsp;&nbsp;.edad(25)<br/>
                &nbsp;&nbsp;.telefono("123456789")<br/>
                &nbsp;&nbsp;.build()
              </code>
            </div>

            <h5 style={{ marginTop: '1.5rem', fontSize: '1.2rem', fontWeight: '600', color: '#2c3e50' }}>El Problema: Constructor con Muchos Parámetros</h5>
            <p>
              Cuando un objeto tiene muchas propiedades, el constructor se vuelve ilegible:
            </p>
            <ul style={{ fontSize: '0.95rem' }}>
              <li>❌ `new Usuario("Juan", "juan@example.com", 25, "123456789", "Madrid", "Calle Principal 1", "6789012345", null, true, false)` - ¿Qué parámetro es cuál?</li>
              <li>✅ Builder te permite ser explícito: `.nombre("Juan").email(...).edad(...).build()`</li>
            </ul>

            <h5 style={{ marginTop: '1.5rem', fontSize: '1.2rem', fontWeight: '600', color: '#2c3e50' }}>Ventajas</h5>
            <ul style={{ fontSize: '0.95rem' }}>
              <li><strong>Legibilidad:</strong> El código que construye el objeto es autodocumentado.</li>
              <li><strong>Flexibilidad:</strong> No necesitas todos los parámetros. Dejas los opcionales vacíos.</li>
              <li><strong>Seguridad:</strong> Validas los datos mientras construyes, no después de crear.</li>
              <li><strong>Objetos Inmutables:</strong> Una vez hecho `.build()`, el objeto no puede cambiar.</li>
            </ul>

            <div style={{ margin: '1.5rem 0' }}>
              <h5 style={{ marginTop: 0, fontSize: '1.2rem', fontWeight: '600', color: '#2c3e50' }}>Diagrama UML:</h5>
              <DiagramBuilder />
            </div>

            <h5 style={{ marginTop: '1.5rem', fontSize: '1.2rem', fontWeight: '600', color: '#2c3e50' }}>Cuándo Usar Builder</h5>
            <ul style={{ fontSize: '0.95rem' }}>
              <li>Objetos con 5+ atributos</li>
              <li>Muchos atributos opcionales</li>
              <li>Construcción paso a paso importante para lógica del dominio</li>
              <li>Necesitas validación gradual mientras construyes</li>
            </ul>

            <CodeBlock
              language="java"
              code={`public class Usuario {
  private String nombre;
  private String email;
  private int edad;
  private String telefono;
  private String direccion;

  // Constructor privado
  private Usuario(UsuarioBuilder builder) {
    this.nombre = builder.nombre;
    this.email = builder.email;
    this.edad = builder.edad;
    this.telefono = builder.telefono;
    this.direccion = builder.direccion;
  }

  // Builder interno
  public static class UsuarioBuilder {
    private String nombre;
    private String email;
    private int edad;
    private String telefono;
    private String direccion;

    public UsuarioBuilder nombre(String nombre) {
      this.nombre = nombre;
      return this;
    }

    public UsuarioBuilder email(String email) {
      this.email = email;
      return this;
    }

    public UsuarioBuilder edad(int edad) {
      this.edad = edad;
      return this;
    }

    public UsuarioBuilder telefono(String telefono) {
      this.telefono = telefono;
      return this;
    }

    public UsuarioBuilder direccion(String direccion) {
      this.direccion = direccion;
      return this;
    }

    public Usuario build() {
      return new Usuario(this);
    }
  }
}

// Uso: claro y legible
Usuario usuario = new Usuario.UsuarioBuilder()
  .nombre("Juan")
  .email("juan@example.com")
  .edad(25)
  .telefono("123456789")
  .build();`}
            />
              </>
              )}

              {activeCreationalPattern === 3 && (
              <>
            <h4 style={{ fontSize: '1.3rem', fontWeight: '700', marginTop: '2rem', marginBottom: '1rem', color: '#2196F3' }}>4. Abstract Factory</h4>
            <p style={{ fontSize: "1.1rem", lineHeight: "1.7", marginBottom: '1rem' }}>El patrón Abstract Factory te permite crear <strong>familias completas de objetos relacionados</strong> juntos, asegurando coherencia entre los elementos. Por ejemplo, si necesitas crear una interfaz gráfica, una `WindowsFactory` crear un BotonWindows + CampoTextoWindows + VentanaWindows (todos consistentes con el estilo de Windows), mientras que una `MacFactory` crea un BotonMac + CampoTextoMac + VentanaMac (todos con el estilo Mac). Esto garantiza que nunca termines con un botón Windows junto a un campo de texto Mac, que se vería inconsistente.</p>
            <CodeBlock
              language="java"
              code={`// Familia de botones
public interface Boton {
  void click();
}

public class BotonWindows implements Boton {
  @Override
  public void click() {
    System.out.println("Click Windows");
  }
}

public class BotonMac implements Boton {
  @Override
  public void click() {
    System.out.println("Click Mac");
  }
}

// Familia de campos de texto
public interface CampoTexto {
  void escribir(String texto);
}

public class CampoTextoWindows implements CampoTexto {
  @Override
  public void escribir(String texto) {
    System.out.println("Escribiendo Windows: " + texto);
  }
}

// Factory que crea familias completas
public interface UIFactory {
  Boton crearBoton();
  CampoTexto crearCampoTexto();
}

public class WindowsFactory implements UIFactory {
  @Override
  public Boton crearBoton() {
    return new BotonWindows();
  }

  @Override
  public CampoTexto crearCampoTexto() {
    return new CampoTextoWindows();
  }
}

// Uso
UIFactory factory = new WindowsFactory();
Boton boton = factory.crearBoton();
CampoTexto campo = factory.crearCampoTexto();`}
            />
              </>
              )}

              {activeCreationalPattern === 4 && (
              <>
            <h4 style={{ fontSize: '1.3rem', fontWeight: '700', marginTop: '2rem', marginBottom: '1rem', color: '#2196F3' }}>5. Prototype (Prototipo)</h4>
            <p style={{ fontSize: "1.1rem", lineHeight: "1.7", marginBottom: '1rem' }}>El patrón Prototype te permite crear nuevos objetos <strong>copiando un objeto existente</strong> en lugar de construirlos desde cero. Esto es especialmente útil cuando la creación de un objeto es costosa o compleja. Por ejemplo, en Photoshop, en lugar de crear una nueva capa desde cero, <strong>clonas una capa existente</strong> que ya tiene propiedades, estilos y contenido configurados. Así ahorras tiempo y no tienes que repetir todo el trabajo. El objeto clonado es completamente independiente del original, por lo que puedes modificarlo sin afectar al original.</p>

            <h5 style={{ marginTop: '1.5rem', fontSize: '1.2rem', fontWeight: '600', color: '#2c3e50' }}>¿Por Qué Usar Prototype?</h5>
            <ul style={{ fontSize: '0.95rem' }}>
              <li><strong>Eficiencia:</strong> Si un objeto toma mucho tiempo crearse (conexión a BD, cálculos complejos), clonarlo es más rápido.</li>
              <li><strong>Independencia:</strong> Cambiar la copia NO afecta el original. Son totalmente independientes.</li>
              <li><strong>Flexibilidad:</strong> El cliente no necesita saber la clase exacta que crea, solo que puede clonarla.</li>
              <li><strong>Configuración:</strong> Clonas un objeto "plantilla" ya configurado y lo adaptas sin tocar el original.</li>
            </ul>

            <h5 style={{ marginTop: '1.5rem', fontSize: '1.2rem', fontWeight: '600', color: '#2c3e50' }}>Problema Real</h5>
            <p style={{ fontSize: "1.1rem", lineHeight: "1.7" }}>
              Imagina que tienes un `Documento` con 50 páginas, fuentes, colores y estilos personalizados.
              Si quieres crear otro documento similar:
            </p>
            <ul style={{ fontSize: '0.95rem' }}>
              <li>❌ SIN PATRÓN: Crear todo de nuevo = lento y propenso a errores</li>
              <li>✅ CON PATRÓN: Clonas el documento existente = instantáneo y exactamente igual</li>
            </ul>

            <div style={{ margin: '1.5rem 0' }}>
              <h5 style={{ marginTop: 0, fontSize: '1.2rem', fontWeight: '600', color: '#2c3e50' }}>Diagrama UML:</h5>
              <DiagramPrototype />
            </div>

            <h5 style={{ marginTop: '1.5rem', fontSize: '1.2rem', fontWeight: '600', color: '#2c3e50' }}>Cuándo Usar Este Patrón</h5>
            <p style={{ fontSize: "1.1rem", lineHeight: "1.7" }}>
              <strong>Uso 1 - Copiar objetos costosos:</strong> Bases de datos, conexiones de red, cálculos pesados. Clonar es más rápido que reconstruir.<br/>
              <strong>Uso 2 - Plantillas:</strong> Tienes un objeto "plantilla" y creas variantes clonando y modificando.<br/>
              <strong>Uso 3 - Undo/Redo:</strong> Guardas un clon del estado anterior. Si el usuario cancela, restauras desde el clon.<br/>
              <strong>Uso 4 - Caché:</strong> Copias objetos ya existentes de un registro sin pedir la creación nuevamente.
            </p>
            <CodeBlock
              language="java"
              code={`public interface Prototype {
  Prototype clonar();
}

public class Usuario implements Prototype {
  private String nombre;
  private String email;
  private int edad;

  public Usuario(String nombre, String email, int edad) {
    this.nombre = nombre;
    this.email = email;
    this.edad = edad;
  }

  // Constructor copia
  private Usuario(Usuario otro) {
    this.nombre = otro.nombre;
    this.email = otro.email;
    this.edad = otro.edad;
  }

  @Override
  public Prototype clonar() {
    return new Usuario(this);
  }

  public void setNombre(String nombre) {
    this.nombre = nombre;
  }

  @Override
  public String toString() {
    return "Usuario{" +
      "nombre='" + nombre + '\'' +
      ", email='" + email + '\'' +
      ", edad=" + edad +
      '}';
  }
}

// Uso
Usuario usuario1 = new Usuario("Juan", "juan@example.com", 25);
Usuario usuario2 = (Usuario) usuario1.clonar();

usuario2.setNombre("María");

System.out.println(usuario1);  // Juan
System.out.println(usuario2);  // María (copia independiente)`}
            />
              </>
              )}
            </>
          )}

          {activeCategory === 1 && (
            <>
              <h2 style={{ textAlign: 'center', fontSize: '2rem', color: '#9C27B0', marginBottom: '2rem' }}>Estructurales</h2>

              <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1.5rem', textAlign: 'justify' }}>
                Los patrones <strong>Estructurales</strong> se ocupan de <strong>cómo organizar relaciones entre clases y objetos</strong> para componer estructuras más grandes. Ayudan a simplificar la composición mediante herencia y composición, permitiendo crear nuevas funcionalidades sin necesidad de modificar código existente. Estos patrones son especialmente útiles cuando necesitas adaptar interfaces incompatibles, agregar responsabilidades dinámicamente a objetos, simplificar el acceso a sistemas complejos, o controlar cómo se accede a determinados objetos.
              </p>

              <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '2rem', textAlign: 'justify' }}>
                Con los patrones estructurales, puedes crear arquitecturas más flexibles y mantenibles que eviten el acoplamiento fuerte entre componentes. En lugar de modificar clases existentes cada vez que necesitas una nueva funcionalidad, estos patrones te permiten envolver, adaptar o combinar objetos de formas nuevas sin tocar el código original. Esto resulta en sistemas más resilientes y fáciles de escalar.
              </p>

              <div style={{ display: 'flex', gap: '0.8rem', marginBottom: '2rem', borderBottom: '1px solid #9C27B0', paddingBottom: '1.2rem', paddingLeft: '1.5rem', paddingRight: '1.5rem', paddingTop: '1.2rem', flexWrap: 'wrap', backgroundColor: '#f3e5f5', borderRadius: '4px', justifyContent: 'center' }}>
                {['Adapter', 'Decorator', 'Facade', 'Proxy', 'Bridge', 'Composite', 'Flyweight'].map((pattern, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveStructuralPattern(idx)}
                    style={{
                      padding: '0.5rem 1rem',
                      backgroundColor: 'transparent',
                      color: activeStructuralPattern === idx ? '#9C27B0' : '#333',
                      border: 'none',
                      borderBottom: activeStructuralPattern === idx ? '2px solid #9C27B0' : 'none',
                      cursor: 'pointer',
                      fontWeight: '600',
                      fontSize: '1.05rem',
                      transition: 'all 0.3s ease'
                    }}
                  >
                    {pattern}
                  </button>
                ))}
              </div>

            <h4 style={{ fontSize: '1.3rem', fontWeight: '700', marginTop: '2rem', marginBottom: '1rem', color: '#9C27B0' }}>1. Adapter (Adaptador)</h4>
            <p style={{ fontSize: "1.1rem", lineHeight: "1.7", marginBottom: '1rem' }}>El patrón Adapter te permite hacer <strong>compatible una interfaz incompatible</strong> con otra existente. Por ejemplo, tienes una clase VLC que usa `.play()`, pero tu sistema espera `.reproducir()`. En lugar de modificar VLC (que es de una librería externa), creas un Adapter que traduce una interfaz a la otra. El Adapter actúa como intermediario, recibiendo llamadas a `.reproducir()` y traduciéndolas internamente a `.play()`. Esto te permite usar código nuevo con librerías antiguas sin modificar ninguno de los dos.</p>
            <p>
              <strong>Problema:</strong> Hacer compatible una interfaz incompatible.
              <br/>
              <strong>Uso:</strong> Integrar librerías externas, interfaces legacy.
            </p>
            <CodeBlock
              language="java"
              code={`// Interfaz que quieres usar
public interface ReproductorMusica {
  void reproducir(String cancion);
}

// Clase nueva (incompatible)
public class ReproductorVLC {
  public void play(String archivo) {
    System.out.println("VLC tocando: " + archivo);
  }
}

// Adapter: hace compatible
public class AdapterVLC implements ReproductorMusica {
  private ReproductorVLC vlc;

  public AdapterVLC(ReproductorVLC vlc) {
    this.vlc = vlc;
  }

  @Override
  public void reproducir(String cancion) {
    // Traduce de tu interfaz a la de VLC
    vlc.play(cancion);
  }
}

// Uso: ahora es compatible
ReproductorVLC vlc = new ReproductorVLC();
ReproductorMusica reproductor = new AdapterVLC(vlc);
reproductor.reproducir("cancion.mp3");`}
            />

            <h4 style={{ fontSize: '1.3rem', fontWeight: '700', marginTop: '2rem', marginBottom: '1rem', color: '#9C27B0' }}>2. Decorator (Decorador)</h4>
            <p style={{ fontSize: "1.1rem", lineHeight: "1.7", marginBottom: '1rem' }}>El patrón Decorator te permite agregar funcionalidad dinámicamente <strong>envolviendo un objeto</strong> sin modificar su código. Imagina que tienes un Café base, pero quieres crear variantes: Café con leche, Café con canela, Café con leche y canela. En lugar de crear clases CaféConLeche, CaféConCanela, CaféConLecheYCanela (explosión combinatoria), usas Decorators. Cada Decorator envuelve el Café anterior y le agrega nuevas funcionalidades. Puedes componer Decorators sobre Decorators, creando combinaciones ilimitadas sin duplicar código.</p>

            <div style={{ margin: '1rem 0' }}>
              <h5 style={{ marginTop: 0, fontSize: '1.2rem', fontWeight: '600', color: '#9C27B0' }}>Diagrama UML:</h5>
              <DiagramDecorator />
            </div>

            <CodeBlock
              language="java"
              code={`public interface Cafe {
  double getCosto();
  String getDescripcion();
}

public class CafeSimple implements Cafe {
  @Override
  public double getCosto() {
    return 5.0;
  }

  @Override
  public String getDescripcion() {
    return "Café";
  }
}

// Decoradores
public abstract class CafeDecorador implements Cafe {
  protected Cafe cafe;

  public CafeDecorador(Cafe cafe) {
    this.cafe = cafe;
  }
}

public class CafeConLeche extends CafeDecorador {
  public CafeConLeche(Cafe cafe) {
    super(cafe);
  }

  @Override
  public double getCosto() {
    return cafe.getCosto() + 2.0;
  }

  @Override
  public String getDescripcion() {
    return cafe.getDescripcion() + " + Leche";
  }
}

public class CafeConCanela extends CafeDecorador {
  public CafeConCanela(Cafe cafe) {
    super(cafe);
  }

  @Override
  public double getCosto() {
    return cafe.getCosto() + 0.5;
  }

  @Override
  public String getDescripcion() {
    return cafe.getDescripcion() + " + Canela";
  }
}

// Uso: composición dinámica
Cafe cafe = new CafeSimple();
cafe = new CafeConLeche(cafe);
cafe = new CafeConCanela(cafe);

System.out.println(cafe.getDescripcion()); // Café + Leche + Canela
System.out.println(cafe.getCosto());       // 7.5`}
            />

            <h4 style={{ fontSize: '1.3rem', fontWeight: '700', marginTop: '2rem', marginBottom: '1rem', color: '#9C27B0' }}>3. Facade (Fachada)</h4>
            <p style={{ fontSize: "1.1rem", lineHeight: "1.7", marginBottom: '1rem' }}>El patrón Facade proporciona una interfaz <strong>simple para un sistema complejo</strong>. Internamente, el login requiere validar credenciales, verificar permisos, registrar la auditoría, actualizar último acceso, etc. El cliente no necesita saber nada de esto. Simplemente llama a `LoginFacade.login()` y la Facade se encarga de orquestar todos esos subsistemas internos. Facade es perfecto cuando tienes código legado complejo o múltiples clases que el cliente necesita para hacer algo simple. Facade las agrupa en una interfaz única y limpia.</p>
            <CodeBlock
              language="java"
              code={`// Subsistemas complejos
public class SistemaAutenticacion {
  public boolean validarCredenciales(String user, String pass) {
    System.out.println("Validando credenciales...");
    return true;
  }
}

public class SistemaAutorizacion {
  public boolean tienePermiso(String user, String recurso) {
    System.out.println("Verificando permisos...");
    return true;
  }
}

public class SistemaAuditoria {
  public void registrarAcceso(String user, String recurso) {
    System.out.println("Registrando acceso...");
  }
}

// Fachada: simplifica todo
public class LoginFacade {
  private SistemaAutenticacion auth = new SistemaAutenticacion();
  private SistemaAutorizacion authz = new SistemaAutorizacion();
  private SistemaAuditoria audit = new SistemaAuditoria();

  public boolean login(String user, String password, String recurso) {
    if (!auth.validarCredenciales(user, password)) {
      return false;
    }

    if (!authz.tienePermiso(user, recurso)) {
      return false;
    }

    audit.registrarAcceso(user, recurso);
    return true;
  }
}

// Uso: interfaz simple
LoginFacade login = new LoginFacade();
login.login("juan", "password123", "/admin");`}
            />

            <h4 style={{ fontSize: '1.3rem', fontWeight: '700', marginTop: '2rem', marginBottom: '1rem', color: '#9C27B0' }}>4. Proxy</h4>
            <p style={{ fontSize: "1.1rem", lineHeight: "1.7", marginBottom: '1rem' }}>El patrón Proxy te permite controlar el acceso a un objeto <strong>usando un sustituto</strong> que actúa como intermediario. Por ejemplo, cargar una imagen grande es costoso. En lugar de cargarla inmediatamente, usas un ImagenProxy que pretende ser la imagen. Cuando el cliente realmente necesita usar la imagen (por ejemplo, mostrarla), el Proxy carga ImagenReal en ese momento. Esto se llama "lazy loading" — carga perezosa. El Proxy es útil también para: controlar permisos (verificar si el usuario puede acceder), caché (si la imagen ya está en caché, no cargar de nuevo), logging (registrar accesos), o limitar cantidad de instancias.</p>
            <CodeBlock
              language="java"
              code={`public interface Imagen {
  void mostrar();
}

public class ImagenReal implements Imagen {
  private String nombre;

  public ImagenReal(String nombre) {
    this.nombre = nombre;
    cargarImagen();  // Operación costosa
  }

  private void cargarImagen() {
    System.out.println("Cargando imagen pesada: " + nombre);
  }

  @Override
  public void mostrar() {
    System.out.println("Mostrando imagen: " + nombre);
  }
}

// Proxy: retrasa la carga
public class ImagenProxy implements Imagen {
  private String nombre;
  private ImagenReal imagen;

  public ImagenProxy(String nombre) {
    this.nombre = nombre;
    // No carga la imagen aún
  }

  @Override
  public void mostrar() {
    if (imagen == null) {
      imagen = new ImagenReal(nombre);  // Carga cuando se necesita
    }
    imagen.mostrar();
  }
}

// Uso
Imagen imagen = new ImagenProxy("foto.jpg");
// Aún no cargada
imagen.mostrar();  // Ahora sí se carga`}
            />

            <h4 style={{ fontSize: '1.3rem', fontWeight: '700', marginTop: '2rem', marginBottom: '1rem', color: '#9C27B0' }}>5. Composite (Composición)</h4>
            <p style={{ fontSize: "1.1rem", lineHeight: "1.7", marginBottom: '1rem' }}>El patrón Composite te permite componer objetos en <strong>estructuras de árbol</strong> para representar jerarquías parte-todo. Una Carpeta contiene Archivos y otras Carpetas. Lo poderoso es que puedes tratar ambas uniformemente — una operación como "obtener tamaño" funciona igual en Carpetas y Archivos, sin necesidad de verificar el tipo. Composite es ideal para sistemas de archivos, menús anidados, árboles UI, organigramas empresariales, o cualquier estructura jerárquica donde contenedores pueden contener tanto elementos finales como otros contenedores.</p>
            <p>
              <strong>Problema:</strong> Trabajar con estructuras jerárquicas sin distinguir entre contenedores y hojas.
              <br/>
              <strong>Uso:</strong> Sistemas de archivos, menús anidados, árbol de componentes UI.
            </p>
            <CodeBlock
              language="java"
              code={`// Interfaz común
public interface Componente {
  void mostrar();
  void agregar(Componente comp);
  void eliminar(Componente comp);
}

// Hoja: no contiene otros
public class Archivo implements Componente {
  private String nombre;

  public Archivo(String nombre) {
    this.nombre = nombre;
  }

  @Override
  public void mostrar() {
    System.out.println("Archivo: " + nombre);
  }

  @Override
  public void agregar(Componente comp) {
    // Los archivos no pueden contener nada
  }

  @Override
  public void eliminar(Componente comp) {
    // Los archivos no pueden contener nada
  }
}

// Contenedor: puede contener otros
public class Carpeta implements Componente {
  private String nombre;
  private List<Componente> componentes = new ArrayList<>();

  public Carpeta(String nombre) {
    this.nombre = nombre;
  }

  @Override
  public void agregar(Componente comp) {
    componentes.add(comp);
  }

  @Override
  public void eliminar(Componente comp) {
    componentes.remove(comp);
  }

  @Override
  public void mostrar() {
    System.out.println("Carpeta: " + nombre);
    for (Componente comp : componentes) {
      comp.mostrar();  // Recursión
    }
  }
}

// Uso: mismo trato para carpetas y archivos
Carpeta raiz = new Carpeta("Documentos");
raiz.agregar(new Archivo("CV.pdf"));
Carpeta subCarpeta = new Carpeta("Proyectos");
subCarpeta.agregar(new Archivo("Proyecto1.java"));
raiz.agregar(subCarpeta);

raiz.mostrar();  // Muestra la jerarquía completa`}
            />

            <h4 style={{ fontSize: '1.3rem', fontWeight: '700', marginTop: '2rem', marginBottom: '1rem', color: '#9C27B0' }}>6. Bridge (Puente)</h4>
            <p style={{ fontSize: "1.1rem", lineHeight: "1.7", marginBottom: '1rem' }}>El patrón Bridge te permite separar <strong>abstracción de implementación</strong> para que ambas puedan variar independientemente. Imagina que tienes un ControlRemoto (abstracción) que debe funcionar con diferentes TV (implementación: LG, Samsung, Sony). En lugar de crear ControlRemotoLG, ControlRemotoSamsung, etc. (explosión de clases), usas Bridge. El ControlRemoto contiene una referencia a una interfaz TV abstracta. Cuando necesitas soportar una nueva TV, solo implementas la interfaz TV, sin modificar ControlRemoto. Abstracción e implementación evolucionan independientemente.</p>
            <p>
              <strong>Problema:</strong> Una clase crece con múltiples variantes que deberían ser independientes.
              <br/>
              <strong>Uso:</strong> Desacoplar jerarquías de clases, múltiples plataformas.
            </p>
            <CodeBlock
              language="java"
              code={`// Implementación: diferentes TV
public interface TV {
  void encender();
  void apagar();
  void cambiarCanal(int canal);
}

public class TVLG implements TV {
  @Override
  public void encender() {
    System.out.println("TV LG encendida");
  }

  @Override
  public void apagar() {
    System.out.println("TV LG apagada");
  }

  @Override
  public void cambiarCanal(int canal) {
    System.out.println("LG cambiando a canal " + canal);
  }
}

public class TVSamsung implements TV {
  @Override
  public void encender() {
    System.out.println("TV Samsung encendida");
  }

  @Override
  public void apagar() {
    System.out.println("TV Samsung apagada");
  }

  @Override
  public void cambiarCanal(int canal) {
    System.out.println("Samsung cambiando a canal " + canal);
  }
}

// Abstracción: Control remoto
public class ControlRemoto {
  protected TV tv;

  public ControlRemoto(TV tv) {
    this.tv = tv;
  }

  public void encender() {
    tv.encender();
  }

  public void apagar() {
    tv.apagar();
  }

  public void cambiarCanal(int canal) {
    tv.cambiarCanal(canal);
  }
}

// Extensión: control remoto inteligente
public class ControlIntelligente extends ControlRemoto {
  public ControlIntelligente(TV tv) {
    super(tv);
  }

  public void cambiarCanalesRapido(int... canales) {
    for (int canal : canales) {
      tv.cambiarCanal(canal);
    }
  }
}

// Uso: abstracción y implementación varían independientemente
TV lg = new TVLG();
ControlRemoto control = new ControlRemoto(lg);
control.encender();

TV samsung = new TVSamsung();
ControlIntelligente inteligente = new ControlIntelligente(samsung);
inteligente.encender();`}
            />

            <h4 style={{ fontSize: '1.3rem', fontWeight: '700', marginTop: '2rem', marginBottom: '1rem', color: '#9C27B0' }}>7. Flyweight (Peso Ligero)</h4>
            <p style={{ fontSize: "1.1rem", lineHeight: "1.7", marginBottom: '1rem' }}>El patrón Flyweight te permite compartir datos comunes entre múltiples objetos para <strong>reducir memoria</strong> drásticamente. Imagina que tienes 1000 árboles en un videojuego. Sin Flyweight, cada árbol guarda su propia textura (1000 copias = millones de bytes). Con Flyweight, todos los árboles comparten la misma textura (1 copia), y cada árbol solo almacena sus datos únicos como posición y escala. De esta forma, el juego puede renderizar millones de partículas sin agotar la RAM.</p>

            <h5 style={{ marginTop: '1.5rem', fontSize: '1.2rem', fontWeight: '600', color: '#2c3e50' }}>El Problema: Demasiados Objetos = Demasiada Memoria</h5>
            <ul style={{ fontSize: '0.95rem' }}>
              <li>❌ 1000 árboles, cada uno con su propia textura (100KB cada una) = 100MB</li>
              <li>✅ CON FLYWEIGHT: 1 textura compartida + 1000 referencias = ~1MB</li>
            </ul>

            <h5 style={{ marginTop: '1.5rem', fontSize: '1.2rem', fontWeight: '600', color: '#2c3e50' }}>Cuándo Usar Flyweight</h5>
            <ul style={{ fontSize: '0.95rem' }}>
              <li><strong>Videojuegos:</strong> Miles de árboles, partículas, enemigos con datos compartidos</li>
              <li><strong>Editores de texto:</strong> Millones de caracteres comparten la misma fuente</li>
              <li><strong>Pools de conexiones:</strong> Reutilizar conexiones en lugar de crear nuevas</li>
              <li><strong>Caches:</strong> Objetos costosos compartidos entre usuarios</li>
            </ul>
            <CodeBlock
              language="java"
              code={`// Datos compartidos (intrínsecos)
public class TexturArbol {
  private String imagen;

  public TexturArbol(String imagen) {
    this.imagen = imagen;
  }

  public void renderizar() {
    System.out.println("Renderizando: " + imagen);
  }
}

// Árbol con datos individuales (extrínsecos)
public class Arbol {
  private TexturArbol textura;
  private float x, y;  // Posición única

  public Arbol(TexturArbol textura, float x, float y) {
    this.textura = textura;
    this.x = x;
    this.y = y;
  }

  public void dibujar() {
    System.out.println("Árbol en (" + x + ", " + y + ")");
    textura.renderizar();
  }
}

// Factory: reutiliza texturas
public class TexturaFactory {
  private static Map<String, TexturArbol> texturas = new HashMap<>();

  public static TexturArbol obtenerTextura(String tipo) {
    if (!texturas.containsKey(tipo)) {
      texturas.put(tipo, new TexturArbol(tipo));
    }
    return texturas.get(tipo);
  }
}

// Uso: 1000 árboles, 1 textura compartida
for (int i = 0; i < 1000; i++) {
  TexturArbol textura = TexturaFactory.obtenerTextura("arbol.png");
  Arbol arbol = new Arbol(textura, i * 10, i * 10);
  arbol.dibujar();
}`}
            />
            </>
          )}

          {activeCategory === 2 && (
            <>
              <h2 style={{ textAlign: 'center', fontSize: '2rem', color: '#4CAF50', marginBottom: '2rem' }}>Comportamentales</h2>

              <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1.5rem', textAlign: 'justify' }}>
                Los patrones <strong>Comportamentales</strong> se ocupan de <strong>cómo los objetos interactúan y colaboran</strong> entre sí. Definen patrones de comunicación y distribución de responsabilidades entre objetos, permitiendo que la colaboración sea flexible, mantenible y fácil de cambiar en tiempo de ejecución. Estos patrones son especialmente útiles cuando necesitas cambiar algoritmos dinámicamente, notificar múltiples observadores de cambios, o distribuir responsabilidades de forma clara sin crear acoplamiento fuerte.
              </p>

              <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '2rem', textAlign: 'justify' }}>
                Con los patrones comportamentales, tu código cliente no necesita conocer los detalles de cómo los objetos colaboran internamente. Simplemente definen contratos que permiten que los objetos interactúen de múltiples formas sin modificar las clases existentes. Esto resulta en sistemas más resilientes a cambios, donde agregar nuevos comportamientos no requiere tocar código que ya funciona.
              </p>

              <div style={{ display: 'flex', gap: '0.8rem', marginBottom: '2rem', borderBottom: '1px solid #4CAF50', paddingBottom: '1.2rem', paddingLeft: '1.5rem', paddingRight: '1.5rem', paddingTop: '1.2rem', flexWrap: 'wrap', backgroundColor: '#e8f5e9', borderRadius: '4px', justifyContent: 'center' }}>
                {['Observer', 'Strategy', 'State', 'Command', 'Template Method', 'Chain', 'Iterator', 'Mediator', 'Visitor', 'Interpreter', 'Memento'].map((pattern, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveBehavioralPattern(idx)}
                    style={{
                      padding: '0.5rem 1rem',
                      backgroundColor: 'transparent',
                      color: activeBehavioralPattern === idx ? '#4CAF50' : '#333',
                      border: 'none',
                      borderBottom: activeBehavioralPattern === idx ? '2px solid #4CAF50' : 'none',
                      cursor: 'pointer',
                      fontWeight: '600',
                      fontSize: '1.05rem',
                      transition: 'all 0.3s ease'
                    }}
                  >
                    {pattern}
                  </button>
                ))}
              </div>

            {activeBehavioralPattern === 0 && (
            <>
            <h4 style={{ fontSize: '1.3rem', fontWeight: '700', marginTop: '2rem', marginBottom: '1rem', color: '#4CAF50' }}>1. Observer (Observador)</h4>
            <p style={{ fontSize: "1.1rem", lineHeight: "1.7", marginBottom: '1rem' }}>El patrón Observer te permite notificar a múltiples objetos (<strong>observadores</strong>) cuando algo cambia automáticamente, sin que tengan acoplamiento directo. Por ejemplo, un sitio web tiene muchas notificaciones: email, SMS, push notifications. En lugar de que el sistema de email llame directamente al sistema de SMS (acoplamiento horrible), ambos son observadores de un "Tema" central. Cuando ocurre un evento importante, el Tema notifica a todos sus observadores, y cada uno actúa de forma independiente. Agregar un nuevo canal de notificación no requiere modificar el código existente.</p>

            <div style={{ margin: '1rem 0' }}>
              <h5 style={{ marginTop: 0, fontSize: '1.2rem', fontWeight: '600', color: '#4CAF50' }}>Diagrama UML:</h5>
              <DiagramObserver />
            </div>

            <p>
              <strong>Problema:</strong> Notificar múltiples objetos de cambios.
              <br/>
              <strong>Uso:</strong> Eventos, publicador-suscriptor, MVC.
            </p>
            <CodeBlock
              language="java"
              code={`// Interfaz del observador
public interface Observer {
  void update(String mensaje);
}

// Observadores concretos
public class UsuarioObserver implements Observer {
  private String nombre;

  public UsuarioObserver(String nombre) {
    this.nombre = nombre;
  }

  @Override
  public void update(String mensaje) {
    System.out.println(nombre + " recibió: " + mensaje);
  }
}

// Sujeto que notifica
public class Tema {
  private List<Observer> observadores = new ArrayList<>();

  public void agregarObservador(Observer obs) {
    observadores.add(obs);
  }

  public void notificar(String mensaje) {
    for (Observer obs : observadores) {
      obs.update(mensaje);
    }
  }
}

// Uso
Tema tema = new Tema();
tema.agregarObservador(new UsuarioObserver("Juan"));
tema.agregarObservador(new UsuarioObserver("María"));

tema.notificar("¡Nuevo mensaje!");  // Todos reciben`}
              />
            </>
            )}

            {activeBehavioralPattern === 1 && (
            <>
            <h4 style={{ fontSize: '1.3rem', fontWeight: '700', marginTop: '2rem', marginBottom: '1rem', color: '#4CAF50' }}>2. Strategy (Estrategia)</h4>
            <p style={{ fontSize: "1.1rem", lineHeight: "1.7", marginBottom: '1rem' }}>El patrón Strategy te permite definir un conjunto de algoritmos <strong>intercambiables</strong> y elegir cuál usar en tiempo de ejecución. Por ejemplo, una compra en un ecommerce puede aplicar diferentes estrategias de descuento: DescuentoVIP (20%), DescuentoRegular (5%), o SinDescuento. En lugar de tener lógica condicional en todas partes (`if (tipoUsuario == VIP)`), el objeto Compra recibe una estrategia y simplemente la ejecuta. Cambiar la estrategia es trivial — solo pasas una diferente sin modificar la lógica de Compra.</p>

            <div style={{ margin: '1rem 0' }}>
              <h5 style={{ marginTop: 0, fontSize: '1.2rem', fontWeight: '600', color: '#4CAF50' }}>Diagrama UML:</h5>
              <DiagramStrategy />
            </div>

            <CodeBlock
              language="java"
              code={`// Interfaz estrategia
public interface EstrategiaDescuento {
  double aplicar(double monto);
}

// Estrategias concretas
public class DescuentoRegular implements EstrategiaDescuento {
  @Override
  public double aplicar(double monto) {
    return monto * 0.95;  // 5%
  }
}

public class DescuentoVIP implements EstrategiaDescuento {
  @Override
  public double aplicar(double monto) {
    return monto * 0.8;   // 20%
  }
}

public class SinDescuento implements EstrategiaDescuento {
  @Override
  public double aplicar(double monto) {
    return monto;
  }
}

// Contexto usa estrategia
public class Compra {
  private EstrategiaDescuento estrategia;

  public Compra(EstrategiaDescuento estrategia) {
    this.estrategia = estrategia;
  }

  public double calcularTotal(double subtotal) {
    return estrategia.aplicar(subtotal);
  }
}

// Uso
Compra compra = new Compra(new DescuentoVIP());
System.out.println(compra.calcularTotal(100));  // 80`}
            />
            </>
            )}

            {activeBehavioralPattern === 2 && (
            <>
            <h4 style={{ fontSize: '1.3rem', fontWeight: '700', marginTop: '2rem', marginBottom: '1rem', color: '#4CAF50' }}>3. State (Estado)</h4>
            <p style={{ fontSize: "1.1rem", lineHeight: "1.7", marginBottom: '1rem' }}>El patrón State te permite cambiar el comportamiento de un objeto <strong>según su estado interno</strong>. Por ejemplo, un Pedido comienza en EstadoPendiente. Cuando se confirma, cambia a EstadoConfirmado. Luego a EstadoEnvio, y finalmente EstadoEntregado. El truco es que cada estado se comporta diferente — no puedes cancelar un Pedido que ya fue enviado, pero sí uno pendiente. Sin State, tendrías `if (estado == PENDIENTE)` por todo el código. Con State, cada estado es un objeto que encapsula su comportamiento, evitando `if`s enormes y permitiendo agregar nuevos estados sin tocar código existente.</p>

            <div style={{ margin: '1rem 0' }}>
              <h5 style={{ marginTop: 0, fontSize: '1.2rem', fontWeight: '600', color: '#4CAF50' }}>Diagrama UML:</h5>
              <DiagramState />
            </div>

            <CodeBlock
              language="java"
              code={`public interface Estado {
  void siguiente(Pedido pedido);
  void obtenerInfo();
}

public class EstadoPendiente implements Estado {
  @Override
  public void siguiente(Pedido pedido) {
    pedido.setEstado(new EstadoConfirmado());
  }

  @Override
  public void obtenerInfo() {
    System.out.println("Pedido pendiente");
  }
}

public class EstadoConfirmado implements Estado {
  @Override
  public void siguiente(Pedido pedido) {
    pedido.setEstado(new EstadoEnvio());
  }

  @Override
  public void obtenerInfo() {
    System.out.println("Pedido confirmado");
  }
}

public class EstadoEnvio implements Estado {
  @Override
  public void siguiente(Pedido pedido) {
    pedido.setEstado(new EstadoEntregado());
  }

  @Override
  public void obtenerInfo() {
    System.out.println("Pedido en envío");
  }
}

public class EstadoEntregado implements Estado {
  @Override
  public void siguiente(Pedido pedido) {
    // No hay siguiente
  }

  @Override
  public void obtenerInfo() {
    System.out.println("Pedido entregado");
  }
}

public class Pedido {
  private Estado estado = new EstadoPendiente();

  public void siguiente() {
    estado.siguiente(this);
  }

  public void mostrarInfo() {
    estado.obtenerInfo();
  }

  public void setEstado(Estado estado) {
    this.estado = estado;
  }
}

// Uso
Pedido pedido = new Pedido();
pedido.mostrarInfo();    // Pedido pendiente
pedido.siguiente();
pedido.mostrarInfo();    // Pedido confirmado`}
            />
            </>
            )}

            {activeBehavioralPattern === 3 && (
            <>
            <h4 style={{ fontSize: '1.3rem', fontWeight: '700', marginTop: '2rem', marginBottom: '1rem', color: '#4CAF50' }}>4. Command (Comando)</h4>
            <p style={{ fontSize: "1.1rem", lineHeight: "1.7", marginBottom: '1rem' }}>El patrón Command te permite encapsular una solicitud como un <strong>objeto</strong> (ComandoAbrirArchivo, ComandoGuardar, etc.). Esto es poderoso porque puedes: (1) ejecutarla, (2) deshacer (`deshacer()`), (3) guardarla en un historial, (4) encolarla para ejecutar más tarde, (5) hacer redo (rehacer). Sin Command, una acción es solo código suelto. Con Command, la acción es un objeto de primera clase que puede ser pasado, almacenado, modificado. Perfectamente para implementar Undo/Redo o crear colas de trabajo.</p>
            <CodeBlock
              language="java"
              code={`public interface Comando {
  void ejecutar();
  void deshacer();
}

public class Receptor {
  public void abrirArchivo(String archivo) {
    System.out.println("Abriendo: " + archivo);
  }

  public void guardarArchivo(String archivo) {
    System.out.println("Guardando: " + archivo);
  }
}

public class ComandoAbrirArchivo implements Comando {
  private Receptor receptor;
  private String archivo;

  public ComandoAbrirArchivo(Receptor receptor, String archivo) {
    this.receptor = receptor;
    this.archivo = archivo;
  }

  @Override
  public void ejecutar() {
    receptor.abrirArchivo(archivo);
  }

  @Override
  public void deshacer() {
    System.out.println("Deshaciendo apertura de: " + archivo);
  }
}

public class Editor {
  private Stack<Comando> historial = new Stack<>();

  public void ejecutarComando(Comando cmd) {
    cmd.ejecutar();
    historial.push(cmd);
  }

  public void deshacer() {
    if (!historial.isEmpty()) {
      historial.pop().deshacer();
    }
  }
}

// Uso
Receptor receptor = new Receptor();
Editor editor = new Editor();

editor.ejecutarComando(new ComandoAbrirArchivo(receptor, "archivo.txt"));
editor.deshacer();`}
            />
            </>
            )}

            {activeBehavioralPattern === 4 && (
            <>
            <h4 style={{ fontSize: '1.3rem', fontWeight: '700', marginTop: '2rem', marginBottom: '1rem', color: '#4CAF50' }}>5. Template Method (Método Plantilla)</h4>
            <p style={{ fontSize: "1.1rem", lineHeight: "1.7", marginBottom: '1rem' }}>El patrón Template Method define la <strong>estructura de un algoritmo</strong> en una clase base, pero deja los detalles específicos a las subclases. Por ejemplo, un algoritmo de exportación siempre tiene pasos fijos: preparar datos → validar → transformar → guardar. El orden es inmutable, pero cada tipo de exportación (PDF, Excel, JSON) implementa cada paso diferente. Con Template Method, tienes control sobre el flujo en la clase base, evitando duplicación, mientras las subclases personalizan el comportamiento específico.</p>
            <CodeBlock
              language="java"
              code={`public abstract class Algoritmo {
  // Template Method: estructura fija
  public final void ejecutar() {
    paso1();
    paso2();
    paso3();
  }

  protected abstract void paso1();
  protected abstract void paso2();

  protected void paso3() {
    System.out.println("Paso 3 por defecto");
  }
}

public class AlgoritmoA extends Algoritmo {
  @Override
  protected void paso1() {
    System.out.println("A: Paso 1");
  }

  @Override
  protected void paso2() {
    System.out.println("A: Paso 2");
  }
}

public class AlgoritmoB extends Algoritmo {
  @Override
  protected void paso1() {
    System.out.println("B: Paso 1");
  }

  @Override
  protected void paso2() {
    System.out.println("B: Paso 2");
  }

  @Override
  protected void paso3() {
    System.out.println("B: Paso 3 personalizado");
  }
}

// Uso
Algoritmo algo = new AlgoritmoA();
algo.ejecutar();  // Ejecuta en orden`}
            />
            </>
            )}

            {activeBehavioralPattern === 6 && (
            <>
            <h4 style={{ fontSize: '1.3rem', fontWeight: '700', marginTop: '2rem', marginBottom: '1rem', color: '#4CAF50' }}>6. Iterator (Iterador)</h4>
            <p style={{ fontSize: "1.1rem", lineHeight: "1.7", marginBottom: '1rem' }}>El patrón Iterator te permite acceder a elementos de una colección <strong>sin exponer su estructura interna</strong>. Diferentes colecciones se organizan diferente: una Lista es array, un Árbol es jerárquico, un Grafo tiene conexiones. Sin Iterator, tu código cliente necesitaría saber cómo recorrer cada estructura (`for i..`, recursión, búsqueda en profundidad). Con Iterator, todas usan la misma interfaz simple: `next()` y `hasNext()`. El cliente recorre cualquier colección sin preocuparse de cómo está organizada internamente. Cambiar de Lista a Árbol no afecta el código cliente.</p>
            <CodeBlock
              language="java"
              code={`public interface Iterador {
  boolean hasNext();
  Object next();
}

public interface Coleccion {
  Iterador crearIterador();
}

public class Lista implements Coleccion {
  private Object[] items = new Object[10];
  private int size = 0;

  public void agregar(Object item) {
    items[size++] = item;
  }

  @Override
  public Iterador crearIterador() {
    return new ListaIterador();
  }

  private class ListaIterador implements Iterador {
    private int indice = 0;

    @Override
    public boolean hasNext() {
      return indice < size;
    }

    @Override
    public Object next() {
      return items[indice++];
    }
  }
}

// Uso
Lista lista = new Lista();
lista.agregar("A");
lista.agregar("B");
lista.agregar("C");

Iterador iterador = lista.crearIterador();
while (iterador.hasNext()) {
  System.out.println(iterador.next());
}`}
            />
            </>
            )}

            {activeBehavioralPattern === 7 && (
            <>
            <h4 style={{ fontSize: '1.3rem', fontWeight: '700', marginTop: '2rem', marginBottom: '1rem', color: '#4CAF50' }}>7. Mediator (Mediador)</h4>
            <p style={{ fontSize: "1.1rem", lineHeight: "1.7", marginBottom: '1rem' }}>El patrón Mediator centraliza la comunicación entre objetos para <strong>reducir acoplamiento</strong> drásticamente. Por ejemplo, sin Mediator, cada usuario en un chat habla directamente con todos los demás (cada usuario conoce a todos = caos). Con Mediator (una torre de control), cada usuario solo habla con el Mediator, y el Mediator distribuye los mensajes. Si un usuario se desconecta, solo el Mediator lo sabe. Agregar nuevos usuarios es trivial — no afecta a los demás. Mediator es especialmente útil en sistemas con muchas interacciones complejas como juegos multijugador, sistemas de chat, o coordinación de componentes en una UI.</p>
            <CodeBlock
              language="java"
              code={`public interface Mediador {
  void mostrarMensaje(String usuario, String mensaje);
  void registrarUsuario(Usuario usuario);
}

public class ChatMediator implements Mediador {
  private List<Usuario> usuarios = new ArrayList<>();

  @Override
  public void registrarUsuario(Usuario usuario) {
    usuarios.add(usuario);
    usuario.setMediator(this);
  }

  @Override
  public void mostrarMensaje(String usuario, String mensaje) {
    System.out.println(usuario + " dice: " + mensaje);
  }
}

public class Usuario {
  private String nombre;
  private Mediador mediador;

  public Usuario(String nombre) {
    this.nombre = nombre;
  }

  public void setMediator(Mediador mediador) {
    this.mediador = mediador;
  }

  public void hablar(String mensaje) {
    mediador.mostrarMensaje(nombre, mensaje);
  }
}

// Uso
ChatMediator mediador = new ChatMediator();
Usuario usuario1 = new Usuario("Juan");
Usuario usuario2 = new Usuario("María");

mediador.registrarUsuario(usuario1);
mediador.registrarUsuario(usuario2);

usuario1.hablar("Hola!");
usuario2.hablar("¡Hola de vuelta!");`}
            />
            </>
            )}

            {activeBehavioralPattern === 5 && (
            <>
            <h4 style={{ fontSize: '1.3rem', fontWeight: '700', marginTop: '2rem', marginBottom: '1rem', color: '#4CAF50' }}>5. Chain of Responsibility (Cadena de Responsabilidad)</h4>
            <p style={{ fontSize: "1.1rem", lineHeight: "1.7", marginBottom: '1rem' }}>El patrón Chain of Responsibility pasa una solicitud a través de una <strong>cadena de manejadores</strong> hasta que alguien la procesa. Por ejemplo, una solicitud de aumento sube por la cadena: Empleado → Gerente → Director. El Empleado revisa si tiene autoridad para aprobar. Si no, la pasa al siguiente. Cada manejador decide: "¿Puedo procesar esto?" Si sí, lo procesa y termina. Si no, pasa al siguiente. Esto permite que la lógica de autorización sea flexible — si el Gerente es promovido o removido, simplemente cambias la cadena sin tocar el código de aprobación.</p>
            <CodeBlock
              language="java"
              code={`public abstract class Manejador {
  protected Manejador siguiente;

  public void setSiguiente(Manejador siguiente) {
    this.siguiente = siguiente;
  }

  public void procesar(Solicitud solicitud) {
    if (puedoProcesar(solicitud)) {
      ejecutar(solicitud);
    } else if (siguiente != null) {
      siguiente.procesar(solicitud);
    } else {
      System.out.println("Solicitud rechazada");
    }
  }

  protected abstract boolean puedoProcesar(Solicitud solicitud);
  protected abstract void ejecutar(Solicitud solicitud);
}

public class Gerente extends Manejador {
  @Override
  protected boolean puedoProcesar(Solicitud solicitud) {
    return solicitud.monto <= 1000;
  }

  @Override
  protected void ejecutar(Solicitud solicitud) {
    System.out.println("Gerente aprobó: " + solicitud.monto);
  }
}

public class Director extends Manejador {
  @Override
  protected boolean puedoProcesar(Solicitud solicitud) {
    return solicitud.monto <= 10000;
  }

  @Override
  protected void ejecutar(Solicitud solicitud) {
    System.out.println("Director aprobó: " + solicitud.monto);
  }
}

public class Solicitud {
  int monto;
  public Solicitud(int monto) {
    this.monto = monto;
  }
}

// Uso
Manejador cadena = new Gerente();
cadena.setSiguiente(new Director());
cadena.procesar(new Solicitud(500));
cadena.procesar(new Solicitud(5000));`}
            />
            </>
            )}

            {activeBehavioralPattern === 8 && (
            <>
            <h4 style={{ fontSize: '1.3rem', fontWeight: '700', marginTop: '2rem', marginBottom: '1rem', color: '#4CAF50' }}>8. Visitor (Visitante)</h4>
            <p style={{ fontSize: "1.1rem", lineHeight: "1.7", marginBottom: '1rem' }}>El patrón Visitor te permite agregar operaciones a elementos <strong>sin modificar sus clases</strong>. Por ejemplo, tienes un árbol sintáctico de un compilador con nodos Número, Operador, Variable. Necesitas realizar múltiples operaciones: calcular valor, imprimir estructura, optimizar, traducir a código máquina. Sin Visitor, añadir cada operación requeriría modificar todas las clases de nodos (violando Open/Closed). Con Visitor, creas nuevas clases Visitante (CalculadoraVisitante, ImpresoraVisitante, etc.) sin tocar los nodos. Cada nodo solo necesita un método `aceptar(visitante)` que deja que el visitante haga su trabajo.</p>
            <CodeBlock
              language="java"
              code={`public interface Visitante {
  void visitar(Circulo circulo);
  void visitar(Cuadrado cuadrado);
}

public interface Figura {
  void aceptar(Visitante visitante);
}

public class Circulo implements Figura {
  public double radio = 5;

  @Override
  public void aceptar(Visitante visitante) {
    visitante.visitar(this);
  }
}

public class Cuadrado implements Figura {
  public double lado = 4;

  @Override
  public void aceptar(Visitante visitante) {
    visitante.visitar(this);
  }
}

public class CalculadoraArea implements Visitante {
  @Override
  public void visitar(Circulo circulo) {
    System.out.println("Área círculo: " + (Math.PI * circulo.radio * circulo.radio));
  }

  @Override
  public void visitar(Cuadrado cuadrado) {
    System.out.println("Área cuadrado: " + (cuadrado.lado * cuadrado.lado));
  }
}

// Uso
List<Figura> figuras = Arrays.asList(
  new Circulo(),
  new Cuadrado()
);

Visitante calculadora = new CalculadoraArea();
for (Figura figura : figuras) {
  figura.aceptar(calculadora);
}`}
            />
            </>
            )}

            {activeBehavioralPattern === 9 && (
            <>
            <h4 style={{ fontSize: '1.3rem', fontWeight: '700', marginTop: '2rem', marginBottom: '1rem', color: '#4CAF50' }}>9. Interpreter (Intérprete)</h4>
            <p style={{ fontSize: "1.1rem", lineHeight: "1.7", marginBottom: '1rem' }}>El patrón Interpreter te permite definir una <strong>gramática</strong> y un intérprete para un lenguaje simple. Por ejemplo, necesitas interpretar expresiones matemáticas como "3 + 5 * 2". Sin Interpreter, escribes parsers complicados. Con Interpreter, defines cada regla gramatical como una clase (Numero, Suma, Multiplicacion), y cada una sabe cómo interpretar su parte. Una expresión se vuelve un árbol de interpretadores, y evaluarla es hacer `root.interpretar()`. Es especialmente útil para DSLs (Lenguajes Específicos de Dominio), configuraciones, o scripts simples que tu aplicación necesita ejecutar.</p>
            <CodeBlock
              language="java"
              code={`public interface Expresion {
  int interpretar();
}

public class Numero implements Expresion {
  private int numero;

  public Numero(int numero) {
    this.numero = numero;
  }

  @Override
  public int interpretar() {
    return numero;
  }
}

public class Suma implements Expresion {
  private Expresion izquierda;
  private Expresion derecha;

  public Suma(Expresion izquierda, Expresion derecha) {
    this.izquierda = izquierda;
    this.derecha = derecha;
  }

  @Override
  public int interpretar() {
    return izquierda.interpretar() + derecha.interpretar();
  }
}

public class Multiplicacion implements Expresion {
  private Expresion izquierda;
  private Expresion derecha;

  public Multiplicacion(Expresion izquierda, Expresion derecha) {
    this.izquierda = izquierda;
    this.derecha = derecha;
  }

  @Override
  public int interpretar() {
    return izquierda.interpretar() * derecha.interpretar();
  }
}

// Uso: 3 + 5 * 2 = 3 + 10 = 13
Expresion expr = new Suma(
  new Numero(3),
  new Multiplicacion(new Numero(5), new Numero(2))
);
System.out.println(expr.interpretar());  // 13`}
            />
            </>
            )}

            {activeBehavioralPattern === 10 && (
            <>
            <h4 style={{ fontSize: '1.3rem', fontWeight: '700', marginTop: '2rem', marginBottom: '1rem', color: '#4CAF50' }}>10. Memento (Recuerdo)</h4>
            <p style={{ fontSize: "1.1rem", lineHeight: "1.7", marginBottom: '1rem' }}>El patrón Memento te permite guardar y restaurar el <strong>estado anterior</strong> de un objeto sin violar su encapsulación. Por ejemplo, un editor de documentos necesita implementar Undo/Redo. Sin Memento, expondrías todos los atributos privados del Documento para poder copiarlos — rompe encapsulación. Con Memento, el Documento crea un objeto Memento (snapshot) que captura su estado interno de forma segura. Almacenas Mementos en un Historial. Si el usuario hace undo, restauras desde un Memento anterior. El Memento es como una fotografía del estado — inmutable, y solo el Documento que la creó puede entender qué contiene.</p>
            <CodeBlock
              language="java"
              code={`public class Documento {
  private String contenido;

  public void escribir(String texto) {
    contenido = texto;
  }

  public String getContenido() {
    return contenido;
  }

  // Crear snapshot
  public Memento crearMemento() {
    return new Memento(contenido);
  }

  // Restaurar desde snapshot
  public void restaurar(Memento memento) {
    this.contenido = memento.getContenido();
  }

  // Clase interna: snapshot
  public static class Memento {
    private String contenido;

    private Memento(String contenido) {
      this.contenido = contenido;
    }

    private String getContenido() {
      return contenido;
    }
  }
}

public class Historico {
  private Stack<Documento.Memento> historial = new Stack<>();

  public void guardar(Documento documento) {
    historial.push(documento.crearMemento());
  }

  public void deshacer(Documento documento) {
    if (!historial.isEmpty()) {
      documento.restaurar(historial.pop());
    }
  }
}

// Uso
Documento doc = new Documento();
Historico historial = new Historico();

doc.escribir("Versión 1");
historial.guardar(doc);

doc.escribir("Versión 2");
historial.guardar(doc);

doc.escribir("Versión 3");
System.out.println(doc.getContenido());  // Versión 3

historial.deshacer(doc);
System.out.println(doc.getContenido());  // Versión 2`}
            />
            </>
            )}
          </>
        )}
        </>
      )
    },

    {
      title: 'Matriz de Patrones',
      content: (
        <>
          <h3>Cuándo usar cada patrón</h3>
          <Table
            headers={['Patrón', 'Problema', 'Cuándo Usar', 'Ejemplo']}
            rows={[
              ['Singleton', 'Una sola instancia', 'Logger, BD, Config', 'DatabaseConnection'],
              ['Factory', 'Crear sin especificar clase', 'Múltiples tipos', 'TransporteFactory'],
              ['Builder', 'Construir objetos complejos', 'Muchos parámetros', 'Usuario con 5+ campos'],
              ['Adapter', 'Hacer compatible interfaz', 'Integrar librerías', 'Adaptador VLC'],
              ['Decorator', 'Agregar funcionalidad', 'Extensibilidad', 'Café + Leche + Canela'],
              ['Facade', 'Simplificar complejo', 'Ocultar complejidad', 'LoginFacade'],
              ['Proxy', 'Controlar acceso', 'Lazy loading', 'Cargar imagen al mostrar'],
              ['Observer', 'Notificar cambios', 'Eventos, MVC', 'Tema con observadores'],
              ['Strategy', 'Algoritmos intercambiables', 'Diferentes cálculos', 'Descuentos dinámicos'],
              ['State', 'Cambiar comportamiento', 'Máquinas estado', 'Pedido con estados'],
              ['Command', 'Encapsular acción', 'Undo/Redo, colas', 'ComandoAbrirArchivo'],
              ['Template Method', 'Estructura común', 'Pasos ordenados', 'Algoritmo con pasos'],
            ]}
          />

          <InfoBox type="success">
            <strong>Aplicar en tu proyecto:</strong> Para ver cómo aplicar estos patrones de forma práctica en tu TFC,
            consulta la sección "Patrones en el Proyecto TFC" en la lección de <strong>SOLID y Refactorización</strong>.
          </InfoBox>
        </>
      )
    },

    {
      title: 'Resumen Visual',
      content: (
        <>
          <p>Las tres categorías principales de patrones de diseño:</p>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem',
            margin: '2rem 0'
          }}>
            {[
              {
                icon: '🏗️',
                title: 'Creacionales',
                color: '#2196F3',
                count: 5,
                description: 'Cómo se crean objetos de forma flexible y controlada',
                patterns: ['Singleton', 'Factory', 'Abstract Factory', 'Builder', 'Prototype']
              },
              {
                icon: '🔗',
                title: 'Estructurales',
                color: '#9C27B0',
                count: 7,
                description: 'Cómo se componen objetos en estructuras más grandes',
                patterns: ['Adapter', 'Decorator', 'Facade', 'Proxy', 'Bridge', 'Composite', 'Flyweight']
              },
              {
                icon: '🤝',
                title: 'Comportamentales',
                color: '#4CAF50',
                count: 11,
                description: 'Cómo interactúan y colaboran los objetos entre sí',
                patterns: ['Strategy', 'Observer', 'State', 'Template Method', 'Chain', 'Command', 'Iterator', 'Mediator', 'Visitor', 'Interpreter', 'Memento']
              }
            ].map((category, idx) => (
              <div key={idx} style={{
                border: `3px solid ${category.color}`,
                borderRadius: '12px',
                padding: '2rem',
                backgroundColor: '#ffffff',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = `0 8px 20px ${category.color}20`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.08)';
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                  <div style={{ fontSize: '3rem' }}>{category.icon}</div>
                  <div>
                    <h3 style={{ margin: '0 0 0.25rem 0', color: category.color, fontSize: '1.3rem' }}>
                      {category.title}
                    </h3>
                    <div style={{ fontSize: '0.9rem', color: '#666', fontWeight: '500' }}>
                      {category.count} patrones
                    </div>
                  </div>
                </div>

                <p style={{ color: '#555', margin: '1rem 0', fontStyle: 'italic', fontSize: '0.95rem' }}>
                  {category.description}
                </p>

                <ul style={{
                  margin: '1.5rem 0 0 0',
                  padding: 0,
                  listStyle: 'none',
                  borderTop: `2px solid ${category.color}20`,
                  paddingTop: '1rem'
                }}>
                  {category.patterns.map((pattern, pidx) => (
                    <li key={pidx} style={{
                      margin: '0.5rem 0',
                      fontSize: '0.9rem',
                      color: '#333',
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '0.5rem'
                    }}>
                      <span style={{
                        color: category.color,
                        fontWeight: 'bold',
                        flexShrink: 0
                      }}>▸</span>
                      <span>{pattern}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </>
      )
    },

    {
      title: 'Preguntas Frecuentes',
      content: <FAQSection />
    },
  ];

  const keyPoints = [
    '23 patrones clásicos: 5 creacionales, 7 estructurales, 11 comportamentales',
    'Singleton: una única instancia (logger, BD, config)',
    'Factory: crear sin especificar clase exacta',
    'Builder: construir objetos complejos paso a paso',
    'Adapter: hacer compatible interfaz incompatible',
    'Decorator: agregar funcionalidad dinámicamente',
    'Facade: simplificar interfaz compleja',
    'Proxy: controlar acceso (lazy loading)',
    'Observer: notificar múltiples objetos',
    'Strategy: algoritmos intercambiables',
    'State: cambiar comportamiento por estado',
    'Command: encapsular solicitud como objeto',
    'Template Method: estructura común, detalles en subclases',
    'Los patrones implementan SOLID',
    'No sobre-engineerices: usa patrones solo cuando resuelvan problemas reales',
    'God Object, Inheritance Hell, Over-Engineering son antipatrones',
    'Repository, Service, DTO son patrones de aplicación'
  ];

  const summary = `Patrones de Diseño: Soluciones probadas a problemas comunes.

CATEGORÍAS:
• Creacionales (5): Cómo crear objetos - Singleton, Factory, Builder
• Estructurales (7): Cómo organizar relaciones - Adapter, Decorator, Facade, Proxy
• Comportamentales (11): Cómo interactúan - Observer, Strategy, State, Command, Template

PATRONES MÁS USADOS:
1. Factory - Crear tipos diferentes
2. Singleton - Una sola instancia
3. Observer - Notificación de cambios
4. Decorator - Agregar funcionalidad
5. Strategy - Algoritmos intercambiables
6. State - Workflows con estados
7. Command - Undo/Redo, colas
8. Adapter - Compatibilidad
9. Facade - Simplicidad
10. Proxy - Control de acceso

RELACIÓN CON SOLID:
• Strategy + Decorator + Observer implementan Open/Closed
• Factory + Adapter implementan Dependency Inversion
• Facade implementa Single Responsibility
• Observer implementa Interface Segregation

RECUERDA:
• No sobre-engineerices: usa patrones solo cuando resuelvan problemas reales
• Para evitar errores comunes, consulta la lección de Antipatrones
• Repository, Service, DTO son patrones de aplicación`;

      return (
    <>
      <LessonTemplate
        breadcrumbs={breadcrumbs}
        concepts={concepts}
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

export function LessonAntipatrones() {
  const breadcrumbs = useBreadcrumb();
  const nav = useLessonNavigation();
  const [activeAntipattern, setActiveAntipattern] = useState(0);

  const sections = [
    {
      title: 'Introducción a Antipatrones',
      content: (
        <>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
            Un <strong>antipatrón</strong> es el opuesto de un patrón de diseño: es una solución que <strong>PARECE</strong> resolver un problema, pero en realidad crea más problemas que los que soluciona. Es un error común, repetido, que desarrolladores inexpertos (y a veces experimentados) cometen una y otra vez. Conocer antipatrones es tan importante como conocer patrones, porque te enseña a reconocer cuándo tu código está en el camino equivocado.
          </p>

          <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
            La diferencia clave: un patrón resuelve un problema de forma elegante y mantenible. Un antipatrón comienza como una solución que "parece funcionar", pero luego te das cuenta (a menudo demasiado tarde) que hizo que el código fuera más difícil de mantener, más lento, o imposible de escalar. Este módulo te enseña a identificar y evitar los antipatrones más comunes.
          </p>
        </>
      )
    },

    {
      title: 'Antipatrones Clásicos',
      content: (
        <>
          {(() => {
            const antipatterns = [
              {
                name: 'God Object (Objeto Dios)',
                icon: '👹',
                color: '#e74c3c',
                description: 'Una clase que hace TODO: procesa datos, valida, guarda a BD, envía emails, genera reportes. Resultado: clase de 3000+ líneas, imposible de testear, cambiar una cosa rompe todo.',
                howToAvoid: 'Divide responsabilidades usando Single Responsibility Principle. Una clase = una razón para cambiar. Si tu clase toca BD, validación, Y lógica de negocio, divídela.'
              },
              {
                name: 'Inheritance Hell (Infierno de Herencia)',
                icon: '🔀',
                color: '#9b59b6',
                description: 'Jerarquías de herencia demasiado profundas (A → B → C → D → E...). Cambios en la clase A afectan toda la cadena. Las subclases heredan métodos que no necesitan. Testing es un pesadilla.',
                howToAvoid: 'Prefiere composición sobre herencia. Si tienes herencia profunda, probablemente deberías usar objetos componibles. Límitate a 2-3 niveles máximo.'
              },
              {
                name: 'Singleton Abuse',
                icon: '🔐',
                color: '#3498db',
                description: 'Usar Singleton para "todo": configuración, logger, acceso a datos. El código se acopla globalmente a la instancia. Testing imposible: no puedes hacer mock. Cambios afectan toda la app.',
                howToAvoid: 'Usa Singleton SOLO para: logger, configuración inmutable, connection pool. Para todo lo demás, inyecta dependencias. Si testear tu código es difícil, probablemente abusaste de Singleton.'
              },
              {
                name: 'Over-Engineering',
                icon: '⚙️',
                color: '#f39c12',
                description: 'Agregar patrones "por si acaso". Tu código tiene Strategy, Observer, Builder, Facade... pero resuelve un problema simple. Resultado: código lento, difícil de entender, imposible de mantener.',
                howToAvoid: 'Empieza simple. Agrega patrones cuando el problema LO REQUIERA, no antes. Si tu código funciona sin un patrón, no lo necesitas. YAGNI: "You Aren\'t Gonna Need It".'
              },
              {
                name: 'Tight Coupling (Acoplamiento Fuerte)',
                icon: '⛓️',
                color: '#c0392b',
                description: 'Clases que dependen directamente unas de otras: A crea B, B crea C, C crea D. Cambiar D requiere cambiar C, B, A. No puedes testear A sin tener D funcionando.',
                howToAvoid: 'Usa inyección de dependencias. Los constructores reciben las dependencias, no las crean. Esto permite testear con mocks y cambiar implementaciones sin tocar la clase.'
              },
              {
                name: 'Null Pointer Exception (NPE) Hell',
                icon: '🪦',
                color: '#34495e',
                description: 'Código lleno de `if (obj != null) { if (obj.prop != null) { if (obj.prop.val != null) { ... } } }`. Cada línea puede fallar. Testing es imposible: tienes que cubrir todos los null cases.',
                howToAvoid: 'Usa Optional (Java), Maybe (Haskell), tipos nullables (TypeScript). O mejor: diseña para que los valores NUNCA sean null. Si pueden serlo, eso es un smell de diseño.'
              },
              {
                name: 'Magic Numbers y Magic Strings',
                icon: '✨',
                color: '#16a085',
                description: '`if (status == 3)`, `if (code == "X42ZQ")`. Números y strings duros en el código. Nadie sabe qué significan. Cambiar un valor requiere grep en el código entero.',
                howToAvoid: 'Define constantes. `if (status == OrderStatus.DELIVERED)`. El código se vuelve autoexplicativo y cambiar valores es trivial.'
              },
              {
                name: 'Premature Optimization',
                icon: '⚡',
                color: '#2980b9',
                description: 'Optimizar código que no es un bottleneck. Cambias un loop simple por algoritmo complejo para "ahorrar 10ms". Resultado: código ilegible, hard to debug, y probablemente no mejora el rendimiento real.',
                howToAvoid: 'Mide primero con profilers. Optimiza donde realmente importa (BD, network, I/O). Legibilidad > micro-optimizaciones. "Premature optimization is the root of all evil."'
              },
              {
                name: 'Comment Hell',
                icon: '💬',
                color: '#d35400',
                description: 'Código con comentarios en cada línea explicando qué hace. Si necesitas un comentario para entender una línea, la línea está mal escrita. Los comentarios se vuelven obsoletos cuando cambias el código.',
                howToAvoid: 'Escribe código autoexplicativo. Nombres de variables claros, métodos pequeños con nombres descriptivos. Los comentarios deben explicar POR QUÉ, no QUÉ.'
              },
              {
                name: 'Lava Flow (Flujo de Lava)',
                icon: '🌋',
                color: '#e67e22',
                description: 'Código antiguo, muerto, que nadie toca porque "podría romper algo". Iteraciones de cambios se acumulan: commented-out code, unused variables, funciones que nadie llama.',
                howToAvoid: 'Usa control de versiones (Git). Borra código muerto agresivamente. Si un commit contiene código importante, está en el historial. No guardes "por si acaso".'
              }
            ];

            return (
              <>
                <div style={{ display: 'flex', gap: '0.8rem', marginBottom: '2rem', borderBottom: '1px solid #e0e0e0', paddingBottom: '1.2rem', paddingLeft: '1.5rem', paddingRight: '1.5rem', flexWrap: 'wrap', backgroundColor: '#fafafa', borderRadius: '4px', justifyContent: 'center' }}>
                  {antipatterns.map((ap, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveAntipattern(idx)}
                      style={{
                        padding: '0.5rem 1rem',
                        backgroundColor: 'transparent',
                        color: activeAntipattern === idx ? ap.color : '#333',
                        border: 'none',
                        borderBottom: activeAntipattern === idx ? `2px solid ${ap.color}` : 'none',
                        cursor: 'pointer',
                        fontWeight: '600',
                        fontSize: '0.9rem',
                        transition: 'all 0.3s ease'
                      }}
                    >
                      {ap.icon} {ap.name}
                    </button>
                  ))}
                </div>

                {activeAntipattern !== null && (() => {
                  const item = antipatterns[activeAntipattern];
                  return (
                    <div style={{
                      borderLeft: `5px solid ${item.color}`,
                      backgroundColor: '#f8f9fa',
                      borderRadius: '4px',
                      padding: '2rem',
                      transition: 'all 0.3s ease'
                    }}>
                      <h3 style={{ margin: '0 0 1rem 0', fontSize: '1.3rem', color: item.color, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <span style={{ fontSize: '2rem' }}>{item.icon}</span>
                        {item.name}
                      </h3>
                      <p style={{ margin: '0 0 1.5rem 0', fontSize: '0.95rem', color: '#666', fontStyle: 'italic', lineHeight: '1.6' }}>
                        {item.description}
                      </p>
                      <div style={{ backgroundColor: '#ffffff', padding: '1.5rem', borderRadius: '4px', borderLeft: `3px solid ${item.color}` }}>
                        <strong style={{ color: item.color, fontSize: '1rem' }}>Cómo evitarlo:</strong>
                        <p style={{ margin: '0.75rem 0 0 0', fontSize: '0.95rem', color: '#555', lineHeight: '1.6' }}>
                          {item.howToAvoid}
                        </p>
                      </div>
                    </div>
                  );
                })()}
              </>
            );
          })()}
        </>
      )
    },

    {
      title: 'Detectar Antipatrones en Tu Código',
      content: (
        <>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
            Las siguientes señales indican que tu código contiene antipatrones:
          </p>

          <ul style={{ fontSize: '1rem', lineHeight: '1.8', marginBottom: '2rem' }}>
            <li style={{ marginBottom: '1rem' }}><strong>Miedo a cambiar código:</strong> Si tienes miedo de tocar una función porque "podría romper algo", es un antipatrón. El código debería ser seguro de refactorizar si tiene tests.</li>
            <li style={{ marginBottom: '1rem' }}><strong>Testing es imposible:</strong> Si no puedes hacer tests unitarios sin mockear la mitad de la aplicación, hay acoplamiento fuerte o dependencias globales (Singleton abuse).</li>
            <li style={{ marginBottom: '1rem' }}><strong>La clase crece sin parar:</strong> Una clase de 1000+ líneas es un God Object. Divide responsabilidades.</li>
            <li style={{ marginBottom: '1rem' }}><strong>Cambios en cascada:</strong> Cambias una cosa y afecta 10 archivos. Eso es tight coupling. Usa inyección de dependencias.</li>
            <li style={{ marginBottom: '1rem' }}><strong>Código comentado:</strong> Lineas enteras comentadas con "// TODO", "// Deprecated", "// Old code". Git existe. Bórralo.</li>
            <li style={{ marginBottom: '1rem' }}><strong>Nombres genéricos:</strong> Variables llamadas `x`, `temp`, `data`, `result`. Los nombres deben ser descriptivos. Toman 5 segundos más escribir, pero ahorran 50 leyendo.</li>
          </ul>
        </>
      )
    }
  ];

  return (
    <>
      <LessonTemplate
        breadcrumbs={breadcrumbs}
        sections={sections}
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