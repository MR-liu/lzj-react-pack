import { Command } from "@oclif/command";
import option from "./utils/option";

class LzjReactPack extends Command {
  static description = "describe the command here";

  static flags = option;

  static args = [{ name: "file" }];

  async run() {
    // const {args, flags} = this.parse(LzjReactPack)
    // const name = flags.name || 'world'
    // this.log(`hello ${name} from ./src/index.ts`)
    // if (args.file && flags.force) {
    //   this.log(`you input --force and --file: ${args.file}`)
    // }
  }
}

export = LzjReactPack;
