import React from 'react';
import './App.css';
import Video from './components/videochat/video/Video';
import Chatbox from './components/videochat/chat/Chatbox';

function App() {
  return (
    <div className="App">
      <div className="main">
        <Video />
        <Chatbox />
      </div>
    </div>
  );
}

export default App;
