<template>
  <b-alert
    class="sticky-element fade show bg-dark text-white rounded-3 shadow p-4 ms-3 mb-3 col-10 col-md-4 col-lg-3 col-xl-2 d-none d-lg-block"
    id="sticky-element" role="alert" v-model="show">
    <div class="d-sm-flex align-items-center mb-3">
      <div>
        <div class="icon-lg bg-purple rounded-circle text-purple">
          <img class="p-3" :src="aftereffect" alt="avatar">
        </div>
      </div>
      <div class="ms-sm-2 mt-2 mt-sm-0">
        <h6 class="mb-0 text-white">Adobe after effect motion</h6>
        <span class="small mb-0 me-3">
          <font-awesome-icon :icon="faClock" class="text-danger me-1" />
          30 mins
        </span>
        <span class="small mb-0 me-1">
          <font-awesome-icon :icon="faCircle" class="fw-bold text-success small me-1" />
          Live
        </span>
      </div>
    </div>
    <p class="mb-0 small">Its recommended that you complete this assignment to improve your design skills for graphics
    </p>

    <div class="d-sm-flex justify-content-between mt-4">
      <ul class="avatar-group mb-2 mb-sm-0">
        <li class="avatar avatar-xs">
          <img class="avatar-img rounded-circle" :src="avatar01" alt="avatar">
        </li>
        <li class="avatar avatar-xs">
          <img class="avatar-img rounded-circle" :src="avatar02" alt="avatar">
        </li>
        <li class="avatar avatar-xs">
          <img class="avatar-img rounded-circle" :src="avatar03" alt="avatar">
        </li>
        <li class="avatar avatar-xs">
          <img class="avatar-img rounded-circle" :src="avatar06" alt="avatar">
        </li>
      </ul>

      <b-button type="button" variant="success" size="sm" class="mb-0" data-bs-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">Join now</span>
      </b-button>
    </div>
    <div class="position-absolute end-0 top-0 mt-n3 me-n3">
      <b-button type="button" variant="danger" size="sm" class="btn-round mb-0" data-bs-dismiss="alert" aria-label="Close"
        @click="show = !show">
        <span aria-hidden="true">
          <BIconXLg />
        </span>
      </b-button>
    </div>
  </b-alert>
</template>
<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import { BIconXLg } from 'bootstrap-icons-vue';

import aftereffect from '@/assets/images/client/aftereffect.svg';

import avatar01 from '@/assets/images/avatar/01.jpg';
import avatar02 from '@/assets/images/avatar/02.jpg';
import avatar03 from '@/assets/images/avatar/03.jpg';
import avatar06 from '@/assets/images/avatar/06.jpg';

const show = ref(true);

onMounted(() => {
  const backBtn = document.getElementById('sticky-element');
  if (backBtn) {
    window.addEventListener('scroll', () => {
      if (window.scrollY >= 800) {
        backBtn.classList.add('sticky-element-sticked');
      } else {
        backBtn.classList.remove('sticky-element-sticked');
      }
    });
  }
});
</script>