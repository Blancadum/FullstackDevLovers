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

export function LessonCiberseguridadTiposAmenazasVectoresAtaque() {
  const breadcrumbs = useBreadcrumb();
  const nav = useLessonNavigation();

  const title = 'Tipos de amenazas y vectores de ataque comunes';

  const keyPoints = [
    'Una amenaza es cualquier cosa que puede causar daño a un sistema; un vector de ataque es el camino concreto que usa un atacante para materializar esa amenaza',
    'El malware es software diseñado para dañar, espiar o tomar control de un sistema (virus, ransomware, troyanos, spyware)',
    'El phishing suplanta identidad (email, mensaje, web falsa) para engañar a la víctima y que revele credenciales o datos sensibles',
    'Los ataques de fuerza bruta prueban muchas combinaciones de credenciales hasta acertar, y se combaten con límites de intentos, contraseñas robustas y verificación en dos pasos',
    'La ingeniería social manipula a personas (no a sistemas) para que se salten controles de seguridad; es a menudo el eslabón más débil de cualquier cadena de seguridad',
    'Los ataques a la cadena de suministro comprometen una dependencia, librería o herramienta que tu aplicación usa, en lugar de atacar tu código directamente',
    'Esta lección es la base para el resto del módulo: OWASP Top 10 detalla vectores de ataque específicos contra aplicaciones web, y las lecciones de autenticación explican cómo defenderse de varios de ellos'
  ];

  const exercises = [
    {
      title: 'Identificar el vector de ataque',
      description:
        'Para cada escenario, indica qué tipo de amenaza se está describiendo (malware, phishing, fuerza bruta, ingeniería social o ataque a la cadena de suministro) y cuál es el vector de ataque (el camino de entrada): (1) Un desarrollador instala una librería de npm que resulta tener código malicioso oculto en una actualización reciente. (2) Un empleado recibe una llamada de alguien que dice ser "soporte técnico de IT" y le pide su contraseña para "resolver una incidencia". (3) Un script prueba automáticamente miles de contraseñas comunes contra un formulario de login que no tiene límite de intentos.',
      solution: `1. Ataque a la cadena de suministro. Vector de ataque: la dependencia de npm instalada en el proyecto, que llega al sistema a través del propio proceso de build/instalación, sin que el desarrollador escriba código malicioso él mismo.

2. Ingeniería social (concretamente, una variante llamada "vishing", phishing por voz/teléfono). Vector de ataque: la persona (el empleado), manipulada para saltarse el procedimiento normal y revelar una credencial directamente.

3. Ataque de fuerza bruta. Vector de ataque: el formulario de login público, que al no limitar los intentos permite probar automáticamente muchas combinaciones hasta acertar.`
    },
    {
      title: 'Proponer una defensa básica',
      description:
        'Para el escenario 3 del ejercicio anterior (fuerza bruta contra un formulario de login sin límite de intentos), propón al menos dos medidas concretas que un desarrollador backend podría implementar para mitigarlo.',
      solution: `Algunas medidas válidas (basta con proponer dos, con una breve justificación):

1. Rate limiting / bloqueo temporal: limitar el número de intentos de login permitidos por IP o por cuenta en un periodo de tiempo, y bloquear temporalmente tras varios fallos consecutivos.
2. Verificación en dos pasos (2FA/MFA): aunque el atacante acierte la contraseña, necesitaría también un segundo factor (código temporal, app de autenticación) que no puede obtener solo probando combinaciones.
3. Contraseñas robustas obligatorias: exigir una longitud y complejidad mínimas reduce drásticamente el espacio de combinaciones que un ataque de fuerza bruta necesitaría probar.
4. CAPTCHA tras varios intentos fallidos: dificulta que el ataque se automatice con un script simple.

Estos mecanismos, junto con otros específicos de autenticación, se explican en detalle en las lecciones de autenticación y autorización más adelante en el módulo.`
    }
  ];

  const summary = `Conocer el panorama general de amenazas y vectores de ataque te da el vocabulario y el contexto necesarios para entender por qué existen las defensas concretas que verás en el resto del módulo.

• Una amenaza es cualquier cosa que puede causar daño; un vector de ataque es el camino concreto por el que un atacante materializa esa amenaza contra un sistema real
• Malware: software malicioso diseñado para dañar, espiar o tomar control de un sistema (virus, ransomware, troyanos, spyware)
• Phishing: suplantación de identidad para engañar a la víctima y conseguir que revele credenciales o datos sensibles
• Fuerza bruta: prueba automatizada de muchas combinaciones de credenciales hasta acertar; se mitiga con límites de intentos, contraseñas robustas y verificación en dos pasos
• Ingeniería social: manipulación de personas, no de sistemas, para saltarse controles de seguridad; suele ser el eslabón más débil de cualquier cadena de defensa
• Ataques a la cadena de suministro: comprometen una dependencia, librería o herramienta externa que usa tu aplicación, en lugar de atacar tu propio código directamente
• Con este panorama general como base, el módulo continúa con el OWASP Top 10 (vectores de ataque específicos contra aplicaciones web) y con las prácticas de autenticación, autorización y gestión de contraseñas que defienden frente a varias de estas amenazas`;

  return (
    <>
      <LessonLayout
        title={title}
        description="Panorama general de los tipos de amenazas y vectores de ataque más comunes contra aplicaciones web"
        breadcrumbs={breadcrumbs}
        seoTitle="Tipos de amenazas y vectores de ataque comunes | Ciberseguridad - Fullstack Dev Lovers"
        seoDescription="Conoce los principales tipos de amenazas y vectores de ataque en ciberseguridad: malware, phishing, ingeniería social y ataques a aplicaciones web."
        seoKeywords="tipos de amenazas, vectores de ataque, ciberataques, malware, phishing"
        url="https://fullstackdevlovers.com/ciberseguridad/fundamentos/tipos-amenazas-vectores-ataque"
      >
        <p>
          Ya sabes qué es la ciberseguridad y qué principios (CIA) guían cualquier decisión al respecto.
          Ahora toca ponerle nombre a los peligros concretos: ¿de qué te estás protegiendo exactamente
          cuando cifras una conexión, limitas peticiones o validas una entrada? En esta lección vas a
          conocer los <strong>tipos de amenazas</strong> más comunes y a entender qué es un{' '}
          <strong>vector de ataque</strong>, sentando la base para el resto del módulo: el OWASP Top 10 y
          las lecciones de autenticación profundizan en cómo defenderte de varias de estas amenazas en tus
          propias aplicaciones.
        </p>

        <LessonSection title="Amenaza vs. vector de ataque">
          <p>
            Estos dos términos se usan a menudo como sinónimos, pero conviene distinguirlos:
          </p>
          <ul>
            <li>
              Una <strong>amenaza</strong> es cualquier cosa (una persona, un programa, un evento) capaz de
              causar daño a un sistema, dato o usuario. Es el "qué": robo de datos, interrupción del
              servicio, manipulación de información.
            </li>
            <li>
              Un <strong>vector de ataque</strong> es el camino o método concreto que se usa para
              materializar esa amenaza: un formulario sin validar, un email fraudulento, una dependencia
              comprometida, una contraseña débil. Es el "cómo" y el "por dónde".
            </li>
          </ul>
          <InfoBox type="info" title="Un ejemplo para fijar la idea">
            La amenaza es "alguien accede a la cuenta de un usuario sin autorización". El vector de ataque
            podría ser un email de phishing que engaña al usuario para que introduzca su contraseña en una
            web falsa, o podría ser un ataque de fuerza bruta contra el formulario de login. Misma
            amenaza, vectores distintos, defensas distintas.
          </InfoBox>
        </LessonSection>

        <LessonSection title="Malware">
          <p>
            El <strong>malware</strong> (software malicioso) es cualquier programa diseñado para dañar,
            espiar o tomar control de un sistema sin el consentimiento de su propietario. Existen varias
            familias, y es habitual que un mismo ataque combine varias:
          </p>
          <Table
            headers={['Tipo', 'Qué hace']}
            rows={[
              ['Virus', 'Se adjunta a un programa legítimo y se propaga cuando ese programa se ejecuta'],
              ['Ransomware', 'Cifra los datos de la víctima y exige un pago (rescate) para recuperarlos'],
              ['Troyano', 'Se disfraza de software legítimo o útil, pero oculta funcionalidad maliciosa'],
              ['Spyware', 'Recopila información de la víctima (pulsaciones de teclado, credenciales, navegación) sin su conocimiento']
            ]}
          />
        </LessonSection>

        <LessonSection title="Phishing">
          <p>
            El <strong>phishing</strong> consiste en suplantar la identidad de una persona, empresa o
            servicio de confianza (por email, SMS, mensaje o una web falsa) para engañar a la víctima y
            conseguir que revele credenciales, datos bancarios u otra información sensible, o que ejecute
            una acción perjudicial (como hacer clic en un enlace malicioso).
          </p>
          <p>
            Existen variantes dirigidas: el <strong>spear phishing</strong> se enfoca en una persona u
            organización concreta, investigando previamente para hacer el engaño más creíble (por ejemplo,
            simulando ser el CEO de la empresa pidiendo una transferencia urgente).
          </p>
          <InfoBox type="tip" title='Por qué importa aunque tú "solo" escribas código'>
            El phishing no ataca directamente tu código, pero como desarrollador puedes ser el objetivo:
            si consiguen tus credenciales de acceso al repositorio, a la infraestructura en la nube o a las
            variables de entorno de producción, el impacto puede ser tan grave como una vulnerabilidad en
            el propio sistema.
          </InfoBox>
        </LessonSection>

        <LessonSection title="Ataques de fuerza bruta">
          <p>
            Un <strong>ataque de fuerza bruta</strong> consiste en probar sistemáticamente muchas
            combinaciones de credenciales (usuario/contraseña) hasta encontrar una que funcione. Suele
            automatizarse con scripts que prueban miles o millones de combinaciones en poco tiempo,
            especialmente si se usan listas de contraseñas filtradas en brechas anteriores (
            <em>credential stuffing</em>).
          </p>
          <p>Se combate combinando varias medidas, no una sola:</p>
          <ul>
            <li>Limitar el número de intentos permitidos en un periodo de tiempo (rate limiting).</li>
            <li>Exigir contraseñas robustas, que amplían enormemente el espacio de combinaciones posibles.</li>
            <li>Añadir verificación en dos pasos (2FA/MFA), para que conocer la contraseña no baste.</li>
          </ul>
        </LessonSection>

        <LessonSection title="Ingeniería social">
          <p>
            La <strong>ingeniería social</strong> es la manipulación de personas (no de sistemas) para que
            realicen una acción que compromete la seguridad: revelar una contraseña, dar acceso físico a
            una instalación, ejecutar un archivo adjunto, saltarse un procedimiento establecido. El
            phishing es, de hecho, una forma de ingeniería social realizada a través de medios digitales.
          </p>
          <p>
            Es especialmente peligrosa porque no depende de encontrar un fallo técnico: depende de la
            confianza, la prisa o el desconocimiento de una persona. Por eso se suele decir que{' '}
            <strong>el eslabón más débil de la cadena de seguridad suele ser el factor humano</strong>, por
            muy bien protegido que esté el sistema técnicamente.
          </p>
        </LessonSection>

        <LessonSection title="Ataques a la cadena de suministro (supply chain)">
          <p>
            Un <strong>ataque a la cadena de suministro</strong> no ataca tu código directamente, sino algo
            de lo que tu aplicación depende: una librería de terceros, una herramienta de build, una imagen
            base de contenedor, o incluso la infraestructura de un proveedor. Si el atacante compromete esa
            pieza intermedia, el código malicioso llega a tu aplicación sin que tú hayas escrito ni una
            línea maliciosa.
          </p>
          <p>
            Un ejemplo real de este vector es que una dependencia de tu proyecto (una librería de Maven o
            de npm) reciba una actualización con código malicioso oculto, y que ese código se ejecute en
            cuanto instalas o actualizas la dependencia. Por eso es importante comprobar de forma periódica
            si las dependencias de tu proyecto tienen vulnerabilidades conocidas:
          </p>
          <CodeBlock
            language="bash"
            code={`# En un proyecto Maven, con el plugin OWASP Dependency-Check configurado en el pom.xml:
mvn dependency-check:check

# El plugin descarga la base de datos de vulnerabilidades conocidas (CVE)
# y genera un informe señalando qué dependencias de tu proyecto tienen
# vulnerabilidades reportadas y con qué nivel de gravedad`}
          />
          <InfoBox type="warning" title="Confiar no es lo mismo que verificar">
            Usar una librería popular y bien mantenida reduce el riesgo, pero no lo elimina: incluso
            proyectos muy usados han sufrido compromisos en su cadena de suministro en el pasado. Mantener
            las dependencias actualizadas y revisar informes de vulnerabilidades es una tarea habitual, no
            puntual.
            {/* TODO-verificar: si se desea citar un incidente concreto de supply chain (ej. un CVE o caso mediático), verificar fecha y detalles antes de publicar */}
          </InfoBox>
        </LessonSection>

        <LessonSection title="Por qué esta lección sienta las bases del módulo">
          <p>
            Este panorama general de amenazas es el mapa sobre el que se apoya el resto del módulo:
          </p>
          <ul>
            <li>
              El <strong>OWASP Top 10</strong> (siguiente bloque del módulo) detalla vectores de ataque
              específicos contra aplicaciones web (inyección SQL, XSS, CSRF...), muchos de los cuales son
              formas concretas de explotar las amenazas que acabas de ver.
            </li>
            <li>
              Las lecciones de <strong>autenticación y autorización</strong> explican cómo defenderte
              específicamente de fuerza bruta, robo de credenciales y accesos no autorizados.
            </li>
            <li>
              Las lecciones de <strong>gestión de secretos y contraseñas</strong> reducen el impacto de que
              una credencial caiga en manos equivocadas, ya sea por phishing, fuerza bruta o una brecha en
              un tercero.
            </li>
          </ul>
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
