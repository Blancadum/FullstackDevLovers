import {
  LessonLayout,
  LessonSection,
  CodeBlock,
  InfoBox,
  LessonKeyPoints,
  LessonExercises,
  LessonSummary
} from '../../../components';
import { LessonNavigation } from '../../../components/LessonNavigation';
import { useBreadcrumb } from '../../../hooks/useBreadcrumb';
import { useLessonNavigation } from '../../../hooks/useLessonNavigation';

export function LessonCiberseguridadGestionSecretosVariablesEntorno() {
  const breadcrumbs = useBreadcrumb();
  const nav = useLessonNavigation();

  const title = 'Gestión de secretos y variables de entorno';

  const keyPoints = [
    'Un secreto (API key, contraseña de base de datos, token, clave de firma de JWT...) nunca debe estar escrito directamente en el código fuente',
    'El paquete dotenv permite cargar variables definidas en un archivo .env como variables de entorno de Node.js (process.env)',
    'El archivo .env debe estar siempre en .gitignore: no debe llegar nunca al repositorio',
    'En producción, los secretos se configuran como variables de entorno del hosting o mediante un gestor de secretos dedicado (AWS Secrets Manager, entre otros)',
    'Si un secreto llega a subirse a git, cambiar el código y borrar el commit no es suficiente: hay que rotarlo (invalidarlo y generar uno nuevo) de inmediato'
  ];

  const exercises = [
    {
      title: 'Migra credenciales hardcodeadas a variables de entorno',
      description:
        'El siguiente fragmento de código tiene la contraseña de la base de datos y una API key escritas directamente en el código. Reescríbelo usando dotenv, e indica qué archivos habría que añadir a .gitignore.',
      language: 'javascript',
      solution: `// ANTES (inseguro):
// const conexionDB = mysql.createConnection({
//   host: 'localhost',
//   user: 'admin',
//   password: 'SuperSecreta123',
//   database: 'tienda'
// });
// const apiKeyPagos = 'sk_live_51H8xJ2eZvKYlo2C0FjK3...';

// DESPUÉS:

// 1. Archivo .env (NUNCA se sube al repositorio)
// DB_HOST=localhost
// DB_USER=admin
// DB_PASSWORD=SuperSecreta123
// DB_NAME=tienda
// API_KEY_PAGOS=sk_live_51H8xJ2eZvKYlo2C0FjK3...

// 2. Al principio del archivo de arranque (por ejemplo, index.js)
require('dotenv').config();

const conexionDB = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

const apiKeyPagos = process.env.API_KEY_PAGOS;

// 3. En .gitignore hay que incluir:
// .env
// .env.local
// .env.*.local`
    },
    {
      title: 'Un secreto se ha filtrado a un repositorio público: ¿qué haces?',
      description:
        'Un compañero de equipo ha hecho commit y push por error de un archivo .env con la clave de la API de pagos, y el repositorio es público en GitHub. Enumera, en orden, los pasos que seguirías para reaccionar ante este incidente.',
      solution: `1. Rotar (invalidar y regenerar) la clave de API afectada de inmediato en el panel del proveedor
   (por ejemplo, Stripe). Este es el paso más urgente: mientras la clave antigua siga siendo válida,
   cualquiera que la haya visto en el historial de git puede usarla, aunque el commit ya no esté en
   la última versión del código.

2. Actualizar la variable de entorno en todos los entornos (local, staging, producción) con la
   nueva clave generada.

3. Revisar los logs de uso de la clave filtrada en el panel del proveedor, por si se ha hecho un
   uso indebido mientras estuvo expuesta.

4. Eliminar el archivo .env del repositorio y añadirlo a .gitignore para que no se vuelva a subir
   por error.

5. Opcionalmente, limpiar el historial de git (por ejemplo, con git filter-repo o BFG Repo-Cleaner)
   para que el secreto ya no aparezca en ningún commit antiguo. Esto es una buena práctica de
   higiene, pero NO sustituye al paso 1: el secreto ya se consideraba comprometido en el momento
   en que se hizo público, se limpie o no el historial después.

6. Avisar al equipo de lo ocurrido y, si aplica, documentar el incidente para revisar cómo evitar
   que se repita (por ejemplo, añadiendo un hook de pre-commit que detecte secretos antes de hacer
   commit).`
    }
  ];

  const summary = `Un secreto —una API key, la contraseña de una base de datos, un token de un servicio externo, la
clave con la que firmas tus JWT— nunca debe escribirse directamente en el código fuente. Si lo haces,
ese secreto queda para siempre en el historial de git en cuanto haces commit, y si el repositorio es
público (o se hace público más adelante, o alguien con acceso al repositorio actúa de mala fe) el secreto
queda expuesto. La solución estándar en Node.js es cargar los secretos como variables de entorno: en
local, con un archivo .env leído por el paquete dotenv y accesible desde process.env, y en producción,
mediante las variables de entorno que ofrece el propio hosting o un gestor de secretos dedicado como AWS
Secrets Manager. El archivo .env debe estar siempre en .gitignore: es información sensible, no código.
Y si, a pesar de todo, un secreto llega a filtrarse a git, el paso imprescindible no es borrar el commit
ni reescribir el historial: es rotar el secreto inmediatamente, es decir, invalidarlo en el proveedor y
generar uno nuevo. Mientras el secreto antiguo siga siendo válido, sigue siendo un riesgo, esté o no
visible en la última versión del repositorio.`;

  return (
    <>
      <LessonLayout
        title={title}
        description="Cómo gestionar de forma segura claves de API, credenciales y otros secretos mediante variables de entorno"
        breadcrumbs={breadcrumbs}
        seoTitle="Gestión de secretos y variables de entorno | Ciberseguridad - Fullstack Dev Lovers"
        seoDescription="Descubre cómo gestionar de forma segura secretos, claves de API y credenciales usando variables de entorno y buenas prácticas para no exponerlos en tu código."
        seoKeywords="gestion de secretos, variables de entorno, env, claves de api"
        url="https://fullstackdevlovers.com/ciberseguridad/buenas-practicas/gestion-secretos-variables-entorno"
      >
        <p>
          Ya sabes validar y sanitizar los datos que entran en tu aplicación. Ahora toca proteger algo igual
          de sensible pero que vive "dentro" de tu propio proyecto: los secretos. Contraseñas de base de
          datos, claves de API de servicios externos (pasarelas de pago, proveedores de email, servicios de
          IA...), la clave con la que firmas tus JWT... Todos ellos comparten una regla: si un secreto se
          filtra, cualquiera que lo obtenga puede hacerse pasar por tu aplicación ante ese servicio, o
          acceder directamente a tus datos.
        </p>

        <LessonSection title="Por qué nunca hardcodear un secreto">
          <p>
            Escribir una clave directamente en el código puede parecer inofensivo mientras el repositorio es
            privado y solo lo ves tú. El problema es que esa suposición cambia con facilidad: un repositorio
            privado puede hacerse público sin querer, puede compartirse con más gente de la esperada, puede
            subirse a un servicio de CI/CD que lo procesa en texto plano, o simplemente puede acabar en un
            fork o una copia local que nadie controla. Y hay un detalle que se suele pasar por alto:{' '}
            <strong>git recuerda todo</strong>. Aunque borres la clave en un commit posterior, sigue
            existiendo en el historial, accesible para cualquiera que tenga el repositorio clonado.
          </p>
          <InfoBox type="warning" title="No es un problema teórico">
            Hay bots y scripts automatizados que rastrean repositorios públicos de GitHub buscando patrones
            de claves de API filtradas (por ejemplo, claves de AWS o de Stripe) las 24 horas del día. El
            tiempo entre que subes un secreto por error y que alguien lo detecta puede ser de minutos.{' '}
            {'<!-- TODO-verificar -->'} Este dato concreto sobre tiempos de detección depende del proveedor
            y no está garantizado en todos los casos; la recomendación de fondo (rotar el secreto de
            inmediato) aplica siempre.
          </InfoBox>
        </LessonSection>

        <LessonSection title="Variables de entorno con dotenv">
          <p>
            En Node.js, la forma estándar de manejar secretos en desarrollo local es mediante un archivo{' '}
            <code>.env</code> y el paquete <code>dotenv</code>, que lee ese archivo y expone sus valores en{' '}
            <code>process.env</code>.
          </p>
          <CodeBlock
            language="bash"
            code={`# .env (en la raíz del proyecto, NUNCA se sube al repositorio)
PORT=3000
DB_HOST=localhost
DB_USER=admin
DB_PASSWORD=SuperSecreta123
JWT_SECRET=una-cadena-larga-y-aleatoria-dificil-de-adivinar
API_KEY_PAGOS=sk_live_51H8xJ2eZvKYlo2C0FjK3...`}
          />
          <p>Después de instalar el paquete (`npm install dotenv`), se carga al inicio de la aplicación:</p>
          <CodeBlock
            language="javascript"
            code={`// index.js
require('dotenv').config();

const express = require('express');
const app = express();

const puerto = process.env.PORT || 3000;
const jwtSecret = process.env.JWT_SECRET;

app.listen(puerto, () => {
  console.log(\`Servidor escuchando en el puerto \${puerto}\`);
});`}
          />
          <p>
            Para que el archivo <code>.env</code> nunca llegue al repositorio, tiene que estar excluido
            desde el primer commit del proyecto:
          </p>
          <CodeBlock
            language="bash"
            code={`# .gitignore
node_modules/
.env
.env.local
.env.*.local`}
          />
          <InfoBox type="tip" title="Comparte la forma, no el contenido">
            Es habitual añadir al repositorio un archivo <code>.env.example</code> (sí versionado) con las
            mismas claves que <code>.env</code> pero con valores de ejemplo o vacíos. Así cualquiera que
            clone el proyecto sabe qué variables de entorno necesita configurar, sin exponer ningún secreto
            real.
          </InfoBox>
        </LessonSection>

        <LessonSection title="Gestión de secretos en producción">
          <p>
            Un archivo <code>.env</code> es cómodo en local, pero en producción se suele ir un paso más
            allá. Las opciones más habituales, de más simple a más avanzada, son:
          </p>
          <ul>
            <li>
              <strong>Variables de entorno del propio hosting:</strong> la mayoría de plataformas (Render,
              Railway, Heroku, Vercel, servicios de contenedores...) permiten configurar variables de entorno
              desde su panel de control o su CLI, sin necesidad de un archivo <code>.env</code> en el
              servidor. La aplicación las lee igualmente desde <code>process.env</code>.
            </li>
            <li>
              <strong>Gestores de secretos dedicados:</strong> en infraestructuras más grandes se usan
              servicios especializados, como <strong>AWS Secrets Manager</strong> o{' '}
              <strong>HashiCorp Vault</strong>, que además de almacenar los secretos cifrados ofrecen
              rotación automática, control de acceso granular y auditoría de quién ha consultado cada
              secreto y cuándo. {'<!-- TODO-verificar -->'} Las capacidades exactas y el modelo de precios
              de cada gestor conviene revisarlos en la documentación oficial vigente antes de elegir uno.
            </li>
          </ul>
          <p>
            La idea común a todas estas opciones es la misma que en local: el secreto vive fuera del código
            fuente, y la aplicación lo recibe en tiempo de ejecución a través de <code>process.env</code> o
            de una llamada a la API del gestor de secretos correspondiente.
          </p>
        </LessonSection>

        <LessonSection title="Qué hacer si un secreto se filtra a git">
          <p>
            A pesar de todas las precauciones, a veces ocurre: alguien hace commit de un <code>.env</code>{' '}
            por error, o pega una clave directamente en el código sin darse cuenta. Si eso pasa, el orden de
            prioridades es claro:
          </p>
          <ol>
            <li>
              <strong>Rotar el secreto de inmediato.</strong> Esto significa invalidar la clave filtrada en
              el panel del proveedor y generar una nueva. Es el único paso que realmente neutraliza el
              riesgo.
            </li>
            <li>
              Actualizar la variable de entorno con el nuevo valor en todos los entornos donde se use.
            </li>
            <li>
              Revisar, si el proveedor lo permite, los logs de uso de la clave filtrada por si se ha
              producido un uso indebido.
            </li>
            <li>
              Eliminar el secreto del código o del repositorio y asegurarse de que <code>.gitignore</code>{' '}
              lo cubre para el futuro.
            </li>
            <li>
              Opcionalmente, limpiar el historial de git con herramientas como <code>git filter-repo</code>{' '}
              o BFG Repo-Cleaner, como medida de higiene adicional.
            </li>
          </ol>
          <InfoBox type="error" title="Borrar el commit no es suficiente">
            Un error muy común es pensar que basta con borrar el commit que contenía el secreto, o hacer un{' '}
            <code>git revert</code>, y darlo por solucionado. No es así: cualquiera que haya clonado el
            repositorio antes de ese momento, o que consulte el historial completo, sigue teniendo acceso al
            secreto original. La única forma de neutralizar el riesgo de verdad es que ese secreto deje de
            ser válido, es decir, rotarlo.
          </InfoBox>
        </LessonSection>

        <LessonKeyPoints points={keyPoints} />
        <LessonExercises exercises={exercises} />
        <LessonSummary summary={summary} />

        {/*
          AVISO-CRITERIOS-AUSENTES: no se ha encontrado docs/criterios/ciberseguridad.md en el
          repositorio en el momento de redactar esta lección. Se han aplicado las reglas base de
          tono, estructura y estilo indicadas en las instrucciones del agente (progresión simple a
          compleja, ejemplos funcionales, ejercicios con solución). Revisar y ajustar este contenido
          si se crea dicho fichero de criterios más adelante.
        */}
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
