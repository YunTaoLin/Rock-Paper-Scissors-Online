<template>
  <div class="wrap">
    <div class="roomId">Room ID：{{ roomId }}</div>
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
              <figcaption>
                {{ selected.en }}
              </figcaption>
            </figure>
          </div>
          <div v-else>?</div>
        </div>
        <h2>You</h2>
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
              <figcaption>
                {{ opponentSelected.name }}
                <span>{{ opponentSelected.en }}</span>
              </figcaption>
            </figure>
          </div>
          <div v-else>?</div>
        </div>
        <h2>Opponent</h2>
      </div>
    </div>
    <div class="select" v-if="!result">
      <div class="select_title">Choose</div>
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
            <figcaption>
              {{ item.en }}
            </figcaption>
          </figure>
        </div>
      </div>
    </div>
    <div class="result" v-else>
      <div class="result_title">{{ result }}</div>
      <div class="refreshBtn" @click="again()">Play Again！</div>
    </div>
    <!-- //撐高底部 -->
    <div class="space"></div>
    <div class="loading" v-show="!startGame">Waiting Opponent Join...</div>
    <div class="loading" v-show="waiting">Waiting Opponent Choose...</div>
  </div>
</template>

<script lang="ts">
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import firebase from "firebase/compat/app";
import img_scissors from "../assets/剪刀.png";
import img_stone from "../assets/石頭.png";
import img_paper from "../assets/布.png";
import { computed, reactive, ref } from "vue";
const selectList = [
  {
    name: "剪刀",
    img: img_scissors,
    color: "#86bebb",
    en: "Scissors",
  },
  {
    name: "石頭",
    img: img_stone,
    color: "#e0808b",
    en: "Rock",
  },
  {
    name: "布",
    img: img_paper,
    color: "#84bc7f",
    en: "Paper",
  },
];
export default {
  setup() {
    const store = useStore();
    const router = useRouter();
    const db = firebase.database();
    const selected = reactive({ name: "", img: "", color: "", en: "" });
    const opponentSelected = reactive({ name: "", img: "", color: "", en: "" });
    const startGame = ref(false);
    const waiting = ref(false);
    const result = ref("");
    const myEnum = ["Win", "Lose", "Draw"];
    if (!store.state.linkedRoom) {
      router.replace("/en-us");
    }
    const resultHandler = () => {
      let mySelect = selected.name;
      let opponent = opponentSelected.name;
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
            opponentSelected.en = opponentSelectItem.en;
            resultHandler();
          }
        }
      });
    }
    const selectHandler = (item: any) => {
      selected.name = item.name;
      selected.img = item.img;
      selected.color = item.color;
      selected.en = item.en;
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
      selected.en = "";
      opponentSelected.name = "";
      opponentSelected.img = "";
      opponentSelected.color = "";
      opponentSelected.en = "";
      startGame.value = false;
      result.value = "";
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
@import "@/scss/main.scss";
.wrap {
  width: 100%;
  height: 100%;
  padding: 24px 12px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  @include pad {
    justify-content: flex-start;
  }
  .space {
    height: 5vh;
  }
}
.roomId {
  margin-bottom: 24px;
  font-size: 36px;
  text-align: center;
  font-weight: 700;
  @include pad {
    font-size: 24px;
  }
}
.container {
  width: 100%;
  height: 40vh;
  max-height: 330px;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
  .player {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    @include pad {
      width: 35%;
      height: 55vw;
    }
    h2 {
      font-size: 24px;
      text-align: center;
      font-weight: 700;
      @include pad {
        padding-top: 4px;
        font-size: 16px;
      }
    }
    .box {
      width: 200px;
      height: 100%;
      max-height: 300px;
      border-radius: 12px;
      border: 12px solid #000;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 72px;
      background-color: #fff;
      @include pad {
        width: 100%;
        border: 6px solid #000;
      }
      .selectItem {
        width: 75%;
        height: 80%;
        margin: 0;
        max-height: none;
        @include pad {
          width: 88%;
          height: 90%;
        }
      }
    }
  }
  .vs {
    font-size: 72px;
    margin: 0 24px;
    color: rgb(236, 205, 102);
    @include pad {
      font-size: 40px;
      margin: 0 12px;
    }
  }
}
.select {
  width: 100%;
  height: 33vh;
  max-height: 250px;
  margin: 12px auto 0;
  display: flex;
  flex-direction: column;
  border: 8px solid #000;
  background-color: #f5f4e2;
  padding: 12px;
  @include pad {
    padding: 4px;
    justify-content: space-between;
  }
  .select_title {
    font-size: 36px;
    text-align: center;
    font-weight: 700;
    margin-bottom: 12px;
  }
  .group {
    display: flex;
    justify-content: center;
    height: calc(100% - 60px);
  }
}
//元素
.selectItem {
  flex-grow: 0;
  width: 140px;
  height: 100%;
  margin: 0 12px;
  font-size: 16px;
  font-weight: 700;
  transition: 0.3s;
  border: 4px solid #000;
  @include pad {
    width: 24vw;
    margin: 0 8px;
    max-height: 30vw;
  }
  figure {
    width: 100%;
    height: 95%;
    margin: 0;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    white-space: nowrap;
    font-size: 18px;
    @include pad {
      font-size: 14px;
    }
    img {
      width: 70%;
    }
    span {
      font-size: 12px;
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
  font-size: 68px;
  font-weight: 700;
  white-space: 2px;
  text-align: center;
  @include pad {
    font-size: 44px;
    background-color: rgba(252, 252, 252, 0.9);
  }
}
//結果
.result {
  width: 100%;
  height: 33vh;
  max-height: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
  .result_title {
    font-weight: 700;
    font-size: 48px;
    text-align: center;
    margin-bottom: 24px;
  }
  .refreshBtn {
    height: 48px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 4px solid #000;
    margin: 12px 0;
    border-radius: 600px;
    font-size: 20px;
    font-weight: 700;
    padding:4px 12px;
    cursor: pointer;
    background-color: rgb(236, 205, 102);
    transition: 0.2s;
    &:hover {
      transform: scale(1.1);
    }
  }
}
</style>
