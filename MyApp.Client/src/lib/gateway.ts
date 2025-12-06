import { JsonServiceClient } from "@servicestack/client"
import { useAuth, initMetadata } from "@servicestack/vue"
import type { Router } from "vue-router"
import { checkAuth } from "./auth"

const serverRoutePaths = [
    '/Identity',
    '/metadata',
    '/api',
    '/ui',
    '/chat',
    '/admin-ui',
    '/swagger',
    '/scalar',
]

export function isServerRoute(path:string) {
    return serverRoutePaths.some(x => path.startsWith(x))
}

type RouteGuard = { path:string, attr:string }
const Requires = {
    auth: (path:string):RouteGuard => ({ path, attr: 'auth' }),
    role: (path:string, role:string):RouteGuard => ({ path, attr: `role:${role}` })
}

// Typed Routes used in Components
export const Routes = {
    signin: (redirectTo?:string) => `/Identity/Account/Login` + (redirectTo ? `?ReturnUrl=${redirectTo}` : ''),
    forbidden: () => '/forbidden',
    guards: [
        Requires.auth('/profile'),
    ],
}

export const client = new JsonServiceClient()

export function useApp() {
    async function load() {
        const { signIn } = useAuth()
        initMetadata({ client })
        const auth = await checkAuth()
        if (auth) signIn(auth)
    }
    return {
        load,
        client,
    }
}

export function getRedirect(router:Router) {
    let { redirect } = router.currentRoute?.value.query
    let ret = redirect && Array.isArray(redirect)
        ? redirect[0]
        : redirect
    return ret?.toString()
}
