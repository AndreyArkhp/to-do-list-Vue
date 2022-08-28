<script setup>
import {inject, onMounted, onUnmounted, onUpdated} from "vue";
const {modalActive, closeModal, escCloseModal} = inject("modalActive");
onUpdated(() => {
  if (modalActive.value) {
    document.addEventListener("keydown", escCloseModal);
  } else {
    document.removeEventListener("keydown", escCloseModal);
  }
});
</script>

<template>
  <div v-if="modalActive" @click.self="closeModal" class="modal">
    <div class="modal__container">
      <button class="modal__closeBtn" @click.self="closeModal" type="button"></button>
      <slot></slot>
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
  padding: 40px 40px 50px;
  background: #fff;
}
.modal__closeBtn {
  width: 22px;
  height: 22px;
  border: none;
  padding: 0;
  display: inline-block;
  background: url(../images/closeBtn.svg);
  position: absolute;
  top: 0;
  right: 0;
  margin-inline-end: 40px;
  margin-block-start: 40px;
  cursor: pointer;
  transition: opacity linear 0.1s;
}
.modal__closeBtn:hover {
  opacity: 0.8;
}
</style>