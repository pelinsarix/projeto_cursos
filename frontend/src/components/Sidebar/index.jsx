"use client"

import { useState, useEffect } from "react"
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
  ModuleSection,
  ModuleHeader,
  ModuleContent,
  ProgressContainer,
  ProgressIndicator,
  ProgressBar,
  ProgressText,
  SidebarFooter,
  Badge,
  TooltipWrapper,
  Tooltip
} from "./styles"
import { 
  ChevronDown, 
  Menu, 
  Book, 
  Video, 
  FileText, 
  Check,
  Award,
  Clock
} from "react-feather"
import { useCursoContext } from "../../contexts/CursoContext"

// Modificamos para não agrupar por tipo, apenas mantemos a ordenação
const groupByModule = (conteudos) => {
  // Se o curso tiver módulos, vamos respeitá-los
  // Caso contrário, todos os conteúdos vão em um único grupo
  const modules = {};
  
  conteudos.forEach(conteudo => {
    // Prioriza módulo_id se existir, ou usa 'default' para manter tudo junto
    const moduleId = conteudo.modulo_id || 'default';
    
    if (!modules[moduleId]) {
      modules[moduleId] = {
        id: moduleId,
        titulo: conteudo.modulo || "Conteúdos do Curso", // Título único para todos os conteúdos
        conteudos: []
      };
    }
    modules[moduleId].conteudos.push(conteudo);
  });
  
  return Object.values(modules);
};

// Alterada para não segmentar por tipo
const getModuleTitle = () => {
  return "Conteúdos do Curso"; // Título único para todos os conteúdos
};

