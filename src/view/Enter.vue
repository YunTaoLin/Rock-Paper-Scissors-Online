<template>
  <div id="EnterPage">
    <h1>猜拳定勝負!</h1>
    <div class="btn_group">
      <div class="btn" @click="openCreateRoom = true">創建房間</div>
      <div class="btn"  @click="openJoinRoom = true">加入房間</div>
    </div>
    <div class="footer">
      <div class="item"><img src="../assets/剪刀.png" alt="" /></div>
      <div class="item"><img src="../assets/布.png" alt="" /></div>
      <div class="item"><img src="../assets/石頭.png" alt="" /></div>
    </div>
    <CreateRoom v-if="openCreateRoom" @close="openCreateRoom=false" />
    <JoinRoom v-if="openJoinRoom" @close="openJoinRoom=false" />
  </div>
</template>

<script lang="ts">
import CreateRoom from "@/components/createRoom.vue";
import JoinRoom from '@/components/joinRoom.vue'
import { inject, reactive, ref } from "vue";
export default {
  components: { CreateRoom ,JoinRoom},
  setup() {
    const openCreateRoom = ref(false)
    const openJoinRoom = ref(false)



    return { openCreateRoom,openJoinRoom };
  },
};
</script>

<style lang="scss" scoped>
#EnterPage {
  width: 100%;
  height: 100%;
  padding-top: 48px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  h1 {
    text-align: center;
    font-size: 60px;
  }
  .btn_group {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    .btn {
      width: 40vw;
      height: 150px;
      display: flex;
      justify-content: center;
      align-items: center;
      border: 8px solid #000;
      margin: 24px;
      border-radius: 600px;
      font-size: 72px;
      cursor: pointer;
      background-color: rgb(236, 205, 102);
      transition: 0.2s;
      &:hover {
        transform: scale(1.1);
      }
    }
  }
  .footer {
    height: 200px;
    padding-top: 40px;
    box-sizing: border-box;
    display: flex;
    justify-content: space-around;
    .item {
      width: 100px;
      height: 100px;
      animation: jump 3s infinite linear;
      position: relative;
      @keyframes jump {
        0% {
          transform: rotate(0deg);
          left: 0;
        }
        25% {
          transform: rotate(360deg);
          left: 100px;
        }
        50% {
          transform: rotate(0deg);
          left: 0;
        }
        75% {
          transform: rotate(-360deg);
          left: -100px;
        }
        100% {
          transform: rotate(0deg);
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
