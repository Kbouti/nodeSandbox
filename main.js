const fs = require("node:fs");

// How to write a file:
const content = "some content!";
fs.writeFile("./test.txt", content, (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log(`hooray!`);
  }
});

//  Writing a file synchronously:
const content2 = "some more content!";
try {
  fs.writeFileSync("/Users/joe/test.txt", content);
  // file written successfully
} catch (err) {
  console.error(err);
}



// Reading files with Node: 

const fs = require('node:fs');

fs.readFile('/Users/joe/test.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});

// And the syncronus version: 
const fs = require('node:fs');

try {
  const data = fs.readFileSync('/Users/joe/test.txt', 'utf8');
  console.log(data);
} catch (err) {
  console.error(err);
}


// And the promise based: 
const fs = require('node:fs/promises');

async function example() {
  try {
    const data = await fs.readFile('/Users/joe/test.txt', { encoding: 'utf8' });
    console.log(data);
  } catch (err) {
    console.log(err);
  }
}
example();