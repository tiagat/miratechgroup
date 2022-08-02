const extract = require('./6')

it('6.js', () => {
    var obj = {
        x: 6,
        inner: {
            a: 'test',
            b: [1, 2, 3]
        }
    }

    expect(extract(obj, 'x')).toBe(6)
    expect(extract(obj, 'inner.a')).toBe('test')
    expect(extract(obj, 'inner.b[2]')).toBe(3)
    expect(extract(obj, 'inner["b"][2]')).toBe(3)
})
