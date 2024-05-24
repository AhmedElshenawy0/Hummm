import { createRouter, createWebHistory, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "About",

      component: () => import("@/views/AboutView.vue"),
    },
    {
      path: "/foods",
      name: "Foods",

      component: () => import("@/views/Food/FoodsView.vue"),
    },
    {
      path: "/foods/:id",
      name: "Single-Food",

      component: () => import("@/views/Food/SingleFood.vue"),
    },
    {
      path: "/foods/category/:name",
      name: "Foods-Category",

      component: () => import("@/views/Food/FoodCategory.vue"),
    },
    {
      path: "/show",
      name: "Show",

      component: () => import("@/views/Show/ShowView.vue"),
    },
    {
      path: "/show/:id",
      name: "Single-Show",

      component: () => import("@/views/Show/SingleShow.vue"),
    },
    {
      path: "/show/category/:name",
      name: "Show-Category",

      component: () => import("@/views/Show/ShowCategory.vue"),
    },
    {
      path: "/read",
      name: "Read",

      component: () => import("@/views/Read/ReadView.vue"),
    },
    {
      path: "/read/:id",
      name: "Single-Read",

      component: () => import("@/views/Read/SingleRead.vue"),
    },
    {
      path: "/press",
      name: "Press",

      component: () => import("@/views/Press/PressView.vue"),
    },
    {
      path: "/press/:id",
      name: "Single-Press",

      component: () => import("@/views/Press/SinglePress.vue"),
    },
    {
      path: "/contact",
      name: "Contact",

      component: () => import("@/views/Contact/ContactView.vue"),
    },
    {
      path: "/contact-us-message",
      name: "Contact-message",

      component: () => import("@/views/Contact/ContactMsg.vue"),
    },
    
  ],
  
});

export default router;
