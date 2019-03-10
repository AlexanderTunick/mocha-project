const assert = require('assert');
const chai = require('chai')
    , expect = chai.expect
    , should = chai.should();

describe('Array', function () {
    describe('#indexOf()', function () {
        it('should return -1 when the value is not present', function () {
            assert.equal([1, 2, 3].indexOf(4), -1);
        });

        it('The length of array should be 3', function () {
            [1,2,3].should.have.lengthOf(3);
        });
    });
});