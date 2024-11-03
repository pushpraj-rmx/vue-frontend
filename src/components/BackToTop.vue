<template>
  <div class="back-top" id="back-to-top" @click="backToTop">
    <BIconArrowUpShort class="position-absolute top-50 start-50 translate-middle" height="25" width="25" />
  </div>
</template>
<script setup lang="ts">
import { onMounted } from 'vue';
import { BIconArrowUpShort } from 'bootstrap-icons-vue';

onMounted(() => {
  const backBtn = document.getElementById('back-to-top');
  if (backBtn) { 
    window.addEventListener('scroll', () => {
      if (window.scrollY >= 800) {
        backBtn.classList.add('back-top-show');
      } else {
        backBtn.classList.remove('back-top-show');
      }
    });
  }
});

const backToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};
</script>