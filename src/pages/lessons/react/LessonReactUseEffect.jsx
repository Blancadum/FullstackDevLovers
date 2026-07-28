import { LessonLayout, CodeBlock, InfoBox } from '../../../components';
import { LessonNavigation } from '../../../components/LessonNavigation';
import { useBreadcrumb } from '../../../hooks/useBreadcrumb';
import { useLessonNavigation } from '../../../hooks/useLessonNavigation';

export function LessonReactUseEffect() {
  const breadcrumbs = useBreadcrumb();
  const nav = useLessonNavigation();

  return (
    <>
      <LessonLayout
        title="useEffect Hook"
        description="Ejecuta efectos secundarios y ciclos de vida con useEffect"
        breadcrumbs={breadcrumbs}
        seoTitle="useEffect Hook en React - Guía Completa"
        seoDescription="Aprende a ejecutar efectos secundarios y a manejar el ciclo de vida de componentes con useEffect."
        seoKeywords="react, useeffect, hooks, efectos secundarios, ciclo de vida"
        url="https://fullstackdevlovers.com/frontend/react/hooks/useeffect"
      >
        <p>
          Ya sabes gestionar estado con <code>useState</code>. Pero hay tareas que no encajan en el simple
          "renderizar la interfaz a partir de unos datos": llamar a una API, suscribirte a un evento del
          navegador, iniciar un temporizador... Todo eso son <strong>efectos secundarios</strong>, y el hook{' '}
          <code>useEffect</code> es la herramienta de React para manejarlos.
        </p>

        <h2>¿Qué es un efecto secundario?</h2>
        <p>
          Un efecto secundario es cualquier operación que interactúa con algo "fuera" del propio
          renderizado del componente: peticiones de red, temporizadores, suscripciones a eventos,
          manipulación manual del DOM, escritura en <code>localStorage</code>, etc. React necesita un lugar
          controlado para ejecutar este tipo de código, separado de la lógica de renderizado.
        </p>

        <h2>Sintaxis básica</h2>
        <p>
          <code>useEffect</code> recibe una función (el efecto) y, opcionalmente, un array de dependencias
          que controla cuándo se vuelve a ejecutar ese efecto.
        </p>
        <CodeBlock
          language="jsx"
          code={`import { useEffect, useState } from 'react';

function TituloDinamico() {
  const [contador, setContador] = useState(0);

  useEffect(() => {
    document.title = \`Has hecho clic \${contador} veces\`;
  }, [contador]); // se ejecuta cada vez que "contador" cambia

  return <button onClick={() => setContador(contador + 1)}>Sumar</button>;
}`}
        />

        <h2>El array de dependencias, con detalle</h2>
        <p>El segundo argumento de <code>useEffect</code> determina cuándo se ejecuta el efecto:</p>
        <ul>
          <li>
            <strong>Sin array:</strong> el efecto se ejecuta después de <em>cada</em> renderizado. Rara vez
            es lo que quieres.
          </li>
          <li>
            <strong>Array vacío <code>[]</code>:</strong> el efecto se ejecuta una sola vez, justo después
            del primer renderizado (equivalente a un "montaje" del componente).
          </li>
          <li>
            <strong>Array con dependencias <code>[valor1, valor2]</code>:</strong> el efecto se ejecuta en
            el primer renderizado y cada vez que alguno de esos valores cambia entre renderizados.
          </li>
        </ul>
        <CodeBlock
          language="jsx"
          code={`useEffect(() => {
  console.log('Se ejecuta en cada renderizado');
});

useEffect(() => {
  console.log('Se ejecuta solo una vez, al montar el componente');
}, []);

useEffect(() => {
  console.log('Se ejecuta al montar y cada vez que "usuarioId" cambia');
}, [usuarioId]);`}
        />

        <h2>Petición a una API al montar el componente</h2>
        <p>
          El caso de uso más habitual de <code>useEffect</code> es cargar datos de una API en cuanto el
          componente aparece en pantalla.
        </p>
        <CodeBlock
          language="jsx"
          code={`import { useEffect, useState } from 'react';

function PerfilUsuario({ usuarioId }) {
  const [usuario, setUsuario] = useState(null);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    setCargando(true);
    fetch(\`https://api.ejemplo.com/usuarios/\${usuarioId}\`)
      .then((respuesta) => respuesta.json())
      .then((datos) => {
        setUsuario(datos);
        setCargando(false);
      });
  }, [usuarioId]); // se vuelve a pedir si cambia el usuarioId

  if (cargando) return <p>Cargando...</p>;
  return <h2>{usuario.nombre}</h2>;
}`}
        />

        <h2>Limpiar un efecto: la función de cleanup</h2>
        <p>
          Algunos efectos (temporizadores, suscripciones a eventos, conexiones abiertas) deben "deshacerse"
          cuando el componente desaparece de pantalla o antes de volver a ejecutarse, para evitar fugas de
          memoria o comportamientos inesperados. Para eso, la función del efecto puede devolver otra
          función de limpieza.
        </p>
        <CodeBlock
          language="jsx"
          code={`import { useEffect, useState } from 'react';

function Reloj() {
  const [hora, setHora] = useState(new Date());

  useEffect(() => {
    const intervalo = setInterval(() => {
      setHora(new Date());
    }, 1000);

    // Función de limpieza: se ejecuta al desmontar el componente
    // o justo antes de volver a ejecutar el efecto
    return () => clearInterval(intervalo);
  }, []);

  return <p>Hora actual: {hora.toLocaleTimeString()}</p>;
}`}
        />

        <InfoBox type="warning" title="Cuidado con las dependencias">
          Si tu efecto usa una variable del componente (una prop o un estado) y no la incluyes en el array
          de dependencias, ese efecto puede quedarse trabajando con un valor "obsoleto". Y si incluyes una
          dependencia que cambia en cada renderizado sin control, puedes provocar un bucle infinito de
          renderizados. La regla general es: incluye en el array todo valor externo que uses dentro del
          efecto.
        </InfoBox>

        <h2>Resumen</h2>
        <ul>
          <li><code>useEffect</code> ejecuta código para efectos secundarios: peticiones, timers, suscripciones...</li>
          <li>El array de dependencias controla cuándo se vuelve a ejecutar el efecto.</li>
          <li>Un array vacío <code>[]</code> hace que el efecto se ejecute solo una vez, al montar el componente.</li>
          <li>La función devuelta dentro del efecto es la función de limpieza (cleanup).</li>
          <li>Toda variable externa usada dentro del efecto debe declararse en el array de dependencias.</li>
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
