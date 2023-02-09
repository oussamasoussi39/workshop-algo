const generatePassword = require('generate-password');

function generateRandomPassword() {
  // Generate a random password
  const password = generatePassword.generate({
    length: 14,
    numbers: true,
    symbols: true,
    uppercase: true,
    lowercase: true
  });

  console.log(password);
}

generateRandomPassword();