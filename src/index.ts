import { Command } from '@oclif/command'
import option from './utils/option'

class LzjReactPack extends Command {
  static description = 'describe the command here'

  static flags = option

  static args = [{ name: 'file' }]

  async run() {
    const { args, flags } = this.parse(LzjReactPack)
    const { staged, ...rest } = flags
    const { dir } = args

    console.warn(staged, rest, dir)
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
