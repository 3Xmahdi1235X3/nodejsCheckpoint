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