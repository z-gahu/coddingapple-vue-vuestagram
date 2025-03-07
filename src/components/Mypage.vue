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
      <span class="profile-name">{{ follow.name }}</span>
    </div>
  </div>
</template>

<script>
import { onMounted, ref } from "vue";
import axios from "axios";

export default {
  name: "myPage",
  data() {
    return {
      // followerName: String,
      // followerProfileImgUrl: String,
    };
  },
  setup() {
    let follower = ref([]);

    onMounted(() => {
      axios.get("/follower.json").then((a) => {
        console.log(a.data);
        follower.value = a.data;
      });
    });
    return { follower };
  },
};
</script>

<style></style>
