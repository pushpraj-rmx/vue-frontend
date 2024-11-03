<template>
  <PagesLayout>
    <section class="pt-3 pt-xl-5">
      <b-container data-sticky-container>
        <b-row class="g-4">
          <b-col xl="8">
            <b-row class="g-4">
              <b-col cols="12">
                <h2>The Complete Digital Marketing Course - 12 Courses in 1</h2>
                <p>Satisfied conveying a dependent contented he gentleman agreeable do be. Warrant private blushes
                  removed an in equally totally if. Delivered dejection necessary objection do Mr prevailed. Mr feeling
                  does chiefly cordial in do.</p>
                <ul class="list-inline mb-0">
                  <li class="list-inline-item fw-light h6 me-3 mb-1 mb-sm-0">
                    <font-awesome-icon :icon="faStar" class="me-1" />
                    4.5/5.0
                  </li>{{ ' ' }}
                  <li class="list-inline-item fw-light h6 me-3 mb-1 mb-sm-0">
                    <font-awesome-icon :icon="faUserGraduate" class="me-1" />
                    12k Enrolled
                  </li>{{ ' ' }}
                  <li class="list-inline-item fw-light h6 me-3 mb-1 mb-sm-0">
                    <font-awesome-icon :icon="faSignal" class="me-1" />
                    All levels
                  </li>{{ ' ' }}
                  <li class="list-inline-item fw-light h6 me-3 mb-1 mb-sm-0">
                    <BIconPatchExclamationFill class="me-1" />Last updated 09/2021
                  </li>{{ ' ' }}
                  <li class="list-inline-item fw-light h6">
                    <font-awesome-icon :icon="faGlobe" class="me-1" />
                    English
                  </li>
                </ul>
              </b-col>
              <b-col cols="12" class="position-relative">
                <div class="video-player rounded-3">
                  <video ref="player" controls crossorigin="anonymous" playsinline :poster="poster">
                    <source :src="videos360p" size="360" />
                    <source :src="videos720p" size="720" />
                    <source :src="videos1080p" size="1080" />
                    <track kind="captions" label="English" srcLang="en" :src="videosen" default />
                    <track kind="captions" label="French" srcLang="fr" :src="videosfr" />
                  </video>
                </div>
              </b-col>
              <Description />
              <Curriculum />
              <FAQs />
            </b-row>
          </b-col>
          <RightSidebar />
        </b-row>
      </b-container>
    </section>
  </PagesLayout>
</template>
<script setup lang="ts">
import PagesLayout from '@/layouts/PagesLayout.vue';
import { ref, onMounted } from 'vue';
import Plyr from 'plyr';

import { faStar, faUserGraduate, faSignal, faGlobe } from '@fortawesome/free-solid-svg-icons';
import { BIconPatchExclamationFill } from 'bootstrap-icons-vue';

import FAQs from '@/views/pages/course/detail-advance/components/FAQs.vue';
import Curriculum from '@/views/pages/course/detail-advance/components/Curriculum.vue';
import Description from '@/views/pages/course/detail-advance/components/Description.vue';
import RightSidebar from '@/views/pages/course/detail-advance/components/RightSidebar.vue';

import videos360p from '@/assets/images/videos/360p.mp4';
import videos720p from '@/assets/images/videos/720p.mp4';
import videos1080p from '@/assets/images/videos/1080p.mp4';
import videosen from '@/assets/images/videos/en.vtt';
import videosfr from '@/assets/images/videos/fr.vtt';

import poster from '@/assets/images/videos/poster.jpg';

const player = ref(null);

onMounted(() => {
  if (player.value) {
    new Plyr(player.value);
  }
});
</script>