import { LessonLayout, LessonSection, CodeBlock, InfoBox } from '../../../components';
import { LessonNavigation } from '../../../components/LessonNavigation';
import { useBreadcrumb } from '../../../hooks/useBreadcrumb';
import { useLessonNavigation } from '../../../hooks/useLessonNavigation';

export function LessonNodejsExpress() {
  const breadcrumbs = useBreadcrumb();
  const nav = useLessonNavigation();

  return (
    <>
      <LessonLayout
        title="Express.js - Framework web"
        description="Introducción a Express.js, el framework web más popular del ecosistema Node.js."
        breadcrumbs={breadcrumbs}
        seoTitle="Express.js - Framework Web para Node.js | Fullstack Dev Lovers"
        seoDescription="Descubre Express.js: instalación, primera aplicación y por qué es el framework web más usado en Node.js."
        seoKeywords="node.js, express, express.js, framework web, backend javascript"
        url="https://fullstackdevlovers.com/backend/nodejs/express"
      >
        <p>
          En la lección anterior viste que enrutar peticiones a mano con el módulo{' '}
          <code>http</code> se vuelve inmanejable en cuanto la aplicación crece.{' '}
          <strong>Express</strong> resuelve justo ese problema. Hoy vas a instalarlo, crear
          tu primera aplicación y comparar cómo cambia el código respecto al servidor nativo.
        </p>

        <LessonSection title="¿Qué es Express y qué problema resuelve?" level={1}>
          <p>
            Express es un <strong>framework web minimalista</strong> para Node.js. No
            sustituye al módulo <code>http</code>: lo usa por debajo, pero añade una capa
            de abstracción que te da rutas declarativas, parseo automático del cuerpo de
            las peticiones, un sistema de middleware y una forma cómoda de responder en
            distintos formatos.
          </p>
          <InfoBox type="info">
            Express lleva desde 2010 siendo el framework web más usado del ecosistema
            Node.js. La mayoría de frameworks posteriores (NestJS, por ejemplo) se inspiran
            en su forma de definir rutas y middleware, o lo usan como base.
          </InfoBox>
        </LessonSection>

        <LessonSection title="Instalación y primera aplicación" level={1}>
          <p>
            Express se instala como cualquier paquete de npm, dentro de un proyecto que ya
            tenga su <code>package.json</code>:
          </p>
          <CodeBlock
            language="bash"
            code={`npm init -y
npm install express`}
          />
          <p>Con eso ya puedes crear un servidor Express equivalente al que hiciste con el módulo nativo:</p>
          <CodeBlock
            language="javascript"
            title="app.js"
            code={`const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hola desde Express');
});

const PUERTO = 3000;
app.listen(PUERTO, () => {
  console.log(\`Servidor escuchando en http://localhost:\${PUERTO}\`);
});`}
          />
          <p>
            Compáralo con el servidor nativo de la lección anterior: no hay <code>if</code>{' '}
            comparando <code>req.method</code> y <code>req.url</code>, ni llamadas manuales
            a <code>res.setHeader()</code>. Express se encarga de eso por ti.
          </p>
        </LessonSection>

        <LessonSection title="Definir rutas por verbo HTTP" level={1}>
          <p>
            Express ofrece un método por cada verbo HTTP: <code>app.get()</code>,{' '}
            <code>app.post()</code>, <code>app.put()</code>, <code>app.delete()</code>...
            Cada uno recibe una ruta y una función controladora con los mismos <code>req</code>{' '}
            y <code>res</code> que ya conoces, pero con utilidades añadidas.
          </p>
          <CodeBlock
            language="javascript"
            code={`app.use(express.json()); // parsea automáticamente el body JSON

app.get('/usuarios', (req, res) => {
  res.json([{ id: 1, nombre: 'Ana' }]);
});

app.post('/usuarios', (req, res) => {
  const nuevoUsuario = req.body; // ya viene parseado, sin streams manuales
  res.status(201).json(nuevoUsuario);
});`}
          />
          <p>
            Fíjate en dos mejoras claras respecto al servidor nativo: <code>req.body</code>{' '}
            llega ya parseado (gracias al middleware <code>express.json()</code>) y{' '}
            <code>res.json()</code> serializa el objeto y fija la cabecera{' '}
            <code>Content-Type: application/json</code> automáticamente.
          </p>
        </LessonSection>

        <LessonSection title="res.send, res.json y res.status" level={1}>
          <ul>
            <li><code>res.send(dato)</code>: responde con texto, HTML o cualquier dato (Express detecta el tipo).</li>
            <li><code>res.json(objeto)</code>: responde en JSON serializando el objeto automáticamente.</li>
            <li><code>res.status(codigo)</code>: fija el código de estado HTTP; se puede encadenar, por ejemplo <code>res.status(404).json(...)</code>.</li>
          </ul>
          <InfoBox type="tip">
            Encadenar métodos como <code>res.status(201).json(nuevoUsuario)</code> es el
            patrón más habitual en Express: primero el código de estado, después el cuerpo
            de la respuesta.
          </InfoBox>
        </LessonSection>

        <LessonSection title="Resumen" level={1}>
          <ul>
            <li>Express es un framework web construido sobre el módulo <code>http</code> de Node.js.</li>
            <li>Se instala con <code>npm install express</code> en cualquier proyecto Node.</li>
            <li><code>app.get()</code>, <code>app.post()</code>, <code>app.put()</code>, <code>app.delete()</code> definen rutas por verbo HTTP.</li>
            <li><code>express.json()</code> parsea automáticamente el body de las peticiones JSON.</li>
            <li><code>res.json()</code> y <code>res.status()</code> simplifican las respuestas frente al <code>res.end()</code> manual.</li>
            <li>Próximo paso: organizar esas rutas en varios ficheros y añadir lógica compartida con middleware.</li>
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
