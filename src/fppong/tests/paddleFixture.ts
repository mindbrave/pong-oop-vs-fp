
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
    width: 2,
    height: 10
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
