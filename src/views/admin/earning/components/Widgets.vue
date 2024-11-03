<template>
  <b-row class="g-4 mb-4">
    <b-col sm="6" lg="4">
      <div class="p-4 bg-primary bg-opacity-10 rounded-3">
        <h6>Sales this month</h6>
        <h2 class="mb-0 fs-1 text-primary">{{currency}}899.95</h2>
      </div>
    </b-col>

    <b-col sm="6" lg="4">
      <div class="p-4 bg-purple bg-opacity-10 rounded-3">
        <h6>To be paid
          <a tabindex="0" class="h6 mb-0 icons-center" role="button" data-bs-toggle="popover" data-bs-trigger="focus"
            data-bs-placement="top" data-bs-content="After US royalty withholding tax" data-bs-original-title=""
            title="">
            <BIconInfoCircleFill class="small" />
          </a>
        </h6>
        <h2 class="mb-0 fs-1 text-purple">{{currency}}750.35</h2>
      </div>
    </b-col>

    <b-col sm="6" lg="4">
      <div class="p-4 bg-orange bg-opacity-10 rounded-3">
        <h6>Lifetime Earnings</h6>
        <h2 class="mb-0 fs-1 text-orange">{{currency}}4882.65</h2>
      </div>
    </b-col>
  </b-row>
</template>
<script setup lang="ts">
import { currency } from '@/helpers/constants';
import { BIconInfoCircleFill } from 'bootstrap-icons-vue';
</script>