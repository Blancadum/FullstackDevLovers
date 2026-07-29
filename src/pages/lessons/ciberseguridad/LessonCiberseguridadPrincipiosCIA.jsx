import {
  LessonLayout,
  LessonSection,
  CodeBlock,
  InfoBox,
  Table,
  LessonKeyPoints,
  LessonExercises,
  LessonSummary
} from '../../../components';
import { LessonNavigation } from '../../../components/LessonNavigation';
import { useBreadcrumb } from '../../../hooks/useBreadcrumb';
import { useLessonNavigation } from '../../../hooks/useLessonNavigation';

export function LessonCiberseguridadPrincipiosCIA() {
  const breadcrumbs = useBreadcrumb();
  const nav = useLessonNavigation();

  const title = 'Principios CIA: Confidencialidad, Integridad, Disponibilidad';

  const keyPoints = [
    'La tríada CIA (Confidencialidad, Integridad, Disponibilidad) es el marco básico para razonar sobre cualquier decisión de seguridad',
    'Confidencialidad: solo quien está autorizado puede leer un dato (cifrado, control de acceso, principio de mínimo privilegio)',
    'Integridad: los datos no se alteran de forma no autorizada o no detectada, ni en tránsito ni almacenados (hashes, checksums, firmas digitales)',
    'Disponibilidad: el sistema sigue respondiendo cuando se le necesita, resistiendo picos de tráfico o intentos de saturación (rate limiting, redundancia, backups)',
    'Los tres principios entran en tensión entre sí: reforzar uno a menudo tiene coste sobre los otros, y hay que buscar un equilibrio según el contexto',
    'Casi cualquier control de seguridad que verás en el resto del módulo (HTTPS, hashing de contraseñas, autenticación, rate limiting) protege uno o varios de estos tres pilares'
  ];

  const exercises = [
    {
      title: 'Clasificar controles de seguridad según CIA',
      description:
        'Para cada uno de estos controles, indica si protege principalmente la Confidencialidad, la Integridad o la Disponibilidad (puede haber más de una respuesta razonable, justifica tu elección): (1) cifrar la conexión con HTTPS, (2) guardar un hash SHA-256 de un fichero descargable para comprobar que no se ha corrompido, (3) limitar a 100 peticiones por minuto por IP en un endpoint público, (4) cifrar las contraseñas de los usuarios en base de datos con bcrypt.',
      solution: `1. HTTPS -> Confidencialidad (cifra el contenido de la comunicación para que nadie pueda leerlo en tránsito) e Integridad (también protege frente a que alguien modifique los datos por el camino sin ser detectado).

2. Hash SHA-256 de un fichero -> Integridad: permite comprobar que el fichero descargado es exactamente el mismo que se publicó, sin alteraciones.

3. Rate limiting (100 peticiones/minuto) -> Disponibilidad: protege el servicio frente a que un cliente (malicioso o no) lo sature con peticiones y lo deje sin recursos para atender a los demás.

4. Contraseñas cifradas con bcrypt -> Confidencialidad: aunque alguien acceda a la base de datos, no puede leer las contraseñas originales.`
    },
    {
      title: 'Identificar el trade-off',
      description:
        'Una aplicación bancaria decide que, tras 3 intentos fallidos de login, la cuenta se bloquea automáticamente durante 24 horas y solo se puede desbloquear contactando con soporte. Explica qué principio de la tríada CIA se refuerza con esta medida y qué principio se ve perjudicado, y por qué.',
      solution: `Se refuerza la Confidencialidad (y en cierto modo la Integridad de la cuenta): bloquear la cuenta tras varios intentos fallidos dificulta que un atacante adivine la contraseña por fuerza bruta y acceda a datos que no le corresponden.

Se perjudica la Disponibilidad: si el propio usuario legítimo falla varias veces (por ejemplo, se equivoca al escribir la contraseña), se queda sin acceso a su propia cuenta durante 24 horas, lo cual es un coste real para él. Este es un ejemplo típico de trade-off: no existe una configuración "perfecta", hay que decidir el equilibrio según el contexto (por ejemplo, usar un bloqueo temporal más corto, o añadir verificación en dos pasos en lugar de un bloqueo largo).`
    }
  ];

  const summary = `La tríada CIA (Confidencialidad, Integridad, Disponibilidad) es el marco de referencia más básico para pensar en seguridad: casi cualquier control que aplicarás en el resto del módulo protege uno o varios de estos tres pilares.

• Confidencialidad: que solo acceda al dato quien está autorizado (cifrado en tránsito y en reposo, control de acceso, mínimo privilegio)
• Integridad: que el dato no se altere de forma no autorizada o no detectada (hashes, checksums, firmas digitales, validación de datos)
• Disponibilidad: que el sistema siga respondiendo cuando se necesita (rate limiting, redundancia, copias de seguridad, protección frente a saturación)
• Los tres principios compiten entre sí: maximizar uno casi siempre tiene un coste sobre los otros, por lo que toda decisión de seguridad implica un equilibrio (trade-off) ajustado al contexto y al riesgo real
• En las próximas lecciones verás amenazas y controles concretos (OWASP Top 10, autenticación, HTTPS, gestión de contraseñas); todos ellos se pueden explicar en términos de qué pilar de la tríada CIA protegen`;

  return (
    <>
      <LessonLayout
        title={title}
        description="Los tres pilares fundamentales de la seguridad de la información: Confidencialidad, Integridad y Disponibilidad"
        breadcrumbs={breadcrumbs}
        seoTitle="Principios CIA: Confidencialidad, Integridad, Disponibilidad | Ciberseguridad - Fullstack Dev Lovers"
        seoDescription="Aprende los principios CIA de la seguridad de la información: confidencialidad, integridad y disponibilidad, y cómo aplicarlos en tus aplicaciones."
        seoKeywords="principios cia, confidencialidad integridad disponibilidad, triada cia, seguridad informacion"
        url="https://fullstackdevlovers.com/ciberseguridad/fundamentos/principios-cia"
      >
        <p>
          En la lección anterior viste que la seguridad es responsabilidad de todo desarrollador, no solo
          de un equipo aparte. Pero para tomar buenas decisiones necesitas un marco común con el que
          razonar: no basta con "esto es más seguro", hay que poder decir <strong>seguro frente a qué</strong>.
          Ese marco es la <strong>tríada CIA</strong>: Confidencialidad, Integridad y Disponibilidad
          (<em>Confidentiality, Integrity, Availability</em>). Son los tres pilares clásicos de la
          seguridad de la información, y prácticamente cualquier control que verás en este módulo protege
          uno o varios de ellos.
        </p>

        <LessonSection title="Confidencialidad: que solo lea el dato quien debe">
          <p>
            La <strong>confidencialidad</strong> garantiza que la información solo esté disponible para las
            personas o sistemas autorizados. Se rompe cuando alguien sin permiso consigue leer un dato:
            una contraseña, un número de tarjeta, un historial médico, o incluso datos internos como
            credenciales de un servicio.
          </p>
          <p>En desarrollo web, la confidencialidad se protege con mecanismos como:</p>
          <ul>
            <li><strong>Cifrado en tránsito:</strong> usar HTTPS para que nadie pueda leer los datos mientras viajan por la red.</li>
            <li><strong>Cifrado en reposo:</strong> cifrar datos sensibles almacenados en base de datos o en disco.</li>
            <li><strong>Control de acceso:</strong> comprobar en cada petición que el usuario autenticado tiene permiso para ver ese dato concreto, no solo que está autenticado.</li>
            <li><strong>Principio de mínimo privilegio:</strong> dar a cada usuario, servicio o proceso solo los permisos estrictamente necesarios para su función.</li>
          </ul>
          <InfoBox type="info" title="Ejemplo cotidiano">
            Cuando un endpoint <code>GET /pedidos/{'{id}'}</code> comprueba no solo que el usuario ha
            iniciado sesión, sino que el pedido solicitado pertenece a ese usuario concreto, está aplicando
            confidencialidad: sin esa comprobación, cualquier usuario autenticado podría leer pedidos
            ajenos con solo cambiar el id en la URL.
          </InfoBox>
        </LessonSection>

        <LessonSection title="Integridad: que el dato no se altere sin autorización">
          <p>
            La <strong>integridad</strong> garantiza que un dato no se modifique de forma no autorizada, ni
            accidental ni maliciosamente, y que si se modifica, sea posible detectarlo. No se trata solo de
            impedir cambios, sino de poder confiar en que "lo que lees es lo que realmente se guardó o
            envió".
          </p>
          <p>Algunas herramientas habituales para proteger la integridad:</p>
          <ul>
            <li><strong>Funciones hash</strong> (como SHA-256): generan una huella única de un dato; si el dato cambia, la huella cambia, lo que permite detectar alteraciones.</li>
            <li><strong>Firmas digitales:</strong> combinan hashing y criptografía asimétrica para demostrar que un dato viene de quien dice venir y no se ha modificado por el camino.</li>
            <li><strong>Validación de datos de entrada:</strong> asegurarse de que los datos que llegan a tu API cumplen el formato y las reglas de negocio esperadas antes de guardarlos.</li>
            <li><strong>Control de versiones y transacciones:</strong> en base de datos, las transacciones evitan que una operación deje los datos a medio actualizar si algo falla.</li>
          </ul>
          <p>
            Un ejemplo muy directo de comprobación de integridad es generar y comparar un hash. En Java,
            puedes calcular un hash SHA-256 de un texto con la clase <code>MessageDigest</code>:
          </p>
          <CodeBlock
            language="java"
            code={`import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;

public class IntegridadEjemplo {

    public static String calcularHashSha256(String contenido) throws NoSuchAlgorithmException {
        MessageDigest digest = MessageDigest.getInstance("SHA-256");
        byte[] hashBytes = digest.digest(contenido.getBytes());

        StringBuilder hexString = new StringBuilder();
        for (byte b : hashBytes) {
            String hex = Integer.toHexString(0xff & b);
            if (hex.length() == 1) {
                hexString.append('0');
            }
            hexString.append(hex);
        }
        return hexString.toString();
    }

    public static void main(String[] args) throws NoSuchAlgorithmException {
        String documentoOriginal = "contrato-version-1";
        String hashOriginal = calcularHashSha256(documentoOriginal);

        // Si el contenido cambia una sola letra, el hash resultante es completamente distinto
        String documentoAlterado = "contrato-version-2";
        String hashAlterado = calcularHashSha256(documentoAlterado);

        System.out.println("Hash original:  " + hashOriginal);
        System.out.println("Hash alterado:  " + hashAlterado);
        System.out.println("¿Coinciden? " + hashOriginal.equals(hashAlterado));
    }
}`}
          />
          <InfoBox type="tip" title="Hashing no es lo mismo que cifrado">
            Un hash no se puede "deshacer" para recuperar el contenido original: es una operación de un
            solo sentido. Por eso se usa para verificar integridad (comparar huellas) y también para
            guardar contraseñas, como verás más adelante en el módulo. El cifrado, en cambio, sí está
            pensado para poder revertirse con la clave adecuada, y se usa sobre todo para confidencialidad.
          </InfoBox>
        </LessonSection>

        <LessonSection title="Disponibilidad: que el sistema responda cuando se le necesita">
          <p>
            La <strong>disponibilidad</strong> garantiza que un sistema, servicio o dato esté accesible
            para los usuarios legítimos cuando lo necesitan. Un sistema perfectamente confidencial e
            íntegro, pero que está caído la mitad del tiempo, no es un sistema seguro: simplemente ha
            fallado en otro de los tres pilares.
          </p>
          <p>Amenazas típicas contra la disponibilidad y controles habituales:</p>
          <Table
            headers={['Amenaza', 'Control habitual']}
            rows={[
              ['Ataques de denegación de servicio (DDoS)', 'Servicios de protección DDoS, balanceo de carga, CDN'],
              ['Un cliente que satura un endpoint con miles de peticiones', 'Rate limiting (limitar peticiones por IP, usuario o token en un periodo)'],
              ['Fallo de hardware o de infraestructura', 'Redundancia, réplicas, despliegues en varias zonas/regiones'],
              ['Pérdida o corrupción de datos', 'Copias de seguridad periódicas y probadas, no solo programadas']
            ]}
          />
          <InfoBox type="warning" title="Rate limiting no es opcional en APIs públicas">
            Cualquier endpoint expuesto a internet sin ningún límite de peticiones es, en la práctica, una
            invitación a que alguien (con intención maliciosa o simplemente con un bug en su cliente) lo
            sature. Verás cómo aplicar límites de peticiones en las lecciones dedicadas a seguridad de APIs
            REST más adelante en el módulo.
          </InfoBox>
        </LessonSection>

        <LessonSection title="Por qué hay que equilibrar los tres pilares">
          <p>
            Los tres principios no son independientes: reforzar uno casi siempre tiene un coste sobre los
            otros. No existe una configuración "perfecta" válida para cualquier aplicación; depende del
            contexto y de qué se está protegiendo.
          </p>
          <ul>
            <li>
              Bloquear una cuenta durante 24 horas tras varios intentos fallidos de login refuerza la{' '}
              <strong>confidencialidad</strong> (dificulta ataques de fuerza bruta), pero perjudica la{' '}
              <strong>disponibilidad</strong> para el usuario legítimo que simplemente se equivocó al
              escribir su contraseña.
            </li>
            <li>
              Cifrar todos los campos de una base de datos protege la <strong>confidencialidad</strong>,
              pero puede ralentizar las consultas y complicar operaciones como buscar o filtrar por esos
              campos, afectando indirectamente a la <strong>disponibilidad</strong> percibida (respuestas
              más lentas).
            </li>
            <li>
              Añadir validaciones exhaustivas en cada petición refuerza la{' '}
              <strong>integridad</strong> de los datos, pero cada validación adicional consume tiempo de
              procesamiento, lo que en sistemas de muy alto tráfico puede impactar en la{' '}
              <strong>disponibilidad</strong>.
            </li>
          </ul>
          <p>
            La habilidad no está en maximizar cada pilar por separado, sino en decidir, según el riesgo
            real de cada aplicación, dónde merece la pena invertir esfuerzo y dónde no.
          </p>
        </LessonSection>

        <LessonKeyPoints points={keyPoints} />
        <LessonExercises exercises={exercises} />
        <LessonSummary summary={summary} />
        {/* Aviso: no existe docs/criterios/ciberseguridad.md en el repo; este contenido se ha redactado
            aplicando las reglas base de tono, estructura y estilo del resto de lecciones del sitio. */}
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
