import { LessonLayout, LessonSection, CodeBlock, InfoBox } from '../../../components';
import { LessonNavigation } from '../../../components/LessonNavigation';
import { useBreadcrumb } from '../../../hooks/useBreadcrumb';
import { useLessonNavigation } from '../../../hooks/useLessonNavigation';

export function LessonNodejsHttp() {
  const breadcrumbs = useBreadcrumb();
  const nav = useLessonNavigation();

  return (
    <>
      <LessonLayout
        title="HTTP y servidores nativos"
        description="El módulo http de Node.js: cómo crear un servidor sin frameworks externos."
        breadcrumbs={breadcrumbs}
        seoTitle="HTTP y Servidores Nativos en Node.js | Fullstack Dev Lovers"
        seoDescription="Aprende a crear servidores HTTP nativos en Node.js con el módulo http: peticiones, respuestas, cabeceras y streams sin frameworks."
        seoKeywords="node.js, http, servidor nativo, request, response, streams"
        url="https://fullstackdevlovers.com/backend/nodejs/http"
      >
        <p>
          Antes de usar Express (o cualquier otro framework), conviene entender qué hace
          Node.js por debajo cuando levantas un servidor web. En esta lección vas a crear
          un servidor HTTP con el módulo nativo <code>http</code>, sin dependencias externas.
          Te va a servir para entender de verdad qué problema resuelven los frameworks que
          usarás a partir de la próxima lección, en vez de tratarlos como magia.
        </p>

        <LessonSection title="Node.js como runtime de servidor" level={1}>
          <p>
            <strong>Node.js</strong> es un entorno de ejecución de JavaScript fuera del
            navegador, construido sobre el motor V8 de Chrome. Su pieza clave para hacer
            de servidor es el <strong>event loop</strong>: un único hilo principal que
            gestiona peticiones de forma no bloqueante, delegando las tareas lentas (leer
            un fichero, consultar una base de datos, esperar una respuesta de red) y
            atendiendo a otras peticiones mientras tanto.
          </p>
          <p>
            Esto hace que Node.js sea especialmente bueno gestionando muchas conexiones
            concurrentes con operaciones de entrada/salida, que es justo lo que hace un
            servidor web la mayor parte del tiempo: esperar a la base de datos o a otros
            servicios.
          </p>
          <InfoBox type="info" title="Módulos nativos (core modules)">
            Node.js incluye de fábrica un conjunto de módulos sin necesidad de instalar
            nada con <code>npm</code>: <code>http</code>, <code>fs</code>, <code>path</code>,{' '}
            <code>crypto</code>... El módulo <code>http</code> es el que usaremos hoy para
            crear un servidor.
          </InfoBox>
        </LessonSection>

        <LessonSection title="Creando un servidor con http.createServer" level={1}>
          <p>
            La función <code>http.createServer()</code> recibe una función callback que se
            ejecuta <strong>cada vez que llega una petición</strong>. Esa función recibe dos
            objetos: <code>req</code> (la petición, request) y <code>res</code> (la
            respuesta, response).
          </p>
          <CodeBlock
            language="javascript"
            title="servidor.js"
            code={`const http = require('http');

const servidor = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hola desde Node.js sin frameworks');
});

const PUERTO = 3000;
servidor.listen(PUERTO, () => {
  console.log(\`Servidor escuchando en http://localhost:\${PUERTO}\`);
});`}
          />
          <p>
            Con <code>node servidor.js</code> el proceso queda vivo esperando peticiones.
            Cada vez que alguien visita <code>http://localhost:3000</code>, se ejecuta el
            callback y se envía la respuesta con <code>res.end()</code>.
          </p>
        </LessonSection>

        <LessonSection title="El objeto request: método, url y cabeceras" level={1}>
          <p>
            El objeto <code>req</code> te da toda la información sobre lo que ha pedido el
            cliente: el verbo HTTP usado (<code>req.method</code>), la ruta solicitada
            (<code>req.url</code>) y las cabeceras (<code>req.headers</code>).
          </p>
          <CodeBlock
            language="javascript"
            code={`const servidor = http.createServer((req, res) => {
  console.log(req.method); // GET, POST, PUT, DELETE...
  console.log(req.url);    // /usuarios, /productos/3...
  console.log(req.headers['content-type']);

  res.end('Petición recibida');
});`}
          />
          <p>
            Con esos tres datos —método, url y cabeceras— se construye toda la lógica de
            enrutado manual: comprobar qué se ha pedido y decidir qué responder.
          </p>
        </LessonSection>

        <LessonSection title="Enrutado manual y sus límites" level={1}>
          <p>
            Sin ningún framework, la única forma de "enrutar" peticiones es comprobar
            <code>req.method</code> y <code>req.url</code> a mano con condicionales:
          </p>
          <CodeBlock
            language="javascript"
            code={`const servidor = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'application/json');

  if (req.method === 'GET' && req.url === '/usuarios') {
    res.statusCode = 200;
    res.end(JSON.stringify([{ id: 1, nombre: 'Ana' }]));
    return;
  }

  if (req.method === 'POST' && req.url === '/usuarios') {
    let body = '';
    req.on('data', (chunk) => { body += chunk; });
    req.on('end', () => {
      const nuevoUsuario = JSON.parse(body);
      res.statusCode = 201;
      res.end(JSON.stringify(nuevoUsuario));
    });
    return;
  }

  res.statusCode = 404;
  res.end(JSON.stringify({ error: 'Ruta no encontrada' }));
});`}
          />
          <p>
            Fíjate en dos detalles importantes: el cuerpo de la petición (<code>body</code>)
            llega en trozos (<em>streams</em>) a través de los eventos <code>data</code> y{' '}
            <code>end</code>, y no hay nada que envíes en formato JSON de forma automática:
            tienes que serializar con <code>JSON.stringify()</code> tú mismo.
          </p>
          <InfoBox type="warning" title="Esto no escala bien">
            Imagina este servidor con veinte rutas distintas y varios verbos HTTP para cada
            una: el código se llenaría de <code>if</code> anidados, validaciones repetidas y
            parseo manual de JSON en cada ruta. Ese es exactamente el problema que resuelven
            los frameworks web como Express, que verás en la próxima lección.
          </InfoBox>
        </LessonSection>

        <LessonSection title="Resumen" level={1}>
          <ul>
            <li>Node.js usa un event loop de un solo hilo, ideal para operaciones de I/O concurrentes.</li>
            <li><code>http</code> es un módulo nativo: no requiere instalar nada con npm.</li>
            <li><code>http.createServer(callback)</code> crea un servidor que ejecuta el callback en cada petición.</li>
            <li><code>req</code> expone método, url, cabeceras y el cuerpo como stream de datos.</li>
            <li><code>res</code> permite fijar código de estado, cabeceras y terminar la respuesta con <code>res.end()</code>.</li>
            <li>Enrutar a mano con <code>if</code> funciona, pero no escala: por eso existen frameworks como Express.</li>
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
