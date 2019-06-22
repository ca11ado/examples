import { single_file } from './utils/files.js';

single_file('sourceTest.txt', 'distTest.txt')
  .then(r => {
    if (r.error) {
      return console.log("An error occurred, recover here. Details:", r);
    return console.log("Done, no error. Result:", r);
    }
  })
  .catch(err => console.log("An error occurred", err));

