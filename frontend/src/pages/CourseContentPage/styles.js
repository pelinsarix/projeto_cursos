import styled, { keyframes } from "styled-components"

export const CourseContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`

export const CourseHeader = styled.header`
  display: flex;
  gap: 2rem;
  margin-bottom: 1rem;
  
  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    flex-direction: column;
  }
`

export const CourseInfo = styled.div`
  flex: 1;
`

export const CourseTitle = styled.h1`
  font-size: 1.75rem;
  font-weight: 700;
  color: ${(props) => props.theme.colors.text};
  margin-bottom: 0.5rem;
`

export const CourseDescription = styled.p`
  color: ${(props) => props.theme.colors.textLight};
  line-height: 1.6;
`

export const CourseImage = styled.div`
  width: 280px;
  height: 180px;
  border-radius: 8px;
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    width: 100%;
    height: 200px;
  }
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

export const NoContentMessage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 200px;
  background-color: ${(props) => props.theme.colors.cardBg};
  border-radius: 8px;
  box-shadow: ${(props) => props.theme.shadows.small};
  color: ${(props) => props.theme.colors.textLight};
  text-align: center;
  padding: 2rem;
`

