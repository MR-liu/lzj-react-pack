import {Command, flags} from '@oclif/command'

export default class dev extends Command {
  static description = 'dev'

  static examples = [
    `dev use to react package
    `,
  ]

  static flags = {
    help: flags.help({char: 'h'}),
    // flag with a value (-n, --name=VALUE)
    name: flags.string({char: 'n', description: 'name to print'}),
    // flag with no value (-f, --force)
    force: flags.boolean({char: 'f'}),
  }

  static args = [{name: 'mode'}, {name: 'task'}]

  async run() {
    const {args, flags} = this.parse(dev)

    console.log(args, flags, this.parse(dev));

    // const name = flags.name || 'world'
    // this.log(`hello ${name} from ./src/commands/hello.ts`)
    // if (args.file && flags.force) {
    //   this.log(`you input --force and --file: ${args.file}`)
    // }
  }
}
