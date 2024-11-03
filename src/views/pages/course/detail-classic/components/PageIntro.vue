<template>
  <section class="bg-light py-0 py-sm-5">
    <b-container>
      <b-row class="py-5">
        <b-col lg="8">
          <h6 class="mb-3 font-base bg-primary text-white py-2 px-4 rounded-2 d-inline-block">Digital Marketing</h6>
          <h1>The Complete Digital Marketing Course - 12 Courses in 1</h1>
          <p>Satisfied conveying a dependent contented he gentleman agreeable do be. Warrant private blushes removed an
            in equally totally if. Delivered dejection necessary objection do Mr prevailed. Mr feeling does chiefly
            cordial in do.</p>
          <ul class="list-inline mb-0">
            <li class="list-inline-item h6 me-3 mb-1 mb-sm-0">
              <font-awesome-icon :icon="faStar" class="text-warning me-1" />
              4.5/5.0
            </li>{{ ' ' }}
            <li class="list-inline-item h6 me-3 mb-1 mb-sm-0">
              <font-awesome-icon :icon="faUserGraduate" class="text-orange me-1" />
              12k Enrolled
            </li>{{ ' ' }}
            <li class="list-inline-item h6 me-3 mb-1 mb-sm-0">
              <font-awesome-icon :icon="faSignal" class="text-success me-1" />
              All levels
            </li>{{ ' ' }}
            <li class="list-inline-item h6 me-3 mb-1 mb-sm-0">
              <BIconPatchExclamationFill class="text-danger me-1" />
              Last updated 09/2021
            </li>{{ ' ' }}
            <li class="list-inline-item h6 mb-0">
              <font-awesome-icon :icon="faGlobe" class="text-info me-1" />
              English
            </li>
          </ul>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>
<script setup lang="ts">
import { faStar, faUserGraduate, faSignal, faGlobe } from '@fortawesome/free-solid-svg-icons';
import { BIconPatchExclamationFill } from 'bootstrap-icons-vue';
</script>