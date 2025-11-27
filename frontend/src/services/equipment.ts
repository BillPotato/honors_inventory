import type { EquipmentType } from "../utils/interfaces"
import axios from "axios"

const baseUrl = `${import.meta.env.VITE_BACKEND_URL}/api/equipment`

const getAll = () => {
    return axios
        .get(baseUrl)
        .then(res => res.data)
}

const create = (newEquipment: EquipmentType) => {
    return axios
        .post(baseUrl, newEquipment)
        .then(res => res.data)
}

const put = (id: number, newEquipment: EquipmentType) => {
    return axios
        .put(`${baseUrl}/${id}`, newEquipment)
        .then(res => res.data)
}

const del = (id: number) => {
    return axios
        .delete(`${baseUrl}/${id}`)
        .then(res => res.data)
}

export default {
    getAll,
    create,
    put,
    del
}