<template>
  <StickyHeader class-name="navbar-light navbar-sticky header-static">
    <nav class="navbar navbar-expand-xl">
      <b-container class="px-3 px-xl-5" fluid>
        <AppMenu :menu-items="menuItems" ul-class="me-auto" nav-class="w-100">
          <template #collapseMenuHeader>
            <CategoryMenu ul-class="me-auto"
              link-class="bg-primary bg-opacity-10 rounded-3 text-primary px-3 py-3 py-xl-0" />
            </template>
            <MegaMenuDropdown />
            <AdvanceMenu />
            <template #collapseMenuFooter>
              <NavSearch />
            </template>
          </AppMenu>
        <ProfileDropdown className='ms-1 ms-lg-0'/>
      </b-container>
    </nav>
  </StickyHeader>
</template>
<script setup lang="ts">
import StickyHeader from '@/components/StickyHeader.vue';
import ProfileDropdown from '@/components/ProfileDropdown.vue';
import NavSearch from '@/components/NavSearch.vue';
import CategoryMenu from '@/components/CategoryMenu.vue';
import MegaMenuDropdown from '@/components/MegaMenuDropdown.vue';
import AdvanceMenu from '@/components/AdvanceMenu.vue';
import AppMenu from '@/components/navbar/AppMenu/index.vue';

import { getAppMenuItems, type MenuItemType } from '@/helpers/menu';
const menuItems: MenuItemType[] = getAppMenuItems();
</script>