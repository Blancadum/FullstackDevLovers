// Componentes para diagramas UML simples

export function DiagramSingleton() {
  return (
    <svg viewBox="0 0 350 280" style={{ backgroundColor: '#f9f9f9', borderRadius: '8px', marginBottom: '0.5rem' }}>
      {/* Clase */}
      <rect x="80" y="40" width="160" height="96" fill="white" stroke="#333" strokeWidth="1.5" />

      {/* Nombre de clase */}
      <rect x="80" y="40" width="160" height="32" fill="#e3f2fd" stroke="#333" strokeWidth="1.5" />
      <text x="128" y="75" textAnchor="middle" fontWeight="bold" fontSize="8">DatabaseConnection</text>

      {/* Línea divisoria */}
      <line x1="100" y1="90" x2="300" y2="90" stroke="#333" strokeWidth="0.7" />

      {/* Atributos */}
      <text x="88" y="110" fontSize="8">- instance: DatabaseConnection</text>
      <text x="88" y="122" fontSize="8">- connection: String</text>

      {/* Línea divisoria */}
      <line x1="100" y1="140" x2="300" y2="140" stroke="#333" strokeWidth="0.7" />

      {/* Métodos */}
      <text x="88" y="160" fontSize="8">+ getInstance(): DatabaseConnection</text>
      <text x="88" y="167" fontSize="8">+ executeQuery(sql: String)</text>

      {/* Nota */}
      <rect x="80" y="176" width="160" height="48" fill="#fff3cd" stroke="#ffc107" strokeWidth="0.7" rx="4" />
      <text x="88" y="235" fontSize="7" fontWeight="bold">Una única instancia</text>
      <text x="88" y="248" fontSize="7">Acceso global mediante</text>
      <text x="88" y="260" fontSize="7">getInstance()</text>
    </svg>
  );
}

export function DiagramFactory() {
  return (
    <svg viewBox="0 0 450 360" style={{ backgroundColor: '#f9f9f9', borderRadius: '8px', marginBottom: '0.5rem' }}>
      {/* Interfaz */}
      <rect x="120" y="16" width="160" height="48" fill="#e1f5fe" stroke="#0277bd" strokeWidth="1.5" />
      <text x="200" y="35" textAnchor="middle" fontSize="7" fontStyle="italic">&lt;&lt;interface&gt;&gt;</text>
      <text x="200" y="40" textAnchor="middle" fontWeight="bold" fontSize="7">Transporte</text>
      <text x="200" y="70" textAnchor="middle" fontSize="7">+ enviar(paquete)</text>

      {/* Implementaciones */}
      <rect x="24" y="122" width="112" height="56" fill="white" stroke="#333" strokeWidth="1.5" />
      <text x="80" y="150" textAnchor="middle" fontWeight="bold" fontSize="8">TransportePorTierra</text>
      <text x="80" y="168" textAnchor="middle" fontSize="7">+ enviar(paquete)</text>

      <rect x="144" y="122" width="112" height="56" fill="white" stroke="#333" strokeWidth="1.5" />
      <text x="200" y="150" textAnchor="middle" fontWeight="bold" fontSize="8">TransportePorAire</text>
      <text x="200" y="168" textAnchor="middle" fontSize="7">+ enviar(paquete)</text>

      <rect x="264" y="122" width="80" height="56" fill="white" stroke="#333" strokeWidth="1.5" />
      <text x="304" y="150" textAnchor="middle" fontWeight="bold" fontSize="8">TransporteMar</text>
      <text x="304" y="168" textAnchor="middle" fontSize="7">+ enviar(paquete)</text>

      {/* Flechas de implementación */}
      <line x1="100" y1="130" x2="180" y2="80" stroke="#333" strokeWidth="0.7" strokeDasharray="5,5" />
      <polygon points="180,80 175,90 185,85" fill="none" stroke="#333" strokeWidth="0.7" />

      <line x1="270" y1="130" x2="250" y2="80" stroke="#333" strokeWidth="0.7" strokeDasharray="5,5" />
      <polygon points="250,80 245,90 255,85" fill="none" stroke="#333" strokeWidth="0.7" />

      <line x1="420" y1="130" x2="320" y2="80" stroke="#333" strokeWidth="0.7" strokeDasharray="5,5" />
      <polygon points="320,80 315,90 325,85" fill="none" stroke="#333" strokeWidth="0.7" />

      {/* Factory */}
      <rect x="120" y="235" width="160" height="64" fill="#fff3e0" stroke="#f57c00" strokeWidth="1.5" />
      <text x="200" y="260" textAnchor="middle" fontWeight="bold" fontSize="7">TransporteFactory</text>
      <line x1="150" y1="270" x2="350" y2="270" stroke="#f57c00" strokeWidth="0.7" />
      <text x="128" y="290" fontSize="7">+ crearTransporte(tipo)</text>
      <text x="128" y="310" fontSize="7">  : Transporte</text>

      {/* Flechas de uso */}
      <line x1="250" y1="240" x2="100" y2="200" stroke="#666" strokeWidth="1.5" />
      <line x1="250" y1="240" x2="270" y2="200" stroke="#666" strokeWidth="1.5" />
      <line x1="250" y1="240" x2="420" y2="200" stroke="#666" strokeWidth="1.5" />
    </svg>
  );
}

