<template>
  <li>
    <router-link class="dropdown-item icons-center" :target="item.target" v-if="item.route"
      :to="{ name: item.route?.name, params: item.route?.params }"
      :class="{ active: item.route.name === currentRouteName }">
      <component :is="item.icon" class="fa-fw me-1" />
      {{ item.label }}
    </router-link>
  </li>
</template>

<script lang="ts" setup>
import router from '@/router';
import type { MenuItemType } from '@/helpers/menu';

const currentRouteName = router.currentRoute.value.name;

type SubMenuType = {
  item: MenuItemType;
};
defineProps<SubMenuType>();
</script>
