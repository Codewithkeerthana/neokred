import React, { useEffect } from 'react';
import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css';

interface PreviewProps {
  html: string;
}

const Preview: React.FC<PreviewProps> = ({ html }) => {
  useEffect(() => {
    Prism.highlightAll(); 
  }, [html]);

  return (
    <div className="preview-container">
      <h2 className="section-title">Live Preview</h2>
      <div
        className="markdown-preview"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </div>
  );
};

export default Preview;
