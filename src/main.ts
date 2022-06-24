// import { createApp } from "vue";
import { ViteSSG } from "vite-ssg";
import App from "./App.vue";
import store from "./store";
import routes from "./router";

import * as serviceWorkerRegistration from "./serviceWorkerRegistration";

// const app = createApp(App)
console.log("routes", routes);
export const createApp = ViteSSG(
  App,
  // vue-router options
  { routes, base: "/Rock-Paper-Scissors-Online/" },
  // function to have custom setups
  ({ app, router, routes, isClient, initialState }) => {
    // install plugins etc.
    app.use(store);
    if (import.meta.env.MODE == "local" || import.meta.env.MODE == "dev") {
      app.config.performance = true;
      console.log("測試中");
    } else {
      app.config.performance = false;
    }
  }
);

// app.use(routes).use(store).mount("#app");
serviceWorkerRegistration.register();
