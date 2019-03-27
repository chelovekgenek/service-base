import * as jest from 'jest'

import { Dir } from './dir'

describe('utities/Dir', () => {
  describe('Dir.getAbsolutePath', () => {
    const dirpath = '/mnt/c/Projects/service-base-cli'
    it("should return absolute path when it's passed", () => {
      expect(Dir.getAbsolutePath(dirpath)).toBe(dirpath)
    })
    it('should absolute path when relative path from current directory is passed', () => {
      expect(Dir.getAbsolutePath('relative-dirpath')).toBe(dirpath + '/relative-dirpath')
    })
  })
})
