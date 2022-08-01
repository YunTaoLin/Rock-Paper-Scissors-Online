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
import Enter_CN from "./view/Enter-CN.vue";
import GameRoom_CN from "./view/GameRoom-CN.vue";
import Terms from "./view/Terms.vue";
import Terms_US from "./view/Terms-US.vue";
import Terms_CN from "./view/Terms-CN.vue";

const routes = [
  {
    path: "/",
    name: "Index",
    component: Index,
  },
  //繁體
  {
    path: "/tw",
    redirect: "/zh-tw",
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
  //英文
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
  //簡體
  {
    path: "/cn",
    name: "EnterCN",
    component: Enter_CN,
  },
  {
    path: "/cn/gameRoom",
    name: "GameroomCN",
    component: GameRoom_CN,
  },
  //條款 terms
  {
    path: "/terms",
    redirect: "/terms/tw",
  },
  {
    path: "/terms/tw",
    name: "Terms",
    component: Terms,
  },
  {
    path: "/terms/cn",
    name: "TermsCN",
    component: Terms_CN,
  },
  {
    path: "/terms/en",
    name: "TermsUS",
    component: Terms_US,
  },
  //其他
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
