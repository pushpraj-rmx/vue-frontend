<template>
  <section class="py-0 bg-dark position-relative">
    <b-row class="g-0">
      <div class="d-flex">
        <div class="overflow-hidden fullscreen-video w-100">
          <div class="video-player rounded-3">
            <video ref="player" controls crossorigin="anonymous" playsinline :poster="poster">
              <source :src="videos360p" type="video/mp4" size="360">
              <source :src="videos720p" type="video/mp4" size="720">
              <source :src="videos1080p" type="video/mp4" size="1080">
              <track kind="captions" label="English" srclang="en" :src="videosen" default>
              <track kind="captions" label="French" srclang="fr" :src="videosfr">
            </video>
          </div>
        </div>

        <div class="justify-content-end position-relative">
          <button class="navbar-toggler btn btn-white mt-4 plyr-toggler" type="button" data-bs-toggle="collapse"
            data-bs-target="#collapseWidthExample" aria-expanded="false" aria-controls="collapseWidthExample"
            v-b-toggle="'collapseWidthExample'">
            <span class="navbar-toggler-animation">
              <span></span>
              <span></span>
              <span></span>
            </span>
          </button>

          <b-collapse class="collapse-horizontal" id="collapseWidthExample">
            <b-card no-body class="vh-100 overflow-auto rounded-0 w-280px w-sm-400px">
              <b-card-header class="bg-light rounded-0">
                <h1 class="mt-2 fs-5">The Complete Digital Marketing Course - 12 Courses in 1</h1>
                <h6 class="mb-0 fw-normal"><a href="#">By Jacqueline Miller</a></h6>
              </b-card-header>

              <b-card-body>
                <div class="d-sm-flex justify-content-sm-between">
                  <h5>Course content</h5>
                  <b-button type="button" variant="warning" size="sm" data-bs-toggle="modal" data-bs-target="#Notemodal"
                    @click="showModal = !showModal">
                    <BIconPencilSquare class="fa-fw me-2" />Add note
                  </b-button>
                </div>
                <hr>
                <b-row>
                  <b-col cols="12">
                    <b-accordion class="accordion-flush-light" flush>
                      <template v-for="(item, idx) in courseContent" :key="idx">
                        <b-accordion-item body-class="px-3" :visible="!idx">
                          <template #title>
                            <span class="mb-0 fw-bold">{{ item.heading }}</span>
                          </template>
                          <div class="vstack gap-3">
                            <div v-for="(lect, idx) in item.sections" :key="idx">
                              <div class="d-flex justify-content-between align-items-center mb-2">
                                <div class="position-relative d-flex align-items-center">

                                  <a href="#" class="btn btn-light btn-round btn-sm mb-0 stretched-link position-static"
                                    v-if="lect.isPremium">
                                    <BIconLockFill />
                                  </a>

                                  <a href="#"
                                    class="btn btn-danger-soft btn-round btn-sm mb-0 stretched-link position-static"
                                    v-else>
                                    <font-awesome-icon :icon="faPlay" class="me-0" />
                                  </a>

                                  <span class="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-100px w-sm-200px">{{
                                    lect.title }}</span>
                                </div>
                                <p class="mb-0 text-truncate">{{ lect.duration }}</p>
                              </div>
                              <template v-if="lect.notes">
                                <a class="btn btn-xs btn-warning" href="#" role="button" v-b-toggle="`addnote-${idx}`">
                                  View note
                                </a>

                                <b-collapse :id="`addnote-${idx}`">
                                  <b-card no-body class="card-body p-0">
                                    <div class="d-flex justify-content-between bg-light rounded-2 p-2 mb-2"
                                      v-for="(note, idx) in lect.notes" :key="idx">
                                      <div class="d-flex align-items-center">
                                        <span class="badge bg-dark me-2">{{ note.time }}</span>
                                        <h6 class="d-inline-block text-truncate w-40px w-sm-150px mb-0 fw-light">
                                          {{ note.description }}
                                        </h6>
                                      </div>
                                      <div class="d-flex">
                                        <a href="#" class="btn btn-sm btn-light btn-round me-2 mb-0">
                                          <BIconPlayFill class="fa-fw" />
                                        </a>
                                        <a href="#" class="btn btn-sm btn-light btn-round mb-0">
                                          <BIconTrashFill class="fa-fw" />
                                        </a>
                                      </div>
                                    </div>
                                  </b-card>
                                </b-collapse>
                              </template>
                            </div>
                          </div>
                        </b-accordion-item>
                      </template>
                    </b-accordion>
                  </b-col>
                </b-row>
              </b-card-body>
              <b-card-footer>
                <div class="d-grid">
                  <router-link :to="{ name: 'course.detail' }" class="btn btn-primary-soft mb-0">Back to
                    course</router-link>
                </div>
              </b-card-footer>
            </b-card>
          </b-collapse>
        </div>
      </div>
    </b-row>
  </section>

  <b-modal v-model="showModal" title="Add New Note" ok-title="Save Note" cancel-title="Close">
    <b-col cols="12">
      <b-form-group>
        <template #title>
          Type your note <span class="text-danger">*</span>
        </template>
        <b-form-input type="text" placeholder="Type your note" />
      </b-form-group>
    </b-col>
  </b-modal>
</template>
<script setup lang="ts">
import { ref, onMounted } from 'vue';
import Plyr from 'plyr';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { BIconPencilSquare, BIconLockFill, BIconPlayFill, BIconTrashFill } from 'bootstrap-icons-vue';

import videos360p from '@/assets/images/videos/360p.mp4';
import videos720p from '@/assets/images/videos/720p.mp4';
import videos1080p from '@/assets/images/videos/1080p.mp4';
import videosen from '@/assets/images/videos/en.vtt';
import videosfr from '@/assets/images/videos/fr.vtt';

import poster from '@/assets/images/videos/poster.jpg';

import { courseContent } from '@/views/pages/course/coursevideo/components/data';

const showModal = ref(false);
const player = ref(null);

onMounted(() => {
  if (player.value) {
    new Plyr(player.value);
  }
});
</script>