<template>
  <b-col lg="6" xxl="4">
    <b-card no-body class="shadow h-100">
      <b-card-header class="border-bottom d-flex justify-content-between align-items-center p-4">
        <h5 class="card-header-title">Top Instructors</h5>
        <a href="#" class="btn btn-link p-0 mb-0">View all</a>
      </b-card-header>
      <b-card-body class="p-4">
        <template v-for="(item, idx) in instructorsList" :key="idx">
          <hr v-if="idx">
          <div class="d-sm-flex justify-content-between align-items-center">
            <div class="d-sm-flex align-items-center mb-1 mb-sm-0">
              <div class="avatar avatar-md flex-shrink-0">
                <img class="avatar-img rounded-circle" :src="item.image" alt="avatar">
              </div>
              <div class="ms-0 ms-sm-2 mt-2 mt-sm-0">
                <h6 class="mb-1 flex-centred">
                  {{ item.name }}
                  <BIconPatchCheckFill class="text-info small" v-if="item.verified" />
                </h6>
                <ul class="list-inline mb-0 small">
                  <li class="list-inline-item fw-light me-2 mb-1 mb-sm-0">
                    <font-awesome-icon :icon="faBook" class="text-purple" />
                    {{ item.courses }}
                    Courses
                  </li>{{ ' ' }}
                  <li class="list-inline-item fw-light me-2 mb-1 mb-sm-0">
                    <font-awesome-icon :icon="faStar" class="text-warning" />
                    {{ item.rating }}/5.0
                  </li>
                </ul>
              </div>
            </div>
            <a href="#" class="btn btn-sm btn-light mb-0">View</a>
          </div>
        </template>
      </b-card-body>
    </b-card>
  </b-col>
</template>
<script setup lang="ts">
import { instructorsList } from '@/views/admin/dashboard/components/data';
import { faStar, faBook } from '@fortawesome/free-solid-svg-icons';
import { BIconPatchCheckFill } from 'bootstrap-icons-vue';
</script>