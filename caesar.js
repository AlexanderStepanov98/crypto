const fs = require('fs');

function ascii(char) {
    return char.charCodeAt(0);
}

function encryption(text, key, enable) {
    var textArray = [];

    for (var i = 0; i < text.length; i++ ) {
        if (ascii(text[i]) !== 32 && enable) {
            textArray.push(String.fromCharCode(ascii(text[i]) + key));
        } else if (text.charCodeAt(i) !== 32) {
            textArray.push(String.fromCharCode(ascii(text[i]) - key));
        } else {
            textArray.push(text[i]);
        }
    }

    return textArray.join('');
}

// ------------------------- Export section --------------------------- //

exports.encodeFile = function (file, key) {
    var text = fs.readFileSync(file, 'utf8');
    text = encryption(text, key, true);
    fs.writeFileSync(file, text);
};

exports.decodeFile = function (file, key) {
    var text = fs.readFileSync(file, 'utf8');
    text = encryption(text, key, false);
    fs.writeFileSync(file, text);
};