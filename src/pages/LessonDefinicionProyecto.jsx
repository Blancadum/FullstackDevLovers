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
            Una historia de usuario sigue este formato: <strong>"Como [TIPO DE USUARIO], quiero [ACCIÓN], para que
            [BENEFICIO]"</strong>. Veamos algunos ejemplos reales:
          </p>

          <p>
            <strong>Ejemplo 1 - Autenticación:</strong> "Como usuario, quiero registrarme con email y contraseña,
            para que pueda acceder al sistema y crear mi cuenta personal."
          </p>

          <p>
            <strong>Ejemplo 2 - Reportes:</strong> "Como administrador, quiero ver reportes de usuarios activos,
            para que pueda monitorear la salud de la plataforma y tomar decisiones basadas en datos."
          </p>

          <p>
            <strong>Ejemplo 3 - Gestión de Contenido:</strong> "Como vendedor, quiero cargar fotos de productos,
            para que los clientes puedan ver cómo se ven los artículos antes de comprarlos."
          </p>

          <h3>Requisitos Funcionales Típicos</h3>
          <p>
            Aunque cada proyecto es único, la mayoría de las aplicaciones web modernas comparten ciertos requisitos
            funcionales comunes. <strong>Autenticación</strong> es casi siempre necesario; usuarios deben poder registrarse
            y hacer login de forma segura. Las operaciones <strong>CRUD (Crear, Leer, Actualizar, Eliminar)</strong> son
            fundamentales para cualquier aplicación que gestione datos. La <strong>búsqueda y filtrado</strong> es crucial
            cuando hay muchos datos; sin esto, los usuarios se frustran.
          </p>

          <p>
            <strong>Reportes y estadísticas</strong> ayudan a los administradores a entender lo que está pasando en el
            sistema. Las <strong>notificaciones</strong> mantienen a los usuarios informados sobre eventos importantes.
            Finalmente, la capacidad de <strong>exportar datos</strong> (a Excel, PDF, etc.) es útil para análisis posterior.
          </p>
        </>
      )
    },

    {
      title: 'Requisitos No Funcionales',
      content: (
        <>
          <p>
            Los <strong>requisitos no funcionales</strong> son características de <strong>calidad</strong> que NO
            describen funcionalidad en sí, sino propiedades y atributos del sistema. Mientras que los requisitos
            funcionales responden "¿QUÉ hace el sistema?", los no funcionales responden "¿CÓMO debe comportarse?"
          </p>

          <h3>Rendimiento</h3>
          <p>
            El rendimiento es crítico para la experiencia del usuario. Las páginas deben cargar en <strong>menos de
            2 segundos</strong>, o los usuarios las abandonarán. Las APIs deben responder en <strong>menos de 500ms</strong>
            para no sentirse lentas. Si tu aplicación será popular, debe soportar <strong>10.000 usuarios simultáneos</strong>
            o más sin degradarse. Esto requiere optimizaciones en base de datos, caché, y arquitectura.
          </p>

          <h3>Seguridad</h3>
          <p>
            La seguridad protege a tus usuarios y su confianza. Las <strong>contraseñas deben encriptarse</strong> con
            algoritmos como bcrypt; nunca almacenar en texto plano. Todas las conexiones deben usar <strong>HTTPS</strong>
            para proteger datos en tránsito. Debes <strong>validar toda entrada</strong> para prevenir ataques como SQL
            injection y XSS. Los <strong>tokens JWT</strong> (para autenticación) deben expirar después de cierto tiempo,
            típicamente 1 hora, para limitar el daño si alguien los roba.
          </p>

          <h3>Disponibilidad</h3>
          <p>
            La disponibilidad mide cuánto tiempo tu aplicación está en línea y funcionando. Un objetivo común es
            <strong>99.9% uptime</strong>, lo que significa máximo 43 minutos de inactividad por mes. Para lograr esto,
            necesitas <strong>backups automáticos diarios</strong> para no perder datos, y planes de <strong>recuperación
            ante fallos en menos de 1 hora</strong>. Si el servidor cae a las 3 AM, debe estar de vuelta en línea antes
            de que la mayoría de usuarios se despierte.
          </p>

          <h3>Escalabilidad</h3>
          <p>
            La escalabilidad es la capacidad de crecer. Tu <strong>base de datos debe poder manejar hasta 1 millón de
            registros</strong> sin ralentizarse. Debes poder <strong>agregar más servidores horizontalmente</strong> cuando
            aumenta la demanda. Implementar <strong>caché</strong> (con Redis, por ejemplo) para datos frecuentes reduce
            la carga en base de datos significativamente.
          </p>

          <h3>Usabilidad</h3>
          <p>
            La usabilidad se trata de qué tan fácil es usar la aplicación. Una <strong>interfaz intuitiva</strong> no
            requiere entrenamiento; los usuarios entienden cómo usarla simplemente explorando. La aplicación debe ser
            <strong>compatible con móviles</strong> y tablets, no solo desktop. Finalmente, debe ser <strong>accesible
            para usuarios con discapacidades</strong>, siguiendo estándares como WCAG 2.1, para incluir a todos.
          </p>
        </>
      )
    },

    {
      title: 'Arquitectura del Sistema',
      content: (
        <>
          <p>
            La <strong>arquitectura</strong> define cómo se estructura tu aplicación. Una buena arquitectura separa
            responsabilidades, facilita el testing, y permite que múltiples desarrolladores trabajen sin conflictos.
          </p>

          <h3>Arquitectura en Capas</h3>
          <p>
            La arquitectura en capas es la más común para aplicaciones web backend. Imagina tu aplicación como un edificio
            de 5 pisos, donde cada piso tiene responsabilidades específicas. En la parte superior está la <strong>Presentation
            Layer (Frontend)</strong>, que es lo que el usuario ve (HTML, CSS, JavaScript). Cuando el usuario hace algo,
            envía una petición HTTP.
          </p>

          <p>
            Esa petición llega a la <strong>API Layer (Controllers)</strong>, que es como la recepción del edificio. El
            Controller recibe el request, valida que sea correcto, y decide a quién pasárselo. Luego pasa a la <strong>Business
            Logic (Services)</strong>, que es donde ocurre la "magia". El Service contiene la lógica de negocio: ¿Es válido
            este usuario? ¿Tiene permiso? ¿Qué cálculos debo hacer?
          </p>

          <p>
            Después, el Service llama al <strong>Data Access Layer (Repositories)</strong>, que es especialista en hablar con
            la base de datos. El Repository ejecuta queries SQL y retorna datos. Finalmente, en el sótano está la
            <strong>Database Layer</strong> (MySQL, PostgreSQL), donde se almacenan todos los datos.
          </p>

          <h3>Patrón MVC</h3>
          <p>
            MVC son las siglas de Model-View-Controller, y es fundamental en desarrollo backend. El <strong>Model</strong>
            representa tus datos (Usuario, Producto, Pedido). El <strong>View</strong> es cómo presentas esos datos
            (JSON en APIs REST, HTML en aplicaciones clásicas). El <strong>Controller</strong> es el orquestador que recibe
            requests, consulta Models mediante Services, y retorna Views.
          </p>

          <h3>Flujo Completo de una Petición</h3>
          <p>
            Veamos cómo funciona todo junto. Imagina que un usuario hace clic en "Ver Productos" en tu aplicación e-commerce.
            El navegador hace una petición GET a <code>/api/productos</code>. El <strong>ProductController</strong> recibe esa
            petición. El Controller llama al <strong>ProductService</strong> para obtener los productos. El Service llama al
            <strong>ProductRepository</strong>, que ejecuta una query SQL como <code>SELECT * FROM productos</code>. La base de
            datos retorna los productos. El Repository los devuelve al Service, el Service al Controller, y el Controller
            responde con JSON retornando un array de objetos con propiedades id, nombre, precio. El frontend recibe ese
            JSON y renderiza los productos en la pantalla.
          </p>
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

  const summary = `La planificación es el 50% del éxito:

• Define proyecto: qué, para quién, por qué, alcance
• Requisitos funcionales: historias de usuario
• Requisitos no funcionales: rendimiento, seguridad, escalabilidad
• Arquitectura en capas: separación de responsabilidades
• Diseño BD: entidades, relaciones, PK/FK
• MVC: Model, View, Controller
• Diagrama: visualiza estructura antes de codificar
• Buena planificación ahorra tiempo de desarrollo
• Documentación clara facilita onboarding
• Proyecto exitoso = planificación + ejecución`;

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