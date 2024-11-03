<template>
  <StickyHeader class-name="navbar-light navbar-sticky navbar-transparent">
    <nav class="navbar navbar-expand-xl">
      <b-container>
        <LogoBox />

        <button class="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse"
          aria-controls="navbarCollapse" aria-expanded="true" aria-label="Toggle navigation"
          v-b-toggle="'navbarCollapse'">
          <span class="me-2">
            <font-awesome-icon :icon="faSearch" class="fs-5" />
          </span>
        </button>
        <CategoryMenu ul-class="dropdown-clickable" showIcon />

        <b-collapse class="navbar-collapse collapse" id="navbarCollapse">
          <b-col xl="8">
            <div class="nav my-3 my-xl-0 px-4 flex-nowrap align-items-center">
              <div class="nav-item w-100">
                <b-form class="rounded position-relative">
                  <b-form-input class="pe-5 bg-secondary bg-opacity-10 border-0" type="search" placeholder="Search"
                    aria-label="Search" />
                  <button
                    class="btn btn-link bg-transparent px-2 py-0 position-absolute top-50 end-0 translate-middle-y"
                    type="submit">
                    <font-awesome-icon :icon="faSearch" class="fs-6 text-primary" />
                  </button>
                </b-form>
              </div>
            </div>
          </b-col>
        </b-collapse>

        <div class="navbar-nav position-relative overflow-visible me-3">
          <a href="#" class="nav-link">
            <font-awesome-icon :icon="faShoppingCart" class="fs-5" />
          </a>
          <span
            class="position-absolute top-0 start-100 translate-middle badge rounded-circle bg-success mt-xl-2 ms-n1">5
            <span class="visually-hidden">unread messages</span>
          </span>
        </div>

        <ul class="navbar-nav navbar-nav-scroll me-3 d-none d-xl-block">
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle arrow-none d-flex justify-content-between align-items-center w-100" href="#" id="language" data-bs-toggle="dropdown" aria-haspopup="true"
              aria-expanded="false">
              <font-awesome-icon :icon="faGlobe" class="me-2" />
              <span class="d-none d-lg-inline-block">Language</span>
              <font-awesome-icon :icon="faAngleDown" class="fa-sm ms-2" />
            </a>
            <ul class="dropdown-menu dropdown-menu-end min-w-auto" aria-labelledby="language">
              <li> <a class="dropdown-item" href="#"><img class="fa-fw me-2" :src="flagsuk" alt="">English</a></li>
              <li> <a class="dropdown-item" href="#"><img class="fa-fw me-2" :src="flagsgr" alt="">German</a></li>
              <li> <a class="dropdown-item" href="#"><img class="fa-fw me-2" :src="flagssp" alt="">French</a></li>
            </ul>
          </li>
        </ul>

        <div class="navbar-nav d-none d-lg-inline-block">
          <button class="btn btn-danger-soft mb-0">
            <font-awesome-icon :icon="faSignInAlt" class="me-1" />
            Sign Up
          </button>
        </div>
      </b-container>
    </nav>
  </StickyHeader>
</template>
<script setup lang="ts">
import LogoBox from '@/components/LogoBox.vue';
import StickyHeader from '@/components/StickyHeader.vue';
import CategoryMenu from '@/components/CategoryMenu.vue';

import { faSearch, faShoppingCart, faGlobe, faSignInAlt, faAngleDown } from '@fortawesome/free-solid-svg-icons';

import flagsuk from '@/assets/images/flags/uk.svg';
import flagsgr from '@/assets/images/flags/gr.svg';
import flagssp from '@/assets/images/flags/sp.svg';
</script>