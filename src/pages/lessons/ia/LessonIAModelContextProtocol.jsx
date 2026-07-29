import { LessonLayout, LessonSection, InfoBox, LessonKeyPoints, LessonSummary } from '../../../components';
import { LessonNavigation } from '../../../components/LessonNavigation';
import { useBreadcrumb } from '../../../hooks/useBreadcrumb';
import { useLessonNavigation } from '../../../hooks/useLessonNavigation';

export function LessonIAModelContextProtocol() {
  const breadcrumbs = useBreadcrumb();
  const nav = useLessonNavigation();

  const keyPoints = [
    'MCP (Model Context Protocol) es el estándar para conectar agentes con sistemas externos. Permite llamar a APIs de terceros de forma segura y estructurada.',
    'Integraciones comunes: GitHub (crear issues, comentar PRs), Slack (enviar mensajes), Notion (crear docs), PagerDuty (crear alerts).',
    'Un MCP es basically un "wrapper" alrededor de una API: valida permisos, transforma request/response, maneja errores.',
    'Estructura: Define inputs → valida → ejecuta → transforma output → retorna. Todo con logging y auditoría.',
    'Casos de uso: Hermes pueda leer notificaciones de Slack, crear issues en GitHub automáticamente, documentar en Notion.',
    'Seguridad: Los MCPs nunca exponen credenciales. Usa env vars, OAuth donde sea posible, y rotate tokens regularmente.'
  ];

  const summary = `MCP: Puente a Sistemas Externos

• Estándar abierto para integrar agentes con terceros
• Integraciones: GitHub, Slack, Notion, PagerDuty, MongoDB, etc.
• Estructura: wrapper de API → validación → transformación → logging
• Seguridad: env vars, no hardcodes, OAuth, token rotation
• Uso común: Hermes lee Slack → ejecuta tareas → comenta en GitHub → documenta en Notion
• Documentación: github.com/anthropic/mcp

Próximo: FAQ técnica y despliegue en producción`;

  return (
    <>
      <LessonLayout
        title="Model Context Protocol (MCP): Integraciones Avanzadas"
        description="MCP: cómo conectar agentes con GitHub, Slack, Notion, bases de datos y servicios externos."
        breadcrumbs={breadcrumbs}
        seoTitle="MCP Protocol: Integraciones de Agentes IA - Fullstack Dev Lovers"
        seoDescription="Model Context Protocol: integrar agentes con GitHub, Slack, Notion, APIs. Seguridad, estructura, casos de uso."
        seoKeywords="mcp protocol, agent integrations, github slack notion, external systems agent"
        url="https://fullstackdevlovers.com/ia/avanzado/enterprise/mcp-protocol"
      >
        <p>Un agente sin conexión al mundo exterior es limitado. MCP es cómo Hermes habla con GitHub, Slack, Notion y otros.</p>

        <LessonSection title="¿Qué es MCP?">
          <p>
            <strong>MCP (Model Context Protocol)</strong> es un estándar abierto para permitir que agentes
            IA accedan a herramientas externas de forma segura. Es como un "API wrapper inteligente".
          </p>

          <pre style={{ background: '#f5f5f5', padding: '1rem', borderRadius: '4px', marginTop: '1rem' }}>
{`Sin MCP:
Hermes → No puede acceder a Slack

Con MCP:
Hermes → MCP (validación + transformación) → Slack API
          ↓ resultado procesado ↓
        Respuesta estructurada a Hermes`}
          </pre>
        </LessonSection>

        <LessonSection title="Integraciones Comunes">
          <div style={{ marginBottom: '2rem' }}>
            <h4>GitHub (Más usado)</h4>
            <ul>
              <li>Leer/crear issues</li>
              <li>Comentar en PRs</li>
              <li>Crear/actualizar branches</li>
              <li>Ejecutar workflows</li>
            </ul>
          </div>

          <div style={{ marginBottom: '2rem' }}>
            <h4>Slack</h4>
            <ul>
              <li>Enviar mensajes a canales</li>
              <li>Leer mensajes para procesar</li>
              <li>Crear threads</li>
              <li>Reacciones (emojis)</li>
            </ul>
          </div>

          <div style={{ marginBottom: '2rem' }}>
            <h4>Notion</h4>
            <ul>
              <li>Crear/actualizar páginas</li>
              <li>Llenar databases</li>
              <li>Organizar documentación</li>
            </ul>
          </div>

          <div>
            <h4>Bases de Datos</h4>
            <ul>
              <li>PostgreSQL, MongoDB, MySQL</li>
              <li>Leer datos, ejecutar queries</li>
              <li>Reportes automáticos</li>
            </ul>
          </div>
        </LessonSection>

        <LessonSection title="Estructura de un MCP">
          <pre style={{ background: '#f5f5f5', padding: '1rem', borderRadius: '4px', overflow: 'auto' }}>
{`class SlackMCP {
  constructor(token, channel) {
    this.token = process.env.SLACK_TOKEN  // NEVER hardcode
    this.channel = channel
  }

  async send_message(text) {
    // Validación
    if (!text || text.length > 4000) {
      return { error: "Message too long or empty" }
    }

    // Transformación
    const payload = {
      channel: this.channel,
      text: text,
      mrkdwn: true
    }

    // Ejecución
    try {
      const response = await fetch('https://slack.com/api/chat.postMessage', {
        method: 'POST',
        headers: { 'Authorization': \`Bearer \${this.token}\` },
        body: JSON.stringify(payload)
      })

      const data = await response.json()

      // Logging
      console.log(\`[Slack] Message sent to #\${this.channel}\`)

      // Retorno estructurado
      return {
        success: data.ok,
        timestamp: data.ts,
        channel: data.channel
      }
    } catch (error) {
      console.error(\`[Slack] Error: \${error.message}\`)
      return { error: error.message }
    }
  }
}`}
          </pre>
        </LessonSection>

        <LessonSection title="Seguridad en MCPs">
          <ul>
            <li><strong>Env vars:</strong> Nunca hardcodes tokens. Usa process.env.API_TOKEN</li>
            <li><strong>OAuth:</strong> Cuando sea posible, usa OAuth en lugar de API keys directas</li>
            <li><strong>Scopes limitados:</strong> Token solo con permisos necesarios (no admin full)</li>
            <li><strong>Rate limiting:</strong> Implementa backoff exponencial para evitar abusar APIs</li>
            <li><strong>Logging:</strong> Registra todas las llamadas (sin exponer secrets) para auditoría</li>
            <li><strong>Token rotation:</strong> Regenera tokens periódicamente (ej: cada 30 días)</li>
          </ul>

          <InfoBox type="warning">
            Una token expuesta = acceso total a Slack/GitHub. Trata tokens como contraseñas.
          </InfoBox>
        </LessonSection>

        <LessonSection title="Ejemplo Real: Hermes + GitHub + Slack">
          <p><strong>Flujo:</strong> Hermes revisa PRs, comenta, notifica Slack</p>
          <pre style={{ background: '#f5f5f5', padding: '0.8rem', borderRadius: '4px' }}>
{`1. GitHub MCP → hermes.listPullRequests()
2. Para cada PR:
   a. GitHub MCP → hermes.getPRDiff()
   b. Análisis de seguridad (Hermes internamente)
   c. GitHub MCP → hermes.comment("Security findings...")
   d. Slack MCP → hermes.send_message("PR #123 reviewed")
3. Noción MCP → hermes.createReview("...")`}
          </pre>
        </LessonSection>

        <LessonKeyPoints points={keyPoints} />
        <LessonSummary summary={summary} />
        <LessonNavigation nav={nav} />
      </LessonLayout>
    </>
  );
}
