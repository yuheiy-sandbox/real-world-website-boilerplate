const { posix, join } = require('path')
const path = require('path')
const { readFile, writeFile } = require('fs')
const { promisify } = require('util')
const { origin, subdir } = require('../realworld.config')

const isProd = process.argv[2] === 'build' || 'serveDist'

const basePath = posix.join('/', subdir || '')
const assetPath = posix.join(basePath, 'assets')
const baseUrl = `${origin}${basePath}`
const baseAssetUrl = `${origin}${assetPath}`

const destDir = isProd ? 'dist' : 'tmp'
const destBaseDir = posix.join(destDir, basePath)
const destAssetDir = posix.join(destDir, assetPath)

const readFileAsync = promisify(readFile)
const writeFileAsync = promisify(writeFile)

module.exports = {
  isProd,
  origin,
  basePath,
  assetPath,
  baseUrl,
  baseAssetUrl,
  destDir,
  destBaseDir,
  destAssetDir,
  readFileAsync,
  writeFileAsync,
}
