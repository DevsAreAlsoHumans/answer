//import Vue from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import QuizzList from './components/QuizzList.vue'
import Quizz from './components/Quizz.vue'
import data from "@/assets/data.json"

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HelloWorld,
    props: { msg: "Bienvenu", pseudo: "Atman" }
  },
  {
    path: '/quizz-list',
    name: 'QuizzList',
    component: QuizzList,
    props: { items: data.quizz },
  },
  {
    path: '/quizz/:quizzId',
    name: 'Quizz',
    component: Quizz,
    props: (router) => {
      console.log(router);
      return {
        quizzId: router.params.quizzId,
      };
    },
  }
]

const router = createRouter({
  history: createWebHistory(), // Utilise l'historique HTML5
  routes
})

export default router
