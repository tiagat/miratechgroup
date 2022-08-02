function curry(fn) {
    
    args = []

    const fnOut = (a) => {
        this.args.push(a)
        const result = fn(...args)
        return result ? result : fnOut
    }

    return fnOut

}

module.exports = curry
