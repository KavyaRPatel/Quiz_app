import axios from 'axios'
export async function login(user) {
  try {
    const response = await axios.post('http://localhost:3000/', user);
    console.log("Here")
    return response.data;


  } catch (err) {
    console.log('err', err);
  }
}

export async function addQuiz(quiz) {
  try {
    const response = await axios.post('http://localhost:3000/add', quiz);

    return response.data;


  } catch (err) {
    console.log('err', err);
  }
}
export async function display() {
  try {
    const response = await axios.get('http://localhost:3000/quiz');

    return response.data;


  } catch (err) {
    console.log('err', err);
  }
}
