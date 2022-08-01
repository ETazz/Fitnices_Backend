import fitniceAPI from "../config/api"

export async function getExercises() {
    const response = await fitniceAPI.get('/api/exercises')
    return response.data
}
