const fs = require('node:fs');



// How to write a file: 
const content = 'some content!';
fs.writeFile('./test.txt', content, err => {
    if (err) {
        console.error(err);
    } else {
        console.log(`hooray!`);
    }
})

//  Writing a file synchronously:
const content2 = 'some more content!';
try {
    fs.writeFileSync('/Users/joe/test.txt', content);
    // file written successfully
  } catch (err) {
    console.error(err);
  }