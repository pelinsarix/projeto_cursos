from sqlalchemy.orm import Session
from ..models.models import Curso
from ..schemas.schemas import CursoCreate, CursoUpdate

def get_cursos(db: Session, skip: int = 0, limit: int = 100):
    return db.query(Curso).offset(skip).limit(limit).all()

def get_curso(db: Session, curso_id: int):
    return db.query(Curso).filter(Curso.id == curso_id).first()

def create_curso(db: Session, curso: CursoCreate):
    db_curso = Curso(
        titulo=curso.titulo,
        descricao=curso.descricao,
        imagem_url=curso.imagem_url,
        ativo=curso.ativo
    )
    db.add(db_curso)
    db.commit()
    db.refresh(db_curso)
    return db_curso

def update_curso(db: Session, curso_id: int, curso_update: CursoUpdate):
    db_curso = get_curso(db, curso_id)
    if db_curso:
        update_data = curso_update.dict(exclude_unset=True)
        for key, value in update_data.items():
            setattr(db_curso, key, value)
        db.commit()
        db.refresh(db_curso)
    return db_curso

def delete_curso(db: Session, curso_id: int):
    db_curso = get_curso(db, curso_id)
    if db_curso:
        db.delete(db_curso)
        db.commit()
        return True
    return False
