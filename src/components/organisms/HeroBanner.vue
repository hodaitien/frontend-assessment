<template>
  <section class="relative w-full overflow-hidden">
    <picture>
      <source v-if="mobileSrc" media="(max-width: 639px)" :srcset="mobileSrc" />
      <img :src="backgroundSrc" alt="Hero banner" class="h-[320px] w-full object-cover sm:h-[400px] lg:h-[650px]" />
    </picture>

    <!-- Background overlay -->
    <div class="absolute inset-0" style="background-color: rgba(0, 0, 0, 0.3)"></div>

    <div class="absolute inset-0 flex flex-col items-center justify-center text-center">
      <h1
        ref="titleRef"
        class="mb-2 text-6xl font-bold text-white drop-shadow-md sm:mb-3 sm:text-4xl lg:text-7xl"
        :class="mounted ? 'animate-in fade-in slide-in-from-bottom-6 duration-700' : 'opacity-0'"
      >
        {{ title }}
      </h1>
      <p
        ref="subtitleRef"
        class="text-lg text-white/90 drop-shadow sm:text-2xl lg:text-4xl"
        :class="mounted ? 'animate-in fade-in slide-in-from-bottom-4 delay-200 duration-700' : 'opacity-0'"
      >
        {{ subtitle }}
      </p>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'

interface Props {
  backgroundSrc: string
  mobileSrc?: string
  title: string
  subtitle?: string
}

withDefaults(defineProps<Props>(), {
  backgroundSrc: '',
  mobileSrc: '',
  title: '',
  subtitle:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
})

const mounted = ref(false)

onMounted(() => {
  mounted.value = true
})
</script>
