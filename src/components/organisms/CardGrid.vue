<template>
  <section class="w-full bg-white py-10 lg:py-14">
    <div class="mx-auto max-w-5xl px-6 lg:px-8">
      <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <div
          v-for="(card, index) in cards"
          :key="index"
          class="h-full"
          data-aos="fade-up"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="700"
          :data-aos-delay="index * 150"
        >
          <CardItem
            :image-src="card.imageSrc"
            :image-alt="card.imageAlt"
            :text="card.text"
            @read-more="$emit('read-more', index)"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import CardItem from '@/components/molecules/CardItem.vue'
import type { CardDataType } from '@/types/card.type'

interface Props {
  cards: CardDataType[]
}

defineProps<Props>()

defineEmits<{
  'read-more': [index: number]
}>()
</script>
