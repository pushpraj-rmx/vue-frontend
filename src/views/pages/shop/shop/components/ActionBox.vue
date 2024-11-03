<template>
  <section class="pt-0">
    <b-container>
      <b-row class="g-4">
        <b-col lg="6">
          <div class="bg-purple bg-opacity-10 rounded-3 p-5 h-100">
            <b-row class="g-3 align-items-center">
              <b-col sm="5" lg="12" xl="5">
                <img :src="book01" alt="">
              </b-col>
              <b-col sm="7" lg="12" xl="7">
                <h3 class="mb-2">Best selling book of the month</h3>

                <ul class="list-inline mb-2 hstack gap-1">
                  <li class="list-inline-item me-0 small"><font-awesome-icon :icon="faStar" class="text-warning" /></li>
                  <li class="list-inline-item me-0 small"><font-awesome-icon :icon="faStar" class="text-warning" /></li>
                  <li class="list-inline-item me-0 small"><font-awesome-icon :icon="faStar" class="text-warning" /></li>
                  <li class="list-inline-item me-0 small"><font-awesome-icon :icon="faStar" class="text-warning" /></li>
                  <li class="list-inline-item me-0 small"><font-awesome-icon :icon="faStarHalfAlt" class="text-warning" /></li>
                </ul>

                <h6 class="lead fw-bold mb-2">HTML and CSS: Design and Build Websites (Paperback)</h6>
                <a href="#" class="btn btn-sm btn-purple mb-0">Buy now</a>
              </b-col>
            </b-row>
          </div>
        </b-col>

        <b-col lg="6">
          <div class="bg-warning rounded-3 bg-opacity-15 p-5 h-100">
            <b-row class="g-3 align-items-center my-auto">
              <b-col sm="7" lg="12" xl="7">
                <h2 class="mb-1 fs-1">50%OFF</h2>
                <p class="mb-3 h5 fw-light lead">Enroll now in the most popular and best-rated Books.</p>
                <a href="#" class="btn btn-dark mb-0">View Books</a>
              </b-col>
              <b-col sm="5" lg="12" xl="5">
                <img :src="element29" alt="">
              </b-col>
            </b-row>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>
<script setup lang="ts">
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';

import book01 from '@/assets/images/book/01.jpg';
import element29 from '@/assets/images/element/29.svg';
</script>