<template>
  <div class="navbar-top navbar-dark bg-light d-none d-xl-block py-2 mx-2 mx-md-4 rounded-bottom-4">
    <b-container>
      <div class="d-lg-flex justify-content-lg-between align-items-center">
        <ul class="nav align-items-center justify-content-center">
          <li class="nav-item me-3" v-b-tooltip.hover.bottom="'Sunday Closed'">
            <span><font-awesome-icon :icon="faClock" class="me-2" />Visit time: Mon-Sat 9:00-19:00</span>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#"><font-awesome-icon :icon="faHeadset" class="me-2" />Call us now:
              +135-869-328</a>
          </li>
        </ul>

        <div class="nav d-flex align-items-center justify-content-center">
          <b-dropdown dropup variant="link" class="me-3" toggle-class="nav-link mb-0" menu-class="mt-2 min-w-auto shadow"
            no-caret>
            <template #button-content>
              <font-awesome-icon :icon="faGlobe" class="me-1" />
              Language
              <font-awesome-icon class="fa-sm" :icon="faChevronDown" />
            </template>
            <b-dropdown-item href="#" class="me-4">
              <img class="fa-fw me-2" :src="flagsuk" alt="" />
              English
            </b-dropdown-item>
            <b-dropdown-item href="#" class="me-4">
              <img class="fa-fw me-2" :src="flagssp" alt="" />
              Español
            </b-dropdown-item>
            <b-dropdown-item href="#" class="me-4">
              <img class="fa-fw me-2" :src="flagsfr" alt="" />
              Français
            </b-dropdown-item>
            <b-dropdown-item href="#" class="me-4">
              <img class="fa-fw me-2" :src="flagsgr" alt="" />
              Deutsch
            </b-dropdown-item>
          </b-dropdown>
          <ul class="list-unstyled d-flex mb-0">
            <li> <a class="px-2 nav-link" href="#"><font-awesome-icon :icon="faFacebook" /></a> </li>
            <li> <a class="px-2 nav-link" href="#"><font-awesome-icon :icon="faInstagram" /></a> </li>
            <li> <a class="px-2 nav-link" href="#"><font-awesome-icon :icon="faTwitter" /></a> </li>
            <li> <a class="ps-2 nav-link" href="#"><font-awesome-icon :icon="faLinkedinIn" /></a> </li>
          </ul>
        </div>
      </div>
    </b-container>
  </div>

  <StickyHeader class-name="navbar-light navbar-sticky header-static">
    <nav class="navbar navbar-expand-xl">
      <b-container>
        <AppMenu :menu-items="menuItems" ul-class="mx-auto" logo-class="me-0">
          <AdvanceMenu />
        </AppMenu>
        <NavSearchDropdown />
        <ProfileDropdown className='ms-1 ms-lg-0' />
      </b-container>
    </nav>
  </StickyHeader>
</template>
<script setup lang="ts">
import StickyHeader from '@/components/StickyHeader.vue';
import ProfileDropdown from '@/components/ProfileDropdown.vue';
import NavSearchDropdown from '@/components/NavSearchDropdown.vue';
import AdvanceMenu from '@/components/AdvanceMenu.vue';

import { faHeadset, faGlobe, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import { faFacebook, faInstagram, faTwitter, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

import flagsuk from '@/assets/images/flags/uk.svg';
import flagssp from '@/assets/images/flags/sp.svg';
import flagsfr from '@/assets/images/flags/fr.svg';
import flagsgr from '@/assets/images/flags/gr.svg';

import AppMenu from '@/components/navbar/AppMenu/index.vue';
import { getAppMenuItems, type MenuItemType } from '@/helpers/menu';
const menuItems: MenuItemType[] = getAppMenuItems();
</script>