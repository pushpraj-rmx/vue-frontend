<template>
  <router-link class="nav-link" :class="currentRouteName === item.route?.name && 'active'"
    :to="{ name: item.route?.name, params: item.route?.params }">
    <template v-if="item.icon">
      <font-awesome-icon :icon="item.icon" class="fa-fw me-1" />
    </template>
    {{ item.label }}
    <span class="badge text-bg-success rounded-circle ms-2" v-if="item.badge">{{item.badge}}</span>
  </router-link>
</template>

<script setup lang="ts">
import type { SubMenus } from "@/helpers/menu";
import router from "@/router";

defineProps<SubMenus>();

const currentRouteName = router.currentRoute.value.name;
</script>
