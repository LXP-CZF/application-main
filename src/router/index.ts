import {
  createRouter,
  createWebHistory,
  RouteRecordRaw,
  RouterOptions,
} from "vue-router";
import HelloWorld from "@/components/HelloWorld.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    component: HelloWorld,
    children: [
      {
        path: "HelloWorld",
        name: "HelloWorld",
        component: HelloWorld,
      },
    ],
  },
];

const router = createRouter(<RouterOptions>{
  history: createWebHistory(),
  routes,
});

export default router;
