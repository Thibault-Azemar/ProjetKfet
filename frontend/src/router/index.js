import { createRouter, createWebHistory } from "vue-router";
const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            component: () => import("../views/Home.vue"),
        },
        // {
        //     path: "/pageName",
        //     component: () => import("../views/pageName.vue"),
        // }
    ],
});
export default router;