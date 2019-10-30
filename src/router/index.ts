import Vue from "vue";
import VueRouter from "vue-router";
import Repositories from "@/views/Repositories.vue";
import Home from "@/views/Home.vue";
import Developers from "@/views/Developers.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: Home,
    children: [
      {
        path: "",
        redirect: "/trending/repositories"
      },
      {
        path: "/trending/repositories",
        name: "repositories",
        component: Repositories
      },
      {
        path: "/trending/developers",
        name: "developers",
        component: Developers
      }
    ]
  }
];

const router = new VueRouter({
  mode: "hash",
  base: process.env.BASE_URL,
  routes
});

export default router;
