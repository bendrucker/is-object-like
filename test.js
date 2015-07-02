'use strict'

var test = require('tape')
var isObjectLike = require('./')

test(function (t) {
  t.ok(isObjectLike({}))
  t.ok(isObjectLike(function () {}))
  t.notOk(isObjectLike(null))
  t.end()
})
