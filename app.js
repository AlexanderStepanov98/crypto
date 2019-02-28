const Caesar = require('./caesar.js');
const Transpose = require('./transposition.js');
const Vigenere = require('./vigenere.js');
const OTP = require('./otp.js');
const File = require('./file.js');
const testFile = "sample.txt";

var key = 10;
var blockLength = 4;
var blockKey = [2, 3, 4, 1];


console.log("Original text : " + File.getText(testFile));


console.log('// -------------------------- Caesar algorithm test ---------------------------- //');
Caesar.encodeFile(testFile, key);
console.log(File.getText(testFile));
Caesar.decodeFile(testFile, key);


console.log('// ---------------------- Transposition algorithm test ------------------------- //');
Transpose.encodeFile(testFile, blockKey);
console.log(File.getText(testFile));
Transpose.decodeFile(testFile, blockKey);


console.log('// ------------------------- Vigenere algorithm test --------------------------- //');
Vigenere.encodeFile(testFile, blockLength);
console.log(File.getText(testFile));
Vigenere.decodeFile(testFile, blockLength);


console.log('// ---------------------------- OTP algorithm test ------------------------------ //');
var otpKey = OTP.encodeFile(testFile);
console.log(File.getText(testFile));
OTP.decodeFile(testFile, otpKey);