function barCodeScanner(serial) {
  switch (serial) {
    case '123':
      console.log('Product1');
      break;
    case '113':
      console.log('Product2');
      break;
    case '142':
      console.log('product3');
      break;
    default:
      console.log('Product not found!');
      break;
  }
}

barCodeScanner('113');