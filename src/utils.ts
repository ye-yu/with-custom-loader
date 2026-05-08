import { fileURLToPath } from "node:url";

export const toPath = (url: string) => (url.startsWith("file://") ? fileURLToPath(url) : url);
