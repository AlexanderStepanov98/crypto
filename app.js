const Caesar = require('./caesar.js');
const Transpose = require('./transposition.js');
const Vigenere = require('./vigenere.js');
const OTP = require('./otp.js');
const File = require('./file.js');
const testFile = "sample.txt";

let caesarKey = 10;
let transposeKey = [2, 3, 4, 1];
let vigenereKey = "QWERTY";


console.log("Original text : " + File.getText(testFile));


console.log('// -------------------------- Caesar algorithm test ---------------------------- //');
Caesar.encodeFile(testFile, caesarKey);
console.log(File.getText(testFile));
Caesar.decodeFile(testFile, caesarKey);


console.log('// ---------------------- Transposition algorithm test ------------------------- //');
Transpose.encodeFile(testFile, transposeKey);
console.log(File.getText(testFile));
Transpose.decodeFile(testFile, transposeKey);


console.log('// ------------------------- Vigenere algorithm test --------------------------- //');
Vigenere.encodeFile(testFile, vigenereKey);
console.log(File.getText(testFile));
Vigenere.decodeFile(testFile, vigenereKey);


console.log('// ---------------------------- OTP algorithm test ------------------------------ //');
let otpKey = OTP.encodeFile(testFile);
console.log(File.getText(testFile));
OTP.decodeFile(testFile, otpKey);