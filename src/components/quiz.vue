<template>
    <div>
        <h4>Quiz App</h4>
        <section class="quiz">
            <div class="quiz_info">
                <span>score {{ score }}/{{ questions.length }}</span>

                <div class="option">
                    <label >

                    </label>
                </div>
            </div>
        </section>

    </div>
</template>

<script>
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
    let value = 0
    questions.value.map(q => {
        if (q.selected = !null && q.selected == q.answer) {
            value++;
        }
    })
    return value;
})

const NextQuestion = () => {
	if (currentQuestion.value < questions.value.length - 1) {
		currentQuestion.value++
		return
	}
	
	quizCompleted.value = true
}


</script>

<style>

</style>
