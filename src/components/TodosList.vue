<script setup>
import {ref} from "vue";
import TodoItem from "./TodoItem.vue";
const todos = ref([
  {id: Date.now(), description: "Размещение новостей на сайте", done: false},
  {id: Date.now(), description: "Внедрить Wi-fi для читателей", done: false},
]);
</script>

<template>
  <ul>
    <TodoItem :todoHeader="true" />
    <TodoItem :key="todo.id" v-for="todo in todos" :todo="todo" />
  </ul>
</template>
