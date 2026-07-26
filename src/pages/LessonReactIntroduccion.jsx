import React from 'react';
import { Lesson, CodeBlock, HighlightBox, LessonSection } from '../components';

export function LessonReactIntroduccion() {
  return (
    <Lesson
      title="Introducción a React"
      description="Aprende qué es React, por qué usarlo y cómo funciona la biblioteca"
      previousLesson={null}
      nextLesson={{
        label: 'JSX y Componentes',
        link: '/react/fundamentos/jsx-componentes'
      }}
    >
      <LessonSection>
        <h2>¿Qué es React?</h2>
        <p>
          <strong>React</strong> es una biblioteca de JavaScript para construir interfaces de usuario usando componentes reutilizables. Desarrollada por Facebook, se ha convertido en el estándar de la industria para desarrollo frontend moderno.
        </p>

        <HighlightBox type="info">
          <strong>Dato clave:</strong> React no es un framework completo como Angular, sino una biblioteca enfocada únicamente en la capa de presentación (View).
        </HighlightBox>
      </LessonSection>

      <LessonSection>
        <h2>¿Por qué React?</h2>
        <ul>
          <li><strong>Componentes reutilizables:</strong> Construye UIs como bloques Lego</li>
          <li><strong>Virtual DOM:</strong> Actualizaciones eficientes y rápidas</li>
          <li><strong>Fácil de aprender:</strong> Si sabes JavaScript, puedes aprender React</li>
          <li><strong>Gran comunidad:</strong> Miles de librerías y recursos</li>
          <li><strong>Escalable:</strong> Desde apps pequeñas hasta grandes aplicaciones</li>
        </ul>
      </LessonSection>

      <LessonSection>
        <h2>Conceptos clave</h2>

        <h3>Componentes</h3>
        <p>
          Un componente es una función que retorna JSX (HTML-like syntax). Son reutilizables y encapsulan lógica y presentación.
        </p>
        <CodeBlock language="jsx">
{`function Welcome({ name }) {
  return <h1>¡Hola, {name}!</h1>;
}`}
        </CodeBlock>

        <h3>Props (Propiedades)</h3>
        <p>
          Las props son datos que pasas de un componente padre a un componente hijo. Son de solo lectura.
        </p>
        <CodeBlock language="jsx">
{`<Welcome name="Juan" />
<Welcome name="María" />`}
        </CodeBlock>

        <h3>State (Estado)</h3>
        <p>
          El estado es información que puede cambiar dentro de un componente. Con hooks, usamos useState.
        </p>
        <CodeBlock language="jsx">
{`import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Contador: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Incrementar
      </button>
    </div>
  );
}`}
        </CodeBlock>
      </LessonSection>

      <LessonSection>
        <h2>Ventajas de React</h2>
        <HighlightBox type="success">
          <ul>
            <li>Rendering eficiente con Virtual DOM</li>
            <li>Componentes reutilizables reducen código</li>
            <li>Fácil debugging con React DevTools</li>
            <li>Comunidad grande con muchos recursos</li>
            <li>SEO-friendly con Next.js o técnicas SSR</li>
          </ul>
        </HighlightBox>
      </LessonSection>

      <LessonSection>
        <h2>Próximos pasos</h2>
        <p>
          Ahora que sabes qué es React, aprenderás sobre JSX y cómo crear componentes. ¡Vamos!
        </p>
      </LessonSection>
    </Lesson>
  );
}
