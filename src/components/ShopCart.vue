<template>
  <div class="me-2 me-md-3 dropdown">
    <a class="btn btn-light btn-round flex-centered mb-0" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" data-bs-auto-close="outside">
      <BIconCart3 class="fa-fw" />
    </a>
    <span class="position-absolute top-0 start-100 translate-middle badge rounded-circle bg-dark mt-xl-2 ms-n1">
      2
      <span class="visually-hidden">unread messages</span>
    </span>
    <div class="dropdown-menu dropdown-animation dropdown-menu-end dropdown-menu-size-md p-0 shadow-lg border-0">
      <b-card no-body class="bg-transparent">
        <b-card-header class="bg-transparent border-bottom py-4">
          <h5 class="m-0">Cart items</h5>
        </b-card-header>
        <b-card-body class="p-0">
          <b-row class="p-3 g-2">
            <b-col cols="3">
              <img class="rounded-2" :src="book02" alt="avatar">
            </b-col>
            <b-col cols="9">
              <div class="d-flex justify-content-between">
                <h6 class="m-0">Angular 4 Tutorial in audio (Compact Disk)</h6>
                <a href="#" class="small text-primary-hover">
                  <BIconXLg />
                </a>
              </div>
              <form class="choices-sm pt-2 col-4">
                <ChoicesSelect id="item-select" class="border-0 bg-transparent" data-search-enabled="false">
                  <option>1</option>
                  <option selected>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </ChoicesSelect>
              </form>
            </b-col>
          </b-row>
          <hr class="m-0">
          <b-row class="p-3 g-2">
            <b-col cols="3">
              <img class="rounded-2" :src="book04" alt="avatar">
            </b-col>
            <b-col cols="9">
              <div class="d-flex justify-content-between">
                <h6 class="m-0">The Principles of Beautiful Graphics Design (Paperback)</h6>
                <a href="#" class="small text-primary-hover">
                  <BIconXLg />
                </a>
              </div>
              <form class="choices-sm pt-2 col-4">
                <ChoicesSelect id="item-select1" class="border-0 bg-transparent" data-search-enabled="false">
                  <option selected>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </ChoicesSelect>
              </form>
            </b-col>
          </b-row>
        </b-card-body>
        <b-card-footer
          class="bg-transparent border-top py-3 text-center d-flex justify-content-between position-relative">
          <a href="#" class="btn btn-sm btn-light mb-0">View Cart</a>
          <a href="#" class="btn btn-sm btn-success mb-0">Checkout</a>
        </b-card-footer>
      </b-card>
    </div>
  </div>
</template>
<script setup lang="ts">
import { BIconCart3, BIconXLg } from 'bootstrap-icons-vue';
import book02 from '@/assets/images/book/02.jpg';
import book04 from '@/assets/images/book/04.jpg';
</script>