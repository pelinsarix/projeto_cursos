"use client"

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useCursoContext } from "../../contexts/CursoContext";
import { HomeContainer, Title, CourseGrid, CourseCard } from "./styles";

const HomePage = () => {
  const { cursos, loading } = useCursoContext();
  const navigate = useNavigate();

  const handleCourseClick = (cursoId) => {
    navigate(`/curso/${cursoId}`);
  };

  if (loading) {
    return (
      <HomeContainer>
        <Title>Carregando cursos...</Title>
      </HomeContainer>
    );
  }

  return (
    <HomeContainer>
      <Title>Bem-vindo à Plataforma de Cursos</Title>
      <p>Selecione um curso para começar:</p>

      <CourseGrid>
        {cursos.map(curso => (
          <CourseCard key={curso.id} onClick={() => handleCourseClick(curso.id)}>
            <div className="course-image">
              {curso.imagem_url ? (
                <img src={curso.imagem_url} alt={curso.titulo} />
              ) : (
                <div className="placeholder-image">{curso.titulo.charAt(0)}</div>
              )}
            </div>
            <div className="course-details">
              <h3>{curso.titulo}</h3>
              <p>{curso.descricao}</p>
            </div>
          </CourseCard>
        ))}
      </CourseGrid>
    </HomeContainer>
  );
};

export default HomePage;

