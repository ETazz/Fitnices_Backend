// import {categories} from '../utils/categories'
import fitniceAPI from "../config/api";

// function transformFitNice(fitnice) {
// 	const category = categories.find(category => category.id === fitnice.category_id)
// 	return {
// 		author: "Test",
// 		category: category.name, 
// 		posted: fitnice.created_at,
// 		body: fitnice.body
// 	}
// }

export async function getFitNices() {
    const response = await fitniceAPI.get('/api/fitnices');
    console.log(response)
    return response.data
}

// this may be where i am getting id -infinty


export async function getFitNice(id) {
    const response = await fitniceAPI.get(`/api/fitnices/${id}`);
    console.log(response)
    return response.data
}
export async function createFitNice(fitnice) {
    const response = await fitniceAPI.post('/api/fitnices', fitnice)
    console.log(response)
    return response.data
}

export async function deleteFitNice(id) {
    const response = await fitniceAPI.delete(`/api/fitnices/${id}`);
    console.log(response)
    return response.data
}

export async function updateFitNice(data) {
    const response = await fitniceAPI.put(`/api/fitnices/${data.id}`,{body: data.body, category_id: data.category_id})
    console.log(response)
	return response.data
}