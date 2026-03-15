<template>
  <div
    class="absolute bottom-0 w-full bg-[#144561] px-3 pt-6 pb-10 2xl:px-6 2xl:py-10"
    data-aos="fade"
    data-aos-duration="600"
  >
    <div class="mx-auto grid grid-cols-1 gap-[10px] 2xl:grid-cols-3">
      <!-- Column 1: Content -->
      <div class="min-w-0">
        <p class="mb-2 text-[12px] font-semibold text-white" data-aos="fade-down" data-aos-duration="600">
          {{ subtitle }}
        </p>
        <h2
          class="mb-4 text-[36px] leading-none font-normal tracking-normal text-white md:text-[24px] 2xl:text-[46px] 2xl:leading-[64px]"
          data-aos="fade-up"
          data-aos-duration="650"
          data-aos-delay="150"
        >
          {{ heading }}
        </h2>
        <p
          class="mb-4 text-[11px] leading-[15px] font-normal text-white md:text-[12px] md:leading-[14px]"
          data-aos="fade-up"
          data-aos-duration="650"
          data-aos-delay="300"
        >
          {{ body }}
        </p>
        <div class="flex flex-wrap gap-2" data-aos="zoom-in" data-aos-duration="650" data-aos-delay="450">
          <BaseButton variant="solid" color-scheme="light" :pill="false" size="md">
            {{ ctaPrimary }}
          </BaseButton>
          <BaseButton variant="outline" color-scheme="light" :pill="false" size="md">
            {{ ctaSecondary }}
          </BaseButton>
        </div>
      </div>

      <!-- Column 2 & 3 -->
      <div class="hidden md:block" aria-hidden="true" />
      <div class="hidden md:block" aria-hidden="true" />
    </div>
  </div>
</template>

<script setup lang="ts">
import BaseButton from '@/components/atoms/BaseButton.vue'

interface Props {
  subtitle: string
  heading: string
  body: string
  ctaPrimary: string
  ctaSecondary: string
}

defineProps<Props>()
</script>
