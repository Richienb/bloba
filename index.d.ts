/// <reference lib="dom"/>

/**
 * Convert anything to a Blob.
 * @param object The object to convert.
 * @example
 * ```
 * const bloba = require("bloba");
 *
 * bloba("Hello World!");
 * //=> Blob {...}
 * ```
*/
declare function bloba(input: any): Blob;

export = bloba;
