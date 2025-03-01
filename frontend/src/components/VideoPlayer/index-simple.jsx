import React, { useRef, useEffect } from 'react';
import './styles-simple.css';

const SimpleVideoPlayer = ({ url, onEnded }) => {
  const videoRef = useRef(null);
  
  useEffect(() => {
    const video = videoRef.current;
    
    // Carregar progresso salvo
    const savedProgress = localStorage.getItem(`video-progress-${url}`);
    if (savedProgress) {
      video.currentTime = parseFloat(savedProgress);
    }
    
    // Salvar progresso a cada 1 segundo
    const intervalId = setInterval(() => {
      if (video && !video.paused) {
        localStorage.setItem(`video-progress-${url}`, video.currentTime.toString());
      }
    }, 1000);
    
    return () => clearInterval(intervalId);
  }, [url]);
  
  const handleVideoEnded = () => {
    // Limpar progresso salvo quando o vídeo terminar
    localStorage.removeItem(`video-progress-${url}`);
    
    if (onEnded) {
      onEnded();
    }
  };

  return (
    <div className="simple-video-container">
      <video 
        ref={videoRef}
        src={url} 
        controls 
        onEnded={handleVideoEnded}
        className="simple-video-player"
      />
    </div>
  );
};

export default SimpleVideoPlayer;
