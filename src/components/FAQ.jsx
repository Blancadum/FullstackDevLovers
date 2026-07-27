import { useState } from 'react';
import './FAQ.css';

export function FAQ({ title = 'Preguntas Frecuentes', questions = [] }) {
  const [openIndex, setOpenIndex] = useState(null);

  if (!questions || questions.length === 0) {
    return null;
  }

  return (
    <section className="faq-section">
      <div className="faq-container">
        {title && <h2 className="faq-title">{title}</h2>}
        <div className="faq-list">
          {questions.map((item, index) => (
            <div key={index} className="faq-item">
              <button
                className="faq-question"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                type="button"
                aria-expanded={openIndex === index}
              >
                <span className="faq-question-text">{item.question}</span>
                <span className="faq-icon">{openIndex === index ? '−' : '+'}</span>
              </button>
              {openIndex === index && (
                <div className="faq-answer" role="region">
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
