<template>
  <div class="flex">
    <main class="w-full">
      <div class="w-full">
        <GHeader />
      </div>
      <div class="w-full">
        <RouterView />
      </div>

      <div class="w-full">
        <GFooter />
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import GFooter from '@/layouts/footer/GFooter.vue'
import GHeader from '@/layouts/header/GHeader.vue'
</script>
