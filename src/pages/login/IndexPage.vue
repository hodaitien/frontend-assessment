<template>
  <div class="flex items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
    <div class="w-full max-w-md space-y-8">
      <div class="text-center">
        <h1 class="text-2xl font-bold">Welcome back!</h1>
      </div>
      <div class="rounded-lg bg-white p-8 shadow-sm">
        <!-- Login Form -->
        <form class="space-y-6" novalidate @submit="submitForm">
          <!-- Email Field -->
          <div>
            <label for="email" class="mb-2 block text-sm font-medium text-gray-700">Email address</label>
            <input
              id="email"
              name="email"
              type="email"
              autocomplete="email"
              required
              v-model="username"
              placeholder="Enter your email address"
              class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-xs focus:border-gray-500 focus:ring-gray-500 focus:outline-none sm:text-sm"
            />
            <div v-if="errors.username" class="mt-1 text-sm text-red-600">
              {{ errors.username }}
            </div>
          </div>

          <!-- Password Field -->
          <div>
            <label for="password" class="mb-2 block text-sm font-medium text-gray-700">Password</label>
            <div class="relative">
              <input
                id="password"
                name="password"
                :type="showPassword ? 'text' : 'password'"
                autocomplete="current-password"
                required
                v-model="password"
                placeholder="Enter your password"
                class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 pr-10 placeholder-gray-400 shadow-xs focus:border-gray-500 focus:ring-gray-500 focus:outline-none sm:text-sm"
              />
              <button
                type="button"
                @click="showPassword = !showPassword"
                class="absolute inset-y-0 right-0 flex items-center pr-3"
              >
                <span class="text-gray-400 hover:text-gray-600">
                  <EyeOff v-if="showPassword" class="h-4 w-4 cursor-pointer" />
                  <Eye v-else class="h-4 w-4 cursor-pointer" />
                </span>
              </button>
            </div>
            <div class="mt-2 flex items-center justify-between">
              <div></div>
              <a href="#" class="text-sm text-blue-600 hover:text-blue-500">Forgot password?</a>
            </div>
            <div v-if="errors.password" class="mt-1 text-sm text-red-600">
              {{ errors.password }}
            </div>
          </div>

          <!-- Login Button -->
          <div>
            <button
              type="submit"
              class="flex w-full justify-center rounded-md bg-gray-800 px-4 py-3 text-sm font-medium text-white shadow-sm hover:bg-gray-700 focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:outline-none"
            >
              Log In
            </button>
          </div>
        </form>

        <!-- Separator -->
        <div class="relative my-6">
          <div class="absolute inset-0 flex items-center">
            <div class="w-full border-t border-gray-300"></div>
          </div>
        </div>

        <!-- Sign Up Prompt -->
        <div class="mt-8 text-center">
          <p class="text-sm text-gray-600">
            Don't have an account yet?
            <a href="#" class="font-medium text-blue-600 hover:text-blue-500">Sign up</a>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
// import { login } from '@/apis/auth.api'
import { ROUTE_NAME } from '@/constants/route-name'
import { loginSchema, type TLoginSchema } from '@/schemas/auth.schema'
import { setAccessTokenToLocalStorage } from '@/utils/localStorage'
import { Eye, EyeOff } from 'lucide-vue-next'
import { useForm } from 'vee-validate'
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
    router.push({ name: ROUTE_NAME.TOP })
    return
  }
})
</script>
