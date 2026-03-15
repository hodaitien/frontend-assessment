<template>
  <svg :width="size" :height="size" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" v-bind="$attrs">
    <path
      d="M17.7238 8.39062L10.1145 16L17.7238 23.6093L19.6092 21.724L13.8852 16L19.6092 10.276L17.7238 8.39062Z"
      fill="currentColor"
    />
  </svg>
</template>

<script setup lang="ts">
interface Props {
  size?: number | string
  label?: string
}

withDefaults(defineProps<Props>(), {
  size: 32,
  label: ''
})
</script>
