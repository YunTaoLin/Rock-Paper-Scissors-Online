<template>
  <div id="EnterPage">
    <h1>Rock Paper Scissors<br class="hidden-pad-up" />線上猜拳</h1>
    <nav class="btn_group">
      <a
        title="play game with english"
        href="https://morra.begoodtool.com/en"
        class="btn"
      >
        English
      </a>
      <a
        title="以简体中文进行游戏"
        href="https://morra.begoodtool.com/cn"
        class="btn"
      >
        简体中文
      </a>
      <a
        title="以繁體中文進行遊戲"
        href="https://morra.begoodtool.com/zh-tw"
        class="btn"
      >
        繁體中文
      </a>
    </nav>
    <div class="other"></div>
  </div>
</template>

<script lang="ts">
import { useHead } from "@vueuse/head";
export default {
  setup() {
    useHead({
      title: "Rock Paper Scissors Online 線上猜拳 - Be Good Tool",
      link: [
        {
          rel: `canonical`,
          href: `https://morra.begoodtool.com/`,
        },
      ],
      meta: [
        {
          name: `og:title`,
          content: `Rock Paper Scissors Online 線上猜拳 - Be Good Tool`,
        },
        {
          name: `og:description`,
          content: `Free real-time game of Rock Paper Scissors and morra, you can create an independent room to play games remotely.免費線上即時猜拳遊戲，可創建獨立房號和朋友遠端進行線上即時猜拳，想要跟遠端的家人、同事、朋友來一場最公平的剪刀石頭布? 就來Be Good Tool線上猜拳！。`,
        },
        {
          name: `description`,
          content: `Free real-time game of Rock Paper Scissors and morra, you can create an independent room to play games remotely.免費線上即時猜拳遊戲，可創建獨立房號和朋友遠端進行線上即時猜拳，想要跟遠端的家人、同事、朋友來一場最公平的剪刀石頭布? 就來Be Good Tool線上猜拳！。`,
        },
        {
          name: `twitter:title`,
          content: `Rock Paper Scissors Online 線上猜拳 - Be Good Tool`,
        },
        {
          name: `twitter:description`,
          content: `Free real-time game of Rock Paper Scissors and morra, you can create an independent room to play games remotely.免費線上即時猜拳遊戲，可創建獨立房號和朋友遠端進行線上即時猜拳，想要跟遠端的家人、同事、朋友來一場最公平的剪刀石頭布? 就來Be Good Tool線上猜拳！。`,
        },
      ],
    });
  },
};
</script>

<style lang="scss" scoped>
@import "@/scss/main.scss";
#EnterPage {
  width: 100%;
  padding-top: 48px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  @include pad {
    padding-top: 32px;
  }
  h1 {
    text-align: center;
    font-size: 60px;
    @include pad {
      font-size: 32px;
      line-height: 1.7;
    }
  }
  .btn_group {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    .btn {
      width: 32vw;
      min-height: 144px;
      padding: 24px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      border: 8px solid #000;
      margin: 24px;
      border-radius: 600px;
      font-size: 52px;
      cursor: pointer;
      background-color: rgb(243, 210, 101);
      transition: 0.2s;
      line-height: 1.2;
      font-weight: 700;
      color: #000;
      text-decoration: none;
      @include pad {
        font-size: 32px;
        width: 70vw;
        padding: 12px;
        border: 6px solid #000;
        min-height: 40px;
      }
      &:hover {
        transform: scale(1.1);
      }
      &--secondaryTitle {
        font-size: 36px;
        color: rgb(34, 34, 34);
        @include pad {
          font-size: 18px;
          margin-top: 12px;
        }
      }
    }
  }
  .other {
    height: 40px;
    padding-top: 40px;
    box-sizing: border-box;
    display: flex;
    justify-content: space-around;
    .item {
      width: 100px;
      height: 100px;
      animation: jump 5s infinite linear;
      position: relative;
      @keyframes jump {
        0% {
          transform: translateY(0px);
          left: 0;
        }
        25% {
          transform: translateY(-40px);
          left: 40px;
        }
        50% {
          transform: translateY(-10px);
          left: 0;
        }
        75% {
          transform: translateY(-40px);
          left: -40px;
        }
        100% {
          transform: translateY(-0px);
          left: 0;
        }
      }
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>
