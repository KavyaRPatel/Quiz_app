import login from "./src/components/login.vue"
import main from "./src/components/main.vue"


export default [
    { path: '/', component: login },
    { path: '/quiz', component: main }
]