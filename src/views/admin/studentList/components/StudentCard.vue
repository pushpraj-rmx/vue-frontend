<template>
  <b-card no-body class="bg-transparent border h-100">
    <b-card-header class="bg-transparent border-bottom d-flex justify-content-between">
      <div class="d-sm-flex align-items-center">
        <div class="avatar avatar-md flex-shrink-0">
          <img class="avatar-img rounded-circle" :src="item.image" alt="avatar">
        </div>
        <div class="ms-0 ms-sm-2 mt-2 mt-sm-0">
          <h5 class="mb-0"><a href="#">{{ item.name }}</a></h5>
          <span class="text-body small">
            <font-awesome-icon :icon="faMapMarkerAlt" class="fa-fw mt-1" />
            {{ item.location }}
          </span>
        </div>
      </div>

      <div class="dropdown text-end">
        <a href="#" class="btn btn-sm btn-light btn-round small mb-0" role="button" id="dropdownShare2"
          data-bs-toggle="dropdown" aria-expanded="false">
          <BIconThreeDots class="fa-fw" />
        </a>
        <ul class="dropdown-menu dropdown-w-sm dropdown-menu-end min-w-auto shadow rounded"
          aria-labelledby="dropdownShare2">
          <li>
            <a class="dropdown-item icons-center" href="#">
              <BIconPencilSquare class="fa-fw me-2" />Edit
            </a>
          </li>
          <li>
            <a class="dropdown-item icons-center" href="#">
              <BIconTrash class="fa-fw me-2" />Remove
            </a>
          </li>
        </ul>
      </div>
    </b-card-header>

    <b-card-body>
      <div class="d-flex justify-content-between align-items-center mb-3">
        <div class="d-flex align-items-center">
          <div class="icon-md bg-success bg-opacity-10 text-success rounded-circle flex-shrink-0 flex-centered">
            <BIconCurrencyDollar class="fa-fw" />
          </div>
          <h6 class="mb-0 ms-2 fw-light">Payments</h6>
        </div>
        <span class="mb-0 fw-bold">{{ currency }}{{ item.payments }}</span>
      </div>

      <div class="d-flex justify-content-between align-items-center mb-3">
        <div class="d-flex align-items-center">
          <div class="icon-md bg-purple bg-opacity-10 text-purple rounded-circle flex-shrink-0">
            <font-awesome-icon :icon="faBook" class="fa-fw" />
          </div>
          <h6 class="mb-0 ms-2 fw-light">Total Course</h6>
        </div>
        <span class="mb-0 fw-bold">{{ item.courses }}</span>
      </div>

      <div class="overflow-hidden">
        <h6 class="mb-0">{{ item.progress }}%</h6>
        <b-progress class="progress-sm bg-primary bg-opacity-10">
          <b-progress-bar class="bg-primary aos" :value="item.progress" />
        </b-progress>
      </div>
    </b-card-body>

    <b-card-footer class="bg-transparent border-top">
      <div class="d-sm-flex justify-content-between align-items-center">
        <h6 class="mb-2 mb-sm-0 icons-center">
          <BIconCalendar class="fa-fw text-orange me-2" />
          <span class="text-body me-1">Join at:</span>
          {{ item.date }}
        </h6>
        <div class="text-end text-primary-hover">
          <a href="#" class="btn btn-link text-body p-0 mb-0 me-2 icons-center" v-b-tooltip.hover.top="'Message'">
            <BIconEnvelopeFill />
          </a>
          {{  ' ' }}
          <a href="#" class="btn btn-link text-body p-0 mb-0" v-b-tooltip.hover.top="'Block'">
            <font-awesome-icon :icon="faBan" />
          </a>
        </div>
      </div>
    </b-card-footer>
  </b-card>
</template>
<script setup lang="ts">
import type { PropType } from 'vue';
import type { StudentType } from '@/types';
import { faBan, faMapMarkerAlt, faBook } from '@fortawesome/free-solid-svg-icons';
import { BIconThreeDots, BIconTrash, BIconCurrencyDollar, BIconPencilSquare, BIconCalendar, BIconEnvelopeFill } from 'bootstrap-icons-vue';
import { currency } from '@/helpers/constants';

defineProps({
  item: {
    type: Object as PropType<StudentType>,
    required: true
  }
});
</script>