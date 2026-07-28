import { LessonLayout, LessonSection, CodeBlock, InfoBox, LessonKeyPoints, LessonExercises, LessonSummary } from '../../../components';
import { LessonNavigation } from '../../../components/LessonNavigation';
import { useBreadcrumb } from '../../../hooks/useBreadcrumb';
import { useLessonNavigation } from '../../../hooks/useLessonNavigation';

export function LessonBootstrapIntroduccion() {
  const breadcrumbs = useBreadcrumb();
  const nav = useLessonNavigation();

  const keyPoints = [
    'Bootstrap es un framework CSS (con algo de JavaScript) que ofrece componentes visuales ya construidos: botones, formularios, navbars, cards...',
    'Se puede instalar por CDN (sin build tools) o por npm (integrado en un proceso de build)',
    'La meta etiqueta viewport es obligatoria para que el diseño responsivo de Bootstrap funcione en móvil',
    'Bootstrap sigue un enfoque "component-first": aplicas clases con significado semántico como btn o card',
    'Muchos componentes interactivos (dropdowns, modales, tooltips) necesitan el bundle de JavaScript de Bootstrap',
    'Conocer Bootstrap te resulta muy útil en proyectos existentes (legacy) que ya lo usan como base de estilos',
  ];

  const exercises = [
    {
      title: 'Tu primera página con Bootstrap',
      description:
        'Crea un archivo index.html que cargue Bootstrap por CDN y muestre un título dentro de un <div class="container"> junto a un botón con las clases "btn btn-primary".',
      solution: `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Mi primera página con Bootstrap</title>
  <link
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
    rel="stylesheet"
  />
</head>
<body>
  <div class="container mt-5">
    <h1>Hola, Bootstrap</h1>
    <button class="btn btn-primary">Empezar</button>
  </div>

  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>`,
    },
    {
      title: 'Instalación por npm',
      description:
        'Explica con tus propias palabras qué comando instalarías y qué archivo importarías en tu CSS/JS de entrada para usar Bootstrap dentro de un proyecto con bundler (Vite, Webpack...).',
      solution: `npm install bootstrap

// En tu archivo de entrada (por ejemplo main.js):
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';`,
    },
  ];

  const summary = `Bootstrap es un framework CSS que lleva más de una década siendo uno de los más usados en el desarrollo web:

• Ofrece componentes visuales ya construidos (botones, navbars, cards, formularios...) que aplicas con clases.
• Se instala por CDN (rápido, sin build) o por npm (integrado en el proceso de build del proyecto).
• Incluye un sistema de grid responsivo de 12 columnas, que veremos en la siguiente lección.
• Algunos componentes necesitan JavaScript (bundle de Bootstrap) para funcionar de forma interactiva.
• Es habitual encontrarlo en proyectos ya existentes, así que entenderlo te ayuda a incorporarte a equipos que ya lo usan.

A lo largo de este bloque construiremos, paso a paso, una página completa con Bootstrap: grid, componentes, botones, formularios, navbar y cards.`;

  return (
    <>
      <LessonLayout
        title="Introducción a Bootstrap"
        description="Qué es Bootstrap, para qué se usa y cómo empezar un proyecto con este framework CSS"
        breadcrumbs={breadcrumbs}
        seoTitle="Introducción a Bootstrap - Guía Completa"
        seoDescription="Aprende qué es Bootstrap, sus características principales y cómo instalarlo en tu primer proyecto."
        seoKeywords="bootstrap, introducción, framework css, diseño responsivo"
        url="https://fullstackdevlovers.com/frontend/bootstrap/introduccion"
      >
        <p>
          En esta lección vas a descubrir qué es Bootstrap, por qué sigue siendo uno de los frameworks
          CSS más usados en el mundo laboral y cómo añadirlo a un proyecto en cinco minutos. Es la puerta
          de entrada al bloque de Bootstrap: aquí sentamos las bases (instalación, estructura de archivos)
          que usaremos en el resto de lecciones para construir grid, componentes, formularios y navbars.
        </p>

        <LessonSection title="¿Qué es Bootstrap?">
          <p>
            Bootstrap es un framework CSS de código abierto, creado originalmente por Twitter, que
            proporciona una colección de estilos y componentes ya diseñados: botones, formularios,
            tarjetas, barras de navegación, alertas... Su objetivo es que no tengas que escribir CSS
            desde cero para conseguir una interfaz coherente y responsiva.
          </p>
          <p>
            A diferencia de escribir tu propio CSS a mano, con Bootstrap aplicas <strong>clases con
            significado</strong> directamente en el HTML: <code>btn</code>, <code>card</code>,{' '}
            <code>navbar</code>... El framework ya trae los estilos definidos para esas clases.
          </p>
          <InfoBox type="info" title="Component-first">
            Bootstrap sigue un enfoque orientado a componentes: la mayoría de sus clases representan
            piezas de interfaz completas (un botón, una tarjeta, una alerta), no propiedades CSS
            aisladas. Más adelante, cuando veamos Tailwind CSS, contrastaremos este enfoque con el
            modelo "utility-first".
          </InfoBox>
        </LessonSection>

        <LessonSection title="Instalación: CDN vs npm">
          <p>
            Hay dos formas habituales de incorporar Bootstrap a un proyecto:
          </p>
          <p><strong>1. Por CDN</strong> (sin instalar nada, ideal para prototipos rápidos o proyectos sin build tools):</p>
          <CodeBlock
            language="xml"
            code={`<link
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
  rel="stylesheet"
/>

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>`}
          />
          <p><strong>2. Por npm</strong> (recomendado en proyectos con bundler, como Vite o Webpack):</p>
          <CodeBlock
            language="bash"
            code={`npm install bootstrap`}
          />
          <CodeBlock
            language="javascript"
            code={`// En tu archivo de entrada JS/CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';`}
          />
        </LessonSection>

        <LessonSection title="Estructura básica de una página con Bootstrap">
          <p>
            Independientemente del método de instalación, toda página que use Bootstrap necesita al
            menos: la hoja de estilos cargada, la meta etiqueta <code>viewport</code> y, si vas a usar
            componentes interactivos, el bundle de JavaScript.
          </p>
          <CodeBlock
            language="xml"
            code={`<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Mi proyecto con Bootstrap</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" />
</head>
<body>
  <div class="container">
    <h1>¡Bootstrap funcionando!</h1>
  </div>

  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>`}
          />
          <InfoBox type="warning" title="No olvides el viewport">
            Sin <code>&lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;</code>,
            el sistema de grid y las clases responsivas de Bootstrap no se comportan correctamente en
            dispositivos móviles.
          </InfoBox>
        </LessonSection>

        <LessonSection title="Bootstrap vs Tailwind: primera pincelada">
          <p>
            A lo largo de esta plataforma verás también un bloque dedicado a Tailwind CSS. Adelantamos
            la diferencia clave, porque te ayudará a entender ambas herramientas mejor:
          </p>
          <ul>
            <li>
              <strong>Bootstrap</strong> te da componentes ya montados (<code>btn</code>, <code>card</code>,{' '}
              <code>navbar</code>...): escribes menos HTML/CSS, pero personalizar mucho su aspecto implica
              sobrescribir estilos.
            </li>
            <li>
              <strong>Tailwind CSS</strong> te da clases de utilidad muy pequeñas (<code>p-4</code>,{' '}
              <code>flex</code>, <code>text-blue-500</code>...) que combinas tú mismo/a para construir
              cualquier componente, con más flexibilidad pero más clases en el HTML.
            </li>
          </ul>
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
