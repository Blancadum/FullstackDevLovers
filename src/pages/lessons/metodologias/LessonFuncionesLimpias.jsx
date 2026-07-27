import { LessonLayout, LessonSection, CodeBlock, InfoBox } from '../../../components';
import { LessonNavigation } from '../../../components/LessonNavigation';
import { useBreadcrumb } from '../../../hooks/useBreadcrumb';
import { useLessonNavigation } from '../../../hooks/useLessonNavigation';

export function LessonFuncionesLimpias() {
  const breadcrumbs = useBreadcrumb();
  const nav = useLessonNavigation();

  return (
    <>
      <LessonLayout
        title="Funciones Limpias"
        description="Principios para escribir funciones pequeñas, claras y con una única responsabilidad"
        breadcrumbs={breadcrumbs}
        seoTitle="Funciones Limpias en Clean Code"
        seoDescription="Cómo escribir funciones pequeñas, con una sola responsabilidad y fáciles de entender."
        seoKeywords="clean code, funciones limpias, single responsibility, refactorización"
        url="https://fullstackdevlovers.com/metodologias/clean-code/funciones"
      >
        <p>
          Ya tienes nombres claros; ahora toca meterlos dentro de métodos igual de claros. Un método que hace
          demasiadas cosas es difícil de leer, de testear y de reutilizar. En esta lección vas a ver los
          principios que convierten un método largo y enredado en varios métodos pequeños que se leen casi como
          prosa.
        </p>

        <LessonSection title="Funciones pequeñas" level={2}>
          <p>
            La primera regla de las funciones limpias es que sean <strong>pequeñas</strong>. No hay un número
            mágico de líneas válido para todos los casos, pero como regla práctica: si tu método no cabe en la
            pantalla sin hacer scroll, es buena señal de que está haciendo más de lo que debería.
          </p>

          <CodeBlock
            language="java"
            title="Mal ejemplo: un método que hace demasiado"
            code={`public void procesarPedido(Pedido pedido) {
  if (pedido.getItems().isEmpty()) {
    throw new IllegalArgumentException("El pedido no tiene items");
  }

  double total = 0;
  for (Item item : pedido.getItems()) {
    total += item.getPrecio() * item.getCantidad();
  }

  if (pedido.getCliente().esVIP()) {
    total = total * 0.9;
  }

  if (total > 1000) {
    total = total - 50;
  }

  pedidoRepository.guardar(pedido);
  emailService.enviarConfirmacion(pedido.getCliente().getEmail(), total);

  System.out.println("Pedido procesado. Total: " + total);
}`}
          />

          <CodeBlock
            language="java"
            title="Buen ejemplo: dividido en pasos con nombre"
            code={`public void procesarPedido(Pedido pedido) {
  validarPedido(pedido);
  double total = calcularTotalConDescuentos(pedido);
  guardarPedido(pedido);
  notificarConfirmacion(pedido, total);
}

private void validarPedido(Pedido pedido) {
  if (pedido.getItems().isEmpty()) {
    throw new IllegalArgumentException("El pedido no tiene items");
  }
}

private double calcularTotalConDescuentos(Pedido pedido) {
  double total = calcularSubtotal(pedido);
  total = aplicarDescuentoVIP(pedido, total);
  total = aplicarDescuentoPorVolumen(total);
  return total;
}

private double calcularSubtotal(Pedido pedido) {
  return pedido.getItems().stream()
      .mapToDouble(item -> item.getPrecio() * item.getCantidad())
      .sum();
}

private double aplicarDescuentoVIP(Pedido pedido, double total) {
  return pedido.getCliente().esVIP() ? total * 0.9 : total;
}

private double aplicarDescuentoPorVolumen(double total) {
  return total > 1000 ? total - 50 : total;
}

private void guardarPedido(Pedido pedido) {
  pedidoRepository.guardar(pedido);
}

private void notificarConfirmacion(Pedido pedido, double total) {
  emailService.enviarConfirmacion(pedido.getCliente().getEmail(), total);
}`}
          />

          <p>
            El método <code>procesarPedido</code> ahora se lee como un índice: validar, calcular, guardar,
            notificar. Cada método privado hace exactamente una cosa y su nombre lo explica.
          </p>
        </LessonSection>

        <LessonSection title="Una única responsabilidad (nivel de abstracción)" level={2}>
          <p>
            Cada función debe hacer <strong>una sola cosa</strong>, hacerla bien y no hacer nada más. Es la misma
            idea del principio de responsabilidad única (SRP) de SOLID, pero aplicada a nivel de método en lugar
            de a nivel de clase.
          </p>
          <InfoBox type="tip" title="¿Cómo saber si un método hace más de una cosa?">
            Si puedes extraer otro método con un nombre distinto que no sea simplemente una reformulación del
            original, tu método estaba haciendo más de una cosa.
          </InfoBox>
        </LessonSection>

        <LessonSection title="Pocos argumentos" level={2}>
          <p>
            Cuantos más parámetros tiene un método, más difícil es de entender, de llamar y de testear. Lo ideal
            es cero, uno o dos argumentos. A partir de tres, plantéate agrupar esos datos en un objeto.
          </p>

          <CodeBlock
            language="java"
            title="Mal ejemplo: demasiados parámetros"
            code={`public Usuario crearUsuario(String nombre, String apellido, String email,
    String telefono, String direccion, String ciudad, String codigoPostal) {
  // ...
  return new Usuario(nombre, apellido, email, telefono, direccion, ciudad, codigoPostal);
}`}
          />

          <CodeBlock
            language="java"
            title="Buen ejemplo: agrupado en un objeto"
            code={`public Usuario crearUsuario(DatosRegistroUsuario datos) {
  // ...
  return new Usuario(datos);
}

// DatosRegistroUsuario agrupa nombre, apellido, email, telefono y dirección
public record DatosRegistroUsuario(
    String nombre,
    String apellido,
    String email,
    String telefono,
    Direccion direccion
) {}`}
          />
        </LessonSection>

        <LessonSection title="Evitar flags booleanos como argumento" level={2}>
          <p>
            Un parámetro booleano en la firma de un método es casi siempre una señal de que ese método hace{' '}
            <strong>dos cosas distintas</strong> según el valor del flag. Es mejor dividirlo en dos métodos con
            nombres explícitos.
          </p>

          <CodeBlock
            language="java"
            code={`// Mal: ¿qué hace "true" aquí? Hay que ir a leer el método para saberlo
generarFactura(pedido, true);

// Bien: el nombre del método ya explica la intención
generarFacturaConDescuento(pedido);
generarFacturaSinDescuento(pedido);`}
          />
        </LessonSection>

        <LessonSection title="Sin efectos secundarios ocultos" level={2}>
          <p>
            Un método debe hacer lo que su nombre promete, ni más ni menos. Si un método llamado{' '}
            <code>isValido()</code> además modifica el estado del objeto o guarda algo en base de datos, está
            mintiendo sobre su propio nombre y provocará bugs difíciles de rastrear.
          </p>

          <CodeBlock
            language="java"
            title="Mal ejemplo: efecto secundario oculto"
            code={`public boolean isValido(Usuario usuario) {
  if (usuario.getEmail() == null) {
    return false;
  }
  usuario.setUltimaValidacion(LocalDateTime.now()); // efecto secundario inesperado
  return true;
}`}
          />

          <CodeBlock
            language="java"
            title="Buen ejemplo: el nombre coincide con lo que hace"
            code={`public boolean isValido(Usuario usuario) {
  return usuario.getEmail() != null;
}

public void registrarValidacion(Usuario usuario) {
  usuario.setUltimaValidacion(LocalDateTime.now());
}`}
          />
        </LessonSection>

        <LessonSection title="Resumen" level={2}>
          <ul>
            <li>Las funciones deben ser pequeñas y hacer una sola cosa.</li>
            <li>Extraer métodos con nombres claros convierte un bloque largo en algo que se lee como prosa.</li>
            <li>Con más de dos o tres parámetros, agrúpalos en un objeto o <code>record</code>.</li>
            <li>Evita flags booleanos como argumento: divide el método en dos con nombres explícitos.</li>
            <li>El nombre de un método es un contrato: no debe tener efectos secundarios que ese nombre no anuncie.</li>
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
