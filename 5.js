function logIt(obj) {

    for (const [key, value] of Object.entries(obj)) {
        if (typeof obj[key] == 'function') {
            const fn = obj[key]
            obj[key] = function() {
                const args = [...arguments]
                console.log(`fn: ${key}, args: ${args}`)
                return fn(...arguments)
            }
        }
    }

    return obj
}


module.exports = logIt
