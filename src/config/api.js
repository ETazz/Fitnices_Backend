import axios from 'axios';
const fitniceAPI = axios.create({
    baseURL: 'http://localhost:3000'
})

fitniceAPI.interceptors.request.use((req) => {
    const token = sessionStorage.getItem('token');
    console.log("set token header:", token);
    if (token) {
        req.headers["Authorization"] = `Bearer ${token}`
    }
    return req;
})
export default fitniceAPI