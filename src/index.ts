const chalk = require('chalk')
const clear = require('clear')

import { Command } from '@oclif/command'
import option from './utils/option'

class LzjReactPack extends Command {
  static description = 'lzj-react-cli工具'

  static flags = option

  static args = [{ name: 'port' }]

  static pwd = process.cwd()

  async run() {
    const { flags } = this.parse(LzjReactPack)
    const { init, build, dev } = flags

    switch (true) {
    case build:
      this.build()
      return

    case dev:
      this.dev()
      break

    case init:
      this.initbase()
      break

    default:
      clear()
      console.warn(chalk.yellow('lzj-react-pack --help进行查看帮助'))
      break
    }
  }

  async build() {
    console.warn('build')
  }

  async dev() {
    require(`${process.cwd()}/node_modules/lzj-pack/services/server.js`)({ port: 8080 })
    console.warn('dev')
  }

  async initbase() {
    console.warn('init')
  }

  // async lint(flags: any) {
  //   const { dir, cwd, prettier, eslint, fix, format } = flags
  //   if (dir === undefined) {
  //     this.error('please specify a path to lint')
  //   }
  //   // 支持多路径，以逗号分隔
  //   let filePath: any

  //   if (dir.split(',').length !== 0) {    // eslint-disable-line
  //     filePath = dir.split(',')
  //   } else {
  //     filePath = dir
  //   }

  //   const allFiles = getFiles(filePath, cwd)
  //   try {
  //     if (eslint) {
  //       getEslintConfig()
  //       const eslintExtensions = ['.js', '.jsx', '.ts', '.tsx']
  //       const files = allFiles.filter(item => endsWithArray(item, eslintExtensions))
  //       if (files.length > 0) {
  //         let args = fix ? ['--fix', ...files] : [...files] // eslint-disable-line
  //         args = format !== 'stylish' ? ['-f', format, ...args] : [...args] // eslint-disable-line
  //         spawn.sync(eslintPath, args, {stdio: 'inherit'})
  //       }
  //     }

  //     if (prettier) {
  //       const prettierExtensions = ['.js', '.jsx', '.ts', '.tsx', '.css', '.less', '.scss', '.sass']
  //       const files = allFiles.filter(item =>
  //         endsWithArray(item, prettierExtensions),
  //       )
  //       if (files.length > 0) {
  //         spawn.sync(prettierPath, ['--write', ...files], {stdio: 'inherit'})
  //       }
  //     }
  //   } catch (error) {
  //     this.error(error)
  //   }
  // }
}

export = LzjReactPack
