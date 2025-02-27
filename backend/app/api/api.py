from fastapi import APIRouter
from .endpoints import cursos, conteudos

api_router = APIRouter()

# Incluir rotas para cursos
api_router.include_router(cursos.router, prefix="/cursos", tags=["cursos"])

# Incluir rotas para conteúdos
api_router.include_router(conteudos.router, prefix="/conteudos", tags=["conteudos"])
