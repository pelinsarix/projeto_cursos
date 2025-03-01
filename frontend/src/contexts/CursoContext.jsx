import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import api from '../services/api';

// Criação do contexto
const CursoContext = createContext();

export const CursoProvider = ({ children }) => {
  const [cursos, setCursos] = useState([]);
  const [currentCurso, setCurrentCurso] = useState(null);
  const [conteudos, setConteudos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [completedContent, setCompletedContent] = useState([]);
  const [showCourseCompletion, setShowCourseCompletion] = useState(false);

  // Função para buscar todos os cursos
  const fetchCursos = useCallback(async () => {
    try {
      setLoading(true);
      const response = await api.get('/cursos');
      setCursos(response.data);
      return response.data;
    } catch (error) {
      setError('Erro ao buscar cursos.');
      console.error("Erro ao buscar cursos:", error);
      return [];
    } finally {
      setLoading(false);
    }
  }, []);

  // Função para buscar um curso específico e seus conteúdos
  const fetchCursoById = useCallback(async (cursoId) => {
    if (!cursoId) return;
    
    try {
      setLoading(true);
      
      // Buscar informações do curso
      const cursoResponse = await api.get(`/cursos/${cursoId}`);
      setCurrentCurso(cursoResponse.data);
      
      // Buscar conteúdos do curso
      const conteudosResponse = await api.get(`conteudos/curso/${cursoId}`);
      setConteudos(conteudosResponse.data);
      
      // Carregar conteúdos concluídos
      loadCompletedContent(cursoId);
      
      return {
        curso: cursoResponse.data,
        conteudos: conteudosResponse.data
      };
    } catch (error) {
      setError(`Erro ao buscar curso ${cursoId}.`);
      console.error(`Erro ao buscar curso ${cursoId}:`, error);
      setCurrentCurso(null);
      setConteudos([]);
      return null;
    } finally {
      setLoading(false);
    }
  }, []);

  // Função para obter um conteúdo específico pelo ID
  const getConteudoById = useCallback((conteudoId) => {
    if (!conteudos || conteudos.length === 0) return null;
    return conteudos.find(conteudo => conteudo.id === parseInt(conteudoId, 10)) || null;
  }, [conteudos]);

  // Funções para gerenciar conteúdos concluídos
  const loadCompletedContent = useCallback((cursoId) => {
    try {
      const storedData = localStorage.getItem(`curso_${cursoId}_completed`);
      if (storedData) {
        setCompletedContent(JSON.parse(storedData));
      } else {
        setCompletedContent([]);
      }
    } catch (error) {
      console.error("Erro ao carregar conteúdos concluídos:", error);
      setCompletedContent([]);
    }
  }, []);

  // Verificar se o curso está 100% concluído
  const checkCourseCompletion = useCallback(() => {
    if (!conteudos || conteudos.length === 0 || !currentCurso) return false;
    
    const totalConteudos = conteudos.length;
    const completedCount = conteudos.filter(conteudo => 
      completedContent.includes(conteudo.id)
    ).length;
    
    // Se acabou de completar 100%, mostrar celebração
    if (totalConteudos > 0 && completedCount === totalConteudos) {
      return true;
    }
    
    return false;
  }, [conteudos, completedContent, currentCurso]);

  const markContentAsCompleted = useCallback((conteudoId) => {
    if (!currentCurso) return;
    
    setCompletedContent(prev => {
      // Se já estiver marcado como concluído, não faz nada
      if (prev.includes(conteudoId)) return prev;
      
      // Adiciona o ID do conteúdo à lista de concluídos
      const newCompleted = [...prev, conteudoId];
      
      // Salva no localStorage
      localStorage.setItem(
        `curso_${currentCurso.id}_completed`, 
        JSON.stringify(newCompleted)
      );
      
      // Verifica se o curso foi 100% completado com esta ação
      setTimeout(() => {
        // Verificamos após um pequeno timeout para garantir que o state foi atualizado
        if (checkCourseCompletion()) {
          setShowCourseCompletion(true);
        }
      }, 300);
      
      return newCompleted;
    });
  }, [currentCurso, checkCourseCompletion]);

  // Função para atualizar o curso atual
  const setCursoId = useCallback((id) => {
    fetchCursoById(id);
  }, [fetchCursoById]);

  // Carregar todos os cursos ao iniciar
  useEffect(() => {
    fetchCursos();
  }, [fetchCursos]);

  // Valor do contexto que será disponibilizado
  const contextValue = {
    cursos,
    currentCurso,
    conteudos,
    loading,
    error,
    completedContent,
    showCourseCompletion,
    setShowCourseCompletion,
    setCursoId,
    getConteudoById,
    markContentAsCompleted,
    fetchCursos,
    fetchCursoById,
    checkCourseCompletion
  };

  return (
    <CursoContext.Provider value={contextValue}>
      {children}
    </CursoContext.Provider>
  );
};

// Hook personalizado para usar o contexto
export const useCursoContext = () => {
  const context = useContext(CursoContext);
  if (context === undefined) {
    throw new Error('useCursoContext deve ser usado dentro de um CursoProvider');
  }
  return context;
};
