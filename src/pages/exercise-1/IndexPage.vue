<template>
  <div class="min-h-screen bg-white">
    <HeroBanner
      :background-src="heroBg"
      :mobile-src="heroBgMobile"
      title="Hello Developer!"
      subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
    />

    <CardGrid :cards="cards" @read-more="handleReadMore" />
  </div>
</template>

<script setup lang="ts">
import CardGrid from '@/components/organisms/CardGrid.vue'
import HeroBanner from '@/components/organisms/HeroBanner.vue'
import { ROUTE_NAME } from '@/constants/route-name'
import type { CardDataType } from '@/types/card.type'
import { useRouter } from 'vue-router'

import heroBg from '@/assets/1920x650.svg'
import cardImg from '@/assets/400x300.svg'
import heroBgMobile from '@/assets/600x600.svg'

const router = useRouter()

const cards: CardDataType[] = [
  {
    imageSrc: cardImg,
    imageAlt: 'Card image 1',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  },
  {
    imageSrc: cardImg,
    imageAlt: 'Card image 2',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
  {
    imageSrc: cardImg,
    imageAlt: 'Card image 3',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.'
  }
]

const handleReadMore = (index: number) => {
  console.log('Read more clicked for card', index)

  // ex: navigate to exercise 2 page
  router.push({ name: ROUTE_NAME.EXERCISE_2 })
}
</script>
