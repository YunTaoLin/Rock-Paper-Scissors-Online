<template>
  <!-- :style="{ height: isSafari ? `${mainHeihgt}px` : '100vh' }" -->
  <div class="wrapping">
    <div class="main">
      <h1 class="mb_12">感謝您使用 Be Good Tool 線上猜拳</h1>
      <h2 class="mb_12">網站搬家囉，<br />五秒鐘後進行跳轉</h2>
      <h3 class="mb_12">
        或是
        <a href="https://morra.begoodtool.com/">點此前往</a>
      </h3>
    </div>
  </div>
</template>

<script lang="ts">
import { onMounted } from "@vue/runtime-core";
export default {
  setup() {
    onMounted(() => {
      setTimeout(() => {
        window.location.href = "https://morra.begoodtool.com/";
      }, 5500);
    });

    return {};
  },
};
</script>

<style lang="scss">
@import "./scss/main.scss";
html,
body {
  width: 100%;
  background: linear-gradient(70deg, #72edf2, rgb(121, 178, 243)) 100% 100%
    no-repeat;
  padding: 0;
  margin: 0;
  * {
    box-sizing: border-box;
  }
}
.wrapping {
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .main {
    width: 100%;
    min-height: 90vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-size: 36px;
    padding: 24px;
    h1 {
      font-size: 20px;
    }
    h2 {
      margin-top: 20px;
      font-size: 28px;
      text-align: center;
    }
    h3 {
      margin-top: 20px;
      font-size: 22px;
    }
    @include pad {
      min-height: 80vh;
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
