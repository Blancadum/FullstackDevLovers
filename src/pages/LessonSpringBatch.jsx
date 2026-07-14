import { LessonTemplate, CodeBlock, InfoBox } from '../components';
import { LessonNavigation } from '../components/LessonNavigation';
import { useBreadcrumb } from '../hooks/useBreadcrumb';
import { useLessonNavigation } from '../hooks/useLessonNavigation';

export function LessonSpringBatch() {
  const breadcrumbs = useBreadcrumb();
  const nav = useLessonNavigation();

  const concepts = [
    { icon: '📦', title: 'Job', definition: 'Unidad de trabajo que se ejecuta - contiene uno o más steps', example: 'Importar millones de registros' },
    { icon: '🔄', title: 'Step', definition: 'Unidad de ejecución dentro de un job - READ, PROCESS, WRITE', example: 'Leer datos → Transformar → Guardar' },
    { icon: '📖', title: 'ItemReader', definition: 'Lee datos en chunks desde fuente', example: 'CSV, DB, XML, JSON' },
    { icon: '⚙️', title: 'ItemProcessor', definition: 'Procesa/transforma cada item', example: 'Validar, convertir formato, enriquecer datos' },
    { icon: '💾', title: 'ItemWriter', definition: 'Escribe items procesados a destino', example: 'BD, archivo, cola mensajes' },
  ];

  const sections = [
    {
      title: '¿Qué es Spring Batch?',
      content: (
        <>
          <p>
            <strong>Spring Batch</strong> es un framework para procesar <strong>grandes volúmenes de datos</strong>
            de manera eficiente, confiable y escalable.
          </p>
          <h4>Casos de uso típicos:</h4>
          <ul>
            <li>Importar/exportar datos (CSV, Excel, JSON)</li>
            <li>Procesamiento nocturno de transacciones</li>
            <li>Migración de datos entre sistemas</li>
            <li>Generación de reportes masivos</li>
            <li>Limpieza y transformación de datos</li>
            <li>Integración con sistemas heredados</li>
          </ul>
          <p>
            <strong>Ventajas:</strong> Procesa millones de registros sin cargar todo en memoria,
            maneja errores automáticamente, recuperable, monitoreable.
          </p>
        </>
      )
    },
    {
      title: 'Arquitectura de Spring Batch',
      content: (
        <>
          <p>Spring Batch sigue el patrón <strong>Chunk-Oriented Processing</strong>:</p>
          <CodeBlock
            code={`┌─────────────────────────────────────────────┐
│           SPRING BATCH JOB                  │
├─────────────────────────────────────────────┤
│                                             │
│  ┌───────────────────────────────────────┐ │
│  │           STEP 1                      │ │
│  │  ┌─────────────────────────────────┐  │ │
│  │  │  ItemReader (Lee 100 items)     │  │ │
│  │  │  • BD, archivo, API, etc        │  │ │
│  │  └──────────────┬──────────────────┘  │ │
│  │                 │                     │ │
│  │  ┌──────────────▼──────────────────┐  │ │
│  │  │  ItemProcessor (Procesa 100)    │  │ │
│  │  │  • Transformar, validar, etc    │  │ │
│  │  └──────────────┬──────────────────┘  │ │
│  │                 │                     │ │
│  │  ┌──────────────▼──────────────────┐  │ │
│  │  │  ItemWriter (Escribe 100)       │  │ │
│  │  │  • BD, archivo, cola, etc       │  │ │
│  │  └─────────────────────────────────┘  │ │
│  │                                       │ │
│  │  [Repite hasta fin de datos]         │ │
│  └───────────────────────────────────────┘ │
│                                             │
│  ┌───────────────────────────────────────┐ │
│  │           STEP 2, 3, 4...            │ │
│  └───────────────────────────────────────┘ │
│                                             │
└─────────────────────────────────────────────┘`}
          />
          <h4>Key Concepts:</h4>
          <ul>
            <li><strong>Chunk:</strong> Procesa N items a la vez (ej: 100)</li>
            <li><strong>Transaction:</strong> Cada chunk es una transacción</li>
            <li><strong>Restart:</strong> Si falla, reinicia desde checkpoint</li>
            <li><strong>Monitoring:</strong> Registra ejecución en BD</li>
          </ul>
        </>
      )
    },
    {
      title: 'Configurar un Job Básico',
      content: (
        <>
          <p><strong>Paso 1:</strong> Agregar dependencia Maven:</p>
          <CodeBlock
            code={`<dependency>
  <groupId>org.springframework.boot</groupId>
  <artifactId>spring-boot-starter-batch</artifactId>
</dependency>

<!-- Para persistencia de Job metadata -->
<dependency>
  <groupId>org.springframework.boot</groupId>
  <artifactId>spring-boot-starter-data-jpa</artifactId>
</dependency>`}
          />
          <p><strong>Paso 2:</strong> Crear configuración del Job:</p>
          <CodeBlock
            code={`@Configuration
@EnableBatchProcessing
public class BatchConfiguration {

  @Bean
  public Job importarUsuariosJob(JobBuilder jobBuilder,
                                  Step leerProcesarGuardarStep) {
    return jobBuilder
      .name("importarUsuariosJob")
      .start(leerProcesarGuardarStep)
      .build();
  }

  @Bean
  public Step leerProcesarGuardarStep(StepBuilder stepBuilder,
                                      ItemReader<Usuario> reader,
                                      ItemProcessor<Usuario, Usuario> processor,
                                      ItemWriter<Usuario> writer) {
    return stepBuilder
      .name("leerProcesarGuardarStep")
      .<Usuario, Usuario>chunk(100)  // Procesa 100 items/transacción
      .reader(reader)
      .processor(processor)
      .writer(writer)
      .build();
  }
}`}
          />
        </>
      )
    },
    {
      title: 'ItemReader - Leer Datos',
      content: (
        <>
          <p>El <strong>ItemReader</strong> lee datos en chunks de la fuente:</p>
          <CodeBlock
            code={`// 1️⃣ LEER DE CSV
@Bean
public FlatFileItemReader<Usuario> csvReader() {
  return new FlatFileItemReaderBuilder<Usuario>()
    .name("usuarioReader")
    .resource(new ClassPathResource("usuarios.csv"))
    .delimited()
    .delimiter(",")
    .names("id", "nombre", "email", "activo")
    .fieldSetMapper(fieldSet -> {
      Usuario usuario = new Usuario();
      usuario.setId(fieldSet.readLong("id"));
      usuario.setNombre(fieldSet.readString("nombre"));
      usuario.setEmail(fieldSet.readString("email"));
      usuario.setActivo(fieldSet.readBoolean("activo"));
      return usuario;
    })
    .build();
}

// 2️⃣ LEER DE BASE DE DATOS
@Bean
public JdbcCursorItemReader<Usuario> dbReader(DataSource dataSource) {
  return new JdbcCursorItemReaderBuilder<Usuario>()
    .name("usuarioDbReader")
    .dataSource(dataSource)
    .sql("SELECT * FROM usuarios WHERE activo = true")
    .rowMapper((rs, rowNum) -> {
      Usuario u = new Usuario();
      u.setId(rs.getLong("id"));
      u.setNombre(rs.getString("nombre"));
      return u;
    })
    .build();
}

// 3️⃣ LEER DE API EXTERNA
@Bean
public JsonFileItemReader<Usuario> apiReader() {
  return new JsonFileItemReaderBuilder<Usuario>()
    .jsonObjectReader(new JacksonJsonObjectReader<>(Usuario.class))
    .resource(new UrlResource("https://api.example.com/usuarios"))
    .name("usuarioApiReader")
    .build();
}`}
          />
        </>
      )
    },
    {
      title: 'ItemProcessor - Procesar Items',
      content: (
        <>
          <p>El <strong>ItemProcessor</strong> transforma cada item:</p>
          <CodeBlock
            code={`@Component
public class UsuarioProcessor implements ItemProcessor<Usuario, Usuario> {

  @Autowired
  private UsuarioValidator validator;

  @Autowired
  private UsuarioEnricher enricher;

  @Override
  public Usuario process(Usuario usuario) throws Exception {
    // 1. VALIDAR
    if (!validator.isValid(usuario)) {
      throw new BusinessException("Usuario inválido: " + usuario.getId());
    }

    // 2. TRANSFORMAR
    usuario.setNombre(usuario.getNombre().toUpperCase());
    usuario.setEmail(usuario.getEmail().toLowerCase());

    // 3. ENRIQUECER CON DATOS EXTERNOS
    usuario.setDireccion(enricher.obtenerDireccion(usuario.getId()));
    usuario.setTelefono(enricher.obtenerTelefono(usuario.getId()));

    // 4. RETORNAR - Si retorna NULL, el item NO se escribe
    return usuario;
  }

  // Saltar items sin procesar
  public Usuario processConSkip(Usuario usuario) throws Exception {
    try {
      return process(usuario);
    } catch (Exception e) {
      log.warn("Saltando usuario: " + usuario.getId(), e);
      return null;  // NO se escribe
    }
  }
}`}
          />
          <InfoBox type="tip">
            Si el processor retorna <strong>null</strong>, el item NO se escribe. Útil para filtrar items.
          </InfoBox>
        </>
      )
    },
    {
      title: 'ItemWriter - Guardar Datos',
      content: (
        <>
          <p>El <strong>ItemWriter</strong> guarda items procesados:</p>
          <CodeBlock
            code={`// 1️⃣ ESCRIBIR A BASE DE DATOS (JPA)
@Bean
public JpaItemWriter<Usuario> dbWriter(EntityManager em) {
  JpaItemWriter<Usuario> writer = new JpaItemWriter<>();
  writer.setEntityManagerFactory(em.getEntityManagerFactory());
  return writer;
}

// 2️⃣ ESCRIBIR A ARCHIVO CSV
@Bean
public FlatFileItemWriter<Usuario> csvWriter() {
  return new FlatFileItemWriterBuilder<Usuario>()
    .name("usuarioWriter")
    .resource(new FileSystemResource("output/usuarios.csv"))
    .delimited()
    .delimiter(",")
    .names("id", "nombre", "email", "activo")
    .build();
}

// 3️⃣ ESCRIBIR A COLA (Kafka, RabbitMQ)
@Bean
public ItemWriter<Usuario> kafkaWriter(KafkaTemplate<String, Usuario> template) {
  return items -> {
    for (Usuario usuario : items) {
      template.send("usuarios-procesados", usuario);
    }
  };
}

// 4️⃣ CUSTOM WRITER
@Component
public class CustomUsuarioWriter implements ItemWriter<Usuario> {
  @Autowired
  private UsuarioRepository repo;

  @Override
  public void write(List<? extends Usuario> items) throws Exception {
    // Batch insert optimizado
    repo.saveAll(items);
    log.info("Guardados {} usuarios", items.size());
  }
}`}
          />
        </>
      )
    },
    {
      title: 'Manejo de Errores y Skippers',
      content: (
        <>
          <p>Spring Batch puede saltar items problemáticos:</p>
          <CodeBlock
            code={`@Bean
public Step leerProcesarGuardarStep(StepBuilder stepBuilder,
                                    ItemReader<Usuario> reader,
                                    ItemProcessor<Usuario, Usuario> processor,
                                    ItemWriter<Usuario> writer) {
  return stepBuilder
    .name("leerProcesarGuardarStep")
    .<Usuario, Usuario>chunk(100)
    .reader(reader)
    .processor(processor)
    .writer(writer)
    // Saltar hasta 10 errores de validación
    .faultTolerant()
    .skip(UsuarioInvalidoException.class)
    .skipLimit(10)
    // Retrying: reintentar hasta 3 veces en caso de excepción temporal
    .retry(TemporalException.class)
    .retryLimit(3)
    // No saltar estos errores
    .noSkip(DataIntegrityViolationException.class)
    .build();
}`}
          />
          <h4>Tipos de Errores:</h4>
          <ul>
            <li><strong>Skip:</strong> Saltar el item y continuar</li>
            <li><strong>Retry:</strong> Reintentar el item</li>
            <li><strong>Listener:</strong> Ejecutar código en cada evento</li>
            <li><strong>Restart:</strong> Reiniciar desde checkpoint</li>
          </ul>
        </>
      )
    },
    {
      title: 'Ejecutar el Job',
      content: (
        <>
          <p>Ejecutar un job desde controlador o programador:</p>
          <CodeBlock
            code={`@RestController
@RequestMapping("/batch")
public class BatchController {

  @Autowired
  private JobLauncher jobLauncher;

  @Autowired
  private Job importarUsuariosJob;

  // 1️⃣ Ejecutar job manualmente
  @PostMapping("/importar-usuarios")
  public ResponseEntity<String> importarUsuarios() throws Exception {
    JobParameters jobParameters = new JobParametersBuilder()
      .addLocalDateTime("fecha", LocalDateTime.now())
      .toJobParameters();

    JobExecution execution = jobLauncher.run(importarUsuariosJob, jobParameters);

    if (execution.getStatus() == BatchStatus.COMPLETED) {
      return ResponseEntity.ok("Job completado exitosamente");
    } else if (execution.getStatus() == BatchStatus.FAILED) {
      return ResponseEntity.status(500).body("Job falló: " + execution.getExitStatus());
    }
    return ResponseEntity.status(202).body("Job en progreso");
  }

  // 2️⃣ Ejecutar job programado (cada noche a las 2 AM)
  @Scheduled(cron = "0 2 * * *")
  public void importarUsuariosNocturno() throws Exception {
    JobParameters params = new JobParametersBuilder()
      .addLocalDateTime("fecha", LocalDateTime.now())
      .toJobParameters();
    jobLauncher.run(importarUsuariosJob, params);
  }
}`}
          />
          <h4>Verificar estado del job:</h4>
          <CodeBlock
            code={`@GetMapping("/job/{jobExecutionId}")
public ResponseEntity<JobExecutionDTO> obtenerEstado(@PathVariable Long jobExecutionId) {
  JobExecution execution = jobRepository.findById(jobExecutionId).orElse(null);

  return ResponseEntity.ok(new JobExecutionDTO(
    execution.getId(),
    execution.getStatus(),
    execution.getStartTime(),
    execution.getEndTime(),
    execution.getExitStatus().getExitCode(),
    execution.getStepExecutions().size()
  ));
}`}
          />
        </>
      )
    }
  ];

  const keyPoints = [
    'Spring Batch procesa volúmenes grandes sin cargar todo en memoria',
    'Arquitectura: Job → Steps → Reader → Processor → Writer',
    'Chunk-oriented: procesa N items por transacción',
    'Maneja errores: Skip, Retry, Restart automático',
    'Monitorea ejecución: registra en BD',
    'Idempotente: se puede ejecutar múltiples veces sin duplicar',
    'Escalable: particioning, remote chunking para procesamiento distribuido',
    'ItemReader: CSV, DB, JSON, XML, APIs externas',
    'ItemProcessor: transforma, valida, enriquece datos',
    'ItemWriter: guarda en BD, archivos, colas, APIs'
  ];

  const summary = `Spring Batch es el estándar para procesar grandes volúmenes de datos en Spring Boot.
Ideal para importaciones nocturnas, migraciones, reportes masivos. Proporciona
recuperación automática, manejo de errores robusto y monitoreo completo.`;

  return (
    <>
      <LessonTemplate
        title="Spring Batch - Procesamiento Masivo"
        breadcrumbs={breadcrumbs}
        concepts={concepts}
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
