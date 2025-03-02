import { createStore } from "vuex";
import axios from "axios";

const store = createStore({
  state() {
    return {
      //
      name: "kim",
      age: 20,
      likes: 0,
      likesToggle: false,
      more: {}, //더보기
    };
  },
  mutations: {
    // state 를 변경하는 곳
    이름변경(state) {
      state.name = "park";
    },
    증가(state) {
      state.age++;
    },
    likeClick(state) {
      if (state.likesToggle) {
        state.likes = state.likes - 1;
      } else {
        state.likes = state.likes + 1;
      }
      state.likesToggle = !state.likesToggle;
      console.log("toggle", state.likesToggle);
    },
    setMore(state, data) {
      state.more = data;
    },
  },
  actions: {
    // ajax 하는곳, 오래 걸리는 작업
    getData(context) {
      axios.get("https://codingapple1.github.io/vue/more0.json").then((a) => {
        console.log(a.data);
        context.commit("setMore", a.data);
      });
    },
  },
});

export default store;
