import * as fs from 'fs'
import * as path from 'path'
import * as del from 'del'

export class Dir {
  static create = (dirname: string): string | Error => {
    const dirpath = Dir.getAbsolutePath(dirname)
    if (!fs.existsSync(dirpath)) {
      fs.mkdirSync(dirpath)
    } else {
      throw new Error(`Directory ${dirpath} already exists!`)
    }

    return dirpath
  }

  static remove = (dirname: string): string[] => del.sync(Dir.getAbsolutePath(dirname))

  static getAbsolutePath = (dirname: string): string =>
    path.isAbsolute(dirname) ? dirname : path.resolve(process.cwd(), dirname)
}
