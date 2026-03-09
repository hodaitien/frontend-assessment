<template>
  <div
    class="overflow-hidden rounded-2xl border border-gray-100/80 bg-white shadow-lg ring-1 shadow-gray-100/80 ring-gray-900/5"
  >
    <!-- Tab Bar -->
    <div class="border-b border-gray-100 bg-gray-50/80 px-6 pt-5 pb-0">
      <div class="relative flex gap-0">
        <button
          v-for="(item, index) in items"
          :key="index"
          class="relative z-10 cursor-pointer px-5 py-3 text-sm font-semibold transition-colors duration-200 focus:outline-none"
          :class="activeIndex === index ? 'text-indigo-700' : 'text-gray-500 hover:text-gray-800'"
          @click="onTabClick(index)"
        >
          {{ item.title }}

          <!-- Active underline indicator -->
          <span
            class="absolute right-0 bottom-0 left-0 h-0.5 rounded-t-full transition-all duration-300 ease-out"
            :class="activeIndex === index ? 'bg-indigo-600 opacity-100' : 'bg-transparent opacity-0'"
          />
        </button>
      </div>
    </div>

    <!-- Content -->
    <div class="p-6 lg:p-8">
      <Transition
        mode="out-in"
        enter-active-class="transition-[opacity,transform] duration-350 ease-out"
        enter-from-class="opacity-0 translate-y-3"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition-[opacity,transform] duration-150 ease-in"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 -translate-y-2"
      >
        <div
          :key="activeIndex"
          class="prose prose-sm prose-headings:text-gray-900 prose-a:text-indigo-600 prose-strong:text-gray-800 max-w-none leading-relaxed text-gray-600"
          v-html="items[activeIndex].content"
        />
      </Transition>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { TabItemType } from '@/types/tab.type'
import { ref } from 'vue'

interface Props {
  items: TabItemType[]
}

const { items } = defineProps<Props>()

const activeIndex = ref(0)

const onTabClick = (index: number) => {
  activeIndex.value = index
}
</script>
