<template>
  <b-alert
    class="alert-light fade show position-fixed bottom-0 start-50 translate-middle-x z-index-99 d-lg-flex justify-content-between align-items-center shadow p-4 col-9 col-md-7 col-xxl-5"
    role="alert" v-model="show">
    <div>
      <h4 class="text-dark">Admissions open!</h4>
      <p class="m-0 pe-3">We are so eager to be working with kids and making a difference in their careers. Being a
        mentor is what we have always wanted to be.</p>
    </div>
    <div class="d-flex mt-3 mt-lg-0">
      <b-button type="button" variant="success" size="sm" class="mb-0 me-2" @click="show = !show" data-bs-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">Get Admission</span>
      </b-button>
      <div class="position-absolute end-0 top-0 mt-n3 me-n3">
        <b-button type="button" variant="danger" class="btn-round btn-sm mb-0" @click="show = !show" data-bs-dismiss="alert" aria-label="Close">
          <span aria-hidden="true">
            <BIconXLg />
          </span>
        </b-button>
      </div>
    </div>
  </b-alert>
</template>
<script setup lang="ts">
import { ref } from 'vue';
const show = ref(true);

import { BIconXLg } from 'bootstrap-icons-vue';
</script>