const { readdirSync, writeFile } = require('fs');
const path = require('path').join(__dirname);


// load themes json
const themePath = `${path}/themes/`;
const themes = readdirSync(themePath).map(file => require(themePath+file));

// load map json
const mapPath = `${path}/maps/`;
const map = readdirSync(mapPath).map(file => require(mapPath+file));



function registerTheme(theme) {
    writeFile(`${themePath}theme${theme.id.substr(-1)}.json`, JSON.stringify(theme), ()=>{});
}

module.exports = {
    themes,
    map,
    registerTheme
};

