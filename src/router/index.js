import { createRouter, createWebHistory } from "vue-router";
import LoginPage from "../views/LoginPage.vue";
import DashboardLayout from "../layouts/DashboardLayout.vue";

const routes = [
  { path: "/", name: "Login", component: LoginPage },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: DashboardLayout,
    children: [
      {
        path: "",
        name: "Home",
        component: () => import("../views/HomePage.vue"),
      },
      {
        path: "users",
        name: "Users",
        component: () => import("../views/UserManagementPage.vue.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;