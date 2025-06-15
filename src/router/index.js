import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import PrivacyPolicyView from "@/views/PrivacyPolicyView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/polityka-prywatnosci",
    name: "polityka-prywatnosci",
    component: PrivacyPolicyView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: "smooth",
        top: 100,
      };
    }
    return { top: 0 };
  },
});

export default router;
