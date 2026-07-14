import { LessonTemplate, CodeBlock, Table, InfoBox } from '../components';
import { LessonNavigation } from '../components/LessonNavigation';
import { useBreadcrumb } from '../hooks/useBreadcrumb';
import { useLessonNavigation } from '../hooks/useLessonNavigation';

export function LessonSpringBootValidation() {
  const breadcrumbs = useBreadcrumb();
  const nav = useLessonNavigation();

  const concepts = [
    {
      icon: '✅',
      title: 'Validación',
      definition: 'Comprobación de que datos sean válidos',
      example: '@NotNull, @Email, @Min(18)'
    },
    {
      icon: '⚠️',
      title: 'Excepciones',
      definition: 'Manejo centralizado de errores y respuestas',
      example: '@ExceptionHandler'
    },
    {
      icon: '📨',
      title: 'ResponseEntity',
      definition: 'Control total sobre respuesta HTTP',
      example: 'return ResponseEntity.badRequest().body(error)'
    }
  ];

  const exercises = [
    {
      title: 'Validar DTO',
      description: 'Valida email, edad mínima y nombre requerido',
      solution: `@Data
public class UsuarioDTO {
  @NotBlank(message = "Nombre es requerido")
  private String nombre;

  @Email(message = "Email inválido")
  private String email;

  @Min(value = 18, message = "Debe ser mayor de 18")
  private Integer edad;
}`
    }
  ];

  const keyPoints = [
    '@NotNull, @NotBlank validan vacío',
    '@Email valida formato email',
    '@Min, @Max rango de valores',
    '@Size longitud de strings/colecciones',
    '@Pattern valida regex',
    '@Valid activa validación',
    '@BindingResult contiene errores',
    '@ExceptionHandler maneja excepciones',
    '@RestControllerAdvice centraliza handlers',
    'FieldError para errores de campo'
  ];

  const sections = [
    {
      title: 'Validación de Datos',
      content: (
        <>
          <CodeBlock
            language="java"
            code={`@Data
public class UsuarioDTO {

  @NotBlank(message = "Nombre es obligatorio")
  @Size(min = 2, max = 100)
  private String nombre;

  @Email(message = "Email inválido")
  private String email;

  @Min(value = 18, message = "Debe ser mayor de 18")
  @Max(value = 120)
  private Integer edad;

  @Pattern(regexp = "^[0-9]{8,12}$", message = "Teléfono inválido")
  private String telefono;
}`}
          />
        </>
      )
    },
    {
      title: '@Valid en Controladores',
      content: (
        <>
          <CodeBlock
            language="java"
            code={`@RestController
@RequestMapping("/api/usuarios")
public class UsuarioController {

  @PostMapping
  public ResponseEntity<?> crear(
    @Valid @RequestBody UsuarioDTO usuario,
    BindingResult result
  ) {
    if (result.hasErrors()) {
      List<String> errores = result.getFieldErrors()
        .stream()
        .map(FieldError::getDefaultMessage)
        .collect(Collectors.toList());
      return ResponseEntity.badRequest().body(errores);
    }

    Usuario guardado = usuarioService.crear(usuario);
    return ResponseEntity.status(HttpStatus.CREATED).body(guardado);
  }
}`}
          />
        </>
      )
    },
    {
      title: 'Manejo Centralizado de Excepciones',
      content: (
        <>
          <CodeBlock
            language="java"
            code={`@RestControllerAdvice  // Válido para todos los controllers
public class ExceptionHandler {

  @ExceptionHandler(UsuarioNoEncontradoException.class)
  public ResponseEntity<?> handleUsuarioNoEncontrado(
    UsuarioNoEncontradoException ex
  ) {
    return ResponseEntity.status(HttpStatus.NOT_FOUND)
      .body(new ErrorResponse("Usuario no encontrado", ex.getMessage()));
  }

  @ExceptionHandler(IllegalArgumentException.class)
  public ResponseEntity<?> handleIllegalArgument(
    IllegalArgumentException ex
  ) {
    return ResponseEntity.badRequest()
      .body(new ErrorResponse("Datos inválidos", ex.getMessage()));
  }

  @ExceptionHandler(Exception.class)
  public ResponseEntity<?> handleGeneral(Exception ex) {
    return ResponseEntity.status(500)
      .body(new ErrorResponse("Error interno", ex.getMessage()));
  }
}`}
          />
        </>
      )
    }
  ];

  const summary = `Validación y manejo de errores:

• @NotNull, @NotBlank validan campos
• @Email, @Pattern, @Size validan formato
• @Min, @Max validan rango
• @Valid activa validación en controller
• BindingResult contiene lista de errores
• @ExceptionHandler maneja excepciones
• @RestControllerAdvice centraliza handlers
• ErrorResponse para respuestas consistentes
• HTTP status apropiados (400, 404, 500)
• Mensajes de error personalizados`;

      return (
    <>
      <LessonTemplate
        breadcrumbs={breadcrumbs}
        concepts={concepts}
        exercises={exercises}
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