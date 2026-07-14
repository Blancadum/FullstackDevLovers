import { LessonTemplate, CodeBlock, Table, InfoBox } from '../components';
import { LessonNavigation } from '../components/LessonNavigation';
import { useBreadcrumb } from '../hooks/useBreadcrumb';
import { useLessonNavigation } from '../hooks/useLessonNavigation';

export function LessonSpringBootSecurity() {
  const breadcrumbs = useBreadcrumb();
  const nav = useLessonNavigation();

  const concepts = [
    {
      icon: '🔐',
      title: 'Autenticación',
      definition: 'Verificar identidad del usuario',
      example: 'Login con usuario/contraseña'
    },
    {
      icon: '🛡️',
      title: 'Autorización',
      definition: 'Verificar permisos del usuario',
      example: '@PreAuthorize("hasRole(\'ADMIN\')")'
    },
    {
      icon: '🔑',
      title: 'JWT',
      definition: 'Token para autenticación stateless',
      example: 'Bearer eyJhbGciOiJIUzI1NiIs...'
    }
  ];

  const exercises = [
    {
      title: 'Configurar Spring Security básico',
      description: 'Requiere login en todas las rutas',
      solution: `@Configuration
@EnableWebSecurity
public class SecurityConfig {

  @Bean
  public SecurityFilterChain filterChain(HttpSecurity http)
      throws Exception {
    http.authorizeHttpRequests(
      authz -> authz
        .requestMatchers("/login").permitAll()
        .anyRequest().authenticated()
    )
    .formLogin(form -> form.loginPage("/login"));
    return http.build();
  }
}`
    }
  ];

  const keyPoints = [
    '@EnableWebSecurity activa seguridad',
    'SecurityFilterChain configura reglas',
    'permitAll() permite sin autenticación',
    'authenticated() requiere login',
    '@PreAuthorize() autorización en métodos',
    '@PostAuthorize() después de ejecutar',
    'hasRole(), hasAnyRole() verifican roles',
    'JWT para APIs stateless',
    'PasswordEncoder encripta contraseñas',
    'BCrypt es estándar recomendado'
  ];

  const sections = [
    {
      title: '¿Qué es Spring Security?',
      content: (
        <p>
          Spring Security proporciona autenticación (quién eres) y autorización (qué puedes hacer).
          Es el estándar de seguridad en aplicaciones Spring.
        </p>
      )
    },
    {
      title: 'Configuración Básica',
      content: (
        <>
          <CodeBlock
            language="java"
            code={`@Configuration
@EnableWebSecurity
public class SecurityConfig {

  @Bean
  public SecurityFilterChain filterChain(HttpSecurity http)
      throws Exception {
    http
      .authorizeHttpRequests(authz -> authz
        .requestMatchers("/", "/login", "/registro").permitAll()
        .requestMatchers("/admin/**").hasRole("ADMIN")
        .requestMatchers("/usuario/**").hasRole("USER")
        .anyRequest().authenticated()
      )
      .formLogin(form -> form
        .loginPage("/login")
        .defaultSuccessUrl("/dashboard")
      )
      .logout(logout -> logout
        .logoutUrl("/logout")
        .logoutSuccessUrl("/")
      );
    return http.build();
  }

  @Bean
  public PasswordEncoder passwordEncoder() {
    return new BCryptPasswordEncoder();
  }
}`}
          />
        </>
      )
    },
    {
      title: 'Autenticación y Usuarios',
      content: (
        <>
          <CodeBlock
            language="java"
            code={`@Service
public class UsuarioDetailsService implements UserDetailsService {

  @Autowired
  private UsuarioRepository repository;

  @Override
  public UserDetails loadUserByUsername(String email)
      throws UsernameNotFoundException {
    Usuario usuario = repository.findByEmail(email)
      .orElseThrow(() ->
        new UsernameNotFoundException("Usuario no encontrado: " + email)
      );

    List<GrantedAuthority> authorities = usuario.getRoles()
      .stream()
      .map(rol -> new SimpleGrantedAuthority("ROLE_" + rol.getNombre()))
      .collect(Collectors.toList());

    return new User(usuario.getEmail(), usuario.getPassword(), authorities);
  }
}`}
          />
        </>
      )
    },
    {
      title: 'Autorización con @PreAuthorize',
      content: (
        <>
          <CodeBlock
            language="java"
            code={`@RestController
@RequestMapping("/api/usuarios")
public class UsuarioController {

  @GetMapping("/{id}")
  @PreAuthorize("hasRole('USER')")
  public Usuario obtener(@PathVariable int id) {
    return usuarioService.obtenerPorId(id);
  }

  @PostMapping
  @PreAuthorize("hasRole('ADMIN')")
  public Usuario crear(@RequestBody UsuarioDTO dto) {
    return usuarioService.crear(dto);
  }

  @DeleteMapping("/{id}")
  @PreAuthorize("hasRole('ADMIN') or @usuarioService.esPropio(authentication, #id)")
  public void eliminar(@PathVariable int id) {
    usuarioService.eliminar(id);
  }
}`}
          />
        </>
      )
    },
    {
      title: 'JWT (JSON Web Token)',
      content: (
        <>
          <CodeBlock
            language="java"
            code={`@Component
public class JwtProvider {

  @Value("\${jwt.secret}")
  private String jwtSecret;

  public String generarToken(String email) {
    return Jwts.builder()
      .setSubject(email)
      .setIssuedAt(new Date())
      .setExpiration(new Date(System.currentTimeMillis() + 86400000))  // 24h
      .signWith(SignatureAlgorithm.HS512, jwtSecret)
      .compact();
  }

  public String getEmailDelToken(String token) {
    return Jwts.parser()
      .setSigningKey(jwtSecret)
      .parseClaimsJws(token)
      .getBody()
      .getSubject();
  }

  public boolean validarToken(String token) {
    try {
      Jwts.parser().setSigningKey(jwtSecret).parseClaimsJws(token);
      return true;
    } catch (JwtException | IllegalArgumentException e) {
      return false;
    }
  }
}`}
          />
          <InfoBox type="info">
            JWT es ideal para APIs stateless. El token se envía en cada petición: Authorization: Bearer token
          </InfoBox>
        </>
      )
    },
    {
      title: 'Encriptación de Contraseñas',
      content: (
        <>
          <CodeBlock
            language="java"
            code={`@Service
public class UsuarioService {

  @Autowired
  private PasswordEncoder passwordEncoder;

  public Usuario registrar(UsuarioDTO dto) {
    Usuario usuario = new Usuario();
    usuario.setEmail(dto.getEmail());
    usuario.setPassword(passwordEncoder.encode(dto.getPassword()));
    // BCrypt es seguro y lento (computa ~2^11 vueltas)
    return usuarioRepository.save(usuario);
  }

  public boolean validarPassword(String passwordPlano, String passwordHash) {
    return passwordEncoder.matches(passwordPlano, passwordHash);
  }
}`}
          />
        </>
      )
    },
    {
      title: 'CORS (Cross-Origin)',
      content: (
        <>
          <CodeBlock
            language="java"
            code={`@Configuration
public class CorsConfig {

  @Bean
  public WebMvcConfigurer corsConfigurer() {
    return new WebMvcConfigurer() {
      @Override
      public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/api/**")
          .allowedOrigins("https://example.com")
          .allowedMethods("GET", "POST", "PUT", "DELETE")
          .allowCredentials(true)
          .maxAge(3600);
      }
    };
  }
}`}
          />
        </>
      )
    }
  ];

  const summary = `Spring Security asegura aplicaciones:

• @EnableWebSecurity activa seguridad
• SecurityFilterChain configura reglas
• permitAll() permite sin autenticación
• authenticated() requiere login
• @PreAuthorize() autorización declarativa
• hasRole(), hasAnyRole() verifican roles
• UserDetailsService para usuarios
• PasswordEncoder encripta (BCrypt)
• JWT para APIs stateless
• CORS controla acceso cross-origin`;

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