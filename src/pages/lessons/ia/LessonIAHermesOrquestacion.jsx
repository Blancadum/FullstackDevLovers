import {
  LessonLayout,
  LessonSection,
  InfoBox,
  Table,
  LessonKeyPoints,
  LessonExercises,
  LessonSummary
} from '../../../components';
import { LessonNavigation } from '../../../components/LessonNavigation';
import { useBreadcrumb } from '../../../hooks/useBreadcrumb';
import { useLessonNavigation } from '../../../hooks/useLessonNavigation';

export function LessonIAHermesOrquestacion() {
  const breadcrumbs = useBreadcrumb();
  const nav = useLessonNavigation();

  const title = 'Hermes: Orquestación Agéntica Completa';

  const keyPoints = [
    'Hermes es un framework completo de orquestación agéntica, no solo una herramienta: permite construir agentes autónomos que razonan, planifican y ejecutan tareas sin intervención humana.',
    'A diferencia de OpenClaw (harness interactivo), Hermes se ejecuta en terminal, VPS o background, trabajando 24/7 de forma autónoma con capacidad de auto-corrección.',
    'El "Reasoning Loop" de Hermes tiene 4 fases: Percepción (input) → Análisis (descomposición) → Planificación (estrategia) → Ejecución (tool use) → Validación (loop de feedback).',
    'Hermes implementa un sistema jerárquico de memoria: soul.md (personalidad), user.md (contexto usuario), memory.md (aprendizaje acumulado entre sesiones).',
    'Las herramientas en Hermes se organizan en 3 niveles: Tools (acciones básicas), Skills (tareas compuestas), MCP (integraciones avanzadas con terceros).',
    'Hermes es ideal para: automatización 24/7, tareas DevOps complejas, análisis de datos, generación de reportes, gestión de infraestructura como código.'
  ];

  const exercises = [
    {
      title: 'Diseña el Reasoning Loop',
      description:
        'Describe el loop de Hermes completo para esta tarea: "Audita todos los PRs abiertos en GitHub, verifica seguridad, y comenta hallazgos"',
      solution: `PERCEPECIÓN:
- Input: "Audita PRs y comenta hallazgos"
- Carga: lista de PRs, patrones de seguridad

ANÁLISIS:
- ¿Cuántos PRs hay?
- ¿Qué tipos de cambios auditar?
- ¿Qué herramientas necesito?

PLANIFICACIÓN:
1. Llamar GitHub API para listar PRs
2. Para cada PR:
   a. Obtener diff de cambios
   b. Ejecutar linters de seguridad
   c. Analizar patrones sospechosos
   d. Generar comentario de feedback
   e. Publicar comentario en PR

EJECUCIÓN:
- Ejecuta cada herramienta en orden

VALIDACIÓN:
- ¿Se publicaron los comentarios?
- ¿Hubo errores?
- Si sí, reintentar con otra estrategia`
    },
    {
      title: 'Memoria de Hermes',
      description:
        'Para un agente Hermes especializado en DevOps, ¿qué información deberías guardar en soul.md, user.md y memory.md?',
      solution: `SOUL.MD (Personalidad del agente):
- Rol: "Especialista en DevOps"
- Prioridades: "Seguridad > Performance > Costo"
- Estilo: "Reporte detallado, accionable"

USER.MD (Contexto usuario/equipo):
- Nombre equipo: "Platform Team"
- Stacks favoritos: Docker, Kubernetes, GitHub Actions
- Horarios: "Alertas fuera de 9-18 solo si crítico"

MEMORY.MD (Aprendizaje acumulado):
- Archivos: Dockerfile patterns, deployment failed cases
- Decisiones pasadas: "Usar ArgoCD porque lo intentamos y funcionó"
- Errores comunes: "AWS IAM role misconfigured → siempre verificar permisos"`
    }
  ];

  const summary = `Hermes es el framework completo para agentes autónomos empresariales:

• No es interactivo: se ejecuta en background/terminal, trabaja 24/7 sin supervisión
• Implementa Reasoning Loop: Percepción → Análisis → Planificación → Ejecución → Validación
• Memoria jerárquica: soul.md (identidad), user.md (contexto), memory.md (aprendizaje)
• 3 niveles de herramientas: Tools (básico), Skills (compuesto), MCP (integraciones)
• Autonomía real: auto-corrección, reintentos inteligentes, manejo de errores
• Ideal para: DevOps/SRE, análisis de datos, generación de reportes, automatización empresarial
• Requiere: configuración inicial (soul.md), setup de herramientas, testing en staging antes de prod

OpenClaw = desarrollo iterativo en tu IDE
Hermes = automatización autónoma empresarial

La próxima lección compara ambos y otros frameworks disponibles.`;

  return (
    <>
      <LessonLayout
        title={title}
        description="Hermes: framework profesional de orquestación agéntica para automatización empresarial 24/7 con memoria persistente y reasoning loop completo"
        breadcrumbs={breadcrumbs}
        seoTitle="Hermes: Orquestación Agéntica | Framework de IA Autónoma - Fullstack Dev Lovers"
        seoDescription="Aprende Hermes: reasoning loop, memoria jerárquica, tools/skills/MCP, automatización DevOps, arquitectura empresarial de agentes de IA."
        seoKeywords="hermes agente ia, orquestacion agentes, automatización devops, reasoning loop, agentes autonomos"
        url="https://fullstackdevlovers.com/ia/intermedio/agentes/hermes-orquestacion"
      >
        <p>
          Si OpenClaw es tu asistente en el IDE, <strong>Hermes</strong> es tu empleado de tiempo completo.
          Es un framework profesional diseñado para construir agentes autónomos que trabajen 24/7,
          tomen decisiones complejas, y evolucionen a través de la experiencia.
        </p>

        <LessonSection title="¿Qué es Hermes exactamente?">
          <p>
            Hermes es un <strong>framework de orquestación agéntica completa</strong>, no solo una herramienta:
            permite definir, entrenar y desplegar agentes inteligentes en producción.
          </p>

          <Table
            headers={['Aspecto', 'OpenClaw', 'Hermes']}
            rows={[
              ['Tipo', 'Harness interactivo', 'Framework de orquestación'],
              ['Ejecución', 'En IDE (VS Code, etc.)', 'Terminal, VPS, Cloud'],
              ['Supervisión', 'Humana en cada paso', 'Completamente autónoma'],
              ['Velocidad', 'Real-time', 'Asíncrono (horas/días si aplica)'],
              ['Memoria', 'Sesión actual solo', 'Persistente entre sesiones (soul.md, memory.md)'],
              ['Ideal para', 'Desarrollo iterativo', 'Automatización empresarial 24/7'],
              ['Complejidad', 'Baja (selecciona → prompt → aprueba)', 'Alta (configuración, herramientas, testing)']
            ]}
          />
        </LessonSection>

        <LessonSection title="El Reasoning Loop de Hermes">
          <p>
            Hermes implementa un <strong>ciclo de razonamiento de 4 fases</strong> que se repite
            automáticamente hasta completar la tarea:
          </p>

          <pre style={{
            background: '#f5f5f5',
            padding: '1.5rem',
            borderRadius: '4px',
            overflow: 'auto',
            marginBottom: '1.5rem'
          }}>
{`┌─ PERCEPCIÓN ────────────────────┐
│ • Recibe instrucción              │
│ • Carga contexto (soul, memory)   │
│ • Entiende restricciones          │
└──────────┬──────────────────────────┘
           ↓
┌─ ANÁLISIS ──────────────────────┐
│ • Descompone objetivo en pasos   │
│ • Identifica dependencias        │
│ • Selecciona herramientas        │
└──────────┬──────────────────────────┘
           ↓
┌─ PLANIFICACIÓN ─────────────────┐
│ • Chain of Thought: "Primero     │
│   haré X, luego Y, porque Z"    │
│ • Anticipa problemas            │
│ • Define estrategia alternativa  │
└──────────┬──────────────────────────┘
           ↓
┌─ EJECUCIÓN ─────────────────────┐
│ • Ejecuta herramienta seleccionada│
│ • Captura resultado/error        │
│ • Actualiza estado interno       │
└──────────┬──────────────────────────┘
           ↓
┌─ VALIDACIÓN ────────────────────┐
│ • ¿Salió bien? ✓ → Continúa      │
│ • ¿Error? ✗ → Vuelve a ANÁLISIS  │
│ • ¿Objetivo cumplido? → Finaliza │
└─────────────────────────────────┘`}
          </pre>

          <InfoBox type="insight">
            Este loop puede repetirse 5-50 veces dependiendo de la complejidad de la tarea.
            Hermes tiene límites de seguridad: máximo 100 iteraciones por tarea, timeout de 24 horas.
          </InfoBox>
        </LessonSection>

        <LessonSection title="Sistema Jerárquico de Memoria">
          <p>
            La memoria en Hermes está organizada en <strong>3 niveles</strong>, cada uno sirviendo
            un propósito distinto:
          </p>

          <div style={{ marginBottom: '2rem' }}>
            <h4>soul.md: La Identidad</h4>
            <p>
              Define <strong>quién es el agente</strong>: su rol, sus valores, prioridades.
              No cambia frecuentemente.
            </p>
            <pre style={{
              background: '#f5f5f5',
              padding: '0.8rem',
              borderRadius: '4px'
            }}>
{`# Rol: Backend DevOps Engineer
# Prioridades: Seguridad > Performance > Costo
# Especialidades: Docker, Kubernetes, CI/CD
# Aversiones: Downtime, datos expuestos, código sin test`}
            </pre>
          </div>

          <div style={{ marginBottom: '2rem' }}>
            <h4>user.md: El Contexto</h4>
            <p>
              Define <strong>a quién sirve el agente</strong> y sus preferencias: equipo,
              horarios, stacks favoritos.
            </p>
            <pre style={{
              background: '#f5f5f5',
              padding: '0.8rem',
              borderRadius: '4px'
            }}>
{`# Equipo: Platform Team
# Stack: React, Node.js, PostgreSQL, Kubernetes
# Horarios: 9-18 CET
# Notificaciones críticas: También 24/7 en Slack`}
            </pre>
          </div>

          <div>
            <h4>memory.md: El Aprendizaje</h4>
            <p>
              <strong>Histórico de aprendizaje</strong> que persiste entre sesiones.
              El agente escribe aquí decisiones, errores, soluciones.
            </p>
            <pre style={{
              background: '#f5f5f5',
              padding: '0.8rem',
              borderRadius: '4px'
            }}>
{`## Lecciones aprendidas
- Docker image para Node: usa alpine:20, no latest (problema en prod)
- AWS IAM: siempre verificar permisos antes de deploy

## Preferencias descubiertas
- El equipo prefiere deployment blue-green, no rolling
- Odian alertas falsas de monitoreo`}
            </pre>
          </div>
        </LessonSection>

        <LessonSection title="3 Niveles de Herramientas">
          <div style={{ marginBottom: '2rem' }}>
            <h4>Level 1: Tools (Básicas)</h4>
            <p>Acciones simples y atómicas:</p>
            <ul>
              <li><code>file_read</code>, <code>file_write</code></li>
              <li><code>execute_bash</code>, <code>run_tests</code></li>
              <li><code>api_call</code>, <code>database_query</code></li>
            </ul>
          </div>

          <div style={{ marginBottom: '2rem' }}>
            <h4>Level 2: Skills (Compuestas)</h4>
            <p>Tareas multi-paso construidas con tools:</p>
            <ul>
              <li><code>deploy_docker</code>: build image → push registry → run container</li>
              <li><code>run_tests_and_coverage</code>: npm test → análisis → reporte</li>
              <li><code>audit_security</code>: scan deps → check OWASP → report</li>
            </ul>
          </div>

          <div>
            <h4>Level 3: MCP (Integraciones Avanzadas)</h4>
            <p>Conexiones a sistemas externos:</p>
            <ul>
              <li>GitHub: crear issues, comentar PRs, mergear ramas</li>
              <li>Slack: enviar mensajes, reacciones, threads</li>
              <li>Notion: crear documentación, actualizar databases</li>
              <li>PagerDuty: crear incidents, escalar alertas</li>
            </ul>
          </div>
        </LessonSection>

        <LessonSection title="Casos de Uso Empresariales">
          <ul>
            <li><strong>DevOps/SRE:</strong> Agente que monitorea infraestructura, detecta anomalías, escala automáticamente</li>
            <li><strong>Data Engineering:</strong> Agente que ejecuta pipelines de datos, valida calidad, genera reportes</li>
            <li><strong>Security:</strong> Agente que audita código, identifica vulnerabilidades, sugiere parches</li>
            <li><strong>Support:</strong> Agente que clasifica tickets, escalada inteligente, genera resúmenes</li>
            <li><strong>Análisis:</strong> Agente que procesa logs, genera insights, notifica anomalías</li>
          </ul>
        </LessonSection>

        <LessonKeyPoints points={keyPoints} />
        <LessonExercises exercises={exercises} />
        <LessonSummary summary={summary} />

        <LessonNavigation nav={nav} />
      </LessonLayout>
    </>
  );
}
