import {Command, flags} from '@oclif/command'

export default class Dev extends Command {
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

  async run() {
    require('../../node_modules/lzj-pack/services/server.js')({
      port: '8080',
    })
  }
}
