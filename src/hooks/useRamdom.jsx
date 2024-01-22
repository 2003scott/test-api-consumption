import { useEffect,useState } from "react"
import { axiosDogRandom } from "../services/getDogRamdom"

export const useRamdom = () => { 
    const [dog, setDog] = useState({})
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    
    useEffect(() => {
        const dogRandom = async () => {
            try {
                const data = await axiosDogRandom()
                setDog(data.message)
                setLoading(false)
            } catch (error) {
                setError(error)
                setLoading(false)
            }
        }
    
        dogRandom();
        }, [])

    return { dog, loading, error }
}
