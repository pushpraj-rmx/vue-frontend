<template>
  <section class="pt-5 pb-0"
    :style="`background-image:url(${map}); background-position: center left; background-size: cover;`">
    <b-container>
      <b-row>
        <b-col lg="8" xl="6" class="text-center mx-auto">
          <h6 class="text-primary">Contact us</h6>
          <h1 class="mb-4">We're here to help!</h1>
        </b-col>
      </b-row>
      <b-row class="g-4 g-md-5 mt-0 mt-lg-3">
        <b-col lg="4" class="mt-lg-0" v-for="(item, idx) in contactInfos" :key="idx">
          <b-card no-body class="card-body shadow py-5 text-center h-100" :class="!idx && 'bg-primary'">
            <h5 class="mb-3" :class="!idx && 'text-white'">{{ item.name }}</h5>
            <ul class="list-inline mb-0">
              <li class="list-item mb-3 h6 fw-light">
                <a href="#" :class="!idx && 'text-white'">
                  <font-awesome-icon :icon="faMapMarkerAlt" class="fa-fw me-2 mt-1" />
                  {{ item.address }}
                </a>
              </li>
              <li class="list-item mb-3 h6 fw-light">
                <a href="#" :class="!idx && 'text-white'">
                  <font-awesome-icon :icon="faPhone" class="fa-fw me-2" />
                  {{ item.phone }}
                </a>
              </li>
              <li class="list-item mb-0 h6 fw-light">
                <a href="#" :class="!idx && 'text-white'">
                  <font-awesome-icon :icon="faEnvelope" class="fa-fw me-2" />
                  {{ item.email }}
                </a>
              </li>
            </ul>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>
<script setup lang="ts">
import { contactInfos } from '@/views/pages/about/contact-us/components/data';
import map from '@/assets/images/element/map.svg';
import { faMapMarkerAlt, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
</script>