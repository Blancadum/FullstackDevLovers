import { LessonTemplate, CodeBlock, InfoBox, Table } from '../components';
import { LessonNavigation } from '../components/LessonNavigation';
import { useBreadcrumb } from '../hooks/useBreadcrumb';
import { useLessonNavigation } from '../hooks/useLessonNavigation';

export function LessonProyectoRequisitos() {
  const breadcrumbs = useBreadcrumb();
  const nav = useLessonNavigation();

  const concepts = [
    {
      icon: '📋',
      title: 'Requisitos Funcionales',
      definition: 'Acciones y características específicas que el sistema debe realizar',
      example: 'Usuario puede registrarse, buscar productos, agregar al carrito'
    },
    {
      icon: '⚙️',
      title: 'Requisitos No Funcionales',
      definition: 'Características de calidad: rendimiento, seguridad, escalabilidad',
      example: 'API responde en <500ms, soporta 1000 usuarios simultáneos'
    },
    {
      icon: '👤',
      title: 'Historias de Usuario',
      definition: 'Descripción de una funcionalidad desde perspectiva del usuario',
      example: 'Como cliente, quiero buscar productos por categoría para encontrar lo que necesito'
    },
    {
      icon: '✅',
      title: 'Criterios de Aceptación',
      definition: 'Condiciones que una historia de usuario debe cumplir para estar completa',
      example: 'La búsqueda muestra resultados en <2 segundos, se puede filtrar por precio'
    },
  ];

  const exercises = [
    {
      title: 'Escribir historias de usuario',
      description: 'Crea 5 historias de usuario para tu proyecto',
      solution: `FORMATO: "Como [TIPO DE USUARIO], quiero [ACCIÓN], para que [BENEFICIO]"

EJEMPLO 1 - Autenticación:
Como cliente nuevo, quiero registrarme con email y contraseña,
para que pueda acceder a mi cuenta y ver mi historial de compras.

Criterios de aceptación:
✓ Email debe ser válido y único
✓ Contraseña debe tener mínimo 8 caracteres
✓ Recibir confirmación por email
✓ Poder hacer login inmediatamente después

EJEMPLO 2 - Catálogo de Productos:
Como comprador, quiero ver un catálogo de productos con imágenes, precios y descripciones,
para que pueda decidir qué comprar.

Criterios de aceptación:
✓ Mostrar nombre, imagen, precio, descripción
✓ Paginación cada 12 productos
✓ Cargar en <2 segundos
✓ Responsive en móvil, tablet, desktop

EJEMPLO 3 - Carrito de Compras:
Como cliente, quiero agregar productos al carrito y ver el total,
para que pueda hacer seguimiento de mi compra.

Criterios de aceptación:
✓ Sumar cantidades automáticamente
✓ Recalcular total en tiempo real
✓ Permitir cambiar cantidades o eliminar items
✓ Persistir carrito si actualizo la página`
    }
  ];

  const sections = [
    {
      title: 'Definir Requisitos Funcionales',
      content: (
        <>
          <p>
            Los requisitos funcionales definen <strong>QUÉ hace</strong> el sistema. Son acciones concretas que
            los usuarios pueden realizar. Se escriben como <strong>historias de usuario</strong> para mantener
            perspectiva del usuario.
          </p>

          <h3>Estructura de una Historia de Usuario</h3>
          <p>
            Una historia de usuario sigue una estructura estándar: <strong>"Como [ACTOR/ROL], quiero [ACCIÓN], para que
            [BENEFICIO]"</strong>. Cada parte tiene un propósito específico. La parte <strong>"Como"</strong> identifica
            quién usa el sistema: ¿es un cliente normal, un administrador, un vendedor? La parte <strong>"quiero"</strong>
            describe la acción específica que desea realizar: buscar, comprar, crear, editar, eliminar. La parte <strong>"para
            que"</strong> explica el beneficio o el por qué: ahorrar tiempo, obtener información, mejorar la experiencia.
          </p>

          <p>
            <strong>Ejemplo 1 - Búsqueda:</strong> "Como usuario, quiero buscar libros por título, para que encuentre
            rápidamente lo que busco sin scrollear por miles de libros."
          </p>

          <p>
            <strong>Ejemplo 2 - Reportes:</strong> "Como administrador, quiero ver reportes de ventas por período, para que
            pueda monitorear el desempeño del negocio y tomar decisiones estratégicas."
          </p>

          <p>
            <strong>Ejemplo 3 - Inventario:</strong> "Como vendedor, quiero actualizar el stock de productos desde un panel,
            para que los clientes siempre vean disponibilidad correcta y no compren productos sin stock."
          </p>

          <h3>Criterios de Aceptación</h3>
          <p>
            Cada historia de usuario debe tener <strong>criterios de aceptación</strong> específicos. Estos son las
            condiciones exactas que deben cumplirse para que la historia se considere completa y "lista". Sin criterios
            de aceptación claros, diferentes personas tendrán diferentes expectativas de cuándo está "done" una tarea.
          </p>

          <p>
            Consideremos la historia "Como cliente, quiero buscar productos por nombre, para que encuentre lo que necesito
            rápidamente." Sus criterios de aceptación podrían ser:
          </p>

          <ul>
            <li>El campo de búsqueda debe aceptar mínimo 2 caracteres antes de buscar (evita búsquedas triviales)</li>
            <li>Los resultados deben aparecer en menos de 2 segundos (requisito de rendimiento)</li>
            <li>Mostrar el número total de resultados encontrados (contexto para el usuario)</li>
            <li>Si no hay resultados, mostrar un mensaje claro: "No se encontraron productos"</li>
            <li>Permitir al usuario presionar ENTER para buscar, no solo hacer clic en botón</li>
            <li>La búsqueda debe funcionar correctamente en dispositivos móviles y desktop (responsive)</li>
          </ul>

          <p>
            Note que cada criterio es comprobable: puedes verificar si se cumple o no. No son vagos como "debe funcionar bien"
            sino específicos como "en menos de 2 segundos".
          </p>
        </>
      )
    },

    {
      title: 'Requisitos Funcionales Típicos para E-commerce',
      content: (
        <>
          <Table
            headers={['Funcionalidad', 'Historia de Usuario', 'Prioridad']}
            rows={[
              ['Autenticación', 'Como usuario, quiero registrarme/login para acceder a la plataforma', 'Alta'],
              ['Catálogo', 'Como cliente, quiero ver productos para decidir qué comprar', 'Alta'],
              ['Búsqueda', 'Como comprador, quiero buscar por categoría/nombre para encontrar rápido', 'Alta'],
              ['Carrito', 'Como cliente, quiero agregar productos al carrito para comprar', 'Alta'],
              ['Checkout', 'Como comprador, quiero completar la compra para obtener los productos', 'Alta'],
              ['Historial', 'Como cliente, quiero ver mi historial de compras para seguimiento', 'Media'],
              ['Favoritos', 'Como usuario, quiero guardar productos favoritos para comprar después', 'Media'],
              ['Admin - Productos', 'Como admin, quiero crear/editar productos para gestionar catálogo', 'Alta'],
              ['Admin - Órdenes', 'Como admin, quiero ver todas las órdenes para procesarlas', 'Alta'],
              ['Notificaciones', 'Como cliente, quiero recibir emails de confirmación para confirmación', 'Media'],
            ]}
          />
        </>
      )
    },

    {
      title: 'Requisitos No Funcionales',
      content: (
        <>
          <p>
            Los requisitos no funcionales definen <strong>CÓMO debe ser</strong> el sistema.
            No son funcionalidades en sí, sino características de calidad.
          </p>

          <h3>Rendimiento</h3>
          <p>
            El rendimiento es sobre velocidad. Los usuarios tienen paciencia limitada. Las <strong>páginas deben cargar
            en menos de 2 segundos</strong>, o verás a usuarios saltando a competidores. Las <strong>APIs deben responder
            en menos de 500ms</strong> para no sentirse lenta la interacción. Si tu aplicación será popular, debe
            <strong>soportar 1000 usuarios simultáneos</strong> sin fallar. Las <strong>búsquedas deben devolver resultados
            en menos de 1 segundo</strong>, de lo contrario es frustrante.
          </p>

          <h3>Seguridad</h3>
          <p>
            La seguridad protege datos sensitivos. <strong>Todas las contraseñas deben encriptarse</strong> con algoritmos
            como bcrypt; nunca almacenar en texto plano. <strong>HTTPS en todas las conexiones</strong> asegura que los datos
            en tránsito no sean interceptados. <strong>Validar toda entrada</strong> previene ataques como SQL injection y XSS.
            <strong>Tokens JWT con expiración de 1 hora</strong> limita el daño si alguien roba un token. <strong>Roles y permisos
            diferenciados</strong> aseguran que un usuario normal no pueda hacer operaciones de admin.
          </p>

          <h3>Disponibilidad</h3>
          <p>
            La disponibilidad mide confiabilidad. Un objetivo común es <strong>99.9% uptime</strong> (máximo 43 minutos de
            inactividad por mes). Para lograrlo, necesitas <strong>backup automático diario</strong> de la base de datos para
            no perder datos. Necesitas planes de <strong>recuperación ante fallos en menos de 1 hora</strong>. <strong>Monitoreo
            continuo</strong> alerta de problemas antes de que los usuarios los noten.
          </p>

          <h3>Escalabilidad</h3>
          <p>
            La escalabilidad es crecer sin dolor. Tu <strong>base de datos debe manejar hasta 1 millón de registros</strong>
            sin ralentizarse significativamente. Debes poder <strong>agregar más servidores horizontalmente</strong> cuando
            aumenta carga. <strong>Caché (como Redis)</strong> reduce carga en base de datos almacenando datos frecuentes en
            memoria. <strong>Optimización de queries</strong> (índices, select selectivos) mejora velocidad dramáticamente.
          </p>

          <h3>Usabilidad</h3>
          <p>
            La usabilidad es sobre experiencia del usuario. Una <strong>interfaz intuitiva</strong> no requiere manual; los
            usuarios descubren cómo usarla explorando. <strong>Compatible con navegadores modernos</strong> (Chrome, Firefox,
            Safari, Edge). <strong>Responsive en móvil, tablet y desktop</strong> es prácticamente obligatorio en 2025.
            <strong>Accesible para usuarios con discapacidades</strong> (WCAG 2.1) incluye contraste adecuado, navegación por
            teclado, y soporte para screen readers. <strong>Tiempo de aprendizaje menor a 5 minutos</strong> significa que usuarios
            nuevos pueden ser productivos inmediatamente.
          </p>

          <CodeBlock
            language="text"
            code={`EJEMPLO: Especificación NO FUNCIONAL

Requisito: Rendimiento de Búsqueda
- Las búsquedas deben devolver resultados en <1000ms
- Máximo 50 productos por página
- Pagination automática para resultados >50
- Caché de búsquedas frecuentes
- Índices en base de datos para campos buscables

Requisito: Seguridad de Pagos
- No almacenar números de tarjeta (usar gateway externo)
- PCI DSS compliance level 1
- Validar SSL certificate en cada transacción
- Rate limiting: máximo 5 intentos de login por minuto
- Encriptar datos sensibles en tránsito

Requisito: Disponibilidad
- RTO (Recovery Time Objective): 1 hora
- RPO (Recovery Point Objective): 1 día
- Backup a múltiples ubicaciones geográficas
- Servidor de standby para failover automático`}
          />
        </>
      )
    },

    {
      title: 'Priorización de Requisitos',
      content: (
        <>
          <p>
            No todos los requisitos son igual de importantes. La priorización ayuda a decidir
            qué construir primero.
          </p>

          <h3>Matriz de Priorización (MoSCoW)</h3>
          <p>
            No todos los requisitos son igual de importantes. La matriz MoSCoW (pronunciado "Moscow") ayuda a priorizar.
            <strong>MUST HAVE</strong> son funcionalidades sin las cuales el proyecto simplemente no funciona. En un e-commerce,
            eso es Login, Catálogo de productos, Carrito, y Pago. Debes dedicar <strong>aproximadamente 60% de tu esfuerzo</strong>
            a estas funcionalidades críticas.
          </p>

          <p>
            <strong>SHOULD HAVE</strong> son importantes y mejoran significativamente la experiencia, pero el proyecto funciona sin
            ellas. Ejemplos: Búsqueda avanzada con filtros, Wishlist para guardar productos favoritos, Sistema de Reseñas de usuarios.
            Dedica <strong>aproximadamente 30% de esfuerzo</strong> aquí.
          </p>

          <p>
            <strong>COULD HAVE</strong> son "nice to have" - sería lindo tenerlas pero no son prioritarias. Ejemplos: Sistema de
            recomendaciones inteligente, Ofertas personalizadas por usuario, Programa de referidos. Dedica <strong>aproximadamente 10%
            de esfuerzo</strong> si te sobra tiempo.
          </p>

          <p>
            <strong>WON'T HAVE</strong> son cosas que explícitamente NO incluirás en este proyecto. Declararlas evita discusiones
            innecesarias. Ejemplos: App móvil nativa, Integración con IA, Sistema de pagos real (simulado es suficiente). Pueden ser
            para futuro, pero no ahora.
          </p>


          <h3>Tabla de Priorización por Sprint</h3>
          <Table
            headers={['Sprint', 'Funcionalidad', 'Categoría', 'Esfuerzo (horas)', 'Riesgo']}
            rows={[
              ['Sprint 1', 'Login/Registro', 'MUST', '8', 'Bajo'],
              ['Sprint 1', 'Catálogo de productos', 'MUST', '16', 'Bajo'],
              ['Sprint 1', 'Diseño responsivo', 'MUST', '12', 'Medio'],
              ['Sprint 2', 'Carrito y checkout', 'MUST', '20', 'Alto'],
              ['Sprint 2', 'Búsqueda avanzada', 'SHOULD', '12', 'Medio'],
              ['Sprint 3', 'Admin panel', 'MUST', '16', 'Alto'],
              ['Sprint 3', 'Reseñas de productos', 'COULD', '8', 'Bajo'],
            ]}
          />
        </>
      )
    },

    {
      title: 'Mapeo de Requisitos a Sprints',
      content: (
        <>
          <p>
            Una vez identificados los requisitos, se distribuyen en sprints para desarrollo iterativo.
          </p>

          <h3>Ejemplo: Proyecto E-commerce (JoMa)</h3>

          <h3>Sprint 1: Fundación (3 semanas)</h3>
          <p>
            El <strong>primer sprint</strong> establece los cimientos. Comienza con <strong>Autenticación</strong>, que es crítica:
            los usuarios pueden registrarse con email y contraseña, hacer login de forma segura, y recuperar contraseña si la olvidan.
            Sin esto, no hay proyecto.
          </p>

          <p>
            Luego viene la <strong>Interfaz Principal</strong>. Creas un header con navegación clara, un footer con información,
            un menú responsive que funciona en móviles, y aseguras que el diseño sea consistente. Esto proporciona la estructura
            visual que todos los demás componentes usarán.
          </p>

          <p>
            Finalmente, implementas el <strong>Catálogo de Productos</strong>. Mostrar un grid de productos con tarjetas que incluyan
            imagen, nombre y precio. Agregar paginación (mostrar 12 productos por página) porque si muestras 10.000 de una vez, la
            página será demasiado pesada. Permitir filtrar por categoría facilita al usuario encontrar lo que busca.
          </p>

          <h3>Sprint 2: Shopping Cart (3 semanas)</h3>
          <p>
            En el <strong>segundo sprint</strong> el usuario puede comprar. Implementas el <strong>Carrito de Compras</strong>: agregar
            productos, ver carrito con cantidades, actualizar cantidades fácilmente, eliminar productos, y calcular total automáticamente.
            Pequeños detalles como guardar carrito en localStorage hacen que si el usuario recarga, no pierda sus productos.
          </p>

          <p>
            En paralelo, desarrollas la <strong>API de Productos</strong>. GET /products retorna lista paginada de todos los productos.
            GET /products/:id retorna detalles de un producto específico. GET /products?category=X filtra por categoría. Documentar la API
            (en Swagger/OpenAPI) ayuda a otros a entender cómo usarla.
          </p>

          <h3>Sprint 3: Checkout y Admin (4 semanas)</h3>
          <p>
            El <strong>tercer sprint</strong> cierra la compra. <strong>Checkout Seguro</strong> incluye: formulario de dirección de envío,
            simulación de pago (sin conectar a Stripe/PayPal en este proyecto), confirmación de orden con número único, y email de confirmación
            al usuario. Después de esto, el usuario debe ver su orden como "Processing" o "Completed".
          </p>

          <p>
            Finalmente, un <strong>Panel de Administración</strong> permite al admin: ver todas las órdenes del sistema (no solo las suyas),
            cambiar estado de orden (Pending → Processing → Shipped), gestionar inventario (actualizar stock), y ver reportes básicos
            (vendas hoy, productos más vendidos, etc).
          </p>

          <InfoBox type="info">
            <strong>Tip:</strong> Cada historia de usuario debe tomar 4-8 horas de desarrollo. Si toma más, divídela en historias más pequeñas.
            Si toma menos, combínala con otra.
          </InfoBox>

          <InfoBox type="info">
            <strong>Tip:</strong> Cada historia de usuario debe tomar 4-8 horas de desarrollo.
            Si toma más, divídela en historias más pequeñas. Si toma menos, agrúpala con otras.
          </InfoBox>
        </>
      )
    },
  ];

  const keyPoints = [
    'Historias de usuario: "Como X, quiero Y, para que Z"',
    'Criterios de aceptación: condiciones específicas de completitud',
    'Requisitos funcionales: QUÉ hace el sistema',
    'Requisitos no funcionales: CÓMO es el sistema',
    'Matriz MoSCoW: MUST, SHOULD, COULD, WON\'T',
    'Priorización esencial para planificación de sprints',
    'Rendimiento: <2s carga, <500ms APIs, 1000 usuarios',
    'Seguridad: HTTPS, encriptación, validación input',
    'Disponibilidad: 99.9% uptime, backups automáticos',
    'Escalar requerimientos de menor a mayor complejidad'
  ];

  const summary = `Especificar requisitos correctamente es crítico:

• Historias de usuario definen funcionalidades desde perspectiva del usuario
• Criterios de aceptación aseguran que la historia está completa
• Requisitos funcionales: QUÉ (acciones del sistema)
• Requisitos no funcionales: CÓMO (rendimiento, seguridad, escalabilidad)
• MoSCoW priorización: Must, Should, Could, Won't have
• Distribuir requisitos en sprints de 2-4 semanas
• Cada historia debe tomar 4-8 horas de desarrollo
• Validar requisitos con stakeholder antes de desarrollar
• Documentar cambios de requisitos (scope creep)
• Revisar requisitos al final de cada sprint`;

      return (
    <>
      <LessonTemplate
        title="Requisitos y Especificaciones"
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