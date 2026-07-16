import { useEffect, useRef } from 'react';
import './CodeBlock.css';

export function CodeBlock({ code, language = 'bash', title = null }) {
  const codeRef = useRef(null);

  useEffect(() => {
    if (codeRef.current && typeof window !== 'undefined' && window.hljs) {
      const codeElement = codeRef.current.querySelector('code');
      if (codeElement) {
        codeElement.className = `language-${language} hljs`;
        codeElement.textContent = code;

        // Force rehighlight even if already highlighted
        delete codeElement.dataset.highlighted;
        window.hljs.highlightElement(codeElement);
      }
    }
  }, [code, language]);

  return (
    <div className="code-block-wrapper">
      {title && <div className="code-block-title">{title}</div>}
      <pre ref={codeRef} className={`code-block language-${language}`}>
        <code className={`language-${language} hljs`}>{code}</code>
      </pre>
    </div>
  );
}
