import axios from 'axios';

// Configuração base da API
const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:3000/api',
  timeout: 15000, // Tempo limite aumentado para 15 segundos
  headers: {
    'Content-Type': 'application/json',
  }
});

// Interceptor para processar URLs de vídeo
api.interceptors.response.use(
  response => {
    // Se a resposta contiver conteúdos de curso, processar URLs de vídeo
    if (response.data && Array.isArray(response.data)) {
      response.data = response.data.map(item => {
        if (item.tipo === 'video' && item.url) {
          // Garantir que URLs de vídeo estejam completas
          if (!item.url.startsWith('http') && !item.url.startsWith('/')) {
            item.url = `${api.defaults.baseURL}/videos/${item.url}`;
          }
        }
        return item;
      });
    }
    return response;
  },
  error => {
    console.error('Erro na API:', error.response?.data || error.message);
    return Promise.reject(error);
  }
);

export default api;

