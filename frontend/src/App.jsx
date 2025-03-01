import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { ThemeProvider } from "styled-components"
import GlobalStyle from "./styles/GlobalStyle"
import { theme } from "./theme" // Importando o tema padrão
import Layout from "./components/Layout"
import HomePage from "./pages/HomePage"
import CourseContentPage from "./pages/CourseContentPage"
import { CursoProvider } from "./contexts/CursoContext"

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router>
        <CursoProvider>
          <Routes>
            <Route
              path="/"
              element={
                <Layout>
                  <HomePage />
                </Layout>
              }
            />
            <Route
              path="/curso/:cursoId"
              element={
                <Layout>
                  <CourseContentPage />
                </Layout>
              }
            />
            <Route
              path="/curso/:cursoId/conteudo/:conteudoId"
              element={
                <Layout>
                  <CourseContentPage />
                </Layout>
              }
            />
          </Routes>
        </CursoProvider>
      </Router>
    </ThemeProvider>
  )
}

export default App

