import { LessonTemplate, CodeBlock, InfoBox } from '../components';
import { LessonNavigation } from '../components/LessonNavigation';
import { useBreadcrumb } from '../hooks/useBreadcrumb';
import { useLessonNavigation } from '../hooks/useLessonNavigation';

export function LessonDefinicionProyecto() {
  const breadcrumbs = useBreadcrumb();
  const nav = useLessonNavigation();

  const concepts = [
    {
      icon: '🎯',
      title: 'Proyecto Integrador',
      definition: 'Aplicación completa que integra todos los conocimientos de Java Backend',
      example: 'Sistema de gestión de tienda, biblioteca, red social, etc.'
    },
    {
      icon: '📋',
      title: 'Requisitos Funcionales',
      definition: 'Funcionalidades que el sistema debe realizar',
      example: 'Usuarios pueden crear cuentas, hacer compras, ver historial'
    },
    {
      icon: '⚙️',
      title: 'Requisitos No Funcionales',
      definition: 'Atributos de calidad: rendimiento, seguridad, escalabilidad',
      example: 'Sistema debe soportar 10.000 usuarios simultáneos'
    },
    {
      icon: '🏗️',
      title: 'Arquitectura',
      definition: 'Estructura general del sistema y componentes principales',
      example: 'Patrón MVC, capas: Controller, Service, Repository, Model'
    },
  ];

  const exercises = [
    {
      title: 'REPTE 1: Especificación del Proyecto',
      description: 'Propuesta individual de proyecto web. Define: nombre, tipo de negocio, análisis de competencia, funcionalidades, viabilidad económica y conformidad GDPR.',
      solution: `REPTE 1 - Project Planning (Individual) | Deadline: 08/10/2025
PUNTUACIÓN TOTAL: 9 puntos

1. Nombre y Características del Proyecto (1 punto)
   - Nombre del proyecto
   - Por qué elegiste este proyecto

2. Tipo de Empresa y Perfil Público (1 punto)
   - Perfil de usuarios objetivo
   - Sector de negocio
   - Tipo de mercado

3. Análisis de Competencia (2 puntos)
   - Mínimo 3 competidores
   - Fortalezas vs competencia
   - Debilidades vs competencia

4. Funcionalidades del Proyecto (2 puntos)
   - Lista de funcionalidades
   - Horas estimadas por funcionalidad
   - Ejemplo: Homepage, login, admin, venta productos

5. Viabilidad Económica (1.5 puntos)
   - Presupuesto aproximado total
   - Costos: hardware, software/licencias, hosting, RRHH
   - Tabla: Hardware/Software/Recurso | Tarea | Cantidad | Costo unitario | Total

6. Protección de Datos (1.5 puntos)
   - Medidas de protección de datos personales
   - Almacenamiento seguro y encriptación
   - Cumplimiento GDPR

7. Innovación y Aplicación Real (1 punto)
   - Elementos innovadores del proyecto
   - Aplicación real del proyecto

FORMATO DE ENTREGA:
Archivo: ODT o PDF
Nombre: DAW_M0616_Repte1_Apellido1_InicialApellido2.odt
Ejemplo: DAW_M0616_Repte1_Lujan_S.odt

PROYECTO EJEMPLO: PONPAPERConnect
- Plataforma moderna para empresa de señalética
- Incluye: Catálogo personalizado, simulador, cotizaciones
- Panel de administración interno`
    }
  ];

  const sections = [
    {
      title: 'Fase 1: Planificación y Análisis',
      content: (
        <>
          <p>
            Antes de escribir código, planifica todo. Esta fase incluye definir qué construirás,
            para quién es, y cómo funcionará.
          </p>
          <h3>Pasos:</h3>
          <ol>
            <li><strong>Definir el proyecto:</strong> tema, dominio, objetivo</li>
            <li><strong>Identificar usuarios:</strong> quiénes usarán el sistema</li>
            <li><strong>Listar requisitos:</strong> qué debe hacer</li>
            <li><strong>Diseñar arquitectura:</strong> cómo está organizado</li>
            <li><strong>Crear diagrama:</strong> modelo entidad-relación (BD)</li>
          </ol>

          <InfoBox type="info">
            En proyectos reales, esta fase es crítica. Una planificación mala = desarrollo caótico.
          </InfoBox>
        </>
      )
    },

    {
      title: 'Definir el Proyecto',
      content: (
        <>
          <p>
            La <strong>definición del proyecto</strong> es el primer paso fundamental en la planificación.
            Necesitas responder claramente qué es lo que vas a construir, para quién es, y por qué existe.
            Esta claridad evita confusiones posteriormente y mantiene el equipo alineado.
          </p>

          <h3>¿QUÉ vas a construir?</h3>
          <p>
            Describe tu proyecto de manera concisa y específica. Por ejemplo, si tu idea es un "Sistema de
            gestión de tareas colaborativo", necesitas entender exactamente qué significa eso. Es una aplicación
            donde los equipos de trabajo pueden crear, asignar y seguir el progreso de tareas en tiempo real,
            facilitando la colaboración y evitando que los compromisos se pierdan en conversaciones.
          </p>

          <h3>¿PARA QUIÉN es tu proyecto?</h3>
          <p>
            <strong>Identifica tus usuarios objetivo.</strong> ¿A quién sirve? En el caso del sistema de tareas,
            serían equipos de trabajo: startups, agencias creativas, departamentos de empresas grandes que necesitan
            organizarse mejor. Entender a quién sirves te ayuda a diseñar funcionalidades que realmente resolverán
            sus necesidades. No todos los usuarios tienen las mismas expectativas, así que ser específico es crucial.
          </p>

          <h3>¿POR QUÉ existe tu proyecto?</h3>
          <p>
            <strong>Define el problema que resuelves.</strong> ¿Qué dolor experimenta tu usuario actualmente?
            Tal vez los equipos están usando spreadsheets desorganizados, o pierden tareas importantes en conversaciones
            de chat. Tu sistema resolvería eso proporcionando un lugar centralizado y organizado para gestionar todo
            el trabajo. Este "por qué" es tu misión, y debe ser claro para motivar el desarrollo.
          </p>

          <h3>¿CUÁL ES EL ALCANCE?</h3>
          <p>
            <strong>Define qué incluye y qué NO incluye tu proyecto.</strong> El alcance evita "scope creep" (expansión
            incontrolada de requisitos). Por ejemplo, tu sistema podría incluir: crear tareas, editarlas, asignarlas
            a miembros del equipo, agregar comentarios, y cambiar su estado. Pero NO incluiría: videollamadas integradas,
            chatbot con IA, o integración con redes sociales. Estas decisiones mantendrán el proyecto manejable.
          </p>

          <h3>¿CUÁL ES EL TIMELINE?</h3>
          <p>
            <strong>Estima cuándo estará listo.</strong> Un proyecto típico de curso podría estar listo en 3-4 meses
            de desarrollo activo. Esto ayuda a establecer expectativas realistas y priorizar funcionalidades. Si sólo
            tienes 3 meses, no puedes implementar 50 características; debes enfocarte en lo más importante.
          </p>
        </>
      )
    },

    {
      title: 'Requisitos Funcionales',
      content: (
        <>
          <p>
            Los <strong>requisitos funcionales</strong> son acciones específicas que el sistema debe realizar.
            Definen "QUÉ" hace la aplicación, no cómo lo hace. La mejor manera de especificar requisitos funcionales
            es escribirlos como <strong>historias de usuario</strong>, que mantienen la perspectiva del usuario en
            el centro de la funcionalidad.
          </p>

          <h3>Formato de Historias de Usuario</h3>
          <p>
            Una historia de usuario sigue este formato simple: <strong>"Como [TIPO DE USUARIO], quiero [ACCIÓN], para que [BENEFICIO]"</strong>
          </p>

          <p style={{ marginTop: '1.5rem' }}>
            <strong>Ejemplo 1 — Autenticación:</strong> Como usuario, quiero registrarme con email y contraseña, para que pueda acceder al sistema y crear mi cuenta personal.
          </p>

          <p>
            <strong>Ejemplo 2 — Reportes:</strong> Como administrador, quiero ver reportes de usuarios activos, para que pueda monitorear la salud de la plataforma y tomar decisiones basadas en datos.
          </p>

          <p>
            <strong>Ejemplo 3 — Gestión de Contenido:</strong> Como vendedor, quiero cargar fotos de productos, para que los clientes puedan ver cómo se ven los artículos antes de comprarlos.
          </p>

          <h3>Requisitos Funcionales Comunes</h3>
          <p>
            Aunque cada proyecto es único, la mayoría de las aplicaciones web modernas comparten ciertos requisitos funcionales. <strong>Autenticación</strong> es fundamental — usuarios deben poder registrarse y hacer login de forma segura. Las operaciones <strong>CRUD (Crear, Leer, Actualizar, Eliminar)</strong> son la base de cualquier aplicación que gestione datos.
          </p>

          <p>
            La <strong>búsqueda y filtrado</strong> es crucial cuando hay muchos datos; sin esto, los usuarios se frustran intentando encontrar lo que necesitan. <strong>Reportes y estadísticas</strong> ayudan a los administradores a entender lo que está pasando en el sistema. Las <strong>notificaciones</strong> mantienen a los usuarios informados sobre eventos importantes. Finalmente, la capacidad de <strong>exportar datos</strong> (a Excel, PDF, etc.) es útil para análisis posterior y tomas de decisiones.
          </p>
        </>
      )
    },

    {
      title: 'Requisitos No Funcionales',
      content: (
        <>
          <p>
            Los <strong>requisitos no funcionales</strong> son características de <strong>calidad</strong> que NO describen funcionalidad en sí, sino propiedades del sistema. Mientras que los requisitos funcionales responden "¿QUÉ hace el sistema?", los no funcionales responden "¿CÓMO debe comportarse?".
          </p>

          <h3>Rendimiento</h3>
          <p>
            El rendimiento es crítico para la experiencia del usuario. Las páginas deben cargar en menos de 2 segundos, o los usuarios las abandonarán. Las APIs deben responder en menos de 500ms para no sentirse lentas. Si tu aplicación será popular, debe soportar 10.000 usuarios simultáneos o más sin degradarse. Esto requiere optimizaciones en base de datos, caché y arquitectura bien planificada.
          </p>

          <h3>Seguridad</h3>
          <p>
            La seguridad protege a tus usuarios y su confianza. Las contraseñas deben encriptarse con algoritmos como bcrypt; nunca almacenarlas en texto plano. Todas las conexiones deben usar HTTPS para proteger datos en tránsito. Debes validar toda entrada para prevenir ataques como SQL injection y XSS. Los tokens JWT (para autenticación) deben expirar después de cierto tiempo, típicamente 1 hora, para limitar el daño si alguien los roba.
          </p>

          <h3>Disponibilidad</h3>
          <p>
            La disponibilidad mide cuánto tiempo tu aplicación está en línea y funcionando. Un objetivo común es 99.9% uptime, lo que significa máximo 43 minutos de inactividad por mes. Para lograr esto, necesitas backups automáticos diarios para no perder datos, y planes de recuperación ante fallos en menos de 1 hora. Si el servidor cae a las 3 AM, debe estar de vuelta en línea antes de que la mayoría de usuarios se despierte.
          </p>

          <h3>Escalabilidad</h3>
          <p>
            La escalabilidad es la capacidad de crecer. Tu base de datos debe poder manejar hasta 1 millón de registros sin ralentizarse. Debes poder agregar más servidores horizontalmente cuando aumenta la demanda. Implementar caché (con Redis, por ejemplo) para datos frecuentes reduce la carga en base de datos significativamente, mejorando velocidad y experiencia.
          </p>

          <h3>Usabilidad</h3>
          <p>
            La usabilidad se trata de qué tan fácil es usar la aplicación. Una interfaz intuitiva no requiere entrenamiento; los usuarios entienden cómo usarla simplemente explorando. La aplicación debe ser compatible con móviles y tablets, no solo desktop. Finalmente, debe ser accesible para usuarios con discapacidades, siguiendo estándares como WCAG 2.1, para incluir a todos en tu plataforma.
          </p>
        </>
      )
    },

    {
      title: 'Arquitectura del Sistema',
      content: (
        <>
          <p>
            La <strong>arquitectura</strong> define cómo se estructura tu aplicación. Una buena arquitectura separa responsabilidades, facilita el testing, y permite que múltiples desarrolladores trabajen sin conflictos. La arquitectura en capas es la más común para aplicaciones web backend y es la recomendada para este curso.
          </p>

          <h3>Arquitectura en Capas</h3>
          <p>
            Imagina tu aplicación como un edificio de 5 pisos, donde cada piso tiene responsabilidades específicas. En la parte superior está la <strong>Presentation Layer (Frontend)</strong>, que es lo que el usuario ve: HTML, CSS, JavaScript. Cuando el usuario hace algo, envía una petición HTTP que viaja hacia abajo a través de las capas.
          </p>

          <p>
            Esa petición llega a la <strong>API Layer (Controllers)</strong>, que es como la recepción del edificio. El Controller recibe el request, valida que sea correcto, y decide a quién pasárselo. Luego pasa a la <strong>Business Logic (Services)</strong>, que es donde ocurre la "magia". El Service contiene la lógica de negocio: ¿es válido este usuario? ¿tiene permiso? ¿qué cálculos debo hacer?
          </p>

          <p>
            Después, el Service llama al <strong>Data Access Layer (Repositories)</strong>, que es especialista en hablar con la base de datos. El Repository ejecuta queries SQL y retorna datos. Finalmente, en el sótano está la <strong>Database Layer</strong> (MySQL, PostgreSQL), donde se almacenan todos los datos. Esta separación en capas hace que cada componente sea independiente y fácil de mantener.
          </p>

          <svg viewBox="0 0 500 450" style={{ width: '100%', maxWidth: '500px', margin: '2rem auto', border: '1px solid #ddd', borderRadius: '8px', backgroundColor: '#f9f9f9' }}>
            {/* Presentation Layer */}
            <rect x="20" y="20" width="460" height="70" fill="#E3F2FD" stroke="#1976D2" strokeWidth="2" rx="5"/>
            <text x="250" y="40" textAnchor="middle" fontSize="16" fontWeight="bold" fill="#1565C0">Presentation Layer (Frontend)</text>
            <text x="250" y="60" textAnchor="middle" fontSize="12" fill="#555">HTML, CSS, JavaScript, React</text>
            <text x="250" y="77" textAnchor="middle" fontSize="11" fill="#777">Lo que el usuario ve</text>

            {/* Arrow */}
            <line x1="250" y1="90" x2="250" y2="110" stroke="#999" strokeWidth="2" markerEnd="url(#arrowhead)"/>
            <text x="270" y="105" fontSize="11" fill="#999">HTTP/JSON</text>

            {/* API Layer */}
            <rect x="20" y="110" width="460" height="70" fill="#F3E5F5" stroke="#7B1FA2" strokeWidth="2" rx="5"/>
            <text x="250" y="130" textAnchor="middle" fontSize="16" fontWeight="bold" fill="#6A1B9A">API Layer (Controllers)</text>
            <text x="250" y="150" textAnchor="middle" fontSize="12" fill="#555">@RestController, REST endpoints</text>
            <text x="250" y="167" textAnchor="middle" fontSize="11" fill="#777">Recibe requests HTTP</text>

            {/* Arrow */}
            <line x1="250" y1="180" x2="250" y2="200" stroke="#999" strokeWidth="2" markerEnd="url(#arrowhead)"/>

            {/* Business Logic Layer */}
            <rect x="20" y="200" width="460" height="70" fill="#E8F5E9" stroke="#388E3C" strokeWidth="2" rx="5"/>
            <text x="250" y="220" textAnchor="middle" fontSize="16" fontWeight="bold" fill="#2E7D32">Business Logic (Services)</text>
            <text x="250" y="240" textAnchor="middle" fontSize="12" fill="#555">@Service, lógica de negocio</text>
            <text x="250" y="257" textAnchor="middle" fontSize="11" fill="#777">Validación, cálculos, reglas</text>

            {/* Arrow */}
            <line x1="250" y1="270" x2="250" y2="290" stroke="#999" strokeWidth="2" markerEnd="url(#arrowhead)"/>

            {/* Data Access Layer */}
            <rect x="20" y="290" width="460" height="70" fill="#FFF3E0" stroke="#F57C00" strokeWidth="2" rx="5"/>
            <text x="250" y="310" textAnchor="middle" fontSize="16" fontWeight="bold" fill="#E65100">Data Access Layer (Repositories)</text>
            <text x="250" y="330" textAnchor="middle" fontSize="12" fill="#555">@Repository, JPA, SQL queries</text>
            <text x="250" y="347" textAnchor="middle" fontSize="11" fill="#777">Habla con la base de datos</text>

            {/* Arrow */}
            <line x1="250" y1="360" x2="250" y2="380" stroke="#999" strokeWidth="2" markerEnd="url(#arrowhead)"/>
            <text x="270" y="375" fontSize="11" fill="#999">SQL</text>

            {/* Database Layer */}
            <rect x="20" y="380" width="460" height="60" fill="#FFEBEE" stroke="#D32F2F" strokeWidth="2" rx="5"/>
            <text x="250" y="400" textAnchor="middle" fontSize="16" fontWeight="bold" fill="#C62828">Database Layer</text>
            <text x="250" y="420" textAnchor="middle" fontSize="12" fill="#555">MySQL, PostgreSQL</text>

            {/* Arrow marker definition */}
            <defs>
              <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="5" refY="5" orient="auto">
                <polygon points="0 0, 10 5, 0 10" fill="#999" />
              </marker>
            </defs>
          </svg>

          <h3>Patrón MVC: Model, View, Controller</h3>
          <p>
            MVC es fundamental en desarrollo backend. El <strong>Model</strong> representa tus datos — las entidades Java como Usuario, Producto, Pedido. El <strong>View</strong> es cómo presentas esos datos — JSON en APIs REST o HTML en aplicaciones clásicas. El <strong>Controller</strong> es el orquestador que recibe requests HTTP, consulta los Models mediante Services, procesa la lógica, y retorna Views al cliente.
          </p>

          <h3>Flujo Completo de una Petición</h3>
          <p>
            Veamos cómo funciona todo junto con un ejemplo real. Imagina que un usuario hace clic en "Ver Productos" en tu aplicación e-commerce. El navegador hace una petición GET a <code>/api/productos</code>. El ProductController recibe esa petición HTTP. El Controller llama al ProductService para obtener los productos. El Service llama al ProductRepository, que ejecuta una query SQL como <code>SELECT * FROM productos</code>. La base de datos retorna los datos de productos. El Repository los devuelve al Service, el Service al Controller, y el Controller responde con JSON retornando un array de objetos con propiedades como id, nombre, precio. El frontend recibe ese JSON y renderiza los productos en la pantalla para que el usuario los vea.
          </p>

          <svg viewBox="0 0 600 500" style={{ width: '100%', maxWidth: '600px', margin: '2rem auto', border: '1px solid #ddd', borderRadius: '8px', backgroundColor: '#f9f9f9' }}>
            {/* Step 1: Frontend */}
            <rect x="30" y="20" width="140" height="60" fill="#E3F2FD" stroke="#1976D2" strokeWidth="2" rx="5"/>
            <text x="100" y="40" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#1565C0">Frontend</text>
            <text x="100" y="58" textAnchor="middle" fontSize="11" fill="#555">Usuario hace clic</text>

            {/* Arrow 1 */}
            <line x1="170" y1="50" x2="220" y2="50" stroke="#1976D2" strokeWidth="2" markerEnd="url(#arrow-blue)"/>
            <text x="195" y="35" textAnchor="middle" fontSize="10" fill="#1976D2" fontWeight="bold">1</text>

            {/* Step 2: Controller */}
            <rect x="220" y="20" width="140" height="60" fill="#F3E5F5" stroke="#7B1FA2" strokeWidth="2" rx="5"/>
            <text x="290" y="40" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#6A1B9A">Controller</text>
            <text x="290" y="58" textAnchor="middle" fontSize="11" fill="#555">GET /api/productos</text>

            {/* Arrow 2 */}
            <line x1="360" y1="50" x2="410" y2="50" stroke="#7B1FA2" strokeWidth="2" markerEnd="url(#arrow-purple)"/>
            <text x="385" y="35" textAnchor="middle" fontSize="10" fill="#7B1FA2" fontWeight="bold">2</text>

            {/* Step 3: Service */}
            <rect x="410" y="20" width="140" height="60" fill="#E8F5E9" stroke="#388E3C" strokeWidth="2" rx="5"/>
            <text x="480" y="40" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#2E7D32">Service</text>
            <text x="480" y="58" textAnchor="middle" fontSize="11" fill="#555">Lógica de negocio</text>

            {/* Arrow 3: down */}
            <line x1="480" y1="80" x2="480" y2="130" stroke="#388E3C" strokeWidth="2" markerEnd="url(#arrow-green)"/>
            <text x="495" y="110" fontSize="10" fill="#388E3C" fontWeight="bold">3</text>

            {/* Step 4: Repository */}
            <rect x="410" y="130" width="140" height="60" fill="#FFF3E0" stroke="#F57C00" strokeWidth="2" rx="5"/>
            <text x="480" y="150" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#E65100">Repository</text>
            <text x="480" y="168" textAnchor="middle" fontSize="11" fill="#555">SQL Query</text>

            {/* Arrow 4: down */}
            <line x1="480" y1="190" x2="480" y2="240" stroke="#F57C00" strokeWidth="2" markerEnd="url(#arrow-orange)"/>
            <text x="495" y="220" fontSize="10" fill="#F57C00" fontWeight="bold">4</text>

            {/* Step 5: Database */}
            <rect x="410" y="240" width="140" height="60" fill="#FFEBEE" stroke="#D32F2F" strokeWidth="2" rx="5"/>
            <text x="480" y="260" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#C62828">Database</text>
            <text x="480" y="278" textAnchor="middle" fontSize="11" fill="#555">Retorna datos</text>

            {/* Return arrow: up right */}
            <line x1="410" y1="270" x2="360" y2="270" stroke="#D32F2F" strokeWidth="2" markerEnd="url(#arrow-red)"/>
            <text x="385" y="255" fontSize="10" fill="#D32F2F" fontWeight="bold">5</text>

            {/* Step 6: Response */}
            <rect x="220" y="240" width="140" height="60" fill="#E0F2F1" stroke="#00897B" strokeWidth="2" rx="5"/>
            <text x="290" y="260" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#00695C">Response</text>
            <text x="290" y="278" textAnchor="middle" fontSize="11" fill="#555">JSON Array</text>

            {/* Return arrow: up left */}
            <line x1="220" y1="270" x2="170" y2="270" stroke="#00897B" strokeWidth="2" markerEnd="url(#arrow-teal)"/>
            <text x="195" y="255" fontSize="10" fill="#00897B" fontWeight="bold">6</text>

            {/* Step 7: Render */}
            <rect x="30" y="240" width="140" height="60" fill="#FCE4EC" stroke="#C2185B" strokeWidth="2" rx="5"/>
            <text x="100" y="260" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#A91751">Render</text>
            <text x="100" y="278" textAnchor="middle" fontSize="11" fill="#555">Muestra productos</text>

            {/* Title and legend */}
            <text x="300" y="380" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#333">Ciclo completo de una petición</text>

            <text x="50" y="420" fontSize="11" fill="#555">Usuario → Frontend → Controller → Service → Repository → Database</text>
            <text x="50" y="440" fontSize="11" fill="#555">Database → Repository → Service → Controller → Response → Frontend → Usuario ve datos</text>

            {/* Arrow marker definitions */}
            <defs>
              <marker id="arrow-blue" markerWidth="10" markerHeight="10" refX="5" refY="5" orient="auto">
                <polygon points="0 0, 10 5, 0 10" fill="#1976D2" />
              </marker>
              <marker id="arrow-purple" markerWidth="10" markerHeight="10" refX="5" refY="5" orient="auto">
                <polygon points="0 0, 10 5, 0 10" fill="#7B1FA2" />
              </marker>
              <marker id="arrow-green" markerWidth="10" markerHeight="10" refX="5" refY="5" orient="auto">
                <polygon points="0 0, 10 5, 0 10" fill="#388E3C" />
              </marker>
              <marker id="arrow-orange" markerWidth="10" markerHeight="10" refX="5" refY="5" orient="auto">
                <polygon points="0 0, 10 5, 0 10" fill="#F57C00" />
              </marker>
              <marker id="arrow-red" markerWidth="10" markerHeight="10" refX="5" refY="5" orient="auto">
                <polygon points="0 0, 10 5, 0 10" fill="#D32F2F" />
              </marker>
              <marker id="arrow-teal" markerWidth="10" markerHeight="10" refX="5" refY="5" orient="auto">
                <polygon points="0 0, 10 5, 0 10" fill="#00897B" />
              </marker>
            </defs>
          </svg>
        </>
      )
    },

    {
      title: 'Modelo Entidad-Relación (BD)',
      content: (
        <>
          <p>
            Antes de crear la base de datos, necesitas diseñar cómo se relacionan tus datos. Esto se hace con un
            <strong>Modelo Entidad-Relación (MER)</strong>, que es como un plano de construcción para tu base de datos.
          </p>

          <h3>Concepto de Entidades</h3>
          <p>
            Una <strong>entidad</strong> es una "cosa" que quieres guardar información sobre. En un e-commerce, tus entidades
            serían: Usuarios, Productos, Pedidos, Categorías, etc. Cada entidad tiene <strong>atributos</strong> (o columnas).
            Por ejemplo, la entidad Usuario tendría: id, nombre, email, contraseña, fecha_registro.
          </p>

          <h3>Claves Primarias y Foráneas</h3>
          <p>
            La <strong>clave primaria (PK)</strong> identifica únicamente cada registro. El id de un Usuario es su clave
            primaria; no hay dos usuarios con el mismo id. La <strong>clave foránea (FK)</strong> crea relaciones entre
            tablas. Por ejemplo, cada Pedido tiene un usuario_id que referencia a la tabla Usuarios. Esto indica que ese
            Pedido pertenece a ese Usuario específico.
          </p>

          <h3>Tipos de Relaciones</h3>
          <p>
            Existen tres tipos principales de relaciones. Una relación <strong>1:N (uno a muchos)</strong> significa que
            un Usuario puede tener muchos Pedidos, pero cada Pedido pertenece a un solo Usuario. Una relación <strong>N:N
            (muchos a muchos)</strong> es más compleja; un Producto puede estar en muchos Pedidos, y un Pedido contiene muchos
            Productos. Para modelar esto, se crea una tabla intermedia llamada PedidoDetalle que conecta ambas.
          </p>

          <h3>Ejemplo: E-commerce</h3>
          <p>
            En un sistema de tienda online típico, empiezas con Usuarios que se registran. Cada Usuario puede hacer muchos
            Pedidos en el tiempo. Cada Pedido referencia a un Usuario (clave foránea). Después, necesitas almacenar qué
            Productos fueron comprados en cada Pedido. Como un Pedido puede contener múltiples Productos, y un Producto
            puede estar en múltiples Pedidos, necesitas una tabla intermedia PedidoDetalle. Finalmente, los Productos
            pertenecen a Categorías (1:N), así que cada Producto tiene una categoría_id.
          </p>

          <p>
            Diseñar esto bien desde el inicio evita problemas costosos más tarde. Una mala estructura de datos complica
            queries, ralentiza la aplicación, y hace mantenimiento un pesadilla.
          </p>
        </>
      )
    },
  ];

  const keyPoints = [
    'Fase de planificación es crítica antes de codificar',
    'Define requisitos funcionales (qué hace)',
    'Define requisitos no funcionales (cómo es)',
    'Histórias de usuario: "Como X, quiero Y, para que Z"',
    'Arquitectura en capas: Presentation, API, Business, Data, Database',
    'Diagrama Entidad-Relación define estructura de datos',
    'MVC separa responsabilidades: Model, View, Controller',
    'PK (Primary Key) identifica únicas filas',
    'FK (Foreign Key) relaciona tablas',
    'Buena planificación = código limpio y mantenible'
  ];

  const summary = `La planificación es el 50% del éxito de cualquier proyecto. Comienza definiendo claramente tu proyecto: qué es, para quién es, por qué existe y cuál es su alcance. Define tus requisitos funcionales usando historias de usuario que mantengan la perspectiva del usuario. Especifica los requisitos no funcionales: rendimiento, seguridad, escalabilidad y disponibilidad que tu sistema debe cumplir.

Diseña una arquitectura en capas que separe claramente las responsabilidades entre presentación, APIs, lógica de negocio, acceso a datos y base de datos. Crea un modelo entidad-relación que visualice tus entidades, atributos y relaciones (PK/FK). Aplica el patrón MVC para organizar tu código: Models para datos, Views para respuestas, Controllers para orquestar.

Una buena planificación y documentación clara facilitan el onboarding de nuevos desarrolladores y acelera el desarrollo. Un proyecto exitoso es la combinación de planificación sólida y ejecución disciplinada.`;

      return (
    <>
      <LessonTemplate
        breadcrumbs={breadcrumbs}
        concepts={concepts}
        exercises={exercises}
        keyPoints={keyPoints}
        sections={sections}
        summary={summary}
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