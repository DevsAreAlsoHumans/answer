<template>
  <div>
    <h1>Quizz: {{ quizzId }}</h1>
    <div v-if="quizz">
      <h2>{{ quizz.name }}</h2>
      <QuestionCard :question="quizz.questions[questionIndex]" />
      <!-- Autres détails du quizz -->
      <span>{{ questionIndex }}</span>
      <button @click="questionIndex++">+1</button>
      <button @click="questionIndex--">-1</button>
    </div>

    <div v-else>
      <p>Quizz non trouvé.</p>
    </div>
  </div>
</template>

<script>
import data from "@/assets/data.json";
import QuestionCard from "./QuestionCard.vue"

export default {
  name: 'QuizzItem',
  props: ['quizzId'],
  data (params) {
    return {
      quizz: data.quizz.filter(quiz => quiz.id==params.quizzId)[0],
      questionIndex: 0,
    }
  },
  components: {
    QuestionCard,
  }
/*  computed: {
    quizz() {
      return this.$route.params.quizzId
        ? this.$route.params.quizzId
        : null;
    },
  },
*/
}
</script>
