function bindAll(obj) {
    for (const [key, value] of Object.entries(obj)) {
        if (typeof obj[key] == 'function') obj[key] = obj.mod.bind(obj)
    }
    return Object.assign(obj, { mod: obj.mod.bind(obj)})
}

module.exports = bindAll
