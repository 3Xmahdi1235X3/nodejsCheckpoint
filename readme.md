
# Node.js Checkpoint

This repository contains a set of guided exercises to introduce Node.js. Each task is documented below, along with instructions on how to complete it.

## Task 1: "hello-world.js"

### Description
Create a file named `hello-world.js` and write a program to print "HELLO WORLD" to the console.

### Implementation
- Create a file named `hello-world.js`.
- Write the following code in `hello-world.js`:

```javascript
console.log("HELLO WORLD");
```

## Task 2: Server ("server.js")

### Description
Create a server that runs on port 3000 and responds with '<h1>Hello Node!!!!</h1>\n' when someone reaches http://localhost:3000.

### Implementation
- Create a file named `server.js`.
- Write the following code in `server.js`:

```javascript
const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end('<h1>Hello Node!!!!</h1>\n');
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
```

## Task 3: File Operations ("file-operations.js")

### Description
Create a file named "welcome.txt" containing one line "Hello Node." Then, create a program that reads and console.log data from hello.txt.

### Implementation
- Create a file named `task3.js`.
- Write the following code in `task3.js`:

```javascript
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
    console.log( data);
  }
});
```

## Task 4: Password Generator ("password-generator.js")

### Description
Create a file named "password-generator.js" and a function that generates random passwords and console.log() that password.

### Implementation
- Create a file named `password-generator.js`.
- Write the following code in `password-generator.js`:

```javascript
const generatePassword = require('generate-password');

function generateRandomPassword() {
  const password = generatePassword.generate({
    length: 12,
    numbers: true,
    symbols: false,
    uppercase: true,
    lowercase: true,
  });
  console.log('Generated Password:', password);
}

generateRandomPassword();
```

## Task 5: Email Sender ("email-sender.js")

### Description
Create a file named "email-sender.js" and try to send an email using the nodemailer package.

### Implementation
- Create a file named `email-sender.js`.
- Write the following code in `email-sender.js`:

```javascript
const nodemailer = require('nodemailer');


let transporter = nodemailer.createTransport({
    host: 'your email service', // you can change it to your email service 
    port: 465,
    secure: true,
    auth: {
      user: 'your email',
      pass: 'your password'
    }
  });

  const mailOptions = {
    from: 'your email ',
    to: 'recipient email ',
    subject: 'subject',
    text: 'message',
  };
  
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
    } else {
      console.log('Email sent:', info.response);
    }
  });
```

Replace `'your email service'`, `'your email'`, and `'your password'` with your actual email service and credentials.

## Usage

To run each task, use the following command:

```bash
node filename.js
```

Replace `filename.js` with the name of the file for the specific task you want to run.

Remember to install necessary packages using `npm install` where required.

```
