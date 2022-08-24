<script setup>
import {ref} from "vue";
import TodoItem from "./TodoItem.vue";
</script>

<template>
  <ul todo in todos>
    <TodoItem key="todo.id" />
  </ul>
</template>
