import styled from "styled-components";

export const ContentContainer = styled.div`
  background-color: ${props => props.theme.colors.background};
  border-radius: 8px;
  box-shadow: ${props => props.theme.shadows.small};
  border: 1px solid ${props => props.theme.colors.border};
  overflow: hidden;
`;

export const ContentHeader = styled.div`
  padding: 1.25rem 1.5rem;
  border-bottom: 1px solid ${props => props.theme.colors.border};
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }
`;

export const ContentTitle = styled.h2`
  font-size: 1.25rem;
  font-weight: 600;
  color: ${props => props.theme.colors.text};
  margin: 0;
`;

export const ContentType = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.875rem;
  color: ${props => props.theme.colors.textLight};
  padding: 0.375rem 0.75rem;
  border-radius: 9999px;
  background-color: ${props => props.theme.colors.backgroundAlt};
  
  svg {
    color: ${props => props.theme.colors.primary};
  }
`;

export const ContentBody = styled.div`
  padding: 1.5rem;
  
  p {
    margin-bottom: 1rem;
    line-height: 1.6;
  }
`;

export const VideoContainer = styled.div`
  position: relative;
  padding-bottom: 56.25%; /* 16:9 Aspect Ratio */
  height: 0;
  overflow: hidden;
  border-radius: 6px;
  margin-bottom: 1.5rem;
  
  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;

export const TextContent = styled.div`
  line-height: 1.7;
  color: ${props => props.theme.colors.text};
  font-size: 1rem;
  
  p {
    margin-bottom: 1rem;
  }
  
  h3 {
    margin: 1.5rem 0 0.75rem;
    font-weight: 600;
  }
  
  ul, ol {
    margin-left: 1.5rem;
    margin-bottom: 1rem;
  }
  
  li {
    margin-bottom: 0.5rem;
  }
  
  code {
    font-family: monospace;
    background-color: ${props => props.theme.colors.backgroundAlt};
    padding: 0.2rem 0.4rem;
    border-radius: 4px;
    font-size: 0.9rem;
  }
  
  a {
    color: ${props => props.theme.colors.primary};
    text-decoration: underline;
    
    &:hover {
      text-decoration: none;
    }
  }
`;

export const ContentActions = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;
  padding-top: 1rem;
  border-top: 1px solid ${props => props.theme.colors.border};
`;

export const ActionButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.625rem 1rem;
  border-radius: 6px;
  font-weight: 500;
  font-size: 0.875rem;
  transition: all 0.15s ease;
  
  &.primary {
    background-color: ${props => props.theme.colors.primary};
    color: white;
    
    &:hover {
      background-color: ${props => props.theme.colors.primary}dd;
    }
  }
  
  &.secondary {
    background-color: ${props => props.theme.colors.backgroundAlt};
    color: ${props => props.theme.colors.text};
    
    &:hover {
      background-color: ${props => props.theme.colors.backgroundHover};
    }
  }
`;

