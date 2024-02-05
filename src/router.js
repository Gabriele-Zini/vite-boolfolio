import { createRouter, createWebHistory } from "vue-router";
import AppHome from "./pages/AppHome.vue";
import AboutPage from './pages/AboutPage.vue'
import AppSingleProject from './pages/AppSingleProject.vue'
import NotFoundPage from './pages/NotFoundPage.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/projects",
      name: "home",
      component: AppHome,
    },
    {
      path: "/about",
      name: "about",
      component: AboutPage,
    },
    {
      path: "/projects/:slug",
      name: "single-project",
      component: AppSingleProject,
    },
    {
      path: "/:pathMatch(.*)*",
      name: "not-found",
      component: NotFoundPage,
    },
  ],
});
export { router };
