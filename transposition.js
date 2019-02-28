const fs = require('fs');

function encryption(text, blockKey, enable) {

    var textArray = [];
    var textBlock = '';
    var wordArray = [];

    for (let i = 0; i < text.length; i++) {
        textBlock += text[i];
        if (textBlock.length % blockKey.length == 0 || i == text.length - 1) {
            textArray.push(textBlock);
            textBlock = '';
        }
    }


    textArray.forEach(function (block, i, textArray) {

        wordArray = [];
        for (let i = 0; i < blockKey.length; i++) {
            if (enable) {
                wordArray.splice(blockKey[i] - 1, 0, block[i]);
            } else {
                wordArray.push(block[blockKey[i] - 1]);
            }
        }
        textArray[i] = wordArray.join('');
    });

    return textArray.join('');
}

// ------------------------- Export section --------------------------- //

exports.encodeFile = function(file, blockKey) {
    var text = fs.readFileSync(file, 'utf8');
    text = encryption(text, blockKey, true);
    fs.writeFileSync(file, text);
};

exports.decodeFile = function(file, blockKey) {
    var text = fs.readFileSync(file, 'utf8');
    text = encryption(text, blockKey, false);
    fs.writeFileSync(file, text);
};