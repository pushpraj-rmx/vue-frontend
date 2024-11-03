<template>
  <section>
    <b-container>
      <b-row class="g-4 g-md-5">
        <b-col lg="8">
          <h1>Design logo using Adobe Illustrator and Photoshop.</h1>
          <div class="d-sm-flex justify-content-between align-items-center mb-2">
            <div class="d-flex align-items-center mb-3">
              <div class="avatar">
                <img class="avatar-img rounded-circle" :src="avatar05" alt="avatar">
              </div>
              <div class="ms-2">
                <p class="mb-0 small">With</p>
                <h5 class="mb-0">Lori Stevens</h5>
              </div>
            </div>

            <div class="mt-2 mt-sm-0">
              <p class="text-danger mb-0 d-flex align-items-center">
                <BIconClockHistory class="me-2" />Class Start in: 22 Days 15:01:30
              </p>
              <a href="#" class="btn btn-link mb-0 p-0 text-primary-hover text-decoration-underline text-reset">Notify
                me</a>
            </div>
          </div>
          <p class="mb-0">We understand that theory is important to build a solid foundation, we understand that theory
            alone isn't going to get the job done so that's why this course is packed with practical hands-on examples
            that you can follow step by step.</p>
        </b-col>

        <b-col lg="4">
          <b-card no-body class="card-body bg-light p-5 text-center">
            <h5 class="fw-normal">One-Time Payment</h5>
            <h2>{{ currency }}557</h2>
            <a href="#" class="btn btn-blue mb-2">Enroll now</a>
            <ul class="avatar-group mb-1 justify-content-center">
              <li class="avatar avatar-sm">
                <img class="avatar-img rounded-circle" :src="avatar01" alt="avatar">
              </li>
              <li class="avatar avatar-sm">
                <img class="avatar-img rounded-circle" :src="avatar02" alt="avatar">
              </li>
              <li class="avatar avatar-sm">
                <img class="avatar-img rounded-circle" :src="avatar03" alt="avatar">
              </li>
              <li class="avatar avatar-sm">
                <img class="avatar-img rounded-circle" :src="avatar04" alt="avatar">
              </li>
            </ul>
            <p class="mb-0">Join hundreds of students.</p>
          </b-card>
        </b-col>

        <b-col md="12" class="text-center mx-auto">
          <b-card no-body class="card-body shadow p-2 h-200px h-sm-400px position-relative overflow-hidden"
            :style="`background-image:url(${about28}); background-position: center left; background-size: cover;`">
            <div class="bg-overlay bg-dark opacity-6"></div>
            <div class="card-img-overlay">
              <div class="position-absolute top-50 start-50 translate-middle">
                <CustomGLightbox link="https://www.youtube.com/embed/tXHviS-4ygo"
                  class="btn btn-lg text-danger btn-round btn-white-shadow mb-0">
                  <font-awesome-icon :icon="faPlay" />
                </CustomGLightbox>
              </div>
            </div>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>
<script setup lang="ts">
import CustomGLightbox from '@/components/CustomGLightbox.vue';

import { currency } from '@/helpers/constants';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { BIconClockHistory } from 'bootstrap-icons-vue';

import about28 from '@/assets/images/about/28.jpg';

import avatar05 from '@/assets/images/avatar/05.jpg';
import avatar01 from '@/assets/images/avatar/01.jpg';
import avatar02 from '@/assets/images/avatar/02.jpg';
import avatar03 from '@/assets/images/avatar/03.jpg';
import avatar04 from '@/assets/images/avatar/04.jpg';
</script>