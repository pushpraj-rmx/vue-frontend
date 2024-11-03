<template>
  <section class="pt-0">
    <b-container>
      <b-row class="g-4 g-lg-5">
        <b-col lg="8" class="order-2">
          <div class="bg-light rounded-3 p-3 mb-4">
            <b-row class="g-4">
              <b-col md="4">
                <h6 class="small">Organized by:</h6>
                <div class="d-flex align-items-center">
                  <div class="avatar align-middle">
                    <div class="avatar-img rounded-1 bg-danger"><span
                        class="text-white position-absolute top-50 start-50 translate-middle fw-bold">ZC</span></div>
                  </div>
                  <div class="ms-2">
                    <h6 class="mb-0">Zodiac Event Inc.</h6>
                    <small>2.4k followers</small>
                  </div>
                </div>
              </b-col>

              <b-col md="4">
                <h6 class="small">Location:</h6>
                <div class="d-flex align-items-center">
                  <div class="avatar align-middle flex-shrink-0">
                    <div class="avatar-img rounded-2 bg-dark">
                      <span class="position-absolute top-50 start-50 translate-middle text-white flex-centered">
                        <BIconGeoAltFill />
                      </span>
                    </div>
                  </div>
                  <h6 class="fw-normal mb-0 ms-2">Chicago HQ Estica Cop. Macomb, MI 48042</h6>
                </div>
              </b-col>

              <b-col md="4">
                <h6 class="small">Date & Time:</h6>
                <div class="d-flex align-items-center">
                  <div class="avatar align-middle flex-shrink-0">
                    <div class="avatar-img rounded-2 bg-dark">
                      <span class="position-absolute top-50 start-50 translate-middle text-white flex-centered">
                        <BIconCalendarFill />
                      </span>
                    </div>
                  </div>
                  <div class="ms-2">
                    <h6 class="fw-normal mb-0">01 Jan 2023</h6>
                    <small>9am to 7pm Daylight Time</small>
                  </div>
                </div>
              </b-col>
            </b-row>
          </div>

          <h4>About this event</h4>
          <p>Satisfied conveying a dependent contented he gentleman agreeable do be. Warrant private blushes removed and
            in equally totally if. Delivered dejection necessary objection do Mr prevailed. Mr feeling chiefly cordial
            in doing.</p>
          <p>We focus a great deal on the understanding of behavioral psychology and influence triggers which are
            crucial for becoming a well-rounded Digital Marketer. We understand that theory is important to build a
            solid foundation, we understand that theory alone isn’t going to get the job done so that’s why this course
            is packed with practical hands-on examples that you can follow step by step.</p>

          <h4 class="mt-4 mb-0">Speakers</h4>
          <p>Understand that theory is important to build a solid foundation, we understand that theory alone</p>
          <b-row class="g-4">
            <b-col sm="6">
              <b-card no-body class="card-body border">
                <div class="d-xl-flex justify-content-between align-items-center">
                  <div class="hstack gap-2 mb-2 mb-xl-0">
                    <div class="avatar flex-shrink-0">
                      <img class="avatar-img rounded-circle" :src="avatar08" alt="avatar">
                    </div>
                    <div>
                      <b-card-title tag="h6" class="b-card-title mb-0"><a href="#">Dennis Barrett</a></b-card-title>
                      <small>2.5M followers</small>
                    </div>
                  </div>
                  <b-button size="sm" variant="dark" class="mb-0">Know more</b-button>
                </div>
              </b-card>
            </b-col>

            <b-col sm="6">
              <b-card no-body class="card-body border">
                <div class="d-xl-flex justify-content-between align-items-center">
                  <div class="hstack gap-2 mb-2 mb-xl-0">
                    <div class="avatar flex-shrink-0">
                      <img class="avatar-img rounded-circle" :src="avatar01" alt="avatar">
                    </div>
                    <div>
                      <b-card-title tag="h6" class="mb-0"><a href="#">Jacqueline Miller</a></b-card-title>
                      <small>40K followers</small>
                    </div>
                  </div>

                  <b-button variant="dark" size="sm" class="mb-0">Know more</b-button>
                </div>
              </b-card>
            </b-col>
          </b-row>

          <h4 class="mt-5 mb-0">Event Schedule</h4>
          <p>Understand that theory is important to build a solid foundation, we understand that theory alone</p>

          <b-accordion class="accordion-icon accordion-active-dark">
            <template v-for="(item, idx) in scheduleList" :key="idx">
              <b-accordion-item button-class="fw-bold rounded pe-5" header-class="font-base" header-tag="h6"
                body-class="p-0" class="mb-3" :visible="!idx">
                <template #title>
                  Day-{{ idx + 1 }}
                  <span class="fw-normal ms-0 ms-sm-2">({{ item.date }})</span>
                </template>
                <template v-for="(event, idx) in item.events" :key="idx">
                  <hr class="my-0" v-if="idx">
                  <div class="d-flex align-items-center p-3" v-if="event.avatar">
                    <div class="avatar avatar-sm flex-shrink-0">
                      <img class="avatar-img rounded-circle" :src="event.avatar" alt="avatar">
                    </div>
                    <div class="ms-2">
                      <h6 class="mb-0 fw-normal"><a href="#">{{ event.title }}<span>{{ ' ' }}({{ event.time }})</span></a></h6>

                      <p class="small mb-0">
                        by
                        <template v-for="(speaker, idx) in event.speakers" :key="idx">
                          {{ idx ? ' and' : '' }}
                          <a href="#" class="fw-bold text-body text-primary-hover">
                            {{ speaker.name }}
                          </a>
                          {{ speaker.role }}
                        </template>
                      </p>
                    </div>
                  </div>
                  <div class="text-center p-3" v-else>
                    <h6 class="mb-0 fw-normal">
                      <BIconClock />
                      {{ event.title }}
                      <span>({{ event.time }})</span>
                    </h6>
                  </div>
                </template>
              </b-accordion-item>
            </template>
          </b-accordion>
          <b-card no-body class="card-body bg-light p-4 mt-5">
            <b-row class="g-2">
              <b-col sm="4">
                <div class="d-flex">
                  <BIconGlobe class="fs-4" />
                  <div class="ms-3">
                    <h5 class="mb-0">125</h5>
                    <p class="mb-0">Visitors</p>
                  </div>
                </div>
              </b-col>
              <b-col sm="4">
                <div class="d-flex">
                  <BIconPersonPlus class="fs-4" />
                  <div class="ms-3">
                    <h5 class="mb-0">356</h5>
                    <p class="mb-0">Registered</p>
                  </div>
                </div>
              </b-col>
              <b-col sm="4">
                <div class="d-flex">
                  <BIconPeople class="fs-4" />
                  <div class="ms-3">
                    <h5 class="mb-0">350</h5>
                    <p class="mb-0">Attendance</p>
                  </div>
                </div>
              </b-col>
            </b-row>
          </b-card>
        </b-col>

        <b-col lg="4" class="order-1 order-lg-2">
          <b-card no-body class="card-body shadow">
            <a class="btn btn-primary w-100" href="#"> Buy ticket </a>
            <div class="mt-4">
              <ul class="list-unstyled mb-4">
                <li class="d-flex justify-content-between mb-3"> <span class="w-150px">Ticket Price:</span>
                  <h6 class="text-end mb-0"> {{ currency }}210.00 </h6>
                </li>
                <li class="d-flex justify-content-between mb-3"> <span class="w-150px">Entry fees:</span>
                  <h6 class="text-end mb-0"> {{ currency }}1 per ticket </h6>
                </li>
                <li class="d-flex justify-content-between mb-3"> <span class="w-150px">Address:</span>
                  <h6 class="text-end mb-0"> 750 Sing Sing Rd, Horseheads, NY, 14845 </h6>
                </li>
              </ul>
              <iframe class="w-100 d-block rounded-bottom" height="230"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.9663095343008!2d-74.00425878428698!3d40.74076684379132!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259bf5c1654f3%3A0xc80f9cfce5383d5d!2sGoogle!5e0!3m2!1sen!2sin!4v1586000412513!5m2!1sen!2sin"
                style="border:0;" aria-hidden="false" tabindex="0"></iframe>
            </div>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>
<script setup lang="ts">
import { currency } from '@/helpers/constants';
import { scheduleList } from '@/views/pages/event-detail/components/data';
import { BIconGeoAltFill, BIconCalendarFill, BIconClock, BIconGlobe, BIconPersonPlus, BIconPeople } from 'bootstrap-icons-vue';
import avatar08 from '@/assets/images/avatar/08.jpg';
import avatar01 from '@/assets/images/avatar/01.jpg';
</script>