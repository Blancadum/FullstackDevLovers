import { useEffect, useRef } from 'react';
import { useIsDark } from '../hooks/useIsDark';
import './CodeBlock.css';

export function CodeBlock({ code, language = 'bash', title = null }) {
  const codeRef = useRef(null);
  const isDark = useIsDark();

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

  const themeClass = isDark ? 'dracula-dark' : 'dracula-light';

  return (
    <div className={`code-block-wrapper ${themeClass}`}>
      {title && <div className="code-block-title">{title}</div>}
      <pre ref={codeRef} className={`code-block language-${language}`}>
        <code className={`language-${language} hljs`}>{code}</code>
      </pre>
    </div>
  );
}
