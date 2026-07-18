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
      title: 'Pipeline CI/CD - Deployment Automático',
      content: (
        <>
          <p>
            Un <strong>pipeline CI/CD</strong> (Continuous Integration / Continuous Deployment) automatiza todo desde el código
            hasta producción. Cada push a Git triggeriza una secuencia de pasos: build, tests, staging, producción.
            Si algo falla, el pipeline se detiene y notifica.
          </p>

          <svg viewBox="0 0 700 380" style={{ width: '100%', maxWidth: '700px', margin: '2rem auto', border: '1px solid #ddd', borderRadius: '8px', backgroundColor: '#f9f9f9' }}>
            {/* Stage 1: Code Commit */}
            <g>
              <rect x="20" y="50" width="100" height="80" fill="#E0F2F1" stroke="#00897B" strokeWidth="2" rx="5"/>
              <text x="70" y="75" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#00695C">Code</text>
              <text x="70" y="92" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#00695C">Commit</text>
              <text x="70" y="110" textAnchor="middle" fontSize="9" fill="#555">git push</text>
              <text x="70" y="123" textAnchor="middle" fontSize="8" fill="#666">GitHub</text>
            </g>

            {/* Arrow */}
            <line x1="120" y1="90" x2="150" y2="90" stroke="#666" strokeWidth="2" markerEnd="url(#arrowhead)"/>

            {/* Stage 2: Build */}
            <g>
              <rect x="150" y="50" width="100" height="80" fill="#E8F5E9" stroke="#388E3C" strokeWidth="2" rx="5"/>
              <text x="200" y="75" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#2E7D32">Build</text>
              <text x="200" y="92" textAnchor="middle" fontSize="10" fill="#333">mvn package</text>
              <text x="200" y="110" textAnchor="middle" fontSize="9" fill="#555">Compilar JAR</text>
              <text x="200" y="123" textAnchor="middle" fontSize="8" fill="#666">Maven</text>
            </g>

            {/* Arrow */}
            <line x1="250" y1="90" x2="280" y2="90" stroke="#666" strokeWidth="2" markerEnd="url(#arrowhead)"/>

            {/* Stage 3: Test */}
            <g>
              <rect x="280" y="50" width="100" height="80" fill="#FFF3E0" stroke="#F57C00" strokeWidth="2" rx="5"/>
              <text x="330" y="75" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#E65100">Test</text>
              <text x="330" y="92" textAnchor="middle" fontSize="10" fill="#333">JUnit, Mockito</text>
              <text x="330" y="110" textAnchor="middle" fontSize="9" fill="#555">70%+ coverage</text>
              <text x="330" y="123" textAnchor="middle" fontSize="8" fill="#666">Automático</text>
            </g>

            {/* Arrow */}
            <line x1="380" y1="90" x2="410" y2="90" stroke="#666" strokeWidth="2" markerEnd="url(#arrowhead)"/>

            {/* Stage 4: Staging */}
            <g>
              <rect x="410" y="50" width="100" height="80" fill="#F3E5F5" stroke="#7B1FA2" strokeWidth="2" rx="5"/>
              <text x="460" y="75" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#6A1B9A">Staging</text>
              <text x="460" y="92" textAnchor="middle" fontSize="10" fill="#333">Deploy a test</text>
              <text x="460" y="110" textAnchor="middle" fontSize="9" fill="#555">Ambiente real</text>
              <text x="460" y="123" textAnchor="middle" fontSize="8" fill="#666">Verificar</text>
            </g>

            {/* Arrow */}
            <line x1="510" y1="90" x2="540" y2="90" stroke="#666" strokeWidth="2" markerEnd="url(#arrowhead)"/>

            {/* Stage 5: Production */}
            <g>
              <rect x="540" y="50" width="140" height="80" fill="#FFEBEE" stroke="#D32F2F" strokeWidth="2" rx="5"/>
              <text x="610" y="75" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#C62828">Production</text>
              <text x="610" y="92" textAnchor="middle" fontSize="10" fill="#333">Deploy a prod</text>
              <text x="610" y="110" textAnchor="middle" fontSize="9" fill="#555">Usuarios reales</text>
              <text x="610" y="123" textAnchor="middle" fontSize="8" fill="#666">En vivo</text>
            </g>

            {/* Failure paths - if tests fail */}
            <g>
              <text x="330" y="160" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#D32F2F">¿Tests fallan?</text>
              <path d="M 330 170 L 330 200" stroke="#D32F2F" strokeWidth="2" markerEnd="url(#arrowhead-red)"/>
              <rect x="260" y="210" width="140" height="50" fill="#FFEBEE" stroke="#D32F2F" strokeWidth="2" rx="4"/>
              <text x="330" y="232" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#C62828">❌ Pipeline Fallido</text>
              <text x="330" y="250" textAnchor="middle" fontSize="9" fill="#666">Notificar equipo, revisar código</text>
            </g>

            {/* Success path */}
            <g>
              <text x="420" y="160" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#388E3C">✓ Pasa todos tests</text>
              <text x="420" y="177" textAnchor="middle" fontSize="9" fill="#555">→ Procede a siguiente stage</text>
            </g>

            {/* Timeline at bottom */}
            <g>
              <text x="350" y="295" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#333">Tiempo de Ejecución típico:</text>
              <text x="350" y="315" textAnchor="middle" fontSize="9" fill="#555">Build (2-5 min) → Test (5-10 min) → Staging (2-5 min) → Production (1-2 min)</text>
              <text x="350" y="330" textAnchor="middle" fontSize="9" fill="#555">Total: ~15-25 minutos desde push hasta producción (automático)</text>
            </g>

            {/* Benefits */}
            <g>
              <text x="350" y="360" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#333">Beneficios: Menos errores | Deployment rápido | Auditoría automática | Rollback fácil</text>
            </g>

            {/* Arrow marker definition */}
            <defs>
              <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="5" refY="5" orient="auto">
                <polygon points="0 0, 10 5, 0 10" fill="#666" />
              </marker>
              <marker id="arrowhead-red" markerWidth="10" markerHeight="10" refX="5" refY="5" orient="auto">
                <polygon points="0 0, 10 5, 0 10" fill="#D32F2F" />
              </marker>
            </defs>
          </svg>
        </>
      )
    },

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