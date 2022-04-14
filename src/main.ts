import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'


let app = createApp(App)

if (import.meta.env.MODE == "local" || import.meta.env.MODE == "dev") {
    app.config.performance  = true;
    console.log("測試中");
  } else {
    app.config.performance = false;
  }

app.use(router).use(store).mount('#app')