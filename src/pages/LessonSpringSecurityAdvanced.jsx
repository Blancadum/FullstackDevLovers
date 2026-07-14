import { LessonTemplate, CodeBlock, InfoBox } from '../components';
import { LessonNavigation } from '../components/LessonNavigation';
import { useBreadcrumb } from '../hooks/useBreadcrumb';
import { useLessonNavigation } from '../hooks/useLessonNavigation';

export function LessonSpringSecurityAdvanced() {
  const breadcrumbs = useBreadcrumb();
  const nav = useLessonNavigation();

  const concepts = [
    { icon: '🔐', title: 'Authentication', definition: 'Verificar QUIÉN eres (login con credenciales)', example: 'Login/Password, OAuth2, SAML' },
    { icon: '🛡️', title: 'Authorization', definition: 'Verificar QUÉ puedes hacer (permisos)', example: 'Role-based (ADMIN), Attribute-based (datos)' },
    { icon: '🔑', title: 'Principal', definition: 'Usuario/entidad autenticada en SecurityContext', example: 'Username, JWT, OAuth token' },
    { icon: '🎫', title: 'Roles vs Authorities', definition: 'Roles son grupos de permisos; Authorities son permisos específicos', example: 'ROLE_ADMIN tiene AUTHORITY_DELETE_USER' },
  ];

  const sections = [
    {
      title: '¿Qué es Spring Security Avanzado?',
      content: (
        <>
          <p>
            Spring Security proporciona autenticación y autorización robustas.
            La versión <strong>avanzada</strong> cubre OAuth2, JWT, LDAP, autorización granular, auditoría.
          </p>
          <h4>Niveles de Seguridad en Spring:</h4>
          <ul>
            <li><strong>Básico:</strong> /login, /logout, in-memory users</li>
            <li><strong>Intermedio:</strong> BD users, roles, @Secured, @PreAuthorize</li>
            <li><strong>Avanzado:</strong> OAuth2, JWT, LDAP, granular permissions, auditoría</li>
            <li><strong>Enterprise:</strong> SAML, SSO, OKTA, Azure AD, MFA</li>
          </ul>
        </>
      )
    },
    {
      title: 'Arquitectura de Spring Security',
      content: (
        <>
          <CodeBlock
            code={`┌─────────────────────────────────────────────────────────┐
│                  HTTP REQUEST                            │
└────────────────────┬────────────────────────────────────┘
                     │
         ┌───────────▼───────────┐
         │  SecurityFilterChain  │ (DelegatingFilterProxy)
         └───────────┬───────────┘
                     │
         ┌───────────▼──────────────────────┐
         │  Authentication Filters          │
         │  • BasicAuthenticationFilter     │
         │  • UsernamePasswordAuthFilter    │
         │  • BearerTokenAuthFilter (JWT)   │
         │  • OAuth2LoginAuthFilter         │
         └───────────┬──────────────────────┘
                     │
         ┌───────────▼──────────────────────┐
         │  AuthenticationManager           │
         │  └─ ProviderManager              │
         │     ├─ DaoAuthenticationProvider │
         │     ├─ LdapAuthenticationProvider│
         │     └─ Custom providers          │
         └───────────┬──────────────────────┘
                     │
         ┌───────────▼──────────────────────┐
         │  UserDetailsService             │
         │  • Database lookup               │
         │  • LDAP lookup                   │
         │  • Cache (Redis)                 │
         └───────────┬──────────────────────┘
                     │
         ┌───────────▼──────────────────────┐
         │  SecurityContext stored          │
         │  └─ Authentication obj           │
         │     ├─ Principal (user)          │
         │     ├─ Credentials (password)    │
         │     └─ Authorities (roles)       │
         └───────────┬──────────────────────┘
                     │
         ┌───────────▼──────────────────────┐
         │  Authorization Filters           │
         │  • FilterSecurityInterceptor     │
         │  • @PreAuthorize evaluation      │
         │  • Method-level checks           │
         └───────────┬──────────────────────┘
                     │
         ┌───────────▼──────────────────────┐
         │  Request reaches Controller      │
         └─────────────────────────────────┘`}
          />
        </>
      )
    },
    {
      title: 'Autorización Granular con @PreAuthorize',
      content: (
        <>
          <p>Spring permite chequeos de autorización a nivel de método:</p>
          <CodeBlock
            code={`@RestController
@RequestMapping("/usuarios")
public class UsuarioController {

  // 1️⃣ BASADO EN ROLES
  @PreAuthorize("hasRole('ADMIN')")
  @DeleteMapping("/{id}")
  public ResponseEntity<Void> eliminarUsuario(@PathVariable Long id) {
    usuarioService.delete(id);
    return ResponseEntity.ok().build();
  }

  // 2️⃣ BASADO EN MÚLTIPLES ROLES (OR)
  @PreAuthorize("hasAnyRole('ADMIN', 'MODERADOR')")
  @PostMapping("/{id}/banear")
  public ResponseEntity<Void> banearUsuario(@PathVariable Long id) {
    usuarioService.ban(id);
    return ResponseEntity.ok().build();
  }

  // 3️⃣ BASADO EN AUTHORITIES (MÁS GRANULAR)
  @PreAuthorize("hasAuthority('WRITE_USERS')")
  @PostMapping
  public ResponseEntity<Usuario> crearUsuario(@RequestBody Usuario usuario) {
    return ResponseEntity.ok(usuarioService.save(usuario));
  }

  // 4️⃣ ACCESO A PARÁMETROS DEL MÉTODO
  @PreAuthorize("#id == authentication.principal.id OR hasRole('ADMIN')")
  @GetMapping("/{id}/perfil")
  public ResponseEntity<Usuario> obtenerPerfil(@PathVariable Long id) {
    return ResponseEntity.ok(usuarioService.findById(id));
  }

  // 5️⃣ EXPRESIONES COMPLEJAS
  @PreAuthorize("hasRole('ADMIN') AND #usuario.activo == true")
  @PutMapping
  public ResponseEntity<Usuario> actualizarUsuario(@RequestBody Usuario usuario) {
    return ResponseEntity.ok(usuarioService.update(usuario));
  }

  // 6️⃣ ACCESO A BEAN
  @PreAuthorize("@permisoService.puedeEditar(#id, authentication.principal)")
  @PutMapping("/{id}")
  public ResponseEntity<Usuario> editarUsuario(
    @PathVariable Long id,
    @RequestBody Usuario usuario) {
    return ResponseEntity.ok(usuarioService.update(usuario));
  }
}`}
          />
          <InfoBox type="info">
            @PreAuthorize evalúa ANTES del método.
            @PostAuthorize evalúa DESPUÉS y puede acceder al resultado.
          </InfoBox>
        </>
      )
    },
    {
      title: 'OAuth2 Resource Server con JWT',
      content: (
        <>
          <p>Configurar servidor que valida JWT tokens:</p>
          <CodeBlock
            code={`@Configuration
@EnableWebSecurity
@EnableGlobalMethodSecurity(prePostEnabled = true)
public class SecurityConfig {

  @Bean
  public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
    http
      .authorizeRequests()
        // Endpoints públicos
        .antMatchers("/login", "/register", "/public/**").permitAll()
        // Require authentication para todo lo demás
        .anyRequest().authenticated()
      .and()
      .oauth2ResourceServer()
        .jwt()
        .jwtAuthenticationConverter(jwtAuthenticationConverter());
    return http.build();
  }

  // Convertir JWT a Authentication
  @Bean
  public JwtAuthenticationConverter jwtAuthenticationConverter() {
    JwtAuthenticationConverter converter = new JwtAuthenticationConverter();

    // Extraer roles del JWT claim "scope"
    JwtGrantedAuthoritiesConverter authoritiesConverter =
      new JwtGrantedAuthoritiesConverter();
    authoritiesConverter.setAuthoritiesClaimName("scope");
    authoritiesConverter.setAuthorityPrefix("SCOPE_");
    converter.setJwtGrantedAuthoritiesConverter(authoritiesConverter);

    return converter;
  }

  // Validar firma del JWT
  @Bean
  public JwtDecoder jwtDecoder() {
    return NimbusJwtDecoder.withPublicKey(publicKey()).build();
  }
}`}
          />
        </>
      )
    },
    {
      title: 'LDAP / Active Directory Integration',
      content: (
        <>
          <p>Integrar con LDAP corporativo (Active Directory):</p>
          <CodeBlock
            code={`@Configuration
@EnableWebSecurity
public class LdapSecurityConfig {

  @Bean
  public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
    http.authorizeRequests()
      .anyRequest().authenticated()
      .and()
      .formLogin();
    return http.build();
  }

  @Bean
  public PasswordEncoder passwordEncoder() {
    return new LdapShaPasswordEncoder();
  }

  @Bean
  public LdapAuthoritiesPopulator ldapAuthoritiesPopulator(
    BaseLdapPathContextSource contextSource) {
    return new LdapAuthoritiesPopulator() {
      @Override
      public Collection<? extends GrantedAuthority> getGroupMembershipRoles(
        String userDn, String username) {
        // Obtener roles del directorio LDAP
        if (username.startsWith("admin_")) {
          return Arrays.asList(
            new SimpleGrantedAuthority("ROLE_ADMIN"),
            new SimpleGrantedAuthority("ROLE_USER")
          );
        }
        return Arrays.asList(new SimpleGrantedAuthority("ROLE_USER"));
      }
    };
  }

  @Bean
  public LdapAuthenticationProvider ldapAuthenticationProvider() {
    LdapAuthenticationProvider provider = new LdapAuthenticationProvider(
      new BindAuthenticator(contextSource()),
      ldapAuthoritiesPopulator(contextSource())
    );
    provider.setUserDetailsContextMapper(new InetOrgPersonContextMapper());
    return provider;
  }

  @Bean
  public BaseLdapPathContextSource contextSource() {
    LdapContextSource source = new LdapContextSource();
    source.setUrl("ldap://ldap.example.com:389");
    source.setBase("dc=example,dc=com");
    source.setUserDn("cn=admin,dc=example,dc=com");
    source.setPassword("password");
    return source;
  }
}`}
          />
        </>
      )
    },
    {
      title: 'Auditoría de Seguridad',
      content: (
        <>
          <p>Registrar todos los eventos de seguridad:</p>
          <CodeBlock
            code={`@Component
public class SecurityAuditListener implements AuthenticationEventPublisher {

  @Autowired
  private AuditRepository auditRepository;

  @Override
  public void publishAuthenticationSuccess(Authentication authentication) {
    log.info("✅ Login exitoso: {}", authentication.getName());
    guardarAudit(
      authentication.getName(),
      "LOGIN_SUCCESS",
      authentication.getAuthorities().toString()
    );
  }

  @Override
  public void publishAuthenticationFailure(
    AuthenticationException exception, Authentication authentication) {
    log.warn("❌ Login fallido: {}", authentication.getName());
    guardarAudit(
      authentication.getName(),
      "LOGIN_FAILED",
      exception.getMessage()
    );
  }

  @EventListener
  public void onAuthorizationFailure(AuthorizationFailureEvent event) {
    log.warn("🚫 Acceso denegado a: {}", event.getAuthentication().getName());
    guardarAudit(
      event.getAuthentication().getName(),
      "AUTHORIZATION_FAILED",
      event.getAccessDeniedException().getMessage()
    );
  }

  private void guardarAudit(String usuario, String evento, String detalles) {
    AuditLog log = new AuditLog();
    log.setUsuario(usuario);
    log.setEvento(evento);
    log.setDetalles(detalles);
    log.setTimestamp(LocalDateTime.now());
    log.setIpAddress(getClientIp());
    auditRepository.save(log);
  }

  private String getClientIp() {
    ServletRequestAttributes attr =
      (ServletRequestAttributes) RequestContextHolder.currentRequestAttributes();
    return attr.getRequest().getRemoteAddr();
  }
}`}
          />
          <h4>Entity para auditoría:</h4>
          <CodeBlock
            code={`@Entity
@Table(name = "audit_logs")
public class AuditLog {
  @Id
  @GeneratedValue
  private Long id;

  private String usuario;
  private String evento;  // LOGIN_SUCCESS, LOGIN_FAILED, AUTHORIZATION_FAILED, etc
  private String detalles;
  private LocalDateTime timestamp;
  private String ipAddress;

  // getters/setters
}`}
          />
        </>
      )
    },
    {
      title: 'Encriptación de Datos Sensibles',
      content: (
        <>
          <p>Encriptar datos sensibles a nivel de BD:</p>
          <CodeBlock
            code={`@Configuration
public class EncryptionConfig {

  @Bean
  public StringEncryptor jasyptStringEncryptor() {
    PooledPBEStringEncryptor encryptor = new PooledPBEStringEncryptor();
    SimpleStringPBEConfig config = new SimpleStringPBEConfig();
    config.setPassword(System.getenv("JASYPT_PASSWORD"));
    config.setAlgorithm("PBEWITHHMACSHA512ANDAES_256");
    config.setKeyObtentionIterations("1000");
    config.setPoolSize("1");
    config.setProviderName("SunJCE");
    config.setSaltGeneratorClassName(
      "org.jasypt.salt.RandomSaltGenerator");
    config.setStringOutputType("base64");
    encryptor.setConfig(config);
    return encryptor;
  }
}

// EN APPLICATION.PROPERTIES:
// jasypt.encryptor.password=${JASYPT_PASSWORD}

// USO EN ENTITY:
@Entity
public class Usuario {
  @Id
  private Long id;

  private String nombre;

  // Encriptar este campo
  @Convert(converter = EncryptedStringConverter.class)
  private String numeroTarjeta;

  @Convert(converter = EncryptedStringConverter.class)
  private String ssn;  // Social Security Number
}`}
          />
          <CodeBlock
            code={`// Custom Converter para JPA
public class EncryptedStringConverter
  implements AttributeConverter<String, String> {

  @Autowired
  private StringEncryptor encryptor;

  @Override
  public String convertToDatabaseColumn(String attribute) {
    // Encriptar antes de guardar en BD
    return encryptor.encrypt(attribute);
  }

  @Override
  public String convertToEntityAttribute(String dbData) {
    // Desencriptar al recuperar de BD
    return encryptor.decrypt(dbData);
  }
}`}
          />
        </>
      )
    },
    {
      title: 'CORS y CSRF Protection',
      content: (
        <>
          <p>Configurar CORS para APIs y proteger contra CSRF:</p>
          <CodeBlock
            code={`@Configuration
@EnableWebSecurity
public class CorsSecurityConfig {

  @Bean
  public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
    http
      // CORS Configuration
      .cors()
        .configurationSource(corsConfigurationSource())
      .and()
      // CSRF Protection
      .csrf()
        .csrfTokenRepository(
          CookieCsrfTokenRepository.withHttpOnlyFalse())
      .and()
      .authorizeRequests()
        .anyRequest().authenticated();
    return http.build();
  }

  @Bean
  public CorsConfigurationSource corsConfigurationSource() {
    CorsConfiguration configuration = new CorsConfiguration();
    configuration.setAllowedOrigins(
      Arrays.asList("https://app.example.com", "https://admin.example.com"));
    configuration.setAllowedMethods(
      Arrays.asList("GET", "POST", "PUT", "DELETE", "OPTIONS"));
    configuration.setAllowedHeaders(
      Arrays.asList("Content-Type", "Authorization"));
    configuration.setAllowCredentials(true);
    configuration.setMaxAge(3600L);

    UrlBasedCorsConfigurationSource source =
      new UrlBasedCorsConfigurationSource();
    source.registerCorsConfiguration("/**", configuration);
    return source;
  }
}`}
          />
        </>
      )
    }
  ];

  const keyPoints = [
    'Authentication: QUIÉN eres (login)',
    'Authorization: QUÉ puedes hacer (permisos)',
    '@PreAuthorize/@PostAuthorize para autorización a nivel método',
    'Roles vs Authorities: roles son grupos de authorities',
    'OAuth2 + JWT: estándar para APIs modernas',
    'LDAP/Active Directory: integración con directorios corporativos',
    'Auditoría: registrar todos los eventos de seguridad',
    'Encriptación: proteger datos sensibles en BD',
    'CORS: control de acceso entre dominios',
    'CSRF: protección contra falsificación de solicitudes'
  ];

  const summary = `Spring Security avanzado proporciona autenticación y autorización empresariales.
Cubre OAuth2, JWT, LDAP, auditoría, encriptación y protección contra ataques.
Essential para aplicaciones production-ready.`;

  return (
    <>
      <LessonTemplate
        title="Spring Security Avanzado - Autenticación y Autorización"
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
