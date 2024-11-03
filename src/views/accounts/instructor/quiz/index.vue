<template>
  <InstructorLayout :toggleModal="toggleModal" isQuizButton>
    <b-col xl="9">
      <b-card no-body class="border bg-transparent rounded-3">
        <b-card-header class="bg-transparent border-bottom px-3">
          <b-row class="g-4 align-items-center">
            <b-col md="2">
              <img :src="courses01" class="rounded-2" alt="card img">
            </b-col>
            <b-col md="10">
              <b-card-title tag="h3" class="mb-0"><a href="#">The Complete Digital Marketing Course - 12 Courses in
                  1</a></b-card-title>
            </b-col>
          </b-row>
        </b-card-header>
        <b-card-body class="p-4">
          <b-accordion class="accordion-icon accordion-bg-light">
            <template v-for="(item, idx) in courses" :key="idx">
              <b-accordion-item button-class="rounded" header-tag="h6" body-class="mt-3" class="mb-3" :visible="!idx">
                <template #title>
                  <span class="text-secondary fw-bold me-3">0{{ idx + 1 }}</span>
                  <span class="fw-bold">{{ item.question }}</span>
                </template>
                <p class="mb-3"><b class="text-dark">A</b> We have cybersecurity insurance coverage</p>
                <p class="mb-3"><b class="text-dark">B</b> Our dedicated staff will protect us</p>
                <p class="mb-3"><b class="text-dark">C</b> We give regular training for best practices</p>
                <p class="mb-3"><b class="text-dark">D</b> Third-party vendor protection</p>
                <a href="#" class="btn btn-sm btn-success-soft mb-0 me-1" data-bs-toggle="modal"
                  data-bs-target="#editQuestion" @click="toggleEditModal">
                  Edit
                </a>
                <b-button :variant="null" size="sm" class="btn-danger-soft mb-0">Delete</b-button>
              </b-accordion-item>
            </template>
          </b-accordion>
        </b-card-body>
      </b-card>
      <b-card no-body class="border bg-transparent rounded-3 mt-4">
        <b-card-header class="bg-transparent border-bottom">
          <h3 class="mb-0">Student quiz result</h3>
        </b-card-header>

        <b-card-body>
          <b-row class="g-3 align-items-center justify-content-between mb-4">
            <b-col md="8">
              <b-form class="rounded position-relative">
                <b-form-input class="pe-5 bg-transparent" type="search" placeholder="Search" />
                <button
                  class="bg-transparent p-2 position-absolute top-50 end-0 translate-middle-y border-0 text-primary-hover text-reset"
                  type="submit">
                  <font-awesome-icon :icon="faSearch" class="fs-6" />
                </button>
              </b-form>
            </b-col>

            <b-col md="3">
              <b-form>
                <ChoicesSelect id="sort-by" class="border-0 z-index-9 bg-transparent">
                  <option value="">Sort by</option>
                  <option>Free</option>
                  <option>Newest</option>
                  <option>Oldest</option>
                </ChoicesSelect>
              </b-form>
            </b-col>
          </b-row>
          <div class="table-responsive border-0">
            <table class="table table-dark-gray align-middle p-4 mb-0 table-hover">
              <thead>
                <tr>
                  <th scope="col" class="border-0 rounded-start">Student name</th>
                  <th scope="col" class="border-0">Course name</th>
                  <th scope="col" class="border-0">Date</th>
                  <th scope="col" class="border-0">Points</th>
                  <th scope="col" class="border-0 rounded-end">Action</th>
                </tr>
              </thead>

              <tbody>
                <tr v-for="(item, idx) in studentQuiz" :key="idx">
                  <td>
                    <div class="d-flex align-items-center">
                      <div class="avatar avatar-sm me-2">
                        <img :src="item.image" class="rounded" alt="">
                      </div>
                      <div>
                        <h6 class="mb-0"><a href="#">{{ item.name }}</a></h6>
                      </div>
                    </div>
                  </td>

                  <td>
                    <h6 class="table-responsive-title mt-2 mt-md-0 mb-0">
                      <a href="#">
                        {{ item.course }}
                      </a>
                    </h6>
                  </td>

                  <td>{{ item.date }}</td>

                  <td>{{ item.progress }}/500</td>

                  <td>
                    <a href="#" class="btn btn-success-soft btn-round mb-0" v-b-tooltip.hover.top="'Message'">
                      <font-awesome-icon :icon="faEnvelope" />
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div class="d-sm-flex justify-content-sm-between align-items-sm-center mt-4 mt-sm-3">
            <p class="mb-0 text-center text-sm-start">Showing 1 to 8 of 20 entries</p>
            <nav class="d-flex justify-content-center mb-0" aria-label="navigation">
              <ul class="pagination pagination-sm pagination-primary-soft d-inline-block d-md-flex rounded mb-0">
                <li class="page-item mb-0"><a class="page-link" href="#" tabindex="-1">
                    <font-awesome-icon :icon="faAngleLeft" />
                  </a>
                </li>
                <li class="page-item mb-0"><a class="page-link" href="#">1</a></li>
                <li class="page-item mb-0 active"><a class="page-link" href="#">2</a></li>
                <li class="page-item mb-0"><a class="page-link" href="#">3</a></li>
                <li class="page-item mb-0"><a class="page-link" href="#">
                    <font-awesome-icon :icon="faAngleRight" />
                  </a></li>
              </ul>
            </nav>
          </div>
        </b-card-body>
      </b-card>
    </b-col>
  </InstructorLayout>

  <b-modal v-model="showModal" :title="isAddModal ? 'Add New Quiz' : 'Edit Question'" header-class="bg-dark"
    title-class="text-white" :ok-title="isAddModal ? 'Add Quiz' : 'Save change'" ok-variant="success"
    cancel-title="Close" cancel-variant="danger-soft">
    <b-form class="row text-start g-3">
      <b-col cols="12">
        <b-form-group label="Question">
          <b-form-input type="text"
            :model-value="isAddModal ? ' ' : 'How do you protect your business against cyber-crime?'"
            placeholder="Write a question" />
        </b-form-group>
      </b-col>

      <b-col cols="6">
        <b-form-group label="Option 1">
          <b-form-input type="text" :model-value="isAddModal ? ' ' : 'We have cybersecurity insurance coverage'"
            placeholder="Write a option" />
        </b-form-group>
      </b-col>

      <b-col cols="6">
        <b-form-group label="Option 2">
          <b-form-input type="text" :model-value="isAddModal ? ' ' : 'Our dedicated staff will protect us'"
            placeholder="Write a option" />
        </b-form-group>
      </b-col>

      <b-col cols="6">
        <b-form-group label="Option 3">
          <b-form-input type="text" :model-value="isAddModal ? ' ' : 'We give regular training for best practices'"
            placeholder="Write a option" />
        </b-form-group>
      </b-col>

      <b-col cols="6">
        <b-form-group label="Option 4">
          <b-form-input type="text" :model-value="isAddModal ? ' ' : 'Third-party vendor protection'"
            placeholder="Write a option" />
        </b-form-group>
      </b-col>
    </b-form>
  </b-modal>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import InstructorLayout from '@/layouts/InstructorLayout.vue';

import { courses, studentQuiz } from '@/views/accounts/instructor/quiz/components/data';
import courses01 from '@/assets/images/courses/4by3/01.jpg';
import { faSearch, faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

const showModal = ref(false);
const isAddModal = ref(false);

const toggleModal = () => {
  isAddModal.value = true;
  showModal.value = !showModal.value;
};

const toggleEditModal = () => {
  isAddModal.value = false;
  showModal.value = !showModal.value;
};

</script>