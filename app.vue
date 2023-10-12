<template>
  <div>
    <textarea class="w-50 vh-100 inline-block" v-model="inputValue"></textarea>
    <div class="output w-50 vh-100 inline-block float-right overflow-scroll" v-html="outputValue"></div>
  </div>
</template>

<script setup lang="ts">
import defaultText from "assets/defaultText.md?raw"
const inputValue = ref(defaultText)
const outputValue = computed(() => parseMD(inputValue.value))
</script>

<style>
html,
body {
  margin: 0;
}
</style>

<style scoped>
.w-50 {
  width: 49%;
}

.vh-100 {
  height: 95vh;
}

.inline-block {
  display: inline-block;
}

.float-right {
  float: right
}

.overflow-scroll {
  overflow-y: auto;
}

.output :deep(code) {
  border: 1px solid black;
  border-radius: .25rem;
  padding-left: .25rem;
  padding-right: .25rem;
}

.output :deep(blockquote) {
  border-left: .25rem solid;
  padding-left: .5rem;
  border-color: gray;
}

.output :deep(table) {
  border-spacing: 0px;
}

.output :deep(td),
.output :deep(th) {
  border: 1px black solid;
  padding: .2rem;
}
</style>