<template>
  <Page :title="(user!.displayName || user!.userName) + ' Profile'">
  <div class="mx-auto flex flex-col items-center">
    <img class="my-4 size-36 rounded-full" :src="user!.profileUrl" alt="User Profile"/>
    <div>{{ user!.displayName }}</div>
    <div>{{ user!.userName }}</div>
    <div class="mt-2">
      <span v-for="role in roles"
            :key="role"
            class="ml-3 inline-flex items-center px-3 py-0.5 rounded-full text-xs font-medium leading-5 bg-indigo-100 text-indigo-800">
        {{ role }}
      </span>
    </div>
    <SecondaryButton class="mt-8" @click="signout($router)">Sign Out</SecondaryButton>
    <PrimaryButton class="mt-8" href="/Identity/Account/Manage">
      Identity Auth Account
    </PrimaryButton>
    <SecondaryButton class="mt-8" href="/">
      🏠 Home
    </SecondaryButton>
  </div>
  </Page>
</template>

<script setup lang="ts">
import { useAuth } from "@servicestack/vue"
import { signout } from "@/lib/auth"
import Page from "@/components/Page.vue"

const { user } = useAuth()
const roles = user.value?.roles ?? []
</script>
