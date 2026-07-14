import { useState } from 'react';
import { LessonNavigation } from '../../../components/LessonNavigation';
import { useBreadcrumb } from '../../../hooks/useBreadcrumb';
import { useLessonNavigation } from '../../../hooks/useLessonNavigation';
import { LessonLayout, TheorySection, ExerciseSection, CodeBlock } from '../../../components';

export function LessonGitPlataformasRemotas() {
  const breadcrumbs = useBreadcrumb();
  const nav = useLessonNavigation();
  const [activePlatform, setActivePlatform] = useState('github');
  const exercises = [
    {
      title: 'Verificar repositorio remoto configurado',
      description: 'Comprueba a dónde está enviando tus commits.',
      solution: `git remote -v

# Output:
origin  https://github.com/usuario/repo.git (fetch)
origin  https://github.com/usuario/repo.git (push)`
    },
    {
      title: 'Agregar un nuevo remoto',
      description: 'Agrega otro repositorio remoto (por ejemplo, un backup).',
      solution: `git remote add backup https://github.com/usuario/backup-repo.git

# Verificar
git remote -v

# Push a ambos remotos
git push origin main
git push backup main`
    },
    {
      title: 'Cambiar URL del remoto',
      description: 'Si cambias de HTTPS a SSH o de repositorio.',
      solution: `git remote set-url origin git@github.com:usuario/repo.git

# O cambiarlo de vuelta
git remote set-url origin https://github.com/usuario/repo.git`
    },
    {
      title: 'Ver información detallada del remoto',
      description: 'Obtener información completa sobre ramas rastreadas.',
      solution: `git remote show origin

# Muestra:
# - URL de fetch y push
# - Ramas locales que rastrean remotas
# - Ramas remotas conocidas
# - Rama por defecto para pull`
    },
    {
      title: 'Eliminar un remoto',
      description: 'Borra la configuración de un repositorio remoto.',
      solution: `git remote remove backup

# O de forma más explícita
git remote rm backup

# Verificar
git remote -v`
    },
    {
      title: 'Renombrar un remoto',
      description: 'Cambia el nombre de un remoto configurado.',
      solution: `# Renombrar origin a upstream
git remote rename origin upstream

# Verificar
git remote -v`
    },
    {
      title: 'Configurar rama de tracking',
      description: 'Establece qué rama remota rastrea cada rama local.',
      solution: `# Ver configuración actual
git branch -vv

# Configurar rama para rastrear remoto
git branch --set-upstream-to=origin/main

# O en una rama específica
git branch -u origin/feature feature`
    },
    {
      title: 'Crear repositorio local desde cero',
      description: 'Inicializar repo local y conectar con GitHub.',
      solution: `# 1. Crear directorio local
mkdir mi-proyecto
cd mi-proyecto

# 2. Inicializar repo
git init

# 3. Crear archivos y hacer primer commit
echo "# Mi Proyecto" &gt; README.md
git add README.md
git commit -m "Initial commit"

# 4. Agregar remoto (después de crear repo en GitHub)
git remote add origin https://github.com/usuario/mi-proyecto.git

# 5. Cambiar rama a main si es necesario
git branch -M main

# 6. Push
git push -u origin main`
    },
    {
      title: 'Clonar un repositorio específico',
      description: 'Descargar un repositorio remoto a tu máquina.',
      solution: `# Clonar repositorio completo
git clone https://github.com/usuario/repo.git

# Clonar solo rama específica
git clone -b main https://github.com/usuario/repo.git

# Clonar con profundidad limitada (más rápido)
git clone --depth 1 https://github.com/usuario/repo.git

# Clonar en directorio específico
git clone https://github.com/usuario/repo.git mi-directorio`
    },
    {
      title: 'Sincronizar fork con upstream',
      description: 'Actualizar tu fork con cambios del repositorio original.',
      solution: `# 1. Agregar upstream
git remote add upstream https://github.com/original/repo.git

# 2. Fetch de upstream
git fetch upstream

# 3. Cambiar a main local
git switch main

# 4. Rebase con upstream/main
git rebase upstream/main

# 5. Push a tu fork
git push origin main`
    }
  ];

  return (
    <>
      <LessonLayout
      title="GitHub, GitLab y Bitbucket"
      description="Aprende sobre las plataformas de hosting de repositorios Git"
      breadcrumbs={breadcrumbs}
    >
      <TheorySection title="Repositorios Remotos">
        <p>
          Un repositorio remoto es una versión de tu proyecto alojado en un servidor
          (GitHub, GitLab, Bitbucket, Gitea, etc). Permite:
        </p>
        <ul>
          <li>Colaboración entre desarrolladores</li>
          <li>Backup del código</li>
          <li>Control de acceso y permisos</li>
          <li>CI/CD y automatización</li>
          <li>Documentación y seguimiento de issues</li>
        </ul>

        <p>
          Git es descentralizado: cada desarrollador tiene una copia completa del repositorio.
          El servidor remoto es solo un punto de sincronización centralizado.
        </p>
      </TheorySection>

      <div style={{ marginBottom: '2rem' }}>
        <label style={{ fontWeight: 'bold', display: 'block', marginBottom: '1rem' }}>
          Selecciona una plataforma:
        </label>
        <select
          value={activePlatform}
          onChange={(e) => setActivePlatform(e.target.value)}
          style={{
            padding: '0.75rem 1rem',
            borderRadius: '4px',
            border: '2px solid #8B5CF6',
            fontSize: '1rem',
            cursor: 'pointer',
            backgroundColor: '#fff',
            minWidth: '300px'
          }}
        >
          <option value="github">GitHub - La plataforma más popular</option>
          <option value="gitlab">GitLab - Alternativa poderosa</option>
          <option value="bitbucket">Bitbucket - Por Atlassian</option>
        </select>
      </div>

      {activePlatform === 'github' && (
        <TheorySection title="GitHub">
          <p>
            <strong>GitHub</strong> es la plataforma más popular para alojar repositorios Git.
            Propiedad de Microsoft desde 2018.
          </p>

          <h4>Características</h4>
          <ul>
            <li>Gratis para repositorios públicos ilimitados</li>
            <li>Repositorios privados gratuitos con límites (hasta 3 colaboradores)</li>
            <li>Planes pagos para equipos y empresas</li>
            <li>Pull Requests y code review integrados</li>
            <li>Issues y project boards para gestión</li>
            <li>GitHub Actions para CI/CD automático</li>
            <li>GitHub Pages para hosting estático</li>
            <li>Integraciones con herramientas de desarrollo</li>
          </ul>

          <h4>Crear un repositorio en GitHub</h4>
          <ol>
            <li>Ve a github.com (registrate si es necesario)</li>
            <li>Click en "+" y luego "New repository"</li>
            <li>Rellena:
              <ul>
                <li>Repository name (obligatorio)</li>
                <li>Description (opcional)</li>
                <li>Público o Privado</li>
                <li>Inicializar con README (opcional)</li>
              </ul>
            </li>
            <li>Click "Create repository"</li>
            <li>GitHub te mostrará comandos para conectar tu repo local</li>
          </ol>

          <h4>Inicializar repo local y conectar con GitHub</h4>
          <CodeBlock
            language="bash"
            code={`git remote add origin https://github.com/usuario/mi-repo.git
git branch -M main
git push -u origin main`}
          />
        </TheorySection>
      )}

      {activePlatform === 'gitlab' && (
        <TheorySection title="GitLab">
          <p>
            <strong>GitLab</strong> es una alternativa a GitHub, también muy potente.
            Ofrecida tanto como servicio en línea como software para auto-alojar.
          </p>

          <h4>Características</h4>
          <ul>
            <li>Repositorios privados gratis (con límites de storage)</li>
            <li>GitLab CI/CD integrado y muy poderoso</li>
            <li>Se puede auto-alojar en tu propio servidor (GitLab Community Edition)</li>
            <li>Merge Requests (equivalente a GitHub PRs)</li>
            <li>Issues, boards, y wikis integrados</li>
            <li>Container registry integrado</li>
            <li>Muy usado en organizaciones con requisitos de seguridad/privacidad</li>
          </ul>

          <h4>Pros vs Cons</h4>
          <p>
            <strong>Pros:</strong> Mejor para equipos que necesitan privacidad,
            CI/CD más flexible, posibilidad de auto-alojar.
          </p>
          <p>
            <strong>Cons:</strong> Comunidad más pequeña que GitHub, menos integraciones third-party.
          </p>
        </TheorySection>
      )}

      {activePlatform === 'bitbucket' && (
        <TheorySection title="Bitbucket">
          <p>
            <strong>Bitbucket</strong> es propiedad de Atlassian, la empresa detrás de JIRA y Confluence.
          </p>

          <h4>Características</h4>
          <ul>
            <li>Muy similar a GitHub en funcionalidad</li>
            <li>Integración perfecta con JIRA y Confluence</li>
            <li>Bitbucket Pipelines para CI/CD</li>
            <li>Pull Requests con revisión de código</li>
            <li>Bitbucket Cloud (servicio en línea) y Bitbucket Server (auto-hosted)</li>
            <li>Gratis para equipos pequeños (hasta 5 usuarios)</li>
          </ul>

          <h4>Cuándo usar Bitbucket</h4>
          <p>
            Si tu organización ya usa herramientas Atlassian (JIRA, Confluence),
            Bitbucket ofrece mejor integración.
          </p>
        </TheorySection>
      )}

      <TheorySection title="Comparativa: GitHub vs GitLab vs Bitbucket">
        <table style={{width: '100%', borderCollapse: 'collapse', fontSize: '0.9em'}}>
          <thead>
            <tr style={{borderBottom: '2px solid #8B5CF6'}}>
              <th style={{textAlign: 'left', padding: '0.5rem'}}>Característica</th>
              <th style={{textAlign: 'left', padding: '0.5rem'}}>GitHub</th>
              <th style={{textAlign: 'left', padding: '0.5rem'}}>GitLab</th>
              <th style={{textAlign: 'left', padding: '0.5rem'}}>Bitbucket</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{borderBottom: '1px solid #e0e0e0'}}>
              <td style={{padding: '0.5rem'}}>Popularidad</td>
              <td style={{padding: '0.5rem'}}>Mayor</td>
              <td style={{padding: '0.5rem'}}>Media</td>
              <td style={{padding: '0.5rem'}}>Menor</td>
            </tr>
            <tr style={{borderBottom: '1px solid #e0e0e0'}}>
              <td style={{padding: '0.5rem'}}>Repos privados gratis</td>
              <td style={{padding: '0.5rem'}}>Sí (limitado)</td>
              <td style={{padding: '0.5rem'}}>Sí</td>
              <td style={{padding: '0.5rem'}}>Sí (limitado)</td>
            </tr>
            <tr style={{borderBottom: '1px solid #e0e0e0'}}>
              <td style={{padding: '0.5rem'}}>Auto-hosted</td>
              <td style={{padding: '0.5rem'}}>Solo GitHub Enterprise</td>
              <td style={{padding: '0.5rem'}}>Sí, Community Edition gratis</td>
              <td style={{padding: '0.5rem'}}>Sí, pero pago</td>
            </tr>
            <tr style={{borderBottom: '1px solid #e0e0e0'}}>
              <td style={{padding: '0.5rem'}}>CI/CD</td>
              <td style={{padding: '0.5rem'}}>Actions (bueno)</td>
              <td style={{padding: '0.5rem'}}>CI/CD (muy poderoso)</td>
              <td style={{padding: '0.5rem'}}>Pipelines (bueno)</td>
            </tr>
            <tr>
              <td style={{padding: '0.5rem'}}>Integraciones</td>
              <td style={{padding: '0.5rem'}}>Excelentes</td>
              <td style={{padding: '0.5rem'}}>Buenas</td>
              <td style={{padding: '0.5rem'}}>Muy buenas con Atlassian</td>
            </tr>
          </tbody>
        </table>
      </TheorySection>

      <TheorySection title="Configurar Remoto">
        <h4>Cuando clonas un repositorio</h4>
        <p>
          Git automáticamente configura "origin" apuntando al repositorio clonado:
        </p>
        <CodeBlock
          language="bash"
          code={`git clone https://github.com/usuario/repo.git
# origin ya está configurado
git remote -v
# origin  https://github.com/usuario/repo.git (fetch)
# origin  https://github.com/usuario/repo.git (push)`}
        />

        <h4>Para un repositorio local nuevo</h4>
        <p>
          Después de crear el repositorio en GitHub/GitLab:
        </p>
        <CodeBlock
          language="bash"
          code={`# 1. Inicializar repo local
git init

# 2. Agregar primer contenido
echo "# Mi Proyecto" > README.md
git add README.md
git commit -m "Initial commit"

# 3. Agregar remoto
git remote add origin https://github.com/usuario/mi-repo.git

# 4. Cambiar rama a main si es necesario
git branch -M main

# 5. Push
git push -u origin main`}
        />
      </TheorySection>

      <TheorySection title="Manejo de Repositorios Remotos">
        <CodeBlock
          language="bash"
          code={`git remote
git remote -v
git remote show origin
git remote add name url
git remote remove name
git remote rename old new
git remote set-url name url`}
        />

        <h4>Múltiples remotos</h4>
        <p>
          Puedes tener múltiples remotos. Útil para mantener backup o
          sincronizar con varias plataformas:
        </p>
        <CodeBlock
          language="bash"
          code={`git remote add origin https://github.com/usuario/repo.git
git remote add backup https://gitlab.com/usuario/repo.git

git push origin main
git push backup main

git push --all`}
        />
      </TheorySection>

      <TheorySection title="SSH vs HTTPS">
        <h4>HTTPS (Recomendado para principiantes)</h4>
        <CodeBlock
          language="bash"
          code={`git clone https://github.com/usuario/repo.git
git push origin main`}
        />
        <p>
          <strong>Pros:</strong> Simple, funciona detrás de firewalls, no requiere configuración.
          <strong>Cons:</strong> Requiere autenticación (usuario/contraseña o token) cada vez.
        </p>

        <h4>SSH (Recomendado para equipos)</h4>
        <CodeBlock
          language="bash"
          code={`git clone git@github.com:usuario/repo.git
git push origin main`}
        />
        <p>
          <strong>Pros:</strong> Más seguro, sin contraseñas, más rápido.
          <strong>Cons:</strong> Requiere configuración inicial de claves SSH.
        </p>

        <h4>Configurar SSH (una sola vez)</h4>
        <CodeBlock
          language="bash"
          code={`# 1. Generar claves (si no las tienes)
ssh-keygen -t ed25519 -C "tu-email@example.com"

# 2. Agregar clave pública a GitHub
# Copia contenido de ~/.ssh/id_ed25519.pub
# GitHub → Settings → SSH and GPG keys → New SSH key

# 3. Verificar configuración
ssh -T git@github.com`}
        />
      </TheorySection>

      <TheorySection title="Permisos y Colaboración">
        <h4>Niveles de permisos</h4>
        <p>
          Cuando invitas colaboradores a un repositorio, puedes asignar permisos:
        </p>
        <ul>
          <li><strong>Read</strong> - Ver y clonar, pero no escribir</li>
          <li><strong>Write/Push</strong> - Hacer push directamente a ramas</li>
          <li><strong>Admin</strong> - Control completo del repositorio</li>
          <li><strong>Maintain</strong> - Similiar a admin pero con restricciones</li>
        </ul>

        <h4>Mejores prácticas de colaboración</h4>
        <ul>
          <li>Usa Pull Requests para cambios importantes, no push directo a main</li>
          <li>Requiere revisión de código antes de mergear a main</li>
          <li>Usa branch protection rules para forzar revisos y checks</li>
          <li>Mantén main siempre en estado deployable (sin bugs)</li>
          <li>Usa issues para trackear bugs y features</li>
        </ul>
      </TheorySection>

      <TheorySection title="Trabajar con Forks">
        <p>
          Un fork es una copia de un repositorio bajo tu cuenta.
          Es útil para contribuir a proyectos open source donde no tienes permisos de escritura.
        </p>

        <h4>Flujo típico con forks</h4>
        <CodeBlock
          language="bash"
          code={`# 1. Fork el repositorio (desde GitHub web)

# 2. Clonar tu fork
git clone https://github.com/tu-usuario/repo.git

# 3. Agregar upstream (repo original)
git remote add upstream https://github.com/autor-original/repo.git

# 4. Crear rama de feature
git switch -c feature/mi-aporte

# 5. Hacer cambios y commits
git add .
git commit -m "agregar feature"

# 6. Push a tu fork
git push origin feature/mi-aporte

# 7. En GitHub: Abrir Pull Request de tu fork al repo original

# 8. Sincronizar con cambios del repo original
git fetch upstream
git rebase upstream/main
git push origin main`}
        />
      </TheorySection>

      <TheorySection title="Buenas Prácticas de Repositorios">
        <h4>1. Estructura clara</h4>
        <ul>
          <li>README.md con instrucciones de instalación</li>
          <li>LICENSE file (elegir licencia apropiada)</li>
          <li>CONTRIBUTING.md con guía de contribución</li>
          <li>.gitignore para excluir archivos no deseados</li>
          <li>Carpetas organizadas por funcionalidad</li>
        </ul>

        <h4>2. Commits y mensajes</h4>
        <ul>
          <li>Commits pequeños y atómicos (un cambio por commit)</li>
          <li>Mensajes descriptivos y en presente</li>
          <li>Referencia a issues cuando sea relevante</li>
        </ul>

        <h4>3. Branches</h4>
        <ul>
          <li>Usa convenciones de nombres (feature/, bugfix/, hotfix/)</li>
          <li>Elimina branches después de mergear</li>
          <li>Protege main para evitar cambios accidentales</li>
        </ul>

        <h4>4. Pull Requests</h4>
        <ul>
          <li>Descripción clara de cambios</li>
          <li>Requer revisión antes de mergear</li>
          <li>Verificar que tests pasen</li>
          <li>Squash commits si hay muchos intermedios</li>
        </ul>
      </TheorySection>

      <ExerciseSection title="Práctica: Maneja Remotos" exercises={exercises} />
    </LessonLayout>
      <LessonNavigation
        previousLink={nav.previous}
        previousTitle={nav.previousTitle}
        nextLink={nav.next}
        nextTitle={nav.nextTitle}
      />
    </>
  );
}
