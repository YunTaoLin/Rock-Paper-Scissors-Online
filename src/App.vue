<template>
  <div :style="{ height: isSafari ? `${mainHeihgt}px` : '100vh' }">
    <router-view></router-view>
    <footer class="footer">
      Copyright 2022 by
      <a
        href="https://github.com/YunTaoLin/Rock-Paper-Scissors-Online"
        title="author"
        >yuntaolin (Joe)
      </a>
      . All Rights Reserved.
    </footer>
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
.disable{
  user-select: none !important;
}
.footer {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  padding: 8px;
  background-color: #fff;
  text-align: center;
  font-size: 12px;
  color: #000;
  a{
  color: rgb(121, 178, 243);
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
