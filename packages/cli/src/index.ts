#!/usr/bin/env node

import * as commander from 'commander'
import * as envinfo from 'envinfo'
import { createApp, Dir } from './utilities'

let projectName: string = ''

const main = async () => {
  commander
    .arguments('<project-directory>')
    .usage(`('<project-directory>') [options]`)
    .action((name: string) => {
      projectName = name
    })
    .option('--remove', 'remove project directory')
    .option('--create', 'create project directory')
    .option('--info', 'print environment debug info')
    .parse(process.argv)

  if (commander.info) {
    console.log('Environment Info:')
    return envinfo.run({ System: ['OS', 'CPU'] }, { duplicates: true }).then(console.log)
  }

  if (!projectName) {
    console.log('Argument <project-directory> argument is not passed')
    return
  }

  console.log('<project-directory>:', projectName)
  console.log()

  const dirpath = Dir.getAbsolutePath(projectName)

  if (commander.remove) {
    console.log(`Removing ${dirpath}...`)
    const dirs = Dir.remove(projectName)
    if (!dirs.length) {
      console.log(`Directory ${dirpath} doesn't exist.`)
    } else {
      console.log('Has been removed:', dirs)
    }
    return
  }

  if (commander.create) {
    try {
      console.log(`Creating ${dirpath}...`)
      Dir.create(projectName)
      console.log('Directory has been created: ', dirpath)
    } catch (e) {
      console.log(`Directory ${dirpath} already exists!`)
    }
    return
  }

  createApp(dirpath)
}

console.log()
main()
console.log()
