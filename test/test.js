var chai = require('chai')
chai.should()
var sinon = require('sinon')
chai.use(require('sinon-chai'))


describe('lug', function () {
  var lug = require('../')


  it('identity', function () {
    var c = console.log
    console.log = sinon.spy()

    try {
      var obj = {foo: 'baz'}
      lug(obj).should.equal(obj)

      console.log.should.have.been.called.once
      console.log.should.have.been.calledWithExactly(obj)
    } finally {
      console.log = c
    }

  })

  describe('.label', function () {

    it('returns a function', function () {
      lug.label('foo').should.be.a('function')
    })

    it('identity', function () {
      var c = console.log
      console.log = sinon.spy()

      try {
        [1,2,3].map(lug.label('Num'))
          .should.deep.equal([1,2,3])

        console.log.should.have.been.called.thrice
        console.log.firstCall.args.should.deep.equal(['Num:', 1, 0, [1,2,3]])
        console.log.secondCall.args.should.deep.equal(['Num:', 2, 1, [1,2,3]])
        console.log.thirdCall.args.should.deep.equal(['Num:', 3, 2, [1,2,3]])
      } finally {
        console.log = c
      }

    })

  })
  
})