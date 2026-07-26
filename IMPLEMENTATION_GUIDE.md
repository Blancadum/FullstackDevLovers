# Implementation Guide: Performance Optimization

## Quick Reference

**Current Issues:**
- 137 lesson components bundled into single 2.8 MB file
- Tree-shaking effectiveness: 0%
- Typical page load: all lessons downloaded (waste of 2.1 MB)

**Solutions:**
1. Route-based code splitting
2. Per-category dynamic imports
3. Lazy component loading

---

## Option 1: Route-Based Code Splitting (RECOMMENDED)

### Why This First?

- Minimal code changes to App.jsx
- Vite handles all bundling automatically
- Immediate 50-70% bundle reduction
- No new dependencies

### Implementation Steps

#### Step 1: Update vite.config.js

```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        // Create separate chunks for each lesson category
        manualChunks: {
          'lesson-git': [
            './src/pages/lessons/git/LessonGitConfiguracionInicial.jsx',
            './src/pages/lessons/git/LessonGitCommits.jsx',
            './src/pages/lessons/git/LessonGitBranches.jsx',
            './src/pages/lessons/git/LessonGitMerge.jsx',
            './src/pages/lessons/git/LessonGitAlias.jsx',
            './src/pages/lessons/git/LessonGitErroresComunes.jsx',
            './src/pages/lessons/git/LessonGitPracticaConfigura.jsx',
            './src/pages/lessons/git/LessonGitPracticaRepositorio.jsx',
            './src/pages/lessons/git/LessonGitPracticaCommits.jsx',
            './src/pages/lessons/git/LessonGitPracticaRamas.jsx',
            './src/pages/lessons/git/LessonGitPracticaMerge.jsx',
            './src/pages/lessons/git/LessonGitPushPullFetch.jsx',
            './src/pages/lessons/git/LessonGitPullRequests.jsx',
            './src/pages/lessons/git/LessonGitPlataformasRemotas.jsx',
            './src/pages/lessons/git/LessonGitWorkflow.jsx',
            './src/pages/lessons/git/LessonGitGitHub.jsx',
            './src/pages/lessons/git/LessonGitGitLab.jsx',
            './src/pages/lessons/git/LessonBitbucket.jsx',
          ],
          'lesson-java': [
            './src/pages/lessons/java/LessonAbstractClasses.jsx',
            './src/pages/lessons/java/LessonArrays.jsx',
            './src/pages/lessons/java/LessonClasses.jsx',
            './src/pages/lessons/java/LessonCollections.jsx',
            './src/pages/lessons/java/LessonControlFlow.jsx',
            './src/pages/lessons/java/LessonCRUD.jsx',
            './src/pages/lessons/java/LessonDataTypes.jsx',
            './src/pages/lessons/java/LessonExceptions.jsx',
            './src/pages/lessons/java/LessonGenerics.jsx',
            './src/pages/lessons/java/LessonInheritance.jsx',
            './src/pages/lessons/java/LessonInterfacesAbstract.jsx',
            './src/pages/lessons/java/LessonJavaInternals.jsx',
            './src/pages/lessons/java/LessonJavaOperators.jsx',
            './src/pages/lessons/java/LessonJavaVM.jsx',
            './src/pages/lessons/java/LessonJDBC.jsx',
            './src/pages/lessons/java/LessonLambdas.jsx',
            './src/pages/lessons/java/LessonPolymorphism.jsx',
            './src/pages/lessons/java/LessonRefactoring.jsx',
            './src/pages/lessons/java/LessonScanner.jsx',
            './src/pages/lessons/java/LessonStreams.jsx',
            './src/pages/lessons/java/LessonStrings.jsx',
          ],
          'lesson-docker': [
            './src/pages/lessons/docker/LessonDocker.jsx',
            './src/pages/lessons/docker/LessonDockerComandos.jsx',
            './src/pages/lessons/docker/LessonDockerCompose.jsx',
            './src/pages/lessons/docker/LessonDockerComposeNew.jsx',
            './src/pages/lessons/docker/LessonDockerConceptos.jsx',
            './src/pages/lessons/docker/LessonDockerDebugging.jsx',
            './src/pages/lessons/docker/LessonDockerFrontend.jsx',
            './src/pages/lessons/docker/LessonDockerIntro.jsx',
            './src/pages/lessons/docker/LessonDockerJava.jsx',
            './src/pages/lessons/docker/LessonDockerMultistage.jsx',
            './src/pages/lessons/docker/LessonDockerNetworking.jsx',
            './src/pages/lessons/docker/LessonDockerNodejs.jsx',
            './src/pages/lessons/docker/LessonDockerOptimizacion.jsx',
            './src/pages/lessons/docker/LessonDockerPracticas.jsx',
            './src/pages/lessons/docker/LessonDockerPython.jsx',
            './src/pages/lessons/docker/LessonDockerVolumenes.jsx',
            './src/pages/lessons/docker/LessonDockerfile.jsx',
          ],
          'lesson-aws': [
            './src/pages/lessons/aws/LessonAWSAlmacenamiento.jsx',
            './src/pages/lessons/aws/LessonAWSArquitectura.jsx',
            './src/pages/lessons/aws/LessonAWSCloudWatch.jsx',
            './src/pages/lessons/aws/LessonAWSConceptos.jsx',
            './src/pages/lessons/aws/LessonAWSDeployment.jsx',
            './src/pages/lessons/aws/LessonAWSDynamoDB.jsx',
            './src/pages/lessons/aws/LessonAWSEC2.jsx',
            './src/pages/lessons/aws/LessonAWSIAM.jsx',
            './src/pages/lessons/aws/LessonAWSIntro.jsx',
            './src/pages/lessons/aws/LessonAWSJava.jsx',
            './src/pages/lessons/aws/LessonAWSLambda.jsx',
            './src/pages/lessons/aws/LessonAWSPricing.jsx',
            './src/pages/lessons/aws/LessonAWSProyecto.jsx',
            './src/pages/lessons/aws/LessonAWSRDS.jsx',
            './src/pages/lessons/aws/LessonAWSS3.jsx',
            './src/pages/lessons/aws/LessonAWSVPC.jsx',
          ],
          'lesson-sql': [
            './src/pages/lessons/sql/LessonSQLAdvanced.jsx',
            './src/pages/lessons/sql/LessonSQLBackupRecuperacion.jsx',
            './src/pages/lessons/sql/LessonSQLCrearBD.jsx',
            './src/pages/lessons/sql/LessonSQLDDL.jsx',
            './src/pages/lessons/sql/LessonSQLDML.jsx',
            './src/pages/lessons/sql/LessonSQLIntroduccion.jsx',
            './src/pages/lessons/sql/LessonSQLJOINs.jsx',
            './src/pages/lessons/sql/LessonSQLMongoDB.jsx',
            './src/pages/lessons/sql/LessonSQLMySQL.jsx',
            './src/pages/lessons/sql/LessonSQLPostgreSQL.jsx',
            './src/pages/lessons/sql/LessonSQLUsuariosPermisos.jsx',
            './src/pages/lessons/sql/LessonSQLVsNoSQL.jsx',
          ],
          'lesson-spring-boot': [
            './src/pages/lessons/spring-boot/LessonOAuth2JWT.jsx',
            './src/pages/lessons/spring-boot/LessonSpringBatch.jsx',
            './src/pages/lessons/spring-boot/LessonSpringBootControllers.jsx',
            './src/pages/lessons/spring-boot/LessonSpringBootIntroduccion.jsx',
            './src/pages/lessons/spring-boot/LessonSpringBootJPA.jsx',
            './src/pages/lessons/spring-boot/LessonSpringBootSecurity.jsx',
            './src/pages/lessons/spring-boot/LessonSpringBootServices.jsx',
            './src/pages/lessons/spring-boot/LessonSpringBootSetup.jsx',
            './src/pages/lessons/spring-boot/LessonSpringBootTesting.jsx',
            './src/pages/lessons/spring-boot/LessonSpringBootValidation.jsx',
            './src/pages/lessons/spring-boot/LessonSpringSecurityAdvanced.jsx',
          ],
          'lesson-herramientas': [
            './src/pages/lessons/herramientas/LessonBashShell.jsx',
            './src/pages/lessons/herramientas/LessonCICD.jsx',
            './src/pages/lessons/herramientas/LessonCloudDeployment.jsx',
            './src/pages/lessons/herramientas/LessonCodeiumAI.jsx',
            './src/pages/lessons/herramientas/LessonConceptoEntornoDesarrollo.jsx',
            './src/pages/lessons/herramientas/LessonDependencias.jsx',
            './src/pages/lessons/herramientas/LessonEclipse.jsx',
            './src/pages/lessons/herramientas/LessonGradle.jsx',
            './src/pages/lessons/herramientas/LessonIDEs.jsx',
            './src/pages/lessons/herramientas/LessonIntelliJ.jsx',
            './src/pages/lessons/herramientas/LessonMaven.jsx',
            './src/pages/lessons/herramientas/LessonVSCode.jsx',
            './src/pages/lessons/herramientas/LessonVSCodeExtensions.jsx',
          ],
          'lesson-metodologias': [
            './src/pages/lessons/metodologias/LessonAgileIntroduccion.jsx',
            './src/pages/lessons/metodologias/LessonDevelopmentConcepts.jsx',
            './src/pages/lessons/metodologias/LessonPatronesDiseno.jsx',
            './src/pages/lessons/metodologias/LessonSOLID.jsx',
            './src/pages/lessons/metodologias/LessonSoftwareTesting.jsx',
            './src/pages/lessons/metodologias/LessonUML.jsx',
          ],
          'lesson-kubernetes': [
            './src/pages/lessons/kubernetes/LessonKubernetesDeployments.jsx',
            './src/pages/lessons/kubernetes/LessonKubernetesIntro.jsx',
            './src/pages/lessons/kubernetes/LessonKubernetesPods.jsx',
          ],
          'lesson-proyecto': [
            './src/pages/lessons/proyecto/LessonDefinicionProyecto.jsx',
            './src/pages/lessons/proyecto/LessonProyectoAPIs.jsx',
            './src/pages/lessons/proyecto/LessonProyectoAgile.jsx',
            './src/pages/lessons/proyecto/LessonProyectoArquitectura.jsx',
            './src/pages/lessons/proyecto/LessonProyectoBackend.jsx',
            './src/pages/lessons/proyecto/LessonProyectoDatabase.jsx',
            './src/pages/lessons/proyecto/LessonProyectoEjemplos.jsx',
            './src/pages/lessons/proyecto/LessonProyectoLanding.jsx',
            './src/pages/lessons/proyecto/LessonProyectoRequisitos.jsx',
            './src/pages/lessons/proyecto/LessonProyectoRetos.jsx',
            './src/pages/lessons/proyecto/LessonProyectoSetup.jsx',
            './src/pages/lessons/proyecto/LessonProyectoSprint1.jsx',
            './src/pages/lessons/proyecto/LessonProyectoSprint2.jsx',
            './src/pages/lessons/proyecto/LessonProyectoTesting.jsx',
          ],
          'lesson-kotlin': [
            './src/pages/lessons/kotlin/LessonKotlinGeneric.jsx',
            './src/pages/lessons/kotlin/LessonKotlinIntroduccion.jsx',
            './src/pages/lessons/kotlin/LessonKotlinVsJava.jsx',
          ],
        }
      }
    }
  }
})
```

