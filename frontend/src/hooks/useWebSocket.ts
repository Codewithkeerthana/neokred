import { useEffect, useState } from 'react';
import { io } from 'socket.io-client';

const socket = io('http://localhost:5000'); 

const useWebSocket = () => {
  const [html, setHtml] = useState<string>('');

  useEffect(() => {
    socket.on('html-update', (data: string) => {
      setHtml(data);
    });
    return () => {
      socket.off('html-update');
    };
  }, []);

  const sendMarkdown = (markdown: string) => {
    socket.emit('markdown-update', markdown);
  };

  return { html, sendMarkdown };
};

export default useWebSocket;
