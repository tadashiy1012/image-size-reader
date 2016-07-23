const path = require('path');
const assert = require('power-assert');

describe('image-size-reader test', () => {
  const testDir = path.join(__dirname, 'test_images');
  const testImage1 = path.join(testDir, 'test_bmp_image.bmp');
  const testImage2 = path.join(testDir, 'test_gif_image.gif');
  const testImage3 = path.join(testDir, 'test_jpg_image.jpg');
  const testImage4 = path.join(testDir, 'test_png_image.png');
  const testFile = path.join(testDir, 'hoge.txt');
  const reader = require('../index.js');
  it('test1 bmp', (done) => {
    reader(testImage1).then((resp) => {
      assert(resp.toString() === [1000, 1000].toString());
      done();
    });
  });
  it('test2 gif', (done) => {
    reader(testImage2).then((resp) => {
      assert(resp.toString() === [613, 473].toString());
      done();
    });
  });
  it('test3 jpg', (done) => {
    reader(testImage3).then((resp) => {
      assert(resp.toString() === [800, 600].toString());
      done();
    });
  });
  it('test4 png', (done) => {
    reader(testImage4).then((resp) => {
      assert(resp.toString() === [800, 600].toString());
      done();
    });
  });
  it('test5 error paturn', (done) => {
    reader(testFile).catch((resp) => {
      assert(resp.message === 'Unsupported file type');
      done();
    })
  });
});