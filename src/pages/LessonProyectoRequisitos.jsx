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
          <CodeBlock
            language="text"
            code={`FORMATO ESTÁNDAR:
"Como [ACTOR/ROL], quiero [ACCIÓN], para que [BENEFICIO]"

DESGLOSE:
- "Como" = ¿Quién usa el sistema? (cliente, admin, vendedor)
- "quiero" = ¿Qué acción realiza? (buscar, comprar, crear)
- "para que" = ¿Cuál es el beneficio? (ahorrar tiempo, obtener info, etc)

EJEMPLOS REALES:

Como usuario, quiero buscar libros por título,
para que encuentre rápidamente lo que busco.

Como administrador, quiero ver reportes de ventas,
para que pueda monitorear el negocio.

Como vendedor, quiero actualizar el stock de productos,
para que los clientes vean disponibilidad correcta.`}
          />

          <h3>Criterios de Aceptación</h3>
          <p>
            Cada historia de usuario debe tener <strong>criterios de aceptación</strong> específicos.
            Son las condiciones que deben cumplirse para que la historia se considere "lista".
          </p>

          <CodeBlock
            language="text"
            code={`EJEMPLO: Búsqueda de Productos

Historia: Como cliente, quiero buscar productos por nombre,
para que encuentre lo que necesito rápidamente.

Criterios de Aceptación:
✓ El campo de búsqueda debe aceptar mínimo 2 caracteres
✓ Los resultados deben aparecer en <2 segundos
✓ Mostrar número total de resultados encontrados
✓ Si no hay resultados, mostrar "No se encontraron productos"
✓ Permitir presionar ENTER para buscar
✓ Funcionar en dispositivos móviles y desktop`}
          />
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

          <h3>Categorías Principales</h3>

          <h4>1. Rendimiento</h4>
          <ul>
            <li>Las páginas deben cargar en menos de 2 segundos</li>
            <li>Las APIs deben responder en menos de 500ms</li>
            <li>El sistema debe soportar 1000 usuarios simultáneos</li>
            <li>Las búsquedas deben devolver resultados en menos de 1 segundo</li>
          </ul>

          <h4>2. Seguridad</h4>
          <ul>
            <li>Todas las contraseñas encriptadas con bcrypt o similar</li>
            <li>HTTPS en todas las conexiones (SSL/TLS)</li>
            <li>Validación de entrada para prevenir SQL injection y XSS</li>
            <li>Tokens JWT con expiración de 1 hora</li>
            <li>Roles y permisos para acceso diferenciado (Admin, Usuario, Vendedor)</li>
          </ul>

          <h4>3. Disponibilidad</h4>
          <ul>
            <li>99.9% uptime (máximo 43 minutos de inactividad por mes)</li>
            <li>Backup automático diario de la base de datos</li>
            <li>Recuperación ante fallos en menos de 1 hora</li>
            <li>Monitoreo continuo de aplicación</li>
          </ul>

          <h4>4. Escalabilidad</h4>
          <ul>
            <li>Base de datos debe manejar hasta 1 millón de registros</li>
            <li>Posibilidad de agregar servidores horizontalmente</li>
            <li>Caché para datos frecuentes (Redis)</li>
            <li>Optimización de queries en la base de datos</li>
          </ul>

          <h4>5. Usabilidad</h4>
          <ul>
            <li>Interfaz intuitiva (sin necesidad de entrenamiento)</li>
            <li>Compatible con navegadores modernos</li>
            <li>Responsive en móvil, tablet y desktop</li>
            <li>Accesible para usuarios con discapacidades (WCAG 2.1)</li>
            <li>Tiempo de aprendizaje menor a 5 minutos</li>
          </ul>

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
          <CodeBlock
            language="text"
            code={`MUST HAVE (Imprescindible)
├─ Sin esto, el proyecto no funciona
├─ Ejemplo: Login, Catálogo, Carrito, Pago
└─ Dedicar 60% del esfuerzo

SHOULD HAVE (Importante)
├─ Mejorar mucho la experiencia
├─ Ejemplo: Búsqueda avanzada, Wishlist, Reseñas
└─ Dedicar 30% del esfuerzo

COULD HAVE (Deseable)
├─ Sería lindo tenerlo
├─ Ejemplo: Sistema de recomendaciones, Ofertas
└─ Dedicar 10% del esfuerzo

WON'T HAVE (Para futuro)
├─ No está en este proyecto
└─ Ejemplo: App móvil nativa, Integración con IA`}
          />

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

          <h4>Sprint 1: Fundación (3 semanas)</h4>
          <CodeBlock
            language="text"
            code={`User Stories del Sprint 1:

US #1: Autenticación de Usuarios
- Registrarse con email y contraseña
- Login con validación segura
- Recuperar contraseña por email
- Sesión de usuario activa

US #2: Interfaz Principal
- Header con navegación
- Footer con información
- Menú responsive para móvil
- Diseño consistente

US #3: Catálogo de Productos
- Mostrar grid de productos
- Tarjetas con imagen, nombre, precio
- Paginación de 12 productos
- Filtro por categoría`}
          />

          <h4>Sprint 2: Shopping Cart (3 semanas)</h4>
          <CodeBlock
            language="text"
            code={`User Stories del Sprint 2:

US #4: Carrito de Compras
- Agregar productos al carrito
- Ver carrito con cantidades
- Actualizar cantidades
- Eliminar productos
- Calcular total automáticamente

US #5: API de Productos
- GET /products - Lista de productos
- GET /products/:id - Detalle
- GET /products?category=X - Por categoría
- Documentación de API`}
          />

          <h4>Sprint 3: Checkout y Admin (4 semanas)</h4>
          <CodeBlock
            language="text"
            code={`User Stories del Sprint 3:

US #6: Checkout Seguro
- Formulario de envío
- Simulación de pago
- Confirmación de orden
- Email de confirmación

US #7: Panel de Administración
- Ver todas las órdenes
- Cambiar estado de orden
- Gestionar inventario
- Ver reportes`}
          />

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