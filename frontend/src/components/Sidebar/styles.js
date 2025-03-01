import styled, { css } from "styled-components";

export const SidebarContainer = styled.aside`
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  width: 280px;
  background-color: ${(props) => props.theme.colors.background};
  border-right: 1px solid ${(props) => props.theme.colors.border};
  display: flex;
  flex-direction: column;
  z-index: 1000;
  transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
  box-shadow: ${(props) => props.theme.shadows.small};
  transform: translateX(${(props) => (props.$isOpen ? "0" : "-100%")});
  
  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    transform: translateX(${(props) => (props.$isOpen ? "0" : "-100%")});
  }
`;

export const SidebarHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 1.25rem;
  border-bottom: 1px solid ${(props) => props.theme.colors.border};
  height: 60px;
`;

export const SidebarTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-weight: 600;
  font-size: 0.95rem;
  color: ${(props) => props.theme.colors.primary};
`;

export const SidebarToggle = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.colors.textLight};
  transition: color 0.15s ease, background-color 0.15s ease;
  width: 32px;
  height: 32px;
  border-radius: 6px;
  
  &:hover {
    color: ${(props) => props.theme.colors.text};
    background-color: ${(props) => props.theme.colors.sidebarHover};
  }

  &:focus-visible {
    outline: 2px solid ${(props) => props.theme.colors.primary};
    outline-offset: 2px;
  }
`;

export const CourseDropdown = styled.div`
  position: relative;
  padding: 0.75rem 1rem;
  border-bottom: 1px solid ${(props) => props.theme.colors.border};
`;

export const DropdownButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0.75rem 1rem;
  background-color: ${(props) => props.theme.colors.backgroundAlt};
  border: 1px solid ${(props) => props.theme.colors.border};
  border-radius: 8px;
  font-size: 0.9rem;
  color: ${(props) => props.theme.colors.text};
  transition: all 0.15s ease;
  font-weight: 500;
  
  &:hover {
    border-color: ${(props) => props.theme.colors.borderHover};
    background-color: ${(props) => props.theme.colors.backgroundHover};
  }
  
  &:focus-visible {
    outline: 2px solid ${(props) => props.theme.colors.primary};
    outline-offset: 2px;
    border-color: ${(props) => props.theme.colors.primary};
  }
  
  svg {
    transition: transform 0.2s cubic-bezier(0.16, 1, 0.3, 1);
  }
`;

export const DropdownContent = styled.div`
  position: absolute;
  top: calc(100% - 0.25rem);
  left: 1rem;
  right: 1rem;
  background-color: ${(props) => props.theme.colors.background};
  border: 1px solid ${(props) => props.theme.colors.border};
  border-radius: 8px;
  box-shadow: ${(props) => props.theme.shadows.medium};
  max-height: 300px;
  overflow-y: auto;
  z-index: 10;
  animation: dropdownAppear 0.2s cubic-bezier(0.16, 1, 0.3, 1);
  
  @keyframes dropdownAppear {
    from {
      opacity: 0;
      transform: translateY(-4px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  &::-webkit-scrollbar {
    width: 6px;
  }
  
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  
  &::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.theme.colors.border};
    border-radius: 3px;
  }
`;

export const DropdownItem = styled.div`
  padding: 0.75rem 1rem;
  font-size: 0.9rem;
  cursor: pointer;
  transition: background-color 0.15s ease, color 0.15s ease;
  border-radius: 6px;
  margin: 0.25rem;
  background-color: ${(props) => (props.$isActive ? props.theme.colors.activeItem : "transparent")};
  color: ${(props) => (props.$isActive ? props.theme.colors.primary : props.theme.colors.text)};
  font-weight: ${(props) => (props.$isActive ? "500" : "normal")};
  
  &:hover {
    background-color: ${(props) => props.theme.colors.sidebarHover};
  }

  &:focus-visible {
    outline: 2px solid ${(props) => props.theme.colors.primary};
    outline-offset: -2px;
  }
`;

export const SidebarContent = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 0.5rem 0;

  &::-webkit-scrollbar {
    width: 6px;
  }
  
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  
  &::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.theme.colors.border};
    border-radius: 3px;
  }
`;

export const ModuleSection = styled.div`
  margin-bottom: 0.25rem;
`;

export const ModuleHeader = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem 1.25rem;
  width: 100%;
  text-align: left;
  font-size: 0.8rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: ${(props) => props.theme.colors.textLight};
  transition: color 0.15s ease;

  &:hover {
    color: ${(props) => props.theme.colors.text};
  }

  svg {
    transition: transform 0.2s cubic-bezier(0.16, 1, 0.3, 1);
    transform: ${(props) => (props.$isOpen ? "rotate(180deg)" : "rotate(0)")};
  }
`;

export const ModuleContent = styled.div`
  overflow: hidden;
  max-height: ${(props) => (props.$isOpen ? "1000px" : "0")};
  transition: max-height 0.3s cubic-bezier(0.16, 1, 0.3, 1);
`;

export const ContentList = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 0 0.5rem;
  gap: 2px;
