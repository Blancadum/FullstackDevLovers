/**
 * Datos de los 8 Retos DAW
 * Se exporta para ser usado en múltiples componentes
 */

export const retosData = [
  {
    number: 1,
    title: 'Especificación del Proyecto',
    description: 'Propuesta individual de proyecto web. Define: nombre, tipo de negocio, análisis de competencia, funcionalidades, viabilidad económica y conformidad GDPR.',
    deadline: '08/10/2025',
    points: 9,
    duration: 'Individual',
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
  },

  {
    number: 2,
    title: 'Especificación de Requisitos',
    description: 'Define historias de usuario, criterios de aceptación y requisitos funcionales/no funcionales de tu proyecto.',
    deadline: '22/10/2025',
    points: 8,
    duration: 'Individual',
    solution: `REPTE 2 - Requirements Specification | Deadline: 22/10/2025
PUNTUACIÓN TOTAL: 8 puntos

A. HISTORIAS DE USUARIO (3 puntos)
   - Mínimo 8-10 historias de usuario
   - Formato: "Como [ACTOR], quiero [ACCIÓN], para que [BENEFICIO]"
   - Ejemplo:
     Como cliente, quiero buscar productos por categoría,
     para que encuentre rápidamente lo que necesito.

B. CRITERIOS DE ACEPTACIÓN (2 puntos)
   - Mínimo 3 criterios por historia
   - Específicos y testables
   - Ejemplo:
     ✓ El campo aceptará mínimo 2 caracteres
     ✓ Los resultados aparecerán en <2 segundos
     ✓ Mostrar número total de resultados

C. REQUISITOS FUNCIONALES (1.5 puntos)
   - Tabla: Funcionalidad | Historia de Usuario | Prioridad
   - Categorías: Alta, Media, Baja
   - Mínimo 10 requisitos

D. REQUISITOS NO FUNCIONALES (1.5 puntos)
   - Rendimiento: tiempo de carga, respuesta de APIs
   - Seguridad: encriptación, autenticación
   - Escalabilidad: usuarios simultáneos soportados
   - Disponibilidad: uptime esperado
   - Accesibilidad: WCAG 2.1 compliance

TABLA EJEMPLO:
Funcionalidad | Historia | Prioridad | RF/NF
Búsqueda | Como cliente, quiero buscar por nombre... | Alta | RF
Rendimiento | Las búsquedas deben responder en <1s | N/A | NF`
  },

  {
    number: 3,
    title: 'Diseño de Arquitectura y Base de Datos',
    description: 'Diseña la arquitectura en capas, endpoints API y modelo de datos con diagramas E-R.',
    deadline: '05/11/2025',
    points: 10,
    duration: 'Individual',
    solution: `REPTE 3 - Architecture & Database Design | Deadline: 05/11/2025
PUNTUACIÓN TOTAL: 10 puntos

A. DECISIONES ARQUITECTÓNICAS (3 puntos)
   - Technology stack (Frontend, Backend, Database, Server, API, Auth)
   - Justificación de cada decisión
   - Tabla de alternativas consideradas

EJEMPLO:
Componente | Opciones | Selección | Justificación
Frontend | React, Vue, Angular | React | Popular, comunidad, fácil aprendizaje
Backend | Java, Node, Python | Java Spring Boot | Robusto, escalable, type-safe
Database | MySQL, PostgreSQL, MongoDB | MySQL | Relacional, ACID, bien soportado

B. DIAGRAMA DE CAPAS (2 puntos)
   Presentación (UI)
        ↓ HTTP/JSON
   API Layer (REST endpoints)
        ↓
   Business Logic (Services)
        ↓
   Data Access (Repositories)
        ↓ SQL
   Database (MySQL)

C. ENDPOINTS API (2 puntos)
   - Mínimo 12-15 endpoints
   - Método HTTP (GET, POST, PUT, DELETE)
   - Path, descripción, parámetros, respuesta

   Ejemplo:
   GET    /api/products           - Listar productos
   GET    /api/products/:id       - Obtener producto
   POST   /api/products           - Crear producto (admin)
   PUT    /api/products/:id       - Actualizar producto
   DELETE /api/products/:id       - Eliminar producto

D. MODELO ENTIDAD-RELACIÓN (2 puntos)
   - Diagrama ER completo
   - Entidades y atributos
   - Relaciones (1:1, 1:N, N:M)

E. SEGURIDAD (1 punto)
   - Autenticación: JWT tokens
   - Encriptación: bcrypt para contraseñas
   - Validación: input sanitization
   - Autorización: roles y permisos`
  },

  {
    number: 4,
    title: 'Prototipo y Diseño Visual',
    description: 'Crea wireframes/mockups de interfaz y prototipo funcional básico en el entorno.',
    deadline: '19/11/2025',
    points: 7,
    duration: 'Individual',
    solution: `REPTE 4 - UI/UX Design & Prototype | Deadline: 19/11/2025
PUNTUACIÓN TOTAL: 7 puntos

A. WIREFRAMES (2 puntos)
   - Mínimo 6-8 pantallas principales
   - Herramientas: Figma, Adobe XD, Balsamiq
   - Incluir:
     * Homepage
     * Catálogo de productos
     * Página de producto detallado
     * Carrito de compras
     * Formulario de checkout
     * Panel de usuario
     * Panel de admin
     * Página de error 404

B. MOCKUPS VISUALES (2 puntos)
   - Añadir colores, tipografía, branding
   - Logo y paleta de colores
   - Componentes reutilizables
   - Design system (botones, inputs, cards)

C. PROTOTIPO FUNCIONAL (2 puntos)
   - HTML + CSS básico de 2-3 pantallas principales
   - Navegación entre pantallas
   - Responsive en móvil/tablet/desktop
   - Validación de formularios

D. USABILIDAD (1 punto)
   - Accesibilidad (WCAG 2.1 AA)
   - Navegación intuitiva
   - Indicadores visuales de estado
   - Consistencia en interfaz

CHECKLIST ENTREGA:
☐ Wireframes documentados
☐ Mockups en alta fidelidad
☐ Prototipo HTML/CSS funcional
☐ Link a Figma o archivo descargable
☐ Documento de decisiones de diseño`
  },

  {
    number: 5,
    title: 'Configuración Agile/SCRUM',
    description: 'Configura tu proyecto con metodología SCRUM en Taiga, definiendo EPICs, User Stories y Sprints.',
    deadline: '03/12/2025',
    points: 10,
    duration: 'Equipo (3 personas)',
    solution: `REPTE 5 - Agile Methodologies & SCRUM Planning | Deadline: 03/12/2025
PUNTUACIÓN TOTAL: 10 puntos

A. Análisis Agile vs Metodologías Tradicionales (4 puntos)

1. Comparación Agile vs Waterfall:
   AGILE:
   ✓ Flexible, adaptable a cambios
   ✓ Entrega frecuente (cada sprint)
   ✓ Cliente involucrado continuamente
   ✓ Detección temprana de problemas

   WATERFALL:
   ✓ Estructura clara y documentada
   ✓ Presupuesto predecible
   ✓ Bueno para requisitos estables
   ✗ Inflexible a cambios

2. Herramientas Agile:
   - Taiga: Open-source, SCRUM/Kanban, visual
   - Jira: Enterprise, customizable, reporting
   - Trello: Simple, visual cards
   - Asana: Tareas, timelines, workflows

B. Planificación SCRUM (6 puntos)

1. Definir 3-5 EPICs (características principales)
2. Desglosar en User Stories (mínimo 8-12)
3. Definir 3 Sprints de 3 semanas cada uno
4. Documentar roles SCRUM:
   - Product Owner: Supervisa completitud
   - Scrum Master: Facilita proceso
   - Development Team: Ejecuta tareas
5. Configurar en Taiga:
   ✓ Crear proyecto
   ✓ Invitar equipo
   ✓ Crear EPICs
   ✓ Crear User Stories
   ✓ Crear Sprints`
  },

  {
    number: 6,
    title: 'Primer Sprint Development',
    description: 'Implementa autenticación y catálogo de productos. Duración: 3 semanas.',
    deadline: '18/03/2026',
    points: 8,
    duration: 'Equipo (3 personas)',
    solution: `REPTE 6 - First Sprint Development | Deadline: 18/03/2026
PUNTUACIÓN TOTAL: 8 puntos

A. SPRINT PLANNING (2 puntos)
   1. Designar Product Owner (rotativo)
   2. Desglosar User Stories en tasks específicas
   3. Asignar tasks a equipo
   4. Configurar en Taiga

SPRINT 1 USER STORIES:
US#1: Usuarios pueden registrarse con email/contraseña
US#2: Usuarios pueden hacer login y logout
US#3: Visualizar catálogo de productos
US#4: Filtrar productos por categoría y precio

B. WEEKLY SCRUM (1 punto)
   - Reunión semanal de 15-30 min
   - Documentar en Taiga Wiki:
     * "Esta semana hice..."
     * "Próxima haré..."
     * "Obstáculos..."

C. SPRINT DEVELOPMENT (6 puntos)
   - Implementar funcionalidades del sprint
   - Commits frecuentes y claros
   - ~20 horas de desarrollo por persona
   - GitHub repository actualizado
   - Videos demostrativos (3 min por persona)

ENTREGABLES:
☐ Código en GitHub con rama develop
☐ Base de datos funcional
☐ Backend APIs implementadas
☐ Frontend responsive
☐ Tests básicos
☐ Wiki de proyecto actualizada

D. DEFINICIÓN SPRINT 2 (1 punto)
   - Nuevo Product Owner propone Sprint 2
   - Prioridades basadas en feedback Sprint 1`
  },

  {
    number: 7,
    title: 'Second Sprint Development',
    description: 'Implementa carrito, APIs completas y panel de admin. Duración: 3 semanas.',
    deadline: '15/04/2026',
    points: 8,
    duration: 'Equipo (3 personas)',
    solution: `REPTE 7 - Second Sprint Development | Deadline: 15/04/2026
PUNTUACIÓN TOTAL: 8 puntos

A. SPRINT PLANNING (2 puntos)
   1. Designar nuevo Product Owner (rotación)
   2. Desglosar User Stories en tasks detalladas
   3. Explicar contexto de cada tarea
   4. Justificar priorización
   5. Asignar tasks a equipo
   6. Configurar en Taiga

SPRINT 2 USER STORIES:
US#5: Agregar/eliminar productos del carrito
US#6: Visualizar carrito y total
US#7: Admin: crear/editar/eliminar productos
US#8: Admin: visualizar todas las órdenes

B. WEEKLY SCRUM (1 punto)
   ✓ Reunión semanal de sincronización
   ✓ Documentar en Wiki cada semana
   ✓ Identificar y resolver blockers

C. SPRINT DEVELOPMENT (6 puntos)
   ✓ Implementar funcionalidades del sprint
   ✓ Tests unitarios e integración
   ✓ Code review entre miembros
   ✓ Commits claros y frecuentes
   ✓ ~20 horas desarrollo por persona

ENTREGABLES:
☐ Carrito completamente funcional
☐ API endpoints: cart, admin products
☐ Panel de administración básico
☐ Autenticación JWT completa
☐ Tests (cobertura >70%)
☐ Wiki actualizada

D. DEFINICIÓN SPRINT 3 (1 punto)
   ✓ Nuevo Product Owner propone Sprint 3
   ✓ Prioridades: checkout, órdenes, deployment`
  },

  {
    number: 8,
    title: 'Final Sprint & Deployment',
    description: 'Implementa checkout seguro, gestión de órdenes y despliegue en producción. Duración: 4 semanas.',
    deadline: '13/05/2026',
    points: 12,
    duration: 'Equipo (3 personas)',
    solution: `REPTE 8 - Final Sprint & Deployment | Deadline: 13/05/2026
PUNTUACIÓN TOTAL: 12 puntos

A. SPRINT PLANNING (1 punto)
   □ Designar Product Owner (rotativo)
   □ Desglosar User Stories finales
   □ Priorizar deployment crítico

SPRINT 3 USER STORIES:
US#9: Formulario de checkout seguro
US#10: Procesamiento de pagos simulado
US#11: Historial de órdenes del usuario
US#12: Panel admin: cambiar estado de órdenes
US#13: Email de confirmación automático

B. SPRINT DEVELOPMENT (3 puntos)
   US#9: Secure Checkout
   - Formulario de envío con validaciones
   - Validación de datos de pago
   - Generación de confirmación
   - Email de confirmación automático

   US#10-US#12: Order Management
   - Visualizar todas las órdenes
   - Admin: cambiar estado (Pending → Shipped → Delivered)
   - Stock deduction automático
   - Historial de cambios

   US#13: Production Deployment
   - Migrar BD local → servidor remoto
   - Variables de entorno por stage
   - SSL certificate (Let's Encrypt)
   - Testing en producción

C. DOCUMENTATION (2 puntos)
   ✓ Wiki completo:
     * Arquitectura técnica
     * API documentation
     * Manual de usuario
     * Guía de instalación

D. TESTING & QA (3 puntos)
   □ E2E Testing: login → compra → confirmación
   □ Security: autenticación, autorización, validación
   □ Performance: <2s carga, <500ms APIs
   □ Load testing: 100+ usuarios simultáneos

E. DEPLOYMENT (2 puntos)
   ✓ Ambiente de producción configurable
   ✓ Backup automático de BD
   ✓ Monitoreo de errores
   ✓ Logs centralizados
   ✓ Plan de rollback documentado

F. PRESENTACIÓN FINAL (1 punto)
   □ Demo funcionando en producción
   □ Explicación arquitectura y decisiones
   □ Métricas de proyecto
   □ Retrospectiva de equipo`
  }
];
