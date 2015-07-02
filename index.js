'use strict'

var isObject = require('is-object')

module.exports = function isObjectLike (value) {
  return isObject(value) || typeof value === 'function'
}
