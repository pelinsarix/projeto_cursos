import styled from "styled-components"

export const Card = styled.div`
  background-color: ${(props) => props.theme.colors.cardBg};
  border-radius: 8px;
  overflow: hidden;
  box-shadow: ${(props) => props.theme.shadows.small};
  transition: transform ${(props) => props.theme.transition.default}, box-shadow ${(props) => props.theme.transition.default};
  cursor: pointer;
  height: 100%;
  display: flex;
  flex-direction: column;
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: ${(props) => props.theme.shadows.medium};
  }
`

export const CardImage = styled.div`
  height: 180px;
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform ${(props) => props.theme.transition.default};
  }
  
  ${Card}:hover & img {
    transform: scale(1.05);
  }
`

export const CardContent = styled.div`
  padding: 1.25rem;
  flex: 1;
`

export const CardTitle = styled.h3`
  font-size: 1.125rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: ${(props) => props.theme.colors.text};
`

export const CardDescription = styled.p`
  font-size: 0.875rem;
  color: ${(props) => props.theme.colors.textLight};
  line-height: 1.5;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`

export const CardFooter = styled.div`
  padding: 0.75rem 1.25rem;
  border-top: 1px solid ${(props) => props.theme.colors.border};
  display: flex;
  align-items: center;
  justify-content: flex-end;
`

export const StatusBadge = styled.span`
  display: inline-block;
  padding: 0.25rem 0.75rem;
  border-radius: 9999px;
  font-size: 0.75rem;
  font-weight: 500;
  background-color: ${(props) => (props.isActive ? "rgba(76, 175, 80, 0.1)" : "rgba(244, 67, 54, 0.1)")};
  color: ${(props) => (props.isActive ? props.theme.colors.success : props.theme.colors.error)};
`

