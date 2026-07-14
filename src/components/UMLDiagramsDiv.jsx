import './UMLDiagrams.css';

export function DiagramSingleton() {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', alignItems: 'start' }}>
      <div className="uml-class">
        <div className="uml-class-header">
          <h4>DatabaseConnection</h4>
        </div>
        <div className="uml-class-section">
          <p>- instance: DatabaseConnection</p>
          <p>- connection: String</p>
        </div>
        <div className="uml-class-section">
          <p>+ getInstance(): DatabaseConnection</p>
          <p>+ executeQuery(sql: String)</p>
        </div>
      </div>
      <div style={{ padding: '1rem', backgroundColor: '#fff3cd', borderRadius: '4px', border: '1px solid #ffc107', height: 'fit-content' }}>
        <p style={{ margin: '0.5rem 0', fontSize: '0.85rem', fontWeight: 'bold' }}>Una única instancia</p>
        <p style={{ margin: '0.5rem 0', fontSize: '0.85rem' }}>Acceso global mediante getInstance()</p>
      </div>
    </div>
  );
}

export function DiagramFactory() {
  return (
    <div className="uml-diagram">
      {/* Interfaz */}
      <div className="uml-interface">
        <div className="uml-interface-label">&lt;&lt;interface&gt;&gt;</div>
        <div className="uml-interface-name">Transporte</div>
        <div className="uml-interface-method">+ enviar(paquete)</div>
      </div>

      {/* Implementaciones */}
      <div className="uml-implementations">
        <div className="uml-class">
          <div className="uml-class-header">
            <h4>TransportePorTierra</h4>
          </div>
          <div className="uml-class-section">
            <p>+ enviar(paquete)</p>
          </div>
        </div>

        <div className="uml-class">
          <div className="uml-class-header">
            <h4>TransportePorAire</h4>
          </div>
          <div className="uml-class-section">
            <p>+ enviar(paquete)</p>
          </div>
        </div>

        <div className="uml-class">
          <div className="uml-class-header">
            <h4>TransportePorMar</h4>
          </div>
          <div className="uml-class-section">
            <p>+ enviar(paquete)</p>
          </div>
        </div>
      </div>

      {/* Factory */}
      <div className="uml-factory">
        <div className="uml-factory-header">TransporteFactory</div>
        <div className="uml-factory-method">+ crearTransporte(tipo): Transporte</div>
      </div>
    </div>
  );
}

export function DiagramBuilder() {
  return (
    <div className="uml-diagram">
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
        {/* Clase Usuario */}
        <div className="uml-class">
          <div className="uml-class-header">
            <h4>Usuario</h4>
          </div>
          <div className="uml-class-section">
            <p>- nombre: String</p>
            <p>- email: String</p>
            <p>- edad: int</p>
            <p>- telefono: String</p>
          </div>
        </div>

        {/* Builder */}
        <div className="uml-class">
          <div className="uml-class-header">
            <h4>UsuarioBuilder</h4>
          </div>
          <div className="uml-class-section">
            <p>- nombre: String</p>
            <p>- email: String</p>
          </div>
          <div className="uml-class-section">
            <p>+ nombre(String): this</p>
            <p>+ email(String): this</p>
            <p>+ edad(int): this</p>
            <p>+ build(): Usuario</p>
          </div>
        </div>
      </div>

      <div style={{ marginTop: '1.5rem', padding: '1rem', backgroundColor: '#f5f5f5', borderRadius: '4px' }}>
        <p style={{ fontSize: '0.9rem', fontWeight: '700', marginBottom: '0.75rem' }}>Construcción paso a paso:</p>
        <p style={{ fontSize: '0.85rem', margin: '0.4rem 0', fontFamily: 'monospace' }}>new Usuario.UsuarioBuilder()</p>
        <p style={{ fontSize: '0.85rem', margin: '0.4rem 0', fontFamily: 'monospace' }}>.nombre("Juan")</p>
        <p style={{ fontSize: '0.85rem', margin: '0.4rem 0', fontFamily: 'monospace' }}>.email("juan@test.com")</p>
      </div>
    </div>
  );
}

