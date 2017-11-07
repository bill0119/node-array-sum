var should = require('should');
var sum = require('../array-sum.js');

describe('#ArraySum', function(){
    it('should return the sum of array', function(done){
        var total = sum.ArraySum([1, 2, 3, 4]);
        total.should.equal(10);
        done();
    })
})

