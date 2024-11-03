<template>
  <section class="pb-0 pb-xxl-5">
    <b-container>
      <b-row>
        <b-col md="10" class="mx-auto">
          <b-row class="d-flex justify-content-center">
            <b-col cols="6" sm="4" lg="3" xl="2" v-for="(img, idx) in client" :key="idx">
              <div class="p-3 p-lg-4 grayscale text-center">
                <img :src="img" alt="Client logo">
              </div>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>
<script setup lang="ts">

const client = [microsoft, linkedin, netflix, cocacola, envato, android, cocacola, shippable, algolia, importio, yamaha];

import microsoft from '@/assets/images/client/microsoft.svg';
import linkedin from '@/assets/images/client/linkedin.svg';
import netflix from '@/assets/images/client/netflix.svg';
import cocacola from '@/assets/images/client/coca-cola.svg';
import envato from '@/assets/images/client/envato.svg';
import android from '@/assets/images/client/android.svg';
import shippable from '@/assets/images/client/shippable.svg';
import algolia from '@/assets/images/client/algolia.svg';
import importio from '@/assets/images/client/importio.svg';
import yamaha from '@/assets/images/client/yamaha.svg';
</script>