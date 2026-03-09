<template>
  <div class="relative">
    <input
      v-bind="$attrs"
      :class="[
        'block w-full rounded-xl border px-4 py-3 text-sm placeholder-gray-400 transition-colors outline-none',
        $slots.right ? 'pr-11' : '',
        error
          ? 'border-red-400 bg-red-50 focus:border-red-500 focus:ring-2 focus:ring-red-100'
          : 'border-gray-200 bg-gray-50 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-100'
      ]"
      :value="modelValue"
      @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
    />
    <div v-if="$slots.right" class="absolute inset-y-0 right-0 flex items-center px-3">
      <slot name="right" />
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  modelValue?: string
  error?: boolean
}

defineProps<Props>()
defineEmits<{ 'update:modelValue': [value: string] }>()
</script>
