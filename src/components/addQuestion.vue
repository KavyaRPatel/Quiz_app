<template>
    <div class="add-form">
        <form v-on:submit.prevent>
            <label for="Question">Question:</label>
            <input type="text" id="question" name="question" placeholder="Question" v-model="question" />
            <label for="option1">option1:</label>
            <input type="text" id="option_1" name="option_1" placeholder="option_1" v-model="option_1" />
            <label for="option2">option2:</label>
            <input type="text" id="option_2" name="option_2" placeholder="option_2" v-model="option_2" />
            <label for="option3">option3:</label>
            <input type="text" id="option_3" name="option_3" placeholder="option_3" v-model="option_3" />
            <label for="answer">Answer:</label>
            <input type="text" id="answer" name="answer" placeholder="answer" v-model="answer" />
            <button class="btn btn-primary" v-on:click="addQuiz">Add</button>

        </form>
    </div>
</template>

<script>
import {addQuiz} from '../../service'
export default {
    data() {
        return {
            question: '',
            option_1: '',
            option_2: '',
            option_3: '',
            answer: ''

        }

    },
    methods: {
        addQuiz() {
            const quiz = {
                question: this.question,
                option_1: this.option_1,
                option_2: this.option_2,
                option_3: this.option_3,
                answer: this.answer
            }
            

            addQuiz(quiz).then((response)=>{
             //   this..push(data);
                console.log("heree")
                console.log(response)


            })
        }
    }
}
</script>

<style>
form {
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 50%;
    height: 50%;
    background: #fff;

}

button {
    margin-top: 10px;
    margin-bottom: 10p;
    display: flex;
    align-items: center;
    width: 10%;
    flex-direction: column;
    text-align: center;
}
</style>