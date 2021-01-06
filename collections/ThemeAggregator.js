const { readdirSync } = require('fs');
const path = require('path').join(__dirname);


// load themes json
const themePath = `${path}/themes/`;
const themes = readdirSync(themePath).map(file => require(themePath+file));

module.exports = {
    themes,
};

