<script setup>
import {inject, ref} from "vue";
const todoText = ref("");
const addTodo = inject("addTodo");
const {closeModal} = inject("modalActive");
function handleSubmit() {
  addTodo(todoText.value);
  closeModal();
  todoText.value = "";
}
</script>

<template>
  <form @submit.prevent="handleSubmit" class="form">
    <h2 class="form__title">Создать новую задачу</h2>
    <label class="form__subtitle" for="description">Описание</label>
    <input
      type="text"
      placeholder="Введите описание"
      id="description"
      class="form__description"
      v-model.trim="todoText"
      name="description"
    />
    <button class="form__submit">Создать</button>
  </form>
</template>

<style>
.form__title {
  font: 700 normal 18px/132% "Montserrat", Arial, sans-serif;
  margin-bottom: 30px;
}
.form__subtitle {
  display: block;
  font: 400 normal 14px/14px "AGA", Arial, sans-serif;
  margin-bottom: 5px;
}

.form__description {
  box-sizing: border-box;
  width: 319px;
  height: 40px;
  border: 1px solid #dde2e4;
  border-radius: 8px;
  margin-bottom: 30px;
  padding: 11px 0 11px 16px;
  font: 400 normal 14px/132% "VS", Arial, sans-serif;
}

.form__description:focus {
  outline: 1px solid #314b99;
}

.form__submit {
  display: block;
  padding: 12px 40px;
  width: 153px;
  height: 48px;
  background: #f0f5ff;
  border-radius: 8px;
  border: none;
  color: #314b99;
  cursor: pointer;
  transition: opacity linear 0.1s;
  margin: 0 auto;
  font: 400 normal 18px/132% "VS", Arial, sans-serif;
}
.form__submit:hover {
  opacity: 0.8;
}
</style>