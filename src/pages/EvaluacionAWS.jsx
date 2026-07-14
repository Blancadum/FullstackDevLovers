import { useState } from 'react';
import { LessonTemplate } from '../components';
import { LessonNavigation } from '../components/LessonNavigation';
import { useBreadcrumb } from '../hooks/useBreadcrumb';
import { useLessonNavigation } from '../hooks/useLessonNavigation';

export function EvaluacionAWS() {
  const breadcrumbs = useBreadcrumb();
  const nav = useLessonNavigation();
  const [answers, setAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);

  const questions = [
    {
      id: 1,
      question: '¿Cuál es la diferencia principal entre EC2 y Lambda?',
      options: [
        'EC2 son máquinas virtuales permanentes, Lambda es computación sin servidor por demanda',
        'Lambda es más caro que EC2',
        'EC2 solo funciona para bases de datos',
        'No hay diferencia, son lo mismo'
      ],
      correct: 0,
      explanation: 'EC2 requiere que gestiones instancias que siempre están activas (o inactivas). Lambda ejecuta código solo cuando se invoca y pagas por milisegundos.'
    },
    {
      id: 2,
      question: '¿Qué es una Región en AWS?',
      options: [
        'Un servidor individual dentro de un centro de datos',
        'Ubicación geográfica con múltiples centros de datos independientes',
        'Una carpeta donde guardas archivos',
        'Un tipo de base de datos'
      ],
      correct: 1,
      explanation: 'Una región es una ubicación geográfica (ej: us-east-1, eu-west-1) que contiene múltiples Availability Zones para redundancia.'
    },
    {
      id: 3,
      question: '¿Qué servicio AWS proporciona almacenamiento de objetos ilimitado?',
      options: [
        'EC2',
        'RDS',
        'S3',
        'Lambda'
      ],
      correct: 2,
      explanation: 'S3 (Simple Storage Service) es el almacenamiento de objetos de AWS con capacidad ilimitada y durabilidad de 99.999999999%.'
    },
    {
      id: 4,
      question: '¿Cuál es el propósito principal de IAM (Identity & Access Management)?',
      options: [
        'Crear máquinas virtuales',
        'Gestionar usuarios, roles y permisos de acceso a recursos AWS',
        'Monitorear aplicaciones',
        'Crear bases de datos'
      ],
      correct: 1,
      explanation: 'IAM controla quién puede acceder a qué recursos en tu cuenta AWS mediante usuarios, roles y políticas de permisos.'
    },
    {
      id: 5,
      question: '¿Qué es una VPC (Virtual Private Cloud)?',
      options: [
        'Una máquina virtual en la nube',
        'Red privada en AWS donde controlas subnets, rutas y firewalls',
        'Un servicio de backup',
        'Un tipo de almacenamiento'
      ],
      correct: 1,
      explanation: 'Una VPC es tu red privada aislada en AWS donde puedes lanzar recursos EC2, bases de datos y otros servicios.'
    },
    {
      id: 6,
      question: '¿Cuál es el modelo de precios "On-Demand" en AWS?',
      options: [
        'Pagar por adelantado por 1-3 años con descuento',
        'Pagar por hora/segundo de uso sin compromiso a largo plazo',
        'Servicio gratuito para siempre',
        'Pagar un precio fijo mensual'
      ],
      correct: 1,
      explanation: 'On-Demand es flexible: pagas por cada hora o segundo que la instancia está activa, sin compromiso de tiempo.'
    },
    {
      id: 7,
      question: '¿Qué diferencia hay entre IaaS, PaaS y SaaS?',
      options: [
        'Solo IaaS es cloud, los otros no',
        'IaaS: infraestructura, PaaS: plataforma gestionada, SaaS: aplicaciones completamente gestionadas',
        'Son exactamente iguales',
        'Solo SaaS requiere credenciales'
      ],
      correct: 1,
      explanation: 'IaaS (EC2) te da infraestructura. PaaS (Elastic Beanstalk) incluye plataforma gestionada. SaaS (Salesforce, Office 365) es la app completa.'
    },
    {
      id: 8,
      question: '¿Qué es CloudWatch?',
      options: [
        'Un reloj para la nube',
        'Servicio de monitoreo que recopila logs, métricas y alarmas',
        'Un backup automático',
        'Un firewall'
      ],
      correct: 1,
      explanation: 'CloudWatch es el servicio central de monitoreo y logging de AWS. Puedes ver métricas, configurar alarmas y analizar logs.'
    },
    {
      id: 9,
      question: '¿Cuál es la ventaja de usar Reserved Instances?',
      options: [
        'Mejor rendimiento que On-Demand',
        'Acceso a regiones exclusivas',
        'Descuento de 30-70% vs On-Demand al pagar por adelantado 1-3 años',
        'No tienen ventajas'
      ],
      correct: 2,
      explanation: 'Reserved Instances ofrecen descuento significativo si sabes que necesitarás recursos durante 1 o 3 años.'
    },
    {
      id: 10,
      question: '¿Qué es RDS?',
      options: [
        'Un tipo de máquina virtual',
        'Red privada en AWS',
        'Servicio de bases de datos gestionado (MySQL, PostgreSQL, Oracle, SQL Server)',
        'Un almacenamiento temporal'
      ],
      correct: 2,
      explanation: 'RDS (Relational Database Service) gestiona la infraestructura de bases de datos. AWS se encarga de backups, parches y replicación.'
    }
  ];

  const handleAnswer = (questionId, optionIndex) => {
    setAnswers({
      ...answers,
      [questionId]: optionIndex
    });
  };

  const calculateScore = () => {
    let correct = 0;
    questions.forEach(q => {
      if (answers[q.id] === q.correct) {
        correct++;
      }
    });
    return correct;
  };

  const score = calculateScore();
  const percentage = Math.round((score / questions.length) * 100);

  return (
    <>
      <LessonTemplate
        breadcrumbs={breadcrumbs}
        sections={[
          {
            title: 'Test de Evaluación AWS',
            content: (
              <>
                <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '2rem', color: '#666' }}>
                  Prueba tus conocimientos sobre AWS con este test de autoevaluación. Contiene 10 preguntas sobre conceptos clave.
                  Responde todas las preguntas y haz clic en "Ver Resultados" para obtener tu puntuación.
                </p>

                <div style={{
                  display: 'grid',
                  gap: '2rem'
                }}>
                  {questions.map((question, idx) => (
                    <div key={`question-${question.id}`} style={{
                      backgroundColor: '#ffffff',
                      border: '2px solid #2196F3',
                      borderRadius: '12px',
                      padding: '2rem',
                      boxShadow: '0 2px 8px rgba(0,0,0,0.08)'
                    }}>
                      <h3 style={{ margin: '0 0 1.5rem 0', color: '#2196F3', fontSize: '1.1rem', fontWeight: '700' }}>
                        Pregunta {idx + 1} de {questions.length}
                      </h3>
                      <p style={{ margin: '0 0 1.5rem 0', fontSize: '1.05rem', fontWeight: '600', color: '#333' }}>
                        {question.question}
                      </p>

                      <div style={{ display: 'grid', gap: '0.8rem' }}>
                        {question.options.map((option, optionIdx) => (
                          <label key={`option-${question.id}-${optionIdx}`} style={{
                            display: 'flex',
                            alignItems: 'center',
                            padding: '1rem',
                            borderRadius: '8px',
                            border: `2px solid ${
                              answers[question.id] === optionIdx ? '#2196F3' : '#e0e0e0'
                            }`,
                            backgroundColor: answers[question.id] === optionIdx ? '#e3f2fd' : '#f9f9f9',
                            cursor: 'pointer',
                            transition: 'all 0.3s ease'
                          }}
                          onMouseEnter={(e) => {
                            if (answers[question.id] !== optionIdx) {
                              e.currentTarget.style.borderColor = '#90caf9';
                              e.currentTarget.style.backgroundColor = '#f5f5f5';
                            }
                          }}
                          onMouseLeave={(e) => {
                            if (answers[question.id] !== optionIdx) {
                              e.currentTarget.style.borderColor = '#e0e0e0';
                              e.currentTarget.style.backgroundColor = '#f9f9f9';
                            }
                          }}>
                            <input
                              type="radio"
                              name={`question-${question.id}`}
                              value={optionIdx}
                              checked={answers[question.id] === optionIdx}
                              onChange={() => handleAnswer(question.id, optionIdx)}
                              style={{ marginRight: '1rem', width: '20px', height: '20px', cursor: 'pointer' }}
                            />
                            <span style={{ fontSize: '0.95rem', color: '#333' }}>{option}</span>
                          </label>
                        ))}
                      </div>

                      {showResults && (
                        <div style={{
                          marginTop: '1.5rem',
                          padding: '1.2rem',
                          borderRadius: '8px',
                          backgroundColor: answers[question.id] === question.correct ? '#e8f5e9' : '#ffebee',
                          borderLeft: `4px solid ${answers[question.id] === question.correct ? '#4CAF50' : '#f44336'}`
                        }}>
                          <p style={{ margin: '0 0 0.5rem 0', fontWeight: '700', color: answers[question.id] === question.correct ? '#2e7d32' : '#c62828' }}>
                            {answers[question.id] === question.correct ? '✅ Correcto' : '❌ Incorrecto'}
                          </p>
                          <p style={{ margin: 0, fontSize: '0.95rem', color: '#333' }}>
                            <strong>Explicación:</strong> {question.explanation}
                          </p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                <div style={{ marginTop: '3rem', textAlign: 'center' }}>
                  <button
                    onClick={() => setShowResults(!showResults)}
                    style={{
                      backgroundColor: showResults ? '#FF9800' : '#2196F3',
                      color: '#ffffff',
                      border: 'none',
                      padding: '1rem 2.5rem',
                      fontSize: '1.1rem',
                      fontWeight: '700',
                      borderRadius: '8px',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      boxShadow: '0 4px 12px rgba(33, 150, 243, 0.3)'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-2px)';
                      e.currentTarget.style.boxShadow = '0 6px 20px rgba(33, 150, 243, 0.4)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = '0 4px 12px rgba(33, 150, 243, 0.3)';
                    }}
                  >
                    {showResults ? 'Ocultar Resultados' : 'Ver Resultados'}
                  </button>
                </div>

                {showResults && (
                  <div style={{
                    marginTop: '2rem',
                    padding: '2rem',
                    backgroundColor: '#f5f5f5',
                    borderRadius: '12px',
                    textAlign: 'center',
                    border: `3px solid ${percentage >= 80 ? '#4CAF50' : percentage >= 60 ? '#FF9800' : '#f44336'}`
                  }}>
                    <h2 style={{ margin: '0 0 1rem 0', fontSize: '2rem', color: percentage >= 80 ? '#2e7d32' : percentage >= 60 ? '#E65100' : '#c62828' }}>
                      Tu Puntuación: {score}/{questions.length}
                    </h2>
                    <p style={{ margin: '0 0 1rem 0', fontSize: '1.5rem', fontWeight: '700', color: percentage >= 80 ? '#4CAF50' : percentage >= 60 ? '#FF9800' : '#f44336' }}>
                      {percentage}%
                    </p>
                    <p style={{ margin: 0, fontSize: '1.05rem', color: '#666' }}>
                      {percentage >= 80 && '¡Excelente! Tienes sólidos conocimientos de AWS.'}
                      {percentage >= 60 && percentage < 80 && 'Buen trabajo, pero hay conceptos para reforzar.'}
                      {percentage < 60 && 'Necesitas repasar más sobre AWS. Revisa el léxico y conceptos.'}
                    </p>
                  </div>
                )}
              </>
            )
          }
        ]}
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
