import fitniceAPI from "../config/api"

export async function getTargetMuscleCategories() {
    const response = await fitniceAPI.get('/api/targetmusclecategories')
    console.log(response)
    return response.data
}