import { LessonLayout, LessonSection, CodeBlock, InfoBox } from '../../../components';
import { LessonNavigation } from '../../../components/LessonNavigation';
import { useBreadcrumb } from '../../../hooks/useBreadcrumb';
import { useLessonNavigation } from '../../../hooks/useLessonNavigation';

export function LessonAntipatrones() {
  const breadcrumbs = useBreadcrumb();
  const nav = useLessonNavigation();

  return (
    <>
      <LessonLayout
        title="Antipatrones: Qué NO Hacer"
        description="Prácticas comunes que deterioran la calidad del código y cómo evitarlas"
        breadcrumbs={breadcrumbs}
        seoTitle="Antipatrones de Código - Qué NO Hacer"
        seoDescription="Antipatrones y code smells más comunes en el desarrollo de software y cómo evitarlos."
        seoKeywords="antipatrones, code smells, clean code, malas prácticas"
        url="https://fullstackdevlovers.com/metodologias/clean-code/antipatrones"
      >
        <p>
          Cerramos el bloque de Clean Code con el lado opuesto: los <strong>antipatrones</strong>. Un antipatrón
          es una solución que parece razonable a corto plazo (es rápida de escribir) pero que a medio plazo hace
          el código más difícil de mantener. Reconocerlos es tan importante como conocer las buenas prácticas,
          porque son los que verás con más frecuencia en proyectos reales que llevan tiempo creciendo sin cuidado.
        </p>

        <LessonSection title="God Object / God Class" level={2}>
          <p>
            Una clase que sabe demasiado y hace demasiado. Acumula responsabilidades de forma descontrolada
            porque es "más fácil" añadir un método más ahí que crear una clase nueva. Es la violación más clara
            del principio de responsabilidad única.
          </p>

          <CodeBlock
            language="java"
            title="Antipatrón: God Class"
            code={`public class GestorTienda {
  public void crearUsuario(String nombre, String email) { /* ... */ }
  public void validarEmail(String email) { /* ... */ }
  public void calcularPrecioConImpuestos(double precio) { /* ... */ }
  public void generarFactura(Pedido pedido) { /* ... */ }
  public void enviarEmailBienvenida(String email) { /* ... */ }
  public void conectarConBaseDeDatos() { /* ... */ }
  public void exportarReporteVentas() { /* ... */ }
  public void gestionarInventario() { /* ... */ }
  // ...y sigue creciendo con cada nueva funcionalidad
}`}
          />

          <CodeBlock
            language="java"
            title="Solución: dividir por responsabilidad"
            code={`public class UsuarioService {
  public void crearUsuario(String nombre, String email) { /* ... */ }
}

public class FacturacionService {
  public void generarFactura(Pedido pedido) { /* ... */ }
}

public class EmailService {
  public void enviarEmailBienvenida(String email) { /* ... */ }
}

public class InventarioService {
  public void gestionarInventario() { /* ... */ }
}`}
          />
        </LessonSection>

        <LessonSection title="Spaghetti Code" level={2}>
          <p>
            Código sin estructura clara, con lógica de control enredada (condicionales anidados varios niveles,
            saltos poco predecibles) donde es difícil seguir el flujo de ejecución sin ir línea a línea con el
            depurador.
          </p>

          <CodeBlock
            language="java"
            title="Antipatrón: anidación excesiva"
            code={`public String procesarSolicitud(Solicitud solicitud) {
  if (solicitud != null) {
    if (solicitud.getUsuario() != null) {
      if (solicitud.getUsuario().estaActivo()) {
        if (solicitud.getMonto() > 0) {
          if (solicitud.getUsuario().tieneFondos(solicitud.getMonto())) {
            return "Aprobada";
          } else {
            return "Fondos insuficientes";
          }
        } else {
          return "Monto invalido";
        }
      } else {
        return "Usuario inactivo";
      }
    } else {
      return "Usuario no encontrado";
    }
  } else {
    return "Solicitud invalida";
  }
}`}
          />

          <CodeBlock
            language="java"
            title="Solución: cláusulas de guarda (early return)"
            code={`public String procesarSolicitud(Solicitud solicitud) {
  if (solicitud == null) return "Solicitud invalida";

  Usuario usuario = solicitud.getUsuario();
  if (usuario == null) return "Usuario no encontrado";
  if (!usuario.estaActivo()) return "Usuario inactivo";
  if (solicitud.getMonto() <= 0) return "Monto invalido";
  if (!usuario.tieneFondos(solicitud.getMonto())) return "Fondos insuficientes";

  return "Aprobada";
}`}
          />
        </LessonSection>

        <LessonSection title="Copy-Paste Programming (duplicación)" level={2}>
          <p>
            Duplicar un bloque de código en lugar de extraerlo a un método reutilizable. Es rápido al escribirlo,
            pero un desastre al mantenerlo: si hay un bug o cambia una regla de negocio, hay que recordar
            corregirlo en todos los sitios donde se copió.
          </p>

          <CodeBlock
            language="java"
            title="Antipatrón: lógica duplicada"
            code={`public double calcularPrecioFinalWeb(double precio) {
  double conIva = precio * 1.21;
  return Math.round(conIva * 100.0) / 100.0;
}

public double calcularPrecioFinalTienda(double precio) {
  double conIva = precio * 1.21;
  return Math.round(conIva * 100.0) / 100.0;
}`}
          />

          <CodeBlock
            language="java"
            title="Solución: extraer a un único método"
            code={`public double calcularPrecioFinal(double precio) {
  double conIva = precio * 1.21;
  return Math.round(conIva * 100.0) / 100.0;
}

// Web y tienda física llaman al mismo método
double precioWeb = calcularPrecioFinal(precio);
double precioTienda = calcularPrecioFinal(precio);`}
          />

          <InfoBox type="info" title="DRY: Don't Repeat Yourself">
            El principio DRY resume esta idea: cada pieza de conocimiento del sistema debe tener una única
            representación autorizada dentro del código.
          </InfoBox>
        </LessonSection>

        <LessonSection title="Magic Numbers y Magic Strings" level={2}>
          <p>
            Usar valores literales sueltos en medio del código sin explicar qué representan. Quien lo lea no
            sabe por qué ese número o texto es importante, y si aparece repetido, cambiarlo implica buscarlo por
            todo el proyecto.
          </p>

          <CodeBlock
            language="java"
            title="Antipatrón: números y strings mágicos"
            code={`if (usuario.getEdad() >= 18) {
  // permitir acceso
}

if (pedido.getEstado().equals("PENDIENTE")) {
  // procesar
}`}
          />

          <CodeBlock
            language="java"
            title="Solución: constantes con nombre"
            code={`private static final int EDAD_MINIMA_ACCESO = 18;

if (usuario.getEdad() >= EDAD_MINIMA_ACCESO) {
  // permitir acceso
}

// Aún mejor: usar un enum en lugar de un String suelto
if (pedido.getEstado() == EstadoPedido.PENDIENTE) {
  // procesar
}`}
          />
        </LessonSection>

        <LessonSection title="Código muerto y comentarios como parche" level={2}>
          <p>
            Dejar código comentado "por si acaso" o líneas que nunca se ejecutan añade ruido y confunde: quien lo
            lea no sabe si es seguro borrarlo o si sigue en uso. El control de versiones (Git) ya guarda el
            historial, así que no hace falta conservar código muerto "por si se necesita luego".
          </p>
          <p>
            Del mismo modo, un comentario que explica <em>qué</em> hace una línea de código confusa suele ser un
            parche: es mejor reescribir esa línea con nombres claros que necesiten menos explicación.
          </p>

          <CodeBlock
            language="java"
            title="Antipatrón: código muerto y comentario parche"
            code={`public double calcular(double p, double c) {
  // multiplica precio por cantidad y aplica el descuento del 10%
  return p * c * 0.9;
  // return p * c; // version antigua sin descuento
}`}
          />

          <CodeBlock
            language="java"
            title="Solución: nombres claros, sin código muerto"
            code={`private static final double DESCUENTO_ESTANDAR = 0.9;

public double calcularPrecioConDescuento(double precioUnitario, double cantidad) {
  return precioUnitario * cantidad * DESCUENTO_ESTANDAR;
}`}
          />

          <InfoBox type="warning">
            Si tienes miedo de borrar código "por si acaso", confía en Git: siempre puedes recuperarlo del
            historial. No hace falta guardarlo comentado en medio del código activo.
          </InfoBox>
        </LessonSection>

        <LessonSection title="Resumen" level={2}>
          <ul>
            <li><strong>God Object:</strong> una clase que hace demasiado; divide por responsabilidad.</li>
            <li><strong>Spaghetti Code:</strong> anidación excesiva; usa cláusulas de guarda (early return).</li>
            <li><strong>Copy-Paste Programming:</strong> duplicación de lógica; aplica el principio DRY.</li>
            <li><strong>Magic Numbers/Strings:</strong> valores sueltos sin contexto; usa constantes o enums.</li>
            <li><strong>Código muerto y comentarios parche:</strong> confía en Git y en nombres claros en vez de acumular ruido.</li>
            <li>Todos estos antipatrones comparten una raíz común: priorizar la rapidez inmediata sobre el mantenimiento futuro.</li>
          </ul>
        </LessonSection>
      </LessonLayout>
      <LessonNavigation
        previousLink={nav.previous}
        previousTitle={nav.previousTitle}
        nextLink={nav.next}
        nextTitle={nav.nextTitle}
      />
    </>
  );
}
