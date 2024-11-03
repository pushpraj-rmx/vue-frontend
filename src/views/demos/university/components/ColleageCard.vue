<template>
  <b-card no-body class="border mb-1 bg-transparent">
    <img class="card-img-top" :src="item.image" alt="Card img">
    <b-card-body>
      <div class="d-flex justify-content-between align-items-center mt-n6 mb-3">
        <div class="bg-white p-2 rounded-2 shadow">
          <img class="rounded-1 h-60px" :src="item.logo" alt="university logo">
        </div>
        <div class="h5 mb-0">
          <a href="#" class="badge" :class="item.status === 'Closed' ? 'text-bg-danger' : 'text-bg-success'">Admission
            {{ item.status }}</a>
        </div>
      </div>
      <div class="d-flex justify-content-between mb-3">
        <span><a href="#" class="badge text-bg-dark">{{ item.type }}</a></span>
        <ul class="list-inline hstack mb-0">
          <li class="list-inline-item me-0 small"><font-awesome-icon :icon="faStar" class="text-warning" /></li>
          <li class="list-inline-item me-0 small"><font-awesome-icon :icon="faStar" class="text-warning" /></li>
          <li class="list-inline-item me-0 small"><font-awesome-icon :icon="faStar" class="text-warning" /></li>
          <li class="list-inline-item me-0 small"><font-awesome-icon :icon="faStar" class="text-warning" /></li>
          <li class="list-inline-item me-0 small"><font-awesome-icon :icon="faStarHalfAlt" class="text-warning" /></li>
          <li class="list-inline-item ms-2 h6 fw-light mb-0">(4.5)</li>
        </ul>
      </div>
      <b-card-title tag="h5" class="mb-3"><a href="#">{{ item.name }}</a></b-card-title>
      <p class="mb-3">
        <font-awesome-icon :icon="faMapMarkerAlt" class="me-2" />
        {{ item.location }}
      </p>
      <ul class="nav nav-divider h6 fw-light mb-3">
        <li class="nav-item" v-for="(course, idx) in item.programs" :key="idx">{{ course }}</li>
      </ul>
      <b-row class="item-collapse">
        <b-col cols="6">
          <ul class="list-group list-group-borderless">
            <li class="list-group-item text-body py-1" v-for="(facility, idx) in item.facilities.slice(0, 3)"
              :key="idx">
              <font-awesome-icon :icon="faCheck" class="fa-fw text-success" />
              {{ facility }}
            </li>
          </ul>
        </b-col>
        <b-col cols="6">
          <ul class="list-group list-group-borderless">
            <li class="list-group-item text-body py-1" v-for="(facility, idx) in item.facilities.slice(3)" :key="idx">
              <font-awesome-icon :icon="faCheck" class="fa-fw text-success" />
              {{ facility }}
            </li>
          </ul>
        </b-col>
        <div class="mt-3"><a href="#" class="btn btn-primary-soft">View more</a></div>
      </b-row>
    </b-card-body>
  </b-card>
</template>
<script setup lang="ts">
import type { PropType } from 'vue';
import type { CollegeType } from '@/views/demos/university/components/types';

import { faCheck, faMapMarkerAlt, faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';

defineProps({
  item: {
    type: Object as PropType<CollegeType>,
    required: true
  }
});
</script>