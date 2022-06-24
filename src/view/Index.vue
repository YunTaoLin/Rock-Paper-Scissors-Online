<template>
  <div id="EnterPage">
    <h1>Rock Paper Scissors<br class="hidden-pad-up" />線上猜拳</h1>
    <div class="btn_group">
      <router-link to="/en-us" class="btn"> English </router-link>
      <router-link to="/zh-tw" class="btn"> 中文 </router-link>
    </div>
    <div class="footer"></div>
  </div>
</template>

<script lang="ts">
export default {
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
    .btn {
      width: 36vw;
      min-height:150px;
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
        min-height:40px;
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
  .footer {
    height: 200px;
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
