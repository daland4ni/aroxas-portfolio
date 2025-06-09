import { createRouter, createWebHistory } from "vue-router";
import login from "../pages/login.vue";
import profile from '../pages/portfolio/profile.vue';

const routes = [
  { path: "/", name: "login", component: login },
  { path: '/profile', name: 'profile', component: profile },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;