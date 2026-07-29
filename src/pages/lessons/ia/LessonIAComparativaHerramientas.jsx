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

export function LessonIAComparativaHerramientas() {
  const breadcrumbs = useBreadcrumb();
  const nav = useLessonNavigation();

  const title = 'Comparativa: OpenClaw vs Hermes vs Otros';

  const keyPoints = [
    'OpenClaw: harness interactivo en IDE, real-time, requiere supervisión, ideal para desarrollo rápido. Hermes: agente autónomo, background 24/7, sin supervisión, ideal para automatización empresarial.',
    'Cursor IDE compite con OpenClaw en UX (mejor integración), pero Hermes compite en automatización enterprise (más potente que cualquier IDE plugin).',
    'Aider es CLI-first, bueno para refactorización en terminal pero menos inteligente que OpenClaw. Cline es VS Code extension similar a Cursor.',
    'La elección correcta depende del caso: desarrollo veloz → OpenClaw; automatización 24/7 → Hermes; equipo distribuido → Hermes + Slack MCP.',
    'Estrategia híbrida: OpenClaw para desarrollo diario, Hermes para tareas repetitivas automatizadas (deploys, tests, reportes, auditoría).',
    'Pricing: OpenClaw descuento de API, Hermes puede ser suscripción o self-hosted, IDE plugins suelen ser gratuitos (pero limitados).'
  ];

  const exercises = [
    {
      title: 'Matriz de decisión',
      description:
        'Para estos 3 escenarios, indica cuál herramienta elegirías (OpenClaw, Hermes, Cursor, Aider) y por qué: (1) Refactorizar 200 líneas de React. (2) Automatizar auditoría de PRs cada noche. (3) Desarrollar nuevo feature en equipo.',
      solution: `(1) Refactorizar 200 líneas de React
→ OpenClaw o Cursor
Razón: Tarea pequeña, necesitas revisar cambios, desarrollo iterativo rápido

(2) Automatizar auditoría de PRs cada noche
→ Hermes
Razón: Tarea repetitiva, sin supervisión humana, 24/7, integración con GitHub

(3) Desarrollar nuevo feature en equipo
→ Cursor IDE o OpenClaw
Razón: Desarrollo colaborativo en tiempo real, feedback inmediato, comunicación con el equipo`
    }
  ];

  const summary = `Comparativa de ecosistema de agentes en 2026:

• OpenClaw: Harness interactivo de Claude. Real-time en IDE, diff-based, ideal para desarrollo veloz. Bajo costo (descuento API).
• Hermes: Framework autónomo 24/7. Reasoning loop, memoria persistente, ideal para automatización empresarial.
• Cursor IDE: IDE moderno con IA integrada. Buena UX, ideal para devs que prefieren GUI vs CLI.
• Aider: CLI-first, good para refactorización en terminal pero menos inteligente que OpenClaw.
• Cline: VS Code extension, similar a Cursor pero open-source.

Estrategia profesional: OpenClaw + Hermes (híbrida). OpenClaw para día a día, Hermes para tareas automatizadas.

La próxima lección: cómo construir tu primer agente paso a paso.`;

  return (
    <>
      <LessonLayout
        title={title}
        description="Comparativa profesional 2026: OpenClaw vs Hermes vs Cursor vs Aider vs Cline. Matriz de decisión y casos de uso reales."
        breadcrumbs={breadcrumbs}
        seoTitle="Comparativa Agentes IA 2026: OpenClaw vs Hermes vs Cursor - Fullstack Dev Lovers"
        seoDescription="Comparativa técnica y de precios: OpenClaw (harness), Hermes (autónomo), Cursor (IDE), Aider (CLI). Cuál elegir según tu caso."
        seoKeywords="openclaw vs hermes, cursor vs aider, agentes ia comparativa, herramientas development ia"
        url="https://fullstackdevlovers.com/ia/intermedio/agentes/comparativa-herramientas"
      >
        <p>
          Ya conoces OpenClaw y Hermes. Pero existen otras opciones en el mercado.
          Esta lección te ayuda a elegir la herramienta correcta según tu caso de uso.
        </p>

        <LessonSection title="Matriz de Decisión Rápida">
          <Table
            headers={['Criterio', 'OpenClaw', 'Hermes', 'Cursor', 'Aider', 'Cline']}
            rows={[
              ['Tipo', 'Harness', 'Framework', 'IDE', 'CLI', 'Extension'],
              ['Real-time', '✅ Sí', '❌ No', '✅ Sí', '⚠️ Parcial', '✅ Sí'],
              ['Supervisión', '✅ Humana', '❌ Autónoma', '✅ Humana', '✅ Humana', '✅ Humana'],
              ['24/7 Auto', '❌ No', '✅ Sí', '❌ No', '❌ No', '❌ No'],
              ['Diff-based', '✅ Sí', '⚠️ Configurable', '✅ Sí', '⚠️ Parcial', '✅ Sí'],
              ['IDE Integration', '✅ VS Code, etc', '⚠️ Terminal', '✅ Nativo', '✅ Terminal', '✅ VS Code'],
              ['Complejidad', '🟢 Baja', '🔴 Alta', '🟡 Media', '🟡 Media', '🟢 Baja'],
              ['Costo', '💵 API usage', '💵 Suscripción', '💵 Gratuito + features', '💵 Gratuito', '💵 Gratuito'],
              ['Curva aprendizaje', '📈 Muy rápida', '📈📈📈 Lenta', '📈 Rápida', '📈📈 Media', '📈 Rápida']
            ]}
          />
        </LessonSection>

        <LessonSection title="Análisis Detallado por Herramienta">
          <div style={{ marginBottom: '2rem' }}>
            <h4>OpenClaw: El Asistente Rápido</h4>
            <ul>
              <li>✅ Mejor para: Refactorización rápida, desarrollo iterativo, review antes de commit</li>
              <li>✅ Ventajas: Real-time, diff-based, contexto inteligente, bajo costo</li>
              <li>❌ Desventajas: No es autónomo, requiere supervisión, no funciona sin IDE abierto</li>
              <li>💰 Precio: ~$0.01-$2 por uso (descuento de API)</li>
            </ul>
          </div>

          <div style={{ marginBottom: '2rem' }}>
            <h4>Hermes: El Empleado Autónomo</h4>
            <ul>
              <li>✅ Mejor para: Automatización 24/7, DevOps, análisis de datos, reportes</li>
              <li>✅ Ventajas: Completamente autónomo, memoria persistente, integración MCP, empresarial</li>
              <li>❌ Desventajas: Complejidad alta, requiere setup, testing antes de prod</li>
              <li>💰 Precio: Suscripción o self-hosted (variable)</li>
            </ul>
          </div>

          <div style={{ marginBottom: '2rem' }}>
            <h4>Cursor IDE: La Alternativa a VS Code</h4>
            <ul>
              <li>✅ Mejor para: Devs que quieren un IDE moderno con IA nativa</li>
              <li>✅ Ventajas: Excelente UX, integración nativa, modelo propio optimizado</li>
              <li>❌ Desventajas: Tied to Cursor IDE, no portátil a otros editores</li>
              <li>💰 Precio: Gratuito (con límites) + planes premium ($20/mes)</li>
            </ul>
          </div>

          <div style={{ marginBottom: '2rem' }}>
            <h4>Aider: El Purista de Terminal</h4>
            <ul>
              <li>✅ Mejor para: Devs CLI-first, refactorización desde terminal, automatización scripts</li>
              <li>✅ Ventajas: Gratuito, open-source, funciona sin GUI</li>
              <li>❌ Desventajas: Menos inteligente que OpenClaw, documentación limitada</li>
              <li>💰 Precio: Gratuito</li>
            </ul>
          </div>

          <div>
            <h4>Cline: VS Code Open-Source</h4>
            <ul>
              <li>✅ Mejor para: Devs que quieren Cursor pero open-source y local</li>
              <li>✅ Ventajas: Gratuito, extensión VS Code, privacidad (local)</li>
              <li>❌ Desventajas: Menos pulido que Cursor, comunidad más pequeña</li>
              <li>💰 Precio: Gratuito</li>
            </ul>
          </div>
        </LessonSection>

        <LessonSection title="Estrategia Híbrida Recomendada">
          <InfoBox type="insight">
            Para equipos profesionales: OpenClaw + Hermes
          </InfoBox>

          <ul>
            <li><strong>OpenClaw (diario):</strong> Refactorización, new features, code review asistido</li>
            <li><strong>Hermes (automatización):</strong> PRs automáticas, deploys, tests nocturnos, reportes</li>
            <li><strong>Integración:</strong> OpenClaw sugiere cambios → humano revisa → Hermes automatiza tests/deploy</li>
          </ul>

          <p style={{ marginTop: '1rem' }}>
            Ejemplo flujo:
          </p>
          <pre style={{
            background: '#f5f5f5',
            padding: '1rem',
            borderRadius: '4px'
          }}>
{`10:00 AM  → Dev usa OpenClaw para refactorización
10:05 AM  → Dev hace git push
10:06 AM  → Hermes ejecuta automáticamente:
           - Linters y tests
           - Auditoría de seguridad
           - Merge si todo pasa
15:00 PM  → Hermes ejecuta scheduled tasks:
           - Auditoría de PRs abiertas
           - Análisis de logs
           - Reporte diario a Slack`}
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
