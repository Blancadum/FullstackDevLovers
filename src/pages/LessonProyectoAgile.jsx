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
          <ul>
            <li>Requisitos no completamente claros al inicio</li>
            <li>Cliente disponible para feedback frecuente</li>
            <li>Equipo pequeño (2-10 personas)</li>
            <li>Proyecto web/mobile con cambios rápidos</li>
            <li>Startup o producto MVP (Minimum Viable Product)</li>
          </ul>

          <h3>Cuándo usar Waterfall</h3>
          <ul>
            <li>Requisitos muy claros y estables</li>
            <li>Proyecto regulado o crítico</li>
            <li>Cliente no disponible frecuentemente</li>
            <li>Equipo grande distribuido geográficamente</li>
            <li>Presupuesto y timeline fijo</li>
          </ul>
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

          <CodeBlock
            language="text"
            code={`CASO JOMA - EPICS DEFINIDAS

EPIC 1: Authentication & User Management
├─ Descripción: Sistema completo de autenticación y gestión de usuarios
├─ Impacto: Crítico (base para acceso al sistema)
└─ US asociadas: 4-5 user stories

EPIC 2: Product Catalog
├─ Descripción: Gestión y visualización de catálogo de productos
├─ Impacto: Alta (funcionalidad principal para clientes)
└─ US asociadas: 5-6 user stories

EPIC 3: Shopping Cart & Checkout
├─ Descripción: Carrito de compras y proceso de compra
├─ Impacto: Crítico (genera ingresos)
└─ US asociadas: 6-7 user stories

EPIC 4: Order Management
├─ Descripción: Gestión de órdenes y seguimiento
├─ Impacto: Alta (operación posterior a compra)
└─ US asociadas: 4-5 user stories

EPIC 5: Admin Dashboard
├─ Descripción: Panel de administración del sistema
├─ Impacto: Media (pero necesario para operación)
└─ US asociadas: 5-6 user stories`}
          />

          <h3>User Stories - Tareas Específicas</h3>
          <p>
            Una User Story describe una funcionalidad específica desde la perspectiva del usuario.
            Sigue el formato: "Como [ACTOR], quiero [ACCIÓN], para que [BENEFICIO]"
          </p>

          <CodeBlock
            language="text"
            code={`EPIC 1: Authentication & User Management

US#1: User Registration
Como cliente nuevo, quiero registrarme en la plataforma,
para que pueda crear mi cuenta y hacer compras.

Criterios de Aceptación:
✓ Formulario con email, contraseña, nombre, apellido
✓ Validar email único en BD
✓ Contraseña mínimo 8 caracteres
✓ Encriptar contraseña con bcrypt
✓ Email de confirmación
✓ Redirigir a login después del registro

Tamaño de esfuerzo: 5 puntos (aprox 4-8 horas)

---

US#2: User Login
Como usuario registrado, quiero hacer login,
para que pueda acceder a la plataforma y mis datos.

Criterios de Aceptación:
✓ Formulario con email y contraseña
✓ Validar credenciales contra BD
✓ Generar JWT token si válidas
✓ Almacenar token en localStorage
✓ Token con expiración 1 hora
✓ Redirigir a dashboard si login exitoso
✓ Mostrar error si credenciales inválidas

Tamaño de esfuerzo: 5 puntos (aprox 4-8 horas)

---

US#3: View Product Catalog
Como cliente, quiero ver el catálogo de productos,
para que pueda buscar y seleccionar productos.

Criterios de Aceptación:
✓ Listar todos los productos
✓ Mostrar imagen, nombre, descripción, precio
✓ Paginación cada 12 productos
✓ Cargar en < 2 segundos
✓ Responsive en móvil/tablet/desktop
✓ Botón "Agregar al carrito" en cada producto

Tamaño de esfuerzo: 8 puntos (aprox 5-8 horas)`}
          />
        </>
      )
    },

    {
      title: 'Planificación de Sprints (3 Sprints)',
      content: (
        <>
          <h3>Sprint Planning - Cómo Funciona</h3>
          <CodeBlock
            language="text"
            code={`ESTRUCTURA DE UN SPRINT

1. SPRINT PLANNING (1-2 horas)
   - Product Owner presenta User Stories priorizado
   - Equipo estima esfuerzo en puntos
   - Equipo selecciona US para el sprint
   - Consenso sobre objetivo del sprint

2. SPRINT BACKLOG DEFINIDO
   - Conjunto de US y tasks para este sprint
   - Asignaciones claras por equipo/persona
   - Estimaciones de tiempo

3. DAILY STANDUP (adaptado a WEEKLY en curso)
   - Reunión corta (15 min idealmente)
   - Cada miembro reporta:
     • "Esta semana hice..."
     • "La próxima haré..."
     • "Obstáculos encontrados..."
     • "¿Necesito ayuda con...?"

4. SPRINT DEVELOPMENT
   - Desarrollo de tareas asignadas
   - ~20 horas de esfuerzo por persona/sprint
   - Commits frecuentes en Git
   - Documentación en Wiki

5. SPRINT REVIEW
   - Demostración de funcionalidades completadas
   - Feedback del cliente/stakeholders
   - Actualizar Product Backlog

6. SPRINT RETROSPECTIVE
   - Equipo reflexiona: ¿Qué salió bien?
   - ¿Qué salió mal? ¿Cómo mejorar?
   - Acciones para próximo sprint`}
          />

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
          <CodeBlock
            language="text"
            code={`PASO A PASO - CREAR PROYECTO EN TAIGA

1. Crear Proyecto
   - URL: taiga.io
   - New Project → Scrum
   - Nombre: "JoMa E-commerce"
   - Descripción: Plataforma de venta de entradas

2. Agregar Equipo
   - Settings → Members
   - Invitar: Product Owner, Scrum Master, Developers
   - Asignar roles

3. Crear EPICs
   - Backlog → Add Epic
   - Epic 1: Authentication System
   - Epic 2: Product Catalog
   - Epic 3: Shopping Cart
   - Epic 4: Order Management
   - Epic 5: Admin Dashboard

4. Crear User Stories
   - Backlog → Add User Story
   - Asociar a EPIC
   - Escribir criterios de aceptación
   - Estimar puntos (Fibonacci: 1,2,3,5,8,13)

5. Crear Sprints
   - Sprints → New Sprint
   - Sprint 1: 20/01/2026 - 10/02/2026
   - Sprint 2: 11/02/2026 - 04/03/2026
   - Sprint 3: 05/03/2026 - 30/03/2026

6. Planificar Sprint
   - Drag & drop User Stories a sprint
   - Desglosar en Tasks (si es necesario)
   - Asignar a equipo
   - Configurar estado (To Do, In Progress, Done)

7. Iniciar Sprint
   - Click "Start Sprint"
   - Equipo comienza trabajo
   - Daily/Weekly updates`}
          />

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
          <ul>
            <li><strong>Responsabilidad:</strong> Maximizar valor del producto</li>
            <li><strong>Tareas:</strong> Priorizar backlog, clarificar requisitos, aceptar/rechazar trabajo</li>
            <li><strong>En Sprints:</strong> Designado al inicio (rotativo recomendado)</li>
            <li><strong>Ejemplo JoMa:</strong> Jonathan Reina en Sprint 1, Marc López en Sprint 3</li>
          </ul>

          <h3>Scrum Master (SM)</h3>
          <ul>
            <li><strong>Responsabilidad:</strong> Facilitar proceso SCRUM</li>
            <li><strong>Tareas:</strong> Eliminar obstáculos, facilitar reuniones, coaching del equipo</li>
            <li><strong>En Curso:</strong> Típicamente el profesor/mentor</li>
            <li><strong>NO es:</strong> Jefe del equipo ni micro-manager</li>
          </ul>

          <h3>Development Team</h3>
          <ul>
            <li><strong>Responsabilidad:</strong> Entregar incremento de producto funcional</li>
            <li><strong>Tareas:</strong> Estimar, desarrollar, testear, documentar</li>
            <li><strong>Autoorganizado:</strong> Decide cómo realizar el trabajo</li>
            <li><strong>Tamaño ideal:</strong> 3-9 personas (en curso: 2-3)</li>
          </ul>

          <h3>Rotación de Product Owner</h3>
          <CodeBlock
            language="text"
            code={`RECOMENDACIÓN: Rotar PO cada sprint

Sprint 1:
- PO: Jonathan Reina (Backend perspective)
- Desarrolladores: Jonathan (backend) + Marc (frontend)

Sprint 2:
- PO: Marc López (Frontend perspective)
- Desarrolladores: Marc (frontend) + Jonathan (backend)

Sprint 3:
- PO: Jonathan Reina (Final sprint, perspectiva técnica)
- Desarrolladores: Ambos

BENEFICIO:
✓ Ambos entienden perspectiva de negocio (PO)
✓ Ambos entienden restricciones técnicas
✓ Mejor comunicación en equipo
✓ Desarrollo más equilibrado`}
          />
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