'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

var url = process.env['BACKEND_URL']
if (typeof(url) == 'undefined') {
  url = "http://127.0.0.1:5000"
}
url = "\"" + url + "\""
module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  BASE_API: url,
})