#### Step 2: Leave App.jsx Mostly Unchanged

No changes needed to App.jsx! Vite automatically:
- Detects all imports
- Routes imports to their respective chunks
- Loads chunks on demand

**Result after build:**
```
dist/assets/
  ├─ index-[hash].js              (~200 kB)
  ├─ lesson-git-[hash].js         (~180 kB)
  ├─ lesson-docker-[hash].js      (~240 kB)
  ├─ lesson-java-[hash].js        (~260 kB)
  ├─ lesson-aws-[hash].js         (~220 kB)
  ├─ lesson-sql-[hash].js         (~140 kB)
  ├─ lesson-spring-boot-[hash].js (~130 kB)
  ├─ lesson-herramientas-[hash].js (~150 kB)
  ├─ lesson-metodologias-[hash].js (~120 kB)
  ├─ lesson-kubernetes-[hash].js  (~40 kB)
  └─ lesson-proyecto-[hash].js    (~180 kB)
```

---

## Option 2: Dynamic Imports (ADVANCED)

### Only After Option 1 Is Verified

Use if Option 1 doesn't achieve desired performance.

#### Step 1: Create Lesson Router Wrapper

```javascript
// src/components/LazyLessonRouter.jsx
import { Suspense, lazy } from 'react';

const lessonCache = {};

async function getLessonComponent(category, lessonName) {
  const key = `${category}-${lessonName}`;

  if (lessonCache[key]) {
    return lessonCache[key];
  }

  // Dynamic import - loads only when needed
  const module = await import(
    `../pages/lessons/${category}/${lessonName}.jsx`
  );

  lessonCache[key] = module.default;
  return module.default;
}

export function LazyLessonLoader({ category, lesson }) {
  const [Component, setComponent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getLessonComponent(category, lesson)
      .then(setComponent)
      .catch(setError)
      .finally(() => setLoading(false));
  }, [category, lesson]);

  if (loading) return <div>Cargando lección...</div>;
  if (error) return <div>Error cargando lección</div>;
  if (!Component) return null;

  return <Component />;
}
```

