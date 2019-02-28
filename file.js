const fs = require('fs');

// ------------------------- Export section --------------------------- //

exports.getText = function (file) {
    return fs.readFileSync(file, 'utf8');
};

exports.setText = function (file, text) {
    return fs.writeFileSync(file, text);
};
