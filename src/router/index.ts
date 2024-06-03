import { createRouter, createWebHistory, createWebHashHistory } from "vue-router";

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      component: () => import("@/views/HomeView.vue") ,
      meta:{
        title:" همم | عالم للأكل واللي بيحبوه"
      }
    },
    {
      path: "/about",
      name: "About",

      component: () => import("@/views/AboutView.vue"),
      meta:{
        title:"من نحن - همم | همم"
      }
    },
    {
      path: "/foods",
      name: "Foods",

      component: () => import("@/views/Food/FoodsView.vue"),
      meta:{
        title:"وصفات - همم | همم"
      }
    },
    {
      path: "/foods/:id",
      name: "Single-Food",

      component: () => import("@/views/Food/SingleFood.vue"),
      meta:{
        title:""
      }
    },
    {
      path: "/foods/category/:name",
      name: "Foods-Category",

      component: () => import("@/views/Food/FoodCategory.vue"),
      meta:{
        title:""
      }
    },
    {
      path: "/show",
      name: "Show",

      component: () => import("@/views/Show/ShowView.vue"),
      meta:{
        title:"برامج - همم | همم"
      }
    },
    {
      path: "/show/:id",
      name: "Single-Show",

      component: () => import("@/views/Show/SingleShow.vue"),
      meta:{
        title:""
      }
    },
    {
      path: "/show/category/:name",
      name: "Show-Category",

      component: () => import("@/views/Show/ShowCategory.vue"),
      meta:{
        title:``
      }
    },
    {
      path: "/read",
      name: "Read",

      component: () => import("@/views/Read/ReadView.vue"),
      meta:{
        title:"مقالات - همم | همم"
      }
    },
    {
      path: "/read/:id",
      name: "Single-Read",

      component: () => import("@/views/Read/SingleRead.vue"),
      meta:{
        title:""
      }
    },
    {
      path: "/press",
      name: "Press",

      component: () => import("@/views/Press/PressView.vue"),
      meta:{
        title:"صحافه - همم | همم"
      }
    },
    {
      path: "/press/:id",
      name: "Single-Press",

      component: () => import("@/views/Press/SinglePress.vue"),
      meta:{
        title:""
      }
    },
    {
      path: "/contact",
      name: "Contact",

      component: () => import("@/views/Contact/ContactView.vue"),
      meta:{
        title:"اتصل بنا - همم | همم"
      }
    },
    {
      path: "/contact-us-message",
      name: "Contact-message",
      component: () => import("@/views/Contact/ContactMsg.vue"),
      meta:{
        title:""
      }
    },
    
  ],
  
});
router.beforeEach((to, from, next) => {
  if(to.query.name){
    document.title = `${to.query.name as string} - همم | همم`

  } else if(to.params.name){
    document.title = `${to.params.name as string} - همم | همم`

  }else {
    document.title = to.meta.title as string

  }
  next()
})

export default router;
