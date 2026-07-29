import { LessonLayout, LessonSection, InfoBox, LessonKeyPoints, LessonSummary } from '../../../components';
import { LessonNavigation } from '../../../components/LessonNavigation';
import { useBreadcrumb } from '../../../hooks/useBreadcrumb';
import { useLessonNavigation } from '../../../hooks/useLessonNavigation';

export function LessonIACasoSoporteCliente() {
  const breadcrumbs = useBreadcrumb();
  const nav = useLessonNavigation();

  const keyPoints = [
    'Un agente de atención al cliente puede procesar 100x más tickets que un humano, clasificar automáticamente, escalar cuando necesario, y mantener contexto histórico.',
    'Herramientas necesarias: chat.read (email/chat), document.search (KB), pattern.match (problema conocido), escalate.create (humano), response.send',
    'Flujo: 1) Leer ticket → 2) Clasificar urgencia → 3) Buscar solución en KB → 4) Si encontrado, responder; si no, escalar → 5) Aprender del resultado',
    'soul.md del agente: "Eres empático, profesional, prioriza resolución rápida. Si no sabes la respuesta, SIEMPRE escala a humano."',
    'Memory.md: Patrones de preguntas frecuentes, soluciones que funcionan, clientes problemáticos, feedback de humanos',
    'ROI real: equipo de 3 humanos puede procesar ~60 tickets/día; con agente + 1 humano: ~300 tickets/día (auto + escalación)'
  ];

  const summary = `Caso real: Agente de Atención al Cliente

• Flujo: Leer ticket → Clasificar → Buscar en KB → Responder o Escalar → Aprender
• Herramientas: chat API, doc search, escalation system, response template
• Memoria: soul.md (empatía, profesional), memory.md (soluciones que funcionan)
• Seguridad: NUNCA prometas sin revisar, SIEMPRE escala si dudoso
• Métricas: tasa de resolución sin escalación, satisfacción cliente, tiempo promedio respuesta
• ROI: 3-5x más tickets procesados, 70% sin intervención humana, humanos pueden focus en casos complejos

Próximo nivel: Hermes Avanzado con MCP, soul.md especializado, despliegue en producción.`;

  return (
    <>
      <LessonLayout
        title="Caso Práctico: Agente de Atención al Cliente"
        description="Implementación real de un agente que procesa tickets de soporte, clasifica urgencia, busca en base de conocimiento y escala cuando necesario"
        breadcrumbs={breadcrumbs}
        seoTitle="Caso Práctico: Agente de Soporte | Automatización Customer Support - Fullstack Dev Lovers"
        seoDescription="Agente de atención al cliente real: clasificación, escalada inteligente, KB search, ROI de automatización."
        seoKeywords="agente soporte cliente, customer service automation, ticketing system ia, escalation inteligente"
        url="https://fullstackdevlovers.com/ia/intermedio/agentes/caso-practico-soporte"
      >
        <p>Teoría completa. Ahora veamos cómo se ve un agente en producción resolviendo un problema real: atención al cliente automatizada.</p>

        <LessonSection title="El Desafío">
          <p>
            Un SaaS recibe 200 tickets de soporte diarios. El equipo de 3 humanos solo puede responder 60/día.
            Respuesta promedio: 8 horas. Urgencia: acelerar sin perder calidad.
          </p>
          <p style={{ marginTop: '1rem' }}>
            <strong>Solución:</strong> Agente que procese tickets automáticamente, resuelva 70%, escale 30%.
          </p>
        </LessonSection>

        <LessonSection title="Arquitectura del Agente">
          <pre style={{ background: '#f5f5f5', padding: '1rem', borderRadius: '4px', overflow: 'auto' }}>
{`┌─────────────────────────────────────┐
│  Ticket entra a queue (Zendesk API)  │
└─────────────┬───────────────────────┘
              ↓
┌─────────────────────────────────────┐
│  AGENTE SOPORTE                      │
├─────────────────────────────────────┤
│  1. LEER TICKET                      │
│     tool: zendesk.read_ticket       │
│     output: { subject, body, user } │
└─────────────┬───────────────────────┘
              ↓
┌─────────────────────────────────────┐
│  2. CLASIFICAR                       │
│     LLM: "Urgencia? Categoría?"      │
│     output: { urgency, category }   │
└─────────────┬───────────────────────┘
              ↓
┌─────────────────────────────────────┐
│  3. BUSCAR EN KB                     │
│     tool: docs.search(category)      │
│     output: relevant articles        │
└─────────────┬───────────────────────┘
              ↓
          ¿Encontró solución?
              ↙        ↘
            SÍ          NO
             ↓           ↓
    ┌──────────┐    ┌──────────────┐
    │ RESPONDER │    │ ESCALAR      │
    │ automático│    │ a humano     │
    └──────────┘    └──────────────┘
             ↓           ↓
    ┌──────────────────────────────┐
    │  5. APRENDER               │
    │  memory.md += nueva solución│
    └──────────────────────────────┘`}
          </pre>
        </LessonSection>

        <LessonSection title="Implementación Detallada">
          <div style={{ marginBottom: '2rem' }}>
            <h4>soul.md del Agente</h4>
            <pre style={{ background: '#f5f5f5', padding: '0.8rem', borderRadius: '4px' }}>
{`# Rol: Customer Support Specialist
# Tono: Empático, profesional, directo
# Prioridades:
#   1. Resolver rápido y bien
#   2. Cliente satisfecho
#   3. Documentar para el equipo
#
# Reglas no negociables:
#   - Si NO sabes la respuesta → SIEMPRE ESCALA a humano
#   - Si es urgencia crítica (downtime) → ESCALA inmediatamente
#   - Nunca prometas features que no existen
#   - Siempre proporciona pasos a seguir, no solo "reinicia"
#
# Ejemplo respuesta buena:
#   "He encontrado que este problema ocurre cuando X.
#    Para resolverlo: 1) [...], 2) [...].
#    Si aún falla, contacta a nuestro equipo técnico."
`}
            </pre>
          </div>

          <div style={{ marginBottom: '2rem' }}>
            <h4>Herramientas</h4>
            <ul>
              <li><code>zendesk.read_ticket</code>: Leer un ticket</li>
              <li><code>zendesk.search_kb</code>: Buscar en base de conocimiento</li>
              <li><code>zendesk.reply</code>: Responder automáticamente</li>
              <li><code>zendesk.escalate</code>: Asignar a humano</li>
              <li><code>slack.notify</code>: Notificar equipo de escalaciones</li>
              <li><code>claude_generate</code>: Generar respuesta (usando soul.md context)</li>
            </ul>
          </div>

          <div>
            <h4>memory.md del Agente</h4>
            <pre style={{ background: '#f5f5f5', padding: '0.8rem', borderRadius: '4px' }}>
{`## Patrones comunes y soluciones

### Problema: "Mi app es lenta"
- Buscar: ¿Cuenta gratuita? → Sugerir upgrade a plan Pro
- Buscar: ¿Muchos usuarios? → Optimizar queries (doc link)
- Buscar: ¿Reciente? → Puede ser mantenimiento (verificar status)

### Problema: "Error 401 Unauthorized"
- Solución: 1) Verificar API key, 2) Regenerar si es vieja
- Docs: /docs/api-authentication

## Escalaciones comunes (humano necesario)
- Solicitudes de refund: SIEMPRE humano
- Bugs que no puedo reproducir: Crear issue y escalar
- Problemas de integración personalizada: Humano

## Satisfacción histórica
- Problemas resueltos sin escalación: 72%
- Tiempo promedio resolución: 2.1 horas (vs 8 antes)
- Satisfacción cliente: 4.6/5.0`}
            </pre>
          </div>
        </LessonSection>

        <LessonSection title="Flujo Ejemplo: Ticket Real">
          <pre style={{ background: '#f5f5f5', padding: '1rem', borderRadius: '4px', overflow: 'auto' }}>
{`TICKET RECIBIDO:
  Subject: "App es muy lenta, casi inutilizable"
  Body: "Hola, llevo una semana con vuestra app y está muy lenta..."

PASO 1: LEER
  ✓ Ticket leído. Usuario: free@gmail.com, Cuenta: 1 semana

PASO 2: CLASIFICAR
  Urgencia: MEDIA (no es downtime, es performance)
  Categoría: PERFORMANCE
  Historial cliente: NUEVO (primera semana)

PASO 3: BUSCAR EN KB
  Query: "lenta performance new account"
  Resultados:
    - Articulo 1: "Optimizando querys" (relevante)
    - Articulo 2: "Plan gratuito vs Pro" (relevante)
    - Articulo 3: "Primeros pasos" (parcialmente)

PASO 4: GENERAR RESPUESTA
  LLM (con soul.md context):
    "Como cliente nuevo, es probable que:
     1. Estés usando el plan gratuito (limitado a 1000 requests/día)
     2. Las queries no estén optimizadas

     Prueba esto:
     - [instrucciones paso a paso]
     - Si sigue lento, prueba upgrade a Pro (30 días free trial)

     ¿Necesitas más ayuda?"

PASO 5: RESPONDER
  ✓ Respuesta enviada automáticamente
  Escalación: NO (solucionado)

STEP 6: APRENDER
  memory.md += "Clientes nuevos + plan free → sugerir upgrade y docs"
  Métricas: "Resuelto sin escalación en 2 min"`}
          </pre>
        </LessonSection>

        <LessonSection title="ROI y Métricas">
          <table style={{ width: '100%', marginTop: '1rem' }}>
            <thead>
              <tr style={{ borderBottom: '2px solid #ccc' }}>
                <th style={{ textAlign: 'left', padding: '0.5rem' }}>Métrica</th>
                <th style={{ textAlign: 'left', padding: '0.5rem' }}>Sin agente</th>
                <th style={{ textAlign: 'left', padding: '0.5rem' }}>Con agente</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ borderBottom: '1px solid #eee' }}>
                <td style={{ padding: '0.5rem' }}>Tickets/día (equipo 3 humanos)</td>
                <td style={{ padding: '0.5rem' }}>60</td>
                <td style={{ padding: '0.5rem' }}>250</td>
              </tr>
              <tr style={{ borderBottom: '1px solid #eee' }}>
                <td style={{ padding: '0.5rem' }}>% Resuelto sin humano</td>
                <td style={{ padding: '0.5rem' }}>—</td>
                <td style={{ padding: '0.5rem' }}>72%</td>
              </tr>
              <tr style={{ borderBottom: '1px solid #eee' }}>
                <td style={{ padding: '0.5rem' }}>Tiempo promedio respuesta</td>
                <td style={{ padding: '0.5rem' }}>8 horas</td>
                <td style={{ padding: '0.5rem' }}>15 minutos</td>
              </tr>
              <tr style={{ borderBottom: '1px solid #eee' }}>
                <td style={{ padding: '0.5rem' }}>Satisfacción cliente</td>
                <td style={{ padding: '0.5rem' }}>4.1/5</td>
                <td style={{ padding: '0.5rem' }}>4.5/5</td>
              </tr>
              <tr>
                <td style={{ padding: '0.5rem' }}>Costo operativo</td>
                <td style={{ padding: '0.5rem' }}>$30k/mes (3 humanos)</td>
                <td style={{ padding: '0.5rem' }}>$8k/mes (1 humano + agente)</td>
              </tr>
            </tbody>
          </table>
        </LessonSection>

        <LessonKeyPoints points={keyPoints} />
        <LessonSummary summary={summary} />
        <LessonNavigation nav={nav} />
      </LessonLayout>
    </>
  );
}
