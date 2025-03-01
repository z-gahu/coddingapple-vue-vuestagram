import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      //
      name: "kim",
      age: 20,
      likes: 0,
      likesToggle: false,
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
  },
});

export default store;
