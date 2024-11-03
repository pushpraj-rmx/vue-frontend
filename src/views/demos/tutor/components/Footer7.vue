<template>
  <footer class="bg-dark p-3">
    <b-container>
      <b-row class="align-items-center">
        <b-col md="4" class="text-center text-md-start mb-3 mb-md-0">
          <router-link :to="{ name: 'demos.default' }">
            <img class="h-20px" :src="logolight" alt="logo">
          </router-link>
        </b-col>
        <b-col md="4" class="mb-3 mb-md-0">
          <div class="text-center text-white text-primary-hover">
            Copyrights ©{{ currentYear }} Eduport. Build by
            <a :href="developedByLink" target="_blank" class="text-white">{{ developedBy }}</a>.
          </div>
        </b-col>
        <b-col md="4">
          <ul class="list-inline mb-0 text-center text-md-end">
            <li class="list-inline-item ms-2" v-for="(link, idx) in socialLink" :key="idx">
              <a href="#">
                <font-awesome-icon class="text-white" :icon="link" />
              </a>
            </li>{{ ' ' }}
          </ul>
        </b-col>
      </b-row>
    </b-container>
  </footer>
</template>
<script setup lang="ts">
import { faFacebook, faInstagram, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { currentYear, developedByLink, developedBy } from '@/helpers/constants';

import logolight from '@/assets/images/logo-light.svg';

const socialLink = [faFacebook, faInstagram, faLinkedinIn, faTwitter];
</script>