<template>
  <b-row class="mb-4">
    <h5 class="mb-4">Our Student Reviews</h5>
    <b-col md="4" class="mb-3 mb-md-0">
      <div class="text-center">
        <h2 class="mb-0">4.5</h2>
        <ul class="list-inline mb-0 flex-centered hstack gap-1">
          <li class="list-inline-item me-0"><font-awesome-icon :icon="faStar" class="text-warning" /></li>
          <li class="list-inline-item me-0"><font-awesome-icon :icon="faStar" class="text-warning" /></li>
          <li class="list-inline-item me-0"><font-awesome-icon :icon="faStar" class="text-warning" /></li>
          <li class="list-inline-item me-0"><font-awesome-icon :icon="faStar" class="text-warning" /></li>
          <li class="list-inline-item me-0"><font-awesome-icon :icon="faStarHalfAlt" class="text-warning" /></li>
        </ul>
        <p class="mb-0">(Based on todays review)</p>
      </div>
    </b-col>

    <b-col md="8">
      <b-row class="align-items-center">
        <b-col cols="6" sm="8">
          <b-progress class="progress-sm bg-warning bg-opacity-15">
            <b-progress-bar class="bg-warning" :value="100" />
          </b-progress>
        </b-col>

        <b-col cols="6" sm="4">
          <ul class="list-inline mb-0 hstack gap-1">
            <li class="list-inline-item me-0 small"><font-awesome-icon :icon="faStar" class="text-warning" /></li>
            <li class="list-inline-item me-0 small"><font-awesome-icon :icon="faStar" class="text-warning" /></li>
            <li class="list-inline-item me-0 small"><font-awesome-icon :icon="faStar" class="text-warning" /></li>
            <li class="list-inline-item me-0 small"><font-awesome-icon :icon="faStar" class="text-warning" /></li>
            <li class="list-inline-item me-0 small"><font-awesome-icon :icon="faStar" class="text-warning" /></li>
          </ul>
        </b-col>

        <b-col cols="6" sm="8">
          <b-progress class="progress-sm bg-warning bg-opacity-15">
            <b-progress-bar class="bg-warning" :value="80" />
          </b-progress>
        </b-col>

        <b-col cols="6" sm="4">
          <ul class="list-inline mb-0 hstack gap-1">
            <li class="list-inline-item me-0 small"><font-awesome-icon :icon="faStar" class="text-warning" /></li>
            <li class="list-inline-item me-0 small"><font-awesome-icon :icon="faStar" class="text-warning" /></li>
            <li class="list-inline-item me-0 small"><font-awesome-icon :icon="faStar" class="text-warning" /></li>
            <li class="list-inline-item me-0 small"><font-awesome-icon :icon="faStar" class="text-warning" /></li>
            <li class="list-inline-item me-0 small"><font-awesome-icon :icon="faStarR" class="text-warning" /></li>
          </ul>
        </b-col>

        <b-col cols="6" sm="8">
          <b-progress class="progress-sm bg-warning bg-opacity-15">
            <b-progress-bar class="bg-warning" :value="60" />
          </b-progress>
        </b-col>

        <b-col cols="6" sm="4">
          <ul class="list-inline mb-0 hstack gap-1">
            <li class="list-inline-item me-0 small"><font-awesome-icon :icon="faStar" class="text-warning" /></li>
            <li class="list-inline-item me-0 small"><font-awesome-icon :icon="faStar" class="text-warning" /></li>
            <li class="list-inline-item me-0 small"><font-awesome-icon :icon="faStar" class="text-warning" /></li>
            <li class="list-inline-item me-0 small"><font-awesome-icon :icon="faStarR" class="text-warning" /></li>
            <li class="list-inline-item me-0 small"><font-awesome-icon :icon="faStarR" class="text-warning" /></li>
          </ul>
        </b-col>

        <b-col cols="6" sm="8">
          <b-progress class="progress-sm bg-warning bg-opacity-15">
            <b-progress-bar class="bg-warning" :value="40" />
          </b-progress>
        </b-col>

        <b-col cols="6" sm="4">
          <ul class="list-inline mb-0 hstack gap-1">
            <li class="list-inline-item me-0 small"><font-awesome-icon :icon="faStar" class="text-warning" /></li>
            <li class="list-inline-item me-0 small"><font-awesome-icon :icon="faStar" class="text-warning" /></li>
            <li class="list-inline-item me-0 small"><font-awesome-icon :icon="faStarR" class="text-warning" /></li>
            <li class="list-inline-item me-0 small"><font-awesome-icon :icon="faStarR" class="text-warning" /></li>
            <li class="list-inline-item me-0 small"><font-awesome-icon :icon="faStarR" class="text-warning" /></li>
          </ul>
        </b-col>

        <b-col cols="6" sm="8">
          <b-progress class="progress-sm bg-warning bg-opacity-15">
            <b-progress-bar class="bg-warning" :value="20" />
          </b-progress>
        </b-col>

        <b-col cols="6" sm="4">
          <ul class="list-inline mb-0 hstack gap-1">
            <li class="list-inline-item me-0 small"><font-awesome-icon :icon="faStar" class="text-warning" /></li>
            <li class="list-inline-item me-0 small"><font-awesome-icon :icon="faStarR" class="text-warning" /></li>
            <li class="list-inline-item me-0 small"><font-awesome-icon :icon="faStarR" class="text-warning" /></li>
            <li class="list-inline-item me-0 small"><font-awesome-icon :icon="faStarR" class="text-warning" /></li>
            <li class="list-inline-item me-0 small"><font-awesome-icon :icon="faStarR" class="text-warning" /></li>
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
            <li class="list-inline-item me-0"><font-awesome-icon :icon="faStar" class="text-warning" /></li>
            <li class="list-inline-item me-0"><font-awesome-icon :icon="faStar" class="text-warning" /></li>
            <li class="list-inline-item me-0"><font-awesome-icon :icon="faStar" class="text-warning" /></li>
            <li class="list-inline-item me-0"><font-awesome-icon :icon="faStar" class="text-warning" /></li>
            <li class="list-inline-item me-0"><font-awesome-icon :icon="faStarR" class="text-warning" /></li>
          </ul>
        </div>
        <p class="small mb-2">2 days ago</p>
        <p class="mb-2">Perceived end knowledge certainly day sweetness why cordially. Ask a quick six
          seven offer see among. Handsome met debating sir dwelling age material. As style lived he
          worse dried. Offered related so visitors we private removed. Moderate do subjects to distance.
        </p>
        <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
          <input type="radio" class="btn-check" name="btnradio" id="btnradio1">
          <label class="btn btn-outline-light btn-sm mb-0" for="btnradio1">
            <font-awesome-icon :icon="faThumbsUp" class="me-1" />
            25</label>
          <input type="radio" class="btn-check" name="btnradio" id="btnradio2">
          <label class="btn btn-outline-light btn-sm mb-0" for="btnradio2">
            <font-awesome-icon :icon="faThumbsDown" class="me-1" />
            2</label>
        </div>
      </div>
    </div>

    <div class="d-md-flex mb-4 ps-4 ps-md-5">
      <div class="avatar avatar-lg me-4 flex-shrink-0">
        <img class="avatar-img rounded-circle" :src="avatar02" alt="avatar">
      </div>
      <div>
        <div class="d-sm-flex mt-1 mt-md-0 align-items-center">
          <h5 class="me-3 mb-0">Louis Ferguson</h5>
        </div>
        <p class="small mb-2">1 days ago</p>
        <p class="mb-2">Water timed folly right aware if oh truth. Imprudence attachment him for
          sympathize. Large above be to means. Dashwood does provide stronger is. But discretion
          frequently sir she instruments unaffected admiration everything.</p>
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
            <li class="list-inline-item me-0"><font-awesome-icon :icon="faStar" class="text-warning" /></li>
            <li class="list-inline-item me-0"><font-awesome-icon :icon="faStar" class="text-warning" /></li>
            <li class="list-inline-item me-0"><font-awesome-icon :icon="faStar" class="text-warning" /></li>
            <li class="list-inline-item me-0"><font-awesome-icon :icon="faStar" class="text-warning" /></li>
            <li class="list-inline-item me-0"><font-awesome-icon :icon="faStarR" class="text-warning" /></li>
          </ul>
        </div>
        <p class="small mb-2">2 days ago</p>
        <p class="mb-2">Handsome met debating sir dwelling age material. As style lived he worse dried.
          Offered related so visitors we private removed. Moderate do subjects to distance. </p>
        <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
          <input type="radio" class="btn-check" name="btnradio" id="btnradio3">
          <label class="btn btn-outline-light btn-sm mb-0" for="btnradio3">
            <font-awesome-icon :icon="faThumbsUp" class="me-1" />
            25
          </label>
          <input type="radio" class="btn-check" name="btnradio" id="btnradio4">
          <label class="btn btn-outline-light btn-sm mb-0" for="btnradio4">
            <font-awesome-icon :icon="faThumbsDown" class="me-1" />
            2
          </label>
        </div>
      </div>
    </div>
    <hr>
  </b-row>
  <div class="mt-2">
    <h5 class="mb-4">Leave a Review</h5>
    <b-form class="row g-3">
      <b-col md="6" class="bg-light-input">
        <b-form-input type="text" id="inputtext" placeholder="Name" />
      </b-col>
      <b-col md="6" class="bg-light-input">
        <b-form-input type="email" placeholder="Email" id="inputEmail4" />
      </b-col>
      <b-col cols="12" class="bg-light-input">
        <ChoicesSelect id="inputState2">
          <option selected>★★★★★ (5/5)</option>
          <option>★★★★☆ (4/5)</option>
          <option>★★★☆☆ (3/5)</option>
          <option>★★☆☆☆ (2/5)</option>
          <option>★☆☆☆☆ (1/5)</option>
        </ChoicesSelect>
      </b-col>
      <b-col cols="12" class="bg-light-input">
        <b-form-textarea placeholder="Your review" rows="3" max-rows="6" id="exampleFormControlTextarea1" />
      </b-col>
      <b-col cols="12">
        <b-button type="submit" variant="primary" class="mb-0">Post Review</b-button>
      </b-col>
    </b-form>
  </div>
</template>
<script setup lang="ts">
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';
import { faThumbsUp, faThumbsDown, faStar as faStarR } from '@fortawesome/free-regular-svg-icons';

import avatar09 from '@/assets/images/avatar/09.jpg';
import avatar02 from '@/assets/images/avatar/02.jpg';
import avatar07 from '@/assets/images/avatar/07.jpg';
</script>