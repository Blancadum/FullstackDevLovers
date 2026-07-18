import { LessonTemplate, CodeBlock, InfoBox, Table } from '../components';
import { LessonNavigation } from '../components/LessonNavigation';
import { useBreadcrumb } from '../hooks/useBreadcrumb';
import { useLessonNavigation } from '../hooks/useLessonNavigation';

export function LessonProyectoBuild() {
  const breadcrumbs = useBreadcrumb();
  const nav = useLessonNavigation();
  const concepts = [
    { icon: '📦', title: 'Build & Packaging', definition: 'Compilar y empaquetar aplicación para producción', example: 'Maven: mvn clean package; genera JAR ejecutable' },
  ];
  const sections = [
    {
      title: 'Build con Maven',
      content: (
        <>
          <p>
            El <strong>build</strong> es el proceso de compilar código fuente a aplicación ejecutable. Maven automatiza esto.
            Comando <strong>mvn clean install</strong> limpia compilaciones previas, compila código, ejecuta tests, y instala
            artefacto en repositorio local. <strong>mvn clean package</strong> compila, testa, y genera JAR/WAR (binario ejecutable).
            Si quieres compilar rápido sin tests, <strong>mvn clean package -DskipTests</strong>.
          </p>

          <p>
            El resultado está en directorio <code>target/</code>. Un <strong>JAR (Java Archive)</strong> es archivo comprimido
            con tu aplicación. <strong>WAR (Web Archive)</strong> es para desplegar en servidor Tomcat. Para Spring Boot, JAR es
            más común. Ejecuta con <strong>java -jar target/joma-project-1.0.0.jar</strong>. Con <strong>--spring.profiles.active=prod</strong>,
            carga configuración de producción.
          </p>

          <h3>Configuración en pom.xml</h3>
          <p>
            El archivo <code>pom.xml</code> es la "receta" de Maven. Define versión de Java a compilar. Define dependencias: Spring Boot,
            MySQL connector, JUnit para tests. Define plugins: spring-boot-maven-plugin permite ejecutar aplicación con <code>mvn spring-boot:run</code>.
          </p>

          <p>
            Manteniendo pom.xml limpio y bien estructurado, garantizas que cualquiera pueda clonar tu repo, ejecutar build, y obtener
            la misma aplicación. Es reproducible.
          </p>
        </>
      )
    },

    {
      title: 'Despliegue en Producción',
      content: (
        <>
          <p>
            El <strong>despliegue</strong> es poner tu aplicación en un servidor donde usuarios reales la usan. Es diferente a
            desarrollo local. El servidor debe ser confiable, rápido, seguro, y estar monitorizado.
          </p>

          <h3>Opciones de Hosting</h3>
          <p>
            <strong>Amazon Web Services (AWS)</strong> es popular. EC2 para máquinas virtuales, RDS para bases de datos, S3 para
            archivos. <strong>Heroku</strong> es más simple; subes código, Heroku despliega automáticamente. Pero es más caro.
            <strong>DigitalOcean</strong> es intermedio: máquinas virtuales simples a buen precio. <strong>Google Cloud</strong> y
            <strong>Microsoft Azure</strong> son alternativas. Para este proyecto, cualquiera funciona.
          </p>

          <h3>Configuración de Producción</h3>
          <p>
            En producción, NUNCA usas base de datos de desarrollo. Creas BD separada en el servidor. Nunca commiteás secretos
            (contraseñas, API keys) en Git. En lugar de eso, usas variables de entorno. Tu aplicación lee:
            <code>spring.datasource.password=${DB_PASSWORD}</code>, y DB_PASSWORD es variable de entorno configurada en servidor.
            Configuras HTTPS con certificado SSL. Configuras CORS para solo tu dominio. Activas logs y monitoring.
          </p>

          <h3>Monitoreo y Logs</h3>
          <p>
            Una vez desplegado, <strong>monitorea</strong> tu aplicación. ¿Está online? ¿Es rápida? ¿Hay errores? Herramientas
            como DataDog, New Relic, o simplemente ELK Stack (Elasticsearch, Logstash, Kibana) agregan logs. Configura alertas:
            si la aplicación cae, te notifica. Si hay 1000 errores en 5 minutos, te notifica. El monitoreo es diferencia entre
            "me entero cuando cliente llama enojado" y "me entero en minutos".
          </p>

          <InfoBox type="info">
            <strong>Estrategia de despliegue:</strong> No despliegues nueva versión a las 3 PM un viernes. Despliega lunes por la mañana
            cuando hay gente en la oficina en caso de problemas. Usa "blue-green deployment": mantén dos servidores. Uno ejecuta
            versión vieja (blue), otro versión nueva (green). Si nueva tiene problemas, saltas de vuelta a vieja en segundos.
          </InfoBox>
        </>
      )
    },
  ];

  const keyPoints = [
    'Build con Maven',
    'Packaging JAR/WAR',
    'Propiedades de configuración'
  ];

  return (
    <>
      <LessonTemplate
        title="Despliegue en Cloud"
        breadcrumbs={breadcrumbs}
        concepts={concepts}
        sections={sections}
        keyPoints={keyPoints}
      />
      <LessonNavigation
        previousLink={nav.previous}
        previousTitle={nav.previousTitle}
        nextLink={nav.next}
        nextTitle={nav.nextTitle}
      />
    </>
  );
}

export function LessonProyectoDocumentacion() {
  return <LessonProyectoBuild />;
}

export function LessonProyectoCloud() {
  return <LessonProyectoBuild />;
}