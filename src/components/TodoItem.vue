<script setup>
import {ref} from "vue";
const checkboxHidden = ref("checkHidden");
const checkboxVisible = ref("checkVisible");
const todo = ref("todo");
const data = ref("data");
</script>

<template>
  <li>
    <input type="checkbox" :class="checkboxHidden" />
    <div :class="checkboxVisible"></div>
    <p :class="todo">text todo</p>
    <p>status</p>
    <p :class="data">date</p>
  </li>
</template>

<style scoped>
li {
  display: flex;
  justify-content: start;
  align-items: center;
  max-width: 1300px;
  min-width: 640px;
  min-height: 58px;
  border-top: 1px solid #eeebe9;
  border-bottom: 1px solid #eeebe9;
}

.checkHidden {
  width: 25px;
  height: 25px;
  opacity: 0;
  position: absolute;
  top: 20px;
  left: 38px;
  z-index: 5;
}

.checkVisible {
  width: 20px;
  height: 20px;
  margin: 19px 40px;
  border: 1px solid #16191d;
  border-radius: 50%;
}

.todo {
  margin-inline-end: auto;
}

.data {
  margin: 20px 32px 20px 76px;
}
</style>
