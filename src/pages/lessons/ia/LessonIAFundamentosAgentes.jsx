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

export function LessonIAFundamentosAgentes() {
  const breadcrumbs = useBreadcrumb();
  const nav = useLessonNavigation();

  const title = 'Fundamentos de Agentes de IA';

  const keyPoints = [
    'Un agente de IA es un sistema completo que envuelve un LLM, dándole capacidades de acción, memoria y acceso a herramientas externas. No es solo "un chat mejorado".',
    'La diferencia crucial entre un LLM y un agente: un LLM solo genera texto; un agente puede leer archivos, ejecutar código, llamar APIs y auto-corregirse basándose en feedback.',
    'Los agentes implementan ciclos de retroalimentación (feedback loops): detectan errores, analizan la causa, generan soluciones alternativas y reintentan automáticamente.',
    'La memoria en agentes tiene dos formas: temporal (contexto activo de la sesión) y permanente (información persistida en archivos como memory.md para sesiones futuras).',
    'Los 7 pilares de un agente funcional: razonamiento, herramientas, auto-corrección, especialización en dominio, portabilidad, multi-canal e interfaz bidireccional.',
    'Los agentes pueden especializarse por dominio (frontend, backend, DevOps) mediante configuración, ejecutando tareas distintas con el mismo modelo base.'
  ];

  const exercises = [
    {
      title: 'LLM vs Agente: Identifica las diferencias',
      description:
        'Describe qué pasaría en estos escenarios con (A) solo un LLM y (B) con un agente. Nota las diferencias: "Refactoriza este componente React y asegúrate de que los tests pasen"',
      solution: `(A) LLM solo: "Aquí está el componente refactorizado... [genera código]". Usuario tiene que: copiar el código, probarlo, verificar tests, corregir manualmente si fallan.

(B) Agente:
1. Lee el archivo actual
2. Genera la refactorización
3. Ejecuta npm test
4. Si fallan, analiza el error del test
5. Modifica el código automáticamente
6. Vuelve a ejecutar tests
7. Notifica: "Listo. Tests pasados ✓"

El agente ahorra iteraciones manuales y puede auto-corregirse.`
    },
    {
      title: 'Diseña un agente especializado para tu rol',
      description:
        'Si fueras un desarrollador backend, ¿qué "especialización" querrías que tuviera tu agente? ¿Qué priorizaría? ¿Qué información debería tener en su memoria permanente?',
      solution: `Ejemplo para Backend Developer:
- Prioridades: Seguridad SQL, eficiencia de queries, patrones REST
- Herramientas críticas: Acceso a BD de test, ejecución de migrations, profiling de performance
- Memory.md guardaría: Arquitectura de BD, patrones preferidos del equipo, estándares de código

Esto sería muy diferente para un Frontend Developer (prioridades: A11y, Core Web Vitals, responsive design).`
    }
  ];

  const summary = `Los agentes de IA representan la evolución de los LLMs hacia sistemas autónomos y prácticos:

• Un LLM es el "cerebro puro" (solo genera texto); un agente es la infraestructura completa que le permite actuar en el mundo real (ejecutar código, leer/escribir archivos, llamar APIs)
• Los agentes implementan ciclos de feedback: detectan fallos, analizan raíces, generan soluciones, reintentan. Logran auto-corrección sin intervención humana
• Poseen dos tipos de memoria: temporal (contexto activo) y permanente (memory.md) que persiste entre sesiones
• Los 7 pilares: razonamiento (Chain of Thought), herramientas (file/shell/API access), auto-corrección, especialización por dominio, portabilidad, multi-canal (Slack/CLI/API) e interfaz bidireccional
• Un mismo modelo base (Claude, GPT-4) puede especializarse radicalmente mediante configuración: un agente backend prioriza seguridad SQL; uno frontend prioriza A11y
• La adopción de agentes ha crecido 156% en 2026 porque pueden reducir tiempo de desarrollo en tareas repetitivas hasta un 65%

El siguiente paso es entender qué tipos de agentes existen (OpenClaw vs Hermes) y cuándo usarlos.`;

  return (
    <>
      <LessonLayout
        title={title}
        description="Entiende qué es un agente de IA, cómo se diferencia de un LLM tradicional y cuáles son sus 7 pilares fundamentales"
        breadcrumbs={breadcrumbs}
        seoTitle="Fundamentos de Agentes de IA | Agentes Inteligentes - Fullstack Dev Lovers"
        seoDescription="Descubre qué es un agente de IA, cómo funcionan, memoria persistente, herramientas externas y los 7 pilares que los hacen únicos."
        seoKeywords="agentes ia, que es un agente, llm vs agente, agentes autonomos, memoria agente"
        url="https://fullstackdevlovers.com/ia/intermedio/agentes/fundamentos-agentes"
      >
        <p>
          Ya conoces qué es un LLM y cómo integrar APIs de IA en tus aplicaciones. Pero hay un salto cualitativo
          desde ahí: pasar de <strong>"modelos que responden preguntas"</strong> a{' '}
          <strong>"sistemas que razonan, actúan y se auto-corrigen"</strong>. Estos últimos se llaman{' '}
          <strong>agentes de IA</strong>.
        </p>

        <LessonSection title="LLM vs Agente: La distinción fundamental">
          <p>
            Un <strong>Modelo de Lenguaje (LLM)</strong> como Claude o GPT-4 es un "cerebro puro". Posee
            capacidad de razonamiento y generación de texto, pero es fundamentalmente <strong>estático</strong>:
          </p>
          <ul>
            <li>Solo procesa entrada de texto</li>
            <li>No puede ejecutar código directamente</li>
            <li>Carece de memoria persistente</li>
            <li>No puede acceder a sistemas externos</li>
            <li>Requiere supervisión humana para cada acción</li>
          </ul>

          <p style={{ marginTop: '1.5rem' }}>
            Un <strong>Agente de IA</strong> es la infraestructura completa que envuelve al LLM, permitiéndole{' '}
            <strong>actuar en el mundo real</strong>:
          </p>

          <Table
            headers={['Característica', 'LLM', 'Agente']}
            rows={[
              ['Ejecución de acciones', 'No', 'Sí'],
              ['Memoria persistente', 'No', 'Sí (short-term y long-term)'],
              ['Acceso a herramientas', 'No', 'Sí (APIs, terminal, archivos)'],
              ['Auto-corrección', 'No', 'Sí (ciclos de feedback)'],
              ['Autonomía', 'No', 'Sí (toma decisiones sin intervención)'],
              ['Integración con ecosistemas', 'No', 'Sí (Slack, GitHub, etc.)']
            ]}
          />

          <InfoBox type="insight">
            <strong>Analogía:</strong> Si el LLM es el motor de un coche, el agente es todo el vehículo: motor,
            ruedas, dirección, combustible y navegador integrado.
          </InfoBox>
        </LessonSection>

        <LessonSection title="Los 7 Pilares de un Agente Funcional">
          <div style={{ marginBottom: '2rem' }}>
            <h4>1. Razonamiento y Planificación (Reasoning & Planning)</h4>
            <p>
              Los agentes no actúan impulsivamente. Antes de ejecutar cualquier tarea, modelan el problema mediante{' '}
              <strong>Chain of Thought (CoT)</strong>, dividiendo objetivos complejos en pasos lógicos:
            </p>
            <pre style={{
              background: '#f5f5f5',
              padding: '1rem',
              borderRadius: '4px',
              overflow: 'auto'
            }}>
{`Objetivo: "Crea una página de contacto con validación"

Plan generado automáticamente:
├── Paso 1: Analizar estructura del proyecto
├── Paso 2: Crear componente ContactForm.tsx
├── Paso 3: Implementar validación (Zod)
├── Paso 4: Añadir estilos CSS responsivos
├── Paso 5: Crear tests unitarios
├── Paso 6: Verificar accesibilidad (A11y)
└── Paso 7: Integrar en rutas principales`}
            </pre>
          </div>

          <div style={{ marginBottom: '2rem' }}>
            <h4>2. Uso de Herramientas (Tool Use)</h4>
            <p>El agente posee "manos digitales". Puede interactuar con:</p>
            <ul>
              <li><strong>Sistema de archivos:</strong> Leer, escribir, eliminar archivos</li>
              <li><strong>Terminal:</strong> Ejecutar scripts, compilar código, desplegar</li>
              <li><strong>APIs externas:</strong> Consultar bases de datos, enviar notificaciones</li>
              <li><strong>Navegadores:</strong> Auditar sitios web, capturar pantallas</li>
              <li><strong>Procesamiento:</strong> Redimensionar imágenes, convertir formatos</li>
            </ul>
          </div>

          <div style={{ marginBottom: '2rem' }}>
            <h4>3. Autonomía y Ciclos de Auto-Corrección</h4>
            <p>La verdadera distinción está en los <strong>feedback loops</strong>:</p>
            <pre style={{
              background: '#f5f5f5',
              padding: '1rem',
              borderRadius: '4px'
            }}>
{`1. Detecta el error (captura stack trace)
2. Analiza la causa
3. Genera una solución alternativa
4. Vuelve a intentar
5. Valida que funcionó
6. Repite hasta éxito (con máximo de intentos)`}
            </pre>
          </div>

          <div style={{ marginBottom: '2rem' }}>
            <h4>4. Especialización en Dominio (Domain Specificity)</h4>
            <p>
              El mismo agente puede comportarse radicalmente diferente según su configuración:
            </p>
            <ul>
              <li><strong>Agente Frontend:</strong> Prioriza accesibilidad (A11y) y Core Web Vitals</li>
              <li><strong>Agente Backend:</strong> Se enfoca en seguridad SQL y eficiencia</li>
              <li><strong>Agente DevOps:</strong> Automatiza despliegues y monitoreo</li>
            </ul>
          </div>

          <div style={{ marginBottom: '2rem' }}>
            <h4>5. Portabilidad e Infraestructura</h4>
            <p>A diferencia de soluciones SaaS cerradas, los agentes ofrecen portabilidad total:</p>
            <ul>
              <li>🖥️ <strong>Local:</strong> Desarrollo intensivo en tu máquina</li>
              <li>☁️ <strong>VPS Privado:</strong> Tareas de larga duración</li>
              <li>🐳 <strong>Docker:</strong> Despliegue escalable en contenedores</li>
              <li>⚙️ <strong>Embedded:</strong> Incluso en dispositivos especializados</li>
            </ul>
          </div>

          <div style={{ marginBottom: '2rem' }}>
            <h4>6. Interfaz Multi-Canal</h4>
            <p>El agente no requiere una interfaz web. Se integra donde ya trabajas:</p>
            <ul>
              <li>💬 <strong>Slack/Discord:</strong> Recibe actualizaciones en tiempo real</li>
              <li>📱 <strong>Telegram:</strong> Acceso móvil a tareas remotas</li>
              <li>📧 <strong>Email:</strong> Notificaciones ejecutivas</li>
              <li>🔗 <strong>Webhooks:</strong> Integración con cualquier plataforma</li>
            </ul>
          </div>

          <div>
            <h4>7. Entrada y Salida Bidireccional</h4>
            <p><strong>Entrada:</strong> Código del repositorio, instrucciones en lenguaje natural, imágenes, logs de error</p>
            <p><strong>Salida:</strong> Código modificado, comandos ejecutados, reportes generados, notificaciones enviadas</p>
          </div>
        </LessonSection>

        <LessonSection title="Sistema de Memoria en Agentes">
          <p>Los agentes modernos implementan dos tipos de memoria:</p>

          <div style={{ marginBottom: '2rem' }}>
            <h4>Memoria Temporal (Short-term)</h4>
            <ul>
              <li>⏱️ Contexto activo de la sesión actual</li>
              <li>📝 Conversación inmediata</li>
              <li>⚡ Volátil (se restablece al finalizar)</li>
              <li>💾 Limitada por ventana de contexto del LLM (~200k tokens)</li>
            </ul>
          </div>

          <div>
            <h4>Memoria Permanente (Long-term)</h4>
            <ul>
              <li>📚 Archivos como <code>memory.md</code>, <code>soul.md</code></li>
              <li>🔄 Persiste entre sesiones</li>
              <li>🎯 Información estructurada: preferencias, aprendizajes, patrones</li>
              <li>📊 Permite al agente "crecer" con la experiencia</li>
            </ul>
          </div>

          <InfoBox type="tip">
            La memoria permanente es lo que distingue un agente que "olvida todo después de cada sesión"
            de uno que <strong>aprende y evoluciona</strong> con el tiempo.
          </InfoBox>
        </LessonSection>

        <LessonKeyPoints points={keyPoints} />
        <LessonExercises exercises={exercises} />
        <LessonSummary summary={summary} />

        <LessonNavigation nav={nav} />
      </LessonLayout>
    </>
  );
}
