import styled, { keyframes } from "styled-components"

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 0;
`

export const HomeHeader = styled.header`
  margin-bottom: 1rem;
`

export const HomeTitle = styled.h1`
  font-size: 1.75rem;
  font-weight: 700;
  color: ${(props) => props.theme.colors.text};
`

export const Title = styled.h1`
  margin-bottom: 1.5rem;
  font-size: 2rem;
  color: ${props => props.theme.colors.text};
`;

export const CourseGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
`

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

export const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 50vh;
  gap: 1rem;
  color: ${(props) => props.theme.colors.textLight};
  
  .spinner {
    animation: ${spin} 1s linear infinite;
  }
`

export const CourseCard = styled.div`
  background: ${props => props.theme.colors.background};
  border-radius: 8px;
  overflow: hidden;
  box-shadow: ${props => props.theme.shadows.small};
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: ${props => props.theme.shadows.medium};
  }
  
  .course-image {
    height: 160px;
    overflow: hidden;
    
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    
    .placeholder-image {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: ${props => props.theme.colors.primary}25;
      font-size: 3rem;
      color: ${props => props.theme.colors.primary};
    }
  }
  
  .course-details {
    padding: 1rem;
    
    h3 {
      margin-bottom: 0.5rem;
      font-size: 1.125rem;
    }
    
    p {
      font-size: 0.875rem;
      color: ${props => props.theme.colors.textLight};
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      overflow: hidden;
      line-height: 1.5;
    }
  }
`;

