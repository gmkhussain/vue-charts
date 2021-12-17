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
    },
    { 
        path: '/ch4',
        name: "Ch4",
        component: () => import("@/views/frontend/pages/Charts/Ch4.vue")
    },
    { 
        path: '/ch5',
        name: "Ch5",
        component: () => import("@/views/frontend/pages/Charts/Ch5.vue")
    },
    {
        path: '/ch6',
        name: "Ch6",
        component: () => import("@/views/frontend/pages/Charts/Ch6.vue")
    },
    {
        path: '/ch7',
        name: "Ch7",
        component: () => import("@/views/frontend/pages/Charts/Ch7.vue")
    },
    {
        path: '/chart-js',
        name: "ChartWithExtScript",
        component: () => import("@/views/frontend/pages/Charts/scripts/Script.vue")
    },
    {
        path: '/ch8',
        name: "Ch8",
        component: () => import("@/views/frontend/pages/Charts/Ch8.vue")
    }

];

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;

