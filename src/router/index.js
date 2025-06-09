import { createRouter, createWebHistory } from "vue-router";
import login from "../pages/login.vue";
import profile from '../pages/portfolio/profile.vue';
import contact from '../pages/portfolio/contact.vue';
import creative from '../pages/portfolio/creative.vue';
import showcase from '../pages/portfolio/showcase.vue';

const routes = [
    { path: "/", name: "login", component: login },
    { path: '/profile', name: 'profile', component: profile },
    { path: '/contact', name: 'contact', component: contact },
    { path: '/creative', name: 'creative', component: creative },
    { path: '/showcase', name: 'showcase', component: showcase },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;