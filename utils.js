console.log('utils.js')

const name2 ='Bob'

const add = function(a,b) {
    return a + b
}

// to export stuff to share will the outside world need to write:
// module.exports = name2

module.exports = add
