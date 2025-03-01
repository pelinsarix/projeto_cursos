import React, { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
import './styles.css';

const VideoPlayer = ({ url, onEnded }) => {
  const [hasError, setHasError] = useState(false);
  
  useEffect(() => {
    // Resetar o estado de erro quando a URL mudar
    setHasError(false);
    
    // Log da URL do vídeo para depuração
    console.log("URL do vídeo recebida:", url);
    console.log("Tipo da URL:", typeof url);
    
    // Verificar se a URL é válida
    if (!url) {
      console.error("URL do vídeo está vazia ou indefinida!");
    }
    
    // Verificar se o ReactPlayer pode reproduzir esta URL
    console.log("ReactPlayer pode reproduzir esta URL?", ReactPlayer.canPlay(url));
  }, [url]);

  const handleError = (e) => {
    console.error("Erro ao carregar o vídeo:", url);
    console.error("Detalhes do erro:", e);
    setHasError(true);
  };
  
  const handleReady = () => {
    console.log("Vídeo pronto para reprodução:", url);
  };
  
  const handleEnded = () => {
    console.log("Reprodução do vídeo concluída");
    if (onEnded) {
      onEnded();
    }
  };

  if (hasError) {
    // Fallback para player nativo em caso de erro
    return (
      <div className="video-container">
        <div className="fallback-message">
          <p>Houve um problema ao carregar o vídeo com o player personalizado.</p>
          <p>Usando player nativo:</p>
        </div>
        <video 
          src={url} 
          controls 
          className="native-video-player" 
          onEnded={handleEnded}
        />
      </div>
    );
  }

  return (
    <div className="video-container">
      {/* Player principal - usando ReactPlayer */}
      <div className="react-player-wrapper">
        <ReactPlayer
          url={url}
          width="100%"
          height="100%"
          controls={true}
          playing={false}
          onError={handleError}
          onReady={handleReady}
          onEnded={handleEnded}
          config={{
            file: {
              attributes: {
                controlsList: 'nodownload',
              },
            },
            youtube: {
              playerVars: { 
                modestbranding: 1 
              }
            },
          }}
          className="react-player"
        />
      </div>
      
      {/* Exibir a URL para depuração */}
      <div className="video-debug">
        URL do vídeo: <code>{url || "URL não definida"}</code>
      </div>
      
      {/* Fallback direto para URLs específicas */}
      {url && url.endsWith('.mp4') && (
        <div className="fallback-container">
          <details>
            <summary>Se o vídeo não carregar, clique aqui para abrir player alternativo</summary>
            <video 
              src={url} 
              controls 
              className="native-video-player" 
              onEnded={handleEnded}
            />
          </details>
        </div>
      )}
    </div>
  );
};

export default VideoPlayer;
