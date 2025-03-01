"use client"

import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useCursoContext } from '../../contexts/CursoContext';
import ContentViewer from '../../components/ContentViewer';
import Sidebar from '../../components/Sidebar';
import CourseCompletion from '../../components/CourseCompletion';
import { 
  CourseContainer, 
  ContentWrapper, 
  LoadingContainer,
  NoContentMessage
} from './styles';
import { Loader } from 'react-feather';

const CourseContentPage = () => {
  const { cursoId, conteudoId } = useParams();
  const navigate = useNavigate();
  const { 
    setCursoId, 
    loading, 
    currentCurso, 
    conteudos,
    showCourseCompletion,
    setShowCourseCompletion
  } = useCursoContext();
  
  const [sidebarOpen, setSidebarOpen] = useState(true);
  
  // Efeito para carregar o curso
  useEffect(() => {
    if (cursoId) {
      setCursoId(parseInt(cursoId, 10));
    }
  }, [cursoId, setCursoId]);
  
  // Efeito para verificar se o conteúdo existe e navegar para o primeiro conteúdo caso necessário
  useEffect(() => {
    // Somente execute essa navegação quando os conteúdos estiverem carregados
    if (!loading && conteudos && conteudos.length > 0 && !conteudoId) {
      // Navegue para o primeiro conteúdo do curso
      navigate(`/curso/${cursoId}/conteudo/${conteudos[0].id}`, { replace: true });
    }
  }, [loading, conteudos, cursoId, conteudoId, navigate]);
  
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="course-layout">
      <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      
      <div className={`main-content ${sidebarOpen ? 'with-sidebar' : ''}`}>
        {loading ? (
          <LoadingContainer>
            <Loader className="spinner" size={32} />
            <p>Carregando conteúdo...</p>
          </LoadingContainer>
        ) : !conteudoId ? (
          <NoContentMessage>
            <h2>Nenhum conteúdo selecionado</h2>
            <p>Selecione um conteúdo na barra lateral para começar a aprender.</p>
          </NoContentMessage>
        ) : (
          <CourseContainer>
            <ContentWrapper>
              <ContentViewer conteudoId={parseInt(conteudoId, 10)} />
            </ContentWrapper>
          </CourseContainer>
        )}
      </div>
      
      {/* Modal de celebração ao concluir o curso */}
      <CourseCompletion 
        isOpen={showCourseCompletion}
        onClose={() => setShowCourseCompletion(false)}
        course={currentCurso}
      />
    </div>
  );
};

export default CourseContentPage;

