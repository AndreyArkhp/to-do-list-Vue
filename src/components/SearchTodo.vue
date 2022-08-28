<script setup>
defineProps(["modelValue"]);
defineEmits(["update:modelValue"]);
</script>
<template>
  <div>
    <button class="searchBtn"></button>
    <input
      autofocus
      type="text"
      class="search"
      placeholder="Поиск Имени, статуса или даты"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    />
  </div>
</template>
<style scoped>
.search {
  width: 208px;

  border: none;
  outline: none;
  font: 400 normal 14px/132% "VS", Arial, sans-serif;
}
.searchBtn {
  border: none;
  outline: none;
  background: url(../images/search.svg) left no-repeat;
  width: 18px;
  height: 18px;
  margin-inline-end: 16px;
  cursor: pointer;
  transition: opacity linear 0.1s;
}
.searchBtn:hover {
  opacity: 0.8;
}
</style>
