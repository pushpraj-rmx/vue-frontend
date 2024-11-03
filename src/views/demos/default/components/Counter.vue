<template>
  <section class="py-0 py-xl-5">
    <b-container>
      <b-row class="g-4">
        <b-col sm="6" xl="3" v-for="(item, idx) in counterData" :key="idx">
          <div
            :class="`d-flex justify-content-center align-items-center p-4 bg-${item.variant} bg-opacity-15 rounded-3`">
            <span :class="`display-6 lh-1 text-${item.variant} mb-0`">
              <component :is="item.icon" v-if="counterData.length - 1 === idx" />
              <font-awesome-icon :icon="item.icon" v-else />
            </span>
            <div class="ms-4 h6 fw-normal mb-0">
              <div class="d-flex">
                <NumberAnimation :from="0" :to="item.count" :duration="3" :format="format" :delay="0.5"
                  class="purecounter mb-0 fw-bold h5" />
                <span class="mb-0 h5">{{ item.suffix }}</span>
              </div>
              <p class="mb-0">{{ item.title }}</p>
            </div>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>
<script setup lang="ts">
import NumberAnimation from "vue-number-animation";
import { counterData } from '@/views/demos/default/components/data';

const format = (value: string) => {
  return Number.parseInt(value);
};
</script>