import styled from "styled-components"

export const ContentContainer = styled.div`
  background-color: ${(props) => props.theme.colors.cardBg};
  border-radius: 8px;
  box-shadow: ${(props) => props.theme.shadows.small};
  overflow: hidden;
`

export const ContentHeader = styled.div`
  padding: 1.5rem;
  border-bottom: 1px solid ${(props) => props.theme.colors.border};
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }
`

export const ContentTitle = styled.h2`
  font-size: 1.25rem;
  font-weight: 600;
  color: ${(props) => props.theme.colors.text};
`

export const ContentType = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.25rem 0.75rem;
  background-color: ${(props) => props.theme.colors.background};
  border-radius: 9999px;
  font-size: 0.75rem;
  color: ${(props) => props.theme.colors.textLight};
`

export const ContentBody = styled.div`
  padding: 1.5rem;
  
  p {
    margin-bottom: 1rem;
    line-height: 1.6;
  }
`

export const VideoContainer = styled.div`
  position: relative;
  padding-bottom: 56.25%; /* 16:9 Aspect Ratio */
  height: 0;
  overflow: hidden;
  margin-bottom: 1.5rem;
  
  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 4px;
  }
`

export const TextContent = styled.div`
  line-height: 1.6;
  color: ${(props) => props.theme.colors.text};
  white-space: pre-line;
`

