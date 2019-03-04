const fs = require('fs');

// const alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J",
//                 "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T",
//                 "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d",
//                 "e", "f", "g", "h", "i", "j", "k", "l", "m", "n",
//                 "o", "p", "q", "r", "s", "t", "u", "v", "w", "x",
//                 "y", "z", ":", "1", "2", "3", "4", "5", "6", "7",
//                 "8", "9", "0", " "];

function ascii(char) {
    return char.charCodeAt(0);
}

function generateKey(messageLength) {

    let key = '';
    for (var i = 0; i < messageLength; i++) {
        key += String.fromCharCode(Math.floor(Math.random() * (91 - 65)) + 65);
    }

    return key;

}

function encryption(text, key) {

    let cipher = '';
    for (let i = 0; i < text.length; i++) {
        cipher += String.fromCharCode(ascii(text[i]) ^ ascii(key[i]));
    }

    return cipher;

}

// ------------------------- Export section --------------------------- //

exports.encodeFile = function (file) {
    var text = fs.readFileSync(file, 'utf8');
    var key = generateKey(text.length);
    text = encryption(text, key);
    fs.writeFileSync(file, text);
    return key;
};

exports.decodeFile = function (file, key) {
    var text = fs.readFileSync(file, 'utf8');
    text = encryption(text, key);
    fs.writeFileSync(file, text);
};