`;

export const ContentItem = styled.li`
  border-radius: 8px;
  background-color: ${(props) => (props.$isActive ? props.theme.colors.activeItem : "transparent")};
  color: ${(props) => (props.$isActive ? props.theme.colors.primary : props.theme.colors.text)};
  position: relative;
  
  &:hover {
    background-color: ${(props) => !props.$isActive && props.theme.colors.sidebarHover};
  }

  ${(props) =>
    props.$isCompleted &&
    css`
      &::after {
        content: "";
        display: block;
        position: absolute;
        right: 1rem;
        top: 50%;
        transform: translateY(-50%);
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background-color: ${props.theme.colors.success};
      }
    `}
`;

export const ContentItemLink = styled.a`
  display: flex;
  align-items: center;
  padding: 0.75rem;
  cursor: pointer;
  transition: all 0.15s ease;
  gap: 0.75rem;
  position: relative;
  border-radius: 8px;
  width: 100%;

  &:focus-visible {
    outline: 2px solid ${(props) => props.theme.colors.primary};
    outline-offset: -2px;
  }
`;

export const ContentItemNumber = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 28px;
  height: 28px;
  border-radius: 6px;
  background-color: ${(props) => 
    props.$isCompleted 
      ? props.theme.colors.success 
      : props.$isActive 
        ? props.theme.colors.primary 
        : props.theme.colors.backgroundAlt};
  color: ${(props) => 
    (props.$isCompleted || props.$isActive) 
      ? "white" 
      : props.theme.colors.textLight};
  font-size: 0.75rem;
  font-weight: 500;
  transition: all 0.15s ease;
  
  svg {
    width: 14px;
    height: 14px;
  }
`;

export const ContentItemText = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9rem;
  font-weight: ${(props) => (props.$isActive ? "500" : "normal")};
  color: ${(props) => (props.$isActive ? props.theme.colors.primary : props.theme.colors.text)};
  flex: 1;
  
  svg {
    color: ${(props) => (props.$isActive ? props.theme.colors.primary : props.theme.colors.textLight)};
    transition: color 0.15s ease;
  }
`;

export const NoContentMessage = styled.div`
  padding: 1.5rem 1rem;
  text-align: center;
  color: ${(props) => props.theme.colors.textLight};
  font-size: 0.875rem;
`;

export const ProgressContainer = styled.div`
  padding: 0.75rem 1.25rem;
`;

export const ProgressIndicator = styled.div`
  height: 4px;
  border-radius: 4px;
  background-color: ${(props) => props.theme.colors.border};
  width: 100%;
  overflow: hidden;
`;

export const ProgressBar = styled.div`
  height: 100%;
  width: ${(props) => props.$progress}%;
  background-color: ${(props) => props.theme.colors.primary};
  transition: width 0.3s ease;
`;

export const ProgressText = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.75rem;
  color: ${(props) => props.theme.colors.textLight};
  margin-top: 0.5rem;
  
  span {
    font-weight: 500;
  }
`;

export const SidebarFooter = styled.div`
  padding: 1rem;
  border-top: 1px solid ${(props) => props.theme.colors.border};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ThemeToggle = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 6px;
  color: ${(props) => props.theme.colors.textLight};
  background-color: transparent;
  transition: all 0.15s ease;
  
  &:hover {
    color: ${(props) => props.theme.colors.text};
    background-color: ${(props) => props.theme.colors.sidebarHover};
  }
`;

export const Badge = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 9999px;
  font-size: 0.75rem;
  font-weight: 500;
  height: 1.25rem;
  padding: 0 0.5rem;
  background-color: ${(props) => props.$variant === 'outline' 
    ? 'transparent' 
    : props.$variant === 'success'
      ? props.theme.colors.success + '20'
      : props.$variant === 'warning'
        ? props.theme.colors.warning + '20'
        : props.theme.colors.primary + '20'};
  color: ${(props) => props.$variant === 'success'
    ? props.theme.colors.success
    : props.$variant === 'warning'
      ? props.theme.colors.warning
      : props.theme.colors.primary};
  border: ${(props) => props.$variant === 'outline' ? `1px solid ${props.theme.colors.border}` : 'none'};
  margin-left: ${(props) => props.$ml ? props.$ml : "0"};
`;

export const Tooltip = styled.div`
  position: absolute;
  top: -24px;
  left: 50%;
  transform: translateX(-50%);
  background-color: ${(props) => props.theme.colors.tooltipBg};
  color: ${(props) => props.theme.colors.tooltipText};
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 0.75rem;
  pointer-events: none;
  opacity: 0;
  transition: opacity 0.2s ease;
  white-space: nowrap;
  z-index: 10;
  box-shadow: ${(props) => props.theme.shadows.small};

  &::after {
    content: '';
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    border-width: 4px;
    border-style: solid;
    border-color: ${(props) => props.theme.colors.tooltipBg} transparent transparent transparent;
  }
`;

export const TooltipWrapper = styled.div`
  position: relative;

  &:hover ${Tooltip} {
    opacity: 1;
  }
`;

