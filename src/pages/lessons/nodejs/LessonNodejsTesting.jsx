import { LessonLayout, LessonSection, CodeBlock, InfoBox } from '../../../components';
import { LessonNavigation } from '../../../components/LessonNavigation';
import { useBreadcrumb } from '../../../hooks/useBreadcrumb';
import { useLessonNavigation } from '../../../hooks/useLessonNavigation';

export function LessonNodejsTesting() {
  const breadcrumbs = useBreadcrumb();
  const nav = useLessonNavigation();

  return (
    <>
      <LessonLayout
        title="Testing en Node.js"
        description="Herramientas y estrategias para testear aplicaciones Node.js."
        breadcrumbs={breadcrumbs}
        seoTitle="Testing en Node.js: Guía de Herramientas | Fullstack Dev Lovers"
        seoDescription="Aprende a testear aplicaciones Node.js: tests unitarios, de integración y las herramientas más usadas del ecosistema."
        seoKeywords="node.js, testing, jest, mocha, tests unitarios"
        url="https://fullstackdevlovers.com/backend/nodejs/testing"
      >
        <p>
          Ya tienes una API con rutas, base de datos, transacciones y autenticación. Antes
          de desplegarla, necesitas una forma de comprobar que sigue funcionando cada vez
          que cambias algo, sin tener que probar todo a mano con Postman. Hoy vas a escribir
          tests con <strong>Jest</strong>, tanto unitarios como de integración sobre tus
          rutas Express.
        </p>

        <LessonSection title="Por qué testear" level={1}>
          <p>
            Un test automatizado comprueba que una parte del código se comporta como
            esperas, y lo hace en segundos, sin intervención manual. Su valor real se nota
            cuando modificas código ya existente: si tienes tests, sabes al momento si has
            roto algo. Si no los tienes, solo lo descubres cuando falla en producción, o
            peor, cuando lo reporta un usuario.
          </p>
        </LessonSection>

        <LessonSection title="Tests unitarios vs tests de integración" level={1}>
          <ul>
            <li>
              <strong>Test unitario:</strong> prueba una función o módulo aislado, sin
              depender de la base de datos ni de la red. Rápido y muy específico.
            </li>
            <li>
              <strong>Test de integración:</strong> prueba varias piezas trabajando juntas,
              por ejemplo una ruta Express completa, desde la petición HTTP hasta la
              respuesta. Más lento, pero detecta problemas que los unitarios no ven (rutas
              mal montadas, middleware que falla, respuestas con formato incorrecto...).
            </li>
          </ul>
          <InfoBox type="info">
            Ambos tipos son complementarios: los unitarios te dan velocidad y precisión para
            la lógica interna, los de integración te dan confianza en que la API completa
            responde como espera el cliente.
          </InfoBox>
        </LessonSection>

        <LessonSection title="Instalar Jest y escribir el primer test" level={1}>
          <CodeBlock language="bash" code="npm install --save-dev jest" />
          <CodeBlock
            language="javascript"
            title="package.json (fragmento)"
            code={`{
  "scripts": {
    "test": "jest"
  }
}`}
          />
          <p>
            La estructura básica de un test en Jest usa <code>describe()</code> para agrupar
            casos relacionados, <code>test()</code> (o su alias <code>it()</code>) para cada
            caso concreto, y <code>expect()</code> para comprobar el resultado.
          </p>
        </LessonSection>

        <LessonSection title="Test unitario de una función pura" level={1}>
          <CodeBlock
            language="javascript"
            title="utils/calcularDescuento.js"
            code={`function calcularDescuento(precio, porcentaje) {
  if (porcentaje < 0 || porcentaje > 100) {
    throw new Error('Porcentaje inválido');
  }
  return precio - (precio * porcentaje) / 100;
}

module.exports = calcularDescuento;`}
          />
          <CodeBlock
            language="javascript"
            title="utils/calcularDescuento.test.js"
            code={`const calcularDescuento = require('./calcularDescuento');

describe('calcularDescuento', () => {
  test('aplica correctamente un descuento del 10%', () => {
    const resultado = calcularDescuento(100, 10);
    expect(resultado).toBe(90);
  });

  test('devuelve el precio original si el descuento es 0%', () => {
    expect(calcularDescuento(50, 0)).toBe(50);
  });

  test('lanza un error si el porcentaje es mayor de 100', () => {
    expect(() => calcularDescuento(100, 150)).toThrow('Porcentaje inválido');
  });
});`}
          />
          <p>Con <code>npm test</code> Jest busca todos los ficheros <code>*.test.js</code> y ejecuta sus casos.</p>
        </LessonSection>

        <LessonSection title="Test de integración de una ruta Express con supertest" level={1}>
          <p>
            <code>supertest</code> permite hacer peticiones HTTP directamente contra tu
            aplicación Express en los tests, sin necesidad de levantar el servidor en un
            puerto real.
          </p>
          <CodeBlock language="bash" code="npm install --save-dev supertest" />
          <CodeBlock
            language="javascript"
            title="app.test.js"
            code={`const request = require('supertest');
const app = require('./app'); // la app de Express, sin app.listen()

describe('GET /tareas', () => {
  test('responde 200 y devuelve un array de tareas', async () => {
    const respuesta = await request(app).get('/tareas');

    expect(respuesta.status).toBe(200);
    expect(Array.isArray(respuesta.body)).toBe(true);
  });
});

describe('POST /tareas', () => {
  test('crea una tarea y responde 201', async () => {
    const respuesta = await request(app)
      .post('/tareas')
      .send({ titulo: 'Escribir tests' });

    expect(respuesta.status).toBe(201);
    expect(respuesta.body.titulo).toBe('Escribir tests');
  });

  test('responde 400 si falta el título', async () => {
    const respuesta = await request(app).post('/tareas').send({});

    expect(respuesta.status).toBe(400);
  });
});`}
          />
          <InfoBox type="tip">
            Para que <code>supertest</code> pueda importar tu app, separa la creación de la
            aplicación Express (<code>app.js</code>) del arranque del servidor (
            <code>app.listen()</code>, normalmente en un fichero <code>server.js</code>{' '}
            aparte). Así el test importa <code>app</code> sin abrir un puerto real.
          </InfoBox>
        </LessonSection>

        <LessonSection title="Base de datos en los tests" level={1}>
          <InfoBox type="warning" title="No testees contra tu base de datos de producción">
            Los tests de integración que tocan la base de datos deben usar una base de datos
            separada, exclusiva para tests (por ejemplo, otra configuración de{' '}
            <code>.env.test</code>), y limpiarla entre ejecuciones. Ejecutar tests contra
            datos reales es una forma segura de perder información importante.
          </InfoBox>
        </LessonSection>

        <LessonSection title="Resumen" level={1}>
          <ul>
            <li>Los tests automatizados detectan regresiones al instante, sin pruebas manuales repetidas.</li>
            <li>Los tests unitarios prueban código aislado; los de integración prueban piezas trabajando juntas (por ejemplo, una ruta completa).</li>
            <li>Jest organiza los tests con <code>describe()</code>, <code>test()</code> y <code>expect()</code>.</li>
            <li><code>supertest</code> permite testear rutas Express haciendo peticiones HTTP sin levantar un servidor real.</li>
            <li>Separar <code>app.js</code> (la app Express) de <code>server.js</code> (el <code>listen()</code>) facilita testear.</li>
            <li>Los tests de integración con base de datos deben usar una base de datos de test, nunca la de producción.</li>
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
