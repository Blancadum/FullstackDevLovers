import { LessonLayout, LessonSection, CodeBlock, InfoBox, LessonKeyPoints, LessonExercises, LessonSummary } from '../../../components';
import { LessonNavigation } from '../../../components/LessonNavigation';
import { useBreadcrumb } from '../../../hooks/useBreadcrumb';
import { useLessonNavigation } from '../../../hooks/useLessonNavigation';

export function LessonTailwindComponentes() {
  const breadcrumbs = useBreadcrumb();
  const nav = useLessonNavigation();

  const keyPoints = [
    'Repetir las mismas utilidades en varios sitios es habitual en Tailwind; el problema se resuelve extrayendo componentes, no CSS',
    'En proyectos con React/Vue/Angular, la forma recomendada de reutilizar es crear un componente que encapsule las clases',
    'La directiva @apply permite agrupar varias utilidades bajo una clase CSS propia cuando no usas un framework de componentes',
    '@apply debe usarse con moderación: abusar de él te devuelve al problema que Tailwind intenta evitar (CSS separado del HTML)',
    'Un componente Button con variantes (primary, secondary) es el equivalente en Tailwind a btn/btn-primary de Bootstrap, pero construido por ti',
    'Aceptar props como "variant" o "size" en tus componentes te permite reutilizar sin duplicar cadenas de clases',
  ];

  const exercises = [
    {
      title: 'Componente Button en React',
      description:
        'Crea un componente Button en React que reciba una prop "variant" ("primary" o "secondary") y aplique distintas utilidades de Tailwind según el valor.',
      solution: `function Button({ variant = 'primary', children, ...props }) {
  const base = 'px-4 py-2 rounded font-semibold transition-colors';
  const variants = {
    primary: 'bg-blue-600 hover:bg-blue-700 text-white',
    secondary: 'bg-gray-200 hover:bg-gray-300 text-gray-800',
  };

  return (
    <button className={\`\${base} \${variants[variant]}\`} {...props}>
      {children}
    </button>
  );
}

// Uso:
// <Button variant="primary">Guardar</Button>
// <Button variant="secondary">Cancelar</Button>`,
    },
    {
      title: 'Clase de componente con @apply',
      description:
        'Sin usar un framework de componentes, define en tu CSS una clase ".btn-primary" que agrupe, con @apply, las mismas utilidades del ejercicio anterior para la variante primaria.',
      solution: `.btn-primary {
  @apply bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded font-semibold;
}

/* En el HTML: */
/* <button class="btn-primary">Guardar</button> */`,
    },
  ];

  const summary = `Tailwind no elimina la necesidad de reutilizar diseño, solo cambia cómo lo haces:

• En proyectos con un framework de componentes (React, Vue, Angular...), la forma recomendada es crear un componente (Button, Card...) que encapsule las utilidades y acepte props como variant o size.
• Cuando no trabajas con componentes, la directiva @apply te permite agrupar utilidades bajo una clase CSS propia, similar en el resultado final a btn-primary de Bootstrap, pero definida por ti.
• Es buena práctica reservar @apply para patrones muy repetidos y de bajo nivel (botones, inputs), y dejar que la mayoría del diseño se resuelva con componentes y utilidades directamente en el HTML/JSX.

Esta forma de trabajar es la gran diferencia práctica frente a Bootstrap: en vez de heredar los componentes de un framework externo, construyes tu propio sistema de diseño a medida.`;

  return (
    <>
      <LessonLayout
        title="Creación de componentes"
        description="Cómo extraer y reutilizar componentes de interfaz construidos con clases de Tailwind CSS"
        breadcrumbs={breadcrumbs}
        seoTitle="Creación de componentes con Tailwind CSS - Guía Completa"
        seoDescription="Aprende a crear y reutilizar componentes de interfaz con Tailwind CSS."
        seoKeywords="tailwind css, componentes, reutilización, ui"
        url="https://fullstackdevlovers.com/frontend/tailwindcss/componentes"
      >
        <p>
          Es habitual que, al usar Tailwind, algún botón o tarjeta acabe repitiendo la misma cadena larga
          de clases en varios sitios. En Bootstrap esto se resolvía porque el componente ya existía (
          <code>btn-primary</code>); en Tailwind lo resuelves tú, extrayendo esas utilidades a un
          componente reutilizable. En esta lección vas a ver las dos formas habituales de hacerlo.
        </p>

        <LessonSection title="El problema: clases repetidas">
          <p>
            Imagina que tienes el mismo botón "primario" en varios lugares de tu aplicación:
          </p>
          <CodeBlock
            language="xml"
            code={`<button class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded font-semibold">
  Guardar
</button>

<!-- Repetido en otro archivo... -->
<button class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded font-semibold">
  Confirmar
</button>`}
          />
          <p>
            Si mañana cambias el color de marca, tendrías que buscar y reemplazar esa cadena en todos los
            sitios donde aparece. Aquí es donde entra la reutilización.
          </p>
        </LessonSection>

        <LessonSection title="Opción 1: extraer un componente (recomendado en React)">
          <p>
            En un proyecto con React (como el que usa esta propia plataforma), lo natural es crear un
            componente que encapsule las utilidades y reciba props para sus variantes.
          </p>
          <CodeBlock
            language="javascript"
            code={`function Button({ variant = 'primary', children, ...props }) {
  const base = 'px-4 py-2 rounded font-semibold transition-colors';
  const variants = {
    primary: 'bg-blue-600 hover:bg-blue-700 text-white',
    secondary: 'bg-gray-200 hover:bg-gray-300 text-gray-800',
  };

  return (
    <button className={\`\${base} \${variants[variant]}\`} {...props}>
      {children}
    </button>
  );
}`}
          />
          <p>
            Ahora reutilizas el componente en lugar de copiar clases:
          </p>
          <CodeBlock
            language="javascript"
            code={`<Button variant="primary">Guardar</Button>
<Button variant="secondary">Cancelar</Button>`}
          />
        </LessonSection>

        <LessonSection title="Opción 2: @apply en CSS">
          <p>
            Si no trabajas con un framework de componentes (por ejemplo, en HTML plano), Tailwind ofrece la
            directiva <code>@apply</code>, que te permite agrupar utilidades bajo una clase CSS propia.
          </p>
          <CodeBlock
            language="text"
            code={`.btn-primary {
  @apply bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded font-semibold;
}`}
          />
          <CodeBlock
            language="xml"
            code={`<button class="btn-primary">Guardar</button>`}
          />
          <InfoBox type="warning" title="Úsalo con moderación">
            Abusar de <code>@apply</code> te devuelve, poco a poco, al modelo de CSS separado del HTML que
            Tailwind intenta evitar. Resérvalo para patrones muy repetidos (botones, inputs) y deja que el
            resto del diseño viva directamente en las clases del HTML/JSX.
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
