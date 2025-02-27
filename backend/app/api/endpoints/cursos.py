from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
from typing import List

from ...database import get_db
from ...schemas import schemas
from ...crud import curso

router = APIRouter()

@router.get("/", response_model=List[schemas.Curso])
def read_cursos(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    """
    Recupera todos os cursos.
    """
    cursos = curso.get_cursos(db, skip=skip, limit=limit)
    return cursos

@router.get("/{curso_id}", response_model=schemas.Curso)
def read_curso(curso_id: int, db: Session = Depends(get_db)):
    """
    Recupera um curso específico pelo ID.
    """
    db_curso = curso.get_curso(db, curso_id=curso_id)
    if db_curso is None:
        raise HTTPException(status_code=404, detail="Curso não encontrado")
    return db_curso

@router.post("/", response_model=schemas.Curso, status_code=status.HTTP_201_CREATED)
def create_curso_endpoint(curso_create: schemas.CursoCreate, db: Session = Depends(get_db)):
    """
    Cria um novo curso.
    """
    return curso.create_curso(db=db, curso=curso_create)

@router.put("/{curso_id}", response_model=schemas.Curso)
def update_curso_endpoint(curso_id: int, curso_update: schemas.CursoUpdate, db: Session = Depends(get_db)):
    """
    Atualiza um curso existente.
    """
    db_curso = curso.update_curso(db, curso_id=curso_id, curso_update=curso_update)
    if db_curso is None:
        raise HTTPException(status_code=404, detail="Curso não encontrado")
    return db_curso

@router.delete("/{curso_id}", status_code=status.HTTP_204_NO_CONTENT)
def delete_curso_endpoint(curso_id: int, db: Session = Depends(get_db)):
    """
    Remove um curso.
    """
    success = curso.delete_curso(db, curso_id=curso_id)
    if not success:
        raise HTTPException(status_code=404, detail="Curso não encontrado")
    return None
