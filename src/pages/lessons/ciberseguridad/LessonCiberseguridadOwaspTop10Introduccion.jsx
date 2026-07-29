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

export function LessonCiberseguridadOwaspTop10Introduccion() {
  const breadcrumbs = useBreadcrumb();
  const nav = useLessonNavigation();

  const title = 'OWASP Top 10: introducción y visión general';

  const owaspHeaders = ['Categoría', 'Qué cubre, en resumen'];
  const owaspRows = [
    [
      'A01: Pérdida de control de acceso (Broken Access Control)',
      'Un usuario puede hacer u obtener algo que no debería (ver datos de otro usuario, acceder a rutas de administración sin permisos...).'
    ],
    [
      'A02: Fallos criptográficos (Cryptographic Failures)',
      'Datos sensibles expuestos por no cifrarlos (en tránsito o en reposo) o por usar algoritmos débiles u obsoletos.'
    ],
    [
      'A03: Inyección (Injection)',
      'Datos de entrada no confiables que se interpretan como código o comandos: SQL, NoSQL, comandos de sistema...'
    ],
    [
      'A04: Diseño inseguro (Insecure Design)',
      'Fallos que vienen de decisiones de diseño previas al código: no haber pensado en la seguridad desde el principio.'
    ],
    [
      'A05: Configuración de seguridad incorrecta (Security Misconfiguration)',
      'Valores por defecto sin cambiar, permisos demasiado abiertos, mensajes de error que revelan detalles internos...'
    ],
    [
      'A06: Componentes vulnerables y desactualizados (Vulnerable and Outdated Components)',
      'Usar librerías o dependencias de npm (u otro gestor) con vulnerabilidades conocidas y sin actualizar.'
    ],
    [
      'A07: Fallos de identificación y autenticación (Identification and Authentication Failures)',
      'Login mal implementado: contraseñas débiles permitidas, sesiones que no expiran, fuerza bruta sin límite...'
    ],
    [
      'A08: Fallos de integridad de software y datos (Software and Data Integrity Failures)',
      'Confiar en código, actualizaciones o datos sin verificar su origen o integridad (por ejemplo, CI/CD sin comprobaciones).'
    ],
    [
      'A09: Fallos de registro y monitorización (Security Logging and Monitoring Failures)',
      'No quedar rastro suficiente de lo que pasa en la aplicación como para detectar un ataque mientras ocurre.'
    ],
    [
      'A10: Server-Side Request Forgery (SSRF)',
      'El servidor hace, engañado, una petición a una URL que controla el atacante en lugar de la esperada.'
    ]
  ];

  const keyPoints = [
    'OWASP es una fundación sin ánimo de lucro dedicada a mejorar la seguridad del software, que publica proyectos gratuitos y abiertos',
    'El OWASP Top 10 es una lista de las 10 categorías de riesgo más críticas en aplicaciones web, elaborada a partir de datos reales de la industria',
    'No es una lista cerrada de "bugs concretos", sino de categorías de vulnerabilidad: cada una agrupa muchos fallos concretos posibles',
    'Se ha convertido en la referencia estándar de facto: la usan equipos de desarrollo, auditorías de seguridad, certificaciones y hasta requisitos contractuales',
    'Tres de estas categorías (inyección, XSS y CSRF, esta última históricamente asociada a pérdida de control de acceso) son el foco de las siguientes lecciones de este bloque',
    'Conocer el Top 10 no te convierte en experto en seguridad, pero te da un mapa mínimo de qué buscar y priorizar al revisar código'
  ];

  const exercises = [
    {
      title: 'Localiza las categorías en tu propio código',
      description:
        'Coge un proyecto backend que ya hayas hecho (por ejemplo, tu API de tareas con Express y una base de datos). Repasa la tabla de categorías y, para cada una, anota si tu proyecto podría ser vulnerable a ese tipo de problema y por qué. No hace falta arreglar nada todavía: el objetivo es entrenar el ojo para reconocer estas categorías en código real.',
      solution: `Ejemplo de análisis (tu proyecto puede variar):

A03 Inyección: ¿construyes alguna query SQL concatenando strings con
datos de req.body o req.query? Revisa cada pool.query(...) o
sequelize.query(...) de tu proyecto.

A07 Fallos de autenticación: ¿tienes login? ¿Hasheas las contraseñas
con bcrypt? ¿Los JWT tienen fecha de expiración?

A01 Pérdida de control de acceso: ¿comprueban tus rutas que el
usuario autenticado es el dueño del recurso que pide, o solo
comprueban que "hay algún token válido"?

A05 Configuración incorrecta: ¿tienes activado modo debug o
mensajes de error detallados en producción? ¿Credenciales por
defecto en algún servicio auxiliar (base de datos, panel admin)?

Este ejercicio no tiene una única "solución": el resultado esperado
es una lista propia, escrita a mano, de puntos a revisar en tu
proyecto.`
    }
  ];

  const summary = `El OWASP Top 10 es la lista, mantenida por la fundación OWASP, de las 10 categorías de vulnerabilidad más críticas y frecuentes en aplicaciones web:

• OWASP es una fundación abierta y sin ánimo de lucro centrada en mejorar la seguridad del software
• El Top 10 se elabora combinando datos aportados por organizaciones de seguridad con la opinión de la comunidad, y se revisa cada pocos años
• No lista bugs concretos, sino categorías amplias (inyección, control de acceso, fallos criptográficos...) que agrupan muchos problemas relacionados
• Se ha convertido en el estándar de facto de la industria: referencia habitual en auditorías, formación y requisitos de seguridad
• En las próximas lecciones de este bloque profundizarás en tres de estas categorías con más detalle y ejemplos de código: inyección SQL, XSS y CSRF`;

  return (
    <>
      <LessonLayout
        title={title}
        description="Qué es el OWASP Top 10 y por qué es la referencia principal de seguridad en aplicaciones web"
        breadcrumbs={breadcrumbs}
        seoTitle="OWASP Top 10: introducción y visión general | Ciberseguridad - Fullstack Dev Lovers"
        seoDescription="Descubre qué es el OWASP Top 10, cómo se elabora y por qué es la referencia esencial para proteger tus aplicaciones web de las vulnerabilidades más críticas."
        seoKeywords="owasp top 10, owasp, vulnerabilidades web, seguridad aplicaciones web"
        url="https://fullstackdevlovers.com/ciberseguridad/owasp/owasp-top-10-introduccion"
      >
        <p>
          Hasta ahora has aprendido a construir aplicaciones que funcionan: rutas, bases de datos,
          autenticación... En este bloque das un paso más y aprendes a pensar en cómo esas mismas
          aplicaciones pueden <strong>romperse a propósito</strong>. El punto de partida casi obligado para
          eso es el <strong>OWASP Top 10</strong>: la lista que cualquier desarrollador backend, por junior
          que sea, debería conocer al menos a nivel general.
        </p>

        <LessonSection title="¿Qué es OWASP?">
          <p>
            <strong>OWASP</strong> (Open Worldwide Application Security Project, antes conocido como Open
            Web Application Security Project) es una fundación sin ánimo de lucro dedicada a mejorar la
            seguridad del software. A diferencia de una empresa que vende productos de seguridad, OWASP
            publica sus proyectos de forma abierta y gratuita: documentación, herramientas, guías de buenas
            prácticas y, el más conocido de todos, el <strong>Top 10</strong>.
          </p>
          <p>
            Su comunidad está formada por desarrolladores, consultores de seguridad y empresas de todo el
            mundo, lo que hace que sus recomendaciones no reflejen la opinión de un único fabricante, sino
            un consenso amplio de la industria.
          </p>
        </LessonSection>

        <LessonSection title="¿Qué es el OWASP Top 10?">
          <p>
            El <strong>OWASP Top 10</strong> es un informe que identifica las{' '}
            <strong>10 categorías de riesgo más críticas</strong> para la seguridad de aplicaciones web. No
            es una lista de "bugs" concretos, sino de <strong>categorías amplias</strong> de vulnerabilidad:
            cada una de ellas agrupa muchísimos fallos posibles que comparten una misma causa raíz.
          </p>
          <p>
            Por ejemplo, la categoría de <strong>inyección</strong> incluye tanto una inyección SQL clásica
            como una inyección de comandos del sistema operativo o una inyección en una base de datos NoSQL:
            distintos ataques, misma idea de fondo (datos de entrada no confiables que acaban interpretándose
            como código).
          </p>
          <InfoBox type="info" title="No es una lista cerrada de reglas">
            El Top 10 no sustituye a un análisis de seguridad específico de tu aplicación. Es un{' '}
            <strong>mapa de prioridades</strong>: te dice dónde suelen estar los problemas más frecuentes y
            graves, para que sepas por dónde empezar a mirar.
          </InfoBox>
        </LessonSection>

        <LessonSection title="Las 10 categorías">
          <p>
            {/* TODO-verificar: confirmar nombres exactos de la edición OWASP Top 10 vigente */}
            Estas son las categorías de la edición más reciente ampliamente conocida del OWASP Top 10, con
            una descripción breve de lo que cubre cada una:
          </p>
          <Table headers={owaspHeaders} rows={owaspRows} />
          <InfoBox type="tip">
            No hace falta memorizar esta tabla. Lo importante es entender la idea general de cada categoría
            e ir reconociéndolas cuando aparezcan en código real, algo en lo que profundizarás en las
            próximas lecciones.
          </InfoBox>
        </LessonSection>

        <LessonSection title="¿Por qué es la referencia estándar de la industria?">
          <p>El Top 10 se ha convertido en el estándar de facto de la seguridad web por varios motivos:</p>
          <ul>
            <li>
              <strong>Se basa en datos reales</strong>, no solo en opinión: combina información aportada por
              empresas y organizaciones de seguridad con encuestas a la comunidad de desarrolladores.
            </li>
            <li>
              <strong>Se revisa periódicamente</strong>, por lo que refleja las amenazas más relevantes del
              momento y no queda anclada a problemas ya poco frecuentes.
            </li>
            <li>
              <strong>Es gratuito y abierto</strong>: cualquier equipo, sin importar su presupuesto, puede
              usarlo como checklist mínima de seguridad.
            </li>
            <li>
              <strong>Se ha adoptado ampliamente</strong> como referencia en auditorías de seguridad,
              formación de desarrolladores e incluso en requisitos de cumplimiento de algunas
              organizaciones {/* TODO-verificar: alcance exacto de su adopción en normativas o certificaciones concretas */}.
            </li>
          </ul>
        </LessonSection>

        <LessonSection title="Un primer vistazo a por qué esto te afecta como backend">
          <p>
            Casi cualquier funcionalidad backend que construyas toca, de una forma u otra, alguna de estas
            categorías. Un ejemplo mínimo de la categoría A03 (Inyección), que verás en detalle en la
            siguiente lección:
          </p>
          <CodeBlock
            language="javascript"
            code={`// Un input de usuario que se usa para construir una consulta
// sin ningún tipo de validación ni parametrización es, potencialmente,
// una puerta de entrada a una inyección.
const email = req.query.email; // dato que viene directamente del usuario

// Esto es exactamente el tipo de patrón que el Top 10 marca como de riesgo:
const query = \`SELECT * FROM usuarios WHERE email = '\${email}'\`;
// Lo verás explicado con detalle, y con su solución, en la próxima lección.`}
          />
          <p>
            Este mismo patrón, cambiar código "que funciona" por código "que funciona y además no se puede
            explotar fácilmente", es el hilo conductor del resto de lecciones de este bloque.
          </p>
        </LessonSection>

        <LessonKeyPoints points={keyPoints} />
        <LessonExercises exercises={exercises} />
        <LessonSummary summary={summary} />

        {/* AVISO: no se encontró un criterio específico en docs/criterios/ciberseguridad.md (ni la carpeta docs/criterios/) en el
            repositorio en el momento de redactar esta lección. Se han aplicado las reglas base del redactor de contenidos (tono
            cercano y riguroso, progresión simple->compleja, estructura introducción/conceptos/ejemplos/resumen y marcado de
            afirmaciones no garantizadas con TODO-verificar). */}
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
