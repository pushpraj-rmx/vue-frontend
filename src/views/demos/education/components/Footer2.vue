<template>
  <footer class="pt-0 bg-blue rounded-4 position-relative mx-2 mx-md-4 mb-3">
    <figure class="mb-0">
      <svg class="fill-body rotate-180" width="100%" height="150" viewBox="0 0 500 150" preserveAspectRatio="none">
        <path d="M0,150 L0,40 Q250,150 500,40 L580,150 Z"></path>
      </svg>
    </figure>

    <b-container>
      <b-row class="mx-auto">
        <b-col lg="6" class="mx-auto text-center my-5">
          <img class="mx-auto h-40px" :src="logolight" alt="logo">
          <p class="mt-3 text-white">Eduport education theme, built specifically for the education centers which is
            dedicated to teaching and involving learners.</p>
          <ul class="nav justify-content-center text-primary-hover mt-3 mt-md-0">
            <li class="nav-item" v-for="(link, idx) in footerLink" :key="idx">
              <a class="nav-link text-white" :class="footerLink.length - 1 === idx && 'pe-0'" href="#">{{ link }}</a>
            </li>
          </ul>
          <ul class="list-inline mt-3 mb-0 flex-centered gap-1">
            <li class="list-inline-item" v-for="(link, idx) in socialLink" :key="idx">
              <a :class="`btn btn-white btn-sm shadow px-2 ${link.class}`" href="#">
                <font-awesome-icon :icon="link.icon" class="fa-fw" />
              </a>
            </li>
          </ul>
          <div class="mt-3 text-white">Copyrights ©{{ currentYear }} Eduport. Build by
            <a :href="developedByLink" class="text-reset btn-link text-primary-hover" target="_blank">{{ developedBy
              }}</a>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </footer>
</template>
<script setup lang="ts">
import { currentYear, developedByLink, developedBy } from '@/helpers/constants';
import { faFacebookF, faInstagram, faTwitter, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

import logolight from '@/assets/images/logo-light.svg';

const socialLink = [
  { icon: faFacebookF, class: 'text-facebook' },
  { icon: faInstagram, class: 'text-instagram' },
  { icon: faTwitter, class: 'text-twitter' },
  { icon: faLinkedinIn, class: 'text-linkedin' },
];
const footerLink = ['About', 'Terms', 'Privacy', 'Career', 'Contact us', 'Cookies'];
</script>