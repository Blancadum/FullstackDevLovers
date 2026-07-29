import { LessonLayout, LessonSection, InfoBox, LessonKeyPoints, LessonSummary } from '../../../components';
import { LessonNavigation } from '../../../components/LessonNavigation';
import { useBreadcrumb } from '../../../hooks/useBreadcrumb';
import { useLessonNavigation } from '../../../hooks/useLessonNavigation';

export function LessonIAConfiguracionSoul() {
  const breadcrumbs = useBreadcrumb();
  const nav = useLessonNavigation();

  const keyPoints = [
    'soul.md define la "identidad" del agente: rol, valores, prioridades, aversiones. No cambia frecuentemente (mensualmente o menos).',
    'Un buen soul.md de 300-500 palabras es suficiente. Especificidad > longitud. "Prioriza seguridad" > "Prioriza seguridad, performance y usabilidad"',
    '3 perfiles reales: (1) Full-stack dev: prioriza UX, seguridad, tests; (2) Performance specialist: prioriza velocidad, optimización; (3) Backend/DevOps: prioriza uptime, scalability',
    'El agente toma decisiones basado en soul.md: mismo código, diferente soul.md = comportamientos distintos en refactorización, testing, documentación',
    'soul.md + user.md + memory.md = agente personalizado. soul.md es el marco, user.md es el contexto, memory.md es el aprendizaje.',
    'Actualiza soul.md solo si cambias filosofía del agente. Para ajustes menores, usa memory.md.'
  ];

  const summary = `soul.md: La Identidad del Agente

• Define rol, valores, prioridades, aversiones
• 300-500 palabras es ideal (especificidad > longitud)
• 3 perfiles: Full-Stack (UX+tests), Performance (speed), Backend (uptime)
• Mismo modelo, diferente soul.md = comportamientos distintos
• Trilogía: soul.md (quién eres) + user.md (contexto) + memory.md (qué aprendiste)
• No cambies frecuentemente (estabilidad es importante)

Próximo: memory.md y persistencia de aprendizaje`;

  return (
    <>
      <LessonLayout
        title="Configuración Avanzada: soul.md y Personalización"
        description="Define la identidad de tu agente: rol, valores, prioridades, aversiones. 3 perfiles profesionales reales."
        breadcrumbs={breadcrumbs}
        seoTitle="soul.md en Hermes: Personalización de Agentes IA - Fullstack Dev Lovers"
        seoDescription="Configura soul.md: identidad del agente, valores, prioridades. Perfiles profesionales: Full-Stack, Performance, Backend/DevOps."
        seoKeywords="soul.md hermes, personalización agente ia, agent personality, domain specialization"
        url="https://fullstackdevlovers.com/ia/avanzado/enterprise/configuracion-soul"
      >
        <p>El mismo modelo Claude, con diferente soul.md, genera comportamientos radicalmente distintos. Aquí aprendes a especializarlo.</p>

        <LessonSection title="Estructura de soul.md">
          <pre style={{ background: '#f5f5f5', padding: '1rem', borderRadius: '4px', overflow: 'auto' }}>
{`# Tu rol
# Objetivo principal
# Valores que definen tu trabajo
# Prioridades (en orden)
# Aversiones (qué evitas a toda costa)
# Specialidades
# Ejemplo de buena decisión
# Ejemplo de mala decisión`}
          </pre>

          <p style={{ marginTop: '1rem' }}>Esto da al agente un marco claro para decidir.</p>
        </LessonSection>

        <LessonSection title="3 Perfiles Profesionales">
          <div style={{ marginBottom: '2rem' }}>
            <h4>Perfil 1: Full-Stack Developer</h4>
            <pre style={{ background: '#f5f5f5', padding: '0.8rem', borderRadius: '4px' }}>
{`# Rol: Senior Full-Stack Developer
# Objetivo: Escribir código limpio, testeable, accesible

# Valores:
#   - User experience (A11y, responsiveness)
#   - Code quality (tests, documentation)
#   - Security (no hardcoded secrets, inputs validated)

# Prioridades:
#   1. Tests pasen (si hay tests, deben pasar)
#   2. Código sea legible y mantenible
#   3. Performance sea aceptable (no optimizar prematuramente)

# Aversiones:
#   - Código sin tests
#   - Violaciones de accesibilidad
#   - Secrets en código

# Especialidades: React, TypeScript, Node.js, TDD`}
            </pre>
          </div>

          <div style={{ marginBottom: '2rem' }}>
            <h4>Perfil 2: Performance Specialist</h4>
            <pre style={{ background: '#f5f5f5', padding: '0.8rem', borderRadius: '4px' }}>
{`# Rol: Performance Engineer
# Objetivo: Optimizar velocidad en todo

# Valores:
#   - Latencia baja en APIs
#   - Core Web Vitals óptimos
#   - Uso eficiente de recursos

# Prioridades:
#   1. Performance (ms importan)
#   2. Correctness (tiene que funcionar)
#   3. Features (complejidad aceptable si mejora perf)

# Aversiones:
#   - Queries N+1
#   - Bundles grandes
#   - Lazy loading no optimizado

# Especialidades: SQL optimization, bundle analysis, CDN, caching`}
            </pre>
          </div>

          <div>
            <h4>Perfil 3: Backend/DevOps</h4>
            <pre style={{ background: '#f5f5f5', padding: '0.8rem', borderRadius: '4px' }}>
{`# Rol: Backend/DevOps Engineer
# Objetivo: Sistema resiliente, escalable, seguro

# Valores:
#   - Uptime (99.9%+)
#   - Security (no vulnerabilities)
#   - Observability (logs, metrics, tracing)

# Prioridades:
#   1. Security (nunca expongas datos)
#   2. Uptime (la velocidad es secundaria)
#   3. Scalability (prepárate para crecimiento)

# Aversiones:
#   - SQL injection
#   - Missing error handling
#   - No monitoring

# Especialidades: Kubernetes, Docker, CI/CD, monitoring`}
            </pre>
          </div>
        </LessonSection>

        <LessonSection title="Impacto Práctico: El Mismo Código, Diferente soul.md">
          <p><strong>Tarea:</strong> "Refactoriza esta función for loop a usar map()"</p>

          <div style={{ marginBottom: '2rem' }}>
            <h4>Full-Stack Developer (soul.md #1)</h4>
            <p>Genera: función con tipos TypeScript, tests, documentación JSDoc</p>
          </div>

          <div style={{ marginBottom: '2rem' }}>
            <h4>Performance Specialist (soul.md #2)</h4>
            <p>Genera: función optimizada, analiza Big-O, sugiere alternativas más rápidas</p>
          </div>

          <div>
            <h4>Backend/DevOps (soul.md #3)</h4>
            <p>Genera: función con error handling robusto, logging, monitoreo de performance</p>
          </div>

          <InfoBox type="insight">
            Mismo prompt, misma función, 3 resultados completamente diferentes. Eso es poder de soul.md.
          </InfoBox>
        </LessonSection>

        <LessonSection title="Mejores Prácticas">
          <ul>
            <li><strong>Sé específico:</strong> "Prioriza seguridad" &lt; "Valida todos los inputs, usa prepared statements, no expongas stack traces"</li>
            <li><strong>Orden de prioridades:</strong> El agente decide qué hacer cuando hay conflicto (UX vs perf, por ejemplo)</li>
            <li><strong>Aversiones fuertes:</strong> El agente evitará a toda costa cosas listadas aquí</li>
            <li><strong>Evita contradicciones:</strong> "Prioriza velocidad" y "Prioriza legibilidad" pueden chocar</li>
            <li><strong>Test y ajusta:</strong> Que el agente haga una tarea pequeña, revisa si el soul.md está teniendo efecto</li>
          </ul>
        </LessonSection>

        <LessonKeyPoints points={keyPoints} />
        <LessonSummary summary={summary} />
        <LessonNavigation nav={nav} />
      </LessonLayout>
    </>
  );
}
