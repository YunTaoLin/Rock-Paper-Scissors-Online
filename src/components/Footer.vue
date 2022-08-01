<template>
  <footer>
    <div class="footer">
      <!-- 左邊 -->
      <div class="footer__left">
        <div class="about">
          <h3 class="about__title mb_4">
            <strong v-html="about_title"></strong>
          </h3>
          <div
            class="about__content"
            style="font-size: 0.8em"
            v-html="about"
          ></div>
        </div>
      </div>
      <!-- 中間 -->
      <div class="footer__center">
        <div
          class="fb-page mt_auto"
          data-href="https://www.facebook.com/begoodtool"
          data-tabs="timeline"
          data-width="300"
          data-height="120"
          data-small-header="false"
          data-adapt-container-width="true"
          data-hide-cover="false"
          data-show-facepile="false"
        >
          <blockquote
            cite="https://www.facebook.com/begoodtool"
            class="fb-xfbml-parse-ignore"
          >
            <a
              style="width: 300px; display: flex"
              href="https://www.facebook.com/begoodtool"
              >Be Good Tool 是個好工具</a
            >
          </blockquote>
        </div>
      </div>
      <!-- 右邊 -->
      <nav class="footer__right">
        <div class="lang">
          <router-link to="/en">English</router-link>
          |
          <router-link to="/tw">繁體中文</router-link>
          |
          <router-link to="/cn">简体中文</router-link>
        </div>
        <div class="other">
          <router-link :to="`/terms/${begoodtoolLang}`">{{
            Privacy
          }}</router-link>
          |
          <a
            :href="`https://www.begoodtool.com/${
              begoodtoolLang == 'en' ? 'en' : 'tw'
            }`"
            target="_blank"
            >{{ toolList }}</a
          >
        </div>
      </nav>
    </div>
    <div class="Copyright">
      Copyright 2022 by
      <a :href="`https://blog.begoodtool.com/`" title="author">Be Good Tool </a>
      . All Rights Reserved.
    </div>
  </footer>
  <!-- <footer class="footer">
    <div class="footer__langBtn">
      <router-link to="/en">English</router-link>
      |
      <router-link to="/tw">繁體中文</router-link>
      |
      <router-link to="/cn">简体中文</router-link>
    </div>
    
  </footer> -->
</template>
<script lang="ts" setup>
import { useRoute } from "vue-router";
import { computed } from "vue";
let route = useRoute();
let begoodtoolLang = computed(() => {
  if (route.fullPath.indexOf("en") > -1) {
    return "en";
  }
  if (route.fullPath.indexOf("cn") > -1) {
    return "cn";
  }
  return "tw";
});

let about = computed(() => {
  switch (begoodtoolLang.value) {
    case "cn":
      return `团队由几位工程师、设计师与PM组成<br />
            专注开发各种免费网站工具和推广优质的APP<br />
            欢迎到我们的
            <a href="https://www.begoodtool.com/tw" target="_blank">线上工具列表</a>
            和
            <a href="https://blog.begoodtool.com" target="_blank">部落格</a>
            看看喔!<br />`;
    case "en":
      return `We consists of engineers, designers and PMs<br />
             Focus on developing various free website tools and promoting high-quality APP<br />
             welcome our
              <a href="https://www.begoodtool.com/en" target="_blank">online tools list</a>
            and
            <a href="https://blog.begoodtool.com" target="_blank">blog</a>
             !<br />`;
    default:
      return `團隊由幾位工程師、設計師與PM組成<br />
            專注開發各種免費網站工具和推廣優質的APP<br />
            歡迎到我們的
            <a href="https://www.begoodtool.com/tw" target="_blank">線上工具列表</a>
            和
            <a href="https://blog.begoodtool.com" target="_blank">部落格</a>
            看看喔!<br />`;
  }
});
let about_title = computed(() => {
  switch (begoodtoolLang.value) {
    case "cn":
      return `关于我们 - Be Good Tool`;
    case "en":
      return `About Us - Be Good Tool`;
    default:
      return `關於我們 - Be Good Tool`;
  }
});
let toolList = computed(() => {
  switch (begoodtoolLang.value) {
    case "cn":
      return `线上工具列表`;
    case "en":
      return `Online Tools List`;
    default:
      return `線上工具列表`;
  }
});
let Privacy = computed(() => {
  switch (begoodtoolLang.value) {
    case "cn":
      return `隐私权与服务条款`;
    case "en":
      return `Privacy terms`;
    default:
      return `隱私權與服務條款`;
  }
});
</script>
<style lang="scss">
@import "@/scss/main.scss";
footer {
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #89A; //#a59379;//547387
  /* background: linear-gradient(70deg, #72edf2, rgb(121, 178, 243)) 100% 100%
    no-repeat; */
  a {
    color: #fff;
    text-decoration: none;
  }
  .footer {
    width: 1240px;
    display: flex;
    flex-wrap: wrap;
    color: #fff;
    padding: 40px 0 20px;
    @include laptop {
      width: 100vw;
    }
    @include pad {
      padding: 20px 0 10px;
    }
    &__left {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 33%;
      @include pad {
        order: 2;
        width: 100%;
      }
      .about {
        width: 300px;
        font-size: 16px;
        line-height: 1.5;
        .about__content {
          line-height: 2;
        }
        @include pad {
          margin-top: 32px;
          margin-bottom: 12px;
          padding: 20px 12px;
          font-size: 14px;
          border: 1px dashed #fff;
          border-radius: 12px;
        }
        a {
          font-weight: 700;
          text-decoration: underline;
        }
      }
    }
    &__center {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 34%;
      @include pad {
        order: 3;
        width: 100%;
      }
    }
    &__right {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      width: 33%;
      @include pad {
        order: 1;
        width: 100%;
      }
      .lang {
        display: flex;
        width: 100%;
        justify-content: center;
        a {
          font-size: 18px;
          text-align: center;
          width: 30%;
          @include mobile {
            font-size: 14px;
          }
        }
      }
      .other {
        display: flex;
        justify-content: center;
        width: 100%;
        margin-top: 20px;
        font-size: 14px;
        a {
          font-size: 14px;
          width: 40%;
          text-align: center;
          @include mobile {
            font-size: 12px;
          }
        }
      }
      a {
        display: inline-block;
      }
    }
  }
  .Copyright {
    width: 100%;
    text-align: center;
    line-height: 2;
    padding: 12px 0;
    color: #fff;
    @include pad {
      font-size: 12px;
    }
  }
}
</style>
