import { createWebHistory, createRouter } from "vue-router";
import HomePage from '@/views/frontend/pages/HomePage.vue'
import ChartsPage from '@/views/frontend/pages/ChartsPage.vue'

const routes = [
    { 
        path: '/',
        name: "HomePage",
        component: HomePage
    },
    { 
        path: '/charts',
        name: "ChartsPage",
        component: ChartsPage
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;

