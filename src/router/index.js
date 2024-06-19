import Vue from "vue";
import VueRouter from "vue-router";

import HeroView from "../views/HeroView";
import OurCoffeeView from "../views/OurCoffeeView";
import GoodsPage from "../views/GoodsPage";
import ContactUs from "../views/ContactUs";
import GoodsItemView from "../views/GoodsItemView";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: HeroView,
  },
  {
    path: "/our-coffee",
    component: OurCoffeeView,
  },
  {
    path: "/goods-page",
    component: GoodsPage,
  },
  {
    path: "/contact-us",
    component: ContactUs,
  },
  {
    name: "coffee",
    path: "/our-coffee/:id",
    component: GoodsItemView,
  },
  {
    name: "goods",
    path: "/goods-page/:id",
    component: GoodsItemView,
  },
];
const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
