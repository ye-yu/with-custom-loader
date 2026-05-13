# with-custom-loader

`with-custom-loader` provides a minimal Node custom loader registration mechanism for importing files through a user-defined loader function.

```ts
import text from "./fixtures/text.txt" with { loader: "text" }
```

## Overview

This package lets you register a loader by name and then import files with the `with { loader: "<name>" }` syntax in ESM.

You must enable loader by importing this module in your command:

```sh
node --import "with-custom-loader" ...
```

Next, you could register your loader to match your `with` attributes:

```
registerLoader(name: string, loaderFn: LoaderFn)
```

The registerer function receives a `LoaderInput` object with:
- `source`: the raw file contents as a string
- `path`: the original file path

The loader must return any value that becomes the module's default export.

## Example

A loader that splits a text file into lines:

```ts
import { registerLoader, type LoaderFn } from "with-custom-loader"

export const txtLoader: LoaderFn = (input) => {
  return input.source.split("\n")
}

registerLoader("text", txtLoader)
```

Then import a `.txt` fixture using the loader:

```ts
import text from "./fixtures/text.txt" with { loader: "text" }
```

In this example, the imported `text` value is an array of strings.

## Notes

- The loader registration happens through `src/register.ts` when the package is imported.
- The implementation reads the file from disk, applies the registered loader, and returns a module with the loader result as the default export.
