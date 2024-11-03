<template>
  <b-card no-body class="bg-transparent border h-100">
    <b-card-header class="bg-transparent border-bottom d-flex align-items-sm-center justify-content-between">
      <div class="d-sm-flex align-items-center">
        <div class="avatar avatar-md flex-shrink-0">
          <img class="avatar-img rounded-circle" :src="item.image" alt="avatar">
        </div>
        <div class="ms-0 ms-sm-2 mt-2 mt-sm-0">
          <h5 class="mb-0"><a href="#">{{ item.name }}</a></h5>
          <p class="mb-0 small">{{ item.title }}</p>
        </div>
      </div>
      <div class="dropdown">
        <a href="#" class="btn btn-sm btn-light btn-round small mb-0" role="button" id="dropdownShare1"
          data-bs-toggle="dropdown" aria-expanded="false">
          <BIconThreeDots class="fa-fw" />
        </a>
        <ul class="dropdown-menu dropdown-w-sm dropdown-menu-end min-w-auto shadow rounded"
          aria-labelledby="dropdownShare1">
          <li>
            <a class="dropdown-item icons-center" href="#">
              <BIconPencilSquare class="fa-fw me-2" />
              Edit
            </a>
          </li>
          <li>
            <a class="dropdown-item icons-center" href="#">
              <BIconTrash class="a-fw me-2" />
              Remove
            </a>
          </li>
        </ul>
      </div>
    </b-card-header>
    <b-card-body>
      <div class="d-flex justify-content-between align-items-center mb-3">
        <div class="d-flex align-items-center">
          <div class="icon-md bg-orange bg-opacity-10 text-orange rounded-circle flex-shrink-0">
            <font-awesome-icon :icon="faUserGraduate" class="fa-fw" />
          </div>
          <h6 class="mb-0 ms-2 fw-light">Total Students</h6>
        </div>
        <span class="mb-0 fw-bold">{{ item.score }}</span>
      </div>
      <div class="d-flex justify-content-between align-items-center">
        <div class="d-flex align-items-center">
          <div class="icon-md bg-purple bg-opacity-10 text-purple rounded-circle flex-shrink-0">
            <font-awesome-icon :icon="faBook" class="fa-fw" />
          </div>
          <h6 class="mb-0 ms-2 fw-light">Total Courses</h6>
        </div>
        <span class="mb-0 fw-bold">{{ item.projects }}</span>
      </div>
    </b-card-body>
    <b-card-footer class="bg-transparent border-top">
      <div class="d-flex justify-content-between align-items-center">
        <ul class="list-inline mb-0 hstack gap-1" v-if="item.rating">
          <li className="list-inline-item me-0 small" v-for="(_star, idx) in Array(Math.floor(item.rating)).fill(0)"
            :key="idx">
            <font-awesome-icon :icon="faStar" class="text-warning" />
          </li>
          <li className="list-inline-item me-0 small" v-if="!Number.isInteger(item.rating)">
            <font-awesome-icon :icon="faStarHalfAlt" class="text-warning" />
          </li>
          <li className="list-inline-item me-0 small"
            v-for="(_star, idx) in item.rating < 5 && Array(5 - Math.ceil(item.rating)).fill(0)" :key="idx">
            <font-awesome-icon :icon="faStarR" class="text-warning" />
          </li>
        </ul>
        <a href="#" class="btn btn-link text-body p-0 mb-0">
          <BIconEnvelopeFill />
        </a>
      </div>
    </b-card-footer>
  </b-card>
</template>
<script setup lang="ts">
import type { PropType } from 'vue';
import type { InstructorType } from '@/types';
import { faStar, faStarHalfAlt, faBook, faUserGraduate } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarR } from '@fortawesome/free-regular-svg-icons';
import { BIconPencilSquare, BIconTrash, BIconThreeDots, BIconEnvelopeFill } from 'bootstrap-icons-vue';

defineProps({
  item: {
    type: Object as PropType<InstructorType>,
    required: true
  }
});
</script>