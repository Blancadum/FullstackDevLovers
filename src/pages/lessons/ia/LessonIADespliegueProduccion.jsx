import { LessonLayout, LessonSection, InfoBox, LessonKeyPoints, LessonSummary } from '../../../components';
import { LessonNavigation } from '../../../components/LessonNavigation';
import { useBreadcrumb } from '../../../hooks/useBreadcrumb';
import { useLessonNavigation } from '../../../hooks/useLessonNavigation';

export function LessonIADespliegueProduccion() {
  const breadcrumbs = useBreadcrumb();
  const nav = useLessonNavigation();

  const keyPoints = [
    'Staging first: Prueba agentes en ambiente clonado ANTES de prod. Mismo código, misma BD test, mismo volumen de datos.',
    'Canary deployment: Comienza con 1% del tráfico. Incrementa 10%, 50%, 100% según métricas. Rollback inmediato si sale mal.',
    'Monitoreo: Implementa alertas en: % error, tiempo promedio respuesta, memory usage, CPU. Dashboards en Datadog/Prometheus.',
    'Limits and safeguards: Max tokens por tarea, timeout, max reintentos, escalada a humano después de N fallos.',
    'CI/CD: Pre-deploy tests en staging. Post-deploy smoke tests en prod. Rollback automático si metricas criticas empeoran.',
    'Disaster recovery: Backups de memory.md, logs, configuración. Capacidad de recrear agente en 30 min si falla.'
  ];

  const summary = `Despliegue en Producción de Agentes

• Staging FIRST: Prueba en ambiente clonado antes de prod
• Canary: 1% → 10% → 50% → 100% del tráfico. Rollback si problems.
• Monitoreo: Error %, latencia, memory, CPU. Alertas automáticas.
• Safeguards: Timeouts, max tokens, escalada humana, limits
• CI/CD: Pre-deploy tests, smoke tests post-deploy, rollback automático
• DR: Backups memory.md, logs, config. RTO 30 minutos.

Checklist pre-prod: Seguridad ✓ | Monitoring ✓ | Testing ✓ | Runbooks ✓`;

  return (
    <>
      <LessonLayout
        title="Despliegue en Producción: Docker, Monitoreo, Escala"
        description="Cómo desplegar agentes seguros y monitorearlos en producción. Canary deployments, rollback, disaster recovery."
        breadcrumbs={breadcrumbs}
        seoTitle="Despliegue de Agentes IA en Producción - Fullstack Dev Lovers"
        seoDescription="Despliegue seguro: staging, canary deployment, monitoreo, alertas, rollback, disaster recovery de agentes."
        seoKeywords="deploy agentes ia, canary deployment, production monitoring, kubernetes agents, rollback strategy"
        url="https://fullstackdevlovers.com/ia/avanzado/enterprise/despliegue-produccion"
      >
        <p>Teoría completa. Ahora, el último paso: llevar tu agente a producción sin que todo se queme.</p>

        <LessonSection title="Estrategia: Staging → Canary → Prod">
          <pre style={{ background: '#f5f5f5', padding: '1rem', borderRadius: '4px', overflow: 'auto' }}>
{`SEMANA 1: STAGING TESTING
├── Clone prod: BD, code, config
├── Deploy agente en staging
├── Volumen normal de tareas (100+)
├── Métricas: error %, latencia, memory
└── Si todo bien → avanza

SEMANA 2: CANARY 1%
├── Deploy a 1% de prod traffic
├── Monitoreo 24/7
├── Si error % < 0.1% → avanza
└── Si no, rollback inmediato

SEMANA 3: CANARY 10%
├── Deploy a 10% de prod
├── Monitoreo intenso
└── Si métricas OK → avanza

SEMANA 4: CANARY 50%
├── Deploy a 50%
└── Si nada explota → avanza

SEMANA 5: PROD 100%
├── Deploy a todos
├── Continuity monitoring
└── On-call ready para rollback`}
          </pre>
        </LessonSection>

        <LessonSection title="Monitoreo y Alertas">
          <div style={{ marginBottom: '2rem' }}>
            <h4>Métricas Críticas</h4>
            <ul>
              <li><strong>Error Rate:</strong> % tareas que fallaron. Alert si &gt; 0.5%</li>
              <li><strong>Latencia P95:</strong> 95% de tareas &lt; X segundos. Alert si &gt; 30s</li>
              <li><strong>Memory Usage:</strong> Agente ocupando &gt; X MB. Alert si &gt; 500MB</li>
              <li><strong>CPU:</strong> Alert si &gt; 80% por 5+ min</li>
              <li><strong>Tokens/min:</strong> API throttling. Alert si rate limted</li>
            </ul>
          </div>

          <div>
            <h4>Dashboard Ejemplo (Datadog/Prometheus)</h4>
            <pre style={{ background: '#f5f5f5', padding: '0.8rem', borderRadius: '4px' }}>
{`[ERROR RATE] 0.3% ✓
[P95 LATENCY] 8.2s ✓
[MEMORY] 234 MB ✓
[CPU] 24% ✓
[TOKENS] 4,200/min ✓

Últimas 24h: 12,500 tareas, 1,200 exitosas sin escalación (96%)`}
            </pre>
          </div>
        </LessonSection>

        <LessonSection title="Safeguards (Guardrails)">
          <pre style={{ background: '#f5f5f5', padding: '0.8rem', borderRadius: '4px' }}>
{`LÍMITES IMPLEMENTADOS:
- Max tokens por tarea: 200,000 (previene desborde)
- Timeout por herramienta: 5 minutos
- Max reintentos: 3 (después, escalar)
- Max iteraciones loop: 20 (evita bucles infinitos)
- Rate limit: 100 tareas/min (evita abuso)
- Escalación humana: Si > 3 fallos o timeout
- Rollback automático: Si error rate > 5% x 10 min`}
          </pre>

          <InfoBox type="warning">
            Guardrails salvan equipos. Sin ellos, un bug puede costar fortuna en API calls.
          </InfoBox>
        </LessonSection>

        <LessonSection title="CI/CD Pipeline">
          <pre style={{ background: '#f5f5f5', padding: '0.8rem', borderRadius: '4px' }}>
{`PRE-DEPLOY (Staging):
├── Lint/Type check ✓
├── Unit tests ✓
├── Integration tests vs test BD ✓
├── Security scan (OWASP) ✓
├── Load test (simula 100 tareas concurrentes) ✓
└── Staging smoke tests ✓

DEPLOY:
├── Build Docker image
├── Push a registry
├── Deploy canary (1%)
├── Wait 30 min monitoring
└── Auto-rollback if error rate > 1%

POST-DEPLOY (Prod):
├── Smoke tests (3 tareas sample)
├── Verify metrics normal
├── Check logs for errors
└── Alert on-call: "Agente deployed"`}
          </pre>
        </LessonSection>

        <LessonSection title="Disaster Recovery">
          <p><strong>RTO (Recovery Time Objective):</strong> 30 minutos</p>
          <p><strong>RPO (Recovery Point Objective):</strong> 1 hora</p>

          <div style={{ marginTop: '1.5rem', marginBottom: '2rem' }}>
            <h4>Backups</h4>
            <ul>
              <li>memory.md: Daily snapshots, 30 día retención</li>
              <li>soul.md & user.md: Version controlled en Git</li>
              <li>Logs: 90 día retención en S3/GCS</li>
              <li>Docker image: Registry con todas las versiones (últimas 10)</li>
            </ul>
          </div>

          <div>
            <h4>Runbook: "Agente crasheó"</h4>
            <pre style={{ background: '#f5f5f5', padding: '0.8rem', borderRadius: '4px' }}>
{`1. Alert dispara → On-call pinged (Slack + SMS)
2. On-call verifica:
   - Logs en ~/.hermes/logs/ (últimos 100 líneas)
   - Métricas en Datadog
3. Diagnóstico rápido:
   - Falta memoria? → Restart + monitor
   - API rate limited? → Throttle, wait 1 min
   - Code bug? → Rollback a versión anterior
4. Restore desde backup:
   - git checkout main
   - kubectl rollout undo
   - hermes restart
5. Verificación:
   - Tests smoke en prod
   - Monitor 10 minutos
6. Post-mortem dentro de 24h`}
            </pre>
          </div>
        </LessonSection>

        <LessonSection title="Checklist Pre-Producción">
          <table style={{ width: '100%', marginTop: '1rem' }}>
            <tbody>
              <tr style={{ borderBottom: '1px solid #eee' }}>
                <td style={{ padding: '0.5rem' }}>☐ Staging testing completado</td>
              </tr>
              <tr style={{ borderBottom: '1px solid #eee' }}>
                <td style={{ padding: '0.5rem' }}>☐ Seguridad auditada (tokens, permisos, inputs)</td>
              </tr>
              <tr style={{ borderBottom: '1px solid #eee' }}>
                <td style={{ padding: '0.5rem' }}>☐ Monitoreo configur ado (Datadog/Prometheus)</td>
              </tr>
              <tr style={{ borderBottom: '1px solid #eee' }}>
                <td style={{ padding: '0.5rem' }}>☐ Alertas activas (Slack, email, SMS)</td>
              </tr>
              <tr style={{ borderBottom: '1px solid #eee' }}>
                <td style={{ padding: '0.5rem' }}>☐ CI/CD pipeline listo</td>
              </tr>
              <tr style={{ borderBottom: '1px solid #eee' }}>
                <td style={{ padding: '0.5rem' }}>☐ Backups automáticos (memory, logs, config)</td>
              </tr>
              <tr style={{ borderBottom: '1px solid #eee' }}>
                <td style={{ padding: '0.5rem' }}>☐ Runbooks documentados</td>
              </tr>
              <tr style={{ borderBottom: '1px solid #eee' }}>
                <td style={{ padding: '0.5rem' }}>☐ On-call designado + capacitado</td>
              </tr>
              <tr>
                <td style={{ padding: '0.5rem' }}>☐ Canary deployment strategy aprobada</td>
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