export function DiagramBuilder() {
  return (
    <svg viewBox="0 0 450 360" style={{ backgroundColor: '#f9f9f9', borderRadius: '8px', marginBottom: '0.5rem' }}>
      {/* Clase Usuario */}
      <rect x="24" y="40" width="120" height="96" fill="white" stroke="#333" strokeWidth="1.5" />
      <rect x="24" y="40" width="120" height="28" fill="#e8f5e9" stroke="#333" strokeWidth="1.5" />
      <text x="105" y="72" textAnchor="middle" fontWeight="bold" fontSize="8">Usuario</text>
      <line x1="30" y1="85" x2="180" y2="85" stroke="#333" strokeWidth="0.7" />
      <text x="40" y="102" fontSize="8">- nombre: String</text>
      <text x="40" y="118" fontSize="8">- email: String</text>
      <text x="40" y="134" fontSize="8">- edad: int</text>
      <text x="40" y="150" fontSize="8">- telefono: String</text>

      {/* Builder */}
      <rect x="192" y="40" width="160" height="144" fill="white" stroke="#333" strokeWidth="1.5" />
      <rect x="192" y="40" width="160" height="28" fill="#f3e5f5" stroke="#333" strokeWidth="1.5" />
      <text x="340" y="72" textAnchor="middle" fontWeight="bold" fontSize="8">UsuarioBuilder</text>
      <line x1="240" y1="85" x2="440" y2="85" stroke="#333" strokeWidth="0.7" />
      <text x="200" y="105" fontSize="8">- nombre: String</text>
      <text x="200" y="121" fontSize="8">- email: String</text>
      <text x="200" y="137" fontSize="8">+ nombre(String): this</text>
      <text x="200" y="153" fontSize="8">+ email(String): this</text>
      <text x="200" y="169" fontSize="8">+ edad(int): this</text>
      <text x="200" y="177" fontSize="8">+ build(): Usuario</text>

      {/* Flecha de construcción */}
      <line x1="180" y1="110" x2="240" y2="110" stroke="#666" strokeWidth="1.5" />
      <polygon points="240,110 230,105 230,115" fill="#666" />

      {/* Paso a paso */}
      <text x="200" y="280" fontSize="7" fontWeight="bold">Construcción paso a paso:</text>
      <text x="200" y="300" fontSize="8">new Usuario.UsuarioBuilder()</text>
      <text x="200" y="316" fontSize="8">  .nombre("Juan")</text>
      <text x="200" y="332" fontSize="8">  .email("juan@test.com")</text>
    </svg>
  );
}

