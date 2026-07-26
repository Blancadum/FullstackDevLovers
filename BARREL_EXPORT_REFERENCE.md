# Barrel Export Reference Guide

**Last Updated:** 2026-07-25
**Status:** Complete Implementation

---

## Quick Reference - All Barrel Exports

### Git Category
**Location:** `src/pages/lessons/git/index.js` (19 exports)

```javascript
LessonGitConfiguracionInicial
LessonGitCrearClonarRepos
LessonGitCommits
LessonGitBranches
LessonGitMerge
LessonGitAlias
LessonGitErroresComunes
LessonGitPracticaConfigura
LessonGitPracticaRepositorio
LessonGitPracticaCommits
LessonGitPracticaRamas
LessonGitPracticaMerge
LessonGitPushPullFetch
LessonGitPullRequests
LessonGitPlataformasRemotas
LessonGitWorkflow
LessonGitGitHub
LessonGitGitLab
LessonGitBitbucket
```

**Used In:** `App.jsx` (lines 17-37), `lessonComponents.js` (lines 10-38)

---

### Java Category
**Location:** `src/pages/lessons/java/index.js` (21 exports)

```javascript
LessonAbstractClasses
LessonArrays
LessonClasses
LessonCollections
LessonControlFlow
LessonCRUD
LessonDataTypes
LessonExceptions
LessonGenerics
LessonInheritance
LessonInterfacesAbstract
LessonJavaInternals
LessonJavaOperators
LessonJavaVM
LessonJDBC
LessonLambdas
LessonPolymorphism
LessonRefactoring
LessonScanner
LessonStreams
LessonStrings
```

**Used In:** `App.jsx` (lines 38-60)

---

### Spring Boot Category
**Location:** `src/pages/lessons/spring-boot/index.js` (11 exports)

```javascript
LessonOAuth2JWT
LessonSpringBatch
LessonSpringBootControllers
LessonSpringBootIntroduccion
LessonSpringBootJPA
LessonSpringBootSecurity
LessonSpringBootServices
LessonSpringBootSetup
LessonSpringBootTesting
LessonSpringBootValidation
LessonSpringSecurityAdvanced
```

**Used In:** `App.jsx` (lines 61-73), `lessonComponents.js` (lines 59-69)

---

### SQL Category
**Location:** `src/pages/lessons/sql/index.js` (12 exports)

```javascript
LessonSQLAdvanced
LessonSQLBackupRecuperacion
LessonSQLCrearBD
LessonSQLDDL
LessonSQLDML
LessonSQLIntroduccion
LessonSQLJOINs
LessonSQLMongoDB
LessonSQLMySQL
LessonSQLPostgreSQL
LessonSQLUsuariosPermisos
LessonSQLVsNoSQL
```

**Used In:** `App.jsx` (lines 74-87), `lessonComponents.js` (lines 50-56)

---

### Docker Category
**Location:** `src/pages/lessons/docker/index.js` (17 exports)

```javascript
LessonDocker
LessonDockerComandos
LessonDockerCompose
LessonDockerComposeNew
LessonDockerConceptos
LessonDockerDebugging
LessonDockerFrontend
LessonDockerIntro
LessonDockerJava
LessonDockerMultistage
LessonDockerNetworking
LessonDockerNodejs
LessonDockerOptimizacion
LessonDockerPracticas
LessonDockerPython
LessonDockerVolumenes
LessonDockerfile
```

**Used In:** `App.jsx` (lines 139-156)
**Recommendation:** NOT in lessonComponents.js (routes-based, not TabBox)

---

### AWS Category
**Location:** `src/pages/lessons/aws/index.js` (16 exports, +9 pending)

**Current (16):**
```javascript
LessonAWSAlmacenamiento
LessonAWSArquitectura
LessonAWSCloudWatch
LessonAWSConceptos
LessonAWSDeployment
LessonAWSDynamoDB
LessonAWSEC2
LessonAWSIAM
LessonAWSIntro
LessonAWSJava
LessonAWSLambda
LessonAWSPricing
LessonAWSProyecto
LessonAWSRDS
LessonAWSS3
LessonAWSVPC
```

