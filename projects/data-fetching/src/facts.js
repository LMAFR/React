import { CAT_ENDPOINT_DATA_URL } from './endpoints'

export const getFact = async() => {
    try {
        const res = await fetch(CAT_ENDPOINT_DATA_URL)
        if (!res.ok)
            throw new Error('Error fetching fact')
        const data = await res.json()
        const { fact } = data
        return fact
    } catch (err) {}
}