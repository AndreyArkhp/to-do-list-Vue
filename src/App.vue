<script setup>
import {ref, computed, watchEffect, provide} from "vue";
import TodosList from "./components/TodosList.vue";
import {STORAGE_KEY, FORM_ADD_TODO_INPUT} from "./utils/constants";
import Modal from "./components/Modal.vue";
import FormAddTodo from "./components/FormAddTodo.vue";
const todos = ref(JSON.parse(localStorage.getItem(STORAGE_KEY)) || []);
const selectValue = ref("date");
watchEffect(() => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(todos.value));
});
watchEffect(() => {
  if (selectValue.value === "date") {
    todos.value.sort((a, b) => a.id - b.id);
  }
  if (selectValue.value === "status") {
    todos.value.sort((a) => {
      if (a.done) {
        return 1;
      } else {
        return -1;
      }
    });
  }
});
const modalActive = ref(false);
function toggleCompleted(todo) {
  todo.done = !todo.done;
}

function closeModal() {
  modalActive.value = false;
}
function escCloseModal(e) {
  if (modalActive.value && e.key === "Escape") {
    closeModal();
  }
}

function addTodo(text) {
  console.log(text);
  if (text) {
    todos.value.push({id: Date.now(), description: text, done: false});
  }
}
provide("modalActive", {modalActive, closeModal, escCloseModal});
provide("toggleCompleted", toggleCompleted);
provide("addTodo", addTodo);
</script>

<template>
  <section class="todoApp">
    <header class="header">
      <h1 class="todoTitle">To do list</h1>
      <button class="addTodo" @click="modalActive = true"></button>
      <div><input type="text" /></div>
      <label class="label">
        Сортировать по:
        <select class="select" v-model="selectValue">
          <option value="date">Дата</option>
          <option value="status">Статус</option>
        </select></label
      >
    </header>
    <main>
      <TodosList :todos="todos" />
    </main>
    <Teleport to="#modal">
      <Modal><FormAddTodo /></Modal>
    </Teleport>
  </section>
</template>

<style scoped>
.label {
  justify-self: end;
  font: 400 normal 14px/132% "VS", Arial, sans-serif;
}
.select {
  width: 80px;
  border: none;
  appearance: none;
  -moz-appearance: none;
  -webkit-appearance: none;
  background-color: #fff;
  cursor: pointer;
  background: url(./images/selectBg.svg) right no-repeat;
  font: inherit;
  padding: 0 15px 0 12px;
}
.select:focus {
  outline: none;
}
.todoApp {
  max-width: 1300px;
  min-width: 800px;
  margin: 0 auto;
}
.header {
  padding: 108px 0 26px 40px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, auto);
  row-gap: 30px;
  border: 1px solid rgb(51, 192, 33);
}
.addTodo {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: none;
  position: relative;
  justify-self: end;
  background: url(./images/plus.svg) center no-repeat, #d6dbeb;
  transition: opacity linear 0.1s;
  cursor: pointer;
}
.addTodo:hover {
  opacity: 0.8;
}
</style>