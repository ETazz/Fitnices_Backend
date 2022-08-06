import fitniceAPI from "../config/api"


//recieving TargetMuscleCategories from api
//awaiting responce from axios
//returning our response to console
export async function getTargetMuscleCategories() {
    const response = await fitniceAPI.get('/api/targetmusclecategories')
    console.log(response)
    return response.data
}