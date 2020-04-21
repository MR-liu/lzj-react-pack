"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const command_1 = require("@oclif/command");
const flagOption = {
    dev: command_1.flags.boolean({
        char: 'D',
        default: false,
        description: '运行本地环境',
    }),
    build: command_1.flags.boolean({
        char: 'B',
        default: false,
        description: 'build本地代码',
    }),
    init: command_1.flags.boolean({
        char: 'I',
        default: false,
        description: '初始化代码',
    }),
    help: command_1.flags.help(),
};
exports.default = flagOption;
