<template>
    <div>
        <h4>Quiz App</h4>
        <section class="quiz">
            <div class="quiz_info">
                <span class="score">Score {{ score }}/{{ questions.length }}</span>
                <span class="questions"> {{ getQuestion.question }}</span>


                <div class="option">
                    <label v-for="(options,index) in getQuestion.options" :key="index" >
                        <input type="radio" name="getQuestion.index" value="index">

                    </label>
                </div>
            </div>
        </section>

    </div>
</template>

<script setup>
import { ref, computed } from 'vue';

const questions = ref([
    {
        question: 'What is the shortcut for Copy?',
        answer: 0,
        options: [
            'Ctrl+C',
            'Ctrl+V',
            'Ctrl+P'
        ],
        selected: null
    },

    {
        question: 'What is capital of India?',
        answer: 2,
        options: [
            'Gujarat',
            'Rajasthan',
            'Delhi'
        ],
        selected: null
    }
])
const currentQuestion = ref(0);
const score = computed(() => {
    let count = 0
    questions.value.map(q => {
        if (q.selected = !null && q.selected == q.answer) {
            count++;
        }
    })
    return count;
})

// const NextQuestion = () => {
// 	if (currentQuestion.value < questions.value.length - 1) {
// 		currentQuestion.value++
// 		return value
// 	}
	
// 	quizCompleted.value = true
// }

 const getQuestion=computed(()=>{
    let question = questions.value[currentQuestion.value];
    question.index = currentQuestion.value;
    return question;    
    
})


</script>

<style>

</style>
