<template>
  <section class="pb-0 pb-lg-5">
    <b-container>
      <b-row class="g-4 g-lg-5 align-items-center">
        <b-col lg="6" class="position-relative order-2">
          <figure class="position-absolute top-50 start-50 translate-middle ms-n8 d-none d-sm-block">
            <svg width="625.8px" height="550px" viewBox="0 0 625.8 630.8"
              style="enable-background:new 0 0 625.8 630.8;">
              <path class="fill-primary opacity-1"
                d="M445.8,133.5c59.7,50.3,122.9,96,149.7,161c26.5,64.6,15.9,148.6-29.9,197.7C520.3,541,439,555,364.9,578.1 c-74.5,23.1-142.1,55.2-200.4,42.3S57.2,549.7,32.6,487.3c-24.2-62-24.2-128.9-17.8-199.6C21.7,217,34.5,142.6,78.7,89.6 S198.6,5,264.4,16.7S386.1,83.2,445.8,133.5z" />
            </svg>
          </figure>
          <img :src="element06" class="position-relative" alt="">
        </b-col>

        <b-col lg="6" class="position-relative order-1 order-lg-2">
          <h2>Let Us Help You</h2>
          <p class="mb-2">How promotion excellent curiosity yet attempted happiness Gay prosperous impression had
            conviction For every delay death ask to style Me mean able my by in they Extremity.</p>
          <ul class="list-group list-group-borderless mb-2">
            <li class="list-group-item d-flex align-items-center px-0">
              <p class="mb-0 h6 fw-light flex-centered">
                <BIconArrowRight class="text-primary me-2" />Setup and installation
                takes less time
              </p>
            </li>
            <li class="list-group-item d-flex align-items-center px-0">
              <p class="mb-0 h6 fw-light flex-centered">
                <BIconArrowRight class="text-primary me-2" />Professional and easy to
                use software
              </p>
            </li>
            <li class="list-group-item d-flex align-items-center px-0">
              <p class="mb-0 h6 fw-light flex-centered">
                <BIconArrowRight class="text-primary me-2" />Perfect for any device
                with pixel-perfect design
              </p>
            </li>
            <li class="list-group-item d-flex align-items-center px-0">
              <p class="mb-0 h6 fw-light flex-centered">
                <BIconArrowRight class="text-primary me-2" />Setup and installation
                too fast
              </p>
            </li>
          </ul>
          <a href="#" class="btn btn-primary-soft mb-0">More about us</a>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>
<script setup lang="ts">
import { BIconArrowRight } from 'bootstrap-icons-vue';
import element06 from '@/assets/images/element/06.svg';
</script>