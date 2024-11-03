<template>
  <section>
    <b-container>
      <b-row class="g-lg-5 align-items-lg-center">
        <b-col md="4">
          <img :src="instructor10" class="rounded-2" alt="...">
        </b-col>
        <b-col md="8">
          <h2 class="mb-0">Frances Guerrero</h2>
          <h6 class="mb-3">Graphic Designer</h6>
          <p>
            Satisfied conveying a dependent contented he gentleman agreeable do be. Warrant private blushes removed an
            in equally totally if. Delivered dejection necessary objection do Mr prevailed. Mr feeling does chiefly
            cordial in do.
          </p>
          <p>
            We focus a great deal on the understanding of behavioral psychology and influence triggers which are
            crucial for becoming a well-rounded Digital Marketer. We understand that theory is important to build a
            solid foundation, we understand that theory alone isn’t going to get the job done so that’s why this course
            is packed with practical hands-on examples that you can follow step by step.
          </p>
          <ul class="list-inline hstack flex-wrap gap-3 mb-0">
            <li class="list-inline-item">
              <h5 class="mb-0">Follow me on:</h5>
            </li>
            <li class="list-inline-item">
              <a class="text-facebook" href="#">
                <font-awesome-icon :icon="faFacebookSquare" />
                Facebook
              </a>
            </li>
            <li class="list-inline-item">
              <a class="text-instagram" href="#">
                <font-awesome-icon :icon="faInstagramSquare" />
                Instagram
              </a>
            </li>
            <li class="list-inline-item">
              <a class="text-twitter" href="#">
                <font-awesome-icon :icon="faTwitterSquare" />
                Twitter
              </a>
            </li>
            <li class="list-inline-item">
              <a class="text-youtube" href="#">
                <font-awesome-icon :icon="faYoutubeSquare" />
                Youtube
              </a>
            </li>
          </ul>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>
<script setup lang="ts">
import instructor10 from '@/assets/images/instructor/10.jpg';
import { faFacebookSquare, faInstagramSquare, faTwitterSquare, faYoutubeSquare } from '@fortawesome/free-brands-svg-icons';
</script>