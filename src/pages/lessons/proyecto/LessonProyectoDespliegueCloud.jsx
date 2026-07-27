import { LessonLayout, CodeBlock, InfoBox } from '../../../components';
import { LessonNavigation } from '../../../components/LessonNavigation';
import { useBreadcrumb } from '../../../hooks/useBreadcrumb';
import { useLessonNavigation } from '../../../hooks/useLessonNavigation';

export function LessonProyectoDespliegueCloud() {
  const breadcrumbs = useBreadcrumb();
  const nav = useLessonNavigation();

  return (
    <>
      <LessonLayout
        title="Despliegue en Cloud"
        description="Cómo desplegar tu TFC en un proveedor cloud para que sea accesible en producción"
        breadcrumbs={breadcrumbs}
        seoTitle="Despliegue en Cloud del Proyecto TFC"
        seoDescription="Cómo desplegar tu Trabajo de Fin de Ciclo en un proveedor cloud, con configuración de producción."
        seoKeywords="despliegue, cloud, tfc, proyecto"
        url="https://fullstackdevlovers.com/proyecto/despliegue/cloud"
      >
        <p>
          Tu TFC ya compila, pasa los tests y está documentado. Falta el paso que lo convierte en un proyecto real: que
          cualquiera pueda entrar desde un navegador y usarlo, sin tener tu ordenador encendido. En esta lección vas a preparar
          tu backend para producción, empaquetarlo con Docker y subirlo a un proveedor cloud para que tenga una URL pública.
        </p>

        <h2>De "funciona en mi máquina" a "funciona en internet"</h2>
        <p>
          En local, tu aplicación arranca con Maven, apunta a una base de datos que tú controlas, y nadie más la ve. En cloud,
          el servidor no es tuyo, la base de datos suele ser otra instancia distinta, y las credenciales no pueden ir escritas
          en el código. Desplegar no es solo "subir el JAR a otro sitio"; implica preparar tu proyecto para un entorno donde no
          controlas la máquina directamente.
        </p>

        <h2>1. Externaliza toda la configuración sensible</h2>
        <p>
          Antes de nada, revisa que tu <code>application.properties</code> no tenga contraseñas ni URLs de base de datos
          escritas a mano. En producción, esos valores deben venir de <strong>variables de entorno</strong> que configura el
          propio proveedor cloud, nunca del código fuente.
        </p>
        <CodeBlock language="yaml" title="src/main/resources/application-prod.yml" code={`spring:
  datasource:
    url: \${DB_URL}
    username: \${DB_USERNAME}
    password: \${DB_PASSWORD}
  jpa:
    hibernate:
      ddl-auto: validate
server:
  port: \${PORT:8080}`} />
        <p>
          Con <code>ddl-auto: validate</code> evitas que Hibernate intente modificar el esquema en producción por su cuenta; el
          esquema de base de datos en producción debe crearse de forma controlada (migraciones o scripts), no improvisado en
          cada arranque.
        </p>

        <h2>2. Empaqueta tu proyecto en una imagen Docker</h2>
        <p>
          La forma más portable de desplegar un backend Java hoy en día es empaquetarlo en un <strong>contenedor Docker</strong>.
          Un contenedor incluye tu aplicación y todo lo que necesita para ejecutarse, así que el proveedor cloud no tiene que
          adivinar qué versión de Java usas ni cómo arrancarla.
        </p>
        <CodeBlock language="dockerfile" title="Dockerfile" code={`# Etapa 1: compilar el proyecto
FROM maven:3.9-eclipse-temurin-17 AS build
WORKDIR /app
COPY pom.xml .
COPY src ./src
RUN mvn clean package -DskipTests

# Etapa 2: imagen final, más ligera, solo con el JAR
FROM eclipse-temurin:17-jre-alpine
WORKDIR /app
COPY --from=build /app/target/*.jar app.jar
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "app.jar"]`} />
        <p>
          {/* TODO-verificar: ajusta las etiquetas de las imágenes base (maven:3.9-eclipse-temurin-17, eclipse-temurin:17-jre-alpine) a la versión de Java que uses realmente en tu proyecto */}
          Este es un <strong>multi-stage build</strong>: la primera etapa compila el proyecto con Maven, y la segunda copia
          solo el JAR resultante a una imagen mucho más ligera. Así la imagen final no arrastra todo Maven ni el código fuente,
          solo lo necesario para ejecutar la aplicación.
        </p>
        <CodeBlock language="bash" code={`# Construir la imagen localmente
docker build -t mi-tfc-backend .

# Probarla en local antes de subirla a cloud
docker run -p 8080:8080 \\
  -e DB_URL=jdbc:mysql://localhost:3306/tfc_dev \\
  -e DB_USERNAME=root \\
  -e DB_PASSWORD=secreto \\
  mi-tfc-backend`} />

        <h2>3. Elegir dónde desplegar</h2>
        <p>
          Para un proyecto de fin de ciclo no necesitas la infraestructura de una gran empresa; necesitas que funcione, sea
          accesible y no te cueste horas de configuración. Algunas opciones habituales:
        </p>
        <CodeBlock language="text" code={`Railway / Render
  + Muy rápidos de configurar, detectan el Dockerfile automáticamente
  + Ofrecen base de datos gestionada con poca configuración
  - Los límites del plan gratuito cambian con frecuencia

AWS (EC2 + RDS, o Elastic Beanstalk)
  + Estándar de la industria, muy valorado en el mundo laboral
  + Control total sobre la infraestructura
  - Más pasos de configuración manual, curva de aprendizaje mayor

VPS genérico (DigitalOcean, un droplet, etc.)
  + Control total, buen precio
  - Tienes que gestionar tú mismo el servidor, Docker, certificados...`} />
        <InfoBox type="info">
          {/* TODO-verificar: los planes gratuitos y sus límites concretos cambian con frecuencia en todos los proveedores; comprueba las condiciones actuales antes de decidir dónde desplegar tu TFC */}
          No existe una única respuesta correcta: si tu prioridad es tenerlo desplegado rápido para la entrega, una plataforma
          tipo Railway o Render suele ser el camino más corto. Si quieres demostrar que sabes moverte en un entorno cloud más
          "profesional", AWS pesa más en una entrevista de trabajo.
        </InfoBox>

        <h2>4. El flujo de despliegue, paso a paso</h2>
        <p>
          Aunque cada proveedor tiene su propia interfaz, el flujo general para desplegar un backend containerizado es
          prácticamente siempre el mismo:
        </p>
        <CodeBlock language="text" code={`1. Sube tu código (con el Dockerfile) a GitHub
2. Crea el proyecto en el proveedor cloud y conéctalo a tu repositorio
3. Crea la base de datos en el proveedor (o usa una gestionada)
4. Configura las variables de entorno: DB_URL, DB_USERNAME, DB_PASSWORD...
5. Lanza el despliegue: el proveedor construye la imagen y arranca el contenedor
6. Obtén la URL pública que te asigna el proveedor`} />

        <h2>5. Verifica que funciona de verdad</h2>
        <p>
          Un despliegue "en verde" en el panel del proveedor no garantiza que tu API responda bien. Compruébalo tú mismo desde
          fuera, igual que lo haría cualquier usuario:
        </p>
        <CodeBlock language="bash" code={`# Comprueba que el servidor responde
curl https://tu-proyecto.up.railway.app/api/health

# Prueba un endpoint real de tu dominio
curl https://tu-proyecto.up.railway.app/api/productos`} />
        <p>
          Revisa también los <strong>logs</strong> del proveedor tras el arranque: si la aplicación no conecta con la base de
          datos, o falta alguna variable de entorno, ahí es donde lo verás. No des por bueno un despliegue sin haberlo probado
          desde fuera de tu red local.
        </p>

        <InfoBox type="warning">
          No despliegues por primera vez la noche antes de la entrega. Hazlo con margen: la primera vez casi siempre aparece
          algo que ajustar (una variable de entorno olvidada, un puerto mal configurado, CORS bloqueando el frontend). Tener
          uno o dos días de margen te permite corregirlo con calma.
        </InfoBox>

        <h2>Resumen</h2>
        <p>
          Desplegar tu TFC en cloud implica tres pasos clave: sacar toda la configuración sensible del código hacia variables
          de entorno, empaquetar tu backend en una imagen Docker portable con un Dockerfile multi-stage, y elegir un proveedor
          donde subirlo (Railway/Render para rapidez, AWS para un entorno más cercano al mundo profesional). Una vez desplegado,
          verifica siempre desde fuera —con <code>curl</code> o el navegador— que tu API responde de verdad antes de dar el
          despliegue por terminado.
        </p>
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
