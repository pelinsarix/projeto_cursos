import styled from "styled-components";

export const LayoutContainer = styled.div`
  display: flex;
  height: 100vh;
`;

export const MainContent = styled.main`
  flex: 1;
  margin-left: ${(props) => (props.$sidebarOpen ? "280px" : "0")};
  padding: 2rem;
  transition: margin-left 0.2s cubic-bezier(0.16, 1, 0.3, 1);
  overflow-y: auto;
  position: relative;
  
  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    margin-left: 0;
    padding: 1.5rem;
  }
`;

export const MenuButton = styled.button`
  position: fixed;
  top: 1rem;
  left: 1rem;
  background-color: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.colors.text};
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid ${(props) => props.theme.colors.border};
  box-shadow: ${(props) => props.theme.shadows.small};
  z-index: 10;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: ${(props) => props.theme.colors.backgroundHover};
  }
  
  &:focus-visible {
    outline: 2px solid ${(props) => props.theme.colors.primary};
    outline-offset: 2px;
  }
`;