#### Step 2: Update Routes

```javascript
// App.jsx - replace static imports with lazy loading
<Route
  path="/versionamiento/git/basicos/:lesson"
  element={
    <Suspense fallback={<LoadingSpinner />}>
      <LazyLessonLoader category="git" lesson={lesson} />
    </Suspense>
  }
/>
```

---

## Option 3: Refactor Barrels (IF BARRELS MUST REMAIN)

### Limitation: Doesn't Solve Core Performance Issue

But improves maintainability.

```javascript
// OLD: src/pages/lessons/git/index.js
export { LessonGitConfiguracionInicial } from './LessonGitConfiguracionInicial';
// ... 18 more exports

// NEW: src/pages/lessons/git/index.js (Limited)
// Only export related basics
export { LessonGitConfiguracionInicial } from './LessonGitConfiguracionInicial';
export { LessonGitCrearClonarRepos } from './LessonGitCrearClonarRepos';
export { LessonGitCommits } from './LessonGitCommits';

// Separate: src/pages/lessons/git/avanzado/index.js
export { LessonGitPushPullFetch } from '../LessonGitPushPullFetch';
export { LessonGitPullRequests } from '../LessonGitPullRequests';
// ... only related components

// App.jsx then imports:
import {
  LessonGitConfiguracionInicial,
  LessonGitCrearClonarRepos,
  LessonGitCommits,
} from './pages/lessons/git';
import {
  LessonGitPushPullFetch,
  LessonGitPullRequests,
} from './pages/lessons/git/avanzado';
```

