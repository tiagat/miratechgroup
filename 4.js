function seq(fnIn) {
    
    results = []

    fnOut = () => {
        const args = this.results.slice().reverse()
        const res = fnIn(...args)
        results.push(res)
        return res
    }

    return fnOut.bind(this)
    
}

module.exports = seq
