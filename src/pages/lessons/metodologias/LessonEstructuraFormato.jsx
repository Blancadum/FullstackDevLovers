import { LessonLayout, LessonSection, CodeBlock, InfoBox } from '../../../components';
import { LessonNavigation } from '../../../components/LessonNavigation';
import { useBreadcrumb } from '../../../hooks/useBreadcrumb';
import { useLessonNavigation } from '../../../hooks/useLessonNavigation';

export function LessonEstructuraFormato() {
  const breadcrumbs = useBreadcrumb();
  const nav = useLessonNavigation();

  return (
    <>
      <LessonLayout
        title="Estructura y Formato"
        description="Convenciones de formato y organización que hacen el código más legible"
        breadcrumbs={breadcrumbs}
        seoTitle="Estructura y Formato del Código - Clean Code"
        seoDescription="Convenciones de formato, indentación y organización de archivos para un código más legible."
        seoKeywords="clean code, estructura, formato, legibilidad, convenciones"
        url="https://fullstackdevlovers.com/metodologias/clean-code/estructura"
      >
        <p>
          Con nombres claros y funciones pequeñas ya tienes las piezas; ahora falta ordenarlas. El formato de un
          archivo (dónde va cada cosa, cuánto se indenta, cómo se separan los bloques) no cambia si el programa
          funciona, pero sí cambia por completo lo rápido que alguien puede entenderlo. Un equipo que comparte
          convenciones de formato reduce fricción en cada <em>pull request</em>.
        </p>

        <LessonSection title="Formato vertical: orden dentro de un archivo" level={2}>
          <p>
            El "formato vertical" es cómo se organiza el código de arriba a abajo. La idea clave es que el
            código debe leerse como un periódico: lo más importante y general arriba, los detalles más abajo.
          </p>

          <CodeBlock
            language="java"
            title="Orden recomendado dentro de una clase Java"
            code={`public class PedidoService {

  // 1. Constantes
  private static final int MAX_ITEMS = 50;

  // 2. Campos de instancia
  private final PedidoRepository pedidoRepository;
  private final EmailService emailService;

  // 3. Constructor(es)
  public PedidoService(PedidoRepository pedidoRepository, EmailService emailService) {
    this.pedidoRepository = pedidoRepository;
    this.emailService = emailService;
  }

  // 4. Métodos públicos (la API de la clase)
  public void procesarPedido(Pedido pedido) {
    validarPedido(pedido);
    pedidoRepository.guardar(pedido);
    notificarConfirmacion(pedido);
  }

  // 5. Métodos privados de apoyo (los detalles de implementación)
  private void validarPedido(Pedido pedido) {
    if (pedido.getItems().size() > MAX_ITEMS) {
      throw new IllegalArgumentException("Demasiados items en el pedido");
    }
  }

  private void notificarConfirmacion(Pedido pedido) {
    emailService.enviarConfirmacion(pedido);
  }
}`}
          />

          <p>
            Fíjate en que cada método privado aparece justo <strong>debajo</strong> del método público que lo usa.
            Así, al leer de arriba a abajo, primero ves el "qué" (la API pública) y luego, si quieres profundizar,
            el "cómo" (los detalles privados).
          </p>

          <InfoBox type="tip" title="Espaciado entre conceptos">
            Deja una línea en blanco entre bloques que representan ideas distintas (por ejemplo, entre el
            constructor y el primer método). No dejes líneas en blanco dentro de un mismo bloque lógico
            cohesionado: rompen la sensación de "esto va junto".
          </InfoBox>
        </LessonSection>

        <LessonSection title="Formato horizontal: indentación y longitud de línea" level={2}>
          <p>
            La indentación (sangría) es lo primero que el ojo procesa para entender la jerarquía del código: qué
            está dentro de qué. En Java, la convención más extendida es indentar con <strong>2 o 4 espacios</strong>{' '}
            de forma consistente, nunca mezclando tabs y espacios en el mismo proyecto.
          </p>

          <CodeBlock
            language="java"
            title="Mal ejemplo: indentación inconsistente"
            code={`public class Validador {
public boolean esValido(String texto) {
if (texto == null) {
      return false;
  }
    return !texto.isEmpty();
}
}`}
          />

          <CodeBlock
            language="java"
            title="Buen ejemplo: indentación consistente"
            code={`public class Validador {

  public boolean esValido(String texto) {
    if (texto == null) {
      return false;
    }
    return !texto.isEmpty();
  }
}`}
          />

          <p>
            Sobre la longitud de línea: procura que las líneas no se disparen más allá de lo que cabe cómodamente
            en pantalla (una referencia habitual es no superar los 100-120 caracteres). Si una línea es demasiado
            larga, suele ser señal de que hay demasiada lógica anidada y conviene extraer una variable o un
            método intermedio.
          </p>
        </LessonSection>

        <LessonSection title="Consistencia en el equipo: formateadores automáticos" level={2}>
          <p>
            Discutir el formato manualmente en cada revisión de código es una pérdida de tiempo. La solución
            profesional es dejar que una herramienta lo haga por ti y que todo el equipo use la misma
            configuración.
          </p>
          <ul>
            <li>
              <strong>Formateador del IDE:</strong> IntelliJ IDEA y Eclipse permiten formatear con un atajo (por
              ejemplo, <code>Ctrl+Alt+L</code> en IntelliJ) aplicando un estilo consistente.
            </li>
            <li>
              <strong>Checkstyle:</strong> herramienta que valida (y puede fallar el build) si el código no
              cumple unas reglas de estilo definidas por el equipo.
            </li>
            <li>
              <strong>EditorConfig:</strong> archivo <code>.editorconfig</code> en la raíz del proyecto que fija
              indentación y fin de línea, y que la mayoría de editores respetan automáticamente.
            </li>
          </ul>
          <InfoBox type="success">
            Configurar un formateador automático al empezar un proyecto evita discusiones de estilo en los{' '}
            <em>pull requests</em> y deja esa energía para hablar de lo que de verdad importa: la lógica.
          </InfoBox>
        </LessonSection>

        <LessonSection title="Organización de archivos y paquetes" level={2}>
          <p>
            El mismo principio de "lo relacionado debe estar cerca" aplica también a nivel de proyecto. En Java,
            lo habitual es organizar los paquetes por funcionalidad o capa (por ejemplo,{' '}
            <code>controller</code>, <code>service</code>, <code>repository</code>, <code>model</code>), de forma
            que sea fácil predecir dónde vive cada clase antes incluso de buscarla.
          </p>
          <CodeBlock
            language="text"
            code={`com.empresa.tienda
├── controller
│   └── PedidoController.java
├── service
│   └── PedidoService.java
├── repository
│   └── PedidoRepository.java
└── model
    └── Pedido.java`}
          />
        </LessonSection>

        <LessonSection title="Resumen" level={2}>
          <ul>
            <li>El código se lee como un periódico: lo general arriba, los detalles abajo.</li>
            <li>Métodos públicos primero, seguidos de los métodos privados que usan.</li>
            <li>Indentación consistente (2 o 4 espacios) sin mezclar tabs y espacios.</li>
            <li>Líneas demasiado largas suelen indicar lógica que debería extraerse.</li>
            <li>Automatiza el formato con el IDE, Checkstyle o un archivo <code>.editorconfig</code> compartido por el equipo.</li>
            <li>Organiza los paquetes por capa o funcionalidad para que el proyecto sea predecible.</li>
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
