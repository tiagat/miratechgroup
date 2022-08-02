const seq = require('./4')

it('4.js', () => {
    const fn = seq(function() { 
        const args = Array.from(arguments)
        const argsLength = args.length
        return argsLength > 1 ? args[0] + args[1] : 1
    })

    expect(fn()).toBe(1)
    expect(fn()).toBe(1)
    expect(fn()).toBe(2)
    expect(fn()).toBe(3)
    expect(fn()).toBe(5)

})