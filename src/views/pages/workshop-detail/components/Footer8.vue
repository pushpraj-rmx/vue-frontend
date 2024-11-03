<template>
  <footer class="pt-5">
    <b-container>
      <b-row class="g-4 justify-content-between">

        <b-col md="5" lg="4">
          <router-link class="me-0" :to="{ name: 'demos.default' }">
            <img class="light-mode-item h-40px" :src="logo" alt="logo">
            <img class="dark-mode-item h-40px" :src="logolight" alt="logo">
          </router-link>

          <p class="my-3">
            Eduport education theme, built specifically for the education centers which is dedicated to teaching and
            involve learners.
          </p>
          <b-form class="row row-cols-lg-auto g-2">
            <b-col cols="12">
              <b-form-input type="email" placeholder="Enter your email address" />
            </b-col>
            <b-col cols="12">
              <b-button type="submit" variant="dark" class="m-0">Subscribe</b-button>
            </b-col>
          </b-form>
        </b-col>

        <b-col md="7" lg="6">
          <b-row class="g-4 g-lg-5">
            <b-col cols="6" sm="4" v-for="(item, idx) in footerLink" :key="idx">
              <h5 class="mb-2 mb-md-3">{{ item.text }}</h5>
              <ul class="nav flex-column">
                <li class="nav-item" v-for="(link, idx) in item.link" :key="idx">
                  <a class="nav-link" :class="!idx && 'pt-0'" href="#">{{ link }}</a>
                </li>
              </ul>
            </b-col>

            <b-col cols="6" sm="4">
              <h5 class="mb-2 mb-md-3">Follow Us</h5>
              <ul class="nav flex-column">
                <li class="nav-item" v-for="(link, idx) in socialLink" :key="idx">
                  <a class="nav-link" :class="!idx && 'pt-0'" href="#">
                    <font-awesome-icon :icon="link.icon" class="fa-fw me-1" />
                    <component :is="link.icon" class="fa-fw me-1" />
                    {{ link.text }}
                  </a>
                </li>
              </ul>
            </b-col>
          </b-row>
        </b-col>

      </b-row>

      <hr>

      <b-row>
        <b-col cols="12">
          <div class="d-md-flex justify-content-between align-items-center pt-2 pb-4 text-center">
            <div class="text-primary-hover"> Copyrights ©{{ currentYear }} Eduport. Build by <a :href="developedByLink"
                target="_blank" class="text-reset">{{ developedBy }}</a>.</div>

            <div class="nav justify-content-center mt-3 mt-md-0">
              <ul class="list-inline mb-0">
                <li class="list-inline-item"><a class="nav-link" href="#">Terms of use</a></li>
                <li class="list-inline-item"><a class="nav-link" href="#">Privacy policy</a></li>
                <li class="list-inline-item pe-0"><a class="nav-link" href="#">Cookies</a></li>
              </ul>
            </div>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </footer>
</template>
<script setup lang="ts">
import { currentYear, developedByLink, developedBy } from '@/helpers/constants';

import { faWhatsapp, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { BIconInstagram } from 'bootstrap-icons-vue';

import logo from '@/assets/images/logo.svg';
import logolight from '@/assets/images/logo-light.svg';

const footerLink = [
  { text: 'Company', link: ['About us', 'Contact us', 'News and Blogs', 'Library', 'Career'] },
  { text: 'Teaching', link: ['Become instructor', 'Download', 'Pricing', 'Services'] },
];

const socialLink = [
  { text: 'WhatsApp', icon: faWhatsapp },
  { text: 'YouTube', icon: faYoutube },
  { text: 'Newsletters', icon: faEnvelope },
  { text: 'Instagram', icon: BIconInstagram }
];
</script>