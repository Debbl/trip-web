import {
  createRouter,
  createWebHashHistory,
  createWebHistory,
} from "vue-router";

const routes = [
  { path: "/", redirect: "/home" },
  { path: "/home", component: () => import("@/views/home/home.vue") },
  { path: "/favor", component: () => import("@/views/favor/favor.vue") },
  { path: "/message", component: () => import("@/views/message/message.vue") },
  { path: "/order", component: () => import("@/views/order/order.vue") },
  {
    path: "/city",
    component: () => import("@/views/city/city.vue"),
    meta: { hideTabBar: true },
  },
  {
    path: "/search",
    component: () => import("@/views/search/search.vue"),
    meta: {
      hideTabBar: true,
    },
  },
  {
    path: "/detail/:id",
    component: () => import("@/views/detail/detail.vue"),
  },
];

const router = createRouter({
  routes,
  history: createWebHashHistory(),
  // history: createWebHistory(),
});

export default router;
