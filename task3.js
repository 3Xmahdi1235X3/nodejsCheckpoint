const fs = require('fs');

// Create "welcome.txt" with content
fs.writeFile('welcome.txt', 'Hello Node', (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log('File "welcome.txt" created successfully.');
  }
});

// Read and console.log data from "welcome.txt"
fs.readFile('welcome.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
  } else {
    console.log(data);
  }
});