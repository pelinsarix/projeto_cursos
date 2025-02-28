import styled from "styled-components"

export const SidebarContainer = styled.aside`
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  width: 280px;
  background-color: ${(props) => props.theme.colors.sidebar};
  border-right: 1px solid ${(props) => props.theme.colors.border};
  display: flex;
  flex-direction: column;
  z-index: 1000;
  transition: transform ${(props) => props.theme.transition.default};
  box-shadow: ${(props) => props.theme.shadows.small};
  transform: translateX(${(props) => (props.isOpen ? "0" : "-100%")});
  
  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    transform: translateX(${(props) => (props.isOpen ? "0" : "-100%")});
  }
`

export const SidebarHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  border-bottom: 1px solid ${(props) => props.theme.colors.border};
`

export const SidebarTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 600;
  font-size: 1rem;
  color: ${(props) => props.theme.colors.primary};
`

export const SidebarToggle = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.colors.textLight};
  transition: color ${(props) => props.theme.transition.default};
  
  &:hover {
    color: ${(props) => props.theme.colors.primary};
  }
`

export const CourseDropdown = styled.div`
  position: relative;
  padding: 1rem;
  border-bottom: 1px solid ${(props) => props.theme.colors.border};
`

export const DropdownButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0.75rem 1rem;
  background-color: ${(props) => props.theme.colors.background};
  border: 1px solid ${(props) => props.theme.colors.border};
  border-radius: 4px;
  font-size: 0.875rem;
  color: ${(props) => props.theme.colors.text};
  transition: all ${(props) => props.theme.transition.default};
  
  &:hover {
    border-color: ${(props) => props.theme.colors.primary};
  }
  
  svg {
    transition: transform ${(props) => props.theme.transition.default};
  }
`

export const DropdownContent = styled.div`
  position: absolute;
  top: calc(100% - 0.5rem);
  left: 1rem;
  right: 1rem;
  background-color: white;
  border: 1px solid ${(props) => props.theme.colors.border};
  border-radius: 4px;
  box-shadow: ${(props) => props.theme.shadows.medium};
  max-height: 300px;
  overflow-y: auto;
  z-index: 10;
`

export const DropdownItem = styled.div`
  padding: 0.75rem 1rem;
  font-size: 0.875rem;
  cursor: pointer;
  transition: background-color ${(props) => props.theme.transition.default};
  background-color: ${(props) => (props.isActive ? props.theme.colors.activeItem : "transparent")};
  color: ${(props) => (props.isActive ? props.theme.colors.primary : props.theme.colors.text)};
  
  &:hover {
    background-color: ${(props) => props.theme.colors.sidebarHover};
  }
`

export const SidebarContent = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 1rem 0;
`

export const ContentList = styled.ul`
  display: flex;
  flex-direction: column;
`

export const ContentItem = styled.li`
  background-color: ${(props) => (props.isActive ? props.theme.colors.activeItem : "transparent")};
  color: ${(props) => (props.isActive ? props.theme.colors.primary : props.theme.colors.text)};
  
  &:hover {
    background-color: ${(props) => props.theme.colors.sidebarHover};
  }
`

export const ContentItemLink = styled.a`
  display: flex;
  align-items: center;
  padding: 0.75rem 1rem;
  cursor: pointer;
  transition: all ${(props) => props.theme.transition.default};
  gap: 0.75rem;
`

export const ContentItemNumber = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: ${(props) => props.theme.colors.primary};
  color: white;
  font-size: 0.75rem;
  font-weight: 600;
`

export const ContentItemText = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.875rem;
  
  svg {
    color: ${(props) => props.theme.colors.textLight};
  }
`

export const NoContentMessage = styled.div`
  padding: 1rem;
  text-align: center;
  color: ${(props) => props.theme.colors.textLight};
  font-size: 0.875rem;
`

