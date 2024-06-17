import { createWebHistory, createRouter } from "vue-router";
import List from "./components/List.vue";
import Card from "./components/Card.vue";

const routes = [
    {
        path: "/list",
        component: List,
    },
    {
        path: "/card",
        component: Card
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;