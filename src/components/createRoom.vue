<template>
  <div class="overlay">
    <div class="popup">
      <div class="close" @click="close">X</div>
      <div class="createRoom">
        <h2 class="mb_16">創立房間</h2>
        <input
          type="number"
          placeholder="請輸入自訂房間ID (數字)"
          v-model="createRoomId"
        />
        <div class="btn mt_16 mb_12" @click="createRoom">創立</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import firebase from "firebase/app";
import { ref } from "vue";
import { useRouter } from "vue-router";
import moment from "moment";
import { useStore } from "vuex";
export default {
  setup(props:any, content:any) {
    const store = useStore();
    const router = useRouter();
    const createRoomId = ref(null);
    const db = firebase.database();
    const createRoom = () => {
      //先查找是否有該房間
      const theRef = db.ref(`/room/${createRoomId.value}`);
      theRef.once("value").then(function (snapshot) {
        if (snapshot.val()) {
          const playA_status = moment(
            snapshot.val().play_A.lastConnect
          ).isAfter(moment().add(-2, "m"));
          const playB_status = moment(
            snapshot.val().play_B.lastConnect
          ).isAfter(moment().add(-2, "m"));
          if (playA_status && playB_status) {
            return alert("已經存在該房間囉，請換一個房號ID");
          }
        }
        theRef
          .set({
            play_A: {
              join: true,
              select: null,
              lastConnect: moment(new Date()).format("YYYY/MM/DD hh:mm"),
            },
            play_B: {
              join: false,
              select: null,
              lastConnect: null,
            },
          })
          .then(() => {
            store.commit("setLinkedRoom", createRoomId.value);
            store.commit("setRole", "play_A");
            //設定定時器，每一分鐘告訴db，連線還存在
            setInterval(() => {
              db.ref(`/room/${createRoomId.value}/play_A`).update({
                lastConnect: moment(new Date()).format("YYYY/MM/DD hh:mm")
              });
            }, 60000);
            router.push("/gameRoom");
          });
      });
    };
    const close = () =>content.emit("close") ;
    return { createRoom, createRoomId, close };
  },
};
</script>

<style lang="scss">
.createRoom {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  h2 {
    font-size: 36px;
  }
  input {
    padding: 16px 12px;
    width: 80%;
    font-size: 24px;
    border-radius: 4px;
    border: 4px solid #000;
    text-align: center;
    background-color: #ddd;
    &:focus {
      outline: none;
      border: 4px solid #000;
    }
  }
  input[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
  .btn {
    width: 140px;
    height: 56px;
    background-color: rgb(245, 212, 102);
    border: 2px solid #000;
    border-radius: 120px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 24px;
    font-weight: 700;
    cursor: pointer;
    transition: 0.1s;
    &:hover {
      background-color: rgb(230, 203, 118);
    }
  }
}
</style>
