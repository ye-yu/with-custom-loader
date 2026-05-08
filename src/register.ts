import * as module from "module";
import fs from "fs"
import { toPath } from "./utils.ts";

module.registerHooks({
    load(url, context, nextLoad) {
        const loader = context.importAttributes?.["loader"]
        if (!loader) {
            return nextLoad(url, context)
        }

        const sourcePath = url.startsWith("file:///") ? toPath(url) : url
        const originalSource = fs.readFileSync(sourcePath, "utf-8");
        const getter = `loaderRegistry.get("${loader}")({ source: ${JSON.stringify(originalSource)}, path: "${sourcePath}"})`
        return {
            format: "module",
            source: `export default ${getter}`,
            shortCircuit: true,
        }
    }
})