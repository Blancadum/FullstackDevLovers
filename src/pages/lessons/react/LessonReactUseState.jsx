import { LessonLayout, CodeBlock, InfoBox } from '../../../components';
import { LessonNavigation } from '../../../components/LessonNavigation';
import { useBreadcrumb } from '../../../hooks/useBreadcrumb';
import { useLessonNavigation } from '../../../hooks/useLessonNavigation';

export function LessonReactUseState() {
  const breadcrumbs = useBreadcrumb();
  const nav = useLessonNavigation();

  return (
    <>
      <LessonLayout
        title="useState Hook"
        description="Gestiona estado en componentes funcionales con useState"
        breadcrumbs={breadcrumbs}
        seoTitle="useState Hook en React - Guía Completa"
        seoDescription="Aprende a gestionar el estado en componentes funcionales de React con el hook useState."
        seoKeywords="react, usestate, hooks, estado, componentes funcionales"
        url="https://fullstackdevlovers.com/frontend/react/hooks/usestate"
      >
        <p>
          En la lección anterior viste que el estado es la "memoria" interna de un componente. Ahora vamos
          a profundizar en la herramienta que lo hace posible: <code>useState</code>, el hook más usado en
          React y probablemente el primero que vas a escribir en cada componente con lógica propia.
        </p>

        <h2>¿Qué es un hook?</h2>
        <p>
          Un <strong>hook</strong> es una función especial de React (siempre empieza por <code>use</code>)
          que te permite "engancharte" a capacidades internas de React —como el estado o el ciclo de
          vida— desde un componente funcional, sin necesidad de escribir una clase. <code>useState</code>{' '}
          es el hook que te da acceso al estado.
        </p>

        <h2>Sintaxis básica</h2>
        <p>
          <code>useState</code> recibe el valor inicial del estado y devuelve un array con dos elementos:
          el valor actual y una función para actualizarlo. Es habitual usar destructuring de array para
          nombrarlos:
        </p>
        <CodeBlock
          language="jsx"
          code={`import { useState } from 'react';

function Contador() {
  const [contador, setContador] = useState(0);
  //      ↑ valor actual  ↑ función para actualizarlo   ↑ valor inicial

  return (
    <div>
      <p>Valor: {contador}</p>
      <button onClick={() => setContador(contador + 1)}>Sumar</button>
      <button onClick={() => setContador(contador - 1)}>Restar</button>
    </div>
  );
}`}
        />
        <p>
          Cada vez que llamas a <code>setContador</code>, React actualiza el valor internamente y vuelve a
          ejecutar el componente completo para reflejar el cambio en pantalla. Ese "volver a ejecutar" es
          lo que llamamos <strong>renderizado</strong>.
        </p>

        <InfoBox type="important" title="Las reglas de los hooks">
          Los hooks solo pueden llamarse en el nivel superior de un componente funcional (o de otro hook),
          nunca dentro de condicionales, bucles o funciones anidadas. React depende del orden en que se
          llaman los hooks para saber a qué estado corresponde cada uno, así que ese orden debe ser siempre
          el mismo en cada renderizado.
        </InfoBox>

        <h2>Actualizaciones basadas en el valor anterior</h2>
        <p>
          Las actualizaciones de estado en React pueden agruparse (batching) antes de aplicarse. Si el
          nuevo valor depende del valor anterior, es más seguro pasarle una función a{' '}
          <code>setContador</code> en lugar de calcular el valor directamente, para asegurarte de que
          siempre partes del estado más reciente.
        </p>
        <CodeBlock
          language="jsx"
          code={`// Puede dar problemas si se agrupan varias actualizaciones seguidas
setContador(contador + 1);

// Forma recomendada: usar el valor anterior que React te pasa
setContador((valorAnterior) => valorAnterior + 1);`}
        />

        <h2>Varios estados independientes</h2>
        <p>
          Un componente puede usar <code>useState</code> tantas veces como necesite. Es habitual (y
          recomendable) mantener cada pieza de estado independiente en su propia variable, en lugar de
          agruparlo todo en un único objeto.
        </p>
        <CodeBlock
          language="jsx"
          code={`function Formulario() {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [enviado, setEnviado] = useState(false);

  return (
    <form onSubmit={(e) => { e.preventDefault(); setEnviado(true); }}>
      <input value={nombre} onChange={(e) => setNombre(e.target.value)} placeholder="Nombre" />
      <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
      <button type="submit">Enviar</button>
      {enviado && <p>¡Formulario enviado, {nombre}!</p>}
    </form>
  );
}`}
        />

        <h2>Estado con objetos y arrays: no lo mutes</h2>
        <p>
          Cuando el estado es un objeto o un array, React necesita detectar que ha cambiado comparando la
          referencia anterior con la nueva. Si mutas el objeto o array existente (por ejemplo con{' '}
          <code>push</code> o asignando una propiedad directamente), la referencia sigue siendo la misma y
          React puede no darse cuenta del cambio. La solución es crear siempre una copia nueva.
        </p>
        <CodeBlock
          language="jsx"
          code={`function ListaTareas() {
  const [tareas, setTareas] = useState(['Repasar props', 'Practicar hooks']);

  const anadirTarea = (nuevaTarea) => {
    // Mal: mutar el array existente
    // tareas.push(nuevaTarea);

    // Bien: crear un array nuevo con el spread operator
    setTareas([...tareas, nuevaTarea]);
  };

  return (
    <ul>
      {tareas.map((tarea, indice) => (
        <li key={indice}>{tarea}</li>
      ))}
    </ul>
  );
}`}
        />

        <h2>Resumen</h2>
        <ul>
          <li><code>useState(valorInicial)</code> devuelve un array: <code>[valor, setValor]</code>.</li>
          <li>Llamar al setter provoca un nuevo renderizado del componente con el valor actualizado.</li>
          <li>Los hooks solo se llaman en el nivel superior del componente, nunca dentro de condicionales o bucles.</li>
          <li>Si el nuevo valor depende del anterior, usa la forma funcional: <code>setValor(prev =&gt; ...)</code>.</li>
          <li>El estado nunca se muta directamente: siempre se reemplaza por un valor (u objeto/array) nuevo.</li>
        </ul>
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
