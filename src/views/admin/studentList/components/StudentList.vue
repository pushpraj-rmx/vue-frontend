<template>
  <div class="table-responsive border-0 mb-0">
    <table class="table table-dark-gray align-middle p-4 mb-0 table-hover">
      <thead>
        <tr>
          <th scope="col" class="border-0 rounded-start">Instructor name</th>
          <th scope="col" class="border-0">Join date</th>
          <th scope="col" class="border-0">Progress</th>
          <th scope="col" class="border-0">Courses</th>
          <th scope="col" class="border-0">Payments</th>
          <th scope="col" class="border-0 rounded-end">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, idx) in studentList" :key="idx">
          <td>
            <div class="d-flex align-items-center position-relative">
              <div class="avatar avatar-md">
                <img :src="item.image" class="rounded-circle" alt="">
              </div>
              <div class="mb-0 ms-3">
                <h6 class="mb-0"><a href="#" class="stretched-link">{{ item.name }}</a></h6>
                <span class="text-body small">
                  <font-awesome-icon :icon="faMapMarkerAlt" class="fa-fw mt-1" />
                  {{ item.location }}
                </span>
              </div>
            </div>
          </td>
          <td>{{ item.date }}</td>
          <td class="text-center text-sm-start">
            <div class="overflow-hidden">
              <h6 class="mb-0">{{ item.progress }}%</h6>
              <b-progress class="progress-sm bg-primary bg-opacity-10">
                <b-progress-bar class="bg-primary aos" :value="item.progress" />
              </b-progress>
            </div>
          </td>
          <td>{{ item.courses }}</td>
          <td>{{ currency }}{{ item.payments }}</td>
          <td>
            <a href="#" class="btn btn-light btn-round me-2 mb-1 mb-md-0" v-b-tooltip.hover.top="'View'">
              <BIconEye />
            </a>
            <a href="#" class="btn btn-light btn-round me-2 mb-1 mb-md-0" v-b-tooltip.hover.top="'Message'">
              <BIconEnvelope />
            </a>
            <b-button variant="light" class="btn-round mb-0" v-b-tooltip.hover.top="'Block'">
              <font-awesome-icon :icon="faBan" />
            </b-button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script setup lang="ts">
import { currency } from '@/helpers/constants';
import { studentList } from '@/views/admin/studentList/components/data';
import { faBan, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { BIconEye, BIconEnvelope } from 'bootstrap-icons-vue';
</script>