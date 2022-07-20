import {
  createRouter,
  createWebHashHistory,
  createWebHistory,
} from "vue-router";

import Index from "./view/Index.vue";
import Enter from "./view/Enter.vue";
import GameRoom from "./view/GameRoom.vue";
import Enter_US from "./view/Enter-US.vue";
import GameRoom_US from "./view/GameRoom-US.vue";
const routes = [
  {
    path: "/",
    name: "Index",
    component: Index,
  },
  {
    path: "/zh-tw",
    name: "Enter",
    component: Enter,
  },
  {
    path: "/zh-tw/gameRoom",
    name: "Gameroom",
    component: GameRoom,
  },
  // {
  //   path: "/zh-tw/:pathMatch(.*)*",
  //   redirect: { path: "/zh-tw/" },
  // },
  {
    path: "/en-us",
    redirect: "/en",
  },
  {
    path: "/en",
    name: "EnterUS",
    component: Enter_US,
  },

  {
    path: "/en/gameRoom",
    name: "GameroomUS",
    component: GameRoom_US,
  },
  // {
  //   path: "/en-us/:pathMatch(.*)*",
  //   redirect: { path: "/en-us/" },
  // },
  {
    path: "/:pathMatch(.*)*",
    redirect: { path: "/" },
  },
];

// const router = createRouter({
//   history: createWebHashHistory("/Paper-Scissors-Rock-Online/dist"),
//   routes,
// });

export default routes;
