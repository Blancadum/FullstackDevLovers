import { LessonLayout, LessonSection, InfoBox, LessonKeyPoints, LessonExercises, LessonSummary } from '../../../components';
import { LessonNavigation } from '../../../components/LessonNavigation';
import { useBreadcrumb } from '../../../hooks/useBreadcrumb';
import { useLessonNavigation } from '../../../hooks/useLessonNavigation';

export function LessonIAConstruirAgentePasoAPaso() {
  const breadcrumbs = useBreadcrumb();
  const nav = useLessonNavigation();

  const keyPoints = [
    'Un agente mínimo tiene: objetivo (prompt), modelo (Claude), herramientas (file_read, file_write), y un loop de razonamiento que repite hasta completar.',
    'Paso 1: Define el objetivo exactamente. "Refactoriza código" es vago; "Refactoriza function.js usando arrow functions y modern JS" es preciso.',
    'Paso 2: Identifica las herramientas mínimas necesarias. La mayoría de agentes necesitan solo file_read, file_write, execute_bash.',
    'Paso 3: Implementa el loop: input → análisis (Chain of Thought) → elegir herramienta → ejecutar → validar → ¿siguiente paso?',
    'Paso 4: Agrega límites de seguridad: máximo de iteraciones (20), timeout (5 min), validación de salida.',
    'Paso 5: Testing en staging. Los agentes pueden ejecutar código destructivo. Prueba primero en ambiente seguro.'
  ];

  const exercises = [
    {
      title: 'Pseudocódigo de agente',
      description: 'Escribe el pseudocódigo para un agente simple que "agregue documentación JSDoc a una función". Define el loop de razonamiento.',
      solution: `loop {
  // 1. PERCEPCIÓN
  objective = "Agregar JSDoc a function"
  code = file_read("myFunction.js")

  // 2. ANÁLISIS
  ast = parse(code)
  if (function_has_jsdoc) {
    log("Ya tiene JSDoc"); break;
  }

  // 3. PLANIFICACIÓN
  plan = [
    "Extraer parámetros y tipos",
    "Generar JSDoc template",
    "Insertar antes de función"
  ]

  // 4. EJECUCIÓN
  jsdoc_template = claude("Genera JSDoc para: " + code)
  new_code = insert_before_function(code, jsdoc_template)

  // 5. VALIDACIÓN
  if (is_valid_javascript(new_code)) {
    file_write("myFunction.js", new_code)
    log("✓ Completado")
    break;
  } else {
    log("Código inválido, reintentando...")
    // Vuelve a paso 2 con feedback
  }
}`
    }
  ];

  const summary = `Construir un agente es más simple de lo que parece:

• Define objetivo → Elige herramientas → Implementa loop → Agrega seguridad → Test en staging
• Agente mínimo: 50-200 líneas de código (pseudocódigo o Python/JS)
• Prueba primero en sandbox/test environment
• Agrega logging exhaustivo para debugging
• Implementa limites: max iteraciones, timeout, validación
• La mayoría de agentes necesitan solo 3 herramientas: file I/O, bash, Claude API
• Próximo paso: especializa con soul.md y memory.md (Hermes)`;

  return (
    <>
      <LessonLayout
        title="Construcción Paso a Paso de un Agente"
        description="Cómo construir tu primer agente de IA en 5 pasos: objetivo → herramientas → loop → seguridad → testing"
        breadcrumbs={breadcrumbs}
        seoTitle="Cómo Construir un Agente de IA | Tutorial Paso a Paso - Fullstack Dev Lovers"
        seoDescription="Construcción práctica de un agente mínimo: reasoning loop, herramientas, limites de seguridad, testing en staging."
        seoKeywords="construir agente ia, tutorial agente, reasoning loop implementación, agente minimo"
        url="https://fullstackdevlovers.com/ia/intermedio/agentes/construir-agente"
      >
        <p>Teoría suficiente. Ahora vamos a construir un agente real. Verás que es más accesible de lo que crees.</p>

        <LessonSection title="5 Pasos para tu Primer Agente">
          <div style={{ marginBottom: '2rem' }}>
            <h4>Paso 1: Define el Objetivo Exactamente</h4>
            <p><strong>Vago:</strong> "Mejora mi código"</p>
            <p><strong>Preciso:</strong> "En el archivo utils/validators.ts, convierte todas las funciones a arrow functions, añade tipos TypeScript, agrupa por propósito"</p>
            <p>Cuanto más específico, mejor razona el agente.</p>
          </div>

          <div style={{ marginBottom: '2rem' }}>
            <h4>Paso 2: Identifica Herramientas Mínimas</h4>
            <pre style={{ background: '#f5f5f5', padding: '0.8rem', borderRadius: '4px' }}>
{`OBJETIVO: "Agregar pruebas unitarias"

HERRAMIENTAS NECESARIAS:
✓ file_read: Leer código fuente
✓ file_write: Crear archivo .test.ts
✓ execute_bash: npm test para verificar

Eso es suficiente. No necesitas BD, APIs externas, etc.`}
            </pre>
          </div>

          <div style={{ marginBottom: '2rem' }}>
            <h4>Paso 3: Implementa el Loop</h4>
            <pre style={{ background: '#f5f5f5', padding: '0.8rem', borderRadius: '4px' }}>
{`while (!completed) {
  1. Lee estado actual (qué se completó)
  2. Genera plan del siguiente paso
  3. Elige herramienta
  4. Ejecuta
  5. ¿Éxito? → Continúa
     ¿Fallo? → Ajusta y reintentar
  6. ¿Objetivo cumplido? → Finaliza
}`}
            </pre>
          </div>

          <div style={{ marginBottom: '2rem' }}>
            <h4>Paso 4: Agrega Límites de Seguridad</h4>
            <ul>
              <li>Max iteraciones: 20 (evita loops infinitos)</li>
              <li>Timeout: 5 minutos por herramienta</li>
              <li>Validación: verifica salida (JS es válido, archivo existe)</li>
              <li>Sandboxing: ejecuta en directorio aislado, no /etc, /home, etc.</li>
            </ul>
          </div>

          <div>
            <h4>Paso 5: Testing en Staging</h4>
            <p>Antes de producción:</p>
            <ol>
              <li>Prueba en repo clonado (no tu repo real)</li>
              <li>Prueba con archivos pequeños primero</li>
              <li>Revisa qué cambios hizo exactamente</li>
              <li>Ejecuta tests para verificar nada se rompió</li>
            </ol>
          </div>
        </LessonSection>

        <LessonSection title="Código Esqueleto">
          <pre style={{ background: '#f5f5f5', padding: '1rem', borderRadius: '4px', overflow: 'auto' }}>
{`// Pseudocódigo Python/JavaScript

class SimpleAgent {
  constructor(objective, tools) {
    this.objective = objective
    this.tools = tools
    this.state = { completed_steps: [], current_step: 0 }
    this.max_iterations = 20
  }

  async run() {
    for (let i = 0; i < this.max_iterations; i++) {
      // 1. ANÁLISIS: ¿Qué falta?
      const analysis = await claude(
        \`Objetivo: \${this.objective}
        Completado: \${JSON.stringify(this.state.completed_steps)}
        ¿Qué sigue?\`
      )

      // 2. PLANIFICACIÓN: ¿Qué herramienta usar?
      const tool_name = extract_tool_name(analysis)
      const tool_args = extract_arguments(analysis)

      // 3. EJECUCIÓN
      const result = await this.tools[tool_name](tool_args)

      // 4. VALIDACIÓN
      if (result.success) {
        this.state.completed_steps.push(result)
        if (result.is_final) return { success: true, state: this.state }
      } else {
        console.error("Reintentando:", result.error)
      }
    }
    return { success: false, error: "Max iterations reached" }
  }
}`}
          </pre>
        </LessonSection>

        <LessonKeyPoints points={keyPoints} />
        <LessonExercises exercises={exercises} />
        <LessonSummary summary={summary} />
        <LessonNavigation nav={nav} />
      </LessonLayout>
    </>
  );
}
