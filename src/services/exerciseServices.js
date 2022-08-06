import fitniceAPI from "../config/api"

//recieving ExerciseCategories data from api
//awaiting responce from axios
//returning our response to console
export async function getExercises() {
    const response = await fitniceAPI.get('/api/exercises')
    return response.data
}
