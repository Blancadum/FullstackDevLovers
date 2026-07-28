import { LessonLayout, CodeBlock, InfoBox } from '../../../components';
import { LessonNavigation } from '../../../components/LessonNavigation';
import { useBreadcrumb } from '../../../hooks/useBreadcrumb';
import { useLessonNavigation } from '../../../hooks/useLessonNavigation';

export function LessonReactPropsEstado() {
  const breadcrumbs = useBreadcrumb();
  const nav = useLessonNavigation();

  return (
    <>
      <LessonLayout
        title="Props y Estado"
        description="Cómo pasar datos entre componentes y gestionar el estado interno"
        breadcrumbs={breadcrumbs}
        seoTitle="Props y Estado en React - Guía Completa"
        seoDescription="Aprende a pasar datos entre componentes con props y a gestionar el estado interno en React."
        seoKeywords="react, props, estado, state, componentes"
        url="https://fullstackdevlovers.com/frontend/react/fundamentos/props-estado"
      >
        <p>
          Ya sabes crear componentes y componerlos entre sí. Ahora necesitas dos mecanismos para que esos
          componentes dejen de ser estáticos: las <strong>props</strong>, para recibir datos desde fuera, y
          el <strong>estado</strong>, para que un componente gestione sus propios datos internos y
          "recuerde" cosas entre renderizados.
        </p>

        <h2>¿Qué son las props?</h2>
        <p>
          Las props (abreviatura de <em>properties</em>) son la forma en que un componente recibe datos
          desde el componente que lo usa. Son conceptualmente muy parecidas a los parámetros de un método
          en Java: el componente que las recibe no puede modificarlas, solo leerlas.
        </p>
        <CodeBlock
          language="jsx"
          code={`function Producto(props) {
  return (
    <div className="producto">
      <h3>{props.nombre}</h3>
      <p>{props.precio} €</p>
    </div>
  );
}

// Uso: cada llamada pasa props distintas
function App() {
  return (
    <>
      <Producto nombre="Teclado mecánico" precio={49.99} />
      <Producto nombre="Ratón inalámbrico" precio={19.99} />
    </>
  );
}`}
        />

        <h2>Desestructurar props</h2>
        <p>
          En vez de acceder a <code>props.nombre</code>, <code>props.precio</code> repetidamente, es una
          práctica muy habitual desestructurar el objeto <code>props</code> directamente en los parámetros
          de la función, ganando en legibilidad.
        </p>
        <CodeBlock
          language="jsx"
          code={`function Producto({ nombre, precio }) {
  return (
    <div className="producto">
      <h3>{nombre}</h3>
      <p>{precio} €</p>
    </div>
  );
}`}
        />

        <h2>La prop especial <code>children</code></h2>
        <p>
          Cuando un componente se usa con contenido anidado entre su etiqueta de apertura y cierre, ese
          contenido llega automáticamente a través de una prop especial llamada <code>children</code>. Es
          muy útil para crear componentes "envoltorio" (tarjetas, modales, layouts...).
        </p>
        <CodeBlock
          language="jsx"
          code={`function Tarjeta({ children }) {
  return <div className="tarjeta">{children}</div>;
}

function App() {
  return (
    <Tarjeta>
      <h3>Título dentro de la tarjeta</h3>
      <p>Este contenido llega como children</p>
    </Tarjeta>
  );
}`}
        />

        <InfoBox type="warning" title="Las props son de solo lectura">
          Un componente nunca debe modificar las props que recibe. React sigue un flujo de datos{' '}
          <strong>unidireccional</strong>: los datos bajan de componentes padres a hijos a través de props,
          nunca al revés. Si necesitas que una acción del hijo afecte al padre, se hace pasando una función
          como prop (por ejemplo <code>onClick</code>), que el hijo invoca y el padre define.
        </InfoBox>

        <h2>¿Y si el componente necesita "recordar" algo?</h2>
        <p>
          Las props son perfectas para recibir datos desde fuera, pero no sirven cuando un componente
          necesita guardar información que cambia con el tiempo por su propia iniciativa: el texto de un
          formulario mientras el usuario escribe, si un desplegable está abierto, el número de clics en un
          botón... Para eso existe el <strong>estado</strong>.
        </p>
        <p>
          El estado es la memoria interna y privada de un componente. A diferencia de las props, el propio
          componente puede modificar su estado, y cada vez que lo hace, React vuelve a ejecutar (
          <em>renderizar</em>) ese componente para reflejar el cambio en pantalla.
        </p>
        <CodeBlock
          language="jsx"
          code={`import { useState } from 'react';

function Contador() {
  // "contador" es el estado; "setContador" es la función para modificarlo
  const [contador, setContador] = useState(0);

  return (
    <button onClick={() => setContador(contador + 1)}>
      Has hecho clic {contador} veces
    </button>
  );
}`}
        />
        <p>
          No te preocupes si la sintaxis de <code>useState</code> todavía no te resulta natural: en la
          próxima lección vamos a diseccionarla en detalle, con ejemplos progresivos.
        </p>

        <h2>Props vs. estado, en una tabla mental</h2>
        <ul>
          <li><strong>Props:</strong> datos que llegan desde fuera, de solo lectura, definidos por el componente padre.</li>
          <li><strong>Estado:</strong> datos internos y privados del componente, mutables mediante su propio setter.</li>
          <li><strong>Ambos</strong> provocan un nuevo renderizado del componente cuando cambian.</li>
        </ul>

        <h2>Resumen</h2>
        <ul>
          <li>Las props permiten pasar datos de un componente padre a un componente hijo.</li>
          <li>Las props son de solo lectura: el componente que las recibe no debe modificarlas.</li>
          <li><code>children</code> es una prop especial con el contenido anidado entre las etiquetas del componente.</li>
          <li>El estado es la memoria interna de un componente, y solo él puede modificarla.</li>
          <li>Cambiar el estado provoca que React vuelva a renderizar el componente afectado.</li>
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
