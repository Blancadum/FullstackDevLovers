import { LessonLayout, CodeBlock, InfoBox } from '../../../components';
import { LessonNavigation } from '../../../components/LessonNavigation';
import { useBreadcrumb } from '../../../hooks/useBreadcrumb';
import { useLessonNavigation } from '../../../hooks/useLessonNavigation';

export function LessonReactIntroduccion() {
  const breadcrumbs = useBreadcrumb();
  const nav = useLessonNavigation();

  return (
    <>
      <LessonLayout
        title="Introducción a React"
        description="Qué es React, por qué usarlo y cómo funciona la biblioteca"
        breadcrumbs={breadcrumbs}
        seoTitle="Introducción a React - Guía Completa"
        seoDescription="Qué es React, por qué usarlo y cómo funciona esta biblioteca de interfaces de usuario."
        seoKeywords="react, introducción, biblioteca, javascript, ui"
        url="https://fullstackdevlovers.com/frontend/react/fundamentos/introduccion"
      >
        <p>
          Arrancas la parte de frontend con React: la biblioteca de interfaces más usada del mercado y la
          que más vas a encontrarte en ofertas de trabajo junto a un backend en Java o Spring Boot. Si
          vienes de backend, piensa en React como una <strong>librería</strong> (no un framework completo
          como Spring), centrada en una sola responsabilidad: construir interfaces de usuario a partir de
          componentes reutilizables.
        </p>

        <h2>¿Qué es React?</h2>
        <p>
          React es una biblioteca de JavaScript mantenida por Meta (antes Facebook) para construir
          interfaces de usuario. Su idea central es que la interfaz se describe como una combinación de{' '}
          <strong>componentes</strong>: piezas independientes, reutilizables y con su propia lógica, que se
          combinan entre sí para formar pantallas completas, igual que combinarías clases pequeñas y bien
          definidas en un proyecto Java en lugar de una única clase gigante.
        </p>
        <p>
          A diferencia de Angular, React no incluye de fábrica routing, cliente HTTP o inyección de
          dependencias: se centra solo en la capa de vista, y el resto del ecosistema (rutas, llamadas a
          APIs, gestión de estado global) se añade con librerías adicionales según lo que necesite el
          proyecto.
        </p>

        <h2>Programación declarativa vs. imperativa</h2>
        <p>
          Con JavaScript "puro" (o con jQuery en su día) sueles describir <strong>cómo</strong> cambiar la
          interfaz paso a paso: buscar un elemento del DOM, cambiar su texto, añadir una clase, etc. Eso es
          programación <strong>imperativa</strong>. React invierte el enfoque: tú describes{' '}
          <strong>qué</strong> aspecto debe tener la interfaz para un estado de datos determinado, y React
          se encarga de calcular los cambios mínimos necesarios en el DOM. Eso es programación{' '}
          <strong>declarativa</strong>, y es la razón principal por la que el código de React tiende a ser
          más predecible y fácil de mantener.
        </p>
        <CodeBlock
          language="jsx"
          code={`// Enfoque imperativo (manipulando el DOM a mano)
const boton = document.getElementById('like-btn');
let contador = 0;
boton.addEventListener('click', () => {
  contador++;
  document.getElementById('contador').textContent = contador;
});

// Enfoque declarativo (React): describes el resultado, no los pasos
function BotonLike() {
  const [contador, setContador] = useState(0);
  return (
    <button onClick={() => setContador(contador + 1)}>
      Me gusta ({contador})
    </button>
  );
}`}
        />

        <InfoBox type="info" title="El Virtual DOM">
          React mantiene una representación ligera del DOM en memoria (el "Virtual DOM"). Cuando cambian
          los datos de un componente, React compara la versión nueva con la anterior y actualiza en el
          DOM real solo las partes que han cambiado, en lugar de volver a pintar toda la pantalla. Por eso
          las actualizaciones suelen ser rápidas incluso en interfaces complejas.
        </InfoBox>

        <h2>¿Por qué usar React?</h2>
        <ul>
          <li>
            <strong>Componentes reutilizables:</strong> defines un componente una vez y lo usas tantas
            veces como necesites, con datos distintos cada vez.
          </li>
          <li>
            <strong>Ecosistema enorme:</strong> librerías de routing, gestión de estado, formularios,
            peticiones HTTP, etc., para cubrir cualquier necesidad del proyecto.
          </li>
          <li>
            <strong>Demanda laboral alta:</strong> es una de las tecnologías frontend más solicitadas junto
            a un backend en Java, especialmente en perfiles full-stack.
          </li>
          <li>
            <strong>Comunidad y documentación:</strong> años de madurez, muchísimos recursos y una curva de
            aprendizaje progresiva.
          </li>
        </ul>

        <h2>Crear tu primer proyecto con Vite</h2>
        <p>
          Igual que Maven o Gradle gestionan la construcción de un proyecto Java, en el mundo frontend
          usamos herramientas de build. Hoy en día la más recomendada para empezar con React es{' '}
          <strong>Vite</strong>, por su rapidez y su configuración mínima. Necesitas tener Node.js instalado
          en tu equipo.
        </p>
        <CodeBlock
          language="bash"
          code={`# Crear un proyecto React con Vite
npm create vite@latest mi-app -- --template react

# Entrar en la carpeta del proyecto
cd mi-app

# Instalar dependencias
npm install

# Arrancar el servidor de desarrollo
npm run dev`}
        />
        <p>
          Por defecto, <code>npm run dev</code> levanta la aplicación en{' '}
          <code>http://localhost:5173</code> y recarga el navegador automáticamente cada vez que guardas un
          cambio.
        </p>

        <h2>Estructura básica de un proyecto React</h2>
        <CodeBlock
          language="text"
          code={`mi-app/
├── src/
│   ├── App.jsx          # Componente raíz de la aplicación
│   ├── main.jsx         # Punto de entrada, monta <App /> en el DOM
│   └── index.css        # Estilos globales
├── index.html            # HTML base donde React inyecta la app
├── package.json           # Dependencias y scripts npm
└── vite.config.js          # Configuración de Vite`}
        />
        <p>
          El fichero <code>main.jsx</code> es el punto de arranque: importa el componente{' '}
          <code>App</code> y lo "monta" dentro del <code>&lt;div id="root"&gt;</code> del{' '}
          <code>index.html</code>. A partir de ahí, todo lo que ves en pantalla es el resultado de renderizar
          ese árbol de componentes.
        </p>

        <h2>Resumen</h2>
        <ul>
          <li>React es una biblioteca (no un framework) centrada en construir interfaces con componentes.</li>
          <li>Sigue un enfoque declarativo: describes el resultado, React se encarga de actualizar el DOM.</li>
          <li>Usa un Virtual DOM para calcular y aplicar solo los cambios necesarios en la pantalla.</li>
          <li>Vite es la herramienta recomendada hoy en día para crear proyectos React rápidamente.</li>
          <li><code>npm run dev</code> levanta un servidor de desarrollo con recarga automática.</li>
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
