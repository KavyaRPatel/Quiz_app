<template>
    <div>
        <h4>Quiz App</h4>
        <section class="quiz">
            <div class="quiz_info">
                <!-- <span class="score">Score {{ score }}/{{ questions.length }}</span> -->


                <div class="option">
                    <label v-for="questions in question" :key="questions">
                        <input type="radio" name="" value="index">
                        <p>{{ questions.ques }}</p>
                        <p>{{ questions.option1 }}</p>
                        <p>{{ questions.option2 }}</p>
                        <p>{{ questions.option3 }}</p>
                        

                    </label>
                    <button class="btn btn-info">Next</button>
                </div>
            </div>
        </section>

    </div>
</template>

<script >
import {display} from '../../service'
export default{
    data(){
    return{
        question:[]

    }
},
created() {
      display().then((response) => {

        this.question = response;

      })
    }
}





</script>

<style scoped>
*{
    margin: 3%;
    align-items: center;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
}

body {
    background-color: #d8c6f0;
    color: rgb(0, 0, 0);
}

h1 {
    font-size: 2rem;
    margin-bottom: 2rem;
}

.quiz {
    background-color: #dcc5fc;
    padding: 1rem;
    width: 100%;
    max-width: 640px;
}


.option {
    padding: 1rem;
    display: block;
    background-color: #c7adeb;
    margin-bottom: 0.5rem;
    border-radius: 0.5rem;
    cursor: pointer;
}



.option.correct {
    background-color: #2cce7d;
}

.option.wrong {
    background-color: #ff5a5f;
}

.option:last-of-type {
    margin-bottom: 0;
}

.option.disabled {
    opacity: 0.5;
}
/* 
.option input {
    display: none;
} */

button {
    appearance: none;
    outline: none;
    border: none;
    cursor: pointer;
    padding: 0.5rem 1rem;
    background-color: #2cce7d;
    color: #2d213f;
    font-weight: 700;
    text-transform: uppercase;
    font-size: 1.2rem;
    border-radius: 0.5rem;
}

button:disabled {
    opacity: 0.5;
}

h2 {
    font-size: 2rem;
    margin-bottom: 2rem;
    text-align: center;
}


</style>
