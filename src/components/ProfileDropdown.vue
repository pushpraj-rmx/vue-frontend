<template>
  <DropDown :custom-class="className">
    <a class="avatar avatar-sm p-0" href="#" id="profileDropdown" role="button" data-bs-auto-close="outside"
      data-bs-display="static" data-bs-toggle="dropdown" aria-expanded="false">
      <img class="avatar-img rounded-circle" :src="avatar01" alt="avatar" />
    </a>
    <ul class="dropdown-menu dropdown-animation dropdown-menu-end shadow pt-3" aria-labelledby="profileDropdown">
      <li class="px-3 mb-3">
        <div class="d-flex align-items-center">
          <div class="avatar me-3">
            <img class="avatar-img rounded-circle shadow" :src="avatar01" alt="avatar" />
          </div>
          <div>
            <a class="h6" href="#">Lori Ferguson</a>
            <p class="small m-0">example@gmail.com</p>
          </div>
        </div>
      </li>
      <li>
        <hr class="dropdown-divider">
      </li>
      <li><a class="dropdown-item" href="#">
          <BIconPerson class="fa-fw me-2" />Edit Profile
        </a></li>
      <li><a class="dropdown-item" href="#">
          <BIconGear class="fa-fw me-2" />Account Settings
        </a></li>
      <li><a class="dropdown-item" href="#">
          <BIconInfoCircle class="fa-fw me-2" />Help
        </a></li>
      <li><a class="dropdown-item bg-danger-soft-hover" href="#">
          <BIconPower class="fa-fw me-2" />Sign Out
        </a></li>
      <li>
        <hr class="dropdown-divider">
      </li>
      <li>
      <div class="bg-light dark-mode-switch theme-icon-active d-flex align-items-center p-1 rounded mt-2">
        <template v-for="mode in themeModes" :key="mode.theme">
          <button type="button" class="btn btn-sm mb-0" data-bs-theme-value="light"
            :class="{ active: mode.theme === useLayout.theme }" @click="useLayout.setTheme(mode.theme)">
            <component :is="mode.icon" />
            {{ toSentenceCase(mode.theme) }}
          </button>
        </template>
      </div>
      </li>
    </ul>
  </DropDown>
</template>
<script setup lang="ts">
import DropDown from '@/components/DropDown.vue';
import { useLayoutStore } from '@/stores/layout';
import type { ThemeModeType } from '@/types/layout';
import { toSentenceCase } from '@/helpers/change-casing';

import { BIconPerson, BIconGear, BIconInfoCircle, BIconPower, BIconSun, BIconMoonStars, BIconCircleHalf } from 'bootstrap-icons-vue';
import avatar01 from '@/assets/images/avatar/01.jpg';

const useLayout = useLayoutStore();

const themeModes: ThemeModeType[] = [
  {
    icon: BIconSun,
    theme: 'light'
  },
  {
    icon: BIconMoonStars,
    theme: 'dark'
  },
  {
    icon: BIconCircleHalf,
    theme: 'auto'
  }
];

type ProfileDropDownPropType = {
  className?: string;
};

defineProps<ProfileDropDownPropType>();
</script>