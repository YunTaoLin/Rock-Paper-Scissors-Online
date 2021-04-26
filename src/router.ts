import { createRouter, createWebHistory } from "vue-router";

import Enter from "./view/Enter.vue";
import GameRoom from "./view/GameRoom.vue";

const routes = [
  {
    path: "/gameRoom",
    name: "Gameroom",
    component: GameRoom,
  },
  {
    path: "/",
    name: "Enter",
    component: Enter,
  },
  {
    path: "/:pathMatch(.*)*",
    redirect: {path:'/'}
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
