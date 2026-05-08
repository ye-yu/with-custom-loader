import { registerLoader, type LoaderFn } from "@ye-yu/custom-loader";

export const txtLoader: LoaderFn = (input) => {
    return input.source.split("\n")
}

registerLoader("text", txtLoader)
