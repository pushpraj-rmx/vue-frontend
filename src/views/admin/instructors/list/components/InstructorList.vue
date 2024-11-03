<template>
  <div class="table-responsive border-0 mb-0">
    <table class="table table-dark-gray align-middle p-4 mb-0 table-hover">
      <thead>
        <tr>
          <th scope="col" class="border-0 rounded-start">Instructor name</th>
          <th scope="col" class="border-0">Detail</th>
          <th scope="col" class="border-0">Courses</th>
          <th scope="col" class="border-0">Total studentss</th>
          <th scope="col" class="border-0 rounded-end">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, idx) in instructorList" :key="idx">
          <td>
            <div class="d-flex align-items-center position-relative">
              <div class="avatar avatar-md">
                <img :src="item.image" class="rounded-circle" alt="">
              </div>
              <div class="mb-0 ms-2">
                <h6 class="mb-0"><a href="#" class="stretched-link">{{ item.name }}</a></h6>
              </div>
            </div>
          </td>
          <td class="text-center text-sm-start">
            <h6 class="mb-0">{{ item.title }}</h6>
          </td>
          <td>{{ item.projects }}</td>
          <td>{{ item.score }}</td>
          <td>
            <a href="#" class="btn btn-info-soft btn-round me-2 mb-1 mb-md-0" v-b-tooltip.hover.top="'Message'">
              <BIconEnvelope />
            </a>
            <a href="#" class="btn btn-success-soft btn-round me-2 mb-1 mb-md-0" v-b-tooltip.hover.top="'Edit'">
              <BIconPencilSquare />
            </a>
            <button class="btn btn-danger-soft btn-round mb-0" v-b-tooltip.hover.top="'Delete'">
              <BIconTrash />
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script setup lang="ts">
import { instructorList } from '@/views/admin/instructors/list/components/data';
import { BIconPencilSquare, BIconTrash, BIconEnvelope } from 'bootstrap-icons-vue';
</script>