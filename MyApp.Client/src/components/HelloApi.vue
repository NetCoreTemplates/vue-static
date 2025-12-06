<script setup lang="ts">
import { ref, watch } from "vue"
import { TextInput, useClient } from "@servicestack/vue"
import { ApiResult } from "@servicestack/client"
import { Hello, HelloResponse } from "@/lib/dtos"

const props = defineProps<{
    value: string
}>()

const name = ref(props.value)
const client = useClient()
const api = ref<ApiResult<HelloResponse>>(new ApiResult())

watch(name, async () => {
    api.value = new ApiResult()
    api.value = await client.api(new Hello({ name: name.value }))
}, { immediate: true })
</script>

<template>
    <div class="my-8 max-w-fit mx-auto">
        <TextInput id="name" label="API Example" v-model="name" />
        <div v-if="api.error" class="ml-2 text-red-500 dark:text-red-400">
            {{ api.error.message }}
        </div>
        <div v-else class="ml-3 mt-2 text-gray-900 dark:text-gray-100">
            {{ api.response?.result ?? 'loading...' }}
        </div>
    </div>
</template>
