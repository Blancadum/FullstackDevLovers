import { LessonLayout, LessonSection, InfoBox, LessonKeyPoints, LessonSummary } from '../../../components';
import { LessonNavigation } from '../../../components/LessonNavigation';
import { useBreadcrumb } from '../../../hooks/useBreadcrumb';
import { useLessonNavigation } from '../../../hooks/useLessonNavigation';

export function LessonIAQuickStartAgentes() {
  const breadcrumbs = useBreadcrumb();
  const nav = useLessonNavigation();

  const keyPoints = [
    'Instalación de OpenClaw en VS Code: 3 pasos, 5 minutos. Instalación de Hermes: 30 min macOS, 45 min Windows WSL.',
    'Verificación: OpenClaw funciona si ves el panel en VS Code. Hermes funciona si hermes --version retorna versión.',
    'Troubleshooting común: Node.js outdated, permisos de archivo, API keys inválidas, path incorrecto en el proyecto.',
    'Setup inicial de tokens y costos: OpenClaw descuento API, Hermes con pricing propio. Monitorea uso en primeros días.',
    'Primeros pasos: OpenClaw → selecciona código → escribe prompt. Hermes → cd proyecto → hermes "tu tarea".',
    'Documentación oficial es tu mejor aliado. Bookmarks: docs.anthropic.com, github.com/hermes, VS Code Marketplace'
  ];

  const summary = `Instalación y primeros pasos:

• OpenClaw VS Code: 5 min setup, inicio inmediato
• Hermes CLI: 30-45 min setup, requiere Node.js y permisos
• Verificación: openclawStatus en VS Code, hermes --version en terminal
• Costos: OpenClaw = API usage, Hermes = variable
• Primeros pasos: pequeña tarea de prueba, revisa logs, ajusta soul.md
• Troubleshooting: Node.js version, permisos, API keys, paths relativos

Próximo: Configuración avanzada (soul.md, memory.md, especialización)`;

  return (
    <>
      <LessonLayout
        title="Guía de Inicio Rápido: Instalación y Setup"
        description="Instala OpenClaw o Hermes en 5-45 minutos. Verifica que funciona. Primeros pasos con tu agente."
        breadcrumbs={breadcrumbs}
        seoTitle="Guía de Inicio Rápido: Instalar Agentes IA - Fullstack Dev Lovers"
        seoDescription="Instalación paso a paso: OpenClaw en VS Code (5 min), Hermes CLI macOS/Windows (30-45 min), verificación, troubleshooting."
        seoKeywords="instalar openclaw, hermes setup, quick start agentes, troubleshooting ia"
        url="https://fullstackdevlovers.com/ia/avanzado/enterprise/quick-start-agentes"
      >
        <p>Teoría completa. Ahora instalemos tu primer agente.</p>

        <LessonSection title="Opción 1: OpenClaw en VS Code (5 minutos)">
          <ol>
            <li><strong>Abre VS Code</strong> con tu proyecto</li>
            <li><strong>Marketplace:</strong> Extensions → Busca "OpenClaw" → Click Install</li>
            <li><strong>Configura API key:</strong> Settings → OpenClaw → Paste tu Claude API key</li>
            <li><strong>Verifica:</strong> Debería aparecer panel lateral con logo de OpenClaw</li>
            <li><strong>Primer test:</strong> Selecciona cualquier código → escribe "mejora esto" → Enter</li>
          </ol>

          <InfoBox type="success">
            ¿Funciona? Estás listo para refactorización rápida.
          </InfoBox>
        </LessonSection>

        <LessonSection title="Opción 2: Hermes CLI (30-45 minutos)">
          <div style={{ marginBottom: '2rem' }}>
            <h4>Requisitos</h4>
            <ul>
              <li>Node.js 18+ (verifica con: <code>node --version</code>)</li>
              <li>npm o pnpm instalado</li>
              <li>macOS/Linux O Windows con WSL2</li>
              <li>Claude API key (obtén en console.anthropic.com)</li>
            </ul>
          </div>

          <div style={{ marginBottom: '2rem' }}>
            <h4>Instalación</h4>
            <pre style={{ background: '#f5f5f5', padding: '0.8rem', borderRadius: '4px' }}>
{`# macOS / Linux
npm install -g hermes-agent
hermes init

# Sigue los pasos (elige defaults si es primera vez)
# Copia tu Claude API key cuando se pida`}
            </pre>
          </div>

          <div style={{ marginBottom: '2rem' }}>
            <h4>Windows WSL2</h4>
            <ol>
              <li>Abre WSL2 terminal</li>
              <li>Ejecuta los mismos comandos que macOS/Linux</li>
              <li>Verifica: <code>hermes --version</code></li>
            </ol>
          </div>

          <div>
            <h4>Verificación</h4>
            <pre style={{ background: '#f5f5f5', padding: '0.8rem', borderRadius: '4px' }}>
{`# Debería imprimir la versión
hermes --version

# Debería listar tareas disponibles (si las hay)
hermes list

# Primer test: generación simple
hermes "Qué es Hermes?" 2>&1 | head -20`}
            </pre>
          </div>
        </LessonSection>

        <LessonSection title="Troubleshooting Común">
          <div style={{ marginBottom: '2rem' }}>
            <h4>"command not found: hermes"</h4>
            <p><strong>Solución:</strong> Node.js/npm no en PATH. Reinstala Node.js desde nodejs.org</p>
          </div>

          <div style={{ marginBottom: '2rem' }}>
            <h4>"403 Unauthorized API key"</h4>
            <p><strong>Solución:</strong> API key inválida o expirada. Obtén nueva en console.anthropic.com</p>
          </div>

          <div style={{ marginBottom: '2rem' }}>
            <h4>"Cannot find module 'claude'"</h4>
            <p><strong>Solución:</strong> npm dependencies corruptas. Ejecuta: <code>npm install -g --force hermes-agent</code></p>
          </div>

          <div>
            <h4>"Timeout after 30s"</h4>
            <p><strong>Solución:</strong> Tarea demasiado compleja. Divide en pasos más pequeños.</p>
          </div>
        </LessonSection>

        <LessonSection title="Primeros Pasos Recomendados">
          <ol>
            <li><strong>Test pequeño:</strong> Refactoriza un archivo de 50 líneas (OpenClaw) o "traduce función JS a Python" (Hermes)</li>
            <li><strong>Revisa logs:</strong> OpenClaw: panel lateral. Hermes: ~/.hermes/logs/</li>
            <li><strong>Ajusta</strong> soul.md si es Hermes (personalización)</li>
            <li><strong>Staging primero:</strong> Prueba en repo clonado, no production</li>
            <li><strong>Monitorea costos</strong> los primeros días (API usage o suscripción)</li>
          </ol>
        </LessonSection>

        <LessonKeyPoints points={keyPoints} />
        <LessonSummary summary={summary} />
        <LessonNavigation nav={nav} />
      </LessonLayout>
    </>
  );
}
