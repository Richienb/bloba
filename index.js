"use strict"

const Blob = require("cross-blob")
const toArrayBuffer = require("to-array-buffer")

module.exports = (object) => new Blob([toArrayBuffer(object)])
