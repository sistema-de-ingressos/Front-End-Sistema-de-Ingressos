// Arquivo que possui a instância de axios que deve ser utilizada para fazer requisições para a API do Back-End
import axios from "axios";

const BASE_URL = "http://localhost:8080/"

export const axiosInstance = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    }
});