import { LessonNavigation } from '../../../components/LessonNavigation';
import { useBreadcrumb } from '../../../hooks/useBreadcrumb';
import { useLessonNavigation } from '../../../hooks/useLessonNavigation';
import { LessonLayout, CodeBlock, InfoBox } from '../../../components';

export function LessonGitHubCrearCuenta() {
  const breadcrumbs = useBreadcrumb();
  const nav = useLessonNavigation();

  return (
    <>
      <LessonLayout
        title="Crear una cuenta y configurar perfil"
        description="Cómo crear tu cuenta de GitHub y configurar un perfil profesional"
        breadcrumbs={breadcrumbs}
        seoTitle="Crear una cuenta y configurar tu perfil en GitHub - Fullstack Dev Lovers"
        seoDescription="Aprende a registrarte en GitHub, verificar tu cuenta y configurar un perfil profesional que destaque tu trabajo."
        seoKeywords="github, crear cuenta github, perfil github, registro github"
      >
        <h2>Tu cuenta de GitHub es tu carnet de desarrollador</h2>
        <p>
          Antes de poder alojar ningún repositorio remoto necesitas una cuenta en GitHub. Es un paso
          rápido, pero merece un poco de cuidado: el nombre de usuario y el perfil que configures ahora
          son los que verán reclutadores, compañeros de equipo y cualquiera que revise tu trabajo durante
          los próximos años. No es solo "darte de alta", es crear tu identidad profesional en el sector.
        </p>

        <h2>Registro paso a paso</h2>
        <ol>
          <li>Entra en <a href="https://github.com" target="_blank" rel="noopener noreferrer">github.com</a> y pulsa en "Sign up".</li>
          <li>Introduce un email al que tengas acceso (lo necesitarás para verificar la cuenta).</li>
          <li>Elige una contraseña robusta.</li>
          <li>
            Elige tu <strong>nombre de usuario</strong> con cuidado: aparecerá en la URL de tu perfil
            (<code>github.com/tu-usuario</code>) y en tus commits. Evita apodos poco profesionales;
            algo basado en tu nombre real suele funcionar mejor a largo plazo.
          </li>
          <li>Verifica el email que te llega a la bandeja de entrada.</li>
          <li>
            {/* TODO-verificar: el asistente de onboarding y las preguntas iniciales de GitHub (tipo de uso, intereses, plan) cambian de redacción con el tiempo */}
            GitHub te hará algunas preguntas de personalización (para qué la vas a usar, tus intereses...);
            puedes responderlas o saltarlas, no afectan a la funcionalidad del plan gratuito.
          </li>
        </ol>

        <InfoBox type="warning" title="Un email, una identidad">
          Usa preferiblemente el mismo email (o al menos uno que controles) tanto en tu cuenta de GitHub
          como en la configuración local de Git (<code>git config --global user.email</code>). Si no coinciden,
          tus commits pueden no aparecer asociados a tu perfil ni contar en tu gráfico de contribuciones.
        </InfoBox>

        <h2>Conectar tu identidad de Git local con GitHub</h2>
        <p>
          Ya configuraste tu nombre y email en Git durante las lecciones anteriores. Ahora es un buen
          momento para verificar que coinciden con los que usas en GitHub, y para añadir ese email como
          "verificado" en tu cuenta:
        </p>
        <CodeBlock
          language="bash"
          code={`# Comprobar tu identidad local actual
git config --global user.name
git config --global user.email

# Si necesitas actualizarla para que coincida con tu cuenta de GitHub
git config --global user.name "Tu Nombre"
git config --global user.email "tu-email@ejemplo.com"`}
        />

        <h2>Configurar un perfil que aporte</h2>
        <p>
          Desde <code>github.com/settings/profile</code> puedes personalizar tu perfil público:
        </p>
        <ul>
          <li><strong>Foto de perfil (avatar):</strong> una imagen real y reconocible transmite más confianza que el avatar por defecto.</li>
          <li><strong>Nombre visible:</strong> puede ser distinto a tu usuario, y es el que se muestra en tu perfil.</li>
          <li><strong>Bio:</strong> una o dos líneas sobre quién eres y qué tecnologías usas (por ejemplo, "Backend developer en formación · Java · Spring Boot").</li>
          <li><strong>Ubicación y enlaces:</strong> LinkedIn, portfolio o blog, si tienes.</li>
          <li><strong>Pinned repositories:</strong> puedes fijar hasta 6 repositorios en la parte superior de tu perfil; elige los que mejor representen tu nivel actual.</li>
        </ul>

        <h2>El README especial de perfil</h2>
        <p>
          GitHub permite crear un repositorio con el mismo nombre que tu usuario (por ejemplo, si tu
          usuario es <code>ana-dev</code>, un repositorio llamado <code>ana-dev</code>) y marcarlo como
          público. El contenido de su <code>README.md</code> se muestra directamente en tu perfil, como
          una mini página de presentación:
        </p>
        <CodeBlock
          language="bash"
          code={`# 1. En GitHub, crea un repositorio nuevo con el mismo nombre que tu usuario
# 2. Márcalo como público y añade un README al crearlo
# 3. Clónalo en local para editarlo con más comodidad
git clone https://github.com/tu-usuario/tu-usuario.git
cd tu-usuario`}
        />
        <p>
          Dentro de ese <code>README.md</code> puedes escribir en Markdown una breve introducción,
          tecnologías que dominas, y enlaces a tus proyectos destacados.
        </p>

        <h2>Resumen</h2>
        <ul>
          <li>Elige tu nombre de usuario de GitHub pensando en tu futuro profesional, no solo en el presente.</li>
          <li>Verifica tu email y comprueba que coincide con el que usa Git en local, para que tus commits se te atribuyan correctamente.</li>
          <li>Completa foto, bio y repositorios fijados: es tu tarjeta de presentación pública.</li>
          <li>El README de perfil (repositorio con tu mismo nombre de usuario) es opcional, pero un extra que suma.</li>
        </ul>

        {/* AVISO: no se encontró un criterio específico en docs/criterios/github.md en el repositorio en el momento de redactar esta lección.
            Se han aplicado las reglas base del redactor de contenidos. */}
      </LessonLayout>

      <LessonNavigation previousLink={nav.previous} previousTitle={nav.previousTitle} nextLink={nav.next} nextTitle={nav.nextTitle} />
    </>
  );
}
