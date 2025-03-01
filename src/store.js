import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      //
      name: "kim",
      age: 20,
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
  },
});

export default store;
