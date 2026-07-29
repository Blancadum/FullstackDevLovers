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

export function LessonIAArquitecturaAgente() {
  const breadcrumbs = useBreadcrumb();
  const nav = useLessonNavigation();

  const title = 'Arquitectura de un Agente: 7 Pilares';

  const keyPoints = [
    'La arquitectura de un agente consiste en un Loop de Razonamiento (Reasoning Loop): Percepción → Análisis → Planificación → Ejecución → Validación → Siguiente ciclo',
    'El agente mantiene un estado interno que incluye su objetivo actual, pasos completados, errores encontrados y la próxima acción a realizar',
    'Las herramientas (tools) son el puente entre el modelo y el mundo exterior. El agente aprende a elegir qué herramienta usar en cada paso basándose en el contexto',
    'Los mecanismos de seguridad incluyen límites de reintentos, timeout de ejecución, validación de salida y sandboxing de la terminal',
    'La escalabilidad de un agente depende de: tamaño de ventana de contexto, velocidad de las herramientas, latencia de las APIs, y eficiencia del modelo',
    'La trazabilidad (logging) es crítica: cada paso debe ser auditable para debugging, compliance y análisis de mejora'
  ];

  const exercises = [
    {
      title: 'Mapea el Loop de Razonamiento',
      description:
        'Para esta tarea: "Crea una función que valide un email usando regex", dibuja o describe el loop de razonamiento que seguiría un agente (Percepción → Análisis → Planificación → Ejecución → Validación)',
      solution: `1. PERCEPCIÓN: Recibe tarea "Crea función de validación de email"
2. ANÁLISIS: Entiende que necesita: función, regex, tests, documentación
3. PLANIFICACIÓN: Divide en pasos:
   - Buscar patrones de regex de email
   - Crear función utils/validateEmail.ts
   - Crear tests
   - Integrar en componentes si aplica
4. EJECUCIÓN: Ejecuta cada paso (crea archivos, escribe código)
5. VALIDACIÓN: Corre tests, verifica que la regex funciona
6. SIGUIENTE CICLO: Si hay errores, vuelve al paso 2`
    },
    {
      title: 'Identifica herramientas necesarias',
      description:
        'Para que un agente pueda "revisar pull requests y sugerir cambios de seguridad", ¿qué herramientas necesitaría? Enuméralas.',
      solution: `Herramientas necesarias:
1. file_read: Leer archivos del PR (código fuente)
2. git_diff: Ver cambios exactos del PR
3. api_call: Llamar a GitHub API para info del PR
4. execute_bash: Ejecutar linters de seguridad (bandit, eslint-security)
5. database_query: Consultar BD si aplica (ej: patrones de vulnerabilidades conocidas)
6. web_search: Buscar CVEs si encuentra una librería sospechosa
7. comment_on_pr: Escribir feedback en GitHub
8. llm_internal: Su propio razonamiento sobre qué significa cada hallazgo`
    }
  ];

  const summary = `La arquitectura de un agente se basa en un Loop de Razonamiento iterativo y herramientas especializadas:

• Perception → Analysis → Planning → Execution → Validation → [repeat] es el ciclo fundamental que permite autonomía
• Cada ciclo mantiene estado interno: objetivo actual, progreso, errores, contexto acumulado
• Las herramientas son abstracciones de acceso: file_read, execute_bash, api_call, database_query permiten al agente "hacer cosas"
• El modelo LLM es solo una pieza: toma decisiones sobre qué herramienta usar, pero la arquitectura también incluye: orquestador, ejecutor, validador, almacén de estado
• La escalabilidad requiere: finestra de contexto adecuada, herramientas rápidas, reintentos inteligentes, timeout robusto
• La seguridad está integrada: limite de iteraciones, sandboxing, validación de salida, auditoría completa (logging)
• La trazabilidad es no-negociable: cada paso debe estar en logs para debugging, compliance y análisis de mejora

La siguiente lección explora cómo OpenClaw y Hermes implementan esta arquitectura de forma distinta.`;

  return (
    <>
      <LessonLayout
        title={title}
        description="Descubre cómo se estructura internamente un agente de IA: el loop de razonamiento, herramientas, estado y mecanismos de seguridad"
        breadcrumbs={breadcrumbs}
        seoTitle="Arquitectura de un Agente de IA | 7 Pilares - Fullstack Dev Lovers"
        seoDescription="Aprende cómo funcionan los agentes por dentro: reasoning loop, tool use, state management, security mechanisms y escalabilidad."
        seoKeywords="arquitectura agente ia, reasoning loop, tool use, agent design, autonomous systems"
        url="https://fullstackdevlovers.com/ia/intermedio/agentes/arquitectura-agente"
      >
        <p>
          Ahora que entiendes qué es un agente, necesitas saber cómo funcionan por dentro. La arquitectura
          de un agente no es mágica: es un patrón predecible que se repite en bucles,
          con mecanismos robustos para manejo de errores y validación.
        </p>

        <LessonSection title="El Loop de Razonamiento: Ciclo Fundamental">
          <p>
            Cada agente, sin importar su implementación (OpenClaw, Hermes, otros), sigue un{' '}
            <strong>Reasoning Loop</strong> similar:
          </p>

          <pre style={{
            background: '#f5f5f5',
            padding: '1.5rem',
            borderRadius: '4px',
            overflow: 'auto',
            marginBottom: '1.5rem'
          }}>
{`┌─────────────────────────────────────────┐
│  1. PERCEPCIÓN: Input y Contexto       │
│     • Recibe instrucción del usuario    │
│     • Carga contexto relevante (memory) │
│     • Entiende el estado actual         │
└────────────┬────────────────────────────┘
             ↓
┌─────────────────────────────────────────┐
│  2. ANÁLISIS: Descomposición            │
│     • ¿Qué se pide exactamente?        │
│     • ¿Qué pasos son necesarios?       │
│     • ¿Qué información falta?          │
└────────────┬────────────────────────────┘
             ↓
┌─────────────────────────────────────────┐
│  3. PLANIFICACIÓN: Chain of Thought     │
│     • Divide objetivo en subtareas      │
│     • Ordena pasos lógicamente          │
│     • Identifica dependencias           │
└────────────┬────────────────────────────┘
             ↓
┌─────────────────────────────────────────┐
│  4. EJECUCIÓN: Tool Use                 │
│     • Elige qué herramienta usar       │
│     • Ejecuta la acción                 │
│     • Captura resultado/error           │
└────────────┬────────────────────────────┘
             ↓
┌─────────────────────────────────────────┐
│  5. VALIDACIÓN: Revisión                │
│     • ¿Salió bien?                      │
│     • ¿Cumple los criterios de éxito?  │
│     • ¿Hay próximos pasos?              │
└────────────┬────────────────────────────┘
             ↓
     ¿Objetivo completado?
        NO → Vuelve a paso 2 (ANÁLISIS)
        SÍ → Finaliza con resumen`}
          </pre>

          <InfoBox type="insight">
            Este loop se repite típicamente 3-10 veces por tarea. Si supera un máximo (ej: 20 iteraciones),
            el agente debe detener y reportar un error: "No pude completar la tarea después de X intentos".
          </InfoBox>
        </LessonSection>

        <LessonSection title="Estado Interno del Agente">
          <p>
            A diferencia de un LLM que es "stateless" (no mantiene estado), un agente mantiene un{' '}
            <strong>estado interno estructurado</strong>:
          </p>

          <Table
            headers={['Componente', 'Descripción', 'Ejemplo']}
            rows={[
              ['Objetivo actual', 'La tarea que está resolviendo', '"Refactoriza componentes React a TypeScript"'],
              ['Contexto acumulado', 'Información aprendida en ciclos previos', 'Estructura de carpetas del proyecto'],
              ['Pasos completados', 'Qué se ha hecho ya', 'Archivos ya refactorizados, archivos pendientes'],
              ['Errores encontrados', 'Problemas que surgieron', 'Import incorrecto en archivo X, necesita reintento'],
              ['Próxima acción', 'Qué ejecutar en el siguiente ciclo', 'Verificar y actualizar imports en utils/'],
              ['Timestamp', 'Cuándo se ejecutó cada paso', 'Para timeouts, auditoría y reproducibilidad']
            ]}
          />
        </LessonSection>

        <LessonSection title="Herramientas (Tools): El Puente al Mundo Exterior">
          <p>
            Las herramientas son abstracciones que el agente puede usar. Un buen agente necesita herramientas
            especializadas:
          </p>

          <div style={{ marginBottom: '2rem' }}>
            <h4>Herramientas Estándar</h4>
            <ul>
              <li><code>file_read</code>: Lee contenido de archivos del proyecto</li>
              <li><code>file_write</code>: Escribe o modifica archivos</li>
              <li><code>execute_bash</code>: Ejecuta comandos shell (npm, git, etc.)</li>
              <li><code>api_call</code>: Realiza peticiones HTTP (GET, POST, etc.)</li>
              <li><code>database_query</code>: Consulta bases de datos</li>
            </ul>
          </div>

          <div style={{ marginBottom: '2rem' }}>
            <h4>Herramientas Especializadas</h4>
            <ul>
              <li><code>git_diff</code>: Compara archivos entre versiones</li>
              <li><code>run_tests</code>: Ejecuta suite de tests y captura resultados</li>
              <li><code>web_search</code>: Busca documentación o CVEs</li>
              <li><code>image_process</code>: Redimensiona, convierte imágenes</li>
              <li><code>slack_message</code>: Notifica al equipo</li>
            </ul>
          </div>

          <InfoBox type="tip">
            El agente "aprende" cuándo usar cada herramienta observando el patrón de necesidades.
            Si la tarea dice "verifica que el código compila", buscará <code>execute_bash</code> para
            ejecutar <code>npm run build</code>.
          </InfoBox>
        </LessonSection>

        <LessonSection title="Seguridad y Límites">
          <p>
            Un agente sin límites podría ejecutar comandos destructivos sin supervisión. Por eso existen
            mecanismos de seguridad integrados:
          </p>

          <ul>
            <li><strong>Límite de iteraciones:</strong> Máximo 20 ciclos por tarea (evita loops infinitos)</li>
            <li><strong>Timeout:</strong> Cada herramienta tiene un tiempo máximo de ejecución (ej: 5 minutos)</li>
            <li><strong>Sandboxing:</strong> Los comandos ejecutan en un entorno aislado, sin acceso a sistema crítico</li>
            <li><strong>Validación de salida:</strong> Verifica que el código generado es sintácticamente válido</li>
            <li><strong>Rate limiting:</strong> Limita llamadas a APIs externas para no abrumar servidores</li>
            <li><strong>Auditoría:</strong> Cada acción se registra en logs para compliance y debugging</li>
          </ul>
        </LessonSection>

        <LessonSection title="Escalabilidad y Rendimiento">
          <p>
            Conforme los agentes crecen en complejidad, emergen nuevos desafíos:
          </p>

          <div style={{ marginBottom: '2rem' }}>
            <h4>Ventana de Contexto</h4>
            <p>
              A mayor número de ciclos, más tokens se gastan en memoria contextual. Solución: resumir
              información antigua, mantener solo lo relevante presente.
            </p>
          </div>

          <div style={{ marginBottom: '2rem' }}>
            <h4>Velocidad de Herramientas</h4>
            <p>
              Si <code>file_read</code> tarda 2 segundos por archivo y necesitas leer 50 archivos,
              el agente tardará 100 segundos. Solución: caché inteligente, lectura en paralelo.
            </p>
          </div>

          <div>
            <h4>Reintentos Inteligentes</h4>
            <p>
              En lugar de "reintentar la misma solución", el agente debe variar su estrategia:
              si el primero fallo porque usó una librería no disponible, el siguiente intento
              debe usar una librería alternativa.
            </p>
          </div>
        </LessonSection>

        <LessonKeyPoints points={keyPoints} />
        <LessonExercises exercises={exercises} />
        <LessonSummary summary={summary} />

        <LessonNavigation nav={nav} />
      </LessonLayout>
    </>
  );
}
