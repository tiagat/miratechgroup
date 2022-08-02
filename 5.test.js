const logIt = require('./5')


it('5.js', () => {

    var complexNum = { 
        mod: function() { 
          return 1 ;
        },
        add: function(a, b) { 
         return a + b;
        }
      };

      const obj = logIt(complexNum)

      console.log(obj.mod())
      console.log(obj.add(3,5))

})