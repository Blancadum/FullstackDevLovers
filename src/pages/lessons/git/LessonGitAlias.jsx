import { LessonLayout, CodeBlock, TabsVerticalContent } from '../../../components';
import { LessonNavigation } from '../../../components/LessonNavigation';
import { useBreadcrumb } from '../../../hooks/useBreadcrumb';
import { useLessonNavigation } from '../../../hooks/useLessonNavigation';

export function LessonGitAlias() {
  const breadcrumbs = useBreadcrumb();
  const nav = useLessonNavigation();

  return (
    <>
      <LessonLayout
        title="Configuración de Alias en Git"
        description="Crea atajos personalizados para comandos de Git"
        breadcrumbs={breadcrumbs}
        seoTitle="Configuración de Alias en Git - Java Backend Learning"
        seoDescription="Aprende a crear alias personalizados en Git para acelerar tu flujo de trabajo"
        seoKeywords="git, alias, atajos, comandos personalizados"
        url="https://javabackendlearning.com/git/basicos/alias"
      >
        <p>
          Los <strong>alias en Git</strong> son atajos personalizados que te permiten ejecutar comandos largos o complejos
          con secuencias cortas. Esto acelera significativamente tu flujo de trabajo y reduce errores de tipeo.
        </p>
        <p>
          En lugar de escribir <code>git commit -m "mensaje"</code> cada vez, puedes crear un alias como <code>git cm</code>
          que haga lo mismo.
        </p>

        <TabsVerticalContent items={[
          {
            id: '1',
            title: 'Crear alias básico',
            content: (
              <div>
                <h4>Crear alias básico</h4>
                <p>
                  Los alias más comunes son para comandos que usas frecuentemente. Se definen en tu configuración global
                  de Git y se aplican a todos tus repositorios.
                </p>
                <CodeBlock
                  language="bash"
                  code={`# Crear alias para commit
git config --global alias.cm commit

# Crear alias para status
git config --global alias.st status

# Crear alias para log compacto
git config --global alias.lg log --oneline

# Usar los alias
git cm -m "Mensaje del commit"
git st
git lg`}
                />
                <p>
                  <strong>Ventaja:</strong> Escribes menos y tu flujo es más rápido. Especialmente útil para comandos
                  que usas múltiples veces al día.
                </p>
              </div>
            )
          },
          {
            id: '2',
            title: 'Alias complejos con flags',
            content: (
              <div>
                <h4>Alias complejos con flags</h4>
                <p>
                  Los alias pueden incluir múltiples comandos, pipes y flags. Estos son especialmente poderosos para
                  tareas recurrentes.
                </p>
                <CodeBlock
                  language="bash"
                  code={`# Alias para ver cambios pendientes con colores
git config --global alias.diff 'diff --color-words'

# Alias para ver el historial formateado
git config --global alias.hist 'log --pretty=format:"%h %ad | %s%d [%an]" --graph --date=short'

# Alias para ver ramas con último commit
git config --global alias.br 'branch -v'

# Uso
git diff
git hist
git br`}
                />
              </div>
            )
          },
          {
            id: '3',
            title: 'Alias para operaciones diarias',
            content: (
              <div>
                <h4>Alias para operaciones diarias</h4>
                <p>
                  Aquí están los alias más útiles para tu día a día como desarrollador:
                </p>
                <CodeBlock
                  language="bash"
                  code={`# Crear todo de una vez
git config --global alias.cm commit -m
git config --global alias.st status
git config --global alias.co checkout
git config --global alias.ad add
git config --global alias.ps push
git config --global alias.pl pull
git config --global alias.br branch

# Ahora puedes usar:
git ad .
git cm "Nuevo feature"
git ps origin main
git pl origin main`}
                />
                <p>
                  <strong>Consejo:</strong> Mantén tus alias simples y consistentes. Usa 2-3 letras que sean fáciles de
                  recordar.
                </p>
              </div>
            )
          },
          {
            id: '4',
            title: 'Ver y editar alias',
            content: (
              <div>
                <h4>Ver y editar alias</h4>
                <p>
                  Puedes ver todos tus alias configurados o editarlos directamente en el archivo de configuración.
                </p>
                <CodeBlock
                  language="bash"
                  code={`# Ver todos los alias configurados
git config --global --get-regexp alias

# Editar el archivo de configuración directamente
git config --global -e

# Eliminar un alias
git config --global --unset alias.cm

# Ver solo un alias específico
git config --global alias.cm`}
                />
                <p>
                  El archivo de configuración global se encuentra en <code>~/.gitconfig</code> en Linux/Mac o
                  <code>C:\\Users\\TuUsuario\\.gitconfig</code> en Windows.
                </p>
              </div>
            )
          }
        ]} />

        <div style={{ marginTop: '2rem', padding: '1.5rem', backgroundColor: '#f0f7ff', borderLeft: '4px solid #0066cc', borderRadius: '6px' }}>
          <p style={{ margin: 0 }}>
            <strong>Ejercicio práctico:</strong> Crea los siguientes alias en tu configuración global y úsalos en tus
            próximos commits: <code>cm</code>, <code>st</code>, <code>ad</code>, <code>ps</code>
          </p>
        </div>
      </LessonLayout>

      <LessonNavigation previous={nav.previous} next={nav.next} />
    </>
  );
}
