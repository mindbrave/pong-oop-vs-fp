
import {Vec2, addVectors, scaleVector} from './math';


export type Paddle = {
    position: Vec2,
    velocity: Vec2,
    speed: number,
    width: number,
    height: number
};


export const orderPaddleToMoveUp = (paddle: Paddle): Paddle => ({
    ...paddle,
    velocity: {
        ...paddle.velocity,
        y: paddle.speed
    }
});


export const orderPaddleToMoveDown = (paddle: Paddle): Paddle => ({
    ...paddle,
    velocity: {
        ...paddle.velocity,
        y: -paddle.speed
    }
});


export const orderPaddleToStop = (paddle: Paddle): Paddle => ({
    ...paddle,
    velocity: {x: 0.0, y: 0.0}
});


export const movePaddle = (paddle: Paddle, duration: number): Paddle => ({
    ...paddle,
    position: addVectors(paddle.position, scaleVector(paddle.velocity, duration))
});
