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
          <p>Responde estas preguntas:</p>
          <CodeBlock
            language="text"
            code={`1. ¿QUÉ? - Descripción del proyecto
   Ej: Sistema de gestión de tareas colaborativo

2. ¿PARA QUIÉN? - Usuarios objetivo
   Ej: Equipos de trabajo que necesitan organizarse

3. ¿POR QUÉ? - Objetivo/problema que resuelve
   Ej: Mejorar comunicación y organización del equipo

4. ¿CUÁL ES EL ALCANCE? - Qué incluye, qué NO incluye
   Incluye: crear, editar, asignar tareas, comentarios
   NO incluye: videollamadas, chatbot de IA

5. ¿CUÁL ES EL TIMELINE? - Cuándo estará listo
   Ej: 3 meses de desarrollo`}
          />
        </>
      )
    },

    {
      title: 'Requisitos Funcionales',
      content: (
        <>
          <p>
            Son acciones específicas que el sistema debe realizar. Escríbelas como
            historias de usuario:
          </p>
          <CodeBlock
            language="text"
            code={`FORMATO: "Como [TIPO DE USUARIO], quiero [ACCIÓN],
         para que [BENEFICIO]"

EJEMPLO 1:
Como usuario, quiero registrarme con email y contraseña,
para que pueda acceder al sistema.

EJEMPLO 2:
Como administrador, quiero ver reportes de usuarios activos,
para que pueda monitorear la plataforma.

EJEMPLO 3:
Como vendedor, quiero cargar fotos de productos,
para que los clientes vean cómo se ven.`}
          />

          <h3>Lista de Requisitos Típicos:</h3>
          <ul>
            <li>Autenticación (login/registro)</li>
            <li>Crear, leer, actualizar, eliminar (CRUD)</li>
            <li>Búsqueda y filtrado</li>
            <li>Reportes y estadísticas</li>
            <li>Notificaciones</li>
            <li>Exportar datos</li>
          </ul>
        </>
      )
    },

    {
      title: 'Requisitos No Funcionales',
      content: (
        <>
          <p>
            Son características de calidad que NO describen funcionalidad, sino
            propiedades del sistema:
          </p>
          <CodeBlock
            language="text"
            code={`RENDIMIENTO:
• Cargar página en < 2 segundos
• Respuesta de API en < 500ms
• Soportar 10.000 usuarios simultáneos

SEGURIDAD:
• Encriptar contraseñas con bcrypt
• HTTPS en todas las conexiones
• Validar entrada (evitar SQL injection)
• Tokens JWT con expiración 1 hora

DISPONIBILIDAD:
• 99.9% uptime (máx 43 minutos/mes inactivo)
• Backup automático diario
• Recuperación ante fallos < 1 hora

ESCALABILIDAD:
• Base de datos: máx 1 millón de registros
• Aumentar servidores horizontalmente
• Caché para datos frecuentes

USABILIDAD:
• Interfaz intuitiva (sin entrenamiento)
• Compatible con móviles
• Accesible para usuarios con discapacidades`}
          />
        </>
      )
    },

    {
      title: 'Arquitectura del Sistema',
      content: (
        <>
          <p>Define la estructura general de tu aplicación:</p>
          <CodeBlock
            language="text"
            code={`ARQUITECTURA EN CAPAS (Recomendada para este curso):

┌─────────────────────────────────────┐
│  PRESENTATION LAYER (Frontend)      │ ← HTML, CSS, JavaScript
├─────────────────────────────────────┤
│  API LAYER (Controllers)            │ ← @RestController, endpoints
├─────────────────────────────────────┤
│  BUSINESS LOGIC (Services)          │ ← Lógica de negocio
├─────────────────────────────────────┤
│  DATA ACCESS (Repositories)         │ ← JPA, queries
├─────────────────────────────────────┤
│  DATABASE LAYER                     │ ← MySQL, PostgreSQL
└─────────────────────────────────────┘

PATRÓN MVC (Model-View-Controller):
• Model: entidades Java (Usuario, Producto, etc)
• View: respuestas JSON/HTML
• Controller: recibe requests, llama services

EJEMPLO DE FLUJO:
1. Usuario entra en /productos
2. Controller recibe request
3. Service llama Repository
4. Repository consulta BD
5. Datos vuelven a Service → Controller → View (JSON)
6. Frontend muestra productos`}
          />
        </>
      )
    },

    {
      title: 'Modelo Entidad-Relación (BD)',
      content: (
        <>
          <p>
            Diseña cómo se relacionan los datos antes de crear la BD:
          </p>
          <CodeBlock
            language="text"
            code={`EJEMPLO: Sistema de Tienda Online

ENTIDADES:
┌─────────────────┐     ┌─────────────────┐
│ Usuario         │     │ Producto        │
├─────────────────┤     ├─────────────────┤
│ id (PK)         │     │ id (PK)         │
│ nombre          │     │ nombre          │
│ email (UNIQUE)  │     │ precio          │
│ contraseña      │     │ stock           │
│ fecha_registro  │     │ descripción     │
└─────────────────┘     └─────────────────┘
        │                       △
        │                       │
        └───────────────┬───────┘
                        │
                 ┌──────────────┐
                 │ Pedido       │
                 ├──────────────┤
                 │ id (PK)      │
                 │ usuario_id   │ (FK)
                 │ fecha        │
                 │ total        │
                 │ estado       │
                 └──────────────┘
                        │
                        │ (1 Pedido : N Productos)
                        │
                 ┌──────────────┐
                 │ PedidoDetalle│
                 ├──────────────┤
                 │ id (PK)      │
                 │ pedido_id    │ (FK)
                 │ producto_id  │ (FK)
                 │ cantidad     │
                 │ precio_unit  │
                 └──────────────┘

RELACIONES:
• 1 Usuario : N Pedidos (un usuario hace muchos pedidos)
• 1 Pedido : N PedidoDetalle (un pedido tiene múltiples productos)
• 1 Producto : N PedidoDetalle (un producto en múltiples pedidos)`}
          />
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