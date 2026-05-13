import { registerLoader, type LoaderFn } from "with-custom-loader";

export const txtLoader: LoaderFn = (input) => {
    return input.source.split("\n")
}

registerLoader("text", txtLoader)
