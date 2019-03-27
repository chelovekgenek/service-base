import { Dir } from './dir'

export const createApp = (dirname: string) => {
  console.log('Creating directory for your lovely project...')
  Dir.create(dirname)
}
