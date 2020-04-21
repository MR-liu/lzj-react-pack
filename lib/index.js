"use strict";
const chalk = require('chalk');
const clear = require('clear');
const command_1 = require("@oclif/command");
const option_1 = require("./utils/option");
class LzjReactPack extends command_1.Command {
    async run() {
        const { flags } = this.parse(LzjReactPack);
        const { init, build, dev } = flags;
        switch (true) {
            case build:
                this.build();
                return;
            case dev:
                this.dev();
                break;
            case init:
                this.initbase();
                break;
            default:
                clear();
                console.warn(chalk.yellow('lzj-react-pack --help进行查看帮助'));
                break;
        }
    }
    async build() {
        console.warn('build');
    }
    async dev() {
        require(`${process.cwd()}/node_modules/lzj-pack/services/server.js`)({ port: 8080 });
        console.warn('dev');
    }
    async initbase() {
        console.warn('init');
    }
}
LzjReactPack.description = 'lzj-react-cli工具';
LzjReactPack.flags = option_1.default;
LzjReactPack.args = [{ name: 'port' }];
LzjReactPack.pwd = process.cwd();
module.exports = LzjReactPack;
