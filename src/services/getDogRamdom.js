import axios from "axios"

const api = "https://dog.ceo/api/breeds/image/random"

export const axiosDogRandom  = async () => {
    try {
        const res = await axios.get(api)
        // console.log("res.data",res.data)
        return res.data
    } catch (error) {
        console.log("error consola", error.message)
        throw Error(error)
    }

}