export function DiagramDecorator() {
  return (
    <svg viewBox="0 0 450 360" style={{ backgroundColor: '#f9f9f9', borderRadius: '8px', marginBottom: '0.5rem' }}>
      {/* Interfaz Cafe */}
      <rect x="120" y="16" width="160" height="48" fill="#e1f5fe" stroke="#0277bd" strokeWidth="1.5" />
      <text x="200" y="35" textAnchor="middle" fontSize="7" fontStyle="italic">&lt;&lt;interface&gt;&gt;</text>
      <text x="200" y="40" textAnchor="middle" fontWeight="bold" fontSize="7">Cafe</text>
      <text x="200" y="70" textAnchor="middle" fontSize="7">+ getCosto(), getDescripcion()</text>

      {/* CafeSimple */}
      <rect x="24" y="122" width="120" height="48" fill="white" stroke="#333" strokeWidth="1.5" />
      <text x="90" y="150" textAnchor="middle" fontWeight="bold" fontSize="7">CafeSimple</text>
      <text x="90" y="175" textAnchor="middle" fontSize="8">Implementa Cafe</text>

      {/* CafeDecorador */}
      <rect x="190" y="122" width="112" height="64" fill="#fff3e0" stroke="#f57c00" strokeWidth="1.5" />
      <text x="260" y="150" textAnchor="middle" fontWeight="bold" fontSize="7">CafeDecorador</text>
      <text x="260" y="175" fontSize="8" textAnchor="middle">- cafe: Cafe</text>
      <text x="260" y="190" fontSize="8" textAnchor="middle">+ getCosto()</text>
      <text x="260" y="205" fontSize="8" textAnchor="middle">+ getDescripcion()</text>

      {/* Subclases */}
      <rect x="180" y="235" width="80" height="48" fill="white" stroke="#333" strokeWidth="1.5" />
      <text x="230" y="260" textAnchor="middle" fontWeight="bold" fontSize="8">CafeConLeche</text>
      <text x="230" y="285" textAnchor="middle" fontSize="7">extends CafeDecorador</text>

      <rect x="310" y="235" width="80" height="48" fill="white" stroke="#333" strokeWidth="1.5" />
      <text x="360" y="260" textAnchor="middle" fontWeight="bold" fontSize="8">CafeConCanela</text>
      <text x="360" y="285" textAnchor="middle" fontSize="7">extends CafeDecorador</text>

      {/* Flechas */}
      <line x1="90" y1="130" x2="190" y2="110" stroke="#333" strokeWidth="0.7" strokeDasharray="5,5" />
      <line x1="260" y1="130" x2="190" y2="110" stroke="#333" strokeWidth="0.7" strokeDasharray="5,5" />
      <line x1="230" y1="240" x2="240" y2="210" stroke="#333" strokeWidth="0.7" />
      <line x1="360" y1="240" x2="290" y2="210" stroke="#333" strokeWidth="0.7" />

      {/* Composición */}
      <line x1="330" y1="160" x2="240" y2="160" stroke="#f57c00" strokeWidth="1.5" />
      <text x="280" y="150" fontSize="7" fontWeight="bold">contiene</text>
    </svg>
  );
}

