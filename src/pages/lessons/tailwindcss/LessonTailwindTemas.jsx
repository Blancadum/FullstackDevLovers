import { LessonLayout, LessonSection, CodeBlock, InfoBox, LessonKeyPoints, LessonExercises, LessonSummary } from '../../../components';
import { LessonNavigation } from '../../../components/LessonNavigation';
import { useBreadcrumb } from '../../../hooks/useBreadcrumb';
import { useLessonNavigation } from '../../../hooks/useLessonNavigation';

export function LessonTailwindTemas() {
  const breadcrumbs = useBreadcrumb();
  const nav = useLessonNavigation();

  const keyPoints = [
    'Un "tema" agrupa los design tokens de tu proyecto: colores, tipografías, espaciados, radios de borde...',
    'Tailwind soporta modo oscuro de forma nativa, con dos estrategias: "media" (según preferencia del sistema) o "class" (controlada manualmente)',
    'Con la estrategia "class", basta con añadir/quitar la clase dark en un elemento raíz (normalmente <html>) para alternar el tema',
    'El prefijo dark: aplica una utilidad solo cuando el modo oscuro está activo: dark:bg-gray-900',
    'Definir tokens de color con nombres semánticos (primary, background, surface) facilita cambiar el tema completo sin tocar cada componente',
    'Guardar la preferencia del usuario (por ejemplo en localStorage) es habitual para recordar el tema elegido entre visitas',
  ];

  const exercises = [
    {
      title: 'Configurar modo oscuro por clase',
      description:
        'Configura tailwind.config.js para que el modo oscuro se active mediante una clase, y escribe un bloque de HTML que cambie de fondo blanco a gris oscuro según el modo.',
      solution: `/** tailwind.config.js */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: { extend: {} },
};

<!-- Uso en el HTML -->
<div class="bg-white text-gray-900 dark:bg-gray-900 dark:text-white p-6">
  Este bloque cambia según el tema activo
</div>`,
    },
    {
      title: 'Botón para alternar el tema',
      description:
        'Escribe una función en JavaScript que alterne la clase "dark" en el elemento <html>, simulando un botón de cambio de tema.',
      solution: `function toggleTheme() {
  document.documentElement.classList.toggle('dark');
}

// En el HTML:
// <button onclick="toggleTheme()">Cambiar tema</button>`,
    },
  ];

  const summary = `Un tema es, en esencia, el conjunto de design tokens (colores, tipografías, espaciados) que definen la identidad visual de tu proyecto, y Tailwind facilita tanto definirlos como alternar entre variantes (por ejemplo, claro y oscuro):

• darkMode: 'class' en tailwind.config.js te da control manual sobre cuándo se activa el modo oscuro.
• Con esa estrategia, añadir o quitar la clase dark en el elemento raíz (normalmente <html>) activa o desactiva el tema oscuro en toda la página.
• El prefijo dark: se combina con cualquier utilidad (dark:bg-gray-900, dark:text-white...) para definir cómo se ve cada elemento en modo oscuro.
• Definir colores con nombres semánticos en la configuración (primary, background...) facilita cambiar el tema completo sin buscar y reemplazar clases por todo el proyecto.

Con esta lección terminas el bloque de Tailwind CSS: ya conoces su filosofía utility-first, las utilidades más comunes, el diseño responsivo, la creación de componentes reutilizables y cómo personalizar y tematizar la configuración. Tienes una base sólida para decidir, en cada proyecto, si te conviene más Bootstrap o Tailwind CSS.`;

  return (
    <>
      <LessonLayout
        title="Temas y configuración"
        description="Definición de temas (colores, tipografías, modo oscuro) en la configuración de Tailwind CSS"
        breadcrumbs={breadcrumbs}
        seoTitle="Temas y configuración en Tailwind CSS - Guía Completa"
        seoDescription="Aprende a definir temas, modo oscuro y tokens de diseño en la configuración de Tailwind CSS."
        seoKeywords="tailwind css, temas, dark mode, configuración, design tokens"
        url="https://fullstackdevlovers.com/frontend/tailwindcss/temas"
      >
        <p>
          En la lección anterior personalizaste colores y espaciados sueltos. Ahora vamos a dar un paso
          más: definir un <strong>tema</strong> completo, incluido uno de los casos de uso más pedidos hoy
          en día, el modo oscuro. Al terminar esta lección sabrás cómo Tailwind gestiona los temas y cómo
          alternar entre ellos.
        </p>

        <LessonSection title="¿Qué es un tema (design tokens)?">
          <p>
            Un tema es el conjunto de valores base que definen la identidad visual de tu aplicación:
            colores, tipografías, radios de borde, espaciados... A esos valores centralizados se les suele
            llamar <strong>design tokens</strong>. Ya trabajaste con parte de esto en la lección de
            customización, cuando definiste un color de marca.
          </p>
        </LessonSection>

        <LessonSection title="Modo oscuro: las dos estrategias de Tailwind">
          <p>Tailwind soporta el modo oscuro de dos formas configurables en tailwind.config.js:</p>
          <ul>
            <li>
              <code>darkMode: 'media'</code> (por defecto): el tema oscuro se activa automáticamente según
              la preferencia del sistema operativo del usuario.
            </li>
            <li>
              <code>darkMode: 'class'</code>: el tema oscuro se activa manualmente añadiendo la clase{' '}
              <code>dark</code> a un elemento raíz (normalmente <code>&lt;html&gt;</code>). Es la opción
              más habitual cuando quieres dar al usuario un interruptor de tema.
            </li>
          </ul>
          <CodeBlock
            language="javascript"
            code={`/** tailwind.config.js */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: { extend: {} },
};`}
          />
          <InfoBox type="info" title="Tailwind v4: el modo oscuro se configura en CSS">
            La opción <code>darkMode</code> de <code>tailwind.config.js</code> corresponde a Tailwind v3.
            Desde Tailwind CSS v4 ya no existe un archivo de configuración por defecto, y el modo oscuro por
            clase se activa directamente en tu CSS de entrada con:{' '}
            <code>@custom-variant dark (&#38;:where(.dark, .dark *));</code>. Sin ese override, el prefijo{' '}
            <code>dark:</code> sigue la preferencia del sistema operativo (equivalente a{' '}
            <code>darkMode: 'media'</code>) sin necesidad de configuración adicional.
          </InfoBox>
        </LessonSection>

        <LessonSection title="El prefijo dark: en tus utilidades">
          <p>
            Con <code>darkMode: 'class'</code> activo, cualquier utilidad admite el prefijo{' '}
            <code>dark:</code>, que se aplica solo cuando el elemento <code>dark</code> está presente en un
            ancestro (normalmente <code>&lt;html&gt;</code>).
          </p>
          <CodeBlock
            language="xml"
            code={`<div class="bg-white text-gray-900 dark:bg-gray-900 dark:text-white p-6 rounded">
  <h2 class="font-bold text-xl">Título</h2>
  <p class="text-gray-600 dark:text-gray-300">Este texto también cambia con el tema.</p>
</div>`}
          />
        </LessonSection>

        <LessonSection title="Alternar el tema con JavaScript">
          <p>
            Para dar al usuario un botón que cambie entre tema claro y oscuro, basta con alternar la clase{' '}
            <code>dark</code> en el elemento raíz.
          </p>
          <CodeBlock
            language="javascript"
            code={`function toggleTheme() {
  document.documentElement.classList.toggle('dark');
}`}
          />
          <InfoBox type="tip" title="Recuerda la preferencia del usuario">
            Es habitual guardar la elección del usuario (por ejemplo, en <code>localStorage</code>) y
            aplicarla al cargar la página, para que el tema elegido se mantenga entre visitas.
          </InfoBox>
        </LessonSection>

        <LessonSection title="Colores semánticos para facilitar el tematizado">
          <p>
            En vez de usar directamente colores como <code>gray-900</code> repartidos por todo el proyecto,
            muchos equipos definen nombres semánticos en la configuración (<code>primary</code>,{' '}
            <code>background</code>, <code>surface</code>...), de forma que cambiar el tema completo
            implique tocar la configuración, no cada componente uno a uno.
          </p>
          <p>
            Un patrón habitual (en Tailwind v3) es apoyar esos nombres semánticos en variables CSS, para
            poder cambiar sus valores según el tema activo sin tocar <code>tailwind.config.js</code>:
          </p>
          <CodeBlock
            language="css"
            code={`:root {
  --color-primary: 124 58 237; /* violeta */
  --color-background: 255 255 255;
}
.dark {
  --color-primary: 167 139 250;
  --color-background: 17 24 39;
}`}
          />
          <CodeBlock
            language="javascript"
            code={`/** tailwind.config.js */
export default {
  theme: {
    extend: {
      colors: {
        primary: 'rgb(var(--color-primary) / <alpha-value>)',
        background: 'rgb(var(--color-background) / <alpha-value>)',
      },
    },
  },
};`}
          />
          <InfoBox type="info" title="Tailwind v4: colores semánticos nativos en @theme">
            En Tailwind CSS v4 este patrón se simplifica: puedes declarar tus propios colores directamente
            como variables dentro del bloque <code>@theme</code> de tu CSS (
            <code>--color-primary: #7c3aed;</code>) y Tailwind genera automáticamente las utilidades{' '}
            <code>bg-primary</code>, <code>text-primary</code>, etc., sin necesidad de{' '}
            <code>tailwind.config.js</code> ni de la sintaxis <code>rgb(var(...))</code>.
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
