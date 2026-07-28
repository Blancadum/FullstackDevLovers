import { LessonLayout, CodeBlock, InfoBox } from '../../../components';
import { LessonNavigation } from '../../../components/LessonNavigation';
import { useBreadcrumb } from '../../../hooks/useBreadcrumb';
import { useLessonNavigation } from '../../../hooks/useLessonNavigation';

export function LessonReactJSXComponentes() {
  const breadcrumbs = useBreadcrumb();
  const nav = useLessonNavigation();

  return (
    <>
      <LessonLayout
        title="JSX y Componentes"
        description="Aprende JSX, componentes funcionales y cómo organizar tu código"
        breadcrumbs={breadcrumbs}
        seoTitle="JSX y Componentes en React - Guía Completa"
        seoDescription="Aprende JSX, componentes funcionales en React y cómo organizar tu código de forma modular."
        seoKeywords="react, jsx, componentes, componentes funcionales, javascript"
        url="https://fullstackdevlovers.com/frontend/react/fundamentos/jsx-componentes"
      >
        <p>
          Ya sabes qué es React y cómo se crea un proyecto. Ahora toca entender las dos piezas con las que
          vas a trabajar todo el tiempo: <strong>JSX</strong>, la sintaxis con la que se describe la
          interfaz, y los <strong>componentes</strong>, la unidad básica con la que se construye cualquier
          aplicación React.
        </p>

        <h2>¿Qué es JSX?</h2>
        <p>
          JSX (JavaScript XML) es una extensión de sintaxis que permite escribir código parecido a HTML
          directamente dentro de JavaScript. No es HTML de verdad ni una plantilla independiente: es{' '}
          <strong>azúcar sintáctico</strong> que un compilador (Babel, integrado en Vite) transforma en
          llamadas normales a funciones JavaScript.
        </p>
        <CodeBlock
          language="jsx"
          code={`// Esto que escribes...
const elemento = <h1 className="titulo">Hola, mundo</h1>;

// ...se transforma por debajo en algo equivalente a esto:
const elemento = React.createElement('h1', { className: 'titulo' }, 'Hola, mundo');`}
        />
        <InfoBox type="important" title="JSX es JavaScript, no una plantilla">
          Como JSX se compila a llamadas de función, dentro de él puedes usar cualquier expresión
          JavaScript entre llaves <code>{'{ }'}</code>: variables, operadores, llamadas a funciones o
          expresiones condicionales. No es un lenguaje de plantillas con su propia sintaxis limitada, como
          podrías haber usado en Thymeleaf o JSP.
        </InfoBox>

        <h2>Reglas básicas de JSX</h2>
        <ul>
          <li>
            <strong>Un único elemento raíz:</strong> un componente debe devolver un solo elemento (puede
            contener otros dentro).
          </li>
          <li>
            <strong>Cerrar todas las etiquetas:</strong> incluidas las que en HTML se dejan abiertas, como{' '}
            <code>&lt;img /&gt;</code> o <code>&lt;br /&gt;</code>.
          </li>
          <li>
            <strong>Atributos en camelCase:</strong> <code>onclick</code> se escribe <code>onClick</code>,{' '}
            <code>tabindex</code> se escribe <code>tabIndex</code>.
          </li>
          <li>
            <strong><code>className</code> en lugar de <code>class</code>:</strong> porque{' '}
            <code>class</code> es una palabra reservada en JavaScript.
          </li>
          <li>
            <strong>Expresiones entre llaves:</strong> <code>{'{variable}'}</code> inserta el valor de una
            variable o expresión JavaScript dentro del JSX.
          </li>
        </ul>
        <CodeBlock
          language="jsx"
          code={`function Tarjeta() {
  const nombre = 'Ana';
  const activo = true;

  return (
    <div className="tarjeta">
      <h2>Hola, {nombre}</h2>
      <img src="/avatar.png" alt="Avatar" />
      <p>Estado: {activo ? 'Conectado' : 'Desconectado'}</p>
    </div>
  );
}`}
        />

        <h2>Fragmentos: varios elementos sin un contenedor extra</h2>
        <p>
          Como un componente solo puede devolver un elemento raíz, a veces te ves obligado a envolver todo
          en un <code>&lt;div&gt;</code> innecesario. React ofrece los <strong>fragmentos</strong> (
          <code>&lt;&gt;...&lt;/&gt;</code>) para agrupar varios elementos sin añadir un nodo extra al DOM.
        </p>
        <CodeBlock
          language="jsx"
          code={`function Lista() {
  return (
    <>
      <h2>Tareas pendientes</h2>
      <ul>
        <li>Repasar props</li>
        <li>Practicar useState</li>
      </ul>
    </>
  );
}`}
        />

        <h2>Componentes funcionales</h2>
        <p>
          Un componente de React es, en su forma más simple, una función JavaScript que devuelve JSX. Por
          convención, el nombre del componente se escribe en <strong>PascalCase</strong> (empieza en
          mayúscula), porque React distingue las etiquetas HTML normales (minúscula, como{' '}
          <code>&lt;div&gt;</code>) de los componentes propios (mayúscula, como{' '}
          <code>&lt;Tarjeta /&gt;</code>).
        </p>
        <CodeBlock
          language="jsx"
          code={`function Saludo() {
  return <h1>Hola desde mi primer componente</h1>;
}

export default Saludo;`}
        />

        <h2>Componer componentes</h2>
        <p>
          La potencia de React aparece cuando combinas componentes pequeños dentro de otros más grandes,
          igual que compondrías objetos pequeños dentro de una clase Java en lugar de escribir una clase
          monolítica. A esto se le llama <strong>composición</strong>.
        </p>
        <CodeBlock
          language="jsx"
          code={`function Cabecera() {
  return <header><h1>Mi Tienda</h1></header>;
}

function Producto() {
  return <p>Teclado mecánico — 49,99 €</p>;
}

function App() {
  return (
    <>
      <Cabecera />
      <main>
        <Producto />
        <Producto />
      </main>
    </>
  );
}`}
        />

        <h2>Organizar componentes en ficheros</h2>
        <p>
          En un proyecto real cada componente suele vivir en su propio fichero, para mantener el código
          organizado y fácil de encontrar (como harías con una clase por fichero en Java).
        </p>
        <CodeBlock
          language="jsx"
          code={`// Producto.jsx
export function Producto({ nombre }) {
  return <p>{nombre}</p>;
}

// App.jsx
import { Producto } from './Producto';

function App() {
  return <Producto nombre="Teclado mecánico" />;
}

export default App;`}
        />

        <h2>Resumen</h2>
        <ul>
          <li>JSX es sintaxis que se compila a llamadas JavaScript; no es HTML ni un motor de plantillas.</li>
          <li>Un componente debe devolver un único elemento raíz (o un fragmento <code>&lt;&gt;&lt;/&gt;</code>).</li>
          <li>Los atributos se escriben en camelCase y <code>class</code> pasa a ser <code>className</code>.</li>
          <li>Un componente funcional es simplemente una función que devuelve JSX, con nombre en PascalCase.</li>
          <li>Los componentes se componen entre sí para construir interfaces complejas a partir de piezas pequeñas.</li>
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
