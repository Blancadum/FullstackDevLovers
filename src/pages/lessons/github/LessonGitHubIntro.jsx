import { LessonNavigation } from '../../../components/LessonNavigation';
import { useBreadcrumb } from '../../../hooks/useBreadcrumb';
import { useLessonNavigation } from '../../../hooks/useLessonNavigation';
import { LessonLayout, CodeBlock, InfoBox } from '../../../components';

export function LessonGitHubIntro() {
  const breadcrumbs = useBreadcrumb();
  const nav = useLessonNavigation();

  return (
    <>
      <LessonLayout
        title="Qué es GitHub y por qué usarlo"
        description="Introducción a GitHub: qué es, para qué sirve y por qué es la plataforma líder para alojar repositorios Git"
        breadcrumbs={breadcrumbs}
        seoTitle="Qué es GitHub y por qué usarlo - Fullstack Dev Lovers"
        seoDescription="Descubre qué es GitHub, sus diferencias con Git y por qué es la plataforma de referencia para alojar código y colaborar en equipo."
        seoKeywords="github, qué es github, control de versiones, repositorios remotos"
      >
        <h2>Git ya lo controlas. Ahora toca compartirlo</h2>
        <p>
          En las lecciones de Git aprendiste a versionar tu código en local: <code>git init</code>,
          <code>git add</code>, <code>git commit</code>, ramas, merges... Todo eso ocurre en tu máquina,
          en un repositorio que solo tú puedes ver. El problema es evidente: si tu ordenador se estropea,
          pierdes el historial. Y si trabajas en equipo, nadie más tiene acceso a tus commits.
        </p>
        <p>
          Ahí entra <strong>GitHub</strong>: una plataforma en la nube que aloja repositorios Git y añade
          herramientas de colaboración alrededor (revisión de código, gestión de tareas, automatización...).
          Es, con diferencia, la plataforma más usada por empresas y proyectos open source, así que dominarla
          es una competencia que se espera de cualquier desarrollador backend, aunque estés empezando.
        </p>

        <h2>Git vs GitHub: no son lo mismo</h2>
        <p>
          Es una confusión muy habitual al principio, así que conviene dejarla clara desde ya:
        </p>
        <ul>
          <li>
            <strong>Git</strong> es el sistema de control de versiones: el software que corre en tu
            terminal y gestiona el historial de cambios. Funciona sin conexión a internet.
          </li>
          <li>
            <strong>GitHub</strong> es un servicio web que aloja repositorios Git en servidores remotos
            y añade funcionalidades por encima: interfaz visual, Pull Requests, Issues, GitHub Actions, etc.
          </li>
        </ul>
        <p>
          Podrías usar Git toda tu vida sin tocar GitHub. Pero en el mundo profesional, casi todos los
          equipos alojan su código en GitHub (o en alternativas como GitLab o Bitbucket) porque necesitan
          un punto central donde sincronizar el trabajo de varias personas.
        </p>

        <InfoBox type="info" title="¿Por qué GitHub y no otra plataforma?">
          {/* TODO-verificar: la cuota de mercado exacta de GitHub frente a GitLab/Bitbucket varía según la fuente y el año; aquí se afirma solo que es la más extendida, sin cifras concretas */}
          GitHub es la plataforma con mayor comunidad y adopción en el sector, especialmente en proyectos
          open source. Esto importa para tu carrera: tu perfil de GitHub funciona como un portfolio público
          que muchas empresas revisan durante procesos de selección.
        </InfoBox>

        <h2>Qué gana tu flujo de trabajo con GitHub</h2>
        <ul>
          <li><strong>Copia de seguridad remota:</strong> tu código vive en un servidor, no solo en tu disco.</li>
          <li><strong>Colaboración real:</strong> varias personas pueden trabajar sobre el mismo repositorio sin pisarse el trabajo.</li>
          <li><strong>Revisión de código:</strong> los Pull Requests permiten que otra persona revise tus cambios antes de integrarlos.</li>
          <li><strong>Trazabilidad:</strong> Issues y Project Boards permiten seguir qué se está haciendo, quién lo hace y por qué.</li>
          <li><strong>Automatización:</strong> GitHub Actions ejecuta tests, builds y despliegues automáticamente en cada cambio.</li>
          <li><strong>Visibilidad profesional:</strong> tu actividad y tus repositorios públicos son parte de tu carta de presentación como desarrollador.</li>
        </ul>

        <h2>Cómo se conecta tu Git local con GitHub</h2>
        <p>
          La pieza que une ambos mundos es el <strong>repositorio remoto</strong>. Cuando configuras
          un remoto llamado <code>origin</code> apuntando a una URL de GitHub, tu Git local sabe hacia
          dónde enviar (<code>push</code>) y desde dónde recibir (<code>pull</code>) los commits:
        </p>
        <CodeBlock
          language="bash"
          code={`# Comprobar si tu repo local ya tiene un remoto configurado
git remote -v

# Si no lo tiene, lo verás vacío. En las próximas lecciones
# aprenderás a crear el repositorio en GitHub y conectarlo así:
git remote add origin https://github.com/tu-usuario/tu-repo.git
git push -u origin main`}
        />
        <p>
          No te preocupes si todavía no reconoces cada detalle de estos comandos: en esta serie de
          lecciones iremos paso a paso, empezando por crear tu cuenta y tu primer repositorio remoto.
        </p>

        <h2>Resumen</h2>
        <ul>
          <li>Git es la herramienta local de control de versiones; GitHub es la plataforma remota que la aloja y añade colaboración.</li>
          <li>GitHub es el estándar de facto en el sector, por lo que tu perfil ahí importa profesionalmente.</li>
          <li>El repositorio remoto (<code>origin</code>) es el puente entre tu Git local y GitHub.</li>
          <li>Las siguientes lecciones cubren, en orden, cómo crear cuenta, crear/clonar repos, sincronizar y colaborar mediante Pull Requests.</li>
        </ul>

        {/* AVISO: no se encontró un criterio específico en docs/criterios/github.md en el repositorio en el momento de redactar esta lección.
            Se han aplicado las reglas base del redactor de contenidos (tono cercano y riguroso, progresión simple->compleja,
            estructura introducción/conceptos/ejemplos/resumen y marcado de afirmaciones no garantizadas con TODO-verificar). */}
      </LessonLayout>

      <LessonNavigation previousLink={nav.previous} previousTitle={nav.previousTitle} nextLink={nav.next} nextTitle={nav.nextTitle} />
    </>
  );
}
