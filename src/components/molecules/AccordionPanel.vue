<template>
  <div class="space-y-3">
    <div
      v-for="(item, index) in items"
      :key="index"
      class="group overflow-hidden rounded-2xl border bg-white transition-all duration-300 ease-out"
      :class="
        isOpen(index)
          ? 'border-indigo-200 shadow-md ring-1 shadow-indigo-50 ring-indigo-100'
          : 'border-gray-100 shadow-sm hover:border-gray-200 hover:shadow-md'
      "
    >
      <button class="flex w-full items-center gap-4 px-5 py-4 text-left focus:outline-none" @click="onToggle(index)">
        <!-- Number Badge -->
        <span
          class="flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-bold transition-all duration-300"
          :class="
            isOpen(index)
              ? 'bg-indigo-600 text-white shadow-sm shadow-indigo-200'
              : 'bg-gray-100 text-gray-500 group-hover:bg-indigo-50 group-hover:text-indigo-500'
          "
        >
          {{ index + 1 }}
        </span>

        <!-- Title -->
        <span
          class="flex-1 text-sm font-semibold transition-colors duration-200"
          :class="isOpen(index) ? 'text-indigo-700' : 'text-gray-800'"
        >
          {{ item.title }}
        </span>

        <!-- Chevron Icon -->
        <span
          class="flex h-7 w-7 shrink-0 items-center justify-center rounded-full transition-all duration-300 ease-out"
          :class="
            isOpen(index)
              ? 'rotate-180 bg-indigo-100 text-indigo-600'
              : 'bg-gray-50 text-gray-400 group-hover:bg-indigo-50 group-hover:text-indigo-400'
          "
        >
          <ChevronDown class="h-4 w-4 transition-transform duration-300 ease-out" />
        </span>
      </button>

      <!-- Expandable Content -->
      <div
        class="grid transition-[grid-template-rows] duration-400 ease-out"
        :class="isOpen(index) ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'"
      >
        <div class="overflow-hidden">
          <div
            class="prose prose-sm prose-headings:text-gray-900 prose-a:text-indigo-600 prose-strong:text-gray-800 max-w-none border-t border-indigo-50 px-5 py-4 text-sm leading-relaxed text-gray-600 transition-opacity duration-300"
            :class="isOpen(index) ? 'opacity-100' : 'opacity-0'"
            v-html="item.content"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { TabItemType } from '@/types/tab.type'
import { ChevronDown } from 'lucide-vue-next'
import { computed, ref } from 'vue'

interface Props {
  items: TabItemType[]
}

defineProps<Props>()

const openIndex = ref<number | null>(0)

const isOpen = computed(() => (index: number) => openIndex.value === index)

const onToggle = (index: number) => {
  openIndex.value = isOpen.value(index) ? null : index
}
</script>
