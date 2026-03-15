<template>
  <button
    :class="[
      'inline-flex cursor-pointer items-center justify-center transition-all duration-300 ease-out',
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
import { computed } from 'vue'

interface Props {
  variant?: 'outline' | 'solid' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  colorScheme?: 'dark' | 'light'
  pill?: boolean
  disabled?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'outline',
  size: 'md',
  colorScheme: 'dark',
  pill: true,
  disabled: false
})

const variantClasses = computed(() => {
  const schemes: Record<string, Record<string, string>> = {
    dark: {
      outline:
        'border-2 border-gray-900 bg-transparent text-gray-900 hover:bg-gray-900 hover:text-white active:scale-95',
      solid: 'border-2 border-gray-900 bg-gray-900 text-white hover:bg-gray-800 active:scale-95',
      ghost: 'border-2 border-transparent bg-transparent text-gray-900 hover:bg-gray-100 active:scale-95'
    },
    light: {
      outline: 'border border-white bg-transparent text-white hover:bg-white/10 active:scale-95',
      solid: 'border border-white bg-white text-black hover:bg-white/90 active:scale-95',
      ghost: 'border border-transparent bg-transparent text-white hover:bg-white/10 active:scale-95'
    }
  }
  return schemes[props.colorScheme][props.variant]
})

const sizeClasses = computed(() => {
  const radius = props.pill ? 'rounded-full' : ''
  const isLight = props.colorScheme === 'light'
  const font = isLight ? 'font-semibold' : 'font-medium tracking-widest'

  const sizes: Record<string, Record<string, string>> = {
    dark: {
      sm: `${radius} ${font} px-4 py-1.5 text-xs`,
      md: `${radius} ${font} px-6 py-2 text-xs`,
      lg: `${radius} ${font} px-8 py-3 text-sm`
    },
    light: {
      sm: `${radius} ${font} px-4 py-1.5 text-xs`,
      md: `${radius} ${font} px-6 py-3 text-[12px] leading-[16px]`,
      lg: `${radius} ${font} px-8 py-2.5 text-sm`
    }
  }
  return sizes[props.colorScheme][props.size]
})
</script>
