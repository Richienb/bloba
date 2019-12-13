# Bloba [![Travis CI Build Status](https://img.shields.io/travis/com/Richienb/bloba/master.svg?style=for-the-badge)](https://travis-ci.com/Richienb/bloba)

Convert anything to a Blob.

[![NPM Badge](https://nodei.co/npm/bloba.png)](https://npmjs.com/package/bloba)

## Install

```sh
npm install bloba
```

## Usage

```js
const bloba = require("bloba");

bloba("Hello World!");
//=> Blob {...}
```

## API

### bloba(object)

#### object

Type: `any`

The object to convert.
