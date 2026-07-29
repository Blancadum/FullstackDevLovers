import {
  LessonLayout,
  LessonSection,
  CodeBlock,
  InfoBox,
  LessonKeyPoints,
  LessonExercises,
  LessonSummary
} from '../../../components';
import { LessonNavigation } from '../../../components/LessonNavigation';
import { useBreadcrumb } from '../../../hooks/useBreadcrumb';
import { useLessonNavigation } from '../../../hooks/useLessonNavigation';

export function LessonIAFundamentosPromptEngineering() {
  const breadcrumbs = useBreadcrumb();
  const nav = useLessonNavigation();

  const title = 'Fundamentos de Prompt Engineering';

  const keyPoints = [
    'Un prompt es el texto de entrada que le envías al modelo: es tu única forma de "programar" su comportamiento en cada llamada',
    'El modelo no lee tu mente: solo tiene el contexto que le das en el prompt (y, si existe, en el system prompt)',
    'Prompts ambiguos generan respuestas genéricas o inconsistentes entre una llamada y otra',
    'Ser específico reduce el espacio de respuestas posibles y acerca el resultado a lo que necesitas',
    'Dar contexto (stack, nivel, restricciones) evita que el modelo asuma cosas incorrectas sobre tu proyecto',
    'Pedir un formato de salida concreto es imprescindible si vas a parsear la respuesta con código',
    'Escribir prompts es un proceso iterativo: ajustar, probar y refinar, igual que harías con un test que falla'
  ];

  const exercises = [
    {
      title: 'Reescribe un prompt ambiguo',
      description:
        'Tienes el prompt "Ayúdame con paginación". Reescríbelo aplicando los tres principios de la lección (específico, con contexto, con formato de salida) para pedir un método de paginación en un endpoint REST de Spring Boot que use Pageable.',
      language: 'text',
      solution: `Eres un desarrollador backend experto en Spring Boot 3 y Java 17.

Contexto: tengo un controlador REST con un método findAll() en
ProductoRepository que devuelve List<Producto>. Quiero paginar los
resultados del endpoint GET /productos.

Tarea: escribe el método del controlador y el cambio necesario en el
repositorio para soportar paginación con Pageable, aceptando los
parámetros de query "page" y "size", con page=0 y size=10 por defecto.

Formato de salida: devuélveme solo el código Java del controlador y del
repositorio, sin explicaciones adicionales.`
    },
    {
      title: 'Detecta qué falla en un prompt',
      description:
        'Lee este prompt: "Hazme una función de login en Java". Enumera al menos tres motivos por los que es un prompt de baja calidad, según los principios vistos en esta lección.',
      language: 'text',
      solution: `Motivos por los que es un prompt de baja calidad:

1. No es específico: no dice si es login de consola, de una API REST,
   con qué mecanismo de autenticación (sesión, JWT...), ni qué datos
   recibe.
2. No da contexto: no menciona el stack (Spring Boot, JPA, una clase
   Usuario existente, un servicio de autenticación...) ni el nivel de
   quien lo va a usar.
3. No pide un formato de salida: no aclara si quiere solo el código,
   con explicación, con tests, o con manejo de errores incluido.
4. Es ambiguo sobre el resultado esperado: "hazme una función" puede
   interpretarse de decenas de formas distintas, así que dos ejecuciones
   del mismo prompt pueden dar soluciones muy diferentes entre sí.`
    }
  ];

  const summary = `Un prompt es la entrada de texto que controla lo que el modelo genera, y su redacción influye tanto en el resultado como el propio modelo elegido:

• El modelo solo "sabe" lo que le cuentas en el prompt: no conoce tu proyecto, tu stack ni tus restricciones si no se las das
• Principio 1 — Sé específico: cuanto más concreta la petición, menor es la variedad de respuestas posibles
• Principio 2 — Da contexto: indica tu stack, tu nivel y las restricciones del problema real
• Principio 3 — Pide un formato de salida concreto: útil sobre todo si vas a procesar la respuesta con código
• Un prompt "malo" suele ser corto, vago y sin contexto; uno "bueno" es concreto, contextualizado y define qué forma debe tener la respuesta
• Escribir buenos prompts es un proceso iterativo, no algo que se acierta siempre a la primera`;

  return (
    <>
      <LessonLayout
        title={title}
        description="Qué es un prompt, por qué la forma de pedir las cosas cambia la respuesta del modelo y los principios básicos para escribir prompts efectivos."
        breadcrumbs={breadcrumbs}
        seoTitle="Fundamentos de Prompt Engineering | Inteligencia Artificial - Fullstack Dev Lovers"
        seoDescription="Aprende qué es un prompt, por qué su redacción afecta la calidad de la respuesta y los principios básicos del prompt engineering: especificidad, contexto y formato de salida."
        seoKeywords="prompt engineering, fundamentos prompting, que es un prompt, inteligencia artificial"
        url="https://fullstackdevlovers.com/ia/prompt-engineering/fundamentos-prompt-engineering"
      >
        <p>
          Ya sabes cómo llamar a la API de Claude o de OpenAI: envías un texto y recibes una respuesta
          generada por el modelo. Lo que todavía no has visto es que <strong>la forma en la que escribes
          ese texto</strong> influye tanto en la calidad del resultado como el propio modelo que uses. En
          esta lección vas a aprender qué es exactamente un prompt, por qué su redacción importa y los
          principios básicos para escribir prompts que te den respuestas útiles a la primera, sin tener que
          repetir la llamada tres veces.
        </p>

        <LessonSection title="¿Qué es un prompt?">
          <p>
            Un <strong>prompt</strong> es el texto de entrada que le envías al modelo en el campo{' '}
            <code>content</code> de un mensaje. Es la única forma que tienes de indicarle qué quieres: no
            hay parámetros tipados como en una función Java, ni un contrato de interfaz que el modelo esté
            obligado a cumplir. Todo lo que necesitas comunicar —la tarea, el contexto, las restricciones,
            el formato esperado— tiene que ir dentro de ese texto.
          </p>
          <p>
            Puedes pensar en el prompt como en el <em>issue</em> de un ticket que le describes a un
            compañero de equipo: si el ticket dice solo "arregla el login", el resultado dependerá de cómo
            interprete esa frase quien lo lea. Si el ticket describe el problema concreto, el contexto y qué
            se espera como solución, las probabilidades de recibir lo que necesitas suben mucho. Con un
            modelo de lenguaje pasa exactamente lo mismo, con la diferencia de que no puede preguntarte para
            aclarar dudas a mitad de la tarea (salvo que se lo pidas explícitamente).
          </p>
        </LessonSection>

        <LessonSection title="Por qué la redacción del prompt cambia la respuesta">
          <p>
            Un modelo de lenguaje genera su respuesta prediciendo, palabra a palabra, qué es lo más
            probable a partir de todo el texto que ha recibido como entrada. Eso significa que dos prompts
            que "parecen" pedir lo mismo pero están redactados de forma distinta pueden producir resultados
            distintos, porque cambian qué es "lo más probable" para el modelo en cada caso.
          </p>
          <InfoBox type="info" title="No es magia, es entrada y salida">
            No hace falta tratar al modelo como una caja negra impredecible. Igual que validas la entrada de
            una API antes de procesarla, tratar el prompt como una entrada que puedes mejorar, probar y
            refinar es la base del prompt engineering.
          </InfoBox>
        </LessonSection>

        <LessonSection title="Principio 1: sé específico">
          <p>
            Cuanto más concreta es tu petición, menor es el abanico de respuestas posibles y más cerca
            estará el resultado de lo que necesitas. Compara estos dos prompts:
          </p>
          <CodeBlock
            language="text"
            title="Prompt malo"
            code={`Explícame los arrays en Java`}
          />
          <CodeBlock
            language="text"
            title="Prompt bueno"
            code={`Explícame en máximo 5 líneas qué es un array en Java, con un ejemplo
de declaración y otro de recorrido con for-each. Asume que ya sé qué
son las variables y los bucles for.`}
          />
          <p>
            El primero puede devolver desde una definición de tres líneas hasta un artículo completo con
            historia del lenguaje. El segundo acota la extensión, el contenido exacto (declaración +
            recorrido) y el nivel del lector, así que el resultado es mucho más predecible.
          </p>
        </LessonSection>

        <LessonSection title="Principio 2: da contexto">
          <p>
            El modelo no conoce tu proyecto: no sabe qué framework usas, qué versión de Java tienes
            instalada, ni qué clases ya existen en tu código. Si no se lo dices, va a asumir lo más genérico
            posible, que casi nunca encaja con tu caso real.
          </p>
          <CodeBlock
            language="text"
            title="Prompt malo"
            code={`Dame un endpoint para consultar un producto por id`}
          />
          <CodeBlock
            language="text"
            title="Prompt bueno"
            code={`Estoy trabajando con Spring Boot 3 y Java 17. Tengo una entidad
Producto con un ProductoRepository que extiende JpaRepository.

Dame el método de un controlador REST para GET /productos/{id} que
devuelva el producto si existe, y un 404 Not Found si no existe,
usando ResponseEntity.`}
          />
          <p>
            El segundo prompt fija el stack (Spring Boot 3, Java 17), lo que ya existe en el proyecto
            (entidad y repositorio) y el comportamiento exacto esperado, incluido el caso de error. El
            resultado va a encajar con tu código real en lugar de ser un ejemplo genérico que tengas que
            adaptar a mano.
          </p>
        </LessonSection>

        <LessonSection title="Principio 3: pide un formato de salida concreto">
          <p>
            Por defecto, el modelo suele responder en prosa, mezclando explicación y código. Eso está bien
            si vas a leer la respuesta tú mismo, pero es un problema si necesitas <strong>procesar</strong>{' '}
            esa respuesta con código: parsear un JSON, extraer solo un bloque de código, o insertar el
            resultado en una plantilla. En esos casos, indica explícitamente el formato que esperas.
          </p>
          <CodeBlock
            language="text"
            code={`Dame solo el código Java del método, sin explicaciones antes ni
después. No uses bloques de markdown, solo el código plano.`}
          />
          <p>
            En la próxima lección verás cómo pedir formatos más estructurados, como JSON, para integrar la
            respuesta directamente en tu aplicación.
          </p>
        </LessonSection>

        <LessonSection title="Prompt malo vs prompt bueno: un ejemplo completo">
          <p>
            Vamos a juntar los tres principios en un caso realista: pedirle al modelo que valide los campos
            de una clase <code>Usuario</code>.
          </p>
          <CodeBlock
            language="text"
            title="Prompt malo"
            code={`Valida esta clase:

public class Usuario {
    private String email;
    private String password;
    private int edad;
}`}
          />
          <CodeBlock
            language="text"
            title="Prompt bueno"
            code={`Eres un desarrollador backend Java con experiencia en Spring Boot.

Contexto: tengo esta clase, usada como cuerpo de una petición REST
con Bean Validation (jakarta.validation):

public class Usuario {
    private String email;
    private String password;
    private int edad;
}

Tarea: añade las anotaciones de validación necesarias para que:
- email tenga formato de correo válido y no esté vacío
- password tenga al menos 8 caracteres
- edad sea un número igual o mayor a 18

Formato de salida: devuélveme solo la clase completa con las
anotaciones añadidas, sin explicaciones.`}
          />
          <p>
            El prompt malo obliga al modelo a adivinar qué reglas de validación quieres, en qué framework
            de validación y en qué formato devolver el resultado. El prompt bueno no deja ninguna de esas
            decisiones al azar: define el rol, el contexto, la tarea exacta y el formato de salida.
          </p>
        </LessonSection>

        <LessonKeyPoints points={keyPoints} />
        <LessonExercises exercises={exercises} />
        <LessonSummary summary={summary} />
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
