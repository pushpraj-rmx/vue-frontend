<template>
  <b-alert
    class="alert-light fade show position-fixed start-0 bottom-0 z-index-99 rounded-3 shadow p-4 ms-3 mb-3 col-10 col-md-4 col-lg-3 col-xxl-2"
    role="alert" v-model="cookieAlert">
    <div class="text-dark text-center">
      <img :src="element27" class="h-50px mb-3" alt="cookie">
      <p class="mb-0">This website stores cookies on your computer. To find out more about the cookies we use, see our
        <a class="text-dark" href="#"><u> Privacy Policy</u></a>
      </p>

      <div class="mt-3">
        <b-button type="button" :variant="null" size="sm" class="btn-success-soft mb-0">
          <span aria-hidden="true" @click="cookieAlert = !cookieAlert">Accept</span>
        </b-button>{{ ' ' }}
        <b-button type="button" :variant="null" size="sm" class="btn-danger-soft mb-0">
          <span aria-hidden="true" @click="cookieAlert = !cookieAlert">Decline</span>
        </b-button>
      </div>
    </div>
  </b-alert>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import element27 from '@/assets/images/element/27.svg';

const cookieAlert = ref(true);
</script>