'use strict'

var url = process.env['BACKEND_URL']
if (typeof(url) == 'undefined') {
  url = "http://127.0.0.1:5000"
}
url = "\"" + url + "\""
console.log("prod url", url)

module.exports = {
  NODE_ENV: '"production"',
  BASE_API: url,
}
