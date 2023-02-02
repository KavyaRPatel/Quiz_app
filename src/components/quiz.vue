<template>
  <div>
    <h4>Quiz App</h4>
    <section class="quiz">
      <div class="quiz_info">
        <div class="option">
          <label v-for="question in questions" :key="question.ques">
            <span>{{ question.ques }}</span>

            <input
              type="radio"
              v-model="question.answer"
              v-bind:value="question.option1"
            />{{ question.option1 }}

            <input
              type="radio"
              v-model="question.answer"
              v-bind:value="question.option2"
            />{{ question.option2 }}

            <input
              type="radio"
              v-model="question.answer"
              v-bind:value="question.option3"
            />{{ question.option3 }}
            <button class="btn btn-submit" v-on:click="submit(question)">Submit</button>
          </label>
        </div>
        <button class="btn btn-info" v-on:click="next">Next</button>
        <button class="btn btn-primary" v-on:click="res()">
          Result
        </button>
        <label v-if="show">Score: {{ score }}</label>
      </div>
    </section>
  </div>
</template>

<script >
import { display } from "../../service";
export default {
  data() {
    return {
        currentQuestionIndex: 0,
      questions: [],
      score: 0,
      ques: {},
      result: {},
      show: false,
    };
  },
  computed: {
  currentQuestion() {
    return this.questions[this.currentQuestionIndex];
  }},
  methods: {
    next() {
      this.currentQuestionIndex =
        (this.currentQuestionIndex + 1) % this.questions.length;
    },
    submit(question){
        if (question.actualans == question.answer) {
        this.score++;
        console.log(this.score);
      }
    },
     

    res() {
        
      this.show = true;
      this.result = {
        score: this.score,
      };
    },
  },
  created() {
    display().then((response) => {
      this.questions = response;
    });
  },
};
</script>

<style scoped>
* {
  margin: 3%;
  align-items: center;
  padding: 0;
  box-sizing: border-box;
  font-family: "Montserrat", sans-serif;
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
  cursor: pointer;
  padding: 0.5rem 1rem;
  background-color: #2cce7d;
  color: #2d213f;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 1.2rem;
  border-radius: 0.5rem;
  width: 20%;
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
