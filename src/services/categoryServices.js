import fitniceAPI from "../config/api"

//recieving Categories data from api
//awaiting responce from axios
//returning our response to console
export async function getCategories() {
    const response = await fitniceAPI.get('/api/categories')
    return response.data
}

