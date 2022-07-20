<template>
  <div class="overlay">
    <div class="popup">
      <div class="close" @click="close">X</div>
      <div class="joinRoom">
        <strong class="mb_16">Join Room</strong>
        <input type="phone" placeholder="Join Room ID" v-model="joinRoomId" @blur="reset()" />
        <div
          class="btn mt_16 mb_12"
          :class="{ disable: loading }"
          @click="joinRoom"
        >
          {{ loading ? "Loading..." : "Go!" }}
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import firebase from "firebase/compat/app";
import { ref } from "vue";
import { useRouter } from "vue-router";
import moment, { now } from "moment";
import { useStore } from "vuex";
export default {
  setup(props: any, content: any) {
    const store = useStore();
    const router = useRouter();
    const joinRoomId = ref(null);
    const loading = ref(false);
    const db = firebase.database();
    const reset = () => {
      window.scrollTo(0, 0);
    };
    const joinRoom = () => {
      loading.value = true;
      if (!joinRoomId.value) {
        loading.value = false;
        return alert("input room id pleace!");
      }
      const theRef = db.ref(`/room/${joinRoomId.value}`);
      theRef.once("value").then((snapshot) => {
        const data = snapshot.val();
        if (!data) {
          loading.value = false;
          return alert("This room doesn't exist");
        }
        //B未加入，或是B離線
        if (
          !data.play_B.lastConnect ||
          moment(data.play_B.lastConnect).isBefore(
            moment().add(-2, "m").format("YYYY/MM/DD hh:mm")
          )
        ) {
          store.commit("setRole", "play_B");
        } else if (
          !data.play_A.lastConnect ||
          moment(data.play_A.lastConnect).isBefore(
            moment().add(-2, "m").format("YYYY/MM/DD hh:mm")
          )
        ) {
          store.commit("setRole", "play_A");
        } else {
          loading.value = false;
          return alert("The room is full");
        }
        store.commit("setLinkedRoom", joinRoomId.value);
        db.ref(`/room/${joinRoomId.value}/${store.state.role}`)
          .update({
            lastConnect: moment(new Date()).format("YYYY/MM/DD hh:mm"),
            join: true,
          })
          .then(() => {
            loading.value = false;
            setInterval(() => {
              db.ref(`/room/${joinRoomId.value}/${store.state.role}`).update({
                lastConnect: moment(new Date()).format("YYYY/MM/DD hh:mm"),
              });
            }, 60000);
            router.push("/en/gameRoom");
          });
      });
    };
    const close = () => content.emit("close");
    return { joinRoom, joinRoomId, close, loading ,reset};
  },
};
</script>

<style lang="scss">
@import "@/scss/main.scss";
.joinRoom {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  strong {
    font-size: 36px;
  }
  &__title {
    width: calc(80% + 16px);
    font-size: 16px;
    line-height: 1.5;
    text-align: left;
  }
  input {
    padding: 16px 12px;
    width: 80%;
    font-size: 24px;
    border-radius: 4px;
    border: 4px solid #000;
    text-align: center;
    background-color: #ddd;
    @include pad {
      font-size: 16px;
    }
    &:focus {
      outline: none;
      border: 4px solid #000;
    }
  }
  input[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
  .btn {
    width: 180px;
    height: 56px;
    background-color: rgb(245, 212, 102);
    border: 3px solid #000;
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
