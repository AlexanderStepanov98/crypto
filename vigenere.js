const fs = require('fs');

function ascii(char) {
    return char.charCodeAt(0);
}

function keyExpand(key, text) {
    let keyArray = key.split('');
    let i = 0;
    while (keyArray.length !== text.length) {
        if (i === keyArray.length) { i = 0 }
        keyArray.push(keyArray[i]);
        i += 1;
    }
    return keyArray.join('');
}

function encryption(text, key, enable) {

    let cipher = [];
    key = keyExpand(key, text);

    for (let i = 0; i < text.length; i++) {
        if (enable) {
            cipher.push(String.fromCharCode((ascii(text[i]) + ascii(key[i])) % 122));
        } else {
            cipher.push(String.fromCharCode((ascii(text[i]) - ascii(key[i]) + 122) % 122));
        }
    }

    return cipher.join('');
}

// ------------------------- Export section --------------------------- //

exports.encodeFile = function (file, key) {
    let text = fs.readFileSync(file, 'utf8');
    text = encryption(text, key, true);
    fs.writeFileSync(file, text);
};

exports.decodeFile = function (file, key) {
    let text = fs.readFileSync(file, 'utf8');
    text = encryption(text, key, false);
    fs.writeFileSync(file, text);
};