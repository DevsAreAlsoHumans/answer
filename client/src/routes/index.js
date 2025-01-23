import Home from '../components/HelloWorld.vue';
import Temp from '../components/Temp.vue';
import { createRoute, createWebHistory } from 'vue-router';

const routes = [
    {path: '/', component: Home},
    {path: 'temp', component: Temp}
]

const router = createRoute({
    history: createWebHistory(),
    routes,
});

export default router;
