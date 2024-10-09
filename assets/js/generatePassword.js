const generatePassword = require('generate-password');

const password = generatePassword.generate({
    length: 12,
    numbers: true,
    symbols: true,
    uppercase: true,
    strict: true
});