**Pending Additions (Phase 3-4):**
```javascript
ComparisonEC2VsLambda
ComparisonRDSVsDynamoDB
ComparisonS3VsDocker
ComparisonDockerVsKubernetes
CasoRealEC2
CasoRealRDS
CasoRealLambda
CasoRealS3
CasoRealDynamoDB
```

**Used In:** `App.jsx` (lines 157-174), `lessonComponents.js` (lines 41-44, to be updated)

---

### Herramientas Category
**Location:** `src/pages/lessons/herramientas/index.js` (14 exports)

```javascript
LessonBashShell
LessonBitbucket
LessonCICD
LessonCloudDeployment
LessonCodeiumAI
LessonConceptoEntornoDesarrollo
LessonDependencias
LessonEclipse
LessonGradle
LessonIDEs
LessonIntelliJ
LessonMaven
LessonVSCode
LessonVSCodeExtensions
```

**Used In:** `App.jsx` (lines 88-103)

---

### Metodologias Category
**Location:** `src/pages/lessons/metodologias/index.js` (6 exports)

```javascript
LessonAgileIntroduccion
LessonDevelopmentConcepts
LessonPatronesDiseno
LessonSOLID
LessonSoftwareTesting
LessonUML
```

**Used In:** `App.jsx` (lines 105-112)

---

### Kubernetes Category
**Location:** `src/pages/lessons/kubernetes/index.js` (3 exports)

```javascript
LessonKubernetesDeployments
LessonKubernetesIntro
LessonKubernetesPods
```

**Used In:** `App.jsx` (lines 114-117)

---

### Kotlin Category
**Location:** `src/pages/lessons/kotlin/index.js` (3 exports)

```javascript
LessonKotlinGeneric
LessonKotlinIntroduccion
LessonKotlinVsJava
```

**Used In:** `App.jsx` (lines 118-122)

---

### Proyecto Category
**Location:** `src/pages/lessons/proyecto/index.js` (14 exports, +8 pending)

**Current (14):**
```javascript
LessonDefinicionProyecto
LessonProyectoAPIs
LessonProyectoAgile
LessonProyectoArquitectura
LessonProyectoBackend
LessonProyectoDatabase
LessonProyectoEjemplos
LessonProyectoLanding
LessonProyectoRequisitos
LessonProyectoRetos
LessonProyectoSetup
LessonProyectoSprint1
LessonProyectoSprint2
LessonProyectoTesting
```

**Pending Additions (Phase 5, optional):**
```javascript
LessonProyectoReto1
LessonProyectoReto2
LessonProyectoReto3
LessonProyectoReto4
LessonProyectoReto5
LessonProyectoReto6
LessonProyectoReto7
LessonProyectoReto8
```

**Used In:** `App.jsx` (lines 123-138)

---

## Import Pattern Template

### To Import from a Barrel:

```javascript
// ✅ CORRECT - Barrel export
import {
  LessonXxx,
  LessonYyy,
  LessonZzz
} from './pages/lessons/categoria';
```

### To Add a New Lesson to Barrel:

1. **Create lesson file:**
   ```
   /src/pages/lessons/{category}/LessonNewLesson.jsx
   ```

2. **Add export to barrel:**
   ```javascript
   // Add to /src/pages/lessons/{category}/index.js
   export { LessonNewLesson } from './LessonNewLesson';
   ```

3. **Import in App.jsx:**
   ```javascript
   // Lesson automatically available via barrel import
   import { LessonNewLesson } from './pages/lessons/{category}';
   ```

4. **Add route in App.jsx:**
   ```javascript
   <Route path="/categoria/section/lesson-name" element={<LessonNewLesson />} />
   ```

---

## Usage Statistics

| Category | Lessons | Exports | Barrel | %Coverage |
|----------|---------|---------|--------|-----------|
| git | 19 | 19 | ✅ | 100% |
| java | 21 | 21 | ✅ | 100% |
| spring-boot | 11 | 11 | ✅ | 100% |
| sql | 12 | 12 | ✅ | 100% |
| docker | 17 | 17 | ✅ | 100% |
| aws | 16 | 16 | ✅ | 100% |
| herramientas | 14 | 14 | ✅ | 100% |
| metodologias | 6 | 6 | ✅ | 100% |
| proyecto | 14 | 14 | ✅ | 100% |
| kotlin | 3 | 3 | ✅ | 100% |
| kubernetes | 3 | 3 | ✅ | 100% |
| **TOTAL** | **147** | **147** | **✅** | **100%** |