**Result:** Barrels still prevent tree-shaking, but reduce single-barrel scope

---

## Testing & Verification

### Before Implementation

```bash
# 1. Record current metrics
npm run build
# Note: 2,838.56 kB final size

# 2. Test a page load
# Open DevTools → Network tab
# Visit /backend/java/basico/tipos-datos
# Observe: All 2.8 MB downloads
```

### After Option 1 Implementation

```bash
# 1. Build with new config
npm run build
# Expected: Multiple chunks totaling ~1.2 MB

# 2. Test page load behavior
# Open DevTools → Network tab
# Visit /backend/java/basico/tipos-datos
# Observe:
#   - index-[hash].js (~200 kB) loads immediately
#   - lesson-java-[hash].js (~260 kB) loads when needed
#   - Total: ~460 kB vs 2.8 MB

# 3. Check Network waterfall
# Visit different categories
# Chunks should load on demand, not all at once
```

### Performance Benchmarking

```javascript
// Add to App.jsx for measurement
useEffect(() => {
  const perfData = performance.getEntriesByType('navigation')[0];
  console.log('Page Load Time:', perfData.loadEventEnd - perfData.fetchStart);

  performance.getEntriesByType('resource').forEach(entry => {
    if (entry.name.includes('.js')) {
      console.log(`${entry.name}: ${entry.duration.toFixed(0)}ms`);
    }
  });
}, []);
```

---

## Rollback Plan

If issues occur:

```bash
# 1. Revert vite.config.js
git checkout vite.config.js

# 2. Clear cache
rm -rf dist/ node_modules/.vite

# 3. Rebuild
npm run build

# 4. Test
npm run preview
```

---

## Success Criteria

After implementing Option 1:

- [ ] Build size reduced by 50%+ (2.8 MB → ~1.2-1.4 MB)
- [ ] No Vite warnings about chunk sizes
- [ ] Chunks load on-demand per category
- [ ] No increase in initial bundle size
- [ ] No circular dependency errors
- [ ] Routes still work correctly
- [ ] No console errors
- [ ] Page load time < 2 seconds (typical connection)

---

## FAQ

**Q: Will this break existing routes?**
A: No. Vite's bundling is transparent to route handlers.

**Q: Do I need to update import statements?**
A: No. App.jsx imports stay exactly the same.

**Q: What if users switch between lessons quickly?**
A: Chunks are cached by browser. Second lesson in same category loads instantly.

**Q: Can users access lessons offline?**
A: Only chunks they've already visited. First visit to category requires download.

**Q: Does this work with lazy() from React?**
A: Yes, but React.lazy() is less efficient than Vite's automatic chunking.
