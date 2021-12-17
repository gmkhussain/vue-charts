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
    },
    { 
        path: '/ch2',
        name: "Ch2",
        component: () => import("@/views/frontend/pages/Charts/Ch2.vue")
    },
    { 
        path: '/ch3',
        name: "Ch3",
        component: () => import("@/views/frontend/pages/Charts/Ch3.vue")
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;

