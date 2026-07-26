import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { orientadorQuestions, stackRecommendations } from '../data/orientadorQuestions';
import './OrientadorSection.css';

export function OrientadorSection() {
  const navigate = useNavigate();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [stackVotes, setStackVotes] = useState({
    estatico: 0,
    ecommerce: 0,
    interactiva: 0,
    plataforma: 0
  });
  const [showResult, setShowResult] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState({});

  const currentQuestion = orientadorQuestions[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === orientadorQuestions.length - 1;

  const handleOptionClick = (option) => {
    // Vote for the stack
    const newVotes = { ...stackVotes };
    newVotes[option.stack] += 1;

    // Track selected option for this question
    const newSelectedOptions = { ...selectedOptions };
    newSelectedOptions[currentQuestion.id] = option;

    setStackVotes(newVotes);
    setSelectedOptions(newSelectedOptions);

    // Move to next question or show result
    if (isLastQuestion) {
      setShowResult(true);
    } else {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const getRecommendedStack = () => {
    let maxVotes = 0;
    let recommendedStack = null;

    Object.entries(stackVotes).forEach(([stack, votes]) => {
      if (votes > maxVotes) {
        maxVotes = votes;
        recommendedStack = stack;
      }
    });

    return recommendedStack;
  };

  const handleRestart = () => {
    setCurrentQuestionIndex(0);
    setStackVotes({
      estatico: 0,
      ecommerce: 0,
      interactiva: 0,
      plataforma: 0
    });
    setShowResult(false);
    setSelectedOptions({});
  };

  const handleNavigateToCategory = (link) => {
    navigate(link);
  };

  if (showResult) {
    const recommendedStackId = getRecommendedStack();
    const recommendation = stackRecommendations[recommendedStackId];

    return (
      <section id="orientador" className="orientador-section">
        <div className="orientador-container">
          <div className="result-card">
            <div className="result-header">
              <div className="result-emoji">{recommendation.emoji}</div>
              <h2>Stack Recomendado</h2>
            </div>

            <div className="recommendation-box">
              <h3>{recommendation.name}</h3>
              <p>{recommendation.description}</p>

              <div className="usecase-section">
                <strong>Casos de uso:</strong>
                <p>{recommendation.useCase}</p>
              </div>

              {/* Frontend Stack */}
              <div className="tech-stack-section">
                <h4>Frontend</h4>
                <div className="tech-tags">
                  {recommendation.frontend.tech.map((tech, index) => (
                    <span key={index} className="tech-tag frontend-tag">
                      {tech}
                    </span>
                  ))}
                </div>
                <p className="tech-description">{recommendation.frontend.description}</p>
                <div className="tech-links">
                  {recommendation.frontend.links.map((link, index) => (
                    <button
                      key={index}
                      className="tech-link-button"
                      onClick={() => handleNavigateToCategory(link.href)}
                    >
                      {link.text}
                    </button>
                  ))}
                </div>
              </div>

              {/* Backend Stack */}
              {recommendation.backend && (
                <div className="tech-stack-section">
                  <h4>Backend</h4>
                  <div className="tech-tags">
                    {recommendation.backend.tech.map((tech, index) => (
                      <span key={index} className="tech-tag backend-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <p className="tech-description">{recommendation.backend.description}</p>
                  <div className="tech-links">
                    {recommendation.backend.links.map((link, index) => (
                      <button
                        key={index}
                        className="tech-link-button"
                        onClick={() => handleNavigateToCategory(link.href)}
                      >
                        {link.text}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Database Stack */}
              {recommendation.database && (
                <div className="tech-stack-section">
                  <h4>Datos</h4>
                  <div className="tech-tags">
                    {recommendation.database.tech.map((tech, index) => (
                      <span key={index} className="tech-tag database-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <p className="tech-description">{recommendation.database.description}</p>
                  <div className="tech-links">
                    {recommendation.database.links.map((link, index) => (
                      <button
                        key={index}
                        className="tech-link-button"
                        onClick={() => handleNavigateToCategory(link.href)}
                      >
                        {link.text}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="result-actions">
              <button className="cta-button secondary" onClick={handleRestart}>
                Repetir Quiz
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  const progressPercentage = ((currentQuestionIndex + 1) / orientadorQuestions.length) * 100;

  return (
    <section id="orientador" className="orientador-section">
      <div className="orientador-container">
        <div className="orientador-header">
          <h2>Encuentra Tu Stack Ideal</h2>
          <p>Responde 3 preguntas y descubre la pila tecnológica perfecta para tu proyecto</p>
        </div>

        <div className="progress-section">
          <div className="progress-info">
            <span className="progress-text">
              Pregunta {currentQuestionIndex + 1} de {orientadorQuestions.length}
            </span>
            <span className="progress-percentage">{Math.round(progressPercentage)}%</span>
          </div>
          <div className="progress-bar-container">
            <div
              className="progress-bar-fill"
              style={{ width: `${progressPercentage}%` }}
            />
          </div>
        </div>

        <div className="quiz-card">
          <h3 className="question-title">{currentQuestion.question}</h3>

          <div className="options-grid">
            {currentQuestion.options.map((option, index) => (
              <button
                key={index}
                className="option-button"
                onClick={() => handleOptionClick(option)}
              >
                <span className="option-text">{option.text}</span>
                <span className="option-arrow">→</span>
              </button>
            ))}
          </div>
        </div>

        <div className="quiz-footer">
          <p className="quiz-tip">
            {currentQuestionIndex === 0
              ? 'Elige la opción que mejor describe tu proyecto'
              : 'Continúa respondiendo según las necesidades de tu proyecto'}
          </p>
        </div>
      </div>
    </section>
  );
}
