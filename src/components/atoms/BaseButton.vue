<template>
  <button
    :class="[
      'inline-flex cursor-pointer items-center justify-center font-semibold tracking-widest transition-all duration-300 ease-out',
      variantClasses,
      sizeClasses,
      'disabled:cursor-not-allowed disabled:opacity-50'
    ]"
    :disabled="disabled"
    v-bind="$attrs"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
interface Props {
  variant?: 'outline' | 'solid' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  disabled?: boolean
}

const { variant = 'outline', size = 'md', disabled = false } = defineProps<Props>()

const variantClasses = {
  outline: 'border-2 border-gray-900 bg-transparent text-gray-900 hover:bg-gray-900 hover:text-white active:scale-95',
  solid: 'border-2 border-gray-900 bg-gray-900 text-white hover:bg-gray-800 active:scale-95',
  ghost: 'border-2 border-transparent bg-transparent text-gray-900 hover:bg-gray-100 active:scale-95'
}[variant]

const sizeClasses = {
  sm: 'rounded-full px-4 py-1.5 text-xs',
  md: 'rounded-full px-6 py-2 text-xs',
  lg: 'rounded-full px-8 py-3 text-sm'
}[size]
</script>
