<template>
  <div id="step-4" role="tabpanel" class="content fade" aria-labelledby="steppertrigger4">
    <h4>Additional information</h4>
    <hr>
    <b-row class="g-4">
      <b-col cols="12">
        <div class="bg-light border rounded p-2 p-sm-4">
          <div class="d-sm-flex justify-content-sm-between align-items-center mb-3">
            <h5 class="mb-2 mb-sm-0">Upload FAQs</h5>
            <a href="#" class="btn btn-sm btn-primary-soft mb-0" data-bs-toggle="modal" data-bs-target="#addQuestion"
              @click="showModal = !showModal">
              <BIconPlusCircle class="me-2" />
              Add Question
            </a>
          </div>

          <b-row class="g-4">
            <b-col cols="12">
              <div class="bg-body p-3 p-sm-4 border rounded">
                <div class="d-sm-flex justify-content-sm-between align-items-center mb-2">
                  <h6 class="mb-0">How Digital Marketing Work?</h6>
                  <div class="align-middle">
                    <a href="#" class="btn btn-sm btn-success-soft btn-round me-1 mb-1 mb-md-0">
                      <font-awesome-icon :icon="faEdit" class="fa-fw" />
                    </a>
                    <b-button :variant="null" size="sm" class="btn-danger-soft btn-round mb-0">
                      <font-awesome-icon :icon="faTimes" class="fa-fw" />
                    </b-button>
                  </div>
                </div>
                <p>
                  Comfort reached gay perhaps chamber his six detract besides add. Moonlight newspaper
                  up its enjoyment agreeable depending. Timed voice share led him to widen noisy young.
                  At weddings believed laughing although the material does the exercise of. Up attempt
                  offered ye civilly so sitting to. She new course gets living within Elinor joy. She
                  rapturous suffering concealed.
                </p>
              </div>
            </b-col>

            <b-col cols="12">
              <div class="bg-body p-4 border rounded">
                <div class="d-sm-flex justify-content-sm-between align-items-center mb-2">
                  <h6 class="mb-0">How Digital Marketing Work?</h6>
                  <div class="align-middle">
                    <a href="#" class="btn btn-sm btn-success-soft btn-round me-1 mb-1 mb-md-0">
                      <font-awesome-icon :icon="faEdit" class="fa-fw" />
                    </a>
                    <b-button :variant="null" size="sm" class="btn-danger-soft btn-round mb-0">
                      <font-awesome-icon :icon="faTimes" class="fa-fw" />
                    </b-button>
                  </div>
                </div>
                <p>
                  Comfort reached gay perhaps chamber his six detract besides add. Moonlight newspaper
                  up its enjoyment agreeable depending. Timed voice share led him to widen noisy young.
                  At weddings believed laughing although the material does the exercise of. Up attempt
                  offered ye civilly so sitting to. She new course gets living within Elinor joy. She
                  rapturous suffering concealed.
                </p>
              </div>
            </b-col>
          </b-row>
        </div>
      </b-col>

      <b-col cols="12">
        <div class="bg-light border rounded p-4">
          <h5 class="mb-0">Tags</h5>
          <div class="mt-3">
            <input type="text" class="form-control js-choice mb-0" data-placeholder="true"
              data-placeholder-Val="Enter tags" data-max-item-count="14" data-remove-item-button="true">
            <span class="small">
              Maximum of 14 keywords. Keywords should all be in lowercase. e.g.
              javascript, react, marketing
            </span>
          </div>
        </div>
      </b-col>

      <b-col cols="12">
        <div class="bg-light border rounded p-4">
          <h5 class="mb-0">Message to a reviewer</h5>

          <div class="mt-3">
            <b-form-textarea placeholder="Write a message" rows="4" max-rows="6" />
            <div class="form-check mb-0 mt-2">
              <input type="checkbox" class="form-check-input" id="exampleCheck1">
              <label class="form-check-label" for="exampleCheck1">
                Any images, sounds, or other assets that are not my own work, have been appropriately
                licensed for use in the file preview or main course. Other than these items, this work
                is entirely my own and I have full rights to sell it here.
              </label>
            </div>
          </div>
        </div>
      </b-col>

      <div class="d-md-flex justify-content-between align-items-start mt-4">
        <b-button variant="secondary" class="prev-btn mb-2 mb-md-0" @click="previousPage">Previous</b-button>
        <b-button variant="light" class="me-auto ms-md-2 mb-2 mb-md-0">Preview Course</b-button>
        <div class="text-md-end">
          <router-link :to="{name: 'instructor.course.added'}" class="btn btn-success mb-2 mb-sm-0">
            Submit a Course
          </router-link>
          <p class="mb-0 small mt-1">
            Once you click "Submit a Course", your course will be uploaded
            and marked as pending for review.
          </p>
        </div>
      </div>
    </b-row>
  </div>

  <b-modal v-model="showModal" title="Add FAQ" header-class="bg-dark" title-class="text-white" ok-title="Save Lecture"
    ok-variant="success" cancel-title="Close" cancel-variant="danger-soft">
    <b-form class="row text-start g-3">
      <b-col cols="12">
        <b-form-group label="Question">
					<b-form-input type="text" placeholder="Write a question" />
				</b-form-group>
      </b-col>
      <b-col cols="12" class=" mt-3">
        <b-form-group label="Answer">
					<b-form-textarea rows="4" placeholder="Write a answer" />
				</b-form-group>
      </b-col>
    </b-form>
  </b-modal>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { faEdit } from '@fortawesome/free-regular-svg-icons';
import { BIconPlusCircle } from 'bootstrap-icons-vue';

const showModal = ref(false);
defineProps(['previousPage'])
</script>