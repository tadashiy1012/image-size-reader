module.exports = (function() {
  const bmpReader = require('bmp-size-reader');
  const jpgReader = require('jpg-size-reader');
  const pngReader = require('png-size-reader');
  const gifReader = require('gif-size-reader');
  return function imageSizeReader(tgtFilePath) {
    return new Promise((resolve, reject) => {
      const result = null;
      Promise.resolve().then(() => {
        return gifReader(tgtFilePath);
      }).then((resp) => {
        resolve(resp);
      }, (resp) => {
        return jpgReader(tgtFilePath);
      }).then((resp) => {
        resolve(resp);
      }, (resp) => {
        return pngReader(tgtFilePath);
      }).then((resp) => {
        resolve(resp);
      }, (resp) => {
        return bmpReader(tgtFilePath);
      }).then((resp) => {
        resolve(resp);
      }, (resp) => {
        reject(new Error('Unsupported file type'));
      });
    });
  }
})();