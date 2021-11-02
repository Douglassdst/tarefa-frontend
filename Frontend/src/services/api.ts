import axios from 'axios'
 
const api = axios.create({
    baseURL: 'https://backend-cadastro-aluno.herokuapp.com',
})
 
export default api;