<template>
  <StickyHeader class-name="navbar-light navbar-transparent navbar-sticky header-static">
    <nav class="navbar navbar-expand-lg">
      <b-container>
        <LogoBox logo-class="me-0"/>
        <MobileNavbarToggler />
        <b-collapse class="navbar-collapse" id="navbarCollapse">
          <ul class="navbar-nav navbar-nav-scroll mx-auto">
            <li class="nav-item"><a class="nav-link" href="#">About Eduport</a></li>
            <li class="nav-item"><a class="nav-link" href="#">Careers</a></li>
            <li class="nav-item"><a class="nav-link" href="#">Help center</a></li>
          </ul>
        </b-collapse>
        <div class="navbar-nav ms-2">
          <b-button variant="primary" size="sm" class="mb-0">Get access</b-button>
        </div>
      </b-container>
    </nav>
  </StickyHeader>
</template>
<script setup lang="ts">
import LogoBox from '@/components/LogoBox.vue';
import StickyHeader from '@/components/StickyHeader.vue';
import MobileNavbarToggler from '@/components/MobileNavbarToggler.vue';
</script>