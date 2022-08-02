const curry = require('./7')

it('7.js', () => {
    const add3 = (a, b, c) => { return a + b + c; }

    var g1 = curry(add3);
    g1(1); 
    g1(2); 
    expect(g1(3)).toBe(6)


    var g2 = curry(add3);
    expect(g2(1)(2)(3)).toBe(6)

})
