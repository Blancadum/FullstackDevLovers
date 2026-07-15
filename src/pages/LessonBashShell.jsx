import { useState } from 'react';
import { LessonTemplate, CodeBlock, Table, InfoBox } from '../components';
import { LessonNavigation } from '../components/LessonNavigation';
import { useBreadcrumb } from '../hooks/useBreadcrumb';
import { useLessonNavigation } from '../hooks/useLessonNavigation';

export function LessonBashShell() {
  const breadcrumbs = useBreadcrumb();
  const nav = useLessonNavigation();
  const [activeTab, setActiveTab] = useState(0);

  const concepts = [
    {
      icon: '💻',
      title: 'Shell & Bash',
      definition: 'Intérprete de comandos que permite interactuar con el sistema operativo',
      example: 'bash$ echo "Hola Mundo"'
    },
    {
      icon: '📝',
      title: 'Scripts Bash',
      definition: 'Archivos con extensión .sh que contienen secuencias de comandos',
      example: '#!/bin/bash\necho "Script ejecutable"'
    },
    {
      icon: '🔧',
      title: 'Maven Projects',
      definition: 'Herramienta de construcción Java que automatiza compilación y packaging',
      example: 'mvn clean package'
    }
  ];

  const exercises = [
    {
      title: 'Variables y argumentos en Bash',
      description: 'Crea un script que use variables y parámetros de entrada',
      solution: `#!/bin/bash

# Variables
nombre="Juan"
edad=25

echo "Nombre: $nombre"
echo "Edad: $edad"

# Argumentos pasados al script
echo "Primer argumento: $1"
echo "Segundo argumento: $2"
echo "Todos los argumentos: $@"
echo "Total de argumentos: $#"`
    },
    {
      title: 'Compilar y empaquetar con Maven',
      description: 'Usa Maven para compilar y crear un JAR',
      solution: `# Crear proyecto Maven
mvn archetype:generate -DgroupId=com.ejemplo -DartifactId=mi-app

# Entrar al directorio
cd mi-app

# Compilar
mvn clean compile

# Empaquetar
mvn clean package

# Ejecutar JAR
java -jar target/mi-app-1.0-SNAPSHOT.jar`
    }
  ];

  const keyPoints = [
    'Bash es el shell más común en Linux y macOS',
    '#!/bin/bash es el shebang que indica el intérprete',
    'chmod +x archivo.sh para hacer el script ejecutable',
    'Variables en bash: nombre=valor (sin espacios)',
    'Acceder variables: $nombre o ${nombre}',
    '$1, $2, $3... son argumentos posicionales',
    '$@ todos los argumentos, $# cantidad de argumentos',
    'Condicionales: if [ condición ]; then ... fi',
    'Bucles: for, while, until',
    'Maven organiza proyectos con estructura estándar: src/main/java, src/test/java, pom.xml',
    'pom.xml define dependencias y plugins',
    'mvn clean limpia, compile compila, package empaqueta, install instala localmente'
  ];

  const fundamentalSections = [
    {
      title: '¿Qué es Bash?',
      content: (
        <p>
          Bash (Bourne Again Shell) es un intérprete de comandos y lenguaje de scripting disponible
          en Linux, macOS y otros sistemas Unix. Permite automatizar tareas, gestionar archivos,
          y crear herramientas complejas mediante scripts.
        </p>
      )
    },
    {
      title: 'Primeros pasos con Bash',
      content: (
        <>
          <CodeBlock
            language="bash"
            code={`# Hola Mundo en Bash
echo "Hola Mundo"

# Variables
nombre="Juan"
apellido="Pérez"

# Concatenar
echo "$nombre $apellido"

# Usar comillas para espacios
frase="Esto es una frase"
echo $frase

# Números
numero=42
echo "El número es: $numero"`}
          />
          <InfoBox type="info">
            En Bash no hay espacios alrededor del signo = cuando asignas variables.
          </InfoBox>
        </>
      )
    },
    {
      title: 'Scripts Bash Ejecutables',
      content: (
        <>
          <CodeBlock
            language="bash"
            code={`# Crear archivo script.sh
nano script.sh

# Contenido del archivo:
#!/bin/bash
# Este es un comentario

echo "¡Hola! Este es mi primer script"
nombre=$(whoami)
echo "Usuario: $nombre"

# Hacer ejecutable
chmod +x script.sh

# Ejecutar
./script.sh

# O
bash script.sh`}
          />
          <InfoBox type="tip">
            #!/bin/bash es el shebang. Debe ser la primera línea del archivo.
          </InfoBox>
        </>
      )
    },
    {
      title: 'Variables y Parámetros',
      content: (
        <>
          <CodeBlock
            language="bash"
            code={`#!/bin/bash

# Variables de entorno
echo "Home: $HOME"
echo "Path: $PATH"
echo "Usuario: $USER"

# Variables personalizadas
proyecto="Mi Proyecto"
version="1.0"
fecha=$(date)

echo "Proyecto: $proyecto"
echo "Versión: $version"
echo "Fecha: $fecha"

# Argumentos del script
echo "Nombre del script: $0"
echo "Primer argumento: $1"
echo "Segundo argumento: $2"
echo "Todos: $@"
echo "Cantidad: $#"`}
          />
        </>
      )
    },
    {
      title: 'Condicionales y Bucles',
      content: (
        <>
          <CodeBlock
            language="bash"
            code={`#!/bin/bash

# Condicionales
edad=25

if [ $edad -ge 18 ]; then
  echo "Eres mayor de edad"
else
  echo "Eres menor de edad"
fi

# Comparar strings
usuario="admin"

if [ "$usuario" = "admin" ]; then
  echo "Acceso permitido"
fi

# Bucle for
for i in 1 2 3 4 5; do
  echo "Número: $i"
done

# Bucle while
contador=1
while [ $contador -le 5 ]; do
  echo "Contador: $contador"
  contador=$((contador + 1))
done

# Bucle sobre archivos
for archivo in *.java; do
  echo "Archivo: $archivo"
done`}
          />
          <InfoBox type="info">
            -ge (greater or equal), -lt (less than), -eq (equal), -ne (not equal)
          </InfoBox>
        </>
      )
    },
    {
      title: 'Funciones en Bash',
      content: (
        <>
          <CodeBlock
            language="bash"
            code={`#!/bin/bash

# Definir función
saludar() {
  nombre=$1
  echo "¡Hola, $nombre!"
}

# Llamar función
saludar "Juan"
saludar "María"

# Función con retorno
sumar() {
  resultado=$(($1 + $2))
  echo $resultado
}

suma=$(sumar 5 3)
echo "5 + 3 = $suma"

# Función con validación
verificar_archivo() {
  if [ -f "$1" ]; then
    echo "Archivo existe"
  else
    echo "Archivo no existe"
  fi
}

verificar_archivo "script.sh"
verificar_archivo "no-existe.txt"`}
          />
        </>
      )
    },
  ];

  const intermediateSections = [
    {
      title: 'Manipulación de Archivos',
      content: (
        <>
          <Table
            headers={['Comando', 'Descripción', 'Ejemplo']}
            rows={[
              ['ls', 'Listar archivos', 'ls -la /home'],
              ['cd', 'Cambiar directorio', 'cd /home/usuario'],
              ['pwd', 'Mostrar ruta actual', 'pwd'],
              ['mkdir', 'Crear directorio', 'mkdir mi-carpeta'],
              ['rm', 'Borrar archivo', 'rm archivo.txt'],
              ['cp', 'Copiar archivo', 'cp archivo.txt copia.txt'],
              ['mv', 'Mover/renombrar', 'mv viejo.txt nuevo.txt'],
              ['cat', 'Ver contenido', 'cat archivo.txt'],
              ['grep', 'Buscar en archivo', 'grep "palabra" archivo.txt'],
              ['find', 'Buscar archivos', 'find . -name "*.java"'],
            ]}
          />
          <CodeBlock
            language="bash"
            code={`#!/bin/bash

# Crear estructura de carpetas
mkdir -p proyecto/src/main/java
mkdir -p proyecto/src/test

# Copiar archivo
cp plantilla.java proyecto/src/main/java/

# Buscar todos los .java
find proyecto -name "*.java"

# Contar líneas de código
wc -l src/main/java/Main.java

# Buscar texto en archivos
grep -r "public static void main" src/`}
          />
        </>
      )
    },
    {
      title: 'Maven - Gestor de Proyectos Java (Construir Proyectos)',
      content: (
        <>
          <CodeBlock
            language="bash"
            code={`# Crear proyecto Maven
mvn archetype:generate \
  -DgroupId=com.ejemplo \
  -DartifactId=mi-aplicacion \
  -DarchetypeArtifactId=maven-archetype-quickstart

# Estructura generada
mi-aplicacion/
├── pom.xml
├── src/
│   ├── main/
│   │   ├── java/
│   │   │   └── com/ejemplo/App.java
│   │   └── resources/
│   └── test/
│       ├── java/
│       │   └── com/ejemplo/AppTest.java
│       └── resources/
└── target/ (generado después de compilar)`}
          />
          <CodeBlock
            language="bash"
            code={`# Ciclo de vida Maven

# Compilar
mvn clean compile

# Ejecutar tests
mvn test

# Empaquetar (genera JAR)
mvn package

# Instalar en repositorio local
mvn install

# Limpiar archivos generados
mvn clean

# Ejecutar aplicación
mvn exec:java -Dexec.mainClass="com.ejemplo.App"

# Ver dependencias
mvn dependency:tree`}
          />
          <InfoBox type="tip">
            mvn clean package es lo más usado: limpia, compila, testa y genera JAR.
          </InfoBox>
        </>
      )
    },
    {
      title: 'pom.xml - Configuración Maven',
      content: (
        <>
          <CodeBlock
            language="xml"
            code={`<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0">
  <modelVersion>4.0.0</modelVersion>

  <groupId>com.ejemplo</groupId>
  <artifactId>mi-app</artifactId>
  <version>1.0.0</version>
  <name>Mi Aplicación</name>

  <properties>
    <maven.compiler.source>11</maven.compiler.source>
    <maven.compiler.target>11</maven.compiler.target>
    <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>
  </properties>

  <dependencies>
    <!-- JUnit para tests -->
    <dependency>
      <groupId>junit</groupId>
      <artifactId>junit</artifactId>
      <version>4.13.2</version>
      <scope>test</scope>
    </dependency>

    <!-- Spring Boot -->
    <dependency>
      <groupId>org.springframework.boot</groupId>
      <artifactId>spring-boot-starter-web</artifactId>
      <version>3.2.0</version>
    </dependency>
  </dependencies>

  <build>
    <plugins>
      <!-- Plugin de compilación -->
      <plugin>
        <groupId>org.apache.maven.plugins</groupId>
        <artifactId>maven-compiler-plugin</artifactId>
        <version>3.11.0</version>
      </plugin>
    </plugins>
  </build>
</project>`}
          />
        </>
      )
    }
  ];

  const advancedSections = [
    {
      title: 'Redirección y Pipes',
      content: (
        <>
          <p>
            La redirección permite redirigir la entrada/salida de comandos a archivos u otros comandos.
            Los pipes (<strong>|</strong>) conectan la salida de un comando con la entrada de otro.
          </p>
          <CodeBlock
            language="bash"
            code={`#!/bin/bash

# Redirección básica
echo "Hola" > archivo.txt         # Escribir (sobrescribe)
echo "Mundo" >> archivo.txt       # Escribir (añade)

# Redirección de errores
comando_invalido 2> errores.txt   # Capturar errores
comando_valido 2>&1 archivo.txt   # Errores y salida al mismo archivo

# Pipes - encadenar comandos
ls -la | grep ".java"             # Listar archivos y filtrar .java
ps aux | grep java                # Procesos que contienen "java"
cat archivo.txt | wc -l           # Contar líneas

# Pipes múltiples
cat archivo.txt | grep "error" | wc -l  # Contar "error" en archivo
ls *.java | sort | uniq            # Listar java únicos y ordenados

# Ejemplo práctico: ver memoria usada
ps aux | grep java | grep -v grep  # Ver procesos java sin grep a sí mismo

# Redirección de entrada
wc -l < archivo.txt               # Contar líneas del archivo

# Heredoc (entrada multilínea)
mysql -u usuario -p << EOF
SELECT * FROM tabla;
UPDATE tabla SET columna = 'valor';
EOF`}
          />
        </>
      )
    },

    {
      title: 'Procesamiento de Texto: sed y awk',
      content: (
        <>
          <p>
            <strong>sed</strong> (stream editor) modifica archivos mediante expresiones.
            <strong>awk</strong> procesa archivos por campos/columnas.
          </p>
          <CodeBlock
            language="bash"
            code={`#!/bin/bash

# SED - Reemplazar texto
sed 's/viejo/nuevo/' archivo.txt           # Reemplazar primera ocurrencia por línea
sed 's/viejo/nuevo/g' archivo.txt          # Reemplazar todas (global)
sed -i 's/viejo/nuevo/g' archivo.txt       # Modificar archivo in-place

# SED - Eliminar líneas
sed '5d' archivo.txt                       # Eliminar línea 5
sed '/patron/d' archivo.txt                # Eliminar líneas con patrón
sed '1,3d' archivo.txt                     # Eliminar líneas 1-3

# AWK - Procesar por columnas
awk '{print $1}' archivo.txt               # Primera columna
awk '{print $1, $3}' archivo.txt           # Columnas 1 y 3
awk -F':' '{print $1}' /etc/passwd         # Usar ':' como separador

# AWK - Filtrar y procesar
awk '$2 > 100 {print $1}' numeros.txt      # Líneas donde columna 2 > 100
awk 'NR > 5 {print NR, $0}' archivo.txt   # Línea 5 en adelante con número

# Combinar sed y awk
cat log.txt | sed 's/ERROR/CRITICAL/' | awk '{print $1, $2}'

# Ejemplo real: procesar CSV
awk -F',' '{print $2, $1}' datos.csv       # Invertir columnas CSV
awk -F',' 'NR>1 {sum+=$3} END {print sum}' datos.csv  # Sumar columna 3`}
          />
        </>
      )
    },

    {
      title: 'Expresiones Regulares',
      content: (
        <>
          <p>
            Las expresiones regulares (regex) permiten buscar patrones complejos en texto.
            Se usan con <strong>grep</strong>, <strong>sed</strong>, <strong>awk</strong>, etc.
          </p>
          <CodeBlock
            language="bash"
            code={`#!/bin/bash

# GREP - Búsqueda con patrones
grep "error" archivo.log                   # Líneas con "error"
grep -i "error" archivo.log                # Case-insensitive
grep -v "error" archivo.log                # Líneas SIN "error"
grep -n "error" archivo.log                # Mostrar número de línea
grep "^error" archivo.log                  # Comienza con "error"
grep "error$" archivo.log                  # Termina con "error"

# Patrones regex
grep "[0-9]" archivo.txt                   # Contiene un número
grep "^[a-z]" archivo.txt                  # Comienza con minúscula
grep "@.*\.com" archivo.txt                # Email (aproximado)
grep -E "error|warn|info" archivo.log      # Alguno de estos (extended regex)

# SED con regex
sed 's/[0-9]\+/NUM/g' archivo.txt          # Reemplazar números
sed 's/^[[:space:]]*//g' archivo.txt       # Eliminar espacios iniciales
sed 's/[[:space:]]*$//g' archivo.txt       # Eliminar espacios finales

# AWK con regex
awk '/error/ {print}' archivo.log          # Líneas con "error"
awk '$0 ~ /[0-9]+/ {print}' archivo.txt    # Líneas con números
awk '$3 !~ /error/ {print}' archivo.log    # Columna 3 sin "error"

# Ejemplo práctico: validar email
grep -E "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$" emails.txt`}
          />
        </>
      )
    },

    {
      title: 'Permisos y Usuarios',
      content: (
        <>
          <p>
            En Linux/Unix, los permisos de archivos son críticos para seguridad.
            <strong>chmod</strong> cambia permisos, <strong>chown</strong> cambia propietario.
          </p>
          <CodeBlock
            language="bash"
            code={`#!/bin/bash

# Ver permisos
ls -l archivo.txt                          # r w x r - x r - -
                                           # propietario grupo otros

# Cambiar permisos (numérico)
chmod 755 script.sh                        # rwxr-xr-x (7=rwx, 5=r-x, 5=r-x)
chmod 644 archivo.txt                      # rw-r--r-- (lectura para todos, escritura solo owner)
chmod 600 privado.key                      # rw------- (solo propietario)
chmod 777 publico.sh                       # rwxrwxrwx (todos pueden hacer todo)

# Cambiar permisos (simbólico)
chmod +x script.sh                         # Agregar ejecución
chmod -w archivo.txt                       # Quitar escritura
chmod u+rwx archivo.txt                    # Usuario: lectura, escritura, ejecución
chmod g+r archivo.txt                      # Grupo: agregar lectura
chmod o-rwx archivo.txt                    # Otros: quitar todos

# Cambiar propietario
chown usuario archivo.txt                  # Cambiar propietario
chown usuario:grupo archivo.txt            # Cambiar usuario y grupo
chown -R usuario:grupo carpeta/            # Recursivo

# Permisos especiales
chmod 4755 script.sh                       # SUID (ejecutar como propietario)
chmod 2755 carpeta/                        # SGID (heredar grupo de carpeta)
chmod 1777 /tmp                            # Sticky bit (solo propietario puede borrar)

# Ejemplo: asegurar script privado
chmod 700 ~/.ssh                           # Solo propietario accede
chmod 600 ~/.ssh/id_rsa                    # Clave privada leíble solo por owner

# Ver en octal
stat -c '%A %a %n' archivo.txt`}
          />
        </>
      )
    },

    {
      title: 'Variables de Entorno Avanzadas',
      content: (
        <>
          <p>
            Las variables de entorno se heredan a procesos hijos.
            Son clave para configuración global de aplicaciones.
          </p>
          <CodeBlock
            language="bash"
            code={`#!/bin/bash

# Variables de entorno del sistema
echo $PATH                                 # Ruta de búsqueda de programas
echo $HOME                                 # Directorio del usuario
echo $USER                                 # Nombre del usuario
echo $PWD                                  # Directorio actual
echo $SHELL                                # Shell actual
echo $LANG                                 # Idioma/locale

# Ver todas las variables
env                                        # Mostrar todas
env | grep JAVA                            # Filtrar JAVA

# Definir variables de entorno
export JAVA_HOME=/usr/lib/jvm/java-11-openjdk
export MAVEN_HOME=/usr/share/maven
export PATH=$MAVEN_HOME/bin:$PATH           # Agregar a PATH

# Variables en .bashrc (permanente)
# Agregar al final de ~/.bashrc:
# export JAVA_HOME=/usr/lib/jvm/java-11-openjdk
# export PATH=$JAVA_HOME/bin:$PATH

# Luego ejecutar:
source ~/.bashrc

# Variable local vs entorno
LOCAL_VAR="solo en este shell"             # Local (no heredada)
export GLOBAL_VAR="en todos los procesos"  # Entorno (heredada)

# Desherendar variable
unset GLOBAL_VAR

# Comando que ejecuta con variables específicas
JAVA_OPTS="-Xmx1024m" java -jar app.jar    # Memoria máxima para JVM

# Usar variable con valor por defecto
# Sintaxis: VARIABLE:-valor_por_defecto (expandir variable o valor por defecto)
# Sintaxis: VARIABLE:=asignar_si_vacio (asignar si está vacío)
echo "Ejemplo: si VARIABLE no existe, use valor por defecto"`}
          />
        </>
      )
    },

    {
      title: 'Error Handling y Debugging',
      content: (
        <>
          <p>
            El manejo correcto de errores hace scripts robustos y fáciles de debuggear.
          </p>
          <CodeBlock
            language="bash"
            code={`#!/bin/bash

# Opciones de seguridad
set -e                     # Exit si cualquier comando falla
set -u                     # Error si variable indefinida
set -o pipefail            # Error si comando en pipe falla
set -x                     # Debug: mostrar comandos ejecutados

# Más moderno:
set -euo pipefail

# Verificar errores manualmente
if ! comando; then
  echo "Error: comando falló"
  exit 1
fi

# Capturar código de error
comando
if [ $? -ne 0 ]; then
  echo "Error: $?"
  exit 1
fi

# Validar argumentos
if [ $# -lt 2 ]; then
  echo "Uso: $0 <arg1> <arg2>"
  exit 1
fi

# Verificar si archivo existe
if [ ! -f "$archivo" ]; then
  echo "Error: archivo $archivo no existe"
  exit 1
fi

# Verificar si directorio existe
if [ ! -d "$directorio" ]; then
  mkdir -p "$directorio"
fi

# Trap para limpiar en caso de error
cleanup() {
  echo "Limpiando..."
  rm -f /tmp/temporal.*
}
trap cleanup EXIT

# Debug detallado
PS4='$BASH_SOURCE:$LINENO: $FUNCNAME(): '
set -x

# Ejemplo: script robusto
#!/bin/bash
set -euo pipefail

main() {
  local archivo="$1"

  if [ -z "$archivo" ]; then
    echo "Error: falta archivo" >&2
    return 1
  fi

  if [ ! -f "$archivo" ]; then
    echo "Error: $archivo no existe" >&2
    return 1
  fi

  echo "Procesando $archivo..."
  # ... resto del código
}

main "$@"`}
          />
        </>
      )
    },

  ];

  const developmentSections = [
    {
      title: 'Alias y Funciones Útiles',
      content: (
        <>
          <p>
            Los alias y funciones personalizadas aceleran el trabajo diario.
            Se guardan en <strong>~/.bashrc</strong> para persistencia.
          </p>
          <CodeBlock
            language="bash"
            code={`#!/bin/bash

# Alias útiles (agregar a ~/.bashrc)
alias ll='ls -lah'
alias la='ls -A'
alias rm='rm -i'                   # Pedir confirmación
alias cp='cp -i'
alias mv='mv -i'
alias mkdir='mkdir -p'
alias cd..='cd ..'

# Alias para proyectos Maven
alias mvnc='mvn clean'
alias mvncp='mvn clean package'
alias mvnci='mvn clean install'
alias mvnt='mvn test'
alias mvne='mvn exec:java -Dexec.mainClass'

# Alias para Git (ver lecciones de Git)
alias gs='git status'
alias ga='git add'
alias gc='git commit -m'
alias gp='git push'

# Alias de desarrollo
alias buildapp='mvn clean package -DskipTests && java -jar target/*.jar'
alias testapp='mvn clean test'
alias devlog='tail -f logs/app.log'

# Ver todos los alias
alias

# Función personalizada
function mkcd() {
  mkdir -p "$1"
  cd "$1"
}

# Función para buscar en archivos java
function findjava() {
  find . -name "*.java" -type f -exec grep -l "$1" {} \;
}

# Función para ver estructura del proyecto
function tree() {
  # Muestra estructura de carpetas de forma visual
  ls -lR "$1" | sed -e 's;[^/]*/;|____;g;s;____|; |;g'
}

# Función para limpiar y reconstruir
function rebuild() {
  echo "Limpiando..."
  mvn clean
  echo "Compilando..."
  mvn package -DskipTests
  echo "✅ Listo"
}

# Función con parámetros
function create_project() {
  local name="$1"
  local package="$2"

  mvn archetype:generate \
    -DgroupId="$package" \
    -DartifactId="$name" \
    -DarchetypeArtifactId=maven-archetype-quickstart
}

# Guardar alias y funciones
# Añadir al final de ~/.bashrc y ejecutar: source ~/.bashrc`}
          />
        </>
      )
    },

    {
      title: 'Scripts Avanzados para Desarrollo',
      content: (
        <>
          <CodeBlock
            language="bash"
            code={`#!/bin/bash
# build-and-run.sh - Compilar y ejecutar proyecto Maven

set -euo pipefail

# Colores (códigos ANSI)
# RED - color rojo, GREEN - verde, YELLOW - amarillo, NC - sin color
YELLOW_TEXT="🔧"

# Usar variables de color con $VARIABLE
echo "Compilando proyecto..."
mvn clean package -DskipTests

echo "Compilación exitosa"

# Buscar el JAR generado
JAR_FILE=$(find target -name "*.jar" -type f)

if [ -z "$JAR_FILE" ]; then
  echo "No se encontró JAR"
  exit 1
fi

echo "Ejecutando aplicación..."
java -jar "$JAR_FILE"`}
          />

          <CodeBlock
            language="bash"
            code={`#!/bin/bash
# deploy-to-prod.sh - Desplegar con backup

set -euo pipefail

REPO="usuario@servidor.prod:/app"
LOCAL_JAR="target/app.jar"
BACKUP_DIR="backups"

# Validar que existe JAR
if [ ! -f "$LOCAL_JAR" ]; then
  echo "❌ JAR no encontrado: $LOCAL_JAR"
  exit 1
fi

# Crear backup
mkdir -p "$BACKUP_DIR"
TIMESTAMP=$(date +%Y%m%d_%H%M%S)

echo "📦 Compilando..."
mvn clean package -DskipTests

echo "💾 Haciendo backup..."
ssh "usuario@servidor.prod" "cp /app/app.jar /app/backups/app_$TIMESTAMP.jar"

echo "🚀 Desplegando..."
scp "$LOCAL_JAR" "$REPO/"

echo "🔄 Reiniciando servicio..."
ssh "usuario@servidor.prod" "systemctl restart myapp"

echo "✅ Despliegue completado"
echo "📝 Backup guardado: backups/app_$TIMESTAMP.jar"`}
          />

          <CodeBlock
            language="bash"
            code={`#!/bin/bash
# test-and-report.sh - Ejecutar tests y generar reporte

set -euo pipefail

REPORT_FILE="test-report-$(date +%Y%m%d_%H%M%S).html"

echo "🧪 Ejecutando tests..."
mvn clean test

echo "📊 Generando reporte de cobertura..."
mvn jacoco:report

echo "📈 Resultados:"
grep -o "<td>[0-9]*%</td>" target/site/jacoco/index.html | head -3

echo "✅ Tests completados"
echo "📄 Reporte: target/site/jacoco/index.html"`}
          />
        </>
      )
    },

    {
      title: 'Monitoreo y Mantenimiento',
      content: (
        <>
          <p>
            Scripts para monitorear aplicaciones, logs y recursos del sistema.
          </p>
          <CodeBlock
            language="bash"
            code={`#!/bin/bash

# Monitoreo de procesos Java
ps aux | grep java                         # Ver procesos java
ps aux | grep java | grep -v grep          # Sin el propio grep

# Ver memoria usada por Java
jps -l                                     # Java Process Status
jps -mlvV                                  # Detallado con flags

# Monitoreo de recursos
free -h                                    # Memoria disponible
df -h                                      # Espacio en disco
top -b -n 1 | grep java                   # Uso de CPU (una iteración)

# Logs
tail -f logs/app.log                       # Ver logs en vivo
tail -100 logs/app.log                     # Últimas 100 líneas
grep "ERROR" logs/app.log | wc -l          # Contar errores

# Script de monitoreo
#!/bin/bash
# monitor.sh - Alertar si memoria > 80%

THRESHOLD=80
USED=$(free | grep Mem | awk '{print int($3/$2 * 100)}')

echo "Memoria usada: $USED%"

if [ $USED -gt $THRESHOLD ]; then
  echo "⚠️ ALERTA: Memoria alta"
  ps aux --sort=-%mem | head -5
fi

# Script para limpiar logs antiguos
#!/bin/bash
# cleanup-logs.sh

DAYS_OLD=7
LOG_DIR="/var/log/myapp"

echo "Limpiando logs más viejos que $DAYS_OLD días"
find "$LOG_DIR" -name "*.log" -mtime +$DAYS_OLD -delete

echo "✅ Limpieza completada"`}
          />
        </>
      )
    }
  ];

  const tabs = [
    { name: 'Fundamentos', icon: '🎯' },
    { name: 'Intermedio', icon: '📚' },
    { name: 'Avanzado', icon: '🚀' },
    { name: 'Desarrollo', icon: '⚙️' }
  ];

  const tabSections = [fundamentalSections, intermediateSections, advancedSections, developmentSections];

  const summary = 'Bash y Maven para automatizar desarrollo Java:\n\nBASH FUNDAMENTOS:\n• Bash es el shell más usado en Linux y macOS\n• Scripts .sh automatizan tareas repetitivas\n• chmod +x para hacer script ejecutable\n• Variables: nombre=valor, acceso con $nombre o ${nombre}\n• $1, $2, $3 argumentos posicionales, $@ todos, $# cantidad\n\nLÓGICA Y FUNCIONES:\n• Condicionales if/then/else, [[ ]] para regex\n• Bucles for/while/until\n• Funciones reutilizables con parámetros y return\n\nPROCESAMIENTO DE TEXTO:\n• Pipes (|) conectan salida-entrada entre comandos\n• Redirección: > (escribir), >> (añadir), < (leer), 2> (errores)\n• grep busca patrones, sed reemplaza/modifica, awk procesa columnas\n• Expresiones regulares (regex) para patrones complejos\n\nADMINISTRACIÓN:\n• chmod 755/644/600 para permisos\n• Permisos especiales: SUID (4000), SGID (2000), Sticky (1000)\n• Variables de entorno: export VAR="valor"\n• set -euo pipefail para scripts robustos\n\nMAVEN:\n• Estructura: src/main/java, src/test/java, pom.xml\n• pom.xml define dependencias, propiedades, plugins\n• mvn clean package: compila, testa, empaqueta\n• Ciclo: compile → test → package → install → deploy\n\nPRÁCTICAS:\n• Scripts para build, test, deploy automático\n• Monitoreo de procesos, logs, recursos\n• Alias y funciones en ~/.bashrc para persistencia\n• Error handling y cleanup para robustez';

  const sectionsContent = tabSections[activeTab].map((section, index) => ({
    id: `section-${index}`,
    title: section.title,
    content: section.content
  }));

  return (
    <>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem' }}>
        {/* Breadcrumbs */}
        {breadcrumbs && breadcrumbs.length > 0 && (
          <div style={{
            marginBottom: '2rem',
            fontSize: '0.9rem',
            color: '#7f8c8d',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem'
          }}>
            {breadcrumbs.map((crumb, index) => (
              <span key={index} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                {index > 0 && <span style={{ color: '#bdc3c7' }}>›</span>}
                <a href={crumb.url || '#'} style={{
                  color: '#3498db',
                  textDecoration: 'none',
                  fontWeight: index === breadcrumbs.length - 1 ? 'bold' : 'normal'
                }}>
                  {crumb.label}
                </a>
              </span>
            ))}
          </div>
        )}

        {/* Tabs para segmentar contenido - AL MÁS ARRIBA */}
        <div style={{ marginBottom: '3rem', marginTop: '0.5rem' }}>
          <h2 style={{
            marginBottom: '1.5rem',
            marginTop: '0',
            color: '#2c3e50',
            fontSize: '1.8rem',
            fontWeight: 'bold',
            paddingTop: '0.5rem'
          }}>📖 Bash & Shell - Automatización</h2>
          <div style={{
            display: 'flex',
            gap: '0.75rem',
            flexWrap: 'wrap',
            marginBottom: '2.5rem',
            padding: '1rem',
            backgroundColor: '#f8f9fa',
            borderRadius: '0.5rem'
          }}>
            {tabs.map((tab, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                style={{
                  padding: '0.75rem 1.5rem',
                  border: activeTab === index ? '2px solid #3498db' : '2px solid #bdc3c7',
                  borderRadius: '0.5rem',
                  backgroundColor: activeTab === index ? '#3498db' : 'white',
                  color: activeTab === index ? 'white' : '#2c3e50',
                  cursor: 'pointer',
                  fontSize: '0.95rem',
                  fontWeight: activeTab === index ? 'bold' : 'normal',
                  transition: 'all 0.3s ease',
                  boxShadow: activeTab === index ? '0 4px 12px rgba(52, 152, 219, 0.3)' : 'none'
                }}
              >
                {tab.icon} {tab.name}
              </button>
            ))}
          </div>

          {/* Contenido del tab activo */}
          <div style={{ marginTop: '2rem' }}>
            {sectionsContent.map((section, index) => (
              <div key={index} style={{ marginBottom: '3rem' }}>
                <h3 style={{
                  color: '#2c3e50',
                  fontSize: '1.3rem',
                  borderLeft: '4px solid #3498db',
                  paddingLeft: '1rem',
                  marginBottom: '1rem'
                }}>
                  {section.title}
                </h3>
                <div style={{
                  backgroundColor: '#f8f9fa',
                  padding: '1.5rem',
                  borderRadius: '0.5rem',
                  borderLeft: '4px solid #3498db'
                }}>
                  {section.content}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Resumen final */}
        <div style={{
          marginTop: '4rem',
          paddingTop: '2rem',
          borderTop: '2px solid #ecf0f1'
        }}>
          <h2 style={{ color: '#2c3e50', marginBottom: '1.5rem' }}>📝 Resumen Completo</h2>
          <pre style={{
            backgroundColor: '#f5f7fa',
            padding: '1.5rem',
            borderRadius: '0.5rem',
            fontSize: '0.9rem',
            lineHeight: '1.6',
            color: '#2c3e50',
            overflowX: 'auto',
            border: '1px solid #ecf0f1'
          }}>
            {summary}
          </pre>
        </div>

        {/* Conceptos, Ejercicios y Puntos Clave */}
        <div style={{ marginTop: '3rem', marginBottom: '3rem' }}>
          <LessonTemplate
            breadcrumbs={breadcrumbs}
            concepts={concepts}
            exercises={exercises}
            keyPoints={keyPoints}
          />
        </div>
      </div>

      <LessonNavigation
        previousLink={nav.previous}
        previousTitle={nav.previousTitle}
        nextLink={nav.next}
        nextTitle={nav.nextTitle}
      />
    </>
  );
}