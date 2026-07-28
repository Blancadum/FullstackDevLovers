import { LessonLayout, LessonSection, CodeBlock, InfoBox, LessonKeyPoints, LessonExercises, LessonSummary } from '../../../components';
import { LessonNavigation } from '../../../components/LessonNavigation';
import { useBreadcrumb } from '../../../hooks/useBreadcrumb';
import { useLessonNavigation } from '../../../hooks/useLessonNavigation';

export function LessonTailwindIntroduccion() {
  const breadcrumbs = useBreadcrumb();
  const nav = useLessonNavigation();

  const keyPoints = [
    'Tailwind CSS es un framework "utility-first": ofrece clases pequeñas de una sola responsabilidad, no componentes completos',
    'A diferencia de Bootstrap, no tienes una clase "card" o "navbar" predefinida: la construyes combinando utilidades',
    'Se instala vía npm y necesita un paso de compilación (build) que procese tu HTML/JSX y genere el CSS final',
    'El archivo tailwind.config.js le indica a Tailwind dónde buscar las clases usadas en tu proyecto',
    'Tailwind solo incluye en el CSS final las clases que realmente usas (purga de clases no utilizadas)',
    'La curva de aprendizaje inicial es mayor que la de Bootstrap, pero da muchísima más flexibilidad de diseño',
  ];

  const exercises = [
    {
      title: 'Instalar Tailwind en un proyecto',
      description:
        'Enumera, en orden, los pasos para instalar Tailwind CSS en un proyecto con npm: instalación de paquetes, generación del archivo de configuración y directivas necesarias en el CSS de entrada.',
      solution: `# 1. Instalar dependencias
npm install -D tailwindcss postcss autoprefixer

# 2. Generar tailwind.config.js y postcss.config.js
npx tailwindcss init -p

# 3. Configurar "content" en tailwind.config.js para que apunte a tus archivos HTML/JSX

# 4. Añadir las directivas en tu CSS de entrada (por ejemplo index.css):
@tailwind base;
@tailwind components;
@tailwind utilities;`,
    },
    {
      title: 'Traducir un botón de Bootstrap a Tailwind',
      description:
        'El botón <button class="btn btn-primary">Guardar</button> de Bootstrap usa una clase de componente. Escribe el equivalente aproximado en Tailwind combinando utilidades de color de fondo, texto, padding y bordes redondeados.',
      solution: `<button class="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded">
  Guardar
</button>`,
    },
  ];

  const summary = `Tailwind CSS es un framework CSS "utility-first": en lugar de darte componentes ya montados (como el btn-primary o card de Bootstrap), te da un catálogo enorme de clases de utilidad muy pequeñas (una por cada propiedad CSS aproximadamente) que combinas tú mismo/a para construir cualquier diseño.

• Se instala por npm y necesita un paso de compilación que procese tus archivos y genere el CSS final.
• tailwind.config.js define, entre otras cosas, en qué archivos debe buscar las clases usadas (content).
• Solo el CSS de las clases realmente usadas en tu proyecto llega al bundle final, lo que mantiene el CSS ligero incluso en proyectos grandes.
• A cambio de un poco más de verbosidad en el HTML, ganas muchísima flexibilidad: no dependes del diseño "por defecto" de un framework de componentes.

En las siguientes lecciones profundizaremos en las utilidades más usadas, el diseño responsivo, cómo extraer componentes reutilizables y cómo personalizar la configuración.`;

  return (
    <>
      <LessonLayout
        title="Introducción a Tailwind CSS"
        description="Qué es Tailwind CSS, el enfoque utility-first y cómo instalarlo en un proyecto"
        breadcrumbs={breadcrumbs}
        seoTitle="Introducción a Tailwind CSS - Guía Completa"
        seoDescription="Aprende qué es Tailwind CSS, su filosofía utility-first y cómo instalarlo en tu primer proyecto."
        seoKeywords="tailwind css, introducción, utility-first, framework css"
        url="https://fullstackdevlovers.com/frontend/tailwindcss/introduccion"
      >
        <p>
          Si vienes de trabajar con Bootstrap, Tailwind CSS te va a parecer, al principio, un enfoque
          radicalmente distinto: no hay clases <code>btn</code> o <code>card</code> ya diseñadas, sino un
          catálogo enorme de piezas pequeñas que combinas tú. En esta lección vas a entender por qué este
          enfoque "utility-first" se ha vuelto tan popular y cómo instalar Tailwind en un proyecto.
        </p>

        <LessonSection title="¿Qué es Tailwind CSS?">
          <p>
            Tailwind CSS es un framework CSS que, en lugar de ofrecer componentes visuales completos, te
            da <strong>clases de utilidad</strong>: cada clase aplica, normalmente, una única propiedad CSS.
            Por ejemplo, <code>p-4</code> aplica un padding, <code>flex</code> activa flexbox y{' '}
            <code>text-blue-500</code> pone el texto en un azul concreto.
          </p>
          <CodeBlock
            language="xml"
            code={`<div class="p-4 bg-white rounded shadow">
  <h2 class="text-xl font-bold text-gray-800">Hola, Tailwind</h2>
  <p class="text-gray-600 mt-2">Este bloque combina varias utilidades pequeñas.</p>
</div>`}
          />
        </LessonSection>

        <LessonSection title="Utility-first vs enfoque basado en componentes">
          <p>
            En el bloque anterior viste Bootstrap, que sigue un enfoque "component-first": la clase{' '}
            <code>card</code> ya trae consigo un diseño completo (bordes, sombra, padding...). Tailwind
            invierte esa lógica: no hay clase <code>card</code>; la construyes tú combinando utilidades.
          </p>
          <ComparisonExample />
          <InfoBox type="info" title="Ni mejor ni peor, distinto">
            Bootstrap te da velocidad inicial y consistencia visual "de fábrica". Tailwind te da más
            control y evita que tu diseño se parezca al de cualquier otra web hecha con el mismo
            framework, a cambio de escribir más clases en el HTML.
          </InfoBox>
        </LessonSection>

        <LessonSection title="Instalación en un proyecto con npm">
          <p>La forma más habitual de instalar Tailwind en un proyecto con bundler:</p>
          <CodeBlock
            language="bash"
            code={`npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p`}
          />
          <p>
            El comando anterior genera dos archivos: <code>tailwind.config.js</code> (configuración de
            Tailwind) y <code>postcss.config.js</code> (integración con PostCSS). En{' '}
            <code>tailwind.config.js</code> debes indicar en qué archivos de tu proyecto va a buscar
            clases:
          </p>
          <CodeBlock
            language="javascript"
            code={`/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};`}
          />
          <p>Y en tu CSS de entrada, añades las tres directivas de Tailwind:</p>
          <CodeBlock
            language="text"
            code={`@tailwind base;
@tailwind components;
@tailwind utilities;`}
          />
          <InfoBox type="tip" title="Herramientas modernas">
            Frameworks como Vite ofrecen plugins específicos para integrar Tailwind de forma aún más
            directa. Consulta siempre la documentación oficial de Tailwind para el método de instalación
            recomendado en la versión que estés usando.{' '}
          </InfoBox>
          <InfoBox type="warning" title="Esto corresponde a Tailwind v3">
            El flujo anterior (<code>npx tailwindcss init -p</code>, <code>tailwind.config.js</code> y las
            directivas <code>@tailwind base/components/utilities</code>) es el de Tailwind CSS v3, todavía
            muy común en proyectos existentes. Desde Tailwind CSS v4 la instalación es más simple y ya no
            requiere generar un archivo de configuración: instalas <code>tailwindcss</code> junto con el
            plugin de tu bundler (por ejemplo, <code>npm install tailwindcss @tailwindcss/vite</code>) y
            añades una única línea en tu CSS de entrada, <code>@import "tailwindcss";</code>, en lugar de
            las tres directivas <code>@tailwind</code>. La configuración de tema (colores, fuentes,
            breakpoints...) pasa a definirse directamente en CSS con el bloque <code>@theme</code>, en vez
            de en <code>tailwind.config.js</code>.
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

function ComparisonExample() {
  return (
    <>
      <p><strong>Bootstrap (component-first):</strong></p>
      <CodeBlock language="xml" code={`<div class="card">
  <div class="card-body">Contenido</div>
</div>`} />
      <p><strong>Tailwind (utility-first):</strong></p>
      <CodeBlock language="xml" code={`<div class="bg-white rounded-lg shadow p-4">
  Contenido
</div>`} />
    </>
  );
}
