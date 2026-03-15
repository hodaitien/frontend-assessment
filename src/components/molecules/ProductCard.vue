<template>
  <a :href="productUrl" class="group flex flex-col overflow-hidden border-0 bg-[#52994B]">
    <div class="h-[276px] w-full overflow-hidden md:h-[710px]" aria-hidden="true">
      <picture class="block h-full w-full">
        <source v-if="mobileImageSrc" media="(max-width: 767px)" :srcset="mobileImageSrc" />
        <img
          :src="imageSrc"
          :alt="imageAlt"
          class="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        />
      </picture>
    </div>

    <div
      class="flex h-[69.1px] flex-col justify-between border-0 px-2 py-2 md:h-[48.1px] md:flex-row md:items-end md:px-3"
    >
      <div class="flex flex-col gap-1">
        <p class="text-[12px] leading-[16px] font-medium text-white">{{ brandName }}</p>
        <h3 class="text-[12px] leading-[16px] font-medium text-white">{{ heading }}</h3>
      </div>
      <div class="pt-1 md:pt-0">
        <PriceDisplay :price="price" :original-price="originalPrice" />
      </div>
    </div>
  </a>
</template>

<script setup lang="ts">
import PriceDisplay from '@/components/atoms/PriceDisplay.vue'

interface Props {
  imageSrc: string
  mobileImageSrc?: string
  imageAlt?: string
  brandName?: string
  heading?: string
  price?: string
  originalPrice?: string
  productUrl?: string
}

withDefaults(defineProps<Props>(), {
  mobileImageSrc: '',
  imageAlt: 'Product image',
  brandName: 'Brand Name',
  heading: 'Heading',
  price: '0.00',
  originalPrice: '',
  productUrl: '#'
})
</script>
