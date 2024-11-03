<template>
  <b-card no-body class="bg-transparent">
    <div class="position-relative">
      <img :src="item.image" class="card-img" alt="course img">
      <div class="card-img-overlay d-flex flex-column p-3">
        <div class="w-100 mt-auto text-end">
          <a href="#" class="badge text-bg-info rounded-1 me-1">
            <font-awesome-icon :icon="faUserGraduate" class="me-2" />
            {{ item.students }}
          </a>
          <a href="#" class="badge text-bg-orange rounded-1">
            <font-awesome-icon :icon="faClipboardList" class="me-2" />
            {{ item.clipboard }}
          </a>
        </div>
      </div>
    </div>
    <b-card-body class="text-center">
      <b-card-title tag="h5"><a href="#">{{ item.name }}</a></b-card-title>
      <p class="mb-2">{{ item.description }}</p>
      <ul class="list-inline hstack justify-content-center">
        <li class="list-inline-item ms-2 h6 fw-light mb-0">{{ item.rating }}/5.0</li>
        <li class="list-inline-item me-0 small"><font-awesome-icon :icon="faStar" class="text-warning" /></li>
        <li class="list-inline-item me-0 small"><font-awesome-icon :icon="faStar" class="text-warning" /></li>
        <li class="list-inline-item me-0 small"><font-awesome-icon :icon="faStar" class="text-warning" /></li>
        <li class="list-inline-item me-0 small"><font-awesome-icon :icon="faStar" class="text-warning" /></li>
        <li class="list-inline-item me-0 small"><font-awesome-icon :icon="faStarHalfAlt" class="text-warning" /></li>
      </ul>
    </b-card-body>
  </b-card>
</template>
<script setup lang="ts">
import type { PropType } from 'vue';
import type { InstructorType } from '@/types';
import { faUserGraduate, faClipboardList, faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';

defineProps({
  item: {
    type: Object as PropType<InstructorType>,
    required: true
  }
});
</script>