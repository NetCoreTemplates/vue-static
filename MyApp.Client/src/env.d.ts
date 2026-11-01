// Lets tsgolint (`vp check`) resolve .vue imports from .ts files, `vue-tsc -b` type checks the SFCs themselves
declare module '*.vue' {
    import type { DefineComponent } from 'vue'
    const component: DefineComponent
    export default component
}