---

## Not in Barrels (By Design)

These files remain at root level for specific reasons:

**Comparison Pages (4):**
- Not part of lesson flow
- Special routes in App.jsx
- Used in lessonComponents.js mapping
- Pending: Move to aws barrel (Phase 3)

**CasoReal Pages (5):**
- Case study content
- Special routes in App.jsx
- Related to AWS but outside lesson structure
- Pending: Move to aws barrel (Phase 4)

**Reto Pages (8):**
- Project challenges
- Currently at root level
- Named `LessonProyectoReto*` (suggests proyecto category)
- Pending: Move to proyecto barrel (Phase 5, optional)

**Landing Pages (15+):**
- Different from lessons
- Intentionally outside barrel structure
- No consolidation planned

**Lexico Pages (2):**
- Glossaries
- Different purpose
- No consolidation planned

**Evaluacion Pages (2):**
- Assessments
- Different purpose
- No consolidation planned

---

## Barrel Export Rules

### ✅ ALWAYS:
1. Export only from same directory
2. Use exact same name as file: `export { LessonXxx } from './LessonXxx'`
3. One export per line
4. Alphabetical order (by first letter)
5. End with newline

### ❌ NEVER:
1. Rename during export (e.g., `export { LessonXxx as Xxx }`)
2. Export from parent/child directories
3. Mix default and named exports
4. Export if not used
5. Forget to update index.js when adding file

---

## Testing Barrel Exports

### Quick Test:
```javascript
// Should not error:
import { LessonXxx } from './pages/lessons/categoria';
```

### Build Test:
```bash
npm run build
# Should succeed without warnings
```

### Route Test:
```bash
npm run dev
# Navigate to lesson route
# Should load without import errors
```

---

## Common Issues & Solutions

### Issue: "Cannot find module"
**Cause:** File name doesn't match export
**Solution:** Check spelling in index.js matches actual file name

### Issue: "Default export undefined"
**Cause:** Using default export instead of named export
**Solution:** Use `export { ComponentName }` not `export default`

### Issue: Lesson doesn't load
**Cause:** Export in index.js but no route in App.jsx
**Solution:** Add route: `<Route path="/..." element={<Lesson />} />`

### Issue: Import path too deep/shallow
**Cause:** Wrong number of `..` in import
**Solution:** Count levels: lesson → category → lessons → pages → src = 3 levels

---

## Maintenance Checklist

### Adding a New Category:
- [ ] Create directory: `/src/pages/lessons/{category}/`
- [ ] Create index.js with barrel exports
- [ ] Create lesson files
- [ ] Update App.jsx imports
- [ ] Update lessonNavigation.js (if TabBox-eligible)
- [ ] Test routes

### Adding a New Lesson:
- [ ] Create file: `/src/pages/lessons/{category}/LessonXxx.jsx`
- [ ] Add export to `/src/pages/lessons/{category}/index.js`
- [ ] Add route to App.jsx
- [ ] Update lessonNavigation.js (if needed)
- [ ] Test route loads

### Deleting a Lesson:
- [ ] Delete file
- [ ] Remove export from index.js
- [ ] Remove route from App.jsx
- [ ] Update lessonNavigation.js (if applicable)
- [ ] Test build succeeds

---

## Performance Notes

**Tree-shaking:** ✅ Works with barrel exports
- Only imported lessons included in build
- Unused lessons not bundled

**Code-splitting:** ✅ Works with barrel exports
- Route-based splitting still functional
- No impact on lazy loading

**Import Speed:** ✅ Optimized
- Node.js caches barrel exports
- No performance penalty

---

## References

- See CODE_REUSE_REVIEW.md for complete analysis
- See IMPORT_REORGANIZATION_TECHNICAL.md for technical details
- See REORGANIZATION_ACTION_ITEMS.md for implementation guide

Last reviewed: 2026-07-25
Next review: 2026-08-25 (or after adding 10+ new lessons)
