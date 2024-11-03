<template>
  <section class="mb-n9 position-relative z-index-9">
    <b-container>
      <b-row>
        <b-col cols="11" md="10" class="mx-auto">
          <div class="bg-warning rounded-3 shadow p-3 p-sm-4 position-relative overflow-hidden">
            <figure class="position-absolute top-100 start-100 translate-middle mt-n6 ms-n5">
              <svg width="211px" height="211px">
                <path class="fill-white opacity-4"
                  d="M210.030,105.011 C210.030,163.014 163.010,210.029 105.012,210.029 C47.013,210.029 -0.005,163.014 -0.005,105.011 C-0.005,47.015 47.013,-0.004 105.012,-0.004 C163.010,-0.004 210.030,47.015 210.030,105.011 Z">
                </path>
              </svg>
            </figure>
            <figure class="position-absolute top-100 start-0 translate-middle mt-n6 ms-5">
              <svg width="141px" height="141px">
                <path class="fill-white opacity-4"
                  d="M140.520,70.258 C140.520,109.064 109.062,140.519 70.258,140.519 C31.454,140.519 -0.004,109.064 -0.004,70.258 C-0.004,31.455 31.454,-0.003 70.258,-0.003 C109.062,-0.003 140.520,31.455 140.520,70.258 Z">
                </path>
              </svg>
            </figure>
            <figure class="position-absolute top-0 start-50 mt-4 ms-n9">
              <svg width="41px" height="41px">
                <path class="fill-white opacity-4"
                  d="M40.531,20.265 C40.531,31.458 31.457,40.531 20.265,40.531 C9.072,40.531 -0.001,31.458 -0.001,20.265 C-0.001,9.073 9.072,-0.001 20.265,-0.001 C31.457,-0.001 40.531,9.073 40.531,20.265 Z">
                </path>
              </svg>
            </figure>

            <div
              class="p-2 bg-white shadow rounded-3 rotate-74 position-absolute top-0 start-0 ms-3 mt-5 d-none d-sm-block">
              <img :src="science" class="h-40px" alt="Icon">
            </div>
            <div
              class="p-1 bg-white shadow rounded-3 rotate-74 position-absolute top-0 end-0 mt-5 me-5 d-none d-sm-block">
              <img :src="angular" class="h-30px" alt="Icon">
            </div>
            <div
              class="p-2 bg-white shadow rounded-3 rotate-130 position-absolute bottom-0 start-50 ms-5 mb-2 d-none d-lg-block">
              <img :src="figma" class="h-20px" alt="Icon">
            </div>

            <b-row>
              <b-col md="8" class="mx-auto text-center py-5 position-relative">
                <h2>Subscribe to our Newsletter for Newest Course Updates</h2>
                <b-form class="row align-items-center justify-content-center mt-3">
                  <b-col lg="8">
                    <div class="bg-body shadow rounded-pill p-2">
                      <b-input-group>
                        <b-form-input class="border-0 me-1" type="email" placeholder="Enter your email" />
                        <b-button type="button" :variant="null" pill class="btn-blue mb-0">Subscribe!</b-button>
                      </b-input-group>
                    </div>
                  </b-col>
                </b-form>
              </b-col>
            </b-row>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>
<script setup lang="ts">
import science from '@/assets/images/client/science.svg';
import angular from '@/assets/images/client/angular.svg';
import figma from '@/assets/images/client/figma.svg';
</script>