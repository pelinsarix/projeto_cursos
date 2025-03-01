import React, { useEffect } from 'react';
import { useCursoContext } from '../../contexts/CursoContext';
import VideoPlayer from '../VideoPlayer';
import MarkdownRenderer from '../MarkdownRenderer';
import { Clock, Check, ChevronLeft, ChevronRight, Award } from 'react-feather';
import './styles.css';

const ContentViewer = ({ conteudoId }) => {
  const { 
    getConteudoById, 
    markContentAsCompleted, 
    completedContent, 
    conteudos,
    currentCurso,
    checkCourseCompletion
  } = useCursoContext();
  
  const conteudo = getConteudoById(parseInt(conteudoId, 10));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [conteudoId]);

  if (!conteudo) {
    return (
      <div className="content-container">
        <div className="content-not-found">
          <h2>Conteúdo não encontrado</h2>
          <p>O conteúdo solicitado não está disponível ou foi removido.</p>
        </div>
      </div>
    );
  }

  const handleComplete = () => {
    markContentAsCompleted(conteudo.id);
  };

  const isCompleted = completedContent.includes(conteudo.id);
  const isCourseCompleted = checkCourseCompletion();

  // Encontrar conteúdos anterior e próximo
  const currentIndex = conteudos.findIndex(c => c.id === conteudo.id);
  const prevConteudo = currentIndex > 0 ? conteudos[currentIndex - 1] : null;
  const nextConteudo = currentIndex < conteudos.length - 1 ? conteudos[currentIndex + 1] : null;

  return (
    <div className="content-container">
      <div className="content-header">
        <h1>{conteudo.titulo}</h1>
        <div className="content-meta">
          {conteudo.duracao && (
            <div className="meta-item">
              <Clock size={16} />
              <span>Duração: {conteudo.duracao}</span>
            </div>
          )}
          {isCompleted && (
            <div className="meta-item completed">
              <Check size={16} />
              <span>Concluído</span>
            </div>
          )}
        </div>
      </div>

      <div className="content-body">
        {/* Vamos melhorar a verificação do vídeo */}
        {conteudo.tipo === 'video' && (
          <div className="video-section">
            {conteudo.video_url ? (
              <>
                <VideoPlayer url={conteudo.video_url} onEnded={handleComplete} />
                {/* Log em elemento visível (remover em produção) */}
                {process.env.NODE_ENV === 'development' && (
                  <div className="debug-info">
                    <small>URL do vídeo: {conteudo.video_url}</small>
                  </div>
                )}
              </>
            ) : (
              <div className="video-error-message">
                <p>Este conteúdo é um vídeo, mas a URL não está disponível.</p>
              </div>
            )}
          </div>
        )}
        
        {/* Renderiza texto se houver texto ou descricao usando Markdown */}
        {(conteudo.texto || conteudo.descricao) && (
          <div className="content-text">
            <MarkdownRenderer content={conteudo.texto || conteudo.descricao} />
          </div>
        )}
      </div>

      <div className="content-footer">
        <div className="content-navigation">
          {prevConteudo && (
            <a 
              href={`/curso/${currentCurso?.id}/conteudo/${prevConteudo.id}`} 
              className="nav-button prev"
            >
              <ChevronLeft size={16} />
              <span>Anterior</span>
            </a>
          )}

          {!isCompleted ? (
            <button 
              className="complete-button" 
              onClick={handleComplete}
            >
              <Check size={16} />
              <span>Marcar como concluído</span>
            </button>
          ) : isCourseCompleted ? (
            <div className="course-completed-badge">
              <Award size={16} color="#FFD700" />
              <span>Curso 100% Concluído!</span>
            </div>
          ) : null}

          {nextConteudo && (
            <a 
              href={`/curso/${currentCurso?.id}/conteudo/${nextConteudo.id}`} 
              className="nav-button next"
            >
              <span>Próximo</span>
              <ChevronRight size={16} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContentViewer;
