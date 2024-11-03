<template>
  <LogoBox :logo-class="logoClass" />
  <MobileNavbarToggler />
  <b-collapse class="navbar-collapse" :class="navClass" id="navbarCollapse">
    <slot name="collapseMenuHeader" />
    <ul class="navbar-nav navbar-nav-scroll" :class="ulClass">
      <template v-for="(item, idx) in menuItems">
        <DropDown is="li" class="nav-item">
          <a class="nav-link dropdown-toggle arrow-none d-flex justify-content-between align-items-center w-100"
            :class="menuItemActive(menuItems, item.key, currentRouteName) && 'active'" href="#">
            <span>
              <component :is="item.icon" class="me-1 mb-1" v-if="showIcon" />
              {{ item.label }}
            </span>
            <font-awesome-icon :icon="faAngleDown" class="fa-sm ms-1" />
          </a>
          <ul class="dropdown-menu">
            <template v-for="(subItem, idx) in item.children" :key="subItem.key + idx">
              <MenuItemWithChildren v-if="subItem.children" :item="subItem" :menu="menuItems" />
              <MenuItem v-else :item="subItem" />
            </template>
          </ul>
        </DropDown>
      </template>
      <slot />

    </ul>
    <slot name="collapseMenuFooter" />
  </b-collapse>
</template>
<script setup lang="ts">
import router from '@/router';
import DropDown from '@/components/DropDown.vue';

import LogoBox from '@/components/LogoBox.vue';
import MobileNavbarToggler from '@/components/MobileNavbarToggler.vue';

import MenuItem from '@/components/navbar/AppMenu/MenuItem.vue';
import MenuItemWithChildren from '@/components/navbar/AppMenu/MenuItemWithChildren.vue';
import { menuItemActive } from '@/helpers/getActiveClass';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

import type { MenuItemType } from '@/helpers/menu';

type AppMenuProps = {
  containerClass?: boolean;
  logoClass?: string;
  navClass?: string;
  showIcon?: boolean;
  ulClass?: string;
  menuItems: MenuItemType[];
};

defineProps<AppMenuProps>();
const currentRouteName = router.currentRoute.value.name;
</script>