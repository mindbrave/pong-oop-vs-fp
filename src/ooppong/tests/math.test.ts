
import {expect} from 'chai';

import {Vec2} from '../math';


describe('Vector operations', () => {
    test('vectors can be summed', () => {
        // given
        const v1 = new Vec2(1.0, 1.0);
        const v2 = new Vec2(-1.0, 4.0);
        
        // when
        const v3 = v1.add(v2); 
        
        // then
        expect(v3.x).to.equal(0.0, 'expect x to be');
        expect(v3.y).to.equal(5.0, 'expect y to be');
    });
    
    test('vectors can be scaled', () => {
        // given
        const v1 = new Vec2(2.0, 3.0);
        
        // when
        const v2 = v1.scale(3.0); 
        
        // then
        expect(v2.x).to.equal(6.0, 'expect x to be');
        expect(v2.y).to.equal(9.0, 'expect y to be');
    });
    
    test('vectors can compute its length', () => {
        // given
        const v1 = new Vec2(-4.0, 3.0);
        
        // then
        expect(v1.length()).to.equal(5.0, 'expect vector to have length');
    });
    
    test('vectors can be normalized 1', () => {
        // given
        const v1 = new Vec2(4.0, 0.0);
        
        // when
        const v2 = v1.normalize(); 
        
        // then
        expect(v2.length()).to.equal(1.0, 'expect vector to have length');
    });
    
    test('vectors can be normalized 2', () => {
        // given
        const v1 = new Vec2(4.0, -3.0);
        
        // when
        const v2 = v1.normalize(); 
        
        // then
        expect(v2.length()).to.equal(1.0, 'expect vector to have length');
    });
    
    test('zero vectors can be normalized', () => {
        // given
        const v1 = new Vec2(0.0, 0.0);
        
        // when
        const v2 = v1.normalize(); 
        
        // then
        expect(v2.length()).to.equal(0.0, 'expect vector to have length');
    });
});
