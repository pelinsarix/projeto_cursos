import axios from "axios"

const api = axios.create({
  baseURL: "https://projeto-cursos.onrender.com",
})

export default api

