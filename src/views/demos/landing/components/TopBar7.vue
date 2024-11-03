<template>
  <StickyHeader class-name="navbar-light navbar-sticky navbar-transparent">
    <nav class="navbar navbar-expand-xl">
      <b-container>
        <AppMenu :menu-items="menuItems.slice(0, 1)" ul-class="ms-auto" logo-class="me-0">
          <li class="nav-item dropdown"><a class="nav-link" href="#">Course</a></li>
          <li class="nav-item"><router-link class="nav-link" :to="{ name: 'about.contact.us' }">Contact</router-link>
          </li>
        </AppMenu>
        <DropDown>
          <b-button variant="light" size="sm" class="lh-1 p-2 mb-0" id="bd-theme" type="button" aria-expanded="false"
            data-bs-toggle="dropdown" data-bs-display="static">
            <BIconCircleHalf />
          </b-button>
          <ul class="dropdown-menu min-w-auto dropdown-menu-end" aria-labelledby="bd-theme">
            <li class="mb-1" v-for="mode in themeModes" :key="mode.theme">
              <button type="button" class="dropdown-item d-flex align-items-center" data-bs-theme-value="light"
                :class="{ active: mode.theme === useLayout.theme }" @click="useLayout.setTheme(mode.theme)">
                <component :is="mode.icon" class="me-1" />
                {{ toSentenceCase(mode.theme) }}
              </button>
            </li>
          </ul>
        </DropDown>

        <div class="navbar-nav ms-3 d-none d-sm-block">
          <b-button variant="dark" size="sm" class="mb-0">Buy now</b-button>
        </div>

      </b-container>
    </nav>
  </StickyHeader>

</template>
<script setup lang="ts">
import StickyHeader from '@/components/StickyHeader.vue';
import DropDown from '@/components/DropDown.vue';
import { useLayoutStore } from '@/stores/layout';
import type { ThemeModeType } from '@/types/layout';
import { toSentenceCase } from '@/helpers/change-casing';
import AppMenu from '@/components/navbar/AppMenu/index.vue';
import { getAppMenuItems, type MenuItemType } from '@/helpers/menu';
import { BIconSunFill, BIconMoonStarsFill, BIconCircleHalf } from 'bootstrap-icons-vue';

const useLayout = useLayoutStore();

const themeModes: ThemeModeType[] = [
  {
    icon: BIconSunFill,
    theme: 'light'
  },
  {
    icon: BIconMoonStarsFill,
    theme: 'dark'
  },
  {
    icon: BIconCircleHalf,
    theme: 'auto'
  }
];

const menuItems: MenuItemType[] = getAppMenuItems();
</script>