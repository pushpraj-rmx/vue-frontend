<template>
  <section>
    <b-container>
      <b-row class="g-4 g-lg-0 align-items-center">
        <b-col md="6" class="align-items-center text-center">
          <img :src="contact" class="h-400px" alt="">
          <div class="d-sm-flex align-items-center justify-content-center mt-2 mt-sm-4">
            <h5 class="mb-0">Follow us on:</h5>
            <ul class="list-inline mb-0 ms-sm-2">
              <li class="list-inline-item"> <a class="fs-5 me-1 text-facebook" href="#">
                  <font-awesome-icon :icon="faFacebookSquare" class="fa-fw" />
                </a> </li>
              <li class="list-inline-item"> <a class="fs-5 me-1 text-instagram" href="#">
                  <font-awesome-icon :icon="faInstagram" class="fa-fw" />
                </a> </li>
              <li class="list-inline-item"> <a class="fs-5 me-1 text-twitter" href="#">
                  <font-awesome-icon :icon="faTwitter" class="fa-fw" />
                </a> </li>
              <li class="list-inline-item"> <a class="fs-5 me-1 text-linkedin" href="#">
                  <font-awesome-icon :icon="faLinkedinIn" class="fa-fw" />
                </a> </li>
              <li class="list-inline-item"> <a class="fs-5 me-1 text-dribbble" href="#">
                  <font-awesome-icon :icon="faBasketballBall" class="fa-fw" />
                </a>
              </li>
              <li class="list-inline-item"> <a class="fs-5 me-1 text-pinterest" href="#">
                  <font-awesome-icon :icon="faPinterest" class="fa-fw" />
                </a> </li>
            </ul>
          </div>
        </b-col>
        <b-col md="6">
          <h2 class="mt-4 mt-md-0">Let's talk</h2>
          <p>To request a quote or want to meet up for coffee, contact us directly or fill out the form and we will
            get back to you promptly</p>

          <b-form>
            <div class="mb-4 bg-light-input">
              <b-form-group label="Your name *" label-for="yourName">
                <b-form-input type="text" id="yourName" size="lg" />
              </b-form-group>
            </div>
            <div class="mb-4 bg-light-input">
              <b-form-group label="Email address *" label-for="emailInput">
                <b-form-input type="email" id="emailInput" size="lg" />
              </b-form-group>
            </div>
            <div class="mb-4 bg-light-input">
              <b-form-group label="Message *" label-for="textareaBox">
                <b-form-textarea placeholder="Enter something..." rows="4" max-rows="6" id="textareaBox" />
              </b-form-group>
            </div>
            <div class="d-grid">
              <b-button variant="primary" size="lg" class="mb-0" type="button">Send Message</b-button>
            </div>
          </b-form>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>
<script setup lang="ts">
import { faBasketballBall } from '@fortawesome/free-solid-svg-icons';
import { faFacebookSquare, faInstagram, faTwitter, faLinkedinIn, faPinterest } from '@fortawesome/free-brands-svg-icons';

import contact from '@/assets/images/element/contact.svg';
</script>