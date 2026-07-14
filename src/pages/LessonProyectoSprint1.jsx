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
          <CodeBlock
            language="text"
            code={`Como cliente nuevo, quiero registrarme en JoMa,
para que pueda crear una cuenta y acceder a la plataforma.

CRITERIOS DE ACEPTACIÓN:
✓ Formulario con campos: email, password, nombre, apellido
✓ Validación cliente-side: email válido, password >= 8 caracteres
✓ Validación servidor-side: email único en BD
✓ Password encriptado con bcrypt
✓ Email de confirmación enviado
✓ Usuario puede loguearse después del registro
✓ Mensaje de error claro si datos inválidos

ESTIMACIÓN: 5 puntos (4-8 horas)

CONTEXTO:
- Punto de entrada para nuevos clientes
- Base para sistema de seguridad
- Datos personales deben protegerse (GDPR)`}
          />

          <h3>US#2: User Login</h3>
          <CodeBlock
            language="text"
            code={`Como usuario registrado, quiero hacer login,
para que pueda acceder a mi cuenta y hacer compras.

CRITERIOS DE ACEPTACIÓN:
✓ Formulario con email y contraseña
✓ Validar credenciales contra BD
✓ Si válidas: generar JWT token
✓ Almacenar token en localStorage
✓ Token con expiración 1 hora
✓ Redirigir a dashboard/catálogo si login exitoso
✓ Mostrar error si credenciales incorrectas
✓ Link "¿Olvidaste la contraseña?"

ESTIMACIÓN: 5 puntos (4-8 horas)

CONTEXTO:
- Esencial para acceso a áreas restringidas
- Permite personalización de experiencia
- Base para carrito y órdenes personalizadas`}
          />

          <h3>US#3: Product Catalog Display</h3>
          <CodeBlock
            language="text"
            code={`Como cliente, quiero ver el catálogo de productos,
para que pueda navegar y seleccionar qué comprar.

CRITERIOS DE ACEPTACIÓN:
✓ Mostrar grid de productos (3 columnas en desktop, responsive)
✓ Cada producto muestra: imagen, nombre, descripción, precio
✓ Stock disponible visible (agregar "En stock" o cantidad)
✓ Paginación: máximo 12 productos por página
✓ Botón "Agregar al carrito" en cada producto
✓ Cargar en < 2 segundos
✓ Responsive: móvil (1 col), tablet (2 col), desktop (3 col)
✓ Link a detalle del producto

ESTIMACIÓN: 8 puntos (5-8 horas)

CONTEXTO:
- Funcionalidad principal del proyecto
- Primer punto de interacción del cliente
- Performance crítica (UX importante)`}
          />

          <h3>US#4: Main Interface & Navigation</h3>
          <CodeBlock
            language="text"
            code={`Como usuario, quiero una interfaz intuitiva con navegación clara,
para que pueda encontrar fácilmente lo que busco.

CRITERIOS DE ACEPTACIÓN:
✓ Header con: logo, buscador, carrito, usuario
✓ Footer con: contacto, redes, términos
✓ Menú de navegación visible en todos los dispositivos
✓ Menú hamburguesa en móvil
✓ Breadcrumbs para navegación clara
✓ Diseño consistente en todas las páginas
✓ Colores y tipografía profesionales
✓ Accesibilidad WCAG básica (contraste, alt text)

ESTIMACIÓN: 8 puntos (5-8 horas)

CONTEXTO:
- Crea identidad visual del proyecto
- Facilita navegación intuitiva
- Primera impresión del cliente`}
          />
        </>
      )
    },

    {
      title: 'Desglose de Tasks - Caso JoMa',
      content: (
        <>
          <h3>Frontend Tasks (Marc López)</h3>
          <CodeBlock
            language="text"
            code={`TASK 1: Main Interface Design
Descripción:
- Crear estructura HTML5 base (header, nav, main, footer)
- Implementar CSS3 con Flexbox/Grid
- Responsive design: mobile-first
- Font Awesome para iconos
- Google Fonts para tipografía

Contexto:
- Establece identidad visual
- Facilita navegación del sitio

Estimación: 4 horas

---

TASK 2: Product Catalog UI
Descripción:
- Crear componentes React para grid de productos
- Tarjetas con imagen, nombre, precio, botón "Agregar"
- Paginación con controles
- Filtros básicos (opcional para Sprint 1)

Contexto:
- Funcionalidad central visible para usuario
- Requiere integración con API backend

Estimación: 6 horas

---

TASK 3: Login/Register Forms
Descripción:
- Formularios HTML con validaciones cliente-side
- JavaScript para interactividad
- Integración con APIs de backend
- Manejo de errores y estados

Contexto:
- Punto de entrada para usuarios
- Crítico para seguridad

Estimación: 4 horas

---

TASK 4: Navigation & User Menu
Descripción:
- Header responsivo con menú
- Hamburguesa en móvil
- Dropdown para usuario logueado
- Links a dashboard, logout

Contexto:
- Usabilidad del sitio
- Acceso rápido a funciones principales

Estimación: 3 horas`}
          />

          <h3>Backend Tasks (Jonathan Reina)</h3>
          <CodeBlock
            language="text"
            code={`TASK 1: Authentication System - Registration
Descripción:
- Endpoint POST /api/auth/register
- Validación de email y contraseña
- Hash de password con bcrypt
- Creación de usuario en BD
- Respuesta JSON con usuario creado

Contexto:
- Base del sistema de seguridad
- Datos personales deben protegerse (GDPR)

Estimación: 5 horas

---

TASK 2: Authentication System - Login
Descripción:
- Endpoint POST /api/auth/login
- Validar credenciales contra BD
- Generar JWT token
- Token con expiración 1h
- Respuesta JSON con token

Contexto:
- Autenticación en cada request
- JWT para sessionless auth (mejor para APIs)

Estimación: 5 horas

---

TASK 3: Products API
Descripción:
- Endpoint GET /api/products (paginado)
- Endpoint GET /api/products/:id (detalle)
- Endpoint GET /api/products?category=X (filtrar)
- Respuestas JSON normalizadas
- Documentación de endpoints

Contexto:
- Frontend depende de estos datos
- Performance crítica

Estimación: 6 horas

---

TASK 4: Database Schema
Descripción:
- Tablas: users, products, categories
- Primary/Foreign keys
- Indexes en campos buscables
- Data migration/seeding con datos de prueba

Contexto:
- Foundación de todo el sistema
- Diseño correcto previene problemas después

Estimación: 4 horas`}
          />
        </>
      )
    },

    {
      title: 'Flujo de Implementación - Sprint 1',
      content: (
        <>
          <h3>Semana 1: Setup & Database</h3>
          <CodeBlock
            language="text"
            code={`SEMANA 1 - Preparación
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Ambos miembros:
□ Clonar repositorio de GitHub
□ Instalar dependencias (npm install, mvn install)
□ Crear base de datos local
□ Configurar .env con credenciales

Jonathan (Backend):
□ Crear estructura Maven/Spring Boot
□ Configurar JPA/Hibernate
□ Crear tablas: users, products, categories
□ Crear User y Product entities
□ Seed data: 10-20 productos de prueba

Marc (Frontend):
□ Crear estructura React
□ Instalar dependencias (axios, react-router, etc)
□ Crear estructura de carpetas
□ Setup de estilos (Bootstrap o CSS modules)`}
          />

          <h3>Semana 2: Authentication & Products</h3>
          <CodeBlock
            language="text"
            code={`SEMANA 2 - Funcionalidades Principales
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Jonathan:
□ Implementar UserRepository y UserService
□ Crear AuthController con endpoints:
  - POST /api/auth/register
  - POST /api/auth/login
  - POST /api/auth/logout
□ JWT token generation y validation
□ Password hashing con bcrypt
□ Role-based access control (admin, user)
□ Tests unitarios para autenticación

Commits esperados:
✓ feat: authentication system with JWT
✓ feat: password hashing with bcrypt
✓ feat: role-based access control`}
          />

          <h3>Semana 3: Integration & Polish</h3>
          <CodeBlock
            language="text"
            code={`SEMANA 3 - Integración y Finalización
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Marc:
□ Conectar forms a API de Jonathan
□ Error handling y validaciones
□ Loading states (spinners, skeletons)
□ Responsive testing en múltiples dispositivos
□ Accesibilidad básica (alt text, labels)
□ Performance optimizations (lazy loading)

Jonathan:
□ Documentación de API endpoints
□ Testing de endpoints
□ Optimización de queries
□ Cors configuration
□ Environment variables por entorno

Ambos:
□ Weekly SCRUM meeting
□ Code review cruzado
□ Fix de bugs encontrados
□ Preparación de videos demostrativos`}
          />

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
          <CodeBlock
            language="text"
            code={`NUEVO PRODUCT OWNER: Marc López

SPRINT 2 PRIORIDADES:
━━━━━━━━━━━━━━━━━━━━━━━

1. Shopping Cart Implementation (MUST HAVE)
   ├─ Agregar/remover productos del carrito
   ├─ Actualizar cantidades
   ├─ Persistencia en BD
   └─ Cálculo automático de totales

2. Products API Enhancement (HIGH)
   ├─ Búsqueda por nombre
   ├─ Filtros por categoría
   ├─ Sorting (precio, popularidad)
   └─ Documentación mejorada

3. Admin Panel Básico (MEDIUM)
   ├─ Listado de productos
   ├─ Crear/editar/eliminar productos
   ├─ Gestión de categorías
   └─ Control de stock

4. Security Middleware (MUST HAVE)
   ├─ Rutas protegidas (requieren autenticación)
   ├─ Validación de permisos (admin-only)
   ├─ CORS configuración
   └─ Rate limiting en endpoints

JUSTIFICACIÓN:
La autenticación y catálogo establecen la base. Ahora necesitamos
la funcionalidad de compra (carrito) para que customers puedan
interactuar. El admin panel es crítico para gestión interna.

DURACIÓN: 3 semanas (similar a Sprint 1)
ESFUERZO ESTIMADO: 30-40 puntos`}
          />
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