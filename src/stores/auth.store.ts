import type { UserType } from '@/types/auth.type'
import { removeAccessTokenFromLocalStorage } from '@/utils/localStorage'
import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export const useAuthStore = defineStore('auth', () => {
  const user = ref<UserType | null>(null)

  const isAuthenticated = computed(() => !!user.value)

  const setUser = (userData: UserType) => {
    user.value = userData
  }

  const clearUser = () => {
    user.value = null
  }

  const logout = () => {
    removeAccessTokenFromLocalStorage()
    clearUser()
  }

  return {
    user,
    isAuthenticated,
    setUser,
    clearUser,
    logout
  }
})
