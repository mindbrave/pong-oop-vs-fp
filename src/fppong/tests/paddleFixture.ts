
import {Paddle} from '../paddle';


export const somePaddle = (): Paddle => ({
    position: {
        x: 50,
        y: 50
    },
    velocity: {
        x: 0,
        y: 0
    },
    speed: 5,
    size: {
        width: 2,
        height: 10
    }
});


export const isAtPosition = (paddle: Paddle, x: number, y: number): Paddle => ({
    ...paddle, position: {x, y}
});


export const hasSpeed = (paddle: Paddle, speed: number): Paddle => ({
    ...paddle, speed
});


export const hasVelocity = (paddle: Paddle, vx: number, vy: number): Paddle => ({
    ...paddle, velocity: {x: vx, y: vy}
});


export const isMovingUp = (paddle: Paddle): Paddle => hasVelocity(paddle, paddle.velocity.x, 10.0);


export const paddleHasSize = (paddle: Paddle, width: number, height: number): Paddle => ({
    ...paddle, size: {width, height}
});


export const paddleIsJustOverBottomEdge = (paddle: Paddle): Paddle =>
    isAtPosition(paddle, paddle.position.x, paddle.size.height/2.0 + 3);


export const paddleIsJustBeneathTopEdge = (paddle: Paddle, viewHeight: number): Paddle =>
    isAtPosition(paddle, paddle.position.x, viewHeight - paddle.size.height/2.0 - 3);
