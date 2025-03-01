import React, { useState, useEffect } from 'react';
import Confetti from 'react-confetti';
import { useSpring, animated } from 'react-spring';
import { Award, Check, X, Share2 } from 'react-feather';
import {
  CelebrationModal,
  CelebrationOverlay,
  ModalHeader,
  ModalBody,
  ModalFooter,
  CloseButton,
  CelebrationTitle,
  CelebrationSubtitle,
  AchievementBadge,
  CompletionMessage,
  ActionButton,
  ShareButton,
  CertificateButton
} from './styles';

const CourseCompletion = ({ isOpen, onClose, course }) => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  const [showConfetti, setShowConfetti] = useState(true);
  
  // Animação de entrada do modal
  const modalAnimation = useSpring({
    opacity: isOpen ? 1 : 0,
    transform: isOpen ? 'scale(1)' : 'scale(0.8)',
    config: { tension: 280, friction: 20 }
  });

  // Animação do badge
  const badgeAnimation = useSpring({
    from: { transform: 'scale(0) rotate(-45deg)', opacity: 0 },
    to: { transform: 'scale(1) rotate(0deg)', opacity: 1 },
    delay: 600,
    config: { tension: 200, friction: 12 }
  });
  
  // Atualizar tamanho da janela para o confetti
  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Parar o confetti após alguns segundos
  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        setShowConfetti(false);
      }, 8000);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  // Reset state on new open
  useEffect(() => {
    if (isOpen) {
      setShowConfetti(true);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  // Função para compartilhar a conquista
  const handleShare = () => {
    const shareText = `🎉 Acabei de concluir o curso "${course.titulo}" na plataforma de cursos! #aprendizado #desenvolvimento`;
    
    if (navigator.share) {
      navigator.share({
        title: 'Curso Concluído!',
        text: shareText,
        url: window.location.href,
      }).catch((error) => console.log('Erro ao compartilhar:', error));
    } else {
      // Fallback para copiar texto
      navigator.clipboard.writeText(shareText)
        .then(() => alert('Texto copiado para a área de transferência!'))
        .catch(err => console.log('Erro ao copiar texto:', err));
    }
  };

  return (
    <>
      {/* Confetti em toda a tela */}
      {showConfetti && (
        <Confetti
          width={windowSize.width}
          height={windowSize.height}
          recycle={true}
          numberOfPieces={500}
          gravity={0.2}
        />
      )}
      
      {/* Overlay com o modal */}
      <CelebrationOverlay>
        <animated.div style={modalAnimation}>
          <CelebrationModal>
            <ModalHeader>
              <CloseButton onClick={onClose}>
                <X size={18} />
              </CloseButton>
            </ModalHeader>
            
            <ModalBody>
              <animated.div style={badgeAnimation}>
                <AchievementBadge>
                  <Award size={64} color="#FFD700" />
                </AchievementBadge>
              </animated.div>
              
              <CelebrationTitle>Parabéns!</CelebrationTitle>
              <CelebrationSubtitle>Você concluiu o curso</CelebrationSubtitle>
              <CompletionMessage>
                <h3>{course?.titulo}</h3>
                <p>Você completou todos os conteúdos do curso e está pronto para aplicar seus novos conhecimentos!</p>
              </CompletionMessage>
              
              <div className="completion-stats">
                <div className="stat">
                  <div className="stat-value">100%</div>
                  <div className="stat-label">Concluído</div>
                </div>
                <div className="stat">
                  <div className="stat-value">
                    <Check size={20} />
                  </div>
                  <div className="stat-label">Aprovado</div>
                </div>
              </div>
            </ModalBody>
            
            <ModalFooter>
              <ShareButton onClick={handleShare}>
                <Share2 size={16} />
                Compartilhar
              </ShareButton>
              
              <CertificateButton>
                <Award size={16} />
                Ver Certificado
              </CertificateButton>
              
              <ActionButton onClick={onClose}>
                Continuar
              </ActionButton>
            </ModalFooter>
          </CelebrationModal>
        </animated.div>
      </CelebrationOverlay>
    </>
  );
};

export default CourseCompletion;
