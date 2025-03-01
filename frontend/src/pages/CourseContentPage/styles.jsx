import styled, { keyframes } from "styled-components"

const spin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`

export const CourseContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  max-width: 1000px; /* Narrower for better readability */
  margin: 0 auto;
  width: 100%;
  padding: 2rem 1rem;
`

export const ContentWrapper = styled.div`
  background: ${props => props.theme.colors.background};
  border-radius: 8px;
  box-shadow: ${props => props.theme.shadows.small};
  border: 1px solid ${props => props.theme.colors.border};
  overflow: hidden;
`

export const ContentHeader = styled.header`
  padding: 2rem;
  border-bottom: 1px solid ${props => props.theme.colors.border};
`

export const ContentTitle = styled.h1`
  font-size: 1.75rem;
  font-weight: 700;
  color: ${props => props.theme.colors.text};
  margin-bottom: 0.75rem;
  line-height: 1.3;
`

export const ContentMeta = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  font-size: 0.9rem;
  color: ${props => props.theme.colors.textLight};
`

export const MetaItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`

export const ContentBody = styled.div`
  padding: 2rem;
  font-size: 1.05rem;
  line-height: 1.7;
  color: ${props => props.theme.colors.text};
`

export const VideoWrapper = styled.div`
  position: relative;
  padding-bottom: 56.25%; /* 16:9 Aspect Ratio */
  height: 0;
  margin-bottom: 2rem;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: ${props => props.theme.shadows.small};
  
  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`

export const TextContent = styled.div`
  p {
    margin-bottom: 1.5rem;
  }
  
  h2 {
    font-size: 1.5rem;
    font-weight: 600;
    margin: 2rem 0 1rem;
    padding-bottom: 0.5rem;
    border-bottom: 1px solid ${props => props.theme.colors.border};
  }
  
  h3 {
    font-size: 1.25rem;
    font-weight: 600;
    margin: 1.5rem 0 1rem;
  }
  
  ul, ol {
    margin-left: 1.5rem;
    margin-bottom: 1.5rem;
  }
  
  li {
    margin-bottom: 0.5rem;
  }
  
  img {
    max-width: 100%;
    height: auto;
    border-radius: 6px;
    margin: 1rem 0;
  }
  
  pre {
    background-color: ${props => props.theme.colors.backgroundAlt};
    padding: 1rem;
    border-radius: 6px;
    margin-bottom: 1.5rem;
    overflow-x: auto;
  }
  
  code {
    font-family: 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, monospace;
    font-size: 0.9rem;
    background-color: ${props => props.theme.colors.backgroundAlt};
    padding: 0.2rem 0.4rem;
    border-radius: 4px;
  }
`

export const ContentFooter = styled.footer`
  padding: 1.5rem 2rem;
  border-top: 1px solid ${props => props.theme.colors.border};
  
  .navigation {
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    @media (max-width: ${props => props.theme.breakpoints.tablet}) {
      flex-direction: column;
      gap: 1rem;
    }
  }
`

export const NavButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.25rem;
  border-radius: 6px;
  font-weight: 500;
  font-size: 0.9rem;
  transition: all 0.2s ease;
  background-color: ${props => props.theme.colors.backgroundAlt};
  color: ${props => props.theme.colors.text};
  
  &:hover {
    background-color: ${props => props.theme.colors.backgroundHover};
  }
  
  &.next {
    background-color: ${props => props.theme.colors.primary};
    color: white;
    
    &:hover {
      background-color: ${props => props.theme.colors.primary}e0;
    }
  }
`

export const MarkCompleteButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.75rem 1.25rem;
  background-color: ${props => props.theme.colors.success}15;
  color: ${props => props.theme.colors.success};
  border-radius: 6px;
  font-weight: 500;
  font-size: 0.9rem;
  transition: background-color 0.2s ease;
  
  &:hover {
    background-color: ${props => props.theme.colors.success}25;
  }
`

export const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 50vh;
  gap: 1rem;
  color: ${props => props.theme.colors.textLight};
  
  .spinner {
    animation: ${spin} 1s linear infinite;
  }
`

export const NoContentMessage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 200px;
  background-color: ${props => props.theme.colors.background};
  border-radius: 8px;
  box-shadow: ${props => props.theme.shadows.small};
  color: ${props => props.theme.colors.textLight};
  text-align: center;
  padding: 2rem;
  gap: 1rem;
  border: 1px solid ${props => props.theme.colors.border};
  
  h2 {
    font-size: 1.25rem;
    font-weight: 600;
    color: ${props => props.theme.colors.text};
    margin: 0;
  }
`

