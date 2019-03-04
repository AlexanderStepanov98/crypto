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
console.log("");


console.log('// -------------------------- Caesar algorithm test ---------------------------- //');
console.log("Caesar key = " + caesarKey);
Caesar.encodeFile(testFile, caesarKey);
console.log(File.getText(testFile));
Caesar.decodeFile(testFile, caesarKey);
console.log("");


console.log('// ---------------------- Transposition algorithm test ------------------------- //');
console.log("Transposition key = " + transposeKey);
Transpose.encodeFile(testFile, transposeKey);
console.log(File.getText(testFile));
Transpose.decodeFile(testFile, transposeKey);
console.log("");


console.log('// ------------------------- Vigenere algorithm test --------------------------- //');
console.log("Vigenere key = " + vigenereKey);
Vigenere.encodeFile(testFile, vigenereKey);
console.log(File.getText(testFile));
Vigenere.decodeFile(testFile, vigenereKey);
console.log("");


console.log('// ---------------------------- OTP algorithm test ------------------------------ //');
let otpKey = OTP.encodeFile(testFile);
console.log("OTP key = " + otpKey);
console.log(File.getText(testFile));
OTP.decodeFile(testFile, otpKey);
console.log("");