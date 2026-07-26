import { LessonLayout, CodeBlock } from '../../../components';
import { LessonNavigation } from '../../../components/LessonNavigation';
import { useBreadcrumb } from '../../../hooks/useBreadcrumb';
import { useLessonNavigation } from '../../../hooks/useLessonNavigation';

export function LessonGitPracticaConfigura() {
  const breadcrumbs = useBreadcrumb();
  const nav = useLessonNavigation();

  const exercises = [
    {
      id: 1,
      title: 'Configurar nombre y email globales',
      description: 'Configura tu nombre y email para que aparezcan en todos tus commits en este ordenador.',
      hint: 'Usa git config --global para configurar a nivel global',
      solution: `git config --global user.name "Tu Nombre Completo"
git config --global user.email "tu.email@example.com"`,
      verification: 'git config --global --list'
    },
    {
      id: 2,
      title: 'Crear configuración local en un proyecto',
      description: 'Crea una configuración local específica para un proyecto (diferente a la global).',
      hint: 'Usa git config sin --global para configuración local del repositorio',
      solution: `cd /ruta/a/tu/proyecto
git config user.name "Otro Nombre"
git config user.email "otro.email@example.com"`,
      verification: 'git config --list'
    },
    {
      id: 3,
      title: 'Verificar configuración actual',
      description: 'Lista todas las configuraciones que tienes establecidas.',
      hint: 'Usa git config --list',
      solution: `git config --list
# También puedes ver solo globales:
git config --global --list`,
      verification: 'Verás todas tus configuraciones listadas'
    },
    {
      id: 4,
      title: 'Crear un primer repositorio',
      description: 'Inicializa Git en un proyecto nuevo.',
      hint: 'Usa git init en la carpeta del proyecto',
      solution: `cd mi-proyecto
git init`,
      verification: 'ls -la (deberías ver una carpeta .git)'
    }
  ];

  return (
    <>
      <LessonLayout
        title="Práctica: Configura tu Git"
        description="Ejercicios prácticos para configurar Git en tu sistema"
        breadcrumbs={breadcrumbs}
        seoTitle="Práctica Git: Configura tu Git - Java Backend Learning"
        seoDescription="Ejercicios prácticos para configurar Git correctamente en tu sistema"
        seoKeywords="git, práctica, ejercicios, configuración"
        url="https://javabackendlearning.com/git/practicas/configura-tu-git"
      >
        <p>
          En esta práctica vamos a llevar a cabo los pasos esenciales para configurar Git en tu sistema.
          Realiza cada ejercicio en orden siguiendo las instrucciones.
        </p>

        <div className="exercises-practice-container">
          {exercises.map((exercise) => (
            <div key={exercise.id} className="exercise-practice-item">
              <div className="exercise-practice-header">
                <span className="exercise-practice-number">Ejercicio {exercise.id}</span>
                <span className="exercise-practice-title">{exercise.title}</span>
              </div>

              <div className="exercise-practice-content">
                <div className="exercise-section">
                  <h4>Descripción</h4>
                  <p>{exercise.description}</p>
                </div>

                <div className="exercise-section">
                  <h4>Pista</h4>
                  <p>{exercise.hint}</p>
                </div>

                <div className="exercise-section">
                  <h4>Solución</h4>
                  <CodeBlock
                    language="bash"
                    code={exercise.solution}
                  />
                </div>

                <div className="exercise-section">
                  <h4>Verificación</h4>
                  <p>{exercise.verification}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: '3rem', padding: '1.5rem', backgroundColor: '#f0f7ff', borderLeft: '4px solid #0066cc', borderRadius: '6px' }}>
          <p style={{ margin: 0 }}>
            <strong>Consejo final:</strong> Una vez que hayas completado todos los ejercicios, tu Git estará correctamente
            configurado y listo para empezar a crear repositorios y hacer commits. Felicidades por completar esta práctica.
          </p>
        </div>
      </LessonLayout>

      <LessonNavigation previous={nav.previous} next={nav.next} />
    </>
  );
}
