<script setup>
import {ref, computed, watchEffect} from "vue";
import TodosList from "./components/TodosList.vue";
import {STORAGE_KEY} from "./utils/constants";
const todosTest = ref([
  {id: Date.now(), description: "Размещение новостей на сайте", done: true},
  {id: Date.now(), description: "Внедрить Wi-fi для читателей", done: false},
  {id: Date.now(), description: "Отредактировать раздел “Доступная среда”", done: true},
  {id: Date.now(), description: "Презентация “Информационные технологии”", done: false},
  {id: Date.now(), description: "Счётчики — внедрить дизайн", done: false},
  {id: Date.now(), description: "Сверстать новый layout", done: false},
  {
    id: Date.now(),
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia consequuntur esse modi dolorem nam est tenetur a earum reiciendis consectetur?",
    done: false,
  },
]);
const todos = ref(JSON.parse(localStorage.getItem(STORAGE_KEY)) || todosTest);
function toggleCompleted(todo) {
  todo.done = !todo.done;
}
</script>

<template>
  <main>
    <TodosList :todos="todos" @completed="toggleCompleted" />
  </main>
</template>

<style scoped></style>
