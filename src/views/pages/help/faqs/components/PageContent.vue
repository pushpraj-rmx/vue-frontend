<template>
  <section class="pt-5 pb-0 pb-lg-5">
    <b-container>
      <b-row class="g-4 g-md-5">
        <b-col lg="8">
          <h3 class="mb-4">Frequently Asked Questions</h3>
          <b-accordion class="accordion-icon accordion-bg-light" id="accordionExample2">
            <template v-for="(item, idx) in faqsList" :key="idx">
              <b-accordion-item :title="item.question" button-class="fw-bold rounded d-inline-block"
                header-class="font-base" header-tag="h6" body-class="mt-3" class="mb-3" :visible="!idx">
                <span v-html="item.answer" />
              </b-accordion-item>
            </template>
          </b-accordion>
        </b-col>

        <b-col lg="4">
          <b-row class="mb-5 mb-lg-0">
            <b-col cols="12" sm="6" lg="12">
              <div class="mb-4">
                <div
                  class="d-flex justify-content-between align-items-center bg-info bg-opacity-10 rounded p-2 position-relative mb-3">
                  <h6 class="m-0 text-info">Last Question</h6>
                  <a href="#" class="badge bg-info stretched-link">2D ago</a>
                </div>
                <div
                  class="d-flex justify-content-between align-items-center bg-danger bg-opacity-10 rounded p-2 position-relative mb-3">
                  <h6 class="m-0 text-danger">Total Question</h6>
                  <a href="#" class="badge bg-danger stretched-link">15,525</a>
                </div>
                <div
                  class="d-flex justify-content-between align-items-center bg-success bg-opacity-10 rounded p-2 position-relative mb-3">
                  <h6 class="m-0 text-success">Answer</h6>
                  <a href="#" class="badge bg-success stretched-link">12536</a>
                </div>
              </div>
              <b-card no-body class="card-body shadow p-4 mb-4">
                <h4 class="mb-3">Related Topic</h4>
                <template v-for="(item, idx) in relatedTopic" :key="idx">
                  <div class="d-flex justify-content-between align-items-center"
                    :class="!(idx === relatedTopic.length - 1) && 'mb-2'">
                    <a href="#" class="h6 fw-light">
                      <font-awesome-icon :icon="faCaretRight" class="text-orange me-1" />
                      {{ item.title }}
                    </a>
                    <span class="small">({{ item.topics }})</span>
                  </div>
                </template>
              </b-card>
            </b-col>

            <b-col cols="12" sm="6" lg="12">
              <b-card no-body class="card-body shadow p-4">
                <h4 class="mb-3">Popular Tags</h4>
                <ul class="list-inline mb-0">
                  <li class="list-inline-item" v-for="(item, idx) in popularTags" :key="idx">
                    <a class="btn btn-outline-light btn-sm" href="#">{{ item }}</a>
                  </li>
                </ul>
              </b-card>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>
<script setup lang="ts">
import { faqsList } from '@/views/pages/help/faqs/components/data';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';

const relatedTopic = [
  { title: 'Business', topics: '21' },
  { title: 'Development', topics: '86' },
  { title: 'Design', topics: '92' },
  { title: 'Marketing', topics: '62' },
  { title: 'Technology', topics: '31' },
  { title: 'Course Taking', topics: '06' },
  { title: 'Getting Started', topics: '28' },
  { title: 'Mobile', topics: '18' },
  { title: 'Payment Option', topics: '32' },
  { title: 'Account & Profile', topics: '56' },
  { title: 'Course taking', topics: '45' }
];

const popularTags = ['blog', 'business', 'theme', 'bootstrap', 'data science', 'web development', 'tips', 'machine learning'];
</script>