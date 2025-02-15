<template>
  <div
    :class="`${필터} filter-item`"
    :style="`background-image:url(${첨부이미지})`"
  >
    <button @click="fire">버튼</button>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "filterBox",
  methods: {
    fire() {
      this.emitter.emit("작명", "123");
    },
  },
  data() {
    return {};
  },
  props: {
    첨부이미지: String,
    필터: String,
  },
};
</script>

<style>
.filter-item {
  width: 100px;
  height: 100px;
  margin: 10px 10px 10px auto;
  padding: 8px;
  display: inline-block;
  color: white;
  background-size: cover;
  background-position: center;
}
</style>
