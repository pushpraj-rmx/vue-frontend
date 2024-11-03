<template>
  <section class="bg-light py-5">
    <b-container>
      <b-row class="g-4 g-md-5 position-relative">
        <figure class="position-absolute top-0 start-0 d-none d-sm-block">
          <svg width="22px" height="22px" viewBox="0 0 22 22">
            <polygon class="fill-purple"
              points="22,8.3 13.7,8.3 13.7,0 8.3,0 8.3,8.3 0,8.3 0,13.7 8.3,13.7 8.3,22 13.7,22 13.7,13.7 22,13.7 ">
            </polygon>
          </svg>
        </figure>
        <b-col lg="10" class="mx-auto text-center position-relative">
          <figure class="position-absolute top-50 end-0 translate-middle-y">
            <svg width="27px" height="27px">
              <path class="fill-orange"
                d="M13.122,5.946 L17.679,-0.001 L17.404,7.528 L24.661,5.946 L19.683,11.533 L26.244,15.056 L18.891,16.089 L21.686,23.068 L15.400,19.062 L13.122,26.232 L10.843,19.062 L4.557,23.068 L7.352,16.089 L-0.000,15.056 L6.561,11.533 L1.582,5.946 L8.839,7.528 L8.565,-0.001 L13.122,5.946 Z">
              </path>
            </svg>
          </figure>
          <h1 class="display-6">Hello, how can we help?</h1>
          <b-col lg="8" class="mx-auto text-center mt-4">
            <b-form class="bg-body shadow rounded p-2">
              <b-input-group>
                <b-form-input class="border-0 me-1" type="text" placeholder="Ask a question..." />
                <b-button type="button" :variant="null" class="btn-blue mb-0 rounded">Submit</b-button>
              </b-input-group>
            </b-form>
          </b-col>
        </b-col>

        <b-col cols="12">
          <b-row class="g-4 text-center">
            <p class="mb-0">Choose a category to quickly find the help you need</p>
            <b-col sm="6" md="3" v-for="(item, idx) in topics" :key="idx">
              <b-card no-body class="card-body card-border-hover p-0">
                <a href="#" class="p-3">
                  <h2>
                    <font-awesome-icon :icon="item.icon" class="transition-base" />
                  </h2>
                  <h6 class="mb-0">{{ item.topic }}</h6>
                </a>
              </b-card>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>
<script setup lang="ts">
import { faStreetView, faHandsHelping, faExclamationCircle, faFlag } from '@fortawesome/free-solid-svg-icons';

const topics = [
  { icon: faStreetView, topic: 'User Guide' },
  { icon: faHandsHelping, topic: 'Assistance' },
  { icon: faExclamationCircle, topic: 'General guide' },
  { icon: faFlag, topic: 'Getting started' },
];
</script>