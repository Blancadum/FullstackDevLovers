import { LessonLayout, LessonSection, InfoBox, LessonKeyPoints, LessonSummary } from '../../../components';
import { LessonNavigation } from '../../../components/LessonNavigation';
import { useBreadcrumb } from '../../../hooks/useBreadcrumb';
import { useLessonNavigation } from '../../../hooks/useLessonNavigation';

export function LessonIAManejoerroresReintentos() {
  const breadcrumbs = useBreadcrumb();
  const nav = useLessonNavigation();

  const keyPoints = [
    'Los agentes no son perfectos. Pueden generar código inválido, olvidar contexto, o ejecutar herramientas incorrectamente. Los reintentos son la clave.',
    'Reintentos simples (repetir lo mismo) no funcionan. Reintentos inteligentes significan: analizar el error, variar la estrategia.',
    'Estrategias de reintento: usar diferente herramienta, descomponer en pasos más pequeños, pedir feedback adicional al LLM, consultar documentación.',
    'Límites de reintento: máximo 3-5 intentos por paso (después de eso, escalada a humano). Evita loops infinitos.',
    'Logging exhaustivo es crítico: cada intento debe registrar input, herramienta, output, error. Necesitarás esto para debugging.',
    'Pattern: Try → Catch → Analyze Error → Vary Strategy → Retry → Log'
  ];

  const summary = `Manejo robusto de errores en agentes:

• Los agentes fallan. Es normal. Necesitas mecanismos de reintento inteligente.
• Reintento simple ≠ reintento inteligente (variar estrategia)
• 3 intentos por paso es el estándar: 1er intento directo, 2do con ajustes, 3er con descomposición
• Logging exhaustivo para debugging: input → tool → output → error → strategy
• Escalada a humano después de max intentos (no bucles infinitos)
• Patrones: circuit breaker (desactivar herramienta si falla N veces), exponential backoff (esperar más tiempo entre reintentos)`;

  return (
    <>
      <LessonLayout
        title="Manejo de Errores y Reintentos en Agentes"
        description="Cómo implementar reintentos inteligentes, estrategias de fallback y logging exhaustivo en agentes autónomos"
        breadcrumbs={breadcrumbs}
        seoTitle="Manejo de Errores en Agentes IA | Reintentos Inteligentes - Fullstack Dev Lovers"
        seoDescription="Reintentos, fallback strategies, logging, circuit breaker. Haz tus agentes resilientes y debuggeables."
        seoKeywords="reintentos agente ia, error handling, resilience, fallback strategy, debugging agents"
        url="https://fullstackdevlovers.com/ia/intermedio/agentes/errores-reintentos"
      >
        <p>Los agentes fallan. A veces generen código inválido, olvidan contexto, o usan la herramienta equivocada. La diferencia entre un agente frágil y uno robusto está en el manejo de errores.</p>

        <LessonSection title="Tipos de Fallos y Estrategias">
          <div style={{ marginBottom: '2rem' }}>
            <h4>Error Tipo 1: Código inválido generado</h4>
            <p><strong>Síntoma:</strong> npm test falla con "unexpected token"</p>
            <p><strong>Estrategia:</strong> Mostrar al agente el error exacto. "El código que generaste en línea 42 tiene un paréntesis faltante. Corrígelo."</p>
          </div>

          <div style={{ marginBottom: '2rem' }}>
            <h4>Error Tipo 2: Herramienta equivocada</h4>
            <p><strong>Síntoma:</strong> El agente intenta file_write a un archivo que no tiene permisos</p>
            <p><strong>Estrategia:</strong> "No tienes permisos en ese archivo. Intenta crear un nuevo archivo o usa git para cambios."</p>
          </div>

          <div style={{ marginBottom: '2rem' }}>
            <h4>Error Tipo 3: Contexto perdido</h4>
            <p><strong>Síntoma:</strong> El agente olvida lo que hizo hace 3 pasos</p>
            <p><strong>Estrategia:</strong> Resumir explícitamente: "Hemos completado pasos 1-3. Ahora hazPaso 4."</p>
          </div>

          <div>
            <h4>Error Tipo 4: Timeout o recurso agotado</h4>
            <p><strong>Síntoma:</strong> La herramienta tarda más de 5 minutos</p>
            <p><strong>Estrategia:</strong> Cancelar, reducir scope. "Intenta con archivo más pequeño."</p>
          </div>
        </LessonSection>

        <LessonSection title="Patrón de Reintento Inteligente">
          <pre style={{ background: '#f5f5f5', padding: '1rem', borderRadius: '4px', overflow: 'auto' }}>
{`attempts = 0
max_attempts = 3

while attempts < max_attempts {
  attempts++

  try {
    // Ejecutar herramienta
    result = execute_tool(tool_name, tool_args)

    if result.success {
      return result  // Éxito, termina
    } else {
      throw new ToolError(result.error)
    }
  }
  catch error {
    log("Intento " + attempts + " falló: " + error)

    if attempts == 1 {
      // Primer intento: enfocar en el error específico
      feedback = "El error fue: " + error + ". Intenta nuevamente con este feedback."
      tool_args = claude(objective + feedback)
    }
    else if attempts == 2 {
      // Segundo intento: descomponer
      feedback = "Descompón en pasos más pequeños. Primero haz X, luego Y."
      tool_args = claude(objective + feedback)
    }
    else {
      // Tercer intento: escalada
      log("ESCALADA A HUMANO: " + objective + " falló 3 veces")
      return failure()
    }
  }
}`}
          </pre>
        </LessonSection>

        <LessonSection title="Logging Exhaustivo">
          <p>Cada intento debe registrar:</p>
          <ul>
            <li><strong>Timestamp:</strong> Cuándo ocurrió</li>
            <li><strong>Objetivo:</strong> Qué se intentaba lograr</li>
            <li><strong>Herramienta:</strong> Qué se ejecutó</li>
            <li><strong>Argumentos:</strong> Con qué parámetros</li>
            <li><strong>Output:</strong> Qué retornó</li>
            <li><strong>Error:</strong> Qué falló (si aplica)</li>
            <li><strong>Acción siguiente:</strong> Cómo se reintentará</li>
          </ul>

          <pre style={{ background: '#f5f5f5', padding: '0.8rem', borderRadius: '4px' }}>
{`[2026-07-30T10:15:23] ATTEMPT 1
  objective: "Refactoriza Button.tsx"
  tool: "file_read"
  args: { path: "components/Button.tsx" }
  result: success, 1200 bytes read

  tool: "claude_generate"
  args: { prompt: "Refactoriza...", model: "claude-opus" }
  result: CODE GENERATED 1500 chars

  tool: "file_write"
  args: { path: "components/Button.tsx", content: "..." }
  result: success

  tool: "run_tests"
  args: { command: "npm test Button.test.ts" }
  result: FAILED
  error: "Expected 1 but found 2"

[2026-07-30T10:15:45] ATTEMPT 2 (retry with error feedback)
  Strategy: Show error to Claude, ask for fix
  ...`}
          </pre>
        </LessonSection>

        <LessonKeyPoints points={keyPoints} />
        <LessonSummary summary={summary} />
        <LessonNavigation nav={nav} />
      </LessonLayout>
    </>
  );
}
