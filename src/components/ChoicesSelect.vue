<template>
  <label v-if="label" :for="id" class="form-label text-muted">{{ label }}</label>
  <select :id="id" :value="modelValue" @change="updateValue" v-bind="$attrs">
    <slot />
    <template v-if="options">
      <option v-for="(option, idx) in options" :key="idx" :value="option.value">
        {{ option.text }}
      </option>
    </template>
  </select>
</template>

<script setup lang="ts">
import Choices from 'choices.js'
import { onMounted } from 'vue'

type ChoicesSelectPropsType = {
  id: string
  label?: string
  modelValue?: string
  options?: { value: string | number; text: string }[]
  choiceOptions?: object
}
const props = defineProps<ChoicesSelectPropsType>()

const emit = defineEmits(['update:modelValue'])

const updateValue = (e: Event) => {
  emit('update:modelValue', (e.target as HTMLSelectElement).value)
}

onMounted(() => {
  const choices = new Choices(`#${props.id}`, { ...props.choiceOptions })
})
</script>
