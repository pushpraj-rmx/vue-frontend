<template>
  <section class="py-0 pb-lg-5">
    <b-container>
      <b-row class="g-3">
        <b-col cols="12">
          <div class="video-player rounded-3">
            <video ref="player" controls crossorigin="anonymous" playsinline :poster="poster">
              <source :src="videos360p" type="video/mp4" size="360">
              <source :src="videos720p" type="video/mp4" size="720">
              <source :src="videos1080p" type="video/mp4" size="1080">
              <track kind="captions" label="English" srclang="en" :src="videosen" default>
              <track kind="captions" label="French" srclang="fr" :src="videosfr">
            </video>
          </div>
        </b-col>

        <b-col cols="12" class="d-lg-none">
          <b-button variant="primary" class="mb-3" type="button" @click="toggleOffcanvas">
            <BIconCameraVideo class="me-1" /> Playlist
          </b-button>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>
<script setup lang="ts">
import { ref, onMounted } from 'vue';
import Plyr from 'plyr';
import { BIconCameraVideo } from 'bootstrap-icons-vue';

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

defineProps(['toggleOffcanvas']);
</script>