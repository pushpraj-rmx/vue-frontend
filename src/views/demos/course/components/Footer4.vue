<template>
  <footer class="bg-light pt-5">
    <b-container>
      <b-row class="g-4">

        <b-col lg="3">
          <router-link class="me-0" :to="{ name: 'demos.default' }">
            <img class="light-mode-item h-40px" :src="logo" alt="logo">
            <img class="dark-mode-item h-40px" :src="logolight" alt="logo">
          </router-link>
          <p class="my-3">Eduport education theme, built specifically for the education centers which is dedicated to
            teaching and involve learners.</p>
          <ul class="list-inline mb-0 mt-3 d-flex gap-1">
            <li class="list-inline-item" v-for="(link, idx) in socialLink" :key="idx">
              <a :class="`btn btn-white btn-sm shadow px-2 ${link.class}`" href="#">
                <font-awesome-icon :icon="link.icon" class="fa-fw" />
              </a>
            </li>
          </ul>
        </b-col>

        <b-col lg="6">
          <b-row class="g-4">
            <b-col cols="6" md="4" v-for="(item, idx) in footerLinks" :key="idx">
              <h5 class="mb-2 mb-md-4">{{ item.text }}</h5>
              <ul class="nav flex-column">
                <li class="nav-item" v-for="(sublink, idx) in item.link" :key="idx">
                  <a class="nav-link" href="#">{{ sublink }}</a>
                </li>
              </ul>
            </b-col>
          </b-row>
        </b-col>

        <b-col lg="3">
          <h5 class="mb-2 mb-md-4">Contact</h5>
          <p class="mb-2">
            Toll free:<span class="h6 fw-light ms-2">+1234 568 963</span>
            <span class="d-block small">(9:AM to 8:PM IST)</span>
          </p>

          <p class="mb-0">Email:<span class="h6 fw-light ms-2">example@gmail.com</span></p>

          <b-row class="g-2 mt-2">
            <b-col cols="6" sm="4" md="3" lg="6">
              <a href="#"> <img :src="googleplay" alt=""> </a>
            </b-col>
            <b-col cols="6" sm="4" md="3" lg="6">
              <a href="#"> <img :src="appstore" alt="app-store"> </a>
            </b-col>
          </b-row>
        </b-col>
      </b-row>

      <hr class="mt-4 mb-0">

      <div class="py-3">
        <b-container class="px-0">
          <div class="d-lg-flex justify-content-between align-items-center py-3 text-center text-md-left">
            <div class="text-body text-primary-hover"> Copyrights ©{{ currentYear }} Eduport. Build by
              <a :href="developedByLink" target="_blank" class="text-body">{{ developedBy }}</a>
            </div>
            <div class="justify-content-center mt-3 mt-lg-0">
              <ul class="nav list-inline justify-content-center mb-0">
                <li class="list-inline-item">
                  <b-dropdown dropup variant="link" class="mt-0 text-center text-sm-end" toggle-class="nav-link mb-0"
                    menu-class="min-w-auto" no-caret>
                    <template #button-content>
                      <font-awesome-icon :icon="faGlobe" class="me-1" />
                      Language
                      <font-awesome-icon class="fa-sm" :icon="faChevronUp" />
                    </template>
                    <b-dropdown-item href="#" class="me-4"><img class="fa-fw me-2" :src="ukFlags"
                        alt="" />English</b-dropdown-item>
                    <b-dropdown-item href="#" class="me-4"><img class="fa-fw me-2" :src="grFlags"
                        alt="" />German</b-dropdown-item>
                    <b-dropdown-item href="#" class="me-4"><img class="fa-fw me-2" :src="spFlags"
                        alt="" />French</b-dropdown-item>
                  </b-dropdown>
                </li>
                <li class="list-inline-item"><a class="nav-link" href="#">Terms of use</a></li>
                <li class="list-inline-item"><a class="nav-link pe-0" href="#">Privacy policy</a></li>
              </ul>
            </div>
          </div>
        </b-container>
      </div>
    </b-container>
  </footer>
</template>
<script setup lang="ts">
import { currentYear, developedByLink, developedBy } from '@/helpers/constants';
import { faGlobe, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faInstagram, faTwitter, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

import ukFlags from '@/assets/images/flags/uk.svg';
import grFlags from '@/assets/images/flags/gr.svg';
import spFlags from '@/assets/images/flags/sp.svg';

import googleplay from '@/assets/images/client/google-play.svg';
import appstore from '@/assets/images/client/app-store.svg';

import logo from '@/assets/images/logo.svg';
import logolight from '@/assets/images/logo-light.svg';

const footerLinks = [
  { text: 'Company', link: ['About us', 'Contact us', 'News and Blogs', 'Library', 'Career'] },
  { text: 'Community', link: ['Documentation', 'Faq', 'Forum', 'Sitemap'] },
  { text: 'Teaching', link: ['Become a teacher', 'How to guide', 'Terms & Conditions'] },
];

const socialLink = [
  { icon: faFacebookF, class: 'text-facebook' },
  { icon: faInstagram, class: 'text-instagram' },
  { icon: faTwitter, class: 'text-twitter' },
  { icon: faLinkedinIn, class: 'text-linkedin' },
];
</script>