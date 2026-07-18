import { LessonTemplate, CodeBlock, InfoBox, Table } from '../components';
import { LessonNavigation } from '../components/LessonNavigation';
import { useBreadcrumb } from '../hooks/useBreadcrumb';
import { useLessonNavigation } from '../hooks/useLessonNavigation';

export function LessonProyectoAgile() {
  const breadcrumbs = useBreadcrumb();
  const nav = useLessonNavigation();

  const concepts = [
    {
      icon: '🔄',
      title: 'Metodología Agile',
      definition: 'Desarrollo iterativo con ciclos cortos (sprints) y entregas frecuentes',
      example: 'SCRUM con sprints de 2-4 semanas, entrega de funcionalidad cada sprint'
    },
    {
      icon: '📚',
      title: 'Product Backlog',
      definition: 'Lista de todas las funcionalidades requeridas del proyecto',
      example: 'EPICs (grandes características) desglosadas en User Stories'
    },
    {
      icon: '⚡',
      title: 'Sprint',
      definition: 'Ciclo de desarrollo de 1-4 semanas con objetivos claros',
      example: 'Sprint 1: Autenticación + Catálogo; Sprint 2: Carrito; Sprint 3: Checkout'
    },
    {
      icon: '👥',
      title: 'Roles SCRUM',
      definition: 'Product Owner (PO), Scrum Master (SM), Development Team',
      example: 'PO define prioridades, SM facilita proceso, Team ejecuta tareas'
    },
  ];

  const exercises = [
    {
      title: 'REPTE 5: Configuración Agile/SCRUM',
      description: 'Configura tu proyecto con metodología SCRUM en Taiga, definiendo EPICs, User Stories y Sprints.',
      solution: `REPTE 5 - Agile Methodologies & SCRUM Planning | Puntos: 10

A. Análisis Agile vs Metodologías Tradicionales (4 puntos)

1. Comparación Agile vs Waterfall:
   AGILE:
   ✓ Flexible, adaptable a cambios
   ✓ Entrega frecuente (cada sprint)
   ✓ Cliente involucrado continuamente
   ✓ Detección temprana de problemas
   ✗ Costo final difícil de estimar
   ✗ Requiere alto compromiso del equipo

   WATERFALL:
   ✓ Estructura clara y documentada
   ✓ Presupuesto predecible
   ✓ Bueno para requisitos estables
   ✗ Inflexible a cambios
   ✗ Testing tardío (bugs descobertos al final)
   ✗ Menos interacción con cliente

2. Herramientas Agile (investigar 3+):
   - Taiga: Open-source, SCRUM/Kanban, visual
   - Jira: Enterprise, customizable, reporting
   - Trello: Simple, visual cards, pequeños equipos
   - Asana: Tareas, timelines, workflows
   - ClickUp: Flexible, Sprint planning, IA

B. Planificación SCRUM (6 puntos)

1. Definir 3-5 EPICs (características principales):
   Ejemplo JoMa:
   - EPIC 1: User Authentication System
   - EPIC 2: Product Catalog Management
   - EPIC 3: Shopping Cart & Checkout
   - EPIC 4: Order Management
   - EPIC 5: Admin Dashboard

2. Desglosar en User Stories (mínimo 8-12):
   EPIC 1 User Stories:
   - US#1: Usuarios pueden registrarse
   - US#2: Usuarios pueden hacer login
   - US#3: Usuarios pueden logout
   - US#4: Recuperar contraseña olvidada

3. Definir 3 Sprints:
   - Sprint 1 (3 semanas): Authentication + Catalog
   - Sprint 2 (3 semanas): Shopping Cart + APIs
   - Sprint 3 (4 semanas): Checkout + Admin + Deployment

4. Roles SCRUM:
   - Product Owner: Supervisa completitud de tareas
   - Scrum Master: Facilita proceso, elimina blockers
   - Development Team: Ejecuta tareas

5. Configurar en Taiga:
   ✓ Crear proyecto
   ✓ Invitar equipo con roles apropiados
   ✓ Crear EPICs
   ✓ Crear User Stories bajo cada EPIC
   ✓ Crear Sprints con US asignadas
   ✓ Captura de pantalla de configuración`
    }
  ];

  const sections = [
    {
      title: 'Agile vs Metodologías Tradicionales',
      content: (
        <>
          <Table
            headers={['Aspecto', 'Agile/SCRUM', 'Waterfall/Tradicional']}
            rows={[
              ['Cambios', 'Bienvenidos en cualquier momento', 'Difíciles y costosos'],
              ['Entregas', 'Frecuentes (cada sprint)', 'Una al final'],
              ['Testing', 'Continuo durante sprints', 'Al final (fase de QA)'],
              ['Cliente', 'Involucrado continuamente', 'Involucrado al inicio y final'],
              ['Documentación', 'Mínima, funcional', 'Extensiva, detallada'],
              ['Riesgo', 'Detectado temprano', 'Detectado late'],
              ['Presupuesto', 'Variable (ajustable)', 'Fijo (predecible)'],
              ['Mejor para', 'Requisitos cambiantes, startups', 'Requisitos estables, proyectos grandes'],
            ]}
          />

          <h3>Cuándo usar Agile</h3>
          <p>
            Agile funciona mejor cuando <strong>requisitos no están completamente claros</strong> al inicio. Web projects evolucionan;
            necesitas flexibilidad. Agile requiere <strong>cliente disponible para feedback</strong> frecuente; si tu cliente está siempre
            ocupado, no es ideal. Agile funciona mejor con <strong>equipos pequeños</strong> (2-10 personas); mucha comunicación es fácil.
            Es excelente para <strong>proyectos web/mobile que cambian rápidamente</strong> según tendencias de mercado. Si eres
            <strong>startup o construyes MVP (Minimum Viable Product)</strong>, Agile es perfecto porque necesitas iterar rápido.
          </p>

          <h3>Cuándo usar Waterfall</h3>
          <p>
            Waterfall funciona cuando <strong>requisitos son muy claros y estables</strong>. Ej: un proyecto de infraestructura donde
            sabes exactamente qué necesitas. Waterfall es obligatorio para <strong>proyectos regulados o críticos</strong> como sistemas
            bancarios o médicos, donde necesitas documentación exhaustiva y auditoría. Si tu <strong>cliente no está disponible frecuentemente</strong>,
            Waterfall es mejor; defines todo upfront, entregas al final. Waterfall es mejor para <strong>equipos grandes distribuidos
            geográficamente</strong> donde mucha comunicación síncrona es difícil. Si tienes <strong>presupuesto y timeline fijo</strong>,
            Waterfall es más fácil de estimar.
          </p>
        </>
      )
    },

    {
      title: 'Componentes SCRUM: EPICs y User Stories',
      content: (
        <>
          <h3>EPICs - Características Principales</h3>
          <p>
            Un EPIC es una característica grande que se desglosará en User Stories. Representa
            una funcionalidad completa del sistema.
          </p>

          <p>
            <strong>EPIC 1: Authentication & User Management</strong> - Sistema completo de autenticación y gestión de usuarios.
            Impacto: Crítico (base para acceso al sistema). US asociadas: 4-5 user stories.
          </p>

          <p>
            <strong>EPIC 2: Product Catalog</strong> - Gestión y visualización de catálogo de productos. Impacto: Alta
            (funcionalidad principal para clientes). US asociadas: 5-6 user stories.
          </p>

          <p>
            <strong>EPIC 3: Shopping Cart & Checkout</strong> - Carrito de compras y proceso de compra. Impacto: Crítico
            (genera ingresos). US asociadas: 6-7 user stories.
          </p>

          <p>
            <strong>EPIC 4: Order Management</strong> - Gestión de órdenes y seguimiento. Impacto: Alta (operación posterior
            a compra). US asociadas: 4-5 user stories.
          </p>

          <p>
            <strong>EPIC 5: Admin Dashboard</strong> - Panel de administración del sistema. Impacto: Media (pero necesario para
            operación). US asociadas: 5-6 user stories.
          </p>

          <h3>User Stories - Tareas Específicas</h3>
          <p>
            Una User Story describe una funcionalidad específica desde la perspectiva del usuario.
            Sigue el formato: "Como [ACTOR], quiero [ACCIÓN], para que [BENEFICIO]"
          </p>

          <p>
            <strong>EPIC 1: Authentication & User Management</strong>
          </p>

          <h4>US#1: User Registration</h4>
          <p>
            Como cliente nuevo, quiero registrarme en la plataforma, para que pueda crear mi cuenta y hacer compras.
          </p>
          <p>
            <strong>Criterios de Aceptación:</strong> Formulario con email, contraseña, nombre, apellido; validar email único
            en BD; contraseña mínimo 8 caracteres; encriptar contraseña con bcrypt; email de confirmación; redirigir a login
            después del registro.
          </p>
          <p>
            <strong>Tamaño de esfuerzo:</strong> 5 puntos (aprox 4-8 horas)
          </p>

          <h4>US#2: User Login</h4>
          <p>
            Como usuario registrado, quiero hacer login, para que pueda acceder a la plataforma y mis datos.
          </p>
          <p>
            <strong>Criterios de Aceptación:</strong> Formulario con email y contraseña; validar credenciales contra BD;
            generar JWT token si válidas; almacenar token en localStorage; token con expiración 1 hora; redirigir a dashboard
            si login exitoso; mostrar error si credenciales inválidas.
          </p>
          <p>
            <strong>Tamaño de esfuerzo:</strong> 5 puntos (aprox 4-8 horas)
          </p>

          <h4>US#3: View Product Catalog</h4>
          <p>
            Como cliente, quiero ver el catálogo de productos, para que pueda buscar y seleccionar productos.
          </p>
          <p>
            <strong>Criterios de Aceptación:</strong> Listar todos los productos; mostrar imagen, nombre, descripción, precio;
            paginación cada 12 productos; cargar en &lt; 2 segundos; responsive en móvil/tablet/desktop; botón "Agregar al carrito"
            en cada producto.
          </p>
          <p>
            <strong>Tamaño de esfuerzo:</strong> 8 puntos (aprox 5-8 horas)
          </p>
        </>
      )
    },

    {
      title: 'Planificación de Sprints (3 Sprints)',
      content: (
        <>
          <h3>Sprint Planning - Cómo Funciona</h3>
          <p>
            <strong>1. SPRINT PLANNING (1-2 horas)</strong> - Product Owner presenta User Stories priorizado, equipo estima
            esfuerzo en puntos, equipo selecciona US para el sprint, consenso sobre objetivo del sprint.
          </p>

          <p>
            <strong>2. SPRINT BACKLOG DEFINIDO</strong> - Conjunto de US y tasks para este sprint, asignaciones claras por
            equipo/persona, estimaciones de tiempo.
          </p>

          <p>
            <strong>3. DAILY STANDUP (adaptado a WEEKLY en curso)</strong> - Reunión corta (15 min idealmente), cada miembro
            reporta: "Esta semana hice...", "La próxima haré...", "Obstáculos encontrados...", "¿Necesito ayuda con...?"
          </p>

          <p>
            <strong>4. SPRINT DEVELOPMENT</strong> - Desarrollo de tareas asignadas, aproximadamente 20 horas de esfuerzo por
            persona/sprint, commits frecuentes en Git, documentación en Wiki.
          </p>

          <p>
            <strong>5. SPRINT REVIEW</strong> - Demostración de funcionalidades completadas, feedback del cliente/stakeholders,
            actualizar Product Backlog.
          </p>

          <p>
            <strong>6. SPRINT RETROSPECTIVE</strong> - Equipo reflexiona: ¿Qué salió bien?, ¿Qué salió mal? ¿Cómo mejorar?,
            acciones para próximo sprint.
          </p>

          <svg viewBox="0 0 700 250" style={{ width: '100%', maxWidth: '700px', margin: '2rem auto', border: '1px solid #ddd', borderRadius: '8px', backgroundColor: '#f9f9f9' }}>
            {/* Timeline line */}
            <line x1="50" y1="80" x2="650" y2="80" stroke="#999" strokeWidth="2"/>

            {/* Sprint 1 */}
            <g>
              <circle cx="150" cy="80" r="15" fill="#E3F2FD" stroke="#1976D2" strokeWidth="2"/>
              <text x="150" y="85" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#1565C0">1</text>
              <text x="150" y="125" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#333">Sprint 1</text>
              <text x="150" y="145" textAnchor="middle" fontSize="10" fill="#555">3 semanas</text>
              <text x="150" y="162" textAnchor="middle" fontSize="9" fill="#777" fontStyle="italic">Fundación</text>

              {/* Features box */}
              <rect x="100" y="175" width="100" height="60" fill="#E3F2FD" stroke="#1976D2" strokeWidth="1" rx="3"/>
              <text x="150" y="192" textAnchor="middle" fontSize="9" fill="#1565C0" fontWeight="bold">Autenticación</text>
              <text x="150" y="207" textAnchor="middle" fontSize="9" fill="#1565C0">+ Catálogo</text>
              <text x="150" y="222" textAnchor="middle" fontSize="9" fill="#1565C0">de productos</text>
            </g>

            {/* Sprint 2 */}
            <g>
              <circle cx="400" cy="80" r="15" fill="#F3E5F5" stroke="#7B1FA2" strokeWidth="2"/>
              <text x="400" y="85" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#6A1B9A">2</text>
              <text x="400" y="125" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#333">Sprint 2</text>
              <text x="400" y="145" textAnchor="middle" fontSize="10" fill="#555">3 semanas</text>
              <text x="400" y="162" textAnchor="middle" fontSize="9" fill="#777" fontStyle="italic">Compra</text>

              {/* Features box */}
              <rect x="350" y="175" width="100" height="60" fill="#F3E5F5" stroke="#7B1FA2" strokeWidth="1" rx="3"/>
              <text x="400" y="192" textAnchor="middle" fontSize="9" fill="#6A1B9A" fontWeight="bold">Carrito</text>
              <text x="400" y="207" textAnchor="middle" fontSize="9" fill="#6A1B9A">+ APIs REST</text>
              <text x="400" y="222" textAnchor="middle" fontSize="9" fill="#6A1B9A">+ Admin básico</text>
            </g>

            {/* Sprint 3 */}
            <g>
              <circle cx="650" cy="80" r="15" fill="#E8F5E9" stroke="#388E3C" strokeWidth="2"/>
              <text x="650" y="85" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#2E7D32">3</text>
              <text x="650" y="125" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#333">Sprint 3</text>
              <text x="650" y="145" textAnchor="middle" fontSize="10" fill="#555">3 semanas</text>
              <text x="650" y="162" textAnchor="middle" fontSize="9" fill="#777" fontStyle="italic">Checkout</text>

              {/* Features box */}
              <rect x="600" y="175" width="100" height="60" fill="#E8F5E9" stroke="#388E3C" strokeWidth="1" rx="3"/>
              <text x="650" y="192" textAnchor="middle" fontSize="9" fill="#2E7D32" fontWeight="bold">Checkout</text>
              <text x="650" y="207" textAnchor="middle" fontSize="9" fill="#2E7D32">+ Pagos</text>
              <text x="650" y="222" textAnchor="middle" fontSize="9" fill="#2E7D32">+ Testing</text>
            </g>
          </svg>

          <h3>Distribución en 3 Sprints</h3>
          <Table
            headers={['Sprint', 'Duración', 'Objetivo Principal', 'Funcionalidades']}
            rows={[
              ['Sprint 1', '3 semanas', 'Fundación', 'Autenticación + Catálogo de productos'],
              ['Sprint 2', '3 semanas', 'Compra', 'Carrito de compras + APIs REST + Admin básico'],
              ['Sprint 3', '4 semanas', 'Finalización', 'Checkout + Pago simulado + Despliegue'],
            ]}
          />

          <h3>Configuración en Taiga</h3>
          <h4>1. Crear Proyecto</h4>
          <p>
            Ir a taiga.io, seleccionar New Project → Scrum, poner nombre: "JoMa E-commerce", descripción: Plataforma de venta
            de entradas.
          </p>

          <h4>2. Agregar Equipo</h4>
          <p>
            En Settings → Members, invitar: Product Owner, Scrum Master, Developers con los roles apropiados asignados.
          </p>

          <h4>3. Crear EPICs</h4>
          <p>
            En Backlog → Add Epic, crear: Epic 1 (Authentication System), Epic 2 (Product Catalog), Epic 3 (Shopping Cart),
            Epic 4 (Order Management), Epic 5 (Admin Dashboard).
          </p>

          <h4>4. Crear User Stories</h4>
          <p>
            En Backlog → Add User Story, asociar a EPIC, escribir criterios de aceptación, estimar puntos usando escala Fibonacci
            (1, 2, 3, 5, 8, 13).
          </p>

          <h4>5. Crear Sprints</h4>
          <p>
            En Sprints → New Sprint, crear: Sprint 1 (20/01/2026 - 10/02/2026), Sprint 2 (11/02/2026 - 04/03/2026), Sprint 3
            (05/03/2026 - 30/03/2026).
          </p>

          <h4>6. Planificar Sprint</h4>
          <p>
            Drag & drop User Stories a cada sprint, desglosar en Tasks si es necesario, asignar a equipo, configurar estado
            (To Do, In Progress, Done).
          </p>

          <h4>7. Iniciar Sprint</h4>
          <p>
            Click "Start Sprint", equipo comienza trabajo, realizar daily/weekly updates durante el sprint.
          </p>

          <InfoBox type="info">
            <strong>Estimación en Agile:</strong> Los "puntos" no son horas. Son unidades de complejidad.
            Una US de 3 puntos es más compleja que una de 1 punto, pero no necesariamente 3 veces más larga.
          </InfoBox>
        </>
      )
    },

    {
      title: 'Roles SCRUM y Responsabilidades',
      content: (
        <>
          <h3>Product Owner (PO)</h3>
          <p>
            El <strong>Product Owner</strong> tiene responsabilidad de <strong>maximizar valor del producto</strong>. Sus tareas:
            <strong>priorizar backlog</strong> (qué es más importante), <strong>clarificar requisitos</strong> (asegurar que Development
            Team entienda), <strong>aceptar o rechazar</strong> trabajo completado. En el curso, el PO es designado al inicio de cada sprint,
            preferentemente rotando. Esto desarrolla habilidades en todo el equipo. En proyectos reales, el PO es típicamente el cliente
            o su representante.
          </p>

          <h3>Scrum Master (SM)</h3>
          <p>
            El <strong>Scrum Master</strong> facilita el proceso SCRUM, no dirige. Responsabilidad: <strong>eliminar obstáculos</strong>
            (si alguien está bloqueado, SM resuelve), <strong>facilitar reuniones</strong> (asegurar que sean productivas, no largas),
            <strong>coaching del equipo</strong> (enseña SCRUM, mejora hábitos). En el curso, típicamente es el profesor o mentor. El SM
            NO es jefe ni micro-manager. El equipo es autoorganizado; SM solo remueve barreras.
          </p>

          <h3>Development Team</h3>
          <p>
            El <strong>Development Team</strong> es responsable de <strong>entregar incremento de producto funcional</strong> cada sprint.
            Tareas: <strong>estimar</strong> esfuerzo de User Stories, <strong>desarrollar</strong> código, <strong>testear</strong> su trabajo,
            <strong>documentar</strong>. El team es <strong>autoorganizado</strong>: decide cómo realizar el trabajo, no PO diciéndoles qué hacer.
            Tamaño ideal: 3-9 personas en proyectos reales. En el curso, típicamente 2-3 personas.
          </p>

          <h3>Rotación de Product Owner</h3>
          <p>
            <strong>Recomendación: Rotar Product Owner cada sprint</strong>
          </p>

          <p>
            <strong>Sprint 1:</strong> PO: Jonathan Reina (Backend perspective), Desarrolladores: Jonathan (backend) + Marc
            (frontend).
          </p>

          <p>
            <strong>Sprint 2:</strong> PO: Marc López (Frontend perspective), Desarrolladores: Marc (frontend) + Jonathan
            (backend).
          </p>

          <p>
            <strong>Sprint 3:</strong> PO: Jonathan Reina (Final sprint, perspectiva técnica), Desarrolladores: Ambos.
          </p>

          <p>
            <strong>Beneficios:</strong> Ambos entienden perspectiva de negocio (PO), ambos entienden restricciones técnicas,
            mejor comunicación en equipo, desarrollo más equilibrado.
          </p>
        </>
      )
    },
  ];

  const keyPoints = [
    'Agile es iterativo, Waterfall es secuencial',
    'Sprints de 2-4 semanas con entrega de funcionalidad',
    'EPICs se desglosan en User Stories',
    'User Stories: "Como X, quiero Y, para que Z"',
    'Estimación en puntos (no horas)',
    'Roles: Product Owner, Scrum Master, Development Team',
    'Rotación de Product Owner desarrolla habilidades diversas',
    'Daily/Weekly standups para sincronización',
    'Sprint Review + Retrospective para mejora continua',
    'Configurar en Taiga: EPICs, US, Sprints, Tasks'
  ];

  const summary = `SCRUM es la metodología Agile más popular para desarrollo:

• Sprints: Ciclos de 1-4 semanas (idealmente 2 semanas)
• Product Backlog: Todas las funcionalidades requeridas
• EPICs: Características grandes (desglosadas en US)
• User Stories: Tareas específicas con criterios de aceptación
• Roles: PO (prioriza), SM (facilita), Team (desarrolla)
• Estimación en puntos (Fibonacci: 1,2,3,5,8,13)
• Daily Standup: Sincronización del equipo
• Sprint Review: Demostración de funcionalidades
• Retrospective: Mejora continua del proceso
• Taiga, Jira, Trello: Herramientas populares para SCRUM`;

      return (
    <>
      <LessonTemplate
        title="Agile y SCRUM"
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