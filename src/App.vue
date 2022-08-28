<script setup>
import {ref, computed, watchEffect, provide} from "vue";
import TodosList from "./components/TodosList.vue";
import {STORAGE_KEY} from "./utils/constants";
import Modal from "./components/Modal.vue";
import FormAddTodo from "./components/FormAddTodo.vue";
import SelectSorting from "./components/SelectSorting.vue";
import SearchTodo from "./components/SearchTodo.vue";
import {search} from "./utils/function";

const todos = ref(JSON.parse(localStorage.getItem(STORAGE_KEY)) || []);

const selectValue = ref("date");
const searchValue = ref("");
const modalActive = ref(false);

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

const filteredTodos = computed(() => search(todos, searchValue));

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
      <SearchTodo v-model="searchValue" />
      <SelectSorting v-model="selectValue" />
    </header>
    <main>
      <TodosList :todos="filteredTodos" />
    </main>
    <Teleport to="#modal">
      <Modal><FormAddTodo /></Modal>
    </Teleport>
  </section>
</template>

<style scoped>
.todoApp {
  max-width: 1300px;
  min-width: 800px;
  margin: 0 auto;
}
.todoTitle {
  font: 700 normal 24px/132% "Montserrat", Arial, sans-serif;
  padding-block-start: 5px;
}
.header {
  padding: 108px 0 28px 40px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, auto);
  row-gap: 28px;
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