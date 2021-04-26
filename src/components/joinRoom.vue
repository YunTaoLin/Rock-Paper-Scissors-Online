<template>
  <div class="overlay">
    <div class="popup">
      <div class="close" @click="close">X</div>
      <div class="joinRoom">
        <h2 class="mb_16">加入房間</h2>
        <input
          type="number"
          placeholder="請輸入欲加入的房間ID"
          v-model="joinRoomId"
        />
        <div class="btn mt_16 mb_12" @click="joinRoom">加入</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import firebase from "firebase/app";
import { ref } from "vue";
import { useRouter } from "vue-router";
import moment, { now } from "moment";
import { useStore } from "vuex";
export default {
  setup(props:any, content:any) {
    const store = useStore();
    const router = useRouter();
    const joinRoomId = ref(null);
    const db = firebase.database();
    const joinRoom = () => {
      const theRef = db.ref(`/room/${joinRoomId.value}`);
      console.log("有阿");
      theRef.once("value").then((snapshot) => {
        const data = snapshot.val();
        if (!data) return alert("該房間不存在喔");
        //B未加入，或是B離線
        if (
          !data.play_B.lastConnect ||
          moment(data.play_B.lastConnect).isBefore(moment().add(-2, "m"))
        ) {
          store.commit("setRole", "play_B");
        } else if (
          !data.play_A.lastConnect ||
          moment(data.play_A.lastConnect).isBefore(moment().add(-2, "m"))
        ) {
          store.commit("setRole", "play_A");
        } else {
          return alert("該房間人數已額滿");
        }
        console.log(store.state.role)
        store.commit("setLinkedRoom", joinRoomId.value);
        db.ref(`/room/${joinRoomId.value}/${store.state.role}`)
          .update({
            lastConnect: moment(new Date()).format("YYYY/MM/DD hh:mm"),
            join: true,
          })
          .then(() => {
            alert("加入成功");
            setInterval(() => {
              db.ref(`/room/${joinRoomId.value}/${store.state.role}`).update({
                lastConnect: moment(new Date()).format("YYYY/MM/DD hh:mm"),
              });
            }, 60000);
            router.push("/gameRoom");
          });
      });
    };
    const close = () => [content.emit("close")];
    return { joinRoom, joinRoomId, close };
  },
};
</script>

<style lang="scss">
.joinRoom {
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
