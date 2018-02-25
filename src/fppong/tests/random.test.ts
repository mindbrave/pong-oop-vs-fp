
import {expect} from 'chai';
import {randomInRange, randomInRanges} from '../random';


describe('Random in ranges', () => {
    test('can get random float in given range 1', () => {
        // given
        const randomGenerator = randomMock([0.0]);

        // when
        const value = randomInRange(0.0, 1.0, randomGenerator);

        // then
        expect(value).to.equal(0.0, 'expect value to be');
    });
    
    test('can get random float in given range 2', () => {
        // given
        const randomGenerator = randomMock([0.5]);

        // when
        const value = randomInRange(10.0, 20.0, randomGenerator);

        // then
        expect(value).to.equal(15.0, 'expect value to be');
    });
    
    test('can get random float in given range 3', () => {
        // given
        const randomGenerator = randomMock([0.5]);

        // when
        const value = randomInRange(0.0, 1.2, randomGenerator);

        // then
        expect(value).to.equal(0.6, 'expect value to be');
    });
    
    test('can get random float in given ranges 1', () => {
        // given
        const randomGenerator = randomMock([0.0]);

        // when
        const value = randomInRanges([[0.0, 1.0]], randomGenerator);

        // then
        expect(value).to.equal(0.0, 'expect value to be');
    });
    
    test('can get random float in given ranges 2', () => {
        // given
        const randomGenerator = randomMock([0.0]);

        // when
        const value = randomInRanges([[0.0, 1.2]], randomGenerator);

        // then
        expect(value).to.equal(0.0, 'expect value to be');
    });
    
    test('can get random float in given ranges 3', () => {
        // given
        const randomGenerator = randomMock([0.0]);

        // when
        const value = randomInRanges([[1.0, 2.0], [2.5, 4.5]], randomGenerator);

        // then
        expect(value).to.equal(1.0, 'expect value to be');
    });
    
    test('can get random float in given ranges 4', () => {
        // given
        const randomGenerator = randomMock([0.9999]);

        // when
        const value = randomInRanges([[1.0, 2.0], [2.5, 4.5]], randomGenerator);

        // then
        expect(value).to.be.closeTo(4.5, 0.001, 'expect value to be close to');
    });
    
    test('can get random float in given ranges 5', () => {
        // given
        const randomGenerator = randomMock([0.5]);

        // when
        const value = randomInRanges([[1.0, 3.0], [3.5, 5.5]], randomGenerator);

        // then
        expect(value).to.be.equal(3.5, 'expect value to be');
    });
    
    test('can get random float in given ranges 6', () => {
        // given
        const randomGenerator = randomMock([0.4999]);

        // when
        const value = randomInRanges([[1.0, 3.0], [3.5, 5.5]], randomGenerator);

        // then
        expect(value).to.be.closeTo(3.0, 0.001, 'expect value to be close to');
    });
    
    test('can get random float in given ranges 7', () => {
        // given
        const randomGenerator = randomMock([0.5]);

        // when
        const value = randomInRanges([[1.0, 2.0], [4.0, 6.0], [90.0, 91.0]], randomGenerator);

        // then
        expect(value).to.be.equal(5.0, 'expect value to be');
    });
    
    test('can get random float in given ranges 8', () => {
        // given
        const randomGenerator = randomMock([0.25]);

        // when
        const value = randomInRanges([[0.0, 90.0], [91.0, 270.0], [271.0, 360.0]], randomGenerator);

        // then
        expect(value).to.be.closeTo(89.5, 0.5, 'expect value to be close to');
    });
});


/**
 * Values to return must be in range <0.0, 1.0)
 */
const randomMock = (valuesToReturn: [number]): (() => number) => () => valuesToReturn.shift();