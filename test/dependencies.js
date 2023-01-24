var fixmyjs = require('../')
var jshint = require('jshint').JSHINT

export default {
  f: fixmyjs.fix,
  l: function (code, options) {
    jshint(code, options)
    return fixmyjs(jshint.data(), code, options).run()
  }
}
