<template>
  <StickyHeader class-name="navbar-light navbar-sticky header-static">
    <nav class="navbar navbar-expand-xl">
      <b-container>
        <AppMenu :menu-items="menuItems" ul-class="mx-auto" nav-class="w-100">
          <AdvanceMenu />
          <template #collapseMenuFooter>
            <NavSearch />
          </template>
        </AppMenu>
        <ShopCart v-if="showShopCart" />
        <ProfileDropdown className='ms-1 ms-lg-0' />
      </b-container>
    </nav>
  </StickyHeader>
</template>
<script setup lang="ts">
import StickyHeader from '@/components/StickyHeader.vue';
import ProfileDropdown from '@/components/ProfileDropdown.vue';
import NavSearch from '@/components/NavSearch.vue';
import ShopCart from '@/components/ShopCart.vue';
import AdvanceMenu from '@/components/AdvanceMenu.vue';
import AppMenu from '@/components/navbar/AppMenu/index.vue';
import { getAppMenuItems, type MenuItemType } from '@/helpers/menu';
const menuItems: MenuItemType[] = getAppMenuItems();

type TopBarPropType = {
  showShopCart?: boolean;
};

defineProps<TopBarPropType>();
</script>