export function DiagramObserver() {
  return (
    <svg viewBox="0 0 450 360" style={{ backgroundColor: '#f9f9f9', borderRadius: '8px', marginBottom: '0.5rem' }}>
      {/* Interfaz Observer */}
      <rect x="120" y="16" width="160" height="48" fill="#e1f5fe" stroke="#0277bd" strokeWidth="1.5" />
      <text x="200" y="35" textAnchor="middle" fontSize="7" fontStyle="italic">&lt;&lt;interface&gt;&gt;</text>
      <text x="200" y="40" textAnchor="middle" fontWeight="bold" fontSize="7">Observer</text>
      <text x="200" y="70" textAnchor="middle" fontSize="7">+ update(mensaje)</text>

      {/* Tema (Subject) */}
      <rect x="120" y="122" width="160" height="100" fill="#fff3e0" stroke="#f57c00" strokeWidth="1.5" />
      <text x="200" y="150" textAnchor="middle" fontWeight="bold" fontSize="8">Tema</text>
      <line x1="150" y1="165" x2="350" y2="165" stroke="#f57c00" strokeWidth="0.7" />
      <text x="128" y="177" fontSize="8">- observadores: List&lt;Observer&gt;</text>
      <text x="128" y="205" fontSize="8">+ agregarObservador(obs)</text>
      <text x="128" y="225" fontSize="8">+ notificar(mensaje)</text>

      {/* Observadores */}
      <rect x="20" y="280" width="80" height="50" fill="white" stroke="#333" strokeWidth="1.5" />
      <text x="70" y="300" textAnchor="middle" fontWeight="bold" fontSize="8">UsuarioObserver</text>
      <text x="70" y="320" textAnchor="middle" fontSize="7">implementa Observer</text>

      <rect x="120" y="280" width="80" height="50" fill="white" stroke="#333" strokeWidth="1.5" />
      <text x="128" y="300" textAnchor="middle" fontWeight="bold" fontSize="8">EmailObserver</text>
      <text x="128" y="320" textAnchor="middle" fontSize="7">implementa Observer</text>

      <rect x="280" y="280" width="80" height="50" fill="white" stroke="#333" strokeWidth="1.5" />
      <text x="330" y="300" textAnchor="middle" fontWeight="bold" fontSize="8">LogObserver</text>
      <text x="330" y="320" textAnchor="middle" fontSize="7">implementa Observer</text>

      {/* Flechas */}
      <line x1="70" y1="280" x2="200" y2="230" stroke="#666" strokeWidth="1.5" />
      <line x1="200" y1="280" x2="250" y2="230" stroke="#666" strokeWidth="1.5" />
      <line x1="330" y1="280" x2="280" y2="230" stroke="#666" strokeWidth="1.5" />

      {/* Notificación */}
      <text x="200" y="260" fontSize="8" fontWeight="bold" textAnchor="middle">notifica a todos</text>
    </svg>
  );
}

export function DiagramStrategy() {
  return (
    <svg viewBox="0 0 450 360" style={{ backgroundColor: '#f9f9f9', borderRadius: '8px', marginBottom: '0.5rem' }}>
      {/* Interfaz Strategy */}
      <rect x="120" y="16" width="160" height="48" fill="#e1f5fe" stroke="#0277bd" strokeWidth="1.5" />
      <text x="200" y="35" textAnchor="middle" fontSize="7" fontStyle="italic">&lt;&lt;interface&gt;&gt;</text>
      <text x="200" y="40" textAnchor="middle" fontWeight="bold" fontSize="7">EstrategiaDescuento</text>
      <text x="200" y="70" textAnchor="middle" fontSize="7">+ aplicar(monto)</text>

      {/* Estrategias concretas */}
      <rect x="20" y="122" width="110" height="56" fill="white" stroke="#333" strokeWidth="1.5" />
      <text x="75" y="150" textAnchor="middle" fontWeight="bold" fontSize="8">DescuentoVIP</text>
      <text x="75" y="175" textAnchor="middle" fontSize="7">20% descuento</text>

      <rect x="165" y="122" width="110" height="56" fill="white" stroke="#333" strokeWidth="1.5" />
      <text x="220" y="150" textAnchor="middle" fontWeight="bold" fontSize="8">DescuentoRegular</text>
      <text x="220" y="175" textAnchor="middle" fontSize="7">5% descuento</text>

      <rect x="310" y="122" width="110" height="56" fill="white" stroke="#333" strokeWidth="1.5" />
      <text x="365" y="150" textAnchor="middle" fontWeight="bold" fontSize="8">SinDescuento</text>
      <text x="365" y="175" textAnchor="middle" fontSize="7">Sin cambio</text>

      {/* Contexto */}
      <rect x="120" y="235" width="160" height="90" fill="#fff3e0" stroke="#f57c00" strokeWidth="1.5" />
      <text x="200" y="265" textAnchor="middle" fontWeight="bold" fontSize="8">Compra</text>
      <line x1="150" y1="275" x2="350" y2="275" stroke="#f57c00" strokeWidth="0.7" />
      <text x="128" y="295" fontSize="8">- estrategia: EstrategiaDescuento</text>
      <text x="128" y="315" fontSize="8">+ calcularTotal(subtotal)</text>

      {/* Flechas de implementación */}
      <line x1="75" y1="130" x2="190" y2="80" stroke="#333" strokeWidth="0.7" strokeDasharray="5,5" />
      <line x1="220" y1="130" x2="250" y2="80" stroke="#333" strokeWidth="0.7" strokeDasharray="5,5" />
      <line x1="365" y1="130" x2="310" y2="80" stroke="#333" strokeWidth="0.7" strokeDasharray="5,5" />

      {/* Flecha de composición */}
      <line x1="250" y1="240" x2="220" y2="200" stroke="#f57c00" strokeWidth="1.5" />
      <text x="210" y="235" fontSize="7" fontWeight="bold">usa</text>
    </svg>
  );
}

