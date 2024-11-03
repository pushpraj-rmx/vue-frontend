<template>
  <section class="pt-4 pt-lg-5">
    <b-container>
      <b-row class="g-4">
        <b-col sm="6" lg="12" xl="3">
          <h2>Services that you need to know</h2>
          <p>The 1-hour demo will provide Happiness prosperous impression had conviction For every delay in their
            Extremity now, strangers</p>
        </b-col>
        <b-col sm="6" lg="4" xl="3" v-for="(item, idx) in serviceLists" :key="idx">
          <b-card no-body class="card-body shadow h-100">
            <div class="d-flex align-items-center">
              <img :src="item.image" class="h-60px mb-2" alt="">
              <div class="ms-3">
                <h5 class="mb-0"><a href="#">{{ item.category }}</a></h5>
                <p class="mb-0 small">Total {{ item.students }} Students</p>
              </div>
            </div>
            <ul class="list-group list-group-borderless small mt-2">
              <li class="list-group-item text-body pb-0 icons-center" v-for="(feat, idx) in item.features" :key="idx">
                <BIconPatchCheckFill class="text-success me-1" />
                {{ feat }}
              </li>
            </ul>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>
<script setup lang="ts">
import { serviceLists } from '@/views/demos/tutor/components/data';
import { BIconPatchCheckFill } from 'bootstrap-icons-vue';
</script>