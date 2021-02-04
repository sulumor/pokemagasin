import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Panier from "../views/Panier.vue";
import Fiche from "../views/Fiche.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/panier",
    name: "Panier",
    component: Panier,
  },
  {
    path: "/:id/:name",
    name: "Fiche",
    component: Fiche,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
