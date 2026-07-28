import { LessonLayout, CodeBlock, InfoBox } from '../../../components';
import { LessonNavigation } from '../../../components/LessonNavigation';
import { useBreadcrumb } from '../../../hooks/useBreadcrumb';
import { useLessonNavigation } from '../../../hooks/useLessonNavigation';

export function LessonReactHooksPersonalizados() {
  const breadcrumbs = useBreadcrumb();
  const nav = useLessonNavigation();

  return (
    <>
      <LessonLayout
        title="Hooks personalizados"
        description="Crea tus propios hooks reutilizables"
        breadcrumbs={breadcrumbs}
        seoTitle="Hooks Personalizados en React - Guía Completa"
        seoDescription="Aprende a crear tus propios hooks personalizados en React para reutilizar lógica entre componentes."
        seoKeywords="react, hooks personalizados, custom hooks, reutilización, javascript"
        url="https://fullstackdevlovers.com/frontend/react/hooks/custom"
      >
        <p>
          Ya conoces <code>useState</code> para gestionar estado y <code>useEffect</code> para ejecutar
          efectos secundarios. Es habitual que varios componentes necesiten la misma combinación de estado
          y efectos (por ejemplo, cargar datos de una API). En lugar de repetir esa lógica en cada
          componente, React te permite extraerla a tu propio hook: un <strong>hook personalizado</strong>.
        </p>

        <h2>¿Qué es un hook personalizado?</h2>
        <p>
          Un hook personalizado es simplemente una función JavaScript normal, cuyo nombre empieza por{' '}
          <code>use</code> (por convención, y porque así React puede aplicarle las reglas de los hooks) y
          que puede usar otros hooks en su interior, como <code>useState</code> o <code>useEffect</code>.
          No es magia ni una API especial: es una forma de reutilizar lógica con estado entre distintos
          componentes, igual que extraerías un método común a una clase de utilidades en Java.
        </p>

        <InfoBox type="important" title="Las reglas de los hooks también aplican aquí">
          Un hook personalizado debe respetar las mismas reglas que ya conoces: solo se llama en el nivel
          superior de un componente (o de otro hook), nunca dentro de condicionales o bucles. Además, solo
          puede usarse dentro de componentes funcionales o de otros hooks, no en funciones JavaScript
          cualquiera.
        </InfoBox>

        <h2>Ejemplo 1: extraer la lógica de un contador</h2>
        <p>
          Empecemos con algo sencillo: un contador con botones de sumar y restar. Si varios componentes
          necesitan este mismo comportamiento, tiene sentido extraerlo a un hook propio.
        </p>
        <CodeBlock
          language="jsx"
          code={`// useCounter.js
import { useState } from 'react';

export function useCounter(valorInicial = 0) {
  const [contador, setContador] = useState(valorInicial);

  const incrementar = () => setContador((valor) => valor + 1);
  const decrementar = () => setContador((valor) => valor - 1);
  const reiniciar = () => setContador(valorInicial);

  return { contador, incrementar, decrementar, reiniciar };
}`}
        />
        <p>Y así se usa desde cualquier componente, con toda la lógica ya resuelta:</p>
        <CodeBlock
          language="jsx"
          code={`import { useCounter } from './useCounter';

function Contador() {
  const { contador, incrementar, decrementar, reiniciar } = useCounter(0);

  return (
    <div>
      <p>Valor: {contador}</p>
      <button onClick={incrementar}>+</button>
      <button onClick={decrementar}>-</button>
      <button onClick={reiniciar}>Reiniciar</button>
    </div>
  );
}`}
        />

        <h2>Ejemplo 2: un hook para peticiones a una API</h2>
        <p>
          Un caso más realista: si en la lección anterior tuvieras que repetir el mismo patrón de{' '}
          <code>useState</code> + <code>useEffect</code> para cargar datos en varios componentes, puedes
          extraerlo a un hook <code>useFetch</code> que devuelva los datos, el estado de carga y un posible
          error.
        </p>
        <CodeBlock
          language="jsx"
          code={`// useFetch.js
import { useState, useEffect } from 'react';

export function useFetch(url) {
  const [datos, setDatos] = useState(null);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setCargando(true);
    setError(null);

    fetch(url)
      .then((respuesta) => {
        if (!respuesta.ok) throw new Error('Error al obtener los datos');
        return respuesta.json();
      })
      .then((json) => setDatos(json))
      .catch((err) => setError(err.message))
      .finally(() => setCargando(false));
  }, [url]);

  return { datos, cargando, error };
}`}
        />
        <p>El componente que lo usa queda mucho más limpio, centrado solo en cómo mostrar la información:</p>
        <CodeBlock
          language="jsx"
          code={`import { useFetch } from './useFetch';

function ListaUsuarios() {
  const { datos, cargando, error } = useFetch('https://api.ejemplo.com/usuarios');

  if (cargando) return <p>Cargando usuarios...</p>;
  if (error) return <p>Ha ocurrido un error: {error}</p>;

  return (
    <ul>
      {datos.map((usuario) => (
        <li key={usuario.id}>{usuario.nombre}</li>
      ))}
    </ul>
  );
}`}
        />

        <h2>¿Cuándo merece la pena crear un hook personalizado?</h2>
        <ul>
          <li>Cuando repites la misma combinación de <code>useState</code> y <code>useEffect</code> en dos o más componentes.</li>
          <li>Cuando quieres separar la lógica de datos de la lógica de presentación, para que el componente se centre solo en renderizar.</li>
          <li>Cuando la lógica es lo bastante compleja como para beneficiarse de tener su propio nombre descriptivo (<code>useFetch</code>, <code>useCounter</code>, <code>useLocalStorage</code>...).</li>
        </ul>

        <h2>Resumen</h2>
        <ul>
          <li>Un hook personalizado es una función normal cuyo nombre empieza por <code>use</code> y que puede usar otros hooks dentro.</li>
          <li>Sirve para extraer y reutilizar lógica con estado entre distintos componentes.</li>
          <li>Debe respetar las mismas reglas que cualquier hook: solo en el nivel superior, solo en componentes o en otros hooks.</li>
          <li>Un buen hook personalizado devuelve exactamente lo que el componente necesita usar (valores y funciones), ocultando los detalles internos.</li>
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
