import { LessonLayout, LessonSection, CodeBlock, InfoBox, LessonKeyPoints, LessonExercises, LessonSummary } from '../../../components';
import { LessonNavigation } from '../../../components/LessonNavigation';
import { useBreadcrumb } from '../../../hooks/useBreadcrumb';
import { useLessonNavigation } from '../../../hooks/useLessonNavigation';

export function LessonBootstrapNavbars() {
  const breadcrumbs = useBreadcrumb();
  const nav = useLessonNavigation();

  const keyPoints = [
    'La navbar se construye con nav, navbar-brand para el logo/nombre y navbar-nav para los enlaces',
    'navbar-expand-{breakpoint} define a partir de qué ancho de pantalla se muestra expandida',
    'Por debajo de ese breakpoint, la navbar se colapsa detrás de un botón navbar-toggler',
    'El colapsable requiere el JavaScript de Bootstrap (data-bs-toggle="collapse")',
    'Los enlaces activos se marcan con la clase active y el atributo aria-current="page"',
    'fixed-top y sticky-top permiten fijar la navbar en la parte superior de la página',
    'Dentro de una navbar también puedes anidar un dropdown para agrupar enlaces relacionados',
  ];

  const exercises = [
    {
      title: 'Navbar básica',
      description:
        'Crea una navbar con el nombre de tu marca a la izquierda y tres enlaces (Inicio, Servicios, Contacto), que se colapse en un botón hamburguesa por debajo del breakpoint "lg".',
      solution: `<nav class="navbar navbar-expand-lg bg-light">
  <div class="container">
    <a class="navbar-brand" href="#">MiMarca</a>
    <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ms-auto">
        <li class="nav-item"><a class="nav-link active" aria-current="page" href="#">Inicio</a></li>
        <li class="nav-item"><a class="nav-link" href="#">Servicios</a></li>
        <li class="nav-item"><a class="nav-link" href="#">Contacto</a></li>
      </ul>
    </div>
  </div>
</nav>`,
    },
    {
      title: 'Navbar fija con dropdown',
      description:
        'Añade a la navbar anterior un enlace "Recursos" que despliegue un dropdown con dos opciones, y haz que la navbar quede fija en la parte superior al hacer scroll.',
      solution: `<nav class="navbar navbar-expand-lg bg-light fixed-top">
  <div class="container">
    <a class="navbar-brand" href="#">MiMarca</a>
    <ul class="navbar-nav">
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">
          Recursos
        </a>
        <ul class="dropdown-menu">
          <li><a class="dropdown-item" href="#">Blog</a></li>
          <li><a class="dropdown-item" href="#">Documentación</a></li>
        </ul>
      </li>
    </ul>
  </div>
</nav>`,
    },
  ];

  const summary = `El componente navbar de Bootstrap resuelve un problema muy habitual: una barra de navegación que se ve expandida en escritorio y colapsada (menú hamburguesa) en móvil, sin escribir JavaScript propio.

• navbar + navbar-expand-{breakpoint} controla a partir de qué ancho se muestra expandida.
• navbar-brand identifica la marca o logo.
• navbar-nav + nav-item + nav-link estructuran los enlaces de navegación.
• navbar-toggler + collapse gestionan el comportamiento colapsable en pantallas pequeñas (requieren JS de Bootstrap).
• fixed-top / sticky-top fijan la navbar en la parte superior de la ventana.

En la próxima lección veremos las cards, uno de los componentes más versátiles de Bootstrap para mostrar contenido en forma de tarjeta.`;

  return (
    <>
      <LessonLayout
        title="Navbars y menús"
        description="Construcción de barras de navegación y menús responsivos con Bootstrap"
        breadcrumbs={breadcrumbs}
        seoTitle="Navbars y menús en Bootstrap - Guía Completa"
        seoDescription="Aprende a crear barras de navegación y menús responsivos con el componente Navbar de Bootstrap."
        seoKeywords="bootstrap, navbar, menu, navegación, responsive"
        url="https://fullstackdevlovers.com/frontend/bootstrap/navbars"
      >
        <p>
          Casi cualquier proyecto necesita una barra de navegación que funcione bien tanto en escritorio
          como en móvil. Bootstrap resuelve esto con el componente <code>navbar</code>, que se colapsa
          automáticamente en un menú hamburguesa por debajo de cierto ancho de pantalla. En esta lección
          vas a montar una navbar responsiva desde cero.
        </p>

        <LessonSection title="Estructura básica de una navbar">
          <p>
            La estructura mínima combina la clase <code>navbar</code>, un breakpoint de expansión y un
            contenedor con la marca y los enlaces.
          </p>
          <CodeBlock
            language="xml"
            code={`<nav class="navbar navbar-expand-lg bg-light">
  <div class="container">
    <a class="navbar-brand" href="#">MiMarca</a>
    <ul class="navbar-nav">
      <li class="nav-item"><a class="nav-link active" href="#">Inicio</a></li>
      <li class="nav-item"><a class="nav-link" href="#">Servicios</a></li>
    </ul>
  </div>
</nav>`}
          />
          <p>
            <code>navbar-expand-lg</code> indica que, a partir del breakpoint <code>lg</code> (≥ 992px), la
            navbar se muestra expandida. Por debajo de ese ancho, se colapsa.
          </p>
          <InfoBox type="info" title="navbar-light / navbar-dark: clases obsoletas">
            En versiones antiguas de Bootstrap se añadía <code>navbar-light</code> o{' '}
            <code>navbar-dark</code> para controlar el color del texto. Desde Bootstrap 5.3 estas clases
            están obsoletas: el aspecto claro es el que se aplica por defecto, y para un aspecto oscuro se
            usa el atributo <code>data-bs-theme="dark"</code> sobre el propio <code>&lt;nav&gt;</code>.
          </InfoBox>
        </LessonSection>

        <LessonSection title="Navbar colapsable (menú hamburguesa)">
          <p>
            Para que la navbar se colapse en móvil necesitas un botón <code>navbar-toggler</code> y un
            contenedor <code>collapse</code> que envuelva los enlaces. Esto requiere el JavaScript de
            Bootstrap (los atributos <code>data-bs-*</code>).
          </p>
          <CodeBlock
            language="xml"
            code={`<nav class="navbar navbar-expand-lg bg-light">
  <div class="container">
    <a class="navbar-brand" href="#">MiMarca</a>

    <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ms-auto">
        <li class="nav-item"><a class="nav-link active" href="#">Inicio</a></li>
        <li class="nav-item"><a class="nav-link" href="#">Servicios</a></li>
        <li class="nav-item"><a class="nav-link" href="#">Contacto</a></li>
      </ul>
    </div>
  </div>
</nav>`}
          />
          <InfoBox type="info" title="ms-auto">
            La clase de utilidad <code>ms-auto</code> (margin-start: auto) empuja los enlaces hacia la
            derecha dentro de la navbar. Es una clase de espaciado, no específica de la navbar.
          </InfoBox>
        </LessonSection>

        <LessonSection title="Dropdowns dentro de la navbar">
          <p>Puedes anidar un menú desplegable dentro de un elemento de la navbar:</p>
          <CodeBlock
            language="xml"
            code={`<li class="nav-item dropdown">
  <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">
    Recursos
  </a>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Blog</a></li>
    <li><a class="dropdown-item" href="#">Documentación</a></li>
  </ul>
</li>`}
          />
        </LessonSection>

        <LessonSection title="Fijar la navbar: fixed-top y sticky-top">
          <p>
            <code>fixed-top</code> fija la navbar en la parte superior de la ventana, incluso al hacer
            scroll. <code>sticky-top</code> hace algo parecido, pero respeta la posición del elemento
            dentro del flujo del documento hasta que el scroll llega a su altura.
          </p>
          <CodeBlock
            language="xml"
            code={`<nav class="navbar navbar-expand-lg bg-light fixed-top">
  ...
</nav>`}
          />
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
