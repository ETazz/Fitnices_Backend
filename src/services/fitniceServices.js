// import {categories} from '../utils/categories'
import fitniceAPI from "../config/api";


//recieving FitNices data from api by id
//awaiting responce from axios
//returning our response to console
export async function getFitNice(id) {
    const response = await fitniceAPI.get(`/api/fitnices/${id}`);
    console.log(response);
    return response.data;
}

//recieving FitNices data from api
//awaiting responce from axios
//returning our response to console
export async function getFitNices() {
    const response = await fitniceAPI.get('/api/fitnices');
    console.log(response)
    return response.data
}


//recieving CreateFitnices from api
//awaiting responce from axios
//returning our response to console
export async function createFitNice(fitnice) {
    const response = await fitniceAPI.post('/api/fitnices', fitnice)
    console.error(response)
    return response.data
}

//recieving deleteFitNice from api
//awaiting responce from axios
//returning our response to console
export async function deleteFitNice(id) {
    const response = await fitniceAPI.delete(`/api/fitnices/${id}`)
    console.log(response)
    return response.data
}

//recieving updateFitNice from api
//awaiting responce from axios
//returning our response to console
export async function updateFitNice(data) {
    const response = await fitniceAPI.put(`/api/fitnices/${data.id}`,{body: data.body, targetmusclecategory_id: data.targetmusclecategory_id, category_id: data.category_id,  exercise_id: data.exercise_id})
    console.log(response)
	return response.data
}