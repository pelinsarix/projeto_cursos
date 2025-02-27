from sqlalchemy.orm import Session
from ..models.models import Conteudo
from ..schemas.schemas import ConteudoCreate, ConteudoUpdate

def get_conteudos(db: Session, skip: int = 0, limit: int = 100):
    return db.query(Conteudo).offset(skip).limit(limit).all()

def get_conteudo(db: Session, conteudo_id: int):
    return db.query(Conteudo).filter(Conteudo.id == conteudo_id).first()

def get_conteudos_by_curso(db: Session, curso_id: int, skip: int = 0, limit: int = 100):
    return db.query(Conteudo).filter(Conteudo.curso_id == curso_id).order_by(Conteudo.ordem).offset(skip).limit(limit).all()

def create_conteudo(db: Session, conteudo: ConteudoCreate):
    db_conteudo = Conteudo(
        titulo=conteudo.titulo,
        tipo=conteudo.tipo,
        ordem=conteudo.ordem,
        texto=conteudo.texto,
        video_url=conteudo.video_url,
        curso_id=conteudo.curso_id
    )
    db.add(db_conteudo)
    db.commit()
    db.refresh(db_conteudo)
    return db_conteudo

def update_conteudo(db: Session, conteudo_id: int, conteudo_update: ConteudoUpdate):
    db_conteudo = get_conteudo(db, conteudo_id)
    if db_conteudo:
        update_data = conteudo_update.dict(exclude_unset=True)
        for key, value in update_data.items():
            setattr(db_conteudo, key, value)
        db.commit()
        db.refresh(db_conteudo)
    return db_conteudo

def delete_conteudo(db: Session, conteudo_id: int):
    db_conteudo = get_conteudo(db, conteudo_id)
    if db_conteudo:
        db.delete(db_conteudo)
        db.commit()
        return True
    return False
