import { LessonTemplate, CodeBlock, Table, InfoBox } from '../components';
import { LessonNavigation } from '../components/LessonNavigation';
import { useBreadcrumb } from '../hooks/useBreadcrumb';
import { useLessonNavigation } from '../hooks/useLessonNavigation';

export function LessonJDBC() {
  const breadcrumbs = useBreadcrumb();
  const nav = useLessonNavigation();

  const concepts = [
    'JDBC: API Java para conectar a cualquier BD (MySQL, PostgreSQL, Oracle, etc.)',
    'Driver JDBC: Software que traduce JDBC a SQL específico de cada BD.',
    'DriverManager.getConnection(): Establece conexión a BD.',
    'Connection: Recurso limitado, debe cerrarse (try-with-resources es mejor).',
    'Statement: Ejecuta SQL. ❌ Vulnerable a SQL Injection.',
    'PreparedStatement: SQL precompilado. ✅ Previene SQL Injection + más rápido.',
    'Parámetros (?): Usar setInt(), setString(), setDate(), etc.',
    'ResultSet: Resultado de SELECT. Iterar con while(rs.next()).',
    'Try-with-resources: Cierra automáticamente Connection, Statement, ResultSet.',
    'SQL Injection: Riesgo de seguridad. Siempre usar PreparedStatement.',
    'Excepciones: SQLException es madre de todos los errores BD.',
    'Desconectar: Importante cerrar recursos en finally o try-with-resources.',
  ];

  const exercises = [
    {
      title: 'Conectar a una BD MySQL',
      description: 'Crear conexión a BD, ejecutar SELECT simple y mostrar resultados. Manejar excepciones.',
      difficulty: 'Intermedio',
      hint: 'Pasos: agregar driver MySQL, crear Connection, ejecutar query, procesar ResultSet, cerrar recursos.',
      solution: `// PASO 0: Agregar dependencia en pom.xml
<dependency>
    <groupId>mysql</groupId>
    <artifactId>mysql-connector-java</artifactId>
    <version>8.0.33</version>
</dependency>

// PASO 1: Crear clase de conexión
import java.sql.*;

public class ConexionBD {
    private static final String URL = "jdbc:mysql://localhost:3306/mibasedatos";
    private static final String USER = "root";
    private static final String PASSWORD = "password123";
    private static final String DRIVER = "com.mysql.cj.jdbc.Driver";

    public static void main(String[] args) {
        Connection conn = null;
        Statement stmt = null;
        ResultSet rs = null;

        try {
            // Paso 1: Cargar driver
            Class.forName(DRIVER);
            System.out.println("✓ Driver cargado");

            // Paso 2: Establecer conexión
            conn = DriverManager.getConnection(URL, USER, PASSWORD);
            System.out.println("✓ Conectado a BD");

            // Paso 3: Crear Statement
            stmt = conn.createStatement();

            // Paso 4: Ejecutar query
            String sql = "SELECT id, nombre, email FROM usuarios";
            rs = stmt.executeQuery(sql);
            System.out.println("✓ Query ejecutada");

            // Paso 5: Procesar ResultSet
            System.out.println("\\nUsuarios en BD:");
            System.out.println("ID\\tNombre\\t\\tEmail");
            System.out.println("─────────────────────────────────");
            while (rs.next()) {
                int id = rs.getInt("id");
                String nombre = rs.getString("nombre");
                String email = rs.getString("email");
                System.out.printf("%d\\t%-15s\\t%s\\n", id, nombre, email);
            }

        } catch (ClassNotFoundException e) {
            System.err.println("❌ Driver no encontrado: " + e.getMessage());
        } catch (SQLException e) {
            System.err.println("❌ Error SQL: " + e.getMessage());
        } finally {
            // Paso 6: Cerrar recursos (importante!)
            try {
                if (rs != null) rs.close();
                if (stmt != null) stmt.close();
                if (conn != null) conn.close();
                System.out.println("✓ Recursos cerrados");
            } catch (SQLException e) {
                System.err.println("Error cerrando recursos: " + e.getMessage());
            }
        }
    }
}

// SALIDA:
// ✓ Driver cargado
// ✓ Conectado a BD
// ✓ Query ejecutada
// Usuarios en BD:
// ID  Nombre        Email
// ─────────────────────────────────
// 1   Juan Pérez    juan@example.com
// 2   María García  maria@example.com`,
    },
    {
      title: 'Usar PreparedStatement para prevenir SQL Injection',
      description: 'Buscar usuario por ID usando PreparedStatement. Mostrar diferencia con concatenación.',
      difficulty: 'Avanzado',
      hint: 'Usa setInt() para parámetros. Nunca concatenes valores en SQL.',
      solution: `import java.sql.*;

public class BuscarUsuario {
    private static final String URL = "jdbc:mysql://localhost:3306/mibasedatos";
    private static final String USER = "root";
    private static final String PASSWORD = "password123";

    // ❌ MAL: SQL Injection vulnerable
    public static Usuario buscarUsuarioMal(int id) throws SQLException {
        Connection conn = DriverManager.getConnection(URL, USER, PASSWORD);

        // VULNERABILIDAD: Si id = "1 OR 1=1", devuelve TODOS
        String sql = "SELECT * FROM usuarios WHERE id = " + id;
        Statement stmt = conn.createStatement();
        ResultSet rs = stmt.executeQuery(sql);

        Usuario u = null;
        if (rs.next()) {
            u = new Usuario(rs.getInt("id"), rs.getString("nombre"));
        }
        rs.close();
        stmt.close();
        conn.close();
        return u;
    }

    // ✅ BIEN: PreparedStatement previene SQL Injection
    public static Usuario buscarUsuario(int id) throws SQLException {
        Connection conn = DriverManager.getConnection(URL, USER, PASSWORD);

        String sql = "SELECT id, nombre, email FROM usuarios WHERE id = ?";
        PreparedStatement ps = conn.prepareStatement(sql);

        // Establecer parámetro (? = placeholder)
        ps.setInt(1, id);  // 1 = primer parámetro

        ResultSet rs = ps.executeQuery();

        Usuario usuario = null;
        if (rs.next()) {
            usuario = new Usuario(
                rs.getInt("id"),
                rs.getString("nombre"),
                rs.getString("email")
            );
        }

        rs.close();
        ps.close();
        conn.close();

        return usuario;
    }

    // ✅ MEJOR: Try-with-resources (Java 7+)
    // Cierra automáticamente recursos
    public static Usuario buscarUsuarioMejor(int id) throws SQLException {
        String sql = "SELECT id, nombre, email FROM usuarios WHERE id = ?";

        try (Connection conn = DriverManager.getConnection(URL, USER, PASSWORD);
             PreparedStatement ps = conn.prepareStatement(sql)) {

            ps.setInt(1, id);
            ResultSet rs = ps.executeQuery();

            if (rs.next()) {
                return new Usuario(
                    rs.getInt("id"),
                    rs.getString("nombre"),
                    rs.getString("email")
                );
            }
        }
        // Automáticamente cierra: rs, ps, conn
        return null;
    }

    // Uso
    public static void main(String[] args) {
        try {
            // SQL Injection attempt (id = "1 OR 1=1")
            Usuario u = buscarUsuario(1);
            if (u != null) {
                System.out.println("Usuario: " + u.getNombre());
            } else {
                System.out.println("Usuario no encontrado");
            }
        } catch (SQLException e) {
            System.err.println("Error: " + e.getMessage());
        }
    }
}

class Usuario {
    private int id;
    private String nombre;
    private String email;

    public Usuario(int id, String nombre, String email) {
        this.id = id;
        this.nombre = nombre;
        this.email = email;
    }

    public String getNombre() { return nombre; }
}`,
    },
  ];

  const sections = [
    {
      title: '¿Qué es JDBC?',
      level: 2,
      content: [
        '<strong>JDBC (Java Database Connectivity)</strong> es una API estándar de Java para conectar y ejecutar comandos SQL en cualquier base de datos. JDBC actúa como puente entre tu código Java y la BD, independientemente de si usas MySQL, PostgreSQL, Oracle o SQL Server.',
        <InfoBox key="info1" type="info">
          <strong>JDBC = puente entre Java y BD</strong>
          <br />
          Java ←→ JDBC ←→ Driver ←→ MySQL/PostgreSQL/Oracle
        </InfoBox>,
      ],
    },
    {
      title: 'Componentes de JDBC',
      level: 2,
      content: [
        <CodeBlock
          key="code1"
          code={`/*
 * ARQUITECTURA JDBC
 *
 * Java App
 *   ↓
 * JDBC API (interfaces estándar)
 *   ↓
 * JDBC Driver (implementación específica)
 *   ↓
 * Base de Datos
 *
 * FLUJO:
 * 1. Cargar Driver (Class.forName)
 * 2. Crear Connection (DriverManager.getConnection)
 * 3. Crear Statement (conn.createStatement o prepareStatement)
 * 4. Ejecutar SQL (executeQuery, executeUpdate, execute)
 * 5. Procesar resultados (ResultSet)
 * 6. Cerrar recursos (close o try-with-resources)
 */

// ===== 1. CARGAR DRIVER =====

// MySQL
Class.forName("com.mysql.cj.jdbc.Driver");

// PostgreSQL
Class.forName("org.postgresql.Driver");

// SQL Server
Class.forName("com.microsoft.sqlserver.jdbc.SQLServerDriver");

// Oracle
Class.forName("oracle.jdbc.driver.OracleDriver");

// ===== 2. CREAR CONEXIÓN =====

String url = "jdbc:mysql://localhost:3306/mibd?useSSL=false&serverTimezone=UTC";
String usuario = "root";
String password = "password123";

Connection conn = DriverManager.getConnection(url, usuario, password);

// ===== 3 & 4. CREAR STATEMENT Y EJECUTAR =====

// Tipo 1: Statement (vulnerable a SQL Injection)
Statement stmt = conn.createStatement();
String sql = "SELECT * FROM usuarios";
ResultSet rs = stmt.executeQuery(sql);

// Tipo 2: PreparedStatement (recomendado)
String sql = "SELECT * FROM usuarios WHERE id = ?";
PreparedStatement ps = conn.prepareStatement(sql);
ps.setInt(1, 1);  // Parámetro 1
ResultSet rs = ps.executeQuery();

// Tipo 3: CallableStatement (para stored procedures)
String sql = "{call obtenerUsuarios(?)}";
CallableStatement cs = conn.prepareCall(sql);
cs.setInt(1, userId);
ResultSet rs = cs.executeQuery();

// ===== 5. PROCESAR RESULTSET =====

while (rs.next()) {
    int id = rs.getInt("id");           // Columna por nombre
    String nombre = rs.getString("nombre");
    double salary = rs.getDouble("salary");
    Date fecha = rs.getDate("fecha_registro");
    boolean activo = rs.getBoolean("activo");
    // ... más columnas
}

// ===== 6. CERRAR RECURSOS =====

// Forma antigua (manual):
try {
    // código
} finally {
    if (rs != null) rs.close();
    if (ps != null) ps.close();
    if (conn != null) conn.close();
}

// Forma moderna (try-with-resources, Java 7+):
try (Connection conn = DriverManager.getConnection(url, user, pass);
     PreparedStatement ps = conn.prepareStatement(sql)) {
    // código
    // Se cierran automáticamente
} catch (SQLException e) {
    // manejo de error
}`}
        />,
      ],
    },
    {
      title: 'SQL Injection y Seguridad',
      level: 2,
      content: [
        <InfoBox key="info2" type="danger">
          <strong>⚠️ SQL Injection es crítico:</strong> PreparedStatement es defensa #1. Siempre usarlo, sin excepciones.
        </InfoBox>,
      ],
    },
  ];

  const summary = 'JDBC es la API estándar de Java para conectar con bases de datos. Siempre usa PreparedStatement para prevenir SQL Injection y try-with-resources para cerrar conexiones automáticamente.';

      return (
    <>
      <LessonTemplate
        breadcrumbs={breadcrumbs}
        concepts={concepts}
        exercises={exercises}
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
