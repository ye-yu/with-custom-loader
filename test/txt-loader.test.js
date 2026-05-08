import './txt-loader.ts'
import { describe, it } from "node:test"

import text from "./fixtures/text.txt" with { loader: "text" }
import assert from "assert";

describe("text loader", () => {
    it("should import text as an array", () => {
        assert.ok(Array.isArray(text))
        for (const t of text) {
            assert.equal(typeof t, "string")
        }
    })
})