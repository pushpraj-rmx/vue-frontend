<template>
  <footer>
    <b-container>
      <b-row class="mx-auto">
        <b-col lg="6" class="mx-auto text-center my-5">
          <router-link class="me-0 mb-3 text-center" :to="{ name: 'demos.default' }">
            <img class="light-mode-item mx-auto h-40px" :src="logo" alt="logo">
            <img class="dark-mode-item mx-auto h-40px" :src="logolight" alt="logo">
          </router-link>
          <p class="mt-3">Eduport education theme, built specifically for the education centers which is dedicated to
            teaching and involving learners.</p>
          <ul
            class="nav text-center text-sm-end justify-content-center justify-content-center text-primary-hover mt-3 mt-md-0">
            <li class="nav-item" v-for="(link, idx) in footerLink" :key="idx">
              <a class="nav-link text-body" :class="footerLink.length - 1 === idx && 'pe-0'" href="#">{{ link }}</a>
            </li>
          </ul>
          <ul class="list-inline mb-0 social-media-btn mt-3 flex-centered gap-1">
            <li class="list-inline-item" v-for="(link, idx) in socialLink" :key="idx">
              <a :class="`btn btn-white btn-sm shadow px-2 ${link.class}`" href="#">
                <font-awesome-icon :icon="link.icon" class="fa-fw" />
              </a>
            </li>
          </ul>
          <div class="text-body text-primary-hover mt-3"> Copyrights ©{{ currentYear }} Eduport. Build by
            <a :href="developedByLink" target="_blank" class="text-body">{{ developedBy }}</a>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </footer>
</template>
<script setup lang="ts">
import { currentYear, developedByLink, developedBy } from '@/helpers/constants';
import { faTwitter, faLinkedinIn, faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons';
import logo from '@/assets/images/logo.svg';
import logolight from '@/assets/images/logo-light.svg';

const socialLink = [
  { icon: faFacebookF, class: 'text-facebook' },
  { icon: faInstagram, class: 'text-instagram' },
  { icon: faTwitter, class: 'text-twitter' },
  { icon: faLinkedinIn, class: 'text-linkedin' },
]

const footerLink = ['About', 'Terms', 'Privacy', 'Career', 'Contact us', 'Cookies'];
</script>