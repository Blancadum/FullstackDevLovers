import { LessonLayout, LessonSection, InfoBox, LessonKeyPoints, LessonSummary } from '../../../components';
import { LessonNavigation } from '../../../components/LessonNavigation';
import { useBreadcrumb } from '../../../hooks/useBreadcrumb';
import { useLessonNavigation } from '../../../hooks/useLessonNavigation';

export function LessonIAGestionMemoria() {
  const breadcrumbs = useBreadcrumb();
  const nav = useLessonNavigation();

  const keyPoints = [
    'Memory.md es el "aprendizaje acumulado" del agente entre sesiones. Sin esto, el agente olvida todo después de cada tarea.',
    'Estructura: histórico de problemas/soluciones, patrones descubiertos, preferencias aprendidas, errores a evitar.',
    'El agente escribe automáticamente en memory.md después de cada tarea exitosa: "Próxima vez que vea X, intenta Y".',
    'Diferencia clave: soul.md (identidad estática) vs memory.md (aprendizaje dinámico que evoluciona).',
    'Ventana de contexto: memory.md se carga en cada sesión (ocupa tokens). Tamaño ideal: 2-10 KB (~500-2500 palabras).',
    'Limpieza: cada mes, archiva memory.md viejo y crea uno nuevo. Mantén solo patrones relevantes actuales.'
  ];

  const summary = `memory.md: Persistencia y Aprendizaje

• Histórico de soluciones que funcionan: "Cuando veo X, intenta Y"
• Errores a evitar: "No hacer Z porque causó downtime una vez"
• Preferencias descubiertas: Equipo prefiere deploy blue-green
• El agente actualiza memory.md automáticamente
• Trilogía: soul.md (quién) + user.md (contexto) + memory.md (qué aprendiste)
• Tamaño ideal: 2-10 KB. Limpia mensualmente.

Próximo: MCP (integraciones avanzadas con terceros)`;

  return (
    <>
      <LessonLayout
        title="Gestión de Memoria: memory.md y Persistencia"
        description="memory.md: el aprendizaje persistente del agente. Cómo el agente evoluciona y mejora entre sesiones."
        breadcrumbs={breadcrumbs}
        seoTitle="memory.md en Hermes: Persistencia de Agentes IA - Fullstack Dev Lovers"
        seoDescription="Gestión de memoria en agentes: memory.md, aprendizaje entre sesiones, histórico de soluciones, patrones descubiertos."
        seoKeywords="memory.md hermes, agent learning, persistent memory, knowledge base agente"
        url="https://fullstackdevlovers.com/ia/avanzado/enterprise/gestion-memoria"
      >
        <p>Sin memory.md, tu agente olvida todo después de cada tarea. Con memory.md, aprende y evoluciona.</p>

        <LessonSection title="¿Qué va en memory.md?">
          <div style={{ marginBottom: '2rem' }}>
            <h4>Patrones de Problemas y Soluciones</h4>
            <pre style={{ background: '#f5f5f5', padding: '0.8rem', borderRadius: '4px' }}>
{`## Problema: Database connections leak
Síntomas: Memory cresce lentamente, eventualmente OOM
Solución: Usar connection pooling (HikariCP en Java, pgBouncer en PostgreSQL)
Doc: /docs/database-pooling
Última vez: 2026-07-15 (exitoso)`}
            </pre>
          </div>

          <div style={{ marginBottom: '2rem' }}>
            <h4>Errores a Evitar</h4>
            <pre style={{ background: '#f5f5f5', padding: '0.8rem', borderRadius: '4px' }}>
{`## Error: AWS IAM permisos incompletos
Contexto: Deploy falló porque rol no tenía permisos s3:GetObject
Acción: SIEMPRE verificar IAM permisos antes de deploy
Impacto: Evita 2+ horas de downtime`}
            </pre>
          </div>

          <div>
            <h4>Preferencias del Equipo (Aprendidas)</h4>
            <pre style={{ background: '#f5f5f5', padding: '0.8rem', borderRadius: '4px' }}>
{`## Preferencias descubiertas
- El equipo prefiere blue-green deployments (no rolling)
- Odian alertas falsas de monitoreo (ajustar thresholds)
- Preferencia: PR reviews < 1 hora (auto-merge si pasa tests)
- Rechazo: Commits sin tests (NUNCA mergear sin cobertura)`}
            </pre>
          </div>
        </LessonSection>

        <LessonSection title="Estructura Recomendada">
          <pre style={{ background: '#f5f5f5', padding: '1rem', borderRadius: '4px', overflow: 'auto' }}>
{`# Memory.md - Aprendizaje Acumulado

## 1. Soluciones Probadas (lo que funciona)
### Patrón: [Situación]
- Síntoma: [Indicador del problema]
- Raíz: [Causa]
- Solución: [Pasos concretos]
- Validación: [Cómo verificar que funcionó]

## 2. Anti-Patrones (lo que NO hacer)
### Error: [Nombre descriptivo]
- Contexto: [Cuándo ocurre]
- Impacto: [Consecuencias]
- Prevención: [Cómo evitar]

## 3. Preferencias del Equipo
- [Decisión 1 con justificación]
- [Decisión 2 con justificación]

## 4. Stack/Tech Favorito
- Framework: [versión actual]
- DB: [tipo y versión]
- Deployment: [herramienta]

## 5. Métricas/Historial de Éxito
- Problemas resueltos: [N]
- Tasa de éxito: [%]
- Último update: [fecha]`}
          </pre>
        </LessonSection>

        <LessonSection title="Cómo el Agente Actualiza memory.md">
          <p>Después de cada tarea exitosa:</p>
          <ol>
            <li>El agente analiza: "¿Aprendí algo nuevo?"</li>
            <li>Si sí, prepara una entrada estructurada</li>
            <li>Append a memory.md (nunca sobrescribe)</li>
            <li>En el siguiente ciclo, carga memory.md y "consulta" sus lecciones</li>
          </ol>

          <InfoBox type="insight">
            Esto significa que tu agente literalmente se vuelve más inteligente con cada tarea.
            Primer mes: básico. Tercer mes: especialista en tu dominio específico.
          </InfoBox>
        </LessonSection>

        <LessonSection title="Diferencia: soul.md vs memory.md">
          <table style={{ width: '100%', marginTop: '1rem' }}>
            <thead>
              <tr style={{ borderBottom: '2px solid #ccc' }}>
                <th style={{ textAlign: 'left', padding: '0.5rem' }}>soul.md</th>
                <th style={{ textAlign: 'left', padding: '0.5rem' }}>memory.md</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ borderBottom: '1px solid #eee' }}>
                <td style={{ padding: '0.5rem' }}><strong>Quién eres</strong></td>
                <td style={{ padding: '0.5rem' }}><strong>Qué aprendiste</strong></td>
              </tr>
              <tr style={{ borderBottom: '1px solid #eee' }}>
                <td style={{ padding: '0.5rem' }}>Estático</td>
                <td style={{ padding: '0.5rem' }}>Dinámico</td>
              </tr>
              <tr style={{ borderBottom: '1px solid #eee' }}>
                <td style={{ padding: '0.5rem' }}>Se cambia mensualmente (raro)</td>
                <td style={{ padding: '0.5rem' }}>Se actualiza diariamente (frecuente)</td>
              </tr>
              <tr style={{ borderBottom: '1px solid #eee' }}>
                <td style={{ padding: '0.5rem' }}>Rol, valores, prioridades</td>
                <td style={{ padding: '0.5rem' }}>Patrones, soluciones, preferencias</td>
              </tr>
              <tr>
                <td style={{ padding: '0.5rem' }}>Afecta decisiones de diseño</td>
                <td style={{ padding: '0.5rem' }}>Afecta ejecución táctica</td>
              </tr>
            </tbody>
          </table>
        </LessonSection>

        <LessonSection title="Mantenimiento y Limpieza">
          <p><strong>Mensualmente:</strong> Revisa memory.md y limpia:</p>
          <ul>
            <li>Soluciones obsoletas (tech deprecated)</li>
            <li>Entradas duplicadas o redundantes</li>
            <li>Fecha última actualización (si es &gt; 3 meses, considera archivar)</li>
          </ul>

          <p style={{ marginTop: '1rem' }}>
            <strong>Archivo histórico:</strong> No borres, archivo en memory.archive.md por año.
            Ocasionalmente, la solución antigua vuelve a ser relevante.
          </p>
        </LessonSection>

        <LessonKeyPoints points={keyPoints} />
        <LessonSummary summary={summary} />
        <LessonNavigation nav={nav} />
      </LessonLayout>
    </>
  );
}
