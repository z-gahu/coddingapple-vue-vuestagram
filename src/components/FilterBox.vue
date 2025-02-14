<template>
  <div
    :class="`${필터} filter-item`"
    :style="`background-image:url(${첨부이미지})`"
  ></div>
</template>

<script>
export default {
  data() {
    return {};
  },
  name: "filterBox",
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
