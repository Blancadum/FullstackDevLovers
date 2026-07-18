import { LessonTemplate, InfoBox } from '../components';
import { LessonNavigation } from '../components/LessonNavigation';
import { useBreadcrumb } from '../hooks/useBreadcrumb';
import { useLessonNavigation } from '../hooks/useLessonNavigation';

export function LessonProyectoDatabase() {
  const breadcrumbs = useBreadcrumb();
  const nav = useLessonNavigation();
  const concepts = [{ icon: '🗄️', title: 'Base de Datos', definition: 'Diseño e implementación de schema relacional', example: 'Tablas, relaciones, índices, migraciones' }];
  const sections = [
    {
      title: 'Diseño e Implementación de Base de Datos',
      content: (
        <>
          <p>
            La <strong>base de datos</strong> es el corazón de cualquier aplicación. Almacena toda la información crucial.
            Un buen diseño de BD facilita búsquedas rápidas, previene duplicados, y permite escalabilidad. Un mal diseño
            hace que todo sea lento e inmantenible.
          </p>

          <h3>Ciclo de Vida de una Entidad (CRUD)</h3>
          <p>
            Cada entidad en la base de datos pasa por un ciclo de vida: <strong>Create</strong> (crear),
            <strong>Read</strong> (leer), <strong>Update</strong> (actualizar), <strong>Delete</strong> (eliminar).
            Este ciclo CRUD es fundamental en cualquier aplicación.
          </p>

          <svg viewBox="0 0 700 350" style={{ width: '100%', maxWidth: '700px', margin: '2rem auto', border: '1px solid #ddd', borderRadius: '8px', backgroundColor: '#f9f9f9' }}>
            {/* Center circle - Entity */}
            <circle cx="350" cy="175" r="50" fill="#E0E0E0" stroke="#333" strokeWidth="2"/>
            <text x="350" y="170" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#333">Entity</text>
            <text x="350" y="185" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#333">(Producto)</text>

            {/* CREATE - Top left */}
            <g>
              <rect x="80" y="40" width="110" height="80" fill="#E8F5E9" stroke="#388E3C" strokeWidth="2" rx="5"/>
              <text x="135" y="60" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#2E7D32">CREATE</text>
              <text x="135" y="77" textAnchor="middle" fontSize="9" fill="#333">INSERT INTO</text>
              <text x="135" y="90" textAnchor="middle" fontSize="9" fill="#333">productos (...)</text>
              <text x="135" y="105" textAnchor="middle" fontSize="8" fill="#666">SQL INSERT</text>
            </g>

            {/* Arrow CREATE to Entity */}
            <line x1="190" y1="115" x2="300" y2="145" stroke="#388E3C" strokeWidth="2" markerEnd="url(#arrowhead-green)"/>

            {/* READ - Top right */}
            <g>
              <rect x="510" y="40" width="110" height="80" fill="#E3F2FD" stroke="#1976D2" strokeWidth="2" rx="5"/>
              <text x="565" y="60" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#1565C0">READ</text>
              <text x="565" y="77" textAnchor="middle" fontSize="9" fill="#333">SELECT FROM</text>
              <text x="565" y="90" textAnchor="middle" fontSize="9" fill="#333">productos</text>
              <text x="565" y="105" textAnchor="middle" fontSize="8" fill="#666">SQL SELECT</text>
            </g>

            {/* Arrow Entity to READ */}
            <line x1="400" y1="145" x2="510" y2="115" stroke="#1976D2" strokeWidth="2" markerEnd="url(#arrowhead-blue)"/>

            {/* UPDATE - Bottom right */}
            <g>
              <rect x="510" y="245" width="110" height="80" fill="#F3E5F5" stroke="#7B1FA2" strokeWidth="2" rx="5"/>
              <text x="565" y="265" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#6A1B9A">UPDATE</text>
              <text x="565" y="282" textAnchor="middle" fontSize="9" fill="#333">UPDATE</text>
              <text x="565" y="295" textAnchor="middle" fontSize="9" fill="#333">productos SET</text>
              <text x="565" y="310" textAnchor="middle" fontSize="8" fill="#666">SQL UPDATE</text>
            </g>

            {/* Arrow Entity to UPDATE */}
            <line x1="400" y1="205" x2="510" y2="235" stroke="#7B1FA2" strokeWidth="2" markerEnd="url(#arrowhead-purple)"/>

            {/* DELETE - Bottom left */}
            <g>
              <rect x="80" y="245" width="110" height="80" fill="#FFEBEE" stroke="#D32F2F" strokeWidth="2" rx="5"/>
              <text x="135" y="265" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#C62828">DELETE</text>
              <text x="135" y="282" textAnchor="middle" fontSize="9" fill="#333">DELETE FROM</text>
              <text x="135" y="295" textAnchor="middle" fontSize="9" fill="#333">productos WHERE</text>
              <text x="135" y="310" textAnchor="middle" fontSize="8" fill="#666">SQL DELETE</text>
            </g>

            {/* Arrow UPDATE to DELETE (flow around) */}
            <path d="M 510 285 Q 350 330 190 285" fill="none" stroke="#333" strokeWidth="1.5" strokeDasharray="3,3" markerEnd="url(#arrowhead-gray)"/>

            {/* Arrow DELETE to CREATE (flow back) */}
            <path d="M 135 245 Q 135 155 135 120" fill="none" stroke="#333" strokeWidth="1.5" strokeDasharray="3,3" markerEnd="url(#arrowhead-gray)"/>

            {/* Examples */}
            <g>
              <text x="350" y="340" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#333">Ejemplo: Gestión de Productos</text>
              <text x="50" y="360" fontSize="9" fill="#666">CREATE: Agregar nuevo producto al catálogo</text>
              <text x="350" y="360" fontSize="9" fill="#666">READ: Ver detalles de un producto</text>
              <text x="600" y="360" fontSize="9" fill="#666">UPDATE: Cambiar precio | DELETE: Eliminar producto</text>
            </g>

            {/* Arrow marker definitions */}
            <defs>
              <marker id="arrowhead-green" markerWidth="10" markerHeight="10" refX="5" refY="5" orient="auto">
                <polygon points="0 0, 10 5, 0 10" fill="#388E3C" />
              </marker>
              <marker id="arrowhead-blue" markerWidth="10" markerHeight="10" refX="5" refY="5" orient="auto">
                <polygon points="0 0, 10 5, 0 10" fill="#1976D2" />
              </marker>
              <marker id="arrowhead-purple" markerWidth="10" markerHeight="10" refX="5" refY="5" orient="auto">
                <polygon points="0 0, 10 5, 0 10" fill="#7B1FA2" />
              </marker>
              <marker id="arrowhead-gray" markerWidth="10" markerHeight="10" refX="5" refY="5" orient="auto">
                <polygon points="0 0, 10 5, 0 10" fill="#333" />
              </marker>
            </defs>
          </svg>

          <h3>Creación de Tablas</h3>
          <p>
            Basándote en tu Modelo Entidad-Relación, creas tablas SQL. Cada entidad se convierte en tabla. Sus atributos se
            convierten en columnas. Defines tipos de datos correctamente: INT para números enteros, VARCHAR(255) para texto,
            DECIMAL(10,2) para dinero (nunca FLOAT para dinero; FLOAT tiene problemas de precisión). DATETIME para fechas.
            BOOLEAN para sí/no.
          </p>

          <p>
            Defines <strong>restricciones</strong>: PRIMARY KEY (identifica único), FOREIGN KEY (relaciona tablas), UNIQUE
            (no duplicados), NOT NULL (obligatorio). Por ejemplo, email en usuarios debe ser UNIQUE (no dos usuarios con
            mismo email). Contraseña debe NOT NULL.
          </p>

          <h3>Relaciones entre Tablas</h3>
          <p>
            Las <strong>relaciones</strong> conectan tablas. Una relación 1:N (uno a muchos) se implementa con FOREIGN KEY.
            Usuarios → Órdenes: cada Orden tiene usuario_id que referencia Usuarios.id. Una relación N:N (muchos a muchos)
            requiere tabla intermedia. Órdenes ↔ Productos: PedidoDetalle conecta ambas. Las relationships mantienen
            integridad referencial: no puedes crear Orden sin usuario válido, no puedes borrar Usuario si tiene Órdenes.
          </p>

          <h3>Migraciones de Base de Datos</h3>
          <p>
            La <strong>migración</strong> es el cambio de schema BD de una versión a otra. En desarrollo, cambias mucho: agregar
            columna, renombrar tabla, etc. Herramientas como Flyway o Liquibase administran esto. Cada migración es un archivo
            SQL numerado: V1__initial.sql, V2__add_user_email.sql. Permiten que todo el equipo mantenga BD en sincronía y
            facilitan deployment en producción.
          </p>

          <InfoBox type="info">
            <strong>Consejo:</strong> Crea un script de BD "limpio" que nuevos desarrolladores puedan ejecutar para empezar.
            Incluye todas las tablas, índices, y datos de prueba. Esto ahorra horas de configuración frustrada.
          </InfoBox>
        </>
      )
    }
  ];

      return (
    <>
      <LessonTemplate
        title="Base de Datos"
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