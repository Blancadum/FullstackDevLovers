import { LessonNavigation } from '../../../components/LessonNavigation';
import { useBreadcrumb } from '../../../hooks/useBreadcrumb';
import { useLessonNavigation } from '../../../hooks/useLessonNavigation';
import { LessonLayout, CodeBlock, InfoBox } from '../../../components';

export function LessonGitHubSeguridad() {
  const breadcrumbs = useBreadcrumb();
  const nav = useLessonNavigation();

  return (
    <>
      <LessonLayout
        title="Seguridad y tokens personales"
        description="Gestiona la seguridad de tu cuenta y tokens de acceso personal en GitHub"
        breadcrumbs={breadcrumbs}
        seoTitle="Seguridad y tokens personales en GitHub - Fullstack Dev Lovers"
        seoDescription="Aprende a proteger tu cuenta de GitHub con verificación en dos pasos y a gestionar tokens de acceso personal (PAT) de forma segura."
        seoKeywords="github, seguridad, tokens de acceso personal, 2fa"
      >
        <h2>Tu cuenta de GitHub es una puerta a todo tu código</h2>
        <p>
          Con todo lo que ya has aprendido, tu cuenta de GitHub concentra bastante poder: repositorios,
          historial, y potencialmente acceso a proyectos de tu empresa. Vale la pena cerrar esta serie de
          lecciones con cómo protegerla correctamente, algo que además te van a pedir en cualquier entorno
          profesional.
        </p>

        <h2>Autenticación en dos pasos (2FA)</h2>
        <p>
          {/* TODO-verificar: GitHub ha ido haciendo obligatoria la 2FA de forma progresiva para distintos colectivos de usuarios (por ejemplo, contribuidores de ciertos proyectos); comprueba si tu cuenta está sujeta a ese requisito */}
          La verificación en dos pasos añade una segunda comprobación (una app de autenticación, una
          llave de seguridad física, o un código por SMS) además de tu contraseña. Se activa en
          <code>Settings → Password and authentication</code>. Aunque no fuese obligatoria para tu cuenta,
          es una de las medidas de seguridad más efectivas y baratas que puedes aplicar hoy mismo.
        </p>

        <InfoBox type="warning" title="Guarda los códigos de recuperación">
          Al activar 2FA, GitHub te da códigos de recuperación de un solo uso. Guárdalos en un gestor de
          contraseñas o en un lugar seguro distinto del dispositivo donde generas los códigos: si pierdes
          el segundo factor y no tienes estos códigos, recuperar el acceso a la cuenta puede ser un proceso largo.
        </InfoBox>

        <h2>Por qué ya no usas tu contraseña para git push</h2>
        <p>
          Desde hace tiempo, GitHub no acepta la contraseña de tu cuenta para operaciones de Git por
          HTTPS (como <code>git push</code>). En su lugar, necesitas un <strong>Personal Access Token
          (PAT)</strong> o una clave SSH. Es una medida de seguridad: un token puede tener permisos
          limitados y revocarse en cualquier momento sin cambiar tu contraseña principal.
        </p>

        <h2>Crear un Personal Access Token</h2>
        <ol>
          <li>Ve a <code>Settings → Developer settings → Personal access tokens</code>.</li>
          <li>
            {/* TODO-verificar: GitHub distingue entre tokens "classic" y "fine-grained"; las opciones exactas del formulario de creación pueden variar según cuándo lo consultes */}
            Elige entre un token <strong>fine-grained</strong> (permisos muy concretos, por repositorio y
            por acción) o uno <strong>classic</strong> (permisos más amplios, por ámbito general).
            Para tareas cotidianas, los tokens fine-grained son la opción más segura por defecto.
          </li>
          <li>Define una fecha de expiración (evita "sin expiración" salvo que tengas un motivo claro).</li>
          <li>Selecciona solo los permisos (scopes) que realmente necesitas, por ejemplo <code>repo</code> para operaciones de push/pull.</li>
          <li>Genera el token y <strong>cópialo inmediatamente</strong>: GitHub no volverá a mostrártelo completo.</li>
        </ol>

        <h2>Usar el token en la práctica</h2>
        <CodeBlock
          language="bash"
          code={`# Al hacer push/pull por HTTPS, cuando te pida credenciales:
# Usuario: tu nombre de usuario de GitHub
# Contraseña: pega aquí tu Personal Access Token (no tu contraseña de la cuenta)

git push
Username for 'https://github.com': tu-usuario
Password for 'https://tu-usuario@github.com': ****** (aquí va el token)`}
        />
        <p>
          Para no tener que pegarlo cada vez, puedes usar un gestor de credenciales (Git Credential
          Manager) que lo guarda de forma cifrada tras la primera vez, o cambiar a autenticación SSH:
        </p>
        <CodeBlock
          language="bash"
          code={`# Configurar el gestor de credenciales de Git (guarda el token de forma segura)
git config --global credential.helper manager

# Alternativa: autenticarte con GitHub CLI, que gestiona el token por ti
gh auth login`}
        />

        <InfoBox type="error" title="Un token nunca debe acabar en tu código">
          Nunca pegues un token dentro de un archivo del repositorio, ni lo incluyas directamente en una
          URL como <code>https://token@github.com/...</code> que puedas dejar en un script versionado.
          Si un token se filtra, revócalo inmediatamente desde <code>Settings → Developer settings → Personal access tokens</code>
          y genera uno nuevo.
        </InfoBox>

        <h2>SSH como alternativa al token</h2>
        <p>
          Ya se mencionó en lecciones anteriores: una clave SSH es otra forma de autenticarte sin usar
          contraseña ni token en cada operación.
        </p>
        <CodeBlock
          language="bash"
          code={`# Generar un par de claves (si no tienes una)
ssh-keygen -t ed25519 -C "tu-email@ejemplo.com"

# Copia el contenido de la clave pública
cat ~/.ssh/id_ed25519.pub
# Pégala en GitHub: Settings → SSH and GPG keys → New SSH key

# Verifica que la autenticación funciona
ssh -T git@github.com`}
        />

        <h2>Buenas prácticas mínimas de seguridad</h2>
        <ul>
          <li>Activa 2FA en tu cuenta de GitHub, no solo en tu email.</li>
          <li>Usa tokens con expiración y con el mínimo de permisos necesarios (principio de mínimo privilegio).</li>
          <li>Revoca tokens que ya no uses, sobre todo si estuviste probando algo temporal.</li>
          <li>Nunca subas contraseñas, tokens ni claves privadas a un repositorio, ni siquiera privado.</li>
          <li>Si detectas que se filtró un secreto, revócalo primero y después limpia el historial (rotar el secreto es la prioridad, no borrar el commit).</li>
        </ul>

        <h2>Resumen</h2>
        <ul>
          <li>La 2FA añade una capa extra de protección a tu cuenta más allá de la contraseña.</li>
          <li>GitHub exige un Personal Access Token (o SSH) en lugar de tu contraseña para operaciones de Git por HTTPS.</li>
          <li>Crea tokens con expiración y permisos mínimos; revócalos si sospechas que se filtraron.</li>
          <li>Nunca incluyas tokens o claves directamente en el código versionado.</li>
        </ul>

        {/* AVISO: no se encontró un criterio específico en docs/criterios/github.md en el repositorio en el momento de redactar esta lección.
            Se han aplicado las reglas base del redactor de contenidos. */}
      </LessonLayout>

      <LessonNavigation previous={nav.previous} next={nav.next} />
    </>
  );
}
