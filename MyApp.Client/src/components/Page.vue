<script setup lang="ts">
export interface Props {
  title: string
  className?: string
  bodyClass?: string
}

withDefaults(defineProps<Props>(), {
  className: '',
  bodyClass: ''
})
</script>

<template>
  <div class="min-h-screen">
    <main>
      <div :class="`px-5 ${className}`">
        <div :class="bodyClass">
          <h1 class="text-center text-4xl font-bold my-8 text-gray-900 dark:text-gray-100">{{ title }}</h1>
          <slot />
        </div>
      </div>
    </main>
  </div>
</template>
