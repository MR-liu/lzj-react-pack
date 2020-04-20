"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const command_1 = require("@oclif/command");
const flagConfig = {
    staged: command_1.flags.boolean({
        char: 'S',
        default: false,
        description: 'only lint git staged files',
    }),
    prettier: command_1.flags.boolean({
        char: 'P',
        default: false,
        description: 'format code with prettier',
    }),
    eslint: command_1.flags.boolean({
        char: 'e',
        default: false,
        description: 'enabel lint javascript',
    }),
    fix: command_1.flags.boolean({
        char: 'f',
        default: false,
        description: 'fix all eslint and stylelint auto-fixable problems',
    }),
    cwd: command_1.flags.string({
        char: 'c',
        default: process.cwd(),
        description: 'current working directory',
    }),
    format: command_1.flags.string({
        char: 'F',
        default: 'stylish',
        description: 'output format of console',
    }),
};
exports.default = flagConfig;
