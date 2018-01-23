
import {Vec2, addVectors, scaleVector} from './math';
import {GameView} from './pong';


export type Paddle = {
    position: Vec2,
    velocity: Vec2,
    speed: number,
    size: {
        width: number,
        height: number
    }
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


export const movePaddle = (paddle: Paddle, gameView: GameView, duration: number): Paddle => {
    const nextPosition = addVectors(paddle.position, scaleVector(paddle.velocity, duration));
    if (nextPosition.y + paddle.size.height/2.0 > gameView.height) {
        return {
            ...paddle,
            position: {
                x: nextPosition.x,
                y: gameView.height - paddle.size.height/2.0
            }
        };
    }
    if (nextPosition.y - paddle.size.height/2.0 < 0) {
        return {
            ...paddle,
            position: {
                x: nextPosition.x,
                y: paddle.size.height/2.0
            }
        };
    }
    return {
        ...paddle,
        position: nextPosition
    };
};