export function DiagramState() {
  return (
    <svg viewBox="0 0 450 360" style={{ backgroundColor: '#f9f9f9', borderRadius: '8px', marginBottom: '0.5rem' }}>
      {/* Interfaz Estado */}
      <rect x="120" y="16" width="160" height="48" fill="#e1f5fe" stroke="#0277bd" strokeWidth="1.5" />
      <text x="200" y="35" textAnchor="middle" fontSize="7" fontStyle="italic">&lt;&lt;interface&gt;&gt;</text>
      <text x="200" y="40" textAnchor="middle" fontWeight="bold" fontSize="7">Estado</text>
      <text x="200" y="70" textAnchor="middle" fontSize="7">+ siguiente(pedido), obtenerInfo()</text>

      {/* Estados */}
      <rect x="20" y="122" width="80" height="48" fill="white" stroke="#333" strokeWidth="1.5" />
      <text x="70" y="150" textAnchor="middle" fontWeight="bold" fontSize="8">EstadoPendiente</text>
      <text x="70" y="167" textAnchor="middle" fontSize="7">→ Confirmado</text>

      <rect x="120" y="122" width="80" height="48" fill="white" stroke="#333" strokeWidth="1.5" />
      <text x="128" y="150" textAnchor="middle" fontWeight="bold" fontSize="8">EstadoConfirmado</text>
      <text x="128" y="167" textAnchor="middle" fontSize="7">→ Envío</text>

      <rect x="280" y="122" width="80" height="48" fill="white" stroke="#333" strokeWidth="1.5" />
      <text x="330" y="150" textAnchor="middle" fontWeight="bold" fontSize="8">EstadoEnvío</text>
      <text x="330" y="167" textAnchor="middle" fontSize="7">→ Entregado</text>

      <rect x="410" y="122" width="70" height="48" fill="white" stroke="#333" strokeWidth="1.5" />
      <text x="445" y="160" textAnchor="middle" fontWeight="bold" fontSize="7">EstadoEntregado</text>

      {/* Contexto - Pedido */}
      <rect x="120" y="235" width="160" height="90" fill="#fff3e0" stroke="#f57c00" strokeWidth="1.5" />
      <text x="200" y="265" textAnchor="middle" fontWeight="bold" fontSize="8">Pedido</text>
      <line x1="150" y1="275" x2="350" y2="275" stroke="#f57c00" strokeWidth="0.7" />
      <text x="128" y="295" fontSize="8">- estado: Estado</text>
      <text x="128" y="315" fontSize="8">+ siguiente()</text>

      {/* Flechas de implementación */}
      <line x1="70" y1="130" x2="190" y2="80" stroke="#333" strokeWidth="0.7" strokeDasharray="5,5" />
      <line x1="200" y1="130" x2="250" y2="80" stroke="#333" strokeWidth="0.7" strokeDasharray="5,5" />
      <line x1="330" y1="130" x2="310" y2="80" stroke="#333" strokeWidth="0.7" strokeDasharray="5,5" />
      <line x1="445" y1="130" x2="330" y2="80" stroke="#333" strokeWidth="0.7" strokeDasharray="5,5" />

      {/* Flecha de composición */}
      <line x1="250" y1="240" x2="230" y2="200" stroke="#f57c00" strokeWidth="1.5" />

      {/* Transiciones */}
      <path d="M 120,160 Q 140,120 150,160" stroke="#666" strokeWidth="1.5" fill="none" strokeDasharray="3,3" />
      <path d="M 250,160 Q 270,120 280,160" stroke="#666" strokeWidth="1.5" fill="none" strokeDasharray="3,3" />
      <path d="M 380,160 Q 400,120 410,160" stroke="#666" strokeWidth="1.5" fill="none" strokeDasharray="3,3" />
    </svg>
  );
}

