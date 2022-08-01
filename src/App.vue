<template>
  <!-- :style="{ height: isSafari ? `${mainHeihgt}px` : '100vh' }" -->
  <div class="wrapping">
    <div class="main">
      <router-view></router-view>
    </div>
    <Footer></Footer>
  </div>
</template>

<script lang="ts">
import firebaseConfig from "./firebase/firebase.json";
import firebase from "firebase/compat/app";
import "firebase/compat/database";
import { ref } from "@vue/reactivity";
import { computed } from "@vue/runtime-core";
import { useRoute } from "vue-router";
import Footer from "@/components/Footer.vue";
export default {
  components: { Footer },
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
  * {
    box-sizing: border-box;
  }
}
.wrapping {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .main {
    min-height: 90vh;
    @include pad {
      min-height: 80vh;
    }
  }
}

.disable {
  pointer-events: none !important;
}
/* .footer {
  width: 100%;
  padding: 8px;
  background-color: #fff;
  text-align: center;
  font-size: 12px;
  color: #000;
  display: flex;
  align-items: center;
  justify-content: center;
  @include mobile {
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
      @include mobile {
        font-size: 14px;
      }
    }
  }
} */
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
