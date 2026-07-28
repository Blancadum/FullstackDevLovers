import { LessonLayout, LessonSection, CodeBlock, InfoBox } from '../../../components';
import { LessonNavigation } from '../../../components/LessonNavigation';
import { useBreadcrumb } from '../../../hooks/useBreadcrumb';
import { useLessonNavigation } from '../../../hooks/useLessonNavigation';

export function LessonNodejsDespliegue() {
  const breadcrumbs = useBreadcrumb();
  const nav = useLessonNavigation();

  return (
    <>
      <LessonLayout
        title="Despliegue y producción"
        description="Buenas prácticas para desplegar y mantener aplicaciones Node.js en producción."
        breadcrumbs={breadcrumbs}
        seoTitle="Despliegue de Node.js en Producción | Fullstack Dev Lovers"
        seoDescription="Aprende a desplegar aplicaciones Node.js en producción: variables de entorno, procesos, logging y buenas prácticas."
        seoKeywords="node.js, despliegue, producción, deploy, pm2"
        url="https://fullstackdevlovers.com/backend/nodejs/despliegue"
      >
        <p>
          Con tests que pasan y una API completa (rutas, base de datos, transacciones,
          autenticación), toca el último paso: ponerla a funcionar donde los usuarios
          puedan acceder a ella. Vas a ver las diferencias entre desarrollo y producción,
          cómo mantener el proceso vivo con un gestor de procesos y qué comprobar antes de
          desplegar.
        </p>

        <LessonSection title="Desarrollo vs producción" level={1}>
          <p>
            La variable de entorno <code>NODE_ENV</code> indica en qué modo se está
            ejecutando la aplicación. Muchas librerías (Express incluido) cambian su
            comportamiento según su valor: en producción desactivan mensajes de error
            detallados, activan cachés internas y optimizan el rendimiento.
          </p>
          <CodeBlock
            language="javascript"
            code={`if (process.env.NODE_ENV === 'production') {
  console.log('Modo producción: logs mínimos, sin detalles de errores al cliente');
} else {
  console.log('Modo desarrollo: logs detallados para depurar');
}`}
          />
          <InfoBox type="warning">
            Nunca envíes el <code>stack trace</code> completo de un error al cliente en
            producción: puede filtrar rutas del servidor, versiones de librerías o incluso
            fragmentos de consultas SQL. En desarrollo es útil verlo; en producción solo
            debe quedar en los logs del servidor.
          </InfoBox>
        </LessonSection>

        <LessonSection title="Variables de entorno en producción" level={1}>
          <p>
            Ya usaste <code>dotenv</code> con un fichero <code>.env</code> en desarrollo.
            En producción, ese fichero normalmente no existe: las variables de entorno
            (credenciales de base de datos, secreto de JWT, puertos...) las define
            directamente la plataforma de despliegue (un panel de configuración, un fichero
            de configuración del proveedor cloud, o un gestor de secretos).
          </p>
          <InfoBox type="important">
            El código de la aplicación no debería cambiar entre desarrollo y producción, solo
            los valores de las variables de entorno. Si tu código hace{' '}
            <code>process.env.DB_HOST</code>, funciona igual en ambos sitios: lo único que
            cambia es de dónde vienen esos valores.
          </InfoBox>
        </LessonSection>

        <LessonSection title="Mantener el proceso vivo: gestores de procesos" level={1}>
          <p>
            Si ejecutas <code>node server.js</code> directamente y el proceso lanza una
            excepción no controlada, el servidor entero se cae y deja de responder. En
            producción se usa un <strong>gestor de procesos</strong> que reinicia la
            aplicación automáticamente si se cae, y permite ejecutar varias instancias en
            paralelo. <strong>PM2</strong> es uno de los más usados en el ecosistema Node.js.
          </p>
          <CodeBlock language="bash" code="npm install -g pm2" />
          <CodeBlock
            language="bash"
            code={`# Arrancar la aplicación gestionada por PM2
pm2 start server.js --name mi-api

# Ver el estado de los procesos
pm2 status

# Ver logs en tiempo real
pm2 logs mi-api

# Reiniciar tras un deploy
pm2 restart mi-api`}
          />
          <InfoBox type="tip">
            Muchas plataformas cloud (Render, Railway, servicios
            gestionados de AWS...) ya incluyen su propio gestor de procesos y reinicio
            automático, por lo que PM2 se usa sobre todo cuando despliegas en un servidor
            propio (una máquina virtual, por ejemplo).
          </InfoBox>
        </LessonSection>

        <LessonSection title="Logging en producción" level={1}>
          <p>
            <code>console.log()</code> es suficiente en desarrollo, pero en producción
            conviene un sistema de logging que:
          </p>
          <ul>
            <li>Distinga niveles de log (<code>info</code>, <code>warn</code>, <code>error</code>).</li>
            <li>Escriba en ficheros o los envíe a un servicio centralizado, no solo a la consola.</li>
            <li>Incluya marca de tiempo y contexto suficiente para investigar un fallo después.</li>
          </ul>
          <InfoBox type="info">
            Librerías como <code>winston</code> o <code>pino</code> cubren estas necesidades
            en el ecosistema Node.js.
          </InfoBox>
        </LessonSection>

        <LessonSection title="Checklist antes de desplegar" level={1}>
          <ul>
            <li>Los tests pasan (<code>npm test</code>) antes de hacer merge y desplegar.</li>
            <li>No hay credenciales ni secretos escritos directamente en el código.</li>
            <li><code>.env</code> está en <code>.gitignore</code> y no se ha subido nunca al repositorio.</li>
            <li>Los errores no exponen detalles internos al cliente en producción.</li>
            <li>Hay un gestor de procesos (o el propio proveedor cloud) reiniciando la app si se cae.</li>
            <li>CORS está configurado para aceptar solo los orígenes que necesitas, no cualquiera.</li>
          </ul>
        </LessonSection>

        <LessonSection title="Resumen" level={1}>
          <ul>
            <li><code>NODE_ENV</code> distingue el comportamiento entre desarrollo y producción.</li>
            <li>En producción, las variables de entorno las define la plataforma de despliegue, no un fichero <code>.env</code> local.</li>
            <li>Un gestor de procesos como PM2 reinicia la aplicación automáticamente si el proceso se cae.</li>
            <li>El logging en producción necesita niveles, persistencia y contexto, no solo <code>console.log()</code>.</li>
            <li>Antes de desplegar: tests en verde, sin secretos en el código y errores controlados de cara al cliente.</li>
            <li>Con esto cierras el recorrido: desde un servidor HTTP nativo hasta una API Express con base de datos, autenticación, tests y despliegue.</li>
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
