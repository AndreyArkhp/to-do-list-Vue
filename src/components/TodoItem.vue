<script setup>
import {ref} from "vue";
defineProps(["todo", "todoHeader"]);
</script>

<template>
  <li v-if="todoHeader"></li>
  <li v-else>
    <input type="checkbox" class="checkbox" />
    <div class="checkVisible"></div>
    <p class="todo">{{ todo.description }}</p>
    <p>{{ todo.done ? "Выполнено" : "В работе" }}</p>
    <p class="data">{{ new Date(todo.id).getFullYear() }}</p>
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

. .checkbox {
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
