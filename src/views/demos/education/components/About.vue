<template>
  <section>
    <b-container>
      <b-row class="g-4 align-items-center">
        <b-col lg="5">
          <h2>Find Out More About us, <span class="text-warning">Eduport</span> insides.</h2>
          <img :src="about03" class="rounded-2" alt="">
        </b-col>
        <b-col lg="7">
          <b-row class="g-4">
            <b-col sm="6">
              <div class="icon-lg bg-orange bg-opacity-10 text-orange rounded-2">
                <font-awesome-icon :icon="faUserTie" class="fs-5" />
              </div>
              <h5 class="mt-2">Learn with Experts</h5>
              <p class="mb-0">In no impression assistance contrasted Manners she wishing justice hastily new anxious At
                discovery objection we</p>
            </b-col>
            <b-col sm="6">
              <div class="icon-lg bg-info bg-opacity-10 text-info rounded-2">
                <font-awesome-icon :icon="faBook" class="fs-5" />
              </div>
              <h5 class="mt-2">Learn Anything</h5>
              <p class="mb-0">Smile spoke total few great had never their too Amongst moments do in arrived at my
                replied Fat weddings believed prospect</p>
            </b-col>
            <b-col sm="6">
              <div class="icon-lg bg-success bg-opacity-10 text-success rounded-2 flex-centered">
                <BIconAlarmFill class="fs-5" />
              </div>
              <h5 class="mt-2">Flexible Learning</h5>
              <p class="mb-0">Denote simple fat denied add worthy little use As some he so high down am week Conduct
                denied add worthy little use As</p>
            </b-col>
            <b-col sm="6">
              <div class="icon-lg bg-purple bg-opacity-10 text-purple rounded-2">
                <font-awesome-icon :icon="faUniversity" class="fs-5" />
              </div>
              <h5 class="mt-2">Industrial Standards</h5>
              <p class="mb-0">Pleasure and so read the was hope entire first decided the so must have as on was want up
                of to traveling so all</p>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>
<script setup lang="ts">
import { faUserTie, faBook, faUniversity } from '@fortawesome/free-solid-svg-icons';
import { BIconAlarmFill } from 'bootstrap-icons-vue';

import about03 from '@/assets/images/about/03.jpg';
</script>