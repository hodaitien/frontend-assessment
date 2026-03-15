<template>
  <div class="flex items-center gap-2">
    <span class="text-[11px] leading-none font-normal text-white">${{ price }}</span>
    <span v-if="originalPrice" class="text-[11px] leading-none font-normal text-[#AAAAAA] line-through">
      ${{ originalPrice }}
    </span>
  </div>
</template>

<script setup lang="ts">
interface Props {
  price: string
  originalPrice?: string
}

withDefaults(defineProps<Props>(), {
  originalPrice: ''
})
</script>
