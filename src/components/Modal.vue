<script setup>
import {inject} from "vue";
const {modalActive, closeModal} = inject("modalActive");
</script>

<template>
  <div v-if="modalActive" @click.self="closeModal" class="modal">
    <div class="modal__container">
      <span class="modal__closeBtn" @click.self="closeModal"></span>
    </div>
  </div>
</template>

<style scoped>
.modal {
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.01);
  backdrop-filter: blur(4px);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 5;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.modal__container {
  border: 1px solid #dde2e4;
  box-shadow: 0px 25px 50px -12px rgba(0, 0, 0, 0.25);
  border-radius: 6px;
  position: relative;
}
.modal__closeBtn {
  width: 22px;
  height: 22px;
  display: inline-block;
  background: url(../images/closeBtn.svg);
  position: absolute;
  top: 0;
  right: 0;
  margin-inline-end: 40px;
  margin-block-start: 40px;
  cursor: pointer;
}
</style>
