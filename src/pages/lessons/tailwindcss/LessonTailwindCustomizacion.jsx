import { LessonLayout, LessonSection, CodeBlock, InfoBox, LessonKeyPoints, LessonExercises, LessonSummary } from '../../../components';
import { LessonNavigation } from '../../../components/LessonNavigation';
import { useBreadcrumb } from '../../../hooks/useBreadcrumb';
import { useLessonNavigation } from '../../../hooks/useLessonNavigation';

export function LessonTailwindCustomizacion() {
  const breadcrumbs = useBreadcrumb();
  const nav = useLessonNavigation();

  const keyPoints = [
    'tailwind.config.js es el punto central de configuración: colores, espaciados, fuentes, breakpoints, plugins...',
    'content indica en qué archivos debe buscar Tailwind las clases usadas, para generar solo el CSS necesario',
    'theme.extend añade valores nuevos sin perder los que trae Tailwind por defecto',
    'Sobrescribir theme (sin extend) reemplaza por completo los valores por defecto de esa categoría: úsalo con cuidado',
    'Puedes definir tu propia paleta de colores de marca y usarla igual que los colores predefinidos (bg-marca-500)',
    'Los plugins oficiales (forms, typography) añaden utilidades y estilos base adicionales instalables por npm',
  ];

  const exercises = [
    {
      title: 'Añadir un color de marca',
      description:
        'Configura en tailwind.config.js un color personalizado "marca" con el valor #7c3aed, y úsalo en una clase bg-marca.',
      solution: `/** tailwind.config.js */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        marca: '#7c3aed',
      },
    },
  },
};

<!-- Uso en el HTML -->
<div class="bg-marca text-white p-4">Color de marca</div>`,
    },
    {
      title: 'Ampliar el espaciado disponible',
      description:
        'Añade un valor de espaciado personalizado "18" (equivalente a 4.5rem) sin perder la escala de espaciado por defecto de Tailwind.',
      solution: `/** tailwind.config.js */
export default {
  theme: {
    extend: {
      spacing: {
        18: '4.5rem',
      },
    },
  },
};

<!-- Uso: -->
<div class="p-18">Padding personalizado</div>`,
    },
  ];

  const summary = `El archivo tailwind.config.js es donde adaptas Tailwind a la identidad visual de tu proyecto:

• content define en qué archivos buscar las clases usadas, imprescindible para que Tailwind genere el CSS correcto.
• theme.extend añade valores nuevos (colores, espaciados, fuentes...) sin perder los que Tailwind trae por defecto.
• Sobrescribir theme directamente (sin extend) reemplaza toda esa categoría, así que se usa con menos frecuencia.
• Los plugins oficiales, como @tailwindcss/forms o @tailwindcss/typography, se instalan por npm y se registran en el array plugins.

Personalizar la configuración es el paso natural cuando pasas de "aprender Tailwind" a "aplicar la identidad visual de un proyecto real". En la siguiente lección veremos cómo, dentro de esa configuración, se definen temas completos, incluido el modo oscuro.`;

  return (
    <>
      <LessonLayout
        title="Customización"
        description="Cómo personalizar el archivo de configuración de Tailwind CSS para adaptarlo a tu proyecto"
        breadcrumbs={breadcrumbs}
        seoTitle="Customización de Tailwind CSS - Guía Completa"
        seoDescription="Aprende a personalizar la configuración de Tailwind CSS: colores, espaciados y plugins."
        seoKeywords="tailwind css, customización, configuración, tailwind.config"
        url="https://fullstackdevlovers.com/frontend/tailwindcss/customizacion"
      >
        <p>
          Hasta ahora has usado los valores por defecto de Tailwind: los colores, tamaños y espaciados que
          trae "de fábrica". En un proyecto real casi siempre necesitas adaptar esos valores a la identidad
          visual de la marca. En esta lección vas a aprender a personalizar{' '}
          <code>tailwind.config.js</code>: colores, espaciados y plugins.
        </p>

        <LessonSection title="Anatomía de tailwind.config.js">
          <CodeBlock
            language="javascript"
            code={`/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      // Aquí añades tus valores personalizados
    },
  },
  plugins: [],
};`}
          />
          <ul>
            <li><code>content</code>: rutas donde Tailwind busca las clases realmente usadas.</li>
            <li><code>theme</code>: define la "paleta" de valores disponibles (colores, tamaños, fuentes...).</li>
            <li><code>plugins</code>: extensiones que añaden utilidades o estilos adicionales.</li>
          </ul>
        </LessonSection>

        <LessonSection title="extend vs sobrescribir">
          <p>
            Casi siempre querrás <strong>añadir</strong> valores sin perder los que Tailwind ya trae. Para
            eso se usa <code>theme.extend</code>.
          </p>
          <CodeBlock
            language="javascript"
            code={`theme: {
  extend: {
    colors: {
      marca: '#7c3aed',
    },
  },
},`}
          />
          <InfoBox type="warning" title="Cuidado al sobrescribir theme directamente">
            Si defines una propiedad dentro de <code>theme</code> (fuera de <code>extend</code>), sustituyes
            por completo esa categoría de valores por defecto. Por ejemplo, sobrescribir{' '}
            <code>theme.colors</code> sin <code>extend</code> elimina todos los colores predefinidos de
            Tailwind, dejando solo los que definas tú.
          </InfoBox>
        </LessonSection>

        <LessonSection title="Colores de marca personalizados">
          <p>Una vez definido el color en la configuración, se usa exactamente igual que cualquier otro:</p>
          <CodeBlock
            language="xml"
            code={`<div class="bg-marca text-white p-4 rounded">
  Bloque con el color de marca
</div>`}
          />
        </LessonSection>

        <LessonSection title="Plugins oficiales">
          <p>
            El equipo de Tailwind mantiene plugins que añaden utilidades y estilos base para casos
            comunes, como formularios o contenido de texto largo (artículos, blogs).
          </p>
          <CodeBlock
            language="bash"
            code={`npm install -D @tailwindcss/forms @tailwindcss/typography`}
          />
          <p>
            Si tu <code>tailwind.config.js</code> usa módulos ES (como los ejemplos de esta lección, con{' '}
            <code>export default</code>), importa los plugins con <code>import</code> en la cabecera del
            archivo en vez de con <code>require</code> (que pertenece a CommonJS):
          </p>
          <CodeBlock
            language="javascript"
            code={`import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';

export default {
  // ...resto de la configuración
  plugins: [forms, typography],
};`}
          />
          <InfoBox type="info" title="Tailwind v4: plugins desde el CSS">
            Desde Tailwind CSS v4, la forma recomendada de registrar plugins ya no pasa por{' '}
            <code>tailwind.config.js</code>, sino por la directiva <code>@plugin</code> en tu propio CSS de
            entrada: <code>@plugin "@tailwindcss/forms";</code>. El patrón con{' '}
            <code>plugins: [...]</code> en un archivo de configuración JS sigue funcionando como capa de
            compatibilidad, pero corresponde al enfoque de Tailwind v3.
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
