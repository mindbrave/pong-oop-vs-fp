
import {expect} from 'chai';
import {take} from 'pipe-operator';

import {orderPaddleToMoveUp, orderPaddleToMoveDown, orderPaddleToStop, movePaddle} from '../paddle';
import {somePaddle, hasSpeed, isAtPosition, hasVelocity, isMovingUp} from './paddleFixture';


describe('Paddle movement', () => {
    
    test('paddle can be ordered to move up', () => {
        // given
        const givenPaddle = hasSpeed(somePaddle(), 10.0); 

        //when
        const paddle = orderPaddleToMoveUp(givenPaddle);

        // then
        expect(paddle.velocity.y).to.equal(10.0, 'expect paddle y velocity to be');
    });
    
    test('paddle can be ordered to move up', () => {
        // given
        const givenPaddle = hasSpeed(somePaddle(), 10.0); 

        //when
        const paddle = orderPaddleToMoveDown(givenPaddle);

        // then
        expect(paddle.velocity.y).to.equal(-10.0, 'expect paddle y velocity to be');
    });
    
    test('paddle can be ordered to stop', () => {
        // given
        const givenPaddle = isMovingUp(somePaddle()); 

        //when
        const paddle = orderPaddleToStop(givenPaddle);

        // then
        expect(paddle.velocity.x).to.equal(0.0, 'expect paddle x velocity to be');
        expect(paddle.velocity.y).to.equal(0.0, 'expect paddle y velocity to be');
    });
    
    test('paddle can move', () => {
        // given
        const duration = 2.0;
        const givenPaddle = take(somePaddle())
            .pipe(isAtPosition, 50.0, 50.0)
            .pipe(hasVelocity, 0.0, 10.0)
            .result();
        
        //when
        const paddle = movePaddle(givenPaddle, duration);

        // then
        expect(paddle.position.x).to.equal(50.0, 'expect paddle position x to be');
        expect(paddle.position.y).to.equal(70.0, 'expect paddle position y to be');
    });
    
});
