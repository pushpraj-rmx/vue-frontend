<template>
  <StickyHeader class-name="navbar-light navbar-sticky">
    <nav class="navbar navbar-expand-lg">
      <b-container>
        <LogoBox logo-class="me-0"/>
        <MobileNavbarToggler />
        <b-collapse class="navbar-collapse" id="navbarCollapse">
          <ul class="navbar-nav navbar-nav-scroll ms-auto">
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle arrow-none d-flex justify-content-between align-items-center w-100 active" href="#" id="demoMenu" data-bs-toggle="dropdown"
                aria-haspopup="true" aria-expanded="false">Demos
                <font-awesome-icon :icon="faAngleDown" class="fa-sm ms-1" />
              </a>
              <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="demoMenu">
                <li> <a class="dropdown-item" href="#">Menu Item</a></li>
                <li> <a class="dropdown-item" href="#">Menu Item</a></li>
              </ul>
            </li>
            <li class="nav-item dropdown"><a class="nav-link" href="#">Course</a></li>
            <li class="nav-item"><a class="nav-link" href="#">Contact</a></li>
          </ul>
        </b-collapse>
        <div class="navbar-nav ms-2 d-none d-sm-block">
          <b-button variant="dark" size="sm" class="mb-0">Buy now</b-button>
        </div>
      </b-container>
    </nav>
  </StickyHeader>
</template>
<script setup lang="ts">
import LogoBox from '@/components/LogoBox.vue';
import StickyHeader from '@/components/StickyHeader.vue';
import MobileNavbarToggler from '@/components/MobileNavbarToggler.vue';

import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
</script>