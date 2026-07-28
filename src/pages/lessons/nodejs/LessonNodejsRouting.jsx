import { LessonLayout, LessonSection, CodeBlock, InfoBox } from '../../../components';
import { LessonNavigation } from '../../../components/LessonNavigation';
import { useBreadcrumb } from '../../../hooks/useBreadcrumb';
import { useLessonNavigation } from '../../../hooks/useLessonNavigation';

export function LessonNodejsRouting() {
  const breadcrumbs = useBreadcrumb();
  const nav = useLessonNavigation();

  return (
    <>
      <LessonLayout
        title="Routing y middleware"
        description="Cómo organizar rutas y usar middleware en aplicaciones Express."
        breadcrumbs={breadcrumbs}
        seoTitle="Routing y Middleware en Express | Fullstack Dev Lovers"
        seoDescription="Aprende a definir rutas y crear middleware en Express para organizar la lógica de tus aplicaciones Node.js."
        seoKeywords="node.js, express, routing, middleware, rutas"
        url="https://fullstackdevlovers.com/backend/nodejs/routing"
      >
        <p>
          Ya sabes definir rutas sueltas con <code>app.get()</code> y <code>app.post()</code>.
          El siguiente paso es entender el concepto que hace de Express algo más que un
          conjunto de rutas: el <strong>middleware</strong>. Vas a aprender qué es, cómo
          escribir el tuyo propio y cómo organizar las rutas en varios ficheros con{' '}
          <code>express.Router()</code>, algo imprescindible en cuanto una API crece.
        </p>

        <LessonSection title="Qué es un middleware" level={1}>
          <p>
            Un <strong>middleware</strong> es una función que se ejecuta{' '}
            <strong>entre</strong> que llega la petición y se envía la respuesta. Tiene
            acceso a <code>req</code>, <code>res</code> y a una tercera función llamada{' '}
            <code>next</code>, que sirve para pasar el control al siguiente middleware o
            ruta de la cadena.
          </p>
          <CodeBlock
            language="javascript"
            code={`function logger(req, res, next) {
  console.log(\`\${req.method} \${req.url}\`);
  next(); // sin esto, la petición se queda "colgada"
}

app.use(logger);`}
          />
          <InfoBox type="warning">
            Si un middleware no llama a <code>next()</code> ni envía una respuesta (
            <code>res.send()</code>, <code>res.json()</code>, <code>res.end()</code>...), la
            petición se queda esperando para siempre y el cliente acaba con un timeout.
          </InfoBox>
          <p>
            De hecho, ya usaste un middleware en la lección anterior sin llamarlo así:{' '}
            <code>express.json()</code> es un middleware que parsea el body y lo deja
            disponible en <code>req.body</code> antes de que tu ruta se ejecute.
          </p>
        </LessonSection>

        <LessonSection title="Middleware global vs middleware por ruta" level={1}>
          <p>
            Con <code>app.use()</code> el middleware se ejecuta para{' '}
            <strong>todas</strong> las peticiones. Si quieres que solo se ejecute en una
            ruta concreta, se pasa como argumento extra antes del controlador:
          </p>
          <CodeBlock
            language="javascript"
            code={`function requiereAutenticacion(req, res, next) {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).json({ error: 'No autenticado' });
  }
  next();
}

// Solo esta ruta pasa por el middleware de autenticación
app.get('/perfil', requiereAutenticacion, (req, res) => {
  res.json({ nombre: 'Ana' });
});`}
          />
          <p>
            Este patrón —proteger una ruta con un middleware específico— es exactamente lo
            que usarás más adelante para verificar tokens JWT.
          </p>
        </LessonSection>

        <LessonSection title="Organizar rutas con express.Router()" level={1}>
          <p>
            Meter todas las rutas en un único <code>app.js</code> funciona con pocas rutas,
            pero se vuelve inmanejable enseguida. <code>express.Router()</code> permite
            agrupar rutas relacionadas en su propio fichero y "montarlas" en la app
            principal con un prefijo común.
          </p>
          <CodeBlock
            language="javascript"
            title="routes/usuarios.js"
            code={`const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json([{ id: 1, nombre: 'Ana' }]);
});

router.get('/:id', (req, res) => {
  res.json({ id: req.params.id, nombre: 'Ana' });
});

router.post('/', (req, res) => {
  res.status(201).json(req.body);
});

module.exports = router;`}
          />
          <CodeBlock
            language="javascript"
            title="app.js"
            code={`const express = require('express');
const usuariosRouter = require('./routes/usuarios');

const app = express();
app.use(express.json());

// Todas las rutas de usuariosRouter cuelgan de /usuarios
app.use('/usuarios', usuariosRouter);

app.listen(3000);`}
          />
          <p>
            Con esto, una petición a <code>GET /usuarios/3</code> llega al router de
            usuarios y dentro de él se resuelve como <code>GET /:id</code>. El valor{' '}
            <code>3</code> queda disponible en <code>req.params.id</code>.
          </p>
        </LessonSection>

        <LessonSection title="Middleware de manejo de errores" level={1}>
          <p>
            Express reconoce un tipo especial de middleware para errores: uno que recibe{' '}
            <strong>cuatro</strong> parámetros en vez de tres, con el error como primer
            argumento. Se define al final de todo, después de las rutas.
          </p>
          <CodeBlock
            language="javascript"
            code={`app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Algo salió mal en el servidor' });
});`}
          />
          <p>
            Para llegar hasta aquí desde una ruta o middleware normal, se llama a{' '}
            <code>next(error)</code> en lugar de <code>next()</code>: Express detecta que
            lleva un argumento y salta directamente al middleware de errores, saltándose el
            resto de la cadena.
          </p>
        </LessonSection>

        <LessonSection title="El orden importa" level={1}>
          <InfoBox type="important" title="Los middleware se ejecutan en el orden en que se declaran">
            Express procesa el middleware y las rutas en el mismo orden en que aparecen en
            el código. Si el middleware de manejo de errores va antes que las rutas, nunca
            se ejecutará. Si <code>express.json()</code> va después de una ruta que necesita{' '}
            <code>req.body</code>, ese body llegará vacío.
          </InfoBox>
        </LessonSection>

        <LessonSection title="Resumen" level={1}>
          <ul>
            <li>Un middleware es una función <code>(req, res, next)</code> que se ejecuta antes de llegar a la ruta final.</li>
            <li><code>app.use()</code> registra middleware global; pasarlo como argumento extra en una ruta lo limita a esa ruta.</li>
            <li><code>express.Router()</code> permite dividir las rutas en varios ficheros y montarlas con un prefijo (<code>app.use('/usuarios', router)</code>).</li>
            <li>El middleware de errores recibe cuatro parámetros <code>(err, req, res, next)</code> y se declara al final.</li>
            <li>El orden de declaración del middleware y las rutas importa: Express las ejecuta en ese mismo orden.</li>
          </ul>
        </LessonSection>
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
