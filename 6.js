const {get} = require('lodash')

function extract(obj, path) {
    return get(obj, path)
}

module.exports = extract
