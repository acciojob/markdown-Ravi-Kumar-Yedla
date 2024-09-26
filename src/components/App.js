import React, { useState, useEffect } from 'react';
// import { marked } from 'marked'; // Ensure this line is uncommented
import marked from 'marked'
import './App.css'; 

const App = () => {
  const [markdown, setMarkdown] = useState(' Hello Markdown!# Heading');
  const [previewContent, setPreviewContent] = useState('');

  useEffect(() => {
    // Convert Markdown to HTML
    const renderer = marked(markdown);
    setPreviewContent(renderer);
  }, [markdown]);

  return (
    <div className="app">
      <div className="editor">
        <textarea
          className="textarea"
          value={markdown}
          onChange={(e) => setMarkdown(e.target.value)}
          rows="10"
          placeholder="Write your markdown here..."
        />
      </div>
      <div className="preview">
        {previewContent ? (
          <div dangerouslySetInnerHTML={{ __html: previewContent }} />
        ) : (
          <div className="loading">Loading...</div>
        )}
      </div>
    </div>
  );
};

export default App;
