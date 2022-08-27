<script setup>
import {ref, computed, watchEffect, provide} from "vue";
import TodosList from "./components/TodosList.vue";
import {STORAGE_KEY} from "./utils/constants";
import Modal from "./components/Modal.vue";
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
const modalActive = ref(false);
function toggleCompleted(todo) {
  todo.done = !todo.done;
}
function closeModal() {
  modalActive.value = false;
}
provide("modalActive", {modalActive, closeModal});
provide("toggleCompleted", toggleCompleted);
</script>

<template>
  <section class="todoApp">
    <header class="header">
      <h1 class="todoTitle">To do list</h1>
      <button class="addTodo" @click="modalActive = true"></button>
      <div><input type="text" /></div>
      <div>
        <select name="" id="">
          <option value="1">Дата</option>
          <option value="2">Статус</option>
        </select>
      </div>
    </header>
    <main>
      <TodosList :todos="todos" />
    </main>
    <Teleport to="#modal">
      <Modal><h2>test</h2></Modal>
    </Teleport>
  </section>
</template>

<style scoped>
.todoApp {
  max-width: 1300px;
  min-width: 800px;
  margin: 0 auto;
}
.header {
  padding: 104px 0 30px 40px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, auto);
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
}
.addTodo::before {
  content: "";
  width: 20px;
  height: 5px;
  background: #314b99;
  top: 0;
  left: 0;
}
</style>
