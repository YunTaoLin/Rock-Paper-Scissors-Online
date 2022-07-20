<template>
  <div :style="{ height: isSafari ? `${mainHeihgt}px` : '100vh' }">
    <router-view></router-view>
    <footer class="footer">
      <div class="footer__langBtn">
        <router-link to="/en">English</router-link>
        |
        <router-link to="/tw">繁體中文</router-link>
        |
        <router-link to="/cn">简体中文</router-link>
      </div>
      <div>
        Copyright 2022 by
        <a
          href="https://www.begoodtool.com/"
          title="author"
          >Be Good Tool
        </a>
        . All Rights Reserved.
      </div>
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
.disable {
  pointer-events: none !important;
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
  display: flex;
  align-items: center;
  justify-content: center;
  @include mobile{
    flex-direction: column;
  }
  a {
    color: rgb(121, 178, 243);
  }
  &__langBtn {
    a {
      display: inline-block;
      margin: 0 12px 8px;
      font-size: 18px;
      @include mobile{
        font-size: 14px;
      }
    }
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
