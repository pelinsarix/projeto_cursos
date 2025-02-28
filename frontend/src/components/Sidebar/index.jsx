"use client"

import { useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import {
  SidebarContainer,
  SidebarHeader,
  SidebarContent,
  CourseDropdown,
  DropdownButton,
  DropdownContent,
  DropdownItem,
  ContentList,
  ContentItem,
  SidebarToggle,
  SidebarTitle,
  ContentItemLink,
  ContentItemText,
  ContentItemNumber,
  NoContentMessage,
} from "./styles"
import { ChevronDown, Menu, Book, Video, FileText } from "react-feather"

const Sidebar = ({ cursos, conteudos, currentCurso, isOpen, toggleSidebar }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const navigate = useNavigate()
  const { cursoId, conteudoId } = useParams()

  const handleCursoSelect = (id) => {
    navigate(`/curso/${id}`)
    setDropdownOpen(false)
  }

  const handleConteudoSelect = (cursoId, conteudoId) => {
    navigate(`/curso/${cursoId}/conteudo/${conteudoId}`)
  }

  const getContentIcon = (tipo) => {
    switch (tipo) {
      case "video":
        return <Video size={16} />
      case "texto":
        return <FileText size={16} />
      default:
        return <Book size={16} />
    }
  }

  const sortedConteudos = [...conteudos].sort((a, b) => a.ordem - b.ordem)

  return (
    <SidebarContainer isOpen={isOpen}>
      <SidebarHeader>
        <SidebarTitle>
          <Book size={20} />
          <span>Plataforma de Cursos</span>
        </SidebarTitle>
        <SidebarToggle onClick={toggleSidebar}>
          <Menu size={20} />
        </SidebarToggle>
      </SidebarHeader>

      <CourseDropdown>
        <DropdownButton onClick={() => setDropdownOpen(!dropdownOpen)}>
          <span>{currentCurso ? currentCurso.titulo : "Selecione um curso"}</span>
          <ChevronDown size={16} style={{ transform: dropdownOpen ? "rotate(180deg)" : "rotate(0)" }} />
        </DropdownButton>

        {dropdownOpen && (
          <DropdownContent>
            {cursos.map((curso) => (
              <DropdownItem
                key={curso.id}
                onClick={() => handleCursoSelect(curso.id)}
                isActive={Number(cursoId) === curso.id}
              >
                {curso.titulo}
              </DropdownItem>
            ))}
          </DropdownContent>
        )}
      </CourseDropdown>

      <SidebarContent>
        {currentCurso ? (
          sortedConteudos.length > 0 ? (
            <ContentList>
              {sortedConteudos.map((conteudo) => (
                <ContentItem key={conteudo.id} isActive={Number(conteudoId) === conteudo.id}>
                  <ContentItemLink onClick={() => handleConteudoSelect(cursoId, conteudo.id)}>
                    <ContentItemNumber>{conteudo.ordem}</ContentItemNumber>
                    <ContentItemText>
                      {getContentIcon(conteudo.tipo)}
                      <span>{conteudo.titulo}</span>
                    </ContentItemText>
                  </ContentItemLink>
                </ContentItem>
              ))}
            </ContentList>
          ) : (
            <NoContentMessage>Nenhum conteúdo disponível para este curso.</NoContentMessage>
          )
        ) : (
          <NoContentMessage>Selecione um curso para ver os conteúdos.</NoContentMessage>
        )}
      </SidebarContent>
    </SidebarContainer>
  )
}

export default Sidebar

