<template>
  <component
    :is="is ?? 'div'"
    ref="dropdown"
    class="dropdown"
    :class="customClass"
    :id="id"
    v-bind="$attrs"
  >
    <slot />
  </component>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { Dropdown } from "bootstrap";

type DropDownPropType = {
  is?: string;
  id?: string;
  customClass?: string;
};

defineProps<DropDownPropType>();

const dropdown = ref();

onMounted(() => {
  Dropdown.getOrCreateInstance(dropdown.value);
});
</script>
