import axios from 'axios'
export async function login(user) {
    try {
      const response= await axios.post('http://localhost:3000/', user);
      console.log("Here")
      return response.data;


    } catch (err) {
        console.log('err', err);
    }
}