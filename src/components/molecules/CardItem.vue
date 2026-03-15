<template>
  <article
    class="group flex h-full flex-col overflow-hidden rounded-sm border border-gray-200 bg-white shadow-sm transition-all duration-300 ease-out hover:-translate-y-1.5 hover:shadow-lg"
  >
    <div class="p-3">
      <div class="overflow-hidden rounded-xs">
        <img
          :src="imageSrc"
          :alt="imageAlt"
          class="h-auto w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          loading="lazy"
        />
      </div>
    </div>

    <div class="flex flex-1 flex-col gap-5 px-5 pb-5">
      <p class="flex-1 text-center text-sm leading-relaxed text-gray-600">
        {{ text }}
      </p>

      <div class="flex justify-center">
        <RouterLink
          :to="to"
          class="inline-flex cursor-pointer items-center justify-center rounded-full border-2 border-gray-900 bg-transparent px-6 py-2 text-xs font-semibold tracking-widest text-gray-900 transition-all duration-300 ease-out hover:bg-gray-900 hover:text-white active:scale-95"
        >
          READ MORE
        </RouterLink>
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
import type { RouteLocationRaw } from 'vue-router'
import { RouterLink } from 'vue-router'

interface Props {
  imageSrc: string
  imageAlt?: string
  text: string
  to?: RouteLocationRaw
}

withDefaults(defineProps<Props>(), {
  imageAlt: 'Card image',
  to: '/'
})
</script>
