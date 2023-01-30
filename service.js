import axios from 'axios'
export async function login() {
    try {
        await axios.post('http://localhost:3000/');
    } catch(err){
        console.log('sdksjkhsl', err);
    }
    // return response.data;
}