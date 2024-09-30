import React from 'react';
import Editor from './components/Editor';
import Preview from './components/Preview';
import useWebSocket from './hooks/useWebSocket';
import './App.css';

const App: React.FC = () => {
  const { html, sendMarkdown } = useWebSocket(); 

  return (
    <div className="container">
      <h1>Real Time Editor</h1>
      <div className="flex">
        <Editor onMarkdownChange={sendMarkdown} /> 
        <Preview html={html} />
      </div>
    </div>
  );
};

export default App;
