import { LessonTemplate, CodeBlock, InfoBox } from '../components';
import { LessonNavigation } from '../components/LessonNavigation';
import { useBreadcrumb } from '../hooks/useBreadcrumb';
import { useLessonNavigation } from '../hooks/useLessonNavigation';

export function LessonProyectoAPIs() {
  const breadcrumbs = useBreadcrumb();
  const nav = useLessonNavigation();
  const concepts = [{ icon: '🌐', title: 'APIs REST', definition: 'Endpoints HTTP para comunicación frontend-backend', example: 'GET, POST, PUT, DELETE con JSON' }];
  const sections = [
    {
      title: 'Diseño e Implementación de APIs REST',
      content: (
        <>
          <p>
            Una <strong>API REST</strong> es la interfaz entre tu frontend y backend. Define cómo el frontend solicita datos
            y cómo el backend responde. Una buena API REST es intuitiva, consistente, y fácil de documentar.
          </p>

          <h3>Principios de Diseño REST</h3>
          <p>
            REST (Representational State Transfer) tiene principios fundamentales. <strong>Recursos como URIs</strong>: cada cosa
            es un recurso accesible por URL. /api/products es el recurso "productos". <strong>Métodos HTTP estándar</strong>: GET
            para leer, POST para crear, PUT para actualizar, DELETE para eliminar. <strong>Stateless</strong>: cada request contiene
            toda la información necesaria; el servidor no "recuerda" requests anteriores. <strong>Representaciones JSON</strong>: los
            datos se intercambian en JSON, no HTML o XML.
          </p>

          <h3>Estructura de Endpoints</h3>
          <p>
            Agrupa endpoints relacionados bajo una ruta base. /api/products maneja todo relacionado a productos. /api/products GET
            retorna lista. /api/products POST crea nuevo. /api/products/5 GET retorna producto específico. /api/products/5 PUT
            actualiza. /api/products/5 DELETE elimina. Esta estructura es predecible; los desarrolladores frontend lo "adivinan".
          </p>

          <h3>Versionamiento de API</h3>
          <p>
            Cuando tu API madura, quizás necesites cambios que rompen compatibilidad. En lugar de romper clientes existentes,
            usa versionamiento. /api/v1/products es versión 1. /api/v2/products es versión 2 con cambios. Clientes antiguos pueden
            seguir usando v1 mientras actualizan gradualmente a v2. Esto es profesional y evita crises.
          </p>

          <h3>Documentación de API</h3>
          <p>
            <strong>Documenta cada endpoint</strong>. Qué hace, qué parámetros acepta, qué retorna, qué errores puede lanzar.
            Herramientas como Swagger/OpenAPI generan documentación automáticamente desde anotaciones en código. Esto permite
            que frontend desarrolle sin esperar a que backend esté perfecto; ven la estructura esperada en la documentación.
          </p>

          <InfoBox type="info">
            <strong>Validación de entrada</strong> es crítica. Nunca confíes en lo que el cliente envía. Valida tipos de datos,
            rangos, formatos. ¿Email válido? ¿Edad positiva? ¿Precio mayor o igual a 0? Protege tu backend contra datos basura que
            puede crashear la aplicación o permitir ataques.
          </InfoBox>
        </>
      )
    }
  ];

      return (
    <>
      <LessonTemplate
        title="APIs REST"
        breadcrumbs={breadcrumbs}
        concepts={concepts}
        sections={sections}
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