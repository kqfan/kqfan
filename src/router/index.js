import { createRouter, createWebHashHistory } from "vue-router";
import homeRouter from './modules/home'

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        ...homeRouter
    ]
})

export default router