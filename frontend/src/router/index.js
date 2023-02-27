import { createRouter, createWebHistory } from "vue-router";
const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            component: () => import("../components/HelloWorld.vue"),
        },
        {
            path:"/commande",
            component: ()=> import("../components/test.vue")
        },
        {
            path:"/gestion",
            component: ()=> import("../components/GestionComponent.vue")
        }
        // {
        //     path: "/pageName",
        //     component: () => import("../views/pageName.vue"),
        // }
    ],
});
export default router;