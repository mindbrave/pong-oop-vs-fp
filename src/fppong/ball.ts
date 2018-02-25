
import * as R from 'ramda';

import {Vec2, addVectors, scaleVector, radiansToUnitVector, degToRad} from './math';
import {Random, randomInRanges} from './random';
import {GameView} from './pong';


export type Ball = {
    position: Vec2,
    velocity: Vec2,
    radius: number,
    speed: number
};


export const moveBall = (ball: Ball, gameView: GameView, duration: number): Ball => {
    const nextPosition = addVectors(ball.position, scaleVector(ball.velocity, duration));
    if (nextPosition.y + ball.radius > gameView.height) {
        const timeTillEdgeCollision = (gameView.height - (ball.position.y + ball.radius)) / ball.velocity.y;
        const collisionPosition = addVectors(ball.position, scaleVector(ball.velocity, timeTillEdgeCollision));
        const newVelocity = {...ball.velocity, y: -ball.velocity.y};
        const timeLeft = duration - timeTillEdgeCollision;
        return {
            ...ball,
            velocity: newVelocity,
            position: addVectors(collisionPosition, scaleVector(newVelocity, timeLeft))
        };
    }
    if (nextPosition.y - ball.radius < 0) {
        const timeTillEdgeCollision = Math.abs((ball.position.y - ball.radius) / ball.velocity.y);
        const collisionPosition = addVectors(ball.position, scaleVector(ball.velocity, timeTillEdgeCollision));
        const newVelocity = {...ball.velocity, y: -ball.velocity.y};
        const timeLeft = duration - timeTillEdgeCollision;
        return {
            ...ball,
            velocity: newVelocity,
            position: addVectors(collisionPosition, scaleVector(newVelocity, timeLeft))
        };
    }
    return {
        ...ball,
        position: addVectors(ball.position, scaleVector(ball.velocity, duration))
    };
};


export const orderBallToMoveInRandomNotVerticalDirection = (ball: Ball, random: Random): Ball => ({
    ...ball,
    velocity: R.pipe(
        degToRad,
        radiansToUnitVector,
        R.partialRight(scaleVector, [ball.speed])
    )(randomInRanges([[0, 90], [91, 270], [271, 360]], random))
});
