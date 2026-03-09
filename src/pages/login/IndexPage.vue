<template>
  <div class="w-full max-w-sm space-y-8">
    <!-- Logo -->
    <div class="flex justify-center">
      <img :src="logoSrc" alt="MindArc Logo" class="h-auto w-32 sm:w-48" />
    </div>

    <!-- Heading -->
    <div class="text-center">
      <h1 class="text-md font-bold text-gray-900 sm:text-2xl">Welcome back</h1>
      <p class="mt-1 text-xs text-gray-500 sm:text-base">Sign in to continue to your workspace</p>
    </div>

    <!-- Form -->
    <form class="space-y-4" novalidate @submit="submitForm">
      <!-- Email -->
      <div class="space-y-1.5">
        <label for="email" class="block text-sm font-medium text-gray-700">Email address</label>
        <BaseInput
          id="email"
          name="email"
          type="email"
          autocomplete="email"
          required
          v-model="username"
          placeholder="you@example.com"
          :error="!!errors.username"
        />
        <p v-if="errors.username" class="text-xs text-red-600">{{ errors.username }}</p>
      </div>

      <!-- Password -->
      <div class="space-y-1.5">
        <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
        <BaseInput
          id="password"
          name="password"
          :type="showPassword ? 'text' : 'password'"
          autocomplete="current-password"
          required
          v-model="password"
          placeholder="Enter your password"
          :error="!!errors.password"
        >
          <template #right>
            <button
              type="button"
              @click="showPassword = !showPassword"
              class="cursor-pointer text-gray-400 hover:text-gray-600"
              :aria-label="showPassword ? 'Hide password' : 'Show password'"
            >
              <EyeOff v-if="showPassword" class="h-4 w-4" />
              <Eye v-else class="h-4 w-4" />
            </button>
          </template>
        </BaseInput>
        <div class="flex justify-end">
          <a href="#" class="text-xs font-medium text-indigo-600 hover:text-indigo-500">Forgot password?</a>
        </div>
        <p v-if="errors.password" class="text-xs text-red-600">{{ errors.password }}</p>
      </div>

      <!-- Submit -->
      <BaseButton
        type="submit"
        variant="solid"
        size="lg"
        class="!w-full !rounded-xl !border-indigo-600 !bg-indigo-600 !text-sm !font-semibold !tracking-normal hover:!border-indigo-700 hover:!bg-indigo-700"
      >
        Sign In
      </BaseButton>
    </form>

    <!-- Divider -->
    <div class="relative">
      <div class="absolute inset-0 flex items-center">
        <div class="w-full border-t border-gray-200" />
      </div>
      <div class="relative flex justify-center">
        <span class="bg-gray-50 px-4 text-xs text-gray-400">or continue with</span>
      </div>
    </div>

    <!-- Google -->
    <button
      type="button"
      class="flex w-full cursor-pointer items-center justify-center gap-2.5 rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-sm font-medium text-gray-700 transition hover:border-gray-300 hover:bg-gray-50"
    >
      <svg class="h-4 w-4" viewBox="0 0 24 24">
        <path
          fill="#4285F4"
          d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
        />
        <path
          fill="#34A853"
          d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
        />
        <path
          fill="#FBBC05"
          d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
        />
        <path
          fill="#EA4335"
          d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
        />
      </svg>
      Continue with Google
    </button>

    <!-- Sign up -->
    <p class="text-center text-sm text-gray-500">
      Don't have an account?
      <a href="#" class="font-semibold text-indigo-600 hover:text-indigo-500">Create account</a>
    </p>
  </div>
</template>

<script setup lang="ts">
import logoSrc from '@/assets/logo/MindArc-logo.webp'
import BaseButton from '@/components/atoms/BaseButton.vue'
import BaseInput from '@/components/atoms/BaseInput.vue'
import { ROUTE_NAME } from '@/constants/route-name'
import { loginSchema, type TLoginSchema } from '@/schemas/auth.schema'
import { setAccessTokenToLocalStorage } from '@/utils/localStorage'
import { Eye, EyeOff } from 'lucide-vue-next'
import { useForm } from 'vee-validate'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const showPassword = ref(false)

const { defineField, errors, handleSubmit } = useForm<TLoginSchema>({
  validationSchema: loginSchema,
  initialValues: {
    username: 'user',
    password: 'password'
  }
})

const [username] = defineField('username')
const [password] = defineField('password')

const submitForm = handleSubmit((values) => {
  if (values.username === 'user' && values.password === 'password') {
    // call api login
    setAccessTokenToLocalStorage('accessToken')
    router.push({ name: ROUTE_NAME.DEFAULT })
  }
})
</script>
