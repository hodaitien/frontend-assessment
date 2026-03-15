<template>
  <svg :width="size" :height="size" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" v-bind="$attrs">
    <path
      d="M12.9427 22.5995L20.552 14.9902L12.9427 7.38086L11.0574 9.26619L16.7814 14.9902L11.0574 20.7142L12.9427 22.5995Z"
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
