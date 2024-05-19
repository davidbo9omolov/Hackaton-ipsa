import axios from 'axios'
const defaultPath = 'https://drive.google.com/file/d/'


export const getDiplomas = async (id) => {
    try {
        const diploma = await axios.get(`${defaultPath}${id}`)
        return diploma
    } catch (err) {
        console.log(err)
    }
}