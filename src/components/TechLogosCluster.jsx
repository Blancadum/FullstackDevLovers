/**
 * Cluster de logos de tecnologías principales
 * Muestra las tecnologías clave de la plataforma
 */

const TECH_LOGOS = [
  {
    name: 'Java',
    logo: '/images/logos/java-logo.png',
    color: '#FF6600'
  },
  {
    name: 'Spring Boot',
    logo: '/images/logos/pringboot.png',
    color: '#6DB33F'
  },
  {
    name: 'Docker',
    logo: '/images/logos/docker-lgo.png',
    color: '#2496ED'
  },
  {
    name: 'Kubernetes',
    logo: '/images/logos/kubernetes-logo.png',
    color: '#326CE5'
  },
  {
    name: 'AWS',
    logo: '/images/logos/aws.png',
    color: '#FF9900'
  },
  {
    name: 'SQL/MySQL',
    logo: '/images/logos/mysql.png',
    color: '#00758F'
  },
  {
    name: 'Git',
    logo: '/images/logos/git-logo.png',
    color: '#F1502F'
  }
];

export function TechLogosCluster() {
  return (
    <section className="tech-logos-cluster">
      <div className="container">
        <p className="cluster-title">Tecnologías que dominarás</p>
        <div className="logos-grid">
          {TECH_LOGOS.map((tech) => (
            <div key={tech.name} className="tech-logo-item">
              <div className="tech-logo-wrapper">
                <img
                  src={tech.logo}
                  alt={tech.name}
                  title={tech.name}
                  className={tech.name === 'Kubernetes' ? 'logo-kubernetes' : ''}
                />
              </div>
              <span className="tech-name">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
