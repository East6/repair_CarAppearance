import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";
import List_repair_CarAppearance from "../views/List_repair_CarAppearance.vue"
import Detail_repair_CarApperance from "../views/Detail_repair_CarApperance.vue"

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/List_repair_CarAppearance",
    name: "List_repair_CarAppearance",
    component: List_repair_CarAppearance,
  },
  {
    path: "/Detail_repair_CarApperance",
    name: "Detail_repair_CarApperance",
    component: Detail_repair_CarApperance,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
