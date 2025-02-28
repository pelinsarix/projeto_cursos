"use client"

import { useState, useEffect } from "react"
import { HomeContainer, HomeHeader, HomeTitle, CourseGrid, LoadingContainer } from "./styles"
import CourseCard from "../../components/CourseCard"
import api from "../../services/api"
import { Loader } from "react-feather"

const HomePage = () => {
  const [cursos, setCursos] = useState([])
  const [loading, setLoading] = useState(true)

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

  if (loading) {
    return (
      <LoadingContainer>
        <Loader size={32} className="spinner" />
        <p>Carregando cursos...</p>
      </LoadingContainer>
    )
  }

  return (
    <HomeContainer>
      <HomeHeader>
        <HomeTitle>Cursos Disponíveis</HomeTitle>
      </HomeHeader>

      <CourseGrid>
        {cursos.map((curso) => (
          <CourseCard key={curso.id} curso={curso} />
        ))}
      </CourseGrid>
    </HomeContainer>
  )
}

export default HomePage

