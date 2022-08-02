function list2array(obj, data = []) {
    if (obj.head) data.push(obj.head)
    if (obj.tail) list2array(obj.tail, data)
    return data
}

function array2list(arr, step = 0, data = {}) {

   if (step < arr.length) {
        data.head = arr[step]
        data.tail = (step == arr.length - 1) ? undefined : array2list(arr, ++step, data.tail)
   }

   return data
}

function getElement(obj, nth = 0, step = 0) {
    if (nth === step) return obj
    return getElement(obj.tail, nth, ++step)
}


function main() {

    Object.defineProperty(Object.prototype, 'toArray',  {
        value: function() {
            if (typeof this === 'object') {
                return list2array(this)
            }
            return null
        }
    })

    Object.defineProperty(Object.prototype, 'toList',  {
        value: function() {
            if (typeof this === 'object' && Array.isArray(this)) {
                return array2list(this)
            }
            return null
        }
    })

    Object.defineProperty(Object.prototype, 'nth',  {
        value: function(nth) {
            if (typeof this === 'object') {
                return getElement(this, nth)
            }
            return null
        }
    })

}

module.exports = main
