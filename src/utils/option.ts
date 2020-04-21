import { flags } from '@oclif/command'

const flagOption = {
  dev: flags.boolean({
    char: 'D',
    default: false,
    description: '运行本地环境',
  }),
  build: flags.boolean({
    char: 'B',
    default: false,
    description: 'build本地代码',
  }),
  init: flags.boolean({
    char: 'I',
    default: false,
    description: '初始化代码',
  }),
  help: flags.help(),
}

export default flagOption
