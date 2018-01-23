
import {expect} from 'chai';
import {take} from 'pipe-operator';

import {orderPaddleToMoveUp, orderPaddleToMoveDown, orderPaddleToStop, movePaddle} from '../paddle';
import * as PaddleFixture from './paddleFixture';


describe('Paddle movement', () => {
    
    test('paddle can be ordered to move up', () => {
        // given
        const givenPaddle = PaddleFixture.hasSpeed(PaddleFixture.somePaddle(), 10.0);

        //when
        const paddle = orderPaddleToMoveUp(givenPaddle);

        // then
        expect(paddle.velocity.y).to.equal(10.0, 'expect paddle y velocity to be');
    });
    
    test('paddle can be ordered to move up', () => {
        // given
        const givenPaddle = PaddleFixture.hasSpeed(PaddleFixture.somePaddle(), 10.0);

        //when
        const paddle = orderPaddleToMoveDown(givenPaddle);

        // then
        expect(paddle.velocity.y).to.equal(-10.0, 'expect paddle y velocity to be');
    });
    
    test('paddle can be ordered to stop', () => {
        // given
        const givenPaddle = PaddleFixture.isMovingUp(PaddleFixture.somePaddle());

        //when
        const paddle = orderPaddleToStop(givenPaddle);

        // then
        expect(paddle.velocity.x).to.equal(0.0, 'expect paddle x velocity to be');
        expect(paddle.velocity.y).to.equal(0.0, 'expect paddle y velocity to be');
    });
    
    test('paddle can move', () => {
        // given
        const duration = 2.0;
        const gameView = {width: 100, height: 100};
        const givenPaddle = take(PaddleFixture.somePaddle())
            .pipe(PaddleFixture.isAtPosition, 50.0, 50.0)
            .pipe(PaddleFixture.paddleHasSize, 2.0, 10.0)
            .pipe(PaddleFixture.hasVelocity, 0.0, 10.0)
            .result();
        
        //when
        const paddle = movePaddle(givenPaddle, gameView, duration);

        // then
        expect(paddle.position.x).to.equal(50.0, 'expect paddle position x to be');
        expect(paddle.position.y).to.equal(70.0, 'expect paddle position y to be');
    });

    test('paddle stops at the top edge', () => {
        // given
        const duration = 2.0;
        const gameView = {width: 100, height: 100};
        const givenPaddle = take(PaddleFixture.somePaddle())
            .pipe(PaddleFixture.isAtPosition, 50.0, 78.0)
            .pipe(PaddleFixture.paddleHasSize, 2.0, 10.0)
            .pipe(PaddleFixture.hasVelocity, 0.0, 10.0)
            .result();

        //when
        const paddle = movePaddle(givenPaddle, gameView, duration);

        // then
        expect(paddle.position.x).to.equal(50.0, 'expect paddle position x to be');
        expect(paddle.position.y)
            .to.equal(gameView.height - givenPaddle.size.height/2.0, 'expect paddle position y to be');
    });

    test('paddle stops at the top edge with high speed', () => {
        // given
        const duration = 2.0;
        const gameView = {width: 100, height: 100};
        const givenPaddle = take(PaddleFixture.somePaddle())
            .pipe(PaddleFixture.isAtPosition, 50.0, 78.0)
            .pipe(PaddleFixture.paddleHasSize, 2.0, 10.0)
            .pipe(PaddleFixture.hasVelocity, 0.0, 50.0)
            .result();

        //when
        const paddle = movePaddle(givenPaddle, gameView, duration);

        // then
        expect(paddle.position.x).to.equal(50.0, 'expect paddle position x to be');
        expect(paddle.position.y)
            .to.equal(gameView.height - givenPaddle.size.height/2.0, 'expect paddle position y to be');
    });

    test('paddle stops at the bottom edge', () => {
        // given
        const duration = 2.0;
        const gameView = {width: 100, height: 100};
        const givenPaddle = take(PaddleFixture.somePaddle())
            .pipe(PaddleFixture.isAtPosition, 50.0, 23.0)
            .pipe(PaddleFixture.paddleHasSize, 2.0, 10.0)
            .pipe(PaddleFixture.hasVelocity, 0.0, -10.0)
            .result();

        //when
        const paddle = movePaddle(givenPaddle, gameView, duration);

        // then
        expect(paddle.position.x).to.equal(50.0, 'expect paddle position x to be');
        expect(paddle.position.y)
            .to.equal(givenPaddle.size.height/2.0, 'expect paddle position y to be');
    });

    test('paddle stops at the bottom edge with high speed', () => {
        // given
        const duration = 2.0;
        const gameView = {width: 100, height: 100};
        const givenPaddle = take(PaddleFixture.somePaddle())
            .pipe(PaddleFixture.isAtPosition, 50.0, 23.0)
            .pipe(PaddleFixture.paddleHasSize, 2.0, 10.0)
            .pipe(PaddleFixture.hasVelocity, 0.0, -50.0)
            .result();

        //when
        const paddle = movePaddle(givenPaddle, gameView, duration);

        // then
        expect(paddle.position.x).to.equal(50.0, 'expect paddle position x to be');
        expect(paddle.position.y)
            .to.equal(givenPaddle.size.height/2.0, 'expect paddle position y to be');
    });
    
});
