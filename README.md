[![Build Status](https://travis-ci.org/tadashiy1012/image-size-reader.svg?branch=master)](https://travis-ci.org/tadashiy1012/image-size-reader)

# image-size-reader
Gets the width and height size of the image

## Installation
`$ npm install image-size-reader`

## Example
```JavaScript
const reader = require('image-size-reader');
reader(tgtFilePath).then((result) => {
  console.log(result); // [width, height]
});
```

## Licence
MIT