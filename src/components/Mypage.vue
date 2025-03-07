<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div style="padding: 10px">
    <h4>팔로워</h4>
    <input placeholder="?" />
    <div class="post-header" v-for="(follow, i) in follower" :key="i">
      <div
        class="profile"
        :style="`background-image:url(${follow.image})`"
      ></div>
      <span class="profile-name"
        >{{ follow.name }}/{{ testReactive.name }}</span
      >
    </div>
  </div>
</template>

<script>
import { onMounted, reactive, ref, toRefs } from "vue";
import axios from "axios";

export default {
  name: "myPage",
  props: {
    one: Number,
  },
  data() {
    return {
      // followerName: String,
      // followerProfileImgUrl: String,
    };
  },
  setup(props) {
    let follower = ref([]);
    let testReactive = reactive({ name: "jang" });

    let { one } = toRefs(props);
    console.log("props:", one.value);

    onMounted(() => {
      axios.get("/follower.json").then((a) => {
        console.log(a.data);
        follower.value = a.data;
      });
    });
    return { follower, testReactive };
  },
};
</script>

<style></style>
