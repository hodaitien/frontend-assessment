<template>
  <div class="min-h-screen bg-white">
    <!-- Requirements Section -->
    <div class="relative">
      <div class="mx-auto max-w-4xl px-6 py-12">
        <div data-aos="fade-down" data-aos-duration="700">
          <!-- Badge -->
          <div class="flex items-center gap-3">
            <span
              class="inline-flex items-center gap-1.5 rounded-full bg-indigo-600 px-3 py-1 text-[10px] font-bold tracking-widest text-white uppercase shadow-sm shadow-indigo-200"
            >
              <span class="h-1.5 w-1.5 animate-pulse rounded-full bg-indigo-200" />
              Exercise 2
            </span>
          </div>

          <h1
            class="mt-4 bg-gradient-to-r from-gray-900 via-indigo-900 to-gray-800 bg-clip-text text-2xl font-extrabold tracking-tight text-transparent sm:text-3xl"
          >
            Tabs & Accordion
          </h1>

          <!-- Requirements Card -->
          <div
            class="mt-6 max-w-xl overflow-hidden rounded-2xl border border-indigo-100 bg-white shadow-md shadow-indigo-50"
          >
            <div class="border-b border-indigo-50 bg-gradient-to-r from-indigo-50 to-violet-50 px-5 py-3">
              <p class="text-sm font-semibold text-indigo-700">Requirements</p>
            </div>

            <div class="px-5 py-4">
              <p class="mb-3 text-sm text-gray-600">
                Read the
                <code class="rounded-md bg-indigo-50 px-1.5 py-0.5 text-xs font-bold text-indigo-700">data.json</code>
                file and display the data as
                <strong class="text-gray-800">tabs</strong>
                on desktop and an
                <strong class="text-gray-800">accordion</strong>
                on mobile.
              </p>

              <ol class="space-y-2">
                <li v-for="(req, i) in requirements" :key="i" class="flex items-start gap-3 text-sm text-gray-600">
                  <span
                    class="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-indigo-600 text-[10px] font-bold text-white"
                  >
                    {{ i + 1 }}
                  </span>
                  {{ req }}
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Content Section -->
    <div class="relative mx-auto max-w-4xl px-6 py-10">
      <Transition
        mode="out-in"
        enter-active-class="transition-[opacity,transform] duration-500 ease-out"
        enter-from-class="opacity-0 translate-y-6"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition-opacity duration-200 ease-in"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <div v-if="isLoading" key="loading">
          <LoadingSpinner />
        </div>

        <div v-else key="content">
          <!-- Mobile: Accordion -->
          <div class="md:hidden" data-aos="fade-up" data-aos-duration="600">
            <AccordionPanel :items="sections" />
          </div>

          <!-- Desktop: Tabs -->
          <div class="hidden md:block" data-aos="fade-up" data-aos-duration="600">
            <TabsPanel :items="sections" />
          </div>
        </div>
      </Transition>
    </div>
  </div>
</template>

<script setup lang="ts">
import { getSections } from '@/apis/sections.api'
import LoadingSpinner from '@/components/atoms/LoadingSpinner.vue'
import AccordionPanel from '@/components/molecules/AccordionPanel.vue'
import TabsPanel from '@/components/molecules/TabsPanel.vue'
import type { TabItemType } from '@/types/tab.type'
import { onMounted, ref } from 'vue'

const sections = ref<TabItemType[]>([])
const isLoading = ref(true)

const requirements = [
  'Display data in tabs on desktop.',
  'Display data in an accordion on mobile.',
  'Only 1 accordion/tab should be open at a time.',
  'Open the first accordion/tab on load.',
  'If the open accordion is selected, close it.'
]

onMounted(() => {
  getDataSections()
})

// Get data from the API
const getDataSections = async () => {
  try {
    isLoading.value = true
    const { data } = await getSections()
    sections.value = data
  } catch (error) {
    console.error(error)
  } finally {
    isLoading.value = false
  }
}
</script>
