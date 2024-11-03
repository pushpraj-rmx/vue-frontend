<template>
  <section class="bg-primary bg-opacity-10">
    <b-container>
      <b-row class="g-4 g-sm-5 align-items-center py-4">
        <b-col lg="6" xl="5">
          <h1>Access to Free Online Courses</h1>
          <b-form class="row align-items-center justify-content-center my-4">
            <b-col cols="12">
              <p class="mb-2 h6 fw-light">Enter your email address to get access</p>
              <div class="bg-body shadow rounded-3 p-2">
                <b-input-group>
                  <b-form-input class="border-0 me-1" type="email" placeholder="Enter your email" />
                  <b-button type="button" :variant="null" class="btn-blue mb-0 rounded-3">Request access!</b-button>
                </b-input-group>
              </div>
            </b-col>
          </b-form>

          <div class="d-sm-flex justify-content-sm-between align-items-center">
            <div>
              <ul class="avatar-group mb-3 mb-sm-0">
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
                <li class="avatar avatar-sm">
                  <img class="avatar-img rounded-circle" :src="avatar05" alt="avatar">
                </li>
                <li class="avatar avatar-sm">
                  <div class="avatar-img rounded-circle bg-primary">
                    <span class="text-white position-absolute top-50 start-50 translate-middle small">1K+</span>
                  </div>
                </li>
              </ul>
            </div>
            <div class="d-flex align-items-center">
              <h5 class="mb-0 me-2">4.5/5.0</h5>
              <ul class="list-inline mb-1 hstack gap-1">
                <li class="list-inline-item me-0 mb-0"><font-awesome-icon :icon="faStar" class="text-warning" /></li>
                <li class="list-inline-item me-0 mb-0"><font-awesome-icon :icon="faStar" class="text-warning" /></li>
                <li class="list-inline-item me-0 mb-0"><font-awesome-icon :icon="faStar" class="text-warning" /></li>
                <li class="list-inline-item me-0 mb-0"><font-awesome-icon :icon="faStar" class="text-warning" /></li>
                <li class="list-inline-item me-0 mb-0"><font-awesome-icon :icon="faStarHalfAlt" class="text-warning" />
                </li>
              </ul>
            </div>
          </div>
        </b-col>

        <b-col lg="6" xl="7" class="text-center">
          <img :src="element16" alt="">
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>
<script setup lang="ts">
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';

import element16 from '@/assets/images/element/16.svg';
import avatar01 from '@/assets/images/avatar/01.jpg';
import avatar02 from '@/assets/images/avatar/02.jpg';
import avatar03 from '@/assets/images/avatar/03.jpg';
import avatar04 from '@/assets/images/avatar/04.jpg';
import avatar05 from '@/assets/images/avatar/05.jpg';

</script>