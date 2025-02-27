from sqlalchemy import Boolean, Column, ForeignKey, Integer, String, Text
from sqlalchemy.orm import relationship

from ..database import Base

class Curso(Base):
    __tablename__ = "cursos"

    id = Column(Integer, primary_key=True, index=True)
    titulo = Column(String, index=True)
    descricao = Column(Text)
    imagem_url = Column(String)
    ativo = Column(Boolean, default=True)
    
    # Relacionamento com conteúdos
    conteudos = relationship("Conteudo", back_populates="curso", cascade="all, delete-orphan")

class Conteudo(Base):
    __tablename__ = "conteudos"

    id = Column(Integer, primary_key=True, index=True)
    titulo = Column(String, index=True)
    tipo = Column(String)  # "texto", "video", "quiz", etc
    ordem = Column(Integer)
    texto = Column(Text, nullable=True)
    video_url = Column(String, nullable=True)
    curso_id = Column(Integer, ForeignKey("cursos.id"))
    
    # Relacionamento com o curso
    curso = relationship("Curso", back_populates="conteudos")
