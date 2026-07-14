import { useState } from 'react';
import { LessonLayout, CodeBlock } from '../../../components';
import { LessonNavigation } from '../../../components/LessonNavigation';
import { useBreadcrumb } from '../../../hooks/useBreadcrumb';
import { useLessonNavigation } from '../../../hooks/useLessonNavigation';
import './LessonGitPracticaRamas.css';

export function LessonGitPracticaRamas() {
  const breadcrumbs = useBreadcrumb();
  const nav = useLessonNavigation();
  const [expandedExercise, setExpandedExercise] = useState(null);

  const exercises = [
    {
      id: 1,
      title: 'Crear una nueva rama',
      description: 'Crea una rama para trabajar en una nueva funcionalidad.',
      hint: 'Usa git branch <nombre> o git checkout -b <nombre>',
      solution: `# Crear una rama
git branch feature/login

# O crear y cambiar en un comando
git checkout -b feature/login

# Ver todas las ramas
git branch`,
      verification: 'git branch debería mostrar tu nueva rama con un asterisco en la rama actual'
    },
    {
      id: 2,
      title: 'Cambiar entre ramas',
      description: 'Aprende a moverte entre diferentes ramas.',
      hint: 'Usa git checkout <nombre-rama>',
      solution: `# Cambiar a una rama existente
git checkout feature/login

# Ver en qué rama estás
git status

# También puedes usar git switch (más moderno)
git switch feature/login`,
      verification: 'git status debería mostrar la rama actual'
    },
    {
      id: 3,
      title: 'Hacer cambios en una rama',
      description: 'Crea archivos y commits en tu rama de feature.',
      hint: 'Crear archivos, hacer git add y git commit como siempre',
      solution: `# Asegúrate que estás en tu rama
git status

# Crea un archivo
echo "// Código de login" > login.js

# Agrega y commitea
git add login.js
git commit -m "Implementar funcionalidad de login"

# Ver log
git log --oneline`,
      verification: 'git log mostrará tus commits en esta rama'
    },
    {
      id: 4,
      title: 'Listar todas las ramas',
      description: 'Visualiza todas las ramas del repositorio.',
      hint: 'Usa git branch o git branch -a',
      solution: `# Ver ramas locales
git branch

# Ver todas las ramas (locales y remotas)
git branch -a

# Ver con información adicional
git branch -v`,
      verification: 'Verás un listado de todas tus ramas'
    },
    {
      id: 5,
      title: 'Eliminar una rama',
      description: 'Elimina una rama que ya no necesitas.',
      hint: 'Usa git branch -d <nombre>',
      solution: `# Eliminar una rama local
git branch -d feature/login

# Si tiene cambios no mergeados, debes forzar
git branch -D feature/login

# Eliminar una rama remota
git push origin --delete feature/login`,
      verification: 'git branch no mostrará la rama eliminada'
    }
  ];

  const toggleExercise = (id) => {
    setExpandedExercise(expandedExercise === id ? null : id);
  };

  return (
    <>
      <LessonLayout
        title="Práctica: Trabaja con Ramas"
        description="Ejercicios prácticos para crear y gestionar ramas"
        breadcrumbs={breadcrumbs}
        seoTitle="Práctica Git: Trabaja con Ramas - Java Backend Learning"
        seoDescription="Ejercicios prácticos para crear y gestionar ramas en Git"
        seoKeywords="git, práctica, ramas, branch, checkout, merge"
        url="https://javabackendlearning.com/git/practicas/trabaja-con-ramas"
      >
        <p>
          En esta práctica vamos a aprender a trabajar con ramas, que son fundamentales para desarrollar
          nuevas funcionalidades sin afectar la rama principal. Realiza cada ejercicio en orden.
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
            <strong>¡Bien hecho!</strong> Ahora que dominas las ramas, el siguiente paso es aprender a hacer merge
            de ramas para integrar tus cambios en la rama principal. ¡Continúa!
          </p>
        </div>
      </LessonLayout>

      <LessonNavigation previous={nav.previous} next={nav.next} />
    </>
  );
}
