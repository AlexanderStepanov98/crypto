const fs = require('fs');

function encryption(text) {
    var textArray = text.split(' ');
    var wordArray = [];
    var temp, j = 0;

    for (var i = 0; i < textArray.length; i++) {

        wordArray = textArray[i].split('');
        var flag = textArray[i].length % 2;

        while (j < wordArray.length - flag) {
            temp = wordArray[j];
            wordArray[j] = wordArray[j + 1];
            wordArray[j + 1] = temp;
            j += 2;
        }
        j = 0;
        textArray[i] = wordArray.join('');
    }

    return textArray.join(' ');
}

// ------------------------- Export section --------------------------- //

exports.encodeFile = function(file) {
    var text = fs.readFileSync(file, 'utf8');
    text = encryption(text);
    fs.writeFileSync(file, text);
};

// adding decodeFile method, which has a link to encodeFile,
// as encodeFile can be both used for encoding and decoding
exports.decodeFile = exports.encodeFile;