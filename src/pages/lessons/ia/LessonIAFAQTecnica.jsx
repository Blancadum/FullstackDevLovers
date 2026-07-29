import { LessonLayout, LessonSection, InfoBox, LessonKeyPoints, LessonSummary } from '../../../components';
import { LessonNavigation } from '../../../components/LessonNavigation';
import { useBreadcrumb } from '../../../hooks/useBreadcrumb';
import { useLessonNavigation } from '../../../hooks/useLessonNavigation';

export function LessonIAFAQTecnica() {
  const breadcrumbs = useBreadcrumb();
  const nav = useLessonNavigation();

  const keyPoints = [
    'Tokens y costos: OpenClaw ~$0.01-$2 por uso. Hermes: suscripción o self-hosted. Monitorea uso en Claude console.',
    'Seguridad: Nunca pases datos sensibles (passwords, SSNs, keys) al agente sin encripción. Usa sandboxing para ejecución de code.',
    'GDPR/Compliance: Logs de agentes pueden contener datos personales. Implementa retención (ej: 90 días), anónimiza datos.',
    'Performance: Contexto window limita complejidad. Para proyectos > 100 MB, particiona el trabajo.',
    'Debugging: Habilita logging exhaustivo. Cada paso del loop debe estar en logs con timestamp.',
    'Escalabilidad: Hermes + Kubernetes puede manejar 1000s de agentes. Usa job queuing (Redis, RabbitMQ) para tareas.'
  ];

  const summary = `FAQ Técnica - Temas Avanzados

• Costos: Monitorea usage en Claude console. Implementa alertas.
• Seguridad: Sandboxing, no pasar secrets, token rotation, auditoría
• Compliance: Retención de logs, GDPR, anonimización de datos personales
• Performance: Contexto window ~200k tokens. Particiona tareas grandes.
• Debugging: Logging exhaustivo, timestamps, trazabilidad completa
• Escala: Kubernetes + job queue para 1000s de agentes

Documentación oficial: docs.anthropic.com, Hermes docs`;

  return (
    <>
      <LessonLayout
        title="FAQ Técnica Completa: Tokens, Seguridad, Arquitectura"
        description="Preguntas avanzadas: costos, seguridad, GDPR, performance, debugging, escalabilidad empresarial."
        breadcrumbs={breadcrumbs}
        seoTitle="FAQ Técnica de Agentes IA: Costos, Seguridad, Escalabilidad - Fullstack Dev Lovers"
        seoDescription="Preguntas técnicas avanzadas: tokens y costos, seguridad, GDPR compliance, debugging, arquitectura enterprise."
        seoKeywords="agentes ia costos, seguridad agentes, gdpr compliance, debugging agentes, architecture enterprise"
        url="https://fullstackdevlovers.com/ia/avanzado/enterprise/faq-tecnica"
      >
        <p>Preguntas que surgen cuando escalas agentes a producción.</p>

        <LessonSection title="Costos y Tokens">
          <p><strong>P: ¿Cuánto cuesta un agente?</strong></p>
          <p>R: Depende del uso. OpenClaw: $0.01-$2 por refactorización. Hermes: $50-500/mes según volume.</p>

          <p style={{ marginTop: '1rem' }}><strong>P: ¿Cómo monitoreo gastos?</strong></p>
          <p>R: Claude console &gt; Usage. Implementa alertas si gastos &gt; presupuesto mensual.</p>

          <p style={{ marginTop: '1rem' }}><strong>P: ¿Hay forma de abaratar?</strong></p>
          <p>R: Sí. (1) Context injection inteligente (enviar menos tokens). (2) Modelos más pequeños (Haiku vs Opus). (3) Caché de resultados (reutilizar soluciones anteriores).</p>
        </LessonSection>

        <LessonSection title="Seguridad">
          <p><strong>P: ¿Puedo pasar datos sensibles al agente?</strong></p>
          <p>R: No sin precauciones. (1) Encripta en tránsito (HTTPS). (2) No pases passwords/SSNs/keys directamente. (3) Mascarilla datos sensibles en logs.</p>

          <p style={{ marginTop: '1rem' }}><strong>P: ¿Qué pasa si el agente genera código malicioso?</strong></p>
          <p>R: Sandboxing es crítico. (1) Ejecuta en contenedor Docker aislado. (2) Limita syscalls con seccomp. (3) No le des acceso a /etc, /home, etc. (4) Rate limit system calls.</p>

          <p style={{ marginTop: '1rem' }}><strong>P: ¿El agente puede hacer brute force a mi BD?</strong></p>
          <p>R: Sí, si tiene credenciales. Usa: (1) Credenciales con permisos limitados (role DB específico). (2) Rate limiting en queries. (3) Monitoreo de anomalías.</p>
        </LessonSection>

        <LessonSection title="GDPR y Compliance">
          <p><strong>P: ¿El agente guarda datos personales?</strong></p>
          <p>R: Sí, en logs y memory.md. GDPR requiere: (1) Retención limitada (90 días típicamente). (2) Anonimización. (3) Auditoría quién accedió qué.</p>

          <p style={{ marginTop: '1rem' }}><strong>P: ¿Cómo cumplo GDPR?</strong></p>
          <p>R: (1) Documenta qué datos procesa el agente. (2) Implementa política de retención (auto-delete después de N días). (3) Usa encriptación en repos. (4) Auditoría logs.</p>

          <p style={{ marginTop: '1rem' }}><strong>P: ¿Qué pasa con HIPAA/PCI?</strong></p>
          <p>R: Similar. No pases datos sensibles sin encriptación. Usa agentes self-hosted (no cloud) si aplica.</p>
        </LessonSection>

        <LessonSection title="Performance">
          <p><strong>P: ¿Cuál es el contexto máximo?</strong></p>
          <p>R: Claude Opus: ~200k tokens. Haiku: 200k. Consume ~1 token ≈ 3-4 caracteres.</p>

          <p style={{ marginTop: '1rem' }}><strong>P: Mi proyecto es &gt; 100 MB. ¿Funciona?</strong></p>
          <p>R: Con límites. Particiona: (1) Por módulos (procesa uno a la vez). (2) Por archivos (léé solo archivos relacionados). (3) Compresión: minify, elimina comentarios.</p>

          <p style={{ marginTop: '1rem' }}><strong>P: ¿Hermes 24/7 es rápido?</strong></p>
          <p>R: Sí para tareas pequeñas. Para tareas largas, usa job queue (Redis, RabbitMQ) y procesa en background.</p>
        </LessonSection>

        <LessonSection title="Debugging y Observabilidad">
          <p><strong>P: ¿Cómo debuggeo si el agente falla?</strong></p>
          <p>R: Logging exhaustivo. Cada paso del reasoning loop debe estar en logs: timestamp, tool, args, result, error.</p>

          <p style={{ marginTop: '1rem' }}><strong>P: ¿Puedo trace un problema específico?</strong></p>
          <p>R: Sí si tienes logs. Busca timestamp → sigue el trace → identifica en qué paso falló → reproduce en staging.</p>

          <p style={{ marginTop: '1rem' }}><strong>P: ¿Hermes tiene built-in observabilidad?</strong></p>
          <p>R: Sí. ~/.hermes/logs/ contiene todo. Integra con ELK stack, Datadog, o similar para análisis avanzado.</p>
        </LessonSection>

        <LessonSection title="Escalabilidad">
          <p><strong>P: ¿Cuántos agentes puedo ejecutar?</strong></p>
          <p>R: Depende infra. 1 agente = 1 proceso Node.js. 100 agentes = 100 procesos. Usa Kubernetes para orquestar.</p>

          <p style={{ marginTop: '1rem' }}><strong>P: ¿Cómo scaling horizontal?</strong></p>
          <p>R: (1) Job queue (Redis/RabbitMQ). (2) Workers procesando tareas. (3) Load balancer. (4) Kubernetes.</p>

          <p style={{ marginTop: '1rem' }}><strong>P: ¿Puede un agente procesar 10,000 PRs/día?</strong></p>
          <p>R: Sí, con setup correcto. Usa job queue + múltiples workers. Hermes puede manejar 100+ tareas concurrentes.</p>
        </LessonSection>

        <LessonKeyPoints points={keyPoints} />
        <LessonSummary summary={summary} />
        <LessonNavigation nav={nav} />
      </LessonLayout>
    </>
  );
}
