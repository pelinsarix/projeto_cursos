"use client"

import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import {
  CourseContainer,
  CourseHeader,
  CourseTitle,
  CourseDescription,
  CourseImage,
  CourseInfo,
  LoadingContainer,
  NoContentMessage,
} from "./styles"
import ContentDisplay from "../../components/ContentDisplay"
import api from "../../services/api"
import { Loader } from "react-feather"

const CourseContentPage = () => {
  const { cursoId, conteudoId } = useParams()
  const [curso, setCurso] = useState(null)
  const [conteudos, setConteudos] = useState([])
  const [currentConteudo, setCurrentConteudo] = useState(null)
  const [loading, setLoading] = useState(true)

  // Buscar detalhes do curso e lista de conteúdos
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        
        // Buscar detalhes do curso
        const cursoResponse = await api.get(`/cursos/${cursoId}`)
        setCurso(cursoResponse.data)

        // Buscar lista de conteúdos do curso
        const conteudosResponse = await api.get(`conteudos/curso/${cursoId}`)
        const sortedConteudos = conteudosResponse.data.sort((a, b) => a.ordem - b.ordem)
        setConteudos(sortedConteudos)
        
        setLoading(false)
      } catch (error) {
        console.error("Erro ao buscar dados do curso:", error)
        setLoading(false)
      }
    }

    fetchData()
  }, [cursoId])

  // Buscar conteúdo específico ou usar o primeiro da lista
  useEffect(() => {
    const fetchConteudo = async () => {
      try {
        if (conteudoId) {
          // Se tiver ID de conteúdo, busca diretamente pela API
          const conteudoResponse = await api.get(`/conteudos/${conteudoId}`)
          setCurrentConteudo(conteudoResponse.data)
        } else if (conteudos.length > 0) {
          // Se não tiver ID específico, usa o primeiro da lista
          setCurrentConteudo(conteudos[0])
        } else {
          setCurrentConteudo(null)
        }
      } catch (error) {
        console.error("Erro ao buscar conteúdo:", error)
        setCurrentConteudo(null)
      }
    }

    fetchConteudo()
  }, [conteudoId, conteudos])

  if (loading) {
    return (
      <LoadingContainer>
        <Loader size={32} className="spinner" />
        <p>Carregando conteúdo...</p>
      </LoadingContainer>
    )
  }

  if (!curso) {
    return (
      <NoContentMessage>
        <p>Curso não encontrado.</p>
      </NoContentMessage>
    )
  }

  return (
    <CourseContainer>
      <CourseHeader>
        <CourseInfo>
          <CourseTitle>{curso.titulo}</CourseTitle>
          <CourseDescription>{curso.descricao}</CourseDescription>
        </CourseInfo>
        <CourseImage>
          <img src={curso.imagem_url || "/placeholder.svg?height=200&width=300"} alt={curso.titulo} />
        </CourseImage>
      </CourseHeader>

      {conteudos.length > 0 ? (
        conteudos.map((conteudo) => (
          <ContentDisplay
            key={conteudo.id}
            conteudo={conteudo}
            isActive={conteudo.id === currentConteudo?.id}
          />
        ))
      ) : (
        <NoContentMessage>
          <p>Este curso ainda não possui conteúdos disponíveis.</p>
        </NoContentMessage>
      )}
    </CourseContainer>
  )
}

export default CourseContentPage

