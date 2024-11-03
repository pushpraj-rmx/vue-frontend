<template>
  <PagesLayout showShopCart>
    <section class="pt-5">
      <b-container data-sticky-container>
        <b-row class="g-4 g-sm-5">
          <b-col xl="4">
            <CustomStickyElement data-sticky data-margin-top="80" data-sticky-for="992">
              <b-row class="justify-content-center mb-5">
                <b-col md="8" xl="12">
                  <b-card no-body class="shadow">
                    <div class="rounded-3">
                      <img :src="book01" class="card-img-top" alt="book img">
                    </div>
                    <b-card-body class="pb-3">
                      <div class="text-center">
                        <a href="#" class="btn btn-success-soft mb-2 mb-sm-0 me-0 me-sm-3">
                          <BIconCart3 class="me-1 mb-1" />
                          Add to Cart
                        </a>{{ ' ' }}
                        <a href="#" class="btn btn-light mb-0">
                          <BIconBookmark class="me-2 mb-1" />Add wishlist
                        </a>
                      </div>
                    </b-card-body>
                  </b-card>
                </b-col>
              </b-row>
            </CustomStickyElement>
          </b-col>
          <b-col xl="8">

            <h1 class="mb-4">HTML and CSS: Design and Build Websites (Paperback)</h1>

            <div class="d-flex align-items-center mb-4">
              <h2 class="me-3 mb-0">4.5</h2>
              <div>
                <ul class="list-inline mb-0 hstack gap-1">
                  <li class="list-inline-item me-0 small"><font-awesome-icon :icon="faStar" class="text-warning" /></li>
                  <li class="list-inline-item me-0 small"><font-awesome-icon :icon="faStar" class="text-warning" /></li>
                  <li class="list-inline-item me-0 small"><font-awesome-icon :icon="faStar" class="text-warning" /></li>
                  <li class="list-inline-item me-0 small"><font-awesome-icon :icon="faStar" class="text-warning" /></li>
                  <li class="list-inline-item me-0 small"><font-awesome-icon :icon="faStarHalfAlt"
                      class="text-warning" /></li>
                </ul>
                <p class="mb-0 small mt-n1">Reviews from our buyers</p>
              </div>
            </div>

            <ul class="list-inline mb-4">
              <li class="list-inline-item">
                <input type="radio" class="btn-check" name="options" id="option1" checked>
                <label class="btn btn-success-soft-check" for="option1">
                  <span class="mb-2 h6 fw-light">Paperback</span>
                  <span class="d-flex align-items-center">
                    <span class="mb-0 h5 me-2 text-success">{{ currency }}215</span>
                    <span class="text-decoration-line-through fs-6 mb-0 me-2">{{ currency }}350</span>
                    <b-badge variant="dark" class="mb-0">60% off</b-badge>
                  </span>
                </label>
              </li>{{ ' ' }}

              <li class="list-inline-item">
                <input type="radio" class="btn-check" name="options" id="option2">
                <label class="btn btn-success-soft-check" for="option2">
                  <span class="mb-2 h6 fw-light">Compact disk</span>
                  <span class="d-flex align-items-center">
                    <span class="mb-0 h5 me-2 text-success">{{ currency }}180</span>
                    <span class="text-decoration-line-through fs-6 mb-0 me-2">{{ currency }}240</span>
                    <b-badge variant="dark" class="mb-0">40% off</b-badge>
                  </span>
                </label>
              </li>
            </ul>

            <h4>Description</h4>
            <p>Satisfied conveying a dependent contented he gentleman agreeable do be. Warrant private blushes removed
              an in equally totally if. Delivered dejection necessary objection do Mr prevailed. Mr feeling does chiefly
              cordial in do.</p>
            <p>We focus a great deal on the understanding of behavioral psychology and influence triggers which are
              crucial for becoming a well-rounded Digital Marketer. We understand that theory is important to build a
              solid foundation, we understand that theory alone isn't going to get the job done so that's why this
              course is packed with practical hands-on examples that you can follow step by step.</p>

            <b-row class="mb-3">
              <b-col md="6">
                <ul class="list-group list-group-borderless">
                  <li class="list-group-item px-0">
                    <span class="h6 fw-light">
                      <BIconCalendarFill class="fa-fw text-primary me-2" />Published
                      date:
                    </span>
                    <span class="h6">12 Dec 2021</span>
                  </li>
                  <li class="list-group-item px-0">
                    <span class="h6 fw-light"><font-awesome-icon :icon="faBook" class="fa-fw text-primary me-2" />Page
                      count:</span>
                    <span class="h6">180</span>
                  </li>
                  <li class="list-group-item px-0">
                    <span class="h6 fw-light"><font-awesome-icon :icon="faFont" class="fa-fw text-primary me-2" />Word
                      count:</span>
                    <span class="h6">15879</span>
                  </li>
                  <li class="list-group-item px-0">
                    <span class="h6 fw-light">
                      <BIconTranslate class="fa-fw text-primary me-2" />Language:
                    </span>
                    <span class="h6">English</span>
                  </li>
                </ul>
              </b-col>

              <b-col md="6">
                <ul class="list-group list-group-borderless">
                  <li class="list-group-item px-0">
                    <span class="h6 fw-light">
                      <BIconPersonCircle class="fa-fw text-primary me-2" />Published
                      by:
                    </span>
                    <span class="h6">Dennis Barrett</span>
                  </li>
                  <li class="list-group-item px-0">
                    <span class="h6 fw-light">
                      <BIconEyeFill class="fa-fw text-primary me-2" />Visited by:
                    </span>
                    <span class="h6">18K</span>
                  </li>
                  <li class="list-group-item px-0">
                    <span class="h6 fw-light">
                      <BIconBagFill class="fa-fw text-primary me-2" />Purchase by:
                    </span>
                    <span class="h6">8245</span>
                  </li>
                  <li class="list-group-item px-0">
                    <span class="h6 fw-light">
                      <BIconStarFill class="fa-fw text-primary me-2" />Rating/Review:
                    </span>
                    <span class="h6">4.5 (568)</span>
                  </li>
                </ul>
              </b-col>
            </b-row>

            <p>Crucial for becoming a well-rounded Digital Marketer. We understand that theory is important to build a
              solid foundation, we understand that theory alone isn't going to get the job done so that's why this
              course is packed with practical hands-on examples that you can follow step by step.</p>

            <b-col cols="12">
              <b-tabs pills nav-class="nav-pills-bg-soft px-3" nav-item-class="mb-0" id="book-pills-tab"
                content-class="pt-4 px-3">
                <b-tab title="Author" class="fade" title-item-class="me-2 me-sm-4">
                  <b-row class="g-4">
                    <b-col md="3">
                      <img :src="instructor08" class="rounded-3" alt="">
                    </b-col>
                    <b-col md="9">
                      <div class="d-sm-flex justify-content-sm-between">
                        <div class="mb-3">
                          <h3 class="mb-0">Dennis Barrett</h3>
                          <span>Publisher</span>
                        </div>

                        <ul class="list-inline mb-0">
                          <li class="list-inline-item me-2">
                            <a class="mb-0 me-1 text-facebook" href="#">
                              <font-awesome-icon :icon="faFacebookF" class="fa-fw" />
                            </a>
                          </li>{{ ' ' }}
                          <li class="list-inline-item me-2">
                            <a class="mb-0 me-1 text-instagram" href="#">
                              <font-awesome-icon :icon="faInstagram" class="fa-fw" />
                            </a>
                          </li>{{ ' ' }}
                          <li class="list-inline-item me-2">
                            <a class="mb-0 me-1 text-twitter" href="#">
                              <font-awesome-icon :icon="faTwitter" class="fa-fw" />
                            </a>
                          </li>{{ ' ' }}
                          <li class="list-inline-item">
                            <a class="mb-0 text-linkedin" href="#">
                              <font-awesome-icon :icon="faLinkedinIn" class="fa-fw" />
                            </a>
                          </li>
                        </ul>
                      </div>
                      <P class="mt-3 mt-sm-0 mb-0">We understand that theory is important to build a solid foundation,
                        we understand that theory alone isn't going to get the job done so that's why this course is
                        packed with practical hands-on examples that you can follow step by step.</P>
                    </b-col>
                  </b-row>
                </b-tab>
                <b-tab title="Reviews" class="fade" title-item-class="me-2 me-sm-4">
                  <b-row class="mb-4">
                    <h4 class="mb-4">All Reviews</h4>

                    <b-col md="4" class="mb-3 mb-md-0">
                      <div class="text-center">
                        <h2 class="mb-0">4.5</h2>
                        <ul class="list-inline mb-0 flex-centered hstack gap-1">
                          <li class="list-inline-item me-0"><font-awesome-icon :icon="faStar" class="text-warning" />
                          </li>
                          <li class="list-inline-item me-0"><font-awesome-icon :icon="faStar" class="text-warning" />
                          </li>
                          <li class="list-inline-item me-0"><font-awesome-icon :icon="faStar" class="text-warning" />
                          </li>
                          <li class="list-inline-item me-0"><font-awesome-icon :icon="faStar" class="text-warning" />
                          </li>
                          <li class="list-inline-item me-0"><font-awesome-icon :icon="faStarHalfAlt"
                              class="text-warning" /></li>
                        </ul>
                        <p class="mb-0">(Based on 155 review)</p>
                      </div>
                    </b-col>

                    <b-col md="8">
                      <b-row class="align-items-center text-center">
                        <b-col cols="6" sm="8">
                          <b-progress class="progress-sm bg-warning bg-opacity-15">
                            <b-progress-bar class="bg-warning" :value="100" />
                          </b-progress>
                        </b-col>

                        <b-col cols="6" sm="4">
                          <ul class="list-inline mb-0 hstack gap-1">
                            <li class="list-inline-item me-0 small"><font-awesome-icon :icon="faStar"
                                class="text-warning" /></li>
                            <li class="list-inline-item me-0 small"><font-awesome-icon :icon="faStar"
                                class="text-warning" /></li>
                            <li class="list-inline-item me-0 small"><font-awesome-icon :icon="faStar"
                                class="text-warning" /></li>
                            <li class="list-inline-item me-0 small"><font-awesome-icon :icon="faStar"
                                class="text-warning" /></li>
                            <li class="list-inline-item me-0 small"><font-awesome-icon :icon="faStar"
                                class="text-warning" /></li>
                          </ul>
                        </b-col>

                        <b-col cols="6" sm="8">
                          <b-progress class="progress-sm bg-warning bg-opacity-15">
                            <b-progress-bar class="bg-warning" :value="80" />
                          </b-progress>
                        </b-col>

                        <b-col cols="6" sm="4">
                          <ul class="list-inline mb-0 hstack gap-1">
                            <li class="list-inline-item me-0 small"><font-awesome-icon :icon="faStar"
                                class="text-warning" /></li>
                            <li class="list-inline-item me-0 small"><font-awesome-icon :icon="faStar"
                                class="text-warning" /></li>
                            <li class="list-inline-item me-0 small"><font-awesome-icon :icon="faStar"
                                class="text-warning" /></li>
                            <li class="list-inline-item me-0 small"><font-awesome-icon :icon="faStar"
                                class="text-warning" /></li>
                            <li class="list-inline-item me-0 small"><font-awesome-icon :icon="faStarR"
                                class="text-warning" /></li>
                          </ul>
                        </b-col>

                        <b-col cols="6" sm="8">
                          <b-progress class="progress-sm bg-warning bg-opacity-15">
                            <b-progress-bar class="bg-warning" :value="60" />
                          </b-progress>
                        </b-col>

                        <b-col cols="6" sm="4">
                          <ul class="list-inline mb-0 hstack gap-1">
                            <li class="list-inline-item me-0 small"><font-awesome-icon :icon="faStar"
                                class="text-warning" /></li>
                            <li class="list-inline-item me-0 small"><font-awesome-icon :icon="faStar"
                                class="text-warning" /></li>
                            <li class="list-inline-item me-0 small"><font-awesome-icon :icon="faStar"
                                class="text-warning" /></li>
                            <li class="list-inline-item me-0 small"><font-awesome-icon :icon="faStarR"
                                class="text-warning" /></li>
                            <li class="list-inline-item me-0 small"><font-awesome-icon :icon="faStarR"
                                class="text-warning" /></li>
                          </ul>
                        </b-col>

                        <b-col cols="6" sm="8">
                          <b-progress class="progress-sm bg-warning bg-opacity-15">
                            <b-progress-bar class="bg-warning" :value="40" />
                          </b-progress>
                        </b-col>

                        <b-col cols="6" sm="4">
                          <ul class="list-inline mb-0 hstack gap-1">
                            <li class="list-inline-item me-0 small"><font-awesome-icon :icon="faStar"
                                class="text-warning" /></li>
                            <li class="list-inline-item me-0 small"><font-awesome-icon :icon="faStar"
                                class="text-warning" /></li>
                            <li class="list-inline-item me-0 small"><font-awesome-icon :icon="faStarR"
                                class="text-warning" /></li>
                            <li class="list-inline-item me-0 small"><font-awesome-icon :icon="faStarR"
                                class="text-warning" /></li>
                            <li class="list-inline-item me-0 small"><font-awesome-icon :icon="faStarR"
                                class="text-warning" /></li>
                          </ul>
                        </b-col>

                        <b-col cols="6" sm="8">
                          <b-progress class="progress-sm bg-warning bg-opacity-15">
                            <b-progress-bar class="bg-warning" :value="20" />
                          </b-progress>
                        </b-col>

                        <b-col cols="6" sm="4">
                          <ul class="list-inline mb-0 hstack gap-1">
                            <li class="list-inline-item me-0 small"><font-awesome-icon :icon="faStar"
                                class="text-warning" /></li>
                            <li class="list-inline-item me-0 small"><font-awesome-icon :icon="faStarR"
                                class="text-warning" /></li>
                            <li class="list-inline-item me-0 small"><font-awesome-icon :icon="faStarR"
                                class="text-warning" /></li>
                            <li class="list-inline-item me-0 small"><font-awesome-icon :icon="faStarR"
                                class="text-warning" /></li>
                            <li class="list-inline-item me-0 small"><font-awesome-icon :icon="faStarR"
                                class="text-warning" /></li>
                          </ul>
                        </b-col>
                      </b-row>
                    </b-col>
                  </b-row>

                  <b-row>
                    <div class="d-md-flex my-4">
                      <div class="avatar avatar-xl me-4 flex-shrink-0">
                        <img class="avatar-img rounded-circle" :src="avatar09" alt="avatar">
                      </div>
                      <div>
                        <div class="d-sm-flex mt-1 mt-md-0 align-items-center">
                          <h5 class="me-3 mb-0">Jacqueline Miller</h5>
                          <ul class="list-inline mb-0 hstack gap-1">
                            <li class="list-inline-item me-0"><font-awesome-icon :icon="faStar" class="text-warning" />
                            </li>
                            <li class="list-inline-item me-0"><font-awesome-icon :icon="faStar" class="text-warning" />
                            </li>
                            <li class="list-inline-item me-0"><font-awesome-icon :icon="faStar" class="text-warning" />
                            </li>
                            <li class="list-inline-item me-0"><font-awesome-icon :icon="faStar" class="text-warning" />
                            </li>
                            <li class="list-inline-item me-0"><font-awesome-icon :icon="faStarR" class="text-warning" />
                            </li>
                          </ul>
                        </div>
                        <p class="small mb-2">2 days ago</p>
                        <p class="mb-2">Perceived end knowledge certainly day sweetness why cordially. Ask a quick six
                          seven offer see among. Handsome met debating sir dwelling age material. As style lived he
                          worse dried. Offered related so visitors we private removed. Moderate do subjects to distance.
                        </p>

                        <a href="#" class="text-body mb-0"><font-awesome-icon :icon="faReply" class="me-2" />Reply</a>
                      </div>
                    </div>
                    <hr>

                    <div class="d-md-flex my-4">
                      <div class="avatar avatar-xl me-4 flex-shrink-0">
                        <img class="avatar-img rounded-circle" :src="avatar07" alt="avatar">
                      </div>
                      <div>
                        <div class="d-sm-flex mt-1 mt-md-0 align-items-center">
                          <h5 class="me-3 mb-0">Dennis Barrett</h5>
                          <ul class="list-inline mb-0 hstack gap-1">
                            <li class="list-inline-item me-0"><font-awesome-icon :icon="faStar" class="text-warning" />
                            </li>
                            <li class="list-inline-item me-0"><font-awesome-icon :icon="faStar" class="text-warning" />
                            </li>
                            <li class="list-inline-item me-0"><font-awesome-icon :icon="faStar" class="text-warning" />
                            </li>
                            <li class="list-inline-item me-0"><font-awesome-icon :icon="faStar" class="text-warning" />
                            </li>
                            <li class="list-inline-item me-0"><font-awesome-icon :icon="faStarR" class="text-warning" />
                            </li>
                          </ul>
                        </div>
                        <p class="small mb-2">2 days ago</p>
                        <p class="mb-2">Handsome met debating sir dwelling age material. As style lived he worse dried.
                          Offered related so visitors we private removed. Moderate do subjects to distance. </p>
                        <a href="#" class="text-body mb-0"><font-awesome-icon :icon="faReply" class="me-2" />Reply</a>
                      </div>
                    </div>
                    <hr>
                  </b-row>

                  <div class="mt-2">
                    <h5 class="mb-4">Leave a Review</h5>
                    <b-form class="row g-3">
                      <b-col md="6">
                        <b-form-input type="text" id="inputtext" placeholder="Name" />
                      </b-col>
                      <b-col md="6">
                        <b-form-input type="email" placeholder="Email" id="inputEmail4" />
                      </b-col>
                      <b-col cols="12">
                        <ChoicesSelect id="inputState2">
                          <option selected>★★★★★ (5/5)</option>
                          <option>★★★★☆ (4/5)</option>
                          <option>★★★☆☆ (3/5)</option>
                          <option>★★☆☆☆ (2/5)</option>
                          <option>★☆☆☆☆ (1/5)</option>
                        </ChoicesSelect>
                      </b-col>
                      <b-col cols="12">
                        <b-form-textarea placeholder="Your review" rows="3" max-rows="6"
                          id="exampleFormControlTextarea1" />
                      </b-col>
                      <b-col cols="12">
                        <b-button type="submit" variant="primary" class="mb-0">Post Review</b-button>
                      </b-col>
                    </b-form>
                  </div>
                </b-tab>
                <b-tab title="Shipping Method" class="fade" title-item-class="me-2 me-sm-4">
                  <p>As it so contrasted oh estimating instrument. Size like body someone had. Are conduct viewing boy
                    minutes warrant the expense? Tolerably behavior may admit daughters offending her ask own. Praise
                    effect wishes change way and any wanted. Lively use looked latter regard had. Do he it part more
                    last in.</p>

                  <b-row class="mb-4">
                    <b-col cols="12">
                      <div class="bg-light p-4 rounded-3">
                        <b-row class="g-4 text-center mx-auto">
                          <b-col md="4" class="text-center">
                            <div class="icon-xl bg-dark bg-opacity-10 mx-auto rounded-circle mb-3">
                              <font-awesome-icon :icon="faFileAlt" class="fa-fw" />
                            </div>
                            <h6>You place your order</h6>
                          </b-col>
                          <b-col md="4" class="text-center">
                            <div class="icon-xl bg-dark bg-opacity-10 mx-auto rounded-circle mb-3">
                              <font-awesome-icon :icon="faTruckMoving" class="fa-fw" />
                            </div>
                            <h6>We Ship Your Order</h6>
                          </b-col>
                          <b-col md="4" class="text-center">
                            <div class="icon-xl bg-dark bg-opacity-10 mx-auto rounded-circle mb-3">
                              <font-awesome-icon :icon="faPeopleCarry" class="fa-fw" />
                            </div>
                            <h6>Delivery</h6>
                          </b-col>
                        </b-row>
                      </div>
                    </b-col>
                  </b-row>

                  <p>Are conduct viewing boy minutes warrant the expense? Tolerably behavior may admit daughters
                    offending her ask own. Praise effect wishes change way and any wanted. Lively use looked latter
                    regard had. Do he it part more last in.</p>
                  <p><b>Processing time:</b> The time it takes to prepare your item(s) to ship from our warehouse. This
                    includes preparing your items, performing quality checks, and packing for shipment.</p>
                  <p><b>Shipping time:</b> The time for your item(s) to travel from our warehouse to your destination.
                  </p>
                  <p>Tolerably behavior may admit daughters offending her ask own. Praise effect wishes change way and
                    any wanted. Lively use looked latter regard had. Do he it part more last in.</p>
                </b-tab>
              </b-tabs>
            </b-col>
          </b-col>
        </b-row>
      </b-container>
    </section>
  </PagesLayout>
</template>
<script setup lang="ts">
import PagesLayout from '@/layouts/PagesLayout.vue';
import CustomStickyElement from '@/components/CustomStickyElement.vue';
import ChoicesSelect from '@/components/ChoicesSelect.vue';

import { currency } from '@/helpers/constants';
import { useRoute } from "vue-router";

import book01 from '@/assets/images/book/01.jpg';
import instructor08 from '@/assets/images/instructor/08.jpg';
import avatar09 from '@/assets/images/avatar/09.jpg';
import avatar07 from '@/assets/images/avatar/07.jpg';

import { faStar, faStarHalfAlt, faBook, faFont, faReply, faTruckMoving, faPeopleCarry } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarR, faFileAlt } from '@fortawesome/free-regular-svg-icons';
import { faFacebookF, faInstagram, faTwitter, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { BIconCart3, BIconBookmark, BIconCalendarFill, BIconTranslate, BIconPersonCircle, BIconEyeFill, BIconBagFill, BIconStarFill } from 'bootstrap-icons-vue';

const route = useRoute();
</script>