import axios from 'axios'

export const getData = async() =>{
    try {
        const url = 'https://script.googleusercontent.com/macros/echo?user_content_key=DMvvWnolvQoToQ2ty8bg1JyfRTsUmsDCrHkPxEwIz1qW4raIV8BX58Vtf0pZjzBiA5ZRBCzNmahH5JF9rpkC_zAQwE6_zUn8m5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnOrpNASOhP7PIg9PTwiZF2HlfikuMRU2DRBNZB-0JhkS9lHN1ScTcTGbnAu4CknjJJCycozCDlKamYc-BLjAvRkaIvzac7DGcQ&lib=MZXzLAdfa8Ue6SF5_xPU0gT8Rq9Cotphv'
        const response = await axios.get(url)
        return response.data
    } catch (error) {
        return error
    }
}