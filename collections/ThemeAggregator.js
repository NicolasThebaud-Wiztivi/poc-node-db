const { readdirSync } = require('fs');
const path = require('path').join(__dirname);


// load themes json
const themePath = `${path}/themes/`;
const themes = readdirSync(themePath).map(file => require(themePath+file));

// load map json
const mapPath = `${path}/maps/`;
const map = readdirSync(mapPath).map(file => require(mapPath+file));

module.exports = {
    themes,
    map
};

