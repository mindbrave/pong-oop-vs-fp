
import {expect} from 'chai';

import {
    addVectors, scaleVector, normalizeVector, vectorLength, radiansToUnitVector,
    degToRad
} from '../math';


describe('Vector operations', () => {

    test('vectors can be summed', () => {
        // given
        const v1 = {x: 1.0, y: 1.0};
        const v2 = {x: -1.0, y: 4.0};
        
        // when
        const v3 = addVectors(v1, v2); 
        
        // then
        expect(v3.x).to.equal(0.0, 'expect x to be');
        expect(v3.y).to.equal(5.0, 'expect y to be');
    });
    
    test('vectors can be scaled', () => {
        // given
        const v1 = {x: -1.0, y: 4.0};
        
        // when
        const v2 = scaleVector(v1, 3.0); 
        
        // then
        expect(v2.x).to.equal(-3.0, 'expect x to be');
        expect(v2.y).to.equal(12.0, 'expect y to be');
    });
    
    test('vectors can be normalized', () => {
        // given
        const v1 = {x: -3.0, y: 4.0};
        
        // when
        const v2 = normalizeVector(v1); 
        
        // then
        expect(vectorLength(v2)).to.equal(1.0, 'expect vector length to be');
        expect(v2.x).to.equal(-3.0/5.0, 'expect x to be');
        expect(v2.y).to.equal(4.0/5.0, 'expect y to be');
    });
    
    test('can compute vectors length', () => {
        // given
        const v1 = {x: -3.0, y: 4.0};
        
        // when
        const length = vectorLength(v1); 
        
        // then
        expect(length).to.equal(5.0, 'expect vector length to be');
    });
    
    test('can convert 0 angle to unit vector', () => {
        // given
        const angleRadians = 0.0;
        
        // when
        const v = radiansToUnitVector(angleRadians);
        
        // then
        expect(v.x).to.equal(1.0, 'expect vector x to be');
        expect(v.y).to.equal(0.0, 'expect vector y to be');
    });
    
    test('can convert 90 angle to unit vector', () => {
        // given
        const angleRadians = Math.PI/2.0;
        
        // when
        const v = radiansToUnitVector(angleRadians);

        // then
        expect(v.x).closeTo(0.0, 0.00001, 'expect vector x to be close to');
        expect(v.y).closeTo(1.0, 0.00001, 'expect vector y to be close to');
    });
});


describe('Angle operations', () => {
    test('can convert 0 degrees to radians', () => {
        // given
        const degrees = 0;
        
        // when
        const radians = degToRad(degrees);
        
        // then
        expect(radians).to.equal(0.0, 'expect radians to be');
    });
    
    test('can convert 90 degrees to radians', () => {
        // given
        const degrees = 90;
        
        // when
        const radians = degToRad(degrees);
        
        // then
        expect(radians).to.equal(Math.PI/2.0, 'expect radians to be');
    });
    
    test('can convert 180 degrees to radians', () => {
        // given
        const degrees = 180;
        
        // when
        const radians = degToRad(degrees);
        
        // then
        expect(radians).to.equal(-Math.PI, 'expect radians to be');
    });
    
    test('can convert 270 degrees to radians', () => {
        // given
        const degrees = 270;
        
        // when
        const radians = degToRad(degrees);
        
        // then
        expect(radians).to.equal(-Math.PI/2.0, 'expect radians to be');
    });
    
    test('can convert 360 degrees to radians', () => {
        // given
        const degrees = 360;
        
        // when
        const radians = degToRad(degrees);
        
        // then
        expect(radians).to.equal(0.0, 'expect radians to be');
    });
    
    test('can convert 450 degrees to radians', () => {
        // given
        const degrees = 450;
        
        // when
        const radians = degToRad(degrees);
        
        // then
        expect(radians).to.equal(Math.PI/2.0, 'expect radians to be');
    });
    
    test('can convert -90 degrees to radians', () => {
        // given
        const degrees = -90;
        
        // when
        const radians = degToRad(degrees);
        
        // then
        expect(radians).to.equal(-Math.PI/2.0, 'expect radians to be');
    });
    
    test('can convert -180 degrees to radians', () => {
        // given
        const degrees = -180;
        
        // when
        const radians = degToRad(degrees);
        
        // then
        expect(radians).to.equal(-Math.PI, 'expect radians to be');
    });
    
    test('can convert -270 degrees to radians', () => {
        // given
        const degrees = -270;
        
        // when
        const radians = degToRad(degrees);
        
        // then
        expect(radians).to.equal(Math.PI/2.0, 'expect radians to be');
    });
    
    test('can convert -360 degrees to radians', () => {
        // given
        const degrees = -360;
        
        // when
        const radians = degToRad(degrees);
        
        // then
        expect(radians).to.equal(0.0, 'expect radians to be');
    });
    
    test('can convert -450 degrees to radians', () => {
        // given
        const degrees = -450;
        
        // when
        const radians = degToRad(degrees);
        
        // then
        expect(radians).to.equal(-Math.PI/2.0, 'expect radians to be');
    });
});
