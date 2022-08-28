<script setup>
import {computed, inject} from "vue";
import {getDateFromTimestamp} from "../utils/function";

const props = defineProps(["todo"]);
const toggleCompleted = inject("toggleCompleted");

const date = computed(() => getDateFromTimestamp(props.todo.id));
const checked = computed(() => (props.todo.done ? true : false));
</script>

<template>
  <li class="todoItem" :class="{todoItem_completed: todo.done}">
    <label
      class="todoItem__checkboxVisible"
      :class="{todoItem__checkboxVisible_checked: todo.done}"
    >
      <input
        :checked="checked"
        type="checkbox"
        class="todoItem__checkboxHidden"
        @change="() => toggleCompleted(todo)"
      />
    </label>
    <p class="todoItem__description">{{ todo.description }}</p>
    <p class="todoItem__status" :class="{todoItem__status_done: todo.done}">
      {{ todo.done ? "Выполнено" : "В работе" }}
    </p>
    <p class="todoItem__date">{{ date }}</p>
  </li>
</template>

<style scoped>
.todoItem {
  display: flex;
  justify-content: start;
  align-items: center;
  min-height: 57px;
  border-top: 1px solid #eeebe9;
  border-bottom: 1px solid #eeebe9;
}

.todoItem:hover {
  background: #f6f9ff;
}

.todoItem__checkboxHidden {
  width: 95vw;
  max-width: 1250px;
  min-width: 720px;
  height: 40px;
  opacity: 0;
  position: absolute;
  top: -15px;
  left: -15px;
  z-index: 2;
  cursor: pointer;
}

.todoItem__checkboxVisible {
  width: 20px;
  height: 20px;
  aspect-ratio: 1;
  box-sizing: border-box;
  margin: 0 20px 0 40px;
  border: 1px solid #16191d;
  border-radius: 50%;
  position: relative;
}

.todoItem__checkboxVisible_checked {
  border: 1px solid #134ec1;
  box-shadow: 0px 4px 4px rgba(19, 78, 193, 0.15);
  background: url("../images/checked.svg") center no-repeat;
}
.todoItem__description {
  margin-inline-end: auto;
  padding: 0 20px;
}

.todoItem__status {
  min-width: 76px;
  margin-inline-end: 55px;
  margin-inline-start: 21px;
  color: #f89b11;
}
.todoItem__status_done {
  color: #134ec1;
}
.todoItem__date {
  margin: 0 32px 0 21px;
  min-width: 76px;
}
</style>