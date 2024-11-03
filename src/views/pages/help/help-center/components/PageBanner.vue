<template>
  <section class="bg-primary bg-opacity-10">
    <b-container>
      <b-row>
        <b-col lg="8" class="mx-auto text-center">
          <h1 class="display-6">Search Solution. Get Support</h1>
          <p class="mb-0">Search here to get answers to your questions.</p>
          <b-form class="bg-body rounded p-2 mt-4">
            <b-input-group>
              <b-form-input class="border-0 me-1" type="text" placeholder="Search question..." />
              <b-button type="button" variant="dark" class="mb-0 rounded">Search</b-button>
            </b-input-group>
          </b-form>

          <b-row class="mt-4 align-items-center">
            <b-col cols="12">
              <h5 class="mb-3">Popular questions</h5>
              <div class="list-group list-group-horizontal gap-2 justify-content-center flex-wrap mb-0 border-0">
                <template v-for="(item, idx) in popularQuestions" :key="idx">
                  <router-link class="btn btn-white btn-sm fw-light" :to="`/help-center/${idx + 1000}`">
                    {{ item }}
                  </router-link>
                </template>
                <a class="btn btn-primary-soft btn-sm fw-light" href="#!">View all question</a>
              </div>
            </b-col>
          </b-row>
        </b-col>

        <b-col cols="12" class="mt-6">
          <img :src="helpcenter" class="w-100" alt="">
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>
<script setup lang="ts">
import helpcenter from '@/assets/images/element/help-center.svg';

const popularQuestions = [
  'How can we help?',
  'How to upload data to the system? ',
  'Installation Guide? ',
  'How to view expired course?',
  "What's are the difference between a social?",
];
</script>