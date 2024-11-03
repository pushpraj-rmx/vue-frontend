<template>
  <section class="position-relative pt-0">
    <b-container>
      <b-row class="g-4 filter-container overflow-hidden" data-isotope='{"layoutMode": "masonry"}'>
        <b-col sm="6" lg="4" class="grid-item">
          <b-card no-body class="bg-transparent">
            <div class="overflow-hidden rounded-3">
              <img :src="event02" class="card-img" alt="course img">
              <div class="bg-overlay bg-dark opacity-4"></div>
              <div class="card-img-overlay d-flex align-items-start p-3">
                <a href="#" class="badge text-bg-danger">Student life</a>
              </div>
            </div>

            <b-card-body class="px-3">
              <b-card-title tag="h5"><a href="#">Student Loan Survey: Many Owe {{ currency }}50K-plus</a></b-card-title>
              <p class="text-truncate-2">Affronting imprudence do he he everything. Offered chiefly farther of my no
                colonel shyness. Such on help ye some door if in. Laughter proposal laughing any son law consider.
                Needed except up piqued an. </p>
              <div class="d-flex justify-content-between">
                <h6 class="mb-0"><a href="#">Frances Guerrero</a></h6>
                <span class="small">30M Ago</span>
              </div>
            </b-card-body>
          </b-card>
        </b-col>

        <b-col sm="6" lg="4" class="grid-item">
          <b-card no-body class="bg-light p-3">
            <b-card-body>
              <a href="#" class="badge text-bg-success mb-2">Research</a>
              <b-card-title tag="h5"><a href="#">How to make a college list</a></b-card-title>
              <p>Prospective students should start broadly and then narrow their list down to colleges that best fit
                their needs, experts say. Yet remarkably appearance gets him his projection. </p>
              <div class="d-flex justify-content-between">
                <h6 class="mb-0"><a href="#">Louis Crawford</a></h6>
                <span class="small">12H Ago</span>
              </div>
            </b-card-body>
          </b-card>
        </b-col>

        <b-col sm="6" lg="4" class="grid-item">
          <b-card no-body class="h-100 bg-transparent">
            <div class="card-img-top rounded-3 overflow-hidden position-relative hover-overlay-top">
              <div class="ratio ratio-16x9">
                <iframe width="620" height="347" src="https://www.youtube.com/embed/9No-FiEInLA"
                  allow="autoplay; encrypted-media" allowfullscreen></iframe>
              </div>
            </div>
            <b-card-body class="px-3">
              <a href="#" class="badge text-bg-purple mb-2">Travel</a>
              <b-card-title tag="h5"><a href="#">Never underestimate the influence of Eduport</a></b-card-title>
              <p class="text-truncate-2">Prospective students should start broadly and then narrow their list </p>
              <div class="d-flex justify-content-between">
                <h6 class="mb-0"><a href="#">Joan Wallace</a></h6>
                <span class="small">5D Ago</span>
              </div>
            </b-card-body>
          </b-card>
        </b-col>

        <b-col sm="6" lg="4" class="grid-item">
          <b-card no-body class="bg-transparent">
            <div class="overflow-hidden rounded-3">
              <img :src="event03" class="card-img-top" alt="course img">
              <div class="bg-overlay bg-dark opacity-4"></div>
              <div class="card-img-overlay d-flex align-items-start p-3">
                <a href="#" class="badge text-bg-warning">Lifestyle</a>
              </div>
            </div>

            <b-card-body class="px-3">
              <b-card-title tag="h5"><a href="#">Covid-19 and the college experienced</a></b-card-title>
              <p>Rooms oh fully taken by worse do. Points afraid but may end law. Points afraid but may end law.
              </p>
              <div class="d-flex justify-content-between">
                <h6 class="mb-0"><a href="#">Amanda Reed</a></h6>
                <span class="small">July 21, 2021</span>
              </div>
            </b-card-body>
          </b-card>
        </b-col>

        <b-col sm="6" lg="4" class="grid-item">
          <b-card no-body class="bg-dark p-3"
            :style="`background:url(${pattern05}) no-repeat center center; background-size:cover;`">
            <b-card-body>
              <a href="#" class="badge text-bg-warning mb-2">Lifestyle</a>
              <b-card-title tag="h5" class="text-primary-hover mb-1"><a href="#" class="text-white">Student Success</a></b-card-title>
              <span class="text-white">Louis Crawford</span>
              <ul class="list-inline mb-0 mt-3">
                <li class="list-inline-item text-white me-3 mb-1 mb-sm-0">Aug 26, 2021</li>{{ ' ' }}
                <li class="list-inline-item text-primary-hover me-3 mb-1 mb-xl-0">
                  <a href="#" class="text-white">
                    <BIconHeart class="me-1" />10
                  </a>
                </li>{{ ' ' }}
                <li class="list-inline-item text-primary-hover me-3 mb-1 mb-xl-0">
                  <a href="#" class="text-white">
                    <font-awesome-icon :icon="faComment" class="me-1" />5
                  </a>
                </li>{{ ' ' }}
                <li class="list-inline-item text-primary-hover me-3 mb-1 mb-xl-0">
                  <a href="#" class="text-white">
                    <font-awesome-icon :icon="faTag" class="me-2" />Business
                  </a>
                </li>
              </ul>
            </b-card-body>
          </b-card>
        </b-col>

        <b-col sm="6" lg="4" class="grid-item">
          <b-card no-body class="bg-info p-3"
            :style="`background:url(${pattern03}) no-repeat center center; background-size:cover;`">
            <b-card-body>
              <b-card-title tag="h5" class="text-primary-hover mb-1">
                <a href="#" class="text-white">
                  Choose your direction
                </a>
              </b-card-title>
              <p class="text-white mb-0">{{ developedByLink }}</p>
            </b-card-body>
          </b-card>
        </b-col>

        <b-col sm="6" lg="4" class="grid-item">
          <b-card no-body class="h-100 bg-transparent">
            <div class="card-img-top rounded overflow-hidden position-relative hover-overlay-top">
              <div class="ratio ratio-16x9">
                <iframe src="https://player.vimeo.com/video/167434033?title=0&amp;byline=0&amp;portrait=0" width="620"
                  height="347" allowfullscreen></iframe>
              </div>
            </div>
            <b-card-body class="px-3">
              <a href="#" class="badge text-bg-purple mb-2">Technology</a>
              <b-card-title tag="h5"><a href="#">10 things you need to know about Eduport</a></b-card-title>
              <p class="text-truncate-2">Prospective students should start broadly and then narrow their list </p>
              <div class="d-flex justify-content-between">
                <h6 class="mb-0"><a href="#">Bryan Knight</a></h6>
                <span class="small">20D Ago</span>
              </div>
            </b-card-body>
          </b-card>
        </b-col>

        <b-col sm="6" lg="4" class="grid-item">
          <b-card no-body class="bg-transparent">
            <div class="overflow-hidden rounded-3">
              <img :src="event04" class="card-img" alt="course img">
              <div class="bg-overlay bg-dark opacity-4"></div>
              <div class="card-img-overlay d-flex align-items-start p-3">
                <a href="#" class="badge text-bg-primary">Sports</a>
              </div>
            </div>

            <b-card-body class="px-3">
              <b-card-title tag="h5"><a href="#">The Olympics are over, now what?</a></b-card-title>
              <p>Rooms oh fully taken by worse do. Points afraid but may end law. Points afraid but may end law.
              </p>
              <div class="d-flex justify-content-between">
                <h6 class="mb-0"><a href="#">Amanda Reed</a></h6>
                <span class="small">Aug 31, 2021</span>
              </div>
            </b-card-body>
          </b-card>
        </b-col>

        <b-col sm="6" lg="4" class="grid-item">
          <b-card no-body class="bg-transparent">
            <div class="overflow-hidden rounded-3">
              <img :src="event01" class="card-imgp" alt="course img">
              <div class="bg-overlay bg-dark opacity-4"></div>
              <div class="card-img-overlay d-flex align-items-start p-3">
                <a href="#" class="badge text-bg-info">Student story</a>
              </div>
            </div>

            <b-card-body class="px-3">
              <b-card-title tag="h5"><a href="#">Campus Support for First-Year Students</a></b-card-title>
              <p class="text-truncate-2">Prospective students should start broadly and then narrow their list </p>

              <div class="d-flex justify-content-between">
                <h6 class="mb-0"><a href="#">Lori Stevens</a></h6>
                <span class="small">3M Ago</span>
              </div>
            </b-card-body>
          </b-card>
        </b-col>

      </b-row>
      <div class="text-center mt-4">
        <a href="#" class="btn btn-primary-soft mb-0">Load more
          <font-awesome-icon :icon="faSync" class="ms-1" />
        </a>
      </div>
    </b-container>
  </section>
</template>
<script setup lang="ts">
import { onMounted } from 'vue';
import Isotope from 'isotope-layout';
import { currency, developedByLink } from '@/helpers/constants';

import { faSync, faComment, faTag } from '@fortawesome/free-solid-svg-icons';
import { BIconHeart } from 'bootstrap-icons-vue';

import event02 from '@/assets/images/event/02.jpg';
import event03 from '@/assets/images/event/03.jpg';
import event04 from '@/assets/images/event/04.jpg';
import event01 from '@/assets/images/event/01.jpg';

import pattern05 from '@/assets/images/pattern/05.png';
import pattern03 from '@/assets/images/pattern/03.png';

onMounted(() => {
  let grid = document.querySelector<HTMLElement>('.filter-container');
  if (grid) {
    let iso = new Isotope(grid, {
      itemSelector: '.grid-item',
      percentPosition: true,
      layoutMode: 'masonry'
    });

    setTimeout(() => {
      iso.arrange({});
    }, 100);
  }
});
</script>