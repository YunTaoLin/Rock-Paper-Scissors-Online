<template>
  <header id="EnterPage">
    <h1>线上猜拳</h1>
    <h2 style="display: none">
      完全免费的线上即时猜拳游戏，可创建独立房号和朋友远端进行线上即时猜拳，想要跟远端的家人、同事、朋友来一场最公平的剪刀石头布?
      就来Be Good Tool线上猜拳！
    </h2>
    <nav class="btn_group">
      <div class="btn" @click="openCreateRoom = true">
        <div>创建房间+</div>
        <div class="btn--secondaryTitle"></div>
      </div>
      <div class="btn" @click="openJoinRoom = true">
        <div>加入房间</div>
        <div class="btn--secondaryTitle"></div>
      </div>
    </nav>
    <div class="other"></div>
    <CreateRoom v-if="openCreateRoom" @close="openCreateRoom = false" />
    <JoinRoom v-if="openJoinRoom" @close="openJoinRoom = false" />
  </header>
</template>

<script lang="ts">
import CreateRoom from "@/components/createRoom-CN.vue";
import JoinRoom from "@/components/joinRoom-CN.vue";
import { inject, reactive, ref } from "vue";
import { useHead } from "@vueuse/head";
export default {
  components: { CreateRoom, JoinRoom },
  setup() {
    useHead({
      title:
        "线上猜拳 - 剪刀石头布 可远端建立房号支援多人同时在线 - 是个好工具 Be Good Tool",
      htmlAttrs: {
        lang: "zh-cn",
      },
      link: [
        {
          rel: `canonical`,
          href: `https://morra.begoodtool.com/cn`,
        },
      ],
      meta: [
        {
          name: `og:title`,
          content: `线上猜拳 - 剪刀石头布 可远端建立房号支援多人同时在线 - 是个好工具 Be Good Tool`,
        },
        {
          name: `og:description`,
          content: `完全免费的线上即时猜拳游戏，可创建独立房号和朋友远端进行线上即时猜拳，想要跟远端的家人、同事、朋友来一场最公平的剪刀石头布? 就来Be Good Tool线上猜拳！`,
        },
        {
          name: `description`,
          content: `完全免费的线上即时猜拳游戏，可创建独立房号和朋友远端进行线上即时猜拳，想要跟远端的家人、同事、朋友来一场最公平的剪刀石头布? 就来Be Good Tool线上猜拳！`,
        },
        {
          name: `twitter:title`,
          content: `线上猜拳 - 剪刀石头布 可远端建立房号支援多人同时在线 - 是个好工具 Be Good Tool`,
        },
        {
          name: `twitter:description`,
          content: `完全免费的线上即时猜拳游戏，可创建独立房号和朋友远端进行线上即时猜拳，想要跟远端的家人、同事、朋友来一场最公平的剪刀石头布? 就来Be Good Tool线上猜拳！`,
        },
      ],
    });
    const openCreateRoom = ref(false);
    const openJoinRoom = ref(false);

    return { openCreateRoom, openJoinRoom };
  },
};
</script>

<style lang="scss" scoped>
@import "@/scss/main.scss";
#EnterPage {
  width: 100%;
  height: 100%;
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
    margin-top: 40px;
    @include pad {
      margin-top: 12px;
    }
    .btn {
      width: 36vw;
      min-height: 150px;
      padding: 24px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      border: 8px solid #000;
      margin: 24px;
      border-radius: 600px;
      font-size: 60px;
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
