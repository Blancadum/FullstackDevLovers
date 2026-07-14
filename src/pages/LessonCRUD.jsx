import { LessonTemplate, CodeBlock, Table, InfoBox } from '../components';
import { LessonNavigation } from '../components/LessonNavigation';
import { useBreadcrumb } from '../hooks/useBreadcrumb';
import { useLessonNavigation } from '../hooks/useLessonNavigation';

export function LessonCRUD() {
  const breadcrumbs = useBreadcrumb();
  const nav = useLessonNavigation();

  const concepts = [
    {
      icon: '➕',
      title: 'CREATE',
      definition: 'Insertar nuevo registro en BD. INSERT INTO.',
      example: 'ps.executeUpdate() devuelve número de filas insertadas',
    },
    {
      icon: '👁️',
      title: 'READ',
      definition: 'Leer/consultar datos de BD. SELECT.',
      example: 'ResultSet rs = ps.executeQuery(); while(rs.next()) {}',
    },
    {
      icon: '✏️',
      title: 'UPDATE',
      definition: 'Modificar registro existente. UPDATE SET WHERE.',
      example: 'ps.executeUpdate() devuelve número de filas actualizadas',
    },
    {
      icon: '🗑️',
      title: 'DELETE',
      definition: 'Eliminar registro. DELETE FROM WHERE.',
      example: 'ps.executeUpdate() devuelve número de filas eliminadas',
    },
  ];

  const exercises = [
    {
      title: 'Clase DAO completa con CRUD',
      description: 'Implementar DAO (Data Access Object) con métodos Create, Read, Update, Delete.',
      solution: `// Usuario.java (modelo)
public class Usuario {
    private int id;
    private String nombre;
    private String email;
    private boolean activo;

    public Usuario(int id, String nombre, String email, boolean activo) {
        this.id = id;
        this.nombre = nombre;
        this.email = email;
        this.activo = activo;
    }

    public int getId() { return id; }
    public void setId(int id) { this.id = id; }
    public String getNombre() { return nombre; }
    public void setNombre(String nombre) { this.nombre = nombre; }
    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }
    public boolean isActivo() { return activo; }
    public void setActivo(boolean activo) { this.activo = activo; }

    @Override
    public String toString() {
        return "Usuario{" + "id=" + id + ", nombre='" + nombre +
               "', email='" + email + "', activo=" + activo + '}';
    }
}

// UsuarioDAO.java (Data Access Object)
public class UsuarioDAO {
    private String url = "jdbc:mysql://localhost:3306/mibd";
    private String usuario = "root";
    private String password = "password123";

    // CREATE: Insertar nuevo usuario
    public boolean crear(Usuario u) {
        String sql = "INSERT INTO usuarios (nombre, email, activo) VALUES (?, ?, ?)";
        try (Connection conn = DriverManager.getConnection(url, usuario, password);
             PreparedStatement ps = conn.prepareStatement(sql)) {
            ps.setString(1, u.getNombre());
            ps.setString(2, u.getEmail());
            ps.setBoolean(3, u.isActivo());
            int filasInsertadas = ps.executeUpdate();
            return filasInsertadas > 0;
        } catch (SQLException e) {
            e.printStackTrace();
            return false;
        }
    }

    // READ: Obtener usuario por ID
    public Usuario obtenerPorId(int id) {
        String sql = "SELECT id, nombre, email, activo FROM usuarios WHERE id = ?";
        try (Connection conn = DriverManager.getConnection(url, usuario, password);
             PreparedStatement ps = conn.prepareStatement(sql)) {
            ps.setInt(1, id);
            ResultSet rs = ps.executeQuery();
            if (rs.next()) {
                return new Usuario(rs.getInt("id"), rs.getString("nombre"),
                    rs.getString("email"), rs.getBoolean("activo"));
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return null;
    }

    // UPDATE: Modificar usuario existente
    public boolean actualizar(Usuario u) {
        String sql = "UPDATE usuarios SET nombre = ?, email = ?, activo = ? WHERE id = ?";
        try (Connection conn = DriverManager.getConnection(url, usuario, password);
             PreparedStatement ps = conn.prepareStatement(sql)) {
            ps.setString(1, u.getNombre());
            ps.setString(2, u.getEmail());
            ps.setBoolean(3, u.isActivo());
            ps.setInt(4, u.getId());
            int filasActualizadas = ps.executeUpdate();
            return filasActualizadas > 0;
        } catch (SQLException e) {
            e.printStackTrace();
            return false;
        }
    }

    // DELETE: Eliminar usuario
    public boolean eliminar(int id) {
        String sql = "DELETE FROM usuarios WHERE id = ?";
        try (Connection conn = DriverManager.getConnection(url, usuario, password);
             PreparedStatement ps = conn.prepareStatement(sql)) {
            ps.setInt(1, id);
            int filasEliminadas = ps.executeUpdate();
            return filasEliminadas > 0;
        } catch (SQLException e) {
            e.printStackTrace();
            return false;
        }
    }
}`,
    },
    {
      title: 'Transacciones: Transferencia bancaria segura',
      description: 'Implementar transacción: restar de cuenta A, sumar a cuenta B. Si falla algo, rollback.',
      solution: `public class CuentaBancariaDAO {
    private String url = "jdbc:mysql://localhost:3306/banco";
    private String usuario = "root";
    private String password = "password123";

    public boolean transferir(int cuentaOrigen, int cuentaDestino, double monto) {
        String sqlRestar = "UPDATE cuentas SET saldo = saldo - ? WHERE id = ? AND saldo >= ?";
        String sqlSumar = "UPDATE cuentas SET saldo = saldo + ? WHERE id = ?";

        try (Connection conn = DriverManager.getConnection(url, usuario, password)) {
            conn.setAutoCommit(false);
            System.out.println("Iniciando transacción...");

            // Restar de cuenta origen
            try (PreparedStatement psRestar = conn.prepareStatement(sqlRestar)) {
                psRestar.setDouble(1, monto);
                psRestar.setInt(2, cuentaOrigen);
                psRestar.setDouble(3, monto);
                if (psRestar.executeUpdate() == 0) {
                    throw new Exception("Fondos insuficientes");
                }
            }

            // Sumar a cuenta destino
            try (PreparedStatement psSumar = conn.prepareStatement(sqlSumar)) {
                psSumar.setDouble(1, monto);
                psSumar.setInt(2, cuentaDestino);
                if (psSumar.executeUpdate() == 0) {
                    throw new Exception("Cuenta destino no existe");
                }
            }

            conn.commit();
            System.out.println("✓ Transferencia exitosa");
            return true;

        } catch (Exception e) {
            System.err.println("❌ Error: " + e.getMessage());
            return false;
        }
    }
}`,
    },
  ];

  const keyPoints = [
    'CRUD: Create (INSERT), Read (SELECT), Update (UPDATE), Delete (DELETE).',
    'DAO: Data Access Object. Una clase = una tabla. Encapsula SQL.',
    'CRUD operations: Retornan boolean para éxito/fracaso.',
    'Transacción: Grupo de operaciones que se ejecutan juntas (todo o nada).',
    'setAutoCommit(false): Desactivar autocommit para manejar transacciones.',
    'commit(): Confirmar transacción. Cambios permanentes.',
    'rollback(): Deshacer transacción. Vuelve a estado anterior.',
    'Atomicidad: Si una operación falla, toda la transacción se revierte.',
    'Try-finally: Para rollback en caso de error durante transacción.',
    'Transacciones críticas: Transferencias, pagos, operaciones banco.',
    'Isolation levels: READ_UNCOMMITTED, READ_COMMITTED, REPEATABLE_READ, SERIALIZABLE.',
    'Deadlock: Dos transacciones esperan una por la otra. Manejar con reintentos.',
  ];

  const sections = [
    {
      title: '¿Qué es CRUD?',
      content: (
        <>
          <p>
            <strong>CRUD</strong> son las 4 operaciones básicas con datos:
            <br />
            <strong>C</strong>reate (INSERT) - <strong>R</strong>ead (SELECT) - <strong>U</strong>pdate (UPDATE) - <strong>D</strong>elete (DELETE).
            <br />
            Prácticamente todo software hace CRUD. Es importante hacerlo correctamente y seguro.
          </p>
          <InfoBox type="info">
            <strong>Patrón DAO:</strong> Una clase por tabla. Métodos: create(), getById(), update(), delete(), getAll().
            Separa lógica de BD del resto del código.
          </InfoBox>
        </>
      ),
    },

    {
      title: 'CREATE - Insertar Datos',
      content: (
        <CodeBlock
          language="java"
          code={`// ===== INSERT: Agregar nuevo registro =====

String sql = "INSERT INTO usuarios (nombre, email, edad) VALUES (?, ?, ?)";

try (Connection conn = DriverManager.getConnection(url, user, pass);
     PreparedStatement ps = conn.prepareStatement(sql)) {

    ps.setString(1, "Juan Pérez");
    ps.setString(2, "juan@example.com");
    ps.setInt(3, 30);

    int filasInsertadas = ps.executeUpdate();

    if (filasInsertadas > 0) {
        System.out.println("✓ Usuario insertado");
    } else {
        System.out.println("❌ Error al insertar");
    }

} catch (SQLException e) {
    System.err.println("Error: " + e.getMessage());
}

// ===== OBTENER ID GENERADO (AUTO_INCREMENT) =====

String sql = "INSERT INTO usuarios (nombre, email) VALUES (?, ?)";

try (Connection conn = DriverManager.getConnection(url, user, pass);
     PreparedStatement ps = conn.prepareStatement(sql, Statement.RETURN_GENERATED_KEYS)) {

    ps.setString(1, "María García");
    ps.setString(2, "maria@example.com");

    ps.executeUpdate();

    // Obtener ID generado
    ResultSet rs = ps.getGeneratedKeys();
    if (rs.next()) {
        int idGenerado = rs.getInt(1);
        System.out.println("✓ Usuario insertado con ID: " + idGenerado);
    }

} catch (SQLException e) {
    System.err.println("Error: " + e.getMessage());
}`}
        />
      ),
    },

    {
      title: 'READ - Consultar Datos',
      content: (
        <CodeBlock
          language="java"
          code={`// ===== SELECT: Leer datos =====

String sql = "SELECT id, nombre, email, edad FROM usuarios WHERE edad > ? ORDER BY nombre";

try (Connection conn = DriverManager.getConnection(url, user, pass);
     PreparedStatement ps = conn.prepareStatement(sql)) {

    ps.setInt(1, 25);

    ResultSet rs = ps.executeQuery();

    while (rs.next()) {
        int id = rs.getInt("id");
        String nombre = rs.getString("nombre");
        String email = rs.getString("email");
        int edad = rs.getInt("edad");

        System.out.printf("%d | %-15s | %-20s | %d años\\n",
                          id, nombre, email, edad);
    }

} catch (SQLException e) {
    System.err.println("Error: " + e.getMessage());
}

// ===== CONTAR REGISTROS =====

String sql = "SELECT COUNT(*) as total FROM usuarios";

try (Connection conn = DriverManager.getConnection(url, user, pass);
     Statement stmt = conn.createStatement();
     ResultSet rs = stmt.executeQuery(sql)) {

    if (rs.next()) {
        int totalUsuarios = rs.getInt("total");
        System.out.println("Total usuarios: " + totalUsuarios);
    }

} catch (SQLException e) {
    e.printStackTrace();
}`}
        />
      ),
    },

    {
      title: 'UPDATE - Modificar Datos',
      content: (
        <CodeBlock
          language="java"
          code={`// ===== UPDATE: Cambiar registros existentes =====

String sql = "UPDATE usuarios SET email = ?, edad = ? WHERE id = ?";

try (Connection conn = DriverManager.getConnection(url, user, pass);
     PreparedStatement ps = conn.prepareStatement(sql)) {

    ps.setString(1, "nuevo@example.com");
    ps.setInt(2, 31);
    ps.setInt(3, 1);  // WHERE id = 1

    int filasActualizadas = ps.executeUpdate();

    if (filasActualizadas > 0) {
        System.out.println("✓ " + filasActualizadas + " usuario(s) actualizado(s)");
    } else {
        System.out.println("❌ Usuario no encontrado");
    }

} catch (SQLException e) {
    System.err.println("Error: " + e.getMessage());
}

// ===== UPDATE CONDICIONAL =====

// Incrementar edad de todos los usuarios mayores a 30
String sql = "UPDATE usuarios SET edad = edad + 1 WHERE edad > 30";

try (Connection conn = DriverManager.getConnection(url, user, pass);
     Statement stmt = conn.createStatement()) {

    int filasActualizadas = stmt.executeUpdate(sql);
    System.out.println("✓ Actualizados " + filasActualizadas + " usuarios");

} catch (SQLException e) {
    e.printStackTrace();
}`}
        />
      ),
    },

    {
      title: 'DELETE - Eliminar Datos',
      content: (
        <>
          <CodeBlock
            language="java"
            code={`// ===== DELETE: Eliminar registros =====

String sql = "DELETE FROM usuarios WHERE id = ?";

try (Connection conn = DriverManager.getConnection(url, user, pass);
     PreparedStatement ps = conn.prepareStatement(sql)) {

    ps.setInt(1, 1);  // Eliminar usuario con id=1

    int filasEliminadas = ps.executeUpdate();

    if (filasEliminadas > 0) {
        System.out.println("✓ Usuario eliminado");
    } else {
        System.out.println("❌ Usuario no encontrado");
    }

} catch (SQLException e) {
    System.err.println("Error: " + e.getMessage());
}

// ===== SOFT DELETE: Marcar como eliminado (mejor práctica) =====
// En lugar de DELETE, marcar como inactivo (preserva referencial integrity)

String sql = "UPDATE usuarios SET activo = false, fecha_eliminacion = NOW() WHERE id = ?";

try (Connection conn = DriverManager.getConnection(url, user, pass);
     PreparedStatement ps = conn.prepareStatement(sql)) {

    ps.setInt(1, 1);

    ps.executeUpdate();
    System.out.println("✓ Usuario marcado como eliminado");

} catch (SQLException e) {
    e.printStackTrace();
}`}
          />
          <InfoBox type="warning">
            <strong>DELETE es permanente:</strong> Usar soft delete (marcar como inactivo) para datos críticos.
          </InfoBox>
        </>
      ),
    },

    {
      title: 'Transacciones - Atomicidad y Consistencia',
      content: (
        <>
          <CodeBlock
            language="java"
            code={`/*
 * TRANSACCIÓN: Grupo de operaciones SQL que se ejecutan juntas
 * ATOMICIDAD: Todo se ejecuta O nada se ejecuta (todo o nada)
 *
 * Ejemplo: Transferencia bancaria
 * - Restar de cuenta A
 * - Sumar a cuenta B
 *
 * Si falla entre medio, debe revertir (rollback)
 * No puede quedar: A menos dinero pero B no recibió
 */

String sqlRestar = "UPDATE cuentas SET saldo = saldo - ? WHERE id = ?";
String sqlSumar = "UPDATE cuentas SET saldo = saldo + ? WHERE id = ?";

try (Connection conn = DriverManager.getConnection(url, user, pass)) {

    // Paso 1: DESACTIVAR autocommit
    conn.setAutoCommit(false);
    System.out.println("Iniciando transacción...");

    // Paso 2: Restar de cuenta origen
    try (PreparedStatement psRestar = conn.prepareStatement(sqlRestar)) {
        psRestar.setDouble(1, 1000);
        psRestar.setInt(2, 1);  // Cuenta origen
        if (psRestar.executeUpdate() == 0) {
            throw new Exception("No se pudo restar de cuenta origen");
        }
    }

    // Paso 3: Sumar a cuenta destino
    try (PreparedStatement psSumar = conn.prepareStatement(sqlSumar)) {
        psSumar.setDouble(1, 1000);
        psSumar.setInt(2, 2);  // Cuenta destino
        if (psSumar.executeUpdate() == 0) {
            throw new Exception("No se pudo sumar a cuenta destino");
        }
    }

    // Paso 4: TODO OK, CONFIRMAR
    conn.commit();
    System.out.println("✓ Transacción confirmada (COMMIT)");

} catch (Exception e) {
    System.err.println("❌ Error: " + e.getMessage());
    System.out.println("✓ Transacción revertida (ROLLBACK)");
}`}
          />
          <InfoBox type="success">
            <strong>ACID:</strong> Atomicidad, Consistencia, Aislamiento, Durabilidad.
            Garantías que las transacciones cumplen.
          </InfoBox>
        </>
      ),
    },
  ];

  const summary = `CRUD y Transacciones son fundamentales en desarrollo:

• CRUD: Create, Read, Update, Delete. Operaciones básicas con datos.
• DAO: Data Access Object. Una clase = una tabla. Encapsula SQL.
• CREATE: INSERT. Retorna int (filas insertadas).
• READ: SELECT. Procesar ResultSet con while(rs.next()).
• UPDATE: UPDATE SET WHERE. Retorna int (filas actualizadas).
• DELETE: DELETE FROM WHERE. Retorna int (filas eliminadas).
• Soft Delete: Marcar como inactivo (mejor que eliminar).
• Transacción: Grupo de operaciones SQL que se ejecutan juntas (todo o nada).
• setAutoCommit(false): Desactivar autocommit para controlar transacciones.
• commit(): Confirmar transacción. Cambios permanentes en BD.
• rollback(): Deshacer transacción completa. Vuelve a estado anterior.
• Isolation Levels: READ_UNCOMMITTED, READ_COMMITTED, REPEATABLE_READ, SERIALIZABLE.`;

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