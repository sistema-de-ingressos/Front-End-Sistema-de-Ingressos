import {axiosInstance} from "./axiosInstance.js";


export const buscarEventos = async (dadosBusca) => {
    const response = await axiosInstance.get("/eventos", {
        params: dadosBusca
    })
    return response.data
}

export const getEventosDestaque = async () => {
    const response = await axiosInstance.get("/eventos/destaque")
    return response.data
}

export const getEventosProximos = async () => {
    const response = await axiosInstance.get("/eventos/proximos")
    return response.data
}

export const getIngressos =  async (dadosPessoa) => {
    const response =  await axiosInstance.post("/ingressos", dadosPessoa)
    return response.data
}

export const comprarIngresso = async (dadosCompra) => {
    const response = await axiosInstance.post("/comprar", dadosCompra)
    return response.data
}

export const getDetalhesEvento =  async (idEvento) => {
    const response = await axiosInstance.get(`/eventos/${idEvento}`)
    return response.data
}

