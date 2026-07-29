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

export function LessonCiberseguridadQueEsCiberseguridad() {
  const breadcrumbs = useBreadcrumb();
  const nav = useLessonNavigation();

  const title = 'Qué es la ciberseguridad y por qué importa en desarrollo web';

  const keyPoints = [
    'La ciberseguridad es el conjunto de prácticas, procesos y controles para proteger sistemas, datos y usuarios frente a accesos, usos o daños no autorizados',
    'No es "cosa de otro equipo": cada línea de código que expone un endpoint, recibe datos de un usuario o consulta una base de datos es una posible puerta de entrada',
    'Que un endpoint "funcione" (devuelva el resultado esperado con datos correctos) no implica que sea seguro frente a datos maliciosos o usos inesperados',
    'Una brecha de seguridad tiene coste económico, coste de reputación y, en la Unión Europea, coste legal por incumplimiento del RGPD/GDPR',
    'Pensar en seguridad desde el diseño (y no como un parche al final) es mucho más barato y eficaz que corregir vulnerabilidades en producción',
    'Esta lección es la base del módulo: en las siguientes verás principios (CIA), amenazas concretas, OWASP Top 10 y buenas prácticas de autenticación'
  ];

  const exercises = [
    {
      title: 'Funciona vs. es seguro',
      description:
        'Un compañero ha creado un endpoint de login en Spring Boot que consulta al usuario en base de datos concatenando el email y la contraseña recibidos directamente en la consulta SQL, sin usar parámetros. El endpoint "funciona": si el usuario y la contraseña son correctos, deja pasar; si no, deniega el acceso. ¿Dirías que este endpoint está "terminado"? Justifica tu respuesta en 3-4 líneas.',
      solution: `No, no está terminado, aunque cumpla el caso de uso feliz. Un endpoint que construye una consulta SQL concatenando texto recibido del usuario es vulnerable a inyección SQL: alguien podría escribir en el campo de email algo como ' OR '1'='1 para alterar la lógica de la consulta y acceder sin conocer una contraseña válida, o incluso leer o borrar datos de otras tablas. "Funciona" solo describe el comportamiento con entradas normales; "es seguro" implica que también se comporta de forma segura con entradas maliciosas o inesperadas. Este caso concreto (inyección SQL) se trata en detalle más adelante en el módulo.`
    },
    {
      title: 'Identificar el coste de una brecha',
      description:
        'Imagina que la aplicación de un ecommerce sufre una brecha de seguridad y se filtran los nombres, emails y direcciones postales de 10.000 clientes. Enumera al menos tres tipos de consecuencias distintas que podría sufrir la empresa, más allá de "arreglar el fallo técnico".',
      solution: `Algunas consecuencias posibles (no hace falta citarlas todas, basta con identificar varias categorías distintas):

1. Económicas: coste de investigar el incidente, notificar a los afectados, posibles indemnizaciones y, en la UE, sanciones del RGPD que pueden alcanzar hasta 20 millones de euros o el 4% de la facturación anual mundial, lo que sea mayor, en las infracciones más graves.
2. Legales/regulatorias: obligación de notificar la brecha a la autoridad de control (en España, la AEPD) en un plazo de 72 horas desde que se tiene constancia del incidente, y en muchos casos también a los propios afectados.
3. Reputacionales: pérdida de confianza de los clientes actuales y potenciales, cobertura negativa en medios, impacto en la marca a medio plazo.
4. Operativas: tiempo de desarrollo desviado a corregir el fallo y auditar el resto del sistema, en lugar de construir nuevas funcionalidades.`
    }
  ];

  const summary = `La ciberseguridad no es un departamento aparte ni una capa que se añade al final: es una responsabilidad que forma parte del trabajo diario de cualquier desarrollador backend.

• La ciberseguridad protege sistemas, datos y usuarios frente a accesos, usos o daños no autorizados
• Cada endpoint, formulario o consulta a base de datos que escribes es una posible puerta de entrada si no se diseña con cuidado
• "Funciona" (el caso feliz da el resultado esperado) no es lo mismo que "es seguro" (se comporta bien también ante entradas maliciosas o inesperadas)
• No tener en cuenta la seguridad tiene coste económico, coste legal (RGPD/GDPR en la UE) y coste de reputación, además del coste técnico de corregir el fallo
• Diseñar pensando en seguridad desde el principio ("shift left") es mucho más barato que parchear vulnerabilidades ya en producción

A partir de aquí, el módulo profundiza en los principios que guían cualquier decisión de seguridad (CIA), los tipos de amenazas más comunes, el OWASP Top 10 y las prácticas concretas de autenticación y protección de datos que aplicarás en tus propias APIs.`;

  return (
    <>
      <LessonLayout
        title={title}
        description="Introducción a la ciberseguridad y por qué es una responsabilidad clave del desarrollador web"
        breadcrumbs={breadcrumbs}
        seoTitle="Qué es la ciberseguridad y por qué importa en desarrollo web | Ciberseguridad - Fullstack Dev Lovers"
        seoDescription="Descubre qué es la ciberseguridad, por qué es fundamental en el desarrollo web y qué papel juega el desarrollador en la protección de sus aplicaciones."
        seoKeywords="ciberseguridad, seguridad informatica, seguridad web, que es la ciberseguridad"
        url="https://fullstackdevlovers.com/ciberseguridad/fundamentos/que-es-ciberseguridad"
      >
        <p>
          Hasta ahora te has centrado en que tu código <strong>funcione</strong>: que el endpoint devuelva
          los datos correctos, que el formulario guarde el registro, que la consulta a base de datos
          traiga lo que toca. Es un paso imprescindible, pero incompleto. En cuanto tu aplicación se
          publica en internet, deja de tratar solo con usuarios bien intencionados que siguen el camino
          esperado: cualquier persona con un navegador, un script o unos conocimientos mínimos puede enviar
          datos distintos a los que imaginabas. En esta lección vas a ver qué es exactamente la{' '}
          <strong>ciberseguridad</strong>, por qué es responsabilidad tuya como desarrollador (no solo de
          un equipo de seguridad separado) y qué se juega una empresa cuando no se toma en serio.
        </p>

        <LessonSection title="Qué es la ciberseguridad">
          <p>
            La <strong>ciberseguridad</strong> es el conjunto de prácticas, procesos y controles técnicos
            orientados a proteger sistemas, redes, aplicaciones y datos frente a accesos, usos,
            modificaciones o interrupciones no autorizados. En el contexto del desarrollo web, esto se
            traduce en preguntas muy concretas que deberías hacerte sobre tu propio código:
          </p>
          <ul>
            <li>¿Qué pasa si alguien envía un dato que no esperaba mi API (más largo, con caracteres especiales, de otro tipo)?</li>
            <li>¿Puede un usuario acceder a datos o acciones que no le corresponden?</li>
            <li>¿Están protegidos los datos sensibles (contraseñas, datos personales, pagos) tanto en tránsito como almacenados?</li>
            <li>¿Qué ocurre si alguien intenta saturar mi servicio con miles de peticiones por segundo?</li>
          </ul>
          <p>
            Ninguna de estas preguntas depende de un "equipo de seguridad" externo: dependen de cómo
            diseñas y escribes tu backend.
          </p>
        </LessonSection>

        <LessonSection title="Por qué es responsabilidad del desarrollador">
          <p>
            En empresas grandes puede existir un equipo dedicado a seguridad (a veces llamado{' '}
            <em>AppSec</em> o <em>DevSecOps</em>), pero ese equipo no revisa cada línea de código antes de
            que llegue a producción. Su trabajo suele ser definir estándares, hacer auditorías periódicas y
            revisar los casos más críticos, no sustituir el criterio del desarrollador en el día a día.
          </p>
          <p>
            La inmensa mayoría de las vulnerabilidades no aparecen porque falte un "escáner de seguridad",
            sino porque se toman decisiones de código que no consideran el caso malicioso: una consulta
            SQL construida por concatenación de texto, una contraseña guardada en texto plano, un endpoint
            que confía en un identificador enviado por el cliente sin comprobar que pertenece al usuario
            autenticado. Son decisiones que toma quien escribe el código, no un equipo externo.
          </p>
          <InfoBox type="info" title="Shift left: seguridad desde el principio">
            En seguridad se habla de "shift left" (desplazar hacia la izquierda) para describir la idea de
            introducir la seguridad lo antes posible en el ciclo de desarrollo, en vez de tratarla como una
            revisión final antes de publicar. Cuanto antes se detecta un problema de seguridad, más barato
            es corregirlo.
          </InfoBox>
        </LessonSection>

        <LessonSection title='"Funciona" no es lo mismo que "es seguro"'>
          <p>
            Un mismo fragmento de código puede pasar todos los tests funcionales y, aun así, ser inseguro.
            Mira este ejemplo: un endpoint de login en Spring Boot que construye la consulta SQL
            concatenando directamente los datos recibidos en el cuerpo de la petición.
          </p>
          <CodeBlock
            language="java"
            code={`// NO HACER: construye la consulta concatenando texto del usuario
@PostMapping("/login")
public ResponseEntity<?> login(@RequestBody LoginRequest request) {
    String sql = "SELECT * FROM usuarios WHERE email = '" + request.getEmail() +
                 "' AND password = '" + request.getPassword() + "'";

    Usuario usuario = jdbcTemplate.queryForObject(sql, this::mapRowToUsuario);

    if (usuario != null) {
        return ResponseEntity.ok("Acceso concedido");
    }
    return ResponseEntity.status(401).body("Credenciales incorrectas");
}`}
          />
          <p>
            Con un email y una contraseña normales, este endpoint <strong>funciona</strong>: la consulta
            se construye bien y el flujo se comporta como se espera. Pero si alguien envía como email{' '}
            <code>' OR '1'='1</code>, la consulta resultante deja de comprobar credenciales reales y
            devuelve el primer usuario de la tabla, dejando pasar a un atacante sin conocer ninguna
            contraseña. El código "funciona" en el sentido de que compila y responde, pero{' '}
            <strong>no es seguro</strong>. Verás cómo evitar este problema concreto (inyección SQL) más
            adelante en el módulo.
          </p>
        </LessonSection>

        <LessonSection title="El coste de no tenerla en cuenta">
          <p>
            Cuando una aplicación sufre una brecha de seguridad, el coste no se limita a "arreglar el
            bug". Suele repartirse en varias categorías:
          </p>
          <Table
            headers={['Tipo de coste', 'Ejemplos']}
            rows={[
              [
                'Económico',
                'Investigación del incidente, notificación a afectados, posibles indemnizaciones, sanciones regulatorias'
              ],
              [
                'Legal / normativo',
                'Incumplimiento del RGPD (UE) u otras normativas de protección de datos; obligación de notificar la brecha a la autoridad de control'
              ],
              [
                'Reputacional',
                'Pérdida de confianza de clientes y usuarios, cobertura negativa en medios, impacto en la marca'
              ],
              [
                'Operativo',
                'Tiempo de desarrollo desviado a corregir el problema y auditar el resto del sistema en lugar de construir producto'
              ]
            ]}
          />
          <p>
            En la Unión Europea, el <strong>RGPD (Reglamento General de Protección de Datos)</strong>{' '}
            obliga a notificar determinadas brechas de seguridad a la autoridad de control (en España, la
            AEPD) en un plazo de 72 horas desde que se tiene constancia del incidente, y contempla
            sanciones que pueden alcanzar los 20 millones de euros o el 4% de la facturación anual mundial
            de la empresa, lo que sea mayor, en las infracciones más graves.
          </p>
          <InfoBox type="warning" title="No hace falta ser una gran empresa">
            Las pequeñas aplicaciones y proyectos personales también manejan datos de usuarios reales
            (emails, contraseñas, direcciones) y también están sujetos a estas obligaciones legales. El
            tamaño del proyecto no es excusa para tratar la seguridad como algo secundario.
          </InfoBox>
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
