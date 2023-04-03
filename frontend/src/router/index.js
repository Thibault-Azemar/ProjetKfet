import { createRouter, createWebHistory } from "vue-router";
const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            component: () => import("../components/CommandeListComponent.vue"),
        },
        {
            path: "/commande",
            component: () => import("../components/CommandeComponent.vue")
        },
        {
            path: "/gestion",
            component: () => import("../components/GestionComponent.vue")
        },
        {
            path: "/suivi",
            component: () => import("../components/CommandeListComponent.vue"),
        }
        ,
        {
            path: "/comptes",
            component: () => import("../components/ClientsComponent.vue"),
        }
    ],
});
export default router;