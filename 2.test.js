const f1 = function (a) {
    return a + a
}

const f2 = (a) => function (a) {
    return a + a
}

const f3 = (a) => a

const o1 = {
    a: {
        b: 1
    }
}

const o2 = {
    a: {
        b: 1
    }
}

const o3 = {
    a: {
        b: 2
    }
}


const deepEqual = require('./2')
it('2.js', () => {

    expect(deepEqual(1,1)).toBe(true)
    expect(deepEqual('1','1')).toBe(true)

    expect(deepEqual(f1, f2)).toBe(true)
    expect(deepEqual(f1, f3)).toBe(false)

    expect(deepEqual(o1, o2)).toBe(true)
    expect(deepEqual(o1, o3)).toBe(false)

    expect(deepEqual([0, {a: 1}], [0, {a: 1}])).toBe(true)
    expect(deepEqual([0, {a: 1}], [0, {a: '1'}])).toBe(false)

})
