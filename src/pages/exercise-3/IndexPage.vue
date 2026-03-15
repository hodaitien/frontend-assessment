<template>
  <div class="min-h-screen bg-[#F9F9F9]">
    <!-- Hero Carousel -->
    <HeroCarousel :slides="heroSlides" />

    <!-- Product Grid Section -->
    <section
      class="bg-[#F9F9F9] px-3 py-8 md:px-6 md:py-16"
      data-aos="fade-up"
      data-aos-duration="600"
      data-aos-easing="ease-out-cubic"
    >
      <!-- Section heading -->
      <h2
        class="mb-6 text-center text-[32px] leading-[38px] font-normal text-black md:mb-12 md:text-[48px] md:leading-[55px]"
        data-aos="fade-up"
        data-aos-duration="600"
        data-aos-delay="100"
        data-aos-easing="ease-out-cubic"
      >
        Heading
      </h2>

      <!-- 4-col desktop / 2-col mobile grid -->
      <div class="mx-auto">
        <div class="grid grid-cols-2 gap-1 xl:grid-cols-4 xl:gap-4">
          <div
            v-for="(product, index) in products"
            :key="index"
            class="group shadow-[0_0_16.1px_0_#00000080] transition-all duration-500 ease-out hover:-translate-y-2"
            data-aos="fade-up"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="700"
            :data-aos-delay="index * 100"
          >
            <ProductCard
              :image-src="product.imageSrc"
              :mobile-image-src="product.mobileImageSrc"
              :image-alt="product.imageAlt"
              :brand-name="product.brandName"
              :heading="product.heading"
              :price="product.price"
              :original-price="product.originalPrice"
            />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import ProductCard from '@/components/molecules/ProductCard.vue'
import HeroCarousel from '@/components/organisms/HeroCarousel.vue'
import type { ProductType, SlideType } from '@/types/home.type'

import cardImageMobile from '@/assets/images/173.5x276.jpg'
import bannerMobile from '@/assets/images/375x698.jpg'
import cardImageDesktop from '@/assets/images/462x710.jpg'
import bannerDesktop from '@/assets/images/hero-banner.png'

const heroSlides: SlideType[] = [
  {
    desktopImage: bannerDesktop,
    mobileImage: bannerMobile,
    subtitle: 'Eyebrow',
    heading: 'Welcome Developer!',
    body: 'Your goal is to translate the provided Figma designs into a living, functional interface. We value pixel-perfection; your output should match the design specifications exactly in terms of colour, spacing, typography, and visual hierarchy.',
    ctaPrimary: 'Shop Now',
    ctaSecondary: 'Discover All'
  },
  {
    desktopImage: bannerDesktop,
    mobileImage: bannerMobile,
    subtitle: 'Eyebrow',
    heading: 'Welcome PHP Developer!',
    body: 'Your goal is to translate the provided Figma designs into a living, functional interface. We value pixel-perfection; your output should match the design specifications exactly in terms of colour, spacing, typography, and visual hierarchy.',
    ctaPrimary: 'Shop Now',
    ctaSecondary: 'Discover All'
  },
  {
    desktopImage: bannerDesktop,
    mobileImage: bannerMobile,
    subtitle: 'Eyebrow',
    heading: 'Welcome Python Developer!',
    body: 'Your goal is to translate the provided Figma designs into a living, functional interface. We value pixel-perfection; your output should match the design specifications exactly in terms of colour, spacing, typography, and visual hierarchy.',
    ctaPrimary: 'Shop Now',
    ctaSecondary: 'Discover All'
  },
  {
    desktopImage: bannerDesktop,
    mobileImage: bannerMobile,
    subtitle: 'Eyebrow',
    heading: 'Welcome Ruby Developer!',
    body: 'Your goal is to translate the provided Figma designs into a living, functional interface. We value pixel-perfection; your output should match the design specifications exactly in terms of colour, spacing, typography, and visual hierarchy.',
    ctaPrimary: 'Shop Now',
    ctaSecondary: 'Discover All'
  },
  {
    desktopImage: bannerDesktop,
    mobileImage: bannerMobile,
    subtitle: 'Eyebrow',
    heading: 'Welcome JavaScript Developer!',
    body: 'Your goal is to translate the provided Figma designs into a living, functional interface. We value pixel-perfection; your output should match the design specifications exactly in terms of colour, spacing, typography, and visual hierarchy.',
    ctaPrimary: 'Shop Now',
    ctaSecondary: 'Discover All'
  }
]

const products: ProductType[] = [
  {
    imageSrc: cardImageDesktop,
    mobileImageSrc: cardImageMobile,
    imageAlt: 'Brand Name - Heading',
    brandName: 'Brand Name',
    heading: 'Heading',
    price: '80.95',
    originalPrice: '80.95',
    productUrl: '#'
  },
  {
    imageSrc: cardImageDesktop,
    mobileImageSrc: cardImageMobile,
    imageAlt: 'Brand Name - Heading',
    brandName: 'Brand Name',
    heading: 'Heading',
    price: '80.95',
    originalPrice: '80.95',
    productUrl: '#'
  },
  {
    imageSrc: cardImageDesktop,
    mobileImageSrc: cardImageMobile,
    imageAlt: 'Brand Name - Heading',
    brandName: 'Brand Name',
    heading: 'Heading',
    price: '80.95',
    originalPrice: '80.95',
    productUrl: '#'
  },
  {
    imageSrc: cardImageDesktop,
    mobileImageSrc: cardImageMobile,
    imageAlt: 'Brand Name - Heading',
    brandName: 'Brand Name',
    heading: 'Heading',
    price: '80.95',
    originalPrice: '80.95',
    productUrl: '#'
  }
]
</script>
