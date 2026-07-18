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

          <h3>Mapeo de Verbos HTTP a Operaciones CRUD</h3>
          <p>
            REST mapea los verbos HTTP (GET, POST, PUT, DELETE) a las operaciones CRUD (Create, Read, Update, Delete).
            Este mapeo estándar hace que las APIs sean predecibles e intuitivas.
          </p>

          <svg viewBox="0 0 700 420" style={{ width: '100%', maxWidth: '700px', margin: '2rem auto', border: '1px solid #ddd', borderRadius: '8px', backgroundColor: '#f9f9f9' }}>
            {/* HTTP VERBS - Left column */}
            <text x="50" y="30" fontSize="12" fontWeight="bold" fill="#333">Verbo HTTP</text>

            <rect x="20" y="45" width="120" height="50" fill="#E8F5E9" stroke="#388E3C" strokeWidth="2" rx="4"/>
            <text x="80" y="65" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#2E7D32">GET</text>
            <text x="80" y="82" textAnchor="middle" fontSize="9" fill="#555">Leer datos</text>

            <rect x="20" y="115" width="120" height="50" fill="#FFF3E0" stroke="#F57C00" strokeWidth="2" rx="4"/>
            <text x="80" y="135" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#E65100">POST</text>
            <text x="80" y="152" textAnchor="middle" fontSize="9" fill="#555">Crear nuevo</text>

            <rect x="20" y="185" width="120" height="50" fill="#F3E5F5" stroke="#7B1FA2" strokeWidth="2" rx="4"/>
            <text x="80" y="205" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#6A1B9A">PUT</text>
            <text x="80" y="222" textAnchor="middle" fontSize="9" fill="#555">Actualizar</text>

            <rect x="20" y="255" width="120" height="50" fill="#FFEBEE" stroke="#D32F2F" strokeWidth="2" rx="4"/>
            <text x="80" y="275" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#C62828">DELETE</text>
            <text x="80" y="292" textAnchor="middle" fontSize="9" fill="#555">Eliminar</text>

            {/* CRUD - Middle column */}
            <text x="200" y="30" fontSize="12" fontWeight="bold" fill="#333">Operación CRUD</text>

            <rect x="165" y="45" width="120" height="50" fill="#E8F5E9" stroke="#388E3C" strokeWidth="2" rx="4"/>
            <text x="225" y="65" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#2E7D32">READ</text>
            <text x="225" y="82" textAnchor="middle" fontSize="9" fill="#555">Lectura</text>

            <rect x="165" y="115" width="120" height="50" fill="#FFF3E0" stroke="#F57C00" strokeWidth="2" rx="4"/>
            <text x="225" y="135" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#E65100">CREATE</text>
            <text x="225" y="152" textAnchor="middle" fontSize="9" fill="#555">Creación</text>

            <rect x="165" y="185" width="120" height="50" fill="#F3E5F5" stroke="#7B1FA2" strokeWidth="2" rx="4"/>
            <text x="225" y="205" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#6A1B9A">UPDATE</text>
            <text x="225" y="222" textAnchor="middle" fontSize="9" fill="#555">Actualización</text>

            <rect x="165" y="255" width="120" height="50" fill="#FFEBEE" stroke="#D32F2F" strokeWidth="2" rx="4"/>
            <text x="225" y="275" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#C62828">DELETE</text>
            <text x="225" y="292" textAnchor="middle" fontSize="9" fill="#555">Eliminación</text>

            {/* Arrows */}
            <line x1="140" y1="70" x2="165" y2="70" stroke="#666" strokeWidth="2" markerEnd="url(#arrowhead)"/>
            <line x1="140" y1="140" x2="165" y2="140" stroke="#666" strokeWidth="2" markerEnd="url(#arrowhead)"/>
            <line x1="140" y1="210" x2="165" y2="210" stroke="#666" strokeWidth="2" markerEnd="url(#arrowhead)"/>
            <line x1="140" y1="280" x2="165" y2="280" stroke="#666" strokeWidth="2" markerEnd="url(#arrowhead)"/>

            {/* ENDPOINT - Right column */}
            <text x="380" y="30" fontSize="12" fontWeight="bold" fill="#333">Endpoint Ejemplo</text>

            <rect x="310" y="45" width="180" height="50" fill="#E8F5E9" stroke="#388E3C" strokeWidth="1.5" rx="4"/>
            <text x="400" y="60" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#333">GET /api/productos</text>
            <text x="400" y="77" textAnchor="middle" fontSize="8" fill="#555">o GET /api/productos/:id</text>

            <rect x="310" y="115" width="180" height="50" fill="#FFF3E0" stroke="#F57C00" strokeWidth="1.5" rx="4"/>
            <text x="400" y="135" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#333">POST /api/productos</text>
            <text x="400" y="152" textAnchor="middle" fontSize="8" fill="#555">con JSON en body</text>

            <rect x="310" y="185" width="180" height="50" fill="#F3E5F5" stroke="#7B1FA2" strokeWidth="1.5" rx="4"/>
            <text x="400" y="205" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#333">PUT /api/productos/:id</text>
            <text x="400" y="222" textAnchor="middle" fontSize="8" fill="#555">actualiza completo</text>

            <rect x="310" y="255" width="180" height="50" fill="#FFEBEE" stroke="#D32F2F" strokeWidth="1.5" rx="4"/>
            <text x="400" y="275" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#333">DELETE /api/productos/:id</text>
            <text x="400" y="292" textAnchor="middle" fontSize="8" fill="#555">elimina recurso</text>

            {/* Arrows to endpoint */}
            <line x1="285" y1="70" x2="310" y2="70" stroke="#666" strokeWidth="2" markerEnd="url(#arrowhead)"/>
            <line x1="285" y1="140" x2="310" y2="140" stroke="#666" strokeWidth="2" markerEnd="url(#arrowhead)"/>
            <line x1="285" y1="210" x2="310" y2="210" stroke="#666" strokeWidth="2" markerEnd="url(#arrowhead)"/>
            <line x1="285" y1="280" x2="310" y2="280" stroke="#666" strokeWidth="2" markerEnd="url(#arrowhead)"/>

            {/* Response codes - Bottom */}
            <g>
              <text x="50" y="350" fontSize="11" fontWeight="bold" fill="#333">Status Codes típicos:</text>
              <text x="50" y="370" fontSize="9" fill="#555">200 OK (lectura/actualización exitosa) | 201 Created (creación exitosa)</text>
              <text x="50" y="385" fontSize="9" fill="#555">204 No Content (eliminación exitosa) | 400 Bad Request (datos inválidos)</text>
              <text x="50" y="400" fontSize="9" fill="#555">401 Unauthorized (sin autenticación) | 403 Forbidden (sin permisos) | 404 Not Found (recurso no existe)</text>
            </g>

            {/* Arrow marker definition */}
            <defs>
              <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="5" refY="5" orient="auto">
                <polygon points="0 0, 10 5, 0 10" fill="#666" />
              </marker>
            </defs>
          </svg>

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