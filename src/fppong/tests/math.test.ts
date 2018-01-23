
import {expect} from 'chai';

import {Vec2, addVectors, scaleVector} from '../math';


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
});
