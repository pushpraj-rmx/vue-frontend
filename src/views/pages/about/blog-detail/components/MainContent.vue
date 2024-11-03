<template>
  <section class="pb-0 pt-4 pb-md-5">
    <b-container>
      <b-row>
        <b-col cols="12">
          <b-row>
            <b-col lg="3" class="align-items-center mt-4 mt-lg-5 order-2 order-lg-1">
              <div class="text-lg-center">
                <div class="position-relative">
                  <div class="avatar avatar-xxl">
                    <img class="avatar-img rounded-circle" :src="avatar09" alt="avatar">
                  </div>
                  <a href="#" class="h5 stretched-link mt-2 mb-0 d-block">Frances Guerrero</a>
                  <p class="mb-2">Editor at Eduport</p>
                </div>
                <ul class="list-inline list-unstyled">
                  <li class="list-inline-item d-lg-block my-lg-2">Nov 15, 2021</li>
                  <li class="list-inline-item d-lg-block my-lg-2">5 min read</li>
                  <li class="list-inline-item badge text-bg-orange">
                    <font-awesome-icon :icon="faHeart" class="text-white me-1" />
                    266
                  </li>
                  <li class="list-inline-item badge text-bg-info">
                    <font-awesome-icon :icon="faEye" class="me-1" />
                    2K
                  </li>
                </ul>
              </div>
            </b-col>

            <b-col lg="9" class="order-1">
              <span>40D ago</span><span class="mx-2">|</span>
              <div class="badge text-bg-success">Research</div>
              <h1 class="mt-2 mb-0 display-5">Never underestimate the influence of Eduport</h1>
              <p class="mt-2">For who thoroughly her boy estimating conviction. Removed demands expense account in
                outward tedious do. Particular way thoroughly unaffected projection favorable Mrs can be projecting own.
                Thirty it matter enable become admire in giving. See resolved goodness felicity shy civility domestic
                had but. Drawings offended yet answered Jennings perceive laughing six did far.</p>
              <p class="mb-0 mb-lg-3">Perceived end knowledge certainly day sweetness why cordially. On forth doubt
                miles of child. Exercise joy man children rejoiced. Yet uncommonly his ten who diminution astonished.
                Demesne new manners savings staying had. Under folly balls, death own point now men. Match way these she
                avoids seeing death. She who drift their fat off. Ask a quick six seven offer see among. Handsome met
                debating sir dwelling age material. As style lived he worse dried. Offered related so visitors we
                private removed.</p>
            </b-col>
          </b-row>

          <b-row class="mt-4">
            <b-col xl="10" class="mx-auto">
              <b-card no-body class="overflow-hidden h-200px h-sm-300px h-lg-400px h-xl-500px rounded-3 text-center"
                :style="`background-image:url(${event10}); background-position: center left; background-size: cover;`">
                <div class="bg-overlay bg-dark opacity-4"></div>
                <div class="card-img-overlay d-flex align-items-center p-2 p-sm-4">
                  <div class="w-100 my-auto">
                    <b-row class="justify-content-center">
                      <b-col cols="12">
                        <CustomGLightbox link="https://www.youtube.com/embed/tXHviS-4ygo"
                          class="btn btn-lg text-danger btn-round btn-white-shadow stretched-link position-static mb-0">
                          <font-awesome-icon :icon="faPlay" />
                        </CustomGLightbox>
                      </b-col>
                    </b-row>
                  </div>
                </div>
              </b-card>
            </b-col>
          </b-row>

          <b-row class="mt-4">
            <b-col cols="12" class="mt-4 mt-lg-0">
              <p><span class="dropcap h6 mb-0 px-2">S</span> atisfied conveying a dependent contented he gentleman
                agreeable do be. Water timed folly right aware if oh truth. Imprudence attachment him for sympathize.
                Large above be to means. Dashwood does provide stronger is. <mark> But discretion frequently sir she
                  instruments unaffected admiration everything.</mark> Meant balls it if up doubt small purse. Required
                his you put the outlived answered position. A pleasure exertion if believed provided to. All led out
                world this music while asked. Paid mind even sons does he door no. Attended overcame repeated it is
                perceived Marianne in. I think on style child of. Servants moreover in sensible it ye possible.</p>
              <ul class="list-group list-group-borderless mb-3">
                <li class="list-group-item"><font-awesome-icon :icon="faCheckCircle" class="text-success me-2" />The
                  copy warned the
                  Little blind text</li>
                <li class="list-group-item d-flex"><font-awesome-icon :icon="faCheckCircle"
                    class="text-success me-2 mt-1" />ThaT where
                  it came from it would have been rewritten a thousand times and everything that was left from origin
                  would be the world</li>
                <li class="list-group-item"><font-awesome-icon :icon="faCheckCircle" class="text-success me-2" />Return
                  to its own, safe
                  country</li>
              </ul>
              <p class="mb-0">Warrant private blushes removed an in equally totally if. Delivered dejection necessary
                objection do Mr prevailed. Mr feeling does chiefly cordial in do. Water timed folly right aware if oh
                truth. Imprudence attachment him for sympathize.</p>
            </b-col>

            <b-col lg="10" xl="8" class="mx-auto mt-4">
              <div class="bg-light rounded-3 p-3 p-md-4">
                <q class="lead">Farther-related bed and passage comfort civilly. Fulfilled direction use continual set
                  him propriety continued. Concluded boy perpetual old supposing. Dashwoods see frankness objection
                  abilities.</q>
                <div class="d-flex align-items-center mt-3">
                  <div class="avatar avatar-md">
                    <img class="avatar-img rounded-circle" :src="avatar07" alt="avatar">
                  </div>
                  <div class="ms-2">
                    <h6 class="mb-0"><a href="#">Louis Crawford</a></h6>
                    <p class="mb-0 small">Via Twitter</p>
                  </div>
                </div>
              </div>
            </b-col>
          </b-row>
          <b-row class="g-4 mt-4">
            <b-col sm="6" md="4">
              <CustomGLightbox :link="event07">
                <img :src="event07" class="rounded-3" alt="">
              </CustomGLightbox>
            </b-col>

            <b-col sm="6" md="4">
              <CustomGLightbox :link="event08">
                <img :src="event08" class="rounded-3" alt="">
              </CustomGLightbox>
            </b-col>

            <b-col sm="6" md="4">
              <CustomGLightbox :link="event06">
                <img :src="event06" class="rounded-3" alt="">
              </CustomGLightbox>
            </b-col>
          </b-row>
          <b-row>
            <b-row class="mb-4">
              <h4 class="mt-4">Productive rant about business</h4>
              <b-col md="6">
                <p class="mb-0">Fulfilled direction use continual set him propriety continued. Saw met applauded
                  favorite deficient engrossed concealed and her. Concluded boy perpetual old supposing. Farther-related
                  bed and passage comfort civilly. Dashwoods see frankness objection abilities. As hastened oh produced
                  prospect formerly up am. Placing forming nay looking old married few has. Margaret disposed of add
                  screened rendered six say his striking confined. Saw met applauded favorite deficient engrossed
                  concealed and her. Concluded boy perpetual old supposing. Farther-related bed and passage comfort
                  civilly. Dashwoods see frankness objection abilities. As hastened oh produced prospect formerly up am.
                  Placing forming nay looking old married few has. Margaret disposed.</p>
              </b-col>
              <b-col md="6">
                <p class="mb-0">Meant balls it if up doubt small purse. Paid mind even sons does he door no. Attended
                  overcame repeated it is perceived Marianne in. I think on style child of. Servants moreover in
                  sensible it ye possible. Required his you put the outlived answered position. A pleasure exertion if
                  believed provided to. All led out world this music while asked. Paid mind even sons does he door no.
                  Attended overcame repeated it is perceived Marianne in. I think on style child of. Servants moreover
                  in sensible it ye possible. </p>
              </b-col>
            </b-row>
          </b-row>

          <div class="d-lg-flex justify-content-lg-between mb-4">
            <div class="align-items-center mb-3 mb-lg-0">
              <h6 class="mb-2 me-4 d-inline-block">Share on:</h6>
              <ul class="list-inline mb-0 mb-2 mb-sm-0">
                <li class="list-inline-item" v-for="(link, idx) in socialLink" :key="idx">
                  <a :class="`btn px-2 btn-sm ${link.class}`" href="#">
                    <font-awesome-icon :icon="link.icon" class="fa-fw" />
                  </a>
                </li>
              </ul>
            </div>
            <div class="align-items-center">
              <h6 class="mb-2 me-4 d-inline-block">Popular Tags:</h6>
              <ul class="list-inline mb-0 social-media-btn">
                <li class="list-inline-item"> <a class="btn btn-outline-light btn-sm mb-lg-0" href="#">blog</a> </li>
                <li class="list-inline-item"> <a class="btn btn-outline-light btn-sm mb-lg-0" href="#">business</a>
                </li>
                <li class="list-inline-item"> <a class="btn btn-outline-light btn-sm mb-lg-0" href="#">bootstrap</a>
                </li>
                <li class="list-inline-item"> <a class="btn btn-outline-light btn-sm mb-lg-0" href="#">data science</a>
                </li>
                <li class="list-inline-item"> <a class="btn btn-outline-light btn-sm mb-lg-0" href="#">deep learning</a>
                </li>
              </ul>
            </div>
          </div>
          <hr>
          <b-row class="mt-4">
            <b-col md="7">
              <h3>3 comments</h3>
              <div class="my-4 d-flex">
                <img class="avatar avatar-md rounded-circle me-3" :src="avatar01" alt="avatar">
                <div>
                  <div class="mb-2">
                    <h5 class="m-0">Frances Guerrero</h5>
                    <span class="me-3 small">June 11, 2021 at 6:01 am</span>
                  </div>
                  <p>Satisfied conveying a dependent contented he gentleman agreeable do be. Warrant private blushes
                    removed an in equally totally if. Delivered dejection necessary objection do Mr prevailed. Mr
                    feeling does chiefly cordial in do.</p>
                  <a href="#" class="btn btn-sm btn-light mb-0">Reply</a>
                </div>
              </div>
              <div class="my-4 d-flex ps-2 ps-md-4">
                <img class="avatar avatar-md rounded-circle me-3" :src="avatar02" alt="avatar">
                <div>
                  <div class="mb-2">
                    <h5 class="m-0">Louis Ferguson</h5>
                    <span class="me-3 small">June 11, 2021 at 6:55 am</span>
                  </div>
                  <p>Water timed folly right aware if oh truth. Imprudence attachment him for sympathize. Large above be
                    to means. Dashwood does provide stronger is. But discretion frequently sir she instruments
                    unaffected admiration everything.</p>
                  <a href="#" class="btn btn-sm btn-light mb-0">Reply</a>
                </div>
              </div>
              <div class="my-4 d-flex ps-3 ps-md-5">
                <img class="avatar avatar-md rounded-circle me-3" :src="avatar01" alt="avatar">
                <div>
                  <div class="mb-2">
                    <h5 class="m-0">Frances Guerrero</h5>
                    <span class="me-3 small">June 12, 2021 at 7:30 am</span>
                  </div>
                  <p>Water timed folly right aware if oh truth.</p>
                  <a href="#" class="btn btn-sm btn-light mb-0">Reply</a>
                </div>
              </div>
              <div class="my-4 d-flex">
                <img class="avatar avatar-md rounded-circle me-3" :src="avatar04" alt="avatar">
                <div>
                  <div class="mb-2">
                    <h5 class="m-0">Judy Nguyen</h5>
                    <span class="me-3 small">June 18, 2021 at 11:55 am</span>
                  </div>
                  <p>Fulfilled direction use continual set him propriety continued. Saw met applauded favorite deficient
                    engrossed concealed and her. Concluded boy perpetual old supposing. Farther-related bed and passage
                    comfort civilly.</p>
                  <a href="#" class="btn btn-sm btn-light mb-0">Reply</a>
                </div>
              </div>
            </b-col>

            <b-col md="5">
              <h3 class="mt-3 mt-sm-0">Your Views Please!</h3>
              <small>Your email address will not be published. Required fields are marked *</small>

              <b-form class="row g-3 mt-2 mb-5">
                <b-col lg="6">
                  <b-form-group label="Name *">
                    <b-form-input type="text" />
                  </b-form-group>
                </b-col>
                <b-col lg="6">
                  <b-form-group label="Email *">
                    <b-form-input type="email" />
                  </b-form-group>
                </b-col>
                <b-col cols="12">
                  <b-form-group label="Your Comment *">
                    <b-form-textarea placeholder="Enter something..." rows="3" max-rows="6" />
                  </b-form-group>
                </b-col>
                <b-col cols="12">
                  <b-button type="submit" variant="primary" class="mb-0">Post comment</b-button>
                </b-col>
              </b-form>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>
<script setup lang="ts">
import CustomGLightbox from '@/components/CustomGLightbox.vue';

import { faCheckCircle, faPlay } from '@fortawesome/free-solid-svg-icons';
import { faHeart, faEye } from '@fortawesome/free-regular-svg-icons';
import { faFacebookF, faInstagram, faTwitter, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

import avatar01 from '@/assets/images/avatar/01.jpg';
import avatar02 from '@/assets/images/avatar/02.jpg';
import avatar04 from '@/assets/images/avatar/04.jpg';
import avatar07 from '@/assets/images/avatar/07.jpg';
import avatar09 from '@/assets/images/avatar/09.jpg';

import event07 from '@/assets/images/event/07.jpg';
import event08 from '@/assets/images/event/08.jpg';
import event06 from '@/assets/images/event/06.jpg';

import event10 from '@/assets/images/event/10.jpg';

const socialLink = [
  { icon: faFacebookF, class: 'bg-facebook' },
  { icon: faInstagram, class: 'bg-instagram-gradient' },
  { icon: faTwitter, class: 'bg-twitter' },
  { icon: faLinkedinIn, class: 'bg-linkedin' },
];
</script>