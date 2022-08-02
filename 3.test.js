require('./3')()


describe('3.js', () => {

    it('array to list', () => {
        const list = [1, 2, 3].toList()
        expect(list).toMatchInlineSnapshot(`
Object {
  "head": 1,
  "tail": Object {
    "head": 2,
    "tail": Object {
      "head": 3,
      "tail": undefined,
    },
  },
}
`)

    })

    it('list to array', () => {
        const list = {
            head: 1,
            tail: {
                head: 2,
                tail: {
                    head: 3,
                    tail: undefined
                }
            }
        }
        const result = list.toArray()
        expect(result).toEqual([1,2,3])

    })

    it('nth element', () => {
        const list = {
            head: 1,
            tail: {
                head: 2,
                tail: {
                    head: 3,
                    tail: undefined
                }
            }
        }
        const result = list.nth(1)
        expect(result).toMatchInlineSnapshot(`
Object {
  "head": 2,
  "tail": Object {
    "head": 3,
    "tail": undefined,
  },
}
`)

    })


})
