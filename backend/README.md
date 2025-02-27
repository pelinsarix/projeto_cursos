# Backend da Plataforma de Cursos

Este é o backend para uma plataforma de cursos online. Ele gerencia cursos e seus conteúdos através de uma API RESTful usando FastAPI e SQLite.

## Estrutura do Projeto

```
backend/
├── app/
│   ├── api/               # Endpoints da API
│   ├── crud/              # Operações CRUD
│   ├── models/            # Modelos de dados (SQLAlchemy)
│   ├── schemas/           # Schemas Pydantic
│   ├── database.py        # Configuração do banco de dados
│   └── main.py            # Aplicação FastAPI
└── requirements.txt       # Dependências
```

## Como executar

1. Instale as dependências:
```bash
pip install -r requirements.txt
```

2. Inicie o servidor:
```bash
uvicorn app.main:app --reload
```

3. Acesse a documentação da API:
```
http://localhost:8000/docs
```

## Endpoints

- `GET /cursos/`: Lista todos os cursos
- `GET /cursos/{id}`: Obtém um curso específico
- `POST /cursos/`: Cria um novo curso
- `PUT /cursos/{id}`: Atualiza um curso
- `DELETE /cursos/{id}`: Remove um curso

- `GET /conteudos/`: Lista todos os conteúdos
- `GET /conteudos/{id}`: Obtém um conteúdo específico
- `GET /cursos/{curso_id}/conteudos`: Lista conteúdos de um curso
- `POST /conteudos/`: Cria um novo conteúdo
- `PUT /conteudos/{id}`: Atualiza um conteúdo
- `DELETE /conteudos/{id}`: Remove um conteúdo
