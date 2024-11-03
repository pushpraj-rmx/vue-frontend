<template>
  <div id="step-3" role="tabpanel" class="content fade" aria-labelledby="steppertrigger3">
    <h4>Curriculum</h4>
    <hr>
    <b-row>
      <div class="d-sm-flex justify-content-sm-between align-items-center mb-3">
        <h5 class="mb-2 mb-sm-0">Upload Lecture</h5>
        <a href="#" class="btn btn-sm btn-primary-soft mb-0" data-bs-toggle="modal" data-bs-target="#addLecture"
          @click="showModal = !showModal">
          <BIconPlusCircle class="me-2" />
          Add Lecture
        </a>
      </div>

      <b-accordion class="accordion-icon accordion-bg-light" id="accordionExample2">
        <b-accordion-item title="Introduction of Digital Marketing"
          button-class="fw-bold rounded d-inline-block collapsed d-block pe-5" header-tag="h6" body-class="mt-3"
          header-class="font-base" class="mb-3" visible>
          <div class="d-flex justify-content-between align-items-center">
            <div class="position-relative">
              <a href="#" class="btn btn-danger-soft btn-round btn-sm mb-0 stretched-link position-static">
                <font-awesome-icon :icon="faPlay" />
              </a>
              <span class="ms-2 mb-0 h6 fw-light">Introduction</span>
            </div>
            <div>
              <a href="#" class="btn btn-sm btn-success-soft btn-round me-1 mb-1 mb-md-0">
                <font-awesome-icon :icon="faEdit" class="fa-fw" />
              </a>
              <b-button :variant="null" size="sm" class="btn-danger-soft btn-round mb-0">
                <font-awesome-icon :icon="faTimes" class="fa-fw" />
              </b-button>
            </div>
          </div>
          <hr>

          <div class="d-flex justify-content-between align-items-center">
            <div class="position-relative">
              <a href="#" class="btn btn-danger-soft btn-round btn-sm mb-0 stretched-link position-static">
                <font-awesome-icon :icon="faPlay" />
              </a>
              <span class="ms-2 mb-0 h6 fw-light">What is Digital Marketing</span>
            </div>
            <div>
              <a href="#" class="btn btn-sm btn-success-soft btn-round me-1 mb-1 mb-md-0">
                <font-awesome-icon :icon="faEdit" class="fa-fw" />
              </a>
              <b-button :variant="null" size="sm" class="btn-danger-soft btn-round mb-0">
                <font-awesome-icon :icon="faTimes" class="fa-fw" />
              </b-button>
            </div>
          </div>
          <hr>

          <a href="#" class="btn btn-sm btn-dark mb-0" data-bs-toggle="modal" data-bs-target="#addTopic"
            @click="showModal1 = !showModal1">
            <BIconPlusCircle class="me-2" />
            Add topic
          </a>
        </b-accordion-item>
        <b-accordion-item title="Customer Life cycle"
          button-class="fw-bold rounded d-inline-block collapsed d-block pe-5" header-tag="h6" body-class="mt-3"
          header-class="font-base" class="mb-3">
          <a href="#" class="btn btn-sm btn-dark mb-0" data-bs-toggle="modal" data-bs-target="#addTopic"
            @click="showModal1 = !showModal1">
            <BIconPlusCircle class="me-2" />
            Add topic
          </a>
        </b-accordion-item>
        <b-accordion-item title="How much should I offer the sellers?"
          button-class="fw-bold rounded d-inline-block collapsed d-block pe-5" header-tag="h6" body-class="mt-3"
          header-class="font-base" class="mb-3">
          <a href="#" class="btn btn-sm btn-dark mb-0" data-bs-toggle="modal" data-bs-target="#addTopic"
            @click="showModal1 = !showModal1">
            <BIconPlusCircle class="me-2" />
            Add topic
          </a>
        </b-accordion-item>
      </b-accordion>
      <div class="d-flex justify-content-between">
        <b-button variant="secondary" class="prev-btn mb-0" @click="previousPage">Previous</b-button>
        <b-button variant="primary" class="next-btn mb-0" @click="nextPage">Next</b-button>
      </div>
    </b-row>
  </div>

  <b-modal v-model="showModal" title="Add Lecture" header-class="bg-dark" title-class="text-white"
    ok-title="Save Lecture" ok-variant="success" cancel-title="Close" cancel-variant="danger-soft">
    <b-form class="row text-start g-3">
      <b-col cols="12">
        <b-form-group>
          <template #label>
            Course name <span class="text-danger">*</span>
          </template>
          <b-form-input type="text" placeholder="Enter course name" />
        </b-form-group>
      </b-col>
    </b-form>
  </b-modal>

  <b-modal v-model="showModal1" title="Add topic" header-class="bg-dark" title-class="text-white" ok-title="Save Topic"
    ok-variant="success" cancel-title="Close" cancel-variant="danger-soft">
    <b-form class="row text-start g-3">
      <b-col md="6">
        <b-form-group label="Topic name">
          <b-form-input type="text" placeholder="Enter topic name" />
        </b-form-group>
      </b-col>
      <b-col md="6">
        <b-form-group label="Video link">
          <b-form-input type="text" placeholder="Enter Video link" />
        </b-form-group>
      </b-col>
      <b-col cols="12" class="mt-3">
        <b-form-group label="Course description">
          <b-form-textarea rows="4" />
        </b-form-group>
      </b-col>
      <b-col cols="6" class="mt-3">
        <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
          <input type="radio" class="btn-check" name="options" id="option1" checked>
          <label class="btn btn-sm btn-light btn-primary-soft-check border-0 m-0" for="option1">Free</label>
          <input type="radio" class="btn-check" name="options" id="option2">
          <label class="btn btn-sm btn-light btn-primary-soft-check border-0 m-0" for="option2">Premium</label>
        </div>
      </b-col>
    </b-form>
  </b-modal>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import { faPlay, faTimes } from '@fortawesome/free-solid-svg-icons';
import { faEdit } from '@fortawesome/free-regular-svg-icons';
import { BIconPlusCircle } from 'bootstrap-icons-vue';

const showModal = ref(false);
const showModal1 = ref(false);

defineProps(['nextPage', 'previousPage'])
</script>