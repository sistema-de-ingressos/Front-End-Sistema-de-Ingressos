import {axiosInstance} from "./axiosInstance.js";


export const buscarEventos = async (filtro) => {
    const response = await axiosInstance.get(`/eventos/buscar`, {
        params: {filtro: filtro}
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

export const comprarIngresso = async (dadosCompra) => {
    const response = await axiosInstance.post("/ingressos", dadosCompra)
    return response.data
}

export const getDetalhesEvento =  async (idEvento) => {
    const response = await axiosInstance.get(`/eventos/${idEvento}`)
    return response.data
}

export const buscarIngressoPorCpf = async (cpf) => {
    const response = await axiosInstance.get(`/ingressos/busca/${cpf}`)
    return response.data
}

export const getDetalhesCarrinho = async (idEvento) => {
    const response = await axiosInstance.get(`/eventos/carrinho/${idEvento}`)
    return response.data
}

export const getDetalhesCliente = async (cpf) => {
    const response = await axiosInstance.get(`/clientes/${cpf}`)
    return response.data
}