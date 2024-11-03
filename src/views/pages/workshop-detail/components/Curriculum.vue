<template>
  <section class="pt-0">
    <b-container>
      <b-row class="mb-4">
        <b-col cols="12" class="text-center">
          <h2 class="fs-1 mb-0">Course Curriculum</h2>
        </b-col>
      </b-row>

      <b-row class="g-4">
        <b-col lg="8">
          <b-accordion class="accordion-icon accordion-bg-light" id="accordionExample2">
            <template v-for="(item, idx) in curriculamList" :key="idx">
              <b-accordion-item button-class="fw-bold rounded d-flex" header-class="font-base" header-tag="h6"
                body-class="mt-3" class="mb-3" :visible="!idx">
                <template #title>
                  <BIconPcDisplayHorizontal class="me-3" v-if="item.icon" />
                  <span class="me-3" v-else>0{{ idx }}</span>
                  {{ item.title }}
                </template>
                <template v-for="(link, idx) in item.links" :key="idx" v-if="item.video">
                  <hr v-if="idx">
                  <b-row class="justify-content-md-between">
                    <b-col md="5">
                      <h5>{{ link.title }}</h5>
                      <ul class="list-group list-group-borderless">
                        <li class="list-group-item px-0" v-for="(detail, idx) in link.details" :key="idx">
                          <span class="h6 fw-normal">
                            <font-awesome-icon :icon="detail.icon" class="fa-fw text-primary me-2" />
                            <component :is="detail.icon" class="fa-fw text-primary me-2" />
                            {{ detail.text }}
                          </span>
                        </li>
                      </ul>
                    </b-col>

                    <b-col md="3" v-if="link.videoLink && link.image">
                      <b-card no-body class="shadow p-0">
                        <div class="overflow-hidden rounded-3">
                          <img :src="link.image" class="card-img" alt="course img">

                          <div class="bg-overlay bg-dark opacity-6"></div>
                          <div class="card-img-overlay d-flex align-items-start flex-column p-3">

                            <div class="m-auto">
                              <CustomGLightbox :link="link.videoLink" class="btn btn-lg btn-white btn-round mb-0">
                                <font-awesome-icon :icon="faPlay" />
                              </CustomGLightbox>
                            </div>
                          </div>
                        </div>
                      </b-card>
                    </b-col>

                    <b-col md="3" v-else-if="link.image">
                      <img :src="link.image" class="rounded-3" alt="course img">
                    </b-col>
                  </b-row>
                </template>
                <template v-else>
                  <p v-if="item.text">{{ item.text }}</p>

                  <template v-for="(link, idx) in item.links" :key="idx">
                    <hr v-if="idx" />
                    <a href="#" class="h6 fw-normal p-0 mb-0 align-items-center">
                      <font-awesome-icon :icon="link.icon" class="fa-fw me-2" />
                      <component :is="link.icon" />
                      {{ link.text }}
                    </a>
                  </template>
                </template>
              </b-accordion-item>
            </template>
          </b-accordion>
        </b-col>

        <b-col lg="4">
          <b-card no-body class="card-body text-center bg-dark text-white p-5">
            <h6 class="text-danger mb-3">
              <BIconHourglassSplit class="me-2" />Hurry! Limited Seat Available
            </h6>
            <h4 class="text-white">Developed your photo editing skills</h4>
            <small>Jun 10 - Aug 5, 2022</small>
            <h3 class="fs-1 text-white mt-3">{{ currency }}557</h3>
            <a href="#" class="btn btn-success mb-2">Enroll Now</a>
            <small class="mb-0">By clicking 'Enroll Now', you agree to our
              <a href="#" class="text-decoration-underline">
                Terms of Service and Privacy Policy.
              </a>
            </small>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>
<script setup lang="ts">
import CustomGLightbox from '@/components/CustomGLightbox.vue';
import { currency } from '@/helpers/constants';
import { curriculamList } from '@/views/pages/workshop-detail/components/data';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { BIconPcDisplayHorizontal, BIconHourglassSplit } from 'bootstrap-icons-vue';
</script>