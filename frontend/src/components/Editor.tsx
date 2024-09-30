import React, { useState } from 'react';

interface EditorProps {
  onMarkdownChange: (markdown: string) => void;
}

const Editor: React.FC<EditorProps> = ({ onMarkdownChange }) => {
  const [markdown, setMarkdown] = useState<string>('');

  const handleMarkdownChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = event.target.value;
    setMarkdown(value);
    onMarkdownChange(value); 
  };

  return (
    <div className="editor-container">
      <h2 className="section-title"> Markdown Editor</h2>
      <textarea
        value={markdown}
        onChange={handleMarkdownChange} 
        placeholder="Enter the Markdown..."
      />
    </div>
  );
};

export default Editor;
