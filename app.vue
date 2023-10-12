<template>
  <div>
    <div>
      <textarea class="vh-100 inline-block"
        :class="{ 'w-50': showInput && showOutput, 'w-100': showInput && !showOutput, 'd-none': !showInput && showOutput }"
        v-model="inputValue"></textarea>
      <div class="output inline-block float-right overflow-scroll"
        :class="{ 'w-50': showInput && showOutput, 'w-100': !showInput && showOutput, 'd-none': showInput && !showOutput, 'vh-100': mode !== -1 }"
        v-html="outputValue"></div>
    </div>
    <div class="mx-auto">
      <span class="px-2 small">{{ modeName[mode + 1] }}</span>
      <button v-show="mode !== 2" @click="mode++">&lt;</button>
      <span class="px-2">&lt;{{ modeName[mode] }}&gt;</span>
      <button v-show="mode !== -1" @click="mode--">&gt;</button>
      <span class="px-2 small">{{ modeName[mode - 1] }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import defaultText from "assets/defaultText.md?raw"
const inputValue = ref(defaultText)
const outputValue = computed(() => parseMD(inputValue.value))

const mode = ref(1)
const showInput = computed(() => mode.value !== 0 && mode.value !== -1)
const showOutput = computed(() => mode.value !== 2)

const modeName: { [key: number | string]: string } = {
  "-2": "",
  "-1": "印刷モード",
  "0": "表示モード",
  "1": "編集/表示モード",
  "2": "編集モード",
  "3": ""
}
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

.w-100 {
  width: 99%;
}

.d-none {
  display: none !important;
  ;
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

.px-2 {
  padding-right: 1rem;
  padding-left: 1rem;
}

.mx-auto {
  margin: auto;
  width: fit-content
}

.small {
  font-size: .8rem
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