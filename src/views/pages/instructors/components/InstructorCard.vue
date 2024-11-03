<template>
  <b-card no-body class="shadow p-2">
    <b-row class="g-0">
      <b-col md="4">
        <img :src="item.image" class="rounded-3" alt="...">
      </b-col>

      <b-col md="8">
        <b-card-body>
          <div class="d-sm-flex justify-content-sm-between mb-2 mb-sm-3">
            <div>
              <b-card-title tag="h5" class="mb-0"><a href="#">{{ item.name }}</a></b-card-title>
              <p class="small mb-2 mb-sm-0">{{ item.position }}</p>
            </div>
            <span class="h6 fw-light">{{ item.rating }}
              <font-awesome-icon :icon="faStar" class="text-warning" />
            </span>
          </div>
          <p class="text-truncate-2 mb-3">{{ item.description }}</p>
          <div class="d-sm-flex justify-content-sm-between align-items-center">
            <h6 class="text-orange mb-0">{{ item.title }}</h6>

            <ul class="list-inline mb-0 mt-3 mt-sm-0 hstack gap-1">
              <li class="list-inline-item">
                <a class="mb-0 me-1 text-facebook" href="#">
                  <font-awesome-icon :icon="faFacebookF" class="fa-fw" />
                </a>
              </li>
              <li class="list-inline-item">
                <a class="mb-0 me-1 text-instagram" href="#">
                  <font-awesome-icon :icon="faInstagram" class="fa-fw" />
                </a>
              </li>
              <li class="list-inline-item">
                <a class="mb-0 me-1 text-twitter" href="#">
                  <font-awesome-icon :icon="faTwitter" class="fa-fw" />
                </a>
              </li>
              <li class="list-inline-item">
                <a class="mb-0 text-linkedin" href="#">
                  <font-awesome-icon :icon="faLinkedinIn" class="fa-fw" />
                </a>
              </li>
            </ul>
          </div>
        </b-card-body>
      </b-col>
    </b-row>
  </b-card>
</template>
<script setup lang="ts">
import type { PropType } from 'vue';
import type { InstructorType } from '@/types';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faInstagram, faTwitter, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

defineProps({
  item: {
    type: Object as PropType<InstructorType>,
    required: true
  }
});
</script>