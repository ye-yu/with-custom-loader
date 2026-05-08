export type LoaderInput = {
    source: string
    path: string
}

export type LoaderFn = (input: LoaderInput) => any

const loaderRegistry: Map<string, LoaderFn> = new Map()
Object.defineProperty(globalThis, "loaderRegistry", {
    get() {
        return loaderRegistry
    }
})

export function registerLoader(name: string, loaderFn: LoaderFn) {
    loaderRegistry.set(name, loaderFn)
}

export function getLoader(name: string): LoaderFn {
    return loaderRegistry.get(name) ?? (() => null)
}