const getProgressPercentage = (conteudos, completedIds = []) => {
  if (!conteudos || conteudos.length === 0) return 0;
  const completed = conteudos.filter(content => completedIds.includes(content.id));
  return Math.round((completed.length / conteudos.length) * 100);
};

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const { cursos, currentCurso, conteudos, completedContent, loading, setCursoId } = useCursoContext();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [expandedModules, setExpandedModules] = useState({});
  const navigate = useNavigate();
  const params = useParams();
  
  const cursoId = params?.cursoId;
  const conteudoId = params?.conteudoId;
  
  const handleCursoSelect = (id) => {
    setCursoId(id);
    navigate(`/curso/${id}`);
    setDropdownOpen(false);
  };

  const handleConteudoSelect = (cursoId, conteudoId) => {
    navigate(`/curso/${cursoId}/conteudo/${conteudoId}`);
  };

  const toggleModule = (moduleId) => {
    setExpandedModules(prev => ({
      ...prev,
      [moduleId]: !prev[moduleId]
    }));
  };

  const getContentIcon = (tipo) => {
    switch (tipo) {
      case "video":
        return <Video size={16} />;
      case "texto":
        return <FileText size={16} />;
      default:
        return <Book size={16} />;
    }
  };

  // Verificar se um conteúdo está concluído
  const isCompleted = (contentId) => completedContent.includes(contentId);

  // Agrupar conteúdos por módulo, mas sem diferenciar por tipo
  const moduleGroups = conteudos ? groupByModule(conteudos) : [];
  
  // Calcular progresso total do curso
  const totalProgress = getProgressPercentage(conteudos, completedContent);

  return (
    <SidebarContainer $isOpen={isOpen}>
      <SidebarHeader>
        <SidebarTitle>
          <Book size={20} />
          <span>Plataforma de Cursos</span>
        </SidebarTitle>
        <SidebarToggle onClick={toggleSidebar} aria-label="Alternar sidebar">
          <Menu size={18} />
        </SidebarToggle>
      </SidebarHeader>

      <CourseDropdown>
        <DropdownButton onClick={() => setDropdownOpen(!dropdownOpen)}>
          <span>{currentCurso ? currentCurso.titulo : "Selecione um curso"}</span>
          <ChevronDown size={16} style={{ transform: dropdownOpen ? "rotate(180deg)" : "rotate(0)" }} />
        </DropdownButton>

        {dropdownOpen && (
          <DropdownContent>
            {cursos && cursos.length > 0 ? (
              cursos.map((curso) => (
                <DropdownItem
                  key={curso.id}
                  onClick={() => handleCursoSelect(curso.id)}
                  $isActive={Number(cursoId) === curso.id}
                >
                  {curso.titulo}
                  {curso.novos > 0 && <Badge $variant="warning" $ml="auto">Novo</Badge>}
                </DropdownItem>
              ))
            ) : (
              <DropdownItem>Carregando cursos...</DropdownItem>
            )}
          </DropdownContent>
        )}
      </CourseDropdown>

      <SidebarContent>
        {loading ? (
          <NoContentMessage>Carregando conteúdos...</NoContentMessage>
        ) : currentCurso ? (
          <>
            {/* Progresso do curso */}
            <ProgressContainer>
              <ProgressIndicator>
                <ProgressBar $progress={totalProgress} />
              </ProgressIndicator>
              <ProgressText>
                <div>Progresso do curso</div>
                <span>{totalProgress}%</span>
              </ProgressText>
            </ProgressContainer>

            {moduleGroups.length > 0 ? (
              moduleGroups.map((module) => (
                <ModuleSection key={module.id}>
                  <ModuleHeader 
                    onClick={() => toggleModule(module.id)} 
                    $isOpen={expandedModules[module.id]}
                  >
                    <span>{module.titulo}</span>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <Badge $variant="outline">
                        {module.conteudos.length}
                      </Badge>
                      <ChevronDown size={16} />
                    </div>
                  </ModuleHeader>
                  <ModuleContent $isOpen={expandedModules[module.id]}>
                    <ContentList>
                      {module.conteudos.sort((a, b) => a.ordem - b.ordem).map((conteudo) => (
                        <ContentItem 
                          key={conteudo.id} 
                          $isActive={Number(conteudoId) === conteudo.id}
                          $isCompleted={isCompleted(conteudo.id)}
                        >
                          <ContentItemLink 
                            onClick={() => handleConteudoSelect(cursoId, conteudo.id)}
                            aria-label={`${conteudo.titulo} - ${isCompleted(conteudo.id) ? 'Concluído' : 'Não concluído'}`}
                          >
                            <ContentItemNumber 
                              $isActive={Number(conteudoId) === conteudo.id}
                              $isCompleted={isCompleted(conteudo.id)}
                            >
                              {isCompleted(conteudo.id) ? <Check size={14} /> : conteudo.ordem}
                            </ContentItemNumber>
                            <ContentItemText $isActive={Number(conteudoId) === conteudo.id}>
                              {getContentIcon(conteudo.tipo)}
                              <span>{conteudo.titulo}</span>
                            </ContentItemText>
                            <TooltipWrapper>
                              {conteudo.duracao && (
                                <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.75rem', color: 'var(--text-light)' }}>
                                  <Clock size={14} />
                                  <span>{conteudo.duracao}</span>
                                </div>
                              )}
                              <Tooltip>
                                {conteudo.descricao || conteudo.texto?.substring(0, 100) || conteudo.titulo}
                                {conteudo.texto?.length > 100 ? '...' : ''}
                              </Tooltip>
                            </TooltipWrapper>
                          </ContentItemLink>
                        </ContentItem>
                      ))}
                    </ContentList>
                  </ModuleContent>
                </ModuleSection>
              ))
            ) : (
              <NoContentMessage>Nenhum conteúdo disponível para este curso.</NoContentMessage>
            )}
          </>
        ) : (
          <NoContentMessage>Selecione um curso para ver os conteúdos.</NoContentMessage>
        )}
      </SidebarContent>
      
      <SidebarFooter>
        {currentCurso && (
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Award size={16} />
            <span style={{ fontSize: '0.875rem' }}>Certificado disponível</span>
          </div>
        )}
      </SidebarFooter>
    </SidebarContainer>
  );
};

export default Sidebar;