export function DiagramDecorator() {
  return (
    <div className="uml-diagram">
      {/* Interfaz Cafe */}
      <div className="uml-interface">
        <div className="uml-interface-label">&lt;&lt;interface&gt;&gt;</div>
        <div className="uml-interface-name">Cafe</div>
        <div className="uml-interface-method">+ getCosto(), getDescripcion()</div>
      </div>

      {/* Implementaciones */}
      <div className="uml-implementations">
        <div className="uml-class">
          <div className="uml-class-header">
            <h4>CafeSimple</h4>
          </div>
          <div className="uml-class-section">
            <p>+ getCosto(): double</p>
            <p>+ getDescripcion(): String</p>
          </div>
        </div>

        <div className="uml-class">
          <div className="uml-class-header">
            <h4>CafeConLeche</h4>
          </div>
          <div className="uml-class-section">
            <p>- cafe: Cafe</p>
            <p>+ getCosto(): double</p>
            <p>+ getDescripcion(): String</p>
          </div>
        </div>

        <div className="uml-class">
          <div className="uml-class-header">
            <h4>CafeConCanela</h4>
          </div>
          <div className="uml-class-section">
            <p>- cafe: Cafe</p>
            <p>+ getCosto(): double</p>
            <p>+ getDescripcion(): String</p>
          </div>
        </div>
      </div>

      <div style={{ marginTop: '1rem', padding: '1rem', backgroundColor: '#f5f5f5', borderRadius: '4px', textAlign: 'center' }}>
        <p style={{ fontSize: '0.85rem', fontWeight: '700', margin: '0.4rem 0' }}>Composición dinámica:</p>
        <p style={{ fontSize: '0.85rem', margin: '0.4rem 0', fontFamily: 'monospace' }}>cafe = new CafeConLeche(cafe)</p>
        <p style={{ fontSize: '0.85rem', margin: '0.4rem 0', fontFamily: 'monospace' }}>cafe = new CafeConCanela(cafe)</p>
      </div>
    </div>
  );
}

export function DiagramObserver() {
  return (
    <div className="uml-diagram">
      {/* Interfaz Observer */}
      <div className="uml-interface">
        <div className="uml-interface-label">&lt;&lt;interface&gt;&gt;</div>
        <div className="uml-interface-name">Observer</div>
        <div className="uml-interface-method">+ update(mensaje)</div>
      </div>

      {/* Tema (Subject) */}
      <div className="uml-class" style={{ minWidth: '280px', marginBottom: '1rem' }}>
        <div className="uml-class-header">
          <h4>Tema</h4>
        </div>
        <div className="uml-class-section">
          <p>- observadores: List&lt;Observer&gt;</p>
        </div>
        <div className="uml-class-section">
          <p>+ suscribir(observer): void</p>
          <p>+ desuscribir(observer): void</p>
          <p>+ notificar(mensaje): void</p>
        </div>
      </div>

      {/* Observadores */}
      <div className="uml-implementations">
        <div className="uml-class">
          <div className="uml-class-header">
            <h4>ObservadorA</h4>
          </div>
          <div className="uml-class-section">
            <p>+ update(mensaje)</p>
          </div>
        </div>

        <div className="uml-class">
          <div className="uml-class-header">
            <h4>ObservadorB</h4>
          </div>
          <div className="uml-class-section">
            <p>+ update(mensaje)</p>
          </div>
        </div>
      </div>

      <div style={{ marginTop: '1rem', textAlign: 'center', fontSize: '0.85rem', fontWeight: '700', color: '#666' }}>
        Tema notifica a todos sus observadores
      </div>
    </div>
  );
}

