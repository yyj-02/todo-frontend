import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import IndexView from "../views/IndexView.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Index",
    component: IndexView,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
