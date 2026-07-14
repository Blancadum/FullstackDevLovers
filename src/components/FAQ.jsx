import { useState } from 'react';
import './FAQ.css';

export function FAQ({ questions }) {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="faq">
      <h3>❓ Preguntas Frecuentes</h3>
      <div className="faq-items">
        {questions.map((item, index) => (
          <div key={index} className="faq-item">
            <button
              className={`faq-question ${openIndex === index ? 'active' : ''}`}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <span>{item.question}</span>
              <span className="faq-icon">{openIndex === index ? '−' : '+'}</span>
            </button>
            {openIndex === index && <div className="faq-answer">{item.answer}</div>}
          </div>
        ))}
      </div>
    </div>
  );
}
