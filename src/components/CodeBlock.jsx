import { useEffect, useRef } from 'react';
import './CodeBlock.css';

export function CodeBlock({ code, language = 'java' }) {
  const codeRef = useRef(null);

  useEffect(() => {
    if (codeRef.current && typeof window !== 'undefined' && window.hljs) {
      const codeElement = codeRef.current.querySelector('code');
      if (codeElement) {
        delete codeElement.dataset.highlighted;
        window.hljs.highlightElement(codeElement);
      }
    }
  }, [code]);

  return (
    <pre ref={codeRef} className="code-block">
      <code className={`language-${language}`}>{code}</code>
    </pre>
  );
}
