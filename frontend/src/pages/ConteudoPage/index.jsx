import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useCursoContext } from '../../contexts/CursoContext';
import ContentViewer from '../../components/ContentViewer';
import Sidebar from '../../components/Sidebar';
import './styles.css';

const ConteudoPage = () => {
  const { cursoId, conteudoId } = useParams();
  const { setCursoId, loading } = useCursoContext();
  const [sidebarOpen, setSidebarOpen] = React.useState(true);
  
  useEffect(() => {
    if (cursoId) {
      setCursoId(parseInt(cursoId));
    }
  }, [cursoId, setCursoId]);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="course-layout">
      <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      
      <div className={`main-content ${sidebarOpen ? 'with-sidebar' : ''}`}>
        {loading ? (
          <div className="loading-container">Carregando conteúdo...</div>
        ) : (
          <ContentViewer conteudoId={parseInt(conteudoId)} />
        )}
      </div>
    </div>
  );
};

export default ConteudoPage;
