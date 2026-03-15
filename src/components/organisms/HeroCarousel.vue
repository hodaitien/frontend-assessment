<template>
  <section class="hero-carousel w-full overflow-hidden" data-aos="fade" data-aos-duration="600">
    <Swiper
      :modules="swiperModules"
      :navigation="{ prevEl: '.hero-carousel-prev', nextEl: '.hero-carousel-next' }"
      :pagination="{ clickable: true }"
      :autoplay="{ delay: 3000, disableOnInteraction: false }"
      :loop="true"
      :speed="600"
      :grab-cursor="true"
      effect="fade"
      :fade-effect="{ crossFade: true }"
      class="w-full"
    >
      <SwiperSlide v-for="(slide, i) in slides" :key="i">
        <div class="relative w-full">
          <img
            :src="slide.desktopImage"
            :alt="slide.heading"
            class="hidden w-full object-cover md:block"
            style="aspect-ratio: 1920 / 1080"
          />
          <img
            :src="slide.mobileImage"
            :alt="slide.heading"
            class="block w-full object-cover md:hidden"
            style="aspect-ratio: 375 / 698"
          />
        </div>

        <HeroSlideContent
          :subtitle="slide.subtitle"
          :heading="slide.heading"
          :body="slide.body"
          :cta-primary="slide.ctaPrimary"
          :cta-secondary="slide.ctaSecondary"
        />
      </SwiperSlide>

      <template #container-end>
        <div
          class="absolute inset-x-0 top-0 z-10 aspect-[375/698] md:aspect-[1920/1080]"
          data-aos="fade"
          data-aos-duration="500"
          data-aos-delay="400"
        >
          <CarouselNavButton
            direction="prev"
            :icon-size="isDesktop ? 32 : 20"
            class="hero-carousel-prev absolute top-1/2 left-2 -translate-y-1/2 cursor-pointer md:left-6"
          />
          <CarouselNavButton
            direction="next"
            :icon-size="isDesktop ? 32 : 20"
            class="hero-carousel-next absolute top-1/2 right-2 -translate-y-1/2 cursor-pointer md:right-6"
          />
        </div>
      </template>
    </Swiper>
  </section>
</template>

<script setup lang="ts">
import CarouselNavButton from '@/components/molecules/CarouselNavButton.vue'
import HeroSlideContent from '@/components/molecules/HeroSlideContent.vue'
import type { SlideType } from '@/types/home.type'
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { onMounted, onUnmounted, ref } from 'vue'

import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/pagination'

const swiperModules = [Navigation, Pagination, Autoplay, EffectFade]

interface Props {
  slides: SlideType[]
}

defineProps<Props>()

const isDesktop = ref(false)

onMounted(() => {
  updateIsDesktop()
  window.addEventListener('resize', updateIsDesktop)
})

onUnmounted(() => {
  window.removeEventListener('resize', updateIsDesktop)
})

const updateIsDesktop = () => {
  isDesktop.value = window.innerWidth >= 768
}
</script>

<style scoped>
:deep(.swiper-pagination-bullet) {
  width: 8px;
  height: 8px;
  flex-shrink: 0;
  border-radius: 9999px;
  background: #c2c2c2;
  opacity: 1;
  cursor: pointer;
  transition: background 0.3s ease-out;
}

:deep(.swiper-pagination-bullet-active) {
  background: #ffffff;
}
</style>
