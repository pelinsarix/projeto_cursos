import uvicorn
import os
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from .api.api import api_router
from .database import engine
from .models import models

# Criar tabelas no banco de dados
models.Base.metadata.create_all(bind=engine)

# Inicializar aplicação FastAPI
app = FastAPI(
    title="API de Plataforma de Cursos",
    description="API para gerenciar cursos e conteúdos de uma plataforma de aprendizagem",
    version="1.0.0",
)

# Configuração CORS para permitir requisições do frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Em produção, especifique origens permitidas
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Incluir rotas da API
app.include_router(api_router)

@app.get("/")
def read_root():
    return {"message": "Bem-vindo à API da Plataforma de Cursos!"}

# Se executar diretamente este arquivo
if __name__ == "__main__":
    port = int(os.environ.get("PORT", 8000))
    uvicorn.run("app.main:app", host="0.0.0.0", port=port, reload=False)
