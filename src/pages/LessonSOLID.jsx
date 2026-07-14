import { useState } from 'react';
import { LessonTemplate, CodeBlock, Table, InfoBox } from '../components';
import { LessonNavigation } from '../components/LessonNavigation';
import { useBreadcrumb } from '../hooks/useBreadcrumb';
import { useLessonNavigation } from '../hooks/useLessonNavigation';

export function LessonSOLID() {
  const breadcrumbs = useBreadcrumb();
  const nav = useLessonNavigation();
  const [activeSRPTab, setActiveSRPTab] = useState(-1);
  const [activeOCPTab, setActiveOCPTab] = useState(-1);
  const [activeLSPTab, setActiveLSPTab] = useState(-1);
  const [activeISPTab, setActiveISPTab] = useState(-1);
  const [activeDIPTab, setActiveDIPTab] = useState(-1);
  const [activeRefactoringTechnique, setActiveRefactoringTechnique] = useState(-1);

  const concepts = [
    {
      icon: '🎯',
      title: 'SOLID',
      definition: 'Conjunto de 5 principios para escribir código mantenible, escalable y flexible',
      example: 'S-O-L-I-D: Single, Open/Closed, Liskov, Interface, Dependency'
    },
    {
      icon: '🔧',
      title: 'Refactorización',
      definition: 'Proceso de cambiar código sin alterar su comportamiento para mejorar su estructura',
      example: 'Extraer método, renombrar variable, simplificar lógica'
    },
    {
      icon: '⚠️',
      title: 'Code Smell',
      definition: 'Indicador superficial de que hay un problema más profundo en el código',
      example: 'Métodos muy largos, duplicación, nombres confusos'
    },
  ];

  const sections = [
    {
      title: 'Single Responsibility Principle (SRP)',
      content: (
        <>
          <h3>Una clase, una razón para cambiar</h3>
          <p>
            Cada clase debe tener una única responsabilidad. Si una clase tiene múltiples razones para cambiar,
            viola SRP y es difícil de mantener.
          </p>

          <div style={{ marginBottom: '20px', borderTop: '1px solid #ddd', paddingTop: '15px' }}>
            <label htmlFor="srp-tabs" style={{ fontWeight: 'bold', display: 'block', marginBottom: '10px' }}>
              Selecciona vista:
            </label>
            <select
              id="srp-tabs"
              value={activeSRPTab}
              onChange={(e) => setActiveSRPTab(Number(e.target.value))}
              style={{
                padding: '8px 12px',
                borderRadius: '4px',
                border: '2px solid #ff9800',
                fontSize: '0.95rem',
                cursor: 'pointer',
                backgroundColor: '#fff'
              }}
            >
              <option value="-1">-- Selecciona una vista --</option>
              <option value="0">❌ Viola SRP</option>
              <option value="1">✅ Cumple SRP</option>
            </select>
          </div>

          {activeSRPTab === 0 && (
            <>
              <h4>❌ Viola SRP</h4>
              <CodeBlock
                language="java"
                code={`public class Usuario {
  private String nombre;
  private String email;

  // Responsabilidad 1: Gestionar datos
  public void guardar() {
    // Lógica de base de datos
  }

  // Responsabilidad 2: Enviar emails
  public void enviarBienvenida() {
    String mensaje = "Bienvenido " + nombre;
    // Lógica de SMTP
  }

  // Responsabilidad 3: Validación
  public boolean esValido() {
    return !email.isEmpty() && !nombre.isEmpty();
  }

  // Responsabilidad 4: Serialización
  public String toJSON() {
    return "{...}";
  }
}`}
              />
            </>
          )}

          {activeSRPTab === 1 && (
            <>
              <h4>✅ Cumple SRP</h4>
              <CodeBlock
                language="java"
                code={`// Responsabilidad: Datos del usuario
public class Usuario {
  private String nombre;
  private String email;

  public Usuario(String nombre, String email) {
    this.nombre = nombre;
    this.email = email;
  }

  public String getNombre() { return nombre; }
  public String getEmail() { return email; }
}

// Responsabilidad: Persistencia
public class UsuarioRepository {
  public void guardar(Usuario usuario) {
    // Lógica de base de datos
  }

  public Usuario obtenerPorId(int id) { /* ... */ }
}

// Responsabilidad: Notificaciones
public class EmailService {
  public void enviarBienvenida(Usuario usuario) {
    String mensaje = "Bienvenido " + usuario.getNombre();
    // Lógica de SMTP
  }
}

// Responsabilidad: Validación
public class UsuarioValidator {
  public boolean esValido(Usuario usuario) {
    return !usuario.getEmail().isEmpty() &&
           !usuario.getNombre().isEmpty();
  }
}

// Responsabilidad: Serialización
public class UsuarioSerializer {
  public String toJSON(Usuario usuario) {
    return "{...}";
  }
}`}
              />
            </>
          )}

          <InfoBox type="info">
            <strong>Beneficio:</strong> Código modular, testeable y fácil de mantener.
            Cada clase hace una cosa y la hace bien.
          </InfoBox>
        </>
      )
    },

    {
      title: 'Open/Closed Principle (OCP)',
      content: (
        <>
          <h3>Abierto para extensión, cerrado para modificación</h3>
          <p>
            Las clases deben ser extensibles sin modificar su código existente.
            Usa herencia, interfaces y polimorfismo.
          </p>

          <div style={{ marginBottom: '20px', borderTop: '1px solid #ddd', paddingTop: '15px' }}>
            <label htmlFor="ocp-tabs" style={{ fontWeight: 'bold', display: 'block', marginBottom: '10px' }}>
              Selecciona vista:
            </label>
            <select
              id="ocp-tabs"
              value={activeOCPTab}
              onChange={(e) => setActiveOCPTab(Number(e.target.value))}
              style={{
                padding: '8px 12px',
                borderRadius: '4px',
                border: '2px solid #4caf50',
                fontSize: '0.95rem',
                cursor: 'pointer',
                backgroundColor: '#fff'
              }}
            >
              <option value="-1">-- Selecciona una vista --</option>
              <option value="0">❌ Viola OCP</option>
              <option value="1">✅ Cumple OCP</option>
            </select>
          </div>

          {activeOCPTab === 0 && (
            <>
              <h4>❌ Viola OCP (necesita modificación para nuevos tipos)</h4>
              <CodeBlock
                language="java"
                code={`public class Pago {
  public double calcularInteres(String tipo, double monto) {
    if (tipo.equals("tarjeta")) {
      return monto * 0.02;  // 2% de interés
    } else if (tipo.equals("transferencia")) {
      return monto * 0.01;  // 1% de interés
    } else if (tipo.equals("efectivo")) {
      return 0;  // Sin interés
    }
    return 0;
  }

  // Si agregamos un nuevo tipo de pago, ¡hay que modificar este método!
}`}
              />
            </>
          )}

          {activeOCPTab === 1 && (
            <>
              <h4>✅ Cumple OCP (extensible sin modificación)</h4>
              <CodeBlock
                language="java"
                code={`// Interfaz: define contrato
public interface MetodoPago {
  double calcularInteres(double monto);
  void procesar(double monto);
}

// Implementaciones específicas
public class PagoTarjeta implements MetodoPago {
  @Override
  public double calcularInteres(double monto) {
    return monto * 0.02;  // 2%
  }

  @Override
  public void procesar(double monto) {
    System.out.println("Procesando tarjeta: " + monto);
  }
}

public class PagoTransferencia implements MetodoPago {
  @Override
  public double calcularInteres(double monto) {
    return monto * 0.01;  // 1%
  }

  @Override
  public void procesar(double monto) {
    System.out.println("Procesando transferencia: " + monto);
  }
}

public class PagoEfectivo implements MetodoPago {
  @Override
  public double calcularInteres(double monto) {
    return 0;  // Sin interés
  }

  @Override
  public void procesar(double monto) {
    System.out.println("Procesando efectivo: " + monto);
  }
}

// Uso polimórfico: NO CAMBIA
public class Pago {
  public double procesarPago(MetodoPago metodo, double monto) {
    metodo.procesar(monto);
    return monto + metodo.calcularInteres(monto);
  }
}

// Agregar nuevo tipo: ¡solo crear nueva clase!
public class PagoBitcoin implements MetodoPago {
  @Override
  public double calcularInteres(double monto) {
    return monto * 0.03;  // 3%
  }

  @Override
  public void procesar(double monto) {
    System.out.println("Procesando Bitcoin: " + monto);
  }
}`}
              />
            </>
          )}

          <InfoBox type="success">
            <strong>Patrón usado:</strong> Strategy Pattern. Interfaces abstractas permiten extensión sin modificación.
          </InfoBox>
        </>
      )
    },

    {
      title: 'Liskov Substitution Principle (LSP)',
      content: (
        <>
          <h3>Subtipos intercambiables por su tipo padre</h3>
          <p>
            Las subclases deben poder reemplazar a su clase padre sin romper el programa.
            Herencia correcta mantiene el contrato del padre.
          </p>

          <div style={{ marginBottom: '20px', borderTop: '1px solid #ddd', paddingTop: '15px' }}>
            <label htmlFor="lsp-tabs" style={{ fontWeight: 'bold', display: 'block', marginBottom: '10px' }}>
              Selecciona vista:
            </label>
            <select
              id="lsp-tabs"
              value={activeLSPTab}
              onChange={(e) => setActiveLSPTab(Number(e.target.value))}
              style={{
                padding: '8px 12px',
                borderRadius: '4px',
                border: '2px solid #2196f3',
                fontSize: '0.95rem',
                cursor: 'pointer',
                backgroundColor: '#fff'
              }}
            >
              <option value="-1">-- Selecciona una vista --</option>
              <option value="0">❌ Viola LSP</option>
              <option value="1">✅ Cumple LSP</option>
            </select>
          </div>

          {activeLSPTab === 0 && (
            <>
              <h4>❌ Viola LSP (subclase rompe contrato)</h4>
              <CodeBlock
                language="java"
                code={`public class Pajaro {
  public void volar() {
    System.out.println("Volando...");
  }
}

public class Pinguino extends Pajaro {
  @Override
  public void volar() {
    // Los pingüinos NO PUEDEN volar!
    throw new UnsupportedOperationException("Los pingüinos no vuelan");
  }
}

// Problema:
Pajaro pajaro = new Pinguino();
pajaro.volar();  // ¡Excepción! El código se rompe.`}
              />
            </>
          )}

          {activeLSPTab === 1 && (
            <>
              <h4>✅ Cumple LSP (jerarquía correcta)</h4>
              <CodeBlock
                language="java"
                code={`// Jerarquía correcta
public abstract class Pajaro {
  abstract void moverse();
}

public class Aguila extends Pajaro {
  @Override
  void moverse() {
    volar();
  }

  public void volar() {
    System.out.println("Volando alto...");
  }
}

public class Pinguino extends Pajaro {
  @Override
  void moverse() {
    nadar();  // Responsabilidad realista
  }

  public void nadar() {
    System.out.println("Nadando...");
  }
}

// Uso polimórfico sin sorpresas:
List<Pajaro> pajaros = Arrays.asList(
  new Aguila(),
  new Pinguino()
);

pajaros.forEach(Pajaro::moverse);  // Funciona correctamente`}
              />
            </>
          )}

          <InfoBox type="warning">
            <strong>Regla:</strong> Si necesitas throw new UnsupportedOperationException(),
            tu jerarquía está mal. Diseña de nuevo.
          </InfoBox>
        </>
      )
    },

    {
      title: 'Interface Segregation Principle (ISP)',
      content: (
        <>
          <h3>Múltiples interfaces específicas vs una genérica</h3>
          <p>
            Los clientes no deben depender de interfaces que no usan.
            Divide interfaces grandes en pequeñas y específicas.
          </p>

          <div style={{ marginBottom: '20px', borderTop: '1px solid #ddd', paddingTop: '15px' }}>
            <label htmlFor="isp-tabs" style={{ fontWeight: 'bold', display: 'block', marginBottom: '10px' }}>
              Selecciona vista:
            </label>
            <select
              id="isp-tabs"
              value={activeISPTab}
              onChange={(e) => setActiveISPTab(Number(e.target.value))}
              style={{
                padding: '8px 12px',
                borderRadius: '4px',
                border: '2px solid #9c27b0',
                fontSize: '0.95rem',
                cursor: 'pointer',
                backgroundColor: '#fff'
              }}
            >
              <option value="-1">-- Selecciona una vista --</option>
              <option value="0">❌ Viola ISP</option>
              <option value="1">✅ Cumple ISP</option>
            </select>
          </div>

          {activeISPTab === 0 && (
            <>
              <h4>❌ Viola ISP (interfaz grande fuerza dependencias innecesarias)</h4>
              <CodeBlock
                language="java"
                code={`// Una interfaz "para todo"
public interface Trabajador {
  void trabajar();
  void comer();
  void descansar();
  void conducir();
  void programar();
}

// Robot no come ni descansa, pero se ve forzado a implementar
public class Robot implements Trabajador {
  @Override
  public void trabajar() { /* ... */ }

  @Override
  public void comer() {
    throw new UnsupportedOperationException();  // ¡No puede comer!
  }

  @Override
  public void descansar() {
    throw new UnsupportedOperationException();  // ¡No descansa!
  }

  @Override
  public void conducir() { /* ... */ }

  @Override
  public void programar() { /* ... */ }
}`}
              />
            </>
          )}

          {activeISPTab === 1 && (
            <>
              <h4>✅ Cumple ISP (interfaces pequeñas y específicas)</h4>
              <CodeBlock
                language="java"
                code={`// Interfaces pequeñas y cohesivas
public interface Trabajador {
  void trabajar();
}

public interface Comedor {
  void comer();
}

public interface Descansador {
  void descansar();
}

public interface Conductor {
  void conducir();
}

public interface Programador {
  void programar();
}

// Humano implementa lo que necesita
public class HumanoDesarrollador implements
  Trabajador, Comedor, Descansador, Programador {

  @Override
  public void trabajar() { /* ... */ }

  @Override
  public void comer() { /* ... */ }

  @Override
  public void descansar() { /* ... */ }

  @Override
  public void programar() { /* ... */ }
}

// Robot implementa solo lo relevante
public class Robot implements Trabajador, Conductor, Programador {
  @Override
  public void trabajar() { /* ... */ }

  @Override
  public void conducir() { /* ... */ }

  @Override
  public void programar() { /* ... */ }

  // Sin métodos innecesarios
}`}
              />
            </>
          )}

          <InfoBox type="info">
            <strong>Beneficio:</strong> Cada clase implementa solo lo que necesita.
            No hay dependencias artificiales.
          </InfoBox>
        </>
      )
    },

    {
      title: 'Dependency Inversion Principle (DIP)',
      content: (
        <>
          <h3>Depender de abstracciones, no de implementaciones concretas</h3>
          <p>
            Las clases de alto nivel no deben depender de clases de bajo nivel.
            Ambas deben depender de abstracciones (interfaces).
          </p>

          <div style={{ marginBottom: '20px', borderTop: '1px solid #ddd', paddingTop: '15px' }}>
            <label htmlFor="dip-tabs" style={{ fontWeight: 'bold', display: 'block', marginBottom: '10px' }}>
              Selecciona vista:
            </label>
            <select
              id="dip-tabs"
              value={activeDIPTab}
              onChange={(e) => setActiveDIPTab(Number(e.target.value))}
              style={{
                padding: '8px 12px',
                borderRadius: '4px',
                border: '2px solid #ff5722',
                fontSize: '0.95rem',
                cursor: 'pointer',
                backgroundColor: '#fff'
              }}
            >
              <option value="-1">-- Selecciona una vista --</option>
              <option value="0">❌ Viola DIP</option>
              <option value="1">✅ Cumple DIP</option>
            </select>
          </div>

          {activeDIPTab === 0 && (
            <>
              <h4>❌ Viola DIP (dependencia directa)</h4>
              <CodeBlock
                language="java"
                code={`// Clase de bajo nivel: implementación concreta
public class BaseDatosMySQL {
  public void guardar(Usuario usuario) {
    System.out.println("Guardando en MySQL: " + usuario);
  }
}

// Clase de alto nivel: depende de implementación concreta
public class UsuarioService {
  private BaseDatosMySQL bd = new BaseDatosMySQL();

  public void crearUsuario(Usuario usuario) {
    bd.guardar(usuario);
  }

  // Problema: Si cambiamos a PostgreSQL, hay que modificar UsuarioService
}`}
              />
            </>
          )}

          {activeDIPTab === 1 && (
            <>
              <h4>✅ Cumple DIP (inyección de dependencias)</h4>
              <CodeBlock
                language="java"
                code={`// Abstracción (interfaz)
public interface RepositorioUsuario {
  void guardar(Usuario usuario);
  Usuario obtenerPorId(int id);
}

// Implementación: MySQL
public class RepositorioUsuarioMySQL implements RepositorioUsuario {
  @Override
  public void guardar(Usuario usuario) {
    System.out.println("Guardando en MySQL: " + usuario);
  }

  @Override
  public Usuario obtenerPorId(int id) {
    return new Usuario("Juan", "juan@example.com");
  }
}

// Implementación: PostgreSQL (alternativa)
public class RepositorioUsuarioPostgreSQL implements RepositorioUsuario {
  @Override
  public void guardar(Usuario usuario) {
    System.out.println("Guardando en PostgreSQL: " + usuario);
  }

  @Override
  public Usuario obtenerPorId(int id) {
    return new Usuario("Juan", "juan@example.com");
  }
}

// Clase de alto nivel: depende de abstracción
public class UsuarioService {
  private RepositorioUsuario repositorio;

  // Inyección de dependencia por constructor
  public UsuarioService(RepositorioUsuario repositorio) {
    this.repositorio = repositorio;
  }

  public void crearUsuario(Usuario usuario) {
    repositorio.guardar(usuario);
  }
}

// Uso flexible
public class Main {
  public static void main(String[] args) {
    // Cambiar BD es trivial, sin modificar UsuarioService
    RepositorioUsuario repo = new RepositorioUsuarioMySQL();
    UsuarioService service = new UsuarioService(repo);

    service.crearUsuario(new Usuario("Maria", "maria@example.com"));
  }
}`}
              />
            </>
          )}

          <InfoBox type="success">
            <strong>Patrón usado:</strong> Dependency Injection. Permite cambiar implementaciones sin modificar código.
          </InfoBox>
        </>
      )
    },

    {
      title: 'Code Smells: Indicadores de Problemas',
      content: (
        <>
          <h3>Señales de alerta en el código</h3>
          <Table
            headers={['Code Smell', 'Problema', 'Solución']}
            rows={[
              [
                'Métodos muy largos (>20 líneas)',
                'Hace demasiado, violaSRP',
                'Extraer métodos pequeños y enfocados'
              ],
              [
                'Clases muy grandes (>200 líneas)',
                'Múltiples responsabilidades',
                'Dividir en clases más pequeñas'
              ],
              [
                'Duplicación de código',
                'Cambios en múltiples lugares',
                'Extraer a método común o superclase'
              ],
              [
                'Nombres confusos',
                'Código difícil de entender',
                'Renombrar variables/métodos claramente'
              ],
              [
                'Parámetros múltiples (>3)',
                'Difícil de usar y testear',
                'Crear objeto con esos valores'
              ],
              [
                'Condicionales complejos',
                'Lógica difícil de seguir',
                'Extraer a método con nombre claro'
              ],
              [
                'Variables globales',
                'Estado compartido implícito',
                'Usar inyección de dependencias'
              ],
              [
                'Comentarios explicativos',
                'Código no es auto-explicativo',
                'Mejorar nombres y estructura'
              ],
            ]}
          />
        </>
      )
    },

    {
      title: 'Técnicas de Refactorización',
      content: (
        <>
          <h3>Cómo mejorar código sin cambiar comportamiento</h3>

          <div style={{ marginBottom: '20px', borderTop: '1px solid #ddd', paddingTop: '15px' }}>
            <label htmlFor="refactoring-techniques" style={{ fontWeight: 'bold', display: 'block', marginBottom: '10px' }}>
              Selecciona una técnica:
            </label>
            <select
              id="refactoring-techniques"
              value={activeRefactoringTechnique}
              onChange={(e) => setActiveRefactoringTechnique(Number(e.target.value))}
              style={{
                padding: '8px 12px',
                borderRadius: '4px',
                border: '2px solid #673ab7',
                fontSize: '0.95rem',
                cursor: 'pointer',
                backgroundColor: '#fff'
              }}
            >
              <option value="-1">-- Selecciona una técnica --</option>
              <option value="0">1. Extraer Método</option>
              <option value="1">2. Extraer Clase</option>
              <option value="2">3. Renombrar</option>
              <option value="3">4. Simplificar Condicionales</option>
              <option value="4">5. Reemplazar Condicional por Polimorfismo</option>
            </select>
          </div>

          {activeRefactoringTechnique === 0 && (
            <>
              <h4>1. Extraer Método</h4>
          <CodeBlock
            language="java"
            code={`// Antes: Método largo con múltiples responsabilidades
public void procesarPedido(Pedido pedido) {
  // Validar pedido
  if (pedido.getItems().isEmpty()) {
    throw new IllegalArgumentException("Pedido vacío");
  }

  // Calcular total
  double total = 0;
  for (Item item : pedido.getItems()) {
    total += item.getPrecio() * item.getCantidad();
  }

  // Aplicar descuento
  if (pedido.getCliente().esVIP()) {
    total *= 0.9;
  }

  // Guardar en BD
  bd.guardar(pedido);
}

// Después: Métodos pequeños y enfocados
public void procesarPedido(Pedido pedido) {
  validarPedido(pedido);
  double total = calcularTotal(pedido);
  total = aplicarDescuentoVIP(pedido, total);
  guardarPedido(pedido);
}

private void validarPedido(Pedido pedido) {
  if (pedido.getItems().isEmpty()) {
    throw new IllegalArgumentException("Pedido vacío");
  }
}

private double calcularTotal(Pedido pedido) {
  double total = 0;
  for (Item item : pedido.getItems()) {
    total += item.getPrecio() * item.getCantidad();
  }
  return total;
}

private double aplicarDescuentoVIP(Pedido pedido, double total) {
  if (pedido.getCliente().esVIP()) {
    total *= 0.9;
  }
  return total;
}

private void guardarPedido(Pedido pedido) {
  bd.guardar(pedido);
}`}
              />
            </>
          )}

          {activeRefactoringTechnique === 1 && (
            <>
              <h4>2. Extraer Clase (dividir responsabilidades)</h4>
          <CodeBlock
            language="java"
            code={`// Antes: Clase hace todo
public class Carrito {
  private List<Item> items;

  public void agregarItem(Item item) { /* ... */ }

  public double calcularTotal() { /* ... */ }

  public void mostrarRecibo() { /* ... */ }

  public void enviarEmail() { /* ... */ }
}

// Después: Responsabilidades separadas
public class Carrito {
  private List<Item> items;

  public void agregarItem(Item item) { /* ... */ }
}

public class CalculadoraPrecios {
  public double calcularTotal(Carrito carrito) { /* ... */ }
}

public class GeneradorRecibo {
  public String generar(Carrito carrito) { /* ... */ }
}

public class NotificacionService {
  public void enviarRecibo(String email, String recibo) { /* ... */ }
}`}
              />
            </>
          )}

          {activeRefactoringTechnique === 2 && (
            <>
              <h4>3. Renombrar (mejorar claridad)</h4>
          <CodeBlock
            language="java"
            code={`// Antes: Nombres confusos
public double calc(int q, double p) {
  return q * p;
}

public void proc(List<Item> l) {
  for (Item i : l) {
    process(i);
  }
}

// Después: Nombres claros
public double calcularMontoTotal(int cantidad, double precioUnitario) {
  return cantidad * precioUnitario;
}

public void procesarItems(List<Item> items) {
  for (Item item : items) {
    procesarItem(item);
  }
}`}
              />
            </>
          )}

          {activeRefactoringTechnique === 3 && (
            <>
              <h4>4. Simplificar Condicionales</h4>
          <CodeBlock
            language="java"
            code={`// Antes: Condicionales complejos
public boolean puedeComprar(Usuario usuario, double monto) {
  if (usuario != null) {
    if (usuario.estaActivo()) {
      if (usuario.getTienda().tieneFondos(monto)) {
        return true;
      }
    }
  }
  return false;
}

// Después: Guardias (early return)
public boolean puedeComprar(Usuario usuario, double monto) {
  if (usuario == null) return false;
  if (!usuario.estaActivo()) return false;
  return usuario.getTienda().tieneFondos(monto);
}

// Aún mejor: Extraer a método
public boolean puedeComprar(Usuario usuario, double monto) {
  if (!usuarioValido(usuario)) return false;
  return usuario.getTienda().tieneFondos(monto);
}

private boolean usuarioValido(Usuario usuario) {
  return usuario != null && usuario.estaActivo();
}`}
              />
            </>
          )}

          {activeRefactoringTechnique === 4 && (
            <>
              <h4>5. Reemplazar Condicional por Polimorfismo</h4>
          <CodeBlock
            language="java"
            code={`// Antes: if/else por tipo
public double calcularPrecio(Cliente cliente, double monto) {
  if (cliente instanceof ClienteRegular) {
    return monto;
  } else if (cliente instanceof ClienteVIP) {
    return monto * 0.8;
  } else if (cliente instanceof ClientePremium) {
    return monto * 0.6;
  }
  return monto;
}

// Después: Polimorfismo (Open/Closed Principle)
public interface Cliente {
  double calcularDescuento();
}

public class ClienteRegular implements Cliente {
  @Override
  public double calcularDescuento() {
    return 1.0;  // Sin descuento
  }
}

public class ClienteVIP implements Cliente {
  @Override
  public double calcularDescuento() {
    return 0.8;  // 20% descuento
  }
}

public class ClientePremium implements Cliente {
  @Override
  public double calcularDescuento() {
    return 0.6;  // 40% descuento
  }
}

// Uso:
public double calcularPrecio(Cliente cliente, double monto) {
  return monto * cliente.calcularDescuento();
}`}
              />
            </>
          )}
        </>
      )
    },

    {
      title: 'Patrones de Diseño Relacionados',
      content: (
        <>
          <h3>Patrones que aplican SOLID</h3>
          <Table
            headers={['Patrón', 'Problema que resuelve', 'Relacionado con']}
            rows={[
              [
                'Strategy',
                'Múltiples algoritmos intercambiables',
                'Open/Closed, Dependency Inversion'
              ],
              [
                'Adapter',
                'Hacer compatible interface incompatible',
                'Interface Segregation'
              ],
              [
                'Decorator',
                'Agregar funcionalidad dinámicamente',
                'Open/Closed'
              ],
              [
                'Factory',
                'Crear objetos sin conocer clase concreta',
                'Dependency Inversion'
              ],
              [
                'Observer',
                'Notificar cambios a múltiples objetos',
                'Loose Coupling'
              ],
              [
                'Template Method',
                'Define estructura, deja detalles a subclases',
                'Open/Closed'
              ],
              [
                'Dependency Injection',
                'Inyectar dependencias en lugar de crearlas',
                'Dependency Inversion'
              ],
            ]}
          />

          <h4>Ejemplo: Strategy Pattern (OCP + DIP)</h4>
          <CodeBlock
            language="java"
            code={`// Define contrato para estrategias
public interface EstrategiaDescuento {
  double aplicar(double monto);
}

// Diferentes estrategias
public class SinDescuento implements EstrategiaDescuento {
  @Override
  public double aplicar(double monto) {
    return monto;
  }
}

public class DescuentoPorcentaje implements EstrategiaDescuento {
  private double porcentaje;

  public DescuentoPorcentaje(double porcentaje) {
    this.porcentaje = porcentaje;
  }

  @Override
  public double aplicar(double monto) {
    return monto * (1 - porcentaje);
  }
}

// Usa estrategia sin conocer la implementación
public class Carrito {
  private EstrategiaDescuento estrategia;

  public Carrito(EstrategiaDescuento estrategia) {
    this.estrategia = estrategia;
  }

  public double calcularTotal(double subtotal) {
    return estrategia.aplicar(subtotal);
  }
}`}
          />
        </>
      )
    },

    {
      title: 'Testing para Verificar Refactorización',
      content: (
        <>
          <h3>Asegurar que el comportamiento no cambia</h3>
          <p>
            Antes de refactorizar, escribe tests. Los tests garantizan que la refactorización
            es correcta sin romper funcionalidad.
          </p>

          <CodeBlock
            language="java"
            code={`public class PedidoTest {
  private Pedido pedido;
  private CalculadoraPrecios calculadora;

  @Before
  public void setUp() {
    pedido = new Pedido();
    calculadora = new CalculadoraPrecios();
  }

  @Test
  public void debeCalcularTotalSinDescuento() {
    pedido.agregarItem(new Item("Laptop", 1000, 1));
    pedido.agregarItem(new Item("Mouse", 30, 2));

    double total = calculadora.calcularTotal(pedido);

    assertEquals(1060, total, 0.01);
  }

  @Test
  public void debeAplicarDescuentoVIP() {
    Cliente vip = new ClienteVIP();
    pedido.setCliente(vip);
    pedido.agregarItem(new Item("Laptop", 1000, 1));

    double total = calculadora.calcularTotal(pedido);
    double esperado = 1000 * 0.8;  // 20% descuento

    assertEquals(esperado, total, 0.01);
  }

  @Test
  public void debeRechazarPedidoVacio() {
    assertThrows(IllegalArgumentException.class, () -> {
      calculadora.calcularTotal(pedido);
    });
  }
}

// Refactorizar sin miedo: los tests verifican que todo funciona igual`}
          />

          <InfoBox type="success">
            <strong>Flujo de Refactorización Segura:</strong><br/>
            1. Escribir tests que pasen ✓<br/>
            2. Refactorizar el código<br/>
            3. Verificar que tests aún pasan ✓<br/>
            4. Si tests fallan, hay un bug
          </InfoBox>
        </>
      )
    },

    {
      title: 'Checklist de Refactorización',
      content: (
        <>
          <h3>Antes de refactorizar</h3>
          <ul style={{ fontSize: '0.95rem', lineHeight: '1.8' }}>
            <li>✓ El código está en control de versiones (git)</li>
            <li>✓ Los tests pasan (tener baseline)</li>
            <li>✓ He identificado el "smell" específico</li>
            <li>✓ La refactorización mejora mantenibilidad</li>
            <li>✓ No cambio comportamiento funcional</li>
            <li>✓ Hago cambios pequeños (uno a uno)</li>
            <li>✓ Ejecuto tests después de cada cambio</li>
            <li>✓ Commit en git después de cada paso</li>
          </ul>

          <h3>Durante la refactorización</h3>
          <ul style={{ fontSize: '0.95rem', lineHeight: '1.8' }}>
            <li>✓ Un refactor a la vez (no mezcles múltiples)</li>
            <li>✓ Tests deben pasar después de cada cambio</li>
            <li>✓ Si algo se rompe, revert y replantea</li>
            <li>✓ Pide review a otro desarrollador</li>
            <li>✓ Documenta cambios importantes</li>
          </ul>

          <h3>Después de refactorizar</h3>
          <ul style={{ fontSize: '0.95rem', lineHeight: '1.8' }}>
            <li>✓ Todos los tests pasan</li>
            <li>✓ Código es más legible</li>
            <li>✓ Métricas de complejidad bajaron</li>
            <li>✓ Performance no se degradó</li>
            <li>✓ Documentación está actualizada</li>
            <li>✓ Commit con mensaje claro</li>
          </ul>
        </>
      )
    },

    {
      title: 'Resumen: Aplicar SOLID en el Proyecto TFC',
      content: (
        <>
          <h3>Plan de acción</h3>
          <CodeBlock
            language="text"
            code={`FASE 1 - ARQUITECTURA (Semanas 1-2):
□ Diseñar con interfaces desde el inicio
□ Una clase = una responsabilidad
□ Inyección de dependencias en constructor
□ Evitar acoplamiento directo

FASE 2 - DESARROLLO (Semanas 3-10):
□ Implementar cada funcionalidad respetando SOLID
□ Tests unitarios mientras desarrollas
□ Code review con SOLID en mente

FASE 3 - REFACTORIZACIÓN (Semanas 11-12):
□ Identificar code smells
□ Refactorizar bajo cobertura de tests
□ Mejorar nombres confusos
□ Reducir duplicación

FASE 4 - VALIDACIÓN (Semana 13):
□ Todos los tests pasan
□ Revisión de arquitectura
□ Documentación actualizada

BENEFICIOS EN TU TFC:
✓ Código profesional y mantenible
✓ Fácil de testear (80%+ coverage)
✓ Evaluadores verán buena arquitectura
✓ Facilita trabajo en equipo
✓ Preparación para industria real`}
          />

          <InfoBox type="success">
            <strong>Recuerda:</strong> SOLID no son reglas rígidas, son guías.
            Úsalas para escribir código mejor, no para crear complejidad innecesaria.
          </InfoBox>
        </>
      )
    },
  ];

  const keyPoints = [
    'Single Responsibility: una clase, una razón para cambiar',
    'Open/Closed: extensible sin modificar código existente (herencia, interfaces)',
    'Liskov Substitution: subclases intercambiables por su tipo padre',
    'Interface Segregation: múltiples interfaces específicas vs una genérica',
    'Dependency Inversion: depender de abstracciones, no implementaciones',
    'Code Smells son indicadores de problemas más profundos',
    'Métodos >20 líneas, clases >200 líneas son señales de alerta',
    'Refactorización segura: tests primero, cambios pequeños, commit frecuente',
    'Técnicas: extraer método, extraer clase, renombrar, simplificar',
    'Patrones: Strategy, Factory, Decorator, Observer, Template Method',
    'Dependency Injection es clave para aplicar SOLID',
    'Tests garantizan que refactorización no rompe funcionalidad',
    'SOLID + TDD = código profesional y mantenible'
  ];

  const summary = `SOLID y Refactorización: Principios fundamentales para código mantenible.

SOLID (5 PRINCIPIOS):
1. Single Responsibility - Una clase, una razón para cambiar
2. Open/Closed - Extensible sin modificación
3. Liskov Substitution - Subtipos intercambiables
4. Interface Segregation - Interfaces específicas
5. Dependency Inversion - Dependencias inyectadas

CODE SMELLS (SEÑALES DE ALERTA):
• Métodos largos (>20 líneas)
• Clases grandes (>200 líneas)
• Duplicación de código
• Nombres confusos
• Parámetros múltiples

TÉCNICAS DE REFACTORIZACIÓN:
• Extraer método - Dividir responsabilidades
• Extraer clase - Separar concerns
• Renombrar - Mejorar claridad
• Simplificar condicionales - Guardias (early return)
• Reemplazar condicional por polimorfismo

PATRONES RELACIONADOS:
Strategy, Factory, Decorator, Observer, Template Method, Dependency Injection

FLUJO SEGURO:
1. Escribir tests (baseline)
2. Refactorizar en pasos pequeños
3. Tests deben pasar después de cada cambio
4. Commit frecuentemente
5. Code review

APLICAR EN TFC:
Desde el inicio: interfaces, inyección de dependencias, una responsabilidad por clase.
Durante desarrollo: tests, code review con SOLID en mente.
Refactorización final: bajo cobertura de tests, mejorar arquitectura.
Resultado: código profesional, testeable, escalable.`;

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