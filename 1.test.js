const bindAll = require("./1")

var demoNum = { 
    r: 1, 
    i: 2, 
    mod: function() { 
      return Math.sqrt(this.r * this.r + this.i * this.i);
    }
  };

it('1.js', () => {
    const complexNum = bindAll(demoNum)
    const mod = complexNum.mod;
    expect(mod() === complexNum.mod()).toBe(true);
})
