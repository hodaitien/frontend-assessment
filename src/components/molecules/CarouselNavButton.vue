<template>
  <button
    type="button"
    :aria-label="direction === 'prev' ? 'Previous slide' : 'Next slide'"
    class="pointer-events-auto flex items-center justify-center text-white transition-opacity hover:opacity-70"
    v-bind="$attrs"
  >
    <ArrowLeftIcon v-if="direction === 'prev'" :size="iconSize" />
    <ArrowRightIcon v-else :size="iconSize" />
  </button>
</template>

<script setup lang="ts">
import ArrowLeftIcon from '@/components/atoms/ArrowLeftIcon.vue'
import ArrowRightIcon from '@/components/atoms/ArrowRightIcon.vue'

interface Props {
  direction: 'prev' | 'next'
  iconSize?: number
}

withDefaults(defineProps<Props>(), {
  iconSize: 32
})
</script>
