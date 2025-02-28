import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  min-height: 100vh;
`

export const Main = styled.main`
  flex: 1;
  transition: margin-left ${(props) => props.theme.transition.default};
  margin-left: ${(props) => (props.isSidebarOpen ? "280px" : "0")};
  
  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    margin-left: 0;
  }
`

export const Content = styled.div`
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  
  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    padding: 1rem;
  }
`

