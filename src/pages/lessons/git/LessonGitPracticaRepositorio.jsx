import { useState } from 'react';
import { LessonLayout, CodeBlock } from '../../../components';
import { LessonNavigation } from '../../../components/LessonNavigation';
import { useBreadcrumb } from '../../../hooks/useBreadcrumb';
import { useLessonNavigation } from '../../../hooks/useLessonNavigation';
import './LessonGitPracticaRepositorio.css';

export function LessonGitPracticaRepositorio() {
  const breadcrumbs = useBreadcrumb();
  const nav = useLessonNavigation();
  const [expandedExercise, setExpandedExercise] = useState(null);

  const exercises = [
    {
      id: 1,
      title: 'Crear un repositorio local',
      description: 'Inicializa un nuevo repositorio Git en tu computadora.',
      hint: 'Usa git init en una carpeta nueva',
      solution: `mkdir mi-proyecto
cd mi-proyecto
git init`,
      verification: 'ls -la (deberías ver la carpeta .git)'
    },
    {
      id: 2,
      title: 'Clonar un repositorio remoto',
      description: 'Descarga un repositorio existente desde GitHub.',
      hint: 'Usa git clone con la URL del repositorio',
      solution: `git clone https://github.com/usuario/nombre-repositorio.git
cd nombre-repositorio`,
      verification: 'git remote -v (verás la URL remota)'
    },
    {
      id: 3,
      title: 'Ver el estado del repositorio',
      description: 'Comprueba qué archivos han cambiado y el estado general.',
      hint: 'Usa git status',
      solution: `git status`,
      verification: 'Verás qué archivos están sin rastrear (untracked) o modificados'
    },
    {
      id: 4,
      title: 'Crear un repositorio con contenido inicial',
      description: 'Crea un repositorio, agrega un archivo README y verifica el estado.',
      hint: 'Primero git init, luego crea un archivo, luego git status',
      solution: `mkdir proyecto-nuevo
cd proyecto-nuevo
git init
echo "# Mi Proyecto" > README.md
git status`,
      verification: 'Verás README.md en la lista de archivos sin rastrear'
    }
  ];

  const toggleExercise = (id) => {
    setExpandedExercise(expandedExercise === id ? null : id);
  };

  return (
    <>
      <LessonLayout
        title="Práctica: Crea tu Primer Repositorio"
        description="Ejercicios prácticos para crear y clonar repositorios"
        breadcrumbs={breadcrumbs}
        seoTitle="Práctica Git: Crea tu Primer Repositorio - Java Backend Learning"
        seoDescription="Ejercicios prácticos para crear y gestionar repositorios Git"
        seoKeywords="git, práctica, repositorio, init, clone"
        url="https://javabackendlearning.com/git/practicas/crea-tu-primer-repositorio"
      >
        <p>
          En esta práctica vamos a crear nuestro primer repositorio Git tanto local como clonando uno remoto.
          Realiza cada ejercicio en orden.
        </p>

        <div className="exercises-practice-container">
          {exercises.map((exercise) => (
            <div key={exercise.id} className="exercise-practice-item">
              <button
                className={`exercise-practice-header ${expandedExercise === exercise.id ? 'expanded' : ''}`}
                onClick={() => toggleExercise(exercise.id)}
              >
                <span className="exercise-practice-number">Ejercicio {exercise.id}</span>
                <span className="exercise-practice-title">{exercise.title}</span>
                <span className="exercise-practice-icon">▼</span>
              </button>

              {expandedExercise === exercise.id && (
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
              )}
            </div>
          ))}
        </div>

        <div style={{ marginTop: '3rem', padding: '1.5rem', backgroundColor: '#f0f7ff', borderLeft: '4px solid #0066cc', borderRadius: '6px' }}>
          <p style={{ margin: 0 }}>
            <strong>Consejo:</strong> Ahora que ya sabes crear y clonar repositorios, estás listo para empezar a
            agregar archivos y hacer commits. ¡Continúa con la siguiente práctica!
          </p>
        </div>
      </LessonLayout>

      <LessonNavigation previous={nav.previous} next={nav.next} />
    </>
  );
}
