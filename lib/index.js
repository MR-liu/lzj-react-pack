"use strict";
const command_1 = require("@oclif/command");
const option_1 = require("./utils/option");
class LzjReactPack extends command_1.Command {
    async run() {
        // const {args, flags} = this.parse(LzjReactPack)
        // const name = flags.name || 'world'
        // this.log(`hello ${name} from ./src/index.ts`)
        // if (args.file && flags.force) {
        //   this.log(`you input --force and --file: ${args.file}`)
        // }
    }
}
LzjReactPack.description = 'describe the command here';
LzjReactPack.flags = option_1.default;
LzjReactPack.args = [{ name: 'file' }];
module.exports = LzjReactPack;
