<template>
  <b-row class="g-4 mb-4">
    <b-col md="6" xxl="3">
      <b-card no-body class="card-body bg-warning bg-opacity-15 p-4 h-100">
        <div class="d-flex justify-content-between align-items-center">
          <div>
            <NumberAnimation :from="0" :to="1958" :duration="3" :format="format" :delay="0.5"
              class="purecounter mb-0 fw-bold h2" /> <br />
            <span class="mb-0 h6 fw-light">Completed Courses</span>
          </div>
          <div class="icon-lg rounded-circle bg-warning text-white mb-0">
            <font-awesome-icon :icon="faTv" class="fa-fw" />
          </div>
        </div>
      </b-card>
    </b-col>

    <b-col md="6" xxl="3">
      <b-card no-body class="card-body bg-purple bg-opacity-10 p-4 h-100">
        <div class="d-flex justify-content-between align-items-center">
          <div>
            <NumberAnimation :from="0" :to="1600" :duration="3" :format="format" :delay="0.5"
              class="purecounter mb-0 fw-bold h2" /> <br />
            <span class="mb-0 h6 fw-light">Enrolled Courses</span>
          </div>
          <div class="icon-lg rounded-circle bg-purple text-white mb-0">
            <font-awesome-icon :icon="faUserTie" class="fa-fw" />
          </div>
        </div>
      </b-card>
    </b-col>

    <b-col md="6" xxl="3">
      <b-card no-body class="card-body bg-primary bg-opacity-10 p-4 h-100">
        <div class="d-flex justify-content-between align-items-center">
          <div>
            <NumberAnimation :from="0" :to="1235" :duration="3" :format="format" :delay="0.5"
              class="purecounter mb-0 fw-bold h2" /> <br />
            <span class="mb-0 h6 fw-light">Course In Progress</span>
          </div>
          <div class="icon-lg rounded-circle bg-primary text-white mb-0">
            <font-awesome-icon :icon="faUserGraduate" class="fa-fw" />
          </div>
        </div>
      </b-card>
    </b-col>

    <b-col md="6" xxl="3">
      <b-card no-body class="card-body bg-success bg-opacity-10 p-4 h-100">
        <div class="d-flex justify-content-between align-items-center">
          <div>
            <div class="d-flex">
              <NumberAnimation :from="0" :to="845" :duration="3" :format="format" :delay="0.5"
                class="purecounter mb-0 fw-bold h2" />
              <span class="mb-0 h2 ms-1">hrs</span>
            </div>
            <span class="mb-0 h6 fw-light">Total Watch Time</span>
          </div>
          <div class="icon-lg rounded-circle bg-success text-white mb-0 flex-centered">
            <BIconStopwatchFill class="fa-fw" />
          </div>
        </div>
      </b-card>
    </b-col>
  </b-row>
</template>
<script setup lang="ts">
import NumberAnimation from "vue-number-animation";
import { faTv, faUserTie, faUserGraduate } from '@fortawesome/free-solid-svg-icons';
import { BIconStopwatchFill } from 'bootstrap-icons-vue';

const format = (value: string) => {
  return Number.parseInt(value);
};
</script>