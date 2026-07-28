import { LessonLayout, LessonSection, CodeBlock, InfoBox, LessonKeyPoints, LessonExercises, LessonSummary } from '../../../components';
import { LessonNavigation } from '../../../components/LessonNavigation';
import { useBreadcrumb } from '../../../hooks/useBreadcrumb';
import { useLessonNavigation } from '../../../hooks/useLessonNavigation';

export function LessonBootstrapComponentes() {
  const breadcrumbs = useBreadcrumb();
  const nav = useLessonNavigation();

  const keyPoints = [
    'Bootstrap trae componentes visuales ya diseñados: alerts, badges, list group, breadcrumb, spinners...',
    'Cada componente sigue un patrón de clase base + clase de variante, como alert alert-danger',
    'Los componentes puramente visuales (alert, badge, list group) solo necesitan CSS',
    'Los componentes interactivos (tooltip, popover, modal, dropdown) necesitan el JavaScript de Bootstrap',
    'Puedes cerrar alerts de forma manual añadiendo alert-dismissible y el botón btn-close',
    'Revisar la documentación oficial de Bootstrap es la mejor forma de descubrir nuevos componentes',
  ];

  const exercises = [
    {
      title: 'Panel de notificaciones',
      description:
        'Crea tres alerts: una de éxito, una de advertencia y una de error, cada una con un mensaje distinto.',
      solution: `<div class="alert alert-success" role="alert">Operación completada con éxito.</div>
<div class="alert alert-warning" role="alert">Revisa los datos antes de continuar.</div>
<div class="alert alert-danger" role="alert">Ha ocurrido un error inesperado.</div>`,
    },
    {
      title: 'Lista de tareas con badges',
      description:
        'Crea un list-group con tres tareas, mostrando a la derecha de cada una un badge con su estado ("Pendiente", "En curso", "Hecho").',
      solution: `<ul class="list-group">
  <li class="list-group-item d-flex justify-content-between align-items-center">
    Diseñar la base de datos
    <span class="badge bg-secondary">Pendiente</span>
  </li>
  <li class="list-group-item d-flex justify-content-between align-items-center">
    Montar el backend
    <span class="badge bg-warning text-dark">En curso</span>
  </li>
  <li class="list-group-item d-flex justify-content-between align-items-center">
    Configurar el repositorio
    <span class="badge bg-success">Hecho</span>
  </li>
</ul>`,
    },
  ];

  const summary = `Bootstrap incluye una amplia colección de componentes listos para usar, todos con la misma lógica de clase base + variante:

• Alerts (alert, alert-success, alert-danger...) para mensajes destacados.
• Badges (badge, bg-primary...) para etiquetas pequeñas de estado o conteo.
• List group (list-group, list-group-item) para listas con estilo de tarjeta.
• Breadcrumb (breadcrumb, breadcrumb-item) para migas de pan de navegación.
• Spinners (spinner-border, spinner-grow) para indicar carga.

Los componentes puramente visuales solo requieren el CSS de Bootstrap; los interactivos (tooltips, popovers, modales, dropdowns) necesitan además su JavaScript. En las próximas lecciones profundizaremos en los componentes más usados en formularios, navegación y layouts: botones, navbars y cards.`;

  return (
    <>
      <LessonLayout
        title="Componentes básicos"
        description="Recorrido por los componentes básicos que ofrece Bootstrap listos para usar"
        breadcrumbs={breadcrumbs}
        seoTitle="Componentes básicos de Bootstrap - Guía Completa"
        seoDescription="Conoce los componentes básicos de Bootstrap y cómo integrarlos en tus proyectos."
        seoKeywords="bootstrap, componentes, ui, framework css"
        url="https://fullstackdevlovers.com/frontend/bootstrap/componentes"
      >
        <p>
          Ya conoces la instalación y el grid de Bootstrap. Ahora toca explorar su catálogo de
          componentes: piezas de interfaz ya diseñadas que puedes usar añadiendo unas pocas clases, sin
          escribir CSS propio. En esta lección vemos los más comunes: alerts, badges, list group,
          breadcrumb y spinners.
        </p>

        <LessonSection title="Alerts: mensajes destacados">
          <p>
            Los <code>alert</code> muestran mensajes contextuales (éxito, error, advertencia, información)
            de forma visualmente distinguible.
          </p>
          <CodeBlock
            language="xml"
            code={`<div class="alert alert-primary" role="alert">Mensaje informativo.</div>
<div class="alert alert-success" role="alert">Operación completada con éxito.</div>
<div class="alert alert-danger" role="alert">Ha ocurrido un error.</div>`}
          />
          <p>
            Puedes hacerlos cerrables añadiendo <code>alert-dismissible</code> y un botón con la clase{' '}
            <code>btn-close</code> (esto sí requiere el JavaScript de Bootstrap):
          </p>
          <CodeBlock
            language="xml"
            code={`<div class="alert alert-warning alert-dismissible fade show" role="alert">
  Revisa los datos antes de continuar.
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>`}
          />
        </LessonSection>

        <LessonSection title="Badges: etiquetas pequeñas">
          <p>
            Los <code>badge</code> son etiquetas compactas, ideales para mostrar contadores o estados
            junto a otro elemento.
          </p>
          <CodeBlock
            language="xml"
            code={`<h5>Notificaciones <span class="badge bg-danger">4</span></h5>
<span class="badge bg-success">Activo</span>
<span class="badge bg-secondary">Inactivo</span>`}
          />
        </LessonSection>

        <LessonSection title="List group: listas con estilo">
          <p>
            El componente <code>list-group</code> convierte una lista simple en un bloque de elementos
            con separadores y estados (activo, deshabilitado).
          </p>
          <CodeBlock
            language="xml"
            code={`<ul class="list-group">
  <li class="list-group-item active">Elemento activo</li>
  <li class="list-group-item">Elemento normal</li>
  <li class="list-group-item disabled">Elemento deshabilitado</li>
</ul>`}
          />
        </LessonSection>

        <LessonSection title="Breadcrumb: migas de pan">
          <p>Útil para mostrar la ubicación actual del usuario dentro de una jerarquía de navegación.</p>
          <CodeBlock
            language="xml"
            code={`<nav aria-label="breadcrumb">
  <ol class="breadcrumb">
    <li class="breadcrumb-item"><a href="/">Inicio</a></li>
    <li class="breadcrumb-item"><a href="/frontend">Frontend</a></li>
    <li class="breadcrumb-item active" aria-current="page">Bootstrap</li>
  </ol>
</nav>`}
          />
        </LessonSection>

        <LessonSection title="Spinners: indicadores de carga">
          <CodeBlock
            language="xml"
            code={`<div class="spinner-border text-primary" role="status">
  <span class="visually-hidden">Cargando...</span>
</div>`}
          />
          <InfoBox type="important" title="CSS vs JavaScript">
            Componentes como alert (visual) o spinner (visual) solo necesitan el CSS de Bootstrap.
            Componentes interactivos como tooltips, popovers, modales o dropdowns necesitan además el
            bundle de JavaScript de Bootstrap para funcionar.
          </InfoBox>
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
