import { LessonTemplate, CodeBlock, Table, InfoBox } from '../components';
import { LessonNavigation } from '../components/LessonNavigation';
import { useBreadcrumb } from '../hooks/useBreadcrumb';
import { useLessonNavigation } from '../hooks/useLessonNavigation';

export function LessonOAuth2JWT() {
  const breadcrumbs = useBreadcrumb();
  const nav = useLessonNavigation();

  const concepts = [
    {
      icon: '🔐',
      title: 'OAuth2',
      definition: 'Protocolo de autorización que permite login con terceros (Google, GitHub)',
      example: 'Login con Google'
    },
    {
      icon: '🔑',
      title: 'JWT',
      definition: 'Token autenticación stateless que viaja en cada request',
      example: 'Bearer eyJhbGciOiJIUzI1NiIs...'
    },
    {
      icon: '🔄',
      title: 'Flujo de Autenticación',
      definition: 'Cómo se autentica un usuario en aplicaciones modernas',
      example: 'Login → Token → Request + Token → Validar'
    }
  ];

  const exercises = [
    {
      title: 'Configurar OAuth2 con Google',
      description: 'Setup de Google OAuth2 en Spring Boot',
      solution: `# 1. Crear aplicación en Google Cloud Console
# https://console.cloud.google.com
# Crear credenciales OAuth2 (Web application)

# 2. Dependencia en pom.xml
<dependency>
  <groupId>org.springframework.boot</groupId>
  <artifactId>spring-boot-starter-oauth2-client</artifactId>
</dependency>

# 3. application.properties
spring.security.oauth2.client.registration.google.client-id=...
spring.security.oauth2.client.registration.google.client-secret=...
spring.security.oauth2.client.registration.google.scope=openid,profile,email`
    }
  ];

  const keyPoints = [
    'OAuth2 es para autorización, no autenticación pura',
    'JWT es stateless (sin sesión en servidor)',
    'Access token es de corta duración',
    'Refresh token es de larga duración',
    'OAuth2 soporta múltiples providers (Google, GitHub, Facebook)',
    'JWT incluye claims (usuario, rol, permisos)',
    'Bearer token se envía en Authorization header',
    'Signing key debe ser segura y privada',
    'Validar JWT en cada request',
    'HTTPS es obligatorio en producción'
  ];

  const sections = [
    {
      title: '¿Qué es OAuth2?',
      content: (
        <p>
          OAuth2 es un protocolo de autorización que permite a usuarios autenticarse usando
          credenciales de terceros (Google, GitHub, Facebook). Es seguro porque el servidor
          nunca ve la contraseña del usuario.
        </p>
      )
    },
    {
      title: 'Flujo OAuth2',
      content: (
        <>
          <CodeBlock
            code={`Flujo OAuth2 (Authorization Code Flow):

1. Usuario hace click en "Login con Google"
   ↓
2. App redirige a Google Authorization Server
   ?client_id=xxx&redirect_uri=http://localhost:8080/callback
   ↓
3. Usuario ingresa credenciales en Google
   ↓
4. Google redirige a callback con authorization_code
   http://localhost:8080/callback?code=abc123
   ↓
5. Backend intercambia code por access_token (secreto)
   POST https://oauth.googleapis.com/token
   code=abc123&client_id=xxx&client_secret=yyy
   ↓
6. Google retorna access_token y refresh_token
   {
     "access_token": "eyJhbGciOiJIUzI1NiIs...",
     "refresh_token": "...",
     "expires_in": 3600
   }
   ↓
7. Backend obtiene info del usuario con access_token
   GET https://www.googleapis.com/oauth2/v2/userinfo
   Authorization: Bearer access_token
   ↓
8. Crear sesión y retornar token a frontend`}
          />
          <InfoBox type="info">
            La contraseña nunca se comparte con tu app, solo con Google.
          </InfoBox>
        </>
      )
    },
    {
      title: 'JWT (JSON Web Token)',
      content: (
        <>
          <CodeBlock
            code={`JWT tiene 3 partes: Header.Payload.Signature

# Ejemplo
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.
eyJzdWIiOiI1IiwiZW1haWwiOiJqdWFuQGV4YW1wbGUuY29tIiwicm9sZXMiOlsidXNlciJdLCJpYXQiOjE2MzQ1Njc4MDAsImV4cCI6MTYzNDU3MTQwMH0.
4C0Vg7K8k7x2z8Y9a0

# Decodificado:
# Header
{
  "alg": "HS256",
  "typ": "JWT"
}

# Payload (claims)
{
  "sub": "5",
  "email": "juan@example.com",
  "roles": ["user"],
  "iat": 1634567800,
  "exp": 1634571400
}

# Signature
HMACSHA256(
  base64UrlEncode(header) + "." +
  base64UrlEncode(payload),
  secret_key
)`}
          />
        </>
      )
    },
    {
      title: 'Autenticación con JWT en Spring Boot',
      content: (
        <>
          <CodeBlock
            code={`// 1. JwtProvider - Crear y validar tokens
@Component
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
}

// 2. Controlador de Login
@RestController
@RequestMapping("/auth")
public class AuthController {

  @Autowired
  private UsuarioService usuarioService;

  @Autowired
  private JwtProvider jwtProvider;

  @PostMapping("/login")
  public ResponseEntity<?> login(@RequestBody LoginDTO login) {
    Usuario usuario = usuarioService.autenticar(login.getEmail(), login.getPassword());
    if (usuario == null) {
      return ResponseEntity.badRequest().body("Credenciales inválidas");
    }

    String token = jwtProvider.generarToken(usuario.getEmail());
    return ResponseEntity.ok(new TokenDTO(token));
  }
}

// 3. JwtFilter - Validar token en cada request
@Component
public class JwtFilter extends OncePerRequestFilter {

  @Autowired
  private JwtProvider jwtProvider;

  @Override
  protected void doFilterInternal(HttpServletRequest request,
                                 HttpServletResponse response,
                                 FilterChain filterChain) throws ServletException, IOException {
    String token = request.getHeader("Authorization");
    if (token != null && token.startsWith("Bearer ")) {
      token = token.substring(7);
      if (jwtProvider.validarToken(token)) {
        String email = jwtProvider.getEmailDelToken(token);
        request.setAttribute("email", email);
      }
    }
    filterChain.doFilter(request, response);
  }
}`}
          />
        </>
      )
    },
    {
      title: 'OAuth2 con Google en Spring Boot',
      content: (
        <>
          <CodeBlock
            code={`# application.properties
spring.security.oauth2.client.registration.google.client-id=xxx.apps.googleusercontent.com
spring.security.oauth2.client.registration.google.client-secret=xxx
spring.security.oauth2.client.registration.google.scope=openid,profile,email
spring.security.oauth2.client.provider.google.issuer-uri=https://accounts.google.com

# SecurityConfig
@Configuration
@EnableWebSecurity
public class SecurityConfig {

  @Bean
  public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
    http
      .authorizeHttpRequests(authz -> authz
        .requestMatchers("/login", "/").permitAll()
        .anyRequest().authenticated()
      )
      .oauth2Login(oauth -> oauth
        .successHandler(new AuthenticationSuccessHandler() {
          @Override
          public void onAuthenticationSuccess(HttpServletRequest request,
                                             HttpServletResponse response,
                                             Authentication authentication) throws IOException {
            // Crear JWT desde OAuth2 token
            String jwt = crearJWT(authentication);
            response.sendRedirect("http://localhost:3000/?token=" + jwt);
          }
        })
      );
    return http.build();
  }

  private String crearJWT(Authentication authentication) {
    OAuth2User oauth2User = (OAuth2User) authentication.getPrincipal();
    String email = oauth2User.getAttribute("email");
    // Generar JWT...
    return jwt;
  }
}`}
          />
        </>
      )
    },
    {
      title: 'Refresh Token',
      content: (
        <>
          <CodeBlock
            code={`// Porque access_token expira, usamos refresh_token

@PostMapping("/refresh")
public ResponseEntity<?> refresh(@RequestBody RefreshDTO dto) {
  if (!jwtProvider.validarRefreshToken(dto.getRefreshToken())) {
    return ResponseEntity.badRequest().body("Refresh token inválido");
  }

  String email = jwtProvider.getEmailDelToken(dto.getRefreshToken());
  String nuevoAccessToken = jwtProvider.generarToken(email);

  return ResponseEntity.ok(new TokenDTO(nuevoAccessToken));
}

// Frontend
const response = await fetch('http://api/refresh', {
  method: 'POST',
  body: JSON.stringify({ refreshToken: localStorage.getItem('refreshToken') })
});
const { accessToken } = await response.json();
localStorage.setItem('accessToken', accessToken);`}
          />
        </>
      )
    },
    {
      title: 'OAuth2 Providers Populares',
      content: (
        <>
          <Table
            headers={['Provider', 'Usado para', 'Setup']}
            rows={[
              ['Google', 'Login personal', 'Google Cloud Console'],
              ['GitHub', 'Developers', 'GitHub Settings → Developer apps'],
              ['Facebook', 'Social login', 'Facebook Developer'],
              ['Okta', 'Enterprise', 'Okta tenant'],
              ['Auth0', 'SaaS', 'Auth0 dashboard'],
            ]}
          />
        </>
      )
    }
  ];

  const summary = `OAuth2 y JWT para autenticación moderna:

• OAuth2: protocolo de autorización con terceros
• JWT: token stateless para autenticación
• Access token: corta duración (1-24h)
• Refresh token: larga duración (días/meses)
• Bearer token: Authorization header
• Header.Payload.Signature estructura JWT
• Claims: datos en el payload
• Validar token en cada request
• Providers: Google, GitHub, Facebook, Okta
• HTTPS obligatorio en producción`;

      return (
    <>
      <LessonTemplate
        breadcrumbs={breadcrumbs}
        concepts={concepts}
        exercises={exercises}
        keyPoints={keyPoints}
        response={response}
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