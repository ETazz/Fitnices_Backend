import fitniceAPI from "../config/api"

export async function getCategories() {
    const response = await fitniceAPI.get('/api/categories')
    return response.data
}

