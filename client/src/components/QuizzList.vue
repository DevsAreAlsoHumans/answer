<template>
    <div>
      <h1>Liste des Quizz</h1>
      <ul>
        <li v-for="quizz in items" :key="quizz.name">
          <router-link :to="`/quizz/${quizz.id}`">{{ quizz.name }}</router-link>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    name: 'QuizzList',
    props: ['items'],  // Reçoit les données des quizz passées en prop
  }
  </script>
  