import { createApp } from 'vue'
import { createRouter, createWebHistory, RouterLink } from 'vue-router'
import ServiceStackVue from "@servicestack/vue"

import '../styles/style.css'
import App from '@/App.vue'
import Index from '@/index.vue'
import Profile from '@/profile.vue'
import { isServerRoute, useApp } from '@/lib/gateway'
import { configRouter } from '@/lib/auth'

// Apply saved color-scheme preference
const colorScheme = localStorage.getItem('color-scheme')
if (colorScheme === 'dark') {
    document.querySelector('html')?.classList.add('dark')
} else {
    document.querySelector('html')?.classList.remove('dark')
}

export const router = configRouter(createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/profile', component: Profile },
        { path: '/:pathMatch(.*)*', component: Index }
    ],
}))
// handle external links
router.beforeEach((to, _from, next) => {
    if (isServerRoute(to.path)) {
        location.href = to.fullPath
    } else if (to.path.startsWith('/http')) {
        location.href = to.fullPath.substring(1)
    }
    else next()
})

ServiceStackVue.component('RouterLink', RouterLink)
const { client, load } = useApp()

load().then(() => {
    createApp(App)
        .use(ServiceStackVue)
        .provide('client', client)
        .use(router)
        .mount('#app')    
})
