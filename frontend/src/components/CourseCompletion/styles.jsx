import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
`;

const shine = keyframes`
  from {
    background-position: -200px 0;
  }
  to {
    background-position: calc(200px + 100%) 0;
  }
`;

export const CelebrationOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.75);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  animation: ${fadeIn} 0.5s ease-out forwards;
  padding: 20px;
  backdrop-filter: blur(4px);
`;

export const CelebrationModal = styled.div`
  background: linear-gradient(145deg, #ffffff, #f8f9fa);
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  width: 100%;
  max-width: 550px;
  overflow: hidden;
  position: relative;
  z-index: 1001;
  display: flex;
  flex-direction: column;
`;

export const ModalHeader = styled.div`
  padding: 15px 20px;
  display: flex;
  justify-content: flex-end;
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  color: #555;
  cursor: pointer;
  padding: 5px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.2s;
  
  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }
`;

export const ModalBody = styled.div`
  padding: 0 40px 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  
  .completion-stats {
    display: flex;
    justify-content: center;
    gap: 40px;
    margin-top: 24px;
    
    .stat {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    
    .stat-value {
      font-size: 20px;
      font-weight: 700;
      color: #2e7d32;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 50px;
      height: 50px;
      border-radius: 50%;
      background-color: rgba(46, 125, 50, 0.12);
      margin-bottom: 8px;
    }
    
    .stat-label {
      font-size: 14px;
      color: #666;
    }
  }
`;

export const AchievementBadge = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background: linear-gradient(135deg, #FFF9C4, #FFD700);
  box-shadow: 0 8px 24px rgba(255, 215, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  position: relative;
  animation: ${pulse} 2s infinite ease-in-out;
  
  &:before {
    content: '';
    position: absolute;
    top: -10px;
    left: -10px;
    right: -10px;
    bottom: -10px;
    border-radius: 50%;
    border: 2px dashed gold;
    animation: ${pulse} 3s infinite ease-in-out;
    opacity: 0.6;
  }
`;

export const CelebrationTitle = styled.h2`
  margin: 0;
  font-size: 32px;
  font-weight: 800;
  background: linear-gradient(90deg, #FF8A00, #FF4E50);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 8px;
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 2px;
    background: linear-gradient(90deg, transparent, #FF8A00, #FF4E50, transparent);
    opacity: 0.7;
  }
`;

export const CelebrationSubtitle = styled.p`
  margin: 0 0 24px;
  font-size: 18px;
  color: #666;
`;

export const CompletionMessage = styled.div`
  margin-bottom: 20px;
  padding: 20px;
  border-radius: 12px;
  background-color: rgba(0, 0, 0, 0.03);
  
  h3 {
    margin: 0 0 12px;
    font-size: 20px;
    color: #333;
    font-weight: 600;
  }
  
  p {
    margin: 0;
    color: #666;
    font-size: 15px;
    line-height: 1.6;
  }
`;

export const ModalFooter = styled.div`
  padding: 20px 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  border-top: 1px solid #eee;
  flex-wrap: wrap;
  
  @media (max-width: 500px) {
    flex-direction: column;
    gap: 16px;
  }
`;

export const ActionButton = styled.button`
  background: linear-gradient(90deg, #4776E6, #8E54E9);
  border: none;
  color: white;
  padding: 12px 24px;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
  font-size: 15px;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(136, 84, 233, 0.4);
  }
  
  &:active {
    transform: translateY(0);
  }
  
  @media (max-width: 500px) {
    width: 100%;
  }
`;

export const ShareButton = styled.button`
  background: white;
  border: 1px solid #ddd;
  color: #555;
  padding: 10px 20px;
  border-radius: 8px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  
  &:hover {
    background-color: #f5f5f5;
  }
  
  @media (max-width: 500px) {
    width: 100%;
    justify-content: center;
  }
`;

export const CertificateButton = styled.button`
  background: #FFF9C4;
  border: 1px solid #FFC107;
  color: #D6A100;
  padding: 10px 20px;
  border-radius: 8px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  position: relative;
  overflow: hidden;
  
  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      to right,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 0.6) 50%,
      rgba(255, 255, 255, 0) 100%
    );
    transform: skewX(-20deg);
    animation: ${shine} 3s infinite;
  }
  
  &:hover {
    background-color: #FFECB3;
  }
  
  @media (max-width: 500px) {
    width: 100%;
    justify-content: center;
  }
`;
