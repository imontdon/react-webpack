const path = require('path')

exports.reslove = (...args) => path.join(__dirname, '..', ...args)