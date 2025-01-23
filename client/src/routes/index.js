import Home from '../components/HelloWorld.vue';
import { createRoute, createWebHistory } from 'vue-router';

const routes = [
    {path: '/', component: Home},
]

const router = createRoute({
    history: createWebHistory(),
    routes,
});

export default router;
