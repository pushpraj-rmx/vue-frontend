<template>
  <section class="pt-0 pt-md-5">
    <b-container>
      <b-row class="g-4">
        <b-col lg="6" xl="5">
          <h2 class="fs-1">Frequently Asked Questions</h2>
          <p class="mb-0">We are answering the most frequent questions. No worries if you do not find the exact one.
            You can find out more by searching or continuing by clicking the button below or directly <a href="#"
              class="text-decoration-underline">Contact our supports</a></p>
        </b-col>

        <b-col lg="6" class="ms-xl-auto">
          <b-accordion class="accordion-icon accordion-bg-light">
            <template v-for="(item, idx) in faqs" :key="idx">
              <b-accordion-item :title="item.question" button-class="h6 rounded" :visible="!idx">
                {{ item.answer }}
              </b-accordion-item>
            </template>
          </b-accordion>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>
<script setup lang="ts">
import { faqs } from '@/views/demos/workshop/components/data';
</script>