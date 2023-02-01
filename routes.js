import login from "./src/components/login.vue"
import quiz from "./src/components/quiz.vue"
import add from "./src/components/addQuestion.vue"


export default [
    { path: '/', component: login },
    { path: '/quiz', component: quiz },
    { path: '/add', component: add }

]