from pydantic import BaseModel
from typing import List, Optional

# Schemas para Conteúdo
class ConteudoBase(BaseModel):
    titulo: str
    tipo: str
    ordem: int
    texto: Optional[str] = None
    video_url: Optional[str] = None

class ConteudoCreate(ConteudoBase):
    curso_id: int

class ConteudoUpdate(ConteudoBase):
    titulo: Optional[str] = None
    tipo: Optional[str] = None
    ordem: Optional[int] = None

class Conteudo(ConteudoBase):
    id: int
    curso_id: int
    
    class Config:
        orm_mode = True

# Schemas para Curso
class CursoBase(BaseModel):
    titulo: str
    descricao: str
    imagem_url: Optional[str] = None
    ativo: bool = True

class CursoCreate(CursoBase):
    pass

class CursoUpdate(BaseModel):
    titulo: Optional[str] = None
    descricao: Optional[str] = None
    imagem_url: Optional[str] = None
    ativo: Optional[bool] = None

class Curso(CursoBase):
    id: int
    conteudos: List[Conteudo] = []
    
    class Config:
        orm_mode = True
