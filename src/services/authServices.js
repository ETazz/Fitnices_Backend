import fitniceAPI from "../config/api"

//recieving SignUp data from api
//awaiting responce from axios
//returning our response to console
export async function signUp(data) {
	const response = await fitniceAPI.post('/api/auth/sign_up', data);
	return response.data 
}
//recieving SignIn data from api
//awaiting responce from axios
//returning our response to console
export async function signIn(data) {
	const response = await fitniceAPI.post('/api/auth/sign_in', data);
	return response.data
}
//recieving SignOut
//awaiting responce from axios
//returning our response to console
export async function signOut(data) {
	sessionStorage.clear();
	return "Logged Out";
}