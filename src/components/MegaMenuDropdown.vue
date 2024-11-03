<template>
  <DropDown is="li" custom-class="nav-item dropdown-fullwidth">
    <a class="nav-link dropdown-toggle arrow-none d-flex justify-content-between align-items-center w-100" href="#"
      data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      Megamenu
      <font-awesome-icon :icon="faAngleDown" class="fa-sm ms-1" />
    </a>
    <div class="dropdown-menu dropdown-menu-end" data-bs-popper="none">
      <b-row class="p-4">
        <b-col xl="6" xxl="3" class="mb-3">
          <h6 class="mb-0">Get started</h6>
          <hr>
          <ul class="list-unstyled">
            <li v-for="(item, idx) in course" :key="idx">
              <a class="dropdown-item" href="#">{{ item }}</a>
            </li>
          </ul>
        </b-col>
        <b-col xl="6" xxl="3" class="mb-3">
          <h6 class="mb-0">Degree</h6>
          <hr>
          <div class="mb-2 position-relative bg-primary-soft-hover rounded-2 transition-base p-3"
            v-for="(item, idx) in degrees" :key="idx">
            <a class="stretched-link h6 mb-0" href="#">{{ item }}</a>
            <p class="mb-0 small text-truncate-2">Speedily say has suitable disposal add boy. On forth doubt miles of
              child.</p>
          </div>
        </b-col>
        <b-col xl="6" xxl="3" class="mb-3">
          <h6 class="mb-0">Certificate</h6>
          <hr>
          <div class="d-flex mb-4 position-relative" v-for="(item, idx) in certificates" :key="idx">
            <v-icon name="fc-google" class="fa-fw" :class="item.iconClass" scale="2" v-if="!idx" />
            <h2 class="mb-0" v-else>
              <font-awesome-icon :icon="item.icon" class="fa-fw" :class="item.iconClass" />
            </h2>
            <div class="ms-2">
              <a class="stretched-link h6 mb-0" href="#">{{ item.title }}</a>
              <p class="mb-0 small">{{ item.caption }}</p>
            </div>
          </div>
        </b-col>
        <b-col xl="6" xxl="3" class="mb-3">
          <h6 class="mb-0">Download Eduport</h6>
          <hr>
          <img :src="element14" alt="">

          <b-row class="g-2 justify-content-center mt-3">
            <b-col cols="6" sm="4" xxl="6">
              <a href="#"> <img :src="googleplay" class="btn-transition" alt="google-store"> </a>
            </b-col>
            <b-col cols="6" sm="4" xxl="6">
              <a href="#"> <img :src="appstore" class="btn-transition" alt="app-store"> </a>
            </b-col>
          </b-row>
        </b-col>
        <b-col cols="12">
          <div class="alert alert-success alert-dismissible fade show mt-2 mb-0 rounded-3" role="alert">
            <div class="avatar avatar-xs me-2">
              <img class="avatar-img rounded-circle" :src="avatar09" alt="avatar">
            </div>
            The personality development class starts at 2:00 pm, click to
            <a href="#" class="alert-link">Join Now</a>
          </div>
        </b-col>
      </b-row>
    </div>
  </DropDown>
</template>
<script setup lang="ts">
import DropDown from '@/components/DropDown.vue';
import { faBasketballBall, faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { faGoogle, faLinkedinIn, faFacebook } from '@fortawesome/free-brands-svg-icons';

import googleplay from '@/assets/images/client/google-play.svg';
import appstore from '@/assets/images/client/app-store.svg';
import element14 from '@/assets/images/element/14.svg';
import avatar09 from '@/assets/images/avatar/09.jpg';

const course = ['Market research', 'Advertising', 'Consumer behavior', 'Digital marketing', 'Marketing ethics', 'Social media marketing', 'Public relations', 'Advertising', 'Decision science', 'SEO', 'Business marketing'];

const degrees = ['Contact management', 'Sales pipeline', 'Security & Permission'];

const certificates = [
  { title: 'Google SEO certificate', caption: 'No prerequisites', icon: faGoogle, iconClass: 'text-google-icon' },
  { title: 'Business Development Executive(BDE)', caption: 'No prerequisites', icon: faLinkedinIn, iconClass: 'text-linkedin' },
  { title: 'Facebook social media marketing', caption: 'Expert advice', icon: faFacebook, iconClass: 'text-facebook' },
  { title: 'Creative graphics design', caption: 'No prerequisites', icon: faBasketballBall, iconClass: 'text-dribbble' },
];
</script>