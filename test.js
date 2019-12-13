import test from "ava"
import Blob from "cross-blob"
import isBlob from "is-blob"
globalThis.Blob = Blob
import bloba from "."

test("main", (t) => {
    t.true(isBlob(bloba("Hello World!")))
})
