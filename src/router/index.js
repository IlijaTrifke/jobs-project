import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import Jobs from "../views/jobs/Jobs.vue";
import JobDetails from "../views/jobs/JobDetails.vue";
import NotFound from "../views/NotFound.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    component: AboutView,
  },
  {
    path: "/jobs",
    name: "jobs",
    component: Jobs,
  },
  {
    path: "/jobs/:id",
    name: "jobdetails",
    component: JobDetails,
    props: true,
  },
  // redirect
  {
    path: "/all-jobs", // koji path redirectujemo
    redirect: "/jobs", // na koji path redirectujemo
  },
  // catch all 404
  {
    path: "/:catchAll(.*)", //regex pattern
    name: "NotFound",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
