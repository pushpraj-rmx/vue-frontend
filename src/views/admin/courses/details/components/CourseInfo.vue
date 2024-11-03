<template>
  <b-col xxl="6">
    <b-card no-body class="bg-transparent border rounded-3 h-100">
      <b-card-header class="bg-light border-bottom">
        <h5 class="card-header-title">The Complete Digital Marketing Course - 12 Courses in 1</h5>
      </b-card-header>
      <b-card-body>
        <b-row class="g-4">
          <b-col md="6">
            <img :src="courses01" class="rounded" alt="">
          </b-col>
          <b-col md="6">
            <p class="mb-3">Satisfied conveying a dependent contented he gentleman agreeable do be. Warrant
              private blushes removed an in equally totally if. Delivered dejection necessary objection do Mr
              prevailed. Mr feeling does chiefly cordial in do.</p>
            <h5 class="mb-3">{{ currency }}295.55</h5>
            <div class="d-sm-flex align-items-center">
              <div class="avatar avatar-md">
                <img class="avatar-img rounded-circle" :src="avatar05" alt="avatar">
              </div>
              <div class="ms-sm-3 mt-2 mt-sm-0">
                <h6 class="mb-0"><a href="#">By Jacqueline Miller</a></h6>
                <p class="mb-0 small">Founder Eduport company</p>
              </div>
            </div>
          </b-col>
        </b-row>
        <b-row class="mt-3">
          <b-col md="6">
            <ul class="list-group list-group-borderless">
              <li class="list-group-item">
                <span>release date:</span>
                <span class="h6 mb-0">29 Aug 2020</span>
              </li>
              <li class="list-group-item">
                <span>Total Hour:</span>
                <span class="h6 mb-0">4h 50m</span>
              </li>
              <li class="list-group-item">
                <span>Total Enrolled:</span>
                <span class="h6 mb-0">12,000+</span>
              </li>
              <li class="list-group-item">
                <span>Certificate:</span>
                <span class="h6 mb-0">Yes</span>
              </li>
            </ul>
          </b-col>
          <b-col md="6">
            <ul class="list-group list-group-borderless">
              <li class="list-group-item">
                <span>Skills:</span>
                <span class="h6 mb-0">All level</span>
              </li>
              <li class="list-group-item">
                <span>Total Lecture:</span>
                <span class="h6 mb-0">30</span>
              </li>
              <li class="list-group-item">
                <span>Language:</span>
                <span class="h6 mb-0">English</span>
              </li>
              <li class="list-group-item">
                <span>Review:</span>
                <span class="h6 mb-0">4.5
                  <font-awesome-icon :icon="faStar" class="text-warning ms-1" />
                </span>
              </li>
            </ul>
          </b-col>
        </b-row>
      </b-card-body>
    </b-card>
  </b-col>
</template>
<script setup lang="ts">
import { currency } from '@/helpers/constants';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import avatar05 from '@/assets/images/avatar/05.jpg';
import courses01 from '@/assets/images/courses/4by3/01.jpg';
</script>