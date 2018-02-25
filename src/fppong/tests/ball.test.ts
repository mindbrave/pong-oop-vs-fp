
import {expect} from 'chai';
import {take} from 'pipe-operator';

import {createBall, ballIsAtPosition, ballHasVelocity, ballHasRadius} from './ballFixture';
import {moveBall, orderBallToMoveInRandomNotVerticalDirection} from '../ball';


describe('Ball movement', () => {

    test('ball can move', () => {
        // given
        const gameView = {width: 500, height: 500};
        const givenBall = take(createBall())
            .pipe(ballIsAtPosition, {x: 100.0, y: 100.0})
            .pipe(ballHasVelocity, {x: 10.0, y: 5.0})
            .result();

        //when
        const ball = moveBall(givenBall, gameView, 2.0);

        // then
        expect(ball.position.x).to.equal(120.0, 'expect ball position x to be');
        expect(ball.position.y).to.equal(110.0, 'expect ball position y to be');
    });
    
    test('can order ball to move into random not vertical direction', () => {
        // given
        // random 0.25 would mean 90 degrees out of 360 (vertical vector), but this should be covered
        const randomMock = () => 0.25;
        const givenBall = take(createBall())
            .pipe(ballHasVelocity, {x: 0.0, y: 0.0})
            .result();

        //when
        const ball = orderBallToMoveInRandomNotVerticalDirection(givenBall, randomMock);

        // then
        expect(ball.velocity.x).to.not.equal(0.0, 'expect ball velocity x to not be');
    });
    
    test('ball bounces off top edge', () => {
        // given
        const gameView = {width: 500, height: 500};
        const ballRadius = 10.0;
        const givenBall = take(createBall())
            .pipe(ballHasRadius, ballRadius)
            .pipe(ballIsAtPosition, {x: 100.0, y: gameView.height - ballRadius - 10.0})
            .pipe(ballHasVelocity, {x: 10.0, y: 10.0})
            .result();

        //when
        const ball = moveBall(givenBall, gameView, 2.0);

        // then
        expect(ball.velocity.x).to.equal(10.0, 'expect ball velocity x to be');
        expect(ball.velocity.y).to.equal(-10.0, 'expect ball velocity y to be');
        expect(ball.position.x).to.equal(120.0, 'expect ball position x to be');
        expect(ball.position.y).to.equal(gameView.height - ballRadius - 10.0, 'expect ball position y to be');
    });
    
    test('ball bounces off bottom edge', () => {
        // given
        const gameView = {width: 500, height: 500};
        const ballRadius = 10.0;
        const givenBall = take(createBall())
            .pipe(ballHasRadius, ballRadius)
            .pipe(ballIsAtPosition, {x: 100.0, y: ballRadius + 10.0})
            .pipe(ballHasVelocity, {x: -10.0, y: -10.0})
            .result();

        //when
        const ball = moveBall(givenBall, gameView, 2.0);

        // then
        expect(ball.velocity.x).to.equal(-10.0, 'expect ball velocity x to be');
        expect(ball.velocity.y).to.equal(10.0, 'expect ball velocity y to be');
        expect(ball.position.x).to.equal(80.0, 'expect ball position x to be');
        expect(ball.position.y).to.equal(ballRadius + 10.0, 'expect ball position y to be');
    });
});
