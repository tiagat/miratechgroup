function objectToString(obj) {
    if (typeof obj === 'function') { 
        src = obj.toString()
        return src.replace(/^.+\{/, '{') 
    }
    return JSON.stringify(obj)
}

function deepEqual(val1, val2) {
    if (val1 === val2) return true
    const d =  objectToString(val1) === objectToString(val2)
    return objectToString(val1) === objectToString(val2)
}

module.exports = deepEqual
