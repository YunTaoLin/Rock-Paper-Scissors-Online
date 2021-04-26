<template>
  <div class="wrap">
    <div class="roomId">房間號碼：{{ roomId }}</div>
    <div class="container">
      <div class="player self">
        <div class="box">
          <div
            class="selectItem"
            v-if="selected.name"
            :style="{ backgroundColor: selected.color }"
          >
            <figure>
              <img :src="selected.img" alt="" />
              <figcaption>{{ selected.name }}</figcaption>
            </figure>
          </div>
          <div v-else>?</div>
        </div>
        <h2>自己</h2>
      </div>
      <div class="vs">VS</div>
      <div class="player other">
        <div class="box">
          <div
            class="selectItem"
            v-if="opponentSelected.name"
            :style="{ backgroundColor: opponentSelected.color }"
          >
            <figure>
              <img :src="opponentSelected.img" alt="" />
              <figcaption>{{ opponentSelected.name }}</figcaption>
            </figure>
          </div>
          <div v-else>?</div>
        </div>
        <h2>對手</h2>
      </div>
    </div>
    <div class="select" v-if="!result">
      <div class="select_title">選擇出拳</div>
      <div class="group">
        <div
          class="selectItem"
          :style="{ backgroundColor: item.color }"
          v-for="item in selectList"
          :key="item.name"
          @click="selectHandler(item)"
        >
          <figure>
            <img :src="item.img" alt="" />
            <figcaption>{{ item.name }}</figcaption>
          </figure>
        </div>
      </div>
    </div>
    <div class="result" v-else>
      <div class="result_title">{{ result }}</div>
      <div class="refreshBtn" @click="again()">再來一次！</div>
    </div>
    <div class="loading" v-show="!startGame">等待對手加入中...</div>
    <div class="loading" v-show="waiting">等待對手出拳...</div>
  </div>
</template>

<script lang="ts">
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import firebase from "firebase/app";
import img_scissors from "../assets/剪刀.png";
import img_stone from "../assets/石頭.png";
import img_paper from "../assets/布.png";
import { computed, reactive, ref } from "vue";
const selectList = [
  {
    name: "剪刀",
    img: img_scissors,
    color: "#86bebb",
  },
  {
    name: "石頭",
    img: img_stone,
    color: "#e0808b",
  },
  {
    name: "布",
    img: img_paper,
    color: "#84bc7f",
  },
];
export default {
  setup() {
    const store = useStore();
    const router = useRouter();
    const db = firebase.database();
    const selected = reactive({ name: "", img: "", color: "" });
    const opponentSelected = reactive({ name: "", img: "", color: "" });
    const startGame = ref(false);
    const waiting = ref(false);
    const result = ref("");
    if (!store.state.linkedRoom) {
      router.replace("/");
    }
    const resultHandler = () => {
      let mySelect = selected.name;
      let opponent = opponentSelected.name;
      const myEnum = ["你贏了", "你輸了", "雙方平手"];
      switch (mySelect) {
        case "剪刀":
          if (opponent == "剪刀") result.value = myEnum[2];
          if (opponent == "石頭") result.value = myEnum[1];
          if (opponent == "布") result.value = myEnum[0];
          break;
        case "石頭":
          if (opponent == "剪刀") result.value = myEnum[0];
          if (opponent == "石頭") result.value = myEnum[2];
          if (opponent == "布") result.value = myEnum[1];
          break;
        case "布":
          if (opponent == "剪刀") result.value = myEnum[1];
          if (opponent == "石頭") result.value = myEnum[0];
          if (opponent == "布") result.value = myEnum[2];
          break;
      }
      waiting.value = false;
    };
    if (store.state.linkedRoom) {
      db.ref(`/room/${store.state.linkedRoom}/`).on("value", (snapshot) => {
        let state = snapshot.val();
        //等待對手加入
        if (state.play_A?.join && state.play_B?.join) {
          startGame.value = true;
        }
        //判斷勝負
        if (state.play_A?.select && state.play_B?.select) {
          const opponentRole =
            store.state.role === "play_A" ? "play_B" : "play_A";
          const opponent = state[opponentRole].select;
          const opponentSelectItem = selectList.find(
            (item) => item.name == opponent
          );
          if (opponentSelectItem) {
            opponentSelected.name = opponentSelectItem.name;
            opponentSelected.img = opponentSelectItem.img;
            opponentSelected.color = opponentSelectItem.color;
            resultHandler();
          }
        }
      });
    }
    const selectHandler = (item: any) => {
      selected.name = item.name;
      selected.img = item.img;
      selected.color = item.color;
      waiting.value = true;
      db.ref(`/room/${store.state.linkedRoom}/${store.state.role}/`).update({
        select: item.name,
        join: false,
      });
    };

    //再來一次
    const again = () => {
      selected.name = "";
      selected.img = "";
      selected.color = "";
      opponentSelected.name = "";
      opponentSelected.img = "";
      opponentSelected.color = "";
      startGame.value = false;
      result.value='';
      db.ref(`/room/${store.state.linkedRoom}/${store.state.role}/`).update({
        select: null,
        join: true,
      });
    };

    const roomId = computed(() => store.state.linkedRoom);
    return {
      selectHandler,
      selectList,
      selected,
      startGame,
      waiting,
      roomId,
      opponentSelected,
      result,
      again,
    };
  },
};
</script>

<style lang="scss" scoped>
.wrap {
  padding: 24px 12px;
  position: relative;
}
.roomId {
  margin-bottom: 24px;
  font-size: 48px;
  text-align: center;
  font-weight: 700;
}
.container {
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
  .player {
    display: flex;
    flex-direction: column;
    align-items: center;
    h2 {
      font-size: 36px;
      text-align: center;
      font-weight: 700;
    }
    .box {
      width: 200px;
      height: 300px;
      border-radius: 12px;
      border: 12px solid #000;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 72px;
      background-color: #fff;
    }
  }
  .vs {
    font-size: 72px;
    margin: 0 24px;
    color: rgb(236, 205, 102);
  }
}
.select {
  margin: 12px auto 0;
  display: flex;
  flex-direction: column;
  border: 8px solid #000;
  background-color: #f5f4e2;
  padding: 24px;
  .select_title {
    font-size: 36px;
    text-align: center;
    font-weight: 700;
    margin-bottom: 12px;
  }
  .group {
    display: flex;
    justify-content: center;
  }
}
//元素
.selectItem {
  width: 140px;
  height: 140px;
  margin: 0 12px;
  font-size: 16px;
  font-weight: 700;
  transition: 0.3s;
  border: 4px solid #000;
  figure {
    width: 100%;
    height: 100%;
    margin: 0;
    text-align: center;
    cursor: pointer;
    img {
      width: 70%;
    }
  }
  &:hover {
    transform: scale(1.1);
  }
}
.loading {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(252, 252, 252, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(6px);
  font-size: 72px;
  font-weight: 700;
  white-space: 2px;
}
//結果
.result {
  display: flex;
  flex-direction: column;
  align-items: center;
  .result_title {
    font-weight: 700;
    font-size: 72px;
    text-align: center;
    margin-bottom: 24px;
  }
  .refreshBtn {
    width: 120px;
    height: 48px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 4px solid #000;
    margin: 12px 0;
    border-radius: 600px;
    font-size: 20px;
    font-weight: 700;
    cursor: pointer;
    background-color: rgb(236, 205, 102);
    transition: 0.2s;
    &:hover {
      transform: scale(1.1);
    }
  }
}
</style>
