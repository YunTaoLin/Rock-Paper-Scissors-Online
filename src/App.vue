<template>
  <div :style="{ height: isSafari ? `${mainHeihgt}px` : '100vh' }">
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import firebaseConfig from "./firebase/firebase.json";
import firebase from "firebase/compat/app";
import "firebase/compat/database";
import { ref } from "@vue/reactivity";
export default {
  setup() {
    let firebaseAPP = firebase.initializeApp(firebaseConfig);
    
    let appHeihgt = document.documentElement.clientHeight;
    let isSafari = ref(false);
    let mainHeihgt = document.documentElement.clientHeight;
    if (
      /Safari/.test(navigator.userAgent) &&
      !/Chrome/.test(navigator.userAgent)
    ) {
      //是safari
      isSafari.value = false;
    }
    return { appHeihgt, isSafari, mainHeihgt };
  },
};
</script>

<style lang="scss">
@import "./scss/main.scss";
html,
body {
  width: 100%;
  height: auto;
  background: linear-gradient(70deg, #72edf2, rgb(121, 178, 243)) 100% 100%
    no-repeat;
  padding: 0;
  margin: 0;
  overflow: hidden;
  * {
    box-sizing: border-box;
  }
}
#app {
  width: 100%;
  height: 100%;
}
@media only screen and (min-width: 993px) {
  .hidden-laptop-up {
    display: none !important;
  }
}

@media only screen and (max-width: 992px) {
  .hidden-laptop-down {
    display: none !important;
  }
}

@media only screen and (min-width: 769px) {
  .hidden-pad-up {
    display: none !important;
  }
}

@media only screen and (max-width: 768px) {
  .hidden-pad-down {
    display: none !important;
  }
}

@media only screen and (min-width: 577px) {
  .hidden-mobile-up {
    display: none !important;
  }
}

@media only screen and (max-width: 576px) {
  .hidden-mobile-down {
    display: none !important;
  }
}
</style>
