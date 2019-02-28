const Caesar = require('./caesar.js');
const Transpose = require('./transposition.js');
const Vigenere = require('./vigenere.js');
const File = require('./file.js');
const testFile = "sample.txt";
var key = 5;
var blockLength = 4;
var text;

text = File.getText(testFile);
console.log("Original text : " + text);

console.log('// -------------------------- Caesar algorithm test ---------------------------- //');
Caesar.encodeFile(testFile, key);
text = File.getText(testFile);
console.log(text);

Caesar.decodeFile(testFile, key);
text = File.getText(testFile);
console.log(text);

console.log('// ---------------------- Transposition algorithm test ------------------------- //');
Transpose.encodeFile(testFile);
text = File.getText(testFile);
console.log(text);

Transpose.decodeFile(testFile);
text = File.getText(testFile);
console.log(text);

console.log('// ------------------------- Vigenere algorithm test --------------------------- //');
Vigenere.encodeFile(testFile, blockLength);
text = File.getText(testFile);
console.log(text);

Vigenere.decodeFile(testFile, blockLength);
text = File.getText(testFile);
console.log(text);