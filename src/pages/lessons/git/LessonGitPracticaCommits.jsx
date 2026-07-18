import { LessonLayout, CodeBlock } from '../../../components';
import { LessonNavigation } from '../../../components/LessonNavigation';
import { useBreadcrumb } from '../../../hooks/useBreadcrumb';
import { useLessonNavigation } from '../../../hooks/useLessonNavigation';

export function LessonGitPracticaCommits() {
  const breadcrumbs = useBreadcrumb();
  const nav = useLessonNavigation();

  const exercises = [
    {
      id: 1,
      title: 'Agregar archivos a staging',
      description: 'Prepara archivos para ser committeados usando git add.',
      hint: 'Usa git add <archivo> o git add . para todos',
      solution: `# Agregar un archivo específico
git add main.js

# Agregar todos los archivos modificados
git add .

# Ver qué está en staging
git status`,
      verification: 'git status debería mostrar archivos en "Changes to be committed"'
    },
    {
      id: 2,
      title: 'Hacer tu primer commit',
      description: 'Crea tu primer commit con un mensaje descriptivo.',
      hint: 'Usa git commit -m "mensaje claro"',
      solution: `git commit -m "Agregar archivo inicial del proyecto"`,
      verification: 'git log (verás tu commit en el historial)'
    },
    {
      id: 3,
      title: 'Ver el historial de commits',
      description: 'Visualiza el historial de todos los commits realizados.',
      hint: 'Usa git log para ver el historial completo',
      solution: `# Ver historial detallado
git log

# Ver historial compacto (una línea por commit)
git log --oneline

# Ver últimos 5 commits
git log -5

# Ver en formato bonito con gráfico
git log --graph --oneline --all`,
      verification: 'Verás todos tus commits con hash, autor, fecha y mensaje'
    },
    {
      id: 4,
      title: 'Modificar el último commit',
      description: 'Corrige un commit anterior (solo si es local).',
      hint: 'Usa git commit --amend',
      solution: `# Cambiar el mensaje del último commit
git commit --amend -m "Nuevo mensaje más claro"

# O agregar cambios olvidados al último commit
git add archivo-olvidado.js
git commit --amend --no-edit`,
      verification: 'git log --oneline mostrará el commit corregido'
    },
    {
      id: 5,
      title: 'Crear múltiples commits',
      description: 'Practica haciendo varios commits con mensajes diferentes.',
      hint: 'Crea archivos, agrega contenido, haz commits',
      solution: `# Crear primer archivo y commit
echo "console.log('Hola');" > app.js
git add app.js
git commit -m "Crear archivo principal"

# Crear segundo archivo y commit
echo "// configuración" > config.js
git add config.js
git commit -m "Agregar archivo de configuración"

# Ver el historial
git log --oneline`,
      verification: 'git log debería mostrar 2 commits nuevos'
    }
  ];

  return (
    <>
      <LessonLayout
        title="Práctica: Haz tus Primeros Commits"
        description="Ejercicios prácticos para crear y gestionar commits"
        breadcrumbs={breadcrumbs}
        seoTitle="Práctica Git: Haz tus Primeros Commits - Java Backend Learning"
        seoDescription="Ejercicios prácticos para crear commits con Git"
        seoKeywords="git, práctica, commits, add, log, historial"
        url="https://javabackendlearning.com/git/practicas/haz-tus-primeros-commits"
      >
        <p>
          En esta práctica vamos a aprender a agregar cambios a Git y crear commits con mensajes claros.
          Realiza cada ejercicio en orden dentro de tu repositorio.
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
            <strong>Excelente:</strong> Ya dominas los commits, que son la base de Git. Ahora es momento de aprender
            a trabajar con ramas para manejar múltiples características en paralelo.
          </p>
        </div>
      </LessonLayout>

      <LessonNavigation previous={nav.previous} next={nav.next} />
    </>
  );
}
