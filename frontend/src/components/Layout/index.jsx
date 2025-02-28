"use client"

import { useState, useEffect } from "react"
import { useLocation, useParams } from "react-router-dom"
import { Container, Content, Main } from "./styles"
import Sidebar from "../Sidebar"
import api from "../../services/api"

const Layout = ({ children }) => {
  const [cursos, setCursos] = useState([])
  const [currentCurso, setCurrentCurso] = useState(null)
  const [conteudos, setConteudos] = useState([])
  const [loading, setLoading] = useState(true)
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const location = useLocation()
  const { cursoId } = useParams()

  useEffect(() => {
    const fetchCursos = async () => {
      try {
        const response = await api.get("/cursos")
        setCursos(response.data)
        setLoading(false)
      } catch (error) {
        console.error("Erro ao buscar cursos:", error)
        setLoading(false)
      }
    }

    fetchCursos()
  }, [])

  useEffect(() => {
    if (cursoId) {
      const fetchCursoDetails = async () => {
        try {
          const cursoResponse = await api.get(`/cursos/${cursoId}`)
          setCurrentCurso(cursoResponse.data)

          const conteudosResponse = await api.get(`conteudos/curso/${cursoId}`)
          setConteudos(conteudosResponse.data)
        } catch (error) {
          console.error("Erro ao buscar detalhes do curso:", error)
        }
      }

      fetchCursoDetails()
    } else {
      setCurrentCurso(null)
      setConteudos([])
    }
  }, [cursoId])

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen)
  }

  const isHomePage = location.pathname === "/"

  return (
    <Container>
      <Sidebar
        cursos={cursos}
        conteudos={conteudos}
        currentCurso={currentCurso}
        isOpen={sidebarOpen}
        toggleSidebar={toggleSidebar}
      />
      <Main isSidebarOpen={sidebarOpen}>
        <Content>{children}</Content>
      </Main>
    </Container>
  )
}

export default Layout

