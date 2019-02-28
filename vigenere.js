const fs = require('fs');

function ascii(char) {
    return char.charCodeAt(0);
}

function encryption(text, blockLength, enable) {
    
    var textArray = [];
    var textBlock = '';
    var offset;
    var wordArray = [];
    
    for (var i = 0; i < text.length; i++) {
        textBlock += text[i];
        if (textBlock.length % blockLength == 0 || i == text.length - 1) {
            textArray.push(textBlock);
            textBlock = '';
        }
    }
    
    for (var i = 0; i < textArray.length; i++) {
        
        offset = 1;
        wordArray = [];
        
        for (var j = 0; j < textArray[i].length; j++) {
            if (enable) {
                wordArray.push(String.fromCharCode(ascii(textArray[i][j]) + offset));
            } else {
                wordArray.push(String.fromCharCode(ascii(textArray[i][j]) - offset));
            }
            offset += 1;
        }
        
        textArray[i] = wordArray.join('');
        
    }
    
    return textArray.join('');
    
}

// ------------------------- Export section --------------------------- //

exports.encodeFile = function (file, blockLength) {
    var text = fs.readFileSync(file, 'utf8');
    text = encryption(text, blockLength, true);
    fs.writeFileSync(file, text);
};

exports.decodeFile = function (file, blockLength) {
    var text = fs.readFileSync(file, 'utf8');
    text = encryption(text, blockLength, false);
    fs.writeFileSync(file, text);
};