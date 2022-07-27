// import { createApp } from "vue";
import { ViteSSG } from "vite-ssg";
import App from "./App.vue";
import store from "./store";
import routes from "./router";

// import * as serviceWorkerRegistration from "./serviceWorkerRegistration";

// const app = createApp(App)
// console.log("routes", routes);
export const createApp = ViteSSG(
  App,
  { routes, base: "/" },
  ({ app, router, routes, isClient, initialState }) => {
    Object.values(import.meta.globEager('./modules/*.ts')).map(i => i.install?.(app))
    app.use(store);
    if (import.meta.env.MODE == "local" || import.meta.env.MODE == "dev") {
      app.config.performance = true;
      console.log("測試中");
    } else {
      app.config.performance = false;
    }
    Object.values(import.meta.globEager('./modules/*.ts')).map(i => i.install?.(app))
  }
);

// app.use(router).use(store).mount("#app");
// serviceWorkerRegistration.register();
