import axios from "axios"

const BACKEND_URL = `${import.meta.env.VITE_BACKEND_URL}/api`

const getAll = () => {
    return axios
        .get(`${BACKEND_URL}/equipment`)
        .then(res => res.data)
}

export default {
    getAll
}