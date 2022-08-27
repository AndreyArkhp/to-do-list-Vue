<script setup>
import {ref} from "vue";
import TodoItem from "./TodoItem.vue";
defineProps(["todos"]);
</script>

<template>
  <ul class="todoList">
    <li class="todoHeader">
      <p class="todoHeader__item todoHeader__item_type_description">Описание</p>
      <p class="todoHeader__item todoHeader__item_type_status">Статус</p>
      <p class="todoHeader__item todoHeader__item_type_date">Дата</p>
    </li>
    <TodoItem :key="todo.id" v-for="todo in todos" :todo="todo" />
  </ul>
</template>

<style scoped>
.todoList {
  font: 400 normal 14px/18.48px "VS", Arial, sans-serif;
}
.todoHeader {
  display: flex;
  justify-content: flex-end;
}

.todoHeader__item {
  border-left: 1px solid grey;
  padding: 10px 20px 4px;
  margin-block-end: 16px;
}
.todoHeader__item_type_description {
  margin: 0 auto auto 80px;
}

.todoHeader__item_type_status {
  margin-inline-end: 65px;
}

.todoHeader__item_type_date {
  margin-inline-end: 57px;
}
</style>
