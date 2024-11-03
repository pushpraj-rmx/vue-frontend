<template>
  <AdminLayout>
    <b-row class="mb-3">
      <b-col cols="12" class="d-sm-flex justify-content-between align-items-center">
        <h1 class="h3 mb-2 mb-sm-0">Web design <span class="badge bg-orange bg-opacity-10 text-orange">245</span></h1>
        <router-link :to="{ name: 'instructor.create.course' }" class="btn btn-sm btn-primary mb-0">Create a
          Course</router-link>
      </b-col>
    </b-row>
    <b-card no-body class="bg-transparent border">
      <b-card-header class="bg-light border-bottom">
        <b-row class="g-3 align-items-center justify-content-between">
          <b-col md="8">
            <b-form class="rounded position-relative">
              <b-form-input class="bg-body" type="search" placeholder="Search" />
              <button
                class="bg-transparent p-2 position-absolute top-50 end-0 translate-middle-y border-0 text-primary-hover text-reset"
                type="submit">
                <font-awesome-icon :icon="faSearch" class="fs-6" />
              </button>
            </b-form>
          </b-col>
          <b-col md="3">
            <b-form>
              <ChoicesSelect id="sort-by" class="border-0 z-index-9">
                <option value="">Sort by</option>
                <option>Newest</option>
                <option>Oldest</option>
                <option>Accepted</option>
                <option>Rejected</option>
              </ChoicesSelect>
            </b-form>
          </b-col>
        </b-row>
      </b-card-header>

      <b-card-body>
        <div class="table-responsive border-0 rounded-3 mb-0">
          <table class="table table-dark-gray align-middle p-4 mb-0 table-hover">
            <thead>
              <tr>
                <th scope="col" class="border-0 rounded-start">Course Name</th>
                <th scope="col" class="border-0">Instructor</th>
                <th scope="col" class="border-0">Rating</th>
                <th scope="col" class="border-0">Enrolled</th>
                <th scope="col" class="border-0 rounded-end">Action</th>
              </tr>
            </thead>

            <tbody>

              <tr v-for="(item, idx) in categoryList" :key="idx">
                <td>
                  <div class="d-flex align-items-center position-relative">
                    <div class="w-60px">
                      <img :src="item.image" class="rounded" alt="">
                    </div>
                    <h6 class="table-responsive-title mb-0 ms-2">
                      <a href="#" class="stretched-link">{{ item.title }}</a>
                    </h6>
                  </div>
                </td>

                <td>
                  <div class="d-flex align-items-center">
                    <div class="avatar avatar-xs flex-shrink-0">
                      <img class="avatar-img rounded-circle" :src="item.instructor.avatar" alt="avatar">
                    </div>
                    <div class="ms-2">
                      <h6 class="mb-0 fw-light">{{ item.instructor.name }}</h6>
                    </div>
                  </div>
                </td>

                <td>
                  <ul class="list-inline mb-0 hstack gap-1" v-if="item.rating">
                    <li className="list-inline-item me-0 small"
                      v-for="(_star, idx) in Array(Math.floor(item.rating)).fill(0)" :key="idx">
                      <font-awesome-icon :icon="faStar" class="text-warning" />
                    </li>
                    <li className="list-inline-item me-0 small" v-if="!Number.isInteger(item.rating)">
                      <font-awesome-icon :icon="faStarHalfAlt" class="text-warning" />
                    </li>
                    <li className="list-inline-item me-0 small"
                      v-for="(_star, idx) in item.rating < 5 && Array(5 - Math.ceil(item.rating)).fill(0)" :key="idx">
                      <font-awesome-icon :icon="faStarR" class="text-warning" />
                    </li>
                  </ul>
                </td>

                <td>{{ item.students }}</td>

                <td>
                  <a href="#" class="btn btn-sm btn-success me-1 mb-1 mb-md-0">Edit</a>{{ ' ' }}
                  <b-button variant="danger" size="sm" class="mb-0">Delete</b-button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </b-card-body>

      <b-card-footer class="bg-transparent pt-0">
        <div class="d-sm-flex justify-content-sm-between align-items-sm-center">
          <p class="mb-0 text-center text-sm-start">Showing 1 to 8 of 20 entries</p>
          <nav class="d-flex justify-content-center mb-0" aria-label="navigation">
            <ul class="pagination pagination-sm pagination-primary-soft d-inline-block d-md-flex rounded mb-0">
              <li class="page-item mb-0"><a class="page-link" href="#" tabindex="-1"><font-awesome-icon
                    :icon="faAngleLeft" /></a></li>
              <li class="page-item mb-0"><a class="page-link" href="#">1</a></li>
              <li class="page-item mb-0 active"><a class="page-link" href="#">2</a></li>
              <li class="page-item mb-0"><a class="page-link" href="#">3</a></li>
              <li class="page-item mb-0"><a class="page-link" href="#"><font-awesome-icon :icon="faAngleRight" /> </a>
              </li>
            </ul>
          </nav>
        </div>
      </b-card-footer>
    </b-card>
  </AdminLayout>
</template>
<script setup lang="ts">
import AdminLayout from '@/layouts/AdminLayout.vue';
import { categoryList } from '@/views/admin/courses/category/components/data';
import { faStar, faAngleLeft, faAngleRight, faSearch, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarR } from '@fortawesome/free-regular-svg-icons';
</script>