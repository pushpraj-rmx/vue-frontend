<template>
  <section class="position-relative overflow-hidden pt-0 pt-sm-5">
    <b-container>
      <b-row class="position-relative z-index-9">
        <b-col cols="12" class="text-center mx-auto">
          <h2 class="mb-0">Frequently Asked Questions</h2>
        </b-col>
      </b-row>

      <b-row>
        <b-col lg="10" xl="8" class="mx-auto text-center position-relative">

          <figure class="position-absolute top-0 start-0 translate-middle ms-8">
            <svg style="enable-background:new 0 0 141.7 143.9;">
              <path class="fill-success"
                d="M137.7,53.1c9.6,29.3,1.8,64.7-20.2,80.7s-58.1,12.6-83.5-5.8C8.6,109.5-6.1,76.1,2.4,48.7 C10.8,21.1,42.2-0.7,71.5,0S128.1,23.8,137.7,53.1z" />
            </svg>
          </figure>

          <figure class="position-absolute bottom-0 end-0 me-n9 rotate-193">
            <svg width="297.5px" height="295.9px">
              <path stroke="#F99D2B" fill="none" stroke-width="13"
                d="M286.2,165.5c-9.8,74.9-78.8,128.9-153.9,120.4c-76-8.6-131.4-78.2-122.8-154.2C18.2,55.8,87.8,0.3,163.7,9">
              </path>
            </svg>
          </figure>

          <b-accordion class="accordion-icon accordion-shadow mt-4 text-start position-relative">
            <template v-for="(item, idx) in faqList" :key="idx">
              <b-accordion-item :title="item.question" button-class="fw-bold rounded pe-5" header-class="font-base"
                header-tag="h6" body-class="mt-3" :class="!(faqList.length - 1 === idx) && 'mb-3'" :visible="!idx">
                <span v-html="item.answer" />
              </b-accordion-item>
            </template>
          </b-accordion>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>
<script setup lang="ts">
import { faqList } from '@/views/demos/tutor/components/data';
</script>