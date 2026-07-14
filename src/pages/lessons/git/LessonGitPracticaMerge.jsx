import { useState } from 'react';
import { LessonLayout, CodeBlock } from '../../../components';
import { LessonNavigation } from '../../../components/LessonNavigation';
import { useBreadcrumb } from '../../../hooks/useBreadcrumb';
import { useLessonNavigation } from '../../../hooks/useLessonNavigation';
import './LessonGitPracticaMerge.css';

export function LessonGitPracticaMerge() {
  const breadcrumbs = useBreadcrumb();
  const nav = useLessonNavigation();
  const [expandedExercise, setExpandedExercise] = useState(null);

  const exercises = [
    {
      id: 1,
      title: 'Hacer merge sin conflictos',
      description: 'Integra una rama en main cuando no hay cambios conflictivos.',
      hint: 'Cambia a main y usa git merge <rama>',
      solution: `# Cambiar a la rama main
git checkout main

# Traer los cambios de tu rama
git merge feature/login

# Ver el historial
git log --oneline --graph`,
      verification: 'git log mostrará tus commits integrados en main'
    },
    {
      id: 2,
      title: 'Identificar un conflicto de merge',
      description: 'Aprende a reconocer cuando Git no puede hacer merge automáticamente.',
      hint: 'Hacer cambios en la misma línea de dos ramas causará conflicto',
      solution: `# Si hay conflicto, verás un mensaje:
# CONFLICT (content): Merge conflict in archivo.js

# Ver el archivo con el conflicto
cat archivo.js

# Verás algo como:
# <<<<<<< HEAD
# código de main
# =======
# código de la rama
# >>>>>>> feature/login`,
      verification: 'El archivo mostrará los conflictos marcados con <<<<<<, ======= y >>>>>>'
    },
    {
      id: 3,
      title: 'Resolver un conflicto manualmente',
      description: 'Edita el archivo para resolver el conflicto.',
      hint: 'Abre el archivo en tu editor y elige qué código mantener',
      solution: `# 1. Abre el archivo en tu editor
# 2. Busca los marcadores de conflicto
# 3. Decide qué código mantener y elimina los marcadores
# 4. Guarda el archivo

# Ejemplo - elegir la versión de main:
# <<<<<<< HEAD
# console.log('Versión final');  // MANTÉN ESTA
# =======
# console.log('Versión temporal');
# >>>>>>> feature/login

# Resultado después de editar:
# console.log('Versión final');

# Luego agrega el archivo
git add archivo.js

# Y completa el merge
git commit -m "Resolver conflicto de merge"`,
      verification: 'git status debería mostrar el merge completado'
    },
    {
      id: 4,
      title: 'Abort de un merge conflictivo',
      description: 'Cancela un merge si cambiaste de opinión.',
      hint: 'Usa git merge --abort',
      solution: `# Si estás en un merge conflictivo y quieres cancelarlo
git merge --abort

# Esto deshace el merge y vuelves al estado anterior
git status`,
      verification: 'git status mostrará que estás en tu rama original sin cambios'
    },
    {
      id: 5,
      title: 'Merge automático y rápido (Fast-forward)',
      description: 'Cuando el merge es directo sin cambios conflictivos.',
      hint: 'Ocurre cuando la rama está adelante de main',
      solution: `# Crear una rama y agregar commits
git checkout -b feature/nueva
echo "código nuevo" > nuevo.js
git add nuevo.js
git commit -m "Agregar nueva función"

# Cambiar a main y hacer merge
git checkout main
git merge feature/nueva

# Verás "Fast-forward" en el mensaje
# Esto significa que main simplemente se movió al punto de feature/nueva`,
      verification: 'git log mostrará que main está en el mismo punto que feature/nueva'
    }
  ];

  const toggleExercise = (id) => {
    setExpandedExercise(expandedExercise === id ? null : id);
  };

  return (
    <>
      <LessonLayout
        title="Práctica: Resuelve Conflictos de Merge"
        description="Ejercicios prácticos para integrar ramas y resolver conflictos"
        breadcrumbs={breadcrumbs}
        seoTitle="Práctica Git: Resuelve Conflictos de Merge - Java Backend Learning"
        seoDescription="Ejercicios prácticos para hacer merge y resolver conflictos en Git"
        seoKeywords="git, práctica, merge, conflictos, integración, ramas"
        url="https://javabackendlearning.com/git/practicas/resuelve-conflictos-de-merge"
      >
        <p>
          En esta práctica vamos a aprender a integrar ramas usando merge y cómo resolver conflictos cuando
          dos ramas modifican el mismo código. Realiza cada ejercicio en orden.
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
            <strong>¡Felicidades!</strong> Has completado todas las prácticas de Git Básico. Ahora estás listo para
            trabajar con repositorios remotos y colaborar con otros desarrolladores. ¡Sigue adelante!
          </p>
        </div>
      </LessonLayout>

      <LessonNavigation previous={nav.previous} next={nav.next} />
    </>
  );
}
