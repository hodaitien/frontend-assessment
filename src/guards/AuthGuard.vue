<template>
  <RouterView v-if="isReady" />
</template>

<script setup lang="ts">
import { ROUTE_NAME } from '@/constants/route-name'
import { useAuthStore } from '@/stores/auth.store'
import { getAccessTokenFromLocalStorage } from '@/utils/localStorage'
import { computed, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const withoutAuthRoutes = ['/login']
const authStore = useAuthStore()
const router = useRouter()
const route = useRoute()

const isReady = ref(false)

const isAuthenticated = computed(() => {
  const token = getAccessTokenFromLocalStorage()
  return !!token
})

watch(
  isAuthenticated,
  (authenticated) => {
    if (!authenticated && !withoutAuthRoutes.includes(route.path)) {
      // Not authenticated and trying to access protected route

      router.push({ name: ROUTE_NAME.LOGIN })
    }

    if (authenticated && withoutAuthRoutes.includes(route.path)) {
      // Authenticated and trying to access login page

      router.push('/')
    }

    isReady.value = true
  },
  { immediate: true }
)

// Set user data if authenticated
watch(isAuthenticated, (authenticated) => {
  if (authenticated) {
    // Set a default user object when authenticated
    authStore.setUser({
      username: 'user',
      email: 'user@example.com',
      firstName: '',
      lastName: 'User'
    })
  } else {
    authStore.clearUser()
  }
})
</script>
