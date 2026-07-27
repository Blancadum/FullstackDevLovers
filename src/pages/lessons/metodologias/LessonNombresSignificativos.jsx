import { LessonLayout, LessonSection, CodeBlock, InfoBox } from '../../../components';
import { LessonNavigation } from '../../../components/LessonNavigation';
import { useBreadcrumb } from '../../../hooks/useBreadcrumb';
import { useLessonNavigation } from '../../../hooks/useLessonNavigation';

export function LessonNombresSignificativos() {
  const breadcrumbs = useBreadcrumb();
  const nav = useLessonNavigation();

  return (
    <>
      <LessonLayout
        title="Nombres Significativos"
        description="Cómo elegir nombres claros y descriptivos para variables, funciones y clases"
        breadcrumbs={breadcrumbs}
        seoTitle="Nombres Significativos en Clean Code"
        seoDescription="Principios de Clean Code para nombrar variables, funciones y clases de forma clara y descriptiva."
        seoKeywords="clean code, nombres significativos, naming, buenas prácticas"
        url="https://fullstackdevlovers.com/metodologias/clean-code/nombres"
      >
        <p>
          El código se escribe una vez pero se lee decenas de veces: por ti mismo dentro de tres meses, por un
          compañero que se incorpora al equipo o por quien tenga que arreglar un bug en producción a las once de
          la noche. El nombre que le pones a una variable, un método o una clase es la primera (y a veces única)
          documentación que esa persona va a tener. Esta lección abre el bloque de <strong>Clean Code</strong>{' '}
          empezando por lo más básico y más rentable: nombrar bien.
        </p>

        <LessonSection title="Nombres que revelan intención" level={2}>
          <p>
            Un buen nombre responde por sí solo a: por qué existe, qué hace y cómo se usa. Si necesitas un
            comentario al lado para explicar una variable, el nombre no está haciendo su trabajo.
          </p>

          <CodeBlock
            language="java"
            title="Mal ejemplo: nombres que no dicen nada"
            code={`public class Gestor {
  private List<int[]> d; // lista de [id, dias]

  public List<int[]> obtenerLista(List<int[]> l) {
    List<int[]> r = new ArrayList<>();
    for (int[] x : l) {
      if (x[1] > 30) {
        r.add(x);
      }
    }
    return r;
  }
}`}
          />

          <CodeBlock
            language="java"
            title="Buen ejemplo: nombres que revelan intención"
            code={`public class GestorSuscripciones {
  private List<Suscripcion> suscripciones;

  public List<Suscripcion> obtenerSuscripcionesVencidas(List<Suscripcion> suscripciones) {
    List<Suscripcion> vencidas = new ArrayList<>();
    for (Suscripcion suscripcion : suscripciones) {
      if (suscripcion.getDiasSinRenovar() > 30) {
        vencidas.add(suscripcion);
      }
    }
    return vencidas;
  }
}`}
          />

          <p>
            La segunda versión no necesita comentarios: <code>obtenerSuscripcionesVencidas</code> y{' '}
            <code>getDiasSinRenovar()</code> ya explican el negocio. Es más código, sí, pero se entiende sin
            esfuerzo.
          </p>
        </LessonSection>

        <LessonSection title="Evita nombres genéricos y ambiguos" level={2}>
          <p>
            Nombres como <code>data</code>, <code>info</code>, <code>temp</code>, <code>manager</code> o{' '}
            <code>obj</code> casi nunca aportan información real. Aparecen cuando no tenemos claro qué representa
            realmente esa variable o clase, así que suelen ser también un síntoma de diseño confuso.
          </p>

          <CodeBlock
            language="java"
            code={`// Mal: no sabemos qué tipo de dato es ni qué representa
Map<String, Object> data = obtenerData();

// Bien: el nombre y el tipo cuentan la historia
Map<String, Cliente> clientesPorEmail = obtenerClientesPorEmail();`}
          />

          <InfoBox type="warning">
            Cuidado también con la información falsa: no llames <code>listaDeUsuarios</code> a una variable de
            tipo <code>Set&lt;Usuario&gt;</code>. El tipo real y el nombre deben contar la misma historia.
          </InfoBox>
        </LessonSection>

        <LessonSection title="Nombres pronunciables y buscables" level={2}>
          <p>
            Si no puedes pronunciar un nombre en una conversación con tu equipo, es difícil discutir sobre ese
            código. Y si usas abreviaturas de una sola letra, luego es imposible buscarlas en todo el proyecto.
          </p>

          <CodeBlock
            language="java"
            code={`// Mal: no pronunciable, no buscable
Date genymdhms;
int e = 5;

// Bien: claro y buscable en todo el proyecto
Date fechaGeneracionRegistro;
int diasEsperaMaxima = 5;`}
          />

          <p>
            La excepción son variables de vida muy corta y ámbito muy reducido, como el contador{' '}
            <code>i</code> de un bucle <code>for</code> clásico: ahí una letra es aceptable porque el contexto es
            evidente y el alcance es de una sola línea.
          </p>
        </LessonSection>

        <LessonSection title="Convenciones de nombres en Java" level={2}>
          <p>
            Java tiene convenciones muy asentadas. Seguirlas no es solo estética: hace que cualquier desarrollador
            Java reconozca de un vistazo qué es cada cosa.
          </p>
          <ul>
            <li><strong>Clases e interfaces:</strong> <code>PascalCase</code>, sustantivos. Ej: <code>PedidoService</code>, <code>Comparable</code>.</li>
            <li><strong>Métodos y variables:</strong> <code>camelCase</code>, empezando en minúscula. Ej: <code>calcularTotal()</code>, <code>precioUnitario</code>.</li>
            <li><strong>Constantes:</strong> <code>MAYUSCULAS_CON_GUION_BAJO</code>. Ej: <code>MAX_INTENTOS_LOGIN</code>.</li>
            <li><strong>Paquetes:</strong> minúsculas, sin guiones. Ej: <code>com.empresa.pedidos</code>.</li>
            <li><strong>Métodos que devuelven booleano:</strong> prefijo <code>is</code>, <code>has</code> o <code>can</code>. Ej: <code>isValido()</code>, <code>hasPermiso()</code>.</li>
          </ul>

          <CodeBlock
            language="java"
            code={`public class PedidoValidator {

  private static final int MAX_ITEMS_PERMITIDOS = 50;

  public boolean isPedidoValido(Pedido pedido) {
    return pedido.getItems().size() <= MAX_ITEMS_PERMITIDOS;
  }

  public boolean hasStockSuficiente(Pedido pedido, Inventario inventario) {
    return inventario.tieneStockPara(pedido);
  }
}`}
          />
        </LessonSection>

        <LessonSection title="Resumen" level={2}>
          <ul>
            <li>Un buen nombre elimina la necesidad de comentarios explicativos.</li>
            <li>Evita nombres genéricos (<code>data</code>, <code>temp</code>, <code>manager</code>) que no dicen nada del dominio.</li>
            <li>Usa nombres pronunciables y buscables; las abreviaturas de una letra solo valen en ámbitos muy pequeños.</li>
            <li>Sigue las convenciones Java: PascalCase para clases, camelCase para métodos/variables, MAYUSCULAS para constantes.</li>
            <li>Los métodos booleanos deben leerse como una pregunta: <code>isValido()</code>, <code>hasPermiso()</code>.</li>
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
