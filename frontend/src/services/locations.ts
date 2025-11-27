import axios from "axios"

const baseUrl = `${import.meta.env.VITE_BACKEND_URL}/api/locations`

const getAll = () => {
    return axios
        .get(baseUrl)
        .then(res => res.data)
}

const create = (newLocation: Object) => {
    return axios
        .post(baseUrl, newLocation)
        .then(res => res.data)
}

const put = (id: number, newLocation: Object) => {
    return axios
        .put(`${baseUrl}/${id}`, newLocation)
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