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
            component: ()=> import("../components/CommandeComponent.vue")
        },
        {
            path:"/gestion",
            component: ()=> import("../components/GestionComponent.vue")
        },
        {
            path: "/suivi",
            component: () => import("../components/test.vue"),
        }
    ],
});
export default router;