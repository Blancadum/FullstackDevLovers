import { LessonTemplate, CodeBlock, Table, InfoBox } from '../components';
import { LessonNavigation } from '../components/LessonNavigation';
import { useBreadcrumb } from '../hooks/useBreadcrumb';
import { useLessonNavigation } from '../hooks/useLessonNavigation';

export function LessonCodeiumAI() {
  const breadcrumbs = useBreadcrumb();
  const nav = useLessonNavigation();

  const concepts = [
    {
      icon: '🤖',
      title: 'Codeium',
      definition: 'Asistente de IA integrado en Eclipse que sugiere código automáticamente.',
      example: 'Similar a GitHub Copilot, sugiere líneas/bloques mientras escribes',
    },
    {
      icon: '💡',
      title: 'Sugerencias Inteligentes',
      definition: 'Lee contexto (comentarios, tipos) y predice el código más probable.',
      example: 'Aceptar con Tab, rechazar con otra tecla. Memoria del proyecto',
    },
    {
      icon: '📚',
      title: 'Generación desde Javadoc',
      definition: 'Codeium genera implementaciones a partir de comentarios descriptivos.',
      example: '/** Devuelve vocales en String */ → Codeium completa el método',
    },
    {
      icon: '🧠',
      title: 'Memoria de Contexto',
      definition: 'Codeium aprende patrones del proyecto y mejora sus sugerencias.',
      example: 'Cuanto más código similar escribas, mejores sugerencias proporciona',
    },
  ];

  const exercises = [
    {
      title: 'Usar Codeium para generar método',
      description: 'Escribe el comentario Javadoc de un método que cuente vocales en una String. Deja que Codeium genere la implementación. Verifica que sea correcta.',
      solution: `/**
 * Devuelve el número de vocales en la cadena (a, e, i, o, u).
 * @param cadena cadena de entrada
 * @return número de vocales encontradas
 */
public static int contarVocales(String cadena) {
    int contador = 0;
    for (char c : cadena.toLowerCase().toCharArray()) {
        if (c == 'a' || c == 'e' || c == 'i' || c == 'o' || c == 'u') {
            contador++;
        }
    }
    return contador;
}`,
    },
    {
      title: 'Generar método de validación',
      description: 'Escribe un comentario: "Valida que el email contenga @. Devuelve true si es válido, false si no."',
      solution: `/**
 * Valida que el email contenga arroba (@).
 * @param email dirección de correo
 * @return true si contiene @, false en caso contrario
 */
public static boolean esEmailValido(String email) {
    return email != null && email.contains("@");
}`,
    },
  ];

  const keyPoints = [
    'Codeium es un asistente IA integrado en Eclipse que sugiere código basado en contexto',
    'Sugerencias aparecen en gris mientras escribes. Aceptar con Tab, rechazar con otra tecla',
    'Codeium lee: comentarios previos, nombres de variables, tipos de datos, métodos anteriores',
    'Escribir Javadoc descriptivo mejora significativamente la calidad de las sugerencias',
    'Codeium tiene memoria del contexto: repite patrones que ve en el mismo archivo',
    'NO siempre propone la mejor solución. Debes revisar y verificar el código sugerido',
    'Para guiar mejor: escribir comentario Javadoc claro O inicio del for/if, luego Codeium completa',
    'Métodos rutinarios (contar, buscar, reemplazar): Codeium ahorra mucho tiempo',
    'Métodos complejos: Codeium puede generar estructura base, luego editas la lógica',
    'Reflexión: No es hacer que el IDE escriba todo. Es colaboración: tu lógica + IA sugiere código',
    'Beneficios: ahorro de tiempo, menos errores de sintaxis, código más consistente',
    'Precaución: el código sugerido podría ser subóptimo. Siempre entiende lo que genera antes de aceptar',
  ];

  const sections = [
    {
      title: '¿Qué es Codeium?',
      content: (
        <>
          <p>
            <strong>Codeium</strong> es un <strong>asistente de programación basado en Inteligencia Artificial</strong>
            que se integra en Eclipse (y otros IDEs). Mientras escribes código, Codeium
            <strong> sugiere automáticamente líneas o bloques completos</strong> que pueden completar lo que estás escribiendo.
          </p>

          <p>
            Es similar en concepto a <strong>GitHub Copilot</strong>, pero integrado directamente en Eclipse.
            Las sugerencias aparecen en gris y se aceptan pulsando <code>Tab</code>. Si una sugerencia no te interesa,
            basta pulsar cualquier otra tecla para que desaparezca.
          </p>

          <h3>Comparativa: Copilot vs Codeium</h3>
          <Table
            headers={['Característica', 'GitHub Copilot', 'Codeium']}
            rows={[
              ['Entorno', 'VS Code, VSM, etc', 'Eclipse, VS Code, etc'],
              ['Modelo IA', 'OpenAI GPT-3/4', 'IA propia (entrenamiento)'],
              ['Costo', 'Pagado', 'Gratuito/Freemium'],
              ['Instalación', 'Extension', 'Plugin de Eclipse'],
              ['Velocidad', 'Rápida', 'Rápida'],
              ['Privacidad', 'Envía a servidores', 'Opciones locales disponibles'],
            ]}
          />
        </>
      ),
    },

    {
      title: 'Instalación de Codeium en Eclipse',
      content: (
        <>
          <h3>Pasos de instalación</h3>
          <ol>
            <li>Help → Install New Software…</li>
            <li>Click "Add…"
              <ul>
                <li>Name: Codeium</li>
                <li>Location: https://plugins.jetbrains.com/plugins/eclipse/</li>
              </ul>
            </li>
            <li>Buscar "Codeium" en la lista → Select</li>
            <li>Next → siguiente el asistente → Finish</li>
            <li>Reiniciar Eclipse</li>
          </ol>
          <h3>Después de la instalación</h3>
          <ul>
            <li>Codeium está listo para usar inmediatamente</li>
            <li>Aparecerá una pestaña "Codeium" en perspectiva</li>
            <li>Si no ves sugerencias, verifica que las preferencias de Codeium estén habilitadas</li>
          </ul>
        </>
      ),
    },

    {
      title: 'Cómo Usar Codeium: Ejemplos Prácticos',
      content: (
        <>
          <h3>Ejemplo 1: Generar método simple desde Javadoc</h3>
          <CodeBlock
            code={`// Escribes el comentario Javadoc:
/**
 * Devuelve el número total de vocales que contiene la cadena.
 * @param cadena cadena de entrada
 * @return número de vocales
 */
public static int contarVocales(String cadena) {
    // Codeium sugiere aquí ↓ (en gris)
    int contador = 0;
    for (char c : cadena.toLowerCase().toCharArray()) {
        if (c == 'a' || c == 'e' || c == 'i' || c == 'o' || c == 'u') {
            contador++;
        }
    }
    return contador;
}

// Presionas Tab → acepta la sugerencia
// Presionas otra tecla → rechaza`}
          />

          <h3>Ejemplo 2: Guiar a Codeium con estructura inicial</h3>
          <CodeBlock
            code={`/**
 * Reemplaza espacios en blanco por guiones bajos.
 * @param texto texto de entrada
 * @return texto con espacios como guiones bajos
 */
public static String sustituirEspacios(String texto) {
    // Codeium sugiere:
    return texto.replace(" ", "_");
}

// Alternativa: si escribes FOR, Codeium completa:
public static String sustituirEspacios(String texto) {
    StringBuilder resultado = new StringBuilder();
    for (char c : texto.toCharArray()) {
        resultado.append(c == ' ' ? '_' : c);
    }
    return resultado.toString();
}`}
          />

          <h3>Ejemplo 3: Generar método más complejo</h3>
          <CodeBlock
            code={`/**
 * Calcula el factorial de un número.
 * @param n número entero positivo
 * @return factorial de n
 * @throws IllegalArgumentException si n < 0
 */
public static long factorial(int n) {
    // Codeium sugiere:
    if (n < 0) {
        throw new IllegalArgumentException("n debe ser >= 0");
    }
    if (n == 0 || n == 1) {
        return 1;
    }
    long resultado = 1;
    for (int i = 2; i <= n; i++) {
        resultado *= i;
    }
    return resultado;
}`}
          />
        </>
      ),
    },

    {
      title: 'Buenas Prácticas con Codeium',
      content: (
        <>
          <h3>HACER</h3>
          <ul>
            <li><strong>Escribir comentarios descriptivos</strong> antes del método. Ej: "Busca el índice de la primera vocal"</li>
            <li><strong>Indicar estructura inicial</strong> si lo necesitas: escribir if, for, try-catch</li>
            <li><strong>Revisar siempre</strong> lo que genera Codeium. ¿Es lógicamente correcto? ¿Maneja edge cases?</li>
            <li><strong>Usar para métodos rutinarios</strong>: contar, buscar, reemplazar, validar</li>
            <li><strong>Aceptar si es correcto</strong> (Tab). Rechazar si no (otra tecla).</li>
            <li><strong>Enseñar al asistente</strong>: cuanto más código similar escribas, mejores sugerencias da</li>
          </ul>

          <h3>NO HACER</h3>
          <ul>
            <li><strong>No confiar ciegamente</strong> en Codeium. Puede generar código subóptimo o incorrecto</li>
            <li><strong>No usarlo para lógica compleja</strong> que requiere decisiones de diseño</li>
            <li><strong>No copiar-pegar sugerencias sin entender</strong> qué hacen</li>
            <li><strong>No asumir que genera el mejor algoritmo</strong>. A veces hay soluciones más eficientes</li>
            <li><strong>No desactivar tu pensamiento crítico</strong>. El IA es una herramienta, no una solución mágica</li>
          </ul>
        </>
      ),
    },

    {
      title: 'Reflexión: ¿El Futuro de la Programación?',
      content: (
        <>
          <h3>Beneficios de asistentes IA</h3>
          <ul>
            <li>⚡ <strong>Velocidad:</strong> ahorra escribir código repetitivo y rutinario</li>
            <li>🛡️ <strong>Reducción de errores:</strong> menos typos, sintaxis correcta</li>
            <li>📚 <strong>Aprendizaje:</strong> aprenderás patrones y mejores prácticas viendo sugerencias</li>
            <li>💪 <strong>Productividad:</strong> más tiempo pensando en lógica, menos escribiendo boilerplate</li>
          </ul>

          <h3>Limitaciones y riesgos</h3>
          <ul>
            <li>⚠️ <strong>No entiende contexto profundo:</strong> puede generar código que compila pero es ineficiente</li>
            <li>⚠️ <strong>Dependencia:</strong> si siempre dejas que IA escriba, no aprendes realmente</li>
            <li>⚠️ <strong>Privacidad:</strong> (Copilot) envía código a servidores de OpenAI</li>
            <li>⚠️ <strong>Datos de entrenamiento:</strong> Codeium entrenó en código de GitHub (posibles copyright issues)</li>
          </ul>

          <h3>Recomendación</h3>
          <p>
            <strong>Úsalo como herramienta auxiliar, no como sustituto del pensamiento.</strong> Es como
            una calculadora: te ahorra tiempo en operaciones mecánicas, pero tú sigues siendo quien entiende
            el problema y toma decisiones sobre el diseño.
          </p>
        </>
      ),
    },

    {
      title: 'Solución de Problemas',
      content: (
        <>
          <h3>Codeium no sugiere nada</h3>
          <ul>
            <li>Verifica que esté instalado: Help → About Eclipse → Installation Details</li>
            <li>Reinicia Eclipse</li>
            <li>Abre preferencias (Window → Preferences) y busca "Codeium", asegúrate que esté activado</li>
          </ul>

          <h3>Las sugerencias son muy malas</h3>
          <ul>
            <li>Escribe comentarios más descriptivos</li>
            <li>Codeium aprende del contexto: escribe más código similar primero</li>
            <li>Considera cambiar de IA o usarla solo para métodos simples</li>
          </ul>

          <h3>Codeium es lento</h3>
          <ul>
            <li>Depende de tu conexión a internet (si usa servidor remoto)</li>
            <li>Opciones: usar versión local, desactivar temporalmente, configurar en preferencias</li>
          </ul>
        </>
      ),
    },
  ];

  const summary = `Codeium es un asistente IA que mejora tu productividad:

• Codeium es un asistente IA integrado en Eclipse que sugiere código automáticamente
• Sugerencias basadas en contexto (comentarios, variables, tipos, métodos previos)
• Aceptar con Tab, rechazar con otra tecla. SIEMPRE revisar lo sugerido
• Escribir Javadoc claro mejora enormemente la calidad de sugerencias
• Ideal para métodos rutinarios; menos útil para lógica compleja
• Beneficio: ahorro de tiempo. Riesgo: dependencia sin entendimiento
• Úsalo como herramienta auxiliar, no como sustituto del pensamiento
• Verifica siempre que el código generado sea correcto y eficiente
• Aprende de los patrones que ves en las sugerencias
• Participa activamente: el IA mejora con tu feedback (aceptar/rechazar)`;

      return (
    <>
      <LessonTemplate
        breadcrumbs={breadcrumbs}
        concepts={concepts}
        exercises={exercises}
        keyPoints={keyPoints}
        sections={sections}
        summary={summary}
      />
      <LessonNavigation
        previousLink={nav.previous}
        previousTitle={nav.previousTitle}
        nextLink={nav.next}
        nextTitle={nav.nextTitle}
      />
    </>
  );
}