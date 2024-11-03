<template>
  <section class="bg-light position-relative">
    <figure class="position-absolute bottom-0 start-0 d-none d-lg-block">
      <svg width="822.2px" height="301.9px" viewBox="0 0 822.2 301.9">
        <path class="fill-warning opacity-5"
          d="M752.5,51.9c-4.5,3.9-8.9,7.8-13.4,11.8c-51.5,45.3-104.8,92.2-171.7,101.4c-39.9,5.5-80.2-3.4-119.2-12.1 c-32.3-7.2-65.6-14.6-98.9-13.9c-66.5,1.3-128.9,35.2-175.7,64.6c-11.9,7.5-23.9,15.3-35.5,22.8c-40.5,26.4-82.5,53.8-128.4,70.7 c-2.1,0.8-4.2,1.5-6.2,2.2L0,301.9c3.3-1.1,6.7-2.3,10.2-3.5c46.1-17,88.1-44.4,128.7-70.9c11.6-7.6,23.6-15.4,35.4-22.8 c46.7-29.3,108.9-63.1,175.1-64.4c33.1-0.6,66.4,6.8,98.6,13.9c39.1,8.7,79.6,17.7,119.7,12.1C634.8,157,688.3,110,740,64.6 c4.5-3.9,9-7.9,13.4-11.8C773.8,35,797,16.4,822.2,1l-0.7-1C796.2,15.4,773,34,752.5,51.9z">
        </path>
      </svg>
    </figure>

    <b-container class="position-relative">
      <b-row>
        <b-col cols="12">
          <b-row class="align-items-center">
            <b-col cols="6" md="3" class="text-center order-1">
              <img :src="category1" alt="">
            </b-col>

            <b-col md="6" class="px-md-5 text-center position-relative order-md-2 mb-5 mb-md-0">

              <figure class="position-absolute top-0 start-0">
                <svg width="22px" height="22px" viewBox="0 0 22 22">
                  <polygon class="fill-orange"
                    points="22,8.3 13.7,8.3 13.7,0 8.3,0 8.3,8.3 0,8.3 0,13.7 8.3,13.7 8.3,22 13.7,22 13.7,13.7 22,13.7 ">
                  </polygon>
                </svg>
              </figure>

              <figure class="position-absolute top-0 start-50 translate-middle mt-n6 d-none d-md-block">
                <svg width="27px" height="27px">
                  <path class="fill-purple"
                    d="M13.122,5.946 L17.679,-0.001 L17.404,7.528 L24.661,5.946 L19.683,11.533 L26.244,15.056 L18.891,16.089 L21.686,23.068 L15.400,19.062 L13.122,26.232 L10.843,19.062 L4.557,23.068 L7.352,16.089 L-0.000,15.056 L6.561,11.533 L1.582,5.946 L8.839,7.528 L8.565,-0.001 L13.122,5.946 Z">
                  </path>
                </svg>
              </figure>

              <h1 class="mb-3">What do you want to learn?</h1>
              <p class="mb-3">Grow your skill with the most reliable online courses and certifications</p>
              <b-form class="bg-body rounded p-2">
                <b-input-group>
                  <b-form-input class="border-0 me-1" type="search" placeholder="Search course" />
                  <b-button type="button" variant="dark" class="mb-0 rounded">Search</b-button>
                </b-input-group>
              </b-form>
            </b-col>
            <b-col cols="6" md="3" class="text-center order-3">
              <img :src="category2" alt="">
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>
<script setup lang="ts">
import category1 from '@/assets/images/element/category-1.svg';
import category2 from '@/assets/images/element/category-2.svg';
</script>