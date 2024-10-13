import axios from "axios";
import { useEffect, useState } from "react";

const useApi = (url) => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);

    const fetchDataByCollectId = async (collectId) => {
        try {
            const response = await axios.get(`${url}?collectId=${collectId}`)
            setData(response.data)
        } catch (error) {
            setError(error)
        }
    }
    const fetchData = async () => {
        try {
            const response = await axios.get(`${url}`)
            setData(response.data)
        } catch (error) {
            setError(error)
        }
    }

    const updateData = async (id, bodyChange) => {
        try {
            const response = await axios.put(`${url}/${id}`, bodyChange)
            fetchData()
        } catch (error) {
            setError(error)
        }
    }

    const addData = async (body) => {
        try {
            const response = await axios.post(url, body)
            fetchData()
        } catch (error) {
            setError(error)
        }
    }

    useEffect(() => {
        fetchData()
    }, [url])

    return { data, error, updateData, addData, fetchData, setData, fetchDataByCollectId }
}


export default useApi;