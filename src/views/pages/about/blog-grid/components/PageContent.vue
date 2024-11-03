<template>
  <section class="position-relative pt-0 pt-lg-5">
    <b-container>
      <b-row class="g-4">
        <b-col sm="6" lg="4" xl="3" v-for="(item, idx) in gridList" :key="idx">
          <BlogCard :item="item" />
        </b-col>
      </b-row>

      <nav class="d-flex justify-content-center mt-5" aria-label="navigation">
        <ul class="pagination pagination-primary-soft rounded mb-0">
          <li class="page-item mb-0">
            <a class="page-link" href="#" tabindex="-1">
              <font-awesome-icon :icon="faAngleDoubleLeft" />
            </a>
          </li>
          <li class="page-item mb-0"><a class="page-link" href="#">1</a></li>
          <li class="page-item mb-0 active"><a class="page-link" href="#">2</a></li>
          <li class="page-item mb-0"><a class="page-link" href="#">..</a></li>
          <li class="page-item mb-0"><a class="page-link" href="#">6</a></li>
          <li class="page-item mb-0">
            <a class="page-link" href="#">
              <font-awesome-icon :icon="faAngleDoubleRight" />
            </a>
          </li>
        </ul>
      </nav>
    </b-container>
  </section>
</template>
<script setup lang="ts">
import { faAngleDoubleRight, faAngleDoubleLeft } from '@fortawesome/free-solid-svg-icons';

import { gridList } from '@/views/pages/about/blog-grid/components/data';
import BlogCard from '@/views/pages/about/blog-grid/components/BlogCard.vue';
</script>