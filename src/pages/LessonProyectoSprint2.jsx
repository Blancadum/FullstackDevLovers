import { LessonTemplate, CodeBlock, InfoBox, Table } from '../components';
import { LessonNavigation } from '../components/LessonNavigation';
import { useBreadcrumb } from '../hooks/useBreadcrumb';
import { useLessonNavigation } from '../hooks/useLessonNavigation';

export function LessonProyectoSprint2() {
  const breadcrumbs = useBreadcrumb();
  const nav = useLessonNavigation();

  const concepts = [
    {
      icon: '🛒',
      title: 'Sprint 2 - Compra',
      definition: 'Implementa carrito de compras y APIs REST para transacciones',
      example: 'JoMa: Carrito, checkout, admin panel, stock management'
    },
    {
      icon: '🌐',
      title: 'APIs REST Completas',
      definition: 'Endpoints para todos los recursos: productos, carrito, órdenes',
      example: 'GET /api/products, POST /api/cart, PUT /api/cart/:id'
    },
    {
      icon: '🔒',
      title: 'Security Middleware',
      definition: 'Protección de rutas y validación de permisos',
      example: 'JWT validation, role-based access, CORS configuration'
    },
  ];

  const exercises = [
    {
      title: 'REPTE 7: Second Sprint Development',
      description: 'Implementa carrito, APIs, admin panel. Deadline: 15/04/2026. Puntos: 8',
      solution: `REPTE 7 - Second Sprint Development (3 semanas)

A. SPRINT PLANNING (2 puntos) - ~1 hora
   ✓ Designar nuevo Product Owner (rotación)
   ✓ Desglosar User Stories en tasks detalladas
   ✓ Explicar contexto de cada tarea
   ✓ Justificar priorización
   ✓ Asignar tasks a equipo
   ✓ Configurar en Taiga

B. WEEKLY SCRUM (1 punto)
   ✓ Reunión semanal de 15-30 min
   ✓ Documentar en Wiki cada semana

C. SPRINT DEVELOPMENT (6 puntos) - ~20 horas
   ✓ Implementar funcionalidades del sprint
   ✓ Tests durante el desarrollo
   ✓ Commits claros y frecuentes
   ✓ Código review entre miembros

D. DEFINICIÓN SPRINT 3 (1 punto)
   ✓ Nuevo Product Owner propone Sprint 3
   ✓ Prioridades basadas en backlog
   ✓ Justificación de tareas`
    }
  ];

  const sections = [
    {
      title: 'Gráfico de Burndown - Progreso del Sprint',
      content: (
        <>
          <p>
            Un <strong>burndown chart</strong> visualiza el progreso del sprint. El eje Y muestra "puntos de historia" restantes.
            El eje X muestra días. La línea ideal desciende uniformemente. La línea real muestra el progreso actual. Si está
            sobre la línea ideal, vas atrasado. Si está bajo, vas adelantado.
          </p>

          <svg viewBox="0 0 700 400" style={{ width: '100%', maxWidth: '700px', margin: '2rem auto', border: '1px solid #ddd', borderRadius: '8px', backgroundColor: '#f9f9f9' }}>
            {/* Grid */}
            <line x1="80" y1="320" x2="650" y2="320" stroke="#ddd" strokeWidth="1"/>
            <line x1="80" y1="240" x2="650" y2="240" stroke="#ddd" strokeWidth="1" strokeDasharray="3,3"/>
            <line x1="80" y1="160" x2="650" y2="160" stroke="#ddd" strokeWidth="1" strokeDasharray="3,3"/>
            <line x1="80" y1="80" x2="650" y2="80" stroke="#ddd" strokeWidth="1" strokeDasharray="3,3"/>

            {/* Axes */}
            <line x1="80" y1="80" x2="80" y2="320" stroke="#333" strokeWidth="2"/>
            <line x1="80" y1="320" x2="650" y2="320" stroke="#333" strokeWidth="2"/>

            {/* Y-axis labels */}
            <text x="50" y="325" textAnchor="end" fontSize="11" fill="#666">0</text>
            <text x="50" y="245" textAnchor="end" fontSize="11" fill="#666">10</text>
            <text x="50" y="165" textAnchor="end" fontSize="11" fill="#666">20</text>
            <text x="50" y="85" textAnchor="end" fontSize="11" fill="#666">40</text>

            {/* X-axis labels (days) */}
            <text x="95" y="345" textAnchor="middle" fontSize="11" fill="#666">Día 1</text>
            <text x="165" y="345" textAnchor="middle" fontSize="11" fill="#666">Día 3</text>
            <text x="235" y="345" textAnchor="middle" fontSize="11" fill="#666">Día 5</text>
            <text x="305" y="345" textAnchor="middle" fontSize="11" fill="#666">Día 7</text>
            <text x="375" y="345" textAnchor="middle" fontSize="11" fill="#666">Día 10</text>
            <text x="445" y="345" textAnchor="middle" fontSize="11" fill="#666">Día 14</text>
            <text x="515" y="345" textAnchor="middle" fontSize="11" fill="#666">Día 18</text>
            <text x="585" y="345" textAnchor="middle" fontSize="11" fill="#666">Día 21</text>

            {/* Ideal burndown line (straight diagonal) */}
            <polyline
              points="90,70 650,320"
              fill="none"
              stroke="#999"
              strokeWidth="2"
              strokeDasharray="5,5"
            />
            <text x="600" y="65" fontSize="10" fill="#999" fontStyle="italic">Ideal</text>

            {/* Actual burndown line (realistic with variations) */}
            <polyline
              points="90,65 160,60 230,75 300,80 375,140 445,160 515,200 585,280"
              fill="none"
              stroke="#1976D2"
              strokeWidth="3"
            />
            <text x="85" y="50" fontSize="10" fill="#1976D2" fontWeight="bold">Real</text>

            {/* Progress points */}
            <circle cx="90" cy="65" r="4" fill="#1976D2"/>
            <circle cx="160" cy="60" r="4" fill="#1976D2"/>
            <circle cx="230" cy="75" r="4" fill="#1976D2"/>
            <circle cx="300" cy="80" r="4" fill="#1976D2"/>
            <circle cx="375" cy="140" r="4" fill="#1976D2"/>
            <circle cx="445" cy="160" r="4" fill="#1976D2"/>
            <circle cx="515" cy="200" r="4" fill="#1976D2"/>
            <circle cx="585" cy="280" r="4" fill="#1976D2"/>

            {/* Labels */}
            <text x="350" y="30" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#333">Sprint Burndown Chart (21 días)</text>
            <text x="20" y="200" textAnchor="middle" fontSize="11" fill="#666" transform="rotate(-90 20 200)">Puntos Restantes</text>
            <text x="365" y="375" textAnchor="middle" fontSize="11" fill="#666">Días del Sprint</text>

            {/* Legend */}
            <rect x="470" y="345" width="12" height="12" fill="none" stroke="#999" strokeWidth="2" strokeDasharray="3,3"/>
            <text x="490" y="354" fontSize="10" fill="#666">Ideal</text>

            <line x1="470" y1="363" x2="482" y2="363" stroke="#1976D2" strokeWidth="2"/>
            <circle cx="476" cy="363" r="3" fill="#1976D2"/>
            <text x="490" y="368" fontSize="10" fill="#666">Real</text>
          </svg>

          <p>
            En este ejemplo, el equipo empezó bien (primeros días), pero en día 7 se atrasó (puntos crecieron en lugar de decrecer).
            Al darse cuenta, aceleró el trabajo y en día 21 casi alcanzó la meta. El burndown muestra dinámica real: no siempre es
            lineal perfecto.
          </p>
        </>
      )
    },

    {
      title: 'User Stories Sprint 2',
      content: (
        <>
          <h3>US#5: Shopping Cart</h3>
          <p>
            <strong>Historia:</strong> Como cliente, quiero agregar productos al carrito, para que pueda revisar y comprar
            múltiples items.
          </p>

          <p>
            <strong>Criterios de Aceptación:</strong>
          </p>
          <ul>
            <li>Agregar producto: POST /api/cart con producto_id</li>
            <li>Ver carrito actual: GET /api/cart</li>
            <li>Actualizar cantidad: PUT /api/cart/:item_id</li>
            <li>Remover producto: DELETE /api/cart/:item_id</li>
            <li>Total calculado automáticamente</li>
            <li>Persistencia en BD (no solo localStorage)</li>
            <li>Items se mantienen entre sesiones</li>
            <li>Validar stock disponible</li>
          </ul>

          <p>
            <strong>Estimación:</strong> 13 puntos (8-10 horas)
          </p>

          <h3>US#6: Products API Enhancement</h3>
          <p>
            <strong>Historia:</strong> Como desarrollador frontend, quiero APIs REST documentadas, para que pueda integrar
            fácilmente con el backend.
          </p>

          <p>
            <strong>Criterios de Aceptación:</strong>
          </p>
          <ul>
            <li>GET /api/products (paginado, filtrado)</li>
            <li>GET /api/products/:id (detalle)</li>
            <li>GET /api/products?category=X&sort=price</li>
            <li>POST /api/cart (agregar al carrito)</li>
            <li>Respuestas JSON normalizadas</li>
            <li>Error handling con status codes claros</li>
            <li>Documentación en README o Wiki</li>
            <li>Tests de endpoints</li>
          </ul>

          <p>
            <strong>Estimación:</strong> 8 puntos (5-7 horas)
          </p>

          <h3>US#7: Admin Panel Básico</h3>
          <p>
            <strong>Historia:</strong> Como administrador, quiero gestionar productos, para que pueda mantener el catálogo
            actualizado.
          </p>

          <p>
            <strong>Criterios de Aceptación:</strong>
          </p>
          <ul>
            <li>Listar todos los productos (tabla)</li>
            <li>Crear nuevo producto (POST)</li>
            <li>Editar producto existente (PUT)</li>
            <li>Eliminar producto (DELETE)</li>
            <li>Cambiar stock disponible</li>
            <li>Solo accesible por admin</li>
            <li>Confirmación antes de eliminar</li>
            <li>Notificaciones de éxito/error</li>
          </ul>

          <p>
            <strong>Estimación:</strong> 10 puntos (6-8 horas)
          </p>

          <h3>US#8: Security & Protected Routes</h3>
          <p>
            <strong>Historia:</strong> Como sistema, quiero proteger rutas sensibles, para que solo usuarios autorizados
            accedan.
          </p>

          <p>
            <strong>Criterios de Aceptación:</strong>
          </p>
          <ul>
            <li>Middleware de JWT validation</li>
            <li>Rutas públicas: /login, /register, /productos</li>
            <li>Rutas protegidas: /carrito, /órdenes, /perfil</li>
            <li>Rutas admin: /admin/* (solo role=admin)</li>
            <li>Tokens expirados redirigen a login</li>
            <li>Permisos denegados devuelven 403</li>
            <li>CORS habilitado solo para dominio permitido</li>
            <li>Rate limiting en endpoints críticos</li>
          </ul>

          <p>
            <strong>Estimación:</strong> 10 puntos (6-8 horas)
          </p>
        </>
      )
    },

    {
      title: 'Frontend Tasks - Sprint 2 (Marc López)',
      content: (
        <>
          <p>
            <strong>TASK 1: Restructure Frontend Code</strong> - Separar HTML, CSS, JavaScript en módulos claros, crear
            componentes reutilizables (ProductCard, CartItem), estructura de carpetas: /components, /pages, /utils, /styles,
            eliminar código duplicado, mejorar mantenibilidad. Estimación: 4 horas.
          </p>

          <p>
            <strong>TASK 2: Product Listing with Real Data</strong> - Conectar grid a API /api/products, implementar paginación,
            filtros por categoría, sorting (precio, nombre, rating), UI states (loading, empty, error), optimización lazy loading
            de imágenes. Estimación: 6 horas.
          </p>

          <p>
            <strong>TASK 3: Functional Shopping Cart</strong> - Página de carrito con listado de items, actualizar cantidades inline,
            botón para remover items, total dinámico, persistencia en localStorage + BD, stock validation antes de agregar, link a
            checkout (placeholder para Sprint 3). Estimación: 8 horas.
          </p>

          <p>
            <strong>TASK 4: Cart API Integration</strong> - Llamadas a POST /api/cart (agregar), PUT /api/cart/:id (actualizar
            cantidad), DELETE /api/cart/:id (remover), error handling y validaciones, sincronización con BD. Estimación: 4 horas.
          </p>
        </>
      )
    },

    {
      title: 'Backend Tasks - Sprint 2 (Jonathan Reina)',
      content: (
        <>
          <p>
            <strong>TASK 1: Cart Database & Repository</strong> - Tablas: carts, cart_items, relaciones: cart → user, cart_item →
            product, CartRepository con CRUD, QueryMethods (findByUserId, etc.), indexes para performance. Estimación: 5 horas.
          </p>

          <p>
            <strong>TASK 2: Cart API Endpoints</strong> - GET /api/cart (obtener carrito del usuario), POST /api/cart (agregar item),
            PUT /api/cart/:item_id (actualizar cantidad), DELETE /api/cart/:item_id (remover item), DELETE /api/cart (vaciar carrito),
            validar JWT en cada request, validar stock antes de agregar, tests unitarios. Estimación: 8 horas.
          </p>

          <p>
            <strong>TASK 3: Security Middleware</strong> - Middleware de JWT validation, CheckRole annotation/interceptor, CORS
            configuración, rate limiting en endpoints críticos, error responses normalizadas, logging de intentos fallidos. Estimación:
            6 horas.
          </p>

          <p>
            <strong>TASK 4: Admin Management API</strong> - AdminController con endpoints: POST /api/admin/products (crear),
            PUT /api/admin/products/:id (editar), DELETE /api/admin/products/:id (eliminar), validar que usuario es admin, validaciones
            de datos, tests de endpoints, documentación. Estimación: 7 horas.
          </p>
        </>
      )
    },

    {
      title: 'Sprint 2 Timeline & Deliverables',
      content: (
        <>
          <h3>Semana 1: Cart & Security</h3>

          <p>
            <strong>Jonathan:</strong>
          </p>
          <ul>
            <li>Crear Cart entity y CartItem entity</li>
            <li>CartRepository con métodos personalizados</li>
            <li>Implementar endpoints de carrito</li>
            <li>Middleware de JWT validation</li>
            <li>Tests de endpoints</li>
          </ul>

          <p>
            <strong>Marc:</strong>
          </p>
          <ul>
            <li>Página de carrito con UI</li>
            <li>Formularios para actualizar cantidad</li>
            <li>Integración con API</li>
            <li>Loading y error states</li>
          </ul>

          <p>
            <strong>Ambos:</strong>
          </p>
          <ul>
            <li>Code review semanal</li>
            <li>Weekly SCRUM documentation</li>
          </ul>

          <h3>Semana 2: Admin & APIs</h3>

          <p>
            <strong>Jonathan:</strong>
          </p>
          <ul>
            <li>AdminController con endpoints</li>
            <li>Validaciones de permisos</li>
            <li>Documentación de APIs</li>
            <li>Tests de admin endpoints</li>
            <li>Optimización de queries</li>
          </ul>

          <p>
            <strong>Marc:</strong>
          </p>
          <ul>
            <li>Admin panel UI (tabla de productos)</li>
            <li>Formularios crear/editar</li>
            <li>Confirmación de acciones</li>
            <li>Manejo de errores</li>
          </ul>

          <h3>Semana 3: Integration & Testing</h3>

          <p>
            <strong>Ambos:</strong>
          </p>
          <ul>
            <li>Testing manual de flujos completos</li>
            <li>Cross-browser testing</li>
            <li>Performance testing</li>
            <li>Responsive testing</li>
            <li>Security audit básico</li>
            <li>Fix de bugs encontrados</li>
            <li>Preparación de videos (3 min c/u)</li>
          </ul>

          <p>
            <strong>Jonathan:</strong>
          </p>
          <ul>
            <li>Tests de integración BD + API</li>
            <li>Documentación final de endpoints</li>
            <li>Environment variables configuradas</li>
          </ul>

          <p>
            <strong>Marc:</strong>
          </p>
          <ul>
            <li>Optimización de UI</li>
            <li>Accesibilidad improvements</li>
            <li>Documentación de componentes</li>
          </ul>

          <h3>Entregables Sprint 2</h3>
          <Table
            headers={['Entregable', 'Descripción', 'Responsable']}
            rows={[
              ['GitHub', 'Código completo + commits claros', 'Ambos'],
              ['Videos', '3 min c/u mostrando funcionalidades', 'Marc + Jonathan'],
              ['Taiga', 'Sprint tasks + scrum minutes', 'Product Owner'],
              ['API Docs', 'Endpoints documentados', 'Jonathan'],
              ['Tests', 'Unitarios + integración', 'Ambos'],
              ['Sprint 3 Plan', 'Propuesta y justificación', 'Product Owner'],
            ]}
          />

          <InfoBox type="success">
            <strong>Al finalizar Sprint 2:</strong> El carrito funciona completamente, hay API REST documentada,
            y existe panel de admin básico. Sprint 3 agregará checkout, pagos, y deployment.
          </InfoBox>
        </>
      )
    },

    {
      title: 'Definición de Sprint 3 (Final)',
      content: (
        <>
          <p>
            <strong>Nuevo Product Owner:</strong> Jonathan Reina (perspectiva técnica final)
          </p>

          <p>
            <strong>Sprint 3 Prioridades (Final):</strong>
          </p>

          <p>
            <strong>1. Secure Checkout Flow (CRÍTICO)</strong> - Formulario de envío, simulación de pago, validaciones
            (cliente + servidor), confirmación de orden, email de confirmación.
          </p>

          <p>
            <strong>2. Order Management (CRÍTICO)</strong> - Tablas: orders, order_items, APIs para ver órdenes, admin:
            cambiar estado de orden, stock deduction automático.
          </p>

          <p>
            <strong>3. Deployment to Production (CRÍTICO)</strong> - Migrar BD a servidor remoto, environment variables
            configurados, SSL/HTTPS setup, testing en producción.
          </p>

          <p>
            <strong>4. Final Documentation (IMPORTANTE)</strong> - Wiki completa (arquitectura, APIs, user manual),
            README actualizado, guía de instalación, troubleshooting.
          </p>

          <p>
            <strong>5. QA & Bug Fixes (IMPORTANTE)</strong> - Tests E2E (login → compra → confirmación), performance
            testing, security audit, bug fixes encontrados.
          </p>

          <p>
            <strong>Duración:</strong> 4 semanas (más larga que anteriores). <strong>Esfuerzo:</strong> 45-50 puntos.
            <strong>Meta:</strong> Proyecto funcional, deployado, documentado.
          </p>
        </>
      )
    },
  ];

  const keyPoints = [
    'Sprint 2 agrega funcionalidad de compra real',
    'Carrito persiste en BD, no solo localStorage',
    'APIs REST documentadas y testeadas',
    'Security middleware protege rutas sensibles',
    'Admin panel permite gestión de productos',
    'Stock validation previene overselling',
    'Frontend y backend altamente integrados',
    'Testing durante el sprint, no al final',
    'Code review cruzado entre miembros',
    'Sprint 3 es el cierre: checkout + deployment'
  ];

  const summary = `Sprint 2 implementa la funcionalidad de compra:

• Duración: 3 semanas
• Objetivo: Carrito, APIs REST, Admin panel, Security
• Frontend: Carrito funcional, admin UI, real data
• Backend: Cart APIs, Admin endpoints, JWT middleware
• Entregables: GitHub, videos, API docs, tests
• Métricas: 4-5 User Stories, ~40 puntos
• Salida: Carrito funciona end-to-end, admin gestiona productos
• Sprint 3 completa: Checkout + Deployment`;

      return (
    <>
      <LessonTemplate
        title="Sprint 2"
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