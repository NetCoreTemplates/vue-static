<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { DarkModeToggle, SecondaryButton, useAuth } from '@servicestack/vue'

import ShellCommand from '@/components/ShellCommand.vue'
import AutoUis from '@/components/AutoUis.vue'
import vueLogo from "@/assets/img/vue.svg"
import HelloApi from '@/components/HelloApi.vue'
import tailwindLogo from "@/assets/img/tailwind.svg"
import typescriptLogo from "@/assets/img/typescript.svg"
import viteLogo from "@/assets/img/vite.svg"

import { signout } from '@/lib/auth'
const  { user }  = useAuth()
</script>

<template>
<div class="mt-40 max-w-screen-xl mx-auto p-8 min-h-screen flex flex-col items-center justify-center bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors">
    <div class="flex gap-8 mb-8 items-end">
        <a href="https://vuejs.org" target="_blank" rel="noreferrer">
            <img :src="vueLogo" alt="Vue" class="h-32 transition-all duration-300 hover:drop-shadow-[0_0_2em_#61dafbaa]" />
        </a>
        <a href="https://tailwindcss.com" target="_blank" rel="noreferrer">
            <img :src="tailwindLogo" alt="Tailwind CSS" class="h-36 transition-all duration-300 hover:drop-shadow-[0_0_2em_#646cffaa]" />
        </a>
        <a href="https://www.typescriptlang.org" target="_blank" rel="noreferrer">
            <img :src="typescriptLogo" alt="TypeScript" class="mb-2 h-28 transition-all duration-300 hover:drop-shadow-[0_0_2em_#646cffaa]" />
        </a>
        <a href="https://vite.dev" target="_blank" rel="noreferrer">
            <img :src="viteLogo" alt="Vite" class="h-36 transition-all duration-300 hover:drop-shadow-[0_0_2em_#646cffaa]" />
        </a>
    </div>
    <h1 class="text-7xl font-bold mt-4 mb-8">Vue .ts / Tailwind</h1>

    <ShellCommand class="my-4">npx create-net vue-static MyProject</ShellCommand>

    <HelloApi value="Vue" class="text-center" />

    <div class="mb-8 flex items-center space-x-4">
        <template v-if="user">
            <RouterLink to="/profile" class="max-w-xs rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 lg:p-2 lg:rounded-md lg:hover:bg-gray-50 dark:lg:hover:bg-gray-900 dark:ring-offset-black"
                id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                <img class="h-8 w-8 rounded-full" :src="user.profileUrl" alt="User Profile" />
                <span class="hidden ml-3 text-gray-700 dark:text-gray-300 text-sm font-medium lg:block">
                    {{ user.userName }}
                </span>
            </RouterLink>
            <div>
                <SecondaryButton @click="signout($router)" class="m-2">
                    Sign Out
                </SecondaryButton>
            </div>
        </template>
        <SecondaryButton v-else href="/profile" class="items-center">
            🙍🏻‍♂️ My Profile
        </SecondaryButton>
    </div>

    <DarkModeToggle />

    <AutoUis class="mt-40 w-full" />
</div>
</template>
