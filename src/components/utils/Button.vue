<template>
  <button class="rounded-md bg-blue-500 p-2 text-white">
    <slot />
  </button>
</template>

<script setup lang="ts">
defineProps<{
  label: string
}>()
</script>
