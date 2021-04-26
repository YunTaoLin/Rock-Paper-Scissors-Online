<template>
  <router-view></router-view>
</template>

<script lang="ts">
import firebaseConfig from "./firebase/firebase.json";
import firebase from "firebase/app";
import "firebase/database";

export default {
  setup() {
    firebase.initializeApp(firebaseConfig);
    return { };
  },
};
</script>

<style lang="scss">
@import './scss/main.scss';
html,body{
  width:100%;
  height:100vh;
  overflow: hidden;
  background:linear-gradient(70deg,#72EDF2,#3C8CE7) 100% 100% no-repeat;
  padding:0;
  margin:0;
}
#app{
  width:100%;
  height:100%;
}
</style>
