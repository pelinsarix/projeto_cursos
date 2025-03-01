import React from 'react';
import ReactMarkdown from 'react-markdown';
import './styles.css';

const MarkdownRenderer = ({ content }) => {
  if (!content) return null;
  
  return (
    <div className="markdown-content">
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  );
};

export default MarkdownRenderer;
