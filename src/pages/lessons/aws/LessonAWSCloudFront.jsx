import { LessonLayout, LessonSection, CodeBlock, InfoBox, Table } from '../../../components';
import { LessonNavigation } from '../../../components/LessonNavigation';
import { useBreadcrumb } from '../../../hooks/useBreadcrumb';
import { useLessonNavigation } from '../../../hooks/useLessonNavigation';

export function LessonAWSCloudFront() {
  const breadcrumbs = useBreadcrumb();
  const nav = useLessonNavigation();

  return (
    <>
      <LessonLayout
        title="CloudFront - CDN Global"
        description="Distribución de contenido a baja latencia con la CDN global de AWS"
        breadcrumbs={breadcrumbs}
        seoTitle="CloudFront - CDN Global de AWS"
        seoDescription="Cómo funciona CloudFront, la red de distribución de contenido (CDN) de AWS, y cuándo usarla."
        seoKeywords="aws, cloudfront, cdn, edge locations"
        url="https://fullstackdevlovers.com/cloud/aws/deployment/cloudfront"
      >
        <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
          Un usuario en Tokio que pide una imagen alojada en un bucket S3 de Irlanda va a notar la distancia: cada petición viaja miles de kilómetros ida y vuelta. <strong>CloudFront</strong> es la CDN (Content Delivery Network) de AWS: copia tu contenido en cientos de ubicaciones ("edge locations") repartidas por el mundo, de forma que cada usuario lo recibe desde el punto más cercano posible.
        </p>

        <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
          No es solo para archivos estáticos: también se usa para acelerar y proteger APIs dinámicas. En esta lección vas a ver cómo funciona por dentro, cómo montar una distribución delante de S3 o de tu propia API, y cuándo merece la pena incorporarla.
        </p>

        <LessonSection title="Cómo funciona una CDN">
          <p style={{ fontSize: '1.05rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
            CloudFront se sitúa entre tus usuarios y tu <strong>origen</strong> (el sitio real donde vive el contenido: un bucket S3, un Load Balancer, tu propio servidor). Cuando un usuario pide un recurso, CloudFront comprueba si ya tiene una copia en caché en el edge location más cercano a él:
          </p>

          <Table
            headers={['Situación', 'Qué ocurre', 'Nombre técnico']}
            rows={[
              ['El contenido ya está en caché en ese edge location', 'Se sirve directamente desde ahí, en milisegundos', 'Cache Hit'],
              ['No está en caché (primera vez o caducado)', 'CloudFront lo pide al origen, lo guarda en caché y lo devuelve', 'Cache Miss'],
              ['El contenido nunca debe cachearse (datos sensibles, respuestas por usuario)', 'CloudFront reenvía la petición directamente al origen', 'Pass-through / TTL 0']
            ]}
          />

          <InfoBox type="info" title="Origen != CDN">
            CloudFront no almacena tu contenido de forma permanente: es una caché distribuida delante de un origen que sigue siendo la fuente de verdad. Si borras el archivo del bucket S3 de origen, desaparecerá también de CloudFront en cuanto expire la caché (o al invalidarla manualmente).
          </InfoBox>
        </LessonSection>

        <LessonSection title="Crear una distribución delante de un bucket S3">
          <p style={{ fontSize: '1.05rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
            El caso de uso más habitual para empezar es servir contenido estático (assets de un frontend, imágenes, documentos) desde S3 a través de CloudFront, en lugar de exponer el bucket directamente a internet.
          </p>

          <CodeBlock
            language="bash"
            title="Crear distribución con AWS CLI"
            code={`# 1. El bucket S3 debe permanecer privado; CloudFront accede
#    mediante un Origin Access Control (OAC), no acceso público directo

aws cloudfront create-origin-access-control \\
  --origin-access-control-config \\
  Name="guttman-oac",SigningProtocol=sigv4,SigningBehavior=always,OriginAccessControlOriginType=s3

# 2. Crear la distribución apuntando al bucket como origen
aws cloudfront create-distribution \\
  --origin-domain-name guttman-frontend.s3.eu-west-1.amazonaws.com \\
  --default-root-object index.html

# 3. Una vez creada, actualizar la política del bucket para que
#    SOLO CloudFront (a través del OAC) pueda leer los objetos

# 4. Invalidar la caché tras cada despliegue de una nueva versión
aws cloudfront create-invalidation \\
  --distribution-id EABCDEFG12345 \\
  --paths "/*"`}
          />

          <InfoBox type="warning" title="No dejes el bucket público">
            Un error común es hacer público el bucket S3 "para que funcione más rápido" con CloudFront. No hace falta: usando un <strong>Origin Access Control</strong>, el bucket permanece privado y solo CloudFront puede leerlo. Es la configuración recomendada por AWS desde hace años frente al antiguo OAI (Origin Access Identity).
          </InfoBox>
        </LessonSection>

        <LessonSection title="CloudFront delante de una API">
          <p style={{ fontSize: '1.05rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
            También puedes poner CloudFront delante de un Application Load Balancer que reparte tráfico hacia tu backend Spring Boot. En ese caso normalmente el objetivo no es cachear (las respuestas suelen ser dinámicas y por usuario), sino aprovechar otras ventajas:
          </p>

          <ul style={{ fontSize: '1.05rem', lineHeight: '1.9', marginBottom: '1.5rem' }}>
            <li><strong>Terminación TLS optimizada</strong> y certificados gratuitos vía AWS Certificate Manager.</li>
            <li><strong>Protección contra ataques</strong> DDoS de capa de red, integrada con AWS Shield.</li>
            <li><strong>Integración con AWS WAF</strong> para filtrar peticiones maliciosas antes de que lleguen a tu backend.</li>
            <li><strong>Una única URL pública</strong> para servir tanto el frontend estático (desde S3) como la API (desde el ALB), usando "cache behaviors" distintos según el path.</li>
          </ul>

          <CodeBlock
            language="json"
            title="Ejemplo de cache behaviors por path"
            code={`{
  "DefaultCacheBehavior": {
    "TargetOriginId": "s3-frontend",
    "ViewerProtocolPolicy": "redirect-to-https",
    "CachePolicyId": "658327ea-f89d-4fab-a63d-7e88639e58f6"
  },
  "CacheBehaviors": [
    {
      "PathPattern": "/api/*",
      "TargetOriginId": "alb-backend",
      "ViewerProtocolPolicy": "https-only",
      "CachePolicyId": "4135ea2d-6df8-44a3-9df3-4b5a84be39ad",
      "AllowedMethods": ["GET", "HEAD", "OPTIONS", "PUT", "POST", "PATCH", "DELETE"]
    }
  ]
}`}
          />
          <p style={{ fontSize: '0.9rem', color: '#666', marginTop: '0.5rem' }}>
            Los <code>CachePolicyId</code> del ejemplo corresponden a las políticas administradas <code>CachingOptimized</code> y <code>CachingDisabled</code> de AWS.
          </p>
        </LessonSection>

        <LessonSection title="¿Cuándo merece la pena CloudFront?">
          <Table
            headers={['Escenario', '¿CloudFront ayuda?']}
            rows={[
              ['Frontend estático (React, Angular) servido desde S3', 'Sí, siempre: reduce latencia y protege el bucket'],
              ['API con usuarios repartidos por varios continentes', 'Sí, para TLS, WAF y protección DDoS, aunque no cachee respuestas'],
              ['API interna, solo consumida desde tu propia VPC', 'No suele aportar: el tráfico ya es interno'],
              ['Aplicación con pocos usuarios, todos en la misma región', 'El beneficio es menor, pero la capa de seguridad (WAF, Shield) sigue siendo útil']
            ]}
          />
        </LessonSection>

        <LessonSection title="Resumen">
          <ul style={{ fontSize: '1.05rem', lineHeight: '2' }}>
            <li>CloudFront es la CDN de AWS: distribuye contenido desde ubicaciones ("edge locations") cercanas a cada usuario.</li>
            <li>Funciona delante de un <strong>origen</strong> (S3, un ALB, un servidor propio) al que consulta cuando hay un cache miss.</li>
            <li>Para servir contenido de S3, usa un <strong>Origin Access Control</strong> y mantén el bucket privado.</li>
            <li>También aporta valor delante de APIs dinámicas: TLS gestionado, protección DDoS con Shield e integración con WAF.</li>
            <li>Recuerda invalidar la caché (<code>create-invalidation</code>) después de cada despliegue de contenido estático.</li>
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
