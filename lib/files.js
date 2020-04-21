"use strict";
const path = require('path');
module.exports = {
    getCurrentDirectoryBase: () => {
        return path.basename(process.cwd());
    },
    getAbsolutepath: () => {
        return process.cwd();
    },
};
