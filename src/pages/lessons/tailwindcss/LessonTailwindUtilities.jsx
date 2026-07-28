import { LessonLayout, LessonSection, CodeBlock, InfoBox, LessonKeyPoints, LessonExercises, LessonSummary } from '../../../components';
import { LessonNavigation } from '../../../components/LessonNavigation';
import { useBreadcrumb } from '../../../hooks/useBreadcrumb';
import { useLessonNavigation } from '../../../hooks/useLessonNavigation';

export function LessonTailwindUtilities() {
  const breadcrumbs = useBreadcrumb();
  const nav = useLessonNavigation();

  const keyPoints = [
    'Las utilidades de espaciado usan una escala numérica: p-4, m-2, px-6, py-3... (múltiplos de 0.25rem aprox.)',
    'Los colores siguen el patrón propiedad-color-intensidad: bg-blue-600, text-gray-800, border-red-400',
    'flex y grid activan esos modelos de layout; se combinan con items-*, justify-*, gap-* para alinear y espaciar',
    'Los prefijos de estado (hover:, focus:, disabled:) aplican la utilidad solo en ese estado',
    'Puedes combinar decenas de utilidades en un mismo elemento: cuantas más domines, menos CSS custom necesitarás',
    'Si una clase no existe o la escribes mal, Tailwind simplemente no la aplica (revisa la consola/documentación ante dudas)',
  ];

  const exercises = [
    {
      title: 'Tarjeta con utilidades de espaciado y color',
      description:
        'Construye un div con fondo blanco, padding, borde redondeado, sombra y un título en azul oscuro y negrita, y un párrafo en gris.',
      solution: `<div class="bg-white p-6 rounded-lg shadow-md">
  <h2 class="text-2xl font-bold text-blue-900">Título de la tarjeta</h2>
  <p class="text-gray-600 mt-2">Texto descriptivo de la tarjeta.</p>
</div>`,
    },
    {
      title: 'Fila con flexbox',
      description:
        'Crea una fila con flex que reparta tres elementos con espacio entre ellos (justify-between), centrados verticalmente, con un gap de 4.',
      solution: `<div class="flex items-center justify-between gap-4">
  <span>Elemento 1</span>
  <span>Elemento 2</span>
  <span>Elemento 3</span>
</div>`,
    },
  ];

  const summary = `Las utility classes son el corazón de Tailwind CSS. Las agrupamos en familias:

• Espaciado: p-* (padding), m-* (margin), con variantes por eje (px-, py-, mt-, mb-...).
• Color: bg-*, text-*, border-*, siguiendo el patrón color-intensidad (blue-600, gray-800...).
• Tipografía: text-{tamaño} (text-sm, text-xl...), font-{peso} (font-bold, font-medium...).
• Layout: flex, grid, grid-cols-*, items-*, justify-*, gap-*.
• Estados: hover:, focus:, disabled: como prefijos que aplican la utilidad solo en ese estado.

Dominar estas familias es el 80% del trabajo diario con Tailwind. En la próxima lección veremos cómo estas mismas utilidades se combinan con prefijos de breakpoint para construir diseños responsivos.`;

  return (
    <>
      <LessonLayout
        title="Utility Classes"
        description="Las clases de utilidad de Tailwind CSS y cómo combinarlas para maquetar sin salir del HTML"
        breadcrumbs={breadcrumbs}
        seoTitle="Utility Classes en Tailwind CSS - Guía Completa"
        seoDescription="Aprende a usar las clases de utilidad de Tailwind CSS para maquetar interfaces sin escribir CSS."
        seoKeywords="tailwind css, utility classes, clases de utilidad, css"
        url="https://fullstackdevlovers.com/frontend/tailwindcss/utilities"
      >
        <p>
          Ya sabes que Tailwind es "utility-first". En esta lección vamos a recorrer las familias de
          utilidades que más vas a usar en el día a día: espaciado, color, tipografía, layout (flex/grid)
          y estados como hover o focus. Todas siguen patrones de nombres predecibles, así que en poco
          tiempo empezarás a intuir el nombre de la clase que necesitas.
        </p>

        <LessonSection title="Espaciado: padding y margin">
          <p>
            Tailwind usa una escala numérica consistente para el espaciado. Cuanto mayor el número, mayor
            el espacio.
          </p>
          <CodeBlock
            language="xml"
            code={`<div class="p-4">Padding en los 4 lados</div>
<div class="px-6 py-2">Padding horizontal grande, vertical pequeño</div>
<div class="m-4">Margin en los 4 lados</div>
<div class="mt-8 mb-2">Margin superior grande, inferior pequeño</div>`}
          />
          <InfoBox type="tip" title="Prefijos de eje">
            <code>p-4</code> aplica padding en todos los lados. <code>px-4</code> solo en horizontal
            (izquierda y derecha), <code>py-4</code> solo en vertical, y <code>pt-</code>, <code>pr-</code>,{' '}
            <code>pb-</code>, <code>pl-</code> en un lado concreto. Lo mismo aplica para margin con{' '}
            <code>m-</code>.
          </InfoBox>
        </LessonSection>

        <LessonSection title="Color: fondo, texto y bordes">
          <p>
            Los colores siguen el patrón <code>propiedad-color-intensidad</code>, donde la intensidad va de
            50 (muy claro) a 900 (muy oscuro).
          </p>
          <CodeBlock
            language="xml"
            code={`<div class="bg-blue-600 text-white">Fondo azul, texto blanco</div>
<p class="text-gray-800">Texto gris oscuro</p>
<div class="border border-red-400">Borde rojo claro</div>`}
          />
        </LessonSection>

        <LessonSection title="Tipografía">
          <CodeBlock
            language="xml"
            code={`<h1 class="text-3xl font-bold">Título grande y en negrita</h1>
<h2 class="text-xl font-semibold">Subtítulo</h2>
<p class="text-base font-normal text-gray-700">Texto de párrafo normal</p>
<p class="text-sm text-gray-500">Texto pequeño y más claro</p>`}
          />
        </LessonSection>

        <LessonSection title="Layout: flexbox y grid">
          <p>
            Las utilidades de layout activan flexbox o grid y se combinan con clases de alineación y
            espaciado entre elementos.
          </p>
          <CodeBlock
            language="xml"
            code={`<div class="flex items-center justify-between gap-4">
  <span>Izquierda</span>
  <span>Derecha</span>
</div>

<div class="grid grid-cols-3 gap-4">
  <div>Columna 1</div>
  <div>Columna 2</div>
  <div>Columna 3</div>
</div>`}
          />
        </LessonSection>

        <LessonSection title="Estados: hover, focus y disabled">
          <p>
            Añadiendo un prefijo antes de la utilidad, esta solo se aplica en ese estado concreto. Es una
            de las características más potentes de Tailwind: no necesitas escribir CSS con{' '}
            <code>:hover</code> aparte.
          </p>
          <CodeBlock
            language="xml"
            code={`<button class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded focus:ring-2 focus:ring-blue-300 disabled:opacity-50">
  Guardar
</button>`}
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
