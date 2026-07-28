import { LessonLayout, LessonSection, CodeBlock, InfoBox, LessonKeyPoints, LessonExercises, LessonSummary } from '../../../components';
import { LessonNavigation } from '../../../components/LessonNavigation';
import { useBreadcrumb } from '../../../hooks/useBreadcrumb';
import { useLessonNavigation } from '../../../hooks/useLessonNavigation';

export function LessonTailwindResponsive() {
  const breadcrumbs = useBreadcrumb();
  const nav = useLessonNavigation();

  const keyPoints = [
    'Tailwind es mobile-first: una utilidad sin prefijo aplica a todos los tamaños salvo que la sobrescribas',
    'Los prefijos de breakpoint son sm:, md:, lg:, xl: y 2xl:, de menor a mayor ancho de pantalla',
    'Cada prefijo aplica la utilidad "a partir de" ese ancho hacia arriba, nunca hacia abajo',
    'Puedes combinar varios prefijos en el mismo elemento para ir cambiando el diseño en cada breakpoint',
    'Utilidades como hidden y flex, combinadas con prefijos, permiten mostrar/ocultar elementos según el tamaño de pantalla',
    'El enfoque es equivalente al de Bootstrap (col-md-6, col-lg-4...), pero aplicado a cualquier utilidad, no solo al grid',
  ];

  const exercises = [
    {
      title: 'Grid responsivo de tarjetas',
      description:
        'Construye un grid que muestre 1 columna en móvil, 2 columnas a partir de "md" y 3 columnas a partir de "lg".',
      solution: `<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  <div class="bg-white p-4 rounded shadow">Tarjeta 1</div>
  <div class="bg-white p-4 rounded shadow">Tarjeta 2</div>
  <div class="bg-white p-4 rounded shadow">Tarjeta 3</div>
</div>`,
    },
    {
      title: 'Navegación adaptativa',
      description:
        'Oculta un menú horizontal en móvil (hidden) y muéstralo como flex a partir del breakpoint "md", dejando sitio para un botón de menú hamburguesa (que no hace falta implementar) que solo se vería en móvil.',
      solution: `<nav class="flex items-center justify-between p-4">
  <span class="font-bold">MiMarca</span>

  <ul class="hidden md:flex gap-6">
    <li><a href="#">Inicio</a></li>
    <li><a href="#">Servicios</a></li>
    <li><a href="#">Contacto</a></li>
  </ul>

  <button class="md:hidden">☰</button>
</nav>`,
    },
  ];

  const summary = `Tailwind aplica el mismo principio mobile-first que ya viste en Bootstrap, pero extendido a cualquier utilidad, no solo al grid:

• Una clase sin prefijo (por ejemplo grid-cols-1) aplica desde el móvil hacia arriba.
• sm:, md:, lg:, xl: y 2xl: son los prefijos de breakpoint, de menor a mayor ancho.
• Cada prefijo sobrescribe el comportamiento "a partir de" ese ancho, nunca por debajo.
• Combinando varios prefijos sobre el mismo elemento (grid-cols-1 md:grid-cols-2 lg:grid-cols-3) consigues layouts que van cambiando de forma progresiva.
• hidden/flex/block combinados con prefijos son la forma habitual de mostrar u ocultar bloques enteros según el tamaño de pantalla (por ejemplo, un menú de escritorio frente a un botón hamburguesa).

Con esto ya puedes construir interfaces adaptativas sin escribir una sola media query manualmente.`;

  return (
    <>
      <LessonLayout
        title="Responsive Design"
        description="Los prefijos responsivos de Tailwind CSS para adaptar interfaces a distintos tamaños de pantalla"
        breadcrumbs={breadcrumbs}
        seoTitle="Responsive Design con Tailwind CSS - Guía Completa"
        seoDescription="Aprende a construir interfaces responsivas usando los prefijos de breakpoints de Tailwind CSS."
        seoKeywords="tailwind css, responsive design, breakpoints, mobile first"
        url="https://fullstackdevlovers.com/frontend/tailwindcss/responsive"
      >
        <p>
          En Bootstrap conseguías un diseño responsivo combinando clases como <code>col-md-6</code>. En
          Tailwind el principio es el mismo, pero se aplica a <strong>cualquier</strong> utilidad, no solo
          al grid: puedes cambiar el color, el tamaño de fuente, el padding o el layout completo según el
          tamaño de pantalla. En esta lección vas a aprender a usar los prefijos de breakpoint de Tailwind.
        </p>

        <LessonSection title="Mobile-first: la base sin prefijo">
          <p>
            Al igual que Bootstrap, Tailwind sigue un enfoque mobile-first. Cualquier utilidad sin prefijo
            aplica desde el móvil hacia arriba, salvo que la sobrescribas con un prefijo de breakpoint.
          </p>
          <CodeBlock
            language="xml"
            code={`<div class="text-sm md:text-base lg:text-lg">
  El tamaño de este texto crece según el ancho de pantalla
</div>`}
          />
        </LessonSection>

        <LessonSection title="Los breakpoints de Tailwind">
          <p>Tailwind define cinco breakpoints por defecto:</p>
          <ul>
            <li><code>sm:</code> ≥ 640px</li>
            <li><code>md:</code> ≥ 768px</li>
            <li><code>lg:</code> ≥ 1024px</li>
            <li><code>xl:</code> ≥ 1280px</li>
            <li><code>2xl:</code> ≥ 1536px</li>
          </ul>
          <InfoBox type="info" title="A partir de, nunca por debajo">
            Un prefijo como <code>md:flex</code> significa "aplica <code>flex</code> a partir de 768px
            hacia arriba". No existe un prefijo que signifique "solo por debajo de"; si necesitas ese
            comportamiento, sueles combinarlo con <code>hidden</code> en el breakpoint contrario.
          </InfoBox>
        </LessonSection>

        <LessonSection title="Grid responsivo">
          <p>
            Un caso muy habitual: mostrar una columna en móvil, dos en tablet y tres en escritorio.
          </p>
          <CodeBlock
            language="xml"
            code={`<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  <div class="bg-white p-4 rounded shadow">Tarjeta 1</div>
  <div class="bg-white p-4 rounded shadow">Tarjeta 2</div>
  <div class="bg-white p-4 rounded shadow">Tarjeta 3</div>
</div>`}
          />
        </LessonSection>

        <LessonSection title="Mostrar y ocultar según el tamaño de pantalla">
          <p>
            Combinando <code>hidden</code> con un prefijo puedes construir patrones como "menú horizontal
            en escritorio, botón hamburguesa en móvil":
          </p>
          <CodeBlock
            language="xml"
            code={`<nav class="flex items-center justify-between p-4">
  <span class="font-bold">MiMarca</span>

  <ul class="hidden md:flex gap-6">
    <li><a href="#">Inicio</a></li>
    <li><a href="#">Servicios</a></li>
  </ul>

  <button class="md:hidden">☰</button>
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
