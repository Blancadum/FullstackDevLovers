import { LessonTemplate, CodeBlock, InfoBox, Table } from '../components';
import { LessonNavigation } from '../components/LessonNavigation';
import { useBreadcrumb } from '../hooks/useBreadcrumb';
import { useLessonNavigation } from '../hooks/useLessonNavigation';

export function LessonProyectoSprint1() {
  const breadcrumbs = useBreadcrumb();
  const nav = useLessonNavigation();

  const concepts = [
    {
      icon: '⚡',
      title: 'Sprint 1 - Fundación',
      definition: 'Primer ciclo de desarrollo establece base del proyecto (autenticación + catálogo)',
      example: 'JoMa: Sistema de login/registro + visualización de productos'
    },
    {
      icon: '🔐',
      title: 'Autenticación de Usuario',
      definition: 'Sistema de registro, login y gestión de sesiones',
      example: 'JWT tokens, password hashing, rol-based access'
    },
    {
      icon: '📋',
      title: 'Catálogo de Productos',
      definition: 'Visualización y búsqueda de productos disponibles',
      example: 'Grid responsive, filtros, paginación'
    },
  ];

  const exercises = [
    {
      title: 'REPTE 6: Primer Sprint Development',
      description: 'Implementa autenticación y catálogo. Deadline: 18/03/2026. Puntos: 8',
      solution: `REPTE 6 - First Sprint Development (3 semanas)

A. SPRINT PLANNING (2 puntos)
   1. Designar Product Owner (rotativo)
   2. Desglosar User Stories en tasks específicas
   3. Asignar tasks a equipo
   4. Configurar en Taiga

B. WEEKLY SCRUM (1 punto)
   - Reunión semanal de sincronización
   - "Esta semana hice..."
   - "Próxima haré..."
   - "Obstáculos..."
   - Documentar en Taiga Wiki

C. SPRINT DEVELOPMENT (6 puntos)
   - Implementar funcionalidades
   - Videos demostrativos (3 min por persona)
   - GitHub repository actualizado
   - ~20 horas de desarrollo

D. DEFINICIÓN SPRINT 2 (1 punto)
   - Nuevo Product Owner
   - Prioridades para Sprint 2
   - Justificación de selección`
    }
  ];

  const sections = [
    {
      title: 'User Stories Sprint 1 - Caso JoMa',
      content: (
        <>
          <h3>US#1: User Registration</h3>
          <p>
            <strong>Historia:</strong> Como cliente nuevo, quiero registrarme en JoMa, para que pueda crear una cuenta y acceder
            a la plataforma.
          </p>

          <p>
            <strong>Criterios de Aceptación:</strong>
          </p>
          <ul>
            <li>Formulario con campos: email, password, nombre, apellido</li>
            <li>Validación cliente-side: email válido, password &gt;= 8 caracteres</li>
            <li>Validación servidor-side: email único en BD</li>
            <li>Password encriptado con bcrypt</li>
            <li>Email de confirmación enviado</li>
            <li>Usuario puede loguearse después del registro</li>
            <li>Mensaje de error claro si datos inválidos</li>
          </ul>

          <p>
            <strong>Estimación:</strong> 5 puntos (4-8 horas)
          </p>

          <p>
            <strong>Contexto:</strong> Punto de entrada para nuevos clientes, base para sistema de seguridad, datos personales
            deben protegerse (GDPR).
          </p>

          <h3>US#2: User Login</h3>
          <p>
            <strong>Historia:</strong> Como usuario registrado, quiero hacer login, para que pueda acceder a mi cuenta y hacer
            compras.
          </p>

          <p>
            <strong>Criterios de Aceptación:</strong>
          </p>
          <ul>
            <li>Formulario con email y contraseña</li>
            <li>Validar credenciales contra BD</li>
            <li>Si válidas: generar JWT token</li>
            <li>Almacenar token en localStorage</li>
            <li>Token con expiración 1 hora</li>
            <li>Redirigir a dashboard/catálogo si login exitoso</li>
            <li>Mostrar error si credenciales incorrectas</li>
            <li>Link "¿Olvidaste la contraseña?"</li>
          </ul>

          <p>
            <strong>Estimación:</strong> 5 puntos (4-8 horas)
          </p>

          <p>
            <strong>Contexto:</strong> Esencial para acceso a áreas restringidas, permite personalización de experiencia, base
            para carrito y órdenes personalizadas.
          </p>

          <h3>US#3: Product Catalog Display</h3>
          <p>
            <strong>Historia:</strong> Como cliente, quiero ver el catálogo de productos, para que pueda navegar y seleccionar
            qué comprar.
          </p>

          <p>
            <strong>Criterios de Aceptación:</strong>
          </p>
          <ul>
            <li>Mostrar grid de productos (3 columnas en desktop, responsive)</li>
            <li>Cada producto muestra: imagen, nombre, descripción, precio</li>
            <li>Stock disponible visible (agregar "En stock" o cantidad)</li>
            <li>Paginación: máximo 12 productos por página</li>
            <li>Botón "Agregar al carrito" en cada producto</li>
            <li>Cargar en &lt; 2 segundos</li>
            <li>Responsive: móvil (1 col), tablet (2 col), desktop (3 col)</li>
            <li>Link a detalle del producto</li>
          </ul>

          <p>
            <strong>Estimación:</strong> 8 puntos (5-8 horas)
          </p>

          <p>
            <strong>Contexto:</strong> Funcionalidad principal del proyecto, primer punto de interacción del cliente, performance
            crítica (UX importante).
          </p>

          <h3>US#4: Main Interface & Navigation</h3>
          <p>
            <strong>Historia:</strong> Como usuario, quiero una interfaz intuitiva con navegación clara, para que pueda encontrar
            fácilmente lo que busco.
          </p>

          <p>
            <strong>Criterios de Aceptación:</strong>
          </p>
          <ul>
            <li>Header con: logo, buscador, carrito, usuario</li>
            <li>Footer con: contacto, redes, términos</li>
            <li>Menú de navegación visible en todos los dispositivos</li>
            <li>Menú hamburguesa en móvil</li>
            <li>Breadcrumbs para navegación clara</li>
            <li>Diseño consistente en todas las páginas</li>
            <li>Colores y tipografía profesionales</li>
            <li>Accesibilidad WCAG básica (contraste, alt text)</li>
          </ul>

          <p>
            <strong>Estimación:</strong> 8 puntos (5-8 horas)
          </p>

          <p>
            <strong>Contexto:</strong> Crea identidad visual del proyecto, facilita navegación intuitiva, primera impresión del
            cliente.
          </p>
        </>
      )
    },

    {
      title: 'Tablero Kanban - Visualización del Sprint',
      content: (
        <>
          <p>
            Un <strong>tablero Kanban</strong> visualiza el progreso del sprint. Cada tarea se mueve a través de columnas:
            <strong>"To Do"</strong> (no iniciada), <strong>"In Progress"</strong> (en desarrollo), <strong>"Done"</strong> (completada).
            Esto permite que todo el equipo vea el estado en tiempo real, identifique cuellos de botella, y colabore mejor.
          </p>

          <svg viewBox="0 0 700 350" style={{ width: '100%', maxWidth: '700px', margin: '2rem auto', border: '1px solid #ddd', borderRadius: '8px', backgroundColor: '#f9f9f9' }}>
            {/* Column headers */}
            <text x="100" y="30" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#333">To Do</text>
            <text x="350" y="30" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#333">In Progress</text>
            <text x="600" y="30" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#333">Done</text>

            {/* Column backgrounds */}
            <rect x="20" y="45" width="160" height="290" fill="#FFF3E0" stroke="#F57C00" strokeWidth="2" rx="5" opacity="0.3"/>
            <rect x="270" y="45" width="160" height="290" fill="#E3F2FD" stroke="#1976D2" strokeWidth="2" rx="5" opacity="0.3"/>
            <rect x="520" y="45" width="160" height="290" fill="#E8F5E9" stroke="#388E3C" strokeWidth="2" rx="5" opacity="0.3"/>

            {/* TO DO Column */}
            {/* Task 1 */}
            <rect x="30" y="60" width="140" height="60" fill="#FFF3E0" stroke="#F57C00" strokeWidth="2" rx="4"/>
            <text x="100" y="78" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#333">US#1: Registration</text>
            <text x="100" y="93" textAnchor="middle" fontSize="9" fill="#666">5 puntos</text>
            <text x="100" y="105" textAnchor="middle" fontSize="8" fill="#999">Jonathan</text>

            {/* Task 2 */}
            <rect x="30" y="135" width="140" height="60" fill="#FFF3E0" stroke="#F57C00" strokeWidth="2" rx="4"/>
            <text x="100" y="153" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#333">US#2: Login</text>
            <text x="100" y="168" textAnchor="middle" fontSize="9" fill="#666">5 puntos</text>
            <text x="100" y="180" textAnchor="middle" fontSize="8" fill="#999">Jonathan</text>

            {/* Task 3 */}
            <rect x="30" y="210" width="140" height="60" fill="#FFF3E0" stroke="#F57C00" strokeWidth="2" rx="4"/>
            <text x="100" y="228" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#333">US#3: Catalog UI</text>
            <text x="100" y="243" textAnchor="middle" fontSize="9" fill="#666">8 puntos</text>
            <text x="100" y="255" textAnchor="middle" fontSize="8" fill="#999">Marc</text>

            {/* IN PROGRESS Column */}
            {/* Task moving */}
            <rect x="280" y="60" width="140" height="60" fill="#E3F2FD" stroke="#1976D2" strokeWidth="2" rx="4"/>
            <text x="350" y="78" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#333">Main Interface</text>
            <text x="350" y="93" textAnchor="middle" fontSize="9" fill="#666">8 puntos</text>
            <text x="350" y="105" textAnchor="middle" fontSize="8" fill="#999">Marc</text>

            {/* Task moving 2 */}
            <rect x="280" y="135" width="140" height="60" fill="#E3F2FD" stroke="#1976D2" strokeWidth="2" rx="4"/>
            <text x="350" y="153" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#333">DB Schema</text>
            <text x="350" y="168" textAnchor="middle" fontSize="9" fill="#666">4 puntos</text>
            <text x="350" y="180" textAnchor="middle" fontSize="8" fill="#999">Jonathan</text>

            {/* DONE Column */}
            {/* Task 1 complete */}
            <rect x="530" y="60" width="140" height="60" fill="#E8F5E9" stroke="#388E3C" strokeWidth="2" rx="4"/>
            <text x="600" y="78" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#333">Project Setup</text>
            <text x="600" y="93" textAnchor="middle" fontSize="9" fill="#666">✓ Done</text>
            <text x="600" y="108" textAnchor="middle" fontSize="8" fill="#999">Semana 1</text>

            {/* Metrics footer */}
            <text x="100" y="350" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#333">To Do: 3 tareas</text>
            <text x="350" y="350" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#333">In Progress: 2 tareas</text>
            <text x="600" y="350" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#333">Done: 1 tarea</text>
          </svg>

          <p>
            Este Kanban muestra un snapshot del sprint. Las tareas fluyen de izquierda a derecha conforme se completan.
            Limita WIP (Work In Progress) a máximo 2 tareas por persona en "In Progress" para evitar multitarea caótica.
          </p>
        </>
      )
    },

    {
      title: 'Desglose de Tasks - Caso JoMa',
      content: (
        <>
          <h3>Frontend Tasks (Marc López)</h3>

          <p>
            <strong>TASK 1: Main Interface Design</strong> - Crear estructura HTML5 base (header, nav, main, footer),
            implementar CSS3 con Flexbox/Grid, responsive design mobile-first, Font Awesome para iconos, Google Fonts para
            tipografía. Contexto: establece identidad visual, facilita navegación del sitio. Estimación: 4 horas.
          </p>

          <p>
            <strong>TASK 2: Product Catalog UI</strong> - Crear componentes React para grid de productos, tarjetas con imagen,
            nombre, precio, botón "Agregar", paginación con controles, filtros básicos (opcional para Sprint 1). Contexto:
            funcionalidad central visible para usuario, requiere integración con API backend. Estimación: 6 horas.
          </p>

          <p>
            <strong>TASK 3: Login/Register Forms</strong> - Formularios HTML con validaciones cliente-side, JavaScript para
            interactividad, integración con APIs de backend, manejo de errores y estados. Contexto: punto de entrada para
            usuarios, crítico para seguridad. Estimación: 4 horas.
          </p>

          <p>
            <strong>TASK 4: Navigation & User Menu</strong> - Header responsivo con menú, hamburguesa en móvil, dropdown para
            usuario logueado, links a dashboard y logout. Contexto: usabilidad del sitio, acceso rápido a funciones principales.
            Estimación: 3 horas.
          </p>

          <h3>Backend Tasks (Jonathan Reina)</h3>

          <p>
            <strong>TASK 1: Authentication System - Registration</strong> - Endpoint POST /api/auth/register, validación de email
            y contraseña, hash de password con bcrypt, creación de usuario en BD, respuesta JSON con usuario creado. Contexto:
            base del sistema de seguridad, datos personales deben protegerse (GDPR). Estimación: 5 horas.
          </p>

          <p>
            <strong>TASK 2: Authentication System - Login</strong> - Endpoint POST /api/auth/login, validar credenciales contra BD,
            generar JWT token, token con expiración 1h, respuesta JSON con token. Contexto: autenticación en cada request, JWT para
            sessionless auth (mejor para APIs). Estimación: 5 horas.
          </p>

          <p>
            <strong>TASK 3: Products API</strong> - Endpoint GET /api/products (paginado), GET /api/products/:id (detalle),
            GET /api/products?category=X (filtrar), respuestas JSON normalizadas, documentación de endpoints. Contexto: frontend
            depende de estos datos, performance crítica. Estimación: 6 horas.
          </p>

          <p>
            <strong>TASK 4: Database Schema</strong> - Tablas: users, products, categories, primary/foreign keys, indexes en campos
            buscables, data migration/seeding con datos de prueba. Contexto: foundación de todo el sistema, diseño correcto previene
            problemas después. Estimación: 4 horas.
          </p>
        </>
      )
    },

    {
      title: 'Flujo de Implementación - Sprint 1',
      content: (
        <>
          <h3>Semana 1: Setup & Database</h3>

          <p>
            <strong>Ambos miembros:</strong>
          </p>
          <ul>
            <li>Clonar repositorio de GitHub</li>
            <li>Instalar dependencias (npm install, mvn install)</li>
            <li>Crear base de datos local</li>
            <li>Configurar .env con credenciales</li>
          </ul>

          <p>
            <strong>Jonathan (Backend):</strong>
          </p>
          <ul>
            <li>Crear estructura Maven/Spring Boot</li>
            <li>Configurar JPA/Hibernate</li>
            <li>Crear tablas: users, products, categories</li>
            <li>Crear User y Product entities</li>
            <li>Seed data: 10-20 productos de prueba</li>
          </ul>

          <p>
            <strong>Marc (Frontend):</strong>
          </p>
          <ul>
            <li>Crear estructura React</li>
            <li>Instalar dependencias (axios, react-router, etc)</li>
            <li>Crear estructura de carpetas</li>
            <li>Setup de estilos (Bootstrap o CSS modules)</li>
          </ul>

          <h3>Semana 2: Authentication & Products</h3>

          <p>
            <strong>Jonathan:</strong>
          </p>
          <ul>
            <li>Implementar UserRepository y UserService</li>
            <li>Crear AuthController con endpoints: POST /api/auth/register, POST /api/auth/login, POST /api/auth/logout</li>
            <li>JWT token generation y validation</li>
            <li>Password hashing con bcrypt</li>
            <li>Role-based access control (admin, user)</li>
            <li>Tests unitarios para autenticación</li>
          </ul>

          <p>
            <strong>Commits esperados:</strong> feat: authentication system with JWT, feat: password hashing with bcrypt,
            feat: role-based access control
          </p>

          <h3>Semana 3: Integration & Polish</h3>

          <p>
            <strong>Marc:</strong>
          </p>
          <ul>
            <li>Conectar forms a API de Jonathan</li>
            <li>Error handling y validaciones</li>
            <li>Loading states (spinners, skeletons)</li>
            <li>Responsive testing en múltiples dispositivos</li>
            <li>Accesibilidad básica (alt text, labels)</li>
            <li>Performance optimizations (lazy loading)</li>
          </ul>

          <p>
            <strong>Jonathan:</strong>
          </p>
          <ul>
            <li>Documentación de API endpoints</li>
            <li>Testing de endpoints</li>
            <li>Optimización de queries</li>
            <li>Cors configuration</li>
            <li>Environment variables por entorno</li>
          </ul>

          <p>
            <strong>Ambos:</strong>
          </p>
          <ul>
            <li>Weekly SCRUM meeting</li>
            <li>Code review cruzado</li>
            <li>Fix de bugs encontrados</li>
            <li>Preparación de videos demostrativos</li>
          </ul>

          <h3>Entregables Sprint 1</h3>
          <Table
            headers={['Tipo', 'Descripción', 'Por quién']}
            rows={[
              ['GitHub', 'Código completo con commits claros', 'Ambos'],
              ['Videos', '3 min c/u mostrando funcionalidades', 'Marc + Jonathan'],
              ['Taiga', 'Sprint planning + weekly scrum docs', 'Product Owner'],
              ['Wiki', 'Documentación de API endpoints', 'Jonathan'],
              ['Testing', 'Pruebas manuales de flujos', 'Ambos'],
            ]}
          />

          <InfoBox type="success">
            <strong>Al finalizar Sprint 1:</strong> Usuarios deben poder registrarse, loguearse y ver el catálogo de productos.
            Funcionalidad de carrito viene en Sprint 2.
          </InfoBox>
        </>
      )
    },

    {
      title: 'Definición de Sprint 2',
      content: (
        <>
          <p>
            Al final de Sprint 1, el equipo propone Sprint 2 basado en:
            - Prioridades del Product Backlog
            - Tareas incompletas de Sprint 1
            - Feedback de Sprint Review
          </p>

          <h3>Ejemplo: Sprint 2 Proposal (JoMa)</h3>

          <p>
            <strong>Nuevo Product Owner:</strong> Marc López
          </p>

          <p>
            <strong>Sprint 2 Prioridades:</strong>
          </p>

          <p>
            <strong>1. Shopping Cart Implementation (MUST HAVE)</strong> - Agregar/remover productos del carrito, actualizar
            cantidades, persistencia en BD, cálculo automático de totales.
          </p>

          <p>
            <strong>2. Products API Enhancement (HIGH)</strong> - Búsqueda por nombre, filtros por categoría, sorting (precio,
            popularidad), documentación mejorada.
          </p>

          <p>
            <strong>3. Admin Panel Básico (MEDIUM)</strong> - Listado de productos, crear/editar/eliminar productos, gestión de
            categorías, control de stock.
          </p>

          <p>
            <strong>4. Security Middleware (MUST HAVE)</strong> - Rutas protegidas (requieren autenticación), validación de
            permisos (admin-only), CORS configuración, rate limiting en endpoints.
          </p>

          <p>
            <strong>Justificación:</strong> La autenticación y catálogo establecen la base. Ahora necesitamos la funcionalidad
            de compra (carrito) para que customers puedan interactuar. El admin panel es crítico para gestión interna.
          </p>

          <p>
            <strong>Duración:</strong> 3 semanas (similar a Sprint 1). <strong>Esfuerzo Estimado:</strong> 30-40 puntos.
          </p>
        </>
      )
    },
  ];

  const keyPoints = [
    'Sprint 1 es la fundación: autenticación + catálogo',
    'US#1-4: Registration, Login, Catalog, Navigation',
    'Frontend (Marc): UI, forms, styling, responsiveness',
    'Backend (Jonathan): APIs, auth, database, security',
    'Estimación en puntos (no horas)',
    'Weekly standups para sincronización',
    'Videos demostrativos al finalizar sprint',
    'Git commits claros y frecuentes',
    'Testing durante el sprint, no al final',
    'Definir Sprint 2 antes de finalizar Sprint 1'
  ];

  const summary = `Sprint 1 establece la fundación del proyecto:

• Duración: 3 semanas
• Objetivo: Autenticación + Catálogo de productos
• Frontend: Interfaz responsiva, forms, navegación
• Backend: APIs REST, sistema de autenticación, BD
• Entregables: Código en GitHub, videos, documentación
• Métricas: ~8 User Stories, ~40 puntos estimados
• Salida: Usuarios pueden registrarse, loguearse, ver productos
• Sprint 2 construye: Carrito de compras + Admin panel`;

      return (
    <>
      <LessonTemplate
        title="Sprint 1"
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