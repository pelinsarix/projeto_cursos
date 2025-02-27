from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
from typing import List

from ...database import get_db
from ...schemas import schemas
from ...crud import conteudo

router = APIRouter()

@router.get("/", response_model=List[schemas.Conteudo])
def read_conteudos(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    """
    Recupera todos os conteúdos.
    """
    conteudos = conteudo.get_conteudos(db, skip=skip, limit=limit)
    return conteudos

@router.get("/{conteudo_id}", response_model=schemas.Conteudo)
def read_conteudo(conteudo_id: int, db: Session = Depends(get_db)):
    """
    Recupera um conteúdo específico pelo ID.
    """
    db_conteudo = conteudo.get_conteudo(db, conteudo_id=conteudo_id)
    if db_conteudo is None:
        raise HTTPException(status_code=404, detail="Conteúdo não encontrado")
    return db_conteudo

@router.get("/curso/{curso_id}", response_model=List[schemas.Conteudo])
def read_conteudos_by_curso(curso_id: int, skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    """
    Recupera todos os conteúdos de um curso específico.
    """
    conteudos = conteudo.get_conteudos_by_curso(db, curso_id=curso_id, skip=skip, limit=limit)
    return conteudos

@router.post("/", response_model=schemas.Conteudo, status_code=status.HTTP_201_CREATED)
def create_conteudo_endpoint(conteudo_create: schemas.ConteudoCreate, db: Session = Depends(get_db)):
    """
    Cria um novo conteúdo.
    """
    return conteudo.create_conteudo(db=db, conteudo=conteudo_create)

@router.put("/{conteudo_id}", response_model=schemas.Conteudo)
def update_conteudo_endpoint(conteudo_id: int, conteudo_update: schemas.ConteudoUpdate, db: Session = Depends(get_db)):
    """
    Atualiza um conteúdo existente.
    """
    db_conteudo = conteudo.update_conteudo(db, conteudo_id=conteudo_id, conteudo_update=conteudo_update)
    if db_conteudo is None:
        raise HTTPException(status_code=404, detail="Conteúdo não encontrado")
    return db_conteudo

@router.delete("/{conteudo_id}", status_code=status.HTTP_204_NO_CONTENT)
def delete_conteudo_endpoint(conteudo_id: int, db: Session = Depends(get_db)):
    """
    Remove um conteúdo.
    """
    success = conteudo.delete_conteudo(db, conteudo_id=conteudo_id)
    if not success:
        raise HTTPException(status_code=404, detail="Conteúdo não encontrado")
    return None
