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

export function LessonIAOpenClawRealtime() {
  const breadcrumbs = useBreadcrumb();
  const nav = useLessonNavigation();

  const title = 'OpenClaw: Asistente en Tiempo Real';

  const keyPoints = [
    'OpenClaw es un "harness" (arnés) de Claude, no un agente autónomo: se integra directamente en tu IDE (VS Code, Cursor, JetBrains) proporcionando asistencia interactiva en tiempo real.',
    'A diferencia de agentes que ejecutan tareas de forma autónoma, OpenClaw requiere supervisión humana en cada paso. El flujo es: selecciona código → envía prompt → revisa cambios → aprueba o rechaza.',
    'OpenClaw usa "diff-based editing": en lugar de regenerar archivos completos, aplica solo los cambios necesarios (líneas agregadas/eliminadas), facilitando review y merge en Git.',
    'La inyección de contexto en OpenClaw es inteligente: analiza dependencias, imports y solo envía al LLM el código relevante, reduciendo tokens y mejorando precisión.',
    'OpenClaw es ideal para refactorización rápida, generación de código durante desarrollo, auditoría de archivos, búsqueda de bugs y traducción entre lenguajes.',
    'El modelo de consumo: OpenClaw es descuento de tu "usage" de Claude API (aplica desde abril 2026), con pricing por tokens como cualquier otra API call.'
  ];

  const exercises = [
    {
      title: 'Compara Harness vs Agente',
      description:
        'Describe qué pasaría en este escenario con OpenClaw (harness) vs Hermes (agente autónomo): "Refactoriza este componente y asegúrate de que pase todos los tests"',
      solution: `OPENCLAW (Harness):
1. Seleccionas el componente en tu editor
2. Escribes: "Refactoriza para usar hooks"
3. OpenClaw genera el código refactorizado
4. TÚ revisas los cambios en el diff
5. TÚ ejecutas npm test manualmente
6. Si fallan, TÚ describes el error a OpenClaw
7. OpenClaw sugiere ajustes

HERMES (Agente):
1. Le dices: "Refactoriza este componente y asegúrate de que pase tests"
2. Hermes lo hace TODO:
   - Genera refactorización
   - Ejecuta tests automáticamente
   - Si fallan, ajusta el código
   - Vuelve a ejecutar tests
   - Notifica cuando esté listo

Diferencia clave: OpenClaw necesita tu supervisión en cada paso; Hermes es autónomo.`
    },
    {
      title: 'Caso real: Refactorización rápida',
      description:
        'Tienes 50 funciones React de clase que necesitan convertirse a funcionales. ¿Cómo usarías OpenClaw para acelerar esto? ¿Qué flujo seguirías?',
      solution: `Flujo con OpenClaw (eficiente para este caso):
1. Abre primera función de clase (App.jsx)
2. Selecciona la clase
3. Prompt: "Convierte a functional component con hooks"
4. Revisa cambios (5 segundos)
5. Copias el patrón al siguiente archivo
6. Aplicas el mismo prompt a la siguiente función
7. Repites 50 veces

Ventaja: Supervisas cada cambio, es rápido (30 mins con OpenClaw)
Desventaja: No es automatizado (necesitas estar presente)

Con Hermes sería: "Convierte todas las clases React en components/**.jsx a funcionales"
y se haría automáticamente en background, pero perderías supervisión en tiempo real.`
    }
  ];

  const summary = `OpenClaw es un harness interactivo que trae asistencia de IA directamente a tu editor:

• No es un agente autónomo: requiere tu supervisión en cada paso, pero da feedback inmediato
• Integración en IDE: VS Code, Cursor, JetBrains - funciona donde ya escribes código
• Diff-based editing: cambios quirúrgicos, no reescrituras totales, facilitando review y merge
• Context injection inteligente: solo envía código relevante, optimizando tokens y precisión
• Casos de uso: refactorización rápida, generación de boilerplate, auditoría de código, búsqueda de bugs
• Modelo de consumo: se descuenta de tu Claude API usage (desde abril 2026)
• Ideal cuando: trabajas en IDE, necesitas feedback rápido, quieres supervisar cada cambio
• No es ideal cuando: tareas largas automatizadas (mejor Hermes), trabajo 24/7 (mejor agente autónomo)

La próxima lección explora Hermes, el otro extremo: automatización completa y autónoma.`;

  return (
    <>
      <LessonLayout
        title={title}
        description="OpenClaw: el harness interactivo de Claude para tu IDE. Refactorización rápida con diff-based editing y supervisión en tiempo real."
        breadcrumbs={breadcrumbs}
        seoTitle="OpenClaw: Asistente en Tiempo Real | Desarrollo con IA - Fullstack Dev Lovers"
        seoDescription="Aprende a usar OpenClaw en VS Code: refactorización rápida, diff-based editing, context injection y casos de uso reales."
        seoKeywords="openclaw, claude harness, vs code ia, refactorización automática, diff-based editing"
        url="https://fullstackdevlovers.com/ia/intermedio/agentes/openclaw-realtime"
      >
        <p>
          Hasta ahora hemos hablado de agentes autónomos que trabajan sin supervisión. Pero existe
          un enfoque distinto: <strong>harnesses interactivos</strong> que te asisten directamente
          en tu flujo de trabajo. El más conocido es <strong>OpenClaw</strong>, el arnés oficial
          de Claude para desarrollo en tiempo real.
        </p>

        <LessonSection title="¿Qué es OpenClaw exactamente?">
          <p>
            OpenClaw es un <strong>"harness" (arnés) de Claude</strong> diseñado para integrarse
            directamente en tu entorno de desarrollo, proporcionando asistencia instantánea. No es
            un agente autónomo que ejecuta tareas, sino un <strong>asistente interactivo</strong> que:
          </p>

          <ul>
            <li>Se ejecuta en tu IDE (VS Code, Cursor, JetBrains)</li>
            <li>Responde en tiempo real mientras escribes</li>
            <li>Requiere tu supervisión y aprobación en cada paso</li>
            <li>Aplica cambios de forma quirúrgica (diff-based)</li>
            <li>Mantiene el contexto local de tu proyecto</li>
          </ul>

          <Table
            headers={['Aspecto', 'Harness (OpenClaw)', 'Agente Autónomo (Hermes)']}
            rows={[
              ['Ubicación', 'Integrado en IDE', 'Terminal / VPS'],
              ['Velocidad', 'Real-time (inmediato)', 'Asíncrono'],
              ['Supervisión', 'Sí (en cada paso)', 'No (autónomo)'],
              ['Tipo de cambio', 'Diff-based (quirúrgico)', 'Ejecución completa'],
              ['Contexto', 'Local (archivos abiertos)', 'Completo del proyecto'],
              ['Ideal para', 'Desarrollo interactivo', 'Tareas largas 24/7'],
              ['Modelo de consumo', 'API usage de Claude', 'Suscripción o pago por uso']
            ]}
          />
        </LessonSection>

        <LessonSection title="Context Injection Inteligente">
          <p>
            OpenClaw no envía <strong>todo tu proyecto</strong> al LLM. En su lugar, analiza
            inteligentemente qué código es relevante:
          </p>

          <pre style={{
            background: '#f5f5f5',
            padding: '1rem',
            borderRadius: '4px',
            marginBottom: '1rem'
          }}>
{`// Archivo: components/Button.tsx
import { useState } from 'react';
import { useTheme } from './context/ThemeContext';
import { cn } from '../utils/classnames';

export function Button({ children, variant = 'primary' }) {
  // ... contenido

// OpenClaw envía al LLM:
// ✓ Button.tsx completo (16 KB)
// ✓ ThemeContext.tsx (porque se importa)
// ✓ types.d.ts (tipos utilizados)
// ✗ Otros componentes no relacionados
// ✗ Tests unitarios (salvo que se pidan explícitamente)

Resultado: 45 KB de contexto relevante vs 2 MB de repo completo`}
          </pre>

          <InfoBox type="insight">
            Este análisis de dependencias es lo que hace a OpenClaw eficiente: maximiza calidad minimizando tokens.
          </InfoBox>
        </LessonSection>

        <LessonSection title="Diff-based Editing: Cambios Precisos">
          <p>
            En lugar de regenerar archivos completos (como un LLM tradicional), OpenClaw aplica
            <strong> diferencias mínimas</strong>:
          </p>

          <pre style={{
            background: '#f5f5f5',
            padding: '1rem',
            borderRadius: '4px',
            marginBottom: '1rem',
            overflow: 'auto'
          }}>
{`- function Button({ children }) {
+ function Button({ children, variant = 'primary' }) {
+   const { theme } = useTheme();
-   return <button>{children}</button>
+   const buttonClass = cn(
+     'btn',
+     \`btn-\${variant}\`,
+     \`theme-\${theme}\`
+   );
+   return (
+     <button className={buttonClass}>
+       {children}
+     </button>
+   );
  }`}
          </pre>

          <p style={{ marginTop: '1rem' }}>
            <strong>Ventajas:</strong>
          </p>
          <ul>
            <li>El código existente se preserva (no pierde comentarios, lógica no relacionada)</li>
            <li>Git diff muestra exactamente qué cambió (facilita review)</li>
            <li>Merges más limpios en ramas colaborativas</li>
            <li>Entiende tu estilo de código y lo mantiene</li>
          </ul>
        </LessonSection>

        <LessonSection title="Flujo de Trabajo Práctico">
          <div style={{ marginBottom: '2rem' }}>
            <h4>1. Selecciona el contexto</h4>
            <p>Selecciona la función, componente o archivo donde necesitas intervención.</p>
          </div>

          <div style={{ marginBottom: '2rem' }}>
            <h4>2. Escribe tu instrucción</h4>
            <p>Describe qué quieres lograr en lenguaje natural.</p>
            <pre style={{
              background: '#f5f5f5',
              padding: '0.5rem',
              borderRadius: '4px'
            }}>
{`"Refactoriza esta función para usar descuentos basados
en objeto, implementa DRY y soporta múltiples rangos"`}
            </pre>
          </div>

          <div style={{ marginBottom: '2rem' }}>
            <h4>3. Revisa los cambios</h4>
            <p>OpenClaw muestra el diff. Revisa línea por línea (5-30 segundos típicamente).</p>
          </div>

          <div style={{ marginBottom: '2rem' }}>
            <h4>4. Aprueba o rechaza</h4>
            <p>Click en "Accept" o "Reject". Si rechazas, puedes proporcionar feedback y reintentar.</p>
          </div>

          <div>
            <h4>5. Ciclo de ajuste</h4>
            <p>Si el resultado no es perfecto, proporciona nuevo prompt: "Usa Array.reduce en lugar de Object.entries"</p>
          </div>
        </LessonSection>

        <LessonSection title="Casos de Uso Ideales para OpenClaw">
          <div style={{ marginBottom: '2rem' }}>
            <h4>✅ Refactorización rápida</h4>
            <p>Convertir componentes de clase a funcionales, actualizar sintaxis, migrar versiones.</p>
          </div>

          <div style={{ marginBottom: '2rem' }}>
            <h4>✅ Generación de boilerplate</h4>
            <p>Crear tests, componentes nuevos siguiendo patrones del proyecto.</p>
          </div>

          <div style={{ marginBottom: '2rem' }}>
            <h4>✅ Auditoría de código</h4>
            <p>Revisar un archivo buscando problemas de seguridad, performance o estilo.</p>
          </div>

          <div style={{ marginBottom: '2rem' }}>
            <h4>✅ Búsqueda de bugs</h4>
            <p>OpenClaw analiza logs de error y sugiere fixes.</p>
          </div>

          <div>
            <h4>✅ Traducción entre lenguajes</h4>
            <p>Convertir código Python a JavaScript, Java a Kotlin, etc.</p>
          </div>

          <InfoBox type="warning">
            ❌ <strong>NO es ideal para:</strong> tareas largas sin supervisión, automatización 24/7,
            decisiones complejas multi-archivo. Para eso, usa Hermes.
          </InfoBox>
        </LessonSection>

        <LessonSection title="Modelo de Consumo y Precios">
          <p>
            OpenClaw se descuenta de tu consumo de Claude API. Ejemplo:
          </p>
          <ul>
            <li>Refactorización pequeña (1-5 KB de código): ~$0.01 - $0.05</li>
            <li>Refactorización mediana (10-30 KB): ~$0.10 - $0.30</li>
            <li>Auditoría de archivo completo (50+ KB): ~$0.50 - $2.00</li>
          </ul>
          <p style={{ marginTop: '1rem' }}>
            Los precios son <strong>mucho más bajos</strong> que usar Claude manualmente
            porque OpenClaw optimiza el contexto: solo envía lo relevante.
          </p>
        </LessonSection>

        <LessonKeyPoints points={keyPoints} />
        <LessonExercises exercises={exercises} />
        <LessonSummary summary={summary} />

        <LessonNavigation nav={nav} />
      </LessonLayout>
    </>
  );
}
