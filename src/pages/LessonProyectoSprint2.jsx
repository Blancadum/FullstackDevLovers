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
      title: 'User Stories Sprint 2',
      content: (
        <>
          <h3>US#5: Shopping Cart</h3>
          <CodeBlock
            language="text"
            code={`Como cliente, quiero agregar productos al carrito,
para que pueda revisar y comprar múltiples items.

CRITERIOS:
✓ Agregar producto: POST /api/cart con producto_id
✓ Ver carrito actual: GET /api/cart
✓ Actualizar cantidad: PUT /api/cart/:item_id
✓ Remover producto: DELETE /api/cart/:item_id
✓ Total calculado automáticamente
✓ Persistencia en BD (no solo localStorage)
✓ Items se mantienen entre sesiones
✓ Validar stock disponible

ESTIMACIÓN: 13 puntos (8-10 horas)`}
          />

          <h3>US#6: Products API Enhancement</h3>
          <CodeBlock
            language="text"
            code={`Como desarrollador frontend, quiero APIs REST documentadas,
para que pueda integrar fácilmente con el backend.

CRITERIOS:
✓ GET /api/products (paginado, filtrado)
✓ GET /api/products/:id (detalle)
✓ GET /api/products?category=X&sort=price
✓ POST /api/cart (agregar al carrito)
✓ Respuestas JSON normalizadas
✓ Error handling con status codes claros
✓ Documentación en README o Wiki
✓ Tests de endpoints

ESTIMACIÓN: 8 puntos (5-7 horas)`}
          />

          <h3>US#7: Admin Panel Básico</h3>
          <CodeBlock
            language="text"
            code={`Como administrador, quiero gestionar productos,
para que pueda mantener el catálogo actualizado.

CRITERIOS:
✓ Listar todos los productos (tabla)
✓ Crear nuevo producto (POST)
✓ Editar producto existente (PUT)
✓ Eliminar producto (DELETE)
✓ Cambiar stock disponible
✓ Solo accesible por admin
✓ Confirmación antes de eliminar
✓ Notificaciones de éxito/error

ESTIMACIÓN: 10 puntos (6-8 horas)`}
          />

          <h3>US#8: Security & Protected Routes</h3>
          <CodeBlock
            language="text"
            code={`Como sistema, quiero proteger rutas sensibles,
para que solo usuarios autorizados accedan.

CRITERIOS:
✓ Middleware de JWT validation
✓ Rutas públicas: /login, /register, /productos
✓ Rutas protegidas: /carrito, /órdenes, /perfil
✓ Rutas admin: /admin/* (solo role=admin)
✓ Tokens expirados redirigen a login
✓ Permisos denegados devuelven 403
✓ CORS habilitado solo para dominio permitido
✓ Rate limiting en endpoints críticos

ESTIMACIÓN: 10 puntos (6-8 horas)`}
          />
        </>
      )
    },

    {
      title: 'Frontend Tasks - Sprint 2 (Marc López)',
      content: (
        <>
          <CodeBlock
            language="text"
            code={`TASK 1: Restructure Frontend Code
Estimación: 4 horas
Descripción:
- Separar HTML, CSS, JavaScript en módulos claros
- Crear componentes reutilizables (ProductCard, CartItem)
- Estructura de carpetas: /components, /pages, /utils, /styles
- Eliminar código duplicado
- Mejorar mantenibilidad

---

TASK 2: Product Listing with Real Data
Estimación: 6 horas
Descripción:
- Conectar grid a API /api/products
- Implementar paginación
- Filtros por categoría
- Sorting (precio, nombre, rating)
- UI states: loading, empty, error
- Optimización: lazy loading de imágenes

---

TASK 3: Functional Shopping Cart
Estimación: 8 horas
Descripción:
- Página de carrito con listado de items
- Actualizar cantidades inline
- Botón para remover items
- Total dinámico
- Persistencia en localStorage + BD
- Stock validation antes de agregar
- Link a checkout (placeholder para Sprint 3)

---

TASK 4: Cart API Integration
Estimación: 4 horas
Descripción:
- Llamadas a POST /api/cart (agregar)
- PUT /api/cart/:id (actualizar cantidad)
- DELETE /api/cart/:id (remover)
- Error handling y validaciones
- Sincronización con BD`}
          />
        </>
      )
    },

    {
      title: 'Backend Tasks - Sprint 2 (Jonathan Reina)',
      content: (
        <>
          <CodeBlock
            language="text"
            code={`TASK 1: Cart Database & Repository
Estimación: 5 horas
Descripción:
- Tabla: carts, cart_items
- Relaciones: cart → user, cart_item → product
- CartRepository con CRUD
- QueryMethods: findByUserId, etc.
- Indexes para performance

---

TASK 2: Cart API Endpoints
Estimación: 8 horas
Descripción:
- GET /api/cart (obtener carrito del usuario)
- POST /api/cart (agregar item)
- PUT /api/cart/:item_id (actualizar cantidad)
- DELETE /api/cart/:item_id (remover item)
- DELETE /api/cart (vaciar carrito)
- Validar JWT en cada request
- Validar stock antes de agregar
- Tests unitarios

---

TASK 3: Security Middleware
Estimación: 6 horas
Descripción:
- Middleware de JWT validation
- CheckRole annotation/interceptor
- CORS configuración
- Rate limiting en endpoints críticos
- Error responses normalizadas
- Logging de intentos fallidos

---

TASK 4: Admin Management API
Estimación: 7 horas
Descripción:
- AdminController con endpoints:
  POST /api/admin/products (crear)
  PUT /api/admin/products/:id (editar)
  DELETE /api/admin/products/:id (eliminar)
- Validar que usuario es admin
- Validaciones de datos
- Tests de endpoints
- Documentación`}
          />
        </>
      )
    },

    {
      title: 'Sprint 2 Timeline & Deliverables',
      content: (
        <>
          <h3>Semana 1: Cart & Security</h3>
          <CodeBlock
            language="text"
            code={`JONATHAN:
□ Crear Cart entity y CartItem entity
□ CartRepository con métodos personalizados
□ Implementar endpoints de carrito
□ Middleware de JWT validation
□ Tests de endpoints

MARC:
□ Página de carrito con UI
□ Formularios para actualizar cantidad
□ Integración con API
□ Loading y error states

AMBOS:
□ Code review semanal
□ Weekly SCRUM documentation`}
          />

          <h3>Semana 2: Admin & APIs</h3>
          <CodeBlock
            language="text"
            code={`JONATHAN:
□ AdminController con endpoints
□ Validaciones de permisos
□ Documentación de APIs
□ Tests de admin endpoints
□ Optimización de queries

MARC:
□ Admin panel UI (tabla de productos)
□ Formularios crear/editar
□ Confirmación de acciones
□ Manejo de errores`}
          />

          <h3>Semana 3: Integration & Testing</h3>
          <CodeBlock
            language="text"
            code={`AMBOS:
□ Testing manual de flujos completos
□ Cross-browser testing
□ Performance testing
□ Responsive testing
□ Security audit básico
□ Fix de bugs encontrados
□ Preparación de videos (3 min c/u)

JONATHAN:
□ Tests de integración BD + API
□ Documentación final de endpoints
□ Environment variables configuradas

MARC:
□ Optimización de UI
□ Accesibilidad improvements
□ Documentación de componentes`}
          />

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
          <CodeBlock
            language="text"
            code={`NUEVO PRODUCT OWNER: Jonathan Reina (perspectiva técnica final)

SPRINT 3 PRIORIDADES (Final):
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. Secure Checkout Flow (CRÍTICO)
   ├─ Formulario de envío
   ├─ Simulación de pago
   ├─ Validaciones (cliente + servidor)
   ├─ Confirmación de orden
   └─ Email de confirmación

2. Order Management (CRÍTICO)
   ├─ Tablas: orders, order_items
   ├─ APIs para ver órdenes
   ├─ Admin: cambiar estado de orden
   └─ Stock deduction automático

3. Deployment to Production (CRÍTICO)
   ├─ Migrar BD a servidor remoto
   ├─ Environment variables configurados
   ├─ SSL/HTTPS setup
   ├─ Testing en producción

4. Final Documentation (IMPORTANTE)
   ├─ Wiki completa (arquitectura, APIs, user manual)
   ├─ README actualizado
   ├─ Guía de instalación
   ├─ Troubleshooting

5. QA & Bug Fixes (IMPORTANTE)
   ├─ Tests E2E (login → compra → confirmación)
   ├─ Performance testing
   ├─ Security audit
   ├─ Bug fixes encontrados

DURACIÓN: 4 semanas (más larga que anteriores)
ESFUERZO: 45-50 puntos
META: Proyecto funcional, deployado, documentado`}
          />
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