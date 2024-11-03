<template>
  <section class="pb-0 py-sm-0 mt-n8">
    <b-container>
      <b-row>
        <b-col md="8" class="text-center mx-auto">
          <b-card no-body class="card-body shadow p-2">
            <div class="position-relative">
              <img :src="about12" class="card-img rounded-2" alt="...">
              <div class="card-img-overlay">
                <div class="position-absolute top-50 start-50 translate-middle">
                  <CustomGLightbox link="https://www.youtube.com/embed/tXHviS-4ygo"
                    class="btn btn-lg text-danger btn-round btn-white-shadow mb-0">
                    <font-awesome-icon :icon="faPlay" />
                  </CustomGLightbox>
                </div>
              </div>
            </div>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>
<script setup lang="ts">
import CustomGLightbox from '@/components/CustomGLightbox.vue';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import about12 from '@/assets/images/about/12.jpg';
</script>