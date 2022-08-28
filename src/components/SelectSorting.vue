<script setup>
defineProps(["modelValue"]);
defineEmits(["update:modelValue"]);
</script>

<template>
  <label class="label">
    Сортировать по:
    <select
      class="select"
      :value="modelValue"
      @change="$emit('update:modelValue', $event.target.value)"
    >
      <option value="date">Дата</option>
      <option value="status">Статус</option>
    </select></label
  >
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
  background: url(../images/selectBg.svg) right no-repeat;
  font: inherit;
  padding: 0 15px 0 12px;
}
.select:focus {
  outline: none;
}
</style>