export function DiagramStrategy() {
  return (
    <div className="uml-diagram">
      {/* Interfaz Strategy */}
      <div className="uml-interface">
        <div className="uml-interface-label">&lt;&lt;interface&gt;&gt;</div>
        <div className="uml-interface-name">EstrategiaDescuento</div>
        <div className="uml-interface-method">+ aplicar(monto): double</div>
      </div>

      {/* Estrategias */}
      <div className="uml-implementations">
        <div className="uml-class">
          <div className="uml-class-header">
            <h4>DescuentoPorcentaje</h4>
          </div>
          <div className="uml-class-section">
            <p>+ aplicar(monto): double</p>
          </div>
        </div>

        <div className="uml-class">
          <div className="uml-class-header">
            <h4>DescuentoFijo</h4>
          </div>
          <div className="uml-class-section">
            <p>+ aplicar(monto): double</p>
          </div>
        </div>

        <div className="uml-class">
          <div className="uml-class-header">
            <h4>SinDescuento</h4>
          </div>
          <div className="uml-class-section">
            <p>+ aplicar(monto): double</p>
          </div>
        </div>
      </div>

      <div style={{ marginTop: '1rem', padding: '1rem', backgroundColor: '#f5f5f5', borderRadius: '4px' }}>
        <p style={{ fontSize: '0.85rem', fontWeight: '700', margin: '0.4rem 0' }}>Cliente usa estrategia en tiempo de ejecución</p>
      </div>
    </div>
  );
}

export function DiagramState() {
  return (
    <div className="uml-diagram">
      {/* Interfaz Estado */}
      <div className="uml-interface">
        <div className="uml-interface-label">&lt;&lt;interface&gt;&gt;</div>
        <div className="uml-interface-name">Estado</div>
        <div className="uml-interface-method">+ siguiente(pedido), obtenerInfo()</div>
      </div>

      {/* Estados */}
      <div className="uml-implementations">
        <div className="uml-class">
          <div className="uml-class-header">
            <h4>EstadoPendiente</h4>
          </div>
          <div className="uml-class-section">
            <p>+ siguiente(): Estado</p>
          </div>
        </div>

        <div className="uml-class">
          <div className="uml-class-header">
            <h4>EstadoEnvío</h4>
          </div>
          <div className="uml-class-section">
            <p>+ siguiente(): Estado</p>
          </div>
        </div>

        <div className="uml-class">
          <div className="uml-class-header">
            <h4>EstadoEntregado</h4>
          </div>
          <div className="uml-class-section">
            <p>+ siguiente(): Estado</p>
          </div>
        </div>
      </div>

      <div style={{ marginTop: '1rem', padding: '1rem', backgroundColor: '#f5f5f5', borderRadius: '4px', textAlign: 'center' }}>
        <p style={{ fontSize: '0.85rem', fontWeight: '700' }}>Transiciones de estado en una orden</p>
      </div>
    </div>
  );
}

export function DiagramPrototype() {
  return (
    <div className="uml-diagram">
      {/* Interfaz Cloneable */}
      <div className="uml-interface">
        <div className="uml-interface-label">&lt;&lt;interface&gt;&gt;</div>
        <div className="uml-interface-name">Cloneable</div>
        <div className="uml-interface-method">+ clonar(): Cloneable</div>
      </div>

      {/* Prototipos */}
      <div className="uml-implementations">
        <div className="uml-class">
          <div className="uml-class-header">
            <h4>Usuario</h4>
          </div>
          <div className="uml-class-section">
            <p>- nombre: String</p>
            <p>- email: String</p>
          </div>
          <div className="uml-class-section">
            <p>+ clonar(): Usuario</p>
          </div>
        </div>

        <div className="uml-class">
          <div className="uml-class-header">
            <h4>Producto</h4>
          </div>
          <div className="uml-class-section">
            <p>- id: int</p>
            <p>- nombre: String</p>
            <p>- precio: double</p>
          </div>
          <div className="uml-class-section">
            <p>+ clonar(): Producto</p>
          </div>
        </div>
      </div>

      <div style={{ marginTop: '1rem', padding: '1rem', backgroundColor: '#f5f5f5', borderRadius: '4px' }}>
        <p style={{ fontSize: '0.85rem', fontWeight: '700', marginBottom: '0.75rem' }}>Clonación de objetos:</p>
        <p style={{ fontSize: '0.85rem', margin: '0.4rem 0', fontFamily: 'monospace' }}>Usuario user2 = user1.clonar()</p>
      </div>
    </div>
  );
}