export function DiagramPrototype() {
  return (
    <svg viewBox="0 0 450 360" style={{ backgroundColor: '#f9f9f9', borderRadius: '8px', marginBottom: '0.5rem' }}>
      {/* Interfaz Cloneable */}
      <rect x="120" y="16" width="160" height="48" fill="#e1f5fe" stroke="#0277bd" strokeWidth="1.5" />
      <text x="200" y="35" textAnchor="middle" fontSize="7" fontStyle="italic">&lt;&lt;interface&gt;&gt;</text>
      <text x="200" y="40" textAnchor="middle" fontWeight="bold" fontSize="7">Cloneable</text>
      <text x="200" y="70" textAnchor="middle" fontSize="7">+ clonar(): Cloneable</text>

      {/* Prototipo Original */}
      <rect x="50" y="122" width="112" height="64" fill="white" stroke="#333" strokeWidth="1.5" />
      <text x="120" y="150" textAnchor="middle" fontWeight="bold" fontSize="7">Documento Original</text>
      <text x="120" y="175" fontSize="8" textAnchor="middle">- titulo: String</text>
      <text x="120" y="195" fontSize="8" textAnchor="middle">+ clonar()</text>

      {/* Clones */}
      <rect x="220" y="122" width="120" height="64" fill="white" stroke="#333" strokeWidth="1.5" />
      <text x="280" y="150" textAnchor="middle" fontWeight="bold" fontSize="7">Clon 1</text>
      <text x="280" y="175" fontSize="8" textAnchor="middle">(copia exacta)</text>
      <text x="280" y="195" fontSize="8" textAnchor="middle">Modificable</text>

      <rect x="360" y="122" width="120" height="64" fill="white" stroke="#333" strokeWidth="1.5" />
      <text x="336" y="150" textAnchor="middle" fontWeight="bold" fontSize="7">Clon 2</text>
      <text x="336" y="175" fontSize="8" textAnchor="middle">(copia exacta)</text>
      <text x="336" y="195" fontSize="8" textAnchor="middle">Modificable</text>

      {/* Flechas de implementación */}
      <line x1="120" y1="130" x2="190" y2="80" stroke="#333" strokeWidth="0.7" strokeDasharray="5,5" />

      {/* Flechas de clonación */}
      <line x1="190" y1="170" x2="220" y2="170" stroke="#f57c00" strokeWidth="1.5" />
      <polygon points="220,170 210,165 210,175" fill="#f57c00" />

      <line x1="190" y1="170" x2="360" y2="170" stroke="#f57c00" strokeWidth="1.5" />
      <polygon points="360,170 350,165 350,175" fill="#f57c00" />

      {/* Anotación */}
      <text x="200" y="280" fontSize="7" fontWeight="bold" textAnchor="middle">Clonación: crear copias sin saber la clase exacta</text>
      <text x="200" y="300" fontSize="8" textAnchor="middle">Ventaja: más rápido que crear desde cero</text>
      <text x="200" y="320" fontSize="8" textAnchor="middle">Útil para prototipos base reutilizables</text>
    </svg>
  